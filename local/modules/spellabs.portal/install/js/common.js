(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/phonebook/services/departments/departments.resolver.ts":
/*!************************************************************************!*\
  !*** ./src/app/phonebook/services/departments/departments.resolver.ts ***!
  \************************************************************************/
/*! exports provided: DepartmentsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsResolver", function() { return DepartmentsResolver; });
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

var DepartmentsResolver = /** @class */ (function () {
    function DepartmentsResolver(departmentsFactory) {
        this.departmentsFactory = departmentsFactory;
    }
    DepartmentsResolver.prototype.resolve = function (route, state) {
        return this.departmentsFactory.getItemsByParentId();
    };
    DepartmentsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('DepartmentsFactory')),
        __metadata("design:paramtypes", [Object])
    ], DepartmentsResolver);
    return DepartmentsResolver;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map