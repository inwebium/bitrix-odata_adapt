(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hall-of-fame-hall-of-fame-module"],{

/***/ "./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leftside\">\n  <div class=\"l-page-header\">\n    <div class=\"l-breadcrumbs\">\n      <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n      <div class=\"l-breadcrumb\">\n        Доска почета\n      </div>\n    </div>\n    <div class=\"title\">Доска почета</div>\n    <div class=\"l-page\">\n      <div class=\"l-page-inner\">\n        <div class=\"l-page__content\">\n          <p>\n            <b>Модуль доски почета в разработке. Он появится очень скоро!</b>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.ts ***!
  \********************************************************************************/
/*! exports provided: HallOfFameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallOfFameComponent", function() { return HallOfFameComponent; });
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

var HallOfFameComponent = /** @class */ (function () {
    function HallOfFameComponent() {
    }
    HallOfFameComponent.prototype.ngOnInit = function () {
    };
    HallOfFameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hall-of-fame',
            template: __webpack_require__(/*! ./hall-of-fame.component.html */ "./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.html"),
            styles: [__webpack_require__(/*! ./hall-of-fame.component.scss */ "./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HallOfFameComponent);
    return HallOfFameComponent;
}());



/***/ }),

/***/ "./src/app/hall-of-fame/hall-of-fame-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/hall-of-fame/hall-of-fame-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HallOfFameRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallOfFameRoutingModule", function() { return HallOfFameRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_hall_of_fame_hall_of_fame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hall-of-fame/hall-of-fame.component */ "./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.ts");
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
        component: _components_hall_of_fame_hall_of_fame_component__WEBPACK_IMPORTED_MODULE_1__["HallOfFameComponent"],
        resolve: {},
        data: { animation: 'fadeAnimation', title: 'Доска почета' }
    }
];
var HallOfFameRoutingModule = /** @class */ (function () {
    function HallOfFameRoutingModule() {
    }
    HallOfFameRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            providers: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HallOfFameRoutingModule);
    return HallOfFameRoutingModule;
}());



/***/ }),

/***/ "./src/app/hall-of-fame/hall-of-fame.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/hall-of-fame/hall-of-fame.module.ts ***!
  \*****************************************************/
/*! exports provided: HallOfFameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallOfFameModule", function() { return HallOfFameModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_hall_of_fame_hall_of_fame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hall-of-fame/hall-of-fame.component */ "./src/app/hall-of-fame/components/hall-of-fame/hall-of-fame.component.ts");
/* harmony import */ var _hall_of_fame_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hall-of-fame-routing.module */ "./src/app/hall-of-fame/hall-of-fame-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HallOfFameModule = /** @class */ (function () {
    function HallOfFameModule() {
    }
    HallOfFameModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_hall_of_fame_hall_of_fame_component__WEBPACK_IMPORTED_MODULE_2__["HallOfFameComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _hall_of_fame_routing_module__WEBPACK_IMPORTED_MODULE_3__["HallOfFameRoutingModule"]
            ]
        })
    ], HallOfFameModule);
    return HallOfFameModule;
}());



/***/ })

}]);
//# sourceMappingURL=hall-of-fame-hall-of-fame-module.js.map