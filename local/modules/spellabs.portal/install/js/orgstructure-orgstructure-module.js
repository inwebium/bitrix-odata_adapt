(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orgstructure-orgstructure-module"],{

/***/ "./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">Структура компании</div>\n  </div>\n  <div class=\"title\">Структура компании</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-orgstructure\">\n        <div class=\"l-orgstructure__inner\">\n          <app-orgstructure-tree [trees]=\"trees\"></app-orgstructure-tree>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".l-orgstructure {\n  text-align: center;\n  background-color: #fff;\n  padding: 25px;\n  box-sizing: border-box; }\n\n.l-orgstructure__inner {\n  display: inline-block;\n  max-width: 1350px; }\n"

/***/ }),

/***/ "./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OrgstructurePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgstructurePageComponent", function() { return OrgstructurePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_trees_trees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/trees/trees.service */ "./src/app/services/trees/trees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrgstructurePageComponent = /** @class */ (function () {
    function OrgstructurePageComponent(sidebarService, route, treesService) {
        this.sidebarService = sidebarService;
        this.route = route;
        this.treesService = treesService;
        this.showSidebar = false;
        this.trees = [];
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    OrgstructurePageComponent.prototype.ngOnInit = function () {
        this.trees
            = this.treesService.getTreeOfArray(this.route.snapshot.data.departments);
    };
    OrgstructurePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orgstructure-page',
            template: __webpack_require__(/*! ./orgstructure-page.component.html */ "./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.html"),
            styles: [__webpack_require__(/*! ./orgstructure-page.component.scss */ "./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_trees_trees_service__WEBPACK_IMPORTED_MODULE_3__["TreesService"]])
    ], OrgstructurePageComponent);
    return OrgstructurePageComponent;
}());



/***/ }),

/***/ "./src/app/orgstructure/components/orgstructure-tree/orgstructure-tree.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/orgstructure/components/orgstructure-tree/orgstructure-tree.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\" *ngFor=\"let item of trees\" #structureItem>\n  <div class=\"parent\">\n    <div class=\"title\" (click)=\"toggleItemTree(structureItem, item.value)\">\n      <div class=\"text\">\n        <span>{{ item.value.title }}</span>\n      </div>\n    </div>\n    <div class=\"leader\">\n      <div class=\"inner\">\n        <div class=\"photo\">\n          <app-user-thumb [photo]=\"item.value.lookupManagerPhoto\"\n          [route]=\"item.value.profileManagerRoute\"\n          [active]=\"item.value.lookupManagerReason == null || item.value.lookupManagerReason === ''\"></app-user-thumb>\n        </div>\n        <div class=\"info\">\n          <div class=\"full-name\">{{ item.value.lookupManagerFullName }}</div>\n          <div class=\"position\">{{ item.value.lookupManagerPosition }}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"structure\">\n      <div class=\"m-department-structure\">\n        <a class=\"employees\" *ngIf=\"item.value.employeeCount\" #employeesRef (click)=\"toggleEmployees($event, employeesRef, item.value)\">\n          <div class=\"text\">\n            {{ item.value.totalEmployeeCount }} {{ units(item.value.totalEmployeeCount, casesEmployee) }}\n          </div>\n          <div class=\"list-employees\" #list (click)=\"$event.stopPropagation()\">\n            <input type=\"button\" (click)=\"toggleEmployees($event, employeesRef, item.value)\" />\n            <div class=\"list\">\n              <div class=\"item-employee\" *ngFor=\"let employee of employees\">\n                <div class=\"photo\">\n                  <app-user-thumb [width]=\"'35px'\" [height]=\"'35px'\"\n                  [photo]=\"employee.photo\" [route]=\"employee.profileRoute\"\n                  [active]=\"employee.reason == null || employee.reason === ''\"></app-user-thumb>\n                </div>\n                <div class=\"full-name\">{{ employee.fullName }}</div>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a *ngIf=\"item.childrens && item.childrens.length > 0\" class=\"divisions\" (click)=\"toggleItemTree(structureItem, item.value)\">\n          {{ item.childrens.length }} {{ units(item.childrens.length, casesDivisions) }}\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"child\" *ngIf=\"item.childrens\">\n    <app-orgstructure-tree #recurciveElement [trees]=\"item.childrens\"></app-orgstructure-tree>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/orgstructure/components/orgstructure-tree/orgstructure-tree.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/orgstructure/components/orgstructure-tree/orgstructure-tree.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.item {\n  vertical-align: top;\n  display: inline-block;\n  margin: 15px 7px; }\n\n.item.is-hidden {\n    display: none; }\n\n.item.is-hidden.is-expanded {\n      display: inline-block; }\n\n.item .parent {\n    display: inline-block;\n    position: relative;\n    width: 295px;\n    height: auto;\n    text-align: left;\n    box-sizing: border-box; }\n\n.item .parent .title {\n      cursor: pointer;\n      display: table;\n      table-layout: fixed;\n      width: 100%;\n      border-collapse: collapse;\n      box-sizing: border-box;\n      text-align: center;\n      height: 48px;\n      background-color: #768692;\n      color: #FFFFFF; }\n\n.item .parent .title .text {\n        box-sizing: border-box;\n        padding: 0 15px;\n        display: table-cell;\n        vertical-align: middle;\n        height: 72px; }\n\n.item .parent .title .text span {\n          display: inline-block;\n          display: -webkit-box;\n          display: block;\n          text-overflow: ellipsis;\n          -webkit-line-clamp: 1;\n          overflow: hidden;\n          max-height: 24px;\n          font-weight: 400;\n          font-size: 18px; }\n\n.item .parent .leader {\n      padding: 12px;\n      height: 96px;\n      background-color: #F1F1F4;\n      box-sizing: border-box; }\n\n.item .parent .leader .inner {\n        display: table;\n        table-layout: fixed;\n        width: 100%;\n        border-collapse: collapse; }\n\n.item .parent .leader .inner .photo,\n        .item .parent .leader .inner .info {\n          display: table-cell;\n          vertical-align: middle;\n          box-sizing: border-box;\n          width: auto; }\n\n.item .parent .leader .inner .photo {\n          width: 60px;\n          text-align: center; }\n\n.item .parent .leader .inner .info {\n          padding-left: 10px; }\n\n.item .parent .leader .inner .info .full-name {\n            font-size: 14px;\n            color: #EB113B;\n            display: -webkit-box;\n            display: block;\n            text-overflow: ellipsis;\n            -webkit-line-clamp: 2;\n            overflow: hidden;\n            max-height: 38px; }\n\n.item .parent .leader .inner .info .full-name + .position {\n              margin-top: 5px; }\n\n.item .parent .leader .inner .info .position {\n            color: #050505;\n            font-size: 10px;\n            line-height: 12px;\n            display: -webkit-box;\n            -webkit-line-clamp: 1;\n            overflow: hidden; }\n\n.item .parent .structure {\n      padding: 0px 15px;\n      box-sizing: border-box;\n      line-height: 32px;\n      text-align: center;\n      width: 100%;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      font-size: 0;\n      margin-top: -16px; }\n\n.item .parent .structure .employees,\n      .item .parent .structure .divisions {\n        display: inline-block;\n        padding: 0px 10px;\n        font-size: 14px;\n        color: #FFFFFF;\n        text-decoration: none;\n        max-width: 148px;\n        min-width: 40%; }\n\n.item .parent .structure .employees {\n        background-color: #A2B2C8;\n        position: relative;\n        cursor: pointer; }\n\n.item .parent .structure .employees.is-expanded .list-employees {\n          display: block; }\n\n.item .parent .structure .employees .list-employees {\n          display: none;\n          position: absolute;\n          top: 40px;\n          left: 0;\n          padding: 10px 5px;\n          padding-top: 15px;\n          box-sizing: border-box;\n          background-color: #d5dde6;\n          width: 240px;\n          z-index: 10; }\n\n.item .parent .structure .employees .list-employees input[type=\"button\"] {\n            padding: 0;\n            margin: 0;\n            border: 0;\n            min-width: 0;\n            background-color: transparent;\n            cursor: pointer;\n            width: 30px;\n            height: 30px;\n            border-radius: 100%;\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            z-index: 15;\n            background-color: #a2b2c8;\n            box-shadow: 0 0px 0px 2px #D5DDE6;\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: 100%;\n            background-image: url(\"/assets/icons/icon-close-white.svg\"); }\n\n.item .parent .structure .employees .list-employees input[type=\"button\"]:focus {\n              outline: none; }\n\n.item .parent .structure .employees .list-employees .list {\n            max-height: 200px;\n            overflow-y: auto; }\n\n.item .parent .structure .employees .list-employees .list .item-employee {\n              display: table;\n              table-layout: fixed;\n              border-collapse: collapse;\n              width: 100%; }\n\n.item .parent .structure .employees .list-employees .list .item-employee + .item-employee {\n                margin-top: 5px; }\n\n.item .parent .structure .employees .list-employees .list .item-employee .photo,\n              .item .parent .structure .employees .list-employees .list .item-employee .full-name {\n                display: table-cell;\n                vertical-align: middle;\n                box-sizing: border-box;\n                width: auto; }\n\n.item .parent .structure .employees .list-employees .list .item-employee .photo {\n                width: 50px;\n                text-align: center; }\n\n.item .parent .structure .employees .list-employees .list .item-employee .full-name {\n                padding-left: 10px;\n                text-align: left;\n                line-height: 16px;\n                font-size: 14px; }\n\n.item .parent .structure .divisions {\n        background-color: #D5DDE6;\n        color: #050505;\n        cursor: pointer; }\n\n.child {\n  display: none;\n  margin-top: 15px; }\n\n.is-expanded > .child {\n    display: block; }\n\n.is-expanded > .child .parent > .title {\n      height: 96px;\n      background-color: #F1F1F4;\n      color: #000; }\n\n.is-expanded > .child .parent > .title span {\n        display: -webkit-box;\n        display: block;\n        text-overflow: ellipsis;\n        -webkit-line-clamp: 3;\n        overflow: hidden;\n        max-height: 72px; }\n\n.is-expanded > .child .parent > .leader {\n      background-color: #D5DDE6; }\n\n.is-expanded > .child .parent > .structure .divisions {\n      background-color: #F1F1F4; }\n"

/***/ }),

/***/ "./src/app/orgstructure/components/orgstructure-tree/orgstructure-tree.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/orgstructure/components/orgstructure-tree/orgstructure-tree.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OrgstructureTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgstructureTreeComponent", function() { return OrgstructureTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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


var OrgstructureTreeComponent = /** @class */ (function () {
    function OrgstructureTreeComponent(employeesFactory, document) {
        this.employeesFactory = employeesFactory;
        this.document = document;
        this.parentElement = null;
        this.casesEmployee = {
            nom: 'сотрудник',
            gen: 'сотрудника',
            plu: 'сотрудников'
        };
        this.casesDivisions = {
            nom: 'подразделение',
            gen: 'подразделения',
            plu: 'подразделений'
        };
        this.trees = [];
        this.employees = [];
    }
    OrgstructureTreeComponent_1 = OrgstructureTreeComponent;
    OrgstructureTreeComponent.prototype.ngOnInit = function () { };
    OrgstructureTreeComponent.prototype.onClick = function (targetElement) {
        if (this.list && !this.list.nativeElement.contains(targetElement)) {
            this.employeesRef.nativeElement.classList.remove('is-expanded');
        }
    };
    OrgstructureTreeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.treeElements.forEach(function (element) {
            element.parentElement = _this;
        });
    };
    OrgstructureTreeComponent.prototype.toggleEmployees = function (event, domRef, department) {
        var _this = this;
        if (domRef.classList.contains('is-expanded') === false) {
            var elements = Array.from(document.querySelectorAll('.employees'));
            elements.forEach(function (e) {
                if (e.classList.contains('is-expanded')) {
                    e.classList.toggle('is-expanded');
                }
            });
            this.employeesFactory
                .search(undefined, department.id, undefined, 5000, 1)
                .subscribe(function (employees) {
                domRef.classList.toggle('is-expanded');
                _this.employees = employees.items;
            });
        }
        else {
            domRef.classList.toggle('is-expanded');
        }
    };
    OrgstructureTreeComponent.prototype.toggleItemTree = function (structureItem, hasChild) {
        var _this = this;
        if (hasChild) {
            structureItem.classList.toggle('is-expanded');
            this.structureItems.toArray().forEach(function (element) {
                element.nativeElement.classList.toggle('is-hidden');
            });
            this.treeElements.toArray().forEach(function (element) {
                element.structureItems.toArray().forEach(function (e) {
                    if (e.nativeElement.classList.contains('is-hidden')) {
                        e.nativeElement.classList.toggle('is-hidden');
                    }
                    if (e.nativeElement.classList.contains('is-expanded')) {
                        e.nativeElement.classList.toggle('is-expanded');
                    }
                });
                element.treeElements.toArray().forEach(function (e) {
                    _this.hideItemTree(e);
                });
            });
        }
    };
    OrgstructureTreeComponent.prototype.units = function (num, cases) {
        num = Math.abs(num);
        var word = '';
        if (num.toString().indexOf('.') > -1) {
            word = cases.gen;
        }
        else {
            word =
                num % 10 === 1 && num % 100 !== 11
                    ? cases.nom
                    : num % 10 >= 2 &&
                        num % 10 <= 4 &&
                        (num % 100 < 10 || num % 100 >= 20)
                        ? cases.gen
                        : cases.plu;
        }
        return word;
    };
    OrgstructureTreeComponent.prototype.hideItemTree = function (item) {
        var _this = this;
        item.structureItems.toArray().forEach(function (element) {
            if (!element.nativeElement.classList.contains('is-hidden')) {
                element.nativeElement.classList.toggle('is-hidden');
            }
            if (element.nativeElement.classList.contains('is-expanded')) {
                element.nativeElement.classList.toggle('is-expanded');
            }
        });
        item.treeElements.forEach(function (element) {
            _this.hideItemTree(element);
        });
    };
    var OrgstructureTreeComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('structureItem', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], OrgstructureTreeComponent.prototype, "structureItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('list'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrgstructureTreeComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('employeesRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrgstructureTreeComponent.prototype, "employeesRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('recurciveElement', { read: OrgstructureTreeComponent_1 }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], OrgstructureTreeComponent.prototype, "treeElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OrgstructureTreeComponent.prototype, "trees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OrgstructureTreeComponent.prototype, "onClick", null);
    OrgstructureTreeComponent = OrgstructureTreeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orgstructure-tree',
            template: __webpack_require__(/*! ./orgstructure-tree.component.html */ "./src/app/orgstructure/components/orgstructure-tree/orgstructure-tree.component.html"),
            styles: [__webpack_require__(/*! ./orgstructure-tree.component.scss */ "./src/app/orgstructure/components/orgstructure-tree/orgstructure-tree.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, Document])
    ], OrgstructureTreeComponent);
    return OrgstructureTreeComponent;
}());



/***/ }),

/***/ "./src/app/orgstructure/orgstructure-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/orgstructure/orgstructure-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrgstructureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgstructureRoutingModule", function() { return OrgstructureRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_orgstructure_page_orgstructure_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/orgstructure-page/orgstructure-page.component */ "./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.ts");
/* harmony import */ var _phonebook_services_departments_departments_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phonebook/services/departments/departments.resolver */ "./src/app/phonebook/services/departments/departments.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MsalGuard } from '@azure/msal-angular';
var routes = [
    {
        path: '',
        component: _components_orgstructure_page_orgstructure_page_component__WEBPACK_IMPORTED_MODULE_2__["OrgstructurePageComponent"],
        resolve: { departments: _phonebook_services_departments_departments_resolver__WEBPACK_IMPORTED_MODULE_3__["DepartmentsResolver"] },
        // canActivate : [MsalGuard],
        data: { animation: 'fadeAnimation', title: 'Оргструктура' }
    }
];
var OrgstructureRoutingModule = /** @class */ (function () {
    function OrgstructureRoutingModule() {
    }
    OrgstructureRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [_phonebook_services_departments_departments_resolver__WEBPACK_IMPORTED_MODULE_3__["DepartmentsResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrgstructureRoutingModule);
    return OrgstructureRoutingModule;
}());



/***/ }),

/***/ "./src/app/orgstructure/orgstructure.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/orgstructure/orgstructure.module.ts ***!
  \*****************************************************/
/*! exports provided: OrgstructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgstructureModule", function() { return OrgstructureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_orgstructure_page_orgstructure_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/orgstructure-page/orgstructure-page.component */ "./src/app/orgstructure/components/orgstructure-page/orgstructure-page.component.ts");
/* harmony import */ var _components_orgstructure_tree_orgstructure_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/orgstructure-tree/orgstructure-tree.component */ "./src/app/orgstructure/components/orgstructure-tree/orgstructure-tree.component.ts");
/* harmony import */ var _orgstructure_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orgstructure-routing.module */ "./src/app/orgstructure/orgstructure-routing.module.ts");
/* harmony import */ var _staff_staff_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../staff/staff.module */ "./src/app/staff/staff.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OrgstructureModule = /** @class */ (function () {
    function OrgstructureModule() {
    }
    OrgstructureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_orgstructure_page_orgstructure_page_component__WEBPACK_IMPORTED_MODULE_5__["OrgstructurePageComponent"],
                _components_orgstructure_tree_orgstructure_tree_component__WEBPACK_IMPORTED_MODULE_6__["OrgstructureTreeComponent"],
            ],
            imports: [
                _staff_staff_module__WEBPACK_IMPORTED_MODULE_8__["StaffModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _orgstructure_routing_module__WEBPACK_IMPORTED_MODULE_7__["OrgstructureRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], OrgstructureModule);
    return OrgstructureModule;
}());



/***/ }),

/***/ "./src/app/services/trees/trees.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/trees/trees.service.ts ***!
  \*************************************************/
/*! exports provided: TreesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreesService", function() { return TreesService; });
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

var TreesService = /** @class */ (function () {
    function TreesService() {
    }
    TreesService.prototype.getTreeOfArray = function (items) {
        var nodes = [];
        var map = {};
        var roots = [];
        for (var i = 0; i < items.length; i += 1) {
            var node = { value: items[i], childrens: [] };
            map[node.value.id] = i;
            nodes.push(node);
        }
        for (var i = 0; i < nodes.length; i += 1) {
            var node = nodes[i];
            if (node.value.parentId != null) {
                nodes[map[node.value.parentId]].childrens.push(node);
            }
            else {
                roots.push(node);
            }
        }
        return roots;
    };
    TreesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TreesService);
    return TreesService;
}());



/***/ })

}]);
//# sourceMappingURL=orgstructure-orgstructure-module.js.map