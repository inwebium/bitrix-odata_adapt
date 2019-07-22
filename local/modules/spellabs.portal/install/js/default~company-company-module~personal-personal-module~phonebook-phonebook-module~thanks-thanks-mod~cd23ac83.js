(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-company-module~personal-personal-module~phonebook-phonebook-module~thanks-thanks-mod~cd23ac83"],{

/***/ "./src/app/services/security/current-user-id.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/security/current-user-id.resolver.ts ***!
  \***************************************************************/
/*! exports provided: CurrentUserIdResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserIdResolver", function() { return CurrentUserIdResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentUserIdResolver = /** @class */ (function () {
    function CurrentUserIdResolver(sharepointService) {
        this.sharepointService = sharepointService;
    }
    CurrentUserIdResolver.prototype.resolve = function (route, state) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sharepointService.getCurrentUserContext().userId);
    };
    CurrentUserIdResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__["SharepointService"]])
    ], CurrentUserIdResolver);
    return CurrentUserIdResolver;
}());



/***/ }),

/***/ "./src/app/thanks/components/thanks-informer/thanks-informer.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-informer/thanks-informer.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-gratitude\" [class.not-items]=\"!thanks.length\">\n  <div class=\"l-gratitude__item\" *ngFor=\"let item of thanks\">\n    <div class=\"date\">{{ item.dateTitle }}</div>\n    <div class=\"body\">\n      <div class=\"container\">\n        <div class=\"author\">\n          <div class=\"photo\">\n            <div class=\"to-user\" (click)=\"goToProfile(item.fromUserLogin)\"></div>\n            <app-user-thumb [photo]=\"item.fromUserPhoto\" [showStatus]=\"false\"></app-user-thumb>\n          </div>\n          <div class=\"title\">\n            <div class=\"text\">{{ item.fromUserTitle }}</div>\n          </div>\n        </div>\n        <div class=\"reward\">\n          <div\n            title=\"{{item.thanksTypeTitle}}\"\n            class=\"icon\"\n            [style.backgroundImage]=\"'url(' + getThanksTypeIconById(item.thanksTypeId) + ')'\"\n          ></div>\n          <div class=\"title\">\n            <div class=\"text\">{{ item.thanksTypeTitle }}</div>\n          </div>\n        </div>\n        <div class=\"awarded\">\n          <div class=\"photo\">\n            <div class=\"to-user\" (click)=\"goToProfile(item.toUserLogin)\"></div>\n            <app-user-thumb [photo]=\"item.toUserPhoto\" [showStatus]=\"false\"></app-user-thumb>\n          </div>\n          <div class=\"title\">\n            <div class=\"text\">{{ item.toUserTitle }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/thanks/components/thanks-informer/thanks-informer.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-informer/thanks-informer.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#s4-bodyContainer {\n  padding: 0; }\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n:host ::ng-deep .m-user-thumb {\n  z-index: 1; }\n.l-gratitude {\n  padding: 20px;\n  min-height: 320px;\n  box-sizing: border-box;\n  position: relative; }\n.l-gratitude.not-items {\n    background-color: #dedfe0; }\n.l-gratitude.not-items:after {\n      content: \"\";\n      display: block;\n      background: rgba(0, 0, 0, 0.2);\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: 0;\n      z-index: 0; }\n.l-gratitude.not-items:before {\n      z-index: 1;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      left: 0;\n      right: 0;\n      content: \"Нет благодарностей\";\n      color: #fff;\n      font-size: 16px;\n      font-weight: 600;\n      width: 100%;\n      text-align: center; }\n.l-gratitude__item {\n  border-bottom: 2px dotted #95989a;\n  box-sizing: border-box; }\n.l-gratitude__item + .l-gratitude__item {\n    padding-top: 3%; }\n.l-gratitude__item:last-of-type {\n    border-bottom: 0; }\n.l-gratitude__item .date {\n    color: #050505;\n    font-weight: 600;\n    font-size: 14px;\n    text-transform: lowercase;\n    margin-bottom: 4.5%; }\n.l-gratitude__item .body {\n    padding-bottom: 5px; }\n.l-gratitude__item .body .container {\n      display: table;\n      table-layout: fixed;\n      width: 100%;\n      border-collapse: collapse; }\n.l-gratitude__item .body .container .author,\n      .l-gratitude__item .body .container .reward,\n      .l-gratitude__item .body .container .awarded {\n        position: relative;\n        text-align: center;\n        display: table-cell;\n        height: 100%;\n        vertical-align: top;\n        white-space: normal;\n        width: auto;\n        font-size: 14px;\n        color: #4d4e4d; }\n.l-gratitude__item .body .container .author:before,\n        .l-gratitude__item .body .container .reward:before,\n        .l-gratitude__item .body .container .awarded:before {\n          content: '';\n          position: absolute;\n          display: block;\n          background-color: #dedfe0;\n          top: 28px;\n          width: 50%;\n          left: 50%;\n          height: 1px; }\n.l-gratitude__item .body .container .author .photo,\n        .l-gratitude__item .body .container .reward .photo,\n        .l-gratitude__item .body .container .awarded .photo {\n          position: relative; }\n.l-gratitude__item .body .container .author .photo .to-user,\n          .l-gratitude__item .body .container .reward .photo .to-user,\n          .l-gratitude__item .body .container .awarded .photo .to-user {\n            z-index: 2;\n            position: absolute;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            cursor: pointer; }\n.l-gratitude__item .body .container .author .title,\n        .l-gratitude__item .body .container .reward .title,\n        .l-gratitude__item .body .container .awarded .title {\n          text-align: center;\n          font-size: 0;\n          display: inline-block;\n          height: calc(100% - 56px);\n          width: 100%; }\n.l-gratitude__item .body .container .author .title .text,\n          .l-gratitude__item .body .container .reward .title .text,\n          .l-gratitude__item .body .container .awarded .title .text {\n            width: 100%;\n            font-size: 14px;\n            line-height: 18px;\n            display: inline-block; }\n.l-gratitude__item .body .container .reward {\n        width: 45%; }\n.l-gratitude__item .body .container .reward .icon {\n          background-repeat: no-repeat;\n          background-position: 0 0;\n          background-size: cover;\n          width: 56px;\n          height: 56px;\n          border-radius: 100%;\n          margin: 0 auto;\n          background-color: #DEDFE0;\n          position: relative;\n          z-index: 1;\n          margin-bottom: 6px; }\n@media screen and (max-width: 1440px) {\n          .l-gratitude__item .body .container .reward .title {\n            display: none; } }\n.l-gratitude__item .body .container .reward:before {\n          content: '';\n          width: 120%;\n          left: -10%; }\n.l-gratitude__item .body .container .awarded:before {\n        content: '';\n        left: 0; }\n"

/***/ }),

/***/ "./src/app/thanks/components/thanks-informer/thanks-informer.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-informer/thanks-informer.component.ts ***!
  \********************************************************************************/
/*! exports provided: ThanksInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksInformerComponent", function() { return ThanksInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ThanksInformerComponent = /** @class */ (function () {
    function ThanksInformerComponent(thanksFactory, employeesFactory, router, notificationsService, thanksTypesFactory) {
        this.thanksFactory = thanksFactory;
        this.employeesFactory = employeesFactory;
        this.router = router;
        this.notificationsService = notificationsService;
        this.thanksTypesFactory = thanksTypesFactory;
        this.thanks = [];
        this.thanksTypes = [];
    }
    ThanksInformerComponent.prototype.getThanksTypeIconById = function (id) {
        var type = this.thanksTypes.filter(function (item) { return item.id === id; });
        if (type[0] && type[0].icon) {
            type = this.thanksTypes.filter(function (item) { return item.id === id; })[0].icon;
            return type;
        }
        else {
            return null;
        }
    };
    ThanksInformerComponent.prototype.goToProfile = function (login) {
        var _this = this;
        if (login && login !== '') {
            this.employeesFactory
                .getEmployeeByLogin(this.prepareLogin(login))
                .subscribe(function (employee) {
                if (employee && employee.id) {
                    _this.router.navigate(['phonebook', employee.id]);
                }
                else {
                    _this.notificationsService.warning('Пользователя нет в списке сотрудников');
                }
            });
        }
    };
    ThanksInformerComponent.prototype.prepareLogin = function (login) {
        var l = login.split('|');
        if (login && l) {
            return l[l.length - 1];
        }
        else {
            return login;
        }
    };
    ThanksInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.thanksTypesFactory.getItems().subscribe(function (thanksTypes) {
            _this.thanksTypes = thanksTypes;
        });
        this.thanksFactory.getLastThanks(3).subscribe(function (thanks) {
            _this.thanks = thanks;
        });
    };
    ThanksInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thanks-informer',
            template: __webpack_require__(/*! ./thanks-informer.component.html */ "./src/app/thanks/components/thanks-informer/thanks-informer.component.html"),
            styles: [__webpack_require__(/*! ./thanks-informer.component.scss */ "./src/app/thanks/components/thanks-informer/thanks-informer.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksFactory')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksTypesFactory')),
        __metadata("design:paramtypes", [Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"], Object])
    ], ThanksInformerComponent);
    return ThanksInformerComponent;
}());



/***/ }),

/***/ "./src/app/thanks/components/thanks-modal-form/thanks-modal-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-modal-form/thanks-modal-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-thanks-modal\" *ngIf=\"modalIsOpen\">\n  <div class=\"l-thanks-modal__table\">\n    <div class=\"l-thanks-modal__cell\">\n      <form\n        class=\"l-thanks-modal__content\"\n        #form=\"ngForm\"\n        novalidate\n        (ngSubmit)=\"onSubmit(form)\"\n      >\n        <div class=\"l-thanks-modal__header\">\n          <div class=\"logotype\"></div>\n          <div class=\"body\">\n            <div class=\"title\">Поблагодарить</div>\n            <div class=\"description\">\n              Воспользуйтесь формой, чтобы поблагодарить своего коллегу по работе\n            </div>\n          </div>\n          <div class=\"close\">\n            <input type=\"button\" class=\"btn btn-close\" (click)=\"closeModal()\" />\n          </div>\n        </div>\n        <div class=\"l-thanks-modal__user\" *ngIf=\"photo != null\">\n          <div class=\"content\">\n            <div class=\"photo\">\n              <app-sp-user\n                *ngIf=\"userLogin\"\n                (value)=\"changeUser($event)\"\n                [login]=\"userLogin\"\n                [isMulti]=\"false\"\n                hidden\n              ></app-sp-user>\n              <app-user-thumb\n                [photo]=\"photo\"\n                [height]=\"'100%'\"\n                [width]=\"'100%'\"\n                [showStatus]=\"false\"\n              ></app-user-thumb>\n            </div>\n          </div>\n        </div>\n        <div class=\"l-thanks-modal__user-name\" *ngIf=\"fullName != null\">\n          {{ fullName }}\n        </div>\n        <div class=\"l-thanks-modal__body\">\n          <div class=\"select-employee\" *ngIf=\"photo == null\">\n            <div class=\"title-modal\">\n              Выберите сотрудника\n            </div>\n            <label class=\"error\" *ngIf=\"user == null && !formValid\">Обязательное поле</label>\n            <div class=\"select\">\n              <app-sp-user (value)=\"changeUser($event)\" [isMulti]=\"false\"></app-sp-user>\n            </div>\n          </div>\n          <div class=\"select-thanks\">\n            <label class=\"error\" *ngIf=\"thanksType?.errors?.required && !formValid\">\n              Обязательное поле\n            </label>\n            <div class=\"title-modal\">\n              Выберите тип благодарности:\n            </div>\n            <input\n              name=\"thanksType\"\n              [(ngModel)]=\"thanksTypeId\"\n              required\n              #thanksType=\"ngModel\"\n              hidden\n            />\n            <div class=\"thanks-list\">\n              <ng-container *ngFor=\"let item of thanksTypes\">\n                <div\n                  class=\"thanks-list__item\"\n                  *ngIf=\"aviableThanks[item.id] && aviableThanks[item.id].amount > 0\"\n                  [class.is-current-item]=\"thanksTypeId === item.id\"\n                  (click)=\"this.thanksTypeId = item.id\"\n                >\n                  <div class=\"inner\">\n                    <div class=\"reward-list\">\n                      <i\n                        *ngFor=\"let icon of counterIcons(aviableThanks[item.id].amount)\"\n                        class=\"reward\"\n                        [ngStyle]=\"{ 'background-image': 'url(' + item.icon + ')' }\"\n                      ></i>\n                    </div>\n                    <div class=\"text\">\n                      <div class=\"reward-text\">\n                        {{ item.title }}\n                      </div>\n                      <div class=\"reward-count\" *ngIf=\"aviableThanks[item.id].amount\">\n                        {{ getCountTitle(aviableThanks[item.id].amount) }}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div class=\"comment\">\n              <div class=\"title-modal\">\n                Комментарий\n              </div>\n              <div class=\"text\">\n                <textarea\n                  [(ngModel)]=\"thanksComment\"\n                  id=\"comment\"\n                  name=\"comment\"\n                  maxlength=\"150\"\n                ></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"l-thanks-modal__footer\">\n          <div class=\"title\">\n            Вам доступно по 3 благодарности каждого типа в течение одного месяца\n          </div>\n          <div class=\"button\">\n            <input\n              type=\"submit\"\n              value=\"Отправить\"\n              [disabled]=\"(form?.invalid && thanksTypeId == null) || isLoadingForm\"\n            />\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/thanks/components/thanks-modal-form/thanks-modal-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-modal-form/thanks-modal-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-thanks-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(5, 5, 5, 0.5);\n  overflow-y: auto;\n  z-index: 99999; }\n\n.l-thanks-modal__table {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  height: 100%;\n  border-collapse: collapse; }\n\n.l-thanks-modal__cell {\n  display: table-cell;\n  vertical-align: middle; }\n\n.l-thanks-modal__content {\n  width: 45%;\n  background-color: #fff;\n  overflow: hidden;\n  margin: 0 auto; }\n\n.l-thanks-modal__header {\n  background-color: #dedfe0;\n  box-sizing: border-box;\n  position: relative;\n  padding: 5%; }\n\n.l-thanks-modal__header .logotype {\n    display: inline-block;\n    width: 85px;\n    height: 85px;\n    vertical-align: top;\n    background-image: url(/assets/icons/thanks-modal-icon.svg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-right: 26px; }\n\n.l-thanks-modal__header .body {\n    max-width: calc(100% - 115px);\n    display: inline-block;\n    vertical-align: top; }\n\n.l-thanks-modal__header .body .title {\n      color: #050505;\n      font-size: 34px;\n      line-height: 38px;\n      margin-bottom: 10px;\n      font-weight: 600; }\n\n.l-thanks-modal__header .body .description {\n      color: #050505;\n      font-size: 22px;\n      line-height: 30px; }\n\n.l-thanks-modal__header .close {\n    position: absolute;\n    top: 30px;\n    right: 30px; }\n\n.l-thanks-modal__header .close .btn-close {\n      background-color: #dedfe0; }\n\n.l-thanks-modal__user {\n  text-align: center;\n  position: relative;\n  position: relative; }\n\n.l-thanks-modal__user:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-bottom: 20%; }\n\n.l-thanks-modal__user > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.l-thanks-modal__user:after {\n    content: \"\";\n    z-index: 0;\n    position: absolute;\n    background-color: #dedfe0;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 50%;\n    margin-top: -1px; }\n\n.l-thanks-modal__user .photo,\n  .l-thanks-modal__user .text {\n    position: relative;\n    z-index: 1; }\n\n.l-thanks-modal__user .photo {\n    height: 100%;\n    margin: 0 auto;\n    width: 20%; }\n\n.l-thanks-modal__user-name {\n  color: #050505;\n  font-size: 22px;\n  line-height: 30px;\n  text-align: center;\n  margin-top: 10px; }\n\n.l-thanks-modal__body {\n  max-width: 615px;\n  margin: 0 auto;\n  padding: 30px 20px;\n  box-sizing: border-box; }\n\n.l-thanks-modal__body .title-modal {\n    font-size: 16px;\n    color: #707070;\n    margin-bottom: 10px; }\n\n.l-thanks-modal__body .select-employee {\n    margin-bottom: 35px; }\n\n.l-thanks-modal__body .select-employee .select {\n      position: relative;\n      z-index: 5; }\n\n.l-thanks-modal__body .select-employee .select input[type=\"button\"],\n      .l-thanks-modal__body .select-employee .select input[type=\"search\"] {\n        padding: 0;\n        margin: 0;\n        border: 0;\n        min-width: 0;\n        background-color: transparent;\n        cursor: pointer;\n        height: 50px;\n        line-height: 50px;\n        border: 1px solid #C4C0C0;\n        width: 100%;\n        cursor: inherit;\n        font-size: 18px;\n        color: #050505;\n        padding: 0 20px;\n        box-sizing: border-box; }\n\n.l-thanks-modal__body .select-employee .select input[type=\"button\"]:focus,\n        .l-thanks-modal__body .select-employee .select input[type=\"search\"]:focus {\n          outline: none; }\n\n.l-thanks-modal__body .select-thanks .thanks-list {\n    margin-bottom: 30px; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item + .thanks-list__item {\n      margin-top: 20px; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner {\n      display: table;\n      table-layout: fixed;\n      width: 100%;\n      border-collapse: collapse; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .reward-list,\n      .l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .text {\n        display: table-cell;\n        vertical-align: middle;\n        box-sizing: border-box; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .reward-list {\n        font-size: 0;\n        width: 135px;\n        text-align: left; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .reward-list .reward {\n          cursor: pointer;\n          width: 55px;\n          height: 55px;\n          display: inline-block;\n          vertical-align: top;\n          background-repeat: no-repeat;\n          background-position: 0 0;\n          background-size: cover;\n          background-color: #ddd;\n          border-radius: 100%;\n          position: relative;\n          z-index: 1;\n          box-sizing: border-box;\n          border: 2px solid #fff; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .reward-list .reward:first-child {\n            z-index: 2; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .reward-list .reward:last-child {\n            z-index: 0; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .reward-list .reward + .reward {\n            margin-left: -25px;\n            background-image: none !important; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .text {\n        cursor: pointer;\n        padding-left: 20px;\n        font-size: 20px;\n        color: #050505; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .text .reward-text {\n          line-height: 16px; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item .inner .text .reward-count {\n          color: #707070;\n          font-size: 14px; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item.is-current-item .reward:first-child {\n      background-color: #EE2737 !important;\n      background-position: 100% 0 !important; }\n\n.l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item.is-current-item .text,\n    .l-thanks-modal__body .select-thanks .thanks-list .thanks-list__item.is-current-item .reward-count {\n      color: #EE2737 !important; }\n\n.l-thanks-modal__body .comment .text textarea {\n    display: block;\n    width: 100%;\n    resize: none;\n    min-height: 100px;\n    padding: 5px 10px;\n    box-sizing: border-box;\n    border: 1px solid #C4C0C0; }\n\n.l-thanks-modal__body .comment .text textarea:focus {\n      outline: none; }\n\n.l-thanks-modal__footer {\n  max-width: 615px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n  position: relative;\n  padding-bottom: 45px; }\n\n.l-thanks-modal__footer .title {\n    max-width: 315px;\n    line-height: 24px;\n    font-size: 16px;\n    color: #050505;\n    position: relative; }\n\n.l-thanks-modal__footer .title:before {\n      content: \"*\";\n      position: absolute;\n      left: -15px;\n      top: -5px;\n      font-family: Arial;\n      color: #EE2737;\n      font-size: 24px; }\n\n.l-thanks-modal__footer .button input[type=\"button\"],\n  .l-thanks-modal__footer .button input[type=\"submit\"] {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    min-width: 0;\n    background-color: transparent;\n    cursor: pointer;\n    height: 45px;\n    line-height: 45px;\n    width: 165px;\n    text-align: center;\n    font-size: 18px;\n    color: #fff;\n    background-color: #EE2737;\n    border-radius: 3px;\n    position: absolute;\n    top: 0;\n    right: 20px; }\n\n.l-thanks-modal__footer .button input[type=\"button\"]:focus,\n    .l-thanks-modal__footer .button input[type=\"submit\"]:focus {\n      outline: none; }\n\n.l-thanks-modal__footer .button input[type=\"button\"][disabled],\n    .l-thanks-modal__footer .button input[type=\"submit\"][disabled] {\n      background-color: #f98791; }\n\n:host ::ng-deep .sp-peoplepicker-topLevel {\n  height: 50px;\n  line-height: 50px;\n  padding: 0 20px;\n  font-size: 18px;\n  color: #050505; }\n\n:host ::ng-deep .sp-peoplepicker-topLevel .sp-peoplepicker-initialHelpText {\n    position: static; }\n\n:host ::ng-deep .sp-peoplepicker-topLevel .sp-peoplepicker-autoFillContainer {\n    font-size: 14px;\n    line-height: normal; }\n"

/***/ }),

/***/ "./src/app/thanks/components/thanks-modal-form/thanks-modal-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-modal-form/thanks-modal-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: ThanksModalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksModalFormComponent", function() { return ThanksModalFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ThanksModalFormComponent = /** @class */ (function () {
    function ThanksModalFormComponent(thanksFactory, thanksCountersFactory, notificationsService, document, thanksTypesFactory) {
        this.thanksFactory = thanksFactory;
        this.thanksCountersFactory = thanksCountersFactory;
        this.notificationsService = notificationsService;
        this.document = document;
        this.thanksTypesFactory = thanksTypesFactory;
        this.aviableThanks = {};
        this.thanks = [];
        this.thanksTypeId = null;
        this.thanksComment = null;
        this.isLoadingForm = false;
        this.formValid = true;
        this.user = null;
        this.maxAmountThanks = 3;
        this.bodyElement = null;
        this.refreshThanks = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refreshCounters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hasAviableThanks = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modalIsOpen = false;
        this.userLogin = null;
        this.userId = null;
        this.photo = null;
        this.fullName = null;
        this.thanksTypes = [];
        this.bodyElement = this.document.querySelector('.js-global-wrapper');
    }
    ThanksModalFormComponent.prototype.closeModal = function () {
        this.thanksComment = null;
        this.thanksTypeId = null;
        this.close.emit();
    };
    ThanksModalFormComponent.prototype.onSubmit = function (form) {
        if (this.user == null || this.user.LoginName == null) {
            this.notificationsService.warning('Учетная запись пользователя не задана в системе');
            this.formValid = false;
        }
        if (form.valid &&
            this.thanksTypeId != null &&
            (this.user != null || this.userLogin != null)) {
            this.formValid = true;
            if (this.user.Id !== this.userId) {
                this.createThanks();
            }
            else {
                this.notificationsService.warning('Вы не можете присвоить себе самому благодарность');
            }
        }
        else if (!form.valid) {
            this.formValid = false;
            return;
        }
    };
    ThanksModalFormComponent.prototype.counterIcons = function (i) {
        return new Array(i);
    };
    ThanksModalFormComponent.prototype.getCountTitle = function (count) {
        switch (count) {
            case 1:
                return 'доступна одна';
            case 2:
                return 'доступны две';
            case 3:
                return 'доступны три';
            default:
                return null;
        }
    };
    ThanksModalFormComponent.prototype.createThanks = function () {
        var _this = this;
        this.isLoadingForm = true;
        this.thanksFactory
            .createItem({
            id: undefined,
            title: undefined,
            thanksTypeId: this.thanksTypeId,
            toUserId: this.user.Id,
            toUserEmail: this.user.Email,
            toUserLogin: this.user.LoginName,
            comment: this.thanksComment !== '' ? this.thanksComment : null
        })
            .subscribe(function (item) {
            _this.isLoadingForm = false;
            if (item) {
                _this.closeModal();
                _this.getThanksCreatedByUserId();
                _this.createThanksCounter(item);
                _this.refreshThanks.emit();
            }
        });
    };
    ThanksModalFormComponent.prototype.changeUser = function (users) {
        this.user = users && users.length > 0 ? users[0] : null;
    };
    ThanksModalFormComponent.prototype.createThanksCounter = function (item) {
        var _this = this;
        this.thanksCountersFactory
            .getThanksCounter(item.toUserId, item.thanksTypeId)
            .subscribe(function (counterElement) {
            if (counterElement) {
                _this.updateCounter(counterElement).then(function () {
                    _this.createTotalThanksCounter(counterElement);
                });
            }
            else {
                _this.createCounter(item).then(function () {
                    _this.createTotalThanksCounter(item);
                });
            }
        });
    };
    ThanksModalFormComponent.prototype.getThanksCreatedByUserId = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            this.thanksTypesFactory.getItems(),
            this.thanksFactory.getThanksCreatedByUserId(this.userId)
        ]).subscribe(function (results) {
            _this.thanksTypes = results[0];
            _this.thanks = results[1];
            _this.updateAviableThanks(_this.thanks);
        });
    };
    ThanksModalFormComponent.prototype.createTotalThanksCounter = function (item) {
        var _this = this;
        this.thanksCountersFactory
            .getThanksCounter(item.toUserId, undefined)
            .subscribe(function (counter) {
            item.thanksTypeId = undefined;
            if (counter) {
                _this.updateCounter(counter).then(function () {
                    _this.refreshCounters.emit();
                });
            }
            else {
                _this.createCounter(item).then(function () {
                    _this.refreshCounters.emit();
                });
            }
        });
    };
    ThanksModalFormComponent.prototype.updateCounter = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.thanksCountersFactory
                .updateItem({
                id: item.id,
                title: item.title,
                thanksTypeId: item.thanksTypeId,
                toUserId: item.toUserId,
                count: item.count + 1,
                positionName: item.positionName
            })
                .subscribe(function () {
                resolve();
            });
        });
    };
    ThanksModalFormComponent.prototype.createCounter = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.thanksCountersFactory
                .createItem({
                id: undefined,
                title: item.title,
                thanksTypeId: item.thanksTypeId,
                toUserId: item.toUserId,
                count: 1
            })
                .subscribe(function () {
                resolve();
            });
        });
    };
    ThanksModalFormComponent.prototype.setAviableThanks = function (thanksTypes) {
        for (var i = 0; i < thanksTypes.length; i++) {
            this.aviableThanks[thanksTypes[i].id] = {
                id: thanksTypes[i].id,
                title: thanksTypes[i].title,
                amount: this.maxAmountThanks,
                icon: thanksTypes[i].icon
            };
        }
    };
    ThanksModalFormComponent.prototype.updateAviableThanks = function (thanks) {
        this.setAviableThanks(this.thanksTypes);
        var groupedByThanksType = lodash__WEBPACK_IMPORTED_MODULE_1__["groupBy"](thanks, function (thank) { return thank.thanksTypeId; });
        for (var thanksTypeId in groupedByThanksType) {
            if (groupedByThanksType.hasOwnProperty(thanksTypeId)) {
                var length_1 = groupedByThanksType[thanksTypeId].length;
                var amount = length_1 <= this.maxAmountThanks ? this.maxAmountThanks - length_1 : 0;
                if (length_1 > 0) {
                    this.aviableThanks[thanksTypeId] = {
                        id: groupedByThanksType[thanksTypeId][length_1 - 1].thanksTypeId,
                        title: groupedByThanksType[thanksTypeId][length_1 - 1].thanksTypeTitle,
                        amount: amount,
                        icon: this.aviableThanks[thanksTypeId].icon
                    };
                }
                if (amount === 0) {
                    delete this.aviableThanks[thanksTypeId];
                }
            }
        }
        var isEmpty = Object.keys(this.aviableThanks).length === 0 ? true : false;
        this.hasAviableThanks.emit(isEmpty);
    };
    ThanksModalFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes.modalIsOpen.currentValue && this.bodyElement) {
            this.bodyElement.classList.add('has-open-modal');
        }
        else if (this.bodyElement && !changes.modalIsOpen.firstChange) {
            this.user = null;
            this.userLogin = null;
            this.formValid = true;
            this.bodyElement.classList.remove('has-open-modal');
        }
    };
    ThanksModalFormComponent.prototype.ngOnInit = function () {
        this.getThanksCreatedByUserId();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ThanksModalFormComponent.prototype, "refreshThanks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ThanksModalFormComponent.prototype, "refreshCounters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ThanksModalFormComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ThanksModalFormComponent.prototype, "hasAviableThanks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThanksModalFormComponent.prototype, "modalIsOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ThanksModalFormComponent.prototype, "userLogin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ThanksModalFormComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ThanksModalFormComponent.prototype, "photo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ThanksModalFormComponent.prototype, "fullName", void 0);
    ThanksModalFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thanks-modal-form',
            template: __webpack_require__(/*! ./thanks-modal-form.component.html */ "./src/app/thanks/components/thanks-modal-form/thanks-modal-form.component.html"),
            styles: [__webpack_require__(/*! ./thanks-modal-form.component.scss */ "./src/app/thanks/components/thanks-modal-form/thanks-modal-form.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksFactory')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksCountersFactory')),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksTypesFactory')),
        __metadata("design:paramtypes", [Object, Object, src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
            Document, Object])
    ], ThanksModalFormComponent);
    return ThanksModalFormComponent;
}());



/***/ }),

/***/ "./src/app/thanks/components/thanks-page/thanks-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-page/thanks-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">Благодарности</div>\n  </div>\n  <div class=\"title\">\n    <div class=\"text\">\n      Благодарности\n    </div>\n    <input\n      type=\"button\"\n      class=\"thank-button\"\n      value=\"Поблагодарить\"\n      (click)=\"openThanksModal()\"\n    />\n  </div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-thanks\">\n        <app-tabs\n          (activeTab)=\"setActiveTab($event)\"\n          [tabsItemPadding]=\"'0 45px'\"\n          [tabsContentPadding]=\"'0px'\"\n          [contentBgColor]=\"'#fff'\"\n        >\n          <app-tab [tabTitle]=\"'История'\">\n            <div class=\"l-thanks__history\">\n              <div class=\"l-thanks__filters\">\n                <div class=\"filter\">\n                  <div\n                    class=\"inner\"\n                    [class.is-active]=\"currentCompany === null\"\n                  >\n                    Все\n                  </div>\n                </div>\n                <div class=\"filter\" *ngFor=\"let company of companies\">\n                  <div\n                    class=\"inner\"\n                    [class.is-active]=\"company.id == currentCompany?.id\"\n                  >\n                    {{ company.title }}\n                  </div>\n                </div>\n              </div>\n              <div class=\"no-items\" *ngIf=\"!thanks.length\">\n                Нет благодарностей\n              </div>\n              <div class=\"l-thanks__history-item\" *ngFor=\"let item of thanks\">\n                <div class=\"date-time\">\n                  <span>{{ item.date }}</span>\n                </div>\n                <div class=\"list\">\n                  <div class=\"item\" *ngFor=\"let thanks of item.thanks\">\n                    <div class=\"inner\">\n                      <div class=\"left-side\">\n                        <div class=\"thanks-info\">\n                          <div class=\"from\">\n                            <div\n                              class=\"to-user\"\n                              (click)=\"goToProfile(thanks.fromUserLogin)\"\n                            ></div>\n                            <app-user-thumb\n                              [showStatus]=\"false\"\n                              [width]=\"'90px'\"\n                              [height]=\"'90px'\"\n                              [photo]=\"thanks.fromUserPhoto\"\n                            ></app-user-thumb>\n                          </div>\n                          <div class=\"thank\">\n                            <i\n                              title=\"{{ thanks.thanksTypeTitle }}\"\n                              [ngStyle]=\"{\n                                'background-image':\n                                  'url(' +\n                                  getThanksTypeIconById(thanks.thanksTypeId) +\n                                  ')'\n                              }\"\n                            ></i>\n                          </div>\n                          <div class=\"to\">\n                            <div\n                              class=\"to-user\"\n                              (click)=\"goToProfile(thanks.toUserLogin)\"\n                            ></div>\n                            <app-user-thumb\n                              [showStatus]=\"false\"\n                              [width]=\"'90px'\"\n                              [height]=\"'90px'\"\n                              [photo]=\"thanks.toUserPhoto\"\n                            ></app-user-thumb>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"right-side\">\n                        <div class=\"title\">\n                          {{ thanks.fromUserTitle }} <span>→</span>\n                          {{ thanks.toUserTitle }}\n                        </div>\n                        <div class=\"thank\">«{{ thanks.thanksTypeTitle }}»</div>\n                        <div class=\"description\" *ngIf=\"thanks.comment\">\n                          {{ thanks.comment }}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </app-tab>\n          <app-tab [tabTitle]=\"'Рейтинг'\">\n            <div class=\"thanks-rating\">\n              <div class=\"head\">\n                <div class=\"row\">\n                  <div class=\"inner\">\n                    <div class=\"cell\"></div>\n                    <div class=\"cell user-cell header\">\n                      <div class=\"wrapper\">\n                        <div class=\"l-thanks__filters\">\n                          <div class=\"filter\">\n                            <div\n                              class=\"inner\"\n                              [class.is-active]=\"currentCompany === null\"\n                            >\n                              Все\n                            </div>\n                          </div>\n                          <div class=\"filter\" *ngFor=\"let company of companies\">\n                            <div\n                              class=\"inner\"\n                              [class.is-active]=\"\n                                company.id == currentCompany?.id\n                              \"\n                            >\n                              {{ company.title }}\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"cell\" *ngFor=\"let type of thanksTypes\">\n                      <i\n                        class=\"icon-thanks\"\n                        title=\"{{ type.title }}\"\n                        [ngStyle]=\"{\n                          'background-image': 'url(' + type.icon + ')'\n                        }\"\n                      ></i>\n                    </div>\n                    <div class=\"cell\">Всего</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"no-items\" *ngIf=\"!thanksRating.length\">\n                Нет благодарностей\n              </div>\n              <div class=\"body\" [class.is-loading]=\"ratingIsLoading\">\n                <ng-container\n                  *ngFor=\"let itemRating of thanksRating; let i = index\"\n                >\n                  <div class=\"row\">\n                    <div class=\"inner\">\n                      <div class=\"cell\">\n                        <div class=\"item-order\">\n                          {{ i + 1 }}\n                        </div>\n                      </div>\n                      <div class=\"cell user-cell\">\n                        <div class=\"user\">\n                          <div class=\"thumb\">\n                            <app-user-thumb\n                              [showStatus]=\"false\"\n                              [width]=\"'90px'\"\n                              [height]=\"'90px'\"\n                              [photo]=\"itemRating.photo\"\n                              [route]=\"itemRating.profileRoute\"\n                            ></app-user-thumb>\n                          </div>\n                          <div class=\"info\">\n                            <div class=\"title\">\n                              {{ itemRating.userTitle }}\n                            </div>\n                            <div class=\"position\">\n                              {{ itemRating.positionName }}\n                            </div>\n                            <div class=\"root-department\">\n                              {{ itemRating.rootDepartmentTitle }}\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"cell\" *ngFor=\"let type of thanksTypes\">\n                        <ng-container *ngFor=\"let item of itemRating.list\">\n                          <ng-container *ngIf=\"type.id === item.thanksTypeId\">\n                            {{ item.count }}\n                          </ng-container>\n                        </ng-container>\n                      </div>\n                      <div class=\"cell\">{{ itemRating.total }}</div>\n                    </div>\n                  </div>\n                </ng-container>\n                <div class=\"row is-current-user\" *ngIf=\"currentUserRating\">\n                  <div class=\"inner\">\n                    <div class=\"cell\">\n                      <div class=\"item-order\" [style.background]=\"currentUserRating.index === null ? 'transparent' : '#EB113B'\">\n                        {{\n                          currentUserRating.index != null\n                            ? currentUserRating.index + 1\n                            : null\n                        }}\n                      </div>\n                    </div>\n                    <div class=\"cell user-cell\">\n                      <div class=\"user\">\n                        <div class=\"thumb\">\n                          <div\n                            class=\"to-user\"\n                            (click)=\"goToProfile(currentUserRating.userLogin)\"\n                          ></div>\n                          <app-user-thumb\n                            [showStatus]=\"false\"\n                            [width]=\"'90px'\"\n                            [height]=\"'90px'\"\n                            [photo]=\"currentUserRating.photo\"\n                          ></app-user-thumb>\n                        </div>\n                        <div class=\"info\">\n                          <div class=\"title\">\n                            {{ currentUserRating?.userTitle }}\n                          </div>\n                          <div class=\"position\">\n                            {{ currentUserRating?.positionName }}\n                          </div>\n                          <div class=\"root-department\">\n                            {{ currentUserRating?.rootDepartmentTitle }}\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"cell\" *ngFor=\"let type of thanksTypes\">\n                      <ng-container\n                        *ngFor=\"let item of currentUserRating?.list\"\n                      >\n                        <ng-container *ngIf=\"type.id === item.thanksTypeId\">\n                          {{ item.count }}\n                        </ng-container>\n                      </ng-container>\n                    </div>\n                    <div class=\"cell\">{{ currentUserRating?.total }}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </app-tab>\n        </app-tabs>\n      </div>\n      <div class=\"l-thanks-modal\">\n        <app-button-up></app-button-up>\n        <app-thanks-modal-form\n          [userId]=\"userId\"\n          [modalIsOpen]=\"modalIsOpen\"\n          (hasAviableThanks)=\"aviableThanksEmpty = $event\"\n          (close)=\"closeThanksModal()\"\n          (refreshThanks)=\"getThanks()\"\n          (refreshCounters)=\"getThanksCounters()\"\n        ></app-thanks-modal-form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/thanks/components/thanks-page/thanks-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-page/thanks-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-inner {\n  margin-bottom: 0; }\n\n.l-page {\n  margin: 0;\n  padding: 0; }\n\n.l-page-header {\n  padding-top: 30px;\n  padding-left: 50px;\n  padding-right: 45px;\n  padding-bottom: 45px;\n  max-width: 100%; }\n\n.l-page-header .title {\n    position: relative; }\n\n.l-page-header .title .text {\n      margin-left: -2px; }\n\n.l-page-header .title input[type=\"button\"].thank-button {\n      position: absolute;\n      top: 50%;\n      right: 0;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      padding: 0;\n      margin: 0;\n      border: 0;\n      min-width: 0;\n      background-color: transparent;\n      cursor: pointer;\n      height: 45px;\n      line-height: 45px;\n      box-sizing: border-box;\n      padding: 0 25px;\n      background-color: #EB113B;\n      color: #fff;\n      font-size: 18px;\n      text-align: center;\n      border-radius: 3px;\n      font-family: Circe; }\n\n.l-page-header .title input[type=\"button\"].thank-button:focus {\n        outline: none; }\n\n.l-page-header .title input[type=\"button\"].thank-button:focus {\n        outline: none; }\n\n.no-items {\n  height: 150px;\n  line-height: 150px;\n  text-align: center;\n  font-size: 20px; }\n\n.item-order {\n  width: 46px;\n  height: 46px;\n  line-height: 47px;\n  border-radius: 100%;\n  background-color: #fff;\n  font-size: 22px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  color: #050505; }\n\n@media screen and (max-width: 1440px) {\n    .right-sidebar-opened .item-order {\n      font-size: 18px;\n      width: 40px;\n      height: 40px;\n      line-height: 40px; } }\n\n.is-current-user .item-order {\n    background-color: #EE2737;\n    color: #fff; }\n\n@media screen and (max-width: 1440px) {\n  :host-context(.right-sidebar-opened) .icon-thanks {\n    width: 50px !important;\n    height: 50px !important; }\n  :host-context(.right-sidebar-opened) .cell {\n    font-size: 18px !important; }\n    :host-context(.right-sidebar-opened) .cell .user .title {\n      font-size: 18px !important; }\n    :host-context(.right-sidebar-opened) .cell .user .position,\n    :host-context(.right-sidebar-opened) .cell .user .root-department {\n      font-size: 14px !important; } }\n\n.thanks-rating {\n  position: relative; }\n\n.thanks-rating .row .inner {\n    max-width: 1480px; }\n\n.thanks-rating .row.is-current-user {\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #F7F7F7;\n    z-index: 1; }\n\n.thanks-rating .cell {\n    display: inline-block;\n    vertical-align: middle;\n    width: 7%; }\n\n.thanks-rating .cell:first-child {\n      width: 95px; }\n\n.thanks-rating .cell.user-cell {\n      width: 40%; }\n\n.thanks-rating .cell.user-cell.header {\n        vertical-align: top;\n        padding: 25px 0 !important; }\n\n.thanks-rating .cell.user-cell .wrapper {\n        min-height: 100%;\n        padding-left: 45px;\n        margin-left: -95px;\n        text-align: left;\n        box-sizing: border-box;\n        padding-right: 15px; }\n\n.thanks-rating .cell.user-cell .wrapper .l-thanks__filters {\n          margin-bottom: 0; }\n\n.thanks-rating .head {\n    border-bottom: 1px solid #DEDFE0;\n    box-sizing: border-box; }\n\n.thanks-rating .head .cell {\n      text-align: center;\n      color: #747373;\n      font-size: 22px;\n      font-weight: 400;\n      padding: 20px 0;\n      box-sizing: border-box; }\n\n.thanks-rating .head .cell i {\n        margin: 0 auto;\n        display: block;\n        width: 70px;\n        height: 70px;\n        background-repeat: no-repeat;\n        background-position: 0 0;\n        background-size: cover;\n        background-color: #DEDFE0;\n        border-radius: 100%; }\n\n.thanks-rating .body {\n    position: relative; }\n\n.thanks-rating .body.is-loading:after {\n      content: \"\";\n      background-color: #ddd;\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      opacity: .5; }\n\n.thanks-rating .body .cell {\n      text-align: center;\n      font-size: 22px;\n      font-family: Arial, Helvetica, sans-serif;\n      padding: 15px 0;\n      box-sizing: border-box; }\n\n.thanks-rating .body .cell:empty:before {\n        content: \"0\";\n        display: block; }\n\n.thanks-rating .body .cell:first-child {\n        vertical-align: top;\n        padding-top: 30px;\n        padding-right: 5px;\n        padding-left: 35px; }\n\n.thanks-rating .body .cell:last-child {\n        font-weight: 600; }\n\n.thanks-rating .body .cell .user {\n        text-align: left;\n        display: table;\n        table-layout: fixed;\n        width: 100%;\n        border-collapse: collapse; }\n\n.thanks-rating .body .cell .user .thumb,\n        .thanks-rating .body .cell .user .info {\n          display: table-cell;\n          vertical-align: middle;\n          box-sizing: border-box; }\n\n.thanks-rating .body .cell .user .thumb {\n          width: 90px;\n          position: relative; }\n\n.thanks-rating .body .cell .user .thumb .to-user {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            z-index: 1;\n            cursor: pointer; }\n\n.thanks-rating .body .cell .user .info {\n          padding-left: 25px; }\n\n.thanks-rating .body .cell .user .info .title,\n          .thanks-rating .body .cell .user .info .position,\n          .thanks-rating .body .cell .user .info .root-department {\n            color: #050505; }\n\n.thanks-rating .body .cell .user .info .title {\n            font-size: 22px;\n            font-weight: 600;\n            line-height: 24px;\n            color: #050505; }\n\n.thanks-rating .body .cell .user .info .title + .position {\n              margin-top: 5px; }\n\n.thanks-rating .body .cell .user .info .position,\n          .thanks-rating .body .cell .user .info .root-department {\n            line-height: 20px;\n            font-size: 16px; }\n\n.thanks-rating .body .cell .user .info .position + .root-department,\n            .thanks-rating .body .cell .user .info .root-department + .root-department {\n              margin-top: 5px; }\n\n@media screen and (max-width: 1440px) {\n              .right-sidebar-opened .thanks-rating .body .cell .user .info .position, .right-sidebar-opened\n              .thanks-rating .body .cell .user .info .root-department {\n                font-size: 14px; } }\n\n.l-thanks__history {\n  padding: 25px 45px;\n  box-sizing: border-box; }\n\n.l-thanks__filters {\n  margin: 0 -7.5px;\n  font-size: 0;\n  margin-bottom: 15px;\n  min-height: 25px; }\n\n.l-thanks__filters .filter {\n    padding: 0 7.5px;\n    display: inline-block;\n    vertical-align: top;\n    margin-bottom: 15px; }\n\n.l-thanks__filters .filter .inner {\n      padding: 0 12px;\n      border-radius: 12px;\n      border: 1px solid #898888;\n      font-size: 14px;\n      height: 25px;\n      line-height: 25px;\n      color: #898888;\n      text-transform: uppercase;\n      cursor: pointer; }\n\n.l-thanks__filters .filter .inner.is-active {\n        border-color: #EB113B;\n        color: #050505; }\n\n.l-thanks__history-item + .l-thanks__history-item {\n  margin-top: 30px; }\n\n.l-thanks__history-item + .l-thanks__history-item .date-time::after {\n    content: \"\";\n    height: 3px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    background-repeat: repeat-x;\n    background-image: url(\"/assets/icons/icon-ellipse.svg\");\n    background-size: contain;\n    background-position: left center; }\n\n.l-thanks__history-item .date-time {\n  font-size: 22px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #050505;\n  margin-bottom: 15px;\n  position: relative; }\n\n.l-thanks__history-item .date-time span {\n    position: relative;\n    padding-right: 10px; }\n\n.l-thanks__history-item .list .item + .item {\n  margin-top: 30px; }\n\n.l-thanks__history-item .list .item .inner {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse; }\n\n.l-thanks__history-item .list .item .inner .left-side,\n  .l-thanks__history-item .list .item .inner .right-side {\n    display: table-cell;\n    vertical-align: top;\n    box-sizing: border-box; }\n\n.l-thanks__history-item .list .item .left-side {\n  width: 315px; }\n\n.l-thanks__history-item .list .item .left-side .thanks-info {\n    font-size: 0;\n    margin: 0 -10px; }\n\n.l-thanks__history-item .list .item .left-side .thanks-info .to-user {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 1;\n      cursor: pointer; }\n\n.l-thanks__history-item .list .item .left-side .from,\n  .l-thanks__history-item .list .item .left-side .thank,\n  .l-thanks__history-item .list .item .left-side .to {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    padding: 0 10px;\n    box-sizing: border-box; }\n\n.l-thanks__history-item .list .item .left-side .thank i {\n    display: block;\n    width: 90px;\n    height: 90px;\n    background-repeat: no-repeat;\n    background-position: 0 0;\n    background-size: cover;\n    background-color: #ddd;\n    border-radius: 100%; }\n\n.l-thanks__history-item .list .item .right-side {\n  padding-left: 30px;\n  padding-top: 15px; }\n\n.l-thanks__history-item .list .item .right-side .title {\n    font-size: 22px;\n    font-weight: 600;\n    color: #050505; }\n\n.l-thanks__history-item .list .item .right-side .title span {\n      font-family: cursive; }\n\n.l-thanks__history-item .list .item .right-side .thank {\n    text-transform: lowercase;\n    font-size: 16px;\n    color: #050505; }\n\n.l-thanks__history-item .list .item .right-side .thank + .description {\n      margin-top: 10px; }\n\n.l-thanks__history-item .list .item .right-side .description {\n    font-size: 16px;\n    line-height: 28px;\n    color: #707070;\n    max-width: 775px; }\n\n:host ::ng-deep .m-tabs {\n  background-color: #F7F7F7; }\n"

/***/ }),

/***/ "./src/app/thanks/components/thanks-page/thanks-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-page/thanks-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ThanksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPageComponent", function() { return ThanksPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/companies/companies.service */ "./src/app/services/companies/companies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ThanksPageComponent = /** @class */ (function () {
    function ThanksPageComponent(document, thanksFactory, thanksCountersFactory, employeesFactory, notificationsService, companiesService, route, router) {
        this.document = document;
        this.thanksFactory = thanksFactory;
        this.thanksCountersFactory = thanksCountersFactory;
        this.employeesFactory = employeesFactory;
        this.notificationsService = notificationsService;
        this.companiesService = companiesService;
        this.route = route;
        this.router = router;
        this.thanksUnGrouped = [];
        this.thanksRatingUnGrouped = [];
        this.currentUserRating = null;
        this.thanks = [];
        this.thanksRating = [];
        this.thanksTypes = [];
        this.thanksCounters = [];
        this.userId = null;
        this.s4 = null;
        this.thanksPage = null;
        this.thanksRatingPage = null;
        this.isLoadingItems = false;
        this.ratingIsLoading = false;
        this.modalIsOpen = false;
        this.activeTab = null;
        this.aviableThanksEmpty = false;
        this.employeesForRating = [];
        this.appContainerStyle = { 'background-color': '#F7F7F7', 'padding': '0px' };
        this.companies = null;
        this.currentCompany = null;
    }
    ThanksPageComponent.prototype.openThanksModal = function () {
        if (!this.aviableThanksEmpty) {
            this.modalIsOpen = true;
        }
        else {
            alert("\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u0435\u0439 \u043D\u0435\u0442. "
                + "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043C\u0435\u0441\u044F\u0446\u0435");
        }
    };
    ThanksPageComponent.prototype.closeThanksModal = function () {
        this.modalIsOpen = false;
    };
    ThanksPageComponent.prototype.getThanks = function () {
        var _this = this;
        var currentYear = new Date().getFullYear();
        var start = new Date(currentYear, 0, 1).toISOString();
        var end = new Date(currentYear, 11, 31).toISOString();
        this.thanksFactory.getByPeriod(start, end)
            .subscribe(function (thanks) {
            _this.thanksPage = thanks;
            _this.thanks = _this.groupThanksByDate(_this.thanksPage.items);
        });
    };
    ThanksPageComponent.prototype.getThanksTypeIconById = function (id) {
        var type = this.thanksTypes.filter(function (item) { return item.id === id; });
        if (type[0] && type[0].icon) {
            type = this.thanksTypes.filter(function (item) { return item.id === id; })[0].icon;
            return type;
        }
        else {
            return null;
        }
    };
    ThanksPageComponent.prototype.refreshThanks = function () {
        this.getThanks();
        this.getThanksCounters();
    };
    ThanksPageComponent.prototype.prepareLogin = function (login) {
        if (login) {
            var l = login.split('|');
            return l[l.length - 1];
        }
        else {
            return login;
        }
    };
    ThanksPageComponent.prototype.goToProfile = function (login) {
        var _this = this;
        if (login && login !== '') {
            this.employeesFactory.getEmployeeByLogin(this.prepareLogin(login))
                .subscribe(function (employee) {
                if (employee && employee.id) {
                    _this.router.navigate(['phonebook', employee.id]);
                }
                else {
                    _this.notificationsService.warning('Пользователя нет в списке сотрудников');
                }
            });
        }
    };
    ThanksPageComponent.prototype.groupThanksByDate = function (thanks) {
        this.thanksUnGrouped = thanks;
        var groupedThanks = [];
        var groupedByDate = lodash__WEBPACK_IMPORTED_MODULE_5__["groupBy"](this.thanksUnGrouped, function (thank) {
            return thank.dateTitle;
        });
        for (var date in groupedByDate) {
            if (groupedByDate.hasOwnProperty(date)) {
                groupedThanks.push({
                    date: date,
                    thanks: groupedByDate[date]
                });
            }
        }
        return groupedThanks;
    };
    ThanksPageComponent.prototype.groupThanksCountersByUser = function (thanksRating, employees) {
        this.thanksRatingUnGrouped = thanksRating;
        this.employeesForRating = this.employeesForRating.concat(employees);
        var groupedThanksRating = [];
        var groupedByUserId = lodash__WEBPACK_IMPORTED_MODULE_5__["groupBy"](this.thanksRatingUnGrouped, function (thankRating) { return thankRating.toUserId; });
        var _loop_1 = function (id) {
            if (groupedByUserId.hasOwnProperty(id)) {
                var total = this_1.getSumOfCount(groupedByUserId[id]);
                if (groupedByUserId[id].length) {
                    var login_1 = groupedByUserId[id][0].toUserLogin;
                    var empl = this_1.employeesForRating.filter(function (e) { return e.login === login_1; })[0]
                        ? this_1.employeesForRating.filter(function (e) { return e.login === login_1; })[0]
                        : null;
                    groupedThanksRating.push({
                        userId: Number(id),
                        userTitle: groupedByUserId[id][0].toUserTitle,
                        photo: groupedByUserId[id][0].toUserPhoto,
                        total: total.count,
                        userLogin: login_1,
                        rootDepartmentTitle: empl ? empl.rootLookupDepartmentTitle : 'Корневое подразделение не указано',
                        positionName: empl ? empl.positionName : 'Должность не указана',
                        profileRoute: empl ? empl.profileRoute : null,
                        list: groupedByUserId[id]
                    });
                }
            }
        };
        var this_1 = this;
        for (var id in groupedByUserId) {
            _loop_1(id);
        }
        groupedThanksRating.sort(function (a, b) { return (a.userTitle < b.userTitle ? -1 : 1); });
        groupedThanksRating.sort(function (a, b) { return (a.total < b.total ? 1 : -1); });
        this.checkCurrentUserPlace(groupedThanksRating);
        return groupedThanksRating;
    };
    ThanksPageComponent.prototype.checkCurrentUserPlace = function (rating) {
        var _this = this;
        var place = null;
        var user = rating.filter(function (item, index) {
            if (item.userId === _this.userId) {
                place = index;
            }
            return item.userId === _this.userId;
        });
        if (user && this.currentUserRating) {
            this.currentUserRating.index = place;
        }
    };
    ThanksPageComponent.prototype.getSumOfCount = function (array) {
        var total = { count: 0 };
        if (array && array.length) {
            total =
                array.length > 1
                    ? array.reduce(function (a, b) { return ({ count: a.count + b.count }); })
                    : (total = { count: array[0].count });
        }
        return total;
    };
    ThanksPageComponent.prototype.getCurrentUserRating = function () {
        var _this = this;
        this.thanksCountersFactory.getRatingToUser(this.userId).subscribe(function (rating) {
            if (rating.length) {
                var total_1 = _this.getSumOfCount(rating);
                var r_1 = rating[0];
                var login = _this.prepareLogin(r_1.toUserLogin);
                _this.getEmployeeForRating(login).subscribe(function (e) {
                    if (e) {
                        _this.currentUserRating = {
                            index: null,
                            userId: Number(r_1.toUserId),
                            userTitle: r_1.toUserTitle,
                            photo: e.photo,
                            total: total_1.count,
                            profileRoute: e.profileRoute,
                            rootDepartmentTitle: e.rootLookupDepartmentTitle,
                            userLogin: e.login,
                            positionName: e.positionName,
                            list: rating
                        };
                    }
                });
            }
            else {
                _this.employeesFactory.getCurrentEmployee().subscribe(function (e) {
                    if (e) {
                        _this.currentUserRating = {
                            index: null,
                            userId: e.id,
                            userTitle: e.fullName,
                            photo: e.photo,
                            total: 0,
                            profileRoute: e.profileRoute,
                            rootDepartmentTitle: e.rootLookupDepartmentTitle,
                            userLogin: e.login,
                            positionName: e.positionName,
                            list: []
                        };
                    }
                });
            }
        });
    };
    ThanksPageComponent.prototype.getThanksCounters = function () {
        this.getRatingPage();
        this.getCurrentUserRating();
    };
    ThanksPageComponent.prototype.getThanksCreatedByUserId = function () {
        this.thanksFactory.getThanksCreatedByUserId(this.userId).subscribe(function (thanks) {
            return thanks;
        });
    };
    ThanksPageComponent.prototype.getRatingPage = function () {
        var _this = this;
        this.ratingIsLoading = true;
        this.thanksCountersFactory.getRating()
            .subscribe(function (page) {
            _this.getRatingByUserIds(page).then(function (rating) {
                _this.getEmployeesForRating(page.items).subscribe(function (e) {
                    _this.thanksRating = _this.groupThanksCountersByUser(rating, e);
                });
            });
        });
    };
    ThanksPageComponent.prototype.getEmployeesForRating = function (ratingPage) {
        var logins = [];
        if (ratingPage.length > 0) {
            for (var i = 0; i < ratingPage.length; i++) {
                var login = this.prepareLogin(ratingPage[i].toUserLogin);
                logins.push(login);
            }
            return this.employeesFactory.getEmployeeByLogins(logins);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
    };
    ThanksPageComponent.prototype.getEmployeeForRating = function (login) {
        return this.employeesFactory.getEmployeeByLogin(login);
    };
    ThanksPageComponent.prototype.getRatingByUserIds = function (page) {
        var _this = this;
        this.thanksRatingPage = page;
        return new Promise(function (resolve, reject) {
            var ids = [];
            if (page.items.length) {
                for (var i = 0; i < page.items.length; i++) {
                    ids.push(page.items[i].toUserId);
                }
                _this.thanksCountersFactory.getRatingByUserIds(ids)
                    .subscribe(function (thanksCounters) {
                    _this.ratingIsLoading = false;
                    resolve(thanksCounters);
                });
            }
            else {
                _this.ratingIsLoading = false;
                resolve([]);
            }
        });
    };
    ThanksPageComponent.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
    };
    ThanksPageComponent.prototype.loadMoreThanks = function () {
        var _this = this;
        this.isLoadingItems = true;
        this.thanksPage.getNext().subscribe(function (page) {
            _this.thanksPage = page;
            _this.thanksUnGrouped = _this.thanksUnGrouped.concat(_this.thanksPage.items);
            _this.thanks = _this.groupThanksByDate(_this.thanksUnGrouped);
            _this.isLoadingItems = false;
        });
    };
    ThanksPageComponent.prototype.loadMoreRating = function () {
        var _this = this;
        this.ratingIsLoading = true;
        this.thanksRatingPage.getNext().subscribe(function (page) {
            _this.getRatingByUserIds(page).then(function (rating) {
                _this.thanksRatingUnGrouped = _this.thanksRatingUnGrouped.concat(rating);
                _this.getEmployeesForRating(page.items).subscribe(function (e) {
                    _this.thanksRating = _this.groupThanksCountersByUser(_this.thanksRatingUnGrouped, e);
                    _this.ratingIsLoading = false;
                });
            });
        });
    };
    ThanksPageComponent.prototype.onWorkSpaceScroll = function () {
        if (this.s4.scrollTop >= this.s4.scrollHeight - (this.s4.clientHeight + 100)) {
            if (this.thanksPage.hasNext &&
                !this.isLoadingItems &&
                this.activeTab.tabTitle === 'История') {
                this.loadMoreThanks();
            }
            if (this.thanksRatingPage.hasNext &&
                !this.ratingIsLoading &&
                this.activeTab.tabTitle === 'Рейтинг') {
                this.loadMoreRating();
            }
        }
    };
    ThanksPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companiesService.getItems().subscribe(function (companies) { return _this.companies = companies; });
        this.companiesService.getCompanyForCurrentUser().subscribe(function (company) { return _this.currentCompany = company; });
        this.s4 = this.document.getElementById('s4-workspace');
        this.s4.addEventListener('scroll', this.onWorkSpaceScroll.bind(this), true);
        this.userId = this.route.snapshot.data.userId;
        this.thanksTypes = this.route.snapshot.data.thanksTypes;
        this.thanksPage = this.route.snapshot.data.thanks;
        this.thanks = this.groupThanksByDate(this.thanksPage.items);
        this.getThanksCounters();
    };
    ThanksPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thanks-page',
            template: __webpack_require__(/*! ./thanks-page.component.html */ "./src/app/thanks/components/thanks-page/thanks-page.component.html"),
            styles: [__webpack_require__(/*! ./thanks-page.component.scss */ "./src/app/thanks/components/thanks-page/thanks-page.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksFactory')),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksCountersFactory')),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __metadata("design:paramtypes", [Document, Object, Object, Object, src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
            src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__["CompaniesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ThanksPageComponent);
    return ThanksPageComponent;
}());



/***/ }),

/***/ "./src/app/thanks/components/thanks-profile-informer/thanks-profile-informer.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-profile-informer/thanks-profile-informer.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thanks-list\" *ngIf=\"isThanksLoaded\">\n  <div class=\"thanks\" *ngFor=\"let item of thanksTypes\">\n    <div class=\"info\">\n      <div class=\"reward\">\n        <div class=\"icon\">\n          <i title=\"{{item.title}}\" [style.backgroundImage]=\"'url(' + item.icon + ')'\"></i>\n        </div>\n        <div class=\"text\">\n          <span>{{ item.title }}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"employees\">\n      <div\n        class=\"employee\"\n        *ngFor=\"let thnk of (thanks | thanksByType: item).slice(0, 3)\"\n      >\n      <div class=\"to-user\" (click)=\"goToProfile(thnk.fromUserLogin)\" title=\"{{thnk.fromUserTitle}}\"></div>\n        <app-user-thumb\n          [width]=\"'55px'\"\n          [height]=\"'55px'\"\n          [route]=\"null\"\n          [photo]=\"thnk.fromUserPhoto\"\n          [showStatus]=\"false\"\n        ></app-user-thumb>\n      </div>\n      <div class=\"employees-more\"\n          *ngIf=\"(thanks | thanksByType: item).length > 3\"\n          #employeesRef\n          >\n        <div class=\"text\" (click)=\"toggleEmployees(employeesRef)\">\n          + {{ (thanks | thanksByType: item).length - 3 }}\n        </div>\n        <!-- <div class=\"list-employees\">\n          <input type=\"button\" (click)=\"toggleEmployees(employeesRef)\"/>\n          <div class=\"list\">\n            <div class=\"item-employee\"\n            (click)=\"goToProfile(thnk.fromUserLogin)\"\n            *ngFor=\"let thnk of (thanks | thanksByType: item).slice(3)\">\n              <div class=\"photo\">\n                <app-user-thumb\n                  [width]=\"'35px'\"\n                  [height]=\"'35px'\"\n                  [photo]=\"thnk.fromUserPhoto\"\n                  [route]=\"false\">\n                </app-user-thumb>\n              </div>\n              <div class=\"full-name\">{{ thnk.fromUserTitle }}</div>\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/thanks/components/thanks-profile-informer/thanks-profile-informer.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-profile-informer/thanks-profile-informer.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thanks-list .thanks {\n  position: relative;\n  display: table;\n  table-layout: auto;\n  height: 55px;\n  width: 100%;\n  border-collapse: collapse;\n  box-sizing: border-box; }\n  .thanks-list .thanks .count,\n  .thanks-list .thanks .info,\n  .thanks-list .thanks .employees {\n    display: table-cell;\n    vertical-align: middle;\n    box-sizing: border-box;\n    width: auto; }\n  .thanks-list .thanks + .thanks {\n    margin-top: 25px; }\n  .thanks-list .thanks .reward {\n    display: table;\n    table-layout: fixed;\n    height: 100%;\n    width: 100%;\n    border-collapse: collapse; }\n  .thanks-list .thanks .reward .icon,\n    .thanks-list .thanks .reward .text {\n      display: table-cell;\n      vertical-align: middle;\n      box-sizing: border-box;\n      font-size: 14px;\n      color: #4D4E4D;\n      width: auto; }\n  .thanks-list .thanks .reward .icon {\n      width: 55px; }\n  .thanks-list .thanks .reward .icon i {\n        width: 55px;\n        height: 55px;\n        display: block;\n        height: 100%;\n        border-radius: 100%;\n        background-color: #DEDFE0;\n        background-position: 0 center;\n        background-size: cover; }\n  .thanks-list .thanks .reward .text {\n      padding-left: 15px; }\n  .thanks-list .thanks .reward .text span {\n        display: block;\n        max-width: 150px; }\n  .thanks-list .thanks .info {\n    width: 250px; }\n  .thanks-list .thanks .employees {\n    width: auto;\n    font-size: 0; }\n  .thanks-list .thanks .employees .employee {\n      display: inline-block;\n      vertical-align: middle;\n      position: relative; }\n  .thanks-list .thanks .employees .employee .to-user {\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 1;\n        cursor: pointer; }\n  .thanks-list .thanks .employees .employee + .employee {\n        margin-left: -10px; }\n  .thanks-list .thanks .employees .employees-more {\n      position: relative;\n      display: inline-block;\n      vertical-align: middle;\n      height: 55px;\n      min-width: 55px;\n      padding-left: 10px;\n      box-sizing: border-box; }\n  .thanks-list .thanks .employees .employees-more .text {\n        text-align: center;\n        line-height: 55px;\n        color: #898888;\n        font-size: 26px;\n        font-family: Arial;\n        cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/thanks/components/thanks-profile-informer/thanks-profile-informer.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/thanks/components/thanks-profile-informer/thanks-profile-informer.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ThanksProfileInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksProfileInformerComponent", function() { return ThanksProfileInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_security_security_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/security/security.service */ "./src/app/services/security/security.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ThanksProfileInformerComponent = /** @class */ (function () {
    function ThanksProfileInformerComponent(route, sharepointService, notificationsService, employeesFactory, thanksFactory, thanksTypesFactory, securityService, router) {
        this.route = route;
        this.sharepointService = sharepointService;
        this.notificationsService = notificationsService;
        this.employeesFactory = employeesFactory;
        this.thanksFactory = thanksFactory;
        this.thanksTypesFactory = thanksTypesFactory;
        this.securityService = securityService;
        this.router = router;
        this.thanksTypes = [];
        this.thanks = [];
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modalIsOpen = false;
        this.aviableThanksEmpty = false;
        this.isThanksLoaded = false;
        this.userId = null;
        this.employeeId = null;
    }
    ThanksProfileInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.data.userId;
        this.subscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (data) { return _this.securityService.ensureUser(data.employee.login.replace('/', '\\')); }))
            .subscribe(function (data) {
            _this.employeeId = data.data.Id;
            _this.refreshThanks();
        });
        this.refresh.subscribe(function () { return _this.refreshThanks(); });
    };
    ThanksProfileInformerComponent.prototype.refreshThanks = function () {
        var _this = this;
        this.isThanksLoaded = false;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            this.thanksTypesFactory.getItems(),
            this.thanksFactory.getThanksCreatedToUserId(this.employeeId)
        ]).subscribe(function (results) {
            _this.thanksTypes = results[0];
            _this.thanks = results[1];
            _this.isThanksLoaded = true;
        });
    };
    ThanksProfileInformerComponent.prototype.openThanksModal = function () {
        if (!this.aviableThanksEmpty) {
            this.modalIsOpen = true;
        }
        else {
            this.notificationsService.warning("\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u0435\u0439 \u043D\u0435\u0442.\n      \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043C\u0435\u0441\u044F\u0446\u0435");
        }
    };
    ThanksProfileInformerComponent.prototype.closeThanksModal = function () {
        this.modalIsOpen = false;
    };
    ThanksProfileInformerComponent.prototype.counterIcons = function (i) {
        return new Array(i);
    };
    ThanksProfileInformerComponent.prototype.getEmployeeLink = function (employee) {
        return (window.location.protocol + "//" + window.location.host +
            ("" + this.sharepointService.getCurrentUserContext().webServerRelativeUrl) +
            ("/PortalPages/home.aspx#/phonebook/" + employee.id));
    };
    ThanksProfileInformerComponent.prototype.goToProfile = function (login) {
        var _this = this;
        if (login && login !== '') {
            this.employeesFactory.getEmployeeByLogin(this.prepareLogin(login))
                .subscribe(function (employee) {
                if (employee && employee.id) {
                    _this.router.navigate(['phonebook', employee.id]);
                }
                else {
                    _this.notificationsService.warning('Пользователя нет в списке сотрудников');
                }
            });
        }
    };
    ThanksProfileInformerComponent.prototype.prepareLogin = function (login) {
        if (login) {
            var l = login.split('|');
            return l[l.length - 1];
        }
        else {
            return login;
        }
    };
    ThanksProfileInformerComponent.prototype.toggleEmployees = function (domRef) {
        if (domRef.classList.contains('is-expanded') === false) {
            var elements = Array.from(document.querySelectorAll('.employees-more'));
            elements.forEach(function (e) {
                if (e.classList.contains('is-expanded')) {
                    e.classList.toggle('is-expanded');
                }
            });
            domRef.classList.toggle('is-expanded');
        }
        else {
            domRef.classList.remove('is-expanded');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ThanksProfileInformerComponent.prototype, "refresh", void 0);
    ThanksProfileInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thanks-profile-informer',
            template: __webpack_require__(/*! ./thanks-profile-informer.component.html */ "./src/app/thanks/components/thanks-profile-informer/thanks-profile-informer.component.html"),
            styles: [__webpack_require__(/*! ./thanks-profile-informer.component.scss */ "./src/app/thanks/components/thanks-profile-informer/thanks-profile-informer.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksFactory')),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksTypesFactory')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__["SharepointService"],
            src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"], Object, Object, Object, src_app_services_security_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ThanksProfileInformerComponent);
    return ThanksProfileInformerComponent;
}());



/***/ }),

/***/ "./src/app/thanks/pipes/thanks-by-type.pipe-transform/thanks-by-type.pipe-transform.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/thanks/pipes/thanks-by-type.pipe-transform/thanks-by-type.pipe-transform.ts ***!
  \*********************************************************************************************/
/*! exports provided: ThanksByTypePipeTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksByTypePipeTransform", function() { return ThanksByTypePipeTransform; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThanksByTypePipeTransform = /** @class */ (function () {
    function ThanksByTypePipeTransform() {
    }
    ThanksByTypePipeTransform.prototype.transform = function (value, args) {
        return value.filter(function (c) { return c.thanksTypeId === args.id; });
    };
    ThanksByTypePipeTransform = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'thanksByType',
            pure: false
        })
    ], ThanksByTypePipeTransform);
    return ThanksByTypePipeTransform;
}());



/***/ }),

/***/ "./src/app/thanks/services/thanks-types/thanks-types.resolver.ts":
/*!***********************************************************************!*\
  !*** ./src/app/thanks/services/thanks-types/thanks-types.resolver.ts ***!
  \***********************************************************************/
/*! exports provided: ThanksTypesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksTypesResolver", function() { return ThanksTypesResolver; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ThanksTypesResolver = /** @class */ (function () {
    function ThanksTypesResolver(thanksTypesFactory) {
        this.thanksTypesFactory = thanksTypesFactory;
    }
    ThanksTypesResolver.prototype.resolve = function (route, state) {
        return this.thanksTypesFactory.getItems();
    };
    ThanksTypesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksTypesFactory')),
        __metadata("design:paramtypes", [Object])
    ], ThanksTypesResolver);
    return ThanksTypesResolver;
}());



/***/ }),

/***/ "./src/app/thanks/services/thanks/thanks.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/thanks/services/thanks/thanks.resolver.ts ***!
  \***********************************************************/
/*! exports provided: ThanksResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksResolver", function() { return ThanksResolver; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ThanksResolver = /** @class */ (function () {
    function ThanksResolver(thanksFactory) {
        this.thanksFactory = thanksFactory;
    }
    ThanksResolver.prototype.resolve = function (route, state) {
        var currentYear = new Date().getFullYear();
        var start = new Date(currentYear, 0, 1).toISOString();
        var end = new Date(currentYear, 11, 31).toISOString();
        return this.thanksFactory.getByPeriod(start, end);
    };
    ThanksResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('ThanksFactory')),
        __metadata("design:paramtypes", [Object])
    ], ThanksResolver);
    return ThanksResolver;
}());



/***/ }),

/***/ "./src/app/thanks/thanks-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/thanks/thanks-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ThanksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksRoutingModule", function() { return ThanksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_thanks_page_thanks_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/thanks-page/thanks-page.component */ "./src/app/thanks/components/thanks-page/thanks-page.component.ts");
/* harmony import */ var _services_thanks_thanks_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/thanks/thanks.resolver */ "./src/app/thanks/services/thanks/thanks.resolver.ts");
/* harmony import */ var _services_thanks_types_thanks_types_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/thanks-types/thanks-types.resolver */ "./src/app/thanks/services/thanks-types/thanks-types.resolver.ts");
/* harmony import */ var _services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/security/current-user-id.resolver */ "./src/app/services/security/current-user-id.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _components_thanks_page_thanks_page_component__WEBPACK_IMPORTED_MODULE_2__["ThanksPageComponent"],
        data: { animation: 'fadeAnimation' },
        resolve: {
            thanks: _services_thanks_thanks_resolver__WEBPACK_IMPORTED_MODULE_3__["ThanksResolver"],
            thanksTypes: _services_thanks_types_thanks_types_resolver__WEBPACK_IMPORTED_MODULE_4__["ThanksTypesResolver"],
            userId: _services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_5__["CurrentUserIdResolver"]
        }
    }
];
var ThanksRoutingModule = /** @class */ (function () {
    function ThanksRoutingModule() {
    }
    ThanksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [
                _services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_5__["CurrentUserIdResolver"],
                _services_thanks_thanks_resolver__WEBPACK_IMPORTED_MODULE_3__["ThanksResolver"],
                _services_thanks_types_thanks_types_resolver__WEBPACK_IMPORTED_MODULE_4__["ThanksTypesResolver"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ThanksRoutingModule);
    return ThanksRoutingModule;
}());



/***/ }),

/***/ "./src/app/thanks/thanks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/thanks/thanks.module.ts ***!
  \*****************************************/
/*! exports provided: ThanksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksModule", function() { return ThanksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thanks_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thanks-routing.module */ "./src/app/thanks/thanks-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_thanks_profile_informer_thanks_profile_informer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/thanks-profile-informer/thanks-profile-informer.component */ "./src/app/thanks/components/thanks-profile-informer/thanks-profile-informer.component.ts");
/* harmony import */ var _components_thanks_modal_form_thanks_modal_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/thanks-modal-form/thanks-modal-form.component */ "./src/app/thanks/components/thanks-modal-form/thanks-modal-form.component.ts");
/* harmony import */ var _components_thanks_page_thanks_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/thanks-page/thanks-page.component */ "./src/app/thanks/components/thanks-page/thanks-page.component.ts");
/* harmony import */ var _pipes_thanks_by_type_pipe_transform_thanks_by_type_pipe_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/thanks-by-type.pipe-transform/thanks-by-type.pipe-transform */ "./src/app/thanks/pipes/thanks-by-type.pipe-transform/thanks-by-type.pipe-transform.ts");
/* harmony import */ var _components_thanks_informer_thanks_informer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/thanks-informer/thanks-informer.component */ "./src/app/thanks/components/thanks-informer/thanks-informer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ThanksModule = /** @class */ (function () {
    function ThanksModule() {
    }
    ThanksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_thanks_profile_informer_thanks_profile_informer_component__WEBPACK_IMPORTED_MODULE_4__["ThanksProfileInformerComponent"],
                _components_thanks_informer_thanks_informer_component__WEBPACK_IMPORTED_MODULE_8__["ThanksInformerComponent"],
                _components_thanks_modal_form_thanks_modal_form_component__WEBPACK_IMPORTED_MODULE_5__["ThanksModalFormComponent"],
                _components_thanks_page_thanks_page_component__WEBPACK_IMPORTED_MODULE_6__["ThanksPageComponent"],
                _pipes_thanks_by_type_pipe_transform_thanks_by_type_pipe_transform__WEBPACK_IMPORTED_MODULE_7__["ThanksByTypePipeTransform"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _thanks_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThanksRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            exports: [
                _components_thanks_informer_thanks_informer_component__WEBPACK_IMPORTED_MODULE_8__["ThanksInformerComponent"],
                _components_thanks_modal_form_thanks_modal_form_component__WEBPACK_IMPORTED_MODULE_5__["ThanksModalFormComponent"],
                _components_thanks_profile_informer_thanks_profile_informer_component__WEBPACK_IMPORTED_MODULE_4__["ThanksProfileInformerComponent"]
            ]
        })
    ], ThanksModule);
    return ThanksModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~company-company-module~personal-personal-module~phonebook-phonebook-module~thanks-thanks-mod~cd23ac83.js.map