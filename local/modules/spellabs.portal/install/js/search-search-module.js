(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/components/search-results-page/search-results-page.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/search/components/search-results-page/search-results-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">Результаты поиска</div>\n  </div>\n  <div class=\"title\">\n    Результаты поиска\n  </div>\n  <div class=\"l-page-search\">\n    <div class=\"m-search m-search_wide\">\n      <input #searchRef type=\"search\" [(ngModel)]=\"keywords\" (keypress)=\"onKeypress($event)\" />\n    </div>\n  </div>\n  <div class=\"l-page-filters\">\n    <app-filters>\n      <app-filters-item [active]=\"type == 0\" (change)=\"search(0)\">\n        Все\n      </app-filters-item>\n      <app-filters-item [active]=\"type == 1\" (change)=\"search(1)\">\n        Новости\n      </app-filters-item>\n      <app-filters-item [active]=\"type == 2\" (change)=\"search(2)\">\n        Документы\n      </app-filters-item>\n      <app-filters-item [active]=\"type == 3\" (change)=\"search(3)\" style=\"display: none\">\n        Заявки\n      </app-filters-item>\n      <app-filters-item [active]=\"type == 4\" (change)=\"search(4)\">\n        Люди\n      </app-filters-item>\n    </app-filters>\n  </div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-search-result\">\n        <div class=\"l-search-filters\">\n          <div class=\"m-custom-filters\">\n            <div class=\"list\" *ngIf=\"filtersIsVisible\">\n              <div class=\"m-custom-filter\">\n                <div class=\"placeholder\">За все время</div>\n                <div class=\"control\"></div>\n                <div class=\"options\">\n                  <div class=\"option\">За все время</div>\n                  <div class=\"option\">За сегодня</div>\n                  <div class=\"option\">За неделю</div>\n                </div>\n              </div>\n              <div class=\"m-custom-filter\">\n                <div class=\"placeholder\">Город</div>\n                <div class=\"control\"></div>\n                <div class=\"options\">\n                  <div class=\"option\">Владимир</div>\n                  <div class=\"option\">Москва</div>\n                  <div class=\"option\">Сочи</div>\n                </div>\n              </div>\n              <div class=\"m-custom-filter\">Сбросить настройки</div>\n            </div>\n            <div class=\"m-custom-filters__logotype\" (click)=\"handleToggleFilters()\" [class.active]=\"filtersIsVisible\">Инструменты</div>\n          </div>\n        </div>\n        <div class=\"l-search-results__items_empty\" *ngIf=\"result == null || result.PrimarySearchResults.length === 0\">\n          Результаты не найдены\n        </div>\n        <div class=\"l-search-results__items\" *ngIf=\"result && result.PrimarySearchResults.length > 0\">\n          <div class=\"l-search-results__item\" *ngFor=\"let item of result.PrimarySearchResults\">\n            <div class=\"title\">\n              <a (click)=\"goToUrl($event, getLink(item))\">{{ item.Title }}</a>\n            </div>\n            <div class=\"category\">\n              {{getType(item)}}\n            </div>\n            <div class=\"text\" [innerHtml]=\"formatDescription(item)\">\n            </div>\n          </div>\n        </div>\n        <!--<div class=\"l-search-results__navigation\" *ngIf=\"result && result.RowCount > 0\">\n          <div class=\"m-page-nav\">\n            <input type=\"button\" class=\"prev-page\" (click)=\"getPrev()\" [class.disabled]=\"!hasPrev\" />\n            <input type=\"button\" class=\"next-page\" (click)=\"getNext()\" [class.disabled]=\"!hasNext\" />\n          </div>\n        </div>-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/components/search-results-page/search-results-page.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/search/components/search-results-page/search-results-page.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  max-width: 800px;\n  padding-bottom: 0;\n  box-sizing: border-box; }\n\n.l-page-header .title {\n    margin-bottom: 30px; }\n\n.l-page-search {\n  margin-bottom: 35px; }\n\n.l-page-filters {\n  box-sizing: border-box;\n  padding-right: 15%;\n  height: 40px; }\n\n.l-search-result {\n  max-width: 800px;\n  background-color: #FFF;\n  box-sizing: border-box;\n  padding-left: 35px;\n  padding-right: 55px;\n  padding-top: 20px;\n  padding-bottom: 55px; }\n\n.l-search-result .l-page-filters {\n    padding: 0; }\n\n.l-search-result .l-page-filters .m-tabs {\n      width: 500px;\n      display: inline-block; }\n\n.m-search input {\n  height: 50px;\n  width: 400px;\n  border: none;\n  background-image: url(\"/assets/icons/icon-search-red.svg\");\n  background-size: 33px 33px;\n  background-repeat: no-repeat;\n  background-position: left 12px center;\n  padding-left: 50px;\n  outline: none; }\n\n.m-search_wide input {\n  height: 50px;\n  width: 100%;\n  background-position: right 12px center;\n  padding-right: 50px;\n  padding-left: 10px;\n  background-color: #FFFFFF;\n  font-size: 20px;\n  box-sizing: border-box; }\n\n.m-tabs {\n  height: 100%;\n  font-size: 0; }\n\n.m-tabs__line {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.is-inline .m-tabs__line {\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n\n.tab-size-small .m-tabs__line {\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n\n.m-tabs__item {\n  height: 100%;\n  display: inline-block;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #000;\n  padding: 0 10px;\n  border: none;\n  border-bottom: 7px solid transparent;\n  box-sizing: border-box;\n  margin: 0;\n  background-color: transparent;\n  cursor: pointer; }\n\n.tab-size-small .m-tabs__item {\n    text-transform: initial;\n    color: #768692;\n    border-bottom-width: 3px; }\n\n.tab-size-small .m-tabs__item.is-current-item {\n      color: #000;\n      font-weight: 400;\n      border-color: #dd1e25; }\n\n.m-tabs__item.is-current-item {\n    font-weight: 600;\n    border-color: #fda909; }\n\n.theme-black .m-tabs__item.is-current-item {\n      border-color: #da402b; }\n\n.theme-yellow .m-tabs__item.is-current-item {\n      border-color: #ffee00; }\n\n.m-tabs__item:focus {\n    outline: none; }\n\n.l-search-results__item {\n  margin-bottom: 30px; }\n\n.l-search-results__item:last-child {\n    margin-bottom: 0; }\n\n.l-search-results__item .title {\n    margin-bottom: 5px; }\n\n.l-search-results__item .title a {\n      display: block;\n      display: -webkit-box;\n      max-height: 56px;\n      font-size: 18px;\n      line-height: 28px;\n      -webkit-line-clamp: 2;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-decoration: none;\n      color: #050505;\n      font-weight: bold;\n      cursor: pointer; }\n\n.l-search-results__item .category {\n    position: relative;\n    box-sizing: border-box;\n    padding-left: 30px;\n    font-size: 18px;\n    color: #768692; }\n\n.l-search-results__item .category:before {\n      content: '';\n      position: absolute;\n      display: block;\n      width: 18px;\n      left: 0px;\n      top: 9px;\n      height: 2px;\n      background-color: #768692; }\n\n.l-search-results__item .text {\n    font-size: 14px;\n    line-height: 24px;\n    display: -webkit-box;\n    max-height: 48px;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.l-search-results__item .text a {\n      color: #dd1e25; }\n\n.l-search-results__navigation {\n  margin-top: 100px;\n  text-align: center; }\n\n.l-search-results__items_empty {\n  font-size: 16px;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 15px 35px;\n  box-sizing: border-box;\n  text-align: center; }\n\n.m-custom-filters {\n  position: relative; }\n\n.m-custom-filters .list {\n    height: 40px; }\n\n.m-custom-filters .m-custom-filter {\n    display: inline-block;\n    margin-right: 50px;\n    padding-left: 0px;\n    border-radius: 0px;\n    color: #768692;\n    border-width: 0px;\n    background-color: #ffffff;\n    font-size: 16px;\n    cursor: pointer;\n    position: relative; }\n\n.m-custom-filters .m-custom-filter:hover {\n      color: #000; }\n\n.m-custom-filters .m-custom-filter:hover .options {\n        display: block; }\n\n.m-custom-filters .m-custom-filter .placeholder {\n      display: inline-block;\n      padding-right: 10px; }\n\n.m-custom-filters .m-custom-filter .control {\n      display: inline-block;\n      width: 15px;\n      height: 15px;\n      background-image: url(/assets/icons/icon-arrow-bottom-gray-solid.svg);\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: 15px 15px;\n      z-index: 2; }\n\n.m-custom-filters .m-custom-filter .options {\n      display: none;\n      position: absolute;\n      top: -13px;\n      left: -50px;\n      border: 1px solid #e7ebef;\n      background-color: #fff;\n      min-width: 200px;\n      padding: 3px;\n      box-sizing: border-box;\n      z-index: 1; }\n\n.m-custom-filters .m-custom-filter .options .option {\n        padding: 10px 0 10px 40px;\n        box-sizing: border-box; }\n\n.m-custom-filters .m-custom-filter .options .option:hover {\n          background-color: #f7f7f7;\n          background-image: url(/assets/icons/icon-check-black.svg);\n          background-repeat: no-repeat;\n          background-size: 12px 10px;\n          background-position: left 15px center; }\n\n.m-custom-filters .m-custom-filters__logotype {\n    color: #768692;\n    font-size: 16px;\n    display: inline-block;\n    position: absolute;\n    top: -60px;\n    right: 0;\n    line-height: 21px;\n    padding-left: 48px;\n    background-position: left 12px center;\n    background-image: url(\"/assets/icons/icon-instruments.svg\");\n    background-repeat: no-repeat;\n    background-size: 22px 15px;\n    cursor: pointer; }\n\n.m-custom-filters .m-custom-filters__logotype.active {\n      color: #050505;\n      background-image: url(\"/assets/icons/icon-instruments-active.svg\"); }\n"

/***/ }),

/***/ "./src/app/search/components/search-results-page/search-results-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/search/components/search-results-page/search-results-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SearchResultsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsPageComponent", function() { return SearchResultsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/search/services/search/search.service.ts");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchResultsPageComponent = /** @class */ (function () {
    function SearchResultsPageComponent(route, sidebarService, sharepointService, searchService, zone, router) {
        this.route = route;
        this.sidebarService = sidebarService;
        this.sharepointService = sharepointService;
        this.searchService = searchService;
        this.zone = zone;
        this.router = router;
        this.showSidebar = false;
        this.type = null;
        this.keywords = null;
        this.filter = null;
        this.hasPrev = false;
        this.hasNext = false;
        this.pages = [];
        this.index = null;
        this.keySubscription = null;
        this.keywordSubscription = null;
        this.resultSubscription = null;
        this.filtersIsVisible = false;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#F7F7F7' });
    }
    SearchResultsPageComponent.prototype.handleToggleFilters = function () {
        this.filtersIsVisible = !this.filtersIsVisible;
    };
    SearchResultsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keywordSubscription = this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.keywords; }))
            .subscribe(function (keywords) { return (_this.keywords = keywords); });
        this.keywordSubscription = this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.type; }))
            .subscribe(function (type) {
            if (type === 'documents') {
                _this.type = _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchType"].Documents;
            }
            else if (type === 'news') {
                _this.type = _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchType"].News;
            }
            else if (type === 'people') {
                _this.type = _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchType"].People;
            }
            else if (type === 'requests') {
                _this.type = _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchType"].Requests;
            }
            else {
                _this.type = _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchType"].Simple;
            }
        });
        this.resultSubscription = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.result; }))
            .subscribe(function (result) { return _this.initSearchResults(result); });
    };
    SearchResultsPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.keySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.searchRef.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) { return e.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (query) {
            if (query && query !== '') {
                _this.searchService.searchByType(_this.type, query);
            }
            else {
                _this.pages = [];
                _this.result = null;
                _this.index = 0;
                _this.hasPrev = false;
                _this.hasNext = false;
            }
        });
    };
    SearchResultsPageComponent.prototype.ngOnDestroy = function () {
        if (this.keywordSubscription != null) {
            this.keywordSubscription.unsubscribe();
        }
        if (this.keySubscription != null) {
            this.keySubscription.unsubscribe();
        }
        if (this.resultSubscription != null) {
            this.resultSubscription.unsubscribe();
        }
    };
    SearchResultsPageComponent.prototype.search = function (type) {
        var _this = this;
        this.type = type;
        this.searchService.searchByType(this.type, this.keywords)
            .subscribe(function (result) { return _this.initSearchResults(result); });
    };
    SearchResultsPageComponent.prototype.onKeypress = function (event) {
        var _this = this;
        if (event.key === 'Enter') {
            this.searchService.searchByType(this.type, this.keywords)
                .subscribe(function (result) { return _this.initSearchResults(result); });
        }
    };
    SearchResultsPageComponent.prototype.getNext = function () {
        var _this = this;
        if (this.hasNext) {
            if (++this.index === (this.pages.length)) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.result.getPage(this.index + 1))
                    .subscribe(function (page) {
                    _this.result = page;
                    _this.hasPrev = true;
                    _this.pages.push(page);
                    var total = 0;
                    _this.pages.forEach(function (p) { return total += p.RowCount; });
                    _this.hasNext = page.TotalRows > total;
                });
            }
            else {
                this.result = this.pages[this.index];
                var total_1 = 0;
                this.pages.slice(0, this.index + 1).forEach(function (p) { return total_1 += p.RowCount; });
                this.hasNext = this.result.TotalRows > total_1;
                this.hasPrev = true;
            }
        }
    };
    SearchResultsPageComponent.prototype.getPrev = function () {
        if (this.hasPrev) {
            this.index--;
            this.result = this.pages[this.index];
            this.hasNext = true;
            this.hasPrev = this.index > 0;
        }
    };
    SearchResultsPageComponent.prototype.getType = function (item) {
        var documents = ['docx', 'doc', 'xlsx', 'xls', 'pdf'];
        if (documents.indexOf(item.FileExtension) >= 0) {
            return 'Документы';
        }
        if (item.OriginalPath && item.OriginalPath.indexOf('/Lists/slNews/') > 0) {
            return 'Новости';
        }
        if (item.OriginalPath && item.OriginalPath.indexOf('/Lists/slEmployees/') > 0) {
            return 'Люди';
        }
        return 'Все';
    };
    SearchResultsPageComponent.prototype.getLink = function (item) {
        var documents = ['docx', 'doc', 'xlsx', 'xls', 'pdf'];
        if (documents.indexOf(item.FileExtension) >= 0) {
            return item.OriginalPath;
        }
        if (item.OriginalPath
            && item.OriginalPath.indexOf('/Lists/slNews/') > 0
            && item.OriginalPath.indexOf('?ID=') > 0) {
            var id = item.OriginalPath.split('?ID=')[1];
            return window.location.protocol + "//" + window.location.host
                + (this.sharepointService.getCurrentUserContext().webServerRelativeUrl + "/PortalPages/home.aspx#/news/" + id);
        }
        if (item.OriginalPath && item.OriginalPath.indexOf('/Lists/slEmployees/') > 0
            && item.OriginalPath.indexOf('?ID=') > 0) {
            var id = item.OriginalPath.split('?ID=')[1];
            return window.location.protocol + "//" + window.location.host
                + (this.sharepointService.getCurrentUserContext().webServerRelativeUrl + "/PortalPages/home.aspx#/phonebook/" + id);
        }
        if (item.OriginalPath && item.OriginalPath.indexOf('/Lists/slVideos/') > 0
            && item.OriginalPath.indexOf('?ID=') > 0) {
            var id = item.OriginalPath.split('?ID=')[1];
            return window.location.protocol + "//" + window.location.host
                + (this.sharepointService.getCurrentUserContext().webServerRelativeUrl + "/PortalPages/home.aspx#/media/video/item/" + id);
        }
        return item.OriginalPath;
    };
    SearchResultsPageComponent.prototype.formatDescription = function (result) {
        return result.HitHighlightedSummary.replace(/c0/gi, 'strong').replace(/<ddd\/>/gi, '&#8230;');
    };
    SearchResultsPageComponent.prototype.goToUrl = function (event, link) {
        var _this = this;
        event.stopPropagation();
        this.zone.run(function () {
            if (window.location.href.indexOf('/PortalPages/') > 0
                && link.indexOf('/PortalPages/') >= 0
                && link.indexOf('#') >= 0) {
                _this.router.navigate([link.split('#')[1]]);
            }
            else {
                window.location.href = link;
            }
        });
    };
    SearchResultsPageComponent.prototype.initSearchResults = function (result) {
        this.pages = [];
        this.pages.push(result);
        this.result = result;
        this.index = 0;
        this.hasPrev = false;
        this.hasNext = this.result.TotalRows > this.result.RowCount;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchResultsPageComponent.prototype, "searchRef", void 0);
    SearchResultsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results-page',
            template: __webpack_require__(/*! ./search-results-page.component.html */ "./src/app/search/components/search-results-page/search-results-page.component.html"),
            styles: [__webpack_require__(/*! ./search-results-page.component.scss */ "./src/app/search/components/search-results-page/search-results-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_6__["SharepointService"],
            _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchResultsPageComponent);
    return SearchResultsPageComponent;
}());



/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search-results-page/search-results-page.component */ "./src/app/search/components/search-results-page/search-results-page.component.ts");
/* harmony import */ var _services_search_keywords_search_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/search/keywords-search.resolver */ "./src/app/search/services/search/keywords-search.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: ':type/:keywords',
        component: _components_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_2__["SearchResultsPageComponent"],
        resolve: { result: _services_search_keywords_search_resolver__WEBPACK_IMPORTED_MODULE_3__["KeywordsSearchResolver"] },
        data: { animation: 'fadeAnimation', title: 'Поиск' }
    }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [_services_search_keywords_search_resolver__WEBPACK_IMPORTED_MODULE_3__["KeywordsSearchResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _components_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-results-page/search-results-page.component */ "./src/app/search/components/search-results-page/search-results-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/search/services/search/keywords-search.resolver.ts":
/*!********************************************************************!*\
  !*** ./src/app/search/services/search/keywords-search.resolver.ts ***!
  \********************************************************************/
/*! exports provided: KeywordsSearchResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeywordsSearchResolver", function() { return KeywordsSearchResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.service */ "./src/app/search/services/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeywordsSearchResolver = /** @class */ (function () {
    function KeywordsSearchResolver(searchService) {
        this.searchService = searchService;
    }
    KeywordsSearchResolver.prototype.resolve = function (route, state) {
        var keywords = route.params.keywords;
        var type = route.params.type;
        var t;
        if (type === 'documents') {
            t = _search_service__WEBPACK_IMPORTED_MODULE_1__["SearchType"].Documents;
        }
        else if (type === 'news') {
            t = _search_service__WEBPACK_IMPORTED_MODULE_1__["SearchType"].News;
        }
        else if (type === 'people') {
            t = _search_service__WEBPACK_IMPORTED_MODULE_1__["SearchType"].People;
        }
        else if (type === 'requests') {
            t = _search_service__WEBPACK_IMPORTED_MODULE_1__["SearchType"].Requests;
        }
        else {
            t = _search_service__WEBPACK_IMPORTED_MODULE_1__["SearchType"].Simple;
        }
        return this.searchService.searchByType(t, keywords);
    };
    KeywordsSearchResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
    ], KeywordsSearchResolver);
    return KeywordsSearchResolver;
}());



/***/ }),

/***/ "./src/app/search/services/search/search.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/search/services/search/search.service.ts ***!
  \**********************************************************/
/*! exports provided: SearchType, SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchType", function() { return SearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/sp */ "./node_modules/@pnp/sp/dist/sp.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchType;
(function (SearchType) {
    SearchType[SearchType["Simple"] = 0] = "Simple";
    SearchType[SearchType["News"] = 1] = "News";
    SearchType[SearchType["Documents"] = 2] = "Documents";
    SearchType[SearchType["Requests"] = 3] = "Requests";
    SearchType[SearchType["People"] = 4] = "People";
})(SearchType || (SearchType = {}));
var SearchService = /** @class */ (function () {
    function SearchService(sharepointService) {
        this.sharepointService = sharepointService;
    }
    SearchService.prototype.getListRelativePath = function () {
        return '';
    };
    SearchService.prototype.keywordsSearch = function (keywords, rowLimit) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_1__["sp"].search({
            Querytext: keywords,
            TrimDuplicates: true,
            RowLimit: rowLimit || 20,
        }));
    };
    SearchService.prototype.peopleSearch = function (keywords, rowLimit) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_1__["sp"].search({
            Querytext: keywords,
            TrimDuplicates: true,
            SourceId: 'B09A7990-05EA-4AF9-81EF-EDFAB16C4E31',
            RowLimit: rowLimit || 20,
        }));
    };
    SearchService.prototype.documentsSearch = function (keywords, rowLimit) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_pnp_sp__WEBPACK_IMPORTED_MODULE_1__["sp"].search({
            Querytext: keywords,
            RefinementFilters: ['or(fileExtension:equals("docx"), fileExtension:equals("doc"), '
                    + 'fileExtension:equals("xls"), fileExtension:equals("xlsx"), fileExtension:equals("pdf"))'],
            TrimDuplicates: true,
            RowLimit: rowLimit || 20,
        }));
    };
    SearchService.prototype.searchByType = function (type, keywords) {
        var result = null;
        switch (type) {
            case SearchType.News:
                result = this.keywordsSearch("path:" + window.location.protocol + "//" + window.location.host
                    + (this.sharepointService.getCurrentUserContext().webServerRelativeUrl + "/Lists/slNews " + keywords));
                break;
            case SearchType.People:
                result = this.keywordsSearch("path:" + window.location.protocol + "//" + window.location.host
                    + (this.sharepointService.getCurrentUserContext().webServerRelativeUrl + "/Lists/slEmployees " + keywords));
                break;
            case SearchType.Requests:
                result = null;
                break;
            case SearchType.Documents:
                result = this.documentsSearch("path:" + window.location.protocol + "//" + window.location.host
                    + (this.sharepointService.getCurrentUserContext().webServerRelativeUrl + " " + keywords));
                break;
            default:
                result = this.keywordsSearch("path:" + window.location.protocol + "//" + window.location.host
                    + (this.sharepointService.getCurrentUserContext().webServerRelativeUrl + " " + keywords));
                break;
        }
        return result;
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__["SharepointService"]])
    ], SearchService);
    return SearchService;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map