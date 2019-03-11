(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/app/news/components/news-card-gallery/news-card-gallery.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/news/components/news-card-gallery/news-card-gallery.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-news-card-carousel\">\r\n  <div class=\"content\">\r\n    <ngsl-carousel [timing]=\"600\" [dots]=\"false\" [infinity]=\"false\" [perView]=\"items.length && items.length > 3 ? 3 : items.length\" [margin]=\"10\">\r\n      <div class=\"list\">\r\n        <ng-container *ngFor=\"let item of items; let i = index\">\r\n          <ng-container *ngslCarouselItem>\r\n            <div class=\"photo\" (click)=\"ngslGallery.handleToggleGallery(i, $event)\">\r\n              <div\r\n                class=\"content\"\r\n                [ngStyle]=\"{'background-image': 'url(' + prepareLink(item) + ')'}\"\r\n              ></div>\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </ngsl-carousel>\r\n    <ngsl-gallery #ngslGallery=\"ngsl-gallery\">\r\n      <ng-container *ngFor=\"let item of items; let i = index\">\r\n        <div id=\"i\" class=\"m-albom-popup\" *ngslGalleryItem>\r\n          <div class=\"m-news-gallery-popup\">\r\n            <div class=\"content\">\r\n              <div class=\"photo\" [style.backgroundImage]=\"'url(' + item + ')'\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ngsl-gallery>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/news/components/news-card-gallery/news-card-gallery.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/news/components/news-card-gallery/news-card-gallery.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-news-card-carousel {\n  position: relative; }\n\n.l-news-card-carousel:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-bottom: 25%; }\n\n.l-news-card-carousel > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.photo {\n  height: 100%;\n  padding: 0px;\n  box-sizing: border-box;\n  cursor: pointer; }\n\n.photo .content {\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover; }\n\n.m-news-gallery-popup {\n  position: relative; }\n\n.m-news-gallery-popup:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-bottom: 71.42857143%; }\n\n.m-news-gallery-popup > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.m-news-gallery-popup .content {\n    padding: 15px;\n    box-sizing: border-box;\n    background-color: #fff; }\n\n.m-news-gallery-popup .title {\n    font-size: 14px;\n    color: #fff;\n    font-weight: 600;\n    position: absolute;\n    z-index: 10;\n    bottom: -50px;\n    height: 35px;\n    line-height: 35px;\n    display: inline-block;\n    background-color: #000;\n    padding: 0 15px;\n    border-radius: 15px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.m-news-gallery-popup .photo {\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    position: relative; }\n\n.m-news-gallery-popup .photo .controls {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      transition: bottom 0.3s;\n      padding: 15px 20px;\n      box-sizing: border-box;\n      height: 135px;\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(46, 46, 46, 0.8) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03000000', endColorstr='#cc585858', GradientType=0); }\n\n.m-news-gallery-popup .photo .controls .control {\n        position: absolute;\n        right: 20px;\n        bottom: 15px; }\n\n.m-news-gallery-popup .photo .controls .control .btn-download {\n          z-index: 100; }\n\n.m-news-gallery-popup .photo .controls .control .btn-download span {\n            text-transform: uppercase;\n            font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/news/components/news-card-gallery/news-card-gallery.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/news/components/news-card-gallery/news-card-gallery.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewsCardGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCardGalleryComponent", function() { return NewsCardGalleryComponent; });
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

var NewsCardGalleryComponent = /** @class */ (function () {
    function NewsCardGalleryComponent() {
        this.items = [];
    }
    NewsCardGalleryComponent.prototype.ngOnInit = function () {
    };
    NewsCardGalleryComponent.prototype.prepareLink = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)') || null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewsCardGalleryComponent.prototype, "items", void 0);
    NewsCardGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-card-gallery',
            template: __webpack_require__(/*! ./news-card-gallery.component.html */ "./src/app/news/components/news-card-gallery/news-card-gallery.component.html"),
            styles: [__webpack_require__(/*! ./news-card-gallery.component.scss */ "./src/app/news/components/news-card-gallery/news-card-gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsCardGalleryComponent);
    return NewsCardGalleryComponent;
}());



/***/ }),

/***/ "./src/app/news/components/news-card-page/news-card-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/news/components/news-card-page/news-card-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\r\n  <div class=\"l-breadcrumbs\">\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/news']\">Новости</a></div>\r\n    <div class=\"l-breadcrumb\" appNgslDotdotdot>{{ item.title }}</div>\r\n  </div>\r\n  <div class=\"title\">{{ item.title }}</div>\r\n</div>\r\n<div class=\"l-page\">\r\n  <div class=\"l-page-inner\">\r\n    <div class=\"l-page__content\">\r\n      <div class=\"l-news-card\">\r\n        <div class=\"body\">\r\n          <div class=\"description\">\r\n            <div class=\"date\">\r\n              {{ item.newsPublicationDate | date: 'dd.MM.yyyy' }}\r\n            </div>\r\n            <div class=\"controls\">\r\n              <div class=\"views\">{{ this.item.viewsCount || 0 }}</div>\r\n              <div [ngClass]=\"{'likes': !hasLike(), 'likes-on': hasLike()}\" (click)=\"toggleLike()\">{{\r\n                this.item.likesCount }}</div>\r\n            </div>\r\n            <div class=\"text\" [innerHTML]=\"item.newsBody\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"photo\" [ngStyle]=\"{'background-image': 'url(' + prepareLink(item.imageUrl) + ')'}\">\r\n        </div>\r\n        <div class=\"gallery\">\r\n          <div class=\"title\"><span>Галерея</span></div>\r\n          <div class=\"carousel\" *ngIf=\"item.attachmentFiles.length > 0\">\r\n            <app-news-card-gallery [items]=\"item.attachmentFiles\"></app-news-card-gallery>\r\n          </div>\r\n        </div>\r\n        <div class=\"button\">\r\n          <a [routerLink]=\"['/news']\" class=\"btn btn-to-back\">\r\n            <i></i> К списку новостей\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-button-up></app-button-up>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/news/components/news-card-page/news-card-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/news/components/news-card-page/news-card-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-breadcrumb:last-child {\n  max-width: 450px;\n  max-height: 16px; }\n\n.l-news-card {\n  max-width: 1065px;\n  padding-left: 25px;\n  padding-top: 0;\n  box-sizing: border-box; }\n\n.photo {\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  width: 350px;\n  height: 230px;\n  position: relative;\n  vertical-align: top; }\n\n.body {\n  display: inline-block;\n  width: calc(100% - 350px);\n  padding-right: 30px;\n  box-sizing: border-box; }\n\n.description {\n  min-height: 250px; }\n\n.description .text {\n    margin-bottom: 35px;\n    color: #050505;\n    font-size: 14px;\n    line-height: 26px;\n    line-height: 34px; }\n\n@media (min-width: 1440px) {\n      .description .text {\n        font-size: calc( 0.00833333 * 100vw + 2px);\n        line-height: calc( 0.00833333 * 100vw + 14px); } }\n\n@media (min-width: 1920px) {\n      .description .text {\n        font-size: 18px;\n        line-height: 30px; } }\n\n.description .date {\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin-bottom: 15px;\n    display: inline-block;\n    text-transform: uppercase;\n    color: #050505; }\n\n.description .controls {\n    display: inline-block; }\n\n.description .controls .views,\n    .description .controls .comments,\n    .description .controls .likes,\n    .description .controls .likes-on {\n      display: inline-block;\n      background-size: 25px 16px;\n      background-repeat: no-repeat;\n      background-position: left;\n      padding-left: 35px;\n      font-size: 16px;\n      color: #000000;\n      margin-left: 25px; }\n\n.description .controls .views {\n      background-image: url(\"/local/js/assets/icons/icon-news-eye.svg\"); }\n\n.description .controls .likes {\n      background-image: url(\"/local/js/assets/icons/icon-news-like-thin.svg\");\n      cursor: pointer; }\n\n.description .controls .likes-on {\n      background-image: url(\"/local/js/assets/icons/icon-news-like-on.svg\");\n      cursor: pointer; }\n\n.gallery .title {\n  position: relative;\n  box-sizing: border-box;\n  margin-bottom: 20px; }\n\n.gallery .title:before {\n    position: absolute;\n    content: \"\";\n    display: block;\n    left: 130px;\n    right: 0;\n    bottom: 0;\n    height: 1px;\n    background-color: #B7BAB7; }\n\n.gallery .title span {\n    font-size: 24px;\n    line-height: 18px;\n    color: #050505;\n    font-weight: 600; }\n\n.button {\n  margin: 30px 0; }\n"

/***/ }),

/***/ "./src/app/news/components/news-card-page/news-card-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/news/components/news-card-page/news-card-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewsCardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCardPageComponent", function() { return NewsCardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news/news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/news-comments/news-comments.service */ "./src/app/services/news-comments/news-comments.service.ts");
/* harmony import */ var src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/news-views/news-views.service */ "./src/app/services/news-views/news-views.service.ts");
/* harmony import */ var src_app_constants_groups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants/groups */ "./src/app/constants/groups.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsCardPageComponent = /** @class */ (function () {
    function NewsCardPageComponent(route, sidebarService, newsService, newsCommentsService, newsViewsService) {
        this.route = route;
        this.sidebarService = sidebarService;
        this.newsService = newsService;
        this.newsCommentsService = newsCommentsService;
        this.newsViewsService = newsViewsService;
        this.isAdmin = false;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    NewsCardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.item = this.route.snapshot.data.newsCard;
        this.userId = this.route.snapshot.data.userId;
        var currentGroups = this.route.snapshot.data.groups;
        if (currentGroups.indexOf(src_app_constants_groups__WEBPACK_IMPORTED_MODULE_6__["groups"].administrator) >= 0) {
            this.isAdmin = true;
        }
        this.getComments(this.item.id);
        this.newsViewsService.getItems({ filter: "slLookupNews/Id eq " + this.item.id })
            .subscribe(function (views) {
            if (views && views.length > 0) {
                _this.item.viewsCount = views[0].count;
                if (views[0].userIds.every(function (id) { return id !== _this.userId; })) {
                    _this.newsViewsService.addLike({ id: views[0].id });
                }
            }
            else {
                _this.newsViewsService.createItem({
                    id: undefined,
                    title: _this.item.title,
                    newsLookupId: _this.item.id
                })
                    .subscribe(function (view) { return _this.newsViewsService.addLike({ id: view.id }); });
            }
        });
    };
    NewsCardPageComponent.prototype.createComment = function (comment) {
        var _this = this;
        this.newsCommentsService.createItem({
            id: undefined,
            title: this.item.title,
            newsLookupId: this.item.id,
            comment: comment
        }).subscribe(function () { return _this.getComments(_this.item.id); });
    };
    NewsCardPageComponent.prototype.editComment = function (comment) {
        var _this = this;
        this.newsCommentsService.updateItem({
            id: comment[0],
            title: this.item.title,
            newsLookupId: this.item.id,
            comment: comment[1]
        }).subscribe(function () { return _this.getComments(_this.item.id); });
    };
    NewsCardPageComponent.prototype.deleteComment = function (id) {
        var _this = this;
        this.newsCommentsService.deleteItem({ id: id, title: '' })
            .subscribe(function () { return _this.getComments(_this.item.id); });
    };
    NewsCardPageComponent.prototype.getComments = function (newsId) {
        var _this = this;
        this.newsCommentsService.getItems({ filter: "slLookupNews/Id eq " + this.item.id })
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    NewsCardPageComponent.prototype.toggleLike = function () {
        var _this = this;
        if (this.item.likedByIds.indexOf(this.userId) >= 0) {
            this.newsService.removeLike({ id: this.item.id }).subscribe();
            this.item.likesCount--;
            this.item.likedByIds = this.item.likedByIds.filter(function (l) { return l !== _this.userId; });
        }
        else {
            this.newsService.addLike({ id: this.item.id }).subscribe();
            this.item.likesCount++;
            this.item.likedByIds.push(this.userId);
        }
    };
    NewsCardPageComponent.prototype.hasLike = function () {
        return this.item.likedByIds.indexOf(this.userId) >= 0;
    };
    NewsCardPageComponent.prototype.prepareLink = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)') || null;
    };
    NewsCardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-card-page',
            template: __webpack_require__(/*! ./news-card-page.component.html */ "./src/app/news/components/news-card-page/news-card-page.component.html"),
            styles: [__webpack_require__(/*! ./news-card-page.component.scss */ "./src/app/news/components/news-card-page/news-card-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"],
            src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"],
            src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_4__["NewsCommentsService"],
            src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_5__["NewsViewsService"]])
    ], NewsCardPageComponent);
    return NewsCardPageComponent;
}());



/***/ }),

/***/ "./src/app/news/components/news-page/news-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/news/components/news-page/news-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\r\n  <div class=\"l-breadcrumbs\">\r\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\r\n    <div class=\"l-breadcrumb\">Новости</div>\r\n  </div>\r\n  <div class=\"title\">Новости</div>\r\n</div>\r\n<div class=\"l-page\">\r\n  <div class=\"l-page-inner\">\r\n    <div class=\"l-page__content\">\r\n      <div class=\"l-news\">\r\n        <div class=\"l-new-categories\">\r\n          <app-filters>\r\n            <app-filters-item (click)=\"filterByRubricId()\">\r\n              Все\r\n            </app-filters-item>\r\n            <app-filters-item *ngFor=\"let rubric of rubrics\" (click)=\"filterByRubricId(rubric.id)\">\r\n              {{ rubric.title }}\r\n            </app-filters-item>\r\n          </app-filters>\r\n        </div>\r\n        <div class=\"l-news__item\" *ngFor=\"let item of news\">\r\n          <div class=\"m-news-card\">\r\n            <div class=\"admin-controls\">\r\n              <app-admin-controls [item]=\"item\" (create)=\"create()\" (edit)=\"edit($event)\" (remove)=\"remove($event)\"></app-admin-controls>\r\n            </div>\r\n            <div class=\"thumb\" [routerLink]=\"['/news/' + item.id]\" [ngStyle]=\"{'background-image': 'url(' + prepareLink(item.imageUrl) + ')'}\">\r\n            </div>\r\n            <div class=\"content\">\r\n              <a class=\"title\" [routerLink]=\"['/news/' + item.id]\" appNgslDotdotdot>{{ item.title }}</a>\r\n              <div class=\"date\">{{ item.newsPublicationDateTitle }}</div>\r\n              <div class=\"controls\">\r\n                <div class=\"views\">{{ item.viewsCount }}</div>\r\n                <div [ngClass]=\"{'likes': !hasLike(item), 'likes-on': hasLike(item)}\"\r\n                     (click)=\"toggleLike(item)\">{{ item.likesCount }}</div>\r\n              </div>\r\n              <div class=\"text\" appNgslDotdotdot [innerHTML]=\"item.newsBody\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"l-news__navigation\">\r\n          <input type=\"button\" value=\"В начало\" class=\"go-to-start\" (click)=\"hasPrev && filterNews()\" [class.disabled]=\"!hasPrev\" />\r\n          <input type=\"button\" class=\"go-to-left\" (click)=\"getPrevNews()\" [class.disabled]=\"!hasPrev\" />\r\n          <input type=\"button\" class=\"go-to-right\" (click)=\"getNextNews()\" [class.disabled]=\"!hasNext\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/news/components/news-page/news-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/news/components/news-page/news-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-news {\n  max-width: 1065px;\n  padding: 50px 25px;\n  box-sizing: border-box;\n  position: relative; }\n\n.l-news .l-new-categories {\n    height: 30px;\n    position: absolute;\n    top: -30px; }\n\n.l-news .l-news__navigation {\n    margin-top: 80px;\n    text-align: center; }\n\n.l-news .l-news__navigation .go-to-start,\n    .l-news .l-news__navigation .go-to-left,\n    .l-news .l-news__navigation .go-to-right {\n      margin: 0;\n      padding: 0;\n      border: none;\n      min-width: 0;\n      vertical-align: middle;\n      cursor: pointer; }\n\n.l-news .l-news__navigation .go-to-start {\n      color: #768692;\n      font-size: 18px;\n      background: none;\n      margin-right: 35px; }\n\n.l-news .l-news__navigation .go-to-left,\n    .l-news .l-news__navigation .go-to-right {\n      width: 50px;\n      height: 50px;\n      background-color: #768692;\n      background-size: 27px 27px;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-image: url(/local/js/assets/icons/icon-arrow-right-white-thin.svg); }\n\n.l-news .l-news__navigation .go-to-left {\n      -webkit-transform: rotate(180deg);\n          -ms-transform: rotate(180deg);\n              transform: rotate(180deg);\n      margin-right: 25px; }\n\n.l-news .l-news__navigation .disabled {\n      opacity: 0.4; }\n\n.l-news__item {\n  margin-bottom: 50px; }\n\n.m-news-card {\n  padding-left: 340px;\n  box-sizing: border-box;\n  position: relative;\n  min-height: 200px; }\n\n.m-news-card .thumb {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 300px;\n    height: 200px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    cursor: pointer; }\n\n.m-news-card .thumb:hover {\n      opacity: 0.9; }\n\n.m-news-card .content .date {\n    display: inline-block;\n    font-size: 16px;\n    color: #050505;\n    margin-bottom: 10px;\n    text-transform: uppercase; }\n\n.m-news-card .content .controls {\n    display: inline-block;\n    font-size: 16px;\n    color: #050505;\n    margin-left: 25px; }\n\n.m-news-card .content .controls .views,\n    .m-news-card .content .controls .likes,\n    .m-news-card .content .controls .likes-on {\n      display: inline-block;\n      background-repeat: no-repeat;\n      background-position: left;\n      padding-left: 35px; }\n\n.m-news-card .content .controls .views {\n      background-image: url(/local/js/assets/icons/icon-news-eye-black.svg);\n      background-size: 27px 15px;\n      margin-right: 25px; }\n\n.m-news-card .content .controls .likes {\n      background-image: url(/local/js/assets/icons/icon-news-like-thin.svg);\n      background-size: 18px 18px;\n      padding-left: 25px;\n      cursor: pointer; }\n\n.m-news-card .content .controls .likes-on {\n      background-image: url(\"/local/js/assets/icons/icon-like-red-on.svg\");\n      background-size: 18px 18px;\n      cursor: pointer; }\n\n.m-news-card .content .title {\n    display: block;\n    text-decoration: none;\n    color: #050505;\n    font-weight: bold;\n    margin-bottom: 15px;\n    font-size: 22px;\n    line-height: 32px;\n    max-height: 64px; }\n\n@media screen and (max-width: 1440px) {\n      .m-news-card .content .title {\n        font-size: 18px;\n        line-height: 28px;\n        max-height: 56px; } }\n\n.m-news-card .content .title:hover {\n      color: #dd1e25; }\n\n.m-news-card .content .text {\n    color: #050505;\n    font-size: 16px;\n    line-height: 30px;\n    max-height: 120px; }\n\n@media screen and (max-width: 1440px) {\n      .m-news-card .content .text {\n        font-size: 14px;\n        line-height: 28px;\n        max-height: 112px; } }\n"

/***/ }),

/***/ "./src/app/news/components/news-page/news-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/news/components/news-page/news-page.component.ts ***!
  \******************************************************************/
/*! exports provided: NewsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageComponent", function() { return NewsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news/news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/news-views/news-views.service */ "./src/app/services/news-views/news-views.service.ts");
/* harmony import */ var src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/news-comments/news-comments.service */ "./src/app/services/news-comments/news-comments.service.ts");
/* harmony import */ var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/portal/portal.service */ "./src/app/services/portal/portal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsPageComponent = /** @class */ (function () {
    function NewsPageComponent(newsService, route, sidebarService, newsViewsService, newsCommentsService, sharepointService) {
        this.newsService = newsService;
        this.route = route;
        this.sidebarService = sidebarService;
        this.newsViewsService = newsViewsService;
        this.newsCommentsService = newsCommentsService;
        this.sharepointService = sharepointService;
        this.rubrics = [];
        this.top = 10;
        this.pages = [];
        this.index = 0;
        this.news = [];
        this.hasPrev = false;
        this.hasNext = false;
        this.rubricId = null;
        this.userId = null;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    NewsPageComponent.prototype.ngOnInit = function () {
        this.rubrics = this.route.snapshot.data.newsRubrics;
        this.pages.push(this.route.snapshot.data.news);
        this.news = this.route.snapshot.data.news.items;
        this.loadViewsAndComments(this.news);
        this.hasNext = this.route.snapshot.data.news.hasNext;
        this.userId = this.route.snapshot.data.userId;
    };
    NewsPageComponent.prototype.getNextNews = function () {
        var _this = this;
        if (this.hasNext) {
            if (this.index === (this.pages.length - 1)) {
                this.pages[this.index]
                    .getNext()
                    .subscribe(function (page) {
                    _this.index++;
                    _this.news = page.items;
                    _this.hasNext = page.hasNext;
                    _this.hasPrev = true;
                    _this.pages.push(page);
                    _this.loadViewsAndComments(_this.news);
                });
            }
            else {
                this.index++;
                this.news = this.pages[this.index].items;
                this.hasNext = this.pages[this.index].hasNext;
                this.hasPrev = true;
            }
        }
    };
    NewsPageComponent.prototype.getPrevNews = function () {
        if (this.hasPrev) {
            this.index--;
            this.news = this.pages[this.index].items;
            this.hasNext = true;
            this.hasPrev = this.index > 0;
        }
    };
    NewsPageComponent.prototype.filterByRubricId = function (id) {
        this.rubricId = id;
        this.filterNews();
    };
    NewsPageComponent.prototype.filterNews = function () {
        var _this = this;
        var filter = (this.rubricId && "slNewsRubricLookup/Id eq " + this.rubricId + " and ") || '';
        this.index = 0;
        this.news = [];
        this.pages = [];
        this.hasPrev = false;
        this.hasNext = false;
        this.newsService
            .getItemsPaged({
            filter: filter + "slNewsPublicationDate le datetime'" + new Date().toISOString() + "'",
            top: this.top
        })
            .subscribe(function (page) {
            _this.pages.push(page);
            _this.news = page.items;
            _this.hasNext = page.hasNext;
            _this.loadViewsAndComments(_this.news);
        });
    };
    NewsPageComponent.prototype.loadViewsAndComments = function (news) {
        var _this = this;
        var filter = '';
        if (news.length > 0) {
            for (var _i = 0, news_1 = news; _i < news_1.length; _i++) {
                var n = news_1[_i];
                filter += "slLookupNews/Id eq " + n.id + " or ";
            }
            filter = filter.slice(0, -4);
            this.newsCommentsService.getItems({ filter: filter, top: 5000 })
                .subscribe(function (comments) {
                var _loop_1 = function (n) {
                    n.commentsCount = comments.filter(function (c) { return c.newsLookupId === n.id; }).length;
                };
                for (var _i = 0, _a = _this.news; _i < _a.length; _i++) {
                    var n = _a[_i];
                    _loop_1(n);
                }
            });
            this.newsViewsService.getItems({ filter: filter, top: 5000 })
                .subscribe(function (views) {
                var _loop_2 = function (n) {
                    var view = views.filter(function (c) { return c.newsLookupId === n.id; });
                    if (view && view.length > 0) {
                        n.viewsCount = view[0].count;
                    }
                    else {
                        n.viewsCount = 0;
                    }
                };
                for (var _i = 0, _a = _this.news; _i < _a.length; _i++) {
                    var n = _a[_i];
                    _loop_2(n);
                }
            });
        }
    };
    NewsPageComponent.prototype.toggleLike = function (item) {
        var _this = this;
        if (item.likedByIds.indexOf(this.userId) >= 0) {
            this.newsService.removeLike({ id: item.id }).subscribe();
            item.likedByIds = item.likedByIds.filter(function (l) { return l !== _this.userId; });
            item.likesCount--;
        }
        else {
            this.newsService.addLike({ id: item.id }).subscribe();
            item.likedByIds.push(this.userId);
            item.likesCount++;
        }
    };
    NewsPageComponent.prototype.hasLike = function (item) {
        return item.likedByIds.indexOf(this.userId) >= 0;
    };
    NewsPageComponent.prototype.prepareLink = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)') || null;
    };
    NewsPageComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + '/Lists/slNews/NewForm.aspx?Source='
            + encodeURIComponent(window.location.href);
    };
    NewsPageComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + ("/Lists/slNews/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    NewsPageComponent.prototype.remove = function (item) {
        var _this = this;
        this.newsService.recycleItem(item)
            .subscribe(function () { return _this.filterByRubricId(); });
    };
    NewsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-page',
            template: __webpack_require__(/*! ./news-page.component.html */ "./src/app/news/components/news-page/news-page.component.html"),
            styles: [__webpack_require__(/*! ./news-page.component.scss */ "./src/app/news/components/news-page/news-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"],
            src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_4__["NewsViewsService"],
            src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_5__["NewsCommentsService"],
            src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_6__["PortalService"]])
    ], NewsPageComponent);
    return NewsPageComponent;
}());



/***/ }),

/***/ "./src/app/news/news-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/news/news-routing.module.ts ***!
  \*********************************************/
/*! exports provided: NewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/news-page/news-page.component */ "./src/app/news/components/news-page/news-page.component.ts");
/* harmony import */ var _components_news_card_page_news_card_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/news-card-page/news-card-page.component */ "./src/app/news/components/news-card-page/news-card-page.component.ts");
/* harmony import */ var src_app_services_news_rubrics_news_rubrics_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/news-rubrics/news-rubrics.resolver */ "./src/app/services/news-rubrics/news-rubrics.resolver.ts");
/* harmony import */ var src_app_services_news_news_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/news/news.resolver */ "./src/app/services/news/news.resolver.ts");
/* harmony import */ var src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/security/current-user-id.resolver */ "./src/app/services/security/current-user-id.resolver.ts");
/* harmony import */ var src_app_services_news_news_card_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/news/news-card.resolver */ "./src/app/services/news/news-card.resolver.ts");
/* harmony import */ var src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/security/groups.resolver */ "./src/app/services/security/groups.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _components_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_2__["NewsPageComponent"],
        resolve: { news: src_app_services_news_news_resolver__WEBPACK_IMPORTED_MODULE_5__["NewsResolver"], newsRubrics: src_app_services_news_rubrics_news_rubrics_resolver__WEBPACK_IMPORTED_MODULE_4__["NewsRubricsResolver"], userId: src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_6__["CurrentUserIdResolver"] },
        data: { animation: 'fadeAnimation', title: 'Новости' }
    },
    {
        path: ':id',
        component: _components_news_card_page_news_card_page_component__WEBPACK_IMPORTED_MODULE_3__["NewsCardPageComponent"],
        resolve: { newsCard: src_app_services_news_news_card_resolver__WEBPACK_IMPORTED_MODULE_7__["NewsCardResolver"], userId: src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_6__["CurrentUserIdResolver"], groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_8__["GroupsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Новости' }
    }
];
var NewsRoutingModule = /** @class */ (function () {
    function NewsRoutingModule() {
    }
    NewsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_news_news_resolver__WEBPACK_IMPORTED_MODULE_5__["NewsResolver"], src_app_services_news_rubrics_news_rubrics_resolver__WEBPACK_IMPORTED_MODULE_4__["NewsRubricsResolver"], src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_6__["CurrentUserIdResolver"], src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_8__["GroupsResolver"], src_app_services_news_news_card_resolver__WEBPACK_IMPORTED_MODULE_7__["NewsCardResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NewsRoutingModule);
    return NewsRoutingModule;
}());



/***/ }),

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-routing.module */ "./src/app/news/news-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_news_card_gallery_news_card_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/news-card-gallery/news-card-gallery.component */ "./src/app/news/components/news-card-gallery/news-card-gallery.component.ts");
/* harmony import */ var _components_news_card_page_news_card_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/news-card-page/news-card-page.component */ "./src/app/news/components/news-card-page/news-card-page.component.ts");
/* harmony import */ var _components_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/news-page/news-page.component */ "./src/app/news/components/news-page/news-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_news_card_gallery_news_card_gallery_component__WEBPACK_IMPORTED_MODULE_6__["NewsCardGalleryComponent"],
                _components_news_card_page_news_card_page_component__WEBPACK_IMPORTED_MODULE_7__["NewsCardPageComponent"],
                _components_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_8__["NewsPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _news_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/services/news-rubrics/news-rubrics.resolver.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/news-rubrics/news-rubrics.resolver.ts ***!
  \****************************************************************/
/*! exports provided: NewsRubricsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRubricsResolver", function() { return NewsRubricsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_rubrics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-rubrics.service */ "./src/app/services/news-rubrics/news-rubrics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsRubricsResolver = /** @class */ (function () {
    function NewsRubricsResolver(newsRubricsService) {
        this.newsRubricsService = newsRubricsService;
    }
    NewsRubricsResolver.prototype.resolve = function (route, state) {
        return this.newsRubricsService.getItems();
    };
    NewsRubricsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_news_rubrics_service__WEBPACK_IMPORTED_MODULE_1__["NewsRubricsService"]])
    ], NewsRubricsResolver);
    return NewsRubricsResolver;
}());



/***/ }),

/***/ "./src/app/services/news/news-card.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/news/news-card.resolver.ts ***!
  \*****************************************************/
/*! exports provided: NewsCardResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCardResolver", function() { return NewsCardResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.service */ "./src/app/services/news/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsCardResolver = /** @class */ (function () {
    function NewsCardResolver(newsService) {
        this.newsService = newsService;
    }
    NewsCardResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        return this.newsService.getItem({ id: id });
    };
    NewsCardResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], NewsCardResolver);
    return NewsCardResolver;
}());



/***/ }),

/***/ "./src/app/services/news/news.resolver.ts":
/*!************************************************!*\
  !*** ./src/app/services/news/news.resolver.ts ***!
  \************************************************/
/*! exports provided: NewsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsResolver", function() { return NewsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.service */ "./src/app/services/news/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsResolver = /** @class */ (function () {
    function NewsResolver(newsService) {
        this.newsService = newsService;
    }
    NewsResolver.prototype.resolve = function (route, state) {
        return this.newsService.getItemsPaged({ filter: "slNewsPublicationDate le datetime'" + new Date().toISOString() + "'" });
    };
    NewsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], NewsResolver);
    return NewsResolver;
}());



/***/ })

}]);
//# sourceMappingURL=8.js.map