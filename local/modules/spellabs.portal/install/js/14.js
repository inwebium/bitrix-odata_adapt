(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                hasErrors = true;
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        hasErrors = true;
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                if (!teardown) {
                    return Subscription.EMPTY;
                }
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        if (subscription._addParent(this)) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                subscriptions.push(subscription);
            }
            else {
                this._subscriptions = [subscription];
            }
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (_parent === parent) {
            return false;
        }
        else if (!_parent) {
            this._parent = parent;
            return true;
        }
        else if (!_parents) {
            this._parents = [parent];
            return true;
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
            return true;
        }
        return false;
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./src/app/enterprise/components/doings-informer/doings-informer.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/enterprise/components/doings-informer/doings-informer.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n  <ngsl-carousel\r\n    #ngslCarousel=\"ngsl-carousel\"\r\n    [(currentSlide)]=\"currentSlide\"\r\n    [isControl]=\"true\"\r\n    [trackIsUp]=\"carouselIsUp\"\r\n    [infinity]=\"true\"\r\n    [timing]=\"600\"\r\n    [autoPlay]=\"true\"\r\n    [autoPlayTiming]=\"10000\"\r\n  >\r\n    <ng-container *ngslCarouselControl>\r\n      <div class=\"admin-controls\">\r\n        <app-admin-controls\r\n          [item]=\"events.length > currentSlide ? events[currentSlide] : null\"\r\n          (create)=\"create()\"\r\n          (edit)=\"edit($event)\"\r\n          (remove)=\"remove($event)\"\r\n          [canBeDeleted]=\"events.length > currentSlide\"\r\n          [canBeEdited]=\"events.length > currentSlide\"\r\n          (activatedControls)=\"carouselToFront($event)\"\r\n        ></app-admin-controls>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngFor=\"let item of events\">\r\n      <ng-container *ngslCarouselDot>\r\n        <div class=\"content\"></div>\r\n      </ng-container>\r\n      <ng-container *ngslCarouselItem>\r\n        <div\r\n          class=\"m-carousel-card\"\r\n          [ngStyle]=\"{ 'background-image': 'url(' + item.coverUrl + ')' }\"\r\n        >\r\n          <div class=\"content\">\r\n            <div class=\"box\">\r\n              <a href=\"#\" target=\"_blank\" class=\"title\" appNgslDotdotdot>\r\n                {{ item.title }}\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ngsl-carousel>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/doings-informer/doings-informer.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/enterprise/components/doings-informer/doings-informer.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-carousel-card {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 100%; }\n\n.m-carousel-card .content {\n    box-sizing: border-box !important;\n    padding: 35px 85px;\n    height: 100%;\n    background: linear-gradient(to bottom, rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0)); }\n\n.m-carousel-card .content > .vertical-align {\n      display: table;\n      table-layout: fixed;\n      width: 100%;\n      height: 100%;\n      border-collapse: collapse; }\n\n.m-carousel-card .content > .vertical-align .box {\n        display: table-cell;\n        vertical-align: middle; }\n\n.m-carousel-card .vertical-align {\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    height: 100%;\n    border-collapse: collapse; }\n\n.m-carousel-card .box {\n    display: table-cell;\n    vertical-align: middle; }\n\n.m-carousel-card .title {\n    display: block;\n    text-decoration: none;\n    color: #fff;\n    font-weight: 600;\n    margin-bottom: 90px;\n    font-size: 34px;\n    line-height: 37px;\n    height: 111px;\n    overflow: hidden; }\n\n@media screen and (max-width: 1440px) {\n      .m-carousel-card .title {\n        font-size: 26px;\n        line-height: 29px;\n        height: 87px;\n        margin-bottom: 30px; } }\n\n.skeleton {\n  height: 100%;\n  position: relative;\n  box-sizing: border-box;\n  background-color: #ededed;\n  background-position: center;\n  background-size: cover;\n  background-image: url(\"/local/js/assets/banners/no-banners.svg\");\n  background-repeat: no-repeat; }\n\n.skeleton .title {\n    display: block;\n    text-decoration: none;\n    padding: 20px 50px;\n    padding-right: 120px; }\n\n.skeleton .title .text {\n      color: #fff;\n      font-weight: 600;\n      line-height: 30px;\n      box-sizing: border-box;\n      padding-left: 20px;\n      border-left: 3px solid #dd1e25; }\n\n.skeleton .description {\n    display: block;\n    text-decoration: none;\n    opacity: 0.7;\n    color: #F7F7F7;\n    background-color: #050505;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0;\n    right: 0;\n    box-sizing: border-box;\n    padding: 20px 50px; }\n\n.skeleton .description .line {\n      width: 75%;\n      height: 14px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.skeleton .description .line + .line {\n        margin-top: 5px;\n        width: 50%; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/doings-informer/doings-informer.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/enterprise/components/doings-informer/doings-informer.component.ts ***!
  \************************************************************************************/
/*! exports provided: DoingsInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoingsInformerComponent", function() { return DoingsInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/portal/portal.service */ "./src/app/services/portal/portal.service.ts");
/* harmony import */ var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/events/events.service */ "./src/app/services/events/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoingsInformerComponent = /** @class */ (function () {
    function DoingsInformerComponent(route, sharepointService, eventsService) {
        this.route = route;
        this.sharepointService = sharepointService;
        this.eventsService = eventsService;
        this.events = [];
        this.carouselIsUp = false;
        this.currentSlide = 0;
        this.webId = null;
        this.company = null;
        this.subscription = null;
    }
    DoingsInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.webId; }))
            .subscribe(function (webId) {
            _this.webId = webId;
            _this.load();
        });
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.company; }))
            .subscribe(function (company) {
            _this.company = company;
        });
    };
    DoingsInformerComponent.prototype.load = function () {
        var _this = this;
        this.eventsService.getItems({ top: 3, orderBy: [['Created', false]], webId: this.webId })
            .subscribe(function (events) { return _this.events = events; });
    };
    DoingsInformerComponent.prototype.carouselToFront = function (val) {
        this.carouselIsUp = val;
    };
    DoingsInformerComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/Lists/slEvents/NewForm.aspx?Source=")
            + encodeURIComponent(window.location.href);
    };
    DoingsInformerComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/Lists/slEvents/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    DoingsInformerComponent.prototype.remove = function (item) {
        var _this = this;
        this.eventsService.recycleItem(item, this.webId)
            .subscribe(function () { return _this.load(); });
    };
    DoingsInformerComponent.prototype.prepareLink = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)') || null;
    };
    DoingsInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doings-informer',
            template: __webpack_require__(/*! ./doings-informer.component.html */ "./src/app/enterprise/components/doings-informer/doings-informer.component.html"),
            styles: [__webpack_require__(/*! ./doings-informer.component.scss */ "./src/app/enterprise/components/doings-informer/doings-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"],
            src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]])
    ], DoingsInformerComponent);
    return DoingsInformerComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/components/enterprise-birthdays-informer/enterprise-birthdays-informer.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-birthdays-informer/enterprise-birthdays-informer.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-birthday\" [class.no-elements]=\"employees && !employees.length\">\r\n  <div\r\n    class=\"m-birthday__item\"\r\n    #itemRef\r\n    *ngFor=\"let item of employees\"\r\n    [class.is-disable]=\"item.birthdayDay !== currentDay\"\r\n  >\r\n    <div class=\"inner\">\r\n      <div class=\"avatar\">\r\n        <app-user-thumb\r\n          [photo]=\"item.photo\"\r\n          [showStatus]=\"false\"\r\n          [height]=\"'90px'\"\r\n          [width]=\"'90px'\"\r\n          [route]=\"item.profileRoute\"\r\n          [active]=\"item.reason == null || item.reason === ''\"\r\n        ></app-user-thumb>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"date\">{{ item.birthdayTitle }}</div>\r\n        <div class=\"name\">{{ item.fullName }}</div>\r\n        <div class=\"position\">{{ item.positionName }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-birthdays-informer/enterprise-birthdays-informer.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-birthdays-informer/enterprise-birthdays-informer.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-birthday {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding: 25px;\n  padding-top: 45px;\n  overflow: auto;\n  box-sizing: border-box;\n  height: 100%;\n  background-color: #FFF;\n  border: 1px solid #EFEFF0; }\n\n.m-birthday.no-elements {\n    background-image: url(\"/local/js/assets/banners/no-banners.svg\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    background-color: #DEDFE0; }\n\n.m-birthday__item {\n  padding: 8% 0;\n  position: relative;\n  font-size: 0;\n  border-bottom: 2px dotted #95989A; }\n\n.m-birthday__item:first-child {\n    padding-top: 0; }\n\n.m-birthday__item:last-child {\n    border-bottom: 0;\n    padding-bottom: 0; }\n\n.m-birthday__item.is-disable {\n    opacity: 0.5; }\n\n@media screen and (min-width: 1920px) {\n      .m-birthday__item.is-disable {\n        display: block; } }\n\n.m-birthday__item.is-disable .cover {\n      display: block; }\n\n.m-birthday__item .inner {\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    border-collapse: collapse; }\n\n.m-birthday__item .inner .avatar,\n    .m-birthday__item .inner .info {\n      box-sizing: border-box;\n      display: table-cell;\n      vertical-align: middle;\n      width: auto; }\n\n.m-birthday__item .inner .avatar {\n      width: 90px;\n      text-align: center; }\n\n.m-birthday__item .inner .info {\n      padding-left: 20px; }\n\n.m-birthday__item .inner .info .date {\n        font-size: 14px;\n        text-transform: uppercase;\n        color: #050505;\n        margin-bottom: 5px; }\n\n.m-birthday__item .inner .info .name {\n        font-size: 16px;\n        font-weight: 600;\n        color: #050505;\n        margin-bottom: 10px; }\n\n.m-birthday__item .inner .info .position {\n        display: block;\n        display: -webkit-box;\n        font-size: 14px;\n        line-height: 20px;\n        max-height: 40px;\n        -webkit-line-clamp: 2;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-birthdays-informer/enterprise-birthdays-informer.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-birthdays-informer/enterprise-birthdays-informer.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EnterpriseBirthdaysInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseBirthdaysInformerComponent", function() { return EnterpriseBirthdaysInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/employees/employees.service */ "./src/app/services/employees/employees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnterpriseBirthdaysInformerComponent = /** @class */ (function () {
    function EnterpriseBirthdaysInformerComponent(route, employeesService) {
        this.route = route;
        this.employeesService = employeesService;
        this.employees = null;
        this.company = null;
        this.subscription = null;
        this.currentDay = new Date().getDate();
    }
    EnterpriseBirthdaysInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.company; }))
            .subscribe(function (company) {
            _this.company = company;
            _this.load();
        });
    };
    EnterpriseBirthdaysInformerComponent.prototype.load = function () {
        var _this = this;
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var start = new Date().getDate();
        var finish = new Date(year, month, 0).getDate();
        this.employeesService.getItems({
            filter: "slBirthdayMonth eq " + month + " and slBirthdayDay ge " + start + " and slBirthdayDay le " + finish
                + (" and slCompany eq '" + this.company.code + "'"),
            orderBy: [['slBirthdayDay', true], ['slFullName', true]],
            top: 5000
        }).subscribe(function (birthdays) { return _this.employees = birthdays; });
    };
    EnterpriseBirthdaysInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterprise-birthdays-informer',
            template: __webpack_require__(/*! ./enterprise-birthdays-informer.component.html */ "./src/app/enterprise/components/enterprise-birthdays-informer/enterprise-birthdays-informer.component.html"),
            styles: [__webpack_require__(/*! ./enterprise-birthdays-informer.component.scss */ "./src/app/enterprise/components/enterprise-birthdays-informer/enterprise-birthdays-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeesService"]])
    ], EnterpriseBirthdaysInformerComponent);
    return EnterpriseBirthdaysInformerComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Внешний вид 100% идентичен блоку \"дни рождения\", отличается только фон-->\r\n<div class=\"m-hall-of-fame\" [class.no-elements]=\"employees && !employees.length\">\r\n  <div class=\"m-hall-of-fame__item\" *ngFor=\"let item of employees\">\r\n    <div class=\"inner\">\r\n      <div class=\"avatar\">\r\n        <app-user-thumb\r\n          [photo]=\"item.employeePhoto\"\r\n          [route]=\"item.employeeRoute\"\r\n          [height]=\"'90px'\"\r\n          [width]=\"'90px'\"\r\n          [showStatus]=\"false\"\r\n        ></app-user-thumb>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"name\">{{ item.employeeTitle }}</div>\r\n        <div class=\"position\" *ngIf=\"item.position\">{{ item.position }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-hall-of-fame {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding: 25px;\n  padding-top: 45px;\n  overflow: auto;\n  box-sizing: border-box;\n  height: 100%;\n  background-color: #DEDFE0;\n  border: 1px solid #EFEFF0; }\n\n.m-hall-of-fame.no-elements {\n    background-image: url(\"/local/js/assets/banners/no-banners.svg\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain; }\n\n.m-hall-of-fame__item {\n  padding: 8% 0;\n  position: relative;\n  font-size: 0;\n  border-bottom: 2px dotted #95989A; }\n\n.m-hall-of-fame__item:first-child {\n    padding-top: 0; }\n\n.m-hall-of-fame__item:last-child {\n    border-bottom: 0;\n    padding-bottom: 0; }\n\n.m-hall-of-fame__item.is-disable {\n    opacity: 0.5; }\n\n@media screen and (min-width: 1920px) {\n      .m-hall-of-fame__item.is-disable {\n        display: block; } }\n\n.m-hall-of-fame__item.is-disable .cover {\n      display: block; }\n\n.m-hall-of-fame__item .inner {\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    border-collapse: collapse; }\n\n.m-hall-of-fame__item .inner .avatar,\n    .m-hall-of-fame__item .inner .info {\n      box-sizing: border-box;\n      display: table-cell;\n      vertical-align: middle;\n      width: auto; }\n\n.m-hall-of-fame__item .inner .avatar {\n      width: 90px;\n      text-align: center; }\n\n.m-hall-of-fame__item .inner .info {\n      padding-left: 20px; }\n\n.m-hall-of-fame__item .inner .info .date {\n        font-size: 14px;\n        text-transform: uppercase;\n        color: #050505;\n        margin-bottom: 5px; }\n\n.m-hall-of-fame__item .inner .info .name {\n        font-size: 16px;\n        font-weight: 600;\n        color: #050505; }\n\n.m-hall-of-fame__item .inner .info .name + .position {\n          margin-top: 10px; }\n\n.m-hall-of-fame__item .inner .info .position {\n        display: block;\n        display: -webkit-box;\n        font-size: 14px;\n        line-height: 20px;\n        max-height: 40px;\n        -webkit-line-clamp: 2;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: EnterpriseHallOfFameInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseHallOfFameInformerComponent", function() { return EnterpriseHallOfFameInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_fames_fames_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fames/fames.service */ "./src/app/services/fames/fames.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnterpriseHallOfFameInformerComponent = /** @class */ (function () {
    function EnterpriseHallOfFameInformerComponent(route, famesService) {
        this.route = route;
        this.famesService = famesService;
        this.employees = null;
        this.webId = null;
        this.subscription = null;
    }
    EnterpriseHallOfFameInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.webId; }))
            .subscribe(function (webId) {
            _this.webId = webId;
            _this.load();
        });
    };
    EnterpriseHallOfFameInformerComponent.prototype.load = function () {
        var _this = this;
        this.famesService.getItems({ top: 3, orderBy: [['Created', false]], webId: this.webId })
            .subscribe(function (employees) { return _this.employees = employees; });
    };
    EnterpriseHallOfFameInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterprise-hall-of-fame-informer',
            template: __webpack_require__(/*! ./enterprise-hall-of-fame-informer.component.html */ "./src/app/enterprise/components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component.html"),
            styles: [__webpack_require__(/*! ./enterprise-hall-of-fame-informer.component.scss */ "./src/app/enterprise/components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_fames_fames_service__WEBPACK_IMPORTED_MODULE_3__["FamesService"]])
    ], EnterpriseHallOfFameInformerComponent);
    return EnterpriseHallOfFameInformerComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/components/enterprise-media-carousel/enterprise-media-carousel.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-media-carousel/enterprise-media-carousel.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-media-carousel\">\r\n  <ngsl-carousel\r\n    #ngslCarousel=\"ngsl-carousel\"\r\n    [infinity]=\"false\"\r\n    [showArrowsLastElement]=\"false\"\r\n    [trackIsUp]=\"carouselIsUp\"\r\n    [(currentSlide)]=\"currentSlide\"\r\n    [dots]=\"false\"\r\n    [isControl]=\"true\"\r\n  >\r\n    <ng-container *ngslCarouselControl>\r\n      <div class=\"admin-controls\">\r\n        <app-admin-controls\r\n          [item]=\"albums.length > currentSlide ? albums[currentSlide] : null\"\r\n          (create)=\"create()\"\r\n          (edit)=\"edit($event)\"\r\n          [canBeDeleted]=\"false\"\r\n          [canBeEdited]=\"true\"\r\n          (activatedControls)=\"carouselToFront($event)\"\r\n        ></app-admin-controls>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngFor=\"let item of albums; let i = index\">\r\n      <ng-container *ngslCarouselItem>\r\n        <div class=\"m-media-card\">\r\n          <div class=\"inner\" *ngIf=\"item && item.videoUrl !== undefined\">\r\n            <div class=\"url\" [routerLink]=\"['/videogallery/' + item.id]\"></div>\r\n            <div id=\"block\" class=\"content-media\">\r\n              <iframe *ngIf=\"item.isIFrame\" [src]=\"item.videoUrl | iframeVideo\"></iframe>\r\n              <video *ngIf=\"!item.isIFrame\" src=\"{{ item.videoUrl }}\"></video>\r\n            </div>\r\n          </div>\r\n          <div class=\"photo\" *ngIf=\"item && item.url !== undefined\">\r\n            <div\r\n              class=\"content\"\r\n              [ngStyle]=\"{ 'background-image': 'url(' + prepareLink(item.url) + ')' }\"\r\n            ></div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"albums && albums.length\">\r\n      <div class=\"info-block\" *ngslCarouselItem>\r\n        <a [routerLink]=\"['/mediagallery']\">Перейти в медиагалерею</a>\r\n      </div>\r\n    </ng-container>\r\n  </ngsl-carousel>\r\n  <ng-container *ngIf=\"albums && !albums.length\">\r\n    <div class=\"info-block\">\r\n      Нет ни одной фотографии\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-media-carousel/enterprise-media-carousel.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-media-carousel/enterprise-media-carousel.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-media-carousel {\n  height: 46% !important;\n  position: relative;\n  margin-bottom: 10%; }\n\n.l-media-carousel .custom-arrows {\n    position: relative;\n    position: absolute !important;\n    top: 0;\n    left: 0;\n    right: 0; }\n\n.l-media-carousel .custom-arrows:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 50%; }\n\n.l-media-carousel .custom-arrows > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"] {\n      position: absolute;\n      left: 0;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 40px;\n      height: 40px;\n      background-color: #768692;\n      opacity: .7;\n      border: 0;\n      cursor: pointer;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-image: url(\"/local/js/assets/icons/icon-carousel-arrow-right-white.svg\"); }\n\n.l-media-carousel .custom-arrows input[type=\"button\"]:hover {\n        opacity: .9; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"].is-disabled {\n        background-color: #C4BCB7; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"].is-disabled:hover {\n          opacity: .7; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"]:focus {\n        outline: none; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"].prev {\n        -webkit-transform: translateY(-50%) rotate(-180deg);\n            -ms-transform: translateY(-50%) rotate(-180deg);\n                transform: translateY(-50%) rotate(-180deg); }\n\n.l-media-carousel .custom-arrows input[type=\"button\"].next {\n        left: auto;\n        right: 0; }\n\n.info-block {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 100%;\n  height: 15px;\n  text-align: center; }\n\n.info-block a {\n    color: #dd1e25;\n    display: inline-block;\n    text-decoration: none;\n    font-size: 14px; }\n\n.m-media-card {\n  position: relative;\n  height: 100%; }\n\n.m-media-card .content-media,\n  .m-media-card .url {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.m-media-card .content-media {\n    z-index: 0; }\n\n.m-media-card .content-media iframe, .m-media-card .content-media video {\n      display: block;\n      width: 100%;\n      height: 100%; }\n\n.m-media-card .url {\n    cursor: pointer;\n    z-index: 1; }\n\n.m-media-card .photo {\n    cursor: pointer;\n    height: 100%;\n    position: relative; }\n\n.m-media-card .photo:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 55.55555556%; }\n\n.m-media-card .photo > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.m-media-card .photo .content {\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover; }\n\n.m-media-card .body {\n    padding: 15px 10%;\n    box-sizing: border-box; }\n\n.m-media-card .body .category {\n      margin-bottom: 5px; }\n\n.m-media-card .body .category a {\n        text-decoration: none;\n        text-transform: uppercase;\n        color: #dd1e25;\n        font-size: 14px; }\n\n.m-media-card .body .title {\n      font-size: 16px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 21px;\n      max-height: 42px;\n      display: block;\n      display: -webkit-box;\n      color: #403C39;\n      font-weight: 600;\n      margin-bottom: 8%; }\n\n@media (min-width: 1440px) {\n        .m-media-card .body .title {\n          font-size: calc( 0.0125 * 100vw + -2px);\n          line-height: calc( 0.0125 * 100vw + 3px);\n          max-height: calc( 0.01458333 * 100vw + 21px);\n          -webkit-line-clamp: 2; } }\n\n@media (min-width: 1920px) {\n        .m-media-card .body .title {\n          font-size: 22px;\n          line-height: 27px;\n          max-height: 54px; } }\n\n.m-media-card .body .description {\n      display: block;\n      display: -webkit-box;\n      max-height: 96px;\n      font-size: 14px;\n      line-height: 24px;\n      -webkit-line-clamp: 4;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #403C39; }\n\n.m-media-popup {\n  position: relative; }\n\n.m-media-popup:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-bottom: 71.42857143%; }\n\n.m-media-popup > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.m-media-popup .content {\n    padding: 15px;\n    box-sizing: border-box;\n    background-color: #fff; }\n\n.m-media-popup .title {\n    font-size: 14px;\n    color: #fff;\n    font-weight: 600;\n    position: absolute;\n    z-index: 10;\n    bottom: -50px;\n    height: 35px;\n    line-height: 35px;\n    display: inline-block;\n    background-color: #000;\n    padding: 0 15px;\n    border-radius: 15px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.m-media-popup .photo {\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    position: relative; }\n\n.m-media-popup .photo .controls {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      transition: bottom 0.3s;\n      padding: 15px 20px;\n      box-sizing: border-box;\n      height: 135px;\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(46, 46, 46, 0.8) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03000000', endColorstr='#cc585858', GradientType=0); }\n\n.m-media-popup .photo .controls .control {\n        position: absolute;\n        right: 20px;\n        bottom: 15px; }\n\n.m-media-popup .photo .controls .control .btn-download {\n          z-index: 100; }\n\n.m-media-popup .photo .controls .control .btn-download span {\n            text-transform: uppercase;\n            font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-media-carousel/enterprise-media-carousel.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-media-carousel/enterprise-media-carousel.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EnterpriseMediaCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseMediaCarouselComponent", function() { return EnterpriseMediaCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/content-types */ "./src/app/constants/content-types.ts");
/* harmony import */ var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/portal/portal.service */ "./src/app/services/portal/portal.service.ts");
/* harmony import */ var src_app_services_photo_library_photo_library_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/photo-library/photo-library.service */ "./src/app/services/photo-library/photo-library.service.ts");
/* harmony import */ var src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/videos/videos.service */ "./src/app/services/videos/videos.service.ts");
/* harmony import */ var src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/images/images.service */ "./src/app/services/images/images.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EnterpriseMediaCarouselComponent = /** @class */ (function () {
    function EnterpriseMediaCarouselComponent(route, sharepointService, photoLibraryService, videosService, imagesService, cookieService) {
        this.route = route;
        this.sharepointService = sharepointService;
        this.photoLibraryService = photoLibraryService;
        this.videosService = videosService;
        this.imagesService = imagesService;
        this.cookieService = cookieService;
        this.webId = null;
        this.company = null;
        this.subscription = null;
        this.albums = [];
        this.carouselIsUp = false;
        this.currentSlide = 0;
    }
    EnterpriseMediaCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.webId; }))
            .subscribe(function (webId) {
            _this.webId = webId;
            _this.load();
        });
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.company; }))
            .subscribe(function (company) {
            _this.company = company;
        });
    };
    EnterpriseMediaCarouselComponent.prototype.load = function () {
        var _this = this;
        this.photoLibraryService.getItems({ filter: "ContentType eq '" + encodeURI(src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_5__["contentTypes"].album) + "'", top: 1, webId: this.webId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (album) {
            return album.length > 0 ? _this.photoLibraryService.getFiles(album[0].id, _this.webId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        })).subscribe({
            next: function (value) {
                for (var i = 0; i < value.length; i++) {
                    _this.albums.push(value[i]);
                }
            },
            complete: function () {
                _this.videosService.getRandomItems({ top: 10, webId: _this.webId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (album) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(album);
                })).subscribe({
                    next: function (value) {
                        for (var i = 0; i < value.length; i++) {
                            _this.albums.push(value[i]);
                        }
                    },
                    complete: function () {
                        _this.albums.sort(function () { return 0.5 - Math.random(); });
                        _this.albums.length = 10;
                    }
                });
            }
        });
    };
    EnterpriseMediaCarouselComponent.prototype.create = function () {
        this.cookieService.set('splnu', '0', 1, '/');
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/slPhotoLibrary/Forms/Upload.aspx?ContentTypeId=0x012000BFB863A2672645ABBEA198EF8334172D&Source=")
            + encodeURIComponent(window.location.href);
    };
    EnterpriseMediaCarouselComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/slPhotoLibrary/Forms/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    EnterpriseMediaCarouselComponent.prototype.carouselToFront = function (val) {
        this.carouselIsUp = val;
    };
    EnterpriseMediaCarouselComponent.prototype.prepareLink = function (link) {
        return this.imagesService.prepareBackgroundUrl(link);
    };
    EnterpriseMediaCarouselComponent.prototype.getFileNameAndExtension = function (path) {
        var str = path
            .split('\\')
            .pop()
            .split('/')
            .pop();
        var ext = str.substr((Math.max(0, str.lastIndexOf('.')) || Infinity) + 1);
        var name = str.replace('.' + ext, '');
        return {
            ext: ext,
            name: name,
            full: name + "." + ext
        };
    };
    EnterpriseMediaCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterprise-media-carousel',
            template: __webpack_require__(/*! ./enterprise-media-carousel.component.html */ "./src/app/enterprise/components/enterprise-media-carousel/enterprise-media-carousel.component.html"),
            styles: [__webpack_require__(/*! ./enterprise-media-carousel.component.scss */ "./src/app/enterprise/components/enterprise-media-carousel/enterprise-media-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_6__["PortalService"],
            src_app_services_photo_library_photo_library_service__WEBPACK_IMPORTED_MODULE_7__["PhotoLibraryService"],
            src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_8__["VideosService"],
            src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_9__["ImagesService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], EnterpriseMediaCarouselComponent);
    return EnterpriseMediaCarouselComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/components/enterprise-news-informer/enterprise-news-informer.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-news-informer/enterprise-news-informer.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-review\">\r\n  <div class=\"l-review__item\" *ngFor=\"let item of news\">\r\n    <div class=\"m-review-card\">\r\n      <div class=\"header\">\r\n        <a href=\"#\" class=\"date\">\r\n          {{ item.newsPublicationDateTitle }}\r\n        </a>\r\n      </div>\r\n      <a href=\"#\" target=\"_blank\" class=\"title\">\r\n        {{ item.title }}\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"no-items\" *ngIf=\"news && !news.length\">\r\n    <div class=\"text\">Новостей нет</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-news-informer/enterprise-news-informer.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-news-informer/enterprise-news-informer.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.no-items {\n  position: relative;\n  margin: 0;\n  height: 870px; }\n\n@media screen and (max-width: 1440px) {\n    .no-items {\n      height: 680px; } }\n\n.no-items .text {\n    width: 100%;\n    font-size: 16px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-align: center; }\n\n.l-review {\n  height: 870px;\n  overflow: hidden; }\n\n@media screen and (max-width: 1440px) {\n    .l-review {\n      height: 680px; } }\n\n.l-review__item {\n  border-bottom: 2px dotted #95989A;\n  padding-bottom: 9%;\n  box-sizing: border-box; }\n\n.l-review__item + .l-review__item {\n    margin-top: 9%; }\n\n.l-review__item:last-of-type {\n    border-bottom: 0; }\n\n.m-review-card {\n  box-sizing: border-box;\n  border-bottom: 2px dotted #95989A; }\n\n.m-review-card:nth-child(1) {\n    padding-top: 0; }\n\n.m-review-card:nth-last-child(1) {\n    border-bottom: none;\n    padding-bottom: 0; }\n\n.m-review-card .header {\n    margin-bottom: 10px; }\n\n.m-review-card .header .date {\n      display: inline;\n      margin-right: 35px;\n      text-decoration: none;\n      text-transform: uppercase;\n      color: #768692;\n      font-size: 14px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 19px;\n      max-height: 19px; }\n\n@media (min-width: 1440px) {\n        .m-review-card .header .date {\n          font-size: calc( 0.00416667 * 100vw + 8px);\n          line-height: calc( 0.00416667 * 100vw + 13px);\n          max-height: calc( 0.00416667 * 100vw + 13px);\n          -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n        .m-review-card .header .date {\n          font-size: 16px;\n          line-height: 21px;\n          max-height: 21px; } }\n\n.m-review-card .title {\n    font-weight: bold;\n    color: #050505;\n    display: block;\n    display: -webkit-box;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 3;\n    overflow: hidden;\n    max-height: 63px;\n    text-decoration: none;\n    font-size: 16px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 21px;\n    max-height: 63px;\n    cursor: pointer; }\n\n@media (min-width: 1440px) {\n      .m-review-card .title {\n        font-size: calc( 0.0125 * 100vw + -2px);\n        line-height: calc( 0.0125 * 100vw + 3px);\n        max-height: calc( 0.01666667 * 100vw + 39px);\n        -webkit-line-clamp: 3; } }\n\n@media (min-width: 1920px) {\n      .m-review-card .title {\n        font-size: 22px;\n        line-height: 27px;\n        max-height: 81px; } }\n\n.m-review-card .title:hover {\n      color: #dd1e25;\n      transition: 0.3s; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-news-informer/enterprise-news-informer.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-news-informer/enterprise-news-informer.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EnterpriseNewsInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseNewsInformerComponent", function() { return EnterpriseNewsInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news/news.service */ "./src/app/services/news/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnterpriseNewsInformerComponent = /** @class */ (function () {
    function EnterpriseNewsInformerComponent(route, newsService) {
        this.route = route;
        this.newsService = newsService;
        this.webId = null;
        this.subscription = null;
        this.news = null;
    }
    EnterpriseNewsInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.webId; }))
            .subscribe(function (webId) {
            _this.webId = webId;
            _this.load();
        });
    };
    EnterpriseNewsInformerComponent.prototype.load = function () {
        var _this = this;
        this.newsService.getItems({
            filter: "slNewsPublicationDate le datetime'" + new Date().toISOString() + "'",
            top: 6,
            webId: this.webId
        }).subscribe(function (news) {
            _this.news = news;
        });
    };
    EnterpriseNewsInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterprise-news-informer',
            template: __webpack_require__(/*! ./enterprise-news-informer.component.html */ "./src/app/enterprise/components/enterprise-news-informer/enterprise-news-informer.component.html"),
            styles: [__webpack_require__(/*! ./enterprise-news-informer.component.scss */ "./src/app/enterprise/components/enterprise-news-informer/enterprise-news-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]])
    ], EnterpriseNewsInformerComponent);
    return EnterpriseNewsInformerComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/components/enterprise-page/enterprise-page.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-page/enterprise-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-home__row is-1dot4fr is-height\">\r\n  <div class=\"content\">\r\n    <div class=\"l-home__columns\">\r\n      <div class=\"l-home__column is-2fr\">\r\n        <div class=\"l-home__informer not-padding\">\r\n          <div class=\"l-home__informer-content\">\r\n            <div class=\"content\">\r\n              <app-top-carousel></app-top-carousel>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"l-home__column is-1fr\">\r\n        <div class=\"l-home__informer not-padding\">\r\n          <div class=\"l-home__informer-content\">\r\n            <div class=\"content\">\r\n              <app-incidents-informer></app-incidents-informer>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"l-home__row is-height\">\r\n  <div class=\"content\">\r\n    <div class=\"l-home__columns\">\r\n      <div class=\"l-home__column is-2fr\">\r\n        <div class=\"l-home__informers\">\r\n          <div class=\"l-home__informer half\">\r\n            <div class=\"l-home__informer-controls\">\r\n              <div class=\"l-home__informer-title\">События</div>\r\n              <div class=\"l-home__informer-action\">\r\n                <a href=\"#\">Все события</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"l-home__informer-content\">\r\n              <div class=\"content\">\r\n                <app-doings-informer></app-doings-informer>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"l-home__informers two-columns half\">\r\n            <div class=\"l-home__informer\">\r\n              <div class=\"l-home__informer-controls\">\r\n                <div class=\"l-home__informer-title\">Волонтерство</div>\r\n                <div class=\"l-home__informer-action\">\r\n                  <a [routerLink]=\"['/volunteering']\">Все проекты</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"l-home__informer-content\">\r\n                <app-volunteering-informer></app-volunteering-informer>\r\n              </div>\r\n            </div>\r\n            <div class=\"l-home__informer\">\r\n              <div class=\"l-home__informer-controls\">\r\n                <div class=\"l-home__informer-controls\">\r\n                  <div class=\"l-home__informer-title\">Опрос</div>\r\n                  <div class=\"l-home__informer-action\">\r\n                    <a href=\"#\">Все опросы</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"l-home__informer-content\">\r\n                <app-enterprise-polls-informer></app-enterprise-polls-informer>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"l-home__column is-1fr is-height\">\r\n        <div class=\"l-home__informer x2-padding\">\r\n          <div class=\"l-home__informer-controls\">\r\n            <div class=\"l-home__informer-title\">Новости предприятия</div>\r\n            <div class=\"l-home__informer-action\">\r\n              <a href=\"#\">Все новости</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"l-home__informer-content\">\r\n            <div class=\"l-home__informer\">\r\n              <div class=\"l-home__informer-content\">\r\n                <div class=\"content\">\r\n                  <app-enterprise-news-informer></app-enterprise-news-informer>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"l-home__row is-2dot44fr\">\r\n  <div class=\"content\">\r\n    <div class=\"l-home__columns\">\r\n      <div class=\"l-home__column not-border transparent is-2fr\">\r\n        <div class=\"l-home__informers two-columns\">\r\n          <div class=\"l-home__informer\">\r\n            <div class=\"l-home__informer-controls\">\r\n              <div class=\"l-home__informer-title\">Медиагалерея</div>\r\n              <div class=\"l-home__informer-action\">\r\n                <a [routerLink]=\"['/mediagallery']\">Все медиа</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"l-home__informer-content\">\r\n              <app-enterprise-media-carousel></app-enterprise-media-carousel>\r\n              <a href=\"#\" class=\"l-social-objects\">\r\n                <div class=\"image\" style=\"background-image: url(assets/banners/banner-social-objects.png)\">\r\n                  <div class=\"content\"></div>\r\n                </div>\r\n                <div class=\"title\">\r\n                  Социальные объекты\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"l-home__informer\">\r\n            <div class=\"l-home__informer-controls\">\r\n              <div class=\"l-home__informer-controls\">\r\n                <div class=\"l-home__informer-title\">Дни рождения</div>\r\n                <div class=\"l-home__informer-action\">\r\n                  <a href=\"#\">Все дни рождения</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"l-home__informer-content\">\r\n              <app-enterprise-birthdays-informer></app-enterprise-birthdays-informer>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"l-home__column is-1fr is-height\">\r\n        <div class=\"l-home__informers\">\r\n          <div class=\"l-home__informer not-border\">\r\n            <div class=\"l-home__informer-controls\">\r\n              <div class=\"l-home__informer-title\">Доска почета</div>\r\n              <div class=\"l-home__informer-action\">\r\n                <a href=\"#\">Все лучшие сотрудники</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"l-home__informer-content\">\r\n              <div class=\"content\">\r\n                <app-enterprise-hall-of-fame-informer></app-enterprise-hall-of-fame-informer>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"l-home__row is-2dot7fr\">\r\n  <div class=\"content\">\r\n    <div class=\"l-home__columns\">\r\n      <div class=\"l-home__column not-border transparent is-2fr\">\r\n        <div class=\"l-home__informers two-columns\">\r\n          <div class=\"l-home__informer\">\r\n            <div class=\"l-home__informer-content\">\r\n              <a href=\"#\" class=\"l-business-system\">\r\n                <div class=\"image\" style=\"background-image: url(assets/banners/banner-business-system.png)\">\r\n                  <div class=\"content\"></div>\r\n                </div>\r\n                <div class=\"title\" style=\"background-image: url(assets/banners/banner-business-system-title.png)\">\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"l-about\" style=\"background-image: url(assets/icons/icon-about-background.svg)\">\r\n                <div class=\"title\">\r\n                  О Комбинате\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"l-home__informer\">\r\n            <div class=\"l-home__informer-content\">\r\n              <a href=\"#\" class=\"l-leaders-institute\">\r\n                <div class=\"image\" style=\"background-image: url(assets/banners/banner-leaders-institute.png)\">\r\n                  <div class=\"content\"></div>\r\n                </div>\r\n                <div class=\"title\">\r\n                  Институт лидеров производства\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"l-portals\" style=\"background-image: url(assets/icons/icon-portals-background.svg)\">\r\n                <div class=\"title\">\r\n                  Информационные порталы\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"l-home__column is-1fr is-height\">\r\n        <div class=\"l-home__informers\">\r\n          <div class=\"l-home__informer\">\r\n            <div class=\"l-home__informer-content\">\r\n              <a href=\"#\" class=\"l-security-management\">\r\n                <div class=\"image\" style=\"background-image: url(assets/banners/banner-security-managment.png)\">\r\n                  <div class=\"content\"></div>\r\n                </div>\r\n                <div class=\"title\">\r\n                  Управление промышленной\r\n                  безопасностью, охраной труда\r\n                  и экологией\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"l-sertificates\" style=\"background-image: url(assets/icons/icon-certificates-background.svg)\">\r\n                <div class=\"title\">\r\n                  Сертификаты\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"l-home__row\">\r\n  <div class=\"content\">\r\n    <div class=\"l-home__columns\">\r\n      <div class=\"l-home__column not-border transparent is-2fr\">\r\n        <div class=\"l-home__informers two-columns\">\r\n          <div class=\"l-home__informer\">\r\n            <div class=\"l-home__informer-controls\">\r\n              <div class=\"l-home__informer-title\">Дополнительные разделы</div>\r\n            </div>\r\n            <div class=\"l-home__informer-content\">\r\n              <div class=\"l-additional-sections\">\r\n                <a href=\"#\">Внутренние вакансии</a>\r\n                <a href=\"#\">Корпоративные правила</a>\r\n                <a href=\"#\">Устойчивое развитие</a>\r\n                <a href=\"#\">Режим работы</a>\r\n                <a href=\"#\">Корпоративный спорт</a>\r\n                <a href=\"#\">Корпоративная модель концепции</a>\r\n                <a href=\"#\">Корпоративные конкурсы</a>\r\n                <a href=\"#\">Производственные показатели</a>\r\n                <a href=\"#\">КОФМИ</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"l-home__column is-1fr is-height\">\r\n        <div class=\"l-home__informers\">\r\n          <div class=\"l-home__informer\">\r\n            <div class=\"l-home__informer-content\">\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-page/enterprise-page.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-page/enterprise-page.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page {\n  background-color: #F7F7F7; }\n\n.l-home__row {\n  margin-bottom: 3%; }\n\n.l-home__row.is-1fr {\n    position: relative; }\n\n.l-home__row.is-1fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 20%; }\n\n.l-home__row.is-1fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-2fr {\n    position: relative; }\n\n.l-home__row.is-2fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 27.02702703%; }\n\n.l-home__row.is-2fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-4fr {\n    position: relative; }\n\n.l-home__row.is-4fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 80%; }\n\n.l-home__row.is-4fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-5dot88fr {\n    position: relative; }\n\n.l-home__row.is-5dot88fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 17.00680272%; }\n\n.l-home__row.is-5dot88fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-1dot3fr {\n    position: relative; }\n\n.l-home__row.is-1dot3fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 74.07407407%; }\n\n.l-home__row.is-1dot3fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-1dot4fr {\n    position: relative; }\n\n.l-home__row.is-1dot4fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 28.57142857%; }\n\n.l-home__row.is-1dot4fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-2dot44fr {\n    position: relative; }\n\n.l-home__row.is-2dot44fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 41.66666667%; }\n\n.l-home__row.is-2dot44fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-2dot7fr {\n    position: relative; }\n\n.l-home__row.is-2dot7fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 37.03703704%; }\n\n.l-home__row.is-2dot7fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-2dot91fr {\n    position: relative; }\n\n.l-home__row.is-2dot91fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 34.36426117%; }\n\n.l-home__row.is-2dot91fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row:last-child {\n    margin-bottom: 0; }\n\n.l-home__columns {\n  height: 1px;\n  min-height: 100%;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse; }\n\n.l-home__column {\n  display: table-cell;\n  vertical-align: top;\n  box-sizing: border-box;\n  height: 100%;\n  position: relative; }\n\n.l-home__column.is-2fr {\n    width: 66%; }\n\n.l-home__column.is-2fr + .is-1fr {\n      padding-left: 35px;\n      padding-right: 0; }\n\n@media screen and (max-width: 1440px) {\n        .l-home__column.is-2fr + .is-1fr {\n          padding-left: 25px; } }\n\n.l-home__column.is-2fr .x2-padding .l-home__informer-content > .content {\n      padding: 4.75%; }\n\n.l-home__column.is-1fr {\n    width: 34%;\n    padding-right: 35px; }\n\n@media screen and (max-width: 1440px) {\n      .l-home__column.is-1fr {\n        padding-right: 25px; } }\n\n.l-home__column.is-max-height > * {\n    height: 100%;\n    display: block; }\n\n.l-home__informers {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n  height: 100%; }\n\n.l-home__informers.half {\n    height: 55% !important; }\n\n.l-home__informer {\n  box-sizing: border-box; }\n\n.l-home__informer + .l-home__informer {\n    margin-top: 11%; }\n\n.two-columns .l-home__informer {\n    width: 50%;\n    padding-top: 0;\n    display: table-cell;\n    vertical-align: top;\n    padding-right: 17.5px; }\n\n@media screen and (max-width: 1440px) {\n      .two-columns .l-home__informer {\n        padding-right: 12.5px; } }\n\n.two-columns .l-home__informer + .l-home__informer {\n      padding-right: 0;\n      padding-left: 17.5px; }\n\n@media screen and (max-width: 1440px) {\n        .two-columns .l-home__informer + .l-home__informer {\n          padding-left: 12.5px; } }\n\n.is-height .l-home__informer {\n    height: 100%; }\n\n.l-home__informer.align-bottom {\n    position: absolute;\n    left: 35px;\n    bottom: 0;\n    right: 0; }\n\n@media screen and (max-width: 1440px) {\n      .l-home__informer.align-bottom {\n        left: 25px; } }\n\n.l-home__informer.half {\n    height: 40.5% !important;\n    margin-bottom: 5%; }\n\n.l-home__informer-controls {\n  display: table;\n  table-layout: auto;\n  width: 100%;\n  height: 45px;\n  border-collapse: collapse; }\n\n.l-home__informer-controls + .l-home__informer-content {\n    height: calc(100% - 45px); }\n\n.l-home__informer-title,\n.l-home__informer-action,\n.l-home__informer-tabs {\n  display: table-cell;\n  vertical-align: top; }\n\n.l-home__informer-title > *,\n  .l-home__informer-action > *,\n  .l-home__informer-tabs > * {\n    display: block;\n    height: 100%; }\n\n.l-home__informer-title {\n  color: #000;\n  font-size: 26px;\n  line-height: 28px; }\n\n@media screen and (max-width: 1440px) {\n    .l-home__informer-title {\n      font-size: 18px;\n      line-height: 20px; } }\n\n.l-home__informer-action {\n  text-align: right;\n  padding-right: 15px; }\n\n.l-home__informer-action a {\n    display: block;\n    text-decoration: none;\n    color: #dd1e25;\n    font-size: 16px;\n    line-height: 33px; }\n\n@media screen and (max-width: 1440px) {\n      .l-home__informer-action a {\n        font-size: 14px;\n        line-height: 20px; } }\n\n.l-home__informer-content {\n  height: 100%;\n  position: relative; }\n\n.l-home__informer-content:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-color: transparent;\n    z-index: -1; }\n\n.l-home__informer-content > .content {\n    background-color: #fff;\n    border: 1px solid #EFEFF0;\n    box-sizing: border-box;\n    height: 100%; }\n\n.l-home__informer-content > .content > * {\n      height: 100%;\n      display: block; }\n\n.not-padding .l-home__informer-content > .content {\n      padding: 0; }\n\n.not-border .l-home__informer-content > .content {\n      border: none; }\n\n.transparent .l-home__informer-content > .content {\n      background-color: transparent;\n      border: none; }\n\n.vertical-padding .l-home__informer-content > .content {\n      padding: 20px 0; }\n\n.x2-padding .l-home__informer-content > .content {\n      padding: 9.5%;\n      padding-bottom: 0; }\n\n.not-fill .l-home__informer-content > .content {\n      height: auto; }\n\n.l-home__media,\n.l-home__polls {\n  width: 50%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 40px; }\n\n.l-home__feedback,\n.l-home__hotline {\n  background-color: #DEDFE0;\n  border: 1px solid #EFEFF0;\n  border-left: 3px solid #dd1e25;\n  padding: 7% 9%;\n  background-repeat: no-repeat;\n  background-position: right 10% top 20%;\n  box-sizing: border-box;\n  height: 100%;\n  position: relative; }\n\n.l-home__feedback .title,\n  .l-home__hotline .title {\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 21px; }\n\n@media (min-width: 1440px) {\n      .l-home__feedback .title,\n      .l-home__hotline .title {\n        font-size: calc( 0.0125 * 100vw + -2px);\n        line-height: calc( 0.0125 * 100vw + 3px); } }\n\n@media (min-width: 1920px) {\n      .l-home__feedback .title,\n      .l-home__hotline .title {\n        font-size: 22px;\n        line-height: 27px; } }\n\n.l-home__feedback .description,\n  .l-home__hotline .description {\n    font-size: 16px;\n    line-height: 21px; }\n\n@media (min-width: 1440px) {\n      .l-home__feedback .description,\n      .l-home__hotline .description {\n        font-size: calc( 0.0125 * 100vw + -2px);\n        line-height: calc( 0.0125 * 100vw + 3px); } }\n\n@media (min-width: 1920px) {\n      .l-home__feedback .description,\n      .l-home__hotline .description {\n        font-size: 22px;\n        line-height: 27px; } }\n\n.l-home__feedback .send,\n  .l-home__hotline .send {\n    position: absolute;\n    left: 9%;\n    bottom: 10%; }\n\n.l-home__feedback .send input,\n    .l-home__hotline .send input {\n      font-size: 18px;\n      color: #fff;\n      background-color: #dd1e25;\n      border: none;\n      border-radius: 5px;\n      padding: 12% 24%;\n      box-sizing: border-box; }\n\n.l-review__item + .l-review__item {\n  margin-top: 20px; }\n\n.l-home__feedback {\n  padding: 5% 7%;\n  background-image: url(/local/js/assets/icons/icon-feedback-background.svg);\n  background-size: 10%;\n  background-position: right 5% top 20%; }\n\n.l-home__feedback .title {\n    margin-bottom: 20px; }\n\n.l-home__feedback .send {\n    left: 7%;\n    bottom: 10%; }\n\n.l-home__hotline {\n  background-image: url(/local/js/assets/icons/icon-hotline-background.svg);\n  background-size: 20%; }\n\n.l-home__hotline .title {\n    max-width: 75%; }\n\n.m-tabs {\n  height: 100%;\n  font-size: 0; }\n\n.m-tabs__line {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.is-inline .m-tabs__line {\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n\n.tab-size-small .m-tabs__line {\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n\n.m-tabs__item {\n  height: 100%;\n  display: inline-block;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #000;\n  padding: 0 10px;\n  border: none;\n  border-bottom: 7px solid transparent;\n  box-sizing: border-box;\n  margin: 0;\n  background-color: transparent;\n  cursor: pointer; }\n\n.tab-size-small .m-tabs__item {\n    text-transform: initial;\n    color: #768692;\n    border-bottom-width: 3px; }\n\n.tab-size-small .m-tabs__item.is-current-item {\n      color: #000;\n      font-weight: 400;\n      border-color: #dd1e25; }\n\n.m-tabs__item.is-current-item {\n    font-weight: 600;\n    border-color: #fda909; }\n\n.theme-black .m-tabs__item.is-current-item {\n      border-color: #da402b; }\n\n.theme-yellow .m-tabs__item.is-current-item {\n      border-color: #ffee00; }\n\n.m-tabs__item:focus {\n    outline: none; }\n\n.l-business-system {\n  display: block;\n  text-decoration: none;\n  height: 46%;\n  position: relative;\n  margin-bottom: 9%; }\n\n.l-business-system .image {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: relative; }\n\n.l-business-system .image:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 50%; }\n\n.l-business-system .image > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-business-system .image .content {\n      background: linear-gradient(rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0), rgba(5, 5, 5, 0.7)); }\n\n.l-business-system .title {\n    position: absolute;\n    left: 15px;\n    bottom: 15px;\n    width: 90%;\n    height: 50%;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center; }\n\n.l-social-objects,\n.l-leaders-institute,\n.l-security-management {\n  display: block;\n  text-decoration: none;\n  height: 46%;\n  position: relative;\n  margin-bottom: 9%; }\n\n.l-social-objects .image,\n  .l-leaders-institute .image,\n  .l-security-management .image {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: relative; }\n\n.l-social-objects .image:before,\n    .l-leaders-institute .image:before,\n    .l-security-management .image:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 50%; }\n\n.l-social-objects .image > .content,\n    .l-leaders-institute .image > .content,\n    .l-security-management .image > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-social-objects .image .content,\n    .l-leaders-institute .image .content,\n    .l-security-management .image .content {\n      background: linear-gradient(rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0)); }\n\n.l-social-objects .title,\n  .l-leaders-institute .title,\n  .l-security-management .title {\n    position: absolute;\n    left: 10%;\n    top: 14%;\n    width: 80%;\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: bold;\n    color: #FFFFFF; }\n\n@media (min-width: 1440px) {\n      .l-social-objects .title,\n      .l-leaders-institute .title,\n      .l-security-management .title {\n        font-size: calc( 0.0125 * 100vw + -2px);\n        line-height: calc( 0.0125 * 100vw + 6px); } }\n\n@media (min-width: 1920px) {\n      .l-social-objects .title,\n      .l-leaders-institute .title,\n      .l-security-management .title {\n        font-size: 22px;\n        line-height: 30px; } }\n\n.l-social-objects.l-social-objects,\n  .l-leaders-institute.l-social-objects,\n  .l-security-management.l-social-objects {\n    margin-bottom: 0; }\n\n.l-about,\n.l-portals,\n.l-sertificates {\n  display: block;\n  text-decoration: none;\n  height: 46%;\n  padding: 6% 9%;\n  box-sizing: border-box;\n  border: 1px solid #EFEFF0;\n  border-left: 3px solid #dd1e25;\n  background-color: #DEDFE0;\n  background-repeat: no-repeat;\n  background-position: left 12% bottom 15%;\n  background-size: 20%; }\n\n.l-about .title,\n  .l-portals .title,\n  .l-sertificates .title {\n    font-size: 16px;\n    font-weight: bold;\n    color: #000000; }\n\n@media (min-width: 1440px) {\n      .l-about .title,\n      .l-portals .title,\n      .l-sertificates .title {\n        font-size: calc( 0.0125 * 100vw + -2px); } }\n\n@media (min-width: 1920px) {\n      .l-about .title,\n      .l-portals .title,\n      .l-sertificates .title {\n        font-size: 22px; } }\n\n.l-additional-sections a {\n  display: inline-block;\n  width: 50%;\n  font-size: 16px;\n  color: #050505;\n  text-decoration: underline;\n  margin-bottom: 20px; }\n\n.l-additional-sections a:nth-child(even) {\n    padding-left: 35px;\n    box-sizing: border-box; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-page/enterprise-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-page/enterprise-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: EnterprisePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterprisePageComponent", function() { return EnterprisePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnterprisePageComponent = /** @class */ (function () {
    function EnterprisePageComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.sidebarService.handleSetSettings({ showSidebar: true, bgColor: '#f7f7f7' });
    }
    EnterprisePageComponent.prototype.ngOnInit = function () {
    };
    EnterprisePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterprise-page',
            template: __webpack_require__(/*! ./enterprise-page.component.html */ "./src/app/enterprise/components/enterprise-page/enterprise-page.component.html"),
            styles: [__webpack_require__(/*! ./enterprise-page.component.scss */ "./src/app/enterprise/components/enterprise-page/enterprise-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]])
    ], EnterprisePageComponent);
    return EnterprisePageComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/components/enterprise-polls-informer/enterprise-polls-informer.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-polls-informer/enterprise-polls-informer.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-polls-carousel\">\r\n  <ngsl-carousel\r\n    #ngslCarousel=\"ngsl-carousel\"\r\n    *ngIf=\"surveys && surveys.length > 0\"\r\n    [(currentSlide)]=\"currentSlide\"\r\n    [isControl]=\"true\"\r\n    [trackIsUp]=\"carouselIsUp\"\r\n    [infinity]=\"false\"\r\n    [arrows]=\"false\"\r\n  >\r\n    <ng-container *ngFor=\"let item of surveys\">\r\n      <ng-container *ngslCarouselControl>\r\n        <div class=\"admin-controls\">\r\n          <app-admin-controls\r\n            [item]=\"surveys.length > currentSlide ? surveys[currentSlide] : null\"\r\n            (create)=\"create()\"\r\n            (edit)=\"edit($event)\"\r\n            (remove)=\"remove($event)\"\r\n            [canBeDeleted]=\"surveys.length > currentSlide\"\r\n            [canBeEdited]=\"surveys.length > currentSlide\"\r\n            (activatedControls)=\"carouselToFront($event)\"\r\n          ></app-admin-controls>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngslCarouselItem>\r\n        <div class=\"m-polls-card\">\r\n          <div class=\"admin-controls\">\r\n            <app-admin-controls\r\n              [item]=\"item\"\r\n              (create)=\"create()\"\r\n              (edit)=\"edit($event)\"\r\n              (remove)=\"remove($event)\"\r\n            ></app-admin-controls>\r\n          </div>\r\n          <div class=\"photo\">\r\n            <div class=\"content\" [style.backgroundImage]=\"'url(' + item.image + ')'\">\r\n              <div class=\"slide-arrows\" *ngIf=\"surveys && surveys.length > 1\">\r\n                <div class=\"prev\">\r\n                  <div class=\"content\">\r\n                    <input\r\n                      type=\"button\"\r\n                      class=\"prev\"\r\n                      [class.is-disabled]=\"\r\n                        !ngslCarousel.infinity && ngslCarousel.currentSlide === 0\r\n                      \"\r\n                      (click)=\"ngslCarousel.prev()\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"next\">\r\n                  <div class=\"content\">\r\n                    <input\r\n                      type=\"button\"\r\n                      class=\"next\"\r\n                      (click)=\"ngslCarousel.next()\"\r\n                      [class.is-disabled]=\"\r\n                        !ngslCarousel.infinity &&\r\n                        ngslCarousel.currentSlide === surveys.length - 1\r\n                      \"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"title\" appNgslDotdotdot>\r\n              {{item.lookupSurveyTypeTitle}}\r\n            </div>\r\n            <div class=\"description\" appNgslDotdotdot>\r\n              {{ item.title }}\r\n            </div>\r\n            <div class=\"send\">\r\n              <a href=\"{{ item.link }}\" target=\"_blank\" target=\"_blank\">\r\n                Пройти\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ngsl-carousel>\r\n  <div class=\"not-elements\" *ngIf=\"surveys && surveys.length == 0\">\r\n    <div class=\"admin-controls\">\r\n      <app-admin-controls\r\n        (create)=\"create()\"\r\n        (edit)=\"edit($event)\"\r\n        (remove)=\"remove($event)\"\r\n        [canBeDeleted]=\"false\"\r\n        [canBeEdited]=\"false\"\r\n        (activatedControls)=\"carouselToFront($event)\"\r\n      ></app-admin-controls>\r\n    </div>\r\n    <div class=\"text\">\r\n      В настоящий момент опрос не проводится\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-polls-informer/enterprise-polls-informer.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-polls-informer/enterprise-polls-informer.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-polls-card {\n  height: 100%;\n  background-color: #FFF; }\n\n.m-polls-card .photo {\n    height: 46%;\n    position: relative; }\n\n.m-polls-card .photo:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 55.55555556%; }\n\n.m-polls-card .photo > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.m-polls-card .photo .content {\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover; }\n\n.m-polls-card .body {\n    height: 54%;\n    padding: 20px 30px;\n    box-sizing: border-box; }\n\n.m-polls-card .body .title {\n      font-size: 12px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 14px;\n      max-height: 14px;\n      color: #050505;\n      text-transform: uppercase;\n      margin-bottom: 10px; }\n\n@media (min-width: 1440px) {\n        .m-polls-card .body .title {\n          font-size: calc( 0.00833333 * 100vw + 0px);\n          line-height: calc( 0.00833333 * 100vw + 2px);\n          max-height: calc( 0.00833333 * 100vw + 2px);\n          -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n        .m-polls-card .body .title {\n          font-size: 16px;\n          line-height: 18px;\n          max-height: 18px; } }\n\n.m-polls-card .body .description {\n      font-weight: 600;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #050505;\n      margin-bottom: 10%;\n      font-size: 16px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 22px;\n      max-height: 66px; }\n\n@media (min-width: 1440px) {\n        .m-polls-card .body .description {\n          font-size: calc( 0.0125 * 100vw + -2px);\n          line-height: calc( 0.0125 * 100vw + 4px);\n          max-height: calc( 0.0125 * 100vw + 48px);\n          -webkit-line-clamp: 3; } }\n\n@media (min-width: 1920px) {\n        .m-polls-card .body .description {\n          font-size: 22px;\n          line-height: 28px;\n          max-height: 84px; } }\n\n.m-polls-card .body .send a {\n      display: inline-block;\n      text-decoration: none;\n      font-size: 18px;\n      border: 1px solid #dd1e25;\n      background-color: transparent;\n      color: #dd1e25;\n      border-radius: 3px;\n      padding: 4% 15%;\n      box-sizing: border-box; }\n\n.l-polls-carousel {\n  height: 100%;\n  position: relative; }\n\n.l-polls-carousel:hover .slide-arrows {\n    display: block; }\n\n.l-polls-carousel .slide-arrows {\n    display: none; }\n\n.l-polls-carousel .slide-arrows .prev,\n    .l-polls-carousel .slide-arrows .next {\n      position: absolute !important;\n      top: 50%;\n      left: 0;\n      width: 10%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      position: relative; }\n\n.l-polls-carousel .slide-arrows .prev:before,\n      .l-polls-carousel .slide-arrows .next:before {\n        display: block;\n        content: \" \";\n        width: 100%;\n        padding-bottom: 100%; }\n\n.l-polls-carousel .slide-arrows .prev > .content,\n      .l-polls-carousel .slide-arrows .next > .content {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"],\n      .l-polls-carousel .slide-arrows .next input[type=\"button\"] {\n        z-index: 10;\n        width: 40px;\n        height: 40px;\n        background-color: #4D4E4D;\n        opacity: .7;\n        border: 0;\n        cursor: pointer;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-image: url(\"/local/js/assets/icons/icon-carousel-arrow-right-white.svg\"); }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"]:hover,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"]:hover {\n          opacity: .9; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].is-disabled,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"].is-disabled {\n          background-color: #C4BCB7; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].is-disabled:hover,\n          .l-polls-carousel .slide-arrows .next input[type=\"button\"].is-disabled:hover {\n            opacity: .7; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"]:focus,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"]:focus {\n          outline: none; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].prev,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"].prev {\n          -webkit-transform: translateY(-50%) rotate(-180deg);\n              -ms-transform: translateY(-50%) rotate(-180deg);\n                  transform: translateY(-50%) rotate(-180deg); }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].next,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"].next {\n          left: auto;\n          right: 0; }\n\n.l-polls-carousel .slide-arrows .next {\n      right: 0;\n      left: auto; }\n\n.not-elements {\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-color: #DEDFE0;\n  background-image: url(\"/local/js/assets/banners/no-banners.svg\"); }\n\n.not-elements:after {\n    content: \"\";\n    display: block;\n    background: rgba(0, 0, 0, 0.2);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 0; }\n\n.not-elements .text {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-align: center;\n    width: 100%;\n    color: #fff;\n    font-size: 16px;\n    font-weight: 600;\n    z-index: 1; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/enterprise-polls-informer/enterprise-polls-informer.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/enterprise/components/enterprise-polls-informer/enterprise-polls-informer.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EnterprisePollsInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterprisePollsInformerComponent", function() { return EnterprisePollsInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/portal/portal.service */ "./src/app/services/portal/portal.service.ts");
/* harmony import */ var src_app_services_surveys_surveys_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/surveys/surveys.service */ "./src/app/services/surveys/surveys.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnterprisePollsInformerComponent = /** @class */ (function () {
    function EnterprisePollsInformerComponent(route, sharepointService, surveysService) {
        this.route = route;
        this.sharepointService = sharepointService;
        this.surveysService = surveysService;
        this.surveys = null;
        this.carouselIsUp = false;
        this.currentSlide = 0;
        this.webId = null;
        this.company = null;
        this.subscription = null;
    }
    EnterprisePollsInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.webId; }))
            .subscribe(function (webId) {
            _this.webId = webId;
            _this.load();
        });
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.company; }))
            .subscribe(function (company) {
            _this.company = company;
        });
    };
    EnterprisePollsInformerComponent.prototype.load = function () {
        var _this = this;
        this.surveysService.getItems({ top: 4, orderBy: [['Created', false]], webId: this.webId })
            .subscribe(function (surveys) { return _this.surveys = surveys; });
    };
    EnterprisePollsInformerComponent.prototype.carouselToFront = function (val) {
        this.carouselIsUp = val;
    };
    EnterprisePollsInformerComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/Lists/slSurvey/NewForm.aspx?Source=")
            + encodeURIComponent(window.location.href);
    };
    EnterprisePollsInformerComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/Lists/slSurvey/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    EnterprisePollsInformerComponent.prototype.remove = function (item) {
        var _this = this;
        this.surveysService.recycleItem(item, this.webId)
            .subscribe(function () { return _this.load(); });
    };
    EnterprisePollsInformerComponent.prototype.prepareLink = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)') || null;
    };
    EnterprisePollsInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterprise-polls-informer',
            template: __webpack_require__(/*! ./enterprise-polls-informer.component.html */ "./src/app/enterprise/components/enterprise-polls-informer/enterprise-polls-informer.component.html"),
            styles: [__webpack_require__(/*! ./enterprise-polls-informer.component.scss */ "./src/app/enterprise/components/enterprise-polls-informer/enterprise-polls-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"],
            src_app_services_surveys_surveys_service__WEBPACK_IMPORTED_MODULE_4__["SurveysService"]])
    ], EnterprisePollsInformerComponent);
    return EnterprisePollsInformerComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/components/incidents-informer/incidents-informer.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/enterprise/components/incidents-informer/incidents-informer.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-incidents\">\r\n  <div class=\"header\">Происшествия</div>\r\n  <div class=\"body\">\r\n    <div class=\"m-incident-card\">\r\n      <div class=\"description\" *ngIf=\"counter != null && incident == null\">{{ getEnding(counter, ['день', 'дня', 'дней']) }} без происшествий </div>\r\n      <div class=\"description\" *ngIf=\"counter == null && incident == null\">В УК без происшествий</div>\r\n      <div class=\"description\" *ngIf=\"counter == null && incident != null\" appNgslDotdotdot>{{incident.title}}</div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"footer\">\r\n    <a [routerLink]=\"['/incidents']\" class=\"more\">Все происшествия</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/incidents-informer/incidents-informer.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/enterprise/components/incidents-informer/incidents-informer.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-incidents {\n  background-color: #fff;\n  height: 100%;\n  position: relative; }\n\n.m-incidents .header {\n    height: 25%;\n    font-size: 18px;\n    padding: 5% 7%;\n    box-sizing: border-box; }\n\n@media (min-width: 1440px) {\n      .m-incidents .header {\n        font-size: 5px;\n        font-size: calc( 0.01666667 * 100vw + -6px); } }\n\n@media (min-width: 1920px) {\n      .m-incidents .header {\n        font-size: 26px; } }\n\n.m-incidents .body {\n    height: 50%;\n    box-sizing: border-box;\n    background-color: #DEDFE0; }\n\n.m-incidents .footer {\n    height: 25%;\n    box-sizing: border-box;\n    font-size: 14px;\n    padding: 0 7%;\n    position: relative; }\n\n.m-incidents .footer .more {\n      display: block;\n      font-size: 16px;\n      text-decoration: none;\n      color: #dd1e25;\n      width: 100%;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%); }\n\n.m-incidents .footer input[type=\"button\"] {\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      height: 17px;\n      width: 17px;\n      border: none;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: contain;\n      cursor: pointer;\n      background-color: transparent;\n      background-image: url(/local/js/assets/icons/icon-arrow-right-gray-flat.svg); }\n\n.m-incidents .footer input[type=\"button\"]:focus {\n        outline: none; }\n\n.m-incidents .footer input[type=\"button\"]:first-child {\n        left: 10%;\n        -webkit-transform: translateY(-50%) rotate(-180deg);\n            -ms-transform: translateY(-50%) rotate(-180deg);\n                transform: translateY(-50%) rotate(-180deg); }\n\n.m-incidents .footer input[type=\"button\"]:last-child {\n        right: 10%; }\n\n.m-incidents:hover .admin-controls {\n    display: block; }\n\n.admin-controls {\n  display: none; }\n\n.m-incidents-skeleton {\n  background-color: #fff;\n  height: 100%;\n  position: relative; }\n\n.m-incidents-skeleton .header {\n    height: 25%;\n    font-weight: 600;\n    padding: 5% 7%;\n    box-sizing: border-box; }\n\n.m-incidents-skeleton .header .line {\n      width: 55%;\n      height: 16px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.m-incidents-skeleton .body {\n    height: 55%;\n    box-sizing: border-box;\n    background-color: #DEDFE0; }\n\n.m-incidents-skeleton .footer {\n    height: 20%;\n    box-sizing: border-box;\n    font-size: 16px;\n    text-align: center;\n    position: relative; }\n\n@media (min-width: 1440px) {\n      .m-incidents-skeleton .footer {\n        font-size: calc( 0.0125 * 100vw + -2px); } }\n\n@media (min-width: 1920px) {\n      .m-incidents-skeleton .footer {\n        font-size: 22px; } }\n\n.m-incidents-skeleton .footer .text {\n      width: 100%;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      text-decoration: none; }\n\n.m-incidents-skeleton .footer .text .line {\n        width: 35px;\n        height: 14px;\n        background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n        background-size: 600px;\n        -webkit-animation: shine-avatar 2s infinite ease-out;\n                animation: shine-avatar 2s infinite ease-out; }\n\n.m-incident-card {\n  background-color: #fff;\n  height: 100%;\n  padding: 7%;\n  box-sizing: border-box;\n  background-color: #DEDFE0;\n  position: relative; }\n\n.m-incident-card .date {\n    font-size: 14px;\n    text-transform: uppercase;\n    color: #1901B4;\n    margin-bottom: 3%; }\n\n.m-incident-card .date .line {\n      width: 75%;\n      height: 14px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.m-incident-card .description {\n    color: #768692;\n    font-size: 22px;\n    line-height: 26px;\n    height: 104px;\n    font-weight: 600;\n    overflow: hidden; }\n\n@media screen and (max-width: 1440px) {\n      .m-incident-card .description {\n        line-height: 20px;\n        font-size: 16px;\n        height: 80px; } }\n\n.m-incident-card-skeleton {\n  background-color: #fff;\n  height: 100%;\n  padding: 5% 7%;\n  padding-bottom: 7%;\n  box-sizing: border-box;\n  background-color: #DEDFE0; }\n\n.m-incident-card-skeleton .date {\n    margin-bottom: 3%; }\n\n.m-incident-card-skeleton .date .line {\n      width: 75%;\n      height: 14px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.m-incident-card-skeleton .description {\n    font-size: 14px;\n    line-height: 24px;\n    max-height: 48px; }\n\n.m-incident-card-skeleton .description .line {\n      width: 75%;\n      height: 14px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.m-incident-card-skeleton .description .line + .line {\n        margin-top: 5px;\n        width: 55%; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/incidents-informer/incidents-informer.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/enterprise/components/incidents-informer/incidents-informer.component.ts ***!
  \******************************************************************************************/
/*! exports provided: IncidentsInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsInformerComponent", function() { return IncidentsInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_incidents_incidents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/incidents/incidents.service */ "./src/app/services/incidents/incidents.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncidentsInformerComponent = /** @class */ (function () {
    function IncidentsInformerComponent(route, incidentsService) {
        this.route = route;
        this.incidentsService = incidentsService;
        this.counter = null;
        this.incident = null;
        this.webId = null;
        this.subscription = null;
    }
    IncidentsInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.webId; }))
            .subscribe(function (webId) {
            _this.webId = webId;
            _this.load();
        });
    };
    IncidentsInformerComponent.prototype.load = function () {
        var _this = this;
        this.incidentsService.getItems({ top: 1, orderBy: [['slDate', false]], webId: this.webId })
            .subscribe(function (incidents) {
            if (incidents.length > 0) {
                var today = moment__WEBPACK_IMPORTED_MODULE_3__();
                var date = moment__WEBPACK_IMPORTED_MODULE_3__(incidents[0].date);
                var counter = today.diff(date, 'days');
                if (counter > 10) {
                    _this.counter = counter;
                }
                else {
                    _this.incident = incidents[0];
                }
            }
            else {
                _this.counter = null;
                _this.incident = null;
            }
        });
    };
    IncidentsInformerComponent.prototype.getEnding = function (number, endings) {
        var ending;
        if (number) {
            number = number % 100;
            if (number >= 11 && number <= 19) {
                ending = endings[2];
            }
            else {
                var i = number % 10;
                switch (i) {
                    case 1:
                        ending = endings[0];
                        break;
                    case 2:
                    case 3:
                    case 4:
                        ending = endings[1];
                        break;
                    default:
                        ending = endings[2];
                }
            }
            ending = number + " " + ending;
        }
        else {
            ending = "\u041D\u0435\u0442 " + endings[2];
        }
        return ending;
    };
    IncidentsInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incidents-informer',
            template: __webpack_require__(/*! ./incidents-informer.component.html */ "./src/app/enterprise/components/incidents-informer/incidents-informer.component.html"),
            styles: [__webpack_require__(/*! ./incidents-informer.component.scss */ "./src/app/enterprise/components/incidents-informer/incidents-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_incidents_incidents_service__WEBPACK_IMPORTED_MODULE_4__["IncidentsService"]])
    ], IncidentsInformerComponent);
    return IncidentsInformerComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/components/top-carousel/top-carousel.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/enterprise/components/top-carousel/top-carousel.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n  <ngsl-carousel\r\n    #ngslCarousel=\"ngsl-carousel\"\r\n    [(currentSlide)]=\"currentSlide\"\r\n    [isControl]=\"true\"\r\n    [trackIsUp]=\"carouselIsUp\"\r\n    [infinity]=\"true\"\r\n    [timing]=\"600\"\r\n    [autoPlay]=\"true\"\r\n    [autoPlayTiming]=\"10000\"\r\n  >\r\n    <ng-container *ngslCarouselControl>\r\n      <div class=\"admin-controls\">\r\n        <app-admin-controls\r\n          [item]=\"banners.length > currentSlide ? banners[currentSlide] : null\"\r\n          (create)=\"create()\"\r\n          (edit)=\"edit($event)\"\r\n          (remove)=\"remove($event)\"\r\n          [canBeDeleted]=\"banners.length > currentSlide\"\r\n          [canBeEdited]=\"banners.length > currentSlide\"\r\n          (activatedControls)=\"carouselToFront($event)\"\r\n        ></app-admin-controls>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngFor=\"let item of banners\">\r\n      <ng-container *ngslCarouselDot>\r\n        <div class=\"content\"></div>\r\n      </ng-container>\r\n      <ng-container *ngslCarouselItem>\r\n        <div\r\n          class=\"m-carousel-card\"\r\n          [ngStyle]=\"{ 'background-image': 'url(' + item.imageUrl + ')' }\"\r\n        >\r\n          <div class=\"content\">\r\n            <div class=\"box\">\r\n              <a href=\"{{ item.url }}\" target=\"_blank\" class=\"title\" appNgslDotdotdot>\r\n                {{ item.title }}\r\n              </a>\r\n              <div class=\"goto\">\r\n                <input type=\"button\" value=\"Подробнее\" (click)=\"goTo(item)\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ngsl-carousel>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/top-carousel/top-carousel.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/enterprise/components/top-carousel/top-carousel.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-carousel-card {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 100%; }\n\n.m-carousel-card .content {\n    box-sizing: border-box !important;\n    padding: 35px 85px;\n    height: 100%;\n    background: linear-gradient(to bottom, rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0)); }\n\n.m-carousel-card .content > .vertical-align {\n      display: table;\n      table-layout: fixed;\n      width: 100%;\n      height: 100%;\n      border-collapse: collapse; }\n\n.m-carousel-card .content > .vertical-align .box {\n        display: table-cell;\n        vertical-align: middle; }\n\n.m-carousel-card .vertical-align {\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    height: 100%;\n    border-collapse: collapse; }\n\n.m-carousel-card .box {\n    display: table-cell;\n    vertical-align: middle; }\n\n.m-carousel-card .title {\n    display: block;\n    text-decoration: none;\n    color: #fff;\n    font-weight: 600;\n    margin-bottom: 90px;\n    font-size: 34px;\n    line-height: 37px;\n    height: 111px;\n    overflow: hidden; }\n\n@media screen and (max-width: 1440px) {\n      .m-carousel-card .title {\n        margin-bottom: 30px;\n        font-size: 26px;\n        line-height: 29px;\n        height: 87px; } }\n\n.m-carousel-card .goto input {\n    font-size: 14px;\n    line-height: 18px;\n    color: #fff;\n    background-color: #dd1e25;\n    border: none;\n    border-radius: 3px;\n    padding: 14px 30px;\n    box-sizing: border-box; }\n\n@media (min-width: 1440px) {\n      .m-carousel-card .goto input {\n        font-size: calc( 0.00833333 * 100vw + 2px);\n        line-height: calc( 0.00833333 * 100vw + 6px); } }\n\n@media (min-width: 1920px) {\n      .m-carousel-card .goto input {\n        font-size: 18px;\n        line-height: 22px; } }\n\n.skeleton {\n  height: 100%;\n  position: relative;\n  box-sizing: border-box;\n  background-color: #ededed;\n  background-position: center;\n  background-size: cover;\n  background-image: url(\"/local/js/assets/banners/no-banners.svg\");\n  background-repeat: no-repeat; }\n\n.skeleton .title {\n    display: block;\n    text-decoration: none;\n    padding: 20px 50px;\n    padding-right: 120px; }\n\n.skeleton .title .text {\n      color: #fff;\n      font-weight: 600;\n      line-height: 30px;\n      box-sizing: border-box;\n      padding-left: 20px;\n      border-left: 3px solid #dd1e25; }\n\n.skeleton .description {\n    display: block;\n    text-decoration: none;\n    opacity: 0.7;\n    color: #F7F7F7;\n    background-color: #050505;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0;\n    right: 0;\n    box-sizing: border-box;\n    padding: 20px 50px; }\n\n.skeleton .description .line {\n      width: 75%;\n      height: 14px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.skeleton .description .line + .line {\n        margin-top: 5px;\n        width: 50%; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/top-carousel/top-carousel.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/enterprise/components/top-carousel/top-carousel.component.ts ***!
  \******************************************************************************/
/*! exports provided: TopCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopCarouselComponent", function() { return TopCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/portal/portal.service */ "./src/app/services/portal/portal.service.ts");
/* harmony import */ var src_app_services_banners_banners_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/banners/banners.service */ "./src/app/services/banners/banners.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopCarouselComponent = /** @class */ (function () {
    function TopCarouselComponent(route, sharepointService, bannersService, zone, router) {
        this.route = route;
        this.sharepointService = sharepointService;
        this.bannersService = bannersService;
        this.zone = zone;
        this.router = router;
        this.carouselIsUp = false;
        this.currentSlide = 0;
        this.webId = null;
        this.company = null;
        this.subscription = null;
        this.banners = [];
    }
    TopCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.webId; }))
            .subscribe(function (webId) {
            _this.webId = webId;
            _this.load();
        });
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.company; }))
            .subscribe(function (company) {
            _this.company = company;
        });
    };
    TopCarouselComponent.prototype.load = function () {
        var _this = this;
        this.bannersService.getItems({ filter: 'slShow eq 1', webId: this.webId })
            .subscribe(function (banners) {
            _this.currentSlide = 0;
            _this.banners = banners;
        });
    };
    TopCarouselComponent.prototype.carouselToFront = function (val) {
        this.carouselIsUp = val;
    };
    TopCarouselComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/Lists/slBanners/NewForm.aspx?Source=")
            + encodeURIComponent(window.location.href);
    };
    TopCarouselComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/Lists/slBanners/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    TopCarouselComponent.prototype.remove = function (item) {
        var _this = this;
        this.bannersService.recycleItem(item, this.webId)
            .subscribe(function () { return _this.load(); });
    };
    TopCarouselComponent.prototype.prepareLink = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)') || null;
    };
    TopCarouselComponent.prototype.goTo = function (item) {
        var _this = this;
        this.zone.run(function () {
            var link = item.url;
            if (window.location.href.indexOf('/PortalPages/') > 0
                && link.indexOf('/PortalPages/') >= 0
                && link.indexOf('#') >= 0) {
                _this.router.navigate([link.split('#')[1]]);
            }
            else {
                window.location.href = link;
            }
        });
    };
    TopCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-carousel',
            template: __webpack_require__(/*! ./top-carousel.component.html */ "./src/app/enterprise/components/top-carousel/top-carousel.component.html"),
            styles: [__webpack_require__(/*! ./top-carousel.component.scss */ "./src/app/enterprise/components/top-carousel/top-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"],
            src_app_services_banners_banners_service__WEBPACK_IMPORTED_MODULE_4__["BannersService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TopCarouselComponent);
    return TopCarouselComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/components/volunteering-informer/volunteering-informer.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/enterprise/components/volunteering-informer/volunteering-informer.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-polls-carousel\">\r\n  <ngsl-carousel\r\n    #ngslCarousel=\"ngsl-carousel\"\r\n    *ngIf=\"volunteering && volunteering.length > 0\"\r\n    [(currentSlide)]=\"currentSlide\"\r\n    [isControl]=\"true\"\r\n    [trackIsUp]=\"carouselIsUp\"\r\n    [infinity]=\"false\"\r\n    [arrows]=\"false\"\r\n  >\r\n    <ng-container *ngFor=\"let item of volunteering\">\r\n      <ng-container *ngslCarouselControl>\r\n        <div class=\"admin-controls\">\r\n          <app-admin-controls\r\n            [item]=\"volunteering.length > currentSlide ? volunteering[currentSlide] : null\"\r\n            (create)=\"create()\"\r\n            (edit)=\"edit($event)\"\r\n            (remove)=\"remove($event)\"\r\n            [canBeDeleted]=\"volunteering.length > currentSlide\"\r\n            [canBeEdited]=\"volunteering.length > currentSlide\"\r\n            (activatedControls)=\"carouselToFront($event)\"\r\n          ></app-admin-controls>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngslCarouselItem>\r\n        <div class=\"m-polls-card\">\r\n          <div class=\"admin-controls\">\r\n            <app-admin-controls\r\n              [item]=\"item\"\r\n              (create)=\"create()\"\r\n              (edit)=\"edit($event)\"\r\n              (remove)=\"remove($event)\"\r\n            ></app-admin-controls>\r\n          </div>\r\n          <div class=\"photo\">\r\n            <div class=\"content\" [style.backgroundImage]=\"'url(' + item.cover + ')'\">\r\n              <div class=\"slide-arrows\" *ngIf=\"volunteering && volunteering.length > 1\">\r\n                <div class=\"prev\">\r\n                  <div class=\"content\">\r\n                    <input\r\n                      type=\"button\"\r\n                      class=\"prev\"\r\n                      [class.is-disabled]=\"\r\n                        !ngslCarousel.infinity && ngslCarousel.currentSlide === 0\r\n                      \"\r\n                      (click)=\"ngslCarousel.prev()\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"next\">\r\n                  <div class=\"content\">\r\n                    <input\r\n                      type=\"button\"\r\n                      class=\"next\"\r\n                      (click)=\"ngslCarousel.next()\"\r\n                      [class.is-disabled]=\"\r\n                        !ngslCarousel.infinity &&\r\n                        ngslCarousel.currentSlide === volunteering.length - 1\r\n                      \"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"category\">Проект</div>\r\n            <div class=\"title\" appNgslDotdotdot>\r\n              {{ item.title }}\r\n            </div>\r\n            <div class=\"description\" appNgslDotdotdot>\r\n              {{ item.description }}\r\n            </div>\r\n            <div class=\"send\">\r\n              <a href=\"#\" target=\"_blank\" target=\"_blank\">\r\n                Принять участие\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ngsl-carousel>\r\n  <div class=\"not-elements\" *ngIf=\"volunteering && volunteering.length == 0\">\r\n    <div class=\"admin-controls\">\r\n      <app-admin-controls\r\n        (create)=\"create()\"\r\n        (edit)=\"edit($event)\"\r\n        (remove)=\"remove($event)\"\r\n        [canBeDeleted]=\"false\"\r\n        [canBeEdited]=\"false\"\r\n        (activatedControls)=\"carouselToFront($event)\"\r\n      ></app-admin-controls>\r\n    </div>\r\n    <div class=\"text\">\r\n      В настоящий момент акции не проводятся\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterprise/components/volunteering-informer/volunteering-informer.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/enterprise/components/volunteering-informer/volunteering-informer.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-polls-card {\n  height: 100%;\n  background-color: #FFF; }\n\n.m-polls-card .photo {\n    height: 46%;\n    position: relative; }\n\n.m-polls-card .photo:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 55.55555556%; }\n\n.m-polls-card .photo > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.m-polls-card .photo .content {\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover; }\n\n.m-polls-card .body {\n    height: 54%;\n    padding: 20px 30px;\n    box-sizing: border-box; }\n\n.m-polls-card .body .category {\n      font-size: 12px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 14px;\n      max-height: 14px;\n      display: block;\n      display: -webkit-box;\n      color: #050505;\n      text-transform: uppercase;\n      margin-bottom: 10px; }\n\n@media (min-width: 1440px) {\n        .m-polls-card .body .category {\n          font-size: calc( 0.00833333 * 100vw + 0px);\n          line-height: calc( 0.00833333 * 100vw + 2px);\n          max-height: calc( 0.00833333 * 100vw + 2px);\n          -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n        .m-polls-card .body .category {\n          font-size: 16px;\n          line-height: 18px;\n          max-height: 18px; } }\n\n.m-polls-card .body .title {\n      display: block;\n      font-weight: 600;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #050505;\n      margin-bottom: 10px;\n      font-size: 16px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 18px;\n      max-height: 18px; }\n\n@media (min-width: 1440px) {\n        .m-polls-card .body .title {\n          font-size: calc( 0.0125 * 100vw + -2px);\n          line-height: calc( 0.0125 * 100vw + 0px);\n          max-height: calc( 0.0125 * 100vw + 0px);\n          -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n        .m-polls-card .body .title {\n          font-size: 22px;\n          line-height: 24px;\n          max-height: 24px; } }\n\n.m-polls-card .body .description {\n      display: block;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #050505;\n      margin-bottom: 5%;\n      font-size: 12px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 20px;\n      max-height: 60px; }\n\n@media (min-width: 1440px) {\n        .m-polls-card .body .description {\n          font-size: calc( 0.00833333 * 100vw + 0px);\n          line-height: calc( 0.00833333 * 100vw + 8px);\n          max-height: calc( -0.00833333 * 100vw + 72px);\n          -webkit-line-clamp: 3; } }\n\n@media (min-width: 1920px) {\n        .m-polls-card .body .description {\n          font-size: 16px;\n          line-height: 24px;\n          max-height: 72px; } }\n\n.m-polls-card .body .send a {\n      display: inline-block;\n      text-decoration: none;\n      font-size: 18px;\n      border: 1px solid #dd1e25;\n      background-color: transparent;\n      color: #dd1e25;\n      border-radius: 3px;\n      padding: 4% 15%;\n      box-sizing: border-box; }\n\n.l-polls-carousel {\n  height: 100%;\n  position: relative; }\n\n.l-polls-carousel:hover .slide-arrows {\n    display: block; }\n\n.l-polls-carousel .slide-arrows {\n    display: none; }\n\n.l-polls-carousel .slide-arrows .prev,\n    .l-polls-carousel .slide-arrows .next {\n      position: absolute !important;\n      top: 50%;\n      left: 0;\n      width: 10%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      position: relative; }\n\n.l-polls-carousel .slide-arrows .prev:before,\n      .l-polls-carousel .slide-arrows .next:before {\n        display: block;\n        content: \" \";\n        width: 100%;\n        padding-bottom: 100%; }\n\n.l-polls-carousel .slide-arrows .prev > .content,\n      .l-polls-carousel .slide-arrows .next > .content {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"],\n      .l-polls-carousel .slide-arrows .next input[type=\"button\"] {\n        z-index: 10;\n        width: 40px;\n        height: 40px;\n        background-color: #4D4E4D;\n        opacity: .7;\n        border: 0;\n        cursor: pointer;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-image: url(\"/local/js/assets/icons/icon-carousel-arrow-right-white.svg\"); }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"]:hover,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"]:hover {\n          opacity: .9; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].is-disabled,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"].is-disabled {\n          background-color: #C4BCB7; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].is-disabled:hover,\n          .l-polls-carousel .slide-arrows .next input[type=\"button\"].is-disabled:hover {\n            opacity: .7; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"]:focus,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"]:focus {\n          outline: none; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].prev,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"].prev {\n          -webkit-transform: translateY(-50%) rotate(-180deg);\n              -ms-transform: translateY(-50%) rotate(-180deg);\n                  transform: translateY(-50%) rotate(-180deg); }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].next,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"].next {\n          left: auto;\n          right: 0; }\n\n.l-polls-carousel .slide-arrows .next {\n      right: 0;\n      left: auto; }\n\n.not-elements {\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-color: #DEDFE0;\n  background-image: url(\"/local/js/assets/banners/no-banners.svg\"); }\n\n.not-elements:after {\n    content: \"\";\n    display: block;\n    background: rgba(0, 0, 0, 0.2);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 0; }\n\n.not-elements .text {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-align: center;\n    width: 100%;\n    color: #fff;\n    font-size: 16px;\n    font-weight: 600;\n    z-index: 1; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/volunteering-informer/volunteering-informer.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/enterprise/components/volunteering-informer/volunteering-informer.component.ts ***!
  \************************************************************************************************/
/*! exports provided: VolunteeringInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteeringInformerComponent", function() { return VolunteeringInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/portal/portal.service */ "./src/app/services/portal/portal.service.ts");
/* harmony import */ var src_app_services_volunteering_volunteering_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/volunteering/volunteering.service */ "./src/app/services/volunteering/volunteering.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VolunteeringInformerComponent = /** @class */ (function () {
    function VolunteeringInformerComponent(route, sharepointService, volunteeringService) {
        this.route = route;
        this.sharepointService = sharepointService;
        this.volunteeringService = volunteeringService;
        this.volunteering = null;
        this.carouselIsUp = false;
        this.currentSlide = 0;
        this.webId = null;
        this.company = null;
        this.subscription = null;
    }
    VolunteeringInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.webId; }))
            .subscribe(function (webId) {
            _this.webId = webId;
            _this.load();
        });
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.company; }))
            .subscribe(function (company) {
            _this.company = company;
        });
    };
    VolunteeringInformerComponent.prototype.load = function () {
        var _this = this;
        this.volunteeringService.getItems({ top: 3, orderBy: [['Created', false]], webId: this.webId })
            .subscribe(function (volunteering) { return _this.volunteering = volunteering; });
    };
    VolunteeringInformerComponent.prototype.carouselToFront = function (val) {
        this.carouselIsUp = val;
    };
    VolunteeringInformerComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/Lists/slVolunteering/NewForm.aspx?Source=")
            + encodeURIComponent(window.location.href);
    };
    VolunteeringInformerComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + (this.company.url + "/Lists/slVolunteering/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    VolunteeringInformerComponent.prototype.remove = function (item) {
        var _this = this;
        this.volunteeringService.recycleItem(item, this.webId)
            .subscribe(function () { return _this.load(); });
    };
    VolunteeringInformerComponent.prototype.prepareLink = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)') || null;
    };
    VolunteeringInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-volunteering-informer',
            template: __webpack_require__(/*! ./volunteering-informer.component.html */ "./src/app/enterprise/components/volunteering-informer/volunteering-informer.component.html"),
            styles: [__webpack_require__(/*! ./volunteering-informer.component.scss */ "./src/app/enterprise/components/volunteering-informer/volunteering-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"],
            src_app_services_volunteering_volunteering_service__WEBPACK_IMPORTED_MODULE_4__["VolunteeringService"]])
    ], VolunteeringInformerComponent);
    return VolunteeringInformerComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/enterprise-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/enterprise/enterprise-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EnterpriseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseRoutingModule", function() { return EnterpriseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_enterprise_page_enterprise_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/enterprise-page/enterprise-page.component */ "./src/app/enterprise/components/enterprise-page/enterprise-page.component.ts");
/* harmony import */ var src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/security/groups.resolver */ "./src/app/services/security/groups.resolver.ts");
/* harmony import */ var src_app_services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/companies/company-web.resolver */ "./src/app/services/companies/company-web.resolver.ts");
/* harmony import */ var src_app_services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/companies/company.resolver */ "./src/app/services/companies/company.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: ':id',
        component: _components_enterprise_page_enterprise_page_component__WEBPACK_IMPORTED_MODULE_2__["EnterprisePageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_3__["GroupsResolver"], webId: src_app_services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_4__["CompanyWebResolver"], company: src_app_services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_5__["CompanyResolver"] },
        data: { animation: 'fadeAnimation', title: 'Предприятие' }
    },
];
var EnterpriseRoutingModule = /** @class */ (function () {
    function EnterpriseRoutingModule() {
    }
    EnterpriseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [
                src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_3__["GroupsResolver"],
                src_app_services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_4__["CompanyWebResolver"],
                src_app_services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_5__["CompanyResolver"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EnterpriseRoutingModule);
    return EnterpriseRoutingModule;
}());



/***/ }),

/***/ "./src/app/enterprise/enterprise.module.ts":
/*!*************************************************!*\
  !*** ./src/app/enterprise/enterprise.module.ts ***!
  \*************************************************/
/*! exports provided: EnterpriseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseModule", function() { return EnterpriseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_doings_informer_doings_informer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/doings-informer/doings-informer.component */ "./src/app/enterprise/components/doings-informer/doings-informer.component.ts");
/* harmony import */ var _components_enterprise_birthdays_informer_enterprise_birthdays_informer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/enterprise-birthdays-informer/enterprise-birthdays-informer.component */ "./src/app/enterprise/components/enterprise-birthdays-informer/enterprise-birthdays-informer.component.ts");
/* harmony import */ var _components_enterprise_hall_of_fame_informer_enterprise_hall_of_fame_informer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component */ "./src/app/enterprise/components/enterprise-hall-of-fame-informer/enterprise-hall-of-fame-informer.component.ts");
/* harmony import */ var _components_enterprise_media_carousel_enterprise_media_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/enterprise-media-carousel/enterprise-media-carousel.component */ "./src/app/enterprise/components/enterprise-media-carousel/enterprise-media-carousel.component.ts");
/* harmony import */ var _components_enterprise_news_informer_enterprise_news_informer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/enterprise-news-informer/enterprise-news-informer.component */ "./src/app/enterprise/components/enterprise-news-informer/enterprise-news-informer.component.ts");
/* harmony import */ var _components_enterprise_page_enterprise_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/enterprise-page/enterprise-page.component */ "./src/app/enterprise/components/enterprise-page/enterprise-page.component.ts");
/* harmony import */ var _components_enterprise_polls_informer_enterprise_polls_informer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/enterprise-polls-informer/enterprise-polls-informer.component */ "./src/app/enterprise/components/enterprise-polls-informer/enterprise-polls-informer.component.ts");
/* harmony import */ var _components_incidents_informer_incidents_informer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/incidents-informer/incidents-informer.component */ "./src/app/enterprise/components/incidents-informer/incidents-informer.component.ts");
/* harmony import */ var _components_top_carousel_top_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/top-carousel/top-carousel.component */ "./src/app/enterprise/components/top-carousel/top-carousel.component.ts");
/* harmony import */ var _components_volunteering_informer_volunteering_informer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/volunteering-informer/volunteering-informer.component */ "./src/app/enterprise/components/volunteering-informer/volunteering-informer.component.ts");
/* harmony import */ var _enterprise_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enterprise-routing.module */ "./src/app/enterprise/enterprise-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var EnterpriseModule = /** @class */ (function () {
    function EnterpriseModule() {
    }
    EnterpriseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_doings_informer_doings_informer_component__WEBPACK_IMPORTED_MODULE_2__["DoingsInformerComponent"],
                _components_enterprise_birthdays_informer_enterprise_birthdays_informer_component__WEBPACK_IMPORTED_MODULE_3__["EnterpriseBirthdaysInformerComponent"],
                _components_enterprise_hall_of_fame_informer_enterprise_hall_of_fame_informer_component__WEBPACK_IMPORTED_MODULE_4__["EnterpriseHallOfFameInformerComponent"],
                _components_enterprise_media_carousel_enterprise_media_carousel_component__WEBPACK_IMPORTED_MODULE_5__["EnterpriseMediaCarouselComponent"],
                _components_enterprise_news_informer_enterprise_news_informer_component__WEBPACK_IMPORTED_MODULE_6__["EnterpriseNewsInformerComponent"],
                _components_enterprise_page_enterprise_page_component__WEBPACK_IMPORTED_MODULE_7__["EnterprisePageComponent"],
                _components_enterprise_polls_informer_enterprise_polls_informer_component__WEBPACK_IMPORTED_MODULE_8__["EnterprisePollsInformerComponent"],
                _components_incidents_informer_incidents_informer_component__WEBPACK_IMPORTED_MODULE_9__["IncidentsInformerComponent"],
                _components_top_carousel_top_carousel_component__WEBPACK_IMPORTED_MODULE_10__["TopCarouselComponent"],
                _components_volunteering_informer_volunteering_informer_component__WEBPACK_IMPORTED_MODULE_11__["VolunteeringInformerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _enterprise_routing_module__WEBPACK_IMPORTED_MODULE_12__["EnterpriseRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]
            ]
        })
    ], EnterpriseModule);
    return EnterpriseModule;
}());



/***/ }),

/***/ "./src/app/services/companies/company-web.resolver.ts":
/*!************************************************************!*\
  !*** ./src/app/services/companies/company-web.resolver.ts ***!
  \************************************************************/
/*! exports provided: CompanyWebResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyWebResolver", function() { return CompanyWebResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var _portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portal/portal.service */ "./src/app/services/portal/portal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyWebResolver = /** @class */ (function () {
    function CompanyWebResolver(companiesService, sharepointService) {
        this.companiesService = companiesService;
        this.sharepointService = sharepointService;
    }
    CompanyWebResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params.id;
        return this.companiesService.getItems({ filter: "Id eq '" + id + "'" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (c) { return c.length > 0 ? c[0] : null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (c) { return _this.sharepointService.getWebIdByRelativeUrl(c && c.url); }));
    };
    CompanyWebResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"], _portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"]])
    ], CompanyWebResolver);
    return CompanyWebResolver;
}());



/***/ }),

/***/ "./src/app/services/companies/company.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/services/companies/company.resolver.ts ***!
  \********************************************************/
/*! exports provided: CompanyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyResolver", function() { return CompanyResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyResolver = /** @class */ (function () {
    function CompanyResolver(companiesService) {
        this.companiesService = companiesService;
    }
    CompanyResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        return this.companiesService.getItems({ filter: "Id eq '" + id + "'" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (c) { return c.length > 0 ? c[0] : null; }));
    };
    CompanyResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_1__["CompaniesService"]])
    ], CompanyResolver);
    return CompanyResolver;
}());



/***/ }),

/***/ "./src/app/services/events/events.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/events/events.service.ts ***!
  \***************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EventsService = /** @class */ (function (_super) {
    __extends(EventsService, _super);
    function EventsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventsService.prototype.getListTitle = function () {
        return 'События';
    };
    EventsService.prototype.getListRelativePath = function () {
        return 'Lists/slEvents';
    };
    EventsService.prototype.getSelect = function () {
        return 'Id,Title,slEventsCover';
    };
    EventsService.prototype.getExpand = function () {
        return '';
    };
    EventsService.prototype.getOrderBy = function () {
        return [];
    };
    EventsService.prototype.getTop = function () {
        return 5000;
    };
    EventsService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            coverUrl: item.slEventsCover
        };
        return entity;
    };
    EventsService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    EventsService.prototype.getMockItems = function () {
        return [];
    };
    EventsService.prototype.isMock = function () {
        return false;
    };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], EventsService);
    return EventsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/fames/fames.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/fames/fames.service.ts ***!
  \*************************************************/
/*! exports provided: FamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamesService", function() { return FamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FamesService = /** @class */ (function (_super) {
    __extends(FamesService, _super);
    function FamesService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FamesService.prototype.getListTitle = function () {
        return 'Доска почета';
    };
    FamesService.prototype.getListRelativePath = function () {
        return 'Lists/slFames';
    };
    FamesService.prototype.getSelect = function () {
        return 'Id,Title,slPosition,slEmployee/Id,slEmployee/Title,slEmployee/Name,Created';
    };
    FamesService.prototype.getExpand = function () {
        return 'slEmployee';
    };
    FamesService.prototype.getOrderBy = function () {
        return [['Created', false]];
    };
    FamesService.prototype.getTop = function () {
        return 5000;
    };
    FamesService.prototype.getLogin = function (name) {
        var login = name;
        if (login && login.indexOf('|') >= 0) {
            login = login.substring(login.lastIndexOf('|') + 1);
        }
        return login;
    };
    FamesService.prototype.convertListItemToEntity = function (item) {
        var comment = {
            id: item.Id,
            title: item.Title,
            position: item.slPosition,
            employeeId: item.slEmployee.Id,
            employeeTitle: item.slEmployee.Title,
            employeePhoto: "/_layouts/15/userphoto.aspx?size=M&username=" + this.getLogin(item.slEmployee.Name),
            employeeRoute: ['/phonebook', item.Id]
        };
        return comment;
    };
    FamesService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    FamesService.prototype.getMockItems = function () {
        return [];
    };
    FamesService.prototype.isMock = function () {
        return false;
    };
    FamesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FamesService);
    return FamesService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/incidents/incidents.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/incidents/incidents.service.ts ***!
  \*********************************************************/
/*! exports provided: IncidentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsService", function() { return IncidentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
/* harmony import */ var _portal_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portal/portal.service */ "./src/app/services/portal/portal.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IncidentsService = /** @class */ (function (_super) {
    __extends(IncidentsService, _super);
    function IncidentsService(sharepointService) {
        var _this = _super.call(this) || this;
        _this.sharepointService = sharepointService;
        return _this;
    }
    IncidentsService.prototype.getListTitle = function () {
        return 'Происшествия';
    };
    IncidentsService.prototype.getListRelativePath = function () {
        return 'Lists/slIncidents';
    };
    IncidentsService.prototype.getSelect = function () {
        return 'Id,Title,slDate';
    };
    IncidentsService.prototype.getExpand = function () {
        return null;
    };
    IncidentsService.prototype.getOrderBy = function () {
        return null;
    };
    IncidentsService.prototype.getTop = function () {
        return 5000;
    };
    IncidentsService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            date: new Date(item.slDate)
        };
        return entity;
    };
    IncidentsService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    IncidentsService.prototype.getMockItems = function () {
        return [];
    };
    IncidentsService.prototype.isMock = function () {
        return false;
    };
    IncidentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_portal_portal_service__WEBPACK_IMPORTED_MODULE_2__["PortalService"]])
    ], IncidentsService);
    return IncidentsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/news/news.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/news/news.service.ts ***!
  \***********************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
/* harmony import */ var _portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portal/portal.service */ "./src/app/services/portal/portal.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsService = /** @class */ (function (_super) {
    __extends(NewsService, _super);
    function NewsService(sharepointService) {
        var _this = _super.call(this) || this;
        _this.sharepointService = sharepointService;
        return _this;
    }
    NewsService.prototype.getListRelativePath = function () {
        return '/Lists/slNews';
    };
    NewsService.prototype.getListTitle = function () {
        return 'Новости';
    };
    NewsService.prototype.getSelect = function () {
        return 'Id,Title,slNewsAnnouncement,slNewsRubricLookup/Id,slNewsRubricLookup/Title,'
            + 'slNewsPublicationDate,slNewsBody,Created,AttachmentFiles/ServerRelativeUrl,slNewsCover,'
            + 'UniqueId,LikedBy/Id,LikesCount';
    };
    NewsService.prototype.getExpand = function () {
        return 'slNewsRubricLookup,slNewsRubricLookup,AttachmentFiles,LikedBy';
    };
    NewsService.prototype.getOrderBy = function () {
        return [['slNewsPublicationDate', false], ['Created', false]];
    };
    NewsService.prototype.getTop = function () {
        return 10;
    };
    NewsService.prototype.convertListItemToEntity = function (item) {
        var news = {
            id: item.Id,
            title: item.Title,
            newsBody: item.slNewsBody,
            newsAnnouncement: item.slNewsAnnouncement,
            newsPublicationDate: item.slNewsPublicationDate && new Date(item.slNewsPublicationDate),
            attachmentFiles: [],
            uniqueId: item.UniqueId,
            likesCount: item.LikesCount || 0,
            likedByIds: [],
            imageUrl: item.slNewsCover
        };
        if (item.slNewsPublicationDate) {
            news.newsPublicationDate = new Date(item.slNewsPublicationDate);
            news.newsPublicationDateTitle = moment__WEBPACK_IMPORTED_MODULE_1__(news.newsPublicationDate).calendar(null, {
                sameDay: '[Сегодня]',
                nextDay: '[Завтра]',
                nextWeek: 'L',
                lastDay: '[Вчера]',
                lastWeek: 'L',
                sameElse: 'L'
            });
        }
        if (item.AttachmentFiles) {
            news.attachmentFiles = item.AttachmentFiles.map(function (a) { return a.ServerRelativeUrl; });
        }
        if (item.slNewsRubricLookup) {
            news.newsRubricLookupId = item.slNewsRubricLookup.Id;
            news.newsRubricLookupTitle = item.slNewsRubricLookup.Title;
        }
        if (news.imageUrl) {
            news.imageUrl = news.imageUrl;
        }
        if (item.LikedBy) {
            news.likedByIds = item.LikedBy.map(function (l) { return l.Id; });
        }
        return news;
    };
    NewsService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    NewsService.prototype.getMockItems = function () {
        return [{ id: 1, title: 'Новость 1' }, { id: 2, title: 'Новость 2' }, { id: 3, title: 'Новость 3' }];
    };
    NewsService.prototype.isMock = function () {
        return false;
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"]])
    ], NewsService);
    return NewsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_2__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/volunteering/volunteering.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/volunteering/volunteering.service.ts ***!
  \***************************************************************/
/*! exports provided: VolunteeringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteeringService", function() { return VolunteeringService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var VolunteeringService = /** @class */ (function (_super) {
    __extends(VolunteeringService, _super);
    function VolunteeringService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VolunteeringService.prototype.getListTitle = function () {
        return 'Волонтерство';
    };
    VolunteeringService.prototype.getListRelativePath = function () {
        return 'Lists/slVolunteering';
    };
    VolunteeringService.prototype.getSelect = function () {
        return 'Id,Title,slCover,slDescription,Created';
    };
    VolunteeringService.prototype.getExpand = function () {
        return null;
    };
    VolunteeringService.prototype.getOrderBy = function () {
        return null;
    };
    VolunteeringService.prototype.getTop = function () {
        return 5000;
    };
    VolunteeringService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            cover: item.slCover,
            description: item.slDescription
        };
        return entity;
    };
    VolunteeringService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    VolunteeringService.prototype.getMockItems = function () {
        return [];
    };
    VolunteeringService.prototype.isMock = function () {
        return false;
    };
    VolunteeringService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], VolunteeringService);
    return VolunteeringService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ })

}]);
//# sourceMappingURL=14.js.map