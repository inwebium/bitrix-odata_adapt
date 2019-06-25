(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~enterprise-enterprise-module~incidents-incidents-module"],{

/***/ "./src/app/enterprise/components/incident-modal-form/incident-modal-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/enterprise/components/incident-modal-form/incident-modal-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-master-modal\" *ngIf=\"modalIsOpen && incident\">\n  <div class=\"l-master__block\">\n    <div class=\"l-master__header\">\n      <div class=\"header-text\">\n        <div class=\"title\">\n          Проишествия\n        </div>\n      </div>\n      <div class=\"close\">\n        <input\n          type=\"button\"\n          class=\"btn-close-gray-bold\"\n          (click)=\"closeModal()\"\n        />\n      </div>\n    </div>\n    <div class=\"l-master__body\">\n      <div class=\"master-body__content\">\n        <div class=\"date\">\n          {{incident.dateTitle}}\n        </div>\n        <div class=\"title\">\n          {{incident.title}}\n        </div>\n        <div class=\"text\" [innerHTML]=\"incident.text\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"l-master__overlay\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/enterprise/components/incident-modal-form/incident-modal-form.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/enterprise/components/incident-modal-form/incident-modal-form.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-master-modal .l-master__block {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 45%;\n  max-height: 100%;\n  z-index: 99999;\n  background-color: #fff; }\n\n.l-master-modal .l-master__block .l-master__header {\n    position: relative;\n    background-color: #dedfe0;\n    height: 165px;\n    padding: 40px 50px;\n    box-sizing: border-box;\n    color: #050505;\n    background-image: url(/assets/icons/icon-booking-master.svg);\n    background-size: 85px 85px;\n    background-position: left 50px top 50%;\n    background-repeat: no-repeat; }\n\n.l-master-modal .l-master__block .l-master__header .header-text {\n      position: absolute;\n      left: 150px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%); }\n\n.l-master-modal .l-master__block .l-master__header .header-text .title {\n        font-size: 24px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        line-height: 30px;\n        max-height: 30px;\n        font-weight: bold;\n        margin-bottom: 10px; }\n\n@media (min-width: 1440px) {\n          .l-master-modal .l-master__block .l-master__header .header-text .title {\n            font-size: calc( 0.02083333 * 100vw + -6px);\n            line-height: calc( 0.02083333 * 100vw + 0px);\n            max-height: calc( 0.02083333 * 100vw + 0px);\n            -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n          .l-master-modal .l-master__block .l-master__header .header-text .title {\n            font-size: 34px;\n            line-height: 40px;\n            max-height: 40px; } }\n\n.l-master-modal .l-master__block .l-master__header .close {\n      position: absolute;\n      right: 35px;\n      top: 35px; }\n\n.l-master-modal .l-master__block .l-master__body {\n    width: 100%;\n    max-height: 500px;\n    overflow: auto;\n    padding: 40px 125px 100px;\n    box-sizing: border-box; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content {\n      width: 100%;\n      box-sizing: border-box; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .date {\n        font-size: 22px;\n        margin-bottom: 20px;\n        color: #050505; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .title {\n        font-size: 34px;\n        font-weight: bold;\n        margin-bottom: 35px;\n        color: #000000; }\n\n.l-master-modal .l-master__block .l-master__body .master-body__content .text {\n        font-size: 22px;\n        color: #000000; }\n\n.l-master-modal .l-master__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 99998; }\n"

/***/ }),

/***/ "./src/app/enterprise/components/incident-modal-form/incident-modal-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/enterprise/components/incident-modal-form/incident-modal-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: IncidentModalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentModalFormComponent", function() { return IncidentModalFormComponent; });
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

var IncidentModalFormComponent = /** @class */ (function () {
    function IncidentModalFormComponent() {
        this.modalIsOpen = false;
        this.incident = null;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    IncidentModalFormComponent.prototype.closeModal = function () {
        this.close.emit();
    };
    IncidentModalFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], IncidentModalFormComponent.prototype, "modalIsOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IncidentModalFormComponent.prototype, "incident", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IncidentModalFormComponent.prototype, "close", void 0);
    IncidentModalFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incident-modal-form',
            template: __webpack_require__(/*! ./incident-modal-form.component.html */ "./src/app/enterprise/components/incident-modal-form/incident-modal-form.component.html"),
            styles: [__webpack_require__(/*! ./incident-modal-form.component.scss */ "./src/app/enterprise/components/incident-modal-form/incident-modal-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IncidentModalFormComponent);
    return IncidentModalFormComponent;
}());



/***/ }),

/***/ "./src/app/incidents/components/incident-card-page/incident-card-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/incidents/components/incident-card-page/incident-card-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">\n      <a [routerLink]=\"['/enterprise/incidents', id]\">Происшествия</a>\n    </div>\n    <div class=\"l-breadcrumb\">{{ incident.title }}</div>\n  </div>\n  <div class=\"title\">{{ incident.title }}</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-news-card\">\n        <div class=\"body\">\n          <div class=\"description\">\n            <div class=\"date\">\n              {{ incident.dateTitle }}\n            </div>\n            <div class=\"text\" [innerHTML]=\"incident.text\"></div>\n          </div>\n        </div>\n        <div\n          *ngIf=\"incident.attachmentFiles.length > 0\"\n          class=\"photo\"\n          [ngStyle]=\"{ 'background-image': 'url(' + prepareLink(incident.attachmentFiles[0]) + ')' }\"\n        ></div>\n        <div class=\"gallery\">\n          <div class=\"title\"><span>Галерея</span></div>\n          <div class=\"carousel\" *ngIf=\"incident.attachmentFiles.length > 0\">\n            <app-news-card-gallery\n              [items]=\"incident.attachmentFiles\"\n            ></app-news-card-gallery>\n          </div>\n        </div>\n        <div class=\"button\">\n          <a [routerLink]=\"['../']\" class=\"btn btn-to-back\">\n            <i></i> К списку происшествий\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-button-up></app-button-up>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/images/images.service */ "./src/app/services/images/images.service.ts");
/* harmony import */ var src_app_services_incidents_incidents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/incidents/incidents.service */ "./src/app/services/incidents/incidents.service.ts");
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
    function IncidentCardPageComponent(route, imagesService, incidentsService) {
        this.route = route;
        this.imagesService = imagesService;
        this.incidentsService = incidentsService;
        this.id = undefined;
        this.webId = undefined;
        this.incident = null;
    }
    IncidentCardPageComponent.prototype.prepareLink = function (link) {
        return '"' + this.imagesService.prepareBackgroundUrl(link) + '"';
    };
    IncidentCardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.webId =
            this.route.snapshot.data.webId !== 'root'
                ? this.route.snapshot.data.webId
                : null;
        this.incidentsService.getItem({ id: this.route.snapshot.params.itemId, webId: this.webId })
            .subscribe(function (item) { return _this.incident = item; });
    };
    IncidentCardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incident-card-page',
            template: __webpack_require__(/*! ./incident-card-page.component.html */ "./src/app/incidents/components/incident-card-page/incident-card-page.component.html"),
            styles: [__webpack_require__(/*! ./incident-card-page.component.scss */ "./src/app/incidents/components/incident-card-page/incident-card-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"],
            src_app_services_incidents_incidents_service__WEBPACK_IMPORTED_MODULE_3__["IncidentsService"]])
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

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">\n      Происшествия\n    </div>\n  </div>\n  <div class=\"title\">Происшествия</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-incidents-counter\" *ngIf=\"withoutIncidents && withoutIncidents.daysCount >= 10\">\n    {{withoutIncidents.daysHumanize}} без происшествий\n  </div>\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-incidents\">\n        <div class=\"l-incidents-categories\" style=\"display: none\">\n          <app-filters>\n            <app-filters-item>\n              МГОк\n            </app-filters-item>\n            <app-filters-item>\n              ЛГОк\n            </app-filters-item>\n          </app-filters>\n        </div>\n        <div class=\"l-incidents-table\" *ngIf=\"incidentsList.length\">\n          <div class=\"table-head\">\n            <div class=\"col\">\n              Дата\n            </div>\n            <div class=\"col\">\n              Название\n            </div>\n          </div>\n          <a [routerLink]=\"[item.id]\" class=\"row\" *ngFor=\"let item of incidentsList\">\n            <div class=\"col\">\n              {{item.formatedDate}}\n            </div>\n            <div class=\"col\">\n              {{item.title}}\n            </div>\n          </a>\n        </div>\n        <div class=\"not-items\" *ngIf=\"!incidentsList.length\">\n          На предприятии без происшествий\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/incidents/components/incidents-page/incidents-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/incidents/components/incidents-page/incidents-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-incidents-counter {\n  position: absolute;\n  top: 160px;\n  right: 45px;\n  font-size: 34px;\n  font-weight: bold;\n  color: #768692; }\n\n.l-incidents {\n  padding-left: 25px;\n  box-sizing: border-box;\n  position: relative; }\n\n.l-incidents .l-incidents-categories {\n    height: 30px;\n    position: absolute;\n    top: -30px; }\n\n.l-incidents .l-incidents-table {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: collapse; }\n\n.l-incidents .l-incidents-table .table-head {\n      display: table-row;\n      font-size: 18px;\n      font-weight: bold;\n      color: #898888;\n      border-bottom: 1px solid #707070; }\n\n.l-incidents .l-incidents-table .table-head .col {\n        padding-bottom: 10px; }\n\n.l-incidents .l-incidents-table .row {\n      display: table-row;\n      font-size: 18px;\n      color: #050505;\n      text-decoration: none; }\n\n.l-incidents .l-incidents-table .row:hover {\n        color: #da402b; }\n\n.l-incidents .l-incidents-table .row:nth-child(odd) {\n        background-color: #F7F7F7; }\n\n.l-incidents .l-incidents-table .col {\n      display: table-cell;\n      padding: 25px 20px; }\n\n.l-incidents .l-incidents-table .col:first-child {\n        width: 10%; }\n\n.l-incidents .l-incidents-table .col:last-child {\n        width: 90%; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_incidents_incidents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/incidents/incidents.service */ "./src/app/services/incidents/incidents.service.ts");
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
    function IncidentsPageComponent(route, incidentsService) {
        this.route = route;
        this.incidentsService = incidentsService;
        this.webId = undefined;
        this.withoutIncidents = null;
        this.incidentsList = [];
    }
    IncidentsPageComponent.prototype.getIncidents = function () {
        var _this = this;
        this.incidentsService.getItems({ filter: 'OData__ModerationStatus eq 0',
            webId: this.webId }).subscribe(function (items) {
            _this.incidentsList = items;
            if (_this.incidentsList.length > 0) {
                var incidentDate = moment__WEBPACK_IMPORTED_MODULE_2__(_this.incidentsList[0].date, 'YYYY-MM-DD');
                var currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().startOf('day');
                var countDays = moment__WEBPACK_IMPORTED_MODULE_2__["duration"](incidentDate.diff(currentDate)).as('days');
                _this.withoutIncidents = {
                    daysCount: Math.abs(countDays),
                    daysHumanize: moment__WEBPACK_IMPORTED_MODULE_2__["duration"](countDays, 'days').humanize()
                };
            }
        });
    };
    IncidentsPageComponent.prototype.ngOnInit = function () {
        this.webId =
            this.route.snapshot.data.webId !== 'root'
                ? this.route.snapshot.data.webId
                : null;
        this.getIncidents();
    };
    IncidentsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incidents-page',
            template: __webpack_require__(/*! ./incidents-page.component.html */ "./src/app/incidents/components/incidents-page/incidents-page.component.html"),
            styles: [__webpack_require__(/*! ./incidents-page.component.scss */ "./src/app/incidents/components/incidents-page/incidents-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_incidents_incidents_service__WEBPACK_IMPORTED_MODULE_3__["IncidentsService"]])
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
/* harmony import */ var src_app_services_incidents_incidents_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/incidents/incidents.resolver */ "./src/app/services/incidents/incidents.resolver.ts");
/* harmony import */ var src_app_services_incidents_incident_card_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/incidents/incident-card.resolver */ "./src/app/services/incidents/incident-card.resolver.ts");
/* harmony import */ var _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/companies/company-web.resolver */ "./src/app/services/companies/company-web.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: ':id',
        component: _components_incidents_page_incidents_page_component__WEBPACK_IMPORTED_MODULE_3__["IncidentsPageComponent"],
        resolve: {
            groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"],
            webId: _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_7__["CompanyWebResolver"]
        },
        data: { animation: 'fadeAnimation', title: 'Происшествия' }
    },
    {
        path: ':id/:itemId',
        component: _components_incident_card_page_incident_card_page_component__WEBPACK_IMPORTED_MODULE_2__["IncidentCardPageComponent"],
        resolve: {
            groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"],
            webId: _services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_7__["CompanyWebResolver"],
        },
        data: { animation: 'fadeAnimation', title: 'Происшествие' }
    },
    {
        path: '',
        redirectTo: 'root',
        pathMatch: 'full'
    }
];
var IncidentsRoutingModule = /** @class */ (function () {
    function IncidentsRoutingModule() {
    }
    IncidentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [
                src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"],
                src_app_services_incidents_incidents_resolver__WEBPACK_IMPORTED_MODULE_5__["IncidentsResolver"],
                src_app_services_incidents_incident_card_resolver__WEBPACK_IMPORTED_MODULE_6__["IncidentCardResolver"]
            ],
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
/* harmony import */ var src_app_news_news_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/news/news.module */ "./src/app/news/news.module.ts");
/* harmony import */ var src_app_enterprise_components_incident_modal_form_incident_modal_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/enterprise/components/incident-modal-form/incident-modal-form.component */ "./src/app/enterprise/components/incident-modal-form/incident-modal-form.component.ts");
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
                _components_incidents_page_incidents_page_component__WEBPACK_IMPORTED_MODULE_5__["IncidentsPageComponent"],
                src_app_enterprise_components_incident_modal_form_incident_modal_form_component__WEBPACK_IMPORTED_MODULE_9__["IncidentModalFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _incidents_routing_module__WEBPACK_IMPORTED_MODULE_7__["IncidentsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                src_app_news_news_module__WEBPACK_IMPORTED_MODULE_8__["NewsModule"]
            ],
            exports: [
                src_app_enterprise_components_incident_modal_form_incident_modal_form_component__WEBPACK_IMPORTED_MODULE_9__["IncidentModalFormComponent"]
            ]
        })
    ], IncidentsModule);
    return IncidentsModule;
}());



/***/ }),

/***/ "./src/app/services/incidents/incident-card.resolver.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/incidents/incident-card.resolver.ts ***!
  \**************************************************************/
/*! exports provided: IncidentCardResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentCardResolver", function() { return IncidentCardResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _incidents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incidents.service */ "./src/app/services/incidents/incidents.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IncidentCardResolver = /** @class */ (function () {
    function IncidentCardResolver(incidentsService) {
        this.incidentsService = incidentsService;
    }
    IncidentCardResolver.prototype.resolve = function (route, state) {
        return this.incidentsService.getItem({ id: route.params.id });
    };
    IncidentCardResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_incidents_service__WEBPACK_IMPORTED_MODULE_1__["IncidentsService"]])
    ], IncidentCardResolver);
    return IncidentCardResolver;
}());



/***/ }),

/***/ "./src/app/services/incidents/incidents.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/incidents/incidents.resolver.ts ***!
  \**********************************************************/
/*! exports provided: IncidentsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsResolver", function() { return IncidentsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _incidents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incidents.service */ "./src/app/services/incidents/incidents.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IncidentsResolver = /** @class */ (function () {
    function IncidentsResolver(incidentsService) {
        this.incidentsService = incidentsService;
    }
    IncidentsResolver.prototype.resolve = function (route, state) {
        return this.incidentsService.getItems({ filter: 'OData__ModerationStatus eq 0' });
    };
    IncidentsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_incidents_service__WEBPACK_IMPORTED_MODULE_1__["IncidentsService"]])
    ], IncidentsResolver);
    return IncidentsResolver;
}());



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
/* harmony import */ var _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
        moment__WEBPACK_IMPORTED_MODULE_3__["locale"]('ru');
        moment__WEBPACK_IMPORTED_MODULE_3__["updateLocale"]('ru', {
            calendar: {
                sameDay: '[Сегодня]',
                nextDay: 'DD MMMM YYYY',
                nextWeek: 'DD MMMM YYYY',
                lastDay: '[Вчера]',
                lastWeek: 'DD MMMM YYYY',
                sameElse: 'DD MMMM YYYY'
            }
        });
        return _this;
    }
    IncidentsService.prototype.getListTitle = function () {
        return 'Происшествия';
    };
    IncidentsService.prototype.getListRelativePath = function () {
        return '/Lists/slIncidents';
    };
    IncidentsService.prototype.getSelect = function () {
        return 'Created,Id,Title,slText,OData__ModerationStatus,AttachmentFiles/ServerRelativeUrl';
    };
    IncidentsService.prototype.getExpand = function () {
        return 'AttachmentFiles';
    };
    IncidentsService.prototype.getOrderBy = function () {
        return [['Created', false]];
    };
    IncidentsService.prototype.getTop = function () {
        return 5000;
    };
    IncidentsService.prototype.getCachingOptions = function () {
        return null;
    };
    IncidentsService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            date: new Date(item.Created),
            dateTitle: moment__WEBPACK_IMPORTED_MODULE_3__(item.Created).calendar(),
            formatedDate: moment__WEBPACK_IMPORTED_MODULE_3__(item.Created).format('DD.MM.YYYY'),
            text: item.slText
        };
        if (item.AttachmentFiles) {
            entity.attachmentFiles = item.AttachmentFiles.map(function (a) { return a.ServerRelativeUrl; });
        }
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
        __metadata("design:paramtypes", [_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__["SharepointService"]])
    ], IncidentsService);
    return IncidentsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ })

}]);
//# sourceMappingURL=default~enterprise-enterprise-module~incidents-incidents-module.js.map