(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/app/new-employees/components/new-employees-page/new-employees-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/new-employees/components/new-employees-page/new-employees-page.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\r\n    <div class=\"l-breadcrumbs\">\r\n      <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\r\n      <div class=\"l-breadcrumb\">Новые сотрудники</div>\r\n    </div>\r\n    <div class=\"title\">Новые сотрудники</div>\r\n  </div>\r\n  <div class=\"l-page\">\r\n    <div class=\"l-page-inner\">\r\n      <div class=\"l-page__content\">\r\n        <div class=\"l-birthdays\">\r\n          <div class=\"l-birthdays__month-list\">\r\n            <app-filters>\r\n              <app-filters-item [active]=\"month === i ? true : false\" *ngFor=\"let item of months; let i = index\" (change)=\"getBirthdaysPagetByMonth(i)\">\r\n                {{ item }}\r\n              </app-filters-item>\r\n            </app-filters>\r\n          </div>\r\n          <div class=\"l-birthdays__calendar\">\r\n            <div class=\"l-birthdays__day\" *ngFor=\"let item of birthdays\">\r\n              <div class=\"date\">\r\n                <div class=\"day\">{{ item.birthday }}</div>\r\n                <div class=\"month\">{{ item.birthmonth }}</div>\r\n              </div>\r\n              <div class=\"employees\">\r\n                <div class=\"m-employees-list\">\r\n                  <div class=\"m-employees-list__item\" *ngFor=\"let employee of item.employees\">\r\n                    <div class=\"avatar\">\r\n                      <app-user-thumb [width]=\"'90px'\" [height]=\"'90px'\" [photo]=\"employee.photo\" [route]=\"employee.profileRoute\"></app-user-thumb>\r\n                    </div>\r\n                    <div class=\"body\">\r\n                      <div class=\"name\">\r\n                        {{ employee.fullName }}\r\n                      </div>\r\n                      <div class=\"position\">{{ employee.positionName }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"navigation\" *ngIf=\"hasPrev || hasNext\">\r\n            <div class=\"m-page-nav\">\r\n              <a class=\"to-begin\" (click)=\"hasPrev && getBirthdaysPagetByMonth()\" [class.disabled]=\"!hasPrev\">В начало</a>\r\n              <input type=\"button\" class=\"prev-page\" (click)=\"getPrev()\" [class.disabled]=\"!hasPrev\" />\r\n              <input type=\"button\" class=\"next-page\" (click)=\"getNext()\" [class.disabled]=\"!hasNext\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/new-employees/components/new-employees-page/new-employees-page.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/new-employees/components/new-employees-page/new-employees-page.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-birthdays {\n  box-sizing: border-box;\n  padding-left: 25px; }\n\n.l-birthdays .l-birthdays__month-list {\n    text-align: center;\n    box-sizing: border-box;\n    margin-bottom: 60px;\n    height: 30px;\n    text-align: center; }\n\n.l-birthdays .l-birthdays__calendar {\n    border-left: 2px solid #FAFAFA; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day {\n      box-sizing: border-box;\n      padding-left: 10%;\n      position: relative;\n      border-top: 2px dotted #898888; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .date {\n        position: absolute;\n        left: -27px;\n        top: -27px; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .date .day,\n        .l-birthdays .l-birthdays__calendar .l-birthdays__day .date .month {\n          display: inline-block;\n          vertical-align: middle; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .day {\n        background-color: #FAFAFA;\n        border-radius: 100%;\n        width: 50px;\n        height: 50px;\n        line-height: 50px;\n        color: #050505;\n        font-size: 20px;\n        font-weight: 900;\n        box-sizing: border-box;\n        text-align: center; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .month {\n        color: #404041;\n        font-size: 16px;\n        padding-right: 15px;\n        box-sizing: border-box;\n        padding-left: 12px;\n        background-color: #fff;\n        text-transform: capitalize; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day:first-of-type {\n        border-top: 0; }\n\n.navigation {\n  margin: 35px 0;\n  text-align: center; }\n\n.m-employees-list .m-employees-list__item {\n  display: table;\n  width: 100%; }\n\n.m-employees-list .m-employees-list__item .avatar {\n    display: table-cell;\n    padding-right: 23px;\n    padding-left: 34px;\n    padding-bottom: 14px;\n    padding-top: 14px;\n    box-sizing: border-box;\n    vertical-align: middle;\n    width: 90px; }\n\n.m-employees-list .m-employees-list__item .body {\n    vertical-align: middle;\n    display: table-cell; }\n\n.m-employees-list .m-employees-list__item .body .name {\n      color: #050505;\n      font-size: 22px;\n      line-height: 24px; }\n\n.m-employees-list .m-employees-list__item .body .position {\n      color: #050505;\n      font-size: 16px;\n      line-height: 20px; }\n\n.m-employees-list .m-employees-list__item .controls {\n    display: none;\n    vertical-align: middle;\n    box-sizing: border-box;\n    padding-left: 25px;\n    vertical-align: middle; }\n\n.m-employees-list .m-employees-list__item .controls .profile,\n    .m-employees-list .m-employees-list__item .controls .mail,\n    .m-employees-list .m-employees-list__item .controls .structure {\n      display: inline-block;\n      border-radius: 100%;\n      background-color: #FFFFFF;\n      width: 50px;\n      height: 50px;\n      margin-right: 25px;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 26px 26px; }\n\n.m-employees-list .m-employees-list__item .controls .profile {\n      background-image: url(\"/local/js/assets/icons/icon-profile.svg\"); }\n\n.m-employees-list .m-employees-list__item .controls .mail {\n      background-image: url(\"/local/js/assets/icons/icon-letter-black.svg\"); }\n\n.m-employees-list .m-employees-list__item .controls .structure {\n      background-image: url(\"/local/js/assets/icons/icon-struct-black.svg\"); }\n"

/***/ }),

/***/ "./src/app/new-employees/components/new-employees-page/new-employees-page.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/new-employees/components/new-employees-page/new-employees-page.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NewEmployeesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeesPageComponent", function() { return NewEmployeesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/employees/employees.service */ "./src/app/services/employees/employees.service.ts");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewEmployeesPageComponent = /** @class */ (function () {
    function NewEmployeesPageComponent(route, employeesService, sidebarService) {
        var _this = this;
        this.route = route;
        this.employeesService = employeesService;
        this.sidebarService = sidebarService;
        this.pages = [];
        this.index = 0;
        this.employees = [];
        this.birthdays = [];
        this.hasPrev = false;
        this.hasNext = false;
        this.quater = Math.floor((new Date().getMonth()) / 3);
        this.month = new Date().getMonth() - this.quater * 3;
        this.months = Array.apply(0, Array(3)).map(function (v, i) { return moment__WEBPACK_IMPORTED_MODULE_2__().month(i + _this.quater * 3).format('MMMM'); });
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    NewEmployeesPageComponent.prototype.ngOnInit = function () {
        this.pages.push(this.route.snapshot.data.newEmployees);
        this.employees = this.route.snapshot.data.newEmployees.items;
        this.birthdays = this.getBirthdaysForEmployees(this.employees);
        this.hasNext = this.route.snapshot.data.newEmployees.hasNext;
    };
    NewEmployeesPageComponent.prototype.getMonthFirstDay = function (m) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(new Date((new Date()).getFullYear(), m, 1));
    };
    NewEmployeesPageComponent.prototype.getMonthLastDay = function (m) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(new Date((new Date()).getFullYear(), m, 1)).endOf('month');
    };
    NewEmployeesPageComponent.prototype.getBirthdaysPagetByMonth = function (month) {
        var _this = this;
        this.month = month == null ? this.month : month;
        this.index = 0;
        this.employees = [];
        this.pages = [];
        this.birthdays = [];
        this.hasPrev = false;
        this.hasNext = false;
        var first = this.getMonthFirstDay(this.month + this.quater * 3).toISOString();
        var last = this.getMonthLastDay(this.month + this.quater * 3).toISOString();
        this.employeesService.getItemsPaged({
            filter: "(slStartWorkDate ge datetime'" + first + "') and (slStartWorkDate le datetime'" + last + "')",
            orderBy: [['slStartWorkDate', false]]
        }).subscribe(function (page) {
            _this.employees = page.items;
            _this.birthdays = _this.getBirthdaysForEmployees(_this.employees);
            _this.hasNext = page.hasNext;
            _this.pages.push(page);
        });
    };
    NewEmployeesPageComponent.prototype.getNext = function () {
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
    NewEmployeesPageComponent.prototype.getPrev = function () {
        if (this.hasPrev) {
            this.index--;
            this.employees = this.pages[this.index].items;
            this.birthdays = this.getBirthdaysForEmployees(this.employees);
            this.hasNext = true;
            this.hasPrev = this.index > 0;
        }
    };
    NewEmployeesPageComponent.prototype.getBirthdaysForEmployees = function (employees) {
        var birthdays = [];
        var grouped = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](employees, function (employee) { return employee.startdayTitleRelative; });
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
    NewEmployeesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-employees-page',
            template: __webpack_require__(/*! ./new-employees-page.component.html */ "./src/app/new-employees/components/new-employees-page/new-employees-page.component.html"),
            styles: [__webpack_require__(/*! ./new-employees-page.component.scss */ "./src/app/new-employees/components/new-employees-page/new-employees-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeesService"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"]])
    ], NewEmployeesPageComponent);
    return NewEmployeesPageComponent;
}());



/***/ }),

/***/ "./src/app/new-employees/new-employees-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/new-employees/new-employees-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NewEmployeesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeesRoutingModule", function() { return NewEmployeesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_new_employees_page_new_employees_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/new-employees-page/new-employees-page.component */ "./src/app/new-employees/components/new-employees-page/new-employees-page.component.ts");
/* harmony import */ var src_app_services_employees_new_employees_page_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/employees/new-employees-page.resolver */ "./src/app/services/employees/new-employees-page.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _components_new_employees_page_new_employees_page_component__WEBPACK_IMPORTED_MODULE_2__["NewEmployeesPageComponent"],
        resolve: { newEmployees: src_app_services_employees_new_employees_page_resolver__WEBPACK_IMPORTED_MODULE_3__["NewEmployeesPageResolver"] },
        data: { animation: 'fadeAnimation', title: 'Новые сотрудники' }
    }
];
var NewEmployeesRoutingModule = /** @class */ (function () {
    function NewEmployeesRoutingModule() {
    }
    NewEmployeesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_employees_new_employees_page_resolver__WEBPACK_IMPORTED_MODULE_3__["NewEmployeesPageResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NewEmployeesRoutingModule);
    return NewEmployeesRoutingModule;
}());



/***/ }),

/***/ "./src/app/new-employees/new-employees.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/new-employees/new-employees.module.ts ***!
  \*******************************************************/
/*! exports provided: NewEmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeesModule", function() { return NewEmployeesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_new_employees_page_new_employees_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/new-employees-page/new-employees-page.component */ "./src/app/new-employees/components/new-employees-page/new-employees-page.component.ts");
/* harmony import */ var _new_employees_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-employees-routing.module */ "./src/app/new-employees/new-employees-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NewEmployeesModule = /** @class */ (function () {
    function NewEmployeesModule() {
    }
    NewEmployeesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_new_employees_page_new_employees_page_component__WEBPACK_IMPORTED_MODULE_2__["NewEmployeesPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _new_employees_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewEmployeesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], NewEmployeesModule);
    return NewEmployeesModule;
}());



/***/ }),

/***/ "./src/app/services/employees/new-employees-page.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/employees/new-employees-page.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: NewEmployeesPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeesPageResolver", function() { return NewEmployeesPageResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees.service */ "./src/app/services/employees/employees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewEmployeesPageResolver = /** @class */ (function () {
    function NewEmployeesPageResolver(employeesService) {
        this.employeesService = employeesService;
    }
    NewEmployeesPageResolver.prototype.resolve = function (route, state) {
        var start = moment__WEBPACK_IMPORTED_MODULE_1__().startOf('month').toISOString();
        return this.employeesService.getItemsPaged({
            filter: "slStartWorkDate ge datetime'" + start + "'",
            orderBy: [['slStartWorkDate', false]]
        });
    };
    NewEmployeesPageResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_employees_service__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"]])
    ], NewEmployeesPageResolver);
    return NewEmployeesPageResolver;
}());



/***/ })

}]);
//# sourceMappingURL=5.js.map