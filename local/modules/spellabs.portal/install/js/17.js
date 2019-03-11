(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/app/incidents/components/incident-card-page/incident-card-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/incidents/components/incident-card-page/incident-card-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\r\n  <div class=\"l-breadcrumbs\">\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/incidents']\">Происшествия</a></div>\r\n    <div class=\"l-breadcrumb\">{{ title }}</div>\r\n  </div>\r\n  <div class=\"title\">{{ title }}</div>\r\n</div>\r\n<div class=\"l-page\">\r\n  <div class=\"l-page-inner\">\r\n    <div class=\"l-page__content\">\r\n      <div class=\"l-news-card\">\r\n        <div class=\"body\">\r\n          <div class=\"description\">\r\n            <div class=\"date\">\r\n              {{ date }}\r\n            </div>\r\n            <div class=\"text\" [innerHTML]=\"text\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"photo\" [ngStyle]=\"{'background-image': 'url(' + imageUrl + ')'}\">\r\n        </div>\r\n        <div class=\"gallery\">\r\n          <div class=\"title\"><span>Галерея</span></div>\r\n          <!--<div class=\"carousel\" *ngIf=\"item.attachmentFiles.length > 0\">\r\n            <app-news-card-gallery [items]=\"item.attachmentFiles\"></app-news-card-gallery>\r\n          </div>-->\r\n        </div>\r\n        <div class=\"button\">\r\n          <a [routerLink]=\"['/incidents']\" class=\"btn btn-to-back\">\r\n            <i></i> К списку происшествий\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-button-up></app-button-up>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/incidents/components/incident-card-page/incident-card-page.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/incidents/components/incident-card-page/incident-card-page.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-news-card {\n  max-width: 1065px;\n  padding-left: 25px;\n  padding-top: 0;\n  box-sizing: border-box; }\n\n.photo {\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  width: 350px;\n  height: 230px;\n  position: relative;\n  vertical-align: top; }\n\n.body {\n  display: inline-block;\n  width: calc(100% - 350px);\n  padding-right: 30px;\n  box-sizing: border-box; }\n\n.description {\n  min-height: 250px; }\n\n.description .text {\n    margin-bottom: 35px;\n    color: #050505;\n    font-size: 14px;\n    line-height: 26px;\n    line-height: 34px; }\n\n@media (min-width: 1440px) {\n      .description .text {\n        font-size: calc( 0.00833333 * 100vw + 2px);\n        line-height: calc( 0.00833333 * 100vw + 14px); } }\n\n@media (min-width: 1920px) {\n      .description .text {\n        font-size: 18px;\n        line-height: 30px; } }\n\n.description .date {\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin-bottom: 15px;\n    display: inline-block;\n    text-transform: uppercase;\n    color: #050505; }\n\n.gallery .title {\n  position: relative;\n  box-sizing: border-box;\n  margin-bottom: 20px; }\n\n.gallery .title:before {\n    position: absolute;\n    content: \"\";\n    display: block;\n    left: 130px;\n    right: 0;\n    bottom: 0;\n    height: 1px;\n    background-color: #B7BAB7; }\n\n.gallery .title span {\n    font-size: 24px;\n    line-height: 18px;\n    color: #050505;\n    font-weight: 600; }\n\n.button {\n  margin: 30px 0; }\n"

/***/ }),

/***/ "./src/app/incidents/components/incident-card-page/incident-card-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/incidents/components/incident-card-page/incident-card-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IncidentCardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentCardPageComponent", function() { return IncidentCardPageComponent; });
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


var IncidentCardPageComponent = /** @class */ (function () {
    function IncidentCardPageComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.date = 'Сегодня';
        this.title = 'Авария на газовом трубопроводе, снабжающем город Железногорск';
        this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum turpis vel ullamcorper pretium. Aenean fringilla orci in libero finibus tristique quis nec erat. Nulla aliquam mauris purus, euismod vestibulum nisi ultricies sed. Nunc tortor quam, ultrices a commodo a, bibendum vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi consequat lectus vitae ex bibendum, at lobortis erat dictum. Nullam efficitur urna ac nisi sollicitudin porttitor id in nibh. Mauris quam nibh, condimentum at eros nec, feugiat fermentum elit. Nulla et interdum tortor, et luctus sapien. Sed tempus eleifend vehicula. Morbi in scelerisque diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nec velit non dolor sollicitudin eleifend. Nunc vulputate imperdiet mi, a molestie augue. ';
        this.imageUrl = 'https://jooinn.com/images/picture-2.jpg';
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    IncidentCardPageComponent.prototype.ngOnInit = function () { };
    IncidentCardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incident-card-page',
            template: __webpack_require__(/*! ./incident-card-page.component.html */ "./src/app/incidents/components/incident-card-page/incident-card-page.component.html"),
            styles: [__webpack_require__(/*! ./incident-card-page.component.scss */ "./src/app/incidents/components/incident-card-page/incident-card-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]])
    ], IncidentCardPageComponent);
    return IncidentCardPageComponent;
}());



/***/ }),

/***/ "./src/app/incidents/components/incidents-page/incidents-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/incidents/components/incidents-page/incidents-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\r\n  <div class=\"l-breadcrumbs\">\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\r\n    <div class=\"l-breadcrumb\">\r\n      Происшествия\r\n    </div>\r\n  </div>\r\n  <div class=\"title\">Происшествия</div>\r\n</div>\r\n<div class=\"l-page\">\r\n  <div class=\"l-page-inner\">\r\n    <div class=\"l-page__content\">\r\n      <div class=\"l-incidents\">\r\n        <div class=\"l-incidents-categories\">\r\n          <app-filters>\r\n            <app-filters-item>\r\n              МГОк\r\n            </app-filters-item>\r\n            <app-filters-item>\r\n              ЛГОк\r\n            </app-filters-item>\r\n          </app-filters>\r\n        </div>\r\n        <div class=\"l-incidents-counter\">\r\n          {{counter}} дня без происшествий\r\n        </div>\r\n        <div class=\"l-incidents-table\">\r\n          <div class=\"table-head\">\r\n            <div class=\"col\">\r\n              Дата\r\n            </div>\r\n            <div class=\"col\">\r\n              Название\r\n            </div>\r\n          </div>\r\n          <a [routerLink]=\"['/incidents/' + item.id]\" class=\"row\" *ngFor=\"let item of incidents\">\r\n            <div class=\"col\">\r\n              {{item.date}}\r\n            </div>\r\n            <div class=\"col\">\r\n              {{item.title}}\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/incidents/components/incidents-page/incidents-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/incidents/components/incidents-page/incidents-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-incidents {\n  padding-top: 50px;\n  padding-left: 25px;\n  box-sizing: border-box;\n  position: relative; }\n\n.l-incidents .l-incidents-categories {\n    height: 30px;\n    position: absolute;\n    top: -30px; }\n\n.l-incidents .l-incidents-counter {\n    font-size: 34px;\n    font-weight: bold;\n    color: #768692;\n    margin-bottom: 35px; }\n\n.l-incidents .l-incidents-table {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: collapse; }\n\n.l-incidents .l-incidents-table .table-head {\n      display: table-row;\n      font-size: 18px;\n      font-weight: bold;\n      color: #898888;\n      border-bottom: 1px solid #707070; }\n\n.l-incidents .l-incidents-table .table-head .col {\n        padding-bottom: 10px; }\n\n.l-incidents .l-incidents-table .row {\n      display: table-row;\n      font-size: 18px;\n      color: #050505;\n      text-decoration: none; }\n\n.l-incidents .l-incidents-table .row:hover {\n        color: #da402b; }\n\n.l-incidents .l-incidents-table .row:nth-child(odd) {\n        background-color: #F7F7F7; }\n\n.l-incidents .l-incidents-table .col {\n      display: table-cell;\n      padding: 25px 20px; }\n\n.l-incidents .l-incidents-table .col:first-child {\n        width: 10%; }\n\n.l-incidents .l-incidents-table .col:last-child {\n        width: 90%; }\n"

/***/ }),

/***/ "./src/app/incidents/components/incidents-page/incidents-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/incidents/components/incidents-page/incidents-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IncidentsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsPageComponent", function() { return IncidentsPageComponent; });
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


var IncidentsPageComponent = /** @class */ (function () {
    function IncidentsPageComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.counter = 724;
        this.incidents = [
            {
                id: 1,
                date: '02.09.2018',
                title: 'Авария на газовом трубопроводе, снабжающем город Железногорск'
            },
            {
                id: 2,
                date: '14.02.2017',
                title: 'Незначительное разрушение зданий после сентябрьского урагана'
            },
            {
                id: 3,
                date: '02.10.2016',
                title: 'Выброс вредных веществ'
            }
        ];
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    IncidentsPageComponent.prototype.ngOnInit = function () { };
    IncidentsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incidents-page',
            template: __webpack_require__(/*! ./incidents-page.component.html */ "./src/app/incidents/components/incidents-page/incidents-page.component.html"),
            styles: [__webpack_require__(/*! ./incidents-page.component.scss */ "./src/app/incidents/components/incidents-page/incidents-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]])
    ], IncidentsPageComponent);
    return IncidentsPageComponent;
}());



/***/ }),

/***/ "./src/app/incidents/incidents-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/incidents/incidents-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: IncidentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsRoutingModule", function() { return IncidentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_incident_card_page_incident_card_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/incident-card-page/incident-card-page.component */ "./src/app/incidents/components/incident-card-page/incident-card-page.component.ts");
/* harmony import */ var _components_incidents_page_incidents_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/incidents-page/incidents-page.component */ "./src/app/incidents/components/incidents-page/incidents-page.component.ts");
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
        component: _components_incidents_page_incidents_page_component__WEBPACK_IMPORTED_MODULE_3__["IncidentsPageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Происшествия' }
    },
    {
        path: ':id',
        component: _components_incident_card_page_incident_card_page_component__WEBPACK_IMPORTED_MODULE_2__["IncidentCardPageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Происшествия' }
    }
];
var IncidentsRoutingModule = /** @class */ (function () {
    function IncidentsRoutingModule() {
    }
    IncidentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IncidentsRoutingModule);
    return IncidentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/incidents/incidents.module.ts":
/*!***********************************************!*\
  !*** ./src/app/incidents/incidents.module.ts ***!
  \***********************************************/
/*! exports provided: IncidentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsModule", function() { return IncidentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_incident_card_page_incident_card_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/incident-card-page/incident-card-page.component */ "./src/app/incidents/components/incident-card-page/incident-card-page.component.ts");
/* harmony import */ var _components_incidents_page_incidents_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/incidents-page/incidents-page.component */ "./src/app/incidents/components/incidents-page/incidents-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _incidents_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./incidents-routing.module */ "./src/app/incidents/incidents-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var IncidentsModule = /** @class */ (function () {
    function IncidentsModule() {
    }
    IncidentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_incident_card_page_incident_card_page_component__WEBPACK_IMPORTED_MODULE_4__["IncidentCardPageComponent"],
                _components_incidents_page_incidents_page_component__WEBPACK_IMPORTED_MODULE_5__["IncidentsPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _incidents_routing_module__WEBPACK_IMPORTED_MODULE_7__["IncidentsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], IncidentsModule);
    return IncidentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=17.js.map