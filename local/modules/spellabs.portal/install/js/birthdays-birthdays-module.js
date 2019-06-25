(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["birthdays-birthdays-module"],{

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
/* harmony import */ var _components_birthdays_page_birthdays_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/birthdays-page/birthdays-page.component */ "./src/app/birthdays/components/birthdays-page/birthdays-page.component.ts");
/* harmony import */ var _staff_staff_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staff/staff.module */ "./src/app/staff/staff.module.ts");
/* harmony import */ var _services_employees_birthdays_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/employees/birthdays.resolver */ "./src/app/birthdays/services/employees/birthdays.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { MsalGuard } from '@azure/msal-angular';


var routes = [
    {
        path: ':code',
        component: _components_birthdays_page_birthdays_page_component__WEBPACK_IMPORTED_MODULE_2__["BirthdaysPageComponent"],
        resolve: { birthdays: _services_employees_birthdays_resolver__WEBPACK_IMPORTED_MODULE_4__["BirthdaysResolver"] },
        // canActivate : [MsalGuard],
        data: { animation: 'fadeAnimation', title: 'Дни рождения' }
    }
];
var BirthdaysRoutingModule = /** @class */ (function () {
    function BirthdaysRoutingModule() {
    }
    BirthdaysRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _staff_staff_module__WEBPACK_IMPORTED_MODULE_3__["StaffModule"]],
            providers: [_services_employees_birthdays_resolver__WEBPACK_IMPORTED_MODULE_4__["BirthdaysResolver"]],
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

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">Дни рождения</div>\n  </div>\n  <div class=\"title\">Дни рождения</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-birthdays\">\n        <div class=\"l-birthdays__month-list\">\n          <app-filters>\n            <app-filters-item [active]=\"month === i ? true : false\" *ngFor=\"let item of months; let i = index\" (change)=\"getBirthdaysPagetByMonth(i)\">\n              {{ item }}\n            </app-filters-item>\n          </app-filters>\n        </div>\n        <div class=\"l-birthdays__day-list\">\n          <div class=\"reset\" (click)=\"getBirthdaysPagetByDayOfMonth(currentDay)\">Сегодня</div>\n          <div class=\"day\" *ngFor=\"let day of days\" [class.active]=\"selectedDay === day\" (click)=\"getBirthdaysPagetByDayOfMonth(day)\">\n            {{day}}\n          </div>\n        </div>\n        <div class=\"l-birthdays__calendar\">\n          <div class=\"l-birthdays__day\" *ngFor=\"let item of birthdays\">\n            <div class=\"date\">\n              <div class=\"day\">{{ item.birthday }}</div>\n              <div class=\"month\">{{ item.birthmonth }}</div>\n            </div>\n            <div class=\"employees\">\n              <div class=\"m-employees-list\">\n                <div class=\"m-employees-list__item\" *ngFor=\"let employee of item.employees\">\n                  <div class=\"avatar\">\n                    <app-user-thumb [width]=\"'90px'\" [height]=\"'90px'\" [photo]=\"employee.photo\" [route]=\"employee.profileRoute\"></app-user-thumb>\n                  </div>\n                  <div class=\"body\">\n                    <div class=\"name\">\n                      {{ employee.fullName }}\n                    </div>\n                    <div class=\"position\">{{ employee.positionName }}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"navigation\" *ngIf=\"hasPrev || hasNext\">\n          <div class=\"m-page-nav\">\n            <a class=\"to-begin\" (click)=\"hasPrev && getBirthdaysPagetByMonth()\" [class.disabled]=\"!hasPrev\">В начало</a>\n            <input type=\"button\" class=\"prev-page\" (click)=\"getPrev()\" [class.disabled]=\"!hasPrev\" />\n            <input type=\"button\" class=\"next-page\" (click)=\"getNext()\" [class.disabled]=\"!hasNext\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/birthdays/components/birthdays-page/birthdays-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/birthdays/components/birthdays-page/birthdays-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  padding-bottom: 40px; }\n\n.l-birthdays {\n  box-sizing: border-box;\n  padding-left: 25px; }\n\n.l-birthdays .l-birthdays__month-list {\n    box-sizing: border-box;\n    margin-bottom: 20px;\n    height: 30px;\n    text-transform: capitalize; }\n\n.l-birthdays .l-birthdays__day-list {\n    margin-bottom: 60px; }\n\n.l-birthdays .l-birthdays__day-list .reset {\n      display: inline-block;\n      font-size: 16px;\n      color: #898888;\n      margin-right: 30px;\n      cursor: pointer; }\n\n.l-birthdays .l-birthdays__day-list .day {\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border: 1px solid #898888;\n      border-radius: 100%;\n      margin-right: 20px;\n      margin-bottom: 10px;\n      font-size: 14px;\n      color: #707070;\n      line-height: 24px;\n      text-align: center;\n      cursor: pointer; }\n\n.l-birthdays .l-birthdays__day-list .day.active {\n        color: #050505;\n        border-color: #da402b; }\n\n.l-birthdays .l-birthdays__calendar {\n    border-left: 2px solid #F1F1F4; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day {\n      box-sizing: border-box;\n      padding-left: 10%;\n      position: relative;\n      border-top: 3px dotted #707070; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .date {\n        position: absolute;\n        left: -27px;\n        top: -27px; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .date .day,\n        .l-birthdays .l-birthdays__calendar .l-birthdays__day .date .month {\n          display: inline-block;\n          vertical-align: middle; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .day {\n        background-color: #F1F1F4;\n        border-radius: 100%;\n        width: 50px;\n        height: 50px;\n        line-height: 50px;\n        color: #050505;\n        font-size: 20px;\n        font-weight: 900;\n        box-sizing: border-box;\n        text-align: center; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day .month {\n        color: #707070;\n        font-size: 16px;\n        padding-right: 15px;\n        box-sizing: border-box;\n        padding-left: 12px;\n        background-color: #fff;\n        text-transform: capitalize; }\n\n.l-birthdays .l-birthdays__calendar .l-birthdays__day:first-of-type {\n        border-top: 0; }\n\n.navigation {\n  margin: 35px 0;\n  text-align: center; }\n\n.m-employees-list .m-employees-list__item {\n  display: table;\n  width: 100%; }\n\n.m-employees-list .m-employees-list__item .avatar {\n    display: table-cell;\n    padding-right: 23px;\n    padding-left: 34px;\n    padding-bottom: 14px;\n    padding-top: 14px;\n    box-sizing: border-box;\n    vertical-align: middle;\n    width: 90px; }\n\n.m-employees-list .m-employees-list__item .body {\n    vertical-align: middle;\n    display: table-cell; }\n\n.m-employees-list .m-employees-list__item .body .name {\n      color: #050505;\n      font-size: 22px;\n      line-height: 24px;\n      font-weight: bold;\n      margin-bottom: 10px; }\n\n.m-employees-list .m-employees-list__item .body .position {\n      color: #050505;\n      font-size: 16px;\n      line-height: 20px; }\n\n.m-employees-list .m-employees-list__item .controls {\n    display: none;\n    vertical-align: middle;\n    box-sizing: border-box;\n    padding-left: 25px;\n    vertical-align: middle; }\n\n.m-employees-list .m-employees-list__item .controls .profile,\n    .m-employees-list .m-employees-list__item .controls .mail,\n    .m-employees-list .m-employees-list__item .controls .structure {\n      display: inline-block;\n      border-radius: 100%;\n      background-color: #FFFFFF;\n      width: 50px;\n      height: 50px;\n      margin-right: 25px;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 26px 26px; }\n\n.m-employees-list .m-employees-list__item .controls .profile {\n      background-image: url(\"/assets/icons/icon-profile.svg\"); }\n\n.m-employees-list .m-employees-list__item .controls .mail {\n      background-image: url(\"/assets/icons/icon-letter-black.svg\"); }\n\n.m-employees-list .m-employees-list__item .controls .structure {\n      background-image: url(\"/assets/icons/icon-struct-black.svg\"); }\n"

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




var BirthdaysPageComponent = /** @class */ (function () {
    function BirthdaysPageComponent(route, employeesFactory) {
        this.route = route;
        this.employeesFactory = employeesFactory;
        this.pages = [];
        this.index = 0;
        this.employees = [];
        this.birthdays = [];
        this.hasPrev = false;
        this.hasNext = false;
        this.days = [];
        this.months = Array.apply(0, Array(12)).map(function (v, i) { return moment__WEBPACK_IMPORTED_MODULE_2__().month(i).format('MMMM'); });
        this.days = Array.apply(0, Array(moment__WEBPACK_IMPORTED_MODULE_2__().daysInMonth())).map(function (v, i) { return i + 1; });
        this.month = new Date().getMonth();
        this.currentDay = new Date().getDate();
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
        this.employeesFactory.getPagedByMonthBirthday(this.month + 1)
            .subscribe(function (page) {
            _this.employees = page.items;
            _this.birthdays = _this.getBirthdaysForEmployees(_this.employees);
            _this.hasNext = page.hasNext;
            _this.pages.push(page);
        });
        this.getDaysInMonth(month);
    };
    BirthdaysPageComponent.prototype.getDaysInMonth = function (month) {
        var thisYear = new Date().getFullYear();
        var date = new Date(thisYear, month, 1);
        this.days = [];
        while (date.getMonth() === month) {
            this.days.push(new Date(date).getDate());
            date.setDate(date.getDate() + 1);
        }
        return this.days;
    };
    BirthdaysPageComponent.prototype.getBirthdaysPagetByDayOfMonth = function (day) {
        var _this = this;
        if (day === this.currentDay) {
            this.month = new Date().getMonth();
        }
        this.selectedDay = day == null ? this.selectedDay : day;
        this.index = 0;
        this.employees = [];
        this.pages = [];
        this.birthdays = [];
        this.hasPrev = false;
        this.hasNext = false;
        this.employeesFactory.getPagedByRange(this.month + 1, this.month + 1, this.selectedDay, this.selectedDay)
            .subscribe(function (page) {
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
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], BirthdaysPageComponent);
    return BirthdaysPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=birthdays-birthdays-module.js.map