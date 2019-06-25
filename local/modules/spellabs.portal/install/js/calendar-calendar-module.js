(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./src/app/calendar/calendar-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function() { return CalendarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/calendar-page/calendar-page.component */ "./src/app/calendar/components/calendar-page/calendar-page.component.ts");
/* harmony import */ var _components_event_card_page_event_card_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/event-card-page/event-card-page.component */ "./src/app/calendar/components/event-card-page/event-card-page.component.ts");
/* harmony import */ var src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/security/groups.resolver */ "./src/app/services/security/groups.resolver.ts");
/* harmony import */ var _services_calendar_event_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/calendar/event.resolver */ "./src/app/calendar/services/calendar/event.resolver.ts");
/* harmony import */ var _services_employees_current_employee_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/employees/current-employee.resolver */ "./src/app/calendar/services/employees/current-employee.resolver.ts");
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
        component: _components_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_2__["CalendarPageComponent"],
        // canActivate : [MsalGuard],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"], employee: _services_employees_current_employee_resolver__WEBPACK_IMPORTED_MODULE_6__["CurrentEmployeeResolver"] },
        data: { animation: 'fadeAnimation', title: 'Календарь событий' }
    },
    {
        path: ':id',
        component: _components_event_card_page_event_card_page_component__WEBPACK_IMPORTED_MODULE_3__["EventCardPageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"], event: _services_calendar_event_resolver__WEBPACK_IMPORTED_MODULE_5__["EventResolver"] },
        data: { animation: 'fadeAnimation', title: 'Календарь событий' }
    }
];
var CalendarRoutingModule = /** @class */ (function () {
    function CalendarRoutingModule() {
    }
    CalendarRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"], _services_calendar_event_resolver__WEBPACK_IMPORTED_MODULE_5__["EventResolver"], _services_employees_current_employee_resolver__WEBPACK_IMPORTED_MODULE_6__["CurrentEmployeeResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CalendarRoutingModule);
    return CalendarRoutingModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-routing.module */ "./src/app/calendar/calendar-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/calendar-page/calendar-page.component */ "./src/app/calendar/components/calendar-page/calendar-page.component.ts");
/* harmony import */ var _components_event_card_page_event_card_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/event-card-page/event-card-page.component */ "./src/app/calendar/components/event-card-page/event-card-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_calendar_current_events_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/calendar/current-events.pipe */ "./src/app/calendar/services/calendar/current-events.pipe.ts");
/* harmony import */ var _components_create_event_button_create_event_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-event-button/create-event-button.component */ "./src/app/calendar/components/create-event-button/create-event-button.component.ts");
/* harmony import */ var _staff_staff_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../staff/staff.module */ "./src/app/staff/staff.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_4__["CalendarPageComponent"],
                _components_event_card_page_event_card_page_component__WEBPACK_IMPORTED_MODULE_5__["EventCardPageComponent"],
                _services_calendar_current_events_pipe__WEBPACK_IMPORTED_MODULE_8__["CurrentEventsPipe"],
                _components_create_event_button_create_event_button_component__WEBPACK_IMPORTED_MODULE_9__["CreateEventButtonComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalendarRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _staff_staff_module__WEBPACK_IMPORTED_MODULE_10__["StaffModule"]
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/calendar/components/calendar-page/calendar-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/calendar/components/calendar-page/calendar-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leftside\">\n  <div class=\"l-page-header\">\n    <div class=\"l-breadcrumbs\">\n      <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n      <div class=\"l-breadcrumb\">\n        Календарь событий\n      </div>\n    </div>\n    <div class=\"title\">Календарь событий</div>\n  </div>\n  <div class=\"l-page\">\n    <div class=\"l-page-inner\">\n      <div class=\"l-page__content\">\n        <div class=\"l-calendar\">\n          <div class=\"l-calendar__filters\">\n            <div class=\"top-filters\">\n              <div class=\"reset\">\n                <input type=\"button\" value=\"Сегодня\" (click)=\"resetDate()\" />\n              </div>\n              <div class=\"change-year\">\n                <input\n                  type=\"button\"\n                  class=\"arrow-left\"\n                  (click)=\"setMonth(month, year - 1)\"\n                />\n                <div class=\"year\">{{ year }}</div>\n                <input\n                  type=\"button\"\n                  class=\"arrow-right\"\n                  (click)=\"setMonth(month, year + 1)\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"change-months\">\n            <app-filters>\n              <app-filters-item\n                [active]=\"month === i ? true : false\"\n                *ngFor=\"let item of months; let i = index\"\n                (change)=\"setMonth(i, year)\"\n              >\n                {{ item }}\n              </app-filters-item>\n            </app-filters>\n          </div>\n          <div class=\"l-calendar__month\">\n            <div class=\"l-calendar__month-inner\">\n              <div class=\"day head\" *ngFor=\"let day of days\">{{ day }}</div>\n              <div\n                class=\"day\"\n                *ngFor=\"let number of numbers\"\n                [style.visibility]=\"number === 0 ? 'hidden' : 'visible'\"\n                [class.active]=\"\n                  activeYear === year &&\n                  activeMonth === month &&\n                  activeDay === number\n                \"\n                [class.is-event]=\"hasEvent(events, number, month, year)\"\n                (click)=\"setDate(number, month, year)\"\n              >\n                <!--Класс .is-event устанавливать для дней, имеющих событие-->\n                <div class=\"mark\"></div>\n                {{ number }}\n              </div>\n            </div>\n          </div>\n          <div class=\"l-calendar__legend\" style=\"display: none\">\n            <div class=\"item\" *ngFor=\"let item of legends\">\n              <div class=\"mark\" [style.backgroundColor]=\"item.mark\"></div>\n              <div class=\"name\">{{ item.name }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"rightside\">\n  <div class=\"current-date\">\n    <div class=\"number\">\n      {{ activeDay }}\n    </div>\n    <div class=\"details\">\n      <div class=\"month\">\n        {{ activeMonth !== null && monthsIn[activeMonth] }}\n      </div>\n      <div class=\"day\">\n        {{ activeDayOfWeek && daysFull[activeDayOfWeek - 1] }}\n      </div>\n    </div>\n  </div>\n  <div class=\"event-list\">\n    <div class=\"title\">\n      События\n    </div>\n    <div class=\"event-card\" #eventCard *ngFor=\"let item of activeEvents\">\n      <div class=\"event-mark\" [style.backgroundColor]=\"'#da402b'\"></div>\n      <div class=\"admin-controls\">\n        <app-admin-controls\n          (activatedControls)=\"expandEvent($event, eventCard)\"\n          [item]=\"item\"\n          [canBeCreated]=\"false\"\n          (edit)=\"edit($event, item)\"\n          (remove)=\"remove($event, item)\"\n        ></app-admin-controls>\n      </div>\n      <a class=\"event-title\" [routerLink]=\"[item.id]\">\n        {{ item.title }}\n      </a>\n      <div class=\"event-place\" *ngIf=\"item.placeTitle\">\n        {{ item.placeTitle }}\n      </div>\n      <div class=\"event-time\">\n        {{ item.startTitle }} <span *ngIf=\"item.endTitle\">-</span>\n        {{ item.endTitle }}\n      </div>\n    </div>\n    <div class=\"event-card\" *ngIf=\"activeEvents.length === 0\">\n      На текущую дату событий нет\n    </div>\n  </div>\n  <div class=\"admin-button\">\n    <app-create-event-button></app-create-event-button>\n  </div>\n  <!-- <div class=\"admin-button\">\n    <input type=\"button\" class=\"add-event\" />\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/calendar/components/calendar-page/calendar-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/calendar/components/calendar-page/calendar-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.leftside {\n  display: inline-block;\n  width: 70%;\n  vertical-align: top;\n  border-right: 1px solid #F6F6F6;\n  box-sizing: border-box; }\n\n.rightside {\n  display: inline-block;\n  width: 30%;\n  vertical-align: top; }\n\n.l-page {\n  margin: 0;\n  padding: 0; }\n\n.l-page__content {\n  position: relative; }\n\n.l-calendar {\n  padding-left: 25px;\n  box-sizing: border-box; }\n\n.l-calendar .l-calendar__filters {\n    position: absolute;\n    top: -30px; }\n\n.l-calendar .l-calendar__filters .reset {\n      display: inline-block;\n      margin-right: 40px; }\n\n.l-calendar .l-calendar__filters .reset input {\n        border: 1px solid #dd1e25;\n        border-radius: 15px;\n        font-size: 16px;\n        line-height: 20px;\n        color: #050505;\n        padding: 0 15px;\n        box-sizing: border-box; }\n\n.l-calendar .l-calendar__filters .change-year {\n      display: inline-block; }\n\n.l-calendar .l-calendar__filters .change-year .arrow-right,\n      .l-calendar .l-calendar__filters .change-year .arrow-left {\n        display: inline-block;\n        width: 15px;\n        height: 15px;\n        background-repeat: no-repeat;\n        background-size: contain;\n        background-image: url(/assets/icons/icon-arrow-right-red.svg);\n        vertical-align: middle; }\n\n.l-calendar .l-calendar__filters .change-year .arrow-left {\n        -webkit-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.l-calendar .l-calendar__filters .change-year .year {\n        display: inline-block;\n        font-size: 16px;\n        line-height: 20px;\n        color: #050505;\n        margin: 0 20px;\n        vertical-align: middle; }\n\n.l-calendar .change-months {\n    margin-top: 30px;\n    height: 33px; }\n\n.l-calendar .l-calendar__month {\n    border-bottom: 1px solid #F6F6F6;\n    margin-bottom: 20px; }\n\n.l-calendar .l-calendar__month .l-calendar__month-inner {\n      width: 49vw;\n      font-size: 0; }\n\n@media screen and (min-width: 1930px) {\n        .l-calendar .l-calendar__month .l-calendar__month-inner {\n          width: 39vw; } }\n\n.l-calendar .l-calendar__month .day {\n      position: relative;\n      display: inline-block;\n      width: 3vw;\n      height: 3vw;\n      margin: 2vw;\n      font-size: 24px;\n      line-height: 3vw;\n      text-align: center;\n      border-radius: 100%;\n      cursor: pointer; }\n\n@media screen and (min-width: 1930px) {\n        .l-calendar .l-calendar__month .day {\n          width: 2vw;\n          height: 2vw;\n          margin: 1.5vw;\n          line-height: 2vw; } }\n\n.l-calendar .l-calendar__month .day .mark {\n        display: none;\n        position: absolute;\n        right: -10px;\n        top: -10px;\n        width: 12px;\n        height: 12px;\n        border-radius: 100%;\n        background-color: #dd1e25; }\n\n.l-calendar .l-calendar__month .day.head {\n        font-weight: bold;\n        cursor: default; }\n\n.l-calendar .l-calendar__month .day.is-event {\n        background-color: #F1F1F4; }\n\n.l-calendar .l-calendar__month .day.is-event .mark {\n          display: block; }\n\n.l-calendar .l-calendar__month .day.active {\n        background-color: #dd1e25;\n        color: #FFF; }\n\n.l-calendar .l-calendar__legend .item {\n    display: inline-block;\n    margin-right: 65px;\n    margin-bottom: 10px; }\n\n.l-calendar .l-calendar__legend .item .mark {\n      display: inline-block;\n      width: 12px;\n      height: 12px;\n      border-radius: 100%; }\n\n.l-calendar .l-calendar__legend .item .name {\n      display: inline-block;\n      margin-left: 10px;\n      font-size: 14px;\n      color: #4D4E4D; }\n\n.rightside .current-date {\n  padding: 7% 6%;\n  box-sizing: border-box;\n  border-bottom: 1px solid #F6F6F6;\n  text-align: center; }\n\n.rightside .current-date .number {\n    display: inline-block;\n    font-size: 140px;\n    line-height: 154px;\n    font-weight: bold;\n    color: #F1F1F4;\n    margin-right: 20px;\n    vertical-align: middle; }\n\n@media (min-width: 1440px) {\n      .rightside .current-date .number {\n        font-size: calc( 0.125 * 100vw + -40px);\n        line-height: calc( 0.125 * 100vw + -26px); } }\n\n@media (min-width: 1920px) {\n      .rightside .current-date .number {\n        font-size: 200px;\n        line-height: 214px; } }\n\n.rightside .current-date .details {\n    display: inline-block;\n    text-align: left;\n    font-size: 24px;\n    vertical-align: middle; }\n\n@media (min-width: 1440px) {\n      .rightside .current-date .details {\n        font-size: calc( 0.02083333 * 100vw + -6px); } }\n\n@media (min-width: 1920px) {\n      .rightside .current-date .details {\n        font-size: 34px; } }\n\n.rightside .current-date .details .month {\n      color: #050505; }\n\n.rightside .current-date .details .day {\n      color: #898888; }\n\n.rightside .event-list {\n  padding: 10% 8%;\n  box-sizing: border-box;\n  max-height: 700px;\n  margin-bottom: 50px;\n  overflow: auto; }\n\n.rightside .event-list .title {\n    font-size: 24px;\n    font-weight: bold;\n    color: #898888;\n    margin-bottom: 20px; }\n\n.rightside .event-list .event-card {\n    position: relative;\n    font-size: 16px;\n    line-height: 30px;\n    color: #050505;\n    margin-bottom: 10%; }\n\n@media (min-width: 1440px) {\n      .rightside .event-list .event-card {\n        font-size: calc( 0.01666667 * 100vw + -8px);\n        line-height: calc( 0.01666667 * 100vw + 6px); } }\n\n@media (min-width: 1920px) {\n      .rightside .event-list .event-card {\n        font-size: 24px;\n        line-height: 38px; } }\n\n.rightside .event-list .event-card.is-expanded {\n      min-height: 170px; }\n\n.rightside .event-list .event-card:last-child {\n      margin-bottom: 0; }\n\n.rightside .event-list .event-card:hover .admin-controls {\n      display: block; }\n\n.rightside .event-list .event-card .admin-controls {\n      display: none; }\n\n.rightside .event-list .event-card .event-mark {\n      position: absolute;\n      left: -20px;\n      top: 13px;\n      width: 12px;\n      height: 12px;\n      border-radius: 100%; }\n\n.rightside .event-list .event-card .event-title {\n      display: block;\n      text-decoration: none;\n      color: #050505;\n      font-weight: bold; }\n\n.rightside .event-list .event-card .event-title:hover {\n        color: #dd1e25; }\n\n.rightside .admin-button {\n  text-align: right; }\n\n.rightside .admin-button .add-event {\n    width: 47px;\n    height: 47px;\n    background-image: url(/assets/icons/icon-plus-red.svg);\n    background-repeat: no-repeat;\n    background-size: contain; }\n"

/***/ }),

/***/ "./src/app/calendar/components/calendar-page/calendar-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/calendar/components/calendar-page/calendar-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: CalendarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageComponent", function() { return CalendarPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/calendar/calendar.service */ "./src/app/calendar/services/calendar/calendar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarPageComponent = /** @class */ (function () {
    function CalendarPageComponent(calendarService, route, sharepointService) {
        this.calendarService = calendarService;
        this.route = route;
        this.sharepointService = sharepointService;
        this.months = [
            'январь',
            'февраль',
            'март',
            'апрель',
            'май',
            'июнь',
            'июль',
            'август',
            'сентябрь',
            'октябрь',
            'ноябрь',
            'декабрь'
        ];
        this.monthsIn = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря'
        ];
        this.day = null;
        this.month = null;
        this.year = null;
        this.activeDay = null;
        this.activeDayOfWeek = null;
        this.activeMonth = null;
        this.activeYear = null;
        this.activeDate = null;
        this.days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        this.daysFull = [
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье'
        ];
        this.numbers = [];
        this.legends = [
            {
                mark: '#da402b',
                name: 'События компании'
            },
            {
                mark: '#27EE2F',
                name: 'События комбината'
            },
            {
                mark: '#B016CC',
                name: 'События в отрасли'
            },
            {
                mark: '#EEA127',
                name: 'События подразделения'
            }
        ];
        this.events = [];
        this.activeEvents = [];
        this.employee = null;
    }
    CalendarPageComponent.prototype.ngOnInit = function () {
        this.employee = this.route.snapshot.data.employee;
        this.resetDate();
    };
    CalendarPageComponent.prototype.expandEvent = function ($event, item) {
        if ($event) {
            item.classList.add('is-expanded');
        }
        else {
            item.classList.remove('is-expanded');
        }
    };
    CalendarPageComponent.prototype.setMonth = function (month, year) {
        this.month = month;
        this.year = year;
        var date = new Date(year, month, 1);
        this.numbers = [];
        if (moment__WEBPACK_IMPORTED_MODULE_1__(date).isoWeekday() < 8) {
            for (var i = 1; i < moment__WEBPACK_IMPORTED_MODULE_1__(date).isoWeekday(); i++) {
                this.numbers.push(0);
            }
        }
        for (var i = 1; i <= moment__WEBPACK_IMPORTED_MODULE_1__(date).daysInMonth(); i++) {
            this.numbers.push(i);
        }
        this.load();
    };
    CalendarPageComponent.prototype.resetDate = function () {
        this.activeDate = new Date();
        this.activeDay = this.activeDate.getDate();
        this.activeDayOfWeek = moment__WEBPACK_IMPORTED_MODULE_1__(this.activeDate).isoWeekday();
        this.month = this.activeDate.getMonth();
        this.activeMonth = this.activeDate.getMonth();
        this.year = this.activeDate.getFullYear();
        this.activeYear = this.activeDate.getFullYear();
        this.setMonth(this.month, this.year);
        this.loadActive();
    };
    CalendarPageComponent.prototype.setDate = function (day, month, year) {
        if (day > 0) {
            this.activeDay = day;
            this.activeMonth = month;
            this.activeYear = year;
            this.activeDate = new Date(this.activeYear, this.activeMonth, this.activeDay);
            var date = moment__WEBPACK_IMPORTED_MODULE_1__(this.activeDate);
            this.activeDayOfWeek = date.isoWeekday();
            this.loadActive();
        }
    };
    CalendarPageComponent.prototype.load = function () {
        var _this = this;
        this.calendarService
            .getItemsBy(this.month, this.year, this.employee.lookupDepartmentId, this.employee.company)
            .subscribe(function (events) {
            _this.events = events;
        });
    };
    CalendarPageComponent.prototype.loadActive = function () {
        var _this = this;
        this.calendarService
            .getItemsBy(this.month, this.year, this.employee.lookupDepartmentId, this.employee.company)
            .subscribe(function (events) {
            _this.events = events;
            _this.activeEvents = events.filter(function (e) {
                return _this.activeDate.getTime() >= e.startWithoutTime.getTime() &&
                    (e.endWithoutTime == null ||
                        _this.activeDate.getTime() <= e.endWithoutTime.getTime());
            });
        });
    };
    CalendarPageComponent.prototype.hasEvent = function (events, day, month, year) {
        var date = new Date(year, month, day).getTime();
        return events.some(function (e) {
            return date >= e.startWithoutTime.getTime() &&
                date <= e.endWithoutTime.getTime();
        });
    };
    CalendarPageComponent.prototype.edit = function (event, item) {
        window.location.href =
            this.sharepointService.getCurrentUserContext().webServerRelativeUrl +
                ("/Lists/slCalendar/EditForm.aspx?ID=" + item.id + "&Source=") +
                encodeURIComponent(window.location.href);
    };
    CalendarPageComponent.prototype.remove = function (event, item) {
        var _this = this;
        this.calendarService.recycleItem(item).subscribe(function () { return _this.load(); });
    };
    CalendarPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar-page',
            template: __webpack_require__(/*! ./calendar-page.component.html */ "./src/app/calendar/components/calendar-page/calendar-page.component.html"),
            styles: [__webpack_require__(/*! ./calendar-page.component.scss */ "./src/app/calendar/components/calendar-page/calendar-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_4__["SharepointService"]])
    ], CalendarPageComponent);
    return CalendarPageComponent;
}());



/***/ }),

/***/ "./src/app/calendar/components/create-event-button/create-event-button.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/calendar/components/create-event-button/create-event-button.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"security-controls\" [class.cover]=\"isActivated\" (mouseleave)=\"mouseLeave()\">\n  <div class=\"show-controls\" title=\"Настроить\" (click)=\"openControls($event)\" *ngIf=\"isShow\"></div>\n  <div class=\"private-controls\" *ngIf=\"isActivated\">\n    <input type=\"button\" value=\"Создать праздник\" (click)=\"handleCreateCelebration($event)\" />\n    <input type=\"button\" value=\"Создать событие компании\" (click)=\"handleCreateCompany($event)\" />\n    <input type=\"button\" value=\"Создать событие комбината\" (click)=\"handleCreateCombine($event)\" />\n    <input type=\"button\" value=\"Создать событие подразделения\" (click)=\"handleCreateDepartment($event)\" />\n    <input type=\"button\" value=\"Создать событие в отрасли\" (click)=\"handleCreateIndustry($event)\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/calendar/components/create-event-button/create-event-button.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/calendar/components/create-event-button/create-event-button.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.security-controls.cover:after {\n  content: \"\";\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 8;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.show-controls {\n  float: right;\n  top: 10px;\n  right: 10px;\n  font-size: 44px;\n  height: 35px;\n  line-height: 7px;\n  z-index: 10;\n  width: 35px;\n  color: #0d0d0d;\n  letter-spacing: -5px;\n  white-space: nowrap;\n  border-radius: 100%;\n  cursor: pointer; }\n\n.show-controls:after {\n    content: \"\";\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    display: block;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 47px;\n    height: 47px;\n    background-image: url(/assets/icons/icon-plus-red.svg);\n    background-repeat: no-repeat;\n    background-size: contain; }\n\n.private-controls {\n  z-index: 20;\n  float: right;\n  top: 10px;\n  right: 10px;\n  border: 1px solid #484848;\n  box-sizing: border-box;\n  font-size: 0;\n  background-color: #ffffff;\n  width: 300px; }\n\n.is-expanded .private-controls {\n    display: block; }\n\n.private-controls input[type=\"button\"] {\n    z-index: 20;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    min-width: 0;\n    background-color: transparent;\n    cursor: pointer;\n    background-color: transparent;\n    cursor: pointer;\n    font-size: 14px;\n    text-transform: uppercase;\n    color: #050505;\n    display: block;\n    text-align: left;\n    width: 100%;\n    padding: 10px 15px;\n    box-sizing: border-box;\n    border-bottom: 1px solid #d0d0d0; }\n\n.private-controls input[type=\"button\"]:focus {\n      outline: none; }\n\n.private-controls input[type=\"button\"]:last-child {\n      border: none; }\n\n.private-controls input[type=\"button\"]:hover {\n      color: red; }\n"

/***/ }),

/***/ "./src/app/calendar/components/create-event-button/create-event-button.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/calendar/components/create-event-button/create-event-button.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CreateEventButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventButtonComponent", function() { return CreateEventButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_constants_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/groups */ "./src/app/constants/groups.ts");
/* harmony import */ var src_app_services_security_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/security/security.service */ "./src/app/services/security/security.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateEventButtonComponent = /** @class */ (function () {
    function CreateEventButtonComponent(route, componentRef, securityService, sharepointService) {
        this.route = route;
        this.componentRef = componentRef;
        this.securityService = securityService;
        this.sharepointService = sharepointService;
        this.isActivated = false;
        this.showAlret = false;
        this.isShow = false;
    }
    CreateEventButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data.groups) {
            var g = this.route.snapshot.data.groups;
            if (g && g.some(function (e) { return e === src_app_constants_groups__WEBPACK_IMPORTED_MODULE_2__["groups"].administrator; })) {
                this.isShow = true;
            }
        }
        else {
            this.securityService.getCurrentUserGroups()
                .subscribe(function (g) {
                if (g && g.some(function (e) { return e === src_app_constants_groups__WEBPACK_IMPORTED_MODULE_2__["groups"].administrator; })) {
                    _this.isShow = true;
                }
            });
        }
    };
    CreateEventButtonComponent.prototype.mouseLeave = function () {
        this.isActivated = false;
    };
    CreateEventButtonComponent.prototype.onClick = function (event) {
        if (this.isActivated &&
            !this.componentRef.nativeElement.contains(event.target)) {
            this.closeControls(event);
        }
    };
    CreateEventButtonComponent.prototype.handleCreateCelebration = function (event) {
        event.stopPropagation();
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + "/Lists/slCalendar/NewForm.aspx?ContentTypeId=0x010200C06DFD6907A0420D89ADF28F00117C8D&Source="
            + encodeURIComponent(window.location.href);
        this.closeControls(event);
    };
    CreateEventButtonComponent.prototype.handleCreateCompany = function (event) {
        event.stopPropagation();
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + "/Lists/slCalendar/NewForm.aspx?ContentTypeId=0x0102006BFE458C64184AEB935F128D1B59E157&Source="
            + encodeURIComponent(window.location.href);
        this.closeControls(event);
    };
    CreateEventButtonComponent.prototype.handleCreateCombine = function (event) {
        event.stopPropagation();
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + "/Lists/slCalendar/NewForm.aspx?ContentTypeId=0x010200898FF7141CD241DABAF49C72742B05B5&Source="
            + encodeURIComponent(window.location.href);
        this.closeControls(event);
    };
    CreateEventButtonComponent.prototype.handleCreateDepartment = function (event) {
        event.stopPropagation();
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + "/Lists/slCalendar/NewForm.aspx?ContentTypeId=0x010200CBF1DB022D8044CBA0EA930C77282B1D&Source="
            + encodeURIComponent(window.location.href);
        this.closeControls(event);
    };
    CreateEventButtonComponent.prototype.handleCreateIndustry = function (event) {
        event.stopPropagation();
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + "/Lists/slCalendar/NewForm.aspx?ContentTypeId=0x010200F4E6B239C55D41CC8690E4005878D7BA&Source="
            + encodeURIComponent(window.location.href);
        this.closeControls(event);
    };
    CreateEventButtonComponent.prototype.closeControls = function (event) {
        event.stopPropagation();
        this.showAlret = false;
        this.isActivated = false;
    };
    CreateEventButtonComponent.prototype.openControls = function (event) {
        event.stopPropagation();
        this.showAlret = false;
        this.isActivated = true;
    };
    CreateEventButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event-button',
            template: __webpack_require__(/*! ./create-event-button.component.html */ "./src/app/calendar/components/create-event-button/create-event-button.component.html"),
            styles: [__webpack_require__(/*! ./create-event-button.component.scss */ "./src/app/calendar/components/create-event-button/create-event-button.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_services_security_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_4__["SharepointService"]])
    ], CreateEventButtonComponent);
    return CreateEventButtonComponent;
}());



/***/ }),

/***/ "./src/app/calendar/components/event-card-page/event-card-page.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/calendar/components/event-card-page/event-card-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/']\">Главная</a></div>\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['../']\">Календарь событий</a></div>\n    <div class=\"l-breadcrumb\">\n      {{event.title}}\n    </div>\n  </div>\n  <div class=\"title\">{{event.title}}</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-event\">\n        <div class=\"l-event__header\">\n          <div class=\"current-date\" *ngIf=\"event\">\n            <div class=\"number\">\n              {{this.day}}\n            </div>\n            <div class=\"details\">\n              <div class=\"month\">\n                {{this.monthsIn[this.month]}}\n              </div>\n              <div class=\"day\">\n                {{this.daysFull[this.dayOfWeek - 1]}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"l-event__info\">\n          <div class=\"row\" *ngIf=\"event.companyTitle && event.companyTitle.length > 0\">\n            <div class=\"col\">Комбинат</div>\n            <div class=\"col\">{{event.companyTitle.join(',')}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">Тег</div>\n            <div class=\"col\"> {{event.type}}</div>\n          </div>\n          <div class=\"row\" *ngIf=\"event.departmentTitle && event.departmentTitle.length > 0\">\n            <div class=\"col\">Подразделение</div>\n            <div class=\"col\">{{event.departmentTitle.join(',')}}</div>\n          </div>\n          <div class=\"row\" *ngIf=\"event.placeTitle\">\n            <div class=\"col\">Место</div>\n            <div class=\"col\">{{event.placeTitle}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">Время</div>\n            <div class=\"col\"> {{event.startTitle}} <span *ngIf=\"event.endTitle\">-</span> {{event.endTitle}}</div>\n          </div>\n          <div class=\"row\" *ngIf=\"event.description\">\n            <div class=\"col\">Описание</div>\n            <div class=\"col\" [innerHTML]=\"event.description\">\n            </div>\n          </div>\n        </div>\n        <div class=\"button\">\n          <a [routerLink]=\"['../']\" class=\"btn btn-to-back\">\n            <i></i> К календарю\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/calendar/components/event-card-page/event-card-page.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/calendar/components/event-card-page/event-card-page.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  padding-bottom: 15px; }\n\n.l-event {\n  padding-left: 25px;\n  box-sizing: border-box; }\n\n.l-event .l-event__header .current-date {\n    box-sizing: border-box;\n    border-bottom: 1px solid #95989A; }\n\n.l-event .l-event__header .current-date .number {\n      display: inline-block;\n      font-size: 200px;\n      font-weight: bold;\n      color: #F1F1F4;\n      margin-right: 20px;\n      vertical-align: middle; }\n\n.l-event .l-event__header .current-date .details {\n      display: inline-block;\n      font-size: 34px;\n      vertical-align: middle; }\n\n.l-event .l-event__header .current-date .details .month {\n        color: #050505; }\n\n.l-event .l-event__header .current-date .details .day {\n        color: #898888; }\n\n.l-event .l-event__info {\n    display: table;\n    width: 45%;\n    table-layout: fixed;\n    border-collapse: collapse; }\n\n.l-event .l-event__info .row {\n      display: table-row; }\n\n.l-event .l-event__info .row .col {\n        display: table-cell;\n        font-size: 18px;\n        line-height: 38px;\n        padding: 20px 0; }\n\n.l-event .l-event__info .row .col:first-child {\n          width: 15%;\n          color: #898888;\n          text-align: right; }\n\n.l-event .l-event__info .row .col:last-child {\n          padding-left: 25px; }\n\n.l-event .button {\n    margin: 30px 0; }\n"

/***/ }),

/***/ "./src/app/calendar/components/event-card-page/event-card-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/calendar/components/event-card-page/event-card-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EventCardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCardPageComponent", function() { return EventCardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventCardPageComponent = /** @class */ (function () {
    function EventCardPageComponent(route) {
        this.route = route;
        this.day = null;
        this.month = null;
        this.dayOfWeek = null;
        this.monthsIn = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        this.daysFull = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    }
    EventCardPageComponent.prototype.ngOnInit = function () {
        this.event = this.route.snapshot.data.event;
        this.day = this.event.start.getDate();
        this.month = this.event.start.getMonth();
        this.dayOfWeek = moment__WEBPACK_IMPORTED_MODULE_1__(this.event.start).isoWeekday();
    };
    EventCardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-card-page',
            template: __webpack_require__(/*! ./event-card-page.component.html */ "./src/app/calendar/components/event-card-page/event-card-page.component.html"),
            styles: [__webpack_require__(/*! ./event-card-page.component.scss */ "./src/app/calendar/components/event-card-page/event-card-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventCardPageComponent);
    return EventCardPageComponent;
}());



/***/ }),

/***/ "./src/app/calendar/services/calendar/calendar.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/calendar/services/calendar/calendar.service.ts ***!
  \****************************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/list-items-service */ "./src/app/services/list-items-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_recurrence_recurrence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/recurrence/recurrence.service */ "./src/app/shared/services/recurrence/recurrence.service.ts");
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






var CalendarService = /** @class */ (function (_super) {
    __extends(CalendarService, _super);
    function CalendarService(recurrenceService) {
        var _this = _super.call(this) || this;
        _this.recurrenceService = recurrenceService;
        return _this;
    }
    CalendarService.prototype.getListTitle = function () {
        return 'Календарь событий';
    };
    CalendarService.prototype.getListRelativePath = function () {
        return 'lists/slCalendar';
    };
    CalendarService.prototype.getSelect = function () {
        return 'Id,Title,StartDate,EndDate,slEventDescription,slEventPlaceLookup/Title,'
            + 'fAllDayEvent,RecurrenceData,Duration,fRecurrence,ContentType/Name,'
            + 'slCompanyLookup/Title,slDepartmentLookup/Title,'
            + 'slCompanyLookup/slCode,slCompanyLookup/Id,slDepartmentLookup/Id';
    };
    CalendarService.prototype.getExpand = function () {
        return 'slEventPlaceLookup,slCompanyLookup,slDepartmentLookup,ContentType';
    };
    CalendarService.prototype.getOrderBy = function () {
        return null;
    };
    CalendarService.prototype.getTop = function () {
        return 5000;
    };
    CalendarService.prototype.getCachingOptions = function () {
        return null;
    };
    CalendarService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            description: item.slEventDescription,
            type: item.ContentType && this.getTypeName(item.ContentType.Name)
        };
        if (!(item.StartDate instanceof Date)) {
            entity.start = moment__WEBPACK_IMPORTED_MODULE_1__(item.StartDate.slice(0, -1), 'YYYY-MM-DD HH:mm:ss').toDate();
        }
        else {
            entity.start = item.StartDate;
        }
        if (!(item.EndDate instanceof Date)) {
            entity.end = moment__WEBPACK_IMPORTED_MODULE_1__(item.EndDate.slice(0, -1), 'YYYY-MM-DD HH:mm:ss').toDate();
        }
        else {
            entity.end = item.EndDate;
        }
        if (entity.start) {
            entity.startWithoutTime = new Date(entity.start.getFullYear(), entity.start.getMonth(), entity.start.getDate());
            entity.startTitle = moment__WEBPACK_IMPORTED_MODULE_1__(item.StartDate.toString()).format('HH:mm');
        }
        if (entity.end) {
            entity.endWithoutTime = new Date(entity.end.getFullYear(), entity.end.getMonth(), entity.end.getDate(), 23, 59, 59);
            entity.endTitle = moment__WEBPACK_IMPORTED_MODULE_1__(item.EndDate.toString()).format('HH:mm');
        }
        if (item.slEventPlaceLookup) {
            entity.placeId = item.slEventPlaceLookup.Id;
            entity.placeTitle = item.slEventPlaceLookup.Title;
        }
        if (item.slCompanyLookup) {
            entity.companyId = item.slCompanyLookup.map(function (c) { return c.Id; });
            entity.companyTitle = item.slCompanyLookup.map(function (c) { return c.Title; });
        }
        if (item.slDepartmentLookup) {
            entity.departmentId = item.slDepartmentLookup.map(function (d) { return d.Id; });
            entity.departmentTitle = item.slDepartmentLookup.map(function (d) { return d.Title; });
        }
        return entity;
    };
    CalendarService.prototype.getItemsByEventPeriod = function (params, start, end) {
        var _this = this;
        return this.getWebById(params && params.webId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (web) { return _this.getItemsOfWebByEventPeriod(web, params, start, end); }));
    };
    CalendarService.prototype.getItemsOfWebByEventPeriod = function (web, params, start, end) {
        var _this = this;
        var data;
        if (this.isMock() === false) {
            var items = web.lists.getByTitle(this.getListTitle()).items;
            this.setQueryForCollection(items, params);
            var cache = this.getCachingOptions();
            if (cache != null) {
                cache.key += this.hashCode("*getItemsPagedOfWeb*" + items.toUrlAndQuery());
                items.usingCaching(cache);
            }
            data = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(items.get().then(function (rows) {
                rows = _this.recurrenceService.parseEvents(rows, start, end);
                return rows.map(function (i) { return _this.convertListItemToEntity(i); });
            }));
        }
        else {
            data = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.getMockItems());
        }
        return data;
    };
    CalendarService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    CalendarService.prototype.getMockItems = function () {
        return [];
    };
    CalendarService.prototype.isMock = function () {
        return false;
    };
    CalendarService.prototype.getTypeName = function (type) {
        switch (type) {
            case 'Контентный тип ­события комбината':
                return '­Событие комбината';
                break;
            case 'Контентный тип ­события подразделения':
                return 'Событие подразделения';
                break;
            case 'Контентный тип ­праздник':
                return '­Праздник';
                break;
            case 'Контентный тип ­события компании':
                return 'Событие компании';
                break;
            case 'Контентный тип ­события в отрасли':
                return '­Событие в отрасли';
                break;
            default: break;
        }
    };
    CalendarService.prototype.getItemsBy = function (month, year, departmentId, companyCode, webId) {
        var start = (new Date(year, month, 1)).toISOString();
        var end = (new Date(year, month + 1, 1)).toISOString();
        var filter = "((StartDate ge datetime'" + start + "' and StartDate lt datetime'" + end + "') "
            + (" or (EndDate ge datetime'" + start + "' and EndDate lt datetime'" + end + "')")
            + (" or (StartDate lt datetime'" + start + "' and EndDate ge datetime'" + end + "'))")
            + (" and ((ContentType eq '\u041A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u00AD\u0441\u043E\u0431\u044B\u0442\u0438\u044F \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0442\u0430' and slCompanyLookup/slCode eq '" + companyCode + "')")
            + " or ContentType ne '\u041A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u00AD\u0441\u043E\u0431\u044B\u0442\u0438\u044F \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0442\u0430')"
            + (" and ((ContentType eq '\u041A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u00AD\u0441\u043E\u0431\u044B\u0442\u0438\u044F \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F' and slDepartmentLookup/Id eq " + (departmentId || 0) + ")")
            + " or ContentType ne '\u041A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u00AD\u0441\u043E\u0431\u044B\u0442\u0438\u044F \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F')";
        return this.getItemsByEventPeriod({ filter: encodeURI(filter), webId: webId }, new Date(year, month, 1), new Date(year, month + 1, 1));
    };
    CalendarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_recurrence_recurrence_service__WEBPACK_IMPORTED_MODULE_5__["RecurrenceService"]])
    ], CalendarService);
    return CalendarService;
}(src_app_services_list_items_service__WEBPACK_IMPORTED_MODULE_2__["ListItemsService"]));



/***/ }),

/***/ "./src/app/calendar/services/calendar/current-events.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/calendar/services/calendar/current-events.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: CurrentEventsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentEventsPipe", function() { return CurrentEventsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrentEventsPipe = /** @class */ (function () {
    function CurrentEventsPipe() {
    }
    CurrentEventsPipe.prototype.transform = function (items, filter) {
        var date = filter.getTime();
        return filter
            ? items.filter(function (e) { return (date >= e.startWithoutTime.getTime() && (e.endWithoutTime == null || date <= e.endWithoutTime.getTime())); })
            : [];
    };
    CurrentEventsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'CurrentEvents',
            pure: false
        })
    ], CurrentEventsPipe);
    return CurrentEventsPipe;
}());



/***/ }),

/***/ "./src/app/calendar/services/calendar/event.resolver.ts":
/*!**************************************************************!*\
  !*** ./src/app/calendar/services/calendar/event.resolver.ts ***!
  \**************************************************************/
/*! exports provided: EventResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResolver", function() { return EventResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.service */ "./src/app/calendar/services/calendar/calendar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventResolver = /** @class */ (function () {
    function EventResolver(calendarService) {
        this.calendarService = calendarService;
    }
    EventResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        return this.calendarService.getItem({ id: id });
    };
    EventResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"]])
    ], EventResolver);
    return EventResolver;
}());



/***/ }),

/***/ "./src/app/calendar/services/employees/current-employee.resolver.ts":
/*!**************************************************************************!*\
  !*** ./src/app/calendar/services/employees/current-employee.resolver.ts ***!
  \**************************************************************************/
/*! exports provided: CurrentEmployeeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentEmployeeResolver", function() { return CurrentEmployeeResolver; });
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

var CurrentEmployeeResolver = /** @class */ (function () {
    function CurrentEmployeeResolver(employeesFactory) {
        this.employeesFactory = employeesFactory;
    }
    CurrentEmployeeResolver.prototype.resolve = function (route, state) {
        return this.employeesFactory.getCurrentEmployee();
    };
    CurrentEmployeeResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __metadata("design:paramtypes", [Object])
    ], CurrentEmployeeResolver);
    return CurrentEmployeeResolver;
}());



/***/ }),

/***/ "./src/app/services/security/groups.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/services/security/groups.resolver.ts ***!
  \******************************************************/
/*! exports provided: GroupsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsResolver", function() { return GroupsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.service */ "./src/app/services/security/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupsResolver = /** @class */ (function () {
    function GroupsResolver(securityService) {
        this.securityService = securityService;
    }
    GroupsResolver.prototype.resolve = function (route, state) {
        return this.securityService.getCurrentUserGroups();
    };
    GroupsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]])
    ], GroupsResolver);
    return GroupsResolver;
}());



/***/ }),

/***/ "./src/app/shared/services/recurrence/recurrence.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/recurrence/recurrence.service.ts ***!
  \******************************************************************/
/*! exports provided: RecurrenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurrenceService", function() { return RecurrenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecurrenceService = /** @class */ (function () {
    function RecurrenceService() {
    }
    RecurrenceService.prototype.parseEvents = function (events, start, end) {
        var full = [];
        for (var i = 0; i < events.length; i++) {
            full = full.concat(this.parseEvent(events[i], start, end));
        }
        return full;
    };
    RecurrenceService.prototype.formatString = function (str) {
        var arr = str.split('\'');
        str = arr.join('');
        arr = str.split('"');
        str = arr.join('');
        arr = str.split('=');
        str = arr.join(' ');
        str.trim();
        return str.split(' ');
    };
    RecurrenceService.prototype.parseDate = function (date, allDay) {
        if (allDay) {
            if (date.lastIndexOf('Z') === date.length - 1) {
                var dt = date.substring(0, date.length - 1);
                return new Date(dt);
            }
        }
        else {
            return new Date(date);
        }
    };
    RecurrenceService.prototype.parseEvent = function (e, start, end) {
        if (!e.fRecurrence) {
            e.StartDate = new Date(this.parseDate(e.StartDate, e.fAllDayEvent));
            e.EndDate = new Date(this.parseDate(e.EndDate, e.fAllDayEvent));
            return [e];
        }
        else {
            start = start || this.parseDate(e.StartDate, e.fAllDayEvent);
            end = end || this.parseDate(e.EndDate, e.fAllDayEvent);
            var er = [];
            var wd = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
            var wom = ['first', 'second', 'third', 'fourth'];
            var rTotal = 0;
            var total = 0;
            if (e.RecurrenceData.indexOf('<repeatInstances>') !== -1) {
                rTotal = e.RecurrenceData.substring(e.RecurrenceData.indexOf('<repeatInstances>') + 17);
                rTotal = parseInt(rTotal.substring(0, rTotal.indexOf('<')));
            }
            if (e.RecurrenceData.indexOf('<daily ') !== -1) {
                var str = e.RecurrenceData.substring(e.RecurrenceData.indexOf('<daily '));
                str = str.substring(7, str.indexOf('/>') - 1);
                var arr = this.formatString(str);
                if (arr.indexOf('dayFrequency') !== -1) {
                    var frequency = parseInt(arr[arr.indexOf('dayFrequency') + 1]);
                    var loop = true;
                    var init = this.parseDate(e.StartDate, e.fAllDayEvent);
                    while (loop) {
                        total++;
                        if ((new Date(init)).getTime() >= start.getTime()) {
                            var ed = new Date(init);
                            ed.setSeconds(ed.getSeconds() + e.Duration);
                            var ni = this.cloneObj(e);
                            ni.StartDate = new Date(init);
                            ni.EndDate = ed;
                            ni.fRecurrence = false;
                            ni.Id = e.Id;
                            ni.ID = ni.Id;
                            er.push(ni);
                        }
                        init.setDate(init.getDate() + frequency);
                        if ((new Date(init) > end) || (rTotal > 0 && rTotal <= total)) {
                            loop = false;
                        }
                    }
                }
                else if (arr.indexOf('weekday') !== -1) {
                    e.RecurrenceData = e.RecurrenceData
                        + '<weekly mo=\'TRUE\' tu=\'TRUE\' we=\'TRUE\' th=\'TRUE\' fr=\'TRUE\' weekFrequency=\'1\' />';
                }
            }
            if (e.RecurrenceData.indexOf('<weekly ') !== -1) {
                var str = e.RecurrenceData.substring(e.RecurrenceData.indexOf('<weekly '));
                str = str.substring(8, str.indexOf('/>') - 1);
                var arr = this.formatString(str);
                var frequency = parseInt(arr[arr.indexOf('weekFrequency') + 1]);
                var loop = true;
                var init = this.parseDate(e.StartDate, e.fAllDayEvent);
                var initDay = init.getDay();
                while (loop) {
                    for (var i = initDay; i < 7; i++) {
                        if (arr.indexOf(wd[i]) !== -1 && (rTotal > total || rTotal === 0)) {
                            total++;
                            if ((new Date(init)).getTime() >= start.getTime()) {
                                var nd = new Date(init);
                                nd.setDate(nd.getDate() + (i - initDay));
                                var ed = new Date(nd);
                                ed.setSeconds(ed.getSeconds() + e.Duration);
                                var ni = this.cloneObj(e);
                                ni.StartDate = new Date(nd);
                                ni.EndDate = ed;
                                ni.fRecurrence = false;
                                ni.Id = e.Id;
                                ni.ID = ni.Id;
                                er.push(ni);
                            }
                        }
                    }
                    init.setDate(init.getDate() + ((7 * frequency) - initDay));
                    initDay = 0;
                    if ((new Date(init) > end) || (rTotal > 0 && rTotal <= total)) {
                        loop = false;
                    }
                }
            }
            if (e.RecurrenceData.indexOf('<monthly ') !== -1) {
                var str = e.RecurrenceData.substring(e.RecurrenceData.indexOf('<monthly '));
                str = str.substring(9, str.indexOf('/>') - 1);
                var arr = this.formatString(str);
                var frequency = parseInt(arr[arr.indexOf('monthFrequency') + 1]);
                var loop = true;
                var init = this.parseDate(e.StartDate, e.fAllDayEvent);
                var day = parseInt(arr[arr.indexOf('day') + 1]);
                while (loop) {
                    total++;
                    if ((new Date(init)).getTime() >= start.getTime()) {
                        var nd = new Date(init);
                        nd.setDate(day);
                        if (nd.getMonth() === init.getMonth()) {
                            var ed = new Date(nd);
                            ed.setSeconds(ed.getSeconds() + e.Duration);
                            var ni = this.cloneObj(e);
                            ni.StartDate = new Date(nd);
                            ni.EndDate = ed;
                            ni.fRecurrence = false;
                            ni.Id = e.Id;
                            ni.ID = ni.Id;
                            er.push(ni);
                        }
                    }
                    init.setMonth(init.getMonth() + frequency);
                    if ((new Date(init) > end) || (rTotal > 0 && rTotal <= total)) {
                        loop = false;
                    }
                }
            }
            if (e.RecurrenceData.indexOf('<monthlyByDay ') !== -1) {
                var str = e.RecurrenceData.substring(e.RecurrenceData.indexOf('<monthlyByDay '));
                str = str.substring(14, str.indexOf('/>') - 1);
                var arr = this.formatString(str);
                var frequency = parseInt(arr[arr.indexOf('monthFrequency') + 1]);
                var loop = true;
                var init = this.parseDate(e.StartDate, e.fAllDayEvent);
                var weekdayOfMonth = arr[arr.indexOf('weekdayOfMonth') + 1];
                var temp = new Date();
                while (loop) {
                    total++;
                    if ((new Date(init)).getTime() >= start.getTime()) {
                        var nd = new Date(init);
                        nd.setDate(1);
                        if (arr.indexOf('weekday') !== -1) {
                            if (nd.getDay() === 0) {
                                nd.setDate(nd.getDate() + 1);
                            }
                            else if (nd.getDay() === 6) {
                                nd.setDate(nd.getDate() + 2);
                            }
                            if (weekdayOfMonth === 'last') {
                                while (nd.getMonth() === init.getMonth()) {
                                    temp = new Date(nd);
                                    if (nd.getDay() === 5) {
                                        nd.setDate(nd.getDate() + 3);
                                    }
                                    else {
                                        nd.setDate(nd.getDate() + 1);
                                    }
                                }
                                nd = new Date(temp);
                            }
                            else {
                                for (var i = 0; i < wom.indexOf(weekdayOfMonth); i++) {
                                    if (nd.getDay() === 5) {
                                        nd.setDate(nd.getDate() + 3);
                                    }
                                    else {
                                        nd.setDate(nd.getDate() + 1);
                                    }
                                }
                            }
                        }
                        else if (arr.indexOf('weekend_day') !== -1) {
                            if (nd.getDay() !== 0 && nd.getDay() !== 6) {
                                nd.setDate(nd.getDate() + (6 - nd.getDay()));
                            }
                            if (weekdayOfMonth === 'last') {
                                while (nd.getMonth() === init.getMonth()) {
                                    temp = new Date(nd);
                                    if (nd.getDay() === 0) {
                                        nd.setDate(nd.getDate() + 6);
                                    }
                                    else {
                                        nd.setDate(nd.getDate() + 1);
                                    }
                                }
                                nd = new Date(temp);
                            }
                            else {
                                for (var i = 0; i < wom.indexOf(weekdayOfMonth); i++) {
                                    if (nd.getDay() === 0) {
                                        nd.setDate(nd.getDate() + 6);
                                    }
                                    else {
                                        nd.setDate(nd.getDate() + 1);
                                    }
                                }
                            }
                        }
                        else if (arr.indexOf('day') !== -1) {
                            if (weekdayOfMonth === 'last') {
                                nd.setMonth(nd.getMonth() + 1);
                                nd.setDate(0);
                            }
                            else {
                                nd.setDate(nd.getDate() + (wom.indexOf(weekdayOfMonth)));
                            }
                        }
                        else {
                            for (var i = 0; i < wd.length; i++) {
                                if (arr.indexOf(wd[i]) !== -1) {
                                    if (nd.getDate() > i) {
                                        nd.setDate(nd.getDate() + (7 - (nd.getDay() - i)));
                                    }
                                    else {
                                        nd.setDate(nd.getDate() + (i - nd.getDay()));
                                    }
                                }
                            }
                            if (weekdayOfMonth === 'last') {
                                while (nd.getMonth() === init.getMonth()) {
                                    temp = new Date(nd);
                                    nd.setDate(nd.getDate() + 7);
                                }
                                nd = new Date(temp);
                            }
                            else {
                                for (var i = 0; i < wom.indexOf(weekdayOfMonth); i++) {
                                    nd.setDate(nd.getDate() + 7);
                                }
                            }
                        }
                        if (nd.getMonth() === init.getMonth()) {
                            var ed = new Date(nd);
                            ed.setSeconds(ed.getSeconds() + e.Duration);
                            var ni = this.cloneObj(e);
                            ni.StartDate = new Date(nd);
                            ni.EndDate = ed;
                            ni.fRecurrence = false;
                            ni.Id = e.Id;
                            ni.ID = ni.Id;
                            er.push(ni);
                        }
                    }
                    init.setMonth(init.getMonth() + frequency);
                    if ((new Date(init) > end) || (rTotal > 0 && rTotal <= total)) {
                        loop = false;
                    }
                }
            }
            if (e.RecurrenceData.indexOf('<yearly ') !== -1) {
                var str = e.RecurrenceData.substring(e.RecurrenceData.indexOf('<yearly '));
                str = str.substring(8, str.indexOf('/>') - 1);
                var arr = this.formatString(str);
                var frequency = parseInt(arr[arr.indexOf('yearFrequency') + 1]);
                var loop = true;
                var init = this.parseDate(e.StartDate, e.fAllDayEvent);
                var month = (parseInt(arr[arr.indexOf('month') + 1]) - 1);
                var day = parseInt(arr[arr.indexOf('day') + 1]);
                while (loop) {
                    var nd = new Date(init);
                    nd.setMonth(month);
                    nd.setDate(day);
                    if ((new Date(init)).getTime() <= nd.getTime()) {
                        total++;
                        if ((new Date(init)).getTime() >= start.getTime()) {
                            var ed = new Date(nd);
                            ed.setSeconds(ed.getSeconds() + e.Duration);
                            var ni = this.cloneObj(e);
                            ni.StartDate = new Date(nd);
                            ni.EndDate = ed;
                            ni.fRecurrence = false;
                            ni.Id = e.Id;
                            ni.ID = ni.Id;
                            er.push(ni);
                        }
                    }
                    init.setFullYear(init.getFullYear() + frequency);
                    if ((new Date(init) > end) || (rTotal > 0 && rTotal <= total)) {
                        loop = false;
                    }
                }
            }
            if (e.RecurrenceData.indexOf('<yearlyByDay ') !== -1) {
                var str = e.RecurrenceData.substring(e.RecurrenceData.indexOf('<yearlyByDay '));
                str = str.substring(13, str.indexOf('/>') - 1);
                var arr = this.formatString(str);
                var frequency = parseInt(arr[arr.indexOf('yearFrequency') + 1]);
                var loop = true;
                var init = this.parseDate(e.StartDate, e.fAllDayEvent);
                var month = (parseInt(arr[arr.indexOf('month') + 1]) - 1);
                var weekdayOfMonth = arr[arr.indexOf('weekdayOfMonth') + 1];
                var day = 0;
                for (var i = 0; i < wd.length; i++) {
                    if (arr.indexOf(wd[i]) !== -1) {
                        if (arr[arr.indexOf(wd[i]) + 1].toLowerCase() === 'true') {
                            day = i;
                        }
                    }
                }
                while (loop) {
                    var nd = new Date(init);
                    nd.setMonth(month);
                    if ((new Date(init)).getTime() <= nd.getTime()) {
                        total++;
                        if ((new Date(init)).getTime() >= start.getTime()) {
                            nd.setDate(1);
                            var dayOfMonth = nd.getDay();
                            if (day < dayOfMonth) {
                                nd.setDate(nd.getDate() + ((7 - dayOfMonth) + day));
                            }
                            else {
                                nd.setDate(nd.getDate() + (day - dayOfMonth));
                            }
                            if (weekdayOfMonth === 'last') {
                                var temp = new Date(nd);
                                while (temp.getMonth() === month) {
                                    nd = new Date(temp);
                                    temp.setDate(temp.getDate() + 7);
                                }
                            }
                            else {
                                nd.setDate(nd.getDate() + (7 * (wom.indexOf(weekdayOfMonth))));
                            }
                            if (nd.getMonth() === month) {
                                var ed = new Date(nd);
                                ed.setSeconds(ed.getSeconds() + e.Duration);
                                var ni = this.cloneObj(e);
                                ni.StartDate = new Date(nd);
                                ni.EndDate = ed;
                                ni.fRecurrence = false;
                                ni.Id = e.Id;
                                ni.ID = ni.Id;
                                er.push(ni);
                            }
                        }
                    }
                    init.setFullYear(init.getFullYear() + frequency);
                    init.setMonth(month);
                    init.setDate(1);
                    if ((new Date(init) > end) || (rTotal > 0 && rTotal <= total)) {
                        loop = false;
                    }
                }
            }
            return er;
        }
    };
    RecurrenceService.prototype.cloneObj = function (obj) {
        var copy;
        if (null == obj || 'object' !== typeof obj) {
            return obj;
        }
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.cloneObj(obj[i]);
            }
            return copy;
        }
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = this.cloneObj(obj[attr]);
                }
            }
            return copy;
        }
        throw new Error('cloneObj');
    };
    RecurrenceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RecurrenceService);
    return RecurrenceService;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map