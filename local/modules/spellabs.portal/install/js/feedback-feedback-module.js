(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"],{

/***/ "./src/app/feedback/components/feedback-start-page/feedback-start-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/feedback/components/feedback-start-page/feedback-start-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leftside\">\n    <div class=\"l-page-header\">\n      <div class=\"l-breadcrumbs\">\n        <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n        <div class=\"l-breadcrumb\">\n          Твой голос\n        </div>\n      </div>\n      <div class=\"title\">Твой голос</div>\n      <div class=\"l-page\">\n          <div class=\"l-page-inner\">\n            <div class=\"l-page__content\">\n              <p>\n                  <b>Модуль обратной связи в разработке. Он появится очень скоро!</b>\n              </p>\n            </div>\n          </div>\n        </div>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/feedback/components/feedback-start-page/feedback-start-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/feedback/components/feedback-start-page/feedback-start-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feedback/components/feedback-start-page/feedback-start-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/feedback/components/feedback-start-page/feedback-start-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FeedbackStartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackStartPageComponent", function() { return FeedbackStartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/feedback.service */ "./src/app/feedback/services/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackStartPageComponent = /** @class */ (function () {
    function FeedbackStartPageComponent(router, route, feedbackService) {
        this.router = router;
        this.route = route;
        this.feedbackService = feedbackService;
    }
    FeedbackStartPageComponent.prototype.ngOnInit = function () {
    };
    FeedbackStartPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback-start-page',
            template: __webpack_require__(/*! ./feedback-start-page.component.html */ "./src/app/feedback/components/feedback-start-page/feedback-start-page.component.html"),
            styles: [__webpack_require__(/*! ./feedback-start-page.component.scss */ "./src/app/feedback/components/feedback-start-page/feedback-start-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]])
    ], FeedbackStartPageComponent);
    return FeedbackStartPageComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/feedback/feedback-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeedbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackRoutingModule", function() { return FeedbackRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_feedback_start_page_feedback_start_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/feedback-start-page/feedback-start-page.component */ "./src/app/feedback/components/feedback-start-page/feedback-start-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_feedback_start_page_feedback_start_page_component__WEBPACK_IMPORTED_MODULE_1__["FeedbackStartPageComponent"],
        resolve: {},
        data: { animation: 'fadeAnimation', title: 'Архив объявлений' }
    }
];
var FeedbackRoutingModule = /** @class */ (function () {
    function FeedbackRoutingModule() {
    }
    FeedbackRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            providers: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FeedbackRoutingModule);
    return FeedbackRoutingModule;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.module.ts":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/*! exports provided: FeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_feedback_start_page_feedback_start_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/feedback-start-page/feedback-start-page.component */ "./src/app/feedback/components/feedback-start-page/feedback-start-page.component.ts");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-routing.module */ "./src/app/feedback/feedback-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeedbackModule = /** @class */ (function () {
    function FeedbackModule() {
    }
    FeedbackModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_feedback_start_page_feedback_start_page_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackStartPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"]
            ]
        })
    ], FeedbackModule);
    return FeedbackModule;
}());



/***/ }),

/***/ "./src/app/feedback/services/feedback.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/feedback/services/feedback.service.ts ***!
  \*******************************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
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

var FeedbackService = /** @class */ (function () {
    function FeedbackService() {
    }
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ })

}]);
//# sourceMappingURL=feedback-feedback-module.js.map