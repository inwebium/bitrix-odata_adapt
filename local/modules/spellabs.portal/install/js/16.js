(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _components_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_2__["CalendarPageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Календарь событий' }
    },
    {
        path: ':id',
        component: _components_event_card_page_event_card_page_component__WEBPACK_IMPORTED_MODULE_3__["EventCardPageComponent"],
        resolve: { groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Календарь событий' }
    }
];
var CalendarRoutingModule = /** @class */ (function () {
    function CalendarRoutingModule() {
    }
    CalendarRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_4__["GroupsResolver"]],
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
                _components_event_card_page_event_card_page_component__WEBPACK_IMPORTED_MODULE_5__["EventCardPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalendarRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
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

module.exports = "<div class=\"leftside\">\r\n  <div class=\"l-page-header\">\r\n    <div class=\"l-breadcrumbs\">\r\n      <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\r\n      <div class=\"l-breadcrumb\">\r\n        Календарь событий\r\n      </div>\r\n    </div>\r\n    <div class=\"title\">Календарь событий</div>\r\n  </div>\r\n  <div class=\"l-page\">\r\n    <div class=\"l-page-inner\">\r\n      <div class=\"l-page__content\">\r\n        <div class=\"l-calendar\">\r\n          <div class=\"l-calendar__filters\">\r\n            <div class=\"top-filters\">\r\n              <div class=\"reset\">\r\n                <input type=\"button\" value=\"Сегодня\" (click)=\"resetDate()\" />\r\n              </div>\r\n              <div class=\"change-year\">\r\n                <input type=\"button\" class=\"arrow-left\" (click)=\"setDate(month, year - 1)\"/>\r\n                <div class=\"year\">{{year}}</div>\r\n                <input type=\"button\" class=\"arrow-right\" (click)=\"setDate(month, year + 1)\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"change-months\">\r\n            <app-filters>\r\n              <app-filters-item [active]=\"month === i ? true : false\" *ngFor=\"let item of months; let i = index\" (change)=\"setDate(i, year)\" >\r\n                {{item}}\r\n              </app-filters-item>\r\n            </app-filters>\r\n          </div>\r\n          <div class=\"l-calendar__month\">\r\n            <div class=\"l-calendar__month-inner\">\r\n              <div class=\"day head\" *ngFor=\"let day of days\">{{day}}</div>\r\n              <div class=\"day\" *ngFor=\"let number of numbers\" [class.active]=\"active === number\" (click)=\"active = (active === number ? null :number)\">\r\n                <!--Класс .is-event устанавливать для дней, имеющих событие-->\r\n                <div class=\"mark\"></div>\r\n                {{number}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"l-calendar__legend\">\r\n            <div class=\"item\" *ngFor=\"let item of legends\">\r\n              <div class=\"mark\" [style.backgroundColor]=\"item.mark\"></div>\r\n              <div class=\"name\">{{item.name}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"rightside\">\r\n  <div class=\"current-date\">\r\n    <div class=\"number\">\r\n      17\r\n    </div>\r\n    <div class=\"details\">\r\n      <div class=\"month\">\r\n        Январь\r\n      </div>\r\n      <div class=\"day\">\r\n        Среда\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"event-list\">\r\n    <div class=\"title\">\r\n      События\r\n    </div>\r\n    <div class=\"event-card\" *ngFor=\"let item of events\">\r\n      <div class=\"event-mark\" [style.backgroundColor]=\"item.mark\"></div>\r\n      <a class=\"event-title\" [routerLink]=\"['/calendar/' + item.id]\">\r\n        {{item.title}}\r\n      </a>\r\n      <div class=\"event-place\">\r\n        {{item.place}}\r\n      </div>\r\n      <div class=\"event-time\">\r\n        {{item.timeStart}} <span *ngIf=\"item.timeEnd\">-</span> {{item.timeEnd}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"admin-button\">\r\n    <input type=\"button\" class=\"add-event\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/calendar/components/calendar-page/calendar-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/calendar/components/calendar-page/calendar-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.leftside {\n  display: inline-block;\n  width: 70%;\n  vertical-align: top;\n  border-right: 1px solid #F6F6F6;\n  box-sizing: border-box; }\n\n.rightside {\n  display: inline-block;\n  width: 30%;\n  vertical-align: top; }\n\n.l-page {\n  margin: 0;\n  padding: 0; }\n\n.l-page__content {\n  position: relative; }\n\n.l-calendar {\n  padding-left: 25px;\n  box-sizing: border-box; }\n\n.l-calendar .l-calendar__filters {\n    position: absolute;\n    top: -30px; }\n\n.l-calendar .l-calendar__filters .reset {\n      display: inline-block;\n      margin-right: 40px; }\n\n.l-calendar .l-calendar__filters .reset input {\n        border: 1px solid #dd1e25;\n        border-radius: 15px;\n        font-size: 16px;\n        line-height: 20px;\n        color: #050505;\n        padding: 0 15px;\n        box-sizing: border-box; }\n\n.l-calendar .l-calendar__filters .change-year {\n      display: inline-block; }\n\n.l-calendar .l-calendar__filters .change-year .arrow-right,\n      .l-calendar .l-calendar__filters .change-year .arrow-left {\n        display: inline-block;\n        width: 15px;\n        height: 15px;\n        background-repeat: no-repeat;\n        background-size: contain;\n        background-image: url(/local/js/assets/icons/icon-arrow-right-red.svg);\n        vertical-align: middle; }\n\n.l-calendar .l-calendar__filters .change-year .arrow-left {\n        -webkit-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.l-calendar .l-calendar__filters .change-year .year {\n        display: inline-block;\n        font-size: 16px;\n        line-height: 20px;\n        color: #050505;\n        margin: 0 20px;\n        vertical-align: middle; }\n\n.l-calendar .change-months {\n    margin-top: 30px;\n    height: 33px; }\n\n.l-calendar .l-calendar__month {\n    border-bottom: 1px solid #F6F6F6;\n    margin-bottom: 20px; }\n\n.l-calendar .l-calendar__month .l-calendar__month-inner {\n      width: 49vw;\n      font-size: 0; }\n\n.l-calendar .l-calendar__month .day {\n      position: relative;\n      display: inline-block;\n      width: 3vw;\n      height: 3vw;\n      margin: 2vw;\n      font-size: 24px;\n      line-height: 3vw;\n      text-align: center;\n      border-radius: 100%;\n      cursor: pointer; }\n\n.l-calendar .l-calendar__month .day .mark {\n        display: none;\n        position: absolute;\n        right: -10px;\n        top: -10px;\n        width: 12px;\n        height: 12px;\n        border-radius: 100%;\n        background-color: #dd1e25; }\n\n.l-calendar .l-calendar__month .day.head {\n        font-weight: bold;\n        cursor: default; }\n\n.l-calendar .l-calendar__month .day.is-event {\n        background-color: #F1F1F4; }\n\n.l-calendar .l-calendar__month .day.is-event .mark {\n          display: block; }\n\n.l-calendar .l-calendar__month .day.active {\n        background-color: #dd1e25;\n        color: #FFF; }\n\n.l-calendar .l-calendar__legend .item {\n    display: inline-block;\n    margin-right: 65px;\n    margin-bottom: 10px; }\n\n.l-calendar .l-calendar__legend .item .mark {\n      display: inline-block;\n      width: 12px;\n      height: 12px;\n      border-radius: 100%; }\n\n.l-calendar .l-calendar__legend .item .name {\n      display: inline-block;\n      margin-left: 10px;\n      font-size: 14px;\n      color: #4D4E4D; }\n\n.rightside .current-date {\n  padding: 7% 14%;\n  box-sizing: border-box;\n  border-bottom: 1px solid #F6F6F6; }\n\n.rightside .current-date .number {\n    display: inline-block;\n    font-size: 140px;\n    line-height: 154px;\n    font-weight: bold;\n    color: #F1F1F4;\n    margin-right: 20px;\n    vertical-align: middle; }\n\n@media (min-width: 1440px) {\n      .rightside .current-date .number {\n        font-size: calc( 0.125 * 100vw + -40px);\n        line-height: calc( 0.125 * 100vw + -26px); } }\n\n@media (min-width: 1920px) {\n      .rightside .current-date .number {\n        font-size: 200px;\n        line-height: 214px; } }\n\n.rightside .current-date .details {\n    display: inline-block;\n    font-size: 24px;\n    vertical-align: middle; }\n\n@media (min-width: 1440px) {\n      .rightside .current-date .details {\n        font-size: calc( 0.02083333 * 100vw + -6px); } }\n\n@media (min-width: 1920px) {\n      .rightside .current-date .details {\n        font-size: 34px; } }\n\n.rightside .current-date .details .month {\n      color: #050505; }\n\n.rightside .current-date .details .day {\n      color: #898888; }\n\n.rightside .event-list {\n  padding: 10% 8%;\n  box-sizing: border-box;\n  max-height: 700px;\n  margin-bottom: 50px;\n  overflow: auto; }\n\n.rightside .event-list .title {\n    font-size: 24px;\n    font-weight: bold;\n    color: #898888;\n    margin-bottom: 20px; }\n\n.rightside .event-list .event-card {\n    position: relative;\n    font-size: 16px;\n    line-height: 30px;\n    color: #050505;\n    margin-bottom: 14%; }\n\n@media (min-width: 1440px) {\n      .rightside .event-list .event-card {\n        font-size: calc( 0.01666667 * 100vw + -8px);\n        line-height: calc( 0.01666667 * 100vw + 6px); } }\n\n@media (min-width: 1920px) {\n      .rightside .event-list .event-card {\n        font-size: 24px;\n        line-height: 38px; } }\n\n.rightside .event-list .event-card:last-child {\n      margin-bottom: 0; }\n\n.rightside .event-list .event-card .event-mark {\n      position: absolute;\n      left: -20px;\n      top: 13px;\n      width: 12px;\n      height: 12px;\n      border-radius: 100%; }\n\n.rightside .event-list .event-card .event-title {\n      display: block;\n      text-decoration: none;\n      color: #050505;\n      font-weight: bold; }\n\n.rightside .event-list .event-card .event-title:hover {\n        color: #dd1e25; }\n\n.rightside .admin-button {\n  text-align: right; }\n\n.rightside .admin-button .add-event {\n    width: 47px;\n    height: 47px;\n    background-image: url(/local/js/assets/icons/icon-plus-red.svg);\n    background-repeat: no-repeat;\n    background-size: contain; }\n"

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
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
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
    function CalendarPageComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.months = null;
        this.date = null;
        this.month = null;
        this.year = null;
        this.active = null;
        this.days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        this.numbers = [];
        this.legends = [{
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
            }];
        this.events = [
            {
                id: 1,
                title: 'Встреча с компанией Spellabs',
                place: 'МГОК',
                timeStart: '14:30',
                timeEnd: '16:00',
                mark: '#da402b'
            },
            {
                id: 2,
                title: 'Выставка Global Metal 2018',
                place: 'МГОК',
                timeStart: '10:00',
                timeEnd: '',
                mark: '#B016CC'
            }
        ];
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
        this.months = Array.apply(0, Array(12)).map(function (v, i) { return moment__WEBPACK_IMPORTED_MODULE_1__().month(i).format('MMMM'); });
        this.resetDate();
    }
    CalendarPageComponent.prototype.ngOnInit = function () {
    };
    CalendarPageComponent.prototype.getEventsByMonth = function () {
    };
    CalendarPageComponent.prototype.setDate = function (month, year) {
        this.month = month;
        this.year = year;
        this.date.setDate(1);
        this.date.setMonth(month);
        this.date.setFullYear(year);
        this.numbers = [];
        for (var i = 0; i < moment__WEBPACK_IMPORTED_MODULE_1__(this.date).isoWeekday(); i++) {
            this.numbers.push();
        }
        for (var i = 1; i <= moment__WEBPACK_IMPORTED_MODULE_1__(this.date).daysInMonth(); i++) {
            this.numbers.push(i);
        }
    };
    CalendarPageComponent.prototype.resetDate = function () {
        this.date = new Date();
        this.setDate(this.date.getMonth(), this.date.getFullYear());
    };
    CalendarPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar-page',
            template: __webpack_require__(/*! ./calendar-page.component.html */ "./src/app/calendar/components/calendar-page/calendar-page.component.html"),
            styles: [__webpack_require__(/*! ./calendar-page.component.scss */ "./src/app/calendar/components/calendar-page/calendar-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]])
    ], CalendarPageComponent);
    return CalendarPageComponent;
}());



/***/ }),

/***/ "./src/app/calendar/components/event-card-page/event-card-page.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/calendar/components/event-card-page/event-card-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\r\n  <div class=\"l-breadcrumbs\">\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/calendar']\">Календарь событий</a></div>\r\n    <div class=\"l-breadcrumb\">\r\n      Встреча с компанией Spellabs\r\n    </div>\r\n  </div>\r\n  <div class=\"title\">Встреча с компанией Spellabs</div>\r\n</div>\r\n<div class=\"l-page\">\r\n  <div class=\"l-page-inner\">\r\n    <div class=\"l-page__content\">\r\n      <div class=\"l-event\">\r\n        <div class=\"l-event__header\">\r\n          <div class=\"current-date\">\r\n            <div class=\"number\">\r\n              17\r\n            </div>\r\n            <div class=\"details\">\r\n              <div class=\"month\">\r\n                Январь\r\n              </div>\r\n              <div class=\"day\">\r\n                Среда\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"l-event__info\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">Комбинат</div>\r\n            <div class=\"col\">МГОК</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">Место</div>\r\n            <div class=\"col\">г. Михайловск, улица Победы, дом 3. корпус 7</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">Время</div>\r\n            <div class=\"col\">14:30 - 16:00</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">Описание</div>\r\n            <div class=\"col\">\r\n              Встреча пройдет на 11 этаже, кабинет №304. Со стороны Spellabs\r\n              будут присутствовать Чудин, Кузнецов, Акопян, Русначенко, Клевин,\r\n              Стариченко, Малахов, Тордия, Козлов, Смотров, Виданов, возможно\r\n              кто-то еще из сотрудников.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"button\">\r\n          <a [routerLink]=\"['/calendar']\" class=\"btn btn-to-back\">\r\n            <i></i> К календарю\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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


var EventCardPageComponent = /** @class */ (function () {
    function EventCardPageComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    EventCardPageComponent.prototype.ngOnInit = function () { };
    EventCardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-card-page',
            template: __webpack_require__(/*! ./event-card-page.component.html */ "./src/app/calendar/components/event-card-page/event-card-page.component.html"),
            styles: [__webpack_require__(/*! ./event-card-page.component.scss */ "./src/app/calendar/components/event-card-page/event-card-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]])
    ], EventCardPageComponent);
    return EventCardPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=16.js.map