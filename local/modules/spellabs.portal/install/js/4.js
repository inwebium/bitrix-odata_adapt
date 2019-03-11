(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/birthdays/birthdays-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/birthdays/birthdays-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BirthdaysRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdaysRoutingModule", function() { return BirthdaysRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employees_birthdays_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/employees/birthdays.resolver */ "./src/app/birthdays/services/employees/birthdays.resolver.ts");
/* harmony import */ var _components_birthdays_page_birthdays_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/birthdays-page/birthdays-page.component */ "./src/app/birthdays/components/birthdays-page/birthdays-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _components_birthdays_page_birthdays_page_component__WEBPACK_IMPORTED_MODULE_3__["BirthdaysPageComponent"],
        resolve: { birthdays: _services_employees_birthdays_resolver__WEBPACK_IMPORTED_MODULE_2__["BirthdaysResolver"] },
        data: { animation: 'fadeAnimation', title: 'Дни рождения' }
    }
];
var BirthdaysRoutingModule = /** @class */ (function () {
    function BirthdaysRoutingModule() {
    }
    BirthdaysRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [_services_employees_birthdays_resolver__WEBPACK_IMPORTED_MODULE_2__["BirthdaysResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BirthdaysRoutingModule);
    return BirthdaysRoutingModule;
}());



/***/ }),

/***/ "./src/app/birthdays/birthdays.module.ts":
/*!***********************************************!*\
  !*** ./src/app/birthdays/birthdays.module.ts ***!
  \***********************************************/
/*! exports provided: BirthdaysModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdaysModule", function() { return BirthdaysModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_birthdays_page_birthdays_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/birthdays-page/birthdays-page.component */ "./src/app/birthdays/components/birthdays-page/birthdays-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _birthdays_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./birthdays-routing.module */ "./src/app/birthdays/birthdays-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BirthdaysModule = /** @class */ (function () {
    function BirthdaysModule() {
    }
    BirthdaysModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_birthdays_page_birthdays_page_component__WEBPACK_IMPORTED_MODULE_4__["BirthdaysPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _birthdays_routing_module__WEBPACK_IMPORTED_MODULE_6__["BirthdaysRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], BirthdaysModule);
    return BirthdaysModule;
}());



/***/ }),

/***/ "./src/app/birthdays/components/birthdays-page/birthdays-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/birthdays/components/birthdays-page/birthdays-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\r\n  <div class=\"l-breadcrumbs\">\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\r\n    <div class=\"l-breadcrumb\">Дни рождения</div>\r\n  </div>\r\n  <div class=\"title\">Дни рождения</div>\r\n</div>\r\n<div class=\"l-page\">\r\n  <div class=\"l-page-inner\">\r\n    <div class=\"l-page__content\">\r\n      <div class=\"l-birthdays\">\r\n        <div class=\"l-birthdays__month-list\">\r\n          <app-filters>\r\n            <app-filters-item [active]=\"month === i ? true : false\" *ngFor=\"let item of months; let i = index\" (change)=\"getBirthdaysPagetByMonth(i)\">\r\n              {{ item }}\r\n            </app-filters-item>\r\n          </app-filters>\r\n        </div>\r\n        <div class=\"l-birthdays__day-list\">\r\n          <div class=\"reset\">Сегодня</div>\r\n          <div class=\"day\" *ngFor=\"let day of days\" [class.active]=\"active === day\" (click)=\"active = (active === day ? null :day)\">\r\n            {{day}}\r\n          </div>\r\n        </div>\r\n        <div class=\"l-birthdays__calendar\">\r\n          <div class=\"l-birthdays__day\" *ngFor=\"let item of birthdays\">\r\n            <div class=\"date\">\r\n              <div class=\"day\">{{ item.birthday }}</div>\r\n              <div class=\"month\">{{ item.birthmonth }}</div>\r\n            </div>\r\n            <div class=\"employees\">\r\n              <div class=\"m-employees-list\">\r\n                <div class=\"m-employees-list__item\" *ngFor=\"let employee of item.employees\">\r\n                  <div class=\"avatar\">\r\n                    <app-user-thumb [width]=\"'90px'\" [height]=\"'90px'\" [photo]=\"employee.photo\" [route]=\"employee.profileRoute\"></app-user-thumb>\r\n                  </div>\r\n                  <div class=\"body\">\r\n                    <div class=\"name\">\r\n                      {{ employee.fullName }}\r\n                    </div>\r\n                    <div class=\"position\">{{ employee.positionName }}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"navigation\" *ngIf=\"hasPrev || hasNext\">\r\n          <div class=\"m-page-nav\">\r\n            <a class=\"to-begin\" (click)=\"hasPrev && getBirthdaysPagetByMonth()\" [class.disabled]=\"!hasPrev\">В начало</a>\r\n            <input type=\"button\" class=\"prev-page\" (click)=\"getPrev()\" [class.disabled]=\"!hasPrev\" />\r\n            <input type=\"button\" class=\"next-page\" (click)=\"getNext()\" [class.disabled]=\"!hasNext\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/birthdays/components/birthdays-page/birthdays-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/birthdays/components/birthdays-page/birthdays-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  padding-bottom: 40px; }\n\n.l-birthdays {\n  box-sizing: border-box;\n  padding-left: 25px; }\n\n.l-birthdays .l-birthdays__month-list {\n    box-sizing: border-box;\n    margin-bottom: 20px;\n    height: 30px;\n    text-transform: capitalize; }\n\n.l-birthdays .l-birthdays__day-list {\n    margin-bottom: 60px; }\n\n.l-birthdays .l-birthdays__day-list .reset {\n      display: inline-block;\n      font-size: 16px;\n      color: #898888;\n      margin-right: 30px;\n      cursor: pointer; }\n\n.l-birthdays .l-birthdays__day-list .day {\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border: 1px solid #898888;\n      border-radius: 100%;\n      margin-right: 20px;\n      margin-bottom: 10px;\n      font-size: 14px;\n      color: #707070;\n      line-height: 24px;\n      text-align: center;\n      cursor: pointer; }\n\n.l-birthdays .l-birthdays__day-list .day.active {\n        color: #050505;\n        border-color: #da402b; }\n\n.l-birthdays .l-birthdays__calendar {\n    border-left: 2px solid #F1F1F4; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day {\n      box-sizing: border-box;\n      padding-left: 10%;\n      position: relative;\n      border-top: 3px dotted #707070; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .date {\n        position: absolute;\n        left: -27px;\n        top: -27px; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .date .day,\n        .l-birthdays .l-birthdays__calendar .l-birthdays__day .date .month {\n          display: inline-block;\n          vertical-align: middle; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .day {\n        background-color: #F1F1F4;\n        border-radius: 100%;\n        width: 50px;\n        height: 50px;\n        line-height: 50px;\n        color: #050505;\n        font-size: 20px;\n        font-weight: 900;\n        box-sizing: border-box;\n        text-align: center; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .month {\n        color: #707070;\n        font-size: 16px;\n        padding-right: 15px;\n        box-sizing: border-box;\n        padding-left: 12px;\n        background-color: #fff;\n        text-transform: capitalize; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day:first-of-type {\n        border-top: 0; }\n\n.navigation {\n  margin: 35px 0;\n  text-align: center; }\n\n.m-employees-list .m-employees-list__item {\n  display: table;\n  width: 100%; }\n\n.m-employees-list .m-employees-list__item .avatar {\n    display: table-cell;\n    padding-right: 23px;\n    padding-left: 34px;\n    padding-bottom: 14px;\n    padding-top: 14px;\n    box-sizing: border-box;\n    vertical-align: middle;\n    width: 90px; }\n\n.m-employees-list .m-employees-list__item .body {\n    vertical-align: middle;\n    display: table-cell; }\n\n.m-employees-list .m-employees-list__item .body .name {\n      color: #050505;\n      font-size: 22px;\n      line-height: 24px;\n      font-weight: bold;\n      margin-bottom: 10px; }\n\n.m-employees-list .m-employees-list__item .body .position {\n      color: #050505;\n      font-size: 16px;\n      line-height: 20px; }\n\n.m-employees-list .m-employees-list__item .controls {\n    display: none;\n    vertical-align: middle;\n    box-sizing: border-box;\n    padding-left: 25px;\n    vertical-align: middle; }\n\n.m-employees-list .m-employees-list__item .controls .profile,\n    .m-employees-list .m-employees-list__item .controls .mail,\n    .m-employees-list .m-employees-list__item .controls .structure {\n      display: inline-block;\n      border-radius: 100%;\n      background-color: #FFFFFF;\n      width: 50px;\n      height: 50px;\n      margin-right: 25px;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 26px 26px; }\n\n.m-employees-list .m-employees-list__item .controls .profile {\n      background-image: url(\"/local/js/assets/icons/icon-profile.svg\"); }\n\n.m-employees-list .m-employees-list__item .controls .mail {\n      background-image: url(\"/local/js/assets/icons/icon-letter-black.svg\"); }\n\n.m-employees-list .m-employees-list__item .controls .structure {\n      background-image: url(\"/local/js/assets/icons/icon-struct-black.svg\"); }\n"

/***/ }),

/***/ "./src/app/birthdays/components/birthdays-page/birthdays-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/birthdays/components/birthdays-page/birthdays-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BirthdaysPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdaysPageComponent", function() { return BirthdaysPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var _services_employees_employees_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/employees/employees.service */ "./src/app/birthdays/services/employees/employees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BirthdaysPageComponent = /** @class */ (function () {
    function BirthdaysPageComponent(route, employeesService, sidebarService) {
        this.route = route;
        this.employeesService = employeesService;
        this.sidebarService = sidebarService;
        this.pages = [];
        this.index = 0;
        this.employees = [];
        this.birthdays = [];
        this.hasPrev = false;
        this.hasNext = false;
        this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        this.months = Array.apply(0, Array(12)).map(function (v, i) { return moment__WEBPACK_IMPORTED_MODULE_2__().month(i).format('MMMM'); });
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
        this.month = new Date().getMonth();
    }
    BirthdaysPageComponent.prototype.ngOnInit = function () {
        this.pages.push(this.route.snapshot.data.birthdays);
        this.employees = this.route.snapshot.data.birthdays.items;
        this.birthdays = this.getBirthdaysForEmployees(this.employees);
        this.hasNext = this.route.snapshot.data.birthdays.hasNext;
    };
    BirthdaysPageComponent.prototype.getBirthdaysPagetByMonth = function (month) {
        var _this = this;
        this.month = month == null ? this.month : month;
        this.index = 0;
        this.employees = [];
        this.pages = [];
        this.birthdays = [];
        this.hasPrev = false;
        this.hasNext = false;
        this.employeesService.getItemsPaged({
            filter: "(slBirthdayMonth eq " + (this.month + 1) + ")",
            orderBy: [['slBirthdayDay', true]]
        }).subscribe(function (page) {
            _this.employees = page.items;
            _this.birthdays = _this.getBirthdaysForEmployees(_this.employees);
            _this.hasNext = page.hasNext;
            _this.pages.push(page);
        });
    };
    BirthdaysPageComponent.prototype.getNext = function () {
        var _this = this;
        if (this.hasNext) {
            if (this.index === (this.pages.length - 1)) {
                this.pages[this.index].getNext()
                    .subscribe(function (page) {
                    _this.index++;
                    _this.employees = page.items;
                    _this.birthdays = _this.getBirthdaysForEmployees(page.items);
                    _this.hasNext = page.hasNext;
                    _this.hasPrev = true;
                    _this.pages.push(page);
                });
            }
            else {
                this.index++;
                this.employees = this.pages[this.index].items;
                this.birthdays = this.getBirthdaysForEmployees(this.employees);
                this.hasNext = this.pages[this.index].hasNext;
                this.hasPrev = true;
            }
        }
    };
    BirthdaysPageComponent.prototype.getPrev = function () {
        if (this.hasPrev) {
            this.index--;
            this.employees = this.pages[this.index].items;
            this.birthdays = this.getBirthdaysForEmployees(this.employees);
            this.hasNext = true;
            this.hasPrev = this.index > 0;
        }
    };
    BirthdaysPageComponent.prototype.getBirthdaysForEmployees = function (employees) {
        var birthdays = [];
        var grouped = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](employees, function (employee) { return employee.birthdayTitleRelative; });
        for (var group in grouped) {
            if (grouped.hasOwnProperty(group)) {
                var dates = group.split(' ');
                if (dates.length === 2) {
                    birthdays.push({ birthday: dates[0], birthmonth: dates[1], employees: grouped[group] });
                }
            }
        }
        return birthdays;
    };
    BirthdaysPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-birthdays-page',
            template: __webpack_require__(/*! ./birthdays-page.component.html */ "./src/app/birthdays/components/birthdays-page/birthdays-page.component.html"),
            styles: [__webpack_require__(/*! ./birthdays-page.component.scss */ "./src/app/birthdays/components/birthdays-page/birthdays-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_employees_employees_service__WEBPACK_IMPORTED_MODULE_5__["EmployeesService"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]])
    ], BirthdaysPageComponent);
    return BirthdaysPageComponent;
}());



/***/ }),

/***/ "./src/app/birthdays/services/employees/birthdays.resolver.ts":
/*!********************************************************************!*\
  !*** ./src/app/birthdays/services/employees/birthdays.resolver.ts ***!
  \********************************************************************/
/*! exports provided: BirthdaysResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdaysResolver", function() { return BirthdaysResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees.service */ "./src/app/birthdays/services/employees/employees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BirthdaysResolver = /** @class */ (function () {
    function BirthdaysResolver(employeesService) {
        this.employeesService = employeesService;
    }
    BirthdaysResolver.prototype.resolve = function (route, state) {
        var month = new Date().getMonth() + 1;
        return this.employeesService.getItemsPaged({
            filter: "slBirthdayMonth eq " + month,
            orderBy: [['slBirthdayDay', true], ['slFullName', true]]
        });
    };
    BirthdaysResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"]])
    ], BirthdaysResolver);
    return BirthdaysResolver;
}());



/***/ }),

/***/ "./src/app/birthdays/services/employees/employees.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/birthdays/services/employees/employees.service.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/list-items-service */ "./src/app/services/list-items-service.ts");
/* harmony import */ var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/portal/portal.service */ "./src/app/services/portal/portal.service.ts");
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






var EmployeesService = /** @class */ (function (_super) {
    __extends(EmployeesService, _super);
    function EmployeesService(sharepointService) {
        var _this = _super.call(this) || this;
        _this.sharepointService = sharepointService;
        return _this;
    }
    EmployeesService.prototype.getListRelativePath = function () {
        return '';
    };
    EmployeesService.prototype.getListTitle = function () {
        return 'Сотрудники';
    };
    EmployeesService.prototype.getSelect = function () {
        return 'Id,Title,slIndexNumber,slLookupDepartment/Id,slLookupDepartment/Title,slTabNumber,slLogin,slFirstName,'
            + 'slLastName,slFatherName,slPositionName,slParentPositionName,slPositionId,slParentPositionId,slDepartmentCode,'
            + 'slRootDepartmentId,slRootLookupDepartment/Id,slRootLookupDepartment/Title,slRootDepartmentImage,slEmail,'
            + 'slPhoneInternal,slMobile,slBirthdayMonth,slBirthdayDay,slCity,slOfficeNumber,slStartWorkDate,slEndWorkDate,'
            + 'slManagerEmployeeId,slDeputyEmployeeId,slLookupDeputy/Id,slLookupDeputy/Title,slLookupManager/Id,slLookupManager/Title,'
            + 'slSecretaryEmployeeId,slLookupSecretary/Id,slLookupSecretary/Title,slAddress,'
            + 'slIsManager,slStructureIds,slStructureTitles,LikedBy/Id,LikedBy/Title,slFullName,slIsEmergency,slReason,slCompany';
    };
    EmployeesService.prototype.getExpand = function () {
        return 'slLookupDepartment,slRootLookupDepartment,slLookupDeputy,slLookupManager,slLookupSecretary,LikedBy';
    };
    EmployeesService.prototype.getOrderBy = function () {
        return [['slFullName', true]];
    };
    EmployeesService.prototype.getTop = function () {
        return 10;
    };
    EmployeesService.prototype.isMock = function () {
        return false;
    };
    EmployeesService.prototype.getMockItems = function () {
        return [
            { id: 1, title: 'Аватаркин Константин Викторович', positionName: 'Менеджер отдела дизайна', email: 'test@spellabs.ru' },
            { id: 2, title: 'Аватаркин Константин Викторович', positionName: 'Менеджер отдела дизайна', email: 'test@spellabs.ru' }
        ];
    };
    EmployeesService.prototype.convertListItemToEntity = function (item) {
        var employee = {
            id: item.Id,
            title: item.Title,
            indexNumber: item.slIndexNumber,
            tabNumber: item.slTabNumber,
            login: item.slLogin,
            firstName: item.slFirstName,
            lastName: item.slLastName,
            fatherName: item.slFatherName,
            positionName: item.slPositionName,
            parentPositionName: item.slParentPositionName,
            positionId: item.slPositionId,
            parentPositionId: item.slParentPositionId,
            departmentCode: item.slDepartmentCode,
            rootDepartmentImage: item.slRootDepartmentImage,
            email: item.slEmail,
            phoneInternal: item.slPhoneInternal,
            mobile: item.slMobile,
            birthdayMonth: item.slBirthdayMonth,
            birthdayDay: item.slBirthdayDay,
            city: item.slCity,
            officeNumber: item.slOfficeNumber,
            startWorkDate: item.slStartWorkDate && new Date(item.slStartWorkDate),
            endWorkDate: item.slEndWorkDate && new Date(item.slEndWorkDate),
            address: item.slAddress,
            isManager: item.isManager,
            structureTitles: item.slStructureTitles,
            photo: "/_layouts/15/userphoto.aspx?size=L&username=" + item.slLogin,
            fullName: item.slFullName,
            profileRoute: ['/phonebook', item.Id],
            likedByIds: [],
            reason: item.slReason,
            company: item.slCompany
        };
        if (item.slLookupDepartment != null) {
            employee.lookupDepartmentId = item.slLookupDepartment.Id;
            employee.lookupDepartmentTitle = item.slLookupDepartment.Title;
        }
        if (item.slRootLookupDepartment != null) {
            employee.rootLookupDepartmentId = item.slRootLookupDepartment.Id;
            employee.rootLookupDepartmentTitle = item.slRootLookupDepartment.Title;
        }
        if (item.slLookupDeputy != null) {
            employee.lookupDeputyId = item.slLookupDeputy.Id;
            employee.lookupDeputyTitle = item.slLookupDeputy.Title;
        }
        if (item.slLookupManager != null) {
            employee.lookupManagerId = item.slLookupManager.Id;
            employee.lookupManagerTitle = item.slLookupManager.Title;
        }
        if (item.slLookupSecretary != null) {
            employee.lookupSecretaryId = item.slLookupSecretary.Id;
            employee.lookupSecretaryTitle = item.slLookupSecretary.Title;
        }
        if (item.slBirthdayMonth && item.slBirthdayDay) {
            employee.birthdayTitle = this.formatDate(item.slBirthdayMonth, item.slBirthdayDay);
            employee.birthdayTitleRelative = this.formatDateWithOutReltive(item.slBirthdayMonth, item.slBirthdayDay);
        }
        if (employee.startWorkDate) {
            employee.startWorkDateTitle = moment__WEBPACK_IMPORTED_MODULE_1__(employee.startWorkDate).calendar(null, {
                sameDay: '[Сегодня]',
                nextDay: '[Завтра]',
                nextWeek: 'D MMMM',
                lastDay: '[Вчера]',
                lastWeek: 'D MMMM',
                sameElse: 'L'
            });
        }
        if (item.LikedBy) {
            employee.likedByIds = item.LikedBy.map(function (l) { return l.Id; });
        }
        if (employee.startWorkDate) {
            employee.startdayTitleRelative = moment__WEBPACK_IMPORTED_MODULE_1__(employee.startWorkDate).calendar(null, {
                sameDay: 'D MMMM',
                nextDay: 'D MMMM',
                nextWeek: 'D MMMM',
                lastDay: 'D MMMM',
                lastWeek: 'D MMMM',
                sameElse: 'D MMMM'
            });
        }
        return employee;
    };
    EmployeesService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    EmployeesService.prototype.getCurrentEmployee = function () {
        return this.getItems({
            filter: "slLogin eq '" + this.sharepointService.getCurrentUserContext().userLoginName + "'",
            top: 1
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (employees) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(employees[0]); }));
    };
    EmployeesService.prototype.formatDate = function (month, day) {
        var year = new Date().getFullYear();
        var date = moment__WEBPACK_IMPORTED_MODULE_1__(day + "." + month + "." + year, 'DD.MM.YYYY');
        var result = date.calendar(null, {
            sameDay: '[Сегодня]',
            nextDay: '[Завтра]',
            nextWeek: 'D MMMM',
            lastDay: '[Вчера]',
            lastWeek: 'D MMMM',
            sameElse: 'D MMMM'
        });
        return result;
    };
    EmployeesService.prototype.formatDateWithOutReltive = function (month, day) {
        var year = new Date().getFullYear();
        var date = moment__WEBPACK_IMPORTED_MODULE_1__(day + "." + month + "." + year, 'DD.MM.YYYY');
        var result = date.calendar(null, {
            sameDay: 'D MMMM',
            nextDay: 'D MMMM',
            nextWeek: 'D MMMM',
            lastDay: 'D MMMM',
            lastWeek: 'D MMMM',
            sameElse: 'D MMMM'
        });
        return result;
    };
    EmployeesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_5__["PortalService"]])
    ], EmployeesService);
    return EmployeesService;
}(src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_4__["ListItemsService"]));



/***/ })

}]);
//# sourceMappingURL=4.js.map