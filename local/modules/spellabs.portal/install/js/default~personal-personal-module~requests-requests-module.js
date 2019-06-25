(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~personal-personal-module~requests-requests-module"],{

/***/ "./src/app/requests/components/my-requests/my-requests.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/requests/components/my-requests/my-requests.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"l-requests__empty\" *ngIf=\"requests == null || requests.length === 0\">\n    <div class=\"text\">\n      В настоящий момент у Вас нет ни одной активной заявки. <br>\n      Для создания активной заявки нажмите кнопку «Подать заявку»\n    </div>\n  </div>\n  <div class=\"l-requests__table\" *ngIf=\"requests && requests.length > 0\">\n    <table>\n      <tr class=\"l-requests-table__header\">\n        <th (click)=\"sortByType()\">\n          Тип заявки\n        </th>\n        <th (click)=\"sortById()\" class=\"sort\" [ngClass]=\"{'top' : sortField === 'Id' && sortOrder}\">\n          № заявки\n        </th>\n        <th (click)=\"sortByCreated()\">Дата отправки</th>\n        <th colspan=\"3\">\n          Статус\n        </th>\n      </tr>\n      <tr class=\"l-requests-table__item\" *ngFor=\"let item of requests\" (click)=\"goTo(item)\">\n        <td>\n          {{item.type}}\n        </td>\n        <td>\n          {{item.id}}\n        </td>\n        <td>\n          {{item.date}}\n        </td>\n        <td [ngClass]=\"{'status': true, 'approved' : item.statusCode === 'APPROVE', 'refused': item.statusCode === 'REJECT'}\">\n            {{item.statusTitle || 'На согласовании'}}\n            <i (click)=\"toggleInfo($event, infoRef)\" #infoRef class=\"icon-info\" *ngIf=\"item.statusCode === 'REJECT'\">\n              i\n              <div class=\"refuse-reason\">\n                <div class=\"title\">Причина отказа</div>\n                <div class=\"close\" (click)=\"toggleInfo($event, infoRef, true)\"></div>\n                <div class=\"text\">\n                  {{item.reason}}\n                </div>\n              </div>\n            </i>\n          </td>\n        <td class=\"controls\">\n          <div class=\"control\" (click)=\"$event.stopPropagation(); copy(item)\">\n            <input type=\"button\" class=\"btn-view\">\n          </div>\n        </td>\n      </tr>\n    </table>\n    <div class=\"l-requests__navigation\">\n      <input type=\"button\" value=\"В начало\" class=\"go-to-start\" (click)=\"hasPrev && load()\" [class.disabled]=\"!hasPrev\" />\n      <input type=\"button\" class=\"go-to-left\" (click)=\"hasPrev && getPrev()\" [class.disabled]=\"!hasPrev\" />\n      <input type=\"button\" class=\"go-to-right\" (click)=\"hasNext && getNext()\" [class.disabled]=\"!hasNext\" />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/requests/components/my-requests/my-requests.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/requests/components/my-requests/my-requests.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-requests__empty {\n  position: relative;\n  min-height: 550px;\n  background-image: url(/assets/banners/metalloinvest-empty.svg);\n  background-position: right bottom;\n  background-size: 500px 500px;\n  background-repeat: no-repeat;\n  box-sizing: border-box; }\n\n.l-requests__empty .text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 35%;\n    font-size: 22px;\n    color: #05050571;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n.l-requests__table {\n  position: relative;\n  padding-right: 45px;\n  padding-left: 26px; }\n\n.l-requests__table:before {\n    content: '';\n    position: absolute;\n    top: 25px;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #e4e4e4; }\n\n.l-requests__table table {\n    border-collapse: collapse;\n    width: 100%;\n    font-size: 16px;\n    color: #070606;\n    line-height: 19px; }\n\n.l-requests__table table .l-requests-table__header th {\n      cursor: pointer;\n      text-align: left;\n      box-sizing: border-box;\n      padding-bottom: 8px;\n      padding-left: 20px;\n      color: #768692; }\n\n.l-requests__table table .l-requests-table__header th.sort:after {\n        content: '';\n        width: 14px;\n        height: 14px;\n        background-image: url(/assets/icons/requests/icon-sort-gray.svg);\n        background-repeat: no-repeat;\n        background-size: cover;\n        display: inline-block; }\n\n.l-requests__table table .l-requests-table__header th.sort.top::after {\n        -webkit-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.l-requests__table table .l-requests-table__item {\n      cursor: pointer; }\n\n.l-requests__table table .l-requests-table__item.no-status {\n        font-weight: 600; }\n\n.l-requests__table table .l-requests-table__item:nth-child(odd) {\n        background-color: #f7f7f7; }\n\n.l-requests__table table .l-requests-table__item td:first-child {\n        width: 20%; }\n\n.l-requests__table table .l-requests-table__item td {\n        position: relative;\n        width: 15%;\n        box-sizing: border-box;\n        padding-bottom: 23px;\n        padding-top: 23px;\n        padding-left: 20px;\n        border-bottom: 1px solid #e4e4e4; }\n\n.l-requests__table table .l-requests-table__item td.approved {\n          color: #078916; }\n\n.l-requests__table table .l-requests-table__item td.refused {\n          color: #ee2737; }\n\n.l-requests__table table .l-requests-table__item td.controls {\n          padding-bottom: 0px;\n          width: 240px;\n          padding-top: 0px; }\n\n.l-requests__table table .l-requests-table__item td.controls .control {\n            width: 40px;\n            height: 40px;\n            margin-right: 15px;\n            display: none; }\n\n.l-requests__table table .l-requests-table__item:hover {\n        background-color: #f7f7f7; }\n\n.l-requests__table table .l-requests-table__item:hover .controls .control {\n          display: inline-block; }\n\n.l-requests__table table.approve .btn-view {\n      display: none; }\n\n.l-requests__table table.view .btn-approve,\n    .l-requests__table table.view .btn-refuse {\n      display: none; }\n\n.btn-view,\n.btn-approve,\n.btn-refuse {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  border: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-size: 20px 20px;\n  background-color: #ffffff !important; }\n\n.btn-view {\n  background-image: url(/assets/icons/icon-view-black.svg); }\n\n.btn-approve {\n  background-image: url(/assets/icons/icon-approve-black.svg); }\n\n.btn-refuse {\n  background-image: url(/assets/icons/icon-cross-black.svg); }\n\n.l-requests__navigation {\n  margin-top: 80px;\n  text-align: center; }\n\n.l-requests__navigation .go-to-start,\n  .l-requests__navigation .go-to-left,\n  .l-requests__navigation .go-to-right {\n    margin: 0;\n    padding: 0;\n    border: none;\n    min-width: 0;\n    vertical-align: middle;\n    cursor: pointer; }\n\n.l-requests__navigation .go-to-start {\n    color: #768692;\n    font-size: 18px;\n    background: none;\n    margin-right: 35px; }\n\n.l-requests__navigation .go-to-left,\n  .l-requests__navigation .go-to-right {\n    width: 50px;\n    height: 50px;\n    background-color: #768692;\n    background-size: 27px 27px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-image: url(/assets/icons/icon-arrow-right-white-thin.svg); }\n\n.l-requests__navigation .go-to-left {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n    margin-right: 25px; }\n\n.l-requests__navigation .disabled {\n    opacity: 0.4; }\n\n.icon-info {\n  display: inline-block;\n  font-style: normal;\n  width: 20px;\n  height: 20px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #fff;\n  background-color: #768692;\n  border-radius: 100%;\n  text-align: center;\n  margin-left: 20px;\n  position: relative;\n  cursor: pointer; }\n\n.refuse-reason {\n  display: none;\n  position: absolute;\n  top: 45px;\n  right: -40px;\n  width: 500px;\n  background-color: #768692;\n  color: #fff;\n  font-size: 16px;\n  padding: 20px;\n  padding-bottom: 35px;\n  box-sizing: border-box;\n  z-index: 10;\n  text-align: left; }\n\n.open .refuse-reason {\n    display: block; }\n\n.refuse-reason:before {\n    content: '';\n    position: absolute;\n    right: 30px;\n    top: -20px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 20px solid transparent;\n    border-bottom-color: #768692;\n    border-top: 0; }\n\n.refuse-reason .title {\n    display: inline-block;\n    font-weight: bold;\n    margin-bottom: 15px; }\n\n.refuse-reason .close {\n    width: 15px;\n    height: 15px;\n    background-image: url(/assets/icons/icon-close-gray-thin.svg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    float: right;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/requests/components/my-requests/my-requests.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/requests/components/my-requests/my-requests.component.ts ***!
  \**************************************************************************/
/*! exports provided: MyRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRequestsComponent", function() { return MyRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/requests.service */ "./src/app/requests/services/requests/requests.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var _services_requests_workflow_requests_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/requests-workflow/requests-workflow.service */ "./src/app/requests/services/requests-workflow/requests-workflow.service.ts");
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





var MyRequestsComponent = /** @class */ (function () {
    function MyRequestsComponent(requestsWorkflowService, sharepointService, zone, requestsService, route) {
        this.requestsWorkflowService = requestsWorkflowService;
        this.sharepointService = sharepointService;
        this.zone = zone;
        this.requestsService = requestsService;
        this.route = route;
        this.url = '';
        this.webId = undefined;
        this.requests = null;
        this.hasPrev = false;
        this.hasNext = false;
        this.reloadEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortField = 'Created';
        this.sortOrder = false;
        this.statuses = null;
        this.onAgreementId = null;
        this.pages = [];
        this.index = null;
    }
    MyRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webId =
            this.route.snapshot.data.webId !== 'root'
                ? this.route.snapshot.data.webId
                : null;
        this.url = this.route.snapshot.data.company && this.route.snapshot.data.company.url;
        this.statuses = this.route.snapshot.data.statuses;
        this.onAgreementId = this.statuses.filter(function (s) { return s.code === 'ON_AGREEMENT'; })[0].id;
        this.reloadEvent.subscribe(function () { return _this.load(); });
        this.load();
    };
    MyRequestsComponent.prototype.load = function () {
        var _this = this;
        this.index = 0;
        this.pages = [];
        this.requestsWorkflowService.getRequestsByUserAndTemplatePaged(this.sharepointService.getCurrentUserContext().userId, [[this.sortField, this.sortOrder]], this.webId)
            .subscribe(function (page) {
            _this.zone.run(function () {
                _this.requests = page.items;
                _this.hasNext = page.hasNext;
                _this.hasPrev = _this.index > 0;
                _this.pages.push(page);
            });
        });
        this.loadCounter();
        this.scrollUp();
    };
    MyRequestsComponent.prototype.loadCounter = function () {
        var _this = this;
        this.requestsWorkflowService.getNewCountOnDone(this.sharepointService.getCurrentUserContext().userId, this.webId, this.onAgreementId).subscribe(function (count) {
            _this.zone.run(function () {
                _this.count = count;
                _this.countChange.emit(count);
            });
        });
    };
    MyRequestsComponent.prototype.scrollUp = function () {
        this.zone.run(function () {
            document.getElementById('s4-workspace').scrollTop = 0;
        });
    };
    MyRequestsComponent.prototype.getNext = function () {
        var _this = this;
        if (this.hasNext) {
            if (this.index === (this.pages.length - 1)) {
                this.pages[this.index]
                    .getNext()
                    .subscribe(function (page) {
                    _this.index++;
                    _this.zone.run(function () {
                        _this.requests = page.items;
                        _this.hasNext = page.hasNext;
                        _this.hasPrev = _this.index > 0;
                        _this.pages.push(page);
                    });
                    _this.scrollUp();
                });
            }
            else {
                this.index++;
                this.requests = this.pages[this.index].items;
                this.hasNext = this.pages[this.index].hasNext;
                this.hasPrev = this.index > 0;
            }
        }
    };
    MyRequestsComponent.prototype.getPrev = function () {
        this.index--;
        this.requests = this.pages[this.index].items;
        this.hasNext = this.pages[this.index].hasNext;
        this.hasPrev = this.index > 0;
        this.scrollUp();
    };
    MyRequestsComponent.prototype.copy = function (request) {
        var _this = this;
        this.requestsWorkflowService.copyRequestToDraft(request.id, this.webId).subscribe(function (id) {
            var url = _this.sharepointService.getCurrentUserContext().webServerRelativeUrl + _this.url
                + ("/lists/slDraftRequests/EditForm.aspx?Id=" + id + "&Source=" + encodeURIComponent(window.location.href));
            openModal(request.type, url, function (result) {
                if (result === 1) {
                    _this.requestsWorkflowService.copyRequestFromDraft(id, _this.webId).subscribe(function () {
                        _this.load();
                        _this.requestsWorkflowService.removeDraft(id, _this.webId);
                    });
                }
                else {
                    _this.requestsWorkflowService.removeDraft(id, _this.webId);
                }
            });
        });
    };
    MyRequestsComponent.prototype.filterResults = function () {
        var _this = this;
        if (this.hasPrev) {
            this.index = 0;
            this.zone.run(function () {
                _this.requests = _this.pages[_this.index].items;
                _this.hasNext = _this.pages[_this.index].hasNext;
                _this.hasPrev = _this.index > 0;
            });
        }
    };
    MyRequestsComponent.prototype.goTo = function (request) {
        var _this = this;
        var url = this.sharepointService.getCurrentUserContext().webServerRelativeUrl + this.url
            + ("/lists/slRequests/DispForm.aspx?Id=" + request.id + "&Source=" + encodeURIComponent(window.location.href));
        this.requestsService.addLike({ id: request.id, webId: this.webId }).subscribe(function () { return openModal(request.type, url, function () { return _this.loadCounter(); }); }, function () { return openModal(request.type, url, function () { return _this.loadCounter(); }); });
    };
    MyRequestsComponent.prototype.sortByType = function () {
        if (this.sortField === 'Title') {
            this.sortOrder = !this.sortOrder;
        }
        else {
            this.sortField = 'Title';
            this.sortOrder = true;
        }
        this.load();
    };
    MyRequestsComponent.prototype.sortById = function () {
        if (this.sortField === 'Id') {
            this.sortOrder = !this.sortOrder;
        }
        else {
            this.sortField = 'Id';
            this.sortOrder = true;
        }
        this.load();
    };
    MyRequestsComponent.prototype.sortByCreated = function () {
        if (this.sortField === 'Created') {
            this.sortOrder = !this.sortOrder;
        }
        else {
            this.sortField = 'Created';
            this.sortOrder = true;
        }
        this.load();
    };
    MyRequestsComponent.prototype.toggleInfo = function (event, infoRef, close) {
        event.stopPropagation();
        if (!close) {
            this.infoRefs.toArray().forEach(function (e) { return e.nativeElement.classList.remove('open'); });
            infoRef.classList.add('open');
        }
        else {
            infoRef.classList.remove('open');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MyRequestsComponent.prototype, "reloadEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MyRequestsComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MyRequestsComponent.prototype, "countChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('infoRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MyRequestsComponent.prototype, "infoRefs", void 0);
    MyRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-requests',
            template: __webpack_require__(/*! ./my-requests.component.html */ "./src/app/requests/components/my-requests/my-requests.component.html"),
            styles: [__webpack_require__(/*! ./my-requests.component.scss */ "./src/app/requests/components/my-requests/my-requests.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_requests_workflow_requests_workflow_service__WEBPACK_IMPORTED_MODULE_3__["RequestsWorkflowService"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__["SharepointService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MyRequestsComponent);
    return MyRequestsComponent;
}());



/***/ }),

/***/ "./src/app/requests/components/requests-modal-form/requests-modal-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/requests/components/requests-modal-form/requests-modal-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-requests\" *ngIf=\"modalIsOpen\">\n  <div class=\"l-request__form\">\n    <div class=\"l-request-inner\">\n      <div class=\"l-request__header\">\n        <div class=\"logotype\"></div>\n        <div class=\"body\">\n          <div class=\"title\">\n            Подать заявку\n          </div>\n          <div class=\"description\">\n            Пожалуйста, выберите нужную группу заявок\n          </div>\n        </div>\n        <div class=\"close\">\n          <input type=\"button\" class=\"btn btn-close || js-button-close-modal\" (click)=\"modalIsOpen = false\" />\n        </div>\n      </div>\n\n      <div class=\"l-request__body\">\n\n        <ng-container *ngIf=\"requestGroupId === null && isGroups\">\n          <div class=\"note\">Выберите группу заявок</div>\n          <div class=\"l-request-grid\">\n            <div *ngFor=\"let item of requestGroups\">\n              <div class=\"l-request-tile\" (click)=\"requestGroupId = item.id\">\n                <div class=\"l-request-tile__icon\"\n                  [ngStyle]=\"{'background-image': 'url(' + prepareLink(item.url) + ')'}\"></div>\n                <div class=\"l-request-tile__title\">{{ item.title }}</div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"requestGroupId != null || isGroups === false\">\n          <div class=\"note\">Выберите тип заявок</div>\n          <div class=\"l-request-list\">\n            <div class=\"l-request-list\">\n              <div *ngFor=\"let item of requestTemplates\">\n                <div #requestTemplatesItem class=\"l-request-list__item\" (click)=\"create(item)\"\n                  *ngIf=\"item.requestTemplateGroupId == requestGroupId\">\n                  <div class=\"logotype\" [ngStyle]=\"{'background-image': 'url(' + prepareLink(item.url) + ')'}\"></div>\n                  <div class=\"title\">{{ item.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/requests/components/requests-modal-form/requests-modal-form.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/requests/components/requests-modal-form/requests-modal-form.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-requests {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(5, 5, 5, 0.5);\n  overflow-y: scroll;\n  z-index: 999; }\n\n.is-modal-open .l-requests {\n    display: block; }\n\n.l-requests .l-request__form {\n    position: absolute;\n    width: 45%;\n    background-color: #fff;\n    left: 50%;\n    margin-top: 150px;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    min-height: 700px; }\n\n.l-request-inner {\n  height: 100%;\n  width: 100%; }\n\n.l-request-inner .l-request__header {\n    position: relative;\n    height: 170px;\n    padding: 40px 50px;\n    background-color: #DEDFE0;\n    box-sizing: border-box; }\n\n.l-request-inner .l-request__header .logotype {\n      display: inline-block;\n      vertical-align: middle;\n      width: 85px;\n      height: 85px;\n      margin-right: 25px;\n      background-image: url(/assets/icons/icon-request.svg);\n      background-repeat: no-repeat;\n      background-size: cover; }\n\n.l-request-inner .l-request__header .body {\n      display: inline-block;\n      vertical-align: middle;\n      max-width: calc(100% - 115px); }\n\n.l-request-inner .l-request__header .body .title {\n        color: #050505;\n        font-size: 34px;\n        font-weight: bold; }\n\n.l-request-inner .l-request__header .body .description {\n        color: #050505;\n        font-size: 22px;\n        line-height: 30px; }\n\n.l-request-inner .l-request__header .close {\n      position: absolute;\n      top: 30px;\n      right: 30px; }\n\n.l-request-inner .l-request__header .close .btn-close {\n        background-image: url(/assets/icons/requests/icon-close.svg);\n        background-repeat: no-repeat; }\n\n.l-request-inner .l-request__header .close .btn-close:hover {\n          background-image: url(/assets/icons/requests/icon-close-active.svg); }\n\n.l-request__body {\n  padding: 30px 50px;\n  box-sizing: border-box; }\n\n.l-request__body .note {\n    margin-bottom: 35px;\n    font-size: 16px;\n    color: #898888; }\n\n.l-request__body .l-request-grid {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: justify;\n        justify-content: space-between; }\n\n.l-request__body .l-request-grid .l-request-tile {\n      cursor: pointer;\n      border: 1px solid #DEDFE0;\n      width: 230px;\n      height: 230px;\n      margin-bottom: 30px;\n      padding: 25px;\n      box-sizing: border-box; }\n\n.l-request__body .l-request-grid .l-request-tile .l-request-tile__icon {\n        width: 50px;\n        height: 50px;\n        margin-bottom: 21px;\n        background-repeat: no-repeat;\n        background-position: top left; }\n\n.l-request__body .l-request-grid .l-request-tile .l-request-tile__title {\n        font-size: 22px;\n        color: #000;\n        line-height: 26px; }\n\n.l-request__body .l-request-grid .l-request-tile:hover {\n        background-color: #F7F7F7; }\n\n.l-request__body .l-request-list {\n    margin-bottom: 45px; }\n\n.l-request__body .l-request-list .l-request-list__item {\n      margin-bottom: 20px; }\n\n.l-request__body .l-request-list .l-request-list__item .logotype {\n        position: relative;\n        display: inline-block;\n        height: 60px;\n        width: 60px;\n        margin-right: 20px;\n        vertical-align: middle;\n        background-position: 0 0;\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-color: #DEDFE0;\n        border-radius: 50%; }\n\n.l-request__body .l-request-list .l-request-list__item .title {\n        display: inline-block;\n        vertical-align: middle;\n        width: calc(100% - 80px);\n        font-size: 22px;\n        color: #000000;\n        box-sizing: border-box;\n        cursor: pointer; }\n\n.l-request__body .l-request-list .l-request-list__item.active .logotype {\n        background-color: #EE2737; }\n\n.l-request__body .l-request-list .l-request-list__item.active .title {\n        color: #EE2737; }\n\n.l-request__body .l-request-list .l-request-list__item:hover .logotype, .l-request__body .l-request-list .l-request-list__item.is-current-item .logotype {\n        background-color: #EE2737;\n        background-position: 100% 0; }\n\n.l-request__body .l-request-list .l-request-list__item:hover .title, .l-request__body .l-request-list .l-request-list__item.is-current-item .title {\n        color: #EE2737; }\n"

/***/ }),

/***/ "./src/app/requests/components/requests-modal-form/requests-modal-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/requests/components/requests-modal-form/requests-modal-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RequestsModalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsModalFormComponent", function() { return RequestsModalFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_requests_modal_requests_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/requests-modal/requests-modal.service */ "./src/app/requests/services/requests-modal/requests-modal.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestsModalFormComponent = /** @class */ (function () {
    function RequestsModalFormComponent(requestsModalService, sharepointService, route) {
        this.requestsModalService = requestsModalService;
        this.sharepointService = sharepointService;
        this.route = route;
        this.modalSubscribe = null;
        this.url = '';
        this.modalIsOpen = false;
        this.requestGroupId = null;
        this.requestGroups = null;
        this.requestTemplates = null;
        this.isGroups = true;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RequestsModalFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalSubscribe = this.requestsModalService.modalIsOpen.subscribe(function (value) {
            _this.requestGroupId = null;
            _this.modalIsOpen = value;
        });
        this.url = this.route.snapshot.data.company && this.route.snapshot.data.company.url;
        this.requestGroups = this.route.snapshot.data.groups;
        this.requestTemplates = this.route.snapshot.data.templates;
    };
    RequestsModalFormComponent.prototype.ngOnDestroy = function () {
        if (this.modalSubscribe != null) {
            this.modalSubscribe.unsubscribe();
        }
    };
    RequestsModalFormComponent.prototype.click = function (el) {
        this.requestTemplatesItem.toArray().forEach(function (element) {
            if (element.nativeElement.contains(el.target)) {
                element.nativeElement.className = 'l-request-list__item is-current-item';
            }
        });
    };
    RequestsModalFormComponent.prototype.create = function (template) {
        var _this = this;
        if (template.externalLink != null) {
            window.location.href = template.externalLink;
        }
        else {
            var url = this.sharepointService.getCurrentUserContext().webServerRelativeUrl + this.url
                + ("/lists/slRequests/NewForm.aspx?ContentTypeId=" + template.contentType + "&Source=" + encodeURIComponent(window.location.href));
            openModal(template.title, url, function () { return _this.load.emit(); });
            this.modalIsOpen = false;
        }
    };
    RequestsModalFormComponent.prototype.toggleActiveItem = function () {
        this.requestTemplatesItem.toArray().forEach(function (element) {
            element.nativeElement.className = 'l-request-list__item';
        });
    };
    RequestsModalFormComponent.prototype.prepareLink = function (link) {
        return this.prepareBackgroundUrl(link);
    };
    RequestsModalFormComponent.prototype.prepareBackgroundUrl = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)').replace(/'/gi, '%27') || null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RequestsModalFormComponent.prototype, "isGroups", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RequestsModalFormComponent.prototype, "load", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('requestTemplatesItem', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], RequestsModalFormComponent.prototype, "requestTemplatesItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RequestsModalFormComponent.prototype, "click", null);
    RequestsModalFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requests-modal-form',
            template: __webpack_require__(/*! ./requests-modal-form.component.html */ "./src/app/requests/components/requests-modal-form/requests-modal-form.component.html"),
            styles: [__webpack_require__(/*! ./requests-modal-form.component.scss */ "./src/app/requests/components/requests-modal-form/requests-modal-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_requests_modal_requests_modal_service__WEBPACK_IMPORTED_MODULE_2__["RequestsModalService"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__["SharepointService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RequestsModalFormComponent);
    return RequestsModalFormComponent;
}());



/***/ }),

/***/ "./src/app/requests/components/requests-page/requests-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/requests/components/requests-page/requests-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\">\n      <a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Главная</a>\n    </div>\n    <div class=\"l-breadcrumb\">\n      Заявки\n    </div>\n  </div>\n  <div class=\"title\">\n    Заявки\n  </div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-requests\">\n        <app-tabs [contentBgColor]=\"'#fff'\" [tabsItemPadding]=\"'0px 2.5%'\" [tabsContentPadding]=\"'2.75% 0px'\" (activeTab)=\"load()\">\n          <app-tab [tabTitle]=\"'Мои заявки'\" [active]=\"true\" [notification]=\"countDone\">\n            <app-my-requests [reloadEvent]=\"reloadEvent\"  [(count)]=\"countDone\"></app-my-requests>\n          </app-tab>\n          <app-tab [tabTitle]=\"'У меня на согласовании'\" [notification]=\"countUndone\">\n              <app-requests-to-execute [reloadEvent]=\"reloadEvent\" [(count)]=\"countUndone\"></app-requests-to-execute>\n          </app-tab>\n        </app-tabs>\n        <input (click)=\"openRequestModal()\" type=\"button\" class=\"btn-create-request\" value=\"Подать заявку\" />\n      </div>\n    </div>\n  </div>\n  <div class=\"app-modals\">\n    <app-requests-modal-form (load)=\"load()\"></app-requests-modal-form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/requests/components/requests-page/requests-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/requests/components/requests-page/requests-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-requests {\n  position: relative;\n  box-sizing: border-box;\n  background-color: #f7f7f7; }\n\n.l-page-header {\n  padding-top: 2%;\n  padding-left: 2.75%; }\n\n.l-page-header .title {\n    position: relative; }\n\n.btn-create-request {\n  position: absolute;\n  right: 2%;\n  top: -50px;\n  height: 50px;\n  min-width: 0 !important;\n  padding: 0 25px !important;\n  font-size: 16px;\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #EE2737 !important;\n  -webkit-transform: translateY(-50%) !important;\n      -ms-transform: translateY(-50%) !important;\n          transform: translateY(-50%) !important;\n  box-sizing: border-box; }\n"

/***/ }),

/***/ "./src/app/requests/components/requests-page/requests-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/requests/components/requests-page/requests-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: RequestsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPageComponent", function() { return RequestsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requests_modal_requests_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests-modal/requests-modal.service */ "./src/app/requests/services/requests-modal/requests-modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsPageComponent = /** @class */ (function () {
    function RequestsPageComponent(requestsModalService) {
        this.requestsModalService = requestsModalService;
        this.countUndone = 0;
        this.countDone = 0;
        this.reloadEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.appContainerStyle = { 'padding': '0px', 'background-color': '#f7f7f7' };
    }
    RequestsPageComponent.prototype.openRequestModal = function () {
        this.requestsModalService.openModal();
    };
    RequestsPageComponent.prototype.load = function () {
        this.reloadEvent.emit();
    };
    RequestsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requests-page',
            template: __webpack_require__(/*! ./requests-page.component.html */ "./src/app/requests/components/requests-page/requests-page.component.html"),
            styles: [__webpack_require__(/*! ./requests-page.component.scss */ "./src/app/requests/components/requests-page/requests-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_requests_modal_requests_modal_service__WEBPACK_IMPORTED_MODULE_1__["RequestsModalService"]])
    ], RequestsPageComponent);
    return RequestsPageComponent;
}());



/***/ }),

/***/ "./src/app/requests/components/requests-to-execute/requests-to-execute.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/requests/components/requests-to-execute/requests-to-execute.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"l-requests__empty\" *ngIf=\"requests == null || requests.length === 0\">\n    <div class=\"text\">\n      В настоящий момент у Вас нет ни одной активной заявки для согласования.\n    </div>\n  </div>\n  <div class=\"l-requests__table\" *ngIf=\"requests && requests.length > 0\">\n    <table>\n      <tr class=\"l-requests-table__header\">\n        <th (click)=\"sortByType()\">\n          Тип заявки\n        </th>\n        <th (click)=\"sortById()\" class=\"sort\" [ngClass]=\"{'top' : sortField === 'Id' && sortOrder}\">\n          № заявки\n        </th>\n        <th (click)=\"sortByCreated()\">Дата отправки</th>\n        <th (click)=\"sortByStatus()\" colspan=\"3\">\n          Статус\n        </th>\n      </tr>\n      <tr class=\"l-requests-table__item\" [class.no-status]=\"!item.statusId && !isReload\" *ngFor=\"let item of requests\" (click)=\"goTo(item)\">\n        <td>\n          {{item.type}}\n        </td>\n        <td>\n          {{item.id}}\n        </td>\n        <td>\n          {{item.date}}\n        </td>\n        <td [ngClass]=\"{'status': true, 'approved' : item.statusCode === 'APPROVE', 'refused': item.statusCode === 'REJECT'}\">\n          {{item.statusTitle || 'На согласовании'}}\n          <i (click)=\"toggleInfo($event, infoRef)\" #infoRef class=\"icon-info\" *ngIf=\"item.statusCode === 'REJECT'\">\n            i\n            <div class=\"refuse-reason\">\n              <div class=\"title\">Причина отказа</div>\n              <div class=\"close\" (click)=\"toggleInfo($event, infoRef, true)\"></div>\n              <div class=\"text\">\n                {{item.reason}}\n              </div>\n            </div>\n          </i>\n        </td>\n        <td class=\"controls\">\n          <!-- <div *ngIf=\"canDecide(item)\"> -->\n          <div *ngIf=\"!item.statusCode\">\n            <div class=\"control\">\n              <input type=\"button\" (click)=\"$event.stopPropagation(); approve(item)\" class=\"btn-approve\">\n            </div>\n            <div class=\"control\">\n              <input type=\"button\" (click)=\"$event.stopPropagation(); refuse(item)\" class=\"btn-refuse\">\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n    <div class=\"l-requests__navigation\">\n      <input type=\"button\" value=\"В начало\" class=\"go-to-start\" (click)=\"hasPrev && load()\" [class.disabled]=\"!hasPrev\" />\n      <input type=\"button\" class=\"go-to-left\" (click)=\"hasPrev && getPrev()\" [class.disabled]=\"!hasPrev\" />\n      <input type=\"button\" class=\"go-to-right\" (click)=\"hasNext && getNext()\" [class.disabled]=\"!hasNext\" />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/requests/components/requests-to-execute/requests-to-execute.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/requests/components/requests-to-execute/requests-to-execute.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-requests__empty {\n  position: relative;\n  min-height: 550px;\n  background-image: url(/assets/banners/metalloinvest-empty.svg);\n  background-position: right bottom;\n  background-size: 500px 500px;\n  background-repeat: no-repeat;\n  box-sizing: border-box; }\n\n.l-requests__empty .text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 35%;\n    font-size: 22px;\n    color: #05050571;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n.l-requests__table {\n  position: relative;\n  padding-right: 45px;\n  padding-left: 26px; }\n\n.l-requests__table:before {\n    content: '';\n    position: absolute;\n    top: 25px;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #e4e4e4; }\n\n.l-requests__table table {\n    border-collapse: collapse;\n    width: 100%;\n    font-size: 16px;\n    color: #070606;\n    line-height: 19px; }\n\n.l-requests__table table .l-requests-table__header th {\n      cursor: pointer;\n      text-align: left;\n      box-sizing: border-box;\n      padding-bottom: 8px;\n      padding-left: 20px;\n      color: #768692; }\n\n.l-requests__table table .l-requests-table__header th.sort:after {\n        content: '';\n        width: 14px;\n        height: 14px;\n        background-image: url(/assets/icons/requests/icon-sort-gray.svg);\n        background-repeat: no-repeat;\n        background-size: cover;\n        display: inline-block; }\n\n.l-requests__table table .l-requests-table__header th.sort.top::after {\n        -webkit-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.l-requests__table table .l-requests-table__item {\n      cursor: pointer; }\n\n.l-requests__table table .l-requests-table__item.no-status {\n        font-weight: 600; }\n\n.l-requests__table table .l-requests-table__item:nth-child(odd) {\n        background-color: #f7f7f7; }\n\n.l-requests__table table .l-requests-table__item td:first-child {\n        width: 20%; }\n\n.l-requests__table table .l-requests-table__item td {\n        position: relative;\n        width: 15%;\n        box-sizing: border-box;\n        padding-bottom: 23px;\n        padding-top: 23px;\n        padding-left: 20px;\n        border-bottom: 1px solid #e4e4e4; }\n\n.l-requests__table table .l-requests-table__item td.approved {\n          color: #078916; }\n\n.l-requests__table table .l-requests-table__item td.refused {\n          color: #ee2737; }\n\n.l-requests__table table .l-requests-table__item td.controls {\n          padding-bottom: 0px;\n          width: 240px;\n          padding-top: 0px; }\n\n.l-requests__table table .l-requests-table__item td.controls .control {\n            width: 40px;\n            height: 40px;\n            margin-right: 15px;\n            display: none; }\n\n.l-requests__table table .l-requests-table__item:hover {\n        background-color: #f7f7f7; }\n\n.l-requests__table table .l-requests-table__item:hover .controls .control {\n          display: inline-block; }\n\n.l-requests__table table.approve .btn-view {\n      display: none; }\n\n.l-requests__table table.view .btn-approve,\n    .l-requests__table table.view .btn-refuse {\n      display: none; }\n\n.btn-view,\n.btn-approve,\n.btn-refuse {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  border: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-size: 20px 20px;\n  background-color: #ffffff !important; }\n\n.btn-view {\n  background-image: url(/assets/icons/icon-view-black.svg); }\n\n.btn-approve {\n  background-image: url(/assets/icons/icon-approve-black.svg); }\n\n.btn-refuse {\n  background-image: url(/assets/icons/icon-cross-black.svg); }\n\n.l-requests__navigation {\n  margin-top: 80px;\n  text-align: center; }\n\n.l-requests__navigation .go-to-start,\n  .l-requests__navigation .go-to-left,\n  .l-requests__navigation .go-to-right {\n    margin: 0;\n    padding: 0;\n    border: none;\n    min-width: 0;\n    vertical-align: middle;\n    cursor: pointer; }\n\n.l-requests__navigation .go-to-start {\n    color: #768692;\n    font-size: 18px;\n    background: none;\n    margin-right: 35px; }\n\n.l-requests__navigation .go-to-left,\n  .l-requests__navigation .go-to-right {\n    width: 50px;\n    height: 50px;\n    background-color: #768692;\n    background-size: 27px 27px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-image: url(/assets/icons/icon-arrow-right-white-thin.svg); }\n\n.l-requests__navigation .go-to-left {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n    margin-right: 25px; }\n\n.l-requests__navigation .disabled {\n    opacity: 0.4; }\n\n.icon-info {\n  display: inline-block;\n  font-style: normal;\n  width: 20px;\n  height: 20px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #fff;\n  background-color: #768692;\n  border-radius: 100%;\n  text-align: center;\n  margin-left: 20px;\n  position: relative;\n  cursor: pointer; }\n\n.refuse-reason {\n  display: none;\n  position: absolute;\n  top: 45px;\n  right: -40px;\n  width: 500px;\n  background-color: #768692;\n  color: #fff;\n  font-size: 16px;\n  padding: 20px;\n  padding-bottom: 35px;\n  box-sizing: border-box;\n  z-index: 10;\n  text-align: left; }\n\n.open .refuse-reason {\n    display: block; }\n\n.refuse-reason:before {\n    content: '';\n    position: absolute;\n    right: 30px;\n    top: -20px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 20px solid transparent;\n    border-bottom-color: #768692;\n    border-top: 0; }\n\n.refuse-reason .title {\n    display: inline-block;\n    font-weight: bold;\n    margin-bottom: 15px; }\n\n.refuse-reason .close {\n    width: 15px;\n    height: 15px;\n    background-image: url(/assets/icons/icon-close-gray-thin.svg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    float: right;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/requests/components/requests-to-execute/requests-to-execute.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/requests/components/requests-to-execute/requests-to-execute.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RequestsToExecuteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsToExecuteComponent", function() { return RequestsToExecuteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/requests/requests.service */ "./src/app/requests/services/requests/requests.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var _services_requests_workflow_requests_workflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/requests-workflow/requests-workflow.service */ "./src/app/requests/services/requests-workflow/requests-workflow.service.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestsToExecuteComponent = /** @class */ (function () {
    function RequestsToExecuteComponent(sharepointService, zone, route, requestsWorkflowService, requestsService, notificationsService) {
        this.sharepointService = sharepointService;
        this.zone = zone;
        this.route = route;
        this.requestsWorkflowService = requestsWorkflowService;
        this.requestsService = requestsService;
        this.notificationsService = notificationsService;
        this.url = '';
        this.webId = undefined;
        this.onAgreementId = null;
        this.requests = null;
        this.executors = null;
        this.statuses = null;
        this.hasPrev = false;
        this.hasNext = false;
        this.sortField = 'Created';
        this.sortOrder = false;
        this.pages = [];
        this.index = null;
        this.isReload = false;
        this.history = [];
        this.reloadEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RequestsToExecuteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webId =
            this.route.snapshot.data.webId !== 'root'
                ? this.route.snapshot.data.webId
                : null;
        this.executors = this.route.snapshot.data.executors;
        this.statuses = this.route.snapshot.data.statuses;
        this.reloadEvent.subscribe(function () { _this.load(); });
        this.onAgreementId = this.statuses.filter(function (s) { return s.code === 'ON_AGREEMENT'; })[0].id;
        this.url = this.route.snapshot.data.company && this.route.snapshot.data.company.url;
        if (this.executors.length > 0) {
            this.load();
        }
    };
    RequestsToExecuteComponent.prototype.load = function () {
        var _this = this;
        this.index = 0;
        this.pages = [];
        this.isReload = true;
        this.requestsWorkflowService.getRequestsByExecutorsPaged(this.executors, [[this.sortField, this.sortOrder]], this.webId)
            .subscribe(function (page) {
            _this.zone.run(function () {
                _this.requests = page.items;
                _this.hasNext = page.hasNext;
                _this.hasPrev = _this.index > 0;
                _this.pages.push(page);
            });
        });
        this.loadCounter();
        this.scrollUp();
    };
    RequestsToExecuteComponent.prototype.scrollUp = function () {
        this.zone.run(function () {
            document.getElementById('s4-workspace').scrollTop = 0;
        });
    };
    RequestsToExecuteComponent.prototype.loadCounter = function () {
        var _this = this;
        this.requestsWorkflowService.getNewCountOnAgreement(this.executors, this.sharepointService.getCurrentUserContext().userId, this.webId, this.onAgreementId).subscribe(function (count) {
            _this.zone.run(function () {
                _this.count = count;
                _this.countChange.emit(count);
            });
        });
    };
    RequestsToExecuteComponent.prototype.getNext = function () {
        var _this = this;
        if (this.hasNext) {
            if (this.index === (this.pages.length - 1)) {
                this.pages[this.index]
                    .getNext()
                    .subscribe(function (page) {
                    _this.index++;
                    _this.requests = page.items;
                    _this.hasNext = page.hasNext;
                    _this.hasPrev = _this.index > 0;
                    _this.pages.push(page);
                    _this.scrollUp();
                });
            }
            else {
                this.index++;
                this.requests = this.pages[this.index].items;
                this.hasNext = this.pages[this.index].hasNext;
                this.hasPrev = this.index > 0;
                this.scrollUp();
            }
        }
    };
    RequestsToExecuteComponent.prototype.getPrev = function () {
        this.index--;
        this.requests = this.pages[this.index].items;
        this.hasNext = this.pages[this.index].hasNext;
        this.hasPrev = this.index > 0;
        this.scrollUp();
    };
    RequestsToExecuteComponent.prototype.filterResults = function () {
        if (this.hasPrev) {
            this.index = 0;
            this.requests = this.pages[this.index].items;
            this.hasNext = this.pages[this.index].hasNext;
            this.hasPrev = this.index > 0;
        }
    };
    RequestsToExecuteComponent.prototype.goTo = function (request) {
        var _this = this;
        var url = this.sharepointService.getCurrentUserContext().webServerRelativeUrl + this.url
            + ("/lists/slRequests/DispForm.aspx?Id=" + request.id + "&Source=" + encodeURIComponent(window.location.href));
        this.requestsService.addLike({ id: request.id, webId: this.webId }).subscribe(function () { return openModal(request.type, url, function () { return _this.loadCounter(); }); }, function () { return openModal(request.type, url, function () { return _this.loadCounter(); }); });
    };
    RequestsToExecuteComponent.prototype.sortByType = function () {
        if (this.sortField === 'Title') {
            this.sortOrder = !this.sortOrder;
        }
        else {
            this.sortField = 'Title';
            this.sortOrder = true;
        }
        this.load();
    };
    RequestsToExecuteComponent.prototype.sortByStatus = function () {
        if (this.sortField === 'slRequestStatusLookupId') {
            this.sortOrder = !this.sortOrder;
        }
        else {
            this.sortField = 'slRequestStatusLookupId';
            this.sortOrder = true;
        }
        this.load();
    };
    RequestsToExecuteComponent.prototype.sortById = function () {
        if (this.sortField === 'Id') {
            this.sortOrder = !this.sortOrder;
        }
        else {
            this.sortField = 'Id';
            this.sortOrder = true;
        }
        this.load();
    };
    RequestsToExecuteComponent.prototype.canDecide = function (request) {
        var result = false;
        if (this.history != null) {
            result = this.history
                .filter(function (h) { return h.requestId === request.id; })
                .every(function (h) { return h.statusCode === 'ON_AGREEMENT'; });
        }
        return result;
    };
    RequestsToExecuteComponent.prototype.sortByCreated = function () {
        if (this.sortField === 'Created') {
            this.sortOrder = !this.sortOrder;
        }
        else {
            this.sortField = 'Created';
            this.sortOrder = true;
        }
        this.load();
    };
    RequestsToExecuteComponent.prototype.approve = function (request) {
        var _this = this;
        if (confirm('Подтвердите согласование')) {
            this.requestsWorkflowService.approve(request, this.webId).subscribe(function () {
                _this.notificationsService.success('Заявка согласована');
                _this.load();
            });
        }
    };
    RequestsToExecuteComponent.prototype.refuse = function (request) {
        var _this = this;
        if (confirm('Подтвердите отказ')) {
            var reason = prompt('Укажите причину');
            this.requestsWorkflowService.reject(request, reason, this.webId).subscribe(function () {
                _this.notificationsService.success('Заявка отклонена');
                _this.load();
            });
        }
    };
    RequestsToExecuteComponent.prototype.isApproved = function (request) {
        return request.statusCode === 'APPROVE';
    };
    RequestsToExecuteComponent.prototype.isRejected = function (request) {
        return request.statusCode === 'REJECT';
    };
    RequestsToExecuteComponent.prototype.toggleInfo = function (event, infoRef, close) {
        event.stopPropagation();
        if (!close) {
            this.infoRefs.toArray().forEach(function (e) { return e.nativeElement.classList.remove('open'); });
            infoRef.classList.add('open');
        }
        else {
            infoRef.classList.remove('open');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RequestsToExecuteComponent.prototype, "reloadEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RequestsToExecuteComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RequestsToExecuteComponent.prototype, "countChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('infoRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], RequestsToExecuteComponent.prototype, "infoRefs", void 0);
    RequestsToExecuteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requests-to-execute',
            template: __webpack_require__(/*! ./requests-to-execute.component.html */ "./src/app/requests/components/requests-to-execute/requests-to-execute.component.html"),
            styles: [__webpack_require__(/*! ./requests-to-execute.component.scss */ "./src/app/requests/components/requests-to-execute/requests-to-execute.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__["SharepointService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_requests_workflow_requests_workflow_service__WEBPACK_IMPORTED_MODULE_4__["RequestsWorkflowService"],
            _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"],
            src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]])
    ], RequestsToExecuteComponent);
    return RequestsToExecuteComponent;
}());



/***/ }),

/***/ "./src/app/requests/requests-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/requests/requests-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RequestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsRoutingModule", function() { return RequestsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/requests-page/requests-page.component */ "./src/app/requests/components/requests-page/requests-page.component.ts");
/* harmony import */ var _services_requests_groups_requests_groups_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/requests-groups/requests-groups.resolver */ "./src/app/requests/services/requests-groups/requests-groups.resolver.ts");
/* harmony import */ var _services_requests_executors_requests_executors_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/requests-executors/requests-executors.resolver */ "./src/app/requests/services/requests-executors/requests-executors.resolver.ts");
/* harmony import */ var _services_requests_statuses_requests_statuses_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/requests-statuses/requests-statuses.resolver */ "./src/app/requests/services/requests-statuses/requests-statuses.resolver.ts");
/* harmony import */ var _services_requests_templates_requests_templates_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/requests-templates/requests-templates.resolver */ "./src/app/requests/services/requests-templates/requests-templates.resolver.ts");
/* harmony import */ var _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/companies/company-web.resolver */ "./src/app/services/companies/company-web.resolver.ts");
/* harmony import */ var _services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/companies/company.resolver */ "./src/app/services/companies/company.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'root',
        component: _components_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_2__["RequestsPageComponent"],
        resolve: {
            groups: _services_requests_groups_requests_groups_resolver__WEBPACK_IMPORTED_MODULE_3__["RequestsGroupsResolver"],
            company: _services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_8__["CompanyResolver"],
            executors: _services_requests_executors_requests_executors_resolver__WEBPACK_IMPORTED_MODULE_4__["RequestsExecutorsResolver"],
            statuses: _services_requests_statuses_requests_statuses_resolver__WEBPACK_IMPORTED_MODULE_5__["RequestsStatusesResolver"],
            templates: _services_requests_templates_requests_templates_resolver__WEBPACK_IMPORTED_MODULE_6__["RequestsTemplatesResolver"],
            webId: _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_7__["CompanyWebResolver"]
        },
        data: { animation: 'fadeAnimation', title: 'Заявки' }
    },
    {
        path: ':id',
        component: _components_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_2__["RequestsPageComponent"],
        resolve: {
            groups: _services_requests_groups_requests_groups_resolver__WEBPACK_IMPORTED_MODULE_3__["RequestsGroupsResolver"],
            executors: _services_requests_executors_requests_executors_resolver__WEBPACK_IMPORTED_MODULE_4__["RequestsExecutorsResolver"],
            statuses: _services_requests_statuses_requests_statuses_resolver__WEBPACK_IMPORTED_MODULE_5__["RequestsStatusesResolver"],
            templates: _services_requests_templates_requests_templates_resolver__WEBPACK_IMPORTED_MODULE_6__["RequestsTemplatesResolver"],
            company: _services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_8__["CompanyResolver"],
            webId: _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_7__["CompanyWebResolver"]
        },
        data: { animation: 'fadeAnimation', title: 'Заявки' }
    },
    {
        path: '',
        redirectTo: 'root',
        pathMatch: 'full'
    }
];
var RequestsRoutingModule = /** @class */ (function () {
    function RequestsRoutingModule() {
    }
    RequestsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [
                _services_requests_groups_requests_groups_resolver__WEBPACK_IMPORTED_MODULE_3__["RequestsGroupsResolver"],
                _services_requests_executors_requests_executors_resolver__WEBPACK_IMPORTED_MODULE_4__["RequestsExecutorsResolver"],
                _services_requests_statuses_requests_statuses_resolver__WEBPACK_IMPORTED_MODULE_5__["RequestsStatusesResolver"],
                _services_requests_templates_requests_templates_resolver__WEBPACK_IMPORTED_MODULE_6__["RequestsTemplatesResolver"],
                _services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_8__["CompanyResolver"],
                _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_7__["CompanyWebResolver"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RequestsRoutingModule);
    return RequestsRoutingModule;
}());



/***/ }),

/***/ "./src/app/requests/requests.module.ts":
/*!*********************************************!*\
  !*** ./src/app/requests/requests.module.ts ***!
  \*********************************************/
/*! exports provided: RequestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsModule", function() { return RequestsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/requests-page/requests-page.component */ "./src/app/requests/components/requests-page/requests-page.component.ts");
/* harmony import */ var _components_requests_modal_form_requests_modal_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/requests-modal-form/requests-modal-form.component */ "./src/app/requests/components/requests-modal-form/requests-modal-form.component.ts");
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requests-routing.module */ "./src/app/requests/requests-routing.module.ts");
/* harmony import */ var _components_my_requests_my_requests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-requests/my-requests.component */ "./src/app/requests/components/my-requests/my-requests.component.ts");
/* harmony import */ var _components_requests_to_execute_requests_to_execute_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/requests-to-execute/requests-to-execute.component */ "./src/app/requests/components/requests-to-execute/requests-to-execute.component.ts");
/* harmony import */ var _staff_staff_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../staff/staff.module */ "./src/app/staff/staff.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RequestsModule = /** @class */ (function () {
    function RequestsModule() {
    }
    RequestsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_4__["RequestsPageComponent"],
                _components_requests_modal_form_requests_modal_form_component__WEBPACK_IMPORTED_MODULE_5__["RequestsModalFormComponent"],
                _components_my_requests_my_requests_component__WEBPACK_IMPORTED_MODULE_7__["MyRequestsComponent"],
                _components_requests_to_execute_requests_to_execute_component__WEBPACK_IMPORTED_MODULE_8__["RequestsToExecuteComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _requests_routing_module__WEBPACK_IMPORTED_MODULE_6__["RequestsRoutingModule"],
                _staff_staff_module__WEBPACK_IMPORTED_MODULE_9__["StaffModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            exports: [
                _components_requests_modal_form_requests_modal_form_component__WEBPACK_IMPORTED_MODULE_5__["RequestsModalFormComponent"]
            ]
        })
    ], RequestsModule);
    return RequestsModule;
}());



/***/ }),

/***/ "./src/app/requests/services/requests-executors/requests-executors.resolver.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/requests/services/requests-executors/requests-executors.resolver.ts ***!
  \*************************************************************************************/
/*! exports provided: RequestsExecutorsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsExecutorsResolver", function() { return RequestsExecutorsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _requests_executors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests-executors.service */ "./src/app/requests/services/requests-executors/requests-executors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsExecutorsResolver = /** @class */ (function () {
    function RequestsExecutorsResolver(requestsExecutorService) {
        this.requestsExecutorService = requestsExecutorService;
    }
    RequestsExecutorsResolver.prototype.resolve = function (route, state) {
        return this.requestsExecutorService.getItems({ top: 5000 });
    };
    RequestsExecutorsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_requests_executors_service__WEBPACK_IMPORTED_MODULE_1__["RequestsExecutorsService"]])
    ], RequestsExecutorsResolver);
    return RequestsExecutorsResolver;
}());



/***/ }),

/***/ "./src/app/requests/services/requests-executors/requests-executors.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/requests/services/requests-executors/requests-executors.service.ts ***!
  \************************************************************************************/
/*! exports provided: RequestsExecutorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsExecutorsService", function() { return RequestsExecutorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/list-items-service */ "./src/app/services/list-items-service.ts");
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


var RequestsExecutorsService = /** @class */ (function (_super) {
    __extends(RequestsExecutorsService, _super);
    function RequestsExecutorsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestsExecutorsService.prototype.getListTitle = function () {
        return 'Исполнители для заявок';
    };
    RequestsExecutorsService.prototype.getListRelativePath = function () {
        return 'lists/slRequestsExecutors';
    };
    RequestsExecutorsService.prototype.getSelect = function () {
        return 'Id,Title,slContentType';
    };
    RequestsExecutorsService.prototype.getExpand = function () {
        return '';
    };
    RequestsExecutorsService.prototype.getOrderBy = function () {
        return null;
    };
    RequestsExecutorsService.prototype.getTop = function () {
        return 5000;
    };
    RequestsExecutorsService.prototype.getCachingOptions = function () {
        return null;
    };
    RequestsExecutorsService.prototype.convertListItemToEntity = function (item) {
        var request = {
            id: item.Id,
            title: item.Title,
            contentType: item.slContentType
        };
        return request;
    };
    RequestsExecutorsService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    RequestsExecutorsService.prototype.getMockItems = function () {
        return [];
    };
    RequestsExecutorsService.prototype.isMock = function () {
        return false;
    };
    RequestsExecutorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RequestsExecutorsService);
    return RequestsExecutorsService;
}(src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/requests/services/requests-groups/requests-groups.resolver.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/requests/services/requests-groups/requests-groups.resolver.ts ***!
  \*******************************************************************************/
/*! exports provided: RequestsGroupsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsGroupsResolver", function() { return RequestsGroupsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _requests_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests-groups.service */ "./src/app/requests/services/requests-groups/requests-groups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsGroupsResolver = /** @class */ (function () {
    function RequestsGroupsResolver(requestsGroupsService) {
        this.requestsGroupsService = requestsGroupsService;
    }
    RequestsGroupsResolver.prototype.resolve = function (route, state) {
        return this.requestsGroupsService.getItems({ top: 5000 });
    };
    RequestsGroupsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_requests_groups_service__WEBPACK_IMPORTED_MODULE_1__["RequestsGroupsService"]])
    ], RequestsGroupsResolver);
    return RequestsGroupsResolver;
}());



/***/ }),

/***/ "./src/app/requests/services/requests-groups/requests-groups.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/requests/services/requests-groups/requests-groups.service.ts ***!
  \******************************************************************************/
/*! exports provided: RequestsGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsGroupsService", function() { return RequestsGroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/list-items-service */ "./src/app/services/list-items-service.ts");
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


var RequestsGroupsService = /** @class */ (function (_super) {
    __extends(RequestsGroupsService, _super);
    function RequestsGroupsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestsGroupsService.prototype.getListRelativePath = function () {
        return '';
    };
    RequestsGroupsService.prototype.getListTitle = function () {
        return 'Группы заявок';
    };
    RequestsGroupsService.prototype.getSelect = function () {
        return 'Id,Title,slImage,Created';
    };
    RequestsGroupsService.prototype.getExpand = function () {
        return 'AttachmentFiles';
    };
    RequestsGroupsService.prototype.getOrderBy = function () {
        return [['Created', false]];
    };
    RequestsGroupsService.prototype.getTop = function () {
        return 50;
    };
    RequestsGroupsService.prototype.getCachingOptions = function () {
        return null;
    };
    RequestsGroupsService.prototype.convertListItemToEntity = function (item) {
        var requestGroup = {
            id: item.Id,
            title: item.Title,
            url: item.slImage
        };
        return requestGroup;
    };
    RequestsGroupsService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    RequestsGroupsService.prototype.getMockItems = function () {
        return [];
    };
    RequestsGroupsService.prototype.isMock = function () {
        return false;
    };
    RequestsGroupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RequestsGroupsService);
    return RequestsGroupsService;
}(src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/requests/services/requests-history/requests-history.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/requests/services/requests-history/requests-history.service.ts ***!
  \********************************************************************************/
/*! exports provided: RequestsHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsHistoryService", function() { return RequestsHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/list-items-service */ "./src/app/services/list-items-service.ts");
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


var RequestsHistoryService = /** @class */ (function (_super) {
    __extends(RequestsHistoryService, _super);
    function RequestsHistoryService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestsHistoryService.prototype.getListTitle = function () {
        return 'История заявок';
    };
    RequestsHistoryService.prototype.getListRelativePath = function () {
        return 'lists/slRequestsHistory';
    };
    RequestsHistoryService.prototype.getSelect = function () {
        return 'Id,Title,slRequestLookup/Id,slRequestLookup/Title,slRequestHistoryDescription,'
            + 'slRequestStatusLookupId';
    };
    RequestsHistoryService.prototype.getExpand = function () {
        return 'slRequestLookup';
    };
    RequestsHistoryService.prototype.getOrderBy = function () {
        return [['Id', true]];
    };
    RequestsHistoryService.prototype.getTop = function () {
        return 5000;
    };
    RequestsHistoryService.prototype.getCachingOptions = function () {
        return null;
    };
    RequestsHistoryService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            description: item.slRequestHistoryDescription,
            statusId: item.slRequestStatusLookupId
        };
        if (item.slRequestLookup) {
            entity.requestId = item.slRequestLookup.Id;
        }
        if (item.slRequestStatusLookup) {
            entity.statusId = item.slRequestStatusLookup.Id;
            entity.statusTitle = item.slRequestStatusLookup.Title;
            entity.statusCode = item.slRequestStatusLookup.slCode;
        }
        return entity;
    };
    RequestsHistoryService.prototype.convertEntityToListItem = function (entity) {
        var item = {
            Id: entity.id,
            Title: entity.title,
            slRequestLookupId: entity.requestId,
            slRequestStatusLookupId: entity.statusId,
            slRequestHistoryDescription: entity.description
        };
        return item;
    };
    RequestsHistoryService.prototype.getMockItems = function () {
        return [];
    };
    RequestsHistoryService.prototype.isMock = function () {
        return false;
    };
    RequestsHistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RequestsHistoryService);
    return RequestsHistoryService;
}(src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/requests/services/requests-modal/requests-modal.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/requests/services/requests-modal/requests-modal.service.ts ***!
  \****************************************************************************/
/*! exports provided: RequestsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsModalService", function() { return RequestsModalService; });
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

var RequestsModalService = /** @class */ (function () {
    function RequestsModalService() {
        this.modalIsOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RequestsModalService.prototype.openModal = function () {
        this.modalIsOpen.emit(true);
    };
    RequestsModalService.prototype.closeModal = function () {
        this.modalIsOpen.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RequestsModalService.prototype, "modalIsOpen", void 0);
    RequestsModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RequestsModalService);
    return RequestsModalService;
}());



/***/ }),

/***/ "./src/app/requests/services/requests-statuses/requests-statuses.resolver.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/requests/services/requests-statuses/requests-statuses.resolver.ts ***!
  \***********************************************************************************/
/*! exports provided: RequestsStatusesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsStatusesResolver", function() { return RequestsStatusesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _requests_statuses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests-statuses.service */ "./src/app/requests/services/requests-statuses/requests-statuses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsStatusesResolver = /** @class */ (function () {
    function RequestsStatusesResolver(requestsStatusesService) {
        this.requestsStatusesService = requestsStatusesService;
    }
    RequestsStatusesResolver.prototype.resolve = function (route, state) {
        return this.requestsStatusesService.getItems({ top: 5000 });
    };
    RequestsStatusesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_requests_statuses_service__WEBPACK_IMPORTED_MODULE_1__["RequestsStatusesService"]])
    ], RequestsStatusesResolver);
    return RequestsStatusesResolver;
}());



/***/ }),

/***/ "./src/app/requests/services/requests-statuses/requests-statuses.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/requests/services/requests-statuses/requests-statuses.service.ts ***!
  \**********************************************************************************/
/*! exports provided: RequestsStatusesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsStatusesService", function() { return RequestsStatusesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/list-items-service */ "./src/app/services/list-items-service.ts");
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


var RequestsStatusesService = /** @class */ (function (_super) {
    __extends(RequestsStatusesService, _super);
    function RequestsStatusesService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestsStatusesService.prototype.getListTitle = function () {
        return 'Статусы заявок';
    };
    RequestsStatusesService.prototype.getListRelativePath = function () {
        return 'lists/slRequestStatuses';
    };
    RequestsStatusesService.prototype.getSelect = function () {
        return 'Id,Title,slCode';
    };
    RequestsStatusesService.prototype.getExpand = function () {
        return null;
    };
    RequestsStatusesService.prototype.getOrderBy = function () {
        return null;
    };
    RequestsStatusesService.prototype.getTop = function () {
        return 5000;
    };
    RequestsStatusesService.prototype.getCachingOptions = function () {
        return null;
    };
    RequestsStatusesService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            code: item.slCode
        };
        return entity;
    };
    RequestsStatusesService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    RequestsStatusesService.prototype.getMockItems = function () {
        return [];
    };
    RequestsStatusesService.prototype.isMock = function () {
        return false;
    };
    RequestsStatusesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RequestsStatusesService);
    return RequestsStatusesService;
}(src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/requests/services/requests-templates/requests-templates.resolver.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/requests/services/requests-templates/requests-templates.resolver.ts ***!
  \*************************************************************************************/
/*! exports provided: RequestsTemplatesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsTemplatesResolver", function() { return RequestsTemplatesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _requests_templates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests-templates.service */ "./src/app/requests/services/requests-templates/requests-templates.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsTemplatesResolver = /** @class */ (function () {
    function RequestsTemplatesResolver(requestsTemplatesService) {
        this.requestsTemplatesService = requestsTemplatesService;
    }
    RequestsTemplatesResolver.prototype.resolve = function (route, state) {
        return this.requestsTemplatesService.getItems({ top: 5000 });
    };
    RequestsTemplatesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_requests_templates_service__WEBPACK_IMPORTED_MODULE_1__["RequestsTemplatesService"]])
    ], RequestsTemplatesResolver);
    return RequestsTemplatesResolver;
}());



/***/ }),

/***/ "./src/app/requests/services/requests-templates/requests-templates.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/requests/services/requests-templates/requests-templates.service.ts ***!
  \************************************************************************************/
/*! exports provided: RequestsTemplatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsTemplatesService", function() { return RequestsTemplatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/list-items-service */ "./src/app/services/list-items-service.ts");
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


var RequestsTemplatesService = /** @class */ (function (_super) {
    __extends(RequestsTemplatesService, _super);
    function RequestsTemplatesService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestsTemplatesService.prototype.getListRelativePath = function () {
        return '';
    };
    RequestsTemplatesService.prototype.getListTitle = function () {
        return 'Шаблоны заявок';
    };
    RequestsTemplatesService.prototype.getSelect = function () {
        return 'Id,Title,slImage,slRequestGroupLookup/Id,slContentType,Created,slExternalLink';
    };
    RequestsTemplatesService.prototype.getExpand = function () {
        return 'slRequestGroupLookup';
    };
    RequestsTemplatesService.prototype.getOrderBy = function () {
        return [['Created', false]];
    };
    RequestsTemplatesService.prototype.getTop = function () {
        return 200;
    };
    RequestsTemplatesService.prototype.getCachingOptions = function () {
        return null;
    };
    RequestsTemplatesService.prototype.convertListItemToEntity = function (item) {
        var requestTemplate = {
            id: item.Id,
            title: item.Title,
            url: item.slImage,
            requestTemplateGroupId: null,
            contentType: item.slContentType,
            externalLink: item.slExternalLink
        };
        if (item.slRequestGroupLookup != null) {
            requestTemplate.requestTemplateGroupId = item.slRequestGroupLookup.Id;
        }
        return requestTemplate;
    };
    RequestsTemplatesService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    RequestsTemplatesService.prototype.getMockItems = function () {
        return [];
    };
    RequestsTemplatesService.prototype.isMock = function () {
        return false;
    };
    RequestsTemplatesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RequestsTemplatesService);
    return RequestsTemplatesService;
}(src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/requests/services/requests-workflow/requests-workflow.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/requests/services/requests-workflow/requests-workflow.service.ts ***!
  \**********************************************************************************/
/*! exports provided: RequestsWorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsWorkflowService", function() { return RequestsWorkflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _requests_statuses_requests_statuses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requests-statuses/requests-statuses.service */ "./src/app/requests/services/requests-statuses/requests-statuses.service.ts");
/* harmony import */ var _requests_history_requests_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requests-history/requests-history.service */ "./src/app/requests/services/requests-history/requests-history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _requests_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../requests/requests.service */ "./src/app/requests/services/requests/requests.service.ts");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pnp/sp */ "./node_modules/@pnp/sp/dist/sp.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestsWorkflowService = /** @class */ (function () {
    function RequestsWorkflowService(requestsHistoryService, requestsService, requestsStatusesService) {
        this.requestsHistoryService = requestsHistoryService;
        this.requestsService = requestsService;
        this.requestsStatusesService = requestsStatusesService;
    }
    RequestsWorkflowService.prototype.getNewCountOnAgreement = function (executors, userId, webId, agreementId) {
        var filter = '';
        for (var _i = 0, executors_1 = executors; _i < executors_1.length; _i++) {
            var executor = executors_1[_i];
            filter += "(ContentType eq'" + executor.title + "') or ";
        }
        filter = filter.slice(0, -4);
        return this.requestsService.getItems({
            webId: webId,
            top: 5000,
            filter: "(" + filter + ") and (slRequestStatusLookupId eq " + agreementId + " or slRequestStatusLookupId eq null) and LikedBy/Id ne " + userId
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (items) { return items.length; }));
    };
    RequestsWorkflowService.prototype.getNewCountOnDone = function (userId, webId, agreementId) {
        return this.requestsService.getItems({
            top: 5000,
            webId: webId,
            filter: "(Author/Id eq " + userId + ") and (slRequestStatusLookupId ne " + agreementId + " and slRequestStatusLookupId ne null) and (LikedBy/Id ne " + userId + ")"
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (items) { return items.length; }));
    };
    RequestsWorkflowService.prototype.getRequestsByExecutorsPaged = function (executors, orderBy, webId) {
        var _this = this;
        var filter = '';
        for (var _i = 0, executors_2 = executors; _i < executors_2.length; _i++) {
            var executor = executors_2[_i];
            filter += "(ContentType eq'" + executor.title + "') or ";
        }
        filter = filter.slice(0, -4);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this.requestsStatusesService.getItems(), this.requestsService.getItemsPaged({
                top: 10,
                webId: webId,
                filter: filter,
                orderBy: orderBy
            })]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (results) {
            var statuses = results[0];
            var page = results[1];
            return _this.extendRequestsPageWithStatusesAndHistory(page, statuses, webId);
        }));
    };
    RequestsWorkflowService.prototype.getHistoryForRequests = function (requests, webId) {
        var filter = '';
        for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
            var request = requests_1[_i];
            filter += "(slRequestLookup/Id eq'" + request.id + "') or ";
        }
        filter = filter.slice(0, -4);
        return this.requestsHistoryService.getItems({ webId: webId, filter: filter });
    };
    RequestsWorkflowService.prototype.extendRequestsPageWithStatusesAndHistory = function (page, statuses, webId) {
        var _this = this;
        return this.getHistoryForRequests(page.items, webId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (history) {
            page.items.forEach(function (r) {
                if (history && history.length > 0) {
                    var hs = history.filter(function (h) { return h.requestId === r.id; }).sort(function (a, b) { return b.id - a.id; });
                    if (hs.length > 0) {
                        r.statusTitle = hs[0].statusTitle;
                        r.statusCode = hs[0].statusCode;
                        r.statusId = hs[0].statusId;
                        r.reason = hs[0].description;
                    }
                }
                if (statuses && statuses.length > 0) {
                    var status_1 = statuses.filter(function (s) { return s.id == r.statusId; });
                    if (status_1.length > 0) {
                        r.statusCode = status_1[0].code;
                        r.statusTitle = status_1[0].title;
                    }
                }
            });
            var next = page.getNext;
            page.getNext = function () { return next().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) { return _this.extendRequestsPageWithStatusesAndHistory(p, statuses, webId); })); };
            return page;
        }));
    };
    RequestsWorkflowService.prototype.getRequestsByUserAndTemplatePaged = function (userId, orderBy, webId, templates) {
        var _this = this;
        var filter = '';
        if (templates && templates.length > 0) {
            templates.forEach(function (t) { return filter += "(Title eq '" + t.title + "') or"; });
            filter = filter.slice(0, -3) + ' and ';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this.requestsStatusesService.getItems(), this.requestsService.getItemsPaged({
                top: 10,
                webId: webId,
                filter: filter + "Author/Id eq " + userId,
                orderBy: orderBy
            })]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (results) {
            var statuses = results[0];
            var page = results[1];
            return _this.extendRequestsPageWithStatusesAndHistory(page, statuses, webId);
        }));
    };
    RequestsWorkflowService.prototype.approve = function (request, webId) {
        var _this = this;
        return this.requestsStatusesService.getItems({ webId: webId, filter: 'slCode eq \'APPROVE\'' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (statuses) {
            var status = statuses[0];
            var approve = {
                id: undefined,
                title: "\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u2116" + request.id,
                statusId: status.id,
                requestId: request.id
            };
            return _this.requestsHistoryService.createItem(approve, webId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (history) {
            request.statusId = history.statusId;
            request.statusTitle = history.statusTitle;
            return request;
        }));
    };
    RequestsWorkflowService.prototype.reject = function (request, reason, webId) {
        var _this = this;
        return this.requestsStatusesService.getItems({ webId: webId, filter: 'slCode eq \'REJECT\'' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (statuses) {
            var status = statuses[0];
            var approve = {
                id: undefined,
                title: "\u041E\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u2116" + request.id,
                statusId: status.id,
                requestId: request.id,
                description: reason
            };
            return _this.requestsHistoryService.createItem(approve, webId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (history) {
            request.statusId = history.statusId;
            request.statusTitle = history.statusTitle;
            return request;
        }));
    };
    RequestsWorkflowService.prototype.copyRequestToDraft = function (id, webId) {
        var _this = this;
        var web = null;
        if (webId == null) {
            web = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_6__["sp"].web);
        }
        else {
            web = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_6__["sp"].site.openWebById(webId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (w) { return w.web; }));
        }
        var subWeb = null;
        return web.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (w) {
            subWeb = w;
            return w.lists.getByTitle('Заявки').items.getById(id).get();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (r) {
            var cr = _this.copyRequest(r);
            return subWeb.lists.getByTitle('Черновики заявок').items.add(cr);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (r) { return r.data.ID; }));
    };
    RequestsWorkflowService.prototype.copyRequestFromDraft = function (id, webId) {
        var _this = this;
        var web = null;
        if (webId == null) {
            web = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_6__["sp"].web);
        }
        else {
            web = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_6__["sp"].site.openWebById(webId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (w) { return w.web; }));
        }
        var subWeb = null;
        return web.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (w) {
            subWeb = w;
            return w.lists.getByTitle('Черновики заявок').items.getById(id).get();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (r) {
            var cr = _this.copyRequest(r);
            return subWeb.lists.getByTitle('Заявки').items.add(cr);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (r) { return r.data.ID; }));
    };
    RequestsWorkflowService.prototype.removeDraft = function (id, webId) {
        var web = null;
        if (webId == null) {
            web = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_6__["sp"].web);
        }
        else {
            web = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_6__["sp"].site.openWebById(webId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (w) { return w.web; }));
        }
        return web.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (w) { return w.lists.getByTitle('Черновики заявок').items.getById(id).delete(); }));
    };
    RequestsWorkflowService.prototype.copyRequest = function (request) {
        var r = JSON.parse(JSON.stringify(request));
        for (var p in r) {
            if (r.hasOwnProperty(p)) {
                if (p.indexOf('OData__') !== -1 || p.indexOf('odata.') !== -1) {
                    r[p] = undefined;
                }
                if (r[p] && r[p].length === 0) {
                    r[p] = undefined;
                }
            }
        }
        r.Id = undefined;
        r.ID = undefined;
        r.GUID = undefined;
        r.LikedByStringId = undefined;
        r.LikesCount = undefined;
        r.RatingCount = undefined;
        r.RatedByStringId = undefined;
        r.slRequestStatusLookupId = undefined;
        return r;
    };
    RequestsWorkflowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_requests_history_requests_history_service__WEBPACK_IMPORTED_MODULE_3__["RequestsHistoryService"],
            _requests_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"],
            _requests_statuses_requests_statuses_service__WEBPACK_IMPORTED_MODULE_2__["RequestsStatusesService"]])
    ], RequestsWorkflowService);
    return RequestsWorkflowService;
}());



/***/ }),

/***/ "./src/app/requests/services/requests/requests.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/requests/services/requests/requests.service.ts ***!
  \****************************************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/list-items-service */ "./src/app/services/list-items-service.ts");
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



var RequestsService = /** @class */ (function (_super) {
    __extends(RequestsService, _super);
    function RequestsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestsService.prototype.getListTitle = function () {
        return 'Заявки';
    };
    RequestsService.prototype.getListRelativePath = function () {
        return '/Lists/slRequests';
    };
    RequestsService.prototype.getSelect = function () {
        return 'Id,Title,Created,ContentType/Name,ContentType/Id,'
            + 'slRequestStatusLookupId,ContentTypeId,Author/Id,'
            + 'LikedBy/Id,LikesCount';
    };
    RequestsService.prototype.getExpand = function () {
        return 'ContentType,Author,LikedBy';
    };
    RequestsService.prototype.getOrderBy = function () {
        return [['Created', false]];
    };
    RequestsService.prototype.getTop = function () {
        return 10;
    };
    RequestsService.prototype.getCachingOptions = function () {
        return null;
    };
    RequestsService.prototype.convertListItemToEntity = function (item) {
        var request = {
            id: item.Id,
            title: item.Title,
            date: moment__WEBPACK_IMPORTED_MODULE_2__(item.Created).calendar(null, {
                sameDay: 'DD.MM.YYYY',
                nextDay: 'DD.MM.YYYY',
                nextWeek: 'DD.MM.YYYY',
                lastDay: 'DD.MM.YYYY',
                lastWeek: 'DD.MM.YYYY',
                sameElse: 'DD.MM.YYYY'
            }),
            requestDepartmentId: null,
            statusId: item.slRequestStatusLookupId
        };
        if (item.slRequestStatusLookup) {
            request.statusId = item.slRequestStatusLookup.Id;
            request.statusTitle = item.slRequestStatusLookup.Title;
            request.statusCode = item.slRequestStatusLookup.slCode;
        }
        if (item.ContentType != null) {
            request.type = item.ContentType.Name;
        }
        return request;
    };
    RequestsService.prototype.convertEntityToListItem = function (entity) {
        return {
            Id: entity.id,
            slRequestStatusLookupId: entity.statusId
        };
    };
    RequestsService.prototype.getMockItems = function () {
        return [];
    };
    RequestsService.prototype.isMock = function () {
        return false;
    };
    RequestsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RequestsService);
    return RequestsService;
}(src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



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



/***/ })

}]);
//# sourceMappingURL=default~personal-personal-module~requests-requests-module.js.map