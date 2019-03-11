(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/app/requests/components/requests-page/requests-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/requests/components/requests-page/requests-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\r\n  <div class=\"l-breadcrumbs\">\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\r\n    <div class=\"l-breadcrumb\">\r\n      Заявки\r\n    </div>\r\n  </div>\r\n  <div class=\"title\">Заявки</div>\r\n</div>\r\n<div class=\"l-page\">\r\n  <div class=\"l-page-inner\">\r\n    <div class=\"l-page__content\">\r\n      <div class=\"l-requests\">\r\n        <div class=\"l-requests-categories\">\r\n          <app-filters>\r\n            <app-filters-item (click)=\"showHistory=false; showBids=false\">\r\n              Заявки\r\n            </app-filters-item>\r\n            <app-filters-item>\r\n              Шаблоны\r\n            </app-filters-item>\r\n            <app-filters-item (click)=\"showHistory=true; showBids=true\">\r\n              История\r\n            </app-filters-item>\r\n          </app-filters>\r\n        </div>\r\n        <div class=\"l-requests-search\">\r\n          <input placeholder=\"Поиск по заявкам\" type=\"text\">\r\n        </div>\r\n        <div class=\"l-requests__departments\" *ngIf=\"!showBids\">\r\n          <div class=\"l-requests__department\" *ngFor=\"let item of departments\">\r\n            <div class=\"m-department-card\">\r\n              <div class=\"title\" [style.backgroundImage]=\"'url(' + item.image + ')'\" (click)=\"showBids=!showBids; item.active=!item.active\">\r\n                {{item.title}}\r\n              </div>\r\n              <div class=\"text\">\r\n                {{item.text}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"l-requests__list\" *ngIf=\"showBids\">\r\n          <div class=\"l-requests__list-inner\">\r\n            <div class=\"departments-list\" *ngIf=\"!showHistory\">\r\n              <div class=\"department-item\" *ngFor=\"let item of departments\" [class.active]=\"item.active\" (click)=\"item.active=!item.active\">\r\n                {{item.title}}\r\n              </div>\r\n            </div>\r\n            <div class=\"bids-list\">\r\n              <div class=\"bids-table\">\r\n                <div class=\"bids-head\">\r\n                  <div class=\"bid-theme\">\r\n                    Тема\r\n                  </div>\r\n                  <div class=\"bid-date\" *ngIf=\"showHistory\">\r\n                    Дата\r\n                  </div>\r\n                  <div class=\"bid-status\">\r\n                    Статус\r\n                  </div>\r\n                </div>\r\n                <div class=\"m-bid\" *ngFor=\"let item of bids\">\r\n                  <div class=\"bid-name\">\r\n                    {{item.title}}\r\n                  </div>\r\n                  <div class=\"bid-date\" *ngIf=\"showHistory\">\r\n                    {{item.date}}\r\n                  </div>\r\n                  <div class=\"bid-status\">\r\n                    <a href=\"\" *ngIf=\"!showHistory\">Подать</a>\r\n                    <span *ngIf=\"showHistory\" [class.marked]=\"item.marked\">{{item.status}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"bids-navigation\">\r\n                <div class=\"m-page-nav\">\r\n                  <a class=\"to-begin disabled\">В начало</a>\r\n                  <input type=\"button\" class=\"prev-page disabled\" />\r\n                  <input type=\"button\" class=\"next-page disabled\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/requests/components/requests-page/requests-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/requests/components/requests-page/requests-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-requests {\n  padding-top: 50px;\n  padding-left: 25px;\n  box-sizing: border-box;\n  position: relative; }\n\n.l-requests .l-requests-categories {\n    height: 30px;\n    position: absolute;\n    top: -30px; }\n\n.l-requests .l-requests-search {\n    height: 47px;\n    position: absolute;\n    top: -47px;\n    right: 0;\n    width: 410px; }\n\n.l-requests .l-requests-search input {\n      height: 47px;\n      width: 100%;\n      background-position: right 12px center;\n      color: #898888;\n      border: 1px solid #BCBCBC;\n      font-size: 16px;\n      box-sizing: border-box;\n      background-image: url(\"/local/js/assets/icons/icon-search-red.svg\");\n      background-repeat: no-repeat;\n      background-size: 31px 31px;\n      background-position: left 12px center;\n      padding-left: 50px;\n      padding-right: 20px;\n      outline: none; }\n\n.l-requests .l-requests__departments {\n    font-size: 0;\n    margin: 0 -15px; }\n\n.l-requests .l-requests__department {\n    width: 430px;\n    height: 430px;\n    display: inline-block;\n    vertical-align: top;\n    padding: 0 15px;\n    box-sizing: border-box;\n    margin-bottom: 30px; }\n\n@media screen and (max-width: 1440px) {\n      .l-requests .l-requests__department {\n        width: 405px;\n        height: 405px; } }\n\n.l-requests .m-department-card {\n    height: 100%;\n    background-color: #F7F7F7;\n    padding: 35px;\n    box-sizing: border-box;\n    border: 1px solid #DEDFE0;\n    border-radius: 3px;\n    position: relative; }\n\n.l-requests .m-department-card .title {\n      cursor: pointer;\n      font-size: 24px;\n      line-height: 40px;\n      min-height: 80px;\n      max-height: 120px;\n      overflow: hidden;\n      word-wrap: break-word;\n      color: #000000;\n      padding-left: 80px;\n      background-size: 75px 75px;\n      background-repeat: no-repeat;\n      background-position: left top 5px; }\n\n.l-requests .m-department-card .title:hover {\n        color: #da402b; }\n\n@media screen and (max-width: 1440px) {\n        .l-requests .m-department-card .title {\n          font-size: 18px;\n          line-height: 36px;\n          max-height: 100px; } }\n\n.l-requests .m-department-card .text {\n      margin-top: 15px;\n      font-size: 14px;\n      line-height: 30px;\n      color: #95989A;\n      max-height: 180px;\n      overflow: hidden;\n      word-wrap: break-word;\n      text-overflow: ellipsis; }\n\n@media screen and (max-width: 1400px) {\n        .l-requests .m-department-card .text {\n          margin-top: 5px; } }\n\n.l-requests .l-requests__list .l-requests__list-inner {\n    height: 100%;\n    width: 100%;\n    display: table;\n    position: relative; }\n\n.l-requests .l-requests__list .l-requests__list-inner .departments-list {\n      width: 330px;\n      display: table-cell;\n      padding-right: 45px;\n      padding-top: 33px; }\n\n@media screen and (max-width: 1400px) {\n        .l-requests .l-requests__list .l-requests__list-inner .departments-list {\n          width: 330px;\n          padding-right: 20px; } }\n\n.l-requests .l-requests__list .l-requests__list-inner .departments-list .department-item {\n        padding: 20px;\n        border-top: 1px solid #A2B2C8;\n        cursor: pointer;\n        position: relative;\n        font-size: 16px;\n        line-height: 30px;\n        color: #768692; }\n\n.l-requests .l-requests__list .l-requests__list-inner .departments-list .department-item:last-child {\n          border-bottom: 1px solid #A2B2C8; }\n\n.l-requests .l-requests__list .l-requests__list-inner .departments-list .department-item.active {\n          background-color: #F8FBFC;\n          color: #da402b;\n          cursor: auto; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list {\n      display: table-cell;\n      vertical-align: top; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table {\n        display: table;\n        width: 100%;\n        margin-bottom: 80px; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .bids-head {\n          display: table-row;\n          font-size: 16px;\n          font-weight: bold;\n          color: #768692;\n          border-bottom: 1px solid #cacaca; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .bids-head .bid-theme {\n            display: table-cell;\n            width: 80%;\n            padding: 0 0 15px 30px; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .bids-head .bid-date {\n            display: table-cell;\n            width: 10%; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .bids-head .bid-status {\n            display: table-cell;\n            width: 10%;\n            text-align: center;\n            padding-right: 15px; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid {\n          display: table-row;\n          width: 100%;\n          height: 67px; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid:hover .bid-status a {\n            visibility: visible; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid:nth-child(odd) {\n            background-color: #F7F7F7; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid:nth-last-of-type(1) {\n            border-bottom: none; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid .bid-name {\n            display: table-cell;\n            position: relative;\n            width: 80%;\n            font-size: 18px;\n            vertical-align: middle;\n            max-width: 950px;\n            height: 67px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            padding: 25px 30px;\n            box-sizing: border-box; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid .bid-name .bid-department {\n              font-size: 14px;\n              color: #969696;\n              text-transform: none;\n              position: absolute;\n              bottom: 10px;\n              left: 0; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid .bid-date {\n            display: table-cell;\n            width: 10%;\n            vertical-align: middle;\n            font-size: 18px;\n            color: #969696; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid .bid-status {\n            display: table-cell;\n            width: 10%;\n            vertical-align: middle; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid .bid-status a {\n              text-decoration: none;\n              visibility: hidden;\n              font-size: 16px;\n              width: 155px;\n              height: 45px;\n              line-height: 45px;\n              color: #FFF;\n              background-color: #da402b;\n              border-radius: 3px;\n              text-align: center;\n              float: right;\n              box-sizing: border-box;\n              margin-right: 15px; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid .bid-status a:hover {\n                background-color: #c73a27; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid .bid-status span {\n              display: block;\n              font-size: 16px;\n              text-align: center; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-table .m-bid .bid-status span.marked {\n                color: #da402b; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-navigation {\n        text-align: center;\n        height: 20px; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-navigation .m-page-nav .to-begin {\n          font-size: 16px;\n          line-height: 20px;\n          height: 20px;\n          margin-right: 30px;\n          text-transform: lowercase; }\n\n.l-requests .l-requests__list .l-requests__list-inner .bids-list .bids-navigation .m-page-nav input[type=\"button\"] {\n          height: 20px;\n          width: 35px;\n          margin-right: 25px; }\n"

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


var RequestsPageComponent = /** @class */ (function () {
    function RequestsPageComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.showBids = false;
        this.showHistory = false;
        this.hasPrev = false;
        this.hasNext = false;
        this.departments = [
            {
                title: 'Административно-хозяйственный департамент',
                image: 'assets/icons/icon-depart-administrative.svg',
                text: 'Организация административно-хозяйственной деятельности, минимизация затрат компании, обеспечение ее жизнедеятельности.',
                active: false
            },
            {
                title: 'Департамент HR (Human Resource )',
                image: 'assets/icons/icon-depart-hr.svg',
                text: 'Поиск и подбор персонала, обучение и тренинги для персонала, кадровый и IT консалтинг.',
                active: false
            },
            {
                title: 'Департамент Безопасности и режима',
                image: 'assets/icons/icon-depart-security.svg',
                text: 'Организация режима и охраны предприятия, организация и поддержание пропускного и внутри объектного режима.',
                active: false
            },
            {
                title: 'Департамент планирования проектов',
                image: 'assets/icons/icon-depart-planning.svg',
                text: 'Определяние лучшего способа достижения поставленных целей и задач с учетом текущей и меняющейся ситуации',
                active: false
            }
        ];
        this.bids = [
            {
                title: 'Заявление на предоставление дня отдыха за ранее отработанное время',
                date: '02.09.2018',
                status: 'Отозвана',
                marked: true
            },
            {
                title: 'Заявка на организацию и проведение внутреннего конкурса по подбору сотрудников',
                date: '02.09.2018',
                status: 'Принята'
            },
            {
                title: 'Заявка на переезд работника из другого подразделения',
                date: '02.09.2018',
                status: 'Отозвана',
                marked: true
            }
        ];
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    RequestsPageComponent.prototype.ngOnInit = function () { };
    RequestsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requests-page',
            template: __webpack_require__(/*! ./requests-page.component.html */ "./src/app/requests/components/requests-page/requests-page.component.html"),
            styles: [__webpack_require__(/*! ./requests-page.component.scss */ "./src/app/requests/components/requests-page/requests-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]])
    ], RequestsPageComponent);
    return RequestsPageComponent;
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
/* harmony import */ var src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/security/groups.resolver */ "./src/app/services/security/groups.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _components_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_2__["RequestsPageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_3__["GroupsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Заявки' }
    }
];
var RequestsRoutingModule = /** @class */ (function () {
    function RequestsRoutingModule() {
    }
    RequestsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_3__["GroupsResolver"]],
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
/* harmony import */ var _components_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/requests-page/requests-page.component */ "./src/app/requests/components/requests-page/requests-page.component.ts");
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests-routing.module */ "./src/app/requests/requests-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
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
                _components_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_2__["RequestsPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _requests_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], RequestsModule);
    return RequestsModule;
}());



/***/ })

}]);
//# sourceMappingURL=15.js.map