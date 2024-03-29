(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["volunteering-volunteering-module"],{

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

/***/ "./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/volunteering']\">Волонтерство</a></div>\n    <div class=\"l-breadcrumb\">\n      {{title}}\n    </div>\n  </div>\n  <div class=\"title\">{{title}}</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-volunteering-card\">\n        <div class=\"body\">\n          <div class=\"description\">\n            <div class=\"date\">\n              {{place}} / до {{ date }}\n            </div>\n            <div class=\"text\" [innerHTML]=\"text\"></div>\n            <a href=\"#\" class=\"requisites\">Реквизиты</a>\n            <input type=\"button\" value=\"Хочу помочь\" class=\"btn btn-default is-transparent red\" />\n          </div>\n        </div>\n        <div class=\"rightside\">\n          <div class=\"photo\" [ngStyle]=\"{'background-image': 'url(' + imageUrl + ')'}\">\n          </div>\n          <div class=\"statistic\">\n            <div class=\"title\">Статистика проекта</div>\n            <div class=\"counter\">62%</div>\n            <div class=\"progress\">\n              <div class=\"progress-inner\" style=\"width: 64%\"></div>\n            </div>\n            <div class=\"annotation\">Процент собранных средств от необходимой суммы</div>\n          </div>\n          <div class=\"members\">\n            <div class=\"title\">Стали волонтерами проекта</div>\n            <div class=\"list\">\n              <div class=\"item\" [ngStyle]=\"{'background-image': 'url(https://jooinn.com/images/picture-1.jpg)'}\">\n              </div>\n              <div class=\"item\" [ngStyle]=\"{'background-image': 'url(https://jooinn.com/images/picture-3.jpg)'}\">\n              </div>\n              <div class=\"item\" [ngStyle]=\"{'background-image': 'url(https://jooinn.com/images/picture-2.jpg)'}\">\n              </div>\n            </div>\n            <div class=\"counter\">\n              +149\n            </div>\n          </div>\n        </div>\n        <div class=\"button\">\n          <a [routerLink]=\"['/volunteering']\" class=\"btn btn-to-back\">\n            <i></i> К списку новостей\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-button-up></app-button-up>\n</div>\n"

/***/ }),

/***/ "./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  padding-bottom: 40px; }\n\n.l-volunteering-card {\n  max-width: 1065px;\n  padding-left: 25px;\n  padding-top: 0;\n  box-sizing: border-box; }\n\n.rightside {\n  display: inline-block;\n  vertical-align: top; }\n\n.rightside .photo {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    width: 350px;\n    height: 230px;\n    position: relative;\n    margin-bottom: 50px; }\n\n.rightside .statistic {\n    padding-bottom: 40px;\n    box-sizing: border-box;\n    border-bottom: 2px dotted #95989A;\n    margin-bottom: 40px; }\n\n.rightside .statistic .title {\n      font-size: 16px;\n      font-weight: bold;\n      color: #050505;\n      margin-bottom: 20px; }\n\n.rightside .statistic .counter {\n      font-size: 22px;\n      font-weight: bold;\n      color: #dd1e25;\n      margin-bottom: 10px; }\n\n.rightside .statistic .progress {\n      background-color: #E4E4E4;\n      margin-bottom: 20px; }\n\n.rightside .statistic .progress .progress-inner {\n        height: 10px;\n        background-color: #dd1e25; }\n\n.rightside .statistic .annotation {\n      font-size: 14px;\n      color: #050505; }\n\n.rightside .members .title {\n    font-size: 16px;\n    font-weight: bold;\n    color: #050505;\n    margin-bottom: 20px; }\n\n.rightside .members .list {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 15px; }\n\n.rightside .members .list .item {\n      display: inline-block;\n      width: 56px;\n      height: 56px;\n      background-repeat: no-repeat;\n      background-size: cover;\n      background-position: center;\n      border-radius: 100%;\n      border: 2px solid #FFFFFF;\n      margin-left: -15px; }\n\n.rightside .members .list .item:first-child {\n        margin-left: 0; }\n\n.rightside .members .counter {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 22px;\n    color: #050505; }\n\n.body {\n  display: inline-block;\n  width: calc(100% - 350px);\n  padding-right: 30px;\n  box-sizing: border-box; }\n\n.description {\n  min-height: 250px; }\n\n.description .date {\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin-bottom: 15px;\n    display: inline-block;\n    text-transform: uppercase;\n    color: #050505; }\n\n.description .text {\n    margin-bottom: 35px;\n    color: #050505;\n    font-size: 14px;\n    line-height: 26px;\n    line-height: 34px; }\n\n@media (min-width: 1440px) {\n      .description .text {\n        font-size: calc( 0.00833333 * 100vw + 2px);\n        line-height: calc( 0.00833333 * 100vw + 14px); } }\n\n@media (min-width: 1920px) {\n      .description .text {\n        font-size: 18px;\n        line-height: 30px; } }\n\n.description .requisites {\n    display: block;\n    font-size: 22px;\n    text-decoration: underline;\n    color: #050505;\n    margin-bottom: 40px; }\n\n.button {\n  margin: 30px 0; }\n"

/***/ }),

/***/ "./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: VolunteeringCardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteeringCardPageComponent", function() { return VolunteeringCardPageComponent; });
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

var VolunteeringCardPageComponent = /** @class */ (function () {
    function VolunteeringCardPageComponent() {
        this.title = 'Стань дедом Морозом';
        this.place = 'Москва';
        this.date = '25 декабря';
        this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Nunc elementum turpis vel ullamcorper pretium. Aenean fringilla\n  orci in libero finibus tristique quis nec erat. Nulla aliquam mauris purus,\n  euismod vestibulum nisi ultricies sed. Nunc tortor quam, ultrices a commodo a,\n  bibendum vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n  Morbi consequat lectus vitae ex bibendum, at lobortis erat dictum. Nullam efficitur\n  urna ac nisi sollicitudin porttitor id in nibh. Mauris quam nibh, condimentum at eros nec,\n  feugiat fermentum elit. Nulla et interdum tortor, et luctus sapien. Sed tempus eleifend vehicula.\n  Morbi in scelerisque diam. Pellentesque habitant morbi tristique senectus et netus et\n  malesuada fames ac turpis egestas. Nunc nec velit non dolor sollicitudin eleifend.\n  Nunc vulputate imperdiet mi, a molestie augue. '";
        this.imageUrl = 'https://jooinn.com/images/picture-2.jpg';
    }
    VolunteeringCardPageComponent.prototype.ngOnInit = function () { };
    VolunteeringCardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-volunteering-card-page',
            template: __webpack_require__(/*! ./volunteering-card-page.component.html */ "./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.html"),
            styles: [__webpack_require__(/*! ./volunteering-card-page.component.scss */ "./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VolunteeringCardPageComponent);
    return VolunteeringCardPageComponent;
}());



/***/ }),

/***/ "./src/app/volunteering/components/volunteering-page/volunteering-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/volunteering/components/volunteering-page/volunteering-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">\n      Волонтерство\n    </div>\n  </div>\n  <div class=\"title\">Волонтерство</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-volunteering\">\n        <div class=\"item-group\">\n          <div class=\"col\">\n            <div class=\"row\">\n              <a href=\"#\" class=\"item\" [style.backgroundImage]=\"'url(https://jooinn.com/images/picture-3.jpg)'\">\n                <div class=\"gradient\"></div>\n                <div class=\"info\">\n                  <div class=\"title\">\n                    Помощь пострадавшим в наводнении на Дальнем Востоке\n                  </div>\n                  <div class=\"city\">\n                    Дальний восток\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"row\">\n              <a href=\"#\" class=\"item\" [style.backgroundImage]=\"'url(https://jooinn.com/images/picture-1.jpg)'\">\n                <div class=\"gradient\"></div>\n                <div class=\"info\">\n                  <div class=\"title\">\n                    Помощь детскому дому № 89\n                  </div>\n                  <div class=\"city\">\n                    Старый Оскол\n                  </div>\n                </div>\n              </a>\n            </div>\n          </div>\n          <div class=\"col\">\n            <a href=\"#\" class=\"item\" [style.backgroundImage]=\"'url(https://jooinn.com/images/picture-2.jpg)'\">\n              <div class=\"gradient\"></div>\n              <div class=\"info\">\n                <div class=\"title\">\n                  Стань дедом Морозом\n                </div>\n                <div class=\"city\">\n                  Москва\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n        <div class=\"item-group\">\n          <div class=\"col\">\n            <a href=\"#\" class=\"item\" [style.backgroundImage]=\"'url(https://jooinn.com/images/picture-1.jpg)'\">\n              <div class=\"gradient\"></div>\n              <div class=\"info\">\n                <div class=\"title\">\n                  Стань дедом Морозом\n                </div>\n                <div class=\"city\">\n                  Москва\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col\">\n            <div class=\"row\">\n              <a href=\"#\" class=\"item\" [style.backgroundImage]=\"'url(https://jooinn.com/images/picture-3.jpg)'\">\n                <div class=\"gradient\"></div>\n                <div class=\"info\">\n                  <div class=\"title\">\n                    Помощь пострадавшим в наводнении на Дальнем Востоке\n                  </div>\n                  <div class=\"city\">\n                    Дальний восток\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"row\">\n              <a href=\"#\" class=\"item\" [style.backgroundImage]=\"'url(https://jooinn.com/images/picture-2.jpg)'\">\n                <div class=\"gradient\"></div>\n                <div class=\"info\">\n                  <div class=\"title\">\n                    Помощь детскому дому № 89\n                  </div>\n                  <div class=\"city\">\n                    Старый Оскол\n                  </div>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/volunteering/components/volunteering-page/volunteering-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/volunteering/components/volunteering-page/volunteering-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  padding-bottom: 40px; }\n\n.l-volunteering {\n  padding: 0 25px;\n  box-sizing: border-box; }\n\n.l-volunteering .item-group {\n    display: table;\n    width: 62vw;\n    table-layout: fixed;\n    border-collapse: collapse; }\n\n.l-volunteering .item-group:nth-child(odd) .col:first-child {\n      width: 21vw; }\n\n.l-volunteering .item-group:nth-child(odd) .col:last-child {\n      width: 41vw; }\n\n.l-volunteering .item-group .col {\n      vertical-align: top;\n      display: table-cell; }\n\n.l-volunteering .item-group .col:first-child {\n        width: 41vw; }\n\n.l-volunteering .item-group .col:last-child {\n        width: 21vw; }\n\n.l-volunteering .item-group .col .row .item {\n        width: 21vw;\n        height: 12vw; }\n\n.l-volunteering .item-group .col .row .item:first-child {\n          margin-bottom: 1vw; }\n\n.l-volunteering .item-group .col .item {\n        display: block;\n        text-decoration: none;\n        position: relative;\n        width: 41vw;\n        height: 25vw;\n        background-repeat: no-repeat;\n        background-size: cover; }\n\n.l-volunteering .item-group .col .item:hover .gradient {\n          background: linear-gradient(to bottom, rgba(5, 5, 5, 0.8), rgba(88, 88, 88, 0)); }\n\n.l-volunteering .item-group .col .item .gradient {\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          background: linear-gradient(to bottom, rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0)); }\n\n.l-volunteering .item-group .col .item .info {\n          position: absolute;\n          left: 35px;\n          top: 30px;\n          width: 80%;\n          color: #FFF; }\n\n.l-volunteering .item-group .col .item .info .title {\n            font-size: 16px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            line-height: 24px;\n            max-height: 72px;\n            font-weight: bold;\n            margin-bottom: 10px; }\n\n@media (min-width: 1440px) {\n              .l-volunteering .item-group .col .item .info .title {\n                font-size: calc( 0.0125 * 100vw + -2px);\n                line-height: calc( 0.0125 * 100vw + 6px);\n                max-height: calc( 0.00416667 * 100vw + 66px);\n                -webkit-line-clamp: 3; } }\n\n@media (min-width: 1920px) {\n              .l-volunteering .item-group .col .item .info .title {\n                font-size: 22px;\n                line-height: 30px;\n                max-height: 90px; } }\n\n.l-volunteering .item-group .col .item .info .city {\n            font-size: 14px; }\n\n.l-volunteering .item-group .col:last-child {\n        padding-left: 1vw; }\n\n.l-volunteering .item-group .row {\n      display: table-row; }\n\n.l-volunteering .item-group .row:first-child {\n        margin-bottom: 30px; }\n"

/***/ }),

/***/ "./src/app/volunteering/components/volunteering-page/volunteering-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/volunteering/components/volunteering-page/volunteering-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VolunteeringPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteeringPageComponent", function() { return VolunteeringPageComponent; });
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

var VolunteeringPageComponent = /** @class */ (function () {
    function VolunteeringPageComponent() {
    }
    VolunteeringPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-volunteering-page',
            template: __webpack_require__(/*! ./volunteering-page.component.html */ "./src/app/volunteering/components/volunteering-page/volunteering-page.component.html"),
            styles: [__webpack_require__(/*! ./volunteering-page.component.scss */ "./src/app/volunteering/components/volunteering-page/volunteering-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VolunteeringPageComponent);
    return VolunteeringPageComponent;
}());



/***/ }),

/***/ "./src/app/volunteering/volunteering-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/volunteering/volunteering-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VolunteeringRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteeringRoutingModule", function() { return VolunteeringRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_volunteering_page_volunteering_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/volunteering-page/volunteering-page.component */ "./src/app/volunteering/components/volunteering-page/volunteering-page.component.ts");
/* harmony import */ var _components_volunteering_card_page_volunteering_card_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/volunteering-card-page/volunteering-card-page.component */ "./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.ts");
/* harmony import */ var src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/security/groups.resolver */ "./src/app/services/security/groups.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _components_volunteering_page_volunteering_page_component__WEBPACK_IMPORTED_MODULE_2__["VolunteeringPageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Волонтерство' }
    },
    {
        path: ':id',
        component: _components_volunteering_card_page_volunteering_card_page_component__WEBPACK_IMPORTED_MODULE_3__["VolunteeringCardPageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Волонтерство' }
    }
];
var VolunteeringRoutingModule = /** @class */ (function () {
    function VolunteeringRoutingModule() {
    }
    VolunteeringRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VolunteeringRoutingModule);
    return VolunteeringRoutingModule;
}());



/***/ }),

/***/ "./src/app/volunteering/volunteering.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/volunteering/volunteering.module.ts ***!
  \*****************************************************/
/*! exports provided: VolunteeringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteeringModule", function() { return VolunteeringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _volunteering_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volunteering-routing.module */ "./src/app/volunteering/volunteering-routing.module.ts");
/* harmony import */ var _components_volunteering_card_page_volunteering_card_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/volunteering-card-page/volunteering-card-page.component */ "./src/app/volunteering/components/volunteering-card-page/volunteering-card-page.component.ts");
/* harmony import */ var _components_volunteering_page_volunteering_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/volunteering-page/volunteering-page.component */ "./src/app/volunteering/components/volunteering-page/volunteering-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VolunteeringModule = /** @class */ (function () {
    function VolunteeringModule() {
    }
    VolunteeringModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_volunteering_card_page_volunteering_card_page_component__WEBPACK_IMPORTED_MODULE_4__["VolunteeringCardPageComponent"],
                _components_volunteering_page_volunteering_page_component__WEBPACK_IMPORTED_MODULE_5__["VolunteeringPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _volunteering_routing_module__WEBPACK_IMPORTED_MODULE_3__["VolunteeringRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ]
        })
    ], VolunteeringModule);
    return VolunteeringModule;
}());



/***/ })

}]);
//# sourceMappingURL=volunteering-volunteering-module.js.map