(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["phonebook-phonebook-module"],{

/***/ "./src/app/phonebook/components/phonebook-page/phonebook-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/phonebook/components/phonebook-page/phonebook-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">Телефонный справочник</div>\n  </div>\n  <div class=\"title\">Телефонный справочник</div>\n</div>\n<div class=\"l-page is-fill\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-phonebook\">\n        <div class=\"l-phonebook__navigation\">\n          <div class=\"m-hierarchy-menu\">\n            <app-tree-menu [items]=\"departments\" (change)=\"getEmployeesByDepartment($event)\"></app-tree-menu>\n          </div>\n        </div>\n        <div class=\"l-phonebook__content\">\n          <div class=\"l-phonebook__content-header\">\n            <div class=\"search\">\n              <input #searchRef type=\"text\" placeholder=\"Поиск по справочнику\" />\n            </div>\n            <div class=\"tabs-phonebook\">\n              <app-filters>\n                <app-filters-item (change)=\"getAllEmployees($event)\">\n                  Все\n                </app-filters-item>\n                <app-filters-item (change)=\"getEmergencyEmployees($event)\" style=\"display: none\">\n                  Экстренные\n                </app-filters-item>\n                <app-filters-item (change)=\"getMyEmployees($event)\">\n                  Мое подразделение\n                </app-filters-item>\n                <app-filters-item (change)=\"getLikedEmployees($event)\">\n                  Избранные\n                </app-filters-item>\n              </app-filters>\n            </div>\n          </div>\n          <div class=\"l-phonebook__content-body\">\n            <div class=\"empty-employee-list\" *ngIf=\"employees.length === 0\">\n              Результаты не найдены\n            </div>\n            <div class=\"employee-list\" *ngIf=\"employees.length > 0\">\n              <div class=\"employee\" #employeeCardElement *ngFor=\"let employee of employees\">\n                <div class=\"header\" (click)=\"toggleCard(employeeCardElement)\">\n                  <div class=\"photo\">\n                    <app-user-thumb [width]=\"'90px'\" [height]=\"'90px'\"\n                    [photo]=\"employee.photo\" [route]=\"employee.profileRoute\"\n                    [active]=\"employee.reason == null || employee.reason === ''\"></app-user-thumb>\n                  </div>\n                  <div class=\"info\">\n                    <div class=\"title\">{{ employee.fullName }}</div>\n                    <div class=\"position\">{{ employee.positionName }}</div>\n                  </div>\n                  <div class=\"controls\">\n                    <div class=\"control\">\n                      <a [routerLink]=\"employee.profileRoute\" class=\"profile\"></a>\n                    </div>\n                    <div class=\"control\" style=\"display: none\">\n                      <input type=\"button\" class=\"cell\" />\n                    </div>\n                    <div class=\"control\" style=\"display: none\">\n                      <input type=\"button\" class=\"message\" />\n                    </div>\n                    <div class=\"control\" *ngIf=\"employee.email\">\n                      <a href=\"mailto:{{ employee.email }}\" class=\"email\"></a>\n                    </div>\n                    <div class=\"control\" style=\"display: none\">\n                      <input type=\"button\" class=\"connection\" />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"body\">\n                  <div class=\"controls\">\n                    <div class=\"control\">\n                      <input type=\"button\" [ngClass]=\"{ 'favorite' : true, 'favorite-black': isLikedEmployee(employee) }\"\n                        (click)=\"toggleLike(employee)\" />\n                    </div>\n                    <div class=\"control\" style=\"display: none\">\n                      <input type=\"button\" class=\"like\" />\n                    </div>\n                    <div class=\"control\">\n                      <app-share-contact [link]=\"getEmployeeLink(employee)\"></app-share-contact>\n                    </div>\n                  </div>\n                  <div class=\"left-side\">\n                    <div class=\"row\">\n                      День рождения {{ employee.birthdayTitle }}\n                    </div>\n                    <div class=\"row\">\n                      Работает с\n                      {{ employee.startWorkDate | date: 'dd.MM.yyyy' }}\n                    </div>\n                    <div class=\"row\">\n                      Внутренний телефон: {{ employee.phoneInternal }}\n                    </div>\n                    <div class=\"row\">Моб. телефон: {{ employee.mobile }}</div>\n                    <div class=\"row\">\n                      E-mail:\n                      <a href=\"mailto:{{ employee.email }}\">{{\n                        employee.email\n                        }}</a>\n                    </div>\n                    <div class=\"row\">\n                      Расположение офиса: {{ employee.city }}\n                    </div>\n                    <div class=\"row\">\n                      Номер кабинета: {{ employee.officeNumber }}\n                    </div>\n                  </div>\n                  <div class=\"right-side\">\n                    <div class=\"row\">\n                      <div class=\"title\">Прямая структура подчинения:</div>\n                      <div class=\"text\">{{ employee.structureTitles }}</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"load-more\" *ngIf=\"hasNext\">\n            <input (click)=\"getNextEmployees()\" _ngcontent-c12=\"\" class=\"btn btn-default\" type=\"button\" value=\"Eще\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/phonebook/components/phonebook-page/phonebook-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/phonebook/components/phonebook-page/phonebook-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.load-more {\n  text-align: center;\n  margin: 15px auto; }\n\n.l-phonebook {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse; }\n\n.l-phonebook__content,\n.l-phonebook__navigation {\n  display: table-cell;\n  vertical-align: top;\n  width: auto; }\n\n.l-phonebook__navigation {\n  width: 380px; }\n\n.l-phonebook__content .empty-employee-list {\n  font-size: 16px;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-align: center;\n      align-items: center;\n  box-sizing: border-box; }\n\n.l-phonebook__content .employee-list {\n  margin-left: -35px; }\n\n.l-phonebook__content .employee-list .employee {\n    margin-bottom: 10px; }\n\n.l-phonebook__content .employee-list .employee.is-expanded .controls {\n      display: -ms-flexbox !important;\n      display: flex !important; }\n\n.l-phonebook__content .employee-list .employee.is-expanded .header,\n    .l-phonebook__content .employee-list .employee.is-expanded .body {\n      background-color: #F1F1F4; }\n\n.l-phonebook__content .employee-list .employee.is-expanded .body {\n      display: -ms-flexbox;\n      display: flex; }\n\n.l-phonebook__content .employee-list .employee:last-child {\n      margin-bottom: 0; }\n\n.l-phonebook__content .employee-list .employee .header {\n      position: relative;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -ms-flex-align: center;\n          align-items: center;\n      padding: 15px 35px;\n      box-sizing: border-box;\n      cursor: pointer; }\n\n.l-phonebook__content .employee-list .employee .header + .body {\n        border-top: 3px solid #fff; }\n\n.l-phonebook__content .employee-list .employee .header:hover {\n        background-color: #F1F1F4; }\n\n.l-phonebook__content .employee-list .employee .header:hover .controls {\n          display: -ms-flexbox;\n          display: flex; }\n\n.l-phonebook__content .employee-list .employee .header .photo {\n        margin-right: 25px; }\n\n.l-phonebook__content .employee-list .employee .header .info {\n        max-width: 37%; }\n\n.l-phonebook__content .employee-list .employee .header .info .title {\n          font-weight: 600; }\n\n.l-phonebook__content .employee-list .employee .header .info .title,\n        .l-phonebook__content .employee-list .employee .header .info .position {\n          font-size: 22px;\n          color: #050505; }\n\n.l-phonebook__content .employee-list .employee .header .info .title + .position,\n          .l-phonebook__content .employee-list .employee .header .info .position + .position {\n            margin-top: 10px; }\n\n.l-phonebook__content .employee-list .employee .header .info .position {\n          font-size: 16px; }\n\n.l-phonebook__content .employee-list .employee .header .controls {\n        position: absolute;\n        right: 50px;\n        display: none;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.l-phonebook__content .employee-list .employee .header .controls .control {\n          padding: 0 12.5px;\n          box-sizing: border-box;\n          position: relative; }\n\n.l-phonebook__content .employee-list .employee .header .controls .control input[type=\"button\"],\n          .l-phonebook__content .employee-list .employee .header .controls .control a {\n            text-decoration: none;\n            display: block;\n            width: 50px;\n            height: 50px;\n            border-radius: 100%;\n            background-color: #fff;\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: 90%;\n            padding: 0;\n            margin: 0;\n            border: none;\n            box-sizing: border-box; }\n\n.l-phonebook__content .employee-list .employee .header .controls .control input[type=\"button\"].profile,\n            .l-phonebook__content .employee-list .employee .header .controls .control a.profile {\n              background-image: url(\"/assets/icons/icon-profile-black.svg\"); }\n\n.l-phonebook__content .employee-list .employee .header .controls .control input[type=\"button\"].email,\n            .l-phonebook__content .employee-list .employee .header .controls .control a.email {\n              background-image: url(\"/assets/icons/icon-email-black.svg\"); }\n\n.l-phonebook__content .employee-list .employee .header .controls .control input[type=\"button\"].connection,\n            .l-phonebook__content .employee-list .employee .header .controls .control a.connection {\n              background-image: url(\"/assets/icons/icon-connection-black.svg\"); }\n\n.l-phonebook__content .employee-list .employee .header .controls .control input[type=\"button\"].cell,\n            .l-phonebook__content .employee-list .employee .header .controls .control a.cell {\n              background-image: url(\"/assets/icons/icon-cell-black.svg\"); }\n\n.l-phonebook__content .employee-list .employee .header .controls .control input[type=\"button\"].message,\n            .l-phonebook__content .employee-list .employee .header .controls .control a.message {\n              background-image: url(\"/assets/icons/icon-message-black.svg\"); }\n\n.l-phonebook__content .employee-list .employee .body {\n      display: none;\n      padding-left: 145px;\n      padding-top: 25px;\n      padding-bottom: 25px;\n      padding-right: 25px;\n      box-sizing: border-box;\n      position: relative;\n      min-height: 220px;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      font-size: 16px;\n      color: #050505; }\n\n.l-phonebook__content .employee-list .employee .body .controls {\n        position: absolute;\n        width: 145px;\n        top: 25px;\n        left: 0;\n        bottom: 0;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n            align-items: center;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.l-phonebook__content .employee-list .employee .body .controls .control {\n          height: 30px;\n          width: 30px; }\n\n.l-phonebook__content .employee-list .employee .body .controls .control input[type=\"button\"] {\n            padding: 0;\n            margin: 0;\n            border: 0;\n            min-width: 0;\n            background-color: transparent;\n            cursor: pointer;\n            width: 100%;\n            height: 100%;\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: 90%;\n            cursor: pointer; }\n\n.l-phonebook__content .employee-list .employee .body .controls .control input[type=\"button\"]:focus {\n              outline: none; }\n\n.l-phonebook__content .employee-list .employee .body .controls .control input[type=\"button\"].like {\n              background-image: url(\"/assets/icons/icon-like.svg\"); }\n\n.l-phonebook__content .employee-list .employee .body .controls .control input[type=\"button\"].favorite {\n              background-image: url(\"/assets/icons/icon-favorite.svg\"); }\n\n.l-phonebook__content .employee-list .employee .body .controls .control input[type=\"button\"].favorite-black {\n              background-image: url(\"/assets/icons/icon-favorite-black.svg\"); }\n\n.l-phonebook__content .employee-list .employee .body .controls .control input[type=\"button\"].connections {\n              background-image: url(\"/assets/icons/icon-connections.svg\"); }\n\n.l-phonebook__content .employee-list .employee .body .controls .control + .control {\n            margin-top: 25px; }\n\n.l-phonebook__content .employee-list .employee .body .left-side {\n        min-width: 250px; }\n\n.l-phonebook__content .employee-list .employee .body .right-side {\n        padding-left: 8%; }\n\n.l-phonebook__content .employee-list .employee .body .row + .row {\n        margin-top: 12px; }\n\n.l-phonebook__content .employee-list .employee .body .row .title {\n        margin-bottom: 12px; }\n\n.l-phonebook__content .employee-list .employee .body .row a {\n        color: #dd1e25;\n        text-decoration: none; }\n\n.l-phonebook__content-header {\n  margin-bottom: 45px;\n  position: relative;\n  min-height: 47px; }\n\n.l-phonebook__content-header .search,\n  .l-phonebook__content-header .tabs-phonebook {\n    display: inline-block;\n    vertical-align: bottom; }\n\n.l-phonebook__content-header .search + .tabs-phonebook,\n    .l-phonebook__content-header .tabs-phonebook + .tabs-phonebook {\n      margin-left: 15%;\n      height: 35px;\n      box-sizing: border-box; }\n\n.l-phonebook__content-header .search {\n    width: 35%;\n    min-width: 380px; }\n\n.l-phonebook__content-header .search input[type=\"text\"] {\n      padding: 0;\n      margin: 0;\n      border: 0;\n      min-width: 0;\n      background-color: transparent;\n      cursor: pointer;\n      width: 100%;\n      height: 47px;\n      line-height: 47px;\n      padding-left: 15px;\n      padding-right: 60px;\n      box-sizing: border-box;\n      color: #898888;\n      border: 1px solid #BCBCBC;\n      background-repeat: no-repeat;\n      background-position: right 15px center;\n      background-image: url(\"/assets/icons/icon-search-red.svg\");\n      background-size: 30px;\n      font-size: 16px; }\n\n.l-phonebook__content-header .search input[type=\"text\"]:focus {\n        outline: none; }\n\n@media screen and (max-width: 1440px) {\n    .l-phonebook__content-header .tabs-phonebook {\n      margin-top: 30px;\n      margin-left: 0 !important;\n      padding: 0 !important;\n      display: block; } }\n"

/***/ }),

/***/ "./src/app/phonebook/components/phonebook-page/phonebook-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/phonebook/components/phonebook-page/phonebook-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PhonebookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonebookPageComponent", function() { return PhonebookPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
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






var PhonebookPageComponent = /** @class */ (function () {
    function PhonebookPageComponent(employeesFactory, route, sidebarService, sharepointService) {
        this.employeesFactory = employeesFactory;
        this.route = route;
        this.sidebarService = sidebarService;
        this.sharepointService = sharepointService;
        this.department = null;
        this.myDepartmentId = null;
        this.hasNext = false;
        this.employees = [];
        this.userId = null;
        this.currentEmployee = null;
        this.subscription = null;
        this.filter = null;
        this.isFavorite = false;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
        this.userId = this.sharepointService.getCurrentUserContext().userId;
    }
    PhonebookPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchRef.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(function (filter) {
            _this.filter = filter;
            _this.searchEmployee();
        });
    };
    PhonebookPageComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.data.userId;
        this.departments = this.route.snapshot.data.departments;
        this.currentEmployee = this.route.snapshot.data.currentEmployee;
        this.createPage(this.route.snapshot.data.employees);
    };
    PhonebookPageComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    PhonebookPageComponent.prototype.clickOutSide = function (el) {
        this.employeeCardElements.toArray().forEach(function (element) {
            if (!element.nativeElement.contains(el.target)) {
                element.nativeElement.className = 'employee';
            }
        });
    };
    PhonebookPageComponent.prototype.toggleCard = function (employeeCardElement) {
        var el = employeeCardElement;
        this.employeeCardElements.toArray().forEach(function (element) {
            element.nativeElement.className = 'employee';
        });
        !el.classList.contains('is-expanded')
            ? (el.className += ' is-expanded')
            : (el.className = 'employee');
    };
    PhonebookPageComponent.prototype.getAllEmployees = function (event) {
        this.myDepartmentId = null;
        this.isFavorite = false;
        this.searchEmployee();
    };
    PhonebookPageComponent.prototype.getLikedEmployees = function (event) {
        this.myDepartmentId = null;
        this.isFavorite = true;
        this.searchEmployee();
    };
    PhonebookPageComponent.prototype.getMyEmployees = function (event) {
        this.myDepartmentId = this.currentEmployee.lookupDepartmentId;
        this.isFavorite = false;
        this.searchEmployee();
    };
    PhonebookPageComponent.prototype.getEmergencyEmployees = function (event) {
        // this.searchRef.nativeElement.value = null;
        // this.employeesService
        //   .getItemsPaged({ filter: `slIsEmergency eq 1` })
        //   .subscribe(page => this.createPage(page));
    };
    PhonebookPageComponent.prototype.getEmployeesByDepartment = function (department) {
        this.department = department;
        this.searchEmployee();
    };
    PhonebookPageComponent.prototype.toggleLike = function (employee) {
        var _this = this;
        if (this.isLikedEmployee(employee)) {
            this.employeesFactory.removeFavorite(employee.id).subscribe();
            employee.likedByIds = employee.likedByIds.filter(function (l) { return l !== _this.userId; });
        }
        else {
            this.employeesFactory.addFavorite(employee.id).subscribe();
            employee.likedByIds.push(this.userId);
        }
    };
    PhonebookPageComponent.prototype.isLikedEmployee = function (employee) {
        var isLiked = employee.likedByIds && employee.likedByIds.indexOf(this.userId) >= 0 || false;
        return isLiked;
    };
    PhonebookPageComponent.prototype.getNextEmployees = function () {
        var _this = this;
        this.page.getNext().subscribe(function (page) { return _this.addPage(page); });
    };
    PhonebookPageComponent.prototype.searchEmployee = function () {
        var _this = this;
        var value = this.filter;
        var departmentId = this.myDepartmentId || (this.department && this.department.id);
        this.employeesFactory.search(value, departmentId, this.isFavorite)
            .subscribe(function (page) { return _this.createPage(page); });
    };
    PhonebookPageComponent.prototype.createPage = function (page) {
        this.page = page;
        this.hasNext = page.hasNext;
        this.employees = page.items;
    };
    PhonebookPageComponent.prototype.addPage = function (page) {
        this.page = page;
        this.hasNext = page.hasNext;
        this.employees = this.employees.concat(page.items);
    };
    PhonebookPageComponent.prototype.getEmployeeLink = function (employee) {
        return window.location.protocol + "//" + window.location.host
            + ("" + this.sharepointService.getCurrentUserContext().webServerRelativeUrl)
            + ("/PortalPages/home.aspx#/phonebook/" + employee.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('employeeCardElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PhonebookPageComponent.prototype, "employeeCardElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PhonebookPageComponent.prototype, "searchRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PhonebookPageComponent.prototype, "clickOutSide", null);
    PhonebookPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phonebook-page',
            template: __webpack_require__(/*! ./phonebook-page.component.html */ "./src/app/phonebook/components/phonebook-page/phonebook-page.component.html"),
            styles: [__webpack_require__(/*! ./phonebook-page.component.scss */ "./src/app/phonebook/components/phonebook-page/phonebook-page.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__["SharepointService"]])
    ], PhonebookPageComponent);
    return PhonebookPageComponent;
}());



/***/ }),

/***/ "./src/app/phonebook/components/profile-page/profile-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/phonebook/components/profile-page/profile-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">\n      <a [routerLink]=\"['/phonebook']\">Телефонный справочник</a>\n    </div>\n    <div class=\"l-breadcrumb\">Профиль сотрудника</div>\n  </div>\n  <div class=\"title\">Профиль сотрудника</div>\n</div>\n<div class=\"l-page\" *ngIf=\"employee\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"employee-card\">\n        <div class=\"header\">\n          <div class=\"photo\">\n            <app-user-thumb [width]=\"'110px'\" [height]=\"'110px'\"\n              [hasModalPhoto]=\"true\"\n              [hasZoom]=\"true\"\n              [photo]=\"employee.photo\" [route]=\"employee.profileRoute\"\n              [active]=\"employee.reason == null || employee.reason === ''\"></app-user-thumb>\n          </div>\n          <div class=\"info\">\n            <div class=\"title\">{{ employee.fullName }}</div>\n            <div class=\"position\">{{ employee.positionName }}</div>\n          </div>\n          <div class=\"controls\">\n            <div class=\"control\" style=\"display: none\">\n              <input type=\"button\" class=\"cell\" />\n            </div>\n            <div class=\"control\" style=\"display: none\">\n              <input type=\"button\" class=\"message\" />\n            </div>\n            <div class=\"control\" *ngIf=\"employee.email\">\n              <a href=\"{{'mailto:' + employee.email}}\" class=\"email\"></a>\n            </div>\n            <div class=\"control\" style=\"display: none\">\n              <input type=\"button\" class=\"connection\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"body\">\n          <div class=\"controls\">\n            <div class=\"control\">\n                <input type=\"button\"\n                [ngClass]=\"{ 'favorite' : true, 'favorite-black': this.employee.likedByIds.indexOf(this.userId) >= 0 }\"\n                (click)=\"toggleLike()\"/>\n            </div>\n            <div class=\"control\" style=\"display: none\"><input type=\"button\" class=\"like\" /></div>\n            <div class=\"control\">\n              <app-share-contact [link]=\"getEmployeeLink(employee)\"></app-share-contact>\n            </div>\n          </div>\n          <div class=\"left-side\">\n            <div class=\"row\">День рождения {{ employee.birthdayTitle }}</div>\n            <div class=\"row\">\n              Работает с {{ employee.startWorkDate | date: 'dd.MM.yyyy' }}\n            </div>\n            <div class=\"row\">\n              Внутренний телефон: {{ employee.phoneInternal }}\n            </div>\n            <div class=\"row\">Моб. телефон: {{ employee.mobile }}</div>\n            <div class=\"row\">\n              E-mail:\n              <a href=\"mailto:{{ employee.email }}\">{{employee.email}}</a>\n            </div>\n            <div class=\"row\">Расположение офиса: {{ employee.city }}</div>\n            <div class=\"row\">Номер кабинета: {{ employee.officeNumber }}</div>\n          </div>\n          <div class=\"right-side\">\n            <div class=\"row\">\n              <div class=\"title\">Прямая структура подчинения:</div>\n              <div class=\"text\">{{ employee.structureTitles }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"additional-info\">\n        <div class=\"left-side\">\n          <h3>Ближайшее окружение</h3>\n          <app-department-heads\n            [inline]=\"true\"\n            [employee]=\"employee\"\n          ></app-department-heads>\n        </div>\n        <div class=\"right-side\" style=\"display: none\">\n          <h3>Благодарности</h3>\n          <div class=\"thanks-list\">\n            <div class=\"thanks\" *ngFor=\"let item of thanksList\">\n              <div class=\"info\">\n                <div class=\"reward\">\n                  <div class=\"icon\">\n                    <i [style.backgroundImage]=\"'url(' + item.reward.icon + ')'\"></i>\n                  </div>\n                  <div class=\"text\">\n                    <span> {{ item.reward.title }} </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"employees\">\n                <div class=\"employee\" *ngFor=\"let employee of item.employees\">\n                  <app-user-thumb [photo]=\"employee.photo\" [showStatus]=\"false\"></app-user-thumb>\n                </div>\n              </div>\n              <!--В счетчике ниже необходимо вычитать 3 - пользователи, отображаемые левее-->\n              <div class=\"count\">+{{ item.count }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/phonebook/components/profile-page/profile-page.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/phonebook/components/profile-page/profile-page.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.employee-card {\n  margin-left: 25px;\n  margin-bottom: 35px;\n  margin-right: -2%; }\n\n.employee-card:last-child {\n    margin-bottom: 0; }\n\n.employee-card .header,\n  .employee-card .body {\n    background-color: #F1F1F4;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row; }\n\n.employee-card .header {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-align: center;\n        align-items: center;\n    padding: 30px 35px;\n    box-sizing: border-box;\n    cursor: pointer; }\n\n.employee-card .header .photo {\n      margin-right: 25px; }\n\n.employee-card .header .info {\n      max-width: 55%; }\n\n.employee-card .header .info .title {\n        font-weight: 600; }\n\n.employee-card .header .info .title,\n      .employee-card .header .info .position {\n        font-size: 22px;\n        color: #050505; }\n\n.employee-card .header .info .title + .position,\n        .employee-card .header .info .position + .position {\n          margin-top: 10px; }\n\n.employee-card .header .info .position {\n        font-size: 16px; }\n\n.employee-card .header .controls {\n      position: absolute;\n      right: 75px;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.employee-card .header .controls .control {\n        padding: 0 12.5px;\n        box-sizing: border-box; }\n\n.employee-card .header .controls .control input[type=\"button\"],\n        .employee-card .header .controls .control a {\n          text-decoration: none;\n          display: block;\n          width: 50px;\n          height: 50px;\n          border-radius: 100%;\n          background-color: #fff;\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: 90%;\n          padding: 0;\n          margin: 0;\n          border: none;\n          box-sizing: border-box; }\n\n.employee-card .header .controls .control input[type=\"button\"].cell,\n          .employee-card .header .controls .control a.cell {\n            background-image: url(\"/assets/icons/icon-cell-black.svg\"); }\n\n.employee-card .header .controls .control input[type=\"button\"].message,\n          .employee-card .header .controls .control a.message {\n            background-image: url(\"/assets/icons/icon-message-black.svg\"); }\n\n.employee-card .header .controls .control input[type=\"button\"].profile,\n          .employee-card .header .controls .control a.profile {\n            background-image: url(\"/assets/icons/icon-profile-black.svg\"); }\n\n.employee-card .header .controls .control input[type=\"button\"].email,\n          .employee-card .header .controls .control a.email {\n            background-image: url(\"/assets/icons/icon-email-black.svg\"); }\n\n.employee-card .header .controls .control input[type=\"button\"].connection,\n          .employee-card .header .controls .control a.connection {\n            background-image: url(\"/assets/icons/icon-connection-black.svg\"); }\n\n.employee-card .body {\n    padding-left: 145px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    padding-right: 25px;\n    box-sizing: border-box;\n    position: relative;\n    min-height: 220px;\n    font-size: 16px;\n    color: #050505; }\n\n.employee-card .body .controls {\n      position: absolute;\n      width: 145px;\n      top: 25px;\n      left: 0;\n      bottom: 0;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.employee-card .body .controls .control {\n        height: 30px;\n        width: 30px; }\n\n.employee-card .body .controls .control input[type=\"button\"] {\n          padding: 0;\n          margin: 0;\n          border: 0;\n          min-width: 0;\n          background-color: transparent;\n          cursor: pointer;\n          width: 100%;\n          height: 100%;\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: 90%;\n          cursor: pointer; }\n\n.employee-card .body .controls .control input[type=\"button\"]:focus {\n            outline: none; }\n\n.employee-card .body .controls .control input[type=\"button\"].like {\n            background-image: url(\"/assets/icons/icon-like.svg\"); }\n\n.employee-card .body .controls .control input[type=\"button\"].favorite {\n            background-image: url(\"/assets/icons/icon-favorite.svg\"); }\n\n.employee-card .body .controls .control input[type=\"button\"].favorite-black {\n            background-image: url(\"/assets/icons/icon-favorite-black.svg\"); }\n\n.employee-card .body .controls .control input[type=\"button\"].connections {\n            background-image: url(\"/assets/icons/icon-connections.svg\"); }\n\n.employee-card .body .controls .control + .control {\n          margin-top: 25px; }\n\n.employee-card .body .left-side {\n      min-width: 250px; }\n\n.employee-card .body .right-side {\n      padding-left: 8%; }\n\n.employee-card .body .row + .row {\n      margin-top: 12px; }\n\n.employee-card .body .row .title {\n      margin-bottom: 12px; }\n\n.employee-card .body .row a {\n      color: #dd1e25;\n      text-decoration: none; }\n\n.additional-info {\n  margin-left: 25px;\n  font-size: 0;\n  padding: 0 35px;\n  box-sizing: border-box; }\n\n.additional-info .left-side,\n  .additional-info .right-side {\n    display: inline-block;\n    vertical-align: top;\n    width: 50%;\n    box-sizing: border-box; }\n\n.additional-info .left-side {\n    padding-right: 35px; }\n\n.additional-info h3 {\n    font-size: 16px;\n    font-weight: 600;\n    color: #050505;\n    margin-bottom: 35px; }\n\n.additional-info .thanks-list .thanks {\n    position: relative;\n    display: table;\n    table-layout: auto;\n    height: 55px;\n    width: 100%;\n    border-collapse: collapse;\n    box-sizing: border-box; }\n\n.additional-info .thanks-list .thanks .count,\n    .additional-info .thanks-list .thanks .info,\n    .additional-info .thanks-list .thanks .employees {\n      display: table-cell;\n      vertical-align: middle;\n      box-sizing: border-box;\n      width: auto; }\n\n.additional-info .thanks-list .thanks + .thanks {\n      margin-top: 25px; }\n\n.additional-info .thanks-list .thanks .count {\n      width: 65px;\n      font-size: 34px;\n      color: #898888;\n      text-align: center;\n      padding: 0 5px;\n      box-sizing: border-box; }\n\n.additional-info .thanks-list .thanks .reward {\n      display: table;\n      table-layout: fixed;\n      height: 100%;\n      width: 100%;\n      border-collapse: collapse; }\n\n.additional-info .thanks-list .thanks .reward .icon,\n      .additional-info .thanks-list .thanks .reward .text {\n        display: table-cell;\n        vertical-align: middle;\n        box-sizing: border-box;\n        font-size: 14px;\n        color: #4D4E4D;\n        width: auto; }\n\n.additional-info .thanks-list .thanks .reward .icon {\n        width: 55px; }\n\n.additional-info .thanks-list .thanks .reward .icon i {\n          display: block;\n          height: 100%;\n          border-radius: 100%;\n          background-color: #DEDFE0; }\n\n.additional-info .thanks-list .thanks .reward .text {\n        padding-left: 15px; }\n\n.additional-info .thanks-list .thanks .reward .text span {\n          display: block;\n          max-width: 150px; }\n\n.additional-info .thanks-list .thanks .employees {\n      width: 145px;\n      font-size: 0; }\n\n.additional-info .thanks-list .thanks .employees .employee {\n        display: inline-block;\n        vertical-align: middle; }\n\n.additional-info .thanks-list .thanks .employees .employee + .employee {\n          margin-left: -10px; }\n"

/***/ }),

/***/ "./src/app/phonebook/components/profile-page/profile-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/phonebook/components/profile-page/profile-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(route, sidebarService, employeesFactory, sharepointService) {
        this.route = route;
        this.sidebarService = sidebarService;
        this.employeesFactory = employeesFactory;
        this.sharepointService = sharepointService;
        this.employeeSubscription = null;
        this.thanksList = [
            {
                reward: {
                    title: 'За оперативное решение вопроса',
                    icon: 'assets/icons/thanks/icon-1.svg'
                },
                count: 2,
                employees: [
                    {
                        id: 1,
                        photo: 'assets/photos/photo-female.png'
                    },
                    {
                        id: 1,
                        photo: 'assets/photos/photo-male.png'
                    }
                ]
            },
            {
                reward: {
                    title: 'За вежливость',
                    icon: 'assets/icons/thanks/icon-2.svg'
                },
                count: 15,
                employees: [
                    {
                        id: 1,
                        photo: 'assets/photos/photo-female.png'
                    },
                    {
                        id: 1,
                        photo: 'assets/photos/photo-male.png'
                    }
                ]
            },
            {
                reward: {
                    title: 'За решение нетривиальной задачи',
                    icon: 'assets/icons/thanks/icon-3.svg'
                },
                count: 22,
                employees: [
                    {
                        id: 1,
                        photo: 'assets/photos/photo-female.png'
                    },
                    {
                        id: 1,
                        photo: 'assets/photos/photo-male.png'
                    }
                ]
            },
            {
                reward: {
                    title: 'За оперативное решение вопроса',
                    icon: 'assets/icons/thanks/icon-4.svg'
                },
                count: 5,
                employees: [
                    {
                        id: 1,
                        photo: 'assets/photos/photo-female.png'
                    },
                    {
                        id: 1,
                        photo: 'assets/photos/photo-male.png'
                    }
                ]
            },
            {
                reward: {
                    title: 'За вежливость',
                    icon: 'assets/icons/thanks/icon-5.svg'
                },
                count: 8,
                employees: [
                    {
                        id: 1,
                        photo: 'assets/photos/photo-female.png'
                    },
                    {
                        id: 1,
                        photo: 'assets/photos/photo-male.png'
                    }
                ]
            }
        ];
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
        this.userId = this.sharepointService.getCurrentUserContext().userId;
    }
    ProfilePageComponent.prototype.getEmployeeLink = function (employee) {
        return window.location.protocol + "//" + window.location.host
            + ("" + this.sharepointService.getCurrentUserContext().webServerRelativeUrl)
            + ("/PortalPages/home.aspx#/phonebook/" + employee.id);
    };
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.data.userId;
        this.employeeSubscription = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.employee; }))
            .subscribe(function (employee) { return _this.employee = employee; });
    };
    ProfilePageComponent.prototype.toggleLike = function () {
        var _this = this;
        if (this.employee.likedByIds.indexOf(this.userId) >= 0) {
            this.employeesFactory.removeFavorite(this.employee.id).subscribe();
            this.employee.likedByIds = this.employee.likedByIds.filter(function (l) { return l !== _this.userId; });
        }
        else {
            this.employeesFactory.addFavorite(this.employee.id).subscribe();
            this.employee.likedByIds.push(this.userId);
        }
    };
    ProfilePageComponent.prototype.ngOnDestroy = function () {
        if (this.employeeSubscription != null) {
            this.employeeSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfilePageComponent.prototype, "thanksList", void 0);
    ProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/phonebook/components/profile-page/profile-page.component.html"),
            styles: [__webpack_require__(/*! ./profile-page.component.scss */ "./src/app/phonebook/components/profile-page/profile-page.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"], Object, src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_4__["SharepointService"]])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/phonebook/phonebook-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/phonebook/phonebook-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PhonebookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonebookRoutingModule", function() { return PhonebookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_phonebook_page_phonebook_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/phonebook-page/phonebook-page.component */ "./src/app/phonebook/components/phonebook-page/phonebook-page.component.ts");
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "./src/app/phonebook/components/profile-page/profile-page.component.ts");
/* harmony import */ var src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/security/current-user-id.resolver */ "./src/app/services/security/current-user-id.resolver.ts");
/* harmony import */ var _services_employees_employees_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/employees/employees.resolver */ "./src/app/phonebook/services/employees/employees.resolver.ts");
/* harmony import */ var _services_employees_current_employee_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/employees/current-employee.resolver */ "./src/app/phonebook/services/employees/current-employee.resolver.ts");
/* harmony import */ var _services_departments_departments_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/departments/departments.resolver */ "./src/app/phonebook/services/departments/departments.resolver.ts");
/* harmony import */ var _services_employees_employee_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/employees/employee.resolver */ "./src/app/phonebook/services/employees/employee.resolver.ts");
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
        component: _components_phonebook_page_phonebook_page_component__WEBPACK_IMPORTED_MODULE_2__["PhonebookPageComponent"],
        // canActivate : [MsalGuard],
        resolve: {
            employees: _services_employees_employees_resolver__WEBPACK_IMPORTED_MODULE_5__["EmployeesResolver"], departments: _services_departments_departments_resolver__WEBPACK_IMPORTED_MODULE_7__["DepartmentsResolver"],
            currentEmployee: _services_employees_current_employee_resolver__WEBPACK_IMPORTED_MODULE_6__["CurrentEmployeeResolver"], userId: src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_4__["CurrentUserIdResolver"]
        },
        data: { animation: 'fadeAnimation', title: 'Телефонный справочник' }
    },
    {
        path: ':id',
        component: _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ProfilePageComponent"],
        // canActivate : [MsalGuard],
        resolve: { employee: _services_employees_employee_resolver__WEBPACK_IMPORTED_MODULE_8__["EmployeeResolver"], userId: src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_4__["CurrentUserIdResolver"] },
        data: { animation: 'fadeAnimation', title: 'Профиль пользователя' }
    }
];
var PhonebookRoutingModule = /** @class */ (function () {
    function PhonebookRoutingModule() {
    }
    PhonebookRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [_services_employees_employees_resolver__WEBPACK_IMPORTED_MODULE_5__["EmployeesResolver"], _services_departments_departments_resolver__WEBPACK_IMPORTED_MODULE_7__["DepartmentsResolver"], _services_employees_current_employee_resolver__WEBPACK_IMPORTED_MODULE_6__["CurrentEmployeeResolver"], src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_4__["CurrentUserIdResolver"], _services_employees_employee_resolver__WEBPACK_IMPORTED_MODULE_8__["EmployeeResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PhonebookRoutingModule);
    return PhonebookRoutingModule;
}());



/***/ }),

/***/ "./src/app/phonebook/phonebook.module.ts":
/*!***********************************************!*\
  !*** ./src/app/phonebook/phonebook.module.ts ***!
  \***********************************************/
/*! exports provided: PhonebookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonebookModule", function() { return PhonebookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _phonebook_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phonebook-routing.module */ "./src/app/phonebook/phonebook-routing.module.ts");
/* harmony import */ var _components_phonebook_page_phonebook_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/phonebook-page/phonebook-page.component */ "./src/app/phonebook/components/phonebook-page/phonebook-page.component.ts");
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "./src/app/phonebook/components/profile-page/profile-page.component.ts");
/* harmony import */ var _staff_staff_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../staff/staff.module */ "./src/app/staff/staff.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PhonebookModule = /** @class */ (function () {
    function PhonebookModule() {
    }
    PhonebookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_phonebook_page_phonebook_page_component__WEBPACK_IMPORTED_MODULE_4__["PhonebookPageComponent"],
                _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _phonebook_routing_module__WEBPACK_IMPORTED_MODULE_3__["PhonebookRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _staff_staff_module__WEBPACK_IMPORTED_MODULE_6__["StaffModule"]
            ]
        })
    ], PhonebookModule);
    return PhonebookModule;
}());



/***/ }),

/***/ "./src/app/phonebook/services/employees/current-employee.resolver.ts":
/*!***************************************************************************!*\
  !*** ./src/app/phonebook/services/employees/current-employee.resolver.ts ***!
  \***************************************************************************/
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

/***/ "./src/app/phonebook/services/employees/employee.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/phonebook/services/employees/employee.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeResolver", function() { return EmployeeResolver; });
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

var EmployeeResolver = /** @class */ (function () {
    function EmployeeResolver(employeesFactory) {
        this.employeesFactory = employeesFactory;
    }
    EmployeeResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        return this.employeesFactory.getEmployeeById(id);
    };
    EmployeeResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __metadata("design:paramtypes", [Object])
    ], EmployeeResolver);
    return EmployeeResolver;
}());



/***/ }),

/***/ "./src/app/phonebook/services/employees/employees.resolver.ts":
/*!********************************************************************!*\
  !*** ./src/app/phonebook/services/employees/employees.resolver.ts ***!
  \********************************************************************/
/*! exports provided: EmployeesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesResolver", function() { return EmployeesResolver; });
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

var EmployeesResolver = /** @class */ (function () {
    function EmployeesResolver(employeesFactory) {
        this.employeesFactory = employeesFactory;
    }
    EmployeesResolver.prototype.resolve = function (route, state) {
        return this.employeesFactory.search();
    };
    EmployeesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __metadata("design:paramtypes", [Object])
    ], EmployeesResolver);
    return EmployeesResolver;
}());



/***/ }),

/***/ "./src/app/services/security/current-user-id.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/security/current-user-id.resolver.ts ***!
  \***************************************************************/
/*! exports provided: CurrentUserIdResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserIdResolver", function() { return CurrentUserIdResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentUserIdResolver = /** @class */ (function () {
    function CurrentUserIdResolver(sharepointService) {
        this.sharepointService = sharepointService;
    }
    CurrentUserIdResolver.prototype.resolve = function (route, state) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sharepointService.getCurrentUserContext().userId);
    };
    CurrentUserIdResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__["SharepointService"]])
    ], CurrentUserIdResolver);
    return CurrentUserIdResolver;
}());



/***/ })

}]);
//# sourceMappingURL=phonebook-phonebook-module.js.map