(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"],{

/***/ "./node_modules/ng2-date-picker/fesm5/ng2-date-picker.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-date-picker/fesm5/ng2-date-picker.js ***!
  \***************************************************************/
/*! exports provided: ECalendarMode, ECalendarValue, SelectEvent, DatePickerComponent, DatePickerDirective, DayCalendarComponent, DayTimeCalendarComponent, TimeSelectComponent, MonthCalendarComponent, DpDatePickerModule, ɵi, ɵa, ɵb, ɵg, ɵc, ɵf, ɵe, ɵh, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECalendarMode", function() { return ECalendarMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECalendarValue", function() { return ECalendarValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEvent", function() { return SelectEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerDirective", function() { return DatePickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayCalendarComponent", function() { return DayCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeCalendarComponent", function() { return DayTimeCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSelectComponent", function() { return TimeSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthCalendarComponent", function() { return MonthCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpDatePickerModule", function() { return DpDatePickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CalendarNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DomHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return UtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return DatePickerDirectiveService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DatePickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return DayCalendarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return DayTimeCalendarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return MonthCalendarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return TimeSelectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ECalendarMode = {
    Day: 0,
    DayTime: 1,
    Month: 2,
    Time: 3,
};
ECalendarMode[ECalendarMode.Day] = 'Day';
ECalendarMode[ECalendarMode.DayTime] = 'DayTime';
ECalendarMode[ECalendarMode.Month] = 'Month';
ECalendarMode[ECalendarMode.Time] = 'Time';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ECalendarValue = {
    Moment: 1,
    MomentArr: 2,
    String: 3,
    StringArr: 4,
};
ECalendarValue[ECalendarValue.Moment] = 'Moment';
ECalendarValue[ECalendarValue.MomentArr] = 'MomentArr';
ECalendarValue[ECalendarValue.String] = 'String';
ECalendarValue[ECalendarValue.StringArr] = 'StringArr';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var SelectEvent = {
    INPUT: 'input',
    SELECTION: 'selection',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DomHelper = /** @class */ (function () {
    function DomHelper() {
    }
    /**
     * @private
     * @param {?} element
     * @param {?} container
     * @param {?} anchor
     * @param {?} drops
     * @return {?}
     */
    DomHelper.setYAxisPosition = /**
     * @private
     * @param {?} element
     * @param {?} container
     * @param {?} anchor
     * @param {?} drops
     * @return {?}
     */
    function (element, container, anchor, drops) {
        /** @type {?} */
        var anchorRect = anchor.getBoundingClientRect();
        /** @type {?} */
        var containerRect = container.getBoundingClientRect();
        /** @type {?} */
        var bottom = anchorRect.bottom - containerRect.top;
        /** @type {?} */
        var top = anchorRect.top - containerRect.top;
        if (drops === 'down') {
            element.style.top = (bottom + 1 + 'px');
        }
        else {
            element.style.top = (top - 1 - element.scrollHeight) + 'px';
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?} container
     * @param {?} anchor
     * @param {?} dimElem
     * @param {?} opens
     * @return {?}
     */
    DomHelper.setXAxisPosition = /**
     * @private
     * @param {?} element
     * @param {?} container
     * @param {?} anchor
     * @param {?} dimElem
     * @param {?} opens
     * @return {?}
     */
    function (element, container, anchor, dimElem, opens) {
        /** @type {?} */
        var anchorRect = anchor.getBoundingClientRect();
        /** @type {?} */
        var containerRect = container.getBoundingClientRect();
        /** @type {?} */
        var left = anchorRect.left - containerRect.left;
        if (opens === 'right') {
            element.style.left = left + 'px';
        }
        else {
            element.style.left = left - dimElem.offsetWidth + anchor.offsetWidth + 'px';
        }
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    DomHelper.isTopInView = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var top = el.getBoundingClientRect().top;
        return (top >= 0);
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    DomHelper.isBottomInView = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var bottom = el.getBoundingClientRect().bottom;
        return (bottom <= window.innerHeight);
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    DomHelper.isLeftInView = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var left = el.getBoundingClientRect().left;
        return (left >= 0);
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    DomHelper.isRightInView = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var right = el.getBoundingClientRect().right;
        return (right <= window.innerWidth);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    DomHelper.prototype.appendElementToPosition = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        var container = config.container, element = config.element;
        if (!container.style.position || container.style.position === 'static') {
            container.style.position = 'relative';
        }
        if (element.style.position !== 'absolute') {
            element.style.position = 'absolute';
        }
        element.style.visibility = 'hidden';
        setTimeout(function () {
            _this.setElementPosition(config);
            element.style.visibility = 'visible';
        });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DomHelper.prototype.setElementPosition = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var element = _a.element, container = _a.container, anchor = _a.anchor, dimElem = _a.dimElem, drops = _a.drops, opens = _a.opens;
        DomHelper.setYAxisPosition(element, container, anchor, 'down');
        DomHelper.setXAxisPosition(element, container, anchor, dimElem, 'right');
        if (drops !== 'down' && drops !== 'up') {
            if (DomHelper.isBottomInView(dimElem)) {
                DomHelper.setYAxisPosition(element, container, anchor, 'down');
            }
            else if (DomHelper.isTopInView(dimElem)) {
                DomHelper.setYAxisPosition(element, container, anchor, 'up');
            }
        }
        else {
            DomHelper.setYAxisPosition(element, container, anchor, drops);
        }
        if (opens !== 'left' && opens !== 'right') {
            if (DomHelper.isRightInView(dimElem)) {
                DomHelper.setXAxisPosition(element, container, anchor, dimElem, 'right');
            }
            else if (DomHelper.isLeftInView(dimElem)) {
                DomHelper.setXAxisPosition(element, container, anchor, dimElem, 'left');
            }
        }
        else {
            DomHelper.setXAxisPosition(element, container, anchor, dimElem, opens);
        }
    };
    DomHelper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return DomHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = moment__WEBPACK_IMPORTED_MODULE_1__;
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    UtilsService.debounce = /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    function (func, wait) {
        /** @type {?} */
        var timeout;
        return function () {
            /** @type {?} */
            var context = this;
            /** @type {?} */
            var args = arguments;
            timeout = clearTimeout(timeout);
            setTimeout(function () {
                func.apply(context, args);
            }, wait);
        };
    };
    /**
     * @param {?} size
     * @return {?}
     */
    UtilsService.prototype.createArray = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return new Array(size).fill(1);
    };
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    UtilsService.prototype.convertToMoment = /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        if (!date) {
            return null;
        }
        else if (typeof date === 'string') {
            return moment(date, format);
        }
        else {
            return date.clone();
        }
    };
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    UtilsService.prototype.isDateValid = /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        if (date === '') {
            return true;
        }
        return moment(date, format, true).isValid();
    };
    // todo:: add unit test
    // todo:: add unit test
    /**
     * @param {?} current
     * @param {?} selected
     * @param {?} allowMultiSelect
     * @param {?} minDate
     * @return {?}
     */
    UtilsService.prototype.getDefaultDisplayDate = 
    // todo:: add unit test
    /**
     * @param {?} current
     * @param {?} selected
     * @param {?} allowMultiSelect
     * @param {?} minDate
     * @return {?}
     */
    function (current, selected, allowMultiSelect, minDate) {
        if (current) {
            return current.clone();
        }
        else if (minDate && minDate.isAfter(moment())) {
            return minDate.clone();
        }
        else if (allowMultiSelect) {
            if (selected && selected[selected.length]) {
                return selected[selected.length].clone();
            }
        }
        else if (selected && selected[0]) {
            return selected[0].clone();
        }
        return moment();
    };
    // todo:: add unit test
    // todo:: add unit test
    /**
     * @param {?} value
     * @param {?} allowMultiSelect
     * @return {?}
     */
    UtilsService.prototype.getInputType = 
    // todo:: add unit test
    /**
     * @param {?} value
     * @param {?} allowMultiSelect
     * @return {?}
     */
    function (value, allowMultiSelect) {
        if (Array.isArray(value)) {
            if (!value.length) {
                return ECalendarValue.MomentArr;
            }
            else if (typeof value[0] === 'string') {
                return ECalendarValue.StringArr;
            }
            else if (moment.isMoment(value[0])) {
                return ECalendarValue.MomentArr;
            }
        }
        else {
            if (typeof value === 'string') {
                return ECalendarValue.String;
            }
            else if (moment.isMoment(value)) {
                return ECalendarValue.Moment;
            }
        }
        return allowMultiSelect ? ECalendarValue.MomentArr : ECalendarValue.Moment;
    };
    // todo:: add unit test
    // todo:: add unit test
    /**
     * @param {?} value
     * @param {?} format
     * @param {?} allowMultiSelect
     * @return {?}
     */
    UtilsService.prototype.convertToMomentArray = 
    // todo:: add unit test
    /**
     * @param {?} value
     * @param {?} format
     * @param {?} allowMultiSelect
     * @return {?}
     */
    function (value, format, allowMultiSelect) {
        switch (this.getInputType(value, allowMultiSelect)) {
            case (ECalendarValue.String):
                return value ? [moment((/** @type {?} */ (value)), format, true)] : [];
            case (ECalendarValue.StringArr):
                return ((/** @type {?} */ (value))).map(function (v) { return v ? moment(v, format, true) : null; }).filter(Boolean);
            case (ECalendarValue.Moment):
                return value ? [((/** @type {?} */ (value))).clone()] : [];
            case (ECalendarValue.MomentArr):
                return ((/** @type {?} */ (value)) || []).map(function (v) { return v.clone(); });
            default:
                return [];
        }
    };
    // todo:: add unit test
    // todo:: add unit test
    /**
     * @param {?} format
     * @param {?} value
     * @param {?} convertTo
     * @return {?}
     */
    UtilsService.prototype.convertFromMomentArray = 
    // todo:: add unit test
    /**
     * @param {?} format
     * @param {?} value
     * @param {?} convertTo
     * @return {?}
     */
    function (format, value, convertTo) {
        switch (convertTo) {
            case (ECalendarValue.String):
                return value[0] && value[0].format(format);
            case (ECalendarValue.StringArr):
                return value.filter(Boolean).map(function (v) { return v.format(format); });
            case (ECalendarValue.Moment):
                return value[0] ? value[0].clone() : value[0];
            case (ECalendarValue.MomentArr):
                return value ? value.map(function (v) { return v.clone(); }) : value;
            default:
                return value;
        }
    };
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    UtilsService.prototype.convertToString = /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    function (value, format) {
        var _this = this;
        /** @type {?} */
        var tmpVal;
        if (typeof value === 'string') {
            tmpVal = [value];
        }
        else if (Array.isArray(value)) {
            if (value.length) {
                tmpVal = ((/** @type {?} */ (value))).map(function (v) {
                    return _this.convertToMoment(v, format).format(format);
                });
            }
            else {
                tmpVal = (/** @type {?} */ (value));
            }
        }
        else if (moment.isMoment(value)) {
            tmpVal = [value.format(format)];
        }
        else {
            return '';
        }
        return tmpVal.filter(Boolean).join(' | ');
    };
    // todo:: add unit test
    // todo:: add unit test
    /**
     * @template T
     * @param {?} obj
     * @return {?}
     */
    UtilsService.prototype.clearUndefined = 
    // todo:: add unit test
    /**
     * @template T
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!obj) {
            return obj;
        }
        Object.keys(obj).forEach(function (key) { return (obj[key] === undefined) && delete obj[key]; });
        return obj;
    };
    /**
     * @param {?} isMultiple
     * @param {?} currentlySelected
     * @param {?} date
     * @param {?=} granularity
     * @return {?}
     */
    UtilsService.prototype.updateSelected = /**
     * @param {?} isMultiple
     * @param {?} currentlySelected
     * @param {?} date
     * @param {?=} granularity
     * @return {?}
     */
    function (isMultiple, currentlySelected, date, granularity) {
        if (granularity === void 0) { granularity = 'day'; }
        if (isMultiple) {
            return !date.selected
                ? currentlySelected.concat([date.date])
                : currentlySelected.filter(function (d) { return !d.isSame(date.date, granularity); });
        }
        else {
            return !date.selected ? [date.date] : [];
        }
    };
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    UtilsService.prototype.closestParent = /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    function (element, selector) {
        if (!element) {
            return undefined;
        }
        /** @type {?} */
        var match = (/** @type {?} */ (element.querySelector(selector)));
        return match || this.closestParent(element.parentElement, selector);
    };
    /**
     * @param {?} m
     * @return {?}
     */
    UtilsService.prototype.onlyTime = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        return m && moment.isMoment(m) && moment(m.format('HH:mm:ss'), 'HH:mm:ss');
    };
    /**
     * @param {?} calendarType
     * @return {?}
     */
    UtilsService.prototype.granularityFromType = /**
     * @param {?} calendarType
     * @return {?}
     */
    function (calendarType) {
        switch (calendarType) {
            case 'time':
                return 'second';
            case 'daytime':
                return 'second';
            default:
                return calendarType;
        }
    };
    /**
     * @param {?} __0
     * @param {?} format
     * @param {?} calendarType
     * @return {?}
     */
    UtilsService.prototype.createValidator = /**
     * @param {?} __0
     * @param {?} format
     * @param {?} calendarType
     * @return {?}
     */
    function (_a, format, calendarType) {
        var _this = this;
        var minDate = _a.minDate, maxDate = _a.maxDate, minTime = _a.minTime, maxTime = _a.maxTime;
        /** @type {?} */
        var isValid;
        /** @type {?} */
        var value;
        /** @type {?} */
        var validators = [];
        /** @type {?} */
        var granularity = this.granularityFromType(calendarType);
        if (minDate) {
            /** @type {?} */
            var md_1 = this.convertToMoment(minDate, format);
            validators.push({
                key: 'minDate',
                isValid: function () {
                    /** @type {?} */
                    var _isValid = value.every(function (val) { return val.isSameOrAfter(md_1, granularity); });
                    isValid = isValid ? _isValid : false;
                    return _isValid;
                }
            });
        }
        if (maxDate) {
            /** @type {?} */
            var md_2 = this.convertToMoment(maxDate, format);
            validators.push({
                key: 'maxDate',
                isValid: function () {
                    /** @type {?} */
                    var _isValid = value.every(function (val) { return val.isSameOrBefore(md_2, granularity); });
                    isValid = isValid ? _isValid : false;
                    return _isValid;
                }
            });
        }
        if (minTime) {
            /** @type {?} */
            var md_3 = this.onlyTime(this.convertToMoment(minTime, format));
            validators.push({
                key: 'minTime',
                isValid: function () {
                    /** @type {?} */
                    var _isValid = value.every(function (val) { return _this.onlyTime(val).isSameOrAfter(md_3); });
                    isValid = isValid ? _isValid : false;
                    return _isValid;
                }
            });
        }
        if (maxTime) {
            /** @type {?} */
            var md_4 = this.onlyTime(this.convertToMoment(maxTime, format));
            validators.push({
                key: 'maxTime',
                isValid: function () {
                    /** @type {?} */
                    var _isValid = value.every(function (val) { return _this.onlyTime(val).isSameOrBefore(md_4); });
                    isValid = isValid ? _isValid : false;
                    return _isValid;
                }
            });
        }
        return function (inputVal) {
            isValid = true;
            value = _this.convertToMomentArray(inputVal, format, true).filter(Boolean);
            if (!value.every(function (val) { return val.isValid(); })) {
                return {
                    format: {
                        given: inputVal
                    }
                };
            }
            /** @type {?} */
            var errors = validators.reduce(function (map, err) {
                if (!err.isValid()) {
                    map[err.key] = {
                        given: value
                    };
                }
                return map;
            }, {});
            return !isValid ? errors : null;
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UtilsService.prototype.datesStringToStringArray = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (value || '').split('|').map(function (m) { return m.trim(); }).filter(Boolean);
    };
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    UtilsService.prototype.getValidMomentArray = /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    function (value, format) {
        var _this = this;
        return this.datesStringToStringArray(value)
            .filter(function (d) { return _this.isDateValid(d, format); })
            .map(function (d) { return moment(d, format); });
    };
    /**
     * @param {?} showGoToCurrent
     * @param {?} mode
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    UtilsService.prototype.shouldShowCurrent = /**
     * @param {?} showGoToCurrent
     * @param {?} mode
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function (showGoToCurrent, mode, min, max) {
        return showGoToCurrent &&
            mode !== 'time' &&
            this.isDateInRange(moment(), min, max);
    };
    /**
     * @param {?} date
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    UtilsService.prototype.isDateInRange = /**
     * @param {?} date
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (date, from, to) {
        return date.isBetween(from, to, 'day', '[]');
    };
    /**
     * @param {?} obj
     * @param {?} format
     * @param {?} props
     * @return {?}
     */
    UtilsService.prototype.convertPropsToMoment = /**
     * @param {?} obj
     * @param {?} format
     * @param {?} props
     * @return {?}
     */
    function (obj, format, props) {
        var _this = this;
        props.forEach(function (prop) {
            if (obj.hasOwnProperty(prop)) {
                obj[prop] = _this.convertToMoment(obj[prop], format);
            }
        });
    };
    /**
     * @template T
     * @param {?} prevConf
     * @param {?} currentConf
     * @return {?}
     */
    UtilsService.prototype.shouldResetCurrentView = /**
     * @template T
     * @param {?} prevConf
     * @param {?} currentConf
     * @return {?}
     */
    function (prevConf, currentConf) {
        if (prevConf && currentConf) {
            if (!prevConf.min && currentConf.min) {
                return true;
            }
            else if (prevConf.min && currentConf.min && !prevConf.min.isSame(currentConf.min, 'd')) {
                return true;
            }
            else if (!prevConf.max && currentConf.max) {
                return true;
            }
            else if (prevConf.max && currentConf.max && !prevConf.max.isSame(currentConf.max, 'd')) {
                return true;
            }
            return false;
        }
        return false;
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    UtilsService.prototype.getNativeElement = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        if (!elem) {
            return null;
        }
        else if (typeof elem === 'string') {
            return (/** @type {?} */ (document.querySelector(elem)));
        }
        else {
            return elem;
        }
    };
    UtilsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return UtilsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$1 = moment__WEBPACK_IMPORTED_MODULE_1__;
var DayCalendarService = /** @class */ (function () {
    function DayCalendarService(utilsService) {
        this.utilsService = utilsService;
        this.DAYS = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        this.DEFAULT_CONFIG = {
            showNearMonthDays: true,
            showWeekNumbers: false,
            firstDayOfWeek: 'su',
            weekDayFormat: 'ddd',
            format: 'DD-MM-YYYY',
            allowMultiSelect: false,
            monthFormat: 'MMM, YYYY',
            enableMonthSelector: true,
            locale: moment$1.locale(),
            dayBtnFormat: 'DD',
            unSelectOnClick: true
        };
    }
    /**
     * @private
     * @param {?} currentMonth
     * @param {?} monthArray
     * @return {?}
     */
    DayCalendarService.prototype.removeNearMonthWeeks = /**
     * @private
     * @param {?} currentMonth
     * @param {?} monthArray
     * @return {?}
     */
    function (currentMonth, monthArray) {
        if (monthArray[monthArray.length - 1].find(function (day) { return day.date.isSame(currentMonth, 'month'); })) {
            return monthArray;
        }
        else {
            return monthArray.slice(0, -1);
        }
    };
    /**
     * @param {?} config
     * @return {?}
     */
    DayCalendarService.prototype.getConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var _config = (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.DEFAULT_CONFIG, this.utilsService.clearUndefined(config))));
        this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);
        moment$1.locale(_config.locale);
        return _config;
    };
    /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    DayCalendarService.prototype.generateDaysMap = /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function (firstDayOfWeek) {
        /** @type {?} */
        var firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
        /** @type {?} */
        var daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
        return daysArr.reduce(function (map, day, index) {
            map[day] = index;
            return map;
        }, (/** @type {?} */ ({})));
    };
    /**
     * @param {?} config
     * @param {?} month
     * @param {?} selected
     * @return {?}
     */
    DayCalendarService.prototype.generateMonthArray = /**
     * @param {?} config
     * @param {?} month
     * @param {?} selected
     * @return {?}
     */
    function (config, month, selected) {
        var _this = this;
        /** @type {?} */
        var monthArray = [];
        /** @type {?} */
        var firstDayOfWeekIndex = this.DAYS.indexOf(config.firstDayOfWeek);
        /** @type {?} */
        var firstDayOfBoard = month.clone().startOf('month');
        while (firstDayOfBoard.day() !== firstDayOfWeekIndex) {
            firstDayOfBoard.subtract(1, 'day');
        }
        /** @type {?} */
        var current = firstDayOfBoard.clone();
        /** @type {?} */
        var prevMonth = month.clone().subtract(1, 'month');
        /** @type {?} */
        var nextMonth = month.clone().add(1, 'month');
        /** @type {?} */
        var today = moment$1();
        /** @type {?} */
        var daysOfCalendar = this.utilsService.createArray(42)
            .reduce(function (array) {
            array.push({
                date: current.clone(),
                selected: !!selected.find(function (selectedDay) { return current.isSame(selectedDay, 'day'); }),
                currentMonth: current.isSame(month, 'month'),
                prevMonth: current.isSame(prevMonth, 'month'),
                nextMonth: current.isSame(nextMonth, 'month'),
                currentDay: current.isSame(today, 'day'),
                disabled: _this.isDateDisabled(current, config)
            });
            current.add(1, 'day');
            return array;
        }, []);
        daysOfCalendar.forEach(function (day, index) {
            /** @type {?} */
            var weekIndex = Math.floor(index / 7);
            if (!monthArray[weekIndex]) {
                monthArray.push([]);
            }
            monthArray[weekIndex].push(day);
        });
        if (!config.showNearMonthDays) {
            monthArray = this.removeNearMonthWeeks(month, monthArray);
        }
        return monthArray;
    };
    /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    DayCalendarService.prototype.generateWeekdays = /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function (firstDayOfWeek) {
        /** @type {?} */
        var weekdayNames = {
            su: moment$1().day(0),
            mo: moment$1().day(1),
            tu: moment$1().day(2),
            we: moment$1().day(3),
            th: moment$1().day(4),
            fr: moment$1().day(5),
            sa: moment$1().day(6)
        };
        /** @type {?} */
        var weekdays = [];
        /** @type {?} */
        var daysMap = this.generateDaysMap(firstDayOfWeek);
        for (var dayKey in daysMap) {
            if (daysMap.hasOwnProperty(dayKey)) {
                weekdays[daysMap[dayKey]] = weekdayNames[dayKey];
            }
        }
        return weekdays;
    };
    /**
     * @param {?} date
     * @param {?} config
     * @return {?}
     */
    DayCalendarService.prototype.isDateDisabled = /**
     * @param {?} date
     * @param {?} config
     * @return {?}
     */
    function (date, config) {
        if (config.isDayDisabledCallback) {
            return config.isDayDisabledCallback(date);
        }
        if (config.min && date.isBefore(config.min, 'day')) {
            return true;
        }
        return !!(config.max && date.isAfter(config.max, 'day'));
    };
    // todo:: add unit tests
    // todo:: add unit tests
    /**
     * @param {?} config
     * @param {?} month
     * @return {?}
     */
    DayCalendarService.prototype.getHeaderLabel = 
    // todo:: add unit tests
    /**
     * @param {?} config
     * @param {?} month
     * @return {?}
     */
    function (config, month) {
        if (config.monthFormatter) {
            return config.monthFormatter(month);
        }
        return month.format(config.monthFormat);
    };
    // todo:: add unit tests
    // todo:: add unit tests
    /**
     * @param {?} min
     * @param {?} currentMonthView
     * @return {?}
     */
    DayCalendarService.prototype.shouldShowLeft = 
    // todo:: add unit tests
    /**
     * @param {?} min
     * @param {?} currentMonthView
     * @return {?}
     */
    function (min, currentMonthView) {
        return min ? min.isBefore(currentMonthView, 'month') : true;
    };
    // todo:: add unit tests
    // todo:: add unit tests
    /**
     * @param {?} max
     * @param {?} currentMonthView
     * @return {?}
     */
    DayCalendarService.prototype.shouldShowRight = 
    // todo:: add unit tests
    /**
     * @param {?} max
     * @param {?} currentMonthView
     * @return {?}
     */
    function (max, currentMonthView) {
        return max ? max.isAfter(currentMonthView, 'month') : true;
    };
    /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    DayCalendarService.prototype.generateDaysIndexMap = /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function (firstDayOfWeek) {
        /** @type {?} */
        var firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
        /** @type {?} */
        var daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
        return daysArr.reduce(function (map, day, index) {
            map[index] = day;
            return map;
        }, (/** @type {?} */ ({})));
    };
    /**
     * @param {?} componentConfig
     * @return {?}
     */
    DayCalendarService.prototype.getMonthCalendarConfig = /**
     * @param {?} componentConfig
     * @return {?}
     */
    function (componentConfig) {
        return this.utilsService.clearUndefined({
            min: componentConfig.min,
            max: componentConfig.max,
            format: componentConfig.format,
            isNavHeaderBtnClickable: true,
            allowMultiSelect: false,
            yearFormat: componentConfig.yearFormat,
            yearFormatter: componentConfig.yearFormatter,
            monthBtnFormat: componentConfig.monthBtnFormat,
            monthBtnFormatter: componentConfig.monthBtnFormatter,
            monthBtnCssClassCallback: componentConfig.monthBtnCssClassCallback,
            multipleYearsNavigateBy: componentConfig.multipleYearsNavigateBy,
            showMultipleYearsNavigation: componentConfig.showMultipleYearsNavigation,
            showGoToCurrent: componentConfig.showGoToCurrent
        });
    };
    /**
     * @param {?} config
     * @param {?} day
     * @return {?}
     */
    DayCalendarService.prototype.getDayBtnText = /**
     * @param {?} config
     * @param {?} day
     * @return {?}
     */
    function (config, day) {
        if (config.dayBtnFormatter) {
            return config.dayBtnFormatter(day);
        }
        return day.format(config.dayBtnFormat);
    };
    /**
     * @param {?} config
     * @param {?} day
     * @return {?}
     */
    DayCalendarService.prototype.getDayBtnCssClass = /**
     * @param {?} config
     * @param {?} day
     * @return {?}
     */
    function (config, day) {
        if (config.dayBtnCssClassCallback) {
            return config.dayBtnCssClassCallback(day);
        }
        return '';
    };
    DayCalendarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    DayCalendarService.ctorParameters = function () { return [
        { type: UtilsService }
    ]; };
    return DayCalendarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$2 = moment__WEBPACK_IMPORTED_MODULE_1__;
var DayCalendarComponent = /** @class */ (function () {
    function DayCalendarComponent(dayCalendarService, utilsService, cd) {
        this.dayCalendarService = dayCalendarService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMonthSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNavHeaderBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.CalendarMode = ECalendarMode;
        this.isInited = false;
        this.currentCalendarMode = ECalendarMode.Day;
        this._shouldShowCurrent = true;
        this.api = {
            moveCalendarsBy: this.moveCalendarsBy.bind(this),
            moveCalendarTo: this.moveCalendarTo.bind(this),
            toggleCalendarMode: this.toggleCalendarMode.bind(this)
        };
    }
    Object.defineProperty(DayCalendarComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.onChangeCallback(this.processOnChangeCallback(selected));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DayCalendarComponent.prototype, "currentDateView", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentDateView;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentDateView = current.clone();
            this.weeks = this.dayCalendarService
                .generateMonthArray(this.componentConfig, this._currentDateView, this.selected);
            this.navLabel = this.dayCalendarService.getHeaderLabel(this.componentConfig, this._currentDateView);
            this.showLeftNav = this.dayCalendarService.shouldShowLeft(this.componentConfig.min, this.currentDateView);
            this.showRightNav = this.dayCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DayCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isInited = true;
        this.init();
        this.initValidators();
    };
    /**
     * @return {?}
     */
    DayCalendarComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        this.componentConfig = this.dayCalendarService.getConfig(this.config);
        this.selected = this.selected || [];
        this.currentDateView = this.displayDate
            ? this.utilsService.convertToMoment(this.displayDate, this.componentConfig.format).clone()
            : this.utilsService
                .getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
        this.weekdays = this.dayCalendarService
            .generateWeekdays(this.componentConfig.firstDayOfWeek);
        this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
        this.monthCalendarConfig = this.dayCalendarService.getMonthCalendarConfig(this.componentConfig);
        this._shouldShowCurrent = this.shouldShowCurrent();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DayCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isInited) {
            var minDate = changes.minDate, maxDate = changes.maxDate, config = changes.config;
            this.handleConfigChange(config);
            this.init();
            if (minDate || maxDate) {
                this.initValidators();
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DayCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        if (value) {
            this.selected = this.utilsService
                .convertToMomentArray(value, this.componentConfig.format, this.componentConfig.allowMultiSelect);
            this.inputValueType = this.utilsService
                .getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
        }
        else {
            this.selected = [];
        }
        this.weeks = this.dayCalendarService
            .generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
        this.cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DayCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} _
     * @return {?}
     */
    DayCalendarComponent.prototype.onChangeCallback = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DayCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @param {?} formControl
     * @return {?}
     */
    DayCalendarComponent.prototype.validate = /**
     * @param {?} formControl
     * @return {?}
     */
    function (formControl) {
        if (this.minDate || this.maxDate) {
            return this.validateFn(formControl.value);
        }
        else {
            return function () { return null; };
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DayCalendarComponent.prototype.processOnChangeCallback = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.utilsService.convertFromMomentArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
    };
    /**
     * @return {?}
     */
    DayCalendarComponent.prototype.initValidators = /**
     * @return {?}
     */
    function () {
        this.validateFn = this.utilsService.createValidator({ minDate: this.minDate, maxDate: this.maxDate }, this.componentConfig.format, 'day');
        this.onChangeCallback(this.processOnChangeCallback(this.selected));
    };
    /**
     * @param {?} day
     * @return {?}
     */
    DayCalendarComponent.prototype.dayClicked = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        if (day.selected && !this.componentConfig.unSelectOnClick) {
            return;
        }
        this.selected = this.utilsService
            .updateSelected(this.componentConfig.allowMultiSelect, this.selected, day);
        this.weeks = this.dayCalendarService
            .generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
        this.onSelect.emit(day);
    };
    /**
     * @param {?} day
     * @return {?}
     */
    DayCalendarComponent.prototype.getDayBtnText = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return this.dayCalendarService.getDayBtnText(this.componentConfig, day.date);
    };
    /**
     * @param {?} day
     * @return {?}
     */
    DayCalendarComponent.prototype.getDayBtnCssClass = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var cssClasses = {
            'dp-selected': day.selected,
            'dp-current-month': day.currentMonth,
            'dp-prev-month': day.prevMonth,
            'dp-next-month': day.nextMonth,
            'dp-current-day': day.currentDay
        };
        /** @type {?} */
        var customCssClass = this.dayCalendarService.getDayBtnCssClass(this.componentConfig, day.date);
        if (customCssClass) {
            cssClasses[customCssClass] = true;
        }
        return cssClasses;
    };
    /**
     * @return {?}
     */
    DayCalendarComponent.prototype.onLeftNavClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var from = this.currentDateView.clone();
        this.moveCalendarsBy(this.currentDateView, -1, 'month');
        /** @type {?} */
        var to = this.currentDateView.clone();
        this.onLeftNav.emit({ from: from, to: to });
    };
    /**
     * @return {?}
     */
    DayCalendarComponent.prototype.onRightNavClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var from = this.currentDateView.clone();
        this.moveCalendarsBy(this.currentDateView, 1, 'month');
        /** @type {?} */
        var to = this.currentDateView.clone();
        this.onRightNav.emit({ from: from, to: to });
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DayCalendarComponent.prototype.onMonthCalendarLeftClick = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.onLeftNav.emit(change);
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DayCalendarComponent.prototype.onMonthCalendarRightClick = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.onRightNav.emit(change);
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DayCalendarComponent.prototype.onMonthCalendarSecondaryLeftClick = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.onRightNav.emit(change);
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DayCalendarComponent.prototype.onMonthCalendarSecondaryRightClick = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.onLeftNav.emit(change);
    };
    /**
     * @param {?} weekday
     * @return {?}
     */
    DayCalendarComponent.prototype.getWeekdayName = /**
     * @param {?} weekday
     * @return {?}
     */
    function (weekday) {
        if (this.componentConfig.weekDayFormatter) {
            return this.componentConfig.weekDayFormatter(weekday.day());
        }
        return weekday.format(this.componentConfig.weekDayFormat);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    DayCalendarComponent.prototype.toggleCalendarMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (this.currentCalendarMode !== mode) {
            this.currentCalendarMode = mode;
            this.onNavHeaderBtnClick.emit(mode);
        }
        this.cd.markForCheck();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    DayCalendarComponent.prototype.monthSelected = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.currentDateView = month.date.clone();
        this.currentCalendarMode = ECalendarMode.Day;
        this.onMonthSelect.emit(month);
    };
    /**
     * @param {?} current
     * @param {?} amount
     * @param {?=} granularity
     * @return {?}
     */
    DayCalendarComponent.prototype.moveCalendarsBy = /**
     * @param {?} current
     * @param {?} amount
     * @param {?=} granularity
     * @return {?}
     */
    function (current, amount, granularity) {
        if (granularity === void 0) { granularity = 'month'; }
        this.currentDateView = current.clone().add(amount, granularity);
        this.cd.markForCheck();
    };
    /**
     * @param {?} to
     * @return {?}
     */
    DayCalendarComponent.prototype.moveCalendarTo = /**
     * @param {?} to
     * @return {?}
     */
    function (to) {
        if (to) {
            this.currentDateView = this.utilsService.convertToMoment(to, this.componentConfig.format);
        }
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    DayCalendarComponent.prototype.shouldShowCurrent = /**
     * @return {?}
     */
    function () {
        return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, 'day', this.componentConfig.min, this.componentConfig.max);
    };
    /**
     * @return {?}
     */
    DayCalendarComponent.prototype.goToCurrent = /**
     * @return {?}
     */
    function () {
        this.currentDateView = moment$2();
        this.onGoToCurrent.emit();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    DayCalendarComponent.prototype.handleConfigChange = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config) {
            /** @type {?} */
            var prevConf = this.dayCalendarService.getConfig(config.previousValue);
            /** @type {?} */
            var currentConf = this.dayCalendarService.getConfig(config.currentValue);
            if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
                this._currentDateView = null;
            }
        }
    };
    DayCalendarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dp-day-calendar',
                    template: "<div class=\"dp-day-calendar-container\" *ngIf=\"currentCalendarMode ===  CalendarMode.Day\">\n  <dp-calendar-nav\n      [label]=\"navLabel\"\n      [showLeftNav]=\"showLeftNav\"\n      [showRightNav]=\"showRightNav\"\n      [isLabelClickable]=\"componentConfig.enableMonthSelector\"\n      [showGoToCurrent]=\"_shouldShowCurrent\"\n      [theme]=\"theme\"\n      (onLeftNav)=\"onLeftNavClick()\"\n      (onRightNav)=\"onRightNavClick()\"\n      (onLabelClick)=\"toggleCalendarMode(CalendarMode.Month)\"\n      (onGoToCurrent)=\"goToCurrent()\">\n  </dp-calendar-nav>\n\n  <div class=\"dp-calendar-wrapper\"\n       [ngClass]=\"{'dp-hide-near-month': !componentConfig.showNearMonthDays}\">\n    <div class=\"dp-weekdays\">\n      <span class=\"dp-calendar-weekday\"\n            *ngFor=\"let weekday of weekdays\"\n            [innerText]=\"getWeekdayName(weekday)\">\n      </span>\n    </div>\n    <div class=\"dp-calendar-week\" *ngFor=\"let week of weeks\">\n      <span class=\"dp-week-number\"\n            *ngIf=\"componentConfig.showWeekNumbers\"\n            [innerText]=\"week[0].date.isoWeek()\">\n      </span>\n      <button type=\"button\"\n              class=\"dp-calendar-day\"\n              *ngFor=\"let day of week\"\n              [attr.data-date]=\"day.date.format(componentConfig.format)\"\n              (click)=\"dayClicked(day)\"\n              [disabled]=\"day.disabled\"\n              [ngClass]=\"getDayBtnCssClass(day)\"\n              [innerText]=\"getDayBtnText(day)\">\n      </button>\n    </div>\n  </div>\n</div>\n\n<dp-month-calendar\n    *ngIf=\"currentCalendarMode ===  CalendarMode.Month\"\n    [config]=\"monthCalendarConfig\"\n    [displayDate]=\"_currentDateView\"\n    [theme]=\"theme\"\n    (onSelect)=\"monthSelected($event)\"\n    (onNavHeaderBtnClick)=\"toggleCalendarMode(CalendarMode.Day)\"\n    (onLeftNav)=\"onMonthCalendarLeftClick($event)\"\n    (onRightNav)=\"onMonthCalendarRightClick($event)\"\n    (onLeftSecondaryNav)=\"onMonthCalendarSecondaryLeftClick($event)\"\n    (onRightSecondaryNav)=\"onMonthCalendarSecondaryRightClick($event)\">\n</dp-month-calendar>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [
                        DayCalendarService,
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DayCalendarComponent; }),
                            multi: true
                        },
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DayCalendarComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["dp-day-calendar{display:inline-block}dp-day-calendar .dp-day-calendar-container{background:#fff}dp-day-calendar .dp-calendar-wrapper{box-sizing:border-box;border:1px solid #000}dp-day-calendar .dp-calendar-wrapper .dp-calendar-weekday:first-child{border-left:none}dp-day-calendar .dp-weekdays{font-size:15px;margin-bottom:5px}dp-day-calendar .dp-calendar-weekday{box-sizing:border-box;display:inline-block;width:30px;text-align:center;border-left:1px solid #000;border-bottom:1px solid #000}dp-day-calendar .dp-calendar-day{box-sizing:border-box;width:30px;height:30px;cursor:pointer}dp-day-calendar .dp-selected{background:#106cc8;color:#fff}dp-day-calendar .dp-next-month,dp-day-calendar .dp-prev-month{opacity:.5}dp-day-calendar .dp-hide-near-month .dp-next-month,dp-day-calendar .dp-hide-near-month .dp-prev-month{visibility:hidden}dp-day-calendar .dp-week-number{position:absolute;font-size:9px}dp-day-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;color:#7a7a7a;border:none}dp-day-calendar.dp-material .dp-calendar-wrapper{border:1px solid #e0e0e0}dp-day-calendar.dp-material .dp-calendar-day,dp-day-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:0}dp-day-calendar.dp-material .dp-calendar-day:hover,dp-day-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-day-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-day-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-day-calendar.dp-material .dp-current-day{border:1px solid #106cc8}"]
                }] }
    ];
    /** @nocollapse */
    DayCalendarComponent.ctorParameters = function () { return [
        { type: DayCalendarService },
        { type: UtilsService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    DayCalendarComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onMonthSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onNavHeaderBtnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onGoToCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onLeftNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRightNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DayCalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$3 = moment__WEBPACK_IMPORTED_MODULE_1__;
/** @type {?} */
var FIRST_PM_HOUR = 12;
var TimeSelectService = /** @class */ (function () {
    function TimeSelectService(utilsService) {
        this.utilsService = utilsService;
        this.DEFAULT_CONFIG = {
            hours12Format: 'hh',
            hours24Format: 'HH',
            meridiemFormat: 'A',
            minutesFormat: 'mm',
            minutesInterval: 1,
            secondsFormat: 'ss',
            secondsInterval: 1,
            showSeconds: false,
            showTwentyFourHours: false,
            timeSeparator: ':',
            locale: moment$3.locale()
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    TimeSelectService.prototype.getConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var timeConfigs = {
            maxTime: this.utilsService.onlyTime(config && config.maxTime),
            minTime: this.utilsService.onlyTime(config && config.minTime)
        };
        /** @type {?} */
        var _config = (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.DEFAULT_CONFIG, this.utilsService.clearUndefined(config), timeConfigs)));
        moment$3.locale(_config.locale);
        return _config;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    TimeSelectService.prototype.getTimeFormat = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return (config.showTwentyFourHours ? config.hours24Format : config.hours12Format)
            + config.timeSeparator + config.minutesFormat
            + (config.showSeconds ? (config.timeSeparator + config.secondsFormat) : '')
            + (config.showTwentyFourHours ? '' : ' ' + config.meridiemFormat);
    };
    /**
     * @param {?} config
     * @param {?} t
     * @return {?}
     */
    TimeSelectService.prototype.getHours = /**
     * @param {?} config
     * @param {?} t
     * @return {?}
     */
    function (config, t) {
        /** @type {?} */
        var time = t || moment$3();
        return time && time.format(config.showTwentyFourHours ? config.hours24Format : config.hours12Format);
    };
    /**
     * @param {?} config
     * @param {?} t
     * @return {?}
     */
    TimeSelectService.prototype.getMinutes = /**
     * @param {?} config
     * @param {?} t
     * @return {?}
     */
    function (config, t) {
        /** @type {?} */
        var time = t || moment$3();
        return time && time.format(config.minutesFormat);
    };
    /**
     * @param {?} config
     * @param {?} t
     * @return {?}
     */
    TimeSelectService.prototype.getSeconds = /**
     * @param {?} config
     * @param {?} t
     * @return {?}
     */
    function (config, t) {
        /** @type {?} */
        var time = t || moment$3();
        return time && time.format(config.secondsFormat);
    };
    /**
     * @param {?} config
     * @param {?} time
     * @return {?}
     */
    TimeSelectService.prototype.getMeridiem = /**
     * @param {?} config
     * @param {?} time
     * @return {?}
     */
    function (config, time) {
        return time && time.format(config.meridiemFormat);
    };
    /**
     * @param {?} config
     * @param {?} time
     * @param {?} unit
     * @return {?}
     */
    TimeSelectService.prototype.decrease = /**
     * @param {?} config
     * @param {?} time
     * @param {?} unit
     * @return {?}
     */
    function (config, time, unit) {
        /** @type {?} */
        var amount = 1;
        switch (unit) {
            case 'minute':
                amount = config.minutesInterval;
                break;
            case 'second':
                amount = config.secondsInterval;
                break;
        }
        return time.clone().subtract(amount, unit);
    };
    /**
     * @param {?} config
     * @param {?} time
     * @param {?} unit
     * @return {?}
     */
    TimeSelectService.prototype.increase = /**
     * @param {?} config
     * @param {?} time
     * @param {?} unit
     * @return {?}
     */
    function (config, time, unit) {
        /** @type {?} */
        var amount = 1;
        switch (unit) {
            case 'minute':
                amount = config.minutesInterval;
                break;
            case 'second':
                amount = config.secondsInterval;
                break;
        }
        return time.clone().add(amount, unit);
    };
    /**
     * @param {?} time
     * @return {?}
     */
    TimeSelectService.prototype.toggleMeridiem = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        if (time.hours() < FIRST_PM_HOUR) {
            return time.clone().add(12, 'hour');
        }
        else {
            return time.clone().subtract(12, 'hour');
        }
    };
    /**
     * @param {?} config
     * @param {?} time
     * @param {?} unit
     * @return {?}
     */
    TimeSelectService.prototype.shouldShowDecrease = /**
     * @param {?} config
     * @param {?} time
     * @param {?} unit
     * @return {?}
     */
    function (config, time, unit) {
        if (!config.min && !config.minTime) {
            return true;
        }
        /** @type {?} */
        var newTime = this.decrease(config, time, unit);
        return (!config.min || config.min.isSameOrBefore(newTime))
            && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
    };
    /**
     * @param {?} config
     * @param {?} time
     * @param {?} unit
     * @return {?}
     */
    TimeSelectService.prototype.shouldShowIncrease = /**
     * @param {?} config
     * @param {?} time
     * @param {?} unit
     * @return {?}
     */
    function (config, time, unit) {
        if (!config.max && !config.maxTime) {
            return true;
        }
        /** @type {?} */
        var newTime = this.increase(config, time, unit);
        return (!config.max || config.max.isSameOrAfter(newTime))
            && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime)));
    };
    /**
     * @param {?} config
     * @param {?} time
     * @return {?}
     */
    TimeSelectService.prototype.shouldShowToggleMeridiem = /**
     * @param {?} config
     * @param {?} time
     * @return {?}
     */
    function (config, time) {
        if (!config.min && !config.max && !config.minTime && !config.maxTime) {
            return true;
        }
        /** @type {?} */
        var newTime = this.toggleMeridiem(time);
        return (!config.max || config.max.isSameOrAfter(newTime))
            && (!config.min || config.min.isSameOrBefore(newTime))
            && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime)))
            && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
    };
    TimeSelectService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    TimeSelectService.ctorParameters = function () { return [
        { type: UtilsService }
    ]; };
    return TimeSelectService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$4 = moment__WEBPACK_IMPORTED_MODULE_1__;
/** @type {?} */
var DAY_FORMAT = 'YYYYMMDD';
/** @type {?} */
var TIME_FORMAT = 'HH:mm:ss';
/** @type {?} */
var COMBINED_FORMAT = DAY_FORMAT + TIME_FORMAT;
var DayTimeCalendarService = /** @class */ (function () {
    function DayTimeCalendarService(utilsService, dayCalendarService, timeSelectService) {
        this.utilsService = utilsService;
        this.dayCalendarService = dayCalendarService;
        this.timeSelectService = timeSelectService;
        this.DEFAULT_CONFIG = {
            locale: moment$4.locale()
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    DayTimeCalendarService.prototype.getConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var _config = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.DEFAULT_CONFIG, this.timeSelectService.getConfig(config), this.dayCalendarService.getConfig(config));
        moment$4.locale(config.locale);
        return _config;
    };
    /**
     * @param {?} current
     * @param {?} day
     * @param {?} config
     * @return {?}
     */
    DayTimeCalendarService.prototype.updateDay = /**
     * @param {?} current
     * @param {?} day
     * @param {?} config
     * @return {?}
     */
    function (current, day, config) {
        /** @type {?} */
        var time = current ? current : moment$4();
        /** @type {?} */
        var updated = moment$4(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);
        if (config.min) {
            /** @type {?} */
            var min = (/** @type {?} */ (config.min));
            updated = min.isAfter(updated) ? min : updated;
        }
        if (config.max) {
            /** @type {?} */
            var max = (/** @type {?} */ (config.max));
            updated = max.isBefore(updated) ? max : updated;
        }
        return updated;
    };
    /**
     * @param {?} current
     * @param {?} time
     * @return {?}
     */
    DayTimeCalendarService.prototype.updateTime = /**
     * @param {?} current
     * @param {?} time
     * @return {?}
     */
    function (current, time) {
        /** @type {?} */
        var day = current ? current : moment$4();
        return moment$4(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);
    };
    DayTimeCalendarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    DayTimeCalendarService.ctorParameters = function () { return [
        { type: UtilsService },
        { type: DayCalendarService },
        { type: TimeSelectService }
    ]; };
    return DayTimeCalendarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$5 = moment__WEBPACK_IMPORTED_MODULE_1__;
var TimeSelectComponent = /** @class */ (function () {
    function TimeSelectComponent(timeSelectService, utilsService, cd) {
        this.timeSelectService = timeSelectService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInited = false;
        this.api = {
            triggerChange: this.emitChange.bind(this)
        };
    }
    Object.defineProperty(TimeSelectComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.calculateTimeParts(this.selected);
            this.showDecHour = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, 'hour');
            this.showDecMinute = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, 'minute');
            this.showDecSecond = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, 'second');
            this.showIncHour = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, 'hour');
            this.showIncMinute = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, 'minute');
            this.showIncSecond = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, 'second');
            this.showToggleMeridiem = this.timeSelectService.shouldShowToggleMeridiem(this.componentConfig, this._selected);
            this.onChangeCallback(this.processOnChangeCallback(selected));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isInited = true;
        this.init();
        this.initValidators();
    };
    /**
     * @return {?}
     */
    TimeSelectComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        this.componentConfig = this.timeSelectService.getConfig(this.config);
        this.selected = this.selected || moment$5();
        this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TimeSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isInited) {
            var minDate = changes.minDate, maxDate = changes.maxDate, minTime = changes.minTime, maxTime = changes.maxTime;
            this.init();
            if (minDate || maxDate || minTime || maxTime) {
                this.initValidators();
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        if (value) {
            /** @type {?} */
            var momentValue = this.utilsService
                .convertToMomentArray(value, this.timeSelectService.getTimeFormat(this.componentConfig), false)[0];
            if (momentValue.isValid()) {
                this.selected = momentValue;
                this.inputValueType = this.utilsService
                    .getInputType(this.inputValue, false);
            }
        }
        this.cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TimeSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} _
     * @return {?}
     */
    TimeSelectComponent.prototype.onChangeCallback = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TimeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @param {?} formControl
     * @return {?}
     */
    TimeSelectComponent.prototype.validate = /**
     * @param {?} formControl
     * @return {?}
     */
    function (formControl) {
        if (this.minDate || this.maxDate || this.minTime || this.maxTime) {
            return this.validateFn(formControl.value);
        }
        else {
            return function () { return null; };
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeSelectComponent.prototype.processOnChangeCallback = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.utilsService.convertFromMomentArray(this.timeSelectService.getTimeFormat(this.componentConfig), [value], this.componentConfig.returnedValueType || this.inputValueType);
    };
    /**
     * @return {?}
     */
    TimeSelectComponent.prototype.initValidators = /**
     * @return {?}
     */
    function () {
        this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate,
            minTime: this.minTime,
            maxTime: this.maxTime
        }, undefined, 'day');
        this.onChangeCallback(this.processOnChangeCallback(this.selected));
    };
    /**
     * @param {?} unit
     * @return {?}
     */
    TimeSelectComponent.prototype.decrease = /**
     * @param {?} unit
     * @return {?}
     */
    function (unit) {
        this.selected = this.timeSelectService.decrease(this.componentConfig, this.selected, unit);
        this.emitChange();
    };
    /**
     * @param {?} unit
     * @return {?}
     */
    TimeSelectComponent.prototype.increase = /**
     * @param {?} unit
     * @return {?}
     */
    function (unit) {
        this.selected = this.timeSelectService.increase(this.componentConfig, this.selected, unit);
        this.emitChange();
    };
    /**
     * @return {?}
     */
    TimeSelectComponent.prototype.toggleMeridiem = /**
     * @return {?}
     */
    function () {
        this.selected = this.timeSelectService.toggleMeridiem(this.selected);
        this.emitChange();
    };
    /**
     * @return {?}
     */
    TimeSelectComponent.prototype.emitChange = /**
     * @return {?}
     */
    function () {
        this.onChange.emit({ date: this.selected, selected: false });
        this.cd.markForCheck();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    TimeSelectComponent.prototype.calculateTimeParts = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        this.hours = this.timeSelectService.getHours(this.componentConfig, time);
        this.minutes = this.timeSelectService.getMinutes(this.componentConfig, time);
        this.seconds = this.timeSelectService.getSeconds(this.componentConfig, time);
        this.meridiem = this.timeSelectService.getMeridiem(this.componentConfig, time);
    };
    TimeSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dp-time-select',
                    template: "<ul class=\"dp-time-select-controls\">\n  <li class=\"dp-time-select-control dp-time-select-control-hours\">\n    <button type=\"button\"\n            class=\"dp-time-select-control-up\"\n            [disabled]=\"!showIncHour\"\n            (click)=\"increase('hour')\">\n    </button>\n    <span class=\"dp-time-select-display-hours\"\n          [innerText]=\"hours\">\n    </span>\n    <button type=\"button\"\n            class=\"dp-time-select-control-down\"\n            [disabled]=\"!showDecHour\"\n            (click)=\"decrease('hour')\"></button>\n  </li>\n  <li class=\"dp-time-select-control dp-time-select-separator\"\n      [innerText]=\"componentConfig.timeSeparator\">\n  </li>\n  <li class=\"dp-time-select-control dp-time-select-control-minutes\">\n    <button type=\"button\"\n            class=\"dp-time-select-control-up\"\n            [disabled]=\"!showIncMinute\"\n            (click)=\"increase('minute')\"></button>\n    <span class=\"dp-time-select-display-minutes\"\n          [innerText]=\"minutes\">\n    </span>\n    <button type=\"button\"\n            [disabled]=\"!showDecMinute\" class=\"dp-time-select-control-down\"\n            (click)=\"decrease('minute')\"></button>\n  </li>\n  <ng-container *ngIf=\"componentConfig.showSeconds\">\n    <li class=\"dp-time-select-control dp-time-select-separator\"\n        [innerText]=\"componentConfig.timeSeparator\">\n    </li>\n    <li class=\"dp-time-select-control dp-time-select-control-seconds\">\n      <button type=\"button\"\n              class=\"dp-time-select-control-up\"\n              [disabled]=\"!showIncSecond\"\n              (click)=\"increase('second')\"></button>\n      <span class=\"dp-time-select-display-seconds\"\n            [innerText]=\"seconds\">\n      </span>\n      <button type=\"button\"\n              class=\"dp-time-select-control-down\"\n              [disabled]=\"!showDecSecond\"\n              (click)=\"decrease('second')\"></button>\n    </li>\n  </ng-container>\n  <li class=\"dp-time-select-control dp-time-select-control-meridiem\" *ngIf=\"!componentConfig.showTwentyFourHours\">\n    <button type=\"button\"\n            class=\"dp-time-select-control-up\"\n            [disabled]=\"!showToggleMeridiem\"\n            (click)=\"toggleMeridiem()\"></button>\n    <span class=\"dp-time-select-display-meridiem\"\n          [innerText]=\"meridiem\">\n    </span>\n    <button type=\"button\"\n            class=\"dp-time-select-control-down\"\n            [disabled]=\"!showToggleMeridiem\"\n            (click)=\"toggleMeridiem()\"></button>\n  </li>\n</ul>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [
                        TimeSelectService,
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TimeSelectComponent; }),
                            multi: true
                        },
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TimeSelectComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["dp-time-select{display:inline-block}dp-time-select .dp-time-select-controls{margin:0;padding:0;text-align:center;line-height:normal;background:#fff}dp-time-select .dp-time-select-control{display:inline-block;width:35px;margin:0 auto;vertical-align:middle;font-size:inherit;letter-spacing:1px}dp-time-select .dp-time-select-control-down,dp-time-select .dp-time-select-control-up{position:relative;display:block;width:24px;height:24px;margin:3px auto;cursor:pointer}dp-time-select .dp-time-select-control-down::before,dp-time-select .dp-time-select-control-up::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0}dp-time-select .dp-time-select-control-up::before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:4px}dp-time-select .dp-time-select-control-down::before{-webkit-transform:rotate(135deg);transform:rotate(135deg)}dp-time-select .dp-time-select-separator{width:5px}dp-time-select.dp-material .dp-time-select-control-down,dp-time-select.dp-material .dp-time-select-control-up{box-sizing:border-box;background:0 0;border:none;outline:0;border-radius:50%}dp-time-select.dp-material .dp-time-select-control-down::before,dp-time-select.dp-material .dp-time-select-control-up::before{left:0}dp-time-select.dp-material .dp-time-select-control-down:hover,dp-time-select.dp-material .dp-time-select-control-up:hover{background:#e0e0e0}"]
                }] }
    ];
    /** @nocollapse */
    TimeSelectComponent.ctorParameters = function () { return [
        { type: TimeSelectService },
        { type: UtilsService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    TimeSelectComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return TimeSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$6 = moment__WEBPACK_IMPORTED_MODULE_1__;
var DatePickerService = /** @class */ (function () {
    function DatePickerService(utilsService, timeSelectService, daytimeCalendarService) {
        this.utilsService = utilsService;
        this.timeSelectService = timeSelectService;
        this.daytimeCalendarService = daytimeCalendarService;
        this.onPickerClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defaultConfig = {
            closeOnSelect: true,
            closeOnSelectDelay: 100,
            format: 'DD-MM-YYYY',
            openOnFocus: true,
            openOnClick: true,
            onOpenDelay: 0,
            disableKeypress: false,
            showNearMonthDays: true,
            showWeekNumbers: false,
            enableMonthSelector: true,
            showGoToCurrent: true,
            locale: moment$6.locale(),
            hideOnOutsideClick: true
        };
    }
    // todo:: add unit tests
    // todo:: add unit tests
    /**
     * @param {?} config
     * @param {?=} mode
     * @return {?}
     */
    DatePickerService.prototype.getConfig = 
    // todo:: add unit tests
    /**
     * @param {?} config
     * @param {?=} mode
     * @return {?}
     */
    function (config, mode) {
        if (mode === void 0) { mode = 'daytime'; }
        /** @type {?} */
        var _config = (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.defaultConfig, { format: this.getDefaultFormatByMode(mode) }, this.utilsService.clearUndefined(config))));
        this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);
        if (config && config.allowMultiSelect && config.closeOnSelect === undefined) {
            _config.closeOnSelect = false;
        }
        moment$6.locale(_config.locale);
        return _config;
    };
    /**
     * @param {?} pickerConfig
     * @return {?}
     */
    DatePickerService.prototype.getDayConfigService = /**
     * @param {?} pickerConfig
     * @return {?}
     */
    function (pickerConfig) {
        return {
            min: pickerConfig.min,
            max: pickerConfig.max,
            isDayDisabledCallback: pickerConfig.isDayDisabledCallback,
            weekDayFormat: pickerConfig.weekDayFormat,
            showNearMonthDays: pickerConfig.showNearMonthDays,
            showWeekNumbers: pickerConfig.showWeekNumbers,
            firstDayOfWeek: pickerConfig.firstDayOfWeek,
            format: pickerConfig.format,
            allowMultiSelect: pickerConfig.allowMultiSelect,
            monthFormat: pickerConfig.monthFormat,
            monthFormatter: pickerConfig.monthFormatter,
            enableMonthSelector: pickerConfig.enableMonthSelector,
            yearFormat: pickerConfig.yearFormat,
            yearFormatter: pickerConfig.yearFormatter,
            dayBtnFormat: pickerConfig.dayBtnFormat,
            dayBtnFormatter: pickerConfig.dayBtnFormatter,
            dayBtnCssClassCallback: pickerConfig.dayBtnCssClassCallback,
            monthBtnFormat: pickerConfig.monthBtnFormat,
            monthBtnFormatter: pickerConfig.monthBtnFormatter,
            monthBtnCssClassCallback: pickerConfig.monthBtnCssClassCallback,
            multipleYearsNavigateBy: pickerConfig.multipleYearsNavigateBy,
            showMultipleYearsNavigation: pickerConfig.showMultipleYearsNavigation,
            locale: pickerConfig.locale,
            returnedValueType: pickerConfig.returnedValueType,
            showGoToCurrent: pickerConfig.showGoToCurrent,
            unSelectOnClick: pickerConfig.unSelectOnClick
        };
    };
    /**
     * @param {?} pickerConfig
     * @return {?}
     */
    DatePickerService.prototype.getDayTimeConfigService = /**
     * @param {?} pickerConfig
     * @return {?}
     */
    function (pickerConfig) {
        return this.daytimeCalendarService.getConfig(pickerConfig);
    };
    /**
     * @param {?} pickerConfig
     * @return {?}
     */
    DatePickerService.prototype.getTimeConfigService = /**
     * @param {?} pickerConfig
     * @return {?}
     */
    function (pickerConfig) {
        return this.timeSelectService.getConfig(pickerConfig);
    };
    /**
     * @return {?}
     */
    DatePickerService.prototype.pickerClosed = /**
     * @return {?}
     */
    function () {
        this.onPickerClosed.emit();
    };
    // todo:: add unit tests
    // todo:: add unit tests
    /**
     * @param {?} value
     * @param {?} config
     * @return {?}
     */
    DatePickerService.prototype.isValidInputDateValue = 
    // todo:: add unit tests
    /**
     * @param {?} value
     * @param {?} config
     * @return {?}
     */
    function (value, config) {
        var _this = this;
        value = value ? value : '';
        /** @type {?} */
        var datesStrArr = this.utilsService.datesStringToStringArray(value);
        return datesStrArr.every(function (date) { return _this.utilsService.isDateValid(date, config.format); });
    };
    // todo:: add unit tests
    // todo:: add unit tests
    /**
     * @param {?} value
     * @param {?} config
     * @return {?}
     */
    DatePickerService.prototype.convertInputValueToMomentArray = 
    // todo:: add unit tests
    /**
     * @param {?} value
     * @param {?} config
     * @return {?}
     */
    function (value, config) {
        value = value ? value : '';
        /** @type {?} */
        var datesStrArr = this.utilsService.datesStringToStringArray(value);
        return this.utilsService.convertToMomentArray(datesStrArr, config.format, config.allowMultiSelect);
    };
    /**
     * @private
     * @param {?} mode
     * @return {?}
     */
    DatePickerService.prototype.getDefaultFormatByMode = /**
     * @private
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        switch (mode) {
            case 'day':
                return 'DD-MM-YYYY';
            case 'daytime':
                return 'DD-MM-YYYY HH:mm:ss';
            case 'time':
                return 'HH:mm:ss';
            case 'month':
                return 'MMM, YYYY';
        }
    };
    DatePickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    DatePickerService.ctorParameters = function () { return [
        { type: UtilsService },
        { type: TimeSelectService },
        { type: DayTimeCalendarService }
    ]; };
    return DatePickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$7 = moment__WEBPACK_IMPORTED_MODULE_1__;
var MonthCalendarService = /** @class */ (function () {
    function MonthCalendarService(utilsService) {
        this.utilsService = utilsService;
        this.DEFAULT_CONFIG = {
            allowMultiSelect: false,
            yearFormat: 'YYYY',
            format: 'MM-YYYY',
            isNavHeaderBtnClickable: false,
            monthBtnFormat: 'MMM',
            locale: moment$7.locale(),
            multipleYearsNavigateBy: 10,
            showMultipleYearsNavigation: false,
            unSelectOnClick: true
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    MonthCalendarService.prototype.getConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var _config = (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.DEFAULT_CONFIG, this.utilsService.clearUndefined(config))));
        this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);
        moment$7.locale(_config.locale);
        return _config;
    };
    /**
     * @param {?} config
     * @param {?} year
     * @param {?=} selected
     * @return {?}
     */
    MonthCalendarService.prototype.generateYear = /**
     * @param {?} config
     * @param {?} year
     * @param {?=} selected
     * @return {?}
     */
    function (config, year, selected) {
        var _this = this;
        if (selected === void 0) { selected = null; }
        /** @type {?} */
        var index = year.clone().startOf('year');
        return this.utilsService.createArray(3).map(function () {
            return _this.utilsService.createArray(4).map(function () {
                /** @type {?} */
                var date = index.clone();
                /** @type {?} */
                var month = {
                    date: date,
                    selected: !!selected.find(function (s) { return index.isSame(s, 'month'); }),
                    currentMonth: index.isSame(moment$7(), 'month'),
                    disabled: _this.isMonthDisabled(date, config),
                    text: _this.getMonthBtnText(config, date)
                };
                index.add(1, 'month');
                return month;
            });
        });
    };
    /**
     * @param {?} date
     * @param {?} config
     * @return {?}
     */
    MonthCalendarService.prototype.isMonthDisabled = /**
     * @param {?} date
     * @param {?} config
     * @return {?}
     */
    function (date, config) {
        if (config.min && date.isBefore(config.min, 'month')) {
            return true;
        }
        return !!(config.max && date.isAfter(config.max, 'month'));
    };
    /**
     * @param {?} min
     * @param {?} currentMonthView
     * @return {?}
     */
    MonthCalendarService.prototype.shouldShowLeft = /**
     * @param {?} min
     * @param {?} currentMonthView
     * @return {?}
     */
    function (min, currentMonthView) {
        return min ? min.isBefore(currentMonthView, 'year') : true;
    };
    /**
     * @param {?} max
     * @param {?} currentMonthView
     * @return {?}
     */
    MonthCalendarService.prototype.shouldShowRight = /**
     * @param {?} max
     * @param {?} currentMonthView
     * @return {?}
     */
    function (max, currentMonthView) {
        return max ? max.isAfter(currentMonthView, 'year') : true;
    };
    /**
     * @param {?} config
     * @param {?} year
     * @return {?}
     */
    MonthCalendarService.prototype.getHeaderLabel = /**
     * @param {?} config
     * @param {?} year
     * @return {?}
     */
    function (config, year) {
        if (config.yearFormatter) {
            return config.yearFormatter(year);
        }
        return year.format(config.yearFormat);
    };
    /**
     * @param {?} config
     * @param {?} month
     * @return {?}
     */
    MonthCalendarService.prototype.getMonthBtnText = /**
     * @param {?} config
     * @param {?} month
     * @return {?}
     */
    function (config, month) {
        if (config.monthBtnFormatter) {
            return config.monthBtnFormatter(month);
        }
        return month.format(config.monthBtnFormat);
    };
    /**
     * @param {?} config
     * @param {?} month
     * @return {?}
     */
    MonthCalendarService.prototype.getMonthBtnCssClass = /**
     * @param {?} config
     * @param {?} month
     * @return {?}
     */
    function (config, month) {
        if (config.monthBtnCssClassCallback) {
            return config.monthBtnCssClassCallback(month);
        }
        return '';
    };
    MonthCalendarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    MonthCalendarService.ctorParameters = function () { return [
        { type: UtilsService }
    ]; };
    return MonthCalendarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$8 = moment__WEBPACK_IMPORTED_MODULE_1__;
var MonthCalendarComponent = /** @class */ (function () {
    function MonthCalendarComponent(monthCalendarService, utilsService, cd) {
        this.monthCalendarService = monthCalendarService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNavHeaderBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLeftSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRightSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInited = false;
        this._shouldShowCurrent = true;
        this.api = {
            toggleCalendar: this.toggleCalendarMode.bind(this),
            moveCalendarTo: this.moveCalendarTo.bind(this)
        };
    }
    Object.defineProperty(MonthCalendarComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.onChangeCallback(this.processOnChangeCallback(selected));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonthCalendarComponent.prototype, "currentDateView", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentDateView;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentDateView = current.clone();
            this.yearMonths = this.monthCalendarService
                .generateYear(this.componentConfig, this._currentDateView, this.selected);
            this.navLabel = this.monthCalendarService.getHeaderLabel(this.componentConfig, this.currentDateView);
            this.showLeftNav = this.monthCalendarService.shouldShowLeft(this.componentConfig.min, this._currentDateView);
            this.showRightNav = this.monthCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
            this.showSecondaryLeftNav = this.componentConfig.showMultipleYearsNavigation && this.showLeftNav;
            this.showSecondaryRightNav = this.componentConfig.showMultipleYearsNavigation && this.showRightNav;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isInited = true;
        this.init();
        this.initValidators();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isInited) {
            var minDate = changes.minDate, maxDate = changes.maxDate, config = changes.config;
            this.handleConfigChange(config);
            this.init();
            if (minDate || maxDate) {
                this.initValidators();
            }
        }
    };
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        this.componentConfig = this.monthCalendarService.getConfig(this.config);
        this.selected = this.selected || [];
        this.currentDateView = this.displayDate
            ? this.displayDate
            : this.utilsService
                .getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
        this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
        this._shouldShowCurrent = this.shouldShowCurrent();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MonthCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        if (value) {
            this.selected = this.utilsService
                .convertToMomentArray(value, this.componentConfig.format, this.componentConfig.allowMultiSelect);
            this.yearMonths = this.monthCalendarService
                .generateYear(this.componentConfig, this.currentDateView, this.selected);
            this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
        }
        else {
            this.selected = [];
            this.yearMonths = this.monthCalendarService
                .generateYear(this.componentConfig, this.currentDateView, this.selected);
        }
        this.cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MonthCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} _
     * @return {?}
     */
    MonthCalendarComponent.prototype.onChangeCallback = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MonthCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @param {?} formControl
     * @return {?}
     */
    MonthCalendarComponent.prototype.validate = /**
     * @param {?} formControl
     * @return {?}
     */
    function (formControl) {
        if (this.minDate || this.maxDate) {
            return this.validateFn(formControl.value);
        }
        else {
            return function () { return null; };
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MonthCalendarComponent.prototype.processOnChangeCallback = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.utilsService.convertFromMomentArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
    };
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.initValidators = /**
     * @return {?}
     */
    function () {
        this.validateFn = this.validateFn = this.utilsService.createValidator({ minDate: this.minDate, maxDate: this.maxDate }, this.componentConfig.format, 'month');
        this.onChangeCallback(this.processOnChangeCallback(this.selected));
    };
    /**
     * @param {?} month
     * @return {?}
     */
    MonthCalendarComponent.prototype.monthClicked = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        if (month.selected && !this.componentConfig.unSelectOnClick) {
            return;
        }
        this.selected = this.utilsService
            .updateSelected(this.componentConfig.allowMultiSelect, this.selected, month, 'month');
        this.yearMonths = this.monthCalendarService
            .generateYear(this.componentConfig, this.currentDateView, this.selected);
        this.onSelect.emit(month);
    };
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.onLeftNavClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var from = this.currentDateView.clone();
        this.currentDateView = this.currentDateView.clone().subtract(1, 'year');
        /** @type {?} */
        var to = this.currentDateView.clone();
        this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
        this.onLeftNav.emit({ from: from, to: to });
    };
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.onLeftSecondaryNavClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var navigateBy = this.componentConfig.multipleYearsNavigateBy;
        /** @type {?} */
        var isOutsideRange = this.componentConfig.min &&
            this.currentDateView.year() - this.componentConfig.min.year() < navigateBy;
        if (isOutsideRange) {
            navigateBy = this.currentDateView.year() - this.componentConfig.min.year();
        }
        /** @type {?} */
        var from = this.currentDateView.clone();
        this.currentDateView = this.currentDateView.clone().subtract(navigateBy, 'year');
        /** @type {?} */
        var to = this.currentDateView.clone();
        this.onLeftSecondaryNav.emit({ from: from, to: to });
    };
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.onRightNavClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var from = this.currentDateView.clone();
        this.currentDateView = this.currentDateView.clone().add(1, 'year');
        /** @type {?} */
        var to = this.currentDateView.clone();
        this.onRightNav.emit({ from: from, to: to });
    };
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.onRightSecondaryNavClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var navigateBy = this.componentConfig.multipleYearsNavigateBy;
        /** @type {?} */
        var isOutsideRange = this.componentConfig.max &&
            this.componentConfig.max.year() - this.currentDateView.year() < navigateBy;
        if (isOutsideRange) {
            navigateBy = this.componentConfig.max.year() - this.currentDateView.year();
        }
        /** @type {?} */
        var from = this.currentDateView.clone();
        this.currentDateView = this.currentDateView.clone().add(navigateBy, 'year');
        /** @type {?} */
        var to = this.currentDateView.clone();
        this.onRightSecondaryNav.emit({ from: from, to: to });
    };
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.toggleCalendarMode = /**
     * @return {?}
     */
    function () {
        this.onNavHeaderBtnClick.emit();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    MonthCalendarComponent.prototype.getMonthBtnCssClass = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var cssClass = {
            'dp-selected': month.selected,
            'dp-current-month': month.currentMonth
        };
        /** @type {?} */
        var customCssClass = this.monthCalendarService.getMonthBtnCssClass(this.componentConfig, month.date);
        if (customCssClass) {
            cssClass[customCssClass] = true;
        }
        return cssClass;
    };
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.shouldShowCurrent = /**
     * @return {?}
     */
    function () {
        return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, 'month', this.componentConfig.min, this.componentConfig.max);
    };
    /**
     * @return {?}
     */
    MonthCalendarComponent.prototype.goToCurrent = /**
     * @return {?}
     */
    function () {
        this.currentDateView = moment$8();
        this.onGoToCurrent.emit();
    };
    /**
     * @param {?} to
     * @return {?}
     */
    MonthCalendarComponent.prototype.moveCalendarTo = /**
     * @param {?} to
     * @return {?}
     */
    function (to) {
        if (to) {
            this.currentDateView = this.utilsService.convertToMoment(to, this.componentConfig.format);
            this.cd.markForCheck();
        }
    };
    /**
     * @param {?} config
     * @return {?}
     */
    MonthCalendarComponent.prototype.handleConfigChange = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config) {
            /** @type {?} */
            var prevConf = this.monthCalendarService.getConfig(config.previousValue);
            /** @type {?} */
            var currentConf = this.monthCalendarService.getConfig(config.currentValue);
            if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
                this._currentDateView = null;
            }
        }
    };
    MonthCalendarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dp-month-calendar',
                    template: "<div class=\"dp-month-calendar-container\">\n  <dp-calendar-nav\n      [label]=\"navLabel\"\n      [showLeftNav]=\"showLeftNav\"\n      [showLeftSecondaryNav]=\"showSecondaryLeftNav\"\n      [showRightNav]=\"showRightNav\"\n      [showRightSecondaryNav]=\"showSecondaryRightNav\"\n      [isLabelClickable]=\"componentConfig.isNavHeaderBtnClickable\"\n      [showGoToCurrent]=\"shouldShowCurrent()\"\n      [theme]=\"theme\"\n      (onLeftNav)=\"onLeftNavClick()\"\n      (onLeftSecondaryNav)=\"onLeftSecondaryNavClick()\"\n      (onRightNav)=\"onRightNavClick()\"\n      (onRightSecondaryNav)=\"onRightSecondaryNavClick()\"\n      (onLabelClick)=\"toggleCalendarMode()\"\n      (onGoToCurrent)=\"goToCurrent()\">\n  </dp-calendar-nav>\n\n  <div class=\"dp-calendar-wrapper\">\n    <div class=\"dp-months-row\" *ngFor=\"let monthRow of yearMonths\">\n      <button type=\"button\"\n              class=\"dp-calendar-month\"\n              *ngFor=\"let month of monthRow\"\n              [attr.data-date]=\"month.date.format(componentConfig.format)\"\n              [disabled]=\"month.disabled\"\n              [ngClass]=\"getMonthBtnCssClass(month)\"\n              (click)=\"monthClicked(month)\"\n              [innerText]=\"month.text\">\n      </button>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [
                        MonthCalendarService,
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MonthCalendarComponent; }),
                            multi: true
                        },
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MonthCalendarComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["dp-month-calendar{display:inline-block}dp-month-calendar .dp-month-calendar-container{background:#fff}dp-month-calendar .dp-calendar-wrapper{border:1px solid #000}dp-month-calendar .dp-calendar-month{box-sizing:border-box;width:52.5px;height:52.5px;cursor:pointer}dp-month-calendar .dp-calendar-month.dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;background:#e0e0e0;border:1px solid #e0e0e0}dp-month-calendar.dp-material .dp-calendar-wrapper{border:1px solid #e0e0e0}dp-month-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:0}dp-month-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-month-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-month-calendar.dp-material .dp-current-month{border:1px solid #106cc8}"]
                }] }
    ];
    /** @nocollapse */
    MonthCalendarComponent.ctorParameters = function () { return [
        { type: MonthCalendarService },
        { type: UtilsService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    MonthCalendarComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onNavHeaderBtnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onGoToCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onLeftNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRightNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onLeftSecondaryNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRightSecondaryNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MonthCalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DayTimeCalendarComponent = /** @class */ (function () {
    function DayTimeCalendarComponent(dayTimeCalendarService, utilsService, cd) {
        this.dayTimeCalendarService = dayTimeCalendarService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInited = false;
        this.api = {
            moveCalendarTo: this.moveCalendarTo.bind(this)
        };
    }
    Object.defineProperty(DayTimeCalendarComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.onChangeCallback(this.processOnChangeCallback(selected));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isInited = true;
        this.init();
        this.initValidators();
    };
    /**
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        this.componentConfig = this.dayTimeCalendarService.getConfig(this.config);
        this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isInited) {
            var minDate = changes.minDate, maxDate = changes.maxDate;
            this.init();
            if (minDate || maxDate) {
                this.initValidators();
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        if (value) {
            this.selected = this.utilsService
                .convertToMomentArray(value, this.componentConfig.format, false)[0];
            this.inputValueType = this.utilsService
                .getInputType(this.inputValue, false);
        }
        else {
            this.selected = null;
        }
        this.cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} _
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.onChangeCallback = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @param {?} formControl
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.validate = /**
     * @param {?} formControl
     * @return {?}
     */
    function (formControl) {
        if (this.minDate || this.maxDate) {
            return this.validateFn(formControl.value);
        }
        else {
            return function () { return null; };
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.processOnChangeCallback = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.utilsService.convertFromMomentArray(this.componentConfig.format, [value], this.componentConfig.returnedValueType || this.inputValueType);
    };
    /**
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.initValidators = /**
     * @return {?}
     */
    function () {
        this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate
        }, undefined, 'daytime');
        this.onChangeCallback(this.processOnChangeCallback(this.selected));
    };
    /**
     * @param {?} day
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.dateSelected = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        this.selected = this.dayTimeCalendarService.updateDay(this.selected, day.date, this.config);
        this.emitChange();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.timeChange = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        this.selected = this.dayTimeCalendarService.updateTime(this.selected, time.date);
        this.emitChange();
    };
    /**
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.emitChange = /**
     * @return {?}
     */
    function () {
        this.onChange.emit({ date: this.selected, selected: false });
    };
    /**
     * @param {?} to
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.moveCalendarTo = /**
     * @param {?} to
     * @return {?}
     */
    function (to) {
        if (to) {
            this.dayCalendarRef.moveCalendarTo(to);
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.onLeftNavClick = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.onLeftNav.emit(change);
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DayTimeCalendarComponent.prototype.onRightNavClick = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.onRightNav.emit(change);
    };
    DayTimeCalendarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dp-day-time-calendar',
                    template: "<dp-day-calendar #dayCalendar\n                 [config]=\"componentConfig\"\n                 [ngModel]=\"_selected\"\n                 [theme]=\"theme\"\n                 [displayDate]=\"displayDate\"\n                 (onSelect)=\"dateSelected($event)\"\n                 (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                 (onLeftNav)=\"onLeftNavClick($event)\"\n                 (onRightNav)=\"onRightNavClick($event)\">\n</dp-day-calendar>\n<dp-time-select #timeSelect\n                [config]=\"componentConfig\"\n                [ngModel]=\"_selected\"\n                (onChange)=\"timeChange($event)\"\n                [theme]=\"theme\">\n</dp-time-select>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    providers: [
                        DayTimeCalendarService,
                        DayCalendarService,
                        TimeSelectService,
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DayTimeCalendarComponent; }),
                            multi: true
                        },
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DayTimeCalendarComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["dp-day-time-calendar{display:inline-block}dp-day-time-calendar dp-time-select{display:block;border:1px solid #000;border-top:0}dp-day-time-calendar.dp-material dp-time-select{border:1px solid #e0e0e0;border-top:0}"]
                }] }
    ];
    /** @nocollapse */
    DayTimeCalendarComponent.ctorParameters = function () { return [
        { type: DayTimeCalendarService },
        { type: UtilsService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    DayTimeCalendarComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onGoToCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onLeftNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRightNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dayCalendarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dayCalendar',] }]
    };
    return DayTimeCalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(dayPickerService, domHelper, elemRef, renderer, utilsService, cd) {
        this.dayPickerService = dayPickerService;
        this.domHelper = domHelper;
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.utilsService = utilsService;
        this.cd = cd;
        this.isInitialized = false;
        this.mode = 'day';
        this.placeholder = '';
        this.disabled = false;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._areCalendarsShown = false;
        this.hideStateHelper = false;
        this._selected = [];
        this.isFocusedTrigger = false;
        this.handleInnerElementClickUnlisteners = [];
        this.globalListenersUnlisteners = [];
        this.api = {
            open: this.showCalendars.bind(this),
            close: this.hideCalendar.bind(this),
            moveCalendarTo: this.moveCalendarTo.bind(this)
        };
        this.selectEvent = SelectEvent;
    }
    Object.defineProperty(DatePickerComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.inputElementValue = ((/** @type {?} */ (this.utilsService
                .convertFromMomentArray(this.componentConfig.format, selected, ECalendarValue.StringArr))))
                .join(' | ');
            /** @type {?} */
            var val = this.processOnChangeCallback(selected);
            this.onChangeCallback(val, false);
            this.onChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerComponent.prototype, "areCalendarsShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._areCalendarsShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.startGlobalListeners();
                this.domHelper.appendElementToPosition({
                    container: this.appendToElement,
                    element: this.calendarWrapper,
                    anchor: this.inputElementContainer,
                    dimElem: this.popupElem,
                    drops: this.componentConfig.drops,
                    opens: this.componentConfig.opens
                });
            }
            else {
                this.stopGlobalListeners();
                this.dayPickerService.pickerClosed();
            }
            this._areCalendarsShown = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerComponent.prototype, "openOnFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentConfig.openOnFocus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerComponent.prototype, "openOnClick", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentConfig.openOnClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerComponent.prototype, "currentDateView", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentDateView;
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this._currentDateView = date;
            if (this.dayCalendarRef) {
                this.dayCalendarRef.moveCalendarTo(date);
            }
            if (this.monthCalendarRef) {
                this.monthCalendarRef.moveCalendarTo(date);
            }
            if (this.dayTimeCalendarRef) {
                this.dayTimeCalendarRef.moveCalendarTo(date);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.openOnClick) {
            return;
        }
        if (!this.isFocusedTrigger && !this.disabled) {
            this.hideStateHelper = true;
            if (!this.areCalendarsShown) {
                this.showCalendars();
            }
        }
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.onBodyClick = /**
     * @return {?}
     */
    function () {
        if (this.componentConfig.hideOnOutsideClick) {
            if (!this.hideStateHelper && this.areCalendarsShown) {
                this.hideCalendar();
            }
            this.hideStateHelper = false;
        }
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        if (this.areCalendarsShown) {
            this.domHelper.setElementPosition({
                container: this.appendToElement,
                element: this.calendarWrapper,
                anchor: this.inputElementContainer,
                dimElem: this.popupElem,
                drops: this.componentConfig.drops,
                opens: this.componentConfig.opens
            });
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        if (value || value === '') {
            this.selected = this.utilsService
                .convertToMomentArray(value, this.componentConfig.format, this.componentConfig.allowMultiSelect);
            this.init();
        }
        else {
            this.selected = [];
        }
        this.cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} _
     * @param {?} changedByInput
     * @return {?}
     */
    DatePickerComponent.prototype.onChangeCallback = /**
     * @param {?} _
     * @param {?} changedByInput
     * @return {?}
     */
    function (_, changedByInput) {
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.onTouchedCallback = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} formControl
     * @return {?}
     */
    DatePickerComponent.prototype.validate = /**
     * @param {?} formControl
     * @return {?}
     */
    function (formControl) {
        return this.validateFn(formControl.value);
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    DatePickerComponent.prototype.processOnChangeCallback = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        if (typeof selected === 'string') {
            return selected;
        }
        else {
            return this.utilsService.convertFromMomentArray(this.componentConfig.format, selected, this.componentConfig.returnedValueType || this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect));
        }
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.initValidators = /**
     * @return {?}
     */
    function () {
        this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate,
            minTime: this.minTime,
            maxTime: this.maxTime
        }, this.componentConfig.format, this.mode);
        this.onChangeCallback(this.processOnChangeCallback(this.selected), false);
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isInitialized = true;
        this.init();
        this.initValidators();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DatePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isInitialized) {
            var minDate = changes.minDate, maxDate = changes.maxDate, minTime = changes.minTime, maxTime = changes.maxTime;
            this.init();
            if (minDate || maxDate || minTime || maxTime) {
                this.initValidators();
            }
        }
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setElementPositionInDom();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DatePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.setElementPositionInDom = /**
     * @return {?}
     */
    function () {
        this.calendarWrapper = (/** @type {?} */ (this.calendarContainer.nativeElement));
        this.setInputElementContainer();
        this.popupElem = this.elemRef.nativeElement.querySelector('.dp-popup');
        this.handleInnerElementClick(this.popupElem);
        var appendTo = this.componentConfig.appendTo;
        if (appendTo) {
            if (typeof appendTo === 'string') {
                this.appendToElement = (/** @type {?} */ (document.querySelector((/** @type {?} */ (appendTo)))));
            }
            else {
                this.appendToElement = (/** @type {?} */ (appendTo));
            }
        }
        else {
            this.appendToElement = this.elemRef.nativeElement;
        }
        this.appendToElement.appendChild(this.calendarWrapper);
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.setInputElementContainer = /**
     * @return {?}
     */
    function () {
        this.inputElementContainer = this.utilsService.getNativeElement(this.componentConfig.inputElementContainer)
            || this.elemRef.nativeElement.querySelector('.dp-input-container')
            || document.body;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DatePickerComponent.prototype.handleInnerElementClick = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        this.handleInnerElementClickUnlisteners.push(this.renderer.listen(element, 'click', function () {
            _this.hideStateHelper = true;
        }));
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        this.componentConfig = this.dayPickerService.getConfig(this.config, this.mode);
        this.currentDateView = this.displayDate
            ? this.utilsService.convertToMoment(this.displayDate, this.componentConfig.format).clone()
            : this.utilsService
                .getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
        this.dayCalendarConfig = this.dayPickerService.getDayConfigService(this.componentConfig);
        this.dayTimeCalendarConfig = this.dayPickerService.getDayTimeConfigService(this.componentConfig);
        this.timeSelectConfig = this.dayPickerService.getTimeConfigService(this.componentConfig);
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.inputFocused = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.openOnFocus) {
            return;
        }
        this.isFocusedTrigger = true;
        setTimeout(function () {
            if (!_this.areCalendarsShown) {
                _this.showCalendars();
            }
            _this.hideStateHelper = false;
            _this.isFocusedTrigger = false;
            _this.cd.markForCheck();
        }, this.componentConfig.onOpenDelay);
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.inputBlurred = /**
     * @return {?}
     */
    function () {
        this.onTouchedCallback();
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.showCalendars = /**
     * @return {?}
     */
    function () {
        this.hideStateHelper = true;
        this.areCalendarsShown = true;
        if (this.timeSelectRef) {
            this.timeSelectRef.api.triggerChange();
        }
        this.open.emit();
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.hideCalendar = /**
     * @return {?}
     */
    function () {
        this.areCalendarsShown = false;
        if (this.dayCalendarRef) {
            this.dayCalendarRef.api.toggleCalendarMode(ECalendarMode.Day);
        }
        this.close.emit();
        this.cd.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerComponent.prototype.onViewDateChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var strVal = value ? this.utilsService.convertToString(value, this.componentConfig.format) : '';
        if (this.dayPickerService.isValidInputDateValue(strVal, this.componentConfig)) {
            this.selected = this.dayPickerService.convertInputValueToMomentArray(strVal, this.componentConfig);
            this.currentDateView = this.selected.length
                ? this.utilsService.getDefaultDisplayDate(null, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min)
                : this.currentDateView;
            this.onSelect.emit({
                date: strVal,
                type: SelectEvent.INPUT,
                granularity: null
            });
        }
        else {
            this._selected = this.utilsService
                .getValidMomentArray(strVal, this.componentConfig.format);
            this.onChangeCallback(this.processOnChangeCallback(strVal), true);
        }
    };
    /**
     * @param {?} date
     * @param {?} granularity
     * @param {?} type
     * @param {?=} ignoreClose
     * @return {?}
     */
    DatePickerComponent.prototype.dateSelected = /**
     * @param {?} date
     * @param {?} granularity
     * @param {?} type
     * @param {?=} ignoreClose
     * @return {?}
     */
    function (date, granularity, type, ignoreClose) {
        this.selected = this.utilsService
            .updateSelected(this.componentConfig.allowMultiSelect, this.selected, date, granularity);
        if (!ignoreClose) {
            this.onDateClick();
        }
        this.onSelect.emit({
            date: date.date,
            granularity: granularity,
            type: type
        });
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.onDateClick = /**
     * @return {?}
     */
    function () {
        if (this.componentConfig.closeOnSelect) {
            setTimeout(this.hideCalendar.bind(this), this.componentConfig.closeOnSelectDelay);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onKeyPress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case (9):
            case (27):
                this.hideCalendar();
                break;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatePickerComponent.prototype.moveCalendarTo = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var momentDate = this.utilsService.convertToMoment(date, this.componentConfig.format);
        this.currentDateView = momentDate;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DatePickerComponent.prototype.onLeftNavClick = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.onLeftNav.emit(change);
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DatePickerComponent.prototype.onRightNavClick = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.onRightNav.emit(change);
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.startGlobalListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.globalListenersUnlisteners.push(this.renderer.listen(document, 'keydown', function (e) {
            _this.onKeyPress(e);
        }), this.renderer.listen(document, 'scroll', function () {
            _this.onScroll();
        }), this.renderer.listen(document, 'click', function () {
            _this.onBodyClick();
        }));
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.stopGlobalListeners = /**
     * @return {?}
     */
    function () {
        this.globalListenersUnlisteners.forEach(function (ul) { return ul(); });
        this.globalListenersUnlisteners = [];
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.handleInnerElementClickUnlisteners.forEach(function (ul) { return ul(); });
        if (this.appendToElement) {
            this.appendToElement.removeChild(this.calendarWrapper);
        }
    };
    DatePickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dp-date-picker',
                    template: "<div [ngClass]=\"{'dp-open': areCalendarsShown}\">\n  <div class=\"dp-input-container\"\n       [hidden]=\"componentConfig.hideInputContainer\"\n       [attr.data-hidden]=\"componentConfig.hideInputContainer\">\n    <input type=\"text\"\n           class=\"dp-picker-input\"\n           [placeholder]=\"placeholder\"\n           [ngModel]=\"inputElementValue\"\n           (ngModelChange)=\"onViewDateChange($event)\"\n           (focus)=\"inputFocused()\"\n           (blur)=\"inputBlurred()\"\n           [readonly]=\"componentConfig.disableKeypress\"\n           [disabled]=\"disabled\"/>\n  </div>\n  <div #container>\n    <div class=\"dp-popup {{theme}}\"\n         [ngSwitch]=\"mode\"\n         [hidden]=\"!_areCalendarsShown\"\n         [attr.data-hidden]=\"!_areCalendarsShown\">\n      <dp-day-calendar #dayCalendar\n                       *ngSwitchCase=\"'day'\"\n                       [config]=\"dayCalendarConfig\"\n                       [ngModel]=\"_selected\"\n                       [displayDate]=\"displayDate\"\n                       [theme]=\"theme\"\n                       (onSelect)=\"dateSelected($event, 'day', selectEvent.SELECTION, false)\"\n                       (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                       (onLeftNav)=\"onLeftNavClick($event)\"\n                       (onRightNav)=\"onRightNavClick($event)\">\n      </dp-day-calendar>\n\n      <dp-month-calendar #monthCalendar\n                         *ngSwitchCase=\"'month'\"\n                         [config]=\"dayCalendarConfig\"\n                         [ngModel]=\"_selected\"\n                         [displayDate]=\"displayDate\"\n                         [theme]=\"theme\"\n                         (onSelect)=\"dateSelected($event, 'month', selectEvent.SELECTION, false)\"\n                         (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                         (onLeftNav)=\"onLeftNavClick($event)\"\n                         (onRightNav)=\"onRightNavClick($event)\">\n      </dp-month-calendar>\n\n      <dp-time-select #timeSelect\n                      *ngSwitchCase=\"'time'\"\n                      [config]=\"timeSelectConfig\"\n                      [ngModel]=\"_selected && _selected[0]\"\n                      (onChange)=\"dateSelected($event, 'second', selectEvent.SELECTION, true)\"\n                      [theme]=\"theme\">\n      </dp-time-select>\n\n      <dp-day-time-calendar #daytimeCalendar\n                            *ngSwitchCase=\"'daytime'\"\n                            [config]=\"dayTimeCalendarConfig\"\n                            [displayDate]=\"displayDate\"\n                            [ngModel]=\"_selected && _selected[0]\"\n                            [theme]=\"theme\"\n                            (onChange)=\"dateSelected($event, 'second', selectEvent.SELECTION, true)\"\n                            (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                            (onLeftNav)=\"onLeftNavClick($event)\"\n                            (onRightNav)=\"onRightNavClick($event)\">\n      </dp-day-time-calendar>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [
                        DatePickerService,
                        DayTimeCalendarService,
                        DayCalendarService,
                        TimeSelectService,
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DatePickerComponent; }),
                            multi: true
                        },
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DatePickerComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["dp-date-picker{display:inline-block}dp-date-picker.dp-material .dp-picker-input{box-sizing:border-box;height:30px;width:213px;font-size:13px;outline:0}dp-date-picker .dp-input-container{position:relative}dp-date-picker .dp-selected{background:#106cc8;color:#fff}.dp-popup{position:relative;background:#fff;box-shadow:1px 1px 5px 0 rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);z-index:9999;white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: DatePickerService },
        { type: DomHelper },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"] },
        { type: UtilsService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    DatePickerComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onGoToCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onLeftNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRightNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        calendarContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container',] }],
        dayCalendarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dayCalendar',] }],
        monthCalendarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['monthCalendar',] }],
        dayTimeCalendarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['daytimeCalendar',] }],
        timeSelectRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['timeSelect',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
        onScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
    };
    return DatePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatePickerDirectiveService = /** @class */ (function () {
    function DatePickerDirectiveService(utilsService) {
        this.utilsService = utilsService;
    }
    /**
     * @param {?} attachTo
     * @param {?} baseElement
     * @return {?}
     */
    DatePickerDirectiveService.prototype.convertToHTMLElement = /**
     * @param {?} attachTo
     * @param {?} baseElement
     * @return {?}
     */
    function (attachTo, baseElement) {
        if (typeof attachTo === 'string') {
            return this.utilsService.closestParent(baseElement, attachTo);
        }
        else if (attachTo) {
            return attachTo.nativeElement;
        }
        return undefined;
    };
    /**
     * @param {?=} config
     * @param {?=} baseElement
     * @param {?=} attachTo
     * @return {?}
     */
    DatePickerDirectiveService.prototype.getConfig = /**
     * @param {?=} config
     * @param {?=} baseElement
     * @param {?=} attachTo
     * @return {?}
     */
    function (config, baseElement, attachTo) {
        if (config === void 0) { config = {}; }
        /** @type {?} */
        var _config = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, config);
        _config.hideInputContainer = true;
        /** @type {?} */
        var native;
        if (config.inputElementContainer) {
            native = this.utilsService.getNativeElement(config.inputElementContainer);
        }
        else {
            native = baseElement ? baseElement.nativeElement : null;
        }
        if (native) {
            _config.inputElementContainer = attachTo
                ? this.convertToHTMLElement(attachTo, native)
                : native;
        }
        return _config;
    };
    DatePickerDirectiveService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    DatePickerDirectiveService.ctorParameters = function () { return [
        { type: UtilsService }
    ]; };
    return DatePickerDirectiveService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatePickerDirective = /** @class */ (function () {
    function DatePickerDirective(viewContainerRef, elemRef, componentFactoryResolver, service, formControl, utilsService) {
        this.viewContainerRef = viewContainerRef;
        this.elemRef = elemRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.service = service;
        this.formControl = formControl;
        this.utilsService = utilsService;
        this._mode = 'day';
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DatePickerDirective.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this._config = this.service.getConfig(config, this.viewContainerRef.element, this.attachTo);
            this.updateDatepickerConfig();
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "attachTo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._attachTo;
        },
        set: /**
         * @param {?} attachTo
         * @return {?}
         */
        function (attachTo) {
            this._attachTo = attachTo;
            this._config = this.service.getConfig(this.config, this.viewContainerRef.element, this.attachTo);
            this.updateDatepickerConfig();
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "theme", {
        get: /**
         * @return {?}
         */
        function () {
            return this._theme;
        },
        set: /**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            this._theme = theme;
            if (this.datePicker) {
                this.datePicker.theme = theme;
            }
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this._mode = mode;
            if (this.datePicker) {
                this.datePicker.mode = mode;
            }
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "minDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._minDate;
        },
        set: /**
         * @param {?} minDate
         * @return {?}
         */
        function (minDate) {
            this._minDate = minDate;
            if (this.datePicker) {
                this.datePicker.minDate = minDate;
                this.datePicker.ngOnInit();
            }
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "maxDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maxDate;
        },
        set: /**
         * @param {?} maxDate
         * @return {?}
         */
        function (maxDate) {
            this._maxDate = maxDate;
            if (this.datePicker) {
                this.datePicker.maxDate = maxDate;
                this.datePicker.ngOnInit();
            }
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "minTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._minTime;
        },
        set: /**
         * @param {?} minTime
         * @return {?}
         */
        function (minTime) {
            this._minTime = minTime;
            if (this.datePicker) {
                this.datePicker.minTime = minTime;
                this.datePicker.ngOnInit();
            }
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "maxTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maxTime;
        },
        set: /**
         * @param {?} maxTime
         * @return {?}
         */
        function (maxTime) {
            this._maxTime = maxTime;
            if (this.datePicker) {
                this.datePicker.maxTime = maxTime;
                this.datePicker.ngOnInit();
            }
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "displayDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayDate;
        },
        set: /**
         * @param {?} displayDate
         * @return {?}
         */
        function (displayDate) {
            this._displayDate = displayDate;
            this.updateDatepickerConfig();
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DatePickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.datePicker = this.createDatePicker();
        this.api = this.datePicker.api;
        this.updateDatepickerConfig();
        this.attachModelToDatePicker();
        this.datePicker.theme = this.theme;
    };
    /**
     * @return {?}
     */
    DatePickerDirective.prototype.createDatePicker = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(DatePickerComponent);
        return this.viewContainerRef.createComponent(factory).instance;
    };
    /**
     * @return {?}
     */
    DatePickerDirective.prototype.attachModelToDatePicker = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.formControl) {
            return;
        }
        this.datePicker.onViewDateChange(this.formControl.value);
        this.formControl.valueChanges.subscribe(function (value) {
            if (value !== _this.datePicker.inputElementValue) {
                /** @type {?} */
                var strVal = _this.utilsService.convertToString(value, _this.datePicker.componentConfig.format);
                _this.datePicker.onViewDateChange(strVal);
            }
        });
        /** @type {?} */
        var setup = true;
        this.datePicker.registerOnChange(function (value, changedByInput) {
            if (value) {
                /** @type {?} */
                var isMultiselectEmpty = setup && Array.isArray(value) && !value.length;
                if (!isMultiselectEmpty && !changedByInput) {
                    _this.formControl.control.setValue(_this.datePicker.inputElementValue);
                }
            }
            /** @type {?} */
            var errors = _this.datePicker.validateFn(value);
            if (!setup) {
                _this.formControl.control.markAsDirty({
                    onlySelf: true
                });
            }
            else {
                setup = false;
            }
            if (errors) {
                if (errors.hasOwnProperty('format')) {
                    var given = errors['format'].given;
                    _this.datePicker.inputElementValue = given;
                    if (!changedByInput) {
                        _this.formControl.control.setValue(given);
                    }
                }
                _this.formControl.control.setErrors(errors);
            }
        });
    };
    /**
     * @return {?}
     */
    DatePickerDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.datePicker.onClick();
    };
    /**
     * @return {?}
     */
    DatePickerDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.datePicker.inputFocused();
    };
    /**
     * @private
     * @return {?}
     */
    DatePickerDirective.prototype.updateDatepickerConfig = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.datePicker) {
            this.datePicker.minDate = this.minDate;
            this.datePicker.maxDate = this.maxDate;
            this.datePicker.minTime = this.minTime;
            this.datePicker.maxTime = this.maxTime;
            this.datePicker.mode = this.mode || 'day';
            this.datePicker.displayDate = this.displayDate;
            this.datePicker.config = this.config;
            this.datePicker.open = this.open;
            this.datePicker.close = this.close;
            this.datePicker.onChange = this.onChange;
            this.datePicker.onGoToCurrent = this.onGoToCurrent;
            this.datePicker.onLeftNav = this.onLeftNav;
            this.datePicker.onRightNav = this.onRightNav;
            this.datePicker.onSelect = this.onSelect;
            this.datePicker.init();
            if (this.datePicker.componentConfig.disableKeypress) {
                this.elemRef.nativeElement.setAttribute('readonly', true);
            }
            else {
                this.elemRef.nativeElement.removeAttribute('readonly');
            }
        }
    };
    /**
     * @return {?}
     */
    DatePickerDirective.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        if (this.datePicker) {
            this.datePicker.cd.markForCheck();
        }
    };
    DatePickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    exportAs: 'dpDayPicker',
                    providers: [DatePickerDirectiveService],
                    selector: '[dpDayPicker]'
                },] }
    ];
    /** @nocollapse */
    DatePickerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: DatePickerDirectiveService },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: UtilsService }
    ]; };
    DatePickerDirective.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['dpDayPicker',] }],
        attachTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onGoToCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onLeftNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRightNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
        onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }]
    };
    return DatePickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarNavComponent = /** @class */ (function () {
    function CalendarNavComponent() {
        this.isLabelClickable = false;
        this.showLeftNav = true;
        this.showLeftSecondaryNav = false;
        this.showRightNav = true;
        this.showRightSecondaryNav = false;
        this.leftNavDisabled = false;
        this.leftSecondaryNavDisabled = false;
        this.rightNavDisabled = false;
        this.rightSecondaryNavDisabled = false;
        this.showGoToCurrent = true;
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLeftSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRightSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLabelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    CalendarNavComponent.prototype.leftNavClicked = /**
     * @return {?}
     */
    function () {
        this.onLeftNav.emit();
    };
    /**
     * @return {?}
     */
    CalendarNavComponent.prototype.leftSecondaryNavClicked = /**
     * @return {?}
     */
    function () {
        this.onLeftSecondaryNav.emit();
    };
    /**
     * @return {?}
     */
    CalendarNavComponent.prototype.rightNavClicked = /**
     * @return {?}
     */
    function () {
        this.onRightNav.emit();
    };
    /**
     * @return {?}
     */
    CalendarNavComponent.prototype.rightSecondaryNavClicked = /**
     * @return {?}
     */
    function () {
        this.onRightSecondaryNav.emit();
    };
    /**
     * @return {?}
     */
    CalendarNavComponent.prototype.labelClicked = /**
     * @return {?}
     */
    function () {
        this.onLabelClick.emit();
    };
    CalendarNavComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dp-calendar-nav',
                    template: "<div class=\"dp-calendar-nav-container\">\n  <div class=\"dp-nav-header\">\n    <span [hidden]=\"isLabelClickable\"\n          [attr.data-hidden]=\"isLabelClickable\"\n          [innerText]=\"label\">\n    </span>\n    <button type=\"button\"\n            class=\"dp-nav-header-btn\"\n            [hidden]=\"!isLabelClickable\"\n            [attr.data-hidden]=\"!isLabelClickable\"\n            (click)=\"labelClicked()\"\n            [innerText]=\"label\">\n    </button>\n  </div>\n\n  <div class=\"dp-nav-btns-container\">\n    <div class=\"dp-calendar-nav-container-left\">\n      <button type=\"button\"\n              class=\"dp-calendar-secondary-nav-left\"\n              *ngIf=\"showLeftSecondaryNav\"\n              [disabled]=\"leftSecondaryNavDisabled\"\n              (click)=\"leftSecondaryNavClicked()\">\n      </button>\n      <button type=\"button\"\n              class=\"dp-calendar-nav-left\"\n              [hidden]=\"!showLeftNav\"\n              [attr.data-hidden]=\"!showLeftNav\"\n              [disabled]=\"leftNavDisabled\"\n              (click)=\"leftNavClicked()\">\n      </button>\n    </div>\n    <button type=\"button\"\n            class=\"dp-current-location-btn\"\n            *ngIf=\"showGoToCurrent\"\n            (click)=\"onGoToCurrent.emit()\">\n    </button>\n    <div class=\"dp-calendar-nav-container-right\">\n      <button type=\"button\"\n              class=\"dp-calendar-nav-right\"\n              [hidden]=\"!showRightNav\"\n              [attr.data-hidden]=\"!showRightNav\"\n              [disabled]=\"rightNavDisabled\"\n              (click)=\"rightNavClicked()\">\n      </button>\n      <button type=\"button\"\n              class=\"dp-calendar-secondary-nav-right\"\n              *ngIf=\"showRightSecondaryNav\"\n              [disabled]=\"rightSecondaryNavDisabled\"\n              (click)=\"rightSecondaryNavClicked()\">\n      </button>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["dp-calendar-nav .dp-calendar-nav-container{position:relative;box-sizing:border-box;height:25px;border:1px solid #000;border-bottom:none}dp-calendar-nav .dp-nav-date-btn{box-sizing:border-box;height:25px;border:1px solid #000;border-bottom:none}dp-calendar-nav .dp-nav-btns-container{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:5px;display:inline-block}dp-calendar-nav .dp-calendar-nav-container-left,dp-calendar-nav .dp-calendar-nav-container-right{display:inline-block}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right,dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{position:relative;width:16px;cursor:pointer}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right{line-height:0}dp-calendar-nav .dp-calendar-nav-left::before,dp-calendar-nav .dp-calendar-nav-right::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{padding:0}dp-calendar-nav .dp-calendar-secondary-nav-left::after,dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::after,dp-calendar-nav .dp-calendar-secondary-nav-right::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::before{right:-10px}dp-calendar-nav .dp-calendar-secondary-nav-right{left:initial;right:5px}dp-calendar-nav .dp-calendar-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-left::after,dp-calendar-nav .dp-calendar-secondary-nav-left::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left::before{right:-10px}dp-calendar-nav .dp-nav-header{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:5px;display:inline-block;font-size:13px}dp-calendar-nav .dp-nav-header-btn{cursor:pointer}dp-calendar-nav .dp-current-location-btn{position:relative;top:-1px;height:16px;width:16px;vertical-align:middle;background:rgba(0,0,0,.6);border:1px solid rgba(0,0,0,.6);outline:0;border-radius:50%;box-shadow:inset 0 0 0 3px #fff;cursor:pointer}dp-calendar-nav .dp-current-location-btn:hover{background:#000}dp-calendar-nav.dp-material .dp-calendar-nav-container{height:30px;border:1px solid #e0e0e0}dp-calendar-nav.dp-material .dp-calendar-nav-left,dp-calendar-nav.dp-material .dp-calendar-nav-right,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{border:none;background:#fff;outline:0;font-size:16px;padding:0}dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{width:20px}dp-calendar-nav.dp-material .dp-nav-header-btn{height:20px;width:80px;border:none;background:#fff;outline:0}dp-calendar-nav.dp-material .dp-nav-header-btn:hover{background:rgba(0,0,0,.05)}dp-calendar-nav.dp-material .dp-nav-header-btn:active{background:rgba(0,0,0,.1)}"]
                }] }
    ];
    CalendarNavComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isLabelClickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showLeftNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showLeftSecondaryNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showRightNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showRightSecondaryNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        leftNavDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        leftSecondaryNavDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rightNavDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rightSecondaryNavDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showGoToCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onLeftNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onLeftSecondaryNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRightNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRightSecondaryNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onLabelClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onGoToCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarNavComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DpDatePickerModule = /** @class */ (function () {
    function DpDatePickerModule() {
    }
    DpDatePickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        DomHelper,
                        UtilsService
                    ],
                    declarations: [
                        DatePickerComponent,
                        DatePickerDirective,
                        DayCalendarComponent,
                        MonthCalendarComponent,
                        CalendarNavComponent,
                        TimeSelectComponent,
                        DayTimeCalendarComponent
                    ],
                    entryComponents: [
                        DatePickerComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    ],
                    exports: [
                        DatePickerComponent,
                        DatePickerDirective,
                        MonthCalendarComponent,
                        DayCalendarComponent,
                        TimeSelectComponent,
                        DayTimeCalendarComponent
                    ]
                },] }
    ];
    return DpDatePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRhdGUtcGlja2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItZGF0ZS1waWNrZXIvY29tbW9uL3R5cGVzL2NhbGVuZGFyLW1vZGUtZW51bS50cyIsIm5nOi8vbmcyLWRhdGUtcGlja2VyL2NvbW1vbi90eXBlcy9jYWxlbmRhci12YWx1ZS1lbnVtLnRzIiwibmc6Ly9uZzItZGF0ZS1waWNrZXIvY29tbW9uL3R5cGVzL3NlbGVjdGlvbi1ldmV0LmVudW0uLnRzIiwibmc6Ly9uZzItZGF0ZS1waWNrZXIvY29tbW9uL3NlcnZpY2VzL2RvbS1hcHBlbmRlci9kb20tYXBwZW5kZXIuc2VydmljZS50cyIsIm5nOi8vbmcyLWRhdGUtcGlja2VyL2NvbW1vbi9zZXJ2aWNlcy91dGlscy91dGlscy5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItZGF0ZS1waWNrZXIvZGF5LWNhbGVuZGFyL2RheS1jYWxlbmRhci5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItZGF0ZS1waWNrZXIvZGF5LWNhbGVuZGFyL2RheS1jYWxlbmRhci5jb21wb25lbnQudHMiLCJuZzovL25nMi1kYXRlLXBpY2tlci90aW1lLXNlbGVjdC90aW1lLXNlbGVjdC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItZGF0ZS1waWNrZXIvZGF5LXRpbWUtY2FsZW5kYXIvZGF5LXRpbWUtY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLWRhdGUtcGlja2VyL3RpbWUtc2VsZWN0L3RpbWUtc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vbmcyLWRhdGUtcGlja2VyL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLnNlcnZpY2UudHMiLCJuZzovL25nMi1kYXRlLXBpY2tlci9tb250aC1jYWxlbmRhci9tb250aC1jYWxlbmRhci5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItZGF0ZS1waWNrZXIvbW9udGgtY2FsZW5kYXIvbW9udGgtY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZzItZGF0ZS1waWNrZXIvZGF5LXRpbWUtY2FsZW5kYXIvZGF5LXRpbWUtY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZzItZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZzItZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXItZGlyZWN0aXZlLnNlcnZpY2UudHMiLCJuZzovL25nMi1kYXRlLXBpY2tlci9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kYXRlLXBpY2tlci9jYWxlbmRhci1uYXYvY2FsZW5kYXItbmF2LmNvbXBvbmVudC50cyIsIm5nOi8vbmcyLWRhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBFQ2FsZW5kYXJNb2RlIHtcbiAgRGF5LFxuICBEYXlUaW1lLFxuICBNb250aCxcbiAgVGltZVxufVxuIiwiZXhwb3J0IGVudW0gRUNhbGVuZGFyVmFsdWUge1xuICBNb21lbnQgPSAxLFxuICBNb21lbnRBcnIsXG4gIFN0cmluZyxcbiAgU3RyaW5nQXJyXG59XG4iLCJleHBvcnQgZW51bSBTZWxlY3RFdmVudCB7XG4gIElOUFVUID0gJ2lucHV0JyxcbiAgU0VMRUNUSU9OID0gJ3NlbGVjdGlvbidcbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1REcm9wcywgVE9wZW5zfSBmcm9tICcuLi8uLi90eXBlcy9wb2lzdGlvbnMudHlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21IZWxwZXIge1xuXG4gIHByaXZhdGUgc3RhdGljIHNldFlBeGlzUG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGFuY2hvcjogSFRNTEVsZW1lbnQsIGRyb3BzOiBURHJvcHMpIHtcbiAgICBjb25zdCBhbmNob3JSZWN0ID0gYW5jaG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm90dG9tID0gYW5jaG9yUmVjdC5ib3R0b20gLSBjb250YWluZXJSZWN0LnRvcDtcbiAgICBjb25zdCB0b3AgPSBhbmNob3JSZWN0LnRvcCAtIGNvbnRhaW5lclJlY3QudG9wO1xuXG4gICAgaWYgKGRyb3BzID09PSAnZG93bicpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gKGJvdHRvbSArIDEgKyAncHgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAodG9wIC0gMSAtIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSArICdweCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2V0WEF4aXNQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgYW5jaG9yOiBIVE1MRWxlbWVudCwgZGltRWxlbTogSFRNTEVsZW1lbnQsIG9wZW5zOiBUT3BlbnMpIHtcbiAgICBjb25zdCBhbmNob3JSZWN0ID0gYW5jaG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGVmdCA9IGFuY2hvclJlY3QubGVmdCAtIGNvbnRhaW5lclJlY3QubGVmdDtcblxuICAgIGlmIChvcGVucyA9PT0gJ3JpZ2h0Jykge1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGxlZnQgLSBkaW1FbGVtLm9mZnNldFdpZHRoICsgYW5jaG9yLm9mZnNldFdpZHRoICsgJ3B4JztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpc1RvcEluVmlldyhlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBjb25zdCB7dG9wfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAodG9wID49IDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaXNCb3R0b21JblZpZXcoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3Qge2JvdHRvbX0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gKGJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaXNMZWZ0SW5WaWV3KGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHtsZWZ0fSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAobGVmdCA+PSAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGlzUmlnaHRJblZpZXcoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3Qge3JpZ2h0fSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAocmlnaHQgPD0gd2luZG93LmlubmVyV2lkdGgpO1xuICB9XG5cbiAgYXBwZW5kRWxlbWVudFRvUG9zaXRpb24oY29uZmlnOiBJQXBwZW5kVG9BcmdzKTogdm9pZCB7XG4gICAgY29uc3Qge2NvbnRhaW5lciwgZWxlbWVudH0gPSBjb25maWc7XG5cbiAgICBpZiAoIWNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiB8fCBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB9XG5cbiAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRFbGVtZW50UG9zaXRpb24oY29uZmlnKTtcblxuICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RWxlbWVudFBvc2l0aW9uKHtlbGVtZW50LCBjb250YWluZXIsIGFuY2hvciwgZGltRWxlbSwgZHJvcHMsIG9wZW5zfTogSUFwcGVuZFRvQXJncykge1xuICAgIERvbUhlbHBlci5zZXRZQXhpc1Bvc2l0aW9uKGVsZW1lbnQsIGNvbnRhaW5lciwgYW5jaG9yLCAnZG93bicpO1xuICAgIERvbUhlbHBlci5zZXRYQXhpc1Bvc2l0aW9uKGVsZW1lbnQsIGNvbnRhaW5lciwgYW5jaG9yLCBkaW1FbGVtLCAncmlnaHQnKTtcblxuICAgIGlmIChkcm9wcyAhPT0gJ2Rvd24nICYmIGRyb3BzICE9PSAndXAnKSB7XG4gICAgICBpZiAoRG9tSGVscGVyLmlzQm90dG9tSW5WaWV3KGRpbUVsZW0pKSB7XG4gICAgICAgIERvbUhlbHBlci5zZXRZQXhpc1Bvc2l0aW9uKGVsZW1lbnQsIGNvbnRhaW5lciwgYW5jaG9yLCAnZG93bicpO1xuICAgICAgfSBlbHNlIGlmIChEb21IZWxwZXIuaXNUb3BJblZpZXcoZGltRWxlbSkpIHtcbiAgICAgICAgRG9tSGVscGVyLnNldFlBeGlzUG9zaXRpb24oZWxlbWVudCwgY29udGFpbmVyLCBhbmNob3IsICd1cCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBEb21IZWxwZXIuc2V0WUF4aXNQb3NpdGlvbihlbGVtZW50LCBjb250YWluZXIsIGFuY2hvciwgZHJvcHMpO1xuICAgIH1cblxuICAgIGlmIChvcGVucyAhPT0gJ2xlZnQnICYmIG9wZW5zICE9PSAncmlnaHQnKSB7XG4gICAgICBpZiAoRG9tSGVscGVyLmlzUmlnaHRJblZpZXcoZGltRWxlbSkpIHtcbiAgICAgICAgRG9tSGVscGVyLnNldFhBeGlzUG9zaXRpb24oZWxlbWVudCwgY29udGFpbmVyLCBhbmNob3IsIGRpbUVsZW0sICdyaWdodCcpO1xuICAgICAgfSBlbHNlIGlmIChEb21IZWxwZXIuaXNMZWZ0SW5WaWV3KGRpbUVsZW0pKSB7XG4gICAgICAgIERvbUhlbHBlci5zZXRYQXhpc1Bvc2l0aW9uKGVsZW1lbnQsIGNvbnRhaW5lciwgYW5jaG9yLCBkaW1FbGVtLCAnbGVmdCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBEb21IZWxwZXIuc2V0WEF4aXNQb3NpdGlvbihlbGVtZW50LCBjb250YWluZXIsIGFuY2hvciwgZGltRWxlbSwgb3BlbnMpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBlbmRUb0FyZ3Mge1xuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgYW5jaG9yOiBIVE1MRWxlbWVudDtcbiAgZGltRWxlbTogSFRNTEVsZW1lbnQ7XG4gIGRyb3BzOiBURHJvcHM7XG4gIG9wZW5zOiBUT3BlbnM7XG59XG4iLCJpbXBvcnQge0VDYWxlbmRhclZhbHVlfSBmcm9tICcuLi8uLi90eXBlcy9jYWxlbmRhci12YWx1ZS1lbnVtJztcbmltcG9ydCB7U2luZ2xlQ2FsZW5kYXJWYWx1ZX0gZnJvbSAnLi4vLi4vdHlwZXMvc2luZ2xlLWNhbGVuZGFyLXZhbHVlJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnROcyBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtNb21lbnQsIHVuaXRPZlRpbWV9IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge0NhbGVuZGFyVmFsdWV9IGZyb20gJy4uLy4uL3R5cGVzL2NhbGVuZGFyLXZhbHVlJztcbmltcG9ydCB7SURhdGV9IGZyb20gJy4uLy4uL21vZGVscy9kYXRlLm1vZGVsJztcbmltcG9ydCB7Q2FsZW5kYXJNb2RlfSBmcm9tICcuLi8uLi90eXBlcy9jYWxlbmRhci1tb2RlJztcbmltcG9ydCB7RGF0ZVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vdHlwZXMvdmFsaWRhdG9yLnR5cGUnO1xuaW1wb3J0IHtJQ2FsZW5kYXJJbnRlcm5hbH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhbGVuZGFyLm1vZGVsJztcblxuY29uc3QgbW9tZW50ID0gbW9tZW50TnM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUxpbWl0cyB7XG4gIG1pbkRhdGU/OiBTaW5nbGVDYWxlbmRhclZhbHVlO1xuICBtYXhEYXRlPzogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgbWluVGltZT86IFNpbmdsZUNhbGVuZGFyVmFsdWU7XG4gIG1heFRpbWU/OiBTaW5nbGVDYWxlbmRhclZhbHVlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcbiAgc3RhdGljIGRlYm91bmNlKGZ1bmM6IEZ1bmN0aW9uLCB3YWl0OiBudW1iZXIpIHtcbiAgICBsZXQgdGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9LCB3YWl0KTtcbiAgICB9O1xuICB9O1xuXG4gIGNyZWF0ZUFycmF5KHNpemU6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICByZXR1cm4gbmV3IEFycmF5KHNpemUpLmZpbGwoMSk7XG4gIH1cblxuICBjb252ZXJ0VG9Nb21lbnQoZGF0ZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZSwgZm9ybWF0OiBzdHJpbmcpOiBNb21lbnQge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBtb21lbnQoZGF0ZSwgZm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGUuY2xvbmUoKTtcbiAgICB9XG4gIH1cblxuICBpc0RhdGVWYWxpZChkYXRlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKGRhdGUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9tZW50KGRhdGUsIGZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xuICB9XG5cbiAgLy8gdG9kbzo6IGFkZCB1bml0IHRlc3RcbiAgZ2V0RGVmYXVsdERpc3BsYXlEYXRlKGN1cnJlbnQ6IE1vbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBNb21lbnRbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlTZWxlY3Q6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlOiBNb21lbnQpOiBNb21lbnQge1xuICAgIGlmIChjdXJyZW50KSB7XG4gICAgICByZXR1cm4gY3VycmVudC5jbG9uZSgpO1xuICAgIH0gZWxzZSBpZiAobWluRGF0ZSAmJiBtaW5EYXRlLmlzQWZ0ZXIobW9tZW50KCkpKSB7XG4gICAgICByZXR1cm4gbWluRGF0ZS5jbG9uZSgpO1xuICAgIH0gZWxzZSBpZiAoYWxsb3dNdWx0aVNlbGVjdCkge1xuICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkW3NlbGVjdGVkLmxlbmd0aF0pIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkW3NlbGVjdGVkLmxlbmd0aF0uY2xvbmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkWzBdKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRbMF0uY2xvbmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9tZW50KCk7XG4gIH1cblxuICAvLyB0b2RvOjogYWRkIHVuaXQgdGVzdFxuICBnZXRJbnB1dFR5cGUodmFsdWU6IENhbGVuZGFyVmFsdWUsIGFsbG93TXVsdGlTZWxlY3Q6IGJvb2xlYW4pOiBFQ2FsZW5kYXJWYWx1ZSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gRUNhbGVuZGFyVmFsdWUuTW9tZW50QXJyO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBFQ2FsZW5kYXJWYWx1ZS5TdHJpbmdBcnI7XG4gICAgICB9IGVsc2UgaWYgKG1vbWVudC5pc01vbWVudCh2YWx1ZVswXSkpIHtcbiAgICAgICAgcmV0dXJuIEVDYWxlbmRhclZhbHVlLk1vbWVudEFycjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIEVDYWxlbmRhclZhbHVlLlN0cmluZztcbiAgICAgIH0gZWxzZSBpZiAobW9tZW50LmlzTW9tZW50KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gRUNhbGVuZGFyVmFsdWUuTW9tZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhbGxvd011bHRpU2VsZWN0ID8gRUNhbGVuZGFyVmFsdWUuTW9tZW50QXJyIDogRUNhbGVuZGFyVmFsdWUuTW9tZW50O1xuICB9XG5cbiAgLy8gdG9kbzo6IGFkZCB1bml0IHRlc3RcbiAgY29udmVydFRvTW9tZW50QXJyYXkodmFsdWU6IENhbGVuZGFyVmFsdWUsIGZvcm1hdDogc3RyaW5nLCBhbGxvd011bHRpU2VsZWN0OiBib29sZWFuKTogTW9tZW50W10ge1xuICAgIHN3aXRjaCAodGhpcy5nZXRJbnB1dFR5cGUodmFsdWUsIGFsbG93TXVsdGlTZWxlY3QpKSB7XG4gICAgICBjYXNlIChFQ2FsZW5kYXJWYWx1ZS5TdHJpbmcpOlxuICAgICAgICByZXR1cm4gdmFsdWUgPyBbbW9tZW50KDxzdHJpbmc+dmFsdWUsIGZvcm1hdCwgdHJ1ZSldIDogW107XG4gICAgICBjYXNlIChFQ2FsZW5kYXJWYWx1ZS5TdHJpbmdBcnIpOlxuICAgICAgICByZXR1cm4gKDxzdHJpbmdbXT52YWx1ZSkubWFwKHYgPT4gdiA/IG1vbWVudCh2LCBmb3JtYXQsIHRydWUpIDogbnVsbCkuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgY2FzZSAoRUNhbGVuZGFyVmFsdWUuTW9tZW50KTpcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gWyg8TW9tZW50PnZhbHVlKS5jbG9uZSgpXSA6IFtdO1xuICAgICAgY2FzZSAoRUNhbGVuZGFyVmFsdWUuTW9tZW50QXJyKTpcbiAgICAgICAgcmV0dXJuICg8TW9tZW50W10+dmFsdWUgfHwgW10pLm1hcCh2ID0+IHYuY2xvbmUoKSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgLy8gdG9kbzo6IGFkZCB1bml0IHRlc3RcbiAgY29udmVydEZyb21Nb21lbnRBcnJheShmb3JtYXQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogTW9tZW50W10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydFRvOiBFQ2FsZW5kYXJWYWx1ZSk6IENhbGVuZGFyVmFsdWUge1xuICAgIHN3aXRjaCAoY29udmVydFRvKSB7XG4gICAgICBjYXNlIChFQ2FsZW5kYXJWYWx1ZS5TdHJpbmcpOlxuICAgICAgICByZXR1cm4gdmFsdWVbMF0gJiYgdmFsdWVbMF0uZm9ybWF0KGZvcm1hdCk7XG4gICAgICBjYXNlIChFQ2FsZW5kYXJWYWx1ZS5TdHJpbmdBcnIpOlxuICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKEJvb2xlYW4pLm1hcCh2ID0+IHYuZm9ybWF0KGZvcm1hdCkpO1xuICAgICAgY2FzZSAoRUNhbGVuZGFyVmFsdWUuTW9tZW50KTpcbiAgICAgICAgcmV0dXJuIHZhbHVlWzBdID8gdmFsdWVbMF0uY2xvbmUoKSA6IHZhbHVlWzBdO1xuICAgICAgY2FzZSAoRUNhbGVuZGFyVmFsdWUuTW9tZW50QXJyKTpcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUubWFwKHYgPT4gdi5jbG9uZSgpKSA6IHZhbHVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnRUb1N0cmluZyh2YWx1ZTogQ2FsZW5kYXJWYWx1ZSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCB0bXBWYWw6IHN0cmluZ1tdO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRtcFZhbCA9IFt2YWx1ZV07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB0bXBWYWwgPSAoPFNpbmdsZUNhbGVuZGFyVmFsdWVbXT52YWx1ZSkubWFwKCh2KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvTW9tZW50KHYsIGZvcm1hdCkuZm9ybWF0KGZvcm1hdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wVmFsID0gPHN0cmluZ1tdPnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobW9tZW50LmlzTW9tZW50KHZhbHVlKSkge1xuICAgICAgdG1wVmFsID0gW3ZhbHVlLmZvcm1hdChmb3JtYXQpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiB0bXBWYWwuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyB8ICcpO1xuICB9XG5cbiAgLy8gdG9kbzo6IGFkZCB1bml0IHRlc3RcbiAgY2xlYXJVbmRlZmluZWQ8VD4ob2JqOiBUKTogVCB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IChvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSAmJiBkZWxldGUgb2JqW2tleV0pO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZChpc011bHRpcGxlOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICBjdXJyZW50bHlTZWxlY3RlZDogTW9tZW50W10sXG4gICAgICAgICAgICAgICAgIGRhdGU6IElEYXRlLFxuICAgICAgICAgICAgICAgICBncmFudWxhcml0eTogdW5pdE9mVGltZS5CYXNlID0gJ2RheScpOiBNb21lbnRbXSB7XG4gICAgaWYgKGlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiAhZGF0ZS5zZWxlY3RlZFxuICAgICAgICA/IGN1cnJlbnRseVNlbGVjdGVkLmNvbmNhdChbZGF0ZS5kYXRlXSlcbiAgICAgICAgOiBjdXJyZW50bHlTZWxlY3RlZC5maWx0ZXIoZCA9PiAhZC5pc1NhbWUoZGF0ZS5kYXRlLCBncmFudWxhcml0eSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gIWRhdGUuc2VsZWN0ZWQgPyBbZGF0ZS5kYXRlXSA6IFtdO1xuICAgIH1cbiAgfVxuXG4gIGNsb3Nlc3RQYXJlbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaCA9IDxIVE1MRWxlbWVudD5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHJldHVybiBtYXRjaCB8fCB0aGlzLmNsb3Nlc3RQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBzZWxlY3Rvcik7XG4gIH1cblxuICBvbmx5VGltZShtOiBNb21lbnQpOiBNb21lbnQge1xuICAgIHJldHVybiBtICYmIG1vbWVudC5pc01vbWVudChtKSAmJiBtb21lbnQobS5mb3JtYXQoJ0hIOm1tOnNzJyksICdISDptbTpzcycpO1xuICB9XG5cbiAgZ3JhbnVsYXJpdHlGcm9tVHlwZShjYWxlbmRhclR5cGU6IENhbGVuZGFyTW9kZSk6IHVuaXRPZlRpbWUuQmFzZSB7XG4gICAgc3dpdGNoIChjYWxlbmRhclR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gJ3NlY29uZCc7XG4gICAgICBjYXNlICdkYXl0aW1lJzpcbiAgICAgICAgcmV0dXJuICdzZWNvbmQnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyVHlwZTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3Ioe21pbkRhdGUsIG1heERhdGUsIG1pblRpbWUsIG1heFRpbWV9OiBEYXRlTGltaXRzLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICBjYWxlbmRhclR5cGU6IENhbGVuZGFyTW9kZSk6IERhdGVWYWxpZGF0b3Ige1xuICAgIGxldCBpc1ZhbGlkOiBib29sZWFuO1xuICAgIGxldCB2YWx1ZTogTW9tZW50W107XG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xuICAgIGNvbnN0IGdyYW51bGFyaXR5ID0gdGhpcy5ncmFudWxhcml0eUZyb21UeXBlKGNhbGVuZGFyVHlwZSk7XG5cbiAgICBpZiAobWluRGF0ZSkge1xuICAgICAgY29uc3QgbWQgPSB0aGlzLmNvbnZlcnRUb01vbWVudChtaW5EYXRlLCBmb3JtYXQpO1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKHtcbiAgICAgICAga2V5OiAnbWluRGF0ZScsXG4gICAgICAgIGlzVmFsaWQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBfaXNWYWxpZCA9IHZhbHVlLmV2ZXJ5KHZhbCA9PiB2YWwuaXNTYW1lT3JBZnRlcihtZCwgZ3JhbnVsYXJpdHkpKTtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCA/IF9pc1ZhbGlkIDogZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIF9pc1ZhbGlkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobWF4RGF0ZSkge1xuICAgICAgY29uc3QgbWQgPSB0aGlzLmNvbnZlcnRUb01vbWVudChtYXhEYXRlLCBmb3JtYXQpO1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKHtcbiAgICAgICAga2V5OiAnbWF4RGF0ZScsXG4gICAgICAgIGlzVmFsaWQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBfaXNWYWxpZCA9IHZhbHVlLmV2ZXJ5KHZhbCA9PiB2YWwuaXNTYW1lT3JCZWZvcmUobWQsIGdyYW51bGFyaXR5KSk7XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgPyBfaXNWYWxpZCA6IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBfaXNWYWxpZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1pblRpbWUpIHtcbiAgICAgIGNvbnN0IG1kID0gdGhpcy5vbmx5VGltZSh0aGlzLmNvbnZlcnRUb01vbWVudChtaW5UaW1lLCBmb3JtYXQpKTtcbiAgICAgIHZhbGlkYXRvcnMucHVzaCh7XG4gICAgICAgIGtleTogJ21pblRpbWUnLFxuICAgICAgICBpc1ZhbGlkOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgX2lzVmFsaWQgPSB2YWx1ZS5ldmVyeSh2YWwgPT4gdGhpcy5vbmx5VGltZSh2YWwpLmlzU2FtZU9yQWZ0ZXIobWQpKTtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCA/IF9pc1ZhbGlkIDogZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIF9pc1ZhbGlkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobWF4VGltZSkge1xuICAgICAgY29uc3QgbWQgPSB0aGlzLm9ubHlUaW1lKHRoaXMuY29udmVydFRvTW9tZW50KG1heFRpbWUsIGZvcm1hdCkpO1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKHtcbiAgICAgICAga2V5OiAnbWF4VGltZScsXG4gICAgICAgIGlzVmFsaWQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBfaXNWYWxpZCA9IHZhbHVlLmV2ZXJ5KHZhbCA9PiB0aGlzLm9ubHlUaW1lKHZhbCkuaXNTYW1lT3JCZWZvcmUobWQpKTtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCA/IF9pc1ZhbGlkIDogZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIF9pc1ZhbGlkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGlucHV0VmFsOiBDYWxlbmRhclZhbHVlKSA9PiB7XG4gICAgICBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgICAgdmFsdWUgPSB0aGlzLmNvbnZlcnRUb01vbWVudEFycmF5KGlucHV0VmFsLCBmb3JtYXQsIHRydWUpLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgaWYgKCF2YWx1ZS5ldmVyeSh2YWwgPT4gdmFsLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIGdpdmVuOiBpbnB1dFZhbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdG9ycy5yZWR1Y2UoKG1hcCwgZXJyKSA9PiB7XG4gICAgICAgIGlmICghZXJyLmlzVmFsaWQoKSkge1xuICAgICAgICAgIG1hcFtlcnIua2V5XSA9IHtcbiAgICAgICAgICAgIGdpdmVuOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfSwge30pO1xuXG4gICAgICByZXR1cm4gIWlzVmFsaWQgPyBlcnJvcnMgOiBudWxsO1xuICAgIH07XG4gIH1cblxuICBkYXRlc1N0cmluZ1RvU3RyaW5nQXJyYXkodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gKHZhbHVlIHx8ICcnKS5zcGxpdCgnfCcpLm1hcChtID0+IG0udHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG4gIH1cblxuICBnZXRWYWxpZE1vbWVudEFycmF5KHZhbHVlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogTW9tZW50W10ge1xuICAgIHJldHVybiB0aGlzLmRhdGVzU3RyaW5nVG9TdHJpbmdBcnJheSh2YWx1ZSlcbiAgICAgIC5maWx0ZXIoZCA9PiB0aGlzLmlzRGF0ZVZhbGlkKGQsIGZvcm1hdCkpXG4gICAgICAubWFwKGQgPT4gbW9tZW50KGQsIGZvcm1hdCkpO1xuICB9XG5cbiAgc2hvdWxkU2hvd0N1cnJlbnQoc2hvd0dvVG9DdXJyZW50OiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBDYWxlbmRhck1vZGUsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogTW9tZW50LFxuICAgICAgICAgICAgICAgICAgICBtYXg6IE1vbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzaG93R29Ub0N1cnJlbnQgJiZcbiAgICAgIG1vZGUgIT09ICd0aW1lJyAmJlxuICAgICAgdGhpcy5pc0RhdGVJblJhbmdlKG1vbWVudCgpLCBtaW4sIG1heCk7XG4gIH1cblxuICBpc0RhdGVJblJhbmdlKGRhdGU6IE1vbWVudCwgZnJvbTogTW9tZW50LCB0bzogTW9tZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRhdGUuaXNCZXR3ZWVuKGZyb20sIHRvLCAnZGF5JywgJ1tdJyk7XG4gIH1cblxuICBjb252ZXJ0UHJvcHNUb01vbWVudChvYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBmb3JtYXQ6IHN0cmluZywgcHJvcHM6IHN0cmluZ1tdKSB7XG4gICAgcHJvcHMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBvYmpbcHJvcF0gPSB0aGlzLmNvbnZlcnRUb01vbWVudChvYmpbcHJvcF0sIGZvcm1hdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG91bGRSZXNldEN1cnJlbnRWaWV3PFQgZXh0ZW5kcyBJQ2FsZW5kYXJJbnRlcm5hbD4ocHJldkNvbmY6IFQsIGN1cnJlbnRDb25mOiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKHByZXZDb25mICYmIGN1cnJlbnRDb25mKSB7XG4gICAgICBpZiAoIXByZXZDb25mLm1pbiAmJiBjdXJyZW50Q29uZi5taW4pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHByZXZDb25mLm1pbiAmJiBjdXJyZW50Q29uZi5taW4gJiYgIXByZXZDb25mLm1pbi5pc1NhbWUoY3VycmVudENvbmYubWluLCAnZCcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmICghcHJldkNvbmYubWF4ICYmIGN1cnJlbnRDb25mLm1heCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocHJldkNvbmYubWF4ICYmIGN1cnJlbnRDb25mLm1heCAmJiAhcHJldkNvbmYubWF4LmlzU2FtZShjdXJyZW50Q29uZi5tYXgsICdkJykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXROYXRpdmVFbGVtZW50KGVsZW06IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghZWxlbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50TnMgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7TW9tZW50fSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtXZWVrRGF5c30gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3dlZWstZGF5cy50eXBlJztcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvdXRpbHMvdXRpbHMuc2VydmljZSc7XG5pbXBvcnQge0lEYXl9IGZyb20gJy4vZGF5Lm1vZGVsJztcbmltcG9ydCB7SURheUNhbGVuZGFyQ29uZmlnLCBJRGF5Q2FsZW5kYXJDb25maWdJbnRlcm5hbH0gZnJvbSAnLi9kYXktY2FsZW5kYXItY29uZmlnLm1vZGVsJztcbmltcG9ydCB7SU1vbnRoQ2FsZW5kYXJDb25maWd9IGZyb20gJy4uL21vbnRoLWNhbGVuZGFyL21vbnRoLWNhbGVuZGFyLWNvbmZpZyc7XG5cbmNvbnN0IG1vbWVudCA9IG1vbWVudE5zO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF5Q2FsZW5kYXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBEQVlTID0gWydzdScsICdtbycsICd0dScsICd3ZScsICd0aCcsICdmcicsICdzYSddO1xuICByZWFkb25seSBERUZBVUxUX0NPTkZJRzogSURheUNhbGVuZGFyQ29uZmlnID0ge1xuICAgIHNob3dOZWFyTW9udGhEYXlzOiB0cnVlLFxuICAgIHNob3dXZWVrTnVtYmVyczogZmFsc2UsXG4gICAgZmlyc3REYXlPZldlZWs6ICdzdScsXG4gICAgd2Vla0RheUZvcm1hdDogJ2RkZCcsXG4gICAgZm9ybWF0OiAnREQtTU0tWVlZWScsXG4gICAgYWxsb3dNdWx0aVNlbGVjdDogZmFsc2UsXG4gICAgbW9udGhGb3JtYXQ6ICdNTU0sIFlZWVknLFxuICAgIGVuYWJsZU1vbnRoU2VsZWN0b3I6IHRydWUsXG4gICAgbG9jYWxlOiBtb21lbnQubG9jYWxlKCksXG4gICAgZGF5QnRuRm9ybWF0OiAnREQnLFxuICAgIHVuU2VsZWN0T25DbGljazogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UpIHtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTmVhck1vbnRoV2Vla3MoY3VycmVudE1vbnRoOiBNb21lbnQsIG1vbnRoQXJyYXk6IElEYXlbXVtdKTogSURheVtdW10ge1xuICAgIGlmIChtb250aEFycmF5W21vbnRoQXJyYXkubGVuZ3RoIC0gMV0uZmluZCgoZGF5KSA9PiBkYXkuZGF0ZS5pc1NhbWUoY3VycmVudE1vbnRoLCAnbW9udGgnKSkpIHtcbiAgICAgIHJldHVybiBtb250aEFycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9udGhBcnJheS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29uZmlnKGNvbmZpZzogSURheUNhbGVuZGFyQ29uZmlnKTogSURheUNhbGVuZGFyQ29uZmlnSW50ZXJuYWwge1xuICAgIGNvbnN0IF9jb25maWcgPSA8SURheUNhbGVuZGFyQ29uZmlnSW50ZXJuYWw+e1xuICAgICAgLi4udGhpcy5ERUZBVUxUX0NPTkZJRyxcbiAgICAgIC4uLnRoaXMudXRpbHNTZXJ2aWNlLmNsZWFyVW5kZWZpbmVkKGNvbmZpZylcbiAgICB9O1xuXG4gICAgdGhpcy51dGlsc1NlcnZpY2UuY29udmVydFByb3BzVG9Nb21lbnQoX2NvbmZpZywgX2NvbmZpZy5mb3JtYXQsIFsnbWluJywgJ21heCddKTtcblxuICAgIG1vbWVudC5sb2NhbGUoX2NvbmZpZy5sb2NhbGUpO1xuXG4gICAgcmV0dXJuIF9jb25maWc7XG4gIH1cblxuICBnZW5lcmF0ZURheXNNYXAoZmlyc3REYXlPZldlZWs6IFdlZWtEYXlzKSB7XG4gICAgY29uc3QgZmlyc3REYXlJbmRleCA9IHRoaXMuREFZUy5pbmRleE9mKGZpcnN0RGF5T2ZXZWVrKTtcbiAgICBjb25zdCBkYXlzQXJyID0gdGhpcy5EQVlTLnNsaWNlKGZpcnN0RGF5SW5kZXgsIDcpLmNvbmNhdCh0aGlzLkRBWVMuc2xpY2UoMCwgZmlyc3REYXlJbmRleCkpO1xuICAgIHJldHVybiBkYXlzQXJyLnJlZHVjZSgobWFwLCBkYXksIGluZGV4KSA9PiB7XG4gICAgICBtYXBbZGF5XSA9IGluZGV4O1xuXG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIDx7W2tleTogc3RyaW5nXTogbnVtYmVyfT57fSk7XG4gIH1cblxuICBnZW5lcmF0ZU1vbnRoQXJyYXkoY29uZmlnOiBJRGF5Q2FsZW5kYXJDb25maWdJbnRlcm5hbCwgbW9udGg6IE1vbWVudCwgc2VsZWN0ZWQ6IE1vbWVudFtdKTogSURheVtdW10ge1xuICAgIGxldCBtb250aEFycmF5OiBJRGF5W11bXSA9IFtdO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrSW5kZXggPSB0aGlzLkRBWVMuaW5kZXhPZihjb25maWcuZmlyc3REYXlPZldlZWspO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZCb2FyZCA9IG1vbnRoLmNsb25lKCkuc3RhcnRPZignbW9udGgnKTtcblxuICAgIHdoaWxlIChmaXJzdERheU9mQm9hcmQuZGF5KCkgIT09IGZpcnN0RGF5T2ZXZWVrSW5kZXgpIHtcbiAgICAgIGZpcnN0RGF5T2ZCb2FyZC5zdWJ0cmFjdCgxLCAnZGF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudCA9IGZpcnN0RGF5T2ZCb2FyZC5jbG9uZSgpO1xuICAgIGNvbnN0IHByZXZNb250aCA9IG1vbnRoLmNsb25lKCkuc3VidHJhY3QoMSwgJ21vbnRoJyk7XG4gICAgY29uc3QgbmV4dE1vbnRoID0gbW9udGguY2xvbmUoKS5hZGQoMSwgJ21vbnRoJyk7XG4gICAgY29uc3QgdG9kYXkgPSBtb21lbnQoKTtcblxuICAgIGNvbnN0IGRheXNPZkNhbGVuZGFyOiBJRGF5W10gPSB0aGlzLnV0aWxzU2VydmljZS5jcmVhdGVBcnJheSg0MilcbiAgICAgIC5yZWR1Y2UoKGFycmF5OiBJRGF5W10pID0+IHtcbiAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgZGF0ZTogY3VycmVudC5jbG9uZSgpLFxuICAgICAgICAgIHNlbGVjdGVkOiAhIXNlbGVjdGVkLmZpbmQoc2VsZWN0ZWREYXkgPT4gY3VycmVudC5pc1NhbWUoc2VsZWN0ZWREYXksICdkYXknKSksXG4gICAgICAgICAgY3VycmVudE1vbnRoOiBjdXJyZW50LmlzU2FtZShtb250aCwgJ21vbnRoJyksXG4gICAgICAgICAgcHJldk1vbnRoOiBjdXJyZW50LmlzU2FtZShwcmV2TW9udGgsICdtb250aCcpLFxuICAgICAgICAgIG5leHRNb250aDogY3VycmVudC5pc1NhbWUobmV4dE1vbnRoLCAnbW9udGgnKSxcbiAgICAgICAgICBjdXJyZW50RGF5OiBjdXJyZW50LmlzU2FtZSh0b2RheSwgJ2RheScpLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGF0ZURpc2FibGVkKGN1cnJlbnQsIGNvbmZpZylcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnQuYWRkKDEsICdkYXknKTtcblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICB9LCBbXSk7XG5cbiAgICBkYXlzT2ZDYWxlbmRhci5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB3ZWVrSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gNyk7XG5cbiAgICAgIGlmICghbW9udGhBcnJheVt3ZWVrSW5kZXhdKSB7XG4gICAgICAgIG1vbnRoQXJyYXkucHVzaChbXSk7XG4gICAgICB9XG5cbiAgICAgIG1vbnRoQXJyYXlbd2Vla0luZGV4XS5wdXNoKGRheSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbmZpZy5zaG93TmVhck1vbnRoRGF5cykge1xuICAgICAgbW9udGhBcnJheSA9IHRoaXMucmVtb3ZlTmVhck1vbnRoV2Vla3MobW9udGgsIG1vbnRoQXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBtb250aEFycmF5O1xuICB9XG5cbiAgZ2VuZXJhdGVXZWVrZGF5cyhmaXJzdERheU9mV2VlazogV2Vla0RheXMpOiBNb21lbnRbXSB7XG4gICAgY29uc3Qgd2Vla2RheU5hbWVzOiB7W2tleTogc3RyaW5nXTogTW9tZW50fSA9IHtcbiAgICAgIHN1OiBtb21lbnQoKS5kYXkoMCksXG4gICAgICBtbzogbW9tZW50KCkuZGF5KDEpLFxuICAgICAgdHU6IG1vbWVudCgpLmRheSgyKSxcbiAgICAgIHdlOiBtb21lbnQoKS5kYXkoMyksXG4gICAgICB0aDogbW9tZW50KCkuZGF5KDQpLFxuICAgICAgZnI6IG1vbWVudCgpLmRheSg1KSxcbiAgICAgIHNhOiBtb21lbnQoKS5kYXkoNilcbiAgICB9O1xuICAgIGNvbnN0IHdlZWtkYXlzOiBNb21lbnRbXSA9IFtdO1xuICAgIGNvbnN0IGRheXNNYXAgPSB0aGlzLmdlbmVyYXRlRGF5c01hcChmaXJzdERheU9mV2Vlayk7XG5cbiAgICBmb3IgKGNvbnN0IGRheUtleSBpbiBkYXlzTWFwKSB7XG4gICAgICBpZiAoZGF5c01hcC5oYXNPd25Qcm9wZXJ0eShkYXlLZXkpKSB7XG4gICAgICAgIHdlZWtkYXlzW2RheXNNYXBbZGF5S2V5XV0gPSB3ZWVrZGF5TmFtZXNbZGF5S2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla2RheXM7XG4gIH1cblxuICBpc0RhdGVEaXNhYmxlZChkYXRlOiBNb21lbnQsIGNvbmZpZzogSURheUNhbGVuZGFyQ29uZmlnSW50ZXJuYWwpOiBib29sZWFuIHtcbiAgICBpZiAoY29uZmlnLmlzRGF5RGlzYWJsZWRDYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNvbmZpZy5pc0RheURpc2FibGVkQ2FsbGJhY2soZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5taW4gJiYgZGF0ZS5pc0JlZm9yZShjb25maWcubWluLCAnZGF5JykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShjb25maWcubWF4ICYmIGRhdGUuaXNBZnRlcihjb25maWcubWF4LCAnZGF5JykpO1xuICB9XG5cbiAgLy8gdG9kbzo6IGFkZCB1bml0IHRlc3RzXG4gIGdldEhlYWRlckxhYmVsKGNvbmZpZzogSURheUNhbGVuZGFyQ29uZmlnSW50ZXJuYWwsIG1vbnRoOiBNb21lbnQpOiBzdHJpbmcge1xuICAgIGlmIChjb25maWcubW9udGhGb3JtYXR0ZXIpIHtcbiAgICAgIHJldHVybiBjb25maWcubW9udGhGb3JtYXR0ZXIobW9udGgpO1xuICAgIH1cblxuICAgIHJldHVybiBtb250aC5mb3JtYXQoY29uZmlnLm1vbnRoRm9ybWF0KTtcbiAgfVxuXG4gIC8vIHRvZG86OiBhZGQgdW5pdCB0ZXN0c1xuICBzaG91bGRTaG93TGVmdChtaW46IE1vbWVudCwgY3VycmVudE1vbnRoVmlldzogTW9tZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1pbiA/IG1pbi5pc0JlZm9yZShjdXJyZW50TW9udGhWaWV3LCAnbW9udGgnKSA6IHRydWU7XG4gIH1cblxuICAvLyB0b2RvOjogYWRkIHVuaXQgdGVzdHNcbiAgc2hvdWxkU2hvd1JpZ2h0KG1heDogTW9tZW50LCBjdXJyZW50TW9udGhWaWV3OiBNb21lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWF4ID8gbWF4LmlzQWZ0ZXIoY3VycmVudE1vbnRoVmlldywgJ21vbnRoJykgOiB0cnVlO1xuICB9XG5cbiAgZ2VuZXJhdGVEYXlzSW5kZXhNYXAoZmlyc3REYXlPZldlZWs6IFdlZWtEYXlzKSB7XG4gICAgY29uc3QgZmlyc3REYXlJbmRleCA9IHRoaXMuREFZUy5pbmRleE9mKGZpcnN0RGF5T2ZXZWVrKTtcbiAgICBjb25zdCBkYXlzQXJyID0gdGhpcy5EQVlTLnNsaWNlKGZpcnN0RGF5SW5kZXgsIDcpLmNvbmNhdCh0aGlzLkRBWVMuc2xpY2UoMCwgZmlyc3REYXlJbmRleCkpO1xuICAgIHJldHVybiBkYXlzQXJyLnJlZHVjZSgobWFwLCBkYXksIGluZGV4KSA9PiB7XG4gICAgICBtYXBbaW5kZXhdID0gZGF5O1xuXG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIDx7W2tleTogbnVtYmVyXTogc3RyaW5nfT57fSk7XG4gIH1cblxuICBnZXRNb250aENhbGVuZGFyQ29uZmlnKGNvbXBvbmVudENvbmZpZzogSURheUNhbGVuZGFyQ29uZmlnSW50ZXJuYWwpOiBJTW9udGhDYWxlbmRhckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMudXRpbHNTZXJ2aWNlLmNsZWFyVW5kZWZpbmVkKHtcbiAgICAgIG1pbjogY29tcG9uZW50Q29uZmlnLm1pbixcbiAgICAgIG1heDogY29tcG9uZW50Q29uZmlnLm1heCxcbiAgICAgIGZvcm1hdDogY29tcG9uZW50Q29uZmlnLmZvcm1hdCxcbiAgICAgIGlzTmF2SGVhZGVyQnRuQ2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWxsb3dNdWx0aVNlbGVjdDogZmFsc2UsXG4gICAgICB5ZWFyRm9ybWF0OiBjb21wb25lbnRDb25maWcueWVhckZvcm1hdCxcbiAgICAgIHllYXJGb3JtYXR0ZXI6IGNvbXBvbmVudENvbmZpZy55ZWFyRm9ybWF0dGVyLFxuICAgICAgbW9udGhCdG5Gb3JtYXQ6IGNvbXBvbmVudENvbmZpZy5tb250aEJ0bkZvcm1hdCxcbiAgICAgIG1vbnRoQnRuRm9ybWF0dGVyOiBjb21wb25lbnRDb25maWcubW9udGhCdG5Gb3JtYXR0ZXIsXG4gICAgICBtb250aEJ0bkNzc0NsYXNzQ2FsbGJhY2s6IGNvbXBvbmVudENvbmZpZy5tb250aEJ0bkNzc0NsYXNzQ2FsbGJhY2ssXG4gICAgICBtdWx0aXBsZVllYXJzTmF2aWdhdGVCeTogY29tcG9uZW50Q29uZmlnLm11bHRpcGxlWWVhcnNOYXZpZ2F0ZUJ5LFxuICAgICAgc2hvd011bHRpcGxlWWVhcnNOYXZpZ2F0aW9uOiBjb21wb25lbnRDb25maWcuc2hvd011bHRpcGxlWWVhcnNOYXZpZ2F0aW9uLFxuICAgICAgc2hvd0dvVG9DdXJyZW50OiBjb21wb25lbnRDb25maWcuc2hvd0dvVG9DdXJyZW50XG4gICAgfSk7XG4gIH1cblxuICBnZXREYXlCdG5UZXh0KGNvbmZpZzogSURheUNhbGVuZGFyQ29uZmlnSW50ZXJuYWwsIGRheTogTW9tZW50KTogc3RyaW5nIHtcbiAgICBpZiAoY29uZmlnLmRheUJ0bkZvcm1hdHRlcikge1xuICAgICAgcmV0dXJuIGNvbmZpZy5kYXlCdG5Gb3JtYXR0ZXIoZGF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5LmZvcm1hdChjb25maWcuZGF5QnRuRm9ybWF0KTtcbiAgfVxuXG4gIGdldERheUJ0bkNzc0NsYXNzKGNvbmZpZzogSURheUNhbGVuZGFyQ29uZmlnSW50ZXJuYWwsIGRheTogTW9tZW50KTogc3RyaW5nIHtcbiAgICBpZiAoY29uZmlnLmRheUJ0bkNzc0NsYXNzQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjb25maWcuZGF5QnRuQ3NzQ2xhc3NDYWxsYmFjayhkYXkpO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIiwiaW1wb3J0IHtFQ2FsZW5kYXJWYWx1ZX0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL2NhbGVuZGFyLXZhbHVlLWVudW0nO1xuaW1wb3J0IHtTaW5nbGVDYWxlbmRhclZhbHVlfSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2luZ2xlLWNhbGVuZGFyLXZhbHVlJztcbmltcG9ydCB7RUNhbGVuZGFyTW9kZX0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL2NhbGVuZGFyLW1vZGUtZW51bSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RheUNhbGVuZGFyU2VydmljZX0gZnJvbSAnLi9kYXktY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBtb21lbnROcyBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtNb21lbnQsIHVuaXRPZlRpbWV9IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge0lEYXlDYWxlbmRhckNvbmZpZywgSURheUNhbGVuZGFyQ29uZmlnSW50ZXJuYWx9IGZyb20gJy4vZGF5LWNhbGVuZGFyLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQge0lEYXl9IGZyb20gJy4vZGF5Lm1vZGVsJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtQ29udHJvbCxcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NhbGVuZGFyVmFsdWV9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9jYWxlbmRhci12YWx1ZSc7XG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3V0aWxzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtJTW9udGhDYWxlbmRhckNvbmZpZ30gZnJvbSAnLi4vbW9udGgtY2FsZW5kYXIvbW9udGgtY2FsZW5kYXItY29uZmlnJztcbmltcG9ydCB7SU1vbnRofSBmcm9tICcuLi9tb250aC1jYWxlbmRhci9tb250aC5tb2RlbCc7XG5pbXBvcnQge0RhdGVWYWxpZGF0b3J9IGZyb20gJy4uL2NvbW1vbi90eXBlcy92YWxpZGF0b3IudHlwZSc7XG5pbXBvcnQge0lOYXZFdmVudH0gZnJvbSAnLi4vY29tbW9uL21vZGVscy9uYXZpZ2F0aW9uLWV2ZW50Lm1vZGVsJztcbmNvbnN0IG1vbWVudCA9IG1vbWVudE5zO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkcC1kYXktY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJ2RheS1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXktY2FsZW5kYXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIERheUNhbGVuZGFyU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERheUNhbGVuZGFyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF5Q2FsZW5kYXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF5Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG5cbiAgQElucHV0KCkgY29uZmlnOiBJRGF5Q2FsZW5kYXJDb25maWc7XG4gIEBJbnB1dCgpIGRpc3BsYXlEYXRlOiBTaW5nbGVDYWxlbmRhclZhbHVlO1xuICBASW5wdXQoKSBtaW5EYXRlOiBNb21lbnQ7XG4gIEBJbnB1dCgpIG1heERhdGU6IE1vbWVudDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8SURheT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk1vbnRoU2VsZWN0OiBFdmVudEVtaXR0ZXI8SU1vbnRoPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTmF2SGVhZGVyQnRuQ2xpY2s6IEV2ZW50RW1pdHRlcjxFQ2FsZW5kYXJNb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uR29Ub0N1cnJlbnQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTGVmdE5hdjogRXZlbnRFbWl0dGVyPElOYXZFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblJpZ2h0TmF2OiBFdmVudEVtaXR0ZXI8SU5hdkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBDYWxlbmRhck1vZGUgPSBFQ2FsZW5kYXJNb2RlO1xuICBpc0luaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBjb21wb25lbnRDb25maWc6IElEYXlDYWxlbmRhckNvbmZpZ0ludGVybmFsO1xuICBfc2VsZWN0ZWQ6IE1vbWVudFtdO1xuICB3ZWVrczogSURheVtdW107XG4gIHdlZWtkYXlzOiBNb21lbnRbXTtcbiAgX2N1cnJlbnREYXRlVmlldzogTW9tZW50O1xuICBpbnB1dFZhbHVlOiBDYWxlbmRhclZhbHVlO1xuICBpbnB1dFZhbHVlVHlwZTogRUNhbGVuZGFyVmFsdWU7XG4gIHZhbGlkYXRlRm46IERhdGVWYWxpZGF0b3I7XG4gIGN1cnJlbnRDYWxlbmRhck1vZGU6IEVDYWxlbmRhck1vZGUgPSBFQ2FsZW5kYXJNb2RlLkRheTtcbiAgbW9udGhDYWxlbmRhckNvbmZpZzogSU1vbnRoQ2FsZW5kYXJDb25maWc7XG4gIF9zaG91bGRTaG93Q3VycmVudDogYm9vbGVhbiA9IHRydWU7XG4gIG5hdkxhYmVsOiBzdHJpbmc7XG4gIHNob3dMZWZ0TmF2OiBib29sZWFuO1xuICBzaG93UmlnaHROYXY6IGJvb2xlYW47XG5cbiAgYXBpID0ge1xuICAgIG1vdmVDYWxlbmRhcnNCeTogdGhpcy5tb3ZlQ2FsZW5kYXJzQnkuYmluZCh0aGlzKSxcbiAgICBtb3ZlQ2FsZW5kYXJUbzogdGhpcy5tb3ZlQ2FsZW5kYXJUby5iaW5kKHRoaXMpLFxuICAgIHRvZ2dsZUNhbGVuZGFyTW9kZTogdGhpcy50b2dnbGVDYWxlbmRhck1vZGUuYmluZCh0aGlzKVxuICB9O1xuXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZDogTW9tZW50W10pIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnByb2Nlc3NPbkNoYW5nZUNhbGxiYWNrKHNlbGVjdGVkKSk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKTogTW9tZW50W10ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBjdXJyZW50RGF0ZVZpZXcoY3VycmVudDogTW9tZW50KSB7XG4gICAgdGhpcy5fY3VycmVudERhdGVWaWV3ID0gY3VycmVudC5jbG9uZSgpO1xuICAgIHRoaXMud2Vla3MgPSB0aGlzLmRheUNhbGVuZGFyU2VydmljZVxuICAgICAgLmdlbmVyYXRlTW9udGhBcnJheSh0aGlzLmNvbXBvbmVudENvbmZpZywgdGhpcy5fY3VycmVudERhdGVWaWV3LCB0aGlzLnNlbGVjdGVkKTtcbiAgICB0aGlzLm5hdkxhYmVsID0gdGhpcy5kYXlDYWxlbmRhclNlcnZpY2UuZ2V0SGVhZGVyTGFiZWwodGhpcy5jb21wb25lbnRDb25maWcsIHRoaXMuX2N1cnJlbnREYXRlVmlldyk7XG4gICAgdGhpcy5zaG93TGVmdE5hdiA9IHRoaXMuZGF5Q2FsZW5kYXJTZXJ2aWNlLnNob3VsZFNob3dMZWZ0KHRoaXMuY29tcG9uZW50Q29uZmlnLm1pbiwgdGhpcy5jdXJyZW50RGF0ZVZpZXcpO1xuICAgIHRoaXMuc2hvd1JpZ2h0TmF2ID0gdGhpcy5kYXlDYWxlbmRhclNlcnZpY2Uuc2hvdWxkU2hvd1JpZ2h0KHRoaXMuY29tcG9uZW50Q29uZmlnLm1heCwgdGhpcy5jdXJyZW50RGF0ZVZpZXcpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnREYXRlVmlldygpOiBNb21lbnQge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50RGF0ZVZpZXc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgZGF5Q2FsZW5kYXJTZXJ2aWNlOiBEYXlDYWxlbmRhclNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSB1dGlsc1NlcnZpY2U6IFV0aWxzU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0luaXRlZCA9IHRydWU7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5pbml0VmFsaWRhdG9ycygpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudENvbmZpZyA9IHRoaXMuZGF5Q2FsZW5kYXJTZXJ2aWNlLmdldENvbmZpZyh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgfHwgW107XG4gICAgdGhpcy5jdXJyZW50RGF0ZVZpZXcgPSB0aGlzLmRpc3BsYXlEYXRlXG4gICAgICA/IHRoaXMudXRpbHNTZXJ2aWNlLmNvbnZlcnRUb01vbWVudCh0aGlzLmRpc3BsYXlEYXRlLCB0aGlzLmNvbXBvbmVudENvbmZpZy5mb3JtYXQpLmNsb25lKClcbiAgICAgIDogdGhpcy51dGlsc1NlcnZpY2VcbiAgICAgICAgLmdldERlZmF1bHREaXNwbGF5RGF0ZShcbiAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlVmlldyxcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLFxuICAgICAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLmFsbG93TXVsdGlTZWxlY3QsXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRDb25maWcubWluXG4gICAgICAgICk7XG4gICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuZGF5Q2FsZW5kYXJTZXJ2aWNlXG4gICAgICAuZ2VuZXJhdGVXZWVrZGF5cyh0aGlzLmNvbXBvbmVudENvbmZpZy5maXJzdERheU9mV2Vlayk7XG4gICAgdGhpcy5pbnB1dFZhbHVlVHlwZSA9IHRoaXMudXRpbHNTZXJ2aWNlLmdldElucHV0VHlwZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMuY29tcG9uZW50Q29uZmlnLmFsbG93TXVsdGlTZWxlY3QpO1xuICAgIHRoaXMubW9udGhDYWxlbmRhckNvbmZpZyA9IHRoaXMuZGF5Q2FsZW5kYXJTZXJ2aWNlLmdldE1vbnRoQ2FsZW5kYXJDb25maWcodGhpcy5jb21wb25lbnRDb25maWcpO1xuICAgIHRoaXMuX3Nob3VsZFNob3dDdXJyZW50ID0gdGhpcy5zaG91bGRTaG93Q3VycmVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmlzSW5pdGVkKSB7XG4gICAgICBjb25zdCB7bWluRGF0ZSwgbWF4RGF0ZSwgY29uZmlnfSA9IGNoYW5nZXM7XG5cbiAgICAgIHRoaXMuaGFuZGxlQ29uZmlnQ2hhbmdlKGNvbmZpZyk7XG4gICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgaWYgKG1pbkRhdGUgfHwgbWF4RGF0ZSkge1xuICAgICAgICB0aGlzLmluaXRWYWxpZGF0b3JzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogQ2FsZW5kYXJWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy51dGlsc1NlcnZpY2VcbiAgICAgICAgLmNvbnZlcnRUb01vbWVudEFycmF5KHZhbHVlLCB0aGlzLmNvbXBvbmVudENvbmZpZy5mb3JtYXQsIHRoaXMuY29tcG9uZW50Q29uZmlnLmFsbG93TXVsdGlTZWxlY3QpO1xuICAgICAgdGhpcy5pbnB1dFZhbHVlVHlwZSA9IHRoaXMudXRpbHNTZXJ2aWNlXG4gICAgICAgIC5nZXRJbnB1dFR5cGUodGhpcy5pbnB1dFZhbHVlLCB0aGlzLmNvbXBvbmVudENvbmZpZy5hbGxvd011bHRpU2VsZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMud2Vla3MgPSB0aGlzLmRheUNhbGVuZGFyU2VydmljZVxuICAgICAgLmdlbmVyYXRlTW9udGhBcnJheSh0aGlzLmNvbXBvbmVudENvbmZpZywgdGhpcy5jdXJyZW50RGF0ZVZpZXcsIHRoaXMuc2VsZWN0ZWQpO1xuXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgb25DaGFuZ2VDYWxsYmFjayhfOiBhbnkpIHtcbiAgfTtcblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gIH1cblxuICB2YWxpZGF0ZShmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgYW55IHtcbiAgICBpZiAodGhpcy5taW5EYXRlIHx8IHRoaXMubWF4RGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVGbihmb3JtQ29udHJvbC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoKSA9PiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3NPbkNoYW5nZUNhbGxiYWNrKHZhbHVlOiBNb21lbnRbXSk6IENhbGVuZGFyVmFsdWUge1xuICAgIHJldHVybiB0aGlzLnV0aWxzU2VydmljZS5jb252ZXJ0RnJvbU1vbWVudEFycmF5KFxuICAgICAgdGhpcy5jb21wb25lbnRDb25maWcuZm9ybWF0LFxuICAgICAgdmFsdWUsXG4gICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5yZXR1cm5lZFZhbHVlVHlwZSB8fCB0aGlzLmlucHV0VmFsdWVUeXBlXG4gICAgKTtcbiAgfVxuXG4gIGluaXRWYWxpZGF0b3JzKCkge1xuICAgIHRoaXMudmFsaWRhdGVGbiA9IHRoaXMudXRpbHNTZXJ2aWNlLmNyZWF0ZVZhbGlkYXRvcihcbiAgICAgIHttaW5EYXRlOiB0aGlzLm1pbkRhdGUsIG1heERhdGU6IHRoaXMubWF4RGF0ZX0sXG4gICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5mb3JtYXQsXG4gICAgICAnZGF5J1xuICAgICk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5wcm9jZXNzT25DaGFuZ2VDYWxsYmFjayh0aGlzLnNlbGVjdGVkKSk7XG4gIH1cblxuICBkYXlDbGlja2VkKGRheTogSURheSkge1xuICAgIGlmIChkYXkuc2VsZWN0ZWQgJiYgIXRoaXMuY29tcG9uZW50Q29uZmlnLnVuU2VsZWN0T25DbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnV0aWxzU2VydmljZVxuICAgICAgLnVwZGF0ZVNlbGVjdGVkKHRoaXMuY29tcG9uZW50Q29uZmlnLmFsbG93TXVsdGlTZWxlY3QsIHRoaXMuc2VsZWN0ZWQsIGRheSk7XG4gICAgdGhpcy53ZWVrcyA9IHRoaXMuZGF5Q2FsZW5kYXJTZXJ2aWNlXG4gICAgICAuZ2VuZXJhdGVNb250aEFycmF5KHRoaXMuY29tcG9uZW50Q29uZmlnLCB0aGlzLmN1cnJlbnREYXRlVmlldywgdGhpcy5zZWxlY3RlZCk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KGRheSk7XG4gIH1cblxuICBnZXREYXlCdG5UZXh0KGRheTogSURheSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF5Q2FsZW5kYXJTZXJ2aWNlLmdldERheUJ0blRleHQodGhpcy5jb21wb25lbnRDb25maWcsIGRheS5kYXRlKTtcbiAgfVxuXG4gIGdldERheUJ0bkNzc0NsYXNzKGRheTogSURheSk6IHtba2xhc3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBjb25zdCBjc3NDbGFzc2VzOiB7W2tsYXNzOiBzdHJpbmddOiBib29sZWFufSA9IHtcbiAgICAgICdkcC1zZWxlY3RlZCc6IGRheS5zZWxlY3RlZCxcbiAgICAgICdkcC1jdXJyZW50LW1vbnRoJzogZGF5LmN1cnJlbnRNb250aCxcbiAgICAgICdkcC1wcmV2LW1vbnRoJzogZGF5LnByZXZNb250aCxcbiAgICAgICdkcC1uZXh0LW1vbnRoJzogZGF5Lm5leHRNb250aCxcbiAgICAgICdkcC1jdXJyZW50LWRheSc6IGRheS5jdXJyZW50RGF5XG4gICAgfTtcbiAgICBjb25zdCBjdXN0b21Dc3NDbGFzczogc3RyaW5nID0gdGhpcy5kYXlDYWxlbmRhclNlcnZpY2UuZ2V0RGF5QnRuQ3NzQ2xhc3ModGhpcy5jb21wb25lbnRDb25maWcsIGRheS5kYXRlKTtcbiAgICBpZiAoY3VzdG9tQ3NzQ2xhc3MpIHtcbiAgICAgIGNzc0NsYXNzZXNbY3VzdG9tQ3NzQ2xhc3NdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIG9uTGVmdE5hdkNsaWNrKCkge1xuICAgIGNvbnN0IGZyb20gPSB0aGlzLmN1cnJlbnREYXRlVmlldy5jbG9uZSgpO1xuICAgIHRoaXMubW92ZUNhbGVuZGFyc0J5KHRoaXMuY3VycmVudERhdGVWaWV3LCAtMSwgJ21vbnRoJyk7XG4gICAgY29uc3QgdG8gPSB0aGlzLmN1cnJlbnREYXRlVmlldy5jbG9uZSgpO1xuICAgIHRoaXMub25MZWZ0TmF2LmVtaXQoe2Zyb20sIHRvfSk7XG4gIH1cblxuICBvblJpZ2h0TmF2Q2xpY2soKSB7XG4gICAgY29uc3QgZnJvbSA9IHRoaXMuY3VycmVudERhdGVWaWV3LmNsb25lKCk7XG4gICAgdGhpcy5tb3ZlQ2FsZW5kYXJzQnkodGhpcy5jdXJyZW50RGF0ZVZpZXcsIDEsICdtb250aCcpO1xuICAgIGNvbnN0IHRvID0gdGhpcy5jdXJyZW50RGF0ZVZpZXcuY2xvbmUoKTtcbiAgICB0aGlzLm9uUmlnaHROYXYuZW1pdCh7ZnJvbSwgdG99KTtcbiAgfVxuXG4gIG9uTW9udGhDYWxlbmRhckxlZnRDbGljayhjaGFuZ2U6IElOYXZFdmVudCkge1xuICAgIHRoaXMub25MZWZ0TmF2LmVtaXQoY2hhbmdlKTtcbiAgfVxuXG4gIG9uTW9udGhDYWxlbmRhclJpZ2h0Q2xpY2soY2hhbmdlOiBJTmF2RXZlbnQpIHtcbiAgICB0aGlzLm9uUmlnaHROYXYuZW1pdChjaGFuZ2UpO1xuICB9XG5cbiAgb25Nb250aENhbGVuZGFyU2Vjb25kYXJ5TGVmdENsaWNrKGNoYW5nZTogSU5hdkV2ZW50KSB7XG4gICAgdGhpcy5vblJpZ2h0TmF2LmVtaXQoY2hhbmdlKTtcbiAgfVxuXG4gIG9uTW9udGhDYWxlbmRhclNlY29uZGFyeVJpZ2h0Q2xpY2soY2hhbmdlOiBJTmF2RXZlbnQpIHtcbiAgICB0aGlzLm9uTGVmdE5hdi5lbWl0KGNoYW5nZSk7XG4gIH1cblxuICBnZXRXZWVrZGF5TmFtZSh3ZWVrZGF5OiBNb21lbnQpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudENvbmZpZy53ZWVrRGF5Rm9ybWF0dGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRDb25maWcud2Vla0RheUZvcm1hdHRlcih3ZWVrZGF5LmRheSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla2RheS5mb3JtYXQodGhpcy5jb21wb25lbnRDb25maWcud2Vla0RheUZvcm1hdCk7XG4gIH1cblxuICB0b2dnbGVDYWxlbmRhck1vZGUobW9kZTogRUNhbGVuZGFyTW9kZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRDYWxlbmRhck1vZGUgIT09IG1vZGUpIHtcbiAgICAgIHRoaXMuY3VycmVudENhbGVuZGFyTW9kZSA9IG1vZGU7XG4gICAgICB0aGlzLm9uTmF2SGVhZGVyQnRuQ2xpY2suZW1pdChtb2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbW9udGhTZWxlY3RlZChtb250aDogSU1vbnRoKSB7XG4gICAgdGhpcy5jdXJyZW50RGF0ZVZpZXcgPSBtb250aC5kYXRlLmNsb25lKCk7XG4gICAgdGhpcy5jdXJyZW50Q2FsZW5kYXJNb2RlID0gRUNhbGVuZGFyTW9kZS5EYXk7XG4gICAgdGhpcy5vbk1vbnRoU2VsZWN0LmVtaXQobW9udGgpO1xuICB9XG5cbiAgbW92ZUNhbGVuZGFyc0J5KGN1cnJlbnQ6IE1vbWVudCwgYW1vdW50OiBudW1iZXIsIGdyYW51bGFyaXR5OiB1bml0T2ZUaW1lLkJhc2UgPSAnbW9udGgnKSB7XG4gICAgdGhpcy5jdXJyZW50RGF0ZVZpZXcgPSBjdXJyZW50LmNsb25lKCkuYWRkKGFtb3VudCwgZ3JhbnVsYXJpdHkpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBtb3ZlQ2FsZW5kYXJUbyh0bzogU2luZ2xlQ2FsZW5kYXJWYWx1ZSkge1xuICAgIGlmICh0bykge1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZVZpZXcgPSB0aGlzLnV0aWxzU2VydmljZS5jb252ZXJ0VG9Nb21lbnQodG8sIHRoaXMuY29tcG9uZW50Q29uZmlnLmZvcm1hdCk7XG4gICAgfVxuXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNob3VsZFNob3dDdXJyZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnV0aWxzU2VydmljZS5zaG91bGRTaG93Q3VycmVudChcbiAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLnNob3dHb1RvQ3VycmVudCxcbiAgICAgICdkYXknLFxuICAgICAgdGhpcy5jb21wb25lbnRDb25maWcubWluLFxuICAgICAgdGhpcy5jb21wb25lbnRDb25maWcubWF4XG4gICAgKTtcbiAgfVxuXG4gIGdvVG9DdXJyZW50KCkge1xuICAgIHRoaXMuY3VycmVudERhdGVWaWV3ID0gbW9tZW50KCk7XG4gICAgdGhpcy5vbkdvVG9DdXJyZW50LmVtaXQoKTtcbiAgfVxuXG4gIGhhbmRsZUNvbmZpZ0NoYW5nZShjb25maWc6IFNpbXBsZUNoYW5nZSkge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIGNvbnN0IHByZXZDb25mOiBJRGF5Q2FsZW5kYXJDb25maWdJbnRlcm5hbCA9IHRoaXMuZGF5Q2FsZW5kYXJTZXJ2aWNlLmdldENvbmZpZyhjb25maWcucHJldmlvdXNWYWx1ZSk7XG4gICAgICBjb25zdCBjdXJyZW50Q29uZjogSURheUNhbGVuZGFyQ29uZmlnSW50ZXJuYWwgPSB0aGlzLmRheUNhbGVuZGFyU2VydmljZS5nZXRDb25maWcoY29uZmlnLmN1cnJlbnRWYWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLnV0aWxzU2VydmljZS5zaG91bGRSZXNldEN1cnJlbnRWaWV3KHByZXZDb25mLCBjdXJyZW50Q29uZikpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudERhdGVWaWV3ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnROcyBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtNb21lbnR9IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3V0aWxzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtJVGltZVNlbGVjdENvbmZpZywgSVRpbWVTZWxlY3RDb25maWdJbnRlcm5hbH0gZnJvbSAnLi90aW1lLXNlbGVjdC1jb25maWcubW9kZWwnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50TnM7XG5cbmV4cG9ydCB0eXBlIFRpbWVVbml0ID0gJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJztcbmV4cG9ydCBjb25zdCBGSVJTVF9QTV9IT1VSID0gMTI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaW1lU2VsZWN0U2VydmljZSB7XG4gIHJlYWRvbmx5IERFRkFVTFRfQ09ORklHOiBJVGltZVNlbGVjdENvbmZpZ0ludGVybmFsID0ge1xuICAgIGhvdXJzMTJGb3JtYXQ6ICdoaCcsXG4gICAgaG91cnMyNEZvcm1hdDogJ0hIJyxcbiAgICBtZXJpZGllbUZvcm1hdDogJ0EnLFxuICAgIG1pbnV0ZXNGb3JtYXQ6ICdtbScsXG4gICAgbWludXRlc0ludGVydmFsOiAxLFxuICAgIHNlY29uZHNGb3JtYXQ6ICdzcycsXG4gICAgc2Vjb25kc0ludGVydmFsOiAxLFxuICAgIHNob3dTZWNvbmRzOiBmYWxzZSxcbiAgICBzaG93VHdlbnR5Rm91ckhvdXJzOiBmYWxzZSxcbiAgICB0aW1lU2VwYXJhdG9yOiAnOicsXG4gICAgbG9jYWxlOiBtb21lbnQubG9jYWxlKClcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHV0aWxzU2VydmljZTogVXRpbHNTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXRDb25maWcoY29uZmlnOiBJVGltZVNlbGVjdENvbmZpZyk6IElUaW1lU2VsZWN0Q29uZmlnSW50ZXJuYWwge1xuICAgIGNvbnN0IHRpbWVDb25maWdzID0ge1xuICAgICAgbWF4VGltZTogdGhpcy51dGlsc1NlcnZpY2Uub25seVRpbWUoY29uZmlnICYmIGNvbmZpZy5tYXhUaW1lKSxcbiAgICAgIG1pblRpbWU6IHRoaXMudXRpbHNTZXJ2aWNlLm9ubHlUaW1lKGNvbmZpZyAmJiBjb25maWcubWluVGltZSlcbiAgICB9O1xuXG4gICAgY29uc3QgX2NvbmZpZyA9IDxJVGltZVNlbGVjdENvbmZpZ0ludGVybmFsPntcbiAgICAgIC4uLnRoaXMuREVGQVVMVF9DT05GSUcsXG4gICAgICAuLi50aGlzLnV0aWxzU2VydmljZS5jbGVhclVuZGVmaW5lZChjb25maWcpLFxuICAgICAgLi4udGltZUNvbmZpZ3NcbiAgICB9O1xuXG4gICAgbW9tZW50LmxvY2FsZShfY29uZmlnLmxvY2FsZSk7XG5cbiAgICByZXR1cm4gX2NvbmZpZztcbiAgfVxuXG4gIGdldFRpbWVGb3JtYXQoY29uZmlnOiBJVGltZVNlbGVjdENvbmZpZ0ludGVybmFsKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKGNvbmZpZy5zaG93VHdlbnR5Rm91ckhvdXJzID8gY29uZmlnLmhvdXJzMjRGb3JtYXQgOiBjb25maWcuaG91cnMxMkZvcm1hdClcbiAgICAgICsgY29uZmlnLnRpbWVTZXBhcmF0b3IgKyBjb25maWcubWludXRlc0Zvcm1hdFxuICAgICAgKyAoY29uZmlnLnNob3dTZWNvbmRzID8gKGNvbmZpZy50aW1lU2VwYXJhdG9yICsgY29uZmlnLnNlY29uZHNGb3JtYXQpIDogJycpXG4gICAgICArIChjb25maWcuc2hvd1R3ZW50eUZvdXJIb3VycyA/ICcnIDogJyAnICsgY29uZmlnLm1lcmlkaWVtRm9ybWF0KTtcbiAgfVxuXG4gIGdldEhvdXJzKGNvbmZpZzogSVRpbWVTZWxlY3RDb25maWdJbnRlcm5hbCwgdDogTW9tZW50IHwgbnVsbCk6IHN0cmluZyB7XG4gICAgY29uc3QgdGltZSA9IHQgfHwgbW9tZW50KCk7XG4gICAgcmV0dXJuIHRpbWUgJiYgdGltZS5mb3JtYXQoY29uZmlnLnNob3dUd2VudHlGb3VySG91cnMgPyBjb25maWcuaG91cnMyNEZvcm1hdCA6IGNvbmZpZy5ob3VyczEyRm9ybWF0KTtcbiAgfVxuXG4gIGdldE1pbnV0ZXMoY29uZmlnOiBJVGltZVNlbGVjdENvbmZpZ0ludGVybmFsLCB0OiBNb21lbnQgfCBudWxsKTogc3RyaW5nIHtcbiAgICBjb25zdCB0aW1lID0gdCB8fCBtb21lbnQoKTtcbiAgICByZXR1cm4gdGltZSAmJiB0aW1lLmZvcm1hdChjb25maWcubWludXRlc0Zvcm1hdCk7XG4gIH1cblxuICBnZXRTZWNvbmRzKGNvbmZpZzogSVRpbWVTZWxlY3RDb25maWdJbnRlcm5hbCwgdDogTW9tZW50IHwgbnVsbCk6IHN0cmluZyB7XG4gICAgY29uc3QgdGltZSA9IHQgfHwgbW9tZW50KCk7XG4gICAgcmV0dXJuIHRpbWUgJiYgdGltZS5mb3JtYXQoY29uZmlnLnNlY29uZHNGb3JtYXQpO1xuICB9XG5cbiAgZ2V0TWVyaWRpZW0oY29uZmlnOiBJVGltZVNlbGVjdENvbmZpZ0ludGVybmFsLCB0aW1lOiBNb21lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aW1lICYmIHRpbWUuZm9ybWF0KGNvbmZpZy5tZXJpZGllbUZvcm1hdCk7XG4gIH1cblxuICBkZWNyZWFzZShjb25maWc6IElUaW1lU2VsZWN0Q29uZmlnSW50ZXJuYWwsIHRpbWU6IE1vbWVudCwgdW5pdDogVGltZVVuaXQpOiBNb21lbnQge1xuICAgIGxldCBhbW91bnQ6IG51bWJlciA9IDE7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICBhbW91bnQgPSBjb25maWcubWludXRlc0ludGVydmFsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgIGFtb3VudCA9IGNvbmZpZy5zZWNvbmRzSW50ZXJ2YWw7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdGltZS5jbG9uZSgpLnN1YnRyYWN0KGFtb3VudCwgdW5pdCk7XG4gIH1cblxuICBpbmNyZWFzZShjb25maWc6IElUaW1lU2VsZWN0Q29uZmlnSW50ZXJuYWwsIHRpbWU6IE1vbWVudCwgdW5pdDogVGltZVVuaXQpOiBNb21lbnQge1xuICAgIGxldCBhbW91bnQ6IG51bWJlciA9IDE7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICBhbW91bnQgPSBjb25maWcubWludXRlc0ludGVydmFsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgIGFtb3VudCA9IGNvbmZpZy5zZWNvbmRzSW50ZXJ2YWw7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdGltZS5jbG9uZSgpLmFkZChhbW91bnQsIHVuaXQpO1xuICB9XG5cbiAgdG9nZ2xlTWVyaWRpZW0odGltZTogTW9tZW50KTogTW9tZW50IHtcbiAgICBpZiAodGltZS5ob3VycygpIDwgRklSU1RfUE1fSE9VUikge1xuICAgICAgcmV0dXJuIHRpbWUuY2xvbmUoKS5hZGQoMTIsICdob3VyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aW1lLmNsb25lKCkuc3VidHJhY3QoMTIsICdob3VyJyk7XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkU2hvd0RlY3JlYXNlKGNvbmZpZzogSVRpbWVTZWxlY3RDb25maWdJbnRlcm5hbCwgdGltZTogTW9tZW50LCB1bml0OiBUaW1lVW5pdCk6IGJvb2xlYW4ge1xuICAgIGlmICghY29uZmlnLm1pbiAmJiAhY29uZmlnLm1pblRpbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICA7XG4gICAgY29uc3QgbmV3VGltZSA9IHRoaXMuZGVjcmVhc2UoY29uZmlnLCB0aW1lLCB1bml0KTtcblxuICAgIHJldHVybiAoIWNvbmZpZy5taW4gfHwgY29uZmlnLm1pbi5pc1NhbWVPckJlZm9yZShuZXdUaW1lKSlcbiAgICAgICYmICghY29uZmlnLm1pblRpbWUgfHwgY29uZmlnLm1pblRpbWUuaXNTYW1lT3JCZWZvcmUodGhpcy51dGlsc1NlcnZpY2Uub25seVRpbWUobmV3VGltZSkpKTtcbiAgfVxuXG4gIHNob3VsZFNob3dJbmNyZWFzZShjb25maWc6IElUaW1lU2VsZWN0Q29uZmlnSW50ZXJuYWwsIHRpbWU6IE1vbWVudCwgdW5pdDogVGltZVVuaXQpOiBib29sZWFuIHtcbiAgICBpZiAoIWNvbmZpZy5tYXggJiYgIWNvbmZpZy5tYXhUaW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgO1xuICAgIGNvbnN0IG5ld1RpbWUgPSB0aGlzLmluY3JlYXNlKGNvbmZpZywgdGltZSwgdW5pdCk7XG5cbiAgICByZXR1cm4gKCFjb25maWcubWF4IHx8IGNvbmZpZy5tYXguaXNTYW1lT3JBZnRlcihuZXdUaW1lKSlcbiAgICAgICYmICghY29uZmlnLm1heFRpbWUgfHwgY29uZmlnLm1heFRpbWUuaXNTYW1lT3JBZnRlcih0aGlzLnV0aWxzU2VydmljZS5vbmx5VGltZShuZXdUaW1lKSkpO1xuICB9XG5cbiAgc2hvdWxkU2hvd1RvZ2dsZU1lcmlkaWVtKGNvbmZpZzogSVRpbWVTZWxlY3RDb25maWdJbnRlcm5hbCwgdGltZTogTW9tZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKCFjb25maWcubWluICYmICFjb25maWcubWF4ICYmICFjb25maWcubWluVGltZSAmJiAhY29uZmlnLm1heFRpbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBuZXdUaW1lID0gdGhpcy50b2dnbGVNZXJpZGllbSh0aW1lKTtcbiAgICByZXR1cm4gKCFjb25maWcubWF4IHx8IGNvbmZpZy5tYXguaXNTYW1lT3JBZnRlcihuZXdUaW1lKSlcbiAgICAgICYmICghY29uZmlnLm1pbiB8fCBjb25maWcubWluLmlzU2FtZU9yQmVmb3JlKG5ld1RpbWUpKVxuICAgICAgJiYgKCFjb25maWcubWF4VGltZSB8fCBjb25maWcubWF4VGltZS5pc1NhbWVPckFmdGVyKHRoaXMudXRpbHNTZXJ2aWNlLm9ubHlUaW1lKG5ld1RpbWUpKSlcbiAgICAgICYmICghY29uZmlnLm1pblRpbWUgfHwgY29uZmlnLm1pblRpbWUuaXNTYW1lT3JCZWZvcmUodGhpcy51dGlsc1NlcnZpY2Uub25seVRpbWUobmV3VGltZSkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudE5zIGZyb20gJ21vbWVudCc7XG5pbXBvcnQge01vbWVudH0gZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy91dGlscy91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7RGF5Q2FsZW5kYXJTZXJ2aWNlfSBmcm9tICcuLi9kYXktY2FsZW5kYXIvZGF5LWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHtUaW1lU2VsZWN0U2VydmljZX0gZnJvbSAnLi4vdGltZS1zZWxlY3QvdGltZS1zZWxlY3Quc2VydmljZSc7XG5pbXBvcnQge0lEYXlUaW1lQ2FsZW5kYXJDb25maWd9IGZyb20gJy4vZGF5LXRpbWUtY2FsZW5kYXItY29uZmlnLm1vZGVsJztcbmNvbnN0IG1vbWVudCA9IG1vbWVudE5zO1xuXG5jb25zdCBEQVlfRk9STUFUID0gJ1lZWVlNTUREJztcbmNvbnN0IFRJTUVfRk9STUFUID0gJ0hIOm1tOnNzJztcbmNvbnN0IENPTUJJTkVEX0ZPUk1BVCA9IERBWV9GT1JNQVQgKyBUSU1FX0ZPUk1BVDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERheVRpbWVDYWxlbmRhclNlcnZpY2Uge1xuICByZWFkb25seSBERUZBVUxUX0NPTkZJRzogSURheVRpbWVDYWxlbmRhckNvbmZpZyA9IHtcbiAgICBsb2NhbGU6IG1vbWVudC5sb2NhbGUoKVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGF5Q2FsZW5kYXJTZXJ2aWNlOiBEYXlDYWxlbmRhclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdGltZVNlbGVjdFNlcnZpY2U6IFRpbWVTZWxlY3RTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXRDb25maWcoY29uZmlnOiBJRGF5VGltZUNhbGVuZGFyQ29uZmlnKTogSURheVRpbWVDYWxlbmRhckNvbmZpZyB7XG4gICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuREVGQVVMVF9DT05GSUcsXG4gICAgICAuLi50aGlzLnRpbWVTZWxlY3RTZXJ2aWNlLmdldENvbmZpZyhjb25maWcpLFxuICAgICAgLi4udGhpcy5kYXlDYWxlbmRhclNlcnZpY2UuZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB9O1xuXG4gICAgbW9tZW50LmxvY2FsZShjb25maWcubG9jYWxlKTtcblxuICAgIHJldHVybiBfY29uZmlnO1xuICB9XG5cbiAgdXBkYXRlRGF5KGN1cnJlbnQ6IE1vbWVudCwgZGF5OiBNb21lbnQsIGNvbmZpZzogSURheVRpbWVDYWxlbmRhckNvbmZpZyk6IE1vbWVudCB7XG4gICAgY29uc3QgdGltZSA9IGN1cnJlbnQgPyBjdXJyZW50IDogbW9tZW50KCk7XG4gICAgbGV0IHVwZGF0ZWQgPSBtb21lbnQoZGF5LmZvcm1hdChEQVlfRk9STUFUKSArIHRpbWUuZm9ybWF0KFRJTUVfRk9STUFUKSwgQ09NQklORURfRk9STUFUKVxuXG4gICAgaWYgKGNvbmZpZy5taW4pIHtcbiAgICAgIGNvbnN0IG1pbiA9IDxNb21lbnQ+Y29uZmlnLm1pbjtcbiAgICAgIHVwZGF0ZWQgPSBtaW4uaXNBZnRlcih1cGRhdGVkKSA/IG1pbiA6IHVwZGF0ZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5tYXgpIHtcbiAgICAgIGNvbnN0IG1heCA9IDxNb21lbnQ+Y29uZmlnLm1heDtcbiAgICAgIHVwZGF0ZWQgPSBtYXguaXNCZWZvcmUodXBkYXRlZCkgPyBtYXggOiB1cGRhdGVkO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVkO1xuICB9XG5cbiAgdXBkYXRlVGltZShjdXJyZW50OiBNb21lbnQsIHRpbWU6IE1vbWVudCk6IE1vbWVudCB7XG4gICAgY29uc3QgZGF5ID0gY3VycmVudCA/IGN1cnJlbnQgOiBtb21lbnQoKTtcblxuICAgIHJldHVybiBtb21lbnQoZGF5LmZvcm1hdChEQVlfRk9STUFUKSArIHRpbWUuZm9ybWF0KFRJTUVfRk9STUFUKSwgQ09NQklORURfRk9STUFUKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtFQ2FsZW5kYXJWYWx1ZX0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL2NhbGVuZGFyLXZhbHVlLWVudW0nO1xuaW1wb3J0IHtTaW5nbGVDYWxlbmRhclZhbHVlfSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2luZ2xlLWNhbGVuZGFyLXZhbHVlJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RpbWVTZWxlY3RTZXJ2aWNlLCBUaW1lVW5pdH0gZnJvbSAnLi90aW1lLXNlbGVjdC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIG1vbWVudE5zIGZyb20gJ21vbWVudCc7XG5pbXBvcnQge01vbWVudH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7SVRpbWVTZWxlY3RDb25maWcsIElUaW1lU2VsZWN0Q29uZmlnSW50ZXJuYWx9IGZyb20gJy4vdGltZS1zZWxlY3QtY29uZmlnLm1vZGVsJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtQ29udHJvbCxcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NhbGVuZGFyVmFsdWV9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9jYWxlbmRhci12YWx1ZSc7XG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3V0aWxzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtJRGF0ZX0gZnJvbSAnLi4vY29tbW9uL21vZGVscy9kYXRlLm1vZGVsJztcbmltcG9ydCB7RGF0ZVZhbGlkYXRvcn0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3ZhbGlkYXRvci50eXBlJztcbmNvbnN0IG1vbWVudCA9IG1vbWVudE5zO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkcC10aW1lLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAndGltZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGltZS1zZWxlY3QuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIFRpbWVTZWxlY3RTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGltZVNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRpbWVTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGltZVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcblxuICBASW5wdXQoKSBjb25maWc6IElUaW1lU2VsZWN0Q29uZmlnO1xuICBASW5wdXQoKSBkaXNwbGF5RGF0ZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgQElucHV0KCkgbWluRGF0ZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgQElucHV0KCkgbWF4RGF0ZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgQElucHV0KCkgbWluVGltZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgQElucHV0KCkgbWF4VGltZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SURhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlzSW5pdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbXBvbmVudENvbmZpZzogSVRpbWVTZWxlY3RDb25maWdJbnRlcm5hbDtcbiAgX3NlbGVjdGVkOiBNb21lbnQ7XG4gIGlucHV0VmFsdWU6IENhbGVuZGFyVmFsdWU7XG4gIGlucHV0VmFsdWVUeXBlOiBFQ2FsZW5kYXJWYWx1ZTtcbiAgdmFsaWRhdGVGbjogRGF0ZVZhbGlkYXRvcjtcblxuICBob3Vyczogc3RyaW5nO1xuICBtaW51dGVzOiBzdHJpbmc7XG4gIHNlY29uZHM6IHN0cmluZztcbiAgbWVyaWRpZW06IHN0cmluZztcblxuICBzaG93RGVjSG91cjogYm9vbGVhbjtcbiAgc2hvd0RlY01pbnV0ZTogYm9vbGVhbjtcbiAgc2hvd0RlY1NlY29uZDogYm9vbGVhbjtcbiAgc2hvd0luY0hvdXI6IGJvb2xlYW47XG4gIHNob3dJbmNNaW51dGU6IGJvb2xlYW47XG4gIHNob3dJbmNTZWNvbmQ6IGJvb2xlYW47XG4gIHNob3dUb2dnbGVNZXJpZGllbTogYm9vbGVhbjtcblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IE1vbWVudCkge1xuICAgIHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgdGhpcy5jYWxjdWxhdGVUaW1lUGFydHModGhpcy5zZWxlY3RlZCk7XG5cbiAgICB0aGlzLnNob3dEZWNIb3VyID0gdGhpcy50aW1lU2VsZWN0U2VydmljZS5zaG91bGRTaG93RGVjcmVhc2UodGhpcy5jb21wb25lbnRDb25maWcsIHRoaXMuX3NlbGVjdGVkLCAnaG91cicpO1xuICAgIHRoaXMuc2hvd0RlY01pbnV0ZSA9IHRoaXMudGltZVNlbGVjdFNlcnZpY2Uuc2hvdWxkU2hvd0RlY3JlYXNlKHRoaXMuY29tcG9uZW50Q29uZmlnLCB0aGlzLl9zZWxlY3RlZCwgJ21pbnV0ZScpO1xuICAgIHRoaXMuc2hvd0RlY1NlY29uZCA9IHRoaXMudGltZVNlbGVjdFNlcnZpY2Uuc2hvdWxkU2hvd0RlY3JlYXNlKHRoaXMuY29tcG9uZW50Q29uZmlnLCB0aGlzLl9zZWxlY3RlZCwgJ3NlY29uZCcpO1xuXG4gICAgdGhpcy5zaG93SW5jSG91ciA9IHRoaXMudGltZVNlbGVjdFNlcnZpY2Uuc2hvdWxkU2hvd0luY3JlYXNlKHRoaXMuY29tcG9uZW50Q29uZmlnLCB0aGlzLl9zZWxlY3RlZCwgJ2hvdXInKTtcbiAgICB0aGlzLnNob3dJbmNNaW51dGUgPSB0aGlzLnRpbWVTZWxlY3RTZXJ2aWNlLnNob3VsZFNob3dJbmNyZWFzZSh0aGlzLmNvbXBvbmVudENvbmZpZywgdGhpcy5fc2VsZWN0ZWQsICdtaW51dGUnKTtcbiAgICB0aGlzLnNob3dJbmNTZWNvbmQgPSB0aGlzLnRpbWVTZWxlY3RTZXJ2aWNlLnNob3VsZFNob3dJbmNyZWFzZSh0aGlzLmNvbXBvbmVudENvbmZpZywgdGhpcy5fc2VsZWN0ZWQsICdzZWNvbmQnKTtcblxuICAgIHRoaXMuc2hvd1RvZ2dsZU1lcmlkaWVtID0gdGhpcy50aW1lU2VsZWN0U2VydmljZS5zaG91bGRTaG93VG9nZ2xlTWVyaWRpZW0odGhpcy5jb21wb25lbnRDb25maWcsIHRoaXMuX3NlbGVjdGVkKTtcblxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnByb2Nlc3NPbkNoYW5nZUNhbGxiYWNrKHNlbGVjdGVkKSk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKTogTW9tZW50IHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBhcGkgPSB7XG4gICAgdHJpZ2dlckNoYW5nZTogdGhpcy5lbWl0Q2hhbmdlLmJpbmQodGhpcylcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGltZVNlbGVjdFNlcnZpY2U6IFRpbWVTZWxlY3RTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNJbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuaW5pdFZhbGlkYXRvcnMoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRDb25maWcgPSB0aGlzLnRpbWVTZWxlY3RTZXJ2aWNlLmdldENvbmZpZyh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgfHwgbW9tZW50KCk7XG4gICAgdGhpcy5pbnB1dFZhbHVlVHlwZSA9IHRoaXMudXRpbHNTZXJ2aWNlLmdldElucHV0VHlwZSh0aGlzLmlucHV0VmFsdWUsIGZhbHNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5pc0luaXRlZCkge1xuICAgICAgY29uc3Qge21pbkRhdGUsIG1heERhdGUsIG1pblRpbWUsIG1heFRpbWV9ID0gY2hhbmdlcztcbiAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICBpZiAobWluRGF0ZSB8fCBtYXhEYXRlIHx8IG1pblRpbWUgfHwgbWF4VGltZSkge1xuICAgICAgICB0aGlzLmluaXRWYWxpZGF0b3JzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogQ2FsZW5kYXJWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnRWYWx1ZSA9IHRoaXMudXRpbHNTZXJ2aWNlXG4gICAgICAgIC5jb252ZXJ0VG9Nb21lbnRBcnJheSh2YWx1ZSwgdGhpcy50aW1lU2VsZWN0U2VydmljZS5nZXRUaW1lRm9ybWF0KHRoaXMuY29tcG9uZW50Q29uZmlnKSwgZmFsc2UpWzBdO1xuICAgICAgaWYgKG1vbWVudFZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gbW9tZW50VmFsdWU7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZVR5cGUgPSB0aGlzLnV0aWxzU2VydmljZVxuICAgICAgICAgIC5nZXRJbnB1dFR5cGUodGhpcy5pbnB1dFZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgb25DaGFuZ2VDYWxsYmFjayhfOiBhbnkpIHtcbiAgfTtcblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gIH1cblxuICB2YWxpZGF0ZShmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgYW55IHtcbiAgICBpZiAodGhpcy5taW5EYXRlIHx8IHRoaXMubWF4RGF0ZSB8fCB0aGlzLm1pblRpbWUgfHwgdGhpcy5tYXhUaW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUZuKGZvcm1Db250cm9sLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgpID0+IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc09uQ2hhbmdlQ2FsbGJhY2sodmFsdWU6IE1vbWVudCk6IENhbGVuZGFyVmFsdWUge1xuICAgIHJldHVybiB0aGlzLnV0aWxzU2VydmljZS5jb252ZXJ0RnJvbU1vbWVudEFycmF5KFxuICAgICAgdGhpcy50aW1lU2VsZWN0U2VydmljZS5nZXRUaW1lRm9ybWF0KHRoaXMuY29tcG9uZW50Q29uZmlnKSxcbiAgICAgIFt2YWx1ZV0sXG4gICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5yZXR1cm5lZFZhbHVlVHlwZSB8fCB0aGlzLmlucHV0VmFsdWVUeXBlXG4gICAgKTtcbiAgfVxuXG4gIGluaXRWYWxpZGF0b3JzKCkge1xuICAgIHRoaXMudmFsaWRhdGVGbiA9IHRoaXMudXRpbHNTZXJ2aWNlLmNyZWF0ZVZhbGlkYXRvcihcbiAgICAgIHtcbiAgICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlLFxuICAgICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUsXG4gICAgICAgIG1pblRpbWU6IHRoaXMubWluVGltZSxcbiAgICAgICAgbWF4VGltZTogdGhpcy5tYXhUaW1lXG4gICAgICB9LCB1bmRlZmluZWQsICdkYXknKTtcblxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnByb2Nlc3NPbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWQpKTtcbiAgfVxuXG4gIGRlY3JlYXNlKHVuaXQ6IFRpbWVVbml0KSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGltZVNlbGVjdFNlcnZpY2UuZGVjcmVhc2UodGhpcy5jb21wb25lbnRDb25maWcsIHRoaXMuc2VsZWN0ZWQsIHVuaXQpO1xuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICB9XG5cbiAgaW5jcmVhc2UodW5pdDogVGltZVVuaXQpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50aW1lU2VsZWN0U2VydmljZS5pbmNyZWFzZSh0aGlzLmNvbXBvbmVudENvbmZpZywgdGhpcy5zZWxlY3RlZCwgdW5pdCk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gIH1cblxuICB0b2dnbGVNZXJpZGllbSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50aW1lU2VsZWN0U2VydmljZS50b2dnbGVNZXJpZGllbSh0aGlzLnNlbGVjdGVkKTtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxuXG4gIGVtaXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtkYXRlOiB0aGlzLnNlbGVjdGVkLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY2FsY3VsYXRlVGltZVBhcnRzKHRpbWU6IE1vbWVudCkge1xuICAgIHRoaXMuaG91cnMgPSB0aGlzLnRpbWVTZWxlY3RTZXJ2aWNlLmdldEhvdXJzKHRoaXMuY29tcG9uZW50Q29uZmlnLCB0aW1lKTtcbiAgICB0aGlzLm1pbnV0ZXMgPSB0aGlzLnRpbWVTZWxlY3RTZXJ2aWNlLmdldE1pbnV0ZXModGhpcy5jb21wb25lbnRDb25maWcsIHRpbWUpO1xuICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudGltZVNlbGVjdFNlcnZpY2UuZ2V0U2Vjb25kcyh0aGlzLmNvbXBvbmVudENvbmZpZywgdGltZSk7XG4gICAgdGhpcy5tZXJpZGllbSA9IHRoaXMudGltZVNlbGVjdFNlcnZpY2UuZ2V0TWVyaWRpZW0odGhpcy5jb21wb25lbnRDb25maWcsIHRpbWUpO1xuICB9XG59XG4iLCJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lEYXRlUGlja2VyQ29uZmlnLCBJRGF0ZVBpY2tlckNvbmZpZ0ludGVybmFsfSBmcm9tICcuL2RhdGUtcGlja2VyLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQgKiBhcyBtb21lbnROcyBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtNb21lbnR9IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3V0aWxzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtJRGF5Q2FsZW5kYXJDb25maWd9IGZyb20gJy4uL2RheS1jYWxlbmRhci9kYXktY2FsZW5kYXItY29uZmlnLm1vZGVsJztcbmltcG9ydCB7VGltZVNlbGVjdFNlcnZpY2V9IGZyb20gJy4uL3RpbWUtc2VsZWN0L3RpbWUtc2VsZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHtEYXlUaW1lQ2FsZW5kYXJTZXJ2aWNlfSBmcm9tICcuLi9kYXktdGltZS1jYWxlbmRhci9kYXktdGltZS1jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7SVRpbWVTZWxlY3RDb25maWd9IGZyb20gJy4uL3RpbWUtc2VsZWN0L3RpbWUtc2VsZWN0LWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQge0NhbGVuZGFyTW9kZX0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL2NhbGVuZGFyLW1vZGUnO1xuaW1wb3J0IHtDYWxlbmRhclZhbHVlfSBmcm9tICcuLi9jb21tb24vdHlwZXMvY2FsZW5kYXItdmFsdWUnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50TnM7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyU2VydmljZSB7XG4gIHJlYWRvbmx5IG9uUGlja2VyQ2xvc2VkOiBFdmVudEVtaXR0ZXI8bnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogSURhdGVQaWNrZXJDb25maWdJbnRlcm5hbCA9IHtcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgIGNsb3NlT25TZWxlY3REZWxheTogMTAwLFxuICAgIGZvcm1hdDogJ0RELU1NLVlZWVknLFxuICAgIG9wZW5PbkZvY3VzOiB0cnVlLFxuICAgIG9wZW5PbkNsaWNrOiB0cnVlLFxuICAgIG9uT3BlbkRlbGF5OiAwLFxuICAgIGRpc2FibGVLZXlwcmVzczogZmFsc2UsXG4gICAgc2hvd05lYXJNb250aERheXM6IHRydWUsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICBlbmFibGVNb250aFNlbGVjdG9yOiB0cnVlLFxuICAgIHNob3dHb1RvQ3VycmVudDogdHJ1ZSxcbiAgICBsb2NhbGU6IG1vbWVudC5sb2NhbGUoKSxcbiAgICBoaWRlT25PdXRzaWRlQ2xpY2s6IHRydWVcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHV0aWxzU2VydmljZTogVXRpbHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRpbWVTZWxlY3RTZXJ2aWNlOiBUaW1lU2VsZWN0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkYXl0aW1lQ2FsZW5kYXJTZXJ2aWNlOiBEYXlUaW1lQ2FsZW5kYXJTZXJ2aWNlKSB7XG4gIH1cblxuICAvLyB0b2RvOjogYWRkIHVuaXQgdGVzdHNcbiAgZ2V0Q29uZmlnKGNvbmZpZzogSURhdGVQaWNrZXJDb25maWcsIG1vZGU6IENhbGVuZGFyTW9kZSA9ICdkYXl0aW1lJyk6IElEYXRlUGlja2VyQ29uZmlnSW50ZXJuYWwge1xuICAgIGNvbnN0IF9jb25maWcgPSA8SURhdGVQaWNrZXJDb25maWdJbnRlcm5hbD57XG4gICAgICAuLi50aGlzLmRlZmF1bHRDb25maWcsXG4gICAgICBmb3JtYXQ6IHRoaXMuZ2V0RGVmYXVsdEZvcm1hdEJ5TW9kZShtb2RlKSxcbiAgICAgIC4uLnRoaXMudXRpbHNTZXJ2aWNlLmNsZWFyVW5kZWZpbmVkKGNvbmZpZylcbiAgICB9O1xuXG4gICAgdGhpcy51dGlsc1NlcnZpY2UuY29udmVydFByb3BzVG9Nb21lbnQoX2NvbmZpZywgX2NvbmZpZy5mb3JtYXQsIFsnbWluJywgJ21heCddKTtcblxuICAgIGlmIChjb25maWcgJiYgY29uZmlnLmFsbG93TXVsdGlTZWxlY3QgJiYgY29uZmlnLmNsb3NlT25TZWxlY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NvbmZpZy5jbG9zZU9uU2VsZWN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbW9tZW50LmxvY2FsZShfY29uZmlnLmxvY2FsZSk7XG5cbiAgICByZXR1cm4gX2NvbmZpZztcbiAgfVxuXG4gIGdldERheUNvbmZpZ1NlcnZpY2UocGlja2VyQ29uZmlnOiBJRGF0ZVBpY2tlckNvbmZpZyk6IElEYXlDYWxlbmRhckNvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbjogcGlja2VyQ29uZmlnLm1pbixcbiAgICAgIG1heDogcGlja2VyQ29uZmlnLm1heCxcbiAgICAgIGlzRGF5RGlzYWJsZWRDYWxsYmFjazogcGlja2VyQ29uZmlnLmlzRGF5RGlzYWJsZWRDYWxsYmFjayxcbiAgICAgIHdlZWtEYXlGb3JtYXQ6IHBpY2tlckNvbmZpZy53ZWVrRGF5Rm9ybWF0LFxuICAgICAgc2hvd05lYXJNb250aERheXM6IHBpY2tlckNvbmZpZy5zaG93TmVhck1vbnRoRGF5cyxcbiAgICAgIHNob3dXZWVrTnVtYmVyczogcGlja2VyQ29uZmlnLnNob3dXZWVrTnVtYmVycyxcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiBwaWNrZXJDb25maWcuZmlyc3REYXlPZldlZWssXG4gICAgICBmb3JtYXQ6IHBpY2tlckNvbmZpZy5mb3JtYXQsXG4gICAgICBhbGxvd011bHRpU2VsZWN0OiBwaWNrZXJDb25maWcuYWxsb3dNdWx0aVNlbGVjdCxcbiAgICAgIG1vbnRoRm9ybWF0OiBwaWNrZXJDb25maWcubW9udGhGb3JtYXQsXG4gICAgICBtb250aEZvcm1hdHRlcjogcGlja2VyQ29uZmlnLm1vbnRoRm9ybWF0dGVyLFxuICAgICAgZW5hYmxlTW9udGhTZWxlY3RvcjogcGlja2VyQ29uZmlnLmVuYWJsZU1vbnRoU2VsZWN0b3IsXG4gICAgICB5ZWFyRm9ybWF0OiBwaWNrZXJDb25maWcueWVhckZvcm1hdCxcbiAgICAgIHllYXJGb3JtYXR0ZXI6IHBpY2tlckNvbmZpZy55ZWFyRm9ybWF0dGVyLFxuICAgICAgZGF5QnRuRm9ybWF0OiBwaWNrZXJDb25maWcuZGF5QnRuRm9ybWF0LFxuICAgICAgZGF5QnRuRm9ybWF0dGVyOiBwaWNrZXJDb25maWcuZGF5QnRuRm9ybWF0dGVyLFxuICAgICAgZGF5QnRuQ3NzQ2xhc3NDYWxsYmFjazogcGlja2VyQ29uZmlnLmRheUJ0bkNzc0NsYXNzQ2FsbGJhY2ssXG4gICAgICBtb250aEJ0bkZvcm1hdDogcGlja2VyQ29uZmlnLm1vbnRoQnRuRm9ybWF0LFxuICAgICAgbW9udGhCdG5Gb3JtYXR0ZXI6IHBpY2tlckNvbmZpZy5tb250aEJ0bkZvcm1hdHRlcixcbiAgICAgIG1vbnRoQnRuQ3NzQ2xhc3NDYWxsYmFjazogcGlja2VyQ29uZmlnLm1vbnRoQnRuQ3NzQ2xhc3NDYWxsYmFjayxcbiAgICAgIG11bHRpcGxlWWVhcnNOYXZpZ2F0ZUJ5OiBwaWNrZXJDb25maWcubXVsdGlwbGVZZWFyc05hdmlnYXRlQnksXG4gICAgICBzaG93TXVsdGlwbGVZZWFyc05hdmlnYXRpb246IHBpY2tlckNvbmZpZy5zaG93TXVsdGlwbGVZZWFyc05hdmlnYXRpb24sXG4gICAgICBsb2NhbGU6IHBpY2tlckNvbmZpZy5sb2NhbGUsXG4gICAgICByZXR1cm5lZFZhbHVlVHlwZTogcGlja2VyQ29uZmlnLnJldHVybmVkVmFsdWVUeXBlLFxuICAgICAgc2hvd0dvVG9DdXJyZW50OiBwaWNrZXJDb25maWcuc2hvd0dvVG9DdXJyZW50LFxuICAgICAgdW5TZWxlY3RPbkNsaWNrOiBwaWNrZXJDb25maWcudW5TZWxlY3RPbkNsaWNrXG4gICAgfTtcbiAgfVxuXG4gIGdldERheVRpbWVDb25maWdTZXJ2aWNlKHBpY2tlckNvbmZpZzogSURhdGVQaWNrZXJDb25maWcpOiBJVGltZVNlbGVjdENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF5dGltZUNhbGVuZGFyU2VydmljZS5nZXRDb25maWcocGlja2VyQ29uZmlnKTtcbiAgfVxuXG4gIGdldFRpbWVDb25maWdTZXJ2aWNlKHBpY2tlckNvbmZpZzogSURhdGVQaWNrZXJDb25maWcpOiBJVGltZVNlbGVjdENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMudGltZVNlbGVjdFNlcnZpY2UuZ2V0Q29uZmlnKHBpY2tlckNvbmZpZyk7XG4gIH1cblxuICBwaWNrZXJDbG9zZWQoKSB7XG4gICAgdGhpcy5vblBpY2tlckNsb3NlZC5lbWl0KCk7XG4gIH1cblxuICAvLyB0b2RvOjogYWRkIHVuaXQgdGVzdHNcbiAgaXNWYWxpZElucHV0RGF0ZVZhbHVlKHZhbHVlOiBzdHJpbmcsIGNvbmZpZzogSURhdGVQaWNrZXJDb25maWcpOiBib29sZWFuIHtcbiAgICB2YWx1ZSA9IHZhbHVlID8gdmFsdWUgOiAnJztcbiAgICBjb25zdCBkYXRlc1N0ckFycjogc3RyaW5nW10gPSB0aGlzLnV0aWxzU2VydmljZS5kYXRlc1N0cmluZ1RvU3RyaW5nQXJyYXkodmFsdWUpO1xuXG4gICAgcmV0dXJuIGRhdGVzU3RyQXJyLmV2ZXJ5KGRhdGUgPT4gdGhpcy51dGlsc1NlcnZpY2UuaXNEYXRlVmFsaWQoZGF0ZSwgY29uZmlnLmZvcm1hdCkpO1xuICB9XG5cbiAgLy8gdG9kbzo6IGFkZCB1bml0IHRlc3RzXG4gIGNvbnZlcnRJbnB1dFZhbHVlVG9Nb21lbnRBcnJheSh2YWx1ZTogc3RyaW5nLCBjb25maWc6IElEYXRlUGlja2VyQ29uZmlnKTogTW9tZW50W10ge1xuICAgIHZhbHVlID0gdmFsdWUgPyB2YWx1ZSA6ICcnO1xuICAgIGNvbnN0IGRhdGVzU3RyQXJyOiBzdHJpbmdbXSA9IHRoaXMudXRpbHNTZXJ2aWNlLmRhdGVzU3RyaW5nVG9TdHJpbmdBcnJheSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdGhpcy51dGlsc1NlcnZpY2UuY29udmVydFRvTW9tZW50QXJyYXkoZGF0ZXNTdHJBcnIsIGNvbmZpZy5mb3JtYXQsIGNvbmZpZy5hbGxvd011bHRpU2VsZWN0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdEZvcm1hdEJ5TW9kZShtb2RlOiBDYWxlbmRhck1vZGUpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgcmV0dXJuICdERC1NTS1ZWVlZJztcbiAgICAgIGNhc2UgJ2RheXRpbWUnOlxuICAgICAgICByZXR1cm4gJ0RELU1NLVlZWVkgSEg6bW06c3MnO1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIHJldHVybiAnSEg6bW06c3MnO1xuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICByZXR1cm4gJ01NTSwgWVlZWSc7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50TnMgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7TW9tZW50fSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy91dGlscy91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7SU1vbnRofSBmcm9tICcuL21vbnRoLm1vZGVsJztcbmltcG9ydCB7SU1vbnRoQ2FsZW5kYXJDb25maWcsIElNb250aENhbGVuZGFyQ29uZmlnSW50ZXJuYWx9IGZyb20gJy4vbW9udGgtY2FsZW5kYXItY29uZmlnJztcbmNvbnN0IG1vbWVudCA9IG1vbWVudE5zO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9udGhDYWxlbmRhclNlcnZpY2Uge1xuICByZWFkb25seSBERUZBVUxUX0NPTkZJRzogSU1vbnRoQ2FsZW5kYXJDb25maWdJbnRlcm5hbCA9IHtcbiAgICBhbGxvd011bHRpU2VsZWN0OiBmYWxzZSxcbiAgICB5ZWFyRm9ybWF0OiAnWVlZWScsXG4gICAgZm9ybWF0OiAnTU0tWVlZWScsXG4gICAgaXNOYXZIZWFkZXJCdG5DbGlja2FibGU6IGZhbHNlLFxuICAgIG1vbnRoQnRuRm9ybWF0OiAnTU1NJyxcbiAgICBsb2NhbGU6IG1vbWVudC5sb2NhbGUoKSxcbiAgICBtdWx0aXBsZVllYXJzTmF2aWdhdGVCeTogMTAsXG4gICAgc2hvd011bHRpcGxlWWVhcnNOYXZpZ2F0aW9uOiBmYWxzZSxcbiAgICB1blNlbGVjdE9uQ2xpY2s6IHRydWVcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHV0aWxzU2VydmljZTogVXRpbHNTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXRDb25maWcoY29uZmlnOiBJTW9udGhDYWxlbmRhckNvbmZpZyk6IElNb250aENhbGVuZGFyQ29uZmlnSW50ZXJuYWwge1xuICAgIGNvbnN0IF9jb25maWcgPSA8SU1vbnRoQ2FsZW5kYXJDb25maWdJbnRlcm5hbD57XG4gICAgICAuLi50aGlzLkRFRkFVTFRfQ09ORklHLFxuICAgICAgLi4udGhpcy51dGlsc1NlcnZpY2UuY2xlYXJVbmRlZmluZWQoY29uZmlnKVxuICAgIH07XG5cbiAgICB0aGlzLnV0aWxzU2VydmljZS5jb252ZXJ0UHJvcHNUb01vbWVudChfY29uZmlnLCBfY29uZmlnLmZvcm1hdCwgWydtaW4nLCAnbWF4J10pO1xuXG4gICAgbW9tZW50LmxvY2FsZShfY29uZmlnLmxvY2FsZSk7XG5cbiAgICByZXR1cm4gX2NvbmZpZztcbiAgfVxuXG4gIGdlbmVyYXRlWWVhcihjb25maWc6IElNb250aENhbGVuZGFyQ29uZmlnLCB5ZWFyOiBNb21lbnQsIHNlbGVjdGVkOiBNb21lbnRbXSA9IG51bGwpOiBJTW9udGhbXVtdIHtcbiAgICBjb25zdCBpbmRleCA9IHllYXIuY2xvbmUoKS5zdGFydE9mKCd5ZWFyJyk7XG5cbiAgICByZXR1cm4gdGhpcy51dGlsc1NlcnZpY2UuY3JlYXRlQXJyYXkoMykubWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnV0aWxzU2VydmljZS5jcmVhdGVBcnJheSg0KS5tYXAoKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gaW5kZXguY2xvbmUoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSB7XG4gICAgICAgICAgZGF0ZSxcbiAgICAgICAgICBzZWxlY3RlZDogISFzZWxlY3RlZC5maW5kKHMgPT4gaW5kZXguaXNTYW1lKHMsICdtb250aCcpKSxcbiAgICAgICAgICBjdXJyZW50TW9udGg6IGluZGV4LmlzU2FtZShtb21lbnQoKSwgJ21vbnRoJyksXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNNb250aERpc2FibGVkKGRhdGUsIGNvbmZpZyksXG4gICAgICAgICAgdGV4dDogdGhpcy5nZXRNb250aEJ0blRleHQoY29uZmlnLCBkYXRlKVxuICAgICAgICB9O1xuXG4gICAgICAgIGluZGV4LmFkZCgxLCAnbW9udGgnKTtcblxuICAgICAgICByZXR1cm4gbW9udGg7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzTW9udGhEaXNhYmxlZChkYXRlOiBNb21lbnQsIGNvbmZpZzogSU1vbnRoQ2FsZW5kYXJDb25maWcpIHtcbiAgICBpZiAoY29uZmlnLm1pbiAmJiBkYXRlLmlzQmVmb3JlKGNvbmZpZy5taW4sICdtb250aCcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEoY29uZmlnLm1heCAmJiBkYXRlLmlzQWZ0ZXIoY29uZmlnLm1heCwgJ21vbnRoJykpO1xuICB9XG5cbiAgc2hvdWxkU2hvd0xlZnQobWluOiBNb21lbnQsIGN1cnJlbnRNb250aFZpZXc6IE1vbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtaW4gPyBtaW4uaXNCZWZvcmUoY3VycmVudE1vbnRoVmlldywgJ3llYXInKSA6IHRydWU7XG4gIH1cblxuICBzaG91bGRTaG93UmlnaHQobWF4OiBNb21lbnQsIGN1cnJlbnRNb250aFZpZXc6IE1vbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtYXggPyBtYXguaXNBZnRlcihjdXJyZW50TW9udGhWaWV3LCAneWVhcicpIDogdHJ1ZTtcbiAgfVxuXG4gIGdldEhlYWRlckxhYmVsKGNvbmZpZzogSU1vbnRoQ2FsZW5kYXJDb25maWcsIHllYXI6IE1vbWVudCk6IHN0cmluZyB7XG4gICAgaWYgKGNvbmZpZy55ZWFyRm9ybWF0dGVyKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnllYXJGb3JtYXR0ZXIoeWVhcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHllYXIuZm9ybWF0KGNvbmZpZy55ZWFyRm9ybWF0KTtcbiAgfVxuXG4gIGdldE1vbnRoQnRuVGV4dChjb25maWc6IElNb250aENhbGVuZGFyQ29uZmlnLCBtb250aDogTW9tZW50KTogc3RyaW5nIHtcbiAgICBpZiAoY29uZmlnLm1vbnRoQnRuRm9ybWF0dGVyKSB7XG4gICAgICByZXR1cm4gY29uZmlnLm1vbnRoQnRuRm9ybWF0dGVyKG1vbnRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGguZm9ybWF0KGNvbmZpZy5tb250aEJ0bkZvcm1hdCk7XG4gIH1cblxuICBnZXRNb250aEJ0bkNzc0NsYXNzKGNvbmZpZzogSU1vbnRoQ2FsZW5kYXJDb25maWcsIG1vbnRoOiBNb21lbnQpOiBzdHJpbmcge1xuICAgIGlmIChjb25maWcubW9udGhCdG5Dc3NDbGFzc0NhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gY29uZmlnLm1vbnRoQnRuQ3NzQ2xhc3NDYWxsYmFjayhtb250aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iLCJpbXBvcnQge0VDYWxlbmRhclZhbHVlfSBmcm9tICcuLi9jb21tb24vdHlwZXMvY2FsZW5kYXItdmFsdWUtZW51bSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lNb250aH0gZnJvbSAnLi9tb250aC5tb2RlbCc7XG5pbXBvcnQge01vbnRoQ2FsZW5kYXJTZXJ2aWNlfSBmcm9tICcuL21vbnRoLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgbW9tZW50TnMgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7TW9tZW50fSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtJTW9udGhDYWxlbmRhckNvbmZpZywgSU1vbnRoQ2FsZW5kYXJDb25maWdJbnRlcm5hbH0gZnJvbSAnLi9tb250aC1jYWxlbmRhci1jb25maWcnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Db250cm9sLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9yXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q2FsZW5kYXJWYWx1ZX0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL2NhbGVuZGFyLXZhbHVlJztcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvdXRpbHMvdXRpbHMuc2VydmljZSc7XG5pbXBvcnQge0RhdGVWYWxpZGF0b3J9IGZyb20gJy4uL2NvbW1vbi90eXBlcy92YWxpZGF0b3IudHlwZSc7XG5pbXBvcnQge1NpbmdsZUNhbGVuZGFyVmFsdWV9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9zaW5nbGUtY2FsZW5kYXItdmFsdWUnO1xuaW1wb3J0IHtJTmF2RXZlbnR9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvbmF2aWdhdGlvbi1ldmVudC5tb2RlbCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnROcztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHAtbW9udGgtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21vbnRoLWNhbGVuZGFyLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBNb250aENhbGVuZGFyU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1vbnRoQ2FsZW5kYXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNb250aENhbGVuZGFyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIEBJbnB1dCgpIGNvbmZpZzogSU1vbnRoQ2FsZW5kYXJDb25maWc7XG4gIEBJbnB1dCgpIGRpc3BsYXlEYXRlOiBNb21lbnQ7XG4gIEBJbnB1dCgpIG1pbkRhdGU6IE1vbWVudDtcbiAgQElucHV0KCkgbWF4RGF0ZTogTW9tZW50O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCkgdGhlbWU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxJTW9udGg+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25OYXZIZWFkZXJCdG5DbGljazogRXZlbnRFbWl0dGVyPG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Hb1RvQ3VycmVudDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25MZWZ0TmF2OiBFdmVudEVtaXR0ZXI8SU5hdkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uUmlnaHROYXY6IEV2ZW50RW1pdHRlcjxJTmF2RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25MZWZ0U2Vjb25kYXJ5TmF2OiBFdmVudEVtaXR0ZXI8SU5hdkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uUmlnaHRTZWNvbmRhcnlOYXY6IEV2ZW50RW1pdHRlcjxJTmF2RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlzSW5pdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbXBvbmVudENvbmZpZzogSU1vbnRoQ2FsZW5kYXJDb25maWdJbnRlcm5hbDtcbiAgX3NlbGVjdGVkOiBNb21lbnRbXTtcbiAgeWVhck1vbnRoczogSU1vbnRoW11bXTtcbiAgX2N1cnJlbnREYXRlVmlldzogTW9tZW50O1xuICBpbnB1dFZhbHVlOiBDYWxlbmRhclZhbHVlO1xuICBpbnB1dFZhbHVlVHlwZTogRUNhbGVuZGFyVmFsdWU7XG4gIHZhbGlkYXRlRm46IERhdGVWYWxpZGF0b3I7XG4gIF9zaG91bGRTaG93Q3VycmVudDogYm9vbGVhbiA9IHRydWU7XG4gIG5hdkxhYmVsOiBzdHJpbmc7XG4gIHNob3dMZWZ0TmF2OiBib29sZWFuO1xuICBzaG93UmlnaHROYXY6IGJvb2xlYW47XG4gIHNob3dTZWNvbmRhcnlMZWZ0TmF2OiBib29sZWFuO1xuICBzaG93U2Vjb25kYXJ5UmlnaHROYXY6IGJvb2xlYW47XG5cbiAgYXBpID0ge1xuICAgIHRvZ2dsZUNhbGVuZGFyOiB0aGlzLnRvZ2dsZUNhbGVuZGFyTW9kZS5iaW5kKHRoaXMpLFxuICAgIG1vdmVDYWxlbmRhclRvOiB0aGlzLm1vdmVDYWxlbmRhclRvLmJpbmQodGhpcylcbiAgfTtcblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IE1vbWVudFtdKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5wcm9jZXNzT25DaGFuZ2VDYWxsYmFjayhzZWxlY3RlZCkpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCk6IE1vbWVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgY3VycmVudERhdGVWaWV3KGN1cnJlbnQ6IE1vbWVudCkge1xuICAgIHRoaXMuX2N1cnJlbnREYXRlVmlldyA9IGN1cnJlbnQuY2xvbmUoKTtcbiAgICB0aGlzLnllYXJNb250aHMgPSB0aGlzLm1vbnRoQ2FsZW5kYXJTZXJ2aWNlXG4gICAgICAuZ2VuZXJhdGVZZWFyKHRoaXMuY29tcG9uZW50Q29uZmlnLCB0aGlzLl9jdXJyZW50RGF0ZVZpZXcsIHRoaXMuc2VsZWN0ZWQpO1xuICAgIHRoaXMubmF2TGFiZWwgPSB0aGlzLm1vbnRoQ2FsZW5kYXJTZXJ2aWNlLmdldEhlYWRlckxhYmVsKHRoaXMuY29tcG9uZW50Q29uZmlnLCB0aGlzLmN1cnJlbnREYXRlVmlldyk7XG4gICAgdGhpcy5zaG93TGVmdE5hdiA9IHRoaXMubW9udGhDYWxlbmRhclNlcnZpY2Uuc2hvdWxkU2hvd0xlZnQodGhpcy5jb21wb25lbnRDb25maWcubWluLCB0aGlzLl9jdXJyZW50RGF0ZVZpZXcpO1xuICAgIHRoaXMuc2hvd1JpZ2h0TmF2ID0gdGhpcy5tb250aENhbGVuZGFyU2VydmljZS5zaG91bGRTaG93UmlnaHQodGhpcy5jb21wb25lbnRDb25maWcubWF4LCB0aGlzLmN1cnJlbnREYXRlVmlldyk7XG4gICAgdGhpcy5zaG93U2Vjb25kYXJ5TGVmdE5hdiA9IHRoaXMuY29tcG9uZW50Q29uZmlnLnNob3dNdWx0aXBsZVllYXJzTmF2aWdhdGlvbiAmJiB0aGlzLnNob3dMZWZ0TmF2O1xuICAgIHRoaXMuc2hvd1NlY29uZGFyeVJpZ2h0TmF2ID0gdGhpcy5jb21wb25lbnRDb25maWcuc2hvd011bHRpcGxlWWVhcnNOYXZpZ2F0aW9uICYmIHRoaXMuc2hvd1JpZ2h0TmF2O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnREYXRlVmlldygpOiBNb21lbnQge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50RGF0ZVZpZXc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbW9udGhDYWxlbmRhclNlcnZpY2U6IE1vbnRoQ2FsZW5kYXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNJbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuaW5pdFZhbGlkYXRvcnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5pc0luaXRlZCkge1xuICAgICAgY29uc3Qge21pbkRhdGUsIG1heERhdGUsIGNvbmZpZ30gPSBjaGFuZ2VzO1xuXG4gICAgICB0aGlzLmhhbmRsZUNvbmZpZ0NoYW5nZShjb25maWcpO1xuICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgIGlmIChtaW5EYXRlIHx8IG1heERhdGUpIHtcbiAgICAgICAgdGhpcy5pbml0VmFsaWRhdG9ycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRDb25maWcgPSB0aGlzLm1vbnRoQ2FsZW5kYXJTZXJ2aWNlLmdldENvbmZpZyh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgfHwgW107XG4gICAgdGhpcy5jdXJyZW50RGF0ZVZpZXcgPSB0aGlzLmRpc3BsYXlEYXRlXG4gICAgICA/IHRoaXMuZGlzcGxheURhdGVcbiAgICAgIDogdGhpcy51dGlsc1NlcnZpY2VcbiAgICAgICAgLmdldERlZmF1bHREaXNwbGF5RGF0ZShcbiAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlVmlldyxcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLFxuICAgICAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLmFsbG93TXVsdGlTZWxlY3QsXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRDb25maWcubWluXG4gICAgICAgICk7XG4gICAgdGhpcy5pbnB1dFZhbHVlVHlwZSA9IHRoaXMudXRpbHNTZXJ2aWNlLmdldElucHV0VHlwZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMuY29tcG9uZW50Q29uZmlnLmFsbG93TXVsdGlTZWxlY3QpO1xuICAgIHRoaXMuX3Nob3VsZFNob3dDdXJyZW50ID0gdGhpcy5zaG91bGRTaG93Q3VycmVudCgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogQ2FsZW5kYXJWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy51dGlsc1NlcnZpY2VcbiAgICAgICAgLmNvbnZlcnRUb01vbWVudEFycmF5KHZhbHVlLCB0aGlzLmNvbXBvbmVudENvbmZpZy5mb3JtYXQsIHRoaXMuY29tcG9uZW50Q29uZmlnLmFsbG93TXVsdGlTZWxlY3QpO1xuICAgICAgdGhpcy55ZWFyTW9udGhzID0gdGhpcy5tb250aENhbGVuZGFyU2VydmljZVxuICAgICAgICAuZ2VuZXJhdGVZZWFyKHRoaXMuY29tcG9uZW50Q29uZmlnLCB0aGlzLmN1cnJlbnREYXRlVmlldywgdGhpcy5zZWxlY3RlZCk7XG4gICAgICB0aGlzLmlucHV0VmFsdWVUeXBlID0gdGhpcy51dGlsc1NlcnZpY2UuZ2V0SW5wdXRUeXBlKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5jb21wb25lbnRDb25maWcuYWxsb3dNdWx0aVNlbGVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICAgIHRoaXMueWVhck1vbnRocyA9IHRoaXMubW9udGhDYWxlbmRhclNlcnZpY2VcbiAgICAgICAgLmdlbmVyYXRlWWVhcih0aGlzLmNvbXBvbmVudENvbmZpZywgdGhpcy5jdXJyZW50RGF0ZVZpZXcsIHRoaXMuc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIG9uQ2hhbmdlQ2FsbGJhY2soXzogYW55KSB7XG4gIH07XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICB9XG5cbiAgdmFsaWRhdGUoZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IGFueSB7XG4gICAgaWYgKHRoaXMubWluRGF0ZSB8fCB0aGlzLm1heERhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRm4oZm9ybUNvbnRyb2wudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzT25DaGFuZ2VDYWxsYmFjayh2YWx1ZTogTW9tZW50W10pOiBDYWxlbmRhclZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy51dGlsc1NlcnZpY2UuY29udmVydEZyb21Nb21lbnRBcnJheShcbiAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLmZvcm1hdCxcbiAgICAgIHZhbHVlLFxuICAgICAgdGhpcy5jb21wb25lbnRDb25maWcucmV0dXJuZWRWYWx1ZVR5cGUgfHwgdGhpcy5pbnB1dFZhbHVlVHlwZVxuICAgICk7XG4gIH1cblxuICBpbml0VmFsaWRhdG9ycygpIHtcbiAgICB0aGlzLnZhbGlkYXRlRm4gPSB0aGlzLnZhbGlkYXRlRm4gPSB0aGlzLnV0aWxzU2VydmljZS5jcmVhdGVWYWxpZGF0b3IoXG4gICAgICB7bWluRGF0ZTogdGhpcy5taW5EYXRlLCBtYXhEYXRlOiB0aGlzLm1heERhdGV9LFxuICAgICAgdGhpcy5jb21wb25lbnRDb25maWcuZm9ybWF0LFxuICAgICAgJ21vbnRoJ1xuICAgICk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5wcm9jZXNzT25DaGFuZ2VDYWxsYmFjayh0aGlzLnNlbGVjdGVkKSk7XG4gIH1cblxuICBtb250aENsaWNrZWQobW9udGg6IElNb250aCkge1xuICAgIGlmIChtb250aC5zZWxlY3RlZCAmJiAhdGhpcy5jb21wb25lbnRDb25maWcudW5TZWxlY3RPbkNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudXRpbHNTZXJ2aWNlXG4gICAgICAudXBkYXRlU2VsZWN0ZWQodGhpcy5jb21wb25lbnRDb25maWcuYWxsb3dNdWx0aVNlbGVjdCwgdGhpcy5zZWxlY3RlZCwgbW9udGgsICdtb250aCcpO1xuICAgIHRoaXMueWVhck1vbnRocyA9IHRoaXMubW9udGhDYWxlbmRhclNlcnZpY2VcbiAgICAgIC5nZW5lcmF0ZVllYXIodGhpcy5jb21wb25lbnRDb25maWcsIHRoaXMuY3VycmVudERhdGVWaWV3LCB0aGlzLnNlbGVjdGVkKTtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQobW9udGgpO1xuICB9XG5cbiAgb25MZWZ0TmF2Q2xpY2soKSB7XG4gICAgY29uc3QgZnJvbSA9IHRoaXMuY3VycmVudERhdGVWaWV3LmNsb25lKCk7XG4gICAgdGhpcy5jdXJyZW50RGF0ZVZpZXcgPSB0aGlzLmN1cnJlbnREYXRlVmlldy5jbG9uZSgpLnN1YnRyYWN0KDEsICd5ZWFyJyk7XG4gICAgY29uc3QgdG8gPSB0aGlzLmN1cnJlbnREYXRlVmlldy5jbG9uZSgpO1xuICAgIHRoaXMueWVhck1vbnRocyA9IHRoaXMubW9udGhDYWxlbmRhclNlcnZpY2UuZ2VuZXJhdGVZZWFyKHRoaXMuY29tcG9uZW50Q29uZmlnLCB0aGlzLmN1cnJlbnREYXRlVmlldywgdGhpcy5zZWxlY3RlZCk7XG4gICAgdGhpcy5vbkxlZnROYXYuZW1pdCh7ZnJvbSwgdG99KTtcbiAgfVxuXG4gIG9uTGVmdFNlY29uZGFyeU5hdkNsaWNrKCkge1xuICAgIGxldCBuYXZpZ2F0ZUJ5ID0gdGhpcy5jb21wb25lbnRDb25maWcubXVsdGlwbGVZZWFyc05hdmlnYXRlQnk7XG4gICAgY29uc3QgaXNPdXRzaWRlUmFuZ2UgPSB0aGlzLmNvbXBvbmVudENvbmZpZy5taW4gJiZcbiAgICAgIHRoaXMuY3VycmVudERhdGVWaWV3LnllYXIoKSAtIHRoaXMuY29tcG9uZW50Q29uZmlnLm1pbi55ZWFyKCkgPCBuYXZpZ2F0ZUJ5O1xuXG4gICAgaWYgKGlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICBuYXZpZ2F0ZUJ5ID0gdGhpcy5jdXJyZW50RGF0ZVZpZXcueWVhcigpIC0gdGhpcy5jb21wb25lbnRDb25maWcubWluLnllYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmcm9tID0gdGhpcy5jdXJyZW50RGF0ZVZpZXcuY2xvbmUoKTtcbiAgICB0aGlzLmN1cnJlbnREYXRlVmlldyA9IHRoaXMuY3VycmVudERhdGVWaWV3LmNsb25lKCkuc3VidHJhY3QobmF2aWdhdGVCeSwgJ3llYXInKTtcbiAgICBjb25zdCB0byA9IHRoaXMuY3VycmVudERhdGVWaWV3LmNsb25lKCk7XG4gICAgdGhpcy5vbkxlZnRTZWNvbmRhcnlOYXYuZW1pdCh7ZnJvbSwgdG99KTtcbiAgfVxuXG4gIG9uUmlnaHROYXZDbGljaygpIHtcbiAgICBjb25zdCBmcm9tID0gdGhpcy5jdXJyZW50RGF0ZVZpZXcuY2xvbmUoKTtcbiAgICB0aGlzLmN1cnJlbnREYXRlVmlldyA9IHRoaXMuY3VycmVudERhdGVWaWV3LmNsb25lKCkuYWRkKDEsICd5ZWFyJyk7XG4gICAgY29uc3QgdG8gPSB0aGlzLmN1cnJlbnREYXRlVmlldy5jbG9uZSgpO1xuICAgIHRoaXMub25SaWdodE5hdi5lbWl0KHtmcm9tLCB0b30pO1xuICB9XG5cbiAgb25SaWdodFNlY29uZGFyeU5hdkNsaWNrKCkge1xuICAgIGxldCBuYXZpZ2F0ZUJ5ID0gdGhpcy5jb21wb25lbnRDb25maWcubXVsdGlwbGVZZWFyc05hdmlnYXRlQnk7XG4gICAgY29uc3QgaXNPdXRzaWRlUmFuZ2UgPSB0aGlzLmNvbXBvbmVudENvbmZpZy5tYXggJiZcbiAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLm1heC55ZWFyKCkgLSB0aGlzLmN1cnJlbnREYXRlVmlldy55ZWFyKCkgPCBuYXZpZ2F0ZUJ5O1xuXG4gICAgaWYgKGlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICBuYXZpZ2F0ZUJ5ID0gdGhpcy5jb21wb25lbnRDb25maWcubWF4LnllYXIoKSAtIHRoaXMuY3VycmVudERhdGVWaWV3LnllYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmcm9tID0gdGhpcy5jdXJyZW50RGF0ZVZpZXcuY2xvbmUoKTtcbiAgICB0aGlzLmN1cnJlbnREYXRlVmlldyA9IHRoaXMuY3VycmVudERhdGVWaWV3LmNsb25lKCkuYWRkKG5hdmlnYXRlQnksICd5ZWFyJyk7XG4gICAgY29uc3QgdG8gPSB0aGlzLmN1cnJlbnREYXRlVmlldy5jbG9uZSgpO1xuICAgIHRoaXMub25SaWdodFNlY29uZGFyeU5hdi5lbWl0KHtmcm9tLCB0b30pO1xuICB9XG5cbiAgdG9nZ2xlQ2FsZW5kYXJNb2RlKCkge1xuICAgIHRoaXMub25OYXZIZWFkZXJCdG5DbGljay5lbWl0KCk7XG4gIH1cblxuICBnZXRNb250aEJ0bkNzc0NsYXNzKG1vbnRoOiBJTW9udGgpOiB7W2tsYXNzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgY29uc3QgY3NzQ2xhc3M6IHtba2xhc3M6IHN0cmluZ106IGJvb2xlYW59ID0ge1xuICAgICAgJ2RwLXNlbGVjdGVkJzogbW9udGguc2VsZWN0ZWQsXG4gICAgICAnZHAtY3VycmVudC1tb250aCc6IG1vbnRoLmN1cnJlbnRNb250aFxuICAgIH07XG4gICAgY29uc3QgY3VzdG9tQ3NzQ2xhc3M6IHN0cmluZyA9IHRoaXMubW9udGhDYWxlbmRhclNlcnZpY2UuZ2V0TW9udGhCdG5Dc3NDbGFzcyh0aGlzLmNvbXBvbmVudENvbmZpZywgbW9udGguZGF0ZSk7XG5cbiAgICBpZiAoY3VzdG9tQ3NzQ2xhc3MpIHtcbiAgICAgIGNzc0NsYXNzW2N1c3RvbUNzc0NsYXNzXSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc0NsYXNzO1xuICB9XG5cbiAgc2hvdWxkU2hvd0N1cnJlbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudXRpbHNTZXJ2aWNlLnNob3VsZFNob3dDdXJyZW50KFxuICAgICAgdGhpcy5jb21wb25lbnRDb25maWcuc2hvd0dvVG9DdXJyZW50LFxuICAgICAgJ21vbnRoJyxcbiAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLm1pbixcbiAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLm1heFxuICAgICk7XG4gIH1cblxuICBnb1RvQ3VycmVudCgpIHtcbiAgICB0aGlzLmN1cnJlbnREYXRlVmlldyA9IG1vbWVudCgpO1xuICAgIHRoaXMub25Hb1RvQ3VycmVudC5lbWl0KCk7XG4gIH1cblxuICBtb3ZlQ2FsZW5kYXJUbyh0bzogU2luZ2xlQ2FsZW5kYXJWYWx1ZSkge1xuICAgIGlmICh0bykge1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZVZpZXcgPSB0aGlzLnV0aWxzU2VydmljZS5jb252ZXJ0VG9Nb21lbnQodG8sIHRoaXMuY29tcG9uZW50Q29uZmlnLmZvcm1hdCk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNvbmZpZ0NoYW5nZShjb25maWc6IFNpbXBsZUNoYW5nZSkge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIGNvbnN0IHByZXZDb25mOiBJTW9udGhDYWxlbmRhckNvbmZpZ0ludGVybmFsID0gdGhpcy5tb250aENhbGVuZGFyU2VydmljZS5nZXRDb25maWcoY29uZmlnLnByZXZpb3VzVmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudENvbmY6IElNb250aENhbGVuZGFyQ29uZmlnSW50ZXJuYWwgPSB0aGlzLm1vbnRoQ2FsZW5kYXJTZXJ2aWNlLmdldENvbmZpZyhjb25maWcuY3VycmVudFZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMudXRpbHNTZXJ2aWNlLnNob3VsZFJlc2V0Q3VycmVudFZpZXcocHJldkNvbmYsIGN1cnJlbnRDb25mKSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50RGF0ZVZpZXcgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtFQ2FsZW5kYXJWYWx1ZX0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL2NhbGVuZGFyLXZhbHVlLWVudW0nO1xuaW1wb3J0IHtTaW5nbGVDYWxlbmRhclZhbHVlfSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2luZ2xlLWNhbGVuZGFyLXZhbHVlJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtQ29udHJvbCxcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01vbWVudH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7Q2FsZW5kYXJWYWx1ZX0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL2NhbGVuZGFyLXZhbHVlJztcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvdXRpbHMvdXRpbHMuc2VydmljZSc7XG5pbXBvcnQge0lEYXRlfSBmcm9tICcuLi9jb21tb24vbW9kZWxzL2RhdGUubW9kZWwnO1xuaW1wb3J0IHtEYXlDYWxlbmRhclNlcnZpY2V9IGZyb20gJy4uL2RheS1jYWxlbmRhci9kYXktY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQge1RpbWVTZWxlY3RTZXJ2aWNlfSBmcm9tICcuLi90aW1lLXNlbGVjdC90aW1lLXNlbGVjdC5zZXJ2aWNlJztcbmltcG9ydCB7SURheVRpbWVDYWxlbmRhckNvbmZpZ30gZnJvbSAnLi9kYXktdGltZS1jYWxlbmRhci1jb25maWcubW9kZWwnO1xuaW1wb3J0IHtEYXlUaW1lQ2FsZW5kYXJTZXJ2aWNlfSBmcm9tICcuL2RheS10aW1lLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRlVmFsaWRhdG9yfSBmcm9tICcuLi9jb21tb24vdHlwZXMvdmFsaWRhdG9yLnR5cGUnO1xuaW1wb3J0IHtEYXlDYWxlbmRhckNvbXBvbmVudH0gZnJvbSAnLi4vZGF5LWNhbGVuZGFyL2RheS1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHtJTmF2RXZlbnR9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvbmF2aWdhdGlvbi1ldmVudC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RwLWRheS10aW1lLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXktdGltZS1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXktdGltZS1jYWxlbmRhci5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGF5VGltZUNhbGVuZGFyU2VydmljZSxcbiAgICBEYXlDYWxlbmRhclNlcnZpY2UsXG4gICAgVGltZVNlbGVjdFNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXlUaW1lQ2FsZW5kYXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXlUaW1lQ2FsZW5kYXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF5VGltZUNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogSURheVRpbWVDYWxlbmRhckNvbmZpZztcbiAgQElucHV0KCkgZGlzcGxheURhdGU6IFNpbmdsZUNhbGVuZGFyVmFsdWU7XG4gIEBJbnB1dCgpIG1pbkRhdGU6IFNpbmdsZUNhbGVuZGFyVmFsdWU7XG4gIEBJbnB1dCgpIG1heERhdGU6IFNpbmdsZUNhbGVuZGFyVmFsdWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoKSB0aGVtZTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPElEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uR29Ub0N1cnJlbnQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTGVmdE5hdjogRXZlbnRFbWl0dGVyPElOYXZFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblJpZ2h0TmF2OiBFdmVudEVtaXR0ZXI8SU5hdkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdkYXlDYWxlbmRhcicpIGRheUNhbGVuZGFyUmVmOiBEYXlDYWxlbmRhckNvbXBvbmVudDtcblxuICBpc0luaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBjb21wb25lbnRDb25maWc6IElEYXlUaW1lQ2FsZW5kYXJDb25maWc7XG4gIF9zZWxlY3RlZDogTW9tZW50O1xuICBpbnB1dFZhbHVlOiBDYWxlbmRhclZhbHVlO1xuICBpbnB1dFZhbHVlVHlwZTogRUNhbGVuZGFyVmFsdWU7XG4gIHZhbGlkYXRlRm46IERhdGVWYWxpZGF0b3I7XG5cbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkOiBNb21lbnQpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnByb2Nlc3NPbkNoYW5nZUNhbGxiYWNrKHNlbGVjdGVkKSk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKTogTW9tZW50IHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBhcGkgPSB7XG4gICAgbW92ZUNhbGVuZGFyVG86IHRoaXMubW92ZUNhbGVuZGFyVG8uYmluZCh0aGlzKVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXlUaW1lQ2FsZW5kYXJTZXJ2aWNlOiBEYXlUaW1lQ2FsZW5kYXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNJbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuaW5pdFZhbGlkYXRvcnMoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRDb25maWcgPSB0aGlzLmRheVRpbWVDYWxlbmRhclNlcnZpY2UuZ2V0Q29uZmlnKHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLmlucHV0VmFsdWVUeXBlID0gdGhpcy51dGlsc1NlcnZpY2UuZ2V0SW5wdXRUeXBlKHRoaXMuaW5wdXRWYWx1ZSwgZmFsc2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmlzSW5pdGVkKSB7XG4gICAgICBjb25zdCB7bWluRGF0ZSwgbWF4RGF0ZX0gPSBjaGFuZ2VzO1xuICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgIGlmIChtaW5EYXRlIHx8IG1heERhdGUpIHtcbiAgICAgICAgdGhpcy5pbml0VmFsaWRhdG9ycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IENhbGVuZGFyVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudXRpbHNTZXJ2aWNlXG4gICAgICAgIC5jb252ZXJ0VG9Nb21lbnRBcnJheSh2YWx1ZSwgdGhpcy5jb21wb25lbnRDb25maWcuZm9ybWF0LCBmYWxzZSlbMF07XG4gICAgICB0aGlzLmlucHV0VmFsdWVUeXBlID0gdGhpcy51dGlsc1NlcnZpY2VcbiAgICAgICAgLmdldElucHV0VHlwZSh0aGlzLmlucHV0VmFsdWUsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgb25DaGFuZ2VDYWxsYmFjayhfOiBhbnkpIHtcbiAgfTtcblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gIH1cblxuICB2YWxpZGF0ZShmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgYW55IHtcbiAgICBpZiAodGhpcy5taW5EYXRlIHx8IHRoaXMubWF4RGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVGbihmb3JtQ29udHJvbC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoKSA9PiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3NPbkNoYW5nZUNhbGxiYWNrKHZhbHVlOiBNb21lbnQpOiBDYWxlbmRhclZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy51dGlsc1NlcnZpY2UuY29udmVydEZyb21Nb21lbnRBcnJheShcbiAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLmZvcm1hdCxcbiAgICAgIFt2YWx1ZV0sXG4gICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5yZXR1cm5lZFZhbHVlVHlwZSB8fCB0aGlzLmlucHV0VmFsdWVUeXBlXG4gICAgKTtcbiAgfVxuXG4gIGluaXRWYWxpZGF0b3JzKCkge1xuICAgIHRoaXMudmFsaWRhdGVGbiA9IHRoaXMudXRpbHNTZXJ2aWNlLmNyZWF0ZVZhbGlkYXRvcihcbiAgICAgIHtcbiAgICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlLFxuICAgICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGVcbiAgICAgIH0sIHVuZGVmaW5lZCwgJ2RheXRpbWUnKTtcblxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnByb2Nlc3NPbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWQpKTtcbiAgfVxuXG4gIGRhdGVTZWxlY3RlZChkYXk6IElEYXRlKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZGF5VGltZUNhbGVuZGFyU2VydmljZS51cGRhdGVEYXkodGhpcy5zZWxlY3RlZCwgZGF5LmRhdGUsIHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxuXG4gIHRpbWVDaGFuZ2UodGltZTogSURhdGUpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXlUaW1lQ2FsZW5kYXJTZXJ2aWNlLnVwZGF0ZVRpbWUodGhpcy5zZWxlY3RlZCwgdGltZS5kYXRlKTtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxuXG4gIGVtaXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtkYXRlOiB0aGlzLnNlbGVjdGVkLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgfVxuXG4gIG1vdmVDYWxlbmRhclRvKHRvOiBTaW5nbGVDYWxlbmRhclZhbHVlKSB7XG4gICAgaWYgKHRvKSB7XG4gICAgICB0aGlzLmRheUNhbGVuZGFyUmVmLm1vdmVDYWxlbmRhclRvKHRvKTtcbiAgICB9XG4gIH1cblxuICBvbkxlZnROYXZDbGljayhjaGFuZ2U6IElOYXZFdmVudCkge1xuICAgIHRoaXMub25MZWZ0TmF2LmVtaXQoY2hhbmdlKTtcbiAgfVxuXG4gIG9uUmlnaHROYXZDbGljayhjaGFuZ2U6IElOYXZFdmVudCkge1xuICAgIHRoaXMub25SaWdodE5hdi5lbWl0KGNoYW5nZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7SURhdGV9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZGF0ZS5tb2RlbCc7XG5pbXBvcnQge0RvbUhlbHBlcn0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL2RvbS1hcHBlbmRlci9kb20tYXBwZW5kZXIuc2VydmljZSc7XG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3V0aWxzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtDYWxlbmRhck1vZGV9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9jYWxlbmRhci1tb2RlJztcbmltcG9ydCB7RUNhbGVuZGFyTW9kZX0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL2NhbGVuZGFyLW1vZGUtZW51bSc7XG5pbXBvcnQge0NhbGVuZGFyVmFsdWV9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9jYWxlbmRhci12YWx1ZSc7XG5pbXBvcnQge0VDYWxlbmRhclZhbHVlfSBmcm9tICcuLi9jb21tb24vdHlwZXMvY2FsZW5kYXItdmFsdWUtZW51bSc7XG5pbXBvcnQge1NpbmdsZUNhbGVuZGFyVmFsdWV9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9zaW5nbGUtY2FsZW5kYXItdmFsdWUnO1xuaW1wb3J0IHtJRGF5Q2FsZW5kYXJDb25maWd9IGZyb20gJy4uL2RheS1jYWxlbmRhci9kYXktY2FsZW5kYXItY29uZmlnLm1vZGVsJztcbmltcG9ydCB7RGF5Q2FsZW5kYXJDb21wb25lbnR9IGZyb20gJy4uL2RheS1jYWxlbmRhci9kYXktY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7RGF5Q2FsZW5kYXJTZXJ2aWNlfSBmcm9tICcuLi9kYXktY2FsZW5kYXIvZGF5LWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHtJRGF5VGltZUNhbGVuZGFyQ29uZmlnfSBmcm9tICcuLi9kYXktdGltZS1jYWxlbmRhci9kYXktdGltZS1jYWxlbmRhci1jb25maWcubW9kZWwnO1xuaW1wb3J0IHtEYXlUaW1lQ2FsZW5kYXJTZXJ2aWNlfSBmcm9tICcuLi9kYXktdGltZS1jYWxlbmRhci9kYXktdGltZS1jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7SVRpbWVTZWxlY3RDb25maWd9IGZyb20gJy4uL3RpbWUtc2VsZWN0L3RpbWUtc2VsZWN0LWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQge1RpbWVTZWxlY3RDb21wb25lbnR9IGZyb20gJy4uL3RpbWUtc2VsZWN0L3RpbWUtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1RpbWVTZWxlY3RTZXJ2aWNlfSBmcm9tICcuLi90aW1lLXNlbGVjdC90aW1lLXNlbGVjdC5zZXJ2aWNlJztcbmltcG9ydCB7SURhdGVQaWNrZXJDb25maWcsIElEYXRlUGlja2VyQ29uZmlnSW50ZXJuYWx9IGZyb20gJy4vZGF0ZS1waWNrZXItY29uZmlnLm1vZGVsJztcbmltcG9ydCB7SURwRGF5UGlja2VyQXBpfSBmcm9tICcuL2RhdGUtcGlja2VyLmFwaSc7XG5pbXBvcnQge0RhdGVQaWNrZXJTZXJ2aWNlfSBmcm9tICcuL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIE5HX1ZBTElEQVRPUlMsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNb21lbnQsIHVuaXRPZlRpbWV9IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge0RhdGVWYWxpZGF0b3J9IGZyb20gJy4uL2NvbW1vbi90eXBlcy92YWxpZGF0b3IudHlwZSc7XG5pbXBvcnQge01vbnRoQ2FsZW5kYXJDb21wb25lbnR9IGZyb20gJy4uL21vbnRoLWNhbGVuZGFyL21vbnRoLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0RheVRpbWVDYWxlbmRhckNvbXBvbmVudH0gZnJvbSAnLi4vZGF5LXRpbWUtY2FsZW5kYXIvZGF5LXRpbWUtY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7SU5hdkV2ZW50fSBmcm9tICcuLi9jb21tb24vbW9kZWxzL25hdmlnYXRpb24tZXZlbnQubW9kZWwnO1xuaW1wb3J0IHtTZWxlY3RFdmVudH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3NlbGVjdGlvbi1ldmV0LmVudW0uJztcbmltcG9ydCB7SVNlbGVjdGlvbkV2ZW50fSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2VsZWN0aW9uLWV2ZXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkcC1kYXRlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZS1waWNrZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIERhdGVQaWNrZXJTZXJ2aWNlLFxuICAgIERheVRpbWVDYWxlbmRhclNlcnZpY2UsXG4gICAgRGF5Q2FsZW5kYXJTZXJ2aWNlLFxuICAgIFRpbWVTZWxlY3RTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT25Jbml0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlclZpZXdJbml0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbkRlc3Ryb3kge1xuICBpc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbmZpZzogSURhdGVQaWNrZXJDb25maWc7XG4gIEBJbnB1dCgpIG1vZGU6IENhbGVuZGFyTW9kZSA9ICdkYXknO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc3BsYXlEYXRlOiBTaW5nbGVDYWxlbmRhclZhbHVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCkgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KCkgbWluRGF0ZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgQElucHV0KCkgbWF4RGF0ZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgQElucHV0KCkgbWluVGltZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgQElucHV0KCkgbWF4VGltZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcblxuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyVmFsdWU+KCk7XG4gIEBPdXRwdXQoKSBvbkdvVG9DdXJyZW50OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkxlZnROYXY6IEV2ZW50RW1pdHRlcjxJTmF2RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25SaWdodE5hdjogRXZlbnRFbWl0dGVyPElOYXZFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblNlbGVjdDogRXZlbnRFbWl0dGVyPElTZWxlY3Rpb25FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY2FsZW5kYXJDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RheUNhbGVuZGFyJykgZGF5Q2FsZW5kYXJSZWY6IERheUNhbGVuZGFyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdtb250aENhbGVuZGFyJykgbW9udGhDYWxlbmRhclJlZjogTW9udGhDYWxlbmRhckNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZGF5dGltZUNhbGVuZGFyJykgZGF5VGltZUNhbGVuZGFyUmVmOiBEYXlUaW1lQ2FsZW5kYXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3RpbWVTZWxlY3QnKSB0aW1lU2VsZWN0UmVmOiBUaW1lU2VsZWN0Q29tcG9uZW50O1xuXG4gIGNvbXBvbmVudENvbmZpZzogSURhdGVQaWNrZXJDb25maWdJbnRlcm5hbDtcbiAgZGF5Q2FsZW5kYXJDb25maWc6IElEYXlDYWxlbmRhckNvbmZpZztcbiAgZGF5VGltZUNhbGVuZGFyQ29uZmlnOiBJRGF5VGltZUNhbGVuZGFyQ29uZmlnO1xuICB0aW1lU2VsZWN0Q29uZmlnOiBJVGltZVNlbGVjdENvbmZpZztcbiAgX2FyZUNhbGVuZGFyc1Nob3duOiBib29sZWFuID0gZmFsc2U7XG4gIGhpZGVTdGF0ZUhlbHBlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBfc2VsZWN0ZWQ6IE1vbWVudFtdID0gW107XG4gIGlucHV0VmFsdWU6IENhbGVuZGFyVmFsdWU7XG4gIGlzRm9jdXNlZFRyaWdnZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2N1cnJlbnREYXRlVmlldzogTW9tZW50O1xuICBpbnB1dEVsZW1lbnRWYWx1ZTogc3RyaW5nO1xuICBjYWxlbmRhcldyYXBwZXI6IEhUTUxFbGVtZW50O1xuICBhcHBlbmRUb0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBpbnB1dEVsZW1lbnRDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwb3B1cEVsZW06IEhUTUxFbGVtZW50O1xuICBoYW5kbGVJbm5lckVsZW1lbnRDbGlja1VubGlzdGVuZXJzOiBGdW5jdGlvbltdID0gW107XG4gIGdsb2JhbExpc3RlbmVyc1VubGlzdGVuZXJzOiBGdW5jdGlvbltdID0gW107XG4gIHZhbGlkYXRlRm46IERhdGVWYWxpZGF0b3I7XG4gIGFwaTogSURwRGF5UGlja2VyQXBpID0ge1xuICAgIG9wZW46IHRoaXMuc2hvd0NhbGVuZGFycy5iaW5kKHRoaXMpLFxuICAgIGNsb3NlOiB0aGlzLmhpZGVDYWxlbmRhci5iaW5kKHRoaXMpLFxuICAgIG1vdmVDYWxlbmRhclRvOiB0aGlzLm1vdmVDYWxlbmRhclRvLmJpbmQodGhpcylcbiAgfTtcbiAgc2VsZWN0RXZlbnQgPSBTZWxlY3RFdmVudDtcblxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IE1vbWVudFtdKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLmlucHV0RWxlbWVudFZhbHVlID0gKDxzdHJpbmdbXT50aGlzLnV0aWxzU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udmVydEZyb21Nb21lbnRBcnJheSh0aGlzLmNvbXBvbmVudENvbmZpZy5mb3JtYXQsIHNlbGVjdGVkLCBFQ2FsZW5kYXJWYWx1ZS5TdHJpbmdBcnIpKVxuICAgICAgLmpvaW4oJyB8ICcpO1xuICAgIGNvbnN0IHZhbCA9IHRoaXMucHJvY2Vzc09uQ2hhbmdlQ2FsbGJhY2soc2VsZWN0ZWQpO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2YWwsIGZhbHNlKTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodmFsKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBNb21lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgZ2V0IGFyZUNhbGVuZGFyc1Nob3duKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hcmVDYWxlbmRhcnNTaG93bjtcbiAgfVxuXG4gIGdldCBvcGVuT25Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRDb25maWcub3Blbk9uRm9jdXM7XG4gIH1cblxuICBnZXQgb3Blbk9uQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50Q29uZmlnLm9wZW5PbkNsaWNrO1xuICB9XG5cbiAgc2V0IGFyZUNhbGVuZGFyc1Nob3duKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnN0YXJ0R2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmRvbUhlbHBlci5hcHBlbmRFbGVtZW50VG9Qb3NpdGlvbih7XG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy5hcHBlbmRUb0VsZW1lbnQsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuY2FsZW5kYXJXcmFwcGVyLFxuICAgICAgICBhbmNob3I6IHRoaXMuaW5wdXRFbGVtZW50Q29udGFpbmVyLFxuICAgICAgICBkaW1FbGVtOiB0aGlzLnBvcHVwRWxlbSxcbiAgICAgICAgZHJvcHM6IHRoaXMuY29tcG9uZW50Q29uZmlnLmRyb3BzLFxuICAgICAgICBvcGVuczogdGhpcy5jb21wb25lbnRDb25maWcub3BlbnNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3BHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuZGF5UGlja2VyU2VydmljZS5waWNrZXJDbG9zZWQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hcmVDYWxlbmRhcnNTaG93biA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnREYXRlVmlldygpOiBNb21lbnQge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50RGF0ZVZpZXc7XG4gIH1cblxuICBzZXQgY3VycmVudERhdGVWaWV3KGRhdGU6IE1vbWVudCkge1xuICAgIHRoaXMuX2N1cnJlbnREYXRlVmlldyA9IGRhdGU7XG5cbiAgICBpZiAodGhpcy5kYXlDYWxlbmRhclJlZikge1xuICAgICAgdGhpcy5kYXlDYWxlbmRhclJlZi5tb3ZlQ2FsZW5kYXJUbyhkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb250aENhbGVuZGFyUmVmKSB7XG4gICAgICB0aGlzLm1vbnRoQ2FsZW5kYXJSZWYubW92ZUNhbGVuZGFyVG8oZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF5VGltZUNhbGVuZGFyUmVmKSB7XG4gICAgICB0aGlzLmRheVRpbWVDYWxlbmRhclJlZi5tb3ZlQ2FsZW5kYXJUbyhkYXRlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRheVBpY2tlclNlcnZpY2U6IERhdGVQaWNrZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGRvbUhlbHBlcjogRG9tSGVscGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1SZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHV0aWxzU2VydmljZTogVXRpbHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5PbkNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZFRyaWdnZXIgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaGlkZVN0YXRlSGVscGVyID0gdHJ1ZTtcbiAgICAgIGlmICghdGhpcy5hcmVDYWxlbmRhcnNTaG93bikge1xuICAgICAgICB0aGlzLnNob3dDYWxlbmRhcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkJvZHlDbGljaygpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRDb25maWcuaGlkZU9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICBpZiAoIXRoaXMuaGlkZVN0YXRlSGVscGVyICYmIHRoaXMuYXJlQ2FsZW5kYXJzU2hvd24pIHtcbiAgICAgICAgdGhpcy5oaWRlQ2FsZW5kYXIoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRlU3RhdGVIZWxwZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25TY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMuYXJlQ2FsZW5kYXJzU2hvd24pIHtcbiAgICAgIHRoaXMuZG9tSGVscGVyLnNldEVsZW1lbnRQb3NpdGlvbih7XG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy5hcHBlbmRUb0VsZW1lbnQsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuY2FsZW5kYXJXcmFwcGVyLFxuICAgICAgICBhbmNob3I6IHRoaXMuaW5wdXRFbGVtZW50Q29udGFpbmVyLFxuICAgICAgICBkaW1FbGVtOiB0aGlzLnBvcHVwRWxlbSxcbiAgICAgICAgZHJvcHM6IHRoaXMuY29tcG9uZW50Q29uZmlnLmRyb3BzLFxuICAgICAgICBvcGVuczogdGhpcy5jb21wb25lbnRDb25maWcub3BlbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IENhbGVuZGFyVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnV0aWxzU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udmVydFRvTW9tZW50QXJyYXkodmFsdWUsIHRoaXMuY29tcG9uZW50Q29uZmlnLmZvcm1hdCwgdGhpcy5jb21wb25lbnRDb25maWcuYWxsb3dNdWx0aVNlbGVjdCk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIG9uQ2hhbmdlQ2FsbGJhY2soXzogYW55LCBjaGFuZ2VkQnlJbnB1dDogYm9vbGVhbikge1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIG9uVG91Y2hlZENhbGxiYWNrKCkge1xuXG4gIH1cblxuICB2YWxpZGF0ZShmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUZuKGZvcm1Db250cm9sLnZhbHVlKTtcbiAgfVxuXG4gIHByb2Nlc3NPbkNoYW5nZUNhbGxiYWNrKHNlbGVjdGVkOiBNb21lbnRbXSB8IHN0cmluZyk6IENhbGVuZGFyVmFsdWUge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0ZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnV0aWxzU2VydmljZS5jb252ZXJ0RnJvbU1vbWVudEFycmF5KFxuICAgICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5mb3JtYXQsXG4gICAgICAgIHNlbGVjdGVkLFxuICAgICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5yZXR1cm5lZFZhbHVlVHlwZSB8fCB0aGlzLnV0aWxzU2VydmljZS5nZXRJbnB1dFR5cGUodGhpcy5pbnB1dFZhbHVlLCB0aGlzLmNvbXBvbmVudENvbmZpZy5hbGxvd011bHRpU2VsZWN0KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpbml0VmFsaWRhdG9ycygpOiB2b2lkIHtcbiAgICB0aGlzLnZhbGlkYXRlRm4gPSB0aGlzLnV0aWxzU2VydmljZS5jcmVhdGVWYWxpZGF0b3IoXG4gICAgICB7XG4gICAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSxcbiAgICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlLFxuICAgICAgICBtaW5UaW1lOiB0aGlzLm1pblRpbWUsXG4gICAgICAgIG1heFRpbWU6IHRoaXMubWF4VGltZVxuICAgICAgfSwgdGhpcy5jb21wb25lbnRDb25maWcuZm9ybWF0LCB0aGlzLm1vZGUpO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnByb2Nlc3NPbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWQpLCBmYWxzZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuaW5pdFZhbGlkYXRvcnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICBjb25zdCB7bWluRGF0ZSwgbWF4RGF0ZSwgbWluVGltZSwgbWF4VGltZX0gPSBjaGFuZ2VzO1xuXG4gICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgaWYgKG1pbkRhdGUgfHwgbWF4RGF0ZSB8fCBtaW5UaW1lIHx8IG1heFRpbWUpIHtcbiAgICAgICAgdGhpcy5pbml0VmFsaWRhdG9ycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEVsZW1lbnRQb3NpdGlvbkluRG9tKCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHNldEVsZW1lbnRQb3NpdGlvbkluRG9tKCk6IHZvaWQge1xuICAgIHRoaXMuY2FsZW5kYXJXcmFwcGVyID0gPEhUTUxFbGVtZW50PiB0aGlzLmNhbGVuZGFyQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5zZXRJbnB1dEVsZW1lbnRDb250YWluZXIoKTtcbiAgICB0aGlzLnBvcHVwRWxlbSA9IHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcC1wb3B1cCcpO1xuICAgIHRoaXMuaGFuZGxlSW5uZXJFbGVtZW50Q2xpY2sodGhpcy5wb3B1cEVsZW0pO1xuXG4gICAgY29uc3Qge2FwcGVuZFRvfSA9IHRoaXMuY29tcG9uZW50Q29uZmlnO1xuICAgIGlmIChhcHBlbmRUbykge1xuICAgICAgaWYgKHR5cGVvZiBhcHBlbmRUbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRUb0VsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcig8c3RyaW5nPmFwcGVuZFRvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXBwZW5kVG9FbGVtZW50ID0gPEhUTUxFbGVtZW50PmFwcGVuZFRvO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFwcGVuZFRvRWxlbWVudCA9IHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMuYXBwZW5kVG9FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2FsZW5kYXJXcmFwcGVyKTtcbiAgfVxuXG4gIHNldElucHV0RWxlbWVudENvbnRhaW5lcigpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudENvbnRhaW5lciA9IHRoaXMudXRpbHNTZXJ2aWNlLmdldE5hdGl2ZUVsZW1lbnQodGhpcy5jb21wb25lbnRDb25maWcuaW5wdXRFbGVtZW50Q29udGFpbmVyKVxuICAgICAgfHwgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRwLWlucHV0LWNvbnRhaW5lcicpXG4gICAgICB8fCBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaGFuZGxlSW5uZXJFbGVtZW50Q2xpY2soZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmhhbmRsZUlubmVyRWxlbWVudENsaWNrVW5saXN0ZW5lcnMucHVzaChcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQsICdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlU3RhdGVIZWxwZXIgPSB0cnVlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudENvbmZpZyA9IHRoaXMuZGF5UGlja2VyU2VydmljZS5nZXRDb25maWcodGhpcy5jb25maWcsIHRoaXMubW9kZSk7XG4gICAgdGhpcy5jdXJyZW50RGF0ZVZpZXcgPSB0aGlzLmRpc3BsYXlEYXRlXG4gICAgICA/IHRoaXMudXRpbHNTZXJ2aWNlLmNvbnZlcnRUb01vbWVudCh0aGlzLmRpc3BsYXlEYXRlLCB0aGlzLmNvbXBvbmVudENvbmZpZy5mb3JtYXQpLmNsb25lKClcbiAgICAgIDogdGhpcy51dGlsc1NlcnZpY2VcbiAgICAgICAgICAgIC5nZXREZWZhdWx0RGlzcGxheURhdGUoXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVWaWV3LFxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLFxuICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5hbGxvd011bHRpU2VsZWN0LFxuICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5taW5cbiAgICAgICAgICAgICk7XG4gICAgdGhpcy5kYXlDYWxlbmRhckNvbmZpZyA9IHRoaXMuZGF5UGlja2VyU2VydmljZS5nZXREYXlDb25maWdTZXJ2aWNlKHRoaXMuY29tcG9uZW50Q29uZmlnKTtcbiAgICB0aGlzLmRheVRpbWVDYWxlbmRhckNvbmZpZyA9IHRoaXMuZGF5UGlja2VyU2VydmljZS5nZXREYXlUaW1lQ29uZmlnU2VydmljZSh0aGlzLmNvbXBvbmVudENvbmZpZyk7XG4gICAgdGhpcy50aW1lU2VsZWN0Q29uZmlnID0gdGhpcy5kYXlQaWNrZXJTZXJ2aWNlLmdldFRpbWVDb25maWdTZXJ2aWNlKHRoaXMuY29tcG9uZW50Q29uZmlnKTtcbiAgfVxuXG4gIGlucHV0Rm9jdXNlZCgpIHtcbiAgICBpZiAoIXRoaXMub3Blbk9uRm9jdXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzRm9jdXNlZFRyaWdnZXIgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmFyZUNhbGVuZGFyc1Nob3duKSB7XG4gICAgICAgIHRoaXMuc2hvd0NhbGVuZGFycygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGVTdGF0ZUhlbHBlciA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmlzRm9jdXNlZFRyaWdnZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5jb21wb25lbnRDb25maWcub25PcGVuRGVsYXkpO1xuICB9XG5cbiAgaW5wdXRCbHVycmVkKCkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHNob3dDYWxlbmRhcnMoKSB7XG4gICAgdGhpcy5oaWRlU3RhdGVIZWxwZXIgPSB0cnVlO1xuICAgIHRoaXMuYXJlQ2FsZW5kYXJzU2hvd24gPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMudGltZVNlbGVjdFJlZikge1xuICAgICAgdGhpcy50aW1lU2VsZWN0UmVmLmFwaS50cmlnZ2VyQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcGVuLmVtaXQoKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgaGlkZUNhbGVuZGFyKCkge1xuICAgIHRoaXMuYXJlQ2FsZW5kYXJzU2hvd24gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmRheUNhbGVuZGFyUmVmKSB7XG4gICAgICB0aGlzLmRheUNhbGVuZGFyUmVmLmFwaS50b2dnbGVDYWxlbmRhck1vZGUoRUNhbGVuZGFyTW9kZS5EYXkpO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvblZpZXdEYXRlQ2hhbmdlKHZhbHVlOiBDYWxlbmRhclZhbHVlKSB7XG4gICAgY29uc3Qgc3RyVmFsID0gdmFsdWUgPyB0aGlzLnV0aWxzU2VydmljZS5jb252ZXJ0VG9TdHJpbmcodmFsdWUsIHRoaXMuY29tcG9uZW50Q29uZmlnLmZvcm1hdCkgOiAnJztcbiAgICBpZiAodGhpcy5kYXlQaWNrZXJTZXJ2aWNlLmlzVmFsaWRJbnB1dERhdGVWYWx1ZShzdHJWYWwsIHRoaXMuY29tcG9uZW50Q29uZmlnKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZGF5UGlja2VyU2VydmljZS5jb252ZXJ0SW5wdXRWYWx1ZVRvTW9tZW50QXJyYXkoc3RyVmFsLCB0aGlzLmNvbXBvbmVudENvbmZpZyk7XG4gICAgICB0aGlzLmN1cnJlbnREYXRlVmlldyA9IHRoaXMuc2VsZWN0ZWQubGVuZ3RoXG4gICAgICAgID8gdGhpcy51dGlsc1NlcnZpY2UuZ2V0RGVmYXVsdERpc3BsYXlEYXRlKFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5hbGxvd011bHRpU2VsZWN0LFxuICAgICAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLm1pblxuICAgICAgICApXG4gICAgICAgIDogdGhpcy5jdXJyZW50RGF0ZVZpZXc7XG5cbiAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh7XG4gICAgICAgIGRhdGU6IHN0clZhbCxcbiAgICAgICAgdHlwZTogU2VsZWN0RXZlbnQuSU5QVVQsXG4gICAgICAgIGdyYW51bGFyaXR5OiBudWxsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMudXRpbHNTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VmFsaWRNb21lbnRBcnJheShzdHJWYWwsIHRoaXMuY29tcG9uZW50Q29uZmlnLmZvcm1hdCk7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5wcm9jZXNzT25DaGFuZ2VDYWxsYmFjayhzdHJWYWwpLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBkYXRlU2VsZWN0ZWQoZGF0ZTogSURhdGUsIGdyYW51bGFyaXR5OiB1bml0T2ZUaW1lLkJhc2UsIHR5cGU6IFNlbGVjdEV2ZW50LCBpZ25vcmVDbG9zZT86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy51dGlsc1NlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGVTZWxlY3RlZCh0aGlzLmNvbXBvbmVudENvbmZpZy5hbGxvd011bHRpU2VsZWN0LCB0aGlzLnNlbGVjdGVkLCBkYXRlLCBncmFudWxhcml0eSk7XG4gICAgaWYgKCFpZ25vcmVDbG9zZSkge1xuICAgICAgdGhpcy5vbkRhdGVDbGljaygpO1xuICAgIH1cblxuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7XG4gICAgICBkYXRlOiBkYXRlLmRhdGUsXG4gICAgICBncmFudWxhcml0eSxcbiAgICAgIHR5cGVcbiAgICB9KTtcbiAgfVxuXG4gIG9uRGF0ZUNsaWNrKCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudENvbmZpZy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuaGlkZUNhbGVuZGFyLmJpbmQodGhpcyksIHRoaXMuY29tcG9uZW50Q29uZmlnLmNsb3NlT25TZWxlY3REZWxheSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSAoOSk6XG4gICAgICBjYXNlICgyNyk6XG4gICAgICAgIHRoaXMuaGlkZUNhbGVuZGFyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVDYWxlbmRhclRvKGRhdGU6IFNpbmdsZUNhbGVuZGFyVmFsdWUpIHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gdGhpcy51dGlsc1NlcnZpY2UuY29udmVydFRvTW9tZW50KGRhdGUsIHRoaXMuY29tcG9uZW50Q29uZmlnLmZvcm1hdCk7XG4gICAgdGhpcy5jdXJyZW50RGF0ZVZpZXcgPSBtb21lbnREYXRlO1xuICB9XG5cbiAgb25MZWZ0TmF2Q2xpY2soY2hhbmdlOiBJTmF2RXZlbnQpIHtcbiAgICB0aGlzLm9uTGVmdE5hdi5lbWl0KGNoYW5nZSk7XG4gIH1cblxuICBvblJpZ2h0TmF2Q2xpY2soY2hhbmdlOiBJTmF2RXZlbnQpIHtcbiAgICB0aGlzLm9uUmlnaHROYXYuZW1pdChjaGFuZ2UpO1xuICB9XG5cbiAgc3RhcnRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5nbG9iYWxMaXN0ZW5lcnNVbmxpc3RlbmVycy5wdXNoKFxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZG9jdW1lbnQsICdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5vbktleVByZXNzKGUpO1xuICAgICAgfSksXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbihkb2N1bWVudCwgJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5vblNjcm9sbCgpO1xuICAgICAgfSksXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbihkb2N1bWVudCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLm9uQm9keUNsaWNrKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzdG9wR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZ2xvYmFsTGlzdGVuZXJzVW5saXN0ZW5lcnMuZm9yRWFjaCgodWwpID0+IHVsKCkpO1xuICAgIHRoaXMuZ2xvYmFsTGlzdGVuZXJzVW5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlSW5uZXJFbGVtZW50Q2xpY2tVbmxpc3RlbmVycy5mb3JFYWNoKHVsID0+IHVsKCkpO1xuXG4gICAgaWYgKHRoaXMuYXBwZW5kVG9FbGVtZW50KSB7XG4gICAgICB0aGlzLmFwcGVuZFRvRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmNhbGVuZGFyV3JhcHBlcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3V0aWxzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtJRGF0ZVBpY2tlckRpcmVjdGl2ZUNvbmZpZ30gZnJvbSAnLi9kYXRlLXBpY2tlci1kaXJlY3RpdmUtY29uZmlnLm1vZGVsJztcbmltcG9ydCB7RWxlbWVudFJlZiwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyRGlyZWN0aXZlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1dGlsc1NlcnZpY2U6IFV0aWxzU2VydmljZSkge1xuICB9XG5cbiAgY29udmVydFRvSFRNTEVsZW1lbnQoYXR0YWNoVG86IEVsZW1lbnRSZWYgfCBzdHJpbmcsIGJhc2VFbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAodHlwZW9mIGF0dGFjaFRvID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMudXRpbHNTZXJ2aWNlLmNsb3Nlc3RQYXJlbnQoYmFzZUVsZW1lbnQsIGF0dGFjaFRvKTtcbiAgICB9IGVsc2UgaWYgKGF0dGFjaFRvKSB7XG4gICAgICByZXR1cm4gYXR0YWNoVG8ubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0Q29uZmlnKGNvbmZpZzogSURhdGVQaWNrZXJEaXJlY3RpdmVDb25maWcgPSB7fSxcbiAgICAgICAgICAgIGJhc2VFbGVtZW50PzogRWxlbWVudFJlZixcbiAgICAgICAgICAgIGF0dGFjaFRvPzogRWxlbWVudFJlZiB8IHN0cmluZyk6IElEYXRlUGlja2VyRGlyZWN0aXZlQ29uZmlnIHtcbiAgICBjb25zdCBfY29uZmlnOiBJRGF0ZVBpY2tlckRpcmVjdGl2ZUNvbmZpZyA9IHsuLi5jb25maWd9O1xuICAgIF9jb25maWcuaGlkZUlucHV0Q29udGFpbmVyID0gdHJ1ZTtcblxuICAgIGxldCBuYXRpdmU7XG5cbiAgICBpZiAoY29uZmlnLmlucHV0RWxlbWVudENvbnRhaW5lcikge1xuICAgICAgbmF0aXZlID0gdGhpcy51dGlsc1NlcnZpY2UuZ2V0TmF0aXZlRWxlbWVudChjb25maWcuaW5wdXRFbGVtZW50Q29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF0aXZlID0gYmFzZUVsZW1lbnQgPyBiYXNlRWxlbWVudC5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobmF0aXZlKSB7XG4gICAgICBfY29uZmlnLmlucHV0RWxlbWVudENvbnRhaW5lciA9IGF0dGFjaFRvXG4gICAgICAgID8gdGhpcy5jb252ZXJ0VG9IVE1MRWxlbWVudChhdHRhY2hUbywgbmF0aXZlKVxuICAgICAgICA6IG5hdGl2ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvbmZpZztcbiAgfVxufVxuIiwiaW1wb3J0IHtDYWxlbmRhck1vZGV9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9jYWxlbmRhci1tb2RlJztcbmltcG9ydCB7SURhdGVQaWNrZXJEaXJlY3RpdmVDb25maWd9IGZyb20gJy4vZGF0ZS1waWNrZXItZGlyZWN0aXZlLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQge0RhdGVQaWNrZXJEaXJlY3RpdmVTZXJ2aWNlfSBmcm9tICcuL2RhdGUtcGlja2VyLWRpcmVjdGl2ZS5zZXJ2aWNlJztcbmltcG9ydCB7SURwRGF5UGlja2VyQXBpfSBmcm9tICcuL2RhdGUtcGlja2VyLmFwaSc7XG5pbXBvcnQge0RhdGVQaWNrZXJDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NhbGVuZGFyVmFsdWV9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9jYWxlbmRhci12YWx1ZSc7XG5pbXBvcnQge1NpbmdsZUNhbGVuZGFyVmFsdWV9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9zaW5nbGUtY2FsZW5kYXItdmFsdWUnO1xuaW1wb3J0IHtJTmF2RXZlbnR9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvbmF2aWdhdGlvbi1ldmVudC5tb2RlbCc7XG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3V0aWxzL3V0aWxzLnNlcnZpY2UnXG5pbXBvcnQge0lTZWxlY3Rpb25FdmVudH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3NlbGVjdGlvbi1ldmV0Lm1vZGVsJztcblxuQERpcmVjdGl2ZSh7XG4gIGV4cG9ydEFzOiAnZHBEYXlQaWNrZXInLFxuICBwcm92aWRlcnM6IFtEYXRlUGlja2VyRGlyZWN0aXZlU2VydmljZV0sXG4gIHNlbGVjdG9yOiAnW2RwRGF5UGlja2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbmZpZzogSURhdGVQaWNrZXJEaXJlY3RpdmVDb25maWc7XG4gIHByaXZhdGUgX2F0dGFjaFRvOiBFbGVtZW50UmVmIHwgc3RyaW5nO1xuICBwcml2YXRlIF90aGVtZTogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RlOiBDYWxlbmRhck1vZGUgPSAnZGF5JztcbiAgcHJpdmF0ZSBfbWluRGF0ZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgcHJpdmF0ZSBfbWF4RGF0ZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgcHJpdmF0ZSBfbWluVGltZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgcHJpdmF0ZSBfbWF4VGltZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZTtcbiAgcHJpdmF0ZSBfZGlzcGxheURhdGU6IFNpbmdsZUNhbGVuZGFyVmFsdWU7XG5cbiAgZ2V0IGNvbmZpZygpOiBJRGF0ZVBpY2tlckRpcmVjdGl2ZUNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIEBJbnB1dCgnZHBEYXlQaWNrZXInKSBzZXQgY29uZmlnKGNvbmZpZzogSURhdGVQaWNrZXJEaXJlY3RpdmVDb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLnNlcnZpY2UuZ2V0Q29uZmlnKGNvbmZpZywgdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQsIHRoaXMuYXR0YWNoVG8pO1xuICAgIHRoaXMudXBkYXRlRGF0ZXBpY2tlckNvbmZpZygpO1xuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgYXR0YWNoVG8oKTogRWxlbWVudFJlZiB8IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFjaFRvO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGF0dGFjaFRvKGF0dGFjaFRvOiBFbGVtZW50UmVmIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fYXR0YWNoVG8gPSBhdHRhY2hUbztcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLnNlcnZpY2UuZ2V0Q29uZmlnKHRoaXMuY29uZmlnLCB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudCwgdGhpcy5hdHRhY2hUbyk7XG4gICAgdGhpcy51cGRhdGVEYXRlcGlja2VyQ29uZmlnKCk7XG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aGVtZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCB0aGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICBpZiAodGhpcy5kYXRlUGlja2VyKSB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXIudGhlbWUgPSB0aGVtZTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IG1vZGUoKTogQ2FsZW5kYXJNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBtb2RlKG1vZGU6IENhbGVuZGFyTW9kZSkge1xuICAgIHRoaXMuX21vZGUgPSBtb2RlO1xuICAgIGlmICh0aGlzLmRhdGVQaWNrZXIpIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5tb2RlID0gbW9kZTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IG1pbkRhdGUobWluRGF0ZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZSkge1xuICAgIHRoaXMuX21pbkRhdGUgPSBtaW5EYXRlO1xuICAgIGlmICh0aGlzLmRhdGVQaWNrZXIpIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5taW5EYXRlID0gbWluRGF0ZTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgbWluRGF0ZSgpOiBTaW5nbGVDYWxlbmRhclZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWluRGF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBtYXhEYXRlKG1heERhdGU6IFNpbmdsZUNhbGVuZGFyVmFsdWUpIHtcbiAgICB0aGlzLl9tYXhEYXRlID0gbWF4RGF0ZTtcbiAgICBpZiAodGhpcy5kYXRlUGlja2VyKSB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXIubWF4RGF0ZSA9IG1heERhdGU7XG4gICAgICB0aGlzLmRhdGVQaWNrZXIubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IG1heERhdGUoKTogU2luZ2xlQ2FsZW5kYXJWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21heERhdGU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgbWluVGltZShtaW5UaW1lOiBTaW5nbGVDYWxlbmRhclZhbHVlKSB7XG4gICAgdGhpcy5fbWluVGltZSA9IG1pblRpbWU7XG4gICAgaWYgKHRoaXMuZGF0ZVBpY2tlcikge1xuICAgICAgdGhpcy5kYXRlUGlja2VyLm1pblRpbWUgPSBtaW5UaW1lO1xuICAgICAgdGhpcy5kYXRlUGlja2VyLm5nT25Jbml0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBtaW5UaW1lKCk6IFNpbmdsZUNhbGVuZGFyVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9taW5UaW1lO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IG1heFRpbWUobWF4VGltZTogU2luZ2xlQ2FsZW5kYXJWYWx1ZSkge1xuICAgIHRoaXMuX21heFRpbWUgPSBtYXhUaW1lO1xuICAgIGlmICh0aGlzLmRhdGVQaWNrZXIpIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5tYXhUaW1lID0gbWF4VGltZTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgbWF4VGltZSgpOiBTaW5nbGVDYWxlbmRhclZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4VGltZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5RGF0ZSgpOiBTaW5nbGVDYWxlbmRhclZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheURhdGU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgZGlzcGxheURhdGUoZGlzcGxheURhdGU6IFNpbmdsZUNhbGVuZGFyVmFsdWUpIHtcbiAgICB0aGlzLl9kaXNwbGF5RGF0ZSA9IGRpc3BsYXlEYXRlO1xuICAgIHRoaXMudXBkYXRlRGF0ZXBpY2tlckNvbmZpZygpO1xuXG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJWYWx1ZT4oKTtcbiAgQE91dHB1dCgpIG9uR29Ub0N1cnJlbnQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTGVmdE5hdjogRXZlbnRFbWl0dGVyPElOYXZFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblJpZ2h0TmF2OiBFdmVudEVtaXR0ZXI8SU5hdkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8SVNlbGVjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgcHVibGljIGFwaTogSURwRGF5UGlja2VyQXBpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwdWJsaWMgZWxlbVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHVibGljIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwdWJsaWMgc2VydmljZTogRGF0ZVBpY2tlckRpcmVjdGl2ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmb3JtQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgICAgICAgICBwdWJsaWMgdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVBpY2tlciA9IHRoaXMuY3JlYXRlRGF0ZVBpY2tlcigpO1xuICAgIHRoaXMuYXBpID0gdGhpcy5kYXRlUGlja2VyLmFwaTtcbiAgICB0aGlzLnVwZGF0ZURhdGVwaWNrZXJDb25maWcoKTtcbiAgICB0aGlzLmF0dGFjaE1vZGVsVG9EYXRlUGlja2VyKCk7XG4gICAgdGhpcy5kYXRlUGlja2VyLnRoZW1lID0gdGhpcy50aGVtZTtcbiAgfVxuXG4gIGNyZWF0ZURhdGVQaWNrZXIoKTogRGF0ZVBpY2tlckNvbXBvbmVudCB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KERhdGVQaWNrZXJDb21wb25lbnQpO1xuICAgIHJldHVybiB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpLmluc3RhbmNlO1xuICB9XG5cbiAgYXR0YWNoTW9kZWxUb0RhdGVQaWNrZXIoKSB7XG4gICAgaWYgKCF0aGlzLmZvcm1Db250cm9sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYXRlUGlja2VyLm9uVmlld0RhdGVDaGFuZ2UodGhpcy5mb3JtQ29udHJvbC52YWx1ZSk7XG5cbiAgICB0aGlzLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMuZGF0ZVBpY2tlci5pbnB1dEVsZW1lbnRWYWx1ZSkge1xuICAgICAgICBjb25zdCBzdHJWYWwgPSB0aGlzLnV0aWxzU2VydmljZS5jb252ZXJ0VG9TdHJpbmcodmFsdWUsIHRoaXMuZGF0ZVBpY2tlci5jb21wb25lbnRDb25maWcuZm9ybWF0KTtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLm9uVmlld0RhdGVDaGFuZ2Uoc3RyVmFsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBzZXR1cCA9IHRydWU7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIucmVnaXN0ZXJPbkNoYW5nZSgodmFsdWUsIGNoYW5nZWRCeUlucHV0KSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgaXNNdWx0aXNlbGVjdEVtcHR5ID0gc2V0dXAgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aDtcblxuICAgICAgICBpZiAoIWlzTXVsdGlzZWxlY3RFbXB0eSAmJiAhY2hhbmdlZEJ5SW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlUGlja2VyLmlucHV0RWxlbWVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmRhdGVQaWNrZXIudmFsaWRhdGVGbih2YWx1ZSk7XG5cbiAgICAgIGlmICghc2V0dXApIHtcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLm1hcmtBc0RpcnR5KHtcbiAgICAgICAgICBvbmx5U2VsZjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldHVwID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgaWYgKGVycm9ycy5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykpIHtcbiAgICAgICAgICBjb25zdCB7Z2l2ZW59ID0gZXJyb3JzWydmb3JtYXQnXTtcbiAgICAgICAgICB0aGlzLmRhdGVQaWNrZXIuaW5wdXRFbGVtZW50VmFsdWUgPSBnaXZlbjtcbiAgICAgICAgICBpZiAoIWNoYW5nZWRCeUlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wuc2V0VmFsdWUoZ2l2ZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC5zZXRFcnJvcnMoZXJyb3JzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIub25DbGljaygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlci5pbnB1dEZvY3VzZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGF0ZXBpY2tlckNvbmZpZygpIHtcbiAgICBpZiAodGhpcy5kYXRlUGlja2VyKSB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXIubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgdGhpcy5kYXRlUGlja2VyLm1pblRpbWUgPSB0aGlzLm1pblRpbWU7XG4gICAgICB0aGlzLmRhdGVQaWNrZXIubWF4VGltZSA9IHRoaXMubWF4VGltZTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5tb2RlID0gdGhpcy5tb2RlIHx8ICdkYXknO1xuICAgICAgdGhpcy5kYXRlUGlja2VyLmRpc3BsYXlEYXRlID0gdGhpcy5kaXNwbGF5RGF0ZTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5vcGVuID0gdGhpcy5vcGVuO1xuICAgICAgdGhpcy5kYXRlUGlja2VyLmNsb3NlID0gdGhpcy5jbG9zZTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2U7XG4gICAgICB0aGlzLmRhdGVQaWNrZXIub25Hb1RvQ3VycmVudCA9IHRoaXMub25Hb1RvQ3VycmVudDtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5vbkxlZnROYXYgPSB0aGlzLm9uTGVmdE5hdjtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlci5vblJpZ2h0TmF2ID0gdGhpcy5vblJpZ2h0TmF2O1xuICAgICAgdGhpcy5kYXRlUGlja2VyLm9uU2VsZWN0ID0gdGhpcy5vblNlbGVjdDtcblxuICAgICAgdGhpcy5kYXRlUGlja2VyLmluaXQoKTtcblxuICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlci5jb21wb25lbnRDb25maWcuZGlzYWJsZUtleXByZXNzKSB7XG4gICAgICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuZGF0ZVBpY2tlcikge1xuICAgICAgdGhpcy5kYXRlUGlja2VyLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RwLWNhbGVuZGFyLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci1uYXYuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJOYXZDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBpc0xhYmVsQ2xpY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dMZWZ0TmF2OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd0xlZnRTZWNvbmRhcnlOYXY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1JpZ2h0TmF2OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1JpZ2h0U2Vjb25kYXJ5TmF2OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxlZnROYXZEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsZWZ0U2Vjb25kYXJ5TmF2RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcmlnaHROYXZEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByaWdodFNlY29uZGFyeU5hdkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dHb1RvQ3VycmVudDogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoKSB0aGVtZTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvbkxlZnROYXY6IEV2ZW50RW1pdHRlcjxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTGVmdFNlY29uZGFyeU5hdjogRXZlbnRFbWl0dGVyPG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25SaWdodE5hdjogRXZlbnRFbWl0dGVyPG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25SaWdodFNlY29uZGFyeU5hdjogRXZlbnRFbWl0dGVyPG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25MYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8bnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkdvVG9DdXJyZW50OiBFdmVudEVtaXR0ZXI8bnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbGVmdE5hdkNsaWNrZWQoKSB7XG4gICAgdGhpcy5vbkxlZnROYXYuZW1pdCgpO1xuICB9XG5cbiAgbGVmdFNlY29uZGFyeU5hdkNsaWNrZWQoKSB7XG4gICAgdGhpcy5vbkxlZnRTZWNvbmRhcnlOYXYuZW1pdCgpO1xuICB9XG5cbiAgcmlnaHROYXZDbGlja2VkKCkge1xuICAgIHRoaXMub25SaWdodE5hdi5lbWl0KCk7XG4gIH1cblxuICByaWdodFNlY29uZGFyeU5hdkNsaWNrZWQoKSB7XG4gICAgdGhpcy5vblJpZ2h0U2Vjb25kYXJ5TmF2LmVtaXQoKTtcbiAgfVxuXG4gIGxhYmVsQ2xpY2tlZCgpIHtcbiAgICB0aGlzLm9uTGFiZWxDbGljay5lbWl0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0RvbUhlbHBlcn0gZnJvbSAnLi9jb21tb24vc2VydmljZXMvZG9tLWFwcGVuZGVyL2RvbS1hcHBlbmRlci5zZXJ2aWNlJztcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tICcuL2NvbW1vbi9zZXJ2aWNlcy91dGlscy91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZVBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXRlUGlja2VyRGlyZWN0aXZlfSBmcm9tICcuL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0RheUNhbGVuZGFyQ29tcG9uZW50fSBmcm9tICcuL2RheS1jYWxlbmRhci9kYXktY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7TW9udGhDYWxlbmRhckNvbXBvbmVudH0gZnJvbSAnLi9tb250aC1jYWxlbmRhci9tb250aC1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHtUaW1lU2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3RpbWUtc2VsZWN0L3RpbWUtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NhbGVuZGFyTmF2Q29tcG9uZW50fSBmcm9tICcuL2NhbGVuZGFyLW5hdi9jYWxlbmRhci1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7RGF5VGltZUNhbGVuZGFyQ29tcG9uZW50fSBmcm9tICcuL2RheS10aW1lLWNhbGVuZGFyL2RheS10aW1lLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5leHBvcnQge0RhdGVQaWNrZXJDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmV4cG9ydCB7RGF0ZVBpY2tlckRpcmVjdGl2ZX0gZnJvbSAnLi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5kaXJlY3RpdmUnO1xuZXhwb3J0IHtEYXlDYWxlbmRhckNvbXBvbmVudH0gZnJvbSAnLi9kYXktY2FsZW5kYXIvZGF5LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5leHBvcnQge0RheVRpbWVDYWxlbmRhckNvbXBvbmVudH0gZnJvbSAnLi9kYXktdGltZS1jYWxlbmRhci9kYXktdGltZS1jYWxlbmRhci5jb21wb25lbnQnO1xuZXhwb3J0IHtUaW1lU2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3RpbWUtc2VsZWN0L3RpbWUtc2VsZWN0LmNvbXBvbmVudCc7XG5leHBvcnQge01vbnRoQ2FsZW5kYXJDb21wb25lbnR9IGZyb20gJy4vbW9udGgtY2FsZW5kYXIvbW9udGgtY2FsZW5kYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgRG9tSGVscGVyLFxuICAgIFV0aWxzU2VydmljZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIERhdGVQaWNrZXJEaXJlY3RpdmUsXG4gICAgRGF5Q2FsZW5kYXJDb21wb25lbnQsXG4gICAgTW9udGhDYWxlbmRhckNvbXBvbmVudCxcbiAgICBDYWxlbmRhck5hdkNvbXBvbmVudCxcbiAgICBUaW1lU2VsZWN0Q29tcG9uZW50LFxuICAgIERheVRpbWVDYWxlbmRhckNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIERhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZVBpY2tlckRpcmVjdGl2ZSxcbiAgICBNb250aENhbGVuZGFyQ29tcG9uZW50LFxuICAgIERheUNhbGVuZGFyQ29tcG9uZW50LFxuICAgIFRpbWVTZWxlY3RDb21wb25lbnQsXG4gICAgRGF5VGltZUNhbGVuZGFyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHBEYXRlUGlja2VyTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJtb21lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUNFLE1BQUc7SUFDSCxVQUFPO0lBQ1AsUUFBSztJQUNMLE9BQUk7Ozs7Ozs7Ozs7Ozs7SUNISixTQUFVO0lBQ1YsWUFBUztJQUNULFNBQU07SUFDTixZQUFTOzs7Ozs7Ozs7Ozs7O0lDSFQsT0FBUSxPQUFPO0lBQ2YsV0FBWSxXQUFXOzs7Ozs7O0FDRnpCO0lBR0E7S0E0RkM7Ozs7Ozs7OztJQXpGZ0IsMEJBQWdCOzs7Ozs7OztJQUEvQixVQUFnQyxPQUFvQixFQUFFLFNBQXNCLEVBQUUsTUFBbUIsRUFBRSxLQUFhOztZQUN4RyxVQUFVLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFOztZQUMzQyxhQUFhLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixFQUFFOztZQUNqRCxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRzs7WUFDOUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUc7UUFFOUMsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFF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

/***/ }),

/***/ "./src/app/booking-master-page/booking-master-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/booking-master-page/booking-master-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/booking']\">Бронирование переговорной</a></div>\n    <div class=\"l-breadcrumb\">Мастер бронирования</div>\n  </div>\n  <div class=\"title\" *ngIf=\"isFirstStep\">Мастер бронирования переговорных</div>\n  <div class=\"title\" *ngIf=\"!isFirstStep\">Подтверждение бронирования</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-booking-master\">\n        <ng-container *ngIf=\"isFirstStep\">\n          <app-booking-master-step-one \n            [pickedRoom]=\"pickedRoom\" \n            [isFirstStep]=\"isFirstStep\"\n            (changeStep)=\"currentStep($event)\"\n            (selectRoom)=\"selectedRoom($event)\">\n          </app-booking-master-step-one>\n        </ng-container>\n        <ng-container *ngIf=\"!isFirstStep\">\n          <app-booking-master-step-two \n            [pickedRoom]=\"pickedRoom\"\n            [isFirstStep]=\"isFirstStep\"\n            (changeStep)=\"currentStep($event)\">\n          </app-booking-master-step-two>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/booking-master-page/booking-master-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/booking-master-page/booking-master-page.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-booking-master {\n  max-width: 1210px;\n  padding: 10px 25px;\n  padding-right: 0;\n  box-sizing: border-box; }\n"

/***/ }),

/***/ "./src/app/booking-master-page/booking-master-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/booking-master-page/booking-master-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: BookingMasterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingMasterPageComponent", function() { return BookingMasterPageComponent; });
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


var BookingMasterPageComponent = /** @class */ (function () {
    function BookingMasterPageComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.pickedRoom = null;
        this.isFirstStep = true;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    BookingMasterPageComponent.prototype.currentStep = function (value) {
        this.isFirstStep = value;
    };
    BookingMasterPageComponent.prototype.selectedRoom = function (value) {
        this.pickedRoom = value;
    };
    BookingMasterPageComponent.prototype.ngOnInit = function () {
    };
    BookingMasterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-master-page',
            template: __webpack_require__(/*! ./booking-master-page.component.html */ "./src/app/booking-master-page/booking-master-page.component.html"),
            styles: [__webpack_require__(/*! ./booking-master-page.component.scss */ "./src/app/booking-master-page/booking-master-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]])
    ], BookingMasterPageComponent);
    return BookingMasterPageComponent;
}());



/***/ }),

/***/ "./src/app/booking-master-page/booking-master-step-one/booking-master-step-one.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/booking-master-page/booking-master-step-one/booking-master-step-one.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"booking-master-step-one\">\n  <div class=\"left-side\">\n    <div class=\"title\">Дата</div>\n    <div class=\"pick-date\">\n      <div class=\"month\">\n        Апрель\n      </div>\n      <div class=\"days\">\n        <div class=\"arrow-left\">\n\n        </div>\n        <div class=\"week\">\n          <div class=\"day expired\">\n            <div class=\"number\">1</div>\n            <div class=\"name\">Пн</div>\n          </div>\n          <div class=\"day today\">\n            <div class=\"number\">2</div>\n            <div class=\"name\">Вт</div>\n          </div>\n          <div class=\"day picked\">\n            <div class=\"number\">3</div>\n            <div class=\"name\">Ср</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"number\">4</div>\n            <div class=\"name\">Чт</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"number\">5</div>\n            <div class=\"name\">Пт</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"number\">6</div>\n            <div class=\"name\">Сб</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"number\">7</div>\n            <div class=\"name\">Вс</div>\n          </div>\n        </div>\n        <div class=\"arrow-right\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"title\">Время</div>\n    <div class=\"pick-time\">\n      <div class=\"progress\">\n        <div class=\"progress-group\">\n          <div class=\"reserve-period\" style=\"width:20%; left: 60%\">\n            <div class=\"counter\">\n              16:30 - 18:30\n              <div class=\"counter-arrow\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"title\">Кол-во участников</div>\n    <div class=\"pick-people\">\n      <div class=\"progress\">\n        <div class=\"progress-inner\" style=\"width: 30%\">\n          <div class=\"counter\">\n            8\n            <div class=\"counter-arrow\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"title\">Оборудование</div>\n    <div class=\"pick-equipment\">\n      <div class=\"equipment\">\n        <input type=\"checkbox\" class=\"checkbox\" id=\"projector\" />\n        <span class=\"checkbox-custom\"></span>\n        <label for=\"projector\" class=\"projector\"></label>\n      </div>\n      <div class=\"equipment\">\n        <input type=\"checkbox\" class=\"checkbox\" id=\"videostaff\" />\n        <span class=\"checkbox-custom\"></span>\n        <label for=\"videostaff\" class=\"videostaff\"></label>\n      </div>\n    </div>\n    <div class=\"button\">\n      <a [routerLink]=\"['/booking']\" class=\"btn btn-to-back\">\n        <i></i> Назад к расписанию\n      </a>\n    </div>\n  </div>\n  <div class=\"right-side\">\n    <div class=\"title\">Доступные переговорные комнаты</div>\n    <div class=\"pick-room\">\n      <div class=\"room-list\">\n        <div class=\"room-preview\" *ngFor=\"let room of freeRooms; let i=index\" (click)=\"pickRoom(room)\">\n          <div class=\"image\">\n            <div class=\"gradient\"></div>\n          </div>\n          <div class=\"info\">\n            <div class=\"room-title\" title=\"{{room.title}}\">\n              {{room.title}}\n            </div>\n            <div class=\"city\">\n              {{room.officeLookupTitle}}\n            </div>\n            <div class=\"sits\">{{room.places}} мест</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/booking-master-page/booking-master-step-one/booking-master-step-one.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/booking-master-page/booking-master-step-one/booking-master-step-one.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#s4-bodyContainer {\n  padding: 0; }\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n.booking-master-step-one {\n  width: 100%;\n  font-size: 0px; }\n.booking-master-step-one .left-side {\n    width: 45%;\n    padding-right: 20px; }\n.booking-master-step-one .right-side {\n    width: 55%; }\n.booking-master-step-one .left-side,\n  .booking-master-step-one .right-side {\n    display: inline-block;\n    font-size: 14px;\n    vertical-align: top;\n    box-sizing: border-box; }\n.booking-master-step-one .left-side .pick-date,\n    .booking-master-step-one .right-side .pick-date {\n      margin-top: 10px;\n      margin-bottom: 30px; }\n.booking-master-step-one .left-side .pick-date .month,\n      .booking-master-step-one .right-side .pick-date .month {\n        color: #dd1e25;\n        margin-bottom: 13px;\n        margin-left: 45px; }\n.booking-master-step-one .left-side .pick-date .arrow-left,\n      .booking-master-step-one .left-side .pick-date .arrow-right,\n      .booking-master-step-one .right-side .pick-date .arrow-left,\n      .booking-master-step-one .right-side .pick-date .arrow-right {\n        display: inline-block;\n        width: 15px;\n        height: 70px;\n        background-image: url(/assets/icons/icon-arrow-left-gray.svg);\n        background-repeat: no-repeat;\n        background-size: 13px 27px;\n        background-position: center;\n        vertical-align: top;\n        cursor: pointer; }\n.booking-master-step-one .left-side .pick-date .arrow-right,\n      .booking-master-step-one .right-side .pick-date .arrow-right {\n        -webkit-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n                transform: rotate(180deg); }\n.booking-master-step-one .left-side .pick-date .week,\n      .booking-master-step-one .right-side .pick-date .week {\n        display: inline-block;\n        margin: 0 24px;\n        vertical-align: top; }\n.booking-master-step-one .left-side .pick-date .week .day,\n        .booking-master-step-one .right-side .pick-date .week .day {\n          display: inline-block;\n          margin: 0 5px;\n          width: 50px;\n          height: 70px;\n          background-color: #F7F7F7;\n          border-radius: 3px;\n          color: #050505;\n          padding-top: 15px;\n          padding-bottom: 10px;\n          box-sizing: border-box;\n          text-align: center;\n          cursor: pointer; }\n.booking-master-step-one .left-side .pick-date .week .day .number,\n          .booking-master-step-one .right-side .pick-date .week .day .number {\n            font-size: 22px; }\n.booking-master-step-one .left-side .pick-date .week .day .name,\n          .booking-master-step-one .right-side .pick-date .week .day .name {\n            font-size: 14px; }\n.booking-master-step-one .left-side .pick-date .week .day.expired,\n          .booking-master-step-one .right-side .pick-date .week .day.expired {\n            opacity: 0.5;\n            cursor: default; }\n.booking-master-step-one .left-side .pick-date .week .day.today,\n          .booking-master-step-one .right-side .pick-date .week .day.today {\n            background-color: #CCCCCC;\n            position: relative; }\n.booking-master-step-one .left-side .pick-date .week .day.today:before,\n            .booking-master-step-one .right-side .pick-date .week .day.today:before {\n              content: \"Сегодня\";\n              position: absolute;\n              bottom: -22px;\n              left: 50%;\n              -webkit-transform: translateX(-50%);\n                  -ms-transform: translateX(-50%);\n                      transform: translateX(-50%);\n              font-size: 12px;\n              color: #898888; }\n.booking-master-step-one .left-side .pick-date .week .day.picked,\n          .booking-master-step-one .right-side .pick-date .week .day.picked {\n            background-color: #dd1e25;\n            color: #fff; }\n.booking-master-step-one .left-side .pick-time,\n    .booking-master-step-one .right-side .pick-time {\n      margin-top: 40px;\n      margin-bottom: 60px; }\n.booking-master-step-one .left-side .pick-time:before,\n      .booking-master-step-one .right-side .pick-time:before {\n        content: '';\n        display: inline-block;\n        margin-right: 10px;\n        width: 24px;\n        height: 24px;\n        background-image: url(/assets/icons/icon-clocks.svg);\n        background-size: cover;\n        background-repeat: no-repeat;\n        vertical-align: middle; }\n.booking-master-step-one .left-side .pick-time .progress,\n      .booking-master-step-one .right-side .pick-time .progress {\n        display: inline-block;\n        width: 85%;\n        background-color: #a2b2c8;\n        border-radius: 10px;\n        vertical-align: middle; }\n.booking-master-step-one .left-side .pick-time .progress .progress-group,\n        .booking-master-step-one .right-side .pick-time .progress .progress-group {\n          position: relative;\n          height: 8px; }\n.booking-master-step-one .left-side .pick-time .progress .progress-group .reserve-period,\n          .booking-master-step-one .right-side .pick-time .progress .progress-group .reserve-period {\n            position: absolute;\n            top: 0;\n            background-color: #dd1e25;\n            height: 8px; }\n.booking-master-step-one .left-side .pick-time .progress .progress-group .reserve-period:before, .booking-master-step-one .left-side .pick-time .progress .progress-group .reserve-period:after,\n            .booking-master-step-one .right-side .pick-time .progress .progress-group .reserve-period:before,\n            .booking-master-step-one .right-side .pick-time .progress .progress-group .reserve-period:after {\n              content: '';\n              position: absolute;\n              top: 50%;\n              -webkit-transform: translateY(-50%);\n                  -ms-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              display: block;\n              width: 8px;\n              height: 8px;\n              border-radius: 100%;\n              background-color: #fff;\n              border: 6px solid #dd1e25; }\n.booking-master-step-one .left-side .pick-time .progress .progress-group .reserve-period:before,\n            .booking-master-step-one .right-side .pick-time .progress .progress-group .reserve-period:before {\n              left: -7px; }\n.booking-master-step-one .left-side .pick-time .progress .progress-group .reserve-period:after,\n            .booking-master-step-one .right-side .pick-time .progress .progress-group .reserve-period:after {\n              right: -7px; }\n.booking-master-step-one .left-side .pick-time .progress .progress-group .reserve-period .counter,\n            .booking-master-step-one .right-side .pick-time .progress .progress-group .reserve-period .counter {\n              position: absolute;\n              left: 82%;\n              top: -40px;\n              width: 100px;\n              height: 25px;\n              background-color: #050505;\n              border-radius: 5px;\n              font-size: 14px;\n              color: #fff;\n              font-weight: bold;\n              line-height: 25px;\n              text-align: center; }\n.booking-master-step-one .left-side .pick-time .progress .progress-group .reserve-period .counter .counter-arrow,\n              .booking-master-step-one .right-side .pick-time .progress .progress-group .reserve-period .counter .counter-arrow {\n                position: absolute;\n                top: 25px;\n                left: 10%;\n                display: block;\n                width: 0.5rem;\n                height: 0.25rem; }\n.booking-master-step-one .left-side .pick-time .progress .progress-group .reserve-period .counter .counter-arrow:after,\n                .booking-master-step-one .right-side .pick-time .progress .progress-group .reserve-period .counter .counter-arrow:after {\n                  position: absolute;\n                  display: block;\n                  content: '';\n                  border-color: transparent;\n                  border-style: solid; }\n.booking-master-step-one .left-side .pick-time .progress .progress-group .reserve-period .counter .counter-arrow:after,\n                .booking-master-step-one .right-side .pick-time .progress .progress-group .reserve-period .counter .counter-arrow:after {\n                  top: 0px;\n                  border-top-color: #050505;\n                  border-width: 0.25rem 0.25rem 0 0.25rem; }\n.booking-master-step-one .left-side .pick-people,\n    .booking-master-step-one .right-side .pick-people {\n      margin-top: 60px;\n      margin-bottom: 40px; }\n.booking-master-step-one .left-side .pick-people:before, .booking-master-step-one .left-side .pick-people:after,\n      .booking-master-step-one .right-side .pick-people:before,\n      .booking-master-step-one .right-side .pick-people:after {\n        content: '';\n        display: inline-block;\n        width: 27px;\n        height: 27px;\n        background-size: contain;\n        background-position: center;\n        background-repeat: no-repeat;\n        vertical-align: middle; }\n.booking-master-step-one .left-side .pick-people:before,\n      .booking-master-step-one .right-side .pick-people:before {\n        background-image: url(/assets/icons/icon-human.svg);\n        margin-right: 10px; }\n.booking-master-step-one .left-side .pick-people:after,\n      .booking-master-step-one .right-side .pick-people:after {\n        background-image: url(/assets/icons/icon-more-humans.svg);\n        margin-left: 10px; }\n.booking-master-step-one .left-side .pick-people .progress,\n      .booking-master-step-one .right-side .pick-people .progress {\n        background-color: #a2b2c8;\n        border-radius: 10px;\n        display: inline-block;\n        width: 85%; }\n.booking-master-step-one .left-side .pick-people .progress .progress-inner,\n        .booking-master-step-one .right-side .pick-people .progress .progress-inner {\n          position: relative;\n          height: 8px;\n          background-color: #dd1e25;\n          border-radius: 10px; }\n.booking-master-step-one .left-side .pick-people .progress .progress-inner:after,\n          .booking-master-step-one .right-side .pick-people .progress .progress-inner:after {\n            content: '';\n            position: absolute;\n            right: -7px;\n            top: 50%;\n            -webkit-transform: translateY(-50%);\n                -ms-transform: translateY(-50%);\n                    transform: translateY(-50%);\n            display: block;\n            width: 8px;\n            height: 8px;\n            border-radius: 100%;\n            background-color: #fff;\n            border: 6px solid #dd1e25; }\n.booking-master-step-one .left-side .pick-people .progress .progress-inner .counter,\n          .booking-master-step-one .right-side .pick-people .progress .progress-inner .counter {\n            position: absolute;\n            right: -8px;\n            top: -40px;\n            padding: 0 7px;\n            box-sizing: border-box;\n            height: 25px;\n            background-color: #050505;\n            border-radius: 5px;\n            font-size: 14px;\n            color: #fff;\n            font-weight: bold;\n            line-height: 25px;\n            text-align: center; }\n.booking-master-step-one .left-side .pick-people .progress .progress-inner .counter .counter-arrow,\n            .booking-master-step-one .right-side .pick-people .progress .progress-inner .counter .counter-arrow {\n              position: absolute;\n              top: 25px;\n              left: 50%;\n              -webkit-transform: translateX(-50%);\n                  -ms-transform: translateX(-50%);\n                      transform: translateX(-50%);\n              display: block;\n              width: 0.5rem;\n              height: 0.25rem; }\n.booking-master-step-one .left-side .pick-people .progress .progress-inner .counter .counter-arrow:after,\n              .booking-master-step-one .right-side .pick-people .progress .progress-inner .counter .counter-arrow:after {\n                position: absolute;\n                display: block;\n                content: '';\n                border-color: transparent;\n                border-style: solid; }\n.booking-master-step-one .left-side .pick-people .progress .progress-inner .counter .counter-arrow:after,\n              .booking-master-step-one .right-side .pick-people .progress .progress-inner .counter .counter-arrow:after {\n                top: 0px;\n                border-top-color: #050505;\n                border-width: 0.25rem 0.25rem 0 0.25rem; }\n.booking-master-step-one .left-side .pick-equipment .equipment,\n    .booking-master-step-one .right-side .pick-equipment .equipment {\n      position: relative;\n      margin: 20px 0; }\n.booking-master-step-one .left-side .pick-equipment .equipment:last-child,\n      .booking-master-step-one .right-side .pick-equipment .equipment:last-child {\n        margin-bottom: 0; }\n.booking-master-step-one .left-side .pick-equipment .equipment .checkbox,\n      .booking-master-step-one .right-side .pick-equipment .equipment .checkbox {\n        position: absolute;\n        margin: 0;\n        z-index: 1;\n        width: 30px;\n        height: 30px;\n        box-sizing: border-box;\n        opacity: 0; }\n.booking-master-step-one .left-side .pick-equipment .equipment .checkbox-custom,\n      .booking-master-step-one .right-side .pick-equipment .equipment .checkbox-custom {\n        position: relative;\n        display: inline-block;\n        vertical-align: middle;\n        width: 30px;\n        height: 30px;\n        background-color: #fff;\n        border: 2px solid #cccccc;\n        box-sizing: border-box; }\n.booking-master-step-one .left-side .pick-equipment .equipment label,\n      .booking-master-step-one .right-side .pick-equipment .equipment label {\n        display: inline-block;\n        vertical-align: middle;\n        margin-left: 20px;\n        width: 25px;\n        height: 30px;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: contain; }\n.booking-master-step-one .left-side .pick-equipment .equipment label.projector,\n        .booking-master-step-one .right-side .pick-equipment .equipment label.projector {\n          background-image: url(/assets/icons/icon-mrr-master-projector.svg); }\n.booking-master-step-one .left-side .pick-equipment .equipment label.videostaff,\n        .booking-master-step-one .right-side .pick-equipment .equipment label.videostaff {\n          background-image: url(/assets/icons/icon-mrr-master-videostaff.svg); }\n.booking-master-step-one .left-side .pick-equipment .equipment .checkbox:checked + .checkbox-custom::before,\n      .booking-master-step-one .right-side .pick-equipment .equipment .checkbox:checked + .checkbox-custom::before {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 7px;\n        right: 5px;\n        bottom: 6px;\n        left: 5px;\n        background: url(/assets/icons/icon-checkbox-checked.svg);\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover; }\n.booking-master-step-one .left-side .pick-room .room-list,\n    .booking-master-step-one .right-side .pick-room .room-list {\n      margin: 0 -7.5px; }\n.booking-master-step-one .left-side .pick-room .room-list .room-preview,\n      .booking-master-step-one .right-side .pick-room .room-list .room-preview {\n        position: relative;\n        display: inline-block;\n        margin: 7.5px;\n        width: 150px;\n        height: 150px;\n        color: #fff;\n        cursor: pointer; }\n.booking-master-step-one .left-side .pick-room .room-list .room-preview:hover .image,\n        .booking-master-step-one .right-side .pick-room .room-list .room-preview:hover .image {\n          border-color: #dd1e25; }\n.booking-master-step-one .left-side .pick-room .room-list .room-preview.unavailable,\n        .booking-master-step-one .right-side .pick-room .room-list .room-preview.unavailable {\n          opacity: 0.5;\n          cursor: default; }\n.booking-master-step-one .left-side .pick-room .room-list .room-preview .image,\n        .booking-master-step-one .right-side .pick-room .room-list .room-preview .image {\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          background-repeat: no-repeat;\n          background-size: cover;\n          border: 4px solid #999999;\n          box-sizing: border-box; }\n.booking-master-step-one .left-side .pick-room .room-list .room-preview .image .gradient,\n          .booking-master-step-one .right-side .pick-room .room-list .room-preview .image .gradient {\n            position: absolute;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            background-color: #000;\n            opacity: 0.4; }\n.booking-master-step-one .left-side .pick-room .room-list .room-preview .info,\n        .booking-master-step-one .right-side .pick-room .room-list .room-preview .info {\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          padding: 15px;\n          box-sizing: border-box; }\n.booking-master-step-one .left-side .pick-room .room-list .room-preview .room-title,\n        .booking-master-step-one .right-side .pick-room .room-list .room-preview .room-title {\n          font-size: 24px;\n          margin-bottom: 10px;\n          height: 30px;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n.booking-master-step-one .left-side .pick-room .room-list .room-preview .city,\n        .booking-master-step-one .right-side .pick-room .room-list .room-preview .city {\n          margin-bottom: 6px; }\n.booking-master-step-one .title {\n    font-size: 22px;\n    color: #050505; }\n.booking-master-step-one .button {\n    margin: 30px 0; }\n"

/***/ }),

/***/ "./src/app/booking-master-page/booking-master-step-one/booking-master-step-one.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/booking-master-page/booking-master-step-one/booking-master-step-one.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BookingMasterStepOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingMasterStepOneComponent", function() { return BookingMasterStepOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingMasterStepOneComponent = /** @class */ (function () {
    function BookingMasterStepOneComponent() {
        this.changeStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectRoom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.freeRooms = [
            {
                title: '№301',
                officeLookupTitle: 'Москва',
                places: 8
            },
            {
                title: '№302',
                officeLookupTitle: 'Москва',
                places: 8
            },
            {
                title: '№303',
                officeLookupTitle: 'Москва',
                places: 14
            },
            {
                title: '№304',
                officeLookupTitle: 'Москва',
                places: 14
            },
            {
                title: '№305',
                officeLookupTitle: 'Москва',
                places: 20
            },
            {
                title: '№306',
                officeLookupTitle: 'Москва',
                places: 20
            }
        ];
    }
    BookingMasterStepOneComponent.prototype.pickRoom = function (room) {
        this.pickedRoom = room;
        this.isFirstStep = !this.isFirstStep;
        this.selectRoom.emit(this.pickedRoom);
        this.changeStep.emit(this.isFirstStep);
    };
    BookingMasterStepOneComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingMasterStepOneComponent.prototype, "pickedRoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BookingMasterStepOneComponent.prototype, "isFirstStep", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookingMasterStepOneComponent.prototype, "changeStep", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookingMasterStepOneComponent.prototype, "selectRoom", void 0);
    BookingMasterStepOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-master-step-one',
            template: __webpack_require__(/*! ./booking-master-step-one.component.html */ "./src/app/booking-master-page/booking-master-step-one/booking-master-step-one.component.html"),
            styles: [__webpack_require__(/*! ./booking-master-step-one.component.scss */ "./src/app/booking-master-page/booking-master-step-one/booking-master-step-one.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingMasterStepOneComponent);
    return BookingMasterStepOneComponent;
}());



/***/ }),

/***/ "./src/app/booking-master-page/booking-master-step-two/booking-master-step-two.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/booking-master-page/booking-master-step-two/booking-master-step-two.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"booking-master-step-two\">\n  <div class=\"left-side\">\n    <div class=\"title\">24 апреля, 12:00-14:00</div>\n    <div class=\"room-preview\">\n      <div class=\"image\">\n        <div class=\"gradient\"></div>\n      </div>\n      <div class=\"info\">\n        <div class=\"room-title\" title=\"pickedRoom.title\">\n          {{pickedRoom.title}}\n        </div>\n        <div class=\"city\">\n          {{pickedRoom.officeLookupTitle}}\n        </div>\n        <div class=\"sits\">{{pickedRoom.places}} мест</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"right-side\">\n    <div class=\"title important\">Тема встречи</div>\n    <input type=\"text\" placeholder=\"Введите текст\">\n    <div class=\"title important\">Внутренние участники</div>\n    <app-sp-user\n      [isMulti]=\"true\"\n      [theme]=\"'new-master'\"\n    ></app-sp-user>\n    <div class=\"title\">Внешние участники</div>\n    <input type=\"text\" placeholder=\"Перечислите участников встречи в свободной форме\">\n    <div class=\"title\">Описание встречи</div>\n    <textarea rows=\"3\" placeholder=\"Введите текст\"></textarea>\n    <div class=\"description\">\n      <div class=\"mark\">*</div>\n      <div class=\"text\">– Обязательные поля</div>\n    </div>\n    <div class=\"controls\">\n      <input type=\"button\" class=\"btn btn-default is-transparent red\" value=\"Отменить\" (click)=\"cancelConfirmation()\">\n      <input type=\"button\" class=\"btn btn-default red\" value=\"Забронировать\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/booking-master-page/booking-master-step-two/booking-master-step-two.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/booking-master-page/booking-master-step-two/booking-master-step-two.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.booking-master-step-two {\n  width: 100%;\n  font-size: 0px; }\n\n.booking-master-step-two .left-side {\n    width: 45%;\n    padding-right: 50px; }\n\n.booking-master-step-two .right-side {\n    width: 55%; }\n\n.booking-master-step-two .left-side,\n  .booking-master-step-two .right-side {\n    display: inline-block;\n    font-size: 14px;\n    vertical-align: top;\n    box-sizing: border-box; }\n\n.booking-master-step-two .left-side .room-preview,\n    .booking-master-step-two .right-side .room-preview {\n      position: relative;\n      display: inline-block;\n      width: 100%;\n      position: relative;\n      color: #fff; }\n\n.booking-master-step-two .left-side .room-preview:before,\n      .booking-master-step-two .right-side .room-preview:before {\n        display: block;\n        content: \" \";\n        width: 100%;\n        padding-bottom: 66.66666667%; }\n\n.booking-master-step-two .left-side .room-preview > .content,\n      .booking-master-step-two .right-side .room-preview > .content {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0; }\n\n.booking-master-step-two .left-side .room-preview .image,\n      .booking-master-step-two .right-side .room-preview .image {\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        background-repeat: no-repeat;\n        background-size: cover; }\n\n.booking-master-step-two .left-side .room-preview .image .gradient,\n        .booking-master-step-two .right-side .room-preview .image .gradient {\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          background-color: #000;\n          opacity: 0.4; }\n\n.booking-master-step-two .left-side .room-preview .info,\n      .booking-master-step-two .right-side .room-preview .info {\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        padding: 20px 30px;\n        box-sizing: border-box;\n        font-size: 22px; }\n\n.booking-master-step-two .left-side .room-preview .room-title,\n      .booking-master-step-two .right-side .room-preview .room-title {\n        font-size: 34px;\n        margin-bottom: 10px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n\n.booking-master-step-two .left-side .room-preview .city,\n      .booking-master-step-two .right-side .room-preview .city {\n        margin-bottom: 6px; }\n\n.booking-master-step-two .left-side input[type='text'],\n    .booking-master-step-two .right-side input[type='text'] {\n      width: 100%;\n      background-color: #ffffff;\n      font-size: 18px;\n      color: #cccccc;\n      padding: 15px 20px;\n      box-sizing: border-box;\n      margin-bottom: 30px;\n      border: 1px solid #cccccc; }\n\n.booking-master-step-two .left-side textarea,\n    .booking-master-step-two .right-side textarea {\n      font-size: 18px;\n      line-height: 20px;\n      width: 100%;\n      padding: 10px 20px;\n      box-sizing: border-box;\n      border: 1px solid #cccccc;\n      resize: vertical;\n      margin-bottom: 20px; }\n\n.booking-master-step-two .left-side .description,\n    .booking-master-step-two .right-side .description {\n      margin-bottom: 35px; }\n\n.booking-master-step-two .left-side .description .mark,\n      .booking-master-step-two .right-side .description .mark {\n        display: inline-block;\n        height: 50px;\n        font-size: 34px;\n        line-height: 65px;\n        color: #050505;\n        text-align: center;\n        vertical-align: middle;\n        margin-right: 30px; }\n\n.booking-master-step-two .left-side .description .text,\n      .booking-master-step-two .right-side .description .text {\n        display: inline-block;\n        font-size: 18px;\n        font-style: italic;\n        line-height: 30px;\n        color: #4D4E4D;\n        vertical-align: middle; }\n\n.booking-master-step-two .left-side .controls input,\n    .booking-master-step-two .right-side .controls input {\n      margin-right: 25px; }\n\n.booking-master-step-two .title {\n    font-size: 22px;\n    color: #050505;\n    margin-bottom: 8px; }\n\n.booking-master-step-two .title.important::after {\n      content: '*';\n      font-size: 34px;\n      color: #dd1e25; }\n"

/***/ }),

/***/ "./src/app/booking-master-page/booking-master-step-two/booking-master-step-two.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/booking-master-page/booking-master-step-two/booking-master-step-two.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BookingMasterStepTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingMasterStepTwoComponent", function() { return BookingMasterStepTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingMasterStepTwoComponent = /** @class */ (function () {
    function BookingMasterStepTwoComponent() {
        this.changeStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BookingMasterStepTwoComponent.prototype.cancelConfirmation = function () {
        this.isFirstStep = !this.isFirstStep;
        this.changeStep.emit(this.isFirstStep);
    };
    BookingMasterStepTwoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingMasterStepTwoComponent.prototype, "pickedRoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BookingMasterStepTwoComponent.prototype, "isFirstStep", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookingMasterStepTwoComponent.prototype, "changeStep", void 0);
    BookingMasterStepTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-master-step-two',
            template: __webpack_require__(/*! ./booking-master-step-two.component.html */ "./src/app/booking-master-page/booking-master-step-two/booking-master-step-two.component.html"),
            styles: [__webpack_require__(/*! ./booking-master-step-two.component.scss */ "./src/app/booking-master-page/booking-master-step-two/booking-master-step-two.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingMasterStepTwoComponent);
    return BookingMasterStepTwoComponent;
}());



/***/ }),

/***/ "./src/app/booking/booking-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/booking/booking-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BookingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingRoutingModule", function() { return BookingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_meeting_room_reservation_page_meeting_room_reservation_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/meeting-room-reservation-page/meeting-room-reservation-page.component */ "./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.ts");
/* harmony import */ var _booking_master_page_booking_master_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking-master-page/booking-master-page.component */ "./src/app/booking-master-page/booking-master-page.component.ts");
/* harmony import */ var src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/security/groups.resolver */ "./src/app/services/security/groups.resolver.ts");
/* harmony import */ var _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/companies/company-web.resolver */ "./src/app/services/companies/company-web.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'root',
        component: _components_meeting_room_reservation_page_meeting_room_reservation_page_component__WEBPACK_IMPORTED_MODULE_2__["MeetingRoomReservationPageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Бронирования переговорных' }
    },
    {
        path: ':id',
        component: _components_meeting_room_reservation_page_meeting_room_reservation_page_component__WEBPACK_IMPORTED_MODULE_2__["MeetingRoomReservationPageComponent"],
        resolve: {
            groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"],
            webId: _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_5__["CompanyWebResolver"],
        },
        data: { animation: 'fadeAnimation', title: 'Бронирования переговорных' }
    },
    {
        path: ':id/master',
        component: _booking_master_page_booking_master_page_component__WEBPACK_IMPORTED_MODULE_3__["BookingMasterPageComponent"],
        resolve: {
            webId: _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_5__["CompanyWebResolver"],
        },
        data: { animation: 'fadeAnimation', title: 'Бронирование переговорных комнат' }
    },
    {
        path: '',
        redirectTo: 'root',
        pathMatch: 'full'
    }
];
var BookingRoutingModule = /** @class */ (function () {
    function BookingRoutingModule() {
    }
    BookingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BookingRoutingModule);
    return BookingRoutingModule;
}());



/***/ }),

/***/ "./src/app/booking/booking.module.ts":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/*! exports provided: BookingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingModule", function() { return BookingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_meeting_room_reservation_page_meeting_room_reservation_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/meeting-room-reservation-page/meeting-room-reservation-page.component */ "./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-routing.module */ "./src/app/booking/booking-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_booking_modal_form_booking_modal_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/booking-modal-form/booking-modal-form.component */ "./src/app/booking/components/booking-modal-form/booking-modal-form.component.ts");
/* harmony import */ var _components_booking_master_modal_form_booking_master_modal_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/booking-master-modal-form/booking-master-modal-form.component */ "./src/app/booking/components/booking-master-modal-form/booking-master-modal-form.component.ts");
/* harmony import */ var _booking_master_page_booking_master_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../booking-master-page/booking-master-page.component */ "./src/app/booking-master-page/booking-master-page.component.ts");
/* harmony import */ var _booking_master_page_booking_master_step_one_booking_master_step_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../booking-master-page/booking-master-step-one/booking-master-step-one.component */ "./src/app/booking-master-page/booking-master-step-one/booking-master-step-one.component.ts");
/* harmony import */ var _booking_master_page_booking_master_step_two_booking_master_step_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../booking-master-page/booking-master-step-two/booking-master-step-two.component */ "./src/app/booking-master-page/booking-master-step-two/booking-master-step-two.component.ts");
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-date-picker */ "./node_modules/ng2-date-picker/fesm5/ng2-date-picker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var BookingModule = /** @class */ (function () {
    function BookingModule() {
    }
    BookingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_meeting_room_reservation_page_meeting_room_reservation_page_component__WEBPACK_IMPORTED_MODULE_2__["MeetingRoomReservationPageComponent"],
                _components_booking_modal_form_booking_modal_form_component__WEBPACK_IMPORTED_MODULE_7__["BookingModalFormComponent"],
                _components_booking_master_modal_form_booking_master_modal_form_component__WEBPACK_IMPORTED_MODULE_8__["BookingMasterModalFormComponent"],
                _booking_master_page_booking_master_page_component__WEBPACK_IMPORTED_MODULE_9__["BookingMasterPageComponent"],
                _booking_master_page_booking_master_step_one_booking_master_step_one_component__WEBPACK_IMPORTED_MODULE_10__["BookingMasterStepOneComponent"],
                _booking_master_page_booking_master_step_two_booking_master_step_two_component__WEBPACK_IMPORTED_MODULE_11__["BookingMasterStepTwoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _booking_routing_module__WEBPACK_IMPORTED_MODULE_4__["BookingRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ng2_date_picker__WEBPACK_IMPORTED_MODULE_12__["DpDatePickerModule"]
            ]
        })
    ], BookingModule);
    return BookingModule;
}());



/***/ }),

/***/ "./src/app/booking/components/booking-master-modal-form/booking-master-modal-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/booking/components/booking-master-modal-form/booking-master-modal-form.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-master-modal\">\n  <div class=\"l-master__block\">\n    <div class=\"l-master__header\">\n      <div class=\"stageline\">\n        <div class=\"stage active\">\n          <div class=\"count\">1</div>\n          <div class=\"text\">шаг</div>\n        </div>\n        <div class=\"stage\" [class.active]=\"isSecondStage || isThirdStage\">\n          <div class=\"count\">2</div>\n          <div class=\"text\">шаг</div>\n        </div>\n        <div class=\"stage\" [class.active]=\"isThirdStage\">\n          <div class=\"count\">3</div>\n          <div class=\"text\">шаг</div>\n        </div>\n      </div>\n      <div class=\"header-text\">\n        <div class=\"title\">\n          Мастер бронирования\n        </div>\n        <div class=\"description\">\n          Введите данные для подбора переговорной комнаты\n        </div>\n      </div>\n      <div class=\"close\">\n        <input\n          type=\"button\"\n          class=\"btn-close-gray-bold\"\n          (click)=\"resetMaster()\"\n        />\n      </div>\n    </div>\n    <div class=\"l-master__body\">\n      <div class=\"master-body__content\">\n        <div class=\"first-stage\" *ngIf=\"isFirstStage\">\n          <div class=\"content\">\n            <div class=\"label important\">\n              Кол-во участников\n            </div>\n            <input [(ngModel)]=\"firstStageParameters.count\" type=\"number\" placeholder=\"0\" min=\"0\" max=\"999\" />\n            <div class=\"label important\">\n              Дата\n            </div>\n            <dp-date-picker [(ngModel)]=\"firstStageParameters.date\" [config]=\"datePickerConfig\" placeholder=\"Не выбрано\" theme=\"dp-material\"></dp-date-picker> \n            <div class=\"label important\">\n              Время\n            </div>\n            <input [(ngModel)]=\"firstStageParameters.time\" type=\"text\" placeholder=\"00:00\" />\n            <div class=\"label important\">\n              Продолжительность\n            </div>\n            <select [(ngModel)]=\"duration\" (change)=\"changeDuration($event)\">\n              <option *ngFor=\"let key of objectKeys(durations)\" value=\"{{key}}\">{{durations[key]}}</option>\n            </select>\n            <div class=\"label\">\n              Оборудование\n            </div>\n            <div class=\"equipment\">\n              <input [(ngModel)]=\"firstStageParameters.projector\" type=\"checkbox\" class=\"checkbox\" id=\"projector\" />\n              <span class=\"checkbox-custom\"></span>\n              <label for=\"projector\" class=\"projector\"></label>\n            </div>\n            <div class=\"equipment\">\n              <input [(ngModel)]=\"firstStageParameters.videoStaff\" type=\"checkbox\" class=\"checkbox\" id=\"videostaff\" />\n              <span class=\"checkbox-custom\"></span>\n              <label for=\"videostaff\" class=\"videostaff\"></label>\n            </div>\n          </div>\n\n          <div class=\"l-master-controls\">\n            <div class=\"description\">\n              <div class=\"mark\">*</div>\n              <div class=\"text\">– Обязательные поля</div>\n            </div>\n            <div class=\"buttons\">\n              <input\n                (click)=\"resetMaster()\"\n                type=\"button\"\n                class=\"btn btn-default is-transparent red\"\n                value=\"Отменить\"\n              />\n              <input\n                (click)=\"goToSecondStage()\"\n                type=\"button\"\n                class=\"btn btn-default red\"\n                value=\"Далее\"\n              />\n            </div>\n          </div>\n        </div>\n        <div class=\"second-stage\" *ngIf=\"isSecondStage\">\n          <div class=\"content\">\n            <div class=\"label\">\n              Доступные переговорные комнаты\n            </div>\n            <div class=\"room-list\">\n              <div class=\"room-preview\" *ngFor=\"let room of freeRooms; let i=index\" (click)=\"isActive=i; pickedRoom=room\" [class.selected]=\"isActive==i\">\n                <div class=\"image\" >\n                  <div class=\"gradient\"></div>\n                </div>\n                <div class=\"info\">\n                  <div class=\"room-title\" title=\"{{room.title}}\">\n                    {{room.title}}\n                  </div>\n                  <div class=\"city\">\n                    {{room.officeLookupTitle}}\n                  </div>\n                  <!-- <div class=\"sits\">{{room.places}} мест</div> -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"l-master-controls\">\n            <div class=\"buttons\">\n              <input\n                (click)=\"resetMaster()\"\n                type=\"button\"\n                class=\"btn btn-default is-transparent red\"\n                value=\"Отменить\"\n              />\n              <input\n                (click)=\"goToThirdStage()\"\n                type=\"button\"\n                class=\"btn btn-default red\"\n                value=\"Далее\"\n              />\n            </div>\n          </div>\n        </div>\n        <div class=\"third-stage\" *ngIf=\"isThirdStage\">\n          <div class=\"content\">\n            <div class=\"label important\">\n              Тема встречи\n            </div>\n            <input [(ngModel)]=\"editableReservation.title\" type=\"text\" placeholder=\"Введите текст\" />\n            <div class=\"label important\">\n              Тип встречи\n            </div>\n            <select [(ngModel)]=\"editableReservation.meetingTypeLookupId\">\n              <option *ngFor=\"let type of meetingTypes\" [attr.value]=\"type.id\" [attr.selected]=\"editableReservation.meetingTypeLookupId === type.id? '' : null\">{{type.title}}</option>\n            </select>\n            <div class=\"label important\">\n              Инициатор\n            </div>\n            <app-sp-user\n              [login]=\"initiatorLogin\"\n              [isMulti]=\"false\"\n              (value)=\"changeInitiator($event)\"\n              [theme]=\"'master'\"\n            ></app-sp-user>\n            <div class=\"label important\">\n              Ответственный\n            </div>\n            <app-sp-user\n              [login]=\"responsibleLogin\"\n              [isMulti]=\"false\"\n              (value)=\"changeResponsible($event)\"\n              [theme]=\"'master'\"\n            ></app-sp-user>\n            <div class=\"label important\">\n              Участники\n            </div>\n            <app-sp-user\n              [login]=\"participantsString\"\n              [isMulti]=\"true\"\n              (value)=\"changeParticipants($event)\"\n              [theme]=\"'master'\"\n            ></app-sp-user>\n            <div class=\"label\">\n              Описание встречи\n            </div>\n            <textarea [(ngModel)]=\"editableReservation.description\" rows=\"3\" placeholder=\"Введите текст\">{{editableReservation.description}}</textarea>\n          </div>\n\n          <div class=\"l-master-controls\">\n            <div class=\"description\">\n              <div class=\"mark\">*</div>\n              <div class=\"text\">– Обязательные поля</div>\n            </div>\n            <div class=\"buttons\">\n              <input\n                (click)=\"resetMaster()\"\n                type=\"button\"\n                class=\"btn btn-default is-transparent red\"\n                value=\"Отменить\"\n              />\n              <input\n                (click)=\"createReservation(editableReservation)\"\n                type=\"button\"\n                class=\"btn btn-default red\"\n                value=\"Забронировать\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"l-master__overlay\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/booking/components/booking-master-modal-form/booking-master-modal-form.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/booking/components/booking-master-modal-form/booking-master-modal-form.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n:host /deep/ button {\n  min-width: 0;\n  padding: 0;\n  margin: 0; }\n\n:host /deep/ .dp-picker-input {\n  width: 100% !important;\n  height: auto !important;\n  background-color: #ffffff;\n  font-size: 18px !important;\n  color: #898888;\n  padding: 15px 20px;\n  box-sizing: border-box !important;\n  border: none;\n  background-image: url(/assets/icons/icon-calendar-gray.svg);\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  background-position: right 14px center; }\n\ndp-date-picker {\n  margin-bottom: 40px; }\n\n.l-master-modal .l-master__block {\n  position: fixed;\n  top: 17%;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 45%;\n  z-index: 99999;\n  background-color: #fff; }\n\n.l-master-modal .l-master__block .l-master__header {\n    position: relative;\n    background-color: #dedfe0;\n    height: 25%;\n    padding: 4% 5% 4% 15%;\n    box-sizing: border-box;\n    color: #050505;\n    background-image: url(/assets/icons/icon-booking-master.svg);\n    background-size: 20% 40%;\n    background-position: left top 50%;\n    background-repeat: no-repeat; }\n\n.l-master-modal .l-master__block .l-master__header .stageline {\n      position: absolute;\n      top: -55%;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n          -ms-transform: translateX(-50%);\n              transform: translateX(-50%); }\n\n.l-master-modal .l-master__block .l-master__header .stageline .stage {\n        display: inline-block;\n        margin-right: 5vw; }\n\n.l-master-modal .l-master__block .l-master__header .stageline .stage.active .count {\n          background-color: #ee2737;\n          color: #fff; }\n\n.l-master-modal .l-master__block .l-master__header .stageline .stage.active .count:before {\n            background-color: #ee2737; }\n\n.l-master-modal .l-master__block .l-master__header .stageline .stage:first-child .count:before {\n          display: none; }\n\n.l-master-modal .l-master__block .l-master__header .stageline .stage:last-child {\n          margin-right: 0; }\n\n.l-master-modal .l-master__block .l-master__header .stageline .stage .count {\n          width: 56px;\n          height: 56px;\n          border-radius: 50%;\n          background-color: #898888;\n          color: #bcbcbc;\n          text-align: center;\n          font-size: 34px;\n          font-weight: bold;\n          line-height: 56px;\n          margin-bottom: 5px;\n          position: relative; }\n\n.l-master-modal .l-master__block .l-master__header .stageline .stage .count:before {\n            content: '';\n            position: absolute;\n            left: -5vw;\n            top: 50%;\n            -webkit-transform: translateY(-50%);\n                -ms-transform: translateY(-50%);\n                    transform: translateY(-50%);\n            width: 5vw;\n            height: 4px;\n            background-color: #898888; }\n\n.l-master-modal .l-master__block .l-master__header .stageline .stage .text {\n          font-size: 14px;\n          text-align: center;\n          color: #fff; }\n\n.l-master-modal .l-master__block .l-master__header .header-text {\n      position: absolute;\n      left: 17%;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%); }\n\n.l-master-modal .l-master__block .l-master__header .header-text .title {\n        font-size: 24px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        line-height: 30px;\n        max-height: 30px;\n        font-weight: bold;\n        margin-bottom: 10px; }\n\n@media (min-width: 1440px) {\n          .l-master-modal .l-master__block .l-master__header .header-text .title {\n            font-size: calc( 0.02083333 * 100vw + -6px);\n            line-height: calc( 0.02083333 * 100vw + 0px);\n            max-height: calc( 0.02083333 * 100vw + 0px);\n            -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n          .l-master-modal .l-master__block .l-master__header .header-text .title {\n            font-size: 34px;\n            line-height: 40px;\n            max-height: 40px; } }\n\n.l-master-modal .l-master__block .l-master__header .header-text .description {\n        font-size: 14px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        line-height: 20px;\n        max-height: 20px; }\n\n@media (min-width: 1440px) {\n          .l-master-modal .l-master__block .l-master__header .header-text .description {\n            font-size: calc( 0.01666667 * 100vw + -10px);\n            line-height: calc( 0.01666667 * 100vw + -4px);\n            max-height: calc( 0.01666667 * 100vw + -4px);\n            -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n          .l-master-modal .l-master__block .l-master__header .header-text .description {\n            font-size: 22px;\n            line-height: 28px;\n            max-height: 28px; } }\n\n.l-master-modal .l-master__block .l-master__header .close {\n      position: absolute;\n      right: 35px;\n      top: 35px; }\n\n.l-master-modal .l-master__block .l-master__body {\n    width: 100%;\n    height: 75%;\n    overflow: auto;\n    margin: 0 auto;\n    padding: 50px;\n    box-sizing: border-box; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content {\n      width: 100%;\n      background-color: #f1f1f4;\n      box-sizing: border-box; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .label {\n        font-size: 22px;\n        color: #050505;\n        margin-bottom: 10px; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .label:after {\n          display: none;\n          content: '*';\n          font-size: 34px;\n          color: #ee2737; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .label.important:after {\n          display: inline; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content input[type='text'],\n      .l-master-modal .l-master__block .l-master__body .master-body__content input[type='number'],\n      .l-master-modal .l-master__block .l-master__body .master-body__content select {\n        width: 100%;\n        background-color: #ffffff;\n        font-size: 18px;\n        color: #898888;\n        padding: 15px 20px;\n        box-sizing: border-box;\n        margin-bottom: 40px;\n        border: none; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content select {\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none;\n        background-image: url(/assets/icons/icon-arrow-bottom-gray-flat.svg);\n        background-repeat: no-repeat;\n        background-size: 14px 7px;\n        background-position: right 25px center; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .first-stage .content {\n        padding: 40px 0;\n        box-sizing: border-box;\n        width: 250px;\n        margin: 0 auto; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .first-stage .content .equipment {\n          position: relative;\n          margin: 20px 0; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .first-stage .content .equipment:last-child {\n            margin-bottom: 0; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .first-stage .content .equipment .checkbox {\n            position: absolute;\n            margin: 0;\n            z-index: 1;\n            width: 30px;\n            height: 30px;\n            box-sizing: border-box;\n            opacity: 0; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .first-stage .content .equipment .checkbox-custom {\n            position: relative;\n            display: inline-block;\n            vertical-align: middle;\n            width: 30px;\n            height: 30px;\n            background-color: #fff; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .first-stage .content .equipment label {\n            display: inline-block;\n            vertical-align: middle;\n            margin-left: 30px;\n            width: 25px;\n            height: 30px;\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .first-stage .content .equipment label.projector {\n              background-image: url(/assets/icons/icon-mrr-master-projector.svg); }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .first-stage .content .equipment label.videostaff {\n              background-image: url(/assets/icons/icon-mrr-master-videostaff.svg); }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .first-stage .content .equipment .checkbox:checked + .checkbox-custom::before {\n            content: '';\n            display: block;\n            position: absolute;\n            top: 7px;\n            right: 5px;\n            bottom: 6px;\n            left: 5px;\n            background: url(/assets/icons/icon-checkbox-checked.svg);\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: cover; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .second-stage .content {\n        padding: 40px 55px;\n        box-sizing: border-box; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .second-stage .content .room-list {\n          margin: 0 -15px; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .second-stage .content .room-list .room-preview {\n            position: relative;\n            display: inline-block;\n            margin: 3.5px;\n            width: 150px;\n            height: 150px;\n            color: #fff;\n            cursor: pointer; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .second-stage .content .room-list .room-preview.selected .image {\n              border-color: #ee2737; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .second-stage .content .room-list .room-preview .image {\n              position: absolute;\n              left: 0;\n              top: 0;\n              right: 0;\n              bottom: 0;\n              background-repeat: no-repeat;\n              background-size: cover;\n              border: 4px solid #f1f1f4;\n              box-sizing: border-box; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .second-stage .content .room-list .room-preview .image .gradient {\n                position: absolute;\n                left: 0;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                background-color: #000;\n                opacity: 0.4; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .second-stage .content .room-list .room-preview .info {\n              position: absolute;\n              left: 0;\n              top: 0;\n              right: 0;\n              bottom: 0;\n              padding: 15px;\n              box-sizing: border-box; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .second-stage .content .room-list .room-preview .room-title {\n              font-size: 24px;\n              margin-bottom: 10px;\n              height: 30px;\n              overflow: hidden;\n              white-space: nowrap;\n              text-overflow: ellipsis; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .second-stage .content .room-list .room-preview .city {\n              margin-bottom: 6px; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .third-stage .content {\n        padding: 40px 55px;\n        box-sizing: border-box; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .third-stage .content textarea {\n          font-size: 18px;\n          line-height: 20px;\n          width: 100%;\n          padding: 10px 20px;\n          box-sizing: border-box;\n          border: none;\n          resize: vertical; }\n\n.l-master-modal .l-master__block .l-master__body .l-master-controls {\n      padding-top: 40px;\n      box-sizing: border-box;\n      background-color: #fff; }\n\n.l-master-modal .l-master__block .l-master__body .l-master-controls .description {\n        display: inline-block; }\n\n.l-master-modal .l-master__block .l-master__body .l-master-controls .description .mark {\n          display: inline-block;\n          width: 50px;\n          height: 50px;\n          background-color: #f1f1f4;\n          border-radius: 100%;\n          font-size: 34px;\n          line-height: 65px;\n          color: #050505;\n          text-align: center;\n          vertical-align: middle;\n          margin-right: 12px; }\n\n.l-master-modal .l-master__block .l-master__body .l-master-controls .description .text {\n          display: inline-block;\n          font-size: 18px;\n          font-style: italic;\n          line-height: 30px;\n          color: #4d4e4d;\n          vertical-align: middle; }\n\n.l-master-modal .l-master__block .l-master__body .l-master-controls .buttons {\n        display: inline-block;\n        float: right; }\n\n.l-master-modal .l-master__block .l-master__body .l-master-controls .buttons .btn {\n          width: 155px;\n          margin-right: 30px;\n          padding: 0; }\n\n.l-master-modal .l-master__block .l-master__body .l-master-controls .buttons .btn:last-child {\n            margin-right: 0; }\n\n.l-master-modal .l-master__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 99998; }\n"

/***/ }),

/***/ "./src/app/booking/components/booking-master-modal-form/booking-master-modal-form.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/booking/components/booking-master-modal-form/booking-master-modal-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BookingMasterModalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingMasterModalFormComponent", function() { return BookingMasterModalFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_booking_services_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/booking/services/reservations/reservations.service */ "./src/app/booking/services/reservations/reservations.service.ts");
/* harmony import */ var src_app_booking_services_rooms_rooms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/booking/services/rooms/rooms.service */ "./src/app/booking/services/rooms/rooms.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingMasterModalFormComponent = /** @class */ (function () {
    function BookingMasterModalFormComponent(roomsService, route, reservationsService) {
        this.roomsService = roomsService;
        this.route = route;
        this.reservationsService = reservationsService;
        this.webId = undefined;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.masterIsOpen = false;
        this.datePickerConfig = {
            format: 'DD.MM.YYYY',
            firstDayOfWeek: 'mo'
        };
        this.pickedRoom = null;
        this.freeRooms = [];
        this.duration = 'Не выбрано';
        this.dateStart = null;
        this.dateEnd = null;
        this.endHour = null;
        this.firstStageParameters = {
            count: 0,
            date: null,
            time: '00:00',
            duration: this.duration,
            projector: false,
            videoStaff: false
        };
        this.objectKeys = Object.keys;
        this.durations = {
            '0.5': '30 минут',
            '1': '1 час',
            '1.5': '1.5 часа',
            '2': '2 часа',
            '2.5': '2.5 часа',
            '3': '3 часа',
            '3.5': '3.5 часа',
            '4': '4 часа',
            '4.5': '4.5 часа',
            '5': '5 часов'
        };
        this.isFirstStage = true;
        this.isSecondStage = false;
        this.isThirdStage = false;
    }
    BookingMasterModalFormComponent.prototype.changeDuration = function (newValue) {
        this.duration = newValue.target.value;
    };
    BookingMasterModalFormComponent.prototype.changeResponsible = function (users) {
        if (this.editableReservation) {
            this.editableReservation.responsibleId = users && users.length > 0 ? users[0].Id : null;
        }
    };
    BookingMasterModalFormComponent.prototype.changeInitiator = function (users) {
        if (this.editableReservation) {
            this.editableReservation.initiatorId = users && users.length > 0 ? users[0].Id : null;
        }
    };
    BookingMasterModalFormComponent.prototype.changeParticipants = function (users) {
        if (this.editableReservation) {
            this.editableReservation.participants = users.map(function (user) {
                return {
                    Id: user.Id,
                    Title: user.Title,
                    UserName: user.LoginName,
                    EMail: user.Email
                };
            });
        }
    };
    BookingMasterModalFormComponent.prototype.timeCheck = function () {
        var _this = this;
        var time = moment__WEBPACK_IMPORTED_MODULE_3__(this.firstStageParameters.time, 'HH:mm');
        this.dateStart = this.firstStageParameters.date.set({
            hour: time.get('hour'),
            minute: time.get('minute'),
            second: time.get('second')
        });
        this.dateEnd = moment__WEBPACK_IMPORTED_MODULE_3__(this.dateStart).add(Number(this.duration), 'hours');
        this.endHour = this.dateEnd.format('HH:mm');
        var filter = "((datetime'" + moment__WEBPACK_IMPORTED_MODULE_3__(this.dateStart).toISOString() + "' ge EventDate and datetime'" + moment__WEBPACK_IMPORTED_MODULE_3__(this.dateStart).toISOString() + "' lt EndDate)";
        filter += " or (datetime'" + moment__WEBPACK_IMPORTED_MODULE_3__(this.dateEnd).toISOString() + "' gt EventDate and datetime'" + moment__WEBPACK_IMPORTED_MODULE_3__(this.dateEnd).toISOString() + "' le EndDate))";
        filter += " or (datetime'" + moment__WEBPACK_IMPORTED_MODULE_3__(this.dateStart).toISOString() + "' lt EventDate and datetime'" + moment__WEBPACK_IMPORTED_MODULE_3__(this.dateEnd).toISOString() + "' gt EndDate)";
        this.reservationsService.getItems({
            filter: filter
        }).subscribe(function (reservations) {
            reservations.forEach(function (reservation) {
                _this.freeRooms.forEach(function (room) {
                    if (reservation.roomLookupId === room.id) {
                        _this.freeRooms.splice(_this.freeRooms.indexOf(room), 1);
                    }
                });
            });
        });
    };
    BookingMasterModalFormComponent.prototype.goToSecondStage = function () {
        var _this = this;
        var videoStaff = (this.firstStageParameters.videoStaff) === false ? 'Нет' : 'Да';
        var projector = (this.firstStageParameters.projector === false) ? 'Нет' : 'Да';
        this.timeCheck();
        if (((this.firstStageParameters.count === undefined) ? '' : this.firstStageParameters.count) <= 0) {
            alert('Поле "Количество участников" обязательно к заполнению');
        }
        else if (this.firstStageParameters.date.length === null) {
            alert('Поле "Дата" обязательно к заполнению');
        }
        else if ((moment__WEBPACK_IMPORTED_MODULE_3__(this.firstStageParameters.date + this.firstStageParameters.time, 'DD.MM.YYYY HH:mm').unix() < moment__WEBPACK_IMPORTED_MODULE_3__(this.firstStageParameters.date + '08:00', 'DD.MM.YYYY HH:mm').unix()) ||
            (moment__WEBPACK_IMPORTED_MODULE_3__(this.firstStageParameters.date + this.firstStageParameters.time, 'DD.MM.YYYY HH:mm').unix() > moment__WEBPACK_IMPORTED_MODULE_3__(this.firstStageParameters.date + '19:30', 'DD.MM.YYYY HH:mm').unix())) {
            alert('Поле "Время" обязательно к заполнению, и должно находиться в промежутке между 08:00 и 19:30 включительно');
        }
        else if (this.duration === 'Не выбрано') {
            alert('Необходимо выбрать продолжительность бронирования');
        }
        else if (parseInt(this.endHour.replace(':', ''), 10) > 2000) {
            alert('Событие должно заканчиваться не позднее, чем в 20:00');
        }
        else if (this.firstStageParameters.videoStaff === false && this.firstStageParameters.projector === false) {
            this.roomsService.getItems().subscribe(function (rooms) {
                rooms.forEach(function (room) {
                    _this.freeRooms.push(room);
                });
            });
        }
        else {
            this.roomsService.getItems({
                filter: "slVideoStaff eq '" + videoStaff + "' and slProjector eq '" + projector + "'"
            }).subscribe(function (rooms) {
                rooms.forEach(function (room) {
                    _this.freeRooms.push(room);
                });
            });
        }
        this.timeCheck();
        this.isFirstStage = false;
        this.isSecondStage = true;
    };
    BookingMasterModalFormComponent.prototype.goToThirdStage = function () {
        this.editableReservation.roomLookupId = this.pickedRoom.id;
        this.editableReservation.officeLookupId = this.pickedRoom.officeLookupId;
        this.editableReservation.count = this.firstStageParameters.count;
        this.editableReservation.projector = (this.firstStageParameters.projector === true ? 'Да' : 'Нет');
        this.editableReservation.videoStaff = (this.firstStageParameters.videoStaff === true ? 'Да' : 'Нет');
        this.editableReservation.eventDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.dateStart).toISOString();
        this.editableReservation.endDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.dateEnd).toISOString();
        this.editableReservation.title = undefined;
        this.editableReservation.meetingTypeLookupId = undefined;
        this.editableReservation.description = undefined;
        this.isSecondStage = false;
        this.isThirdStage = true;
    };
    BookingMasterModalFormComponent.prototype.createReservation = function (item) {
        var _this = this;
        if (((item.title === undefined) ? '' : item.title).length <= 0) {
            alert('Поле "Тема встречи" обязательно к заполнению');
        }
        else if (item.meetingTypeLookupId === undefined) {
            alert('Поле "Тип встречи" обязательно к заполнению');
        }
        else if (item.initiatorId === undefined) {
            alert('Поле "Инициатор" обязательно к заполнению');
        }
        else if (item.responsibleId === undefined) {
            alert('Поле "Ответственный" обязательно к заполнению');
        }
        else if (item.participants === undefined) {
            alert('Поле "Участники" обязательно к заполнению');
        }
        else {
            this.timeCheck();
            var freeRoomIds_1 = [];
            this.freeRooms.forEach(function (room) {
                freeRoomIds_1.push(room.id);
            });
            if (freeRoomIds_1.indexOf(item.roomLookupId) !== -1) {
                this.reservationsService.createItem({
                    id: undefined,
                    title: item.title,
                    participants: { 'results': item.participants.map(function (user) { return user.Id; }) },
                    videoStaff: item.videoStaff,
                    projector: item.projector,
                    description: item.description,
                    initiator: item.initiator,
                    initiatorId: item.initiatorId,
                    initiatorLogin: item.initiatorLogin,
                    responsible: item.responsible,
                    responsibleId: item.responsibleId,
                    responsibleLogin: item.responsibleLogin,
                    count: item.count,
                    eventDate: item.eventDate,
                    endDate: item.endDate,
                    companyLookupId: item.companyLookupId,
                    officeLookupId: item.officeLookupId,
                    roomLookupId: item.roomLookupId,
                    meetingTypeLookupId: item.meetingTypeLookupId
                }, this.webId).subscribe(function (itemResived) {
                    _this.resetMaster();
                });
            }
            else {
                alert('Выбранное время и комната уже заняты');
                this.isFirstStage = true;
                this.isSecondStage = false;
                this.isThirdStage = false;
            }
        }
    };
    BookingMasterModalFormComponent.prototype.resetMaster = function () {
        this.isFirstStage = true;
        this.isSecondStage = false;
        this.isThirdStage = false;
        this.masterIsOpen = false;
        this.editableReservation = null;
        this.close.emit();
    };
    BookingMasterModalFormComponent.prototype.ngOnInit = function () {
        this.webId =
            this.route.snapshot.data.webId !== 'root'
                ? this.route.snapshot.data.webId
                : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookingMasterModalFormComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingMasterModalFormComponent.prototype, "masterIsOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingMasterModalFormComponent.prototype, "editableReservation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingMasterModalFormComponent.prototype, "groupedReservations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookingMasterModalFormComponent.prototype, "rooms", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookingMasterModalFormComponent.prototype, "meetingTypes", void 0);
    BookingMasterModalFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-master-modal-form',
            template: __webpack_require__(/*! ./booking-master-modal-form.component.html */ "./src/app/booking/components/booking-master-modal-form/booking-master-modal-form.component.html"),
            styles: [__webpack_require__(/*! ./booking-master-modal-form.component.scss */ "./src/app/booking/components/booking-master-modal-form/booking-master-modal-form.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_booking_services_rooms_rooms_service__WEBPACK_IMPORTED_MODULE_2__["RoomsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_booking_services_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_1__["ReservationsService"]])
    ], BookingMasterModalFormComponent);
    return BookingMasterModalFormComponent;
}());



/***/ }),

/***/ "./src/app/booking/components/booking-modal-form/booking-modal-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/booking/components/booking-modal-form/booking-modal-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-edit-card-modal\" *ngIf=\"modalIsOpen\">\n  <div class=\"l-edit-card__block\">\n    <div class=\"l-edit-card__header\">\n      <div *ngIf=\"isCreateItem === false\" class=\"title\">\n        Изменить бронирование\n      </div>\n      <div *ngIf=\"isCreateItem === true\" class=\"title\">\n        Создать бронирование\n      </div>\n      <div class=\"close\">\n        <input type=\"button\" class=\"btn-close-gray-bold\" (click)=\"closeModal()\">\n      </div>\n    </div>\n    <div class=\"l-edit-card__body\">\n      <table class=\"m-mrss-modal-dialog-content__table\">\n        <tr>\n          <td colspan=\"2\">\n            <b class=\"ce-modal-dialog-block-title important\">Тема:</b>\n            <br />\n            <input [(ngModel)]=\"editableReservation.title\" class=\"ce-modal-dialog-input\" type=\"text\" id=\"MeetingTitle\" maxlength=\"128\" placeholder=\"Тема переговоров\" [attr.value]=\"editableReservation.title\" />\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n            <textarea [(ngModel)]=\"editableReservation.description\" class=\"ce-modal-dialog-textarea\" id=\"MeetingDescription\" maxlength=\"512\" placeholder=\"Описание\">{{editableReservation.description}}</textarea>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b class=\"ce-modal-dialog-block-title important\">Переговорная:</b>\n            <select [(ngModel)]=\"editableReservation.roomLookupId\" (change)=\"changeRoom(editableReservationDate)\" class=\"ce-modal-dialog-select\" id=\"MeetingRoom\">\n              <option *ngFor=\"let room of rooms\" [attr.value]=\"room.id\" [attr.selected]=\"editableReservation.roomLookupId === room.id? '' : null\">{{room.title}}</option>\n            </select>\n          </td>\n          <td>\n            <b class=\"ce-modal-dialog-block-title important\">Тип встречи:</b>\n            <br />\n            <select [(ngModel)]=\"editableReservation.meetingTypeLookupId\" class=\"ce-modal-dialog-select\" id=\"MeetingType\">\n              <option *ngFor=\"let type of meetingTypes\" [attr.value]=\"type.id\" [attr.selected]=\"editableReservation.meetingTypeLookupId === type.id? '' : null\">{{type.title}}</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n            <b class=\"ce-modal-dialog-block-title important\">Инициатор:</b>\n            <app-sp-user\n              [login]=\"editableReservation.initiatorLogin\"\n              [isMulti]=\"false\"\n              (value)=\"changeInitiator($event)\"\n              theme=\"booking-modal\"\n            ></app-sp-user>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n            <b class=\"ce-modal-dialog-block-title important\">Ответственный:</b>\n              <app-sp-user\n                [login]=\"editableReservation.responsibleLogin\"\n                [isMulti]=\"false\"\n                (value)=\"changeResponsible($event)\"\n                theme=\"booking-modal\"\n              ></app-sp-user>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n            <b class=\"ce-modal-dialog-block-title important\">Участники встречи:</b>\n            <app-sp-user\n              [login]=\"participantsString\"\n              [isMulti]=\"true\"\n              (value)=\"changeParticipants($event)\"\n              theme=\"booking-modal\"\n            ></app-sp-user>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b class=\"ce-modal-dialog-block-title important\">Кол-во участников встречи:</b>\n            <br />\n            <input class=\"ce-modal-dialog-input\" [(ngModel)]=\"editableReservation.count\" type=\"number\" min=\"0\" max=\"999\" id=\"MeetingMembersCount\" placeholder=\"Численное значение\" [attr.value]=\"editableReservation.count\" />\n          </td>\n          <td>\n            <b class=\"ce-modal-dialog-block-title important\">Дата резервирования:</b>\n            <input class=\"ce-modal-dialog-input\" type=\"text\" id=\"EventDate\" (change)=\"changeDay(editableReservationDate)\" [(ngModel)]=\"editableReservationDate\" placeholder=\"дд.мм.гггг\" [value]=\"editableReservationDate\" />\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b class=\"ce-modal-dialog-block-title important\">Время начала:</b>\n            <br />\n            <select [ngModel]=\"selectStart\" (change)=\"changeStartTime(editableReservationDate, $event)\" id=\"EventDateFromTime\" class=\"ce-modal-dialog-select\" [disabled]=\"isCreateItem && !isDublicateItem\">\n              <ng-container *ngFor=\"let time of timeLine; let i = index\">\n                  <option *ngIf=\"i < timeLine.length-1\" [value]=\"time\">{{time}}</option>\n              </ng-container>\n            </select>\n          </td>\n          <td>\n            <b class=\"ce-modal-dialog-block-title important\">Время окончания:</b>\n            <select [ngModel]=\"selectEnd\" (change)=\"changeEndTime(editableReservationDate, $event)\" id=\"EventDateToTime\" class=\"ce-modal-dialog-select\">\n              <ng-container *ngFor=\"let time of timeLine; let i = index\">\n                  <option *ngIf=\"i > 0\" [value]=\"time\">{{time}}</option>\n              </ng-container>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b class=\"ce-modal-dialog-block-title important\">Наличие оборудования для видеоконференции:</b>\n            <select [(ngModel)]=\"editableReservation.videoStaff\" class=\"ce-modal-dialog-select\" id=\"MeetingIsVideo\">\n                <ng-container *ngFor=\"let selector of booleanSelector\">\n                  <option [attr.selected]=\"editableReservation.videoStaff === selector? '' : null\">{{selector}}</option>\n                </ng-container>\n            </select>\n          </td>\n          <td>\n            <b class=\"ce-modal-dialog-block-title important\">Наличие проектора/ТВ:</b>\n            <select [(ngModel)]=\"editableReservation.projector\" class=\"ce-modal-dialog-select\" id=\"MeetingIsProjector\">\n                <ng-container *ngFor=\"let selector of booleanSelector\">\n                  <option [attr.selected]=\"editableReservation.projector === selector? '' : null\">{{selector}}</option>\n                </ng-container>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b class=\"ce-modal-dialog-block-title\">Повторяющееся событие:</b>\n            <select class=\"ce-modal-dialog-select\" id=\"MeetingRecurring\">\n              <option value=\"none\">Нет</option>\n              <option value=\"day\">Ежедневно</option>\n              <option value=\"week\">Еженедельно</option>\n              <option value=\"month\">Ежемесячно</option>\n              <option value=\"year\">Ежегодно</option>\n            </select>\n          </td>\n        </tr>\n      </table>\n      <div class=\"buttons\">\n        <input \n          type=\"button\" \n          value=\"Отменить\" \n          class=\"btn btn-default is-transparent red\" \n          (click)=\"closeModal()\" \n        />\n        <input \n          *ngIf=\"!isCreateItem\" \n          type=\"button\" \n          value=\"Сохранить\" \n          class=\"btn btn-default red\" \n          (click)=\"changeOfficeId(); updateReservation(editableReservation)\" \n        />\n        <input \n          *ngIf=\"isCreateItem && !isDublicateItem\" \n          type=\"button\" \n          value=\"Сохранить\" \n          class=\"btn btn-default red\" \n          (click)=\"changeOfficeId(); createReservation(editableReservation)\" \n        />\n        <input \n          *ngIf=\"isCreateItem && isDublicateItem\" \n          type=\"button\" \n          value=\"Сохранить\" \n          class=\"btn btn-default red\" \n          (click)=\"changeOfficeId(); dublicateReservation(editableReservation)\" \n        />\n      </div>\n    </div>\n  </div>\n  <div class=\"l-edit-card__overlay\"></div>\n</div>"

/***/ }),

/***/ "./src/app/booking/components/booking-modal-form/booking-modal-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/booking/components/booking-modal-form/booking-modal-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-edit-card-modal .l-edit-card__block {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 50%;\n  z-index: 99999;\n  background-color: #FFF; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__header {\n    position: relative;\n    background-color: #DEDFE0;\n    height: 20%;\n    padding: 4% 5% 4% 15%;\n    box-sizing: border-box;\n    color: #050505;\n    background-image: url(/assets/icons/icon-edit-booking.svg);\n    background-size: 20% 30%;\n    background-position: left top 50%;\n    background-repeat: no-repeat; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__header .title {\n      position: absolute;\n      left: 15%;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      font-size: 24px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 30px;\n      max-height: 30px;\n      font-weight: bold; }\n\n@media (min-width: 1440px) {\n        .l-edit-card-modal .l-edit-card__block .l-edit-card__header .title {\n          font-size: calc( 0.02083333 * 100vw + -6px);\n          line-height: calc( 0.02083333 * 100vw + 0px);\n          max-height: calc( 0.02083333 * 100vw + 0px);\n          -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n        .l-edit-card-modal .l-edit-card__block .l-edit-card__header .title {\n          font-size: 34px;\n          line-height: 40px;\n          max-height: 40px; } }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__header .close {\n      position: absolute;\n      right: 35px;\n      top: 35px; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body {\n    width: 100%;\n    height: 80%;\n    overflow: auto;\n    margin: 0 auto;\n    padding: 30px 8%;\n    box-sizing: border-box; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table {\n      width: 100%;\n      border-collapse: collapse;\n      border-spacing: 10px;\n      margin: -10px;\n      margin-bottom: 60px;\n      font-size: 12px; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table b {\n        font-weight: normal; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table td {\n        width: 50%;\n        border: 10px solid transparent; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table input {\n        height: 30px;\n        line-height: 30px; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table select {\n        height: 26px;\n        border: 1px solid #d1d1d1;\n        border-radius: 3px; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table .ce-modal-dialog-block-title {\n        display: inline-block;\n        margin-bottom: 5px; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table .ce-modal-dialog-block-title.important:after {\n          content: '*';\n          display: inline;\n          color: red; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table input.ce-modal-dialog-input {\n        line-height: 20px;\n        box-sizing: border-box;\n        border-radius: 3px;\n        border: 1px solid #d1d1d1;\n        padding: 2px 5px; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table input#MeetingMembersCount,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #EventDate,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #EventDateFromTime,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #EventDateToTime,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingIsVideo,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingIsProjector,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingInitiator,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingRoom,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingType,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingTitle,\n      .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingRecurringEndDate {\n        width: 100%; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table textarea#MeetingDescription {\n        width: 100%;\n        padding: 2px 5px;\n        box-sizing: border-box;\n        min-height: 50px;\n        border-radius: 3px;\n        border-color: #d1d1d1;\n        resize: vertical; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table input#MeetingRecurringEndCount, .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingEveryWeek, .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingEveryDay, .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingEveryMonthNumber, .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingEveryMonth, .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingEveryYearDay {\n        width: 35px;\n        text-align: center; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table select#MeetingRecurring {\n        width: 100%; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table tr.MeetingRecurringEvent {\n        vertical-align: top; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table .sp-peoplepicker-topLevel, .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table .sp-peoplepicker-topLevelDisabled {\n        border-radius: 3px;\n        border-color: #d1d1d1; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table input.m-mrss-datepicker {\n        border: none;\n        border-bottom: 1px dashed #444; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingMembers_TopSpan, .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingResponsible_TopSpan {\n        line-height: 30px;\n        box-sizing: border-box;\n        border-radius: 3px;\n        border: 1px solid #d1d1d1; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table .m-mrss-modal-dialog-content__table b {\n        padding: 0 5px; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingEveryYearMonth_chosen {\n        width: 140px;\n        margin: 0 5px; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingResponsible, .l-edit-card-modal .l-edit-card__block .l-edit-card__body .m-mrss-modal-dialog-content__table #MeetingMembers {\n        height: 30px;\n        line-height: 30px;\n        box-sizing: border-box;\n        border-radius: 3px;\n        border: 1px solid #d1d1d1; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .buttons {\n      text-align: right; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .buttons .btn {\n        width: 155px;\n        padding: 0 35px; }\n\n.l-edit-card-modal .l-edit-card__block .l-edit-card__body .buttons .btn:first-child {\n          margin-right: 30px; }\n\n.l-edit-card-modal .l-edit-card__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 99998; }\n"

/***/ }),

/***/ "./src/app/booking/components/booking-modal-form/booking-modal-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/booking/components/booking-modal-form/booking-modal-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BookingModalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingModalFormComponent", function() { return BookingModalFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_booking_services_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/booking/services/reservations/reservations.service */ "./src/app/booking/services/reservations/reservations.service.ts");
/* harmony import */ var src_app_booking_services_reservations_mail_reservations_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/booking/services/reservations-mail/reservations-mail.service */ "./src/app/booking/services/reservations-mail/reservations-mail.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookingModalFormComponent = /** @class */ (function () {
    function BookingModalFormComponent(reservationsService, reservationsMailService, route) {
        this.reservationsService = reservationsService;
        this.reservationsMailService = reservationsMailService;
        this.route = route;
        this.user = null;
        this.webId = undefined;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCreateItem = false;
        this.modalIsOpen = false;
        this.timeLine = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
            '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
        this.booleanSelector = ['Да', 'Нет'];
        this.selectStart = '';
        this.selectEnd = '';
        this.formInValid = true;
    }
    BookingModalFormComponent.prototype.convertDateToTime = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(date).format('HH:mm');
    };
    BookingModalFormComponent.prototype.convertDateToDay = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(date).format('DD.MM.YYYY');
    };
    BookingModalFormComponent.prototype.closeModal = function () {
        this.close.emit();
        this.editableReservation = null;
        this.participantsString = '';
    };
    BookingModalFormComponent.prototype.changeOfficeId = function () {
        var _this = this;
        if (this.editableReservation) {
            this.editableReservation.officeLookupId = this.rooms.filter(function (room) {
                return room['id'] === Number(_this.editableReservation.roomLookupId);
            }).map(function (room) { return room['officeLookupId']; }).shift();
        }
    };
    BookingModalFormComponent.prototype.changeRoom = function (date) {
        this.changeStartTime(date, { target: { value: this.selectStart } });
        this.changeEndTime(date, { target: { value: this.selectEnd } });
    };
    BookingModalFormComponent.prototype.changeDay = function (date) {
        var _this = this;
        var dateStart = moment__WEBPACK_IMPORTED_MODULE_3__(date, 'DD.MM.YYYY').startOf('day').toISOString();
        var dateEnd = moment__WEBPACK_IMPORTED_MODULE_3__(date, 'DD.MM.YYYY').endOf('day').toISOString();
        this.groupedReservations = [];
        this.reservationsService.getItems({
            filter: "EventDate ge datetime'" + dateStart + "' and EventDate lt'" + dateEnd + "'"
        }).subscribe(function (reservations) {
            var groupedByDate = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](reservations, function (reservation) { return _this.convertDateToTime(reservation.eventDate); });
            var timeLine = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
                '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];
            timeLine.forEach(function (time) {
                _this.groupedReservations.push({
                    date: time,
                    list: groupedByDate[time]
                });
            });
            _this.changeStartTime(date, { target: { value: _this.selectStart } });
            _this.changeEndTime(date, { target: { value: _this.selectEnd } });
        });
    };
    BookingModalFormComponent.prototype.changeStartTime = function (date, newValue) {
        var _this = this;
        var proposedTime = this.convertDateToTime(this.editableReservation.eventDate);
        this.editableReservation.eventDate = moment__WEBPACK_IMPORTED_MODULE_3__(date + ':' + newValue.target.value, 'DD.MM.YYYY:HH:mm').toISOString();
        var valid = true;
        this.groupedReservations.forEach(function (data) {
            var formatedReservationStart = moment__WEBPACK_IMPORTED_MODULE_3__(_this.editableReservation.eventDate).format('X');
            var formatedReservationEnd = moment__WEBPACK_IMPORTED_MODULE_3__(_this.editableReservation.endDate).format('X');
            if (data.list !== undefined) {
                for (var _i = 0, _a = data.list; _i < _a.length; _i++) {
                    var reservation = _a[_i];
                    var tempEventStart = moment__WEBPACK_IMPORTED_MODULE_3__(reservation.eventDate).format('X'), tempEventEnd = moment__WEBPACK_IMPORTED_MODULE_3__(reservation.endDate).format('X'), tempRoomId = reservation.roomLookupId;
                    if ((formatedReservationStart >= tempEventStart) &&
                        (formatedReservationStart < tempEventEnd) &&
                        (Number(_this.editableReservation.roomLookupId) === tempRoomId)) {
                        if (_this.editableReservation.id !== reservation.id) {
                            valid = false;
                            newValue.target.value = proposedTime;
                        }
                    }
                    else if ((formatedReservationStart < tempEventStart) &&
                        (formatedReservationStart < tempEventEnd) &&
                        (formatedReservationEnd > tempEventStart) &&
                        (formatedReservationEnd > tempEventEnd) &&
                        (Number(_this.editableReservation.roomLookupId) === tempRoomId)) {
                        if (_this.editableReservation.id !== reservation.id) {
                            valid = false;
                            newValue.target.value = proposedTime;
                            break;
                        }
                    }
                }
            }
        });
        this.editableReservation.eventDate = moment__WEBPACK_IMPORTED_MODULE_3__(date + ':' + newValue.target.value, 'DD.MM.YYYY:HH:mm').toISOString();
        this.editableReservation.eventHeight = this.getEventHeight(this.editableReservation.eventDate, this.editableReservation.endDate);
        if (!valid) {
            alert('Выбранное время занято');
        }
    };
    BookingModalFormComponent.prototype.changeEndTime = function (date, newValue) {
        var _this = this;
        var proposedTime = this.convertDateToTime(this.editableReservation.endDate);
        this.editableReservation.endDate = moment__WEBPACK_IMPORTED_MODULE_3__(date + ':' + newValue.target.value, 'DD.MM.YYYY:HH:mm').toISOString();
        var valid = true;
        this.groupedReservations.forEach(function (data) {
            var formatedReservationStart = moment__WEBPACK_IMPORTED_MODULE_3__(_this.editableReservation.eventDate).format('X');
            var formatedReservationEnd = moment__WEBPACK_IMPORTED_MODULE_3__(_this.editableReservation.endDate).format('X');
            if (data.list !== undefined) {
                for (var _i = 0, _a = data.list; _i < _a.length; _i++) {
                    var reservation = _a[_i];
                    var tempEventStart = moment__WEBPACK_IMPORTED_MODULE_3__(reservation.eventDate).format('X'), tempEventEnd = moment__WEBPACK_IMPORTED_MODULE_3__(reservation.endDate).format('X'), tempRoomId = reservation.roomLookupId;
                    if ((formatedReservationEnd > tempEventStart) &&
                        (formatedReservationEnd <= tempEventEnd) &&
                        (Number(_this.editableReservation.roomLookupId) === tempRoomId)) {
                        if (_this.editableReservation.id !== reservation.id) {
                            valid = false;
                            newValue.target.value = proposedTime;
                        }
                    }
                    else if ((formatedReservationStart < tempEventStart) &&
                        (formatedReservationStart < tempEventEnd) &&
                        (formatedReservationEnd > tempEventStart) &&
                        (formatedReservationEnd > tempEventEnd) &&
                        (Number(_this.editableReservation.roomLookupId) === tempRoomId)) {
                        if (_this.editableReservation.id !== reservation.id) {
                            valid = false;
                            newValue.target.value = proposedTime;
                            break;
                        }
                    }
                }
            }
        });
        this.editableReservation.endDate = moment__WEBPACK_IMPORTED_MODULE_3__(date + ':' + newValue.target.value, 'DD.MM.YYYY:HH:mm').toISOString();
        this.editableReservation.eventHeight = this.getEventHeight(this.editableReservation.eventDate, this.editableReservation.endDate);
        if (!valid) {
            alert('Выбранное время занято');
        }
    };
    BookingModalFormComponent.prototype.changeResponsible = function (users) {
        if (this.editableReservation) {
            this.editableReservation.responsibleId = users && users.length > 0 ? users[0].Id : null;
        }
    };
    BookingModalFormComponent.prototype.changeInitiator = function (users) {
        if (this.editableReservation) {
            this.editableReservation.initiatorId = users && users.length > 0 ? users[0].Id : null;
        }
    };
    BookingModalFormComponent.prototype.changeParticipants = function (users) {
        if (this.editableReservation) {
            this.editableReservation.participants = users.map(function (user) {
                return {
                    Id: user.Id,
                    Title: user.Title,
                    UserName: user.LoginName,
                    EMail: user.Email
                };
            });
        }
    };
    BookingModalFormComponent.prototype.getEventHeight = function (eventDate, endDate) {
        var timeStart = moment__WEBPACK_IMPORTED_MODULE_3__(eventDate);
        var timeEnd = moment__WEBPACK_IMPORTED_MODULE_3__(endDate);
        var eventHeight = timeEnd.diff(timeStart, 'hours', true);
        return eventHeight / .5;
    };
    BookingModalFormComponent.prototype.updateReservation = function (item) {
        var _this = this;
        var timeStart = moment__WEBPACK_IMPORTED_MODULE_3__(item.eventDate).format('X');
        var timeEnd = moment__WEBPACK_IMPORTED_MODULE_3__(item.endDate).format('X');
        if (timeStart >= timeEnd) {
            alert('Время окончания не может быть меньше или равняться времени начала');
        }
        else {
            this.reservationsService.updateItem({
                id: item.id,
                title: item.title,
                participants: { 'results': item.participants.map(function (user) { return user.Id; }) },
                videoStaff: item.videoStaff,
                projector: item.projector,
                description: item.description,
                initiator: item.initiator,
                initiatorId: item.initiatorId,
                initiatorLogin: item.initiatorLogin,
                responsible: item.responsible,
                responsibleId: item.responsibleId,
                responsibleLogin: item.responsibleLogin,
                count: item.count,
                eventDate: item.eventDate,
                endDate: item.endDate,
                companyLookupId: item.companyLookupId,
                officeLookupId: item.officeLookupId,
                roomLookupId: item.roomLookupId,
                meetingTypeLookupId: item.meetingTypeLookupId
            }, this.webId).subscribe(function (itemResived) {
                var oldReservation = _this.cell.list[_this.editableReservationIndex];
                if (_this.convertDateToTime(item.eventDate) !== _this.convertDateToTime(oldReservation.eventDate)) {
                    _this.reservationsMailService.editTimeNotify(item, oldReservation.eventDate);
                }
                else if (item.eventDate !== oldReservation.eventDate) {
                    _this.reservationsMailService.editDateNotify(item, oldReservation.eventDate);
                }
                if (_this.convertDateToDay(oldReservation.eventDate) !== _this.convertDateToDay(_this.editableReservation.eventDate)) {
                    _this.cell.list.splice(_this.editableReservationIndex, 1);
                }
                else {
                    _this.cell.list[_this.editableReservationIndex] = _this.editableReservation;
                }
                _this.closeModal();
            });
        }
    };
    BookingModalFormComponent.prototype.createReservation = function (item) {
        var _this = this;
        var timeStart = moment__WEBPACK_IMPORTED_MODULE_3__(item.eventDate).format('X');
        var timeEnd = moment__WEBPACK_IMPORTED_MODULE_3__(item.endDate).format('X');
        if (timeStart >= timeEnd) {
            alert('Время окончания не может быть меньше или равняться времени начала');
        }
        else {
            if (((item.title === undefined) ? '' : item.title).length <= 0) {
                alert('Поле "Тема" обязательно к заполнению');
            }
            else if (item.meetingTypeLookupId == null) {
                alert('Поле "Тип встречи" обязательно к заполнению');
            }
            else if (item.initiatorId == null) {
                alert('Поле "Инициатор" обязательно к заполнению');
            }
            else if (item.responsibleId == null) {
                alert('Поле "Ответственный" обязательно к заполнению');
            }
            else if (item.participants == null) {
                alert('Поле "Участники" обязательно к заполнению');
            }
            else if (item.count == null) {
                alert('Поле "Количество участников" обязательно к заполнению');
            }
            else if (item.videoStaff == null) {
                alert('Поле "Наличие оборудования для видеоконференции" обязательно к заполнению');
            }
            else if (item.projector == null) {
                alert('Поле "Наличие проектора/ТВ" обязательно к заполнению');
            }
            else {
                this.reservationsService.createItem({
                    id: undefined,
                    title: item.title,
                    participants: { 'results': item.participants.map(function (user) { return user.Id; }) },
                    videoStaff: item.videoStaff,
                    projector: item.projector,
                    description: item.description,
                    initiator: item.initiator,
                    initiatorId: item.initiatorId,
                    initiatorLogin: item.initiatorLogin,
                    responsible: item.responsible,
                    responsibleId: item.responsibleId,
                    responsibleLogin: item.responsibleLogin,
                    count: item.count,
                    eventDate: item.eventDate,
                    endDate: item.endDate,
                    companyLookupId: item.companyLookupId,
                    officeLookupId: item.officeLookupId,
                    roomLookupId: item.roomLookupId,
                    meetingTypeLookupId: item.meetingTypeLookupId
                }, this.webId).subscribe(function (itemResived) {
                    _this.editableReservation.id = itemResived.id;
                    if (_this.cell.list === undefined) {
                        _this.cell.list = [_this.editableReservation];
                    }
                    else {
                        _this.cell.list.push(_this.editableReservation);
                    }
                    _this.reservationsMailService.createNotify(item);
                    _this.closeModal();
                });
            }
        }
    };
    BookingModalFormComponent.prototype.dublicateReservation = function (item) {
        var _this = this;
        var timeStart = moment__WEBPACK_IMPORTED_MODULE_3__(item.eventDate).format('X');
        var timeEnd = moment__WEBPACK_IMPORTED_MODULE_3__(item.endDate).format('X');
        if (timeStart >= timeEnd) {
            alert('Время окончания не может быть меньше или равняться времени начала');
        }
        else {
            if (((item.title === undefined) ? '' : item.title).length <= 0) {
                alert('Поле "Тема" обязательно к заполнению');
            }
            else if (item.meetingTypeLookupId == null) {
                alert('Поле "Тип встречи" обязательно к заполнению');
            }
            else if (item.initiatorId == null) {
                alert('Поле "Инициатор" обязательно к заполнению');
            }
            else if (item.responsibleId == null) {
                alert('Поле "Ответственный" обязательно к заполнению');
            }
            else if (item.participants == null) {
                alert('Поле "Участники" обязательно к заполнению');
            }
            else if (item.count == null) {
                alert('Поле "Количество участников" обязательно к заполнению');
            }
            else if (item.videoStaff == null) {
                alert('Поле "Наличие оборудования для видеоконференции" обязательно к заполнению');
            }
            else if (item.projector == null) {
                alert('Поле "Наличие проектора/ТВ" обязательно к заполнению');
            }
            else {
                this.reservationsService.createItem({
                    id: undefined,
                    title: item.title,
                    participants: { 'results': item.participants.map(function (user) { return user.Id; }) },
                    videoStaff: item.videoStaff,
                    projector: item.projector,
                    description: item.description,
                    initiator: item.initiator,
                    initiatorId: item.initiatorId,
                    initiatorLogin: item.initiatorLogin,
                    responsible: item.responsible,
                    responsibleId: item.responsibleId,
                    responsibleLogin: item.responsibleLogin,
                    count: item.count,
                    eventDate: item.eventDate,
                    endDate: item.endDate,
                    companyLookupId: item.companyLookupId,
                    officeLookupId: item.officeLookupId,
                    roomLookupId: item.roomLookupId,
                    meetingTypeLookupId: item.meetingTypeLookupId
                }, this.webId).subscribe(function (itemResived) {
                    _this.editableReservation.id = itemResived.id;
                    _this.reservationsMailService.createNotify(item);
                    _this.closeModal();
                });
            }
        }
    };
    BookingModalFormComponent.prototype.ngOnInit = function () {
        this.webId =
            this.route.snapshot.data.webId !== 'root'
                ? this.route.snapshot.data.webId
                : null;
        if (this.isCreateItem === true) {
            this.editableReservation.initiatorLogin = this.currentUser;
            this.editableReservation.roomLookupId = this.newEventRoomId;
            this.editableReservation.eventDate = this.newEventDate;
            this.editableReservation.endDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.editableReservation.eventDate).add(0.5, 'hours').toISOString();
            this.editableReservation.eventHeight = this.getEventHeight(this.editableReservation.eventDate, this.editableReservation.endDate);
            if (this.isDublicateItem === false) {
                this.editableReservationDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.newEventDate).format('DD.MM.YYYY');
            }
        }
        this.selectStart = this.convertDateToTime(this.editableReservation.eventDate);
        this.selectEnd = this.convertDateToTime(this.editableReservation.endDate);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookingModalFormComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingModalFormComponent.prototype, "isCreateItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingModalFormComponent.prototype, "modalIsOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookingModalFormComponent.prototype, "newEventDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BookingModalFormComponent.prototype, "newEventRoomId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookingModalFormComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingModalFormComponent.prototype, "groupedReservations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingModalFormComponent.prototype, "editableReservation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookingModalFormComponent.prototype, "editableReservationDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookingModalFormComponent.prototype, "rooms", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookingModalFormComponent.prototype, "meetingTypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookingModalFormComponent.prototype, "participantsString", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingModalFormComponent.prototype, "cell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BookingModalFormComponent.prototype, "editableReservationIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BookingModalFormComponent.prototype, "isDublicateItem", void 0);
    BookingModalFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-modal-form',
            template: __webpack_require__(/*! ./booking-modal-form.component.html */ "./src/app/booking/components/booking-modal-form/booking-modal-form.component.html"),
            styles: [__webpack_require__(/*! ./booking-modal-form.component.scss */ "./src/app/booking/components/booking-modal-form/booking-modal-form.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_booking_services_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_1__["ReservationsService"],
            src_app_booking_services_reservations_mail_reservations_mail_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsMailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], BookingModalFormComponent);
    return BookingModalFormComponent;
}());



/***/ }),

/***/ "./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">Бронирование переговорной</div>\n  </div>\n  <div class=\"title\">Бронирование переговорной</div>\n  <div class=\"date\">\n    {{getDisplayedDate()}}\n  </div>\n  <div class=\"change-date\">\n    <div class=\"left\"(click)=\"filterByToday(directionFilterByDay.yesterday)\"><</div>\n    <div class=\"reset\" (click)=\"filterByToday(directionFilterByDay.today)\">Сегодня</div>\n    <div class=\"right\"(click)=\"filterByToday(directionFilterByDay.tomorrow)\">></div>\n  </div>\n  <div class=\"booking-master\">\n    <input type=\"button\" value=\"Мастер бронирования\" class=\"btn btn-default is-transparent red\" (click)=\"openMasterModal()\" />\n  </div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-booking\">\n        <div class=\"l-booking-categories\">\n          <app-filters>\n            <app-filters-item (click)=\"filterByOfficeId(undefined)\">\n              Все\n            </app-filters-item>\n            <app-filters-item *ngFor=\"let office of offices\" (click)=\"filterByOfficeId(office.id)\">\n              {{office.title}}\n            </app-filters-item>\n          </app-filters>\n        </div>\n        <div class=\"l-mrr\">\n          <div class=\"l-mrr__body\">\n            <div class=\"l-mrr__container\">\n              <div class=\"l-mrr__container-inner\">\n                <div class=\"l-mrr-hours\">\n                  <div class=\"l-mrr-hours__head\">\n                    <b>08:00</b>\n                  </div>\n                  <div class=\"l-mrr-hours__body\">\n                    <div class=\"row\">\n                      <b>08:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>09:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>09:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>10:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>10:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>11:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>11:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>12:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>12:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>13:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>13:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>14:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>14:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>15:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>15:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>16:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>16:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>17:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>17:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>18:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>18:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>19:00</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>19:30</b>\n                    </div>\n                    <div class=\"row\">\n                      <b>20:00</b>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"l-mrr-rooms__list\">\n                  <ng-container *ngFor=\"let room of rooms\">\n                    <div class=\"m-mrr-room\" *ngIf=\"officeId === undefined || room.officeLookupId === officeId\">\n                      <div class=\"m-mrr-room__name\" title=\"{{room.title}}\">{{room.title}}</div>\n                      <div class=\"m-mrr-room__head\">\n                        <div class=\"room-facilities\">\n                          <!-- <i class=\"reference-info\" (click)=\"showInfo=!showInfo\"></i>\n                          <div class=\"info\" *ngIf=\"showInfo\">{{room.info}}</div>\n                          <i class=\"user-count\" title=\"Количество вмещаемых человек: {{room.capacity}}\"></i> -->\n                          <i class=\"projector\" title=\"Проектор/ТВ\" *ngIf=\"room.projector\"></i>\n                          <i class=\"webcam\" title=\"Оборудование для видеоконференции\" *ngIf=\"room.videoStaff\"></i>\n                        </div>\n                      </div>\n                      <div class=\"m-mrr-room__body\" >\n                        <div class=\"room-row\" *ngFor=\"let g of groupedReservations\">\n                          <div class=\"add-reservation\" (click)=\"createEvent(displayedDay, g.date, room.id, g)\">+</div>\n                          <ng-container *ngIf=\"g.list\">\n                            <ng-container *ngFor=\"let reservation of g.list; let i = index\">\n                              <ng-container *ngIf=\"room.officeLookupId == reservation.officeLookupId\">\n                                <ng-container *ngIf=\"room.id == reservation.roomLookupId\">\n                                  <div class=\"m-mrr-card\" style=\"background-color: #00BC9B\" [attr.data-height]=\"reservation.eventHeight\">\n                                    <div class=\"m-mrr-card__header\">\n                                      <div class=\"theme\">{{reservation.title}}</div>\n                                      <div class=\"times\">{{this.getEventTime(reservation.eventDate)}} – {{this.getEventTime(reservation.endDate)}}</div>\n                                    </div>\n                                    <div class=\"m-mrr-card__body\">\n                                      <div class=\"card-info\"><b>Инициатор: </b>{{reservation.initiator}}</div>\n                                      <div class=\"card-info\"><b>Ответственный: </b>{{reservation.responsible}}</div>\n                                      <div class=\"card-info\"><b>Кол-во участников: </b>{{reservation.count}}</div>\n                                      <div class=\"card-info\" *ngIf=\"reservation.description\"><b>Описание: </b>{{reservation.description}}</div>\n                                      <div class=\"card-actions\">\n                                        <i class=\"action edit\" title=\"Редактировать\" (click)=\"openEditorModal(reservation, g, i)\"></i>\n                                        <i class=\"action copy\" title=\"Дублировать\" (click)=\"openDublicateModal(reservation)\"></i>\n                                        <i class=\"action delete\" title=\"Удалить\" (click)=\"showAlert = true\"></i>\n                                        <div class=\"warning-alert\" *ngIf=\"showAlert\">\n                                          <div class=\"text\"><span>Вы действительно хотите удалить элемент?</span></div>\n                                          <div class=\"buttons\">\n                                            <div class=\"inner\">\n                                              <input type=\"button\" value=\"Отмена\" (click)=\"showAlert = false\" />\n                                              <input type=\"button\" value=\"Ок\" (click)=\"remove(reservation); showAlert = false\" />\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </ng-container>\n                              </ng-container>\n                            </ng-container>\n                          </ng-container>\n                        </div>\n                      </div>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"l-booking-master\" style=\"display: none;\">\n          <div class=\"l-booking-master__block\">\n            <div class=\"l-booking-master__header\">\n              <div class=\"title\">\n                Мастер бронирования\n              </div>\n              <div class=\"close\">\n                <input type=\"button\" class=\"btn-close-gray-bold\" (click)=\"resetMaster()\">\n              </div>\n            </div>\n            <div class=\"l-booking-master__body\">\n              <div class=\"first-stage\" [hidden]=\"!isFirstStage\">\n                <div class=\"pick-city\">\n                  <div class=\"title\">\n                    1.Выберите город\n                  </div>\n                  <div class=\"checkblock\" *ngFor=\"let city of cities\" [class.active]=\"active === city\" (click)=\"active = (active === city ? null :city)\">\n                    {{city}}\n                  </div>\n                </div>\n                <div class=\"pick-office\">\n                  <div class=\"title\">\n                    2.Выберите офис\n                  </div>\n                  <div class=\"checkblock\" *ngFor=\"let office of offices\">\n                    {{office.title}}\n                  </div>\n                </div>\n                <div class=\"pick-people\">\n                  <div class=\"title\">\n                    3.Количество участников\n                  </div>\n                  <div class=\"icons\">\n                    <div class=\"human\"></div>\n                    <div class=\"humans\"></div>\n                  </div>\n                  <div class=\"progress\">\n                    <div class=\"progress-inner\" style=\"width: 30%\">\n                      <div class=\"counter\">\n                        8\n                        <div class=\"counter-arrow\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"pick-date\">\n                  <div class=\"header\">\n                    <div class=\"title\">\n                      4.Дата и время\n                    </div>\n                    <div class=\"date\">24.01.2019</div>\n                  </div>\n                  <div class=\"checkblock\" *ngFor=\"let duration of durations\">\n                    {{duration}}\n                  </div>\n                  <div class=\"progress\">\n                    <div class=\"progress-group\">\n                      <div class=\"start\">8:00</div>\n                      <div class=\"end\">20:00</div>\n                      <div class=\"reserved\" style=\"width:20%; left: 15%\">\n                        <div class=\"start\">12:00</div>\n                        <div class=\"end\">14:00</div>\n                      </div>\n                      <div class=\"reserve-period\" style=\"width:20%; left: 60%\">\n                        <div class=\"counter\">\n                          16:30 - 18:30\n                          <div class=\"counter-arrow\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"pick-equipment\">\n                  <div class=\"title\">\n                    5.Оборудование\n                  </div>\n                  <div class=\"checkblock\" *ngFor=\"let item of equipment\">\n                    <div class=\"icon\" [ngStyle]=\"{ 'background-image': 'url(' + item.icon + ')' }\"></div>\n                    <div class=\"text\" appNgslDotdotdot>{{item.title}}</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"second-stage\" [hidden]=\"isFirstStage\">\n                <div class=\"pick-room\">\n                  <div class=\"title\">\n                    1.Выберите переговорные комнаты из доступных\n                  </div>\n                  <div class=\"room-list\">\n                    <div class=\"room-preview\">\n                      <div class=\"image\" style=\"background-image: url(); display: none;\">\n                        <div class=\"gradient\"></div>\n                      </div>\n                      <div class=\"info\">\n                        <div class=\"room-title\">\n                          №301\n                        </div>\n                        <div class=\"city\">\n                          Москва\n                        </div>\n                        <div class=\"seats\">\n                          8 мест\n                        </div>\n                        <div class=\"equipment\">\n                          <i class=\"phone\"></i>\n                          <i class=\"computer\"></i>\n                          <i class=\"projector\"></i>\n                          <i class=\"wi-fi\"></i>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"room-preview\">\n                      <div class=\"image\" style=\"background-image: url(https://atlona.com/wp-content/uploads/2016/06/meeting_room_solution_image1-1024x768.jpg)\">\n                        <div class=\"gradient\"></div>\n                      </div>\n                      <div class=\"info\">\n                        <div class=\"room-title\">\n                          №302\n                        </div>\n                        <div class=\"city\">\n                          Москва\n                        </div>\n                        <div class=\"seats\">\n                          14 мест\n                        </div>\n                        <div class=\"equipment\">\n                          <i class=\"phone\"></i>\n                          <i class=\"computer\"></i>\n                          <i class=\"projector\"></i>\n                          <i class=\"wi-fi\"></i>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"meeting-title\">\n                  <div class=\"title\">\n                    2.Тема встречи\n                  </div>\n                  <input type=\"text\" class=\"large-input\"  />\n                </div>\n                <div class=\"meeting-responsible\">\n                  <div class=\"title\">\n                    3.Ответственный\n                  </div>\n                  <input type=\"text\" class=\"large-input\" />\n                </div>\n                <div class=\"meeting-participants\">\n                  <div class=\"title\">\n                    4.Участники\n                  </div>\n                  <input type=\"text\" class=\"large-input\" placeholder=\"Введите имена или адреса электронной почты...\" />\n                </div>\n              </div>\n              <div class=\"buttons\">\n                <input type=\"button\" value=\"Отменить\" class=\"btn btn-default is-transparent red\" (click)=\"resetMaster()\" />\n                <input type=\"button\" value=\"Далее\" *ngIf=\"isFirstStage\" (click)=\"isFirstStage=!isFirstStage\" class=\"btn btn-default red\" />\n                <input type=\"button\" value=\"Забронировать\" *ngIf=\"!isFirstStage\" class=\"btn btn-default red\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"l-booking-master__overlay\"></div>\n        </div>\n\n        <div class=\"l-edit-card\" *ngIf=\"modalIsOpen\">\n          <app-booking-modal-form\n            [isCreateItem]=\"isCreateItem\"\n            [modalIsOpen]=\"modalIsOpen\"\n            (close)=\"closeModal()\"\n            [groupedReservations]=\"groupedReservations\"\n            [editableReservation]=\"editableReservation\"\n            [editableReservationIndex]=\"editableReservationIndex\"\n            [editableReservationDate]=\"editableReservationDate\"\n            [rooms]=\"rooms\"\n            [meetingTypes]=\"meetingTypes\"\n            [participantsString]=\"participantsString\"\n            [newEventDate]=\"newEventDate\"\n            [newEventRoomId]=\"newEventRoomId\"\n            [currentUser]=\"currentUser\"\n            [cell]=\"cell\"\n            [isDublicateItem]=\"isDublicateItem\"\n          ></app-booking-modal-form>\n        </div>\n        <div class=\"l-master\" *ngIf=\"masterIsOpen\">\n          <app-booking-master-modal-form\n            [masterIsOpen]=\"masterIsOpen\"\n            (close)=\"resetMaster()\"\n            [editableReservation]=\"editableReservation\"\n            [groupedReservations]=\"groupedReservations\"\n            [rooms]=\"rooms\"\n            [meetingTypes]=\"meetingTypes\"\n          ></app-booking-master-modal-form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  max-width: 100%;\n  position: relative; }\n\n.l-page-header .title {\n    display: inline-block; }\n\n.l-page-header .date {\n    display: inline-block;\n    font-size: 24px;\n    color: #a2b2c8;\n    border-bottom: 2px dashed #050505;\n    cursor: pointer;\n    margin-left: 1.5%;\n    margin-right: 4%; }\n\n.l-page-header .change-date {\n    display: inline-block; }\n\n.l-page-header .change-date .left,\n    .l-page-header .change-date .reset,\n    .l-page-header .change-date .right {\n      display: inline-block;\n      border: 1px solid #666666;\n      padding: 10px 15px;\n      box-sizing: border-box;\n      font-size: 14px;\n      color: #000000;\n      cursor: pointer; }\n\n.l-page-header .change-date .reset {\n      padding: 10px 55px;\n      margin: 0 7px; }\n\n.l-page-header .booking-master {\n    position: absolute;\n    right: 35px;\n    bottom: 60px; }\n\n.l-page-header .booking-master .btn {\n      padding: 0 20px; }\n\n.l-booking {\n  padding: 50px 25px;\n  box-sizing: border-box;\n  position: relative; }\n\n.l-booking .l-booking-categories {\n    height: 30px;\n    position: absolute;\n    top: -30px; }\n\n.l-booking .l-mrr .l-mrr__body {\n    position: relative; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container {\n      position: relative;\n      padding: 25px 25px 50px 50px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner {\n        position: relative; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-hours {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          right: 100%;\n          width: 13px;\n          border-right-style: solid;\n          border-right-color: #c1c1c1;\n          border-right-width: 1px;\n          margin-top: 40px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-hours .l-mrr-hours__head {\n            height: 58px;\n            border-bottom-style: solid;\n            border-bottom-color: #e1e1e1;\n            border-bottom-width: 1px;\n            line-height: 29px;\n            position: relative; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-hours .l-mrr-hours__head b {\n              position: absolute;\n              bottom: -14.5px;\n              right: 100%;\n              display: inline-block;\n              min-width: 25px;\n              text-align: center;\n              font-size: 10px;\n              font-weight: 100;\n              color: #817f82;\n              padding-right: 7px;\n              white-space: nowrap;\n              margin-bottom: 0px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-hours .l-mrr-hours__body .row {\n            border-bottom-style: solid;\n            border-bottom-color: #e1e1e1;\n            border-bottom-width: 1px;\n            height: 29px;\n            line-height: 29px;\n            position: relative; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-hours .l-mrr-hours__body .row b {\n              position: absolute;\n              bottom: -14.5px;\n              right: 100%;\n              display: inline-block;\n              min-width: 25px;\n              text-align: center;\n              font-size: 10px;\n              font-weight: 100;\n              color: #817f82;\n              padding-right: 7px;\n              white-space: nowrap; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list {\n          width: 100%;\n          overflow-x: auto;\n          white-space: nowrap;\n          min-height: 840px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room {\n            display: inline-block;\n            width: 330px;\n            border-right-style: solid;\n            border-right-color: #c1c1c1;\n            border-right-width: 1px;\n            vertical-align: top;\n            position: relative;\n            margin-top: 40px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__name {\n              position: absolute;\n              top: -40px;\n              left: 0;\n              width: 100%;\n              font-size: 24px;\n              color: #000000;\n              white-space: nowrap;\n              overflow: hidden;\n              text-overflow: ellipsis; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__head {\n              border-bottom-style: solid;\n              border-bottom-color: #e1e1e1;\n              border-bottom-width: 1px;\n              height: 58px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__head .room-facilities {\n                position: relative;\n                padding: 10px 17.5px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__head .room-facilities i {\n                  display: inline-block;\n                  width: 36px;\n                  height: 36px;\n                  margin-right: 17.5px;\n                  background-color: #f1f1f4;\n                  border-radius: 100%;\n                  background-repeat: no-repeat;\n                  background-position: center;\n                  background-size: cover; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__head .room-facilities i.reference-info {\n                    background-image: url(/assets/icons/icon-mrr-reference-info.svg);\n                    cursor: pointer; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__head .room-facilities i.user-count {\n                    background-image: url(/assets/icons/icon-mrr-user-count.svg); }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__head .room-facilities i.computer {\n                    background-image: url(/assets/icons/icon-mrr-computer.svg); }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__head .room-facilities i.projector {\n                    background-image: url(/assets/icons/icon-mrr-projector.svg); }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__head .room-facilities i.webcam {\n                    background-image: url(/assets/icons/icon-mrr-webcam.svg); }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__head .room-facilities .info {\n                  position: absolute;\n                  top: 55px;\n                  left: 10px;\n                  background-color: #e6e6e6;\n                  padding: 10px;\n                  border-radius: 3px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row {\n              position: relative;\n              font-size: 0;\n              border-bottom-style: solid;\n              border-bottom-color: #e1e1e1;\n              border-bottom-width: 1px;\n              height: 29px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:hover .add-reservation {\n                display: block; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='1']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='2']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='3']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='4']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='5']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='6']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='7']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='8']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='9']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='10']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='11']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='12']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='13']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='14']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='15']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='16']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='17']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='18']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='19']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='20']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='21']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='22']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='23']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='24']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(-n+12) .m-mrr-card[data-height='25']:hover {\n                top: 0; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='1'] {\n                min-height: 30px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='1']:hover {\n                  bottom: 0px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='2'] {\n                min-height: 60px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='2']:hover {\n                  bottom: -30px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='3'] {\n                min-height: 90px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='3']:hover {\n                  bottom: -60px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='4'] {\n                min-height: 120px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='4']:hover {\n                  bottom: -90px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='5'] {\n                min-height: 150px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='5']:hover {\n                  bottom: -120px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='6'] {\n                min-height: 180px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='6']:hover {\n                  bottom: -150px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='7'] {\n                min-height: 210px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='7']:hover {\n                  bottom: -180px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='8'] {\n                min-height: 240px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='8']:hover {\n                  bottom: -210px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='9'] {\n                min-height: 270px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='9']:hover {\n                  bottom: -240px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='10'] {\n                min-height: 300px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='10']:hover {\n                  bottom: -270px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='11'] {\n                min-height: 330px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='11']:hover {\n                  bottom: -300px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='12'] {\n                min-height: 360px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='12']:hover {\n                  bottom: -330px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='13'] {\n                min-height: 390px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='13']:hover {\n                  bottom: -360px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='14'] {\n                min-height: 420px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='14']:hover {\n                  bottom: -390px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='15'] {\n                min-height: 450px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='15']:hover {\n                  bottom: -420px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='16'] {\n                min-height: 480px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='16']:hover {\n                  bottom: -450px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='17'] {\n                min-height: 510px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='17']:hover {\n                  bottom: -480px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='18'] {\n                min-height: 540px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='18']:hover {\n                  bottom: -510px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='19'] {\n                min-height: 570px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='19']:hover {\n                  bottom: -540px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='20'] {\n                min-height: 600px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='20']:hover {\n                  bottom: -570px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='21'] {\n                min-height: 630px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='21']:hover {\n                  bottom: -600px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='22'] {\n                min-height: 660px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='22']:hover {\n                  bottom: -630px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='23'] {\n                min-height: 690px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='23']:hover {\n                  bottom: -660px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='24'] {\n                min-height: 720px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='24']:hover {\n                  bottom: -690px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='25'] {\n                min-height: 750px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row:nth-child(n+12) .m-mrr-card[data-height='25']:hover {\n                  bottom: -720px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card {\n                width: 100%;\n                padding: 12px;\n                box-sizing: border-box;\n                position: absolute;\n                left: 0;\n                z-index: 1;\n                border-top: 1px solid #fff; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"1\"] {\n                  min-height: 30px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"2\"] {\n                  min-height: 60px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"3\"] {\n                  min-height: 90px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"4\"] {\n                  min-height: 120px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"5\"] {\n                  min-height: 150px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"6\"] {\n                  min-height: 180px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"7\"] {\n                  min-height: 210px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"8\"] {\n                  min-height: 240px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"9\"] {\n                  min-height: 270px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"10\"] {\n                  min-height: 300px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"11\"] {\n                  min-height: 330px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"12\"] {\n                  min-height: 360px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"13\"] {\n                  min-height: 390px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"14\"] {\n                  min-height: 420px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"15\"] {\n                  min-height: 450px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"16\"] {\n                  min-height: 480px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"17\"] {\n                  min-height: 510px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"18\"] {\n                  min-height: 540px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"19\"] {\n                  min-height: 570px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"20\"] {\n                  min-height: 600px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"21\"] {\n                  min-height: 630px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"22\"] {\n                  min-height: 660px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"23\"] {\n                  min-height: 690px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"24\"] {\n                  min-height: 720px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height=\"25\"] {\n                  min-height: 750px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height='1'] {\n                  padding: 5px 12px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height='1'] .m-mrr-card__header .times {\n                    display: none; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height='1']:hover {\n                    padding: 5px 10px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card[data-height='1']:hover .m-mrr-card__header .times {\n                      display: block; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card:hover {\n                  border: 2px solid #ffffff;\n                  padding: 10px;\n                  z-index: 10; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card:hover .m-mrr-card__body {\n                    display: block; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__header {\n                  font-size: 14px;\n                  line-height: 18px;\n                  font-weight: bold;\n                  color: #ffffff; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__header .theme {\n                    white-space: nowrap;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                    text-align: justify; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__body {\n                  display: none;\n                  font-size: 14px;\n                  line-height: 21px;\n                  color: #ffffff;\n                  margin-top: 23px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__body .card-info {\n                    white-space: nowrap;\n                    overflow: hidden;\n                    text-overflow: ellipsis; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__body .card-info b {\n                      font-weight: normal; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__body .card-actions {\n                    margin-top: 30px; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__body .card-actions .action {\n                      display: inline-block;\n                      width: 36px;\n                      height: 36px;\n                      margin-right: 17.5px;\n                      background-color: #fafafa;\n                      border-radius: 100%;\n                      background-repeat: no-repeat;\n                      background-position: center;\n                      background-size: cover;\n                      cursor: pointer; }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__body .card-actions .action.edit {\n                        background-image: url(/assets/icons/icon-mrr-edit.svg); }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__body .card-actions .action.copy {\n                        background-image: url(/assets/icons/icon-mrr-copy.svg); }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .m-mrr-card .m-mrr-card__body .card-actions .action.delete {\n                        background-image: url(/assets/icons/icon-mrr-delete.svg); }\n\n.l-booking .l-mrr .l-mrr__body .l-mrr__container .l-mrr__container-inner .l-mrr-rooms__list .m-mrr-room .m-mrr-room__body .room-row .add-reservation {\n                display: none;\n                font-size: 18px;\n                text-align: center;\n                line-height: 30px;\n                cursor: pointer;\n                background-color: #f7f7f7; }\n\n.l-booking .l-booking-master .l-booking-master__block {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 50%;\n    z-index: 99999;\n    background-color: #fff; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__header {\n      position: relative;\n      background-color: #dedfe0;\n      height: 20%;\n      padding: 4% 5% 4% 15%;\n      box-sizing: border-box;\n      color: #050505;\n      background-image: url(/assets/icons/icon-booking-master.svg);\n      background-size: 20% 30%;\n      background-position: left top 50%;\n      background-repeat: no-repeat; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__header .title {\n        position: absolute;\n        left: 15%;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n            -ms-transform: translateY(-50%);\n                transform: translateY(-50%);\n        font-size: 24px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        line-height: 30px;\n        max-height: 30px;\n        font-weight: bold; }\n\n@media (min-width: 1440px) {\n          .l-booking .l-booking-master .l-booking-master__block .l-booking-master__header .title {\n            font-size: calc( 0.02083333 * 100vw + -6px);\n            line-height: calc( 0.02083333 * 100vw + 0px);\n            max-height: calc( 0.02083333 * 100vw + 0px);\n            -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n          .l-booking .l-booking-master .l-booking-master__block .l-booking-master__header .title {\n            font-size: 34px;\n            line-height: 40px;\n            max-height: 40px; } }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__header .close {\n        position: absolute;\n        right: 35px;\n        top: 35px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body {\n      width: 100%;\n      height: 80%;\n      overflow: auto;\n      margin: 0 auto;\n      padding: 30px 8%;\n      box-sizing: border-box; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-city {\n        margin-bottom: 45px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-office {\n        margin-bottom: 55px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-office .checkblock {\n          width: 190px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people {\n        margin-bottom: 60px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .icons {\n          height: 20px;\n          margin-bottom: 15px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .icons .human {\n            width: 9px;\n            height: 19px;\n            background-image: url(/assets/icons/icon-human.svg);\n            background-size: cover;\n            float: left; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .icons .humans {\n            width: 21px;\n            height: 19px;\n            background-image: url(/assets/icons/icon-more-humans.svg);\n            background-size: cover;\n            float: right; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .progress {\n          background-color: #f1f1f4; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .progress .progress-inner {\n            position: relative;\n            height: 8px;\n            background-color: #768692; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .progress .progress-inner:after {\n              content: '';\n              position: absolute;\n              right: -7px;\n              top: 50%;\n              -webkit-transform: translateY(-50%);\n                  -ms-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              display: block;\n              width: 14px;\n              height: 14px;\n              border-radius: 100%;\n              background-color: #050505; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .progress .progress-inner .counter {\n              position: absolute;\n              right: -15px;\n              top: -45px;\n              padding: 0 12px;\n              box-sizing: border-box;\n              height: 30px;\n              background-color: #f1f1f4;\n              font-size: 16px;\n              color: #768692;\n              line-height: 30px;\n              text-align: center; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .progress .progress-inner .counter .counter-arrow {\n                position: absolute;\n                top: 28px;\n                left: 50%;\n                -webkit-transform: translateX(-50%);\n                    -ms-transform: translateX(-50%);\n                        transform: translateX(-50%);\n                display: block;\n                width: 1rem;\n                height: 0.5rem; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .progress .progress-inner .counter .counter-arrow:after {\n                  position: absolute;\n                  display: block;\n                  content: '';\n                  border-color: transparent;\n                  border-style: solid; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-people .progress .progress-inner .counter .counter-arrow:after {\n                  top: 2px;\n                  border-top-color: #f1f1f4;\n                  border-width: 0.5rem 0.5rem 0 0.5rem; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .title {\n        display: inline-block; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .date {\n        display: inline-block;\n        font-size: 24px;\n        color: #a2b2c8;\n        border-bottom: 2px dashed #050505;\n        padding-bottom: 5px;\n        box-sizing: border-box;\n        float: right;\n        cursor: pointer; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .checkblock {\n        width: auto;\n        padding: 10px 15px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress {\n        background-color: #f1f1f4;\n        margin: 80px 0; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group {\n          position: relative;\n          height: 8px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group:before, .l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group:after {\n            content: '';\n            display: block;\n            height: 4px;\n            width: 1px;\n            background-color: #768692;\n            position: absolute;\n            top: 10px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group:before {\n            left: 0; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group:after {\n            right: 0; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .start,\n          .l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .end {\n            position: absolute;\n            top: 20px;\n            font-size: 14px;\n            color: #768692; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .start {\n            left: -17px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .end {\n            right: -17px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserved {\n            position: absolute;\n            top: 0;\n            background-color: #dd1e25;\n            height: 8px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserved:before, .l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserved:after {\n              content: '';\n              display: block;\n              height: 4px;\n              width: 1px;\n              background-color: #768692;\n              position: absolute;\n              top: 10px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserved:before {\n              left: 0; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserved:after {\n              right: 0; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserved .start,\n            .l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserved .end {\n              position: absolute;\n              top: 20px;\n              font-size: 14px;\n              color: #768692; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserved .start {\n              left: -17px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserved .end {\n              right: -17px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserve-period {\n            position: absolute;\n            top: 0;\n            background-color: #768692;\n            height: 8px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserve-period:before, .l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserve-period:after {\n              content: '';\n              position: absolute;\n              top: 50%;\n              -webkit-transform: translateY(-50%);\n                  -ms-transform: translateY(-50%);\n                      transform: translateY(-50%);\n              display: block;\n              width: 14px;\n              height: 14px;\n              border-radius: 100%;\n              background-color: #050505; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserve-period:before {\n              left: -7px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserve-period:after {\n              right: -7px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserve-period .counter {\n              position: absolute;\n              left: 50%;\n              -webkit-transform: translateX(-50%);\n                  -ms-transform: translateX(-50%);\n                      transform: translateX(-50%);\n              top: -45px;\n              width: 120px;\n              height: 30px;\n              background-color: #f1f1f4;\n              font-size: 16px;\n              color: #768692;\n              line-height: 30px;\n              text-align: center; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserve-period .counter .counter-arrow {\n                position: absolute;\n                top: 28px;\n                left: 50%;\n                -webkit-transform: translateX(-50%);\n                    -ms-transform: translateX(-50%);\n                        transform: translateX(-50%);\n                display: block;\n                width: 1rem;\n                height: 0.5rem; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserve-period .counter .counter-arrow:after {\n                  position: absolute;\n                  display: block;\n                  content: '';\n                  border-color: transparent;\n                  border-style: solid; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-date .progress .progress-group .reserve-period .counter .counter-arrow:after {\n                  top: 2px;\n                  border-top-color: #f1f1f4;\n                  border-width: 0.5rem 0.5rem 0 0.5rem; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-equipment {\n        margin-bottom: 70px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-equipment .checkblock {\n          position: relative;\n          height: 96px;\n          width: 96px;\n          padding: 7px;\n          padding-top: 50px;\n          box-sizing: border-box;\n          background-color: #768692; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-equipment .checkblock .icon {\n            position: absolute;\n            top: 15px;\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n                -ms-transform: translateX(-50%);\n                    transform: translateX(-50%);\n            width: 30px;\n            height: 30px;\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-position: center; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-equipment .checkblock .text {\n            box-sizing: border-box;\n            color: #fff;\n            font-size: 16px;\n            line-height: 19px;\n            max-height: 40px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-equipment .checkblock.active {\n            color: #fff; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-list {\n        margin-bottom: 45px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview {\n        position: relative;\n        display: inline-block;\n        margin-right: 15px;\n        margin-bottom: 15px;\n        width: 150px;\n        height: 150px;\n        background-color: #768692;\n        color: #fff;\n        cursor: pointer; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .image {\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          background-repeat: no-repeat;\n          background-size: cover; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .image .gradient {\n            position: absolute;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            background-color: #000;\n            opacity: 0.4; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .info {\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          padding: 15px;\n          box-sizing: border-box; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .room-title {\n          font-size: 24px;\n          margin-bottom: 10px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .city {\n          margin-bottom: 6px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .equipment {\n          position: absolute;\n          left: 15px;\n          bottom: 15px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .equipment i {\n            display: inline-block;\n            width: 15px;\n            height: 15px;\n            margin-right: 12px;\n            background-repeat: no-repeat;\n            background-size: contain; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .equipment .phone {\n            background-image: url(/assets/icons/icon-mrr-master-phone.svg); }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .equipment .computer {\n            background-image: url(/assets/icons/icon-mrr-master-computer.svg); }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .equipment .projector {\n            background-image: url(/assets/icons/icon-mrr-master-projector.svg); }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .pick-room .room-preview .equipment .wi-fi {\n            background-image: url(/assets/icons/icon-mrr-master-wi-fi.svg); }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .meeting-title .large-input,\n      .l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .meeting-responsible .large-input,\n      .l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .meeting-participants .large-input {\n        width: 100%;\n        height: 70px;\n        border: 1px solid #dedede;\n        font-size: 16px;\n        margin-bottom: 65px;\n        padding: 0 23px;\n        box-sizing: border-box; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .buttons {\n        text-align: right; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .buttons .btn {\n          width: 155px;\n          padding: 0 35px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .buttons .btn:first-child {\n            margin-right: 30px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .buttons .btn:last-child {\n            padding: 0 13px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .title {\n        font-size: 24px;\n        color: #404040;\n        margin-bottom: 20px; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .checkblock {\n        display: inline-block;\n        font-size: 16px;\n        line-height: 20px;\n        color: #7e8287;\n        background-color: #f1f1f4;\n        padding: 10px;\n        box-sizing: border-box;\n        width: 170px;\n        margin-right: 10px;\n        margin-bottom: 10px;\n        vertical-align: top;\n        cursor: pointer; }\n\n.l-booking .l-booking-master .l-booking-master__block .l-booking-master__body .checkblock.active {\n          color: #fff;\n          background-color: #768692; }\n\n.l-booking .l-booking-master .l-booking-master__overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 99998; }\n\n.warning-alert {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  background-color: #fff;\n  z-index: 25; }\n\n.warning-alert .text {\n    height: 65%;\n    position: relative; }\n\n.warning-alert .text span {\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      padding: 0 10px;\n      box-sizing: border-box;\n      font-weight: 400;\n      font-size: 16px;\n      text-align: center;\n      color: #000;\n      white-space: normal; }\n\n.warning-alert .buttons {\n    height: 35%;\n    font-size: 0;\n    position: relative; }\n\n.warning-alert .buttons .inner {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      right: 0;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      text-align: center; }\n\n.warning-alert .buttons input[type=\"button\"] {\n      padding: 0;\n      margin: 0;\n      border: 0;\n      min-width: 0;\n      background-color: transparent;\n      cursor: pointer;\n      display: inline-block;\n      vertical-align: top;\n      font-size: 18px;\n      height: 45px;\n      color: #fff;\n      background-color: #dd1e25;\n      border: none;\n      border-radius: 5px;\n      padding: 0 25px;\n      box-sizing: border-box;\n      display: inline-block;\n      white-space: nowrap;\n      text-decoration: none; }\n\n.warning-alert .buttons input[type=\"button\"]:focus {\n        outline: none; }\n\n.warning-alert .buttons input[type=\"button\"] + input[type=\"button\"] {\n        margin-left: 15px; }\n"

/***/ }),

/***/ "./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MeetingRoomReservationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingRoomReservationPageComponent", function() { return MeetingRoomReservationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var src_app_booking_services_offices_offices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/booking/services/offices/offices.service */ "./src/app/booking/services/offices/offices.service.ts");
/* harmony import */ var src_app_booking_services_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/booking/services/reservations/reservations.service */ "./src/app/booking/services/reservations/reservations.service.ts");
/* harmony import */ var src_app_booking_services_rooms_rooms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/booking/services/rooms/rooms.service */ "./src/app/booking/services/rooms/rooms.service.ts");
/* harmony import */ var src_app_booking_services_meeting_types_meeting_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/booking/services/meeting-types/meeting-types.service */ "./src/app/booking/services/meeting-types/meeting-types.service.ts");
/* harmony import */ var src_app_booking_services_reservations_mail_reservations_mail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/booking/services/reservations-mail/reservations-mail.service */ "./src/app/booking/services/reservations-mail/reservations-mail.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MeetingRoomReservationPageComponent = /** @class */ (function () {
    function MeetingRoomReservationPageComponent(sharepointService, sidebarService, officesService, route, roomsService, reservationsService, meetingTypesService, reservationsMailService) {
        this.sharepointService = sharepointService;
        this.sidebarService = sidebarService;
        this.officesService = officesService;
        this.route = route;
        this.roomsService = roomsService;
        this.reservationsService = reservationsService;
        this.meetingTypesService = meetingTypesService;
        this.reservationsMailService = reservationsMailService;
        this.webId = undefined;
        this.offices = [];
        this.rooms = [];
        this.groupedReservations = [];
        this.editableReservation = [];
        this.meetingTypes = [];
        this.participantsString = '';
        this.currentUser = this.sharepointService.getCurrentUserContext().userLoginName;
        this.newEventDate = undefined;
        this.newEventRoomId = undefined;
        this.isCreateItem = true;
        this.isDublicateItem = true;
        this.masterIsOpen = false;
        this.modalIsOpen = false;
        this.showInfo = false;
        this.isFirstStage = true;
        this.showAlert = false;
        this.isDeleteItem = undefined;
        this.cities = ['Москва', 'Владимир', 'Нижний Новогород', 'Урюпинск'];
        this.durations = ['30 минут', '1 час', '1,5 часа', '2 часа', '2,5 часа', '3 часа', '4 часа', '5 часов'];
        this.equipment = [
            {
                icon: 'assets/icons/icon-mrr-master-phone.svg',
                title: 'Телефон'
            },
            {
                icon: 'assets/icons/icon-mrr-master-computer.svg',
                title: 'Компьютер'
            },
            {
                icon: 'assets/icons/icon-mrr-master-projector.svg',
                title: 'Проектор'
            },
            {
                icon: 'assets/icons/icon-mrr-master-wi-fi.svg',
                title: 'Wi-Fi'
            }
        ];
        this.displayedDay = moment__WEBPACK_IMPORTED_MODULE_9__();
        this.directionFilterByDay = {
            yesterday: 0, today: 1, tomorrow: 2
        };
        this.officeId = undefined;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    MeetingRoomReservationPageComponent.prototype.openMasterModal = function () {
        this.masterIsOpen = true;
    };
    MeetingRoomReservationPageComponent.prototype.createEvent = function (creationDate, startTime, room, cell) {
        this.isCreateItem = true;
        this.participantsString = null;
        this.modalIsOpen = true;
        creationDate = creationDate.format('DD.MM.YYYY');
        this.newEventDate = moment__WEBPACK_IMPORTED_MODULE_9__(creationDate + ':' + startTime, 'DD.MM.YYYY:HH:mm').toISOString();
        this.newEventRoomId = room;
        this.cell = cell;
        this.isDublicateItem = false;
    };
    MeetingRoomReservationPageComponent.prototype.openEditorModal = function (reservation, cell, index) {
        var _this = this;
        reservation['participants'].forEach(function (element) {
            _this.participantsString += (_this.participantsString.length === 0) ? element.UserName : ';' + element.UserName;
        });
        this.editableReservation = JSON.parse(JSON.stringify(reservation));
        this.editableReservationDate = moment__WEBPACK_IMPORTED_MODULE_9__(reservation.eventDate).format('DD.MM.YYYY');
        this.isCreateItem = false;
        this.modalIsOpen = true;
        this.cell = cell;
        this.editableReservationIndex = index;
    };
    MeetingRoomReservationPageComponent.prototype.openDublicateModal = function (reservation) {
        var _this = this;
        reservation['participants'].forEach(function (element) {
            _this.participantsString += (_this.participantsString.length === 0) ? element.UserName : ';' + element.UserName;
        });
        this.editableReservation = JSON.parse(JSON.stringify(reservation));
        this.editableReservationDate = moment__WEBPACK_IMPORTED_MODULE_9__(reservation.eventDate).format('DD.MM.YYYY');
        this.editableReservationDate = null;
        this.editableReservation['eventDate'] = null;
        this.editableReservation['endDate'] = null;
        this.editableReservation['roomLookupId'] = null;
        this.isCreateItem = true;
        this.isDublicateItem = true;
        this.modalIsOpen = true;
    };
    MeetingRoomReservationPageComponent.prototype.closeModal = function () {
        this.modalIsOpen = false;
        this.editableReservation = [];
        this.participantsString = '';
    };
    MeetingRoomReservationPageComponent.prototype.resetMaster = function () {
        this.masterIsOpen = false;
    };
    MeetingRoomReservationPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webId =
            this.route.snapshot.data.webId !== 'root'
                ? this.route.snapshot.data.webId
                : null;
        this.officesService.getItems({ webId: this.webId }).subscribe(function (offices) {
            _this.offices = offices;
        });
        this.roomsService.getItems({ webId: this.webId }).subscribe(function (rooms) {
            _this.rooms = rooms;
        });
        this.meetingTypesService.getItems({ webId: this.webId }).subscribe(function (meetingTypes) {
            _this.meetingTypes = meetingTypes;
        });
        var today = this.displayedDay.startOf('day').toISOString();
        var tomorrow = this.displayedDay.endOf('day').toISOString();
        this.getGroupedReservationsByDay(today, tomorrow, function (groupedReservations) {
            _this.groupedReservations = groupedReservations;
        });
    };
    MeetingRoomReservationPageComponent.prototype.filterByOfficeId = function (id) {
        this.officeId = id;
    };
    MeetingRoomReservationPageComponent.prototype.filterByToday = function (direction) {
        var _this = this;
        var dateStart;
        var dateEnd;
        switch (direction) {
            case this.directionFilterByDay.yesterday: {
                dateEnd = this.displayedDay.startOf('day').toISOString();
                dateStart = this.displayedDay.subtract(1, 'days').startOf('day').toISOString();
                break;
            }
            case this.directionFilterByDay.today: {
                dateStart = moment__WEBPACK_IMPORTED_MODULE_9__().startOf('day').toISOString();
                dateEnd = moment__WEBPACK_IMPORTED_MODULE_9__().add(1, 'days').startOf('day').toISOString();
                this.displayedDay = moment__WEBPACK_IMPORTED_MODULE_9__();
                break;
            }
            default: {
                dateStart = this.displayedDay.add(1, 'days').startOf('day').toISOString();
                dateEnd = this.displayedDay.endOf('day').toISOString();
                break;
            }
        }
        this.getGroupedReservationsByDay(dateStart, dateEnd, function (groupedReservations) {
            _this.groupedReservations = groupedReservations;
            _this.filterByOfficeId(_this.officeId);
        });
    };
    MeetingRoomReservationPageComponent.prototype.getGroupedReservationsByDay = function (dateStart, dateEnd, returnReservations) {
        var _this = this;
        this.reservationsService.getItems({
            filter: "EventDate ge datetime'" + dateStart + "' and EventDate lt'" + dateEnd + "'",
            webId: this.webId
        }).subscribe(function (reservations) {
            var groupedByDate = lodash__WEBPACK_IMPORTED_MODULE_8__["groupBy"](reservations, function (reservation) { return _this.getEventTime(reservation.eventDate); });
            var timeLine = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
                '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];
            var allReservations = [];
            timeLine.forEach(function (time) {
                allReservations.push({
                    date: time,
                    list: groupedByDate[time]
                });
            });
            returnReservations(allReservations);
        });
    };
    MeetingRoomReservationPageComponent.prototype.getEventTime = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(date).format('HH:mm');
    };
    MeetingRoomReservationPageComponent.prototype.getDisplayedDate = function () {
        return this.displayedDay.format('DD.MM.YYYY');
    };
    MeetingRoomReservationPageComponent.prototype.remove = function (item) {
        var _this = this;
        this.reservationsService.deleteItem(item)
            .subscribe(function () {
            _this.groupedReservations.forEach(function (time) {
                if (time.list !== undefined) {
                    time.list = time.list.filter(function (i) { return i['id'] !== item['id']; });
                }
            });
            _this.reservationsMailService.removeNotify(item);
        });
    };
    MeetingRoomReservationPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meeting-room-reservation-page',
            template: __webpack_require__(/*! ./meeting-room-reservation-page.component.html */ "./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.html"),
            styles: [__webpack_require__(/*! ./meeting-room-reservation-page.component.scss */ "./src/app/booking/components/meeting-room-reservation-page/meeting-room-reservation-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__["SharepointService"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"],
            src_app_booking_services_offices_offices_service__WEBPACK_IMPORTED_MODULE_3__["OfficesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            src_app_booking_services_rooms_rooms_service__WEBPACK_IMPORTED_MODULE_5__["RoomsService"],
            src_app_booking_services_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_4__["ReservationsService"],
            src_app_booking_services_meeting_types_meeting_types_service__WEBPACK_IMPORTED_MODULE_6__["MeetingTypesService"],
            src_app_booking_services_reservations_mail_reservations_mail_service__WEBPACK_IMPORTED_MODULE_7__["ReservationsMailService"]])
    ], MeetingRoomReservationPageComponent);
    return MeetingRoomReservationPageComponent;
}());



/***/ }),

/***/ "./src/app/booking/services/meeting-types/meeting-types.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/booking/services/meeting-types/meeting-types.service.ts ***!
  \*************************************************************************/
/*! exports provided: MeetingTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingTypesService", function() { return MeetingTypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/list-items-service */ "./src/app/services/list-items-service.ts");
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


var MeetingTypesService = /** @class */ (function (_super) {
    __extends(MeetingTypesService, _super);
    function MeetingTypesService() {
        return _super.call(this) || this;
    }
    MeetingTypesService.prototype.getListRelativePath = function () {
        return '/Lists/slMeetingTypes';
    };
    MeetingTypesService.prototype.getListTitle = function () {
        return 'Типы встреч';
    };
    MeetingTypesService.prototype.getSelect = function () {
        return 'Id, Title';
    };
    MeetingTypesService.prototype.getExpand = function () {
        return null;
    };
    MeetingTypesService.prototype.getOrderBy = function () {
        return null;
    };
    MeetingTypesService.prototype.getTop = function () {
        return null;
    };
    MeetingTypesService.prototype.getCachingOptions = function () {
        return null;
    };
    MeetingTypesService.prototype.convertListItemToEntity = function (item) {
        var meetingTypes = {
            id: item.Id,
            title: item.Title
        };
        return meetingTypes;
    };
    MeetingTypesService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    MeetingTypesService.prototype.getMockItems = function () {
        return [{ id: 1, title: 'Собеседование' }, { id: 2, title: 'Встреча' }, { id: 3, title: 'Совещание' }];
    };
    MeetingTypesService.prototype.isMock = function () {
        return false;
    };
    MeetingTypesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MeetingTypesService);
    return MeetingTypesService;
}(_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/booking/services/offices/offices.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/booking/services/offices/offices.service.ts ***!
  \*************************************************************/
/*! exports provided: OfficesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesService", function() { return OfficesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/list-items-service */ "./src/app/services/list-items-service.ts");
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


var OfficesService = /** @class */ (function (_super) {
    __extends(OfficesService, _super);
    function OfficesService() {
        return _super.call(this) || this;
    }
    OfficesService.prototype.getListRelativePath = function () {
        return '/Lists/slOffices';
    };
    OfficesService.prototype.getListTitle = function () {
        return 'Офисы';
    };
    OfficesService.prototype.getSelect = function () {
        return 'Id,Title';
    };
    OfficesService.prototype.getExpand = function () {
        return null;
    };
    OfficesService.prototype.getOrderBy = function () {
        return null;
    };
    OfficesService.prototype.getTop = function () {
        return null;
    };
    OfficesService.prototype.getCachingOptions = function () {
        return null;
    };
    OfficesService.prototype.convertListItemToEntity = function (item) {
        var offices = {
            id: item.Id,
            title: item.Title
        };
        return offices;
    };
    OfficesService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    OfficesService.prototype.getMockItems = function () {
        return [{ id: 1, title: 'ЛГОК' }, { id: 2, title: 'МГОК' }, { id: 3, title: 'ОЭМК' }];
    };
    OfficesService.prototype.isMock = function () {
        return false;
    };
    OfficesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], OfficesService);
    return OfficesService;
}(_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/booking/services/reservations-mail/reservations-mail.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/booking/services/reservations-mail/reservations-mail.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ReservationsMailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsMailService", function() { return ReservationsMailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_mail_mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/mail/mail.service */ "./src/app/shared/services/mail/mail.service.ts");
/* harmony import */ var src_app_booking_services_rooms_rooms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/booking/services/rooms/rooms.service */ "./src/app/booking/services/rooms/rooms.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReservationsMailService = /** @class */ (function () {
    function ReservationsMailService(roomsService, mailService) {
        var _this = this;
        this.roomsService = roomsService;
        this.mailService = mailService;
        this.rooms = [];
        this.roomsService.getItems().subscribe(function (rooms) {
            _this.rooms = rooms;
        });
    }
    ReservationsMailService.prototype.createNotify = function (item) {
        var eventDate = moment__WEBPACK_IMPORTED_MODULE_3__(item.eventDate).format('DD.MM.YYYY' + ' в ' + 'HH:mm');
        var roomTitle = '';
        this.rooms.forEach(function (room) {
            if (room.id === item.roomLookupId) {
                roomTitle = room.title;
            }
        });
        var subject = 'Встреча';
        var body = 'Встреча запланирована на ' + eventDate + ', переговорная ' + roomTitle;
        var recipients = '';
        item['participants'].forEach(function (element) {
            recipients += (recipients.length === 0) ? element.EMail : ';' + element.EMail;
        });
        var recipientsArr = recipients.split(';');
        console.log('Создал');
        console.log(recipientsArr);
        console.log(subject);
        console.log(body);
        this.mailService.sendEmailByCurrentUser(recipientsArr, subject, body);
    };
    ReservationsMailService.prototype.editTimeNotify = function (item, oldEventDate) {
        var eventDate = moment__WEBPACK_IMPORTED_MODULE_3__(item.eventDate).format('HH:mm');
        var oldDate = moment__WEBPACK_IMPORTED_MODULE_3__(oldEventDate).format('DD.MM.YYYY' + ' в ' + 'HH:mm');
        var subject = 'Время встречи изменено';
        var body = 'Встреча, запланированная на ' + oldDate + ' перенесена на ' + eventDate;
        var recipients = '';
        item['participants'].forEach(function (element) {
            recipients += (recipients.length === 0) ? element.EMail : ';' + element.EMail;
        });
        var recipientsArr = recipients.split(';');
        console.log('Изменил');
        console.log(recipientsArr);
        console.log(subject);
        console.log(body);
        this.mailService.sendEmailByCurrentUser(recipientsArr, subject, body);
    };
    ReservationsMailService.prototype.editDateNotify = function (item, oldEventDate) {
        var eventDate = moment__WEBPACK_IMPORTED_MODULE_3__(item.eventDate).format('DD.MM.YYYY' + ' в ' + 'HH:mm');
        var oldDate = moment__WEBPACK_IMPORTED_MODULE_3__(oldEventDate).format('DD.MM.YYYY' + ' в ' + 'HH:mm');
        var subject = 'Время и дата встречи изменено';
        var body = 'Встреча, запланированная на ' + oldDate + ' перенесена на ' + eventDate;
        var recipients = '';
        item['participants'].forEach(function (element) {
            recipients += (recipients.length === 0) ? element.EMail : ';' + element.EMail;
        });
        var recipientsArr = recipients.split(';');
        console.log('Изменил');
        console.log(recipientsArr);
        console.log(subject);
        console.log(body);
        this.mailService.sendEmailByCurrentUser(recipientsArr, subject, body);
    };
    ReservationsMailService.prototype.removeNotify = function (item) {
        var eventDate = moment__WEBPACK_IMPORTED_MODULE_3__(item.eventDate).format('DD.MM.YYYY' + ' в ' + 'HH:mm');
        var subject = 'Встреча отменена';
        var body = 'Запланированная встреча на ' + eventDate + ', переговорная ' + item.roomLookupTitle + ' отменена';
        var recipients = '';
        item['participants'].forEach(function (element) {
            recipients += (recipients.length === 0) ? element.EMail : ';' + element.EMail;
        });
        var recipientsArr = recipients.split(';');
        console.log('Удалил');
        console.log(recipientsArr);
        console.log(subject);
        console.log(body);
        this.mailService.sendEmailByCurrentUser(recipientsArr, subject, body);
    };
    ReservationsMailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_booking_services_rooms_rooms_service__WEBPACK_IMPORTED_MODULE_2__["RoomsService"],
            src_app_shared_services_mail_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"]])
    ], ReservationsMailService);
    return ReservationsMailService;
}());



/***/ }),

/***/ "./src/app/booking/services/reservations/reservations.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/booking/services/reservations/reservations.service.ts ***!
  \***********************************************************************/
/*! exports provided: ReservationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsService", function() { return ReservationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/list-items-service */ "./src/app/services/list-items-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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



var ReservationsService = /** @class */ (function (_super) {
    __extends(ReservationsService, _super);
    function ReservationsService() {
        return _super.call(this) || this;
    }
    ReservationsService.prototype.getListRelativePath = function () {
        return '/Lists/slReservations';
    };
    ReservationsService.prototype.getListTitle = function () {
        return 'Бронирование переговорной';
    };
    ReservationsService.prototype.getSelect = function () {
        return "Id, Title, EventDate, EndDate, slOfficeLookup/Title, slOfficeLookup/Id,\n    slParticipants/Title, slParticipants/UserName, slParticipants/EMail, slParticipants/Id, slVideoStaff, slProjector, slTheme,\n    slDescription, slRoomLookup/Title, slRoomLookup/Id, slMeetingTypeLookup/Title, slMeetingTypeLookup/Id, slInitiator/Id,\n    slInitiator/Title, slInitiator/UserName,slResponsible/Id, slResponsible/Title, slResponsible/UserName, slCount";
    };
    ReservationsService.prototype.getExpand = function () {
        return 'slOfficeLookup, slRoomLookup, slMeetingTypeLookup, slParticipants, slInitiator, slResponsible';
    };
    ReservationsService.prototype.getOrderBy = function () {
        return null;
    };
    ReservationsService.prototype.getTop = function () {
        return null;
    };
    ReservationsService.prototype.getCachingOptions = function () {
        return null;
    };
    ReservationsService.prototype.convertListItemToEntity = function (item) {
        var reservations = {
            id: item.Id,
            title: item.Title,
            participants: item.slParticipants,
            videoStaff: item.slVideoStaff,
            projector: item.slProjector,
            description: item.slDescription,
            initiatorId: item.slInitiator.Id,
            initiator: item.slInitiator.Title,
            initiatorLogin: item.slInitiator.UserName,
            responsibleId: item.slResponsible.Id,
            responsible: item.slResponsible.Title,
            responsibleLogin: item.slResponsible.UserName,
            count: item.slCount,
            eventDate: item.EventDate,
            endDate: item.EndDate,
            companyLookupId: (item.slCompanyLookup === undefined ? undefined : item.slCompanyLookup.Id),
            companyLookupTitle: (item.slCompanyLookup === undefined ? undefined : item.slCompanyLookup.Title),
            officeLookupId: item.slOfficeLookup.Id,
            officeLookupTitle: item.slOfficeLookup.Title,
            roomLookupId: item.slRoomLookup.Id,
            roomLookupTitle: item.slRoomLookup.Title,
            meetingTypeLookupId: item.slMeetingTypeLookup.Id,
            meetingTypeLookupTitle: item.slMeetingTypeLookup.Title
        };
        reservations.eventHeight = this.getEventHeight(reservations.eventDate, reservations.endDate);
        return reservations;
    };
    ReservationsService.prototype.convertEntityToListItem = function (entity) {
        console.log('entity ', entity);
        return {
            Id: entity.id,
            Title: entity.title,
            slParticipantsId: entity.participants,
            slVideoStaff: entity.videoStaff,
            slProjector: entity.projector,
            slDescription: entity.description,
            slInitiatorId: entity.initiatorId,
            slResponsibleId: entity.responsibleId,
            slCount: entity.count,
            EventDate: entity.eventDate,
            EndDate: entity.endDate,
            slCompanyLookupId: entity.companyLookupId,
            slOfficeLookupId: entity.officeLookupId,
            slRoomLookupId: entity.roomLookupId,
            slMeetingTypeLookupId: entity.meetingTypeLookupId
        };
    };
    ReservationsService.prototype.getMockItems = function () {
        // return [{ id: 1, title: 'Первое бронирование' }, { id: 2, title: 'Второе бронирование' }, { id: 3, title: 'Третье бронирование' }];
        return null;
    };
    ReservationsService.prototype.isMock = function () {
        return false;
    };
    ReservationsService.prototype.getEventHeight = function (eventDate, endDate) {
        var timeStart = moment__WEBPACK_IMPORTED_MODULE_2__(eventDate);
        var timeEnd = moment__WEBPACK_IMPORTED_MODULE_2__(endDate);
        var eventHeight = timeEnd.diff(timeStart, 'hours', true);
        return eventHeight / .5;
    };
    ReservationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ReservationsService);
    return ReservationsService;
}(_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/booking/services/rooms/rooms.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/booking/services/rooms/rooms.service.ts ***!
  \*********************************************************/
/*! exports provided: RoomsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsService", function() { return RoomsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/list-items-service */ "./src/app/services/list-items-service.ts");
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


var RoomsService = /** @class */ (function (_super) {
    __extends(RoomsService, _super);
    function RoomsService() {
        return _super.call(this) || this;
    }
    RoomsService.prototype.getListRelativePath = function () {
        return '/Lists/slRooms';
    };
    RoomsService.prototype.getListTitle = function () {
        return 'Переговорные';
    };
    RoomsService.prototype.getSelect = function () {
        return 'Id, Title, slVideoStaff, slProjector, slOfficeLookup/Title, slOfficeLookup/Id';
    };
    RoomsService.prototype.getExpand = function () {
        return 'slOfficeLookup';
    };
    RoomsService.prototype.getOrderBy = function () {
        return null;
    };
    RoomsService.prototype.getTop = function () {
        return null;
    };
    RoomsService.prototype.getCachingOptions = function () {
        return null;
    };
    RoomsService.prototype.convertListItemToEntity = function (item) {
        var rooms = {
            id: item.Id,
            title: item.Title,
            videoStaff: (item.slVideoStaff === 'Да') ? true : false,
            projector: (item.slProjector === 'Да') ? true : false
        };
        if (item.slOfficeLookup) {
            rooms.officeLookupId = item.slOfficeLookup.Id;
            rooms.officeLookupTitle = item.slOfficeLookup.Title;
        }
        return rooms;
    };
    RoomsService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    RoomsService.prototype.getMockItems = function () {
        // return [{ id: 1, title: '№301' }, { id: 2, title: '№302' }, { id: 3, title: '№303' }];
        return null;
    };
    RoomsService.prototype.isMock = function () {
        return false;
    };
    RoomsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RoomsService);
    return RoomsService;
}(_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



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
/* harmony import */ var _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
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
        if (id === 'root') {
            return undefined;
        }
        else {
            return this.companiesService.getItems({ filter: "Id eq '" + id + "'" })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (c) { return c.length > 0 ? c[0] : null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (c) { return _this.sharepointService.getWebIdByRelativeUrl(c && c.url); }));
        }
    };
    CompanyWebResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"], _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__["SharepointService"]])
    ], CompanyWebResolver);
    return CompanyWebResolver;
}());



/***/ }),

/***/ "./src/app/services/security/groups.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/services/security/groups.resolver.ts ***!
  \******************************************************/
/*! exports provided: GroupsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsResolver", function() { return GroupsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.service */ "./src/app/services/security/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupsResolver = /** @class */ (function () {
    function GroupsResolver(securityService) {
        this.securityService = securityService;
    }
    GroupsResolver.prototype.resolve = function (route, state) {
        return this.securityService.getCurrentUserGroups();
    };
    GroupsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]])
    ], GroupsResolver);
    return GroupsResolver;
}());



/***/ }),

/***/ "./src/app/shared/services/mail/mail.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/mail/mail.service.ts ***!
  \******************************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/sp */ "./node_modules/@pnp/sp/dist/sp.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = /** @class */ (function () {
    function MailService() {
    }
    MailService.prototype.sendEmail = function (sender, recipients, subject, body) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_1__["sp"].utility.sendEmail({
            From: sender,
            To: recipients,
            Subject: subject,
            Body: body
        }));
    };
    MailService.prototype.sendEmailByCurrentUser = function (recipients, subject, body) {
        var _this = this;
        var o = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _pnp_sp__WEBPACK_IMPORTED_MODULE_1__["sp"].utility.getCurrentUserEmailAddresses().then(function (sender) {
                _this.sendEmail(sender, recipients, subject, body).subscribe(function () {
                    observer.next();
                    observer.complete();
                });
            });
        });
        o.subscribe();
        return o;
    };
    MailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MailService);
    return MailService;
}());



/***/ })

}]);
//# sourceMappingURL=booking-booking-module.js.map