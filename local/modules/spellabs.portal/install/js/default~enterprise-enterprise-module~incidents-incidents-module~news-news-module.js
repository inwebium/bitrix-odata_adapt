(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~enterprise-enterprise-module~incidents-incidents-module~news-news-module"],{

/***/ "./src/app/news/components/news-card-gallery/news-card-gallery.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/news/components/news-card-gallery/news-card-gallery.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-news-card-carousel\">\n  <div class=\"content\">\n    <ngsl-carousel [timing]=\"600\" [dots]=\"false\" [infinity]=\"false\" [perView]=\"items.length && items.length > 3 ? 3 : items.length\" [margin]=\"10\">\n      <div class=\"list\">\n        <ng-container *ngFor=\"let item of items; let i = index\">\n          <ng-container *ngslCarouselItem>\n            <div class=\"photo\" (click)=\"ngslGallery.handleToggleGallery(i, $event)\">\n              <div\n                class=\"content\"\n                [ngStyle]=\"{'background-image': 'url(\\'' + prepareLink(item) + '\\')'}\"\n              ></div>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n    </ngsl-carousel>\n    <ngsl-gallery #ngslGallery=\"ngsl-gallery\">\n      <ng-container *ngFor=\"let item of items; let i = index\">\n        <div id=\"i\" class=\"m-albom-popup\" *ngslGalleryItem>\n          <div class=\"m-news-gallery-popup\">\n            <div class=\"content\">\n              <div class=\"photo\" [ngStyle]=\"{'background-image': 'url(\\'' + prepareLink(item) + '\\')'}\"></div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ngsl-gallery>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news/components/news-card-gallery/news-card-gallery.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/news/components/news-card-gallery/news-card-gallery.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-news-card-carousel {\n  position: relative; }\n\n.l-news-card-carousel:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-bottom: 25%; }\n\n.l-news-card-carousel > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.photo {\n  height: 100%;\n  padding: 0px;\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 0 1px; }\n\n.photo .content {\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover; }\n\n.m-news-gallery-popup {\n  position: relative; }\n\n.m-news-gallery-popup:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-bottom: 71.42857143%; }\n\n.m-news-gallery-popup > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.m-news-gallery-popup .content {\n    padding: 15px;\n    box-sizing: border-box;\n    background-color: #fff; }\n\n.m-news-gallery-popup .title {\n    font-size: 14px;\n    color: #fff;\n    font-weight: 600;\n    position: absolute;\n    z-index: 10;\n    bottom: -50px;\n    height: 35px;\n    line-height: 35px;\n    display: inline-block;\n    background-color: #000;\n    padding: 0 15px;\n    border-radius: 15px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.m-news-gallery-popup .photo {\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    position: relative; }\n\n.m-news-gallery-popup .photo .controls {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      transition: bottom 0.3s;\n      padding: 15px 20px;\n      box-sizing: border-box;\n      height: 135px;\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(46, 46, 46, 0.8) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03000000', endColorstr='#cc585858', GradientType=0); }\n\n.m-news-gallery-popup .photo .controls .control {\n        position: absolute;\n        right: 20px;\n        bottom: 15px; }\n\n.m-news-gallery-popup .photo .controls .control .btn-download {\n          z-index: 100; }\n\n.m-news-gallery-popup .photo .controls .control .btn-download span {\n            text-transform: uppercase;\n            font-weight: 400; }\n"

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
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)').replace(/'/gi, '\\\'') || null;
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

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"[ getPathNews(), companyId]\">Новости</a></div>\n    <div class=\"l-breadcrumb\" appNgslDotdotdot>{{ item.title }}</div>\n  </div>\n  <div class=\"title\">{{ item.title }}</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-news-card\">\n        <div class=\"body\">\n          <div class=\"description\">\n            <div class=\"date\">\n              {{ item.newsPublicationDate | date: 'dd.MM.yyyy' }}\n            </div>\n            <div class=\"controls\">\n              <div class=\"views\">{{ this.item.viewsCount || 0 }}</div>\n              <div [ngClass]=\"{'likes': !hasLike(), 'likes-on': hasLike()}\" (click)=\"toggleLike()\">{{\n                this.item.likesCount }}</div>\n            </div>\n            <div class=\"text\" [innerHTML]=\"item.newsBody\"></div>\n          </div>\n        </div>\n        <div class=\"photo\"\n          [ngStyle]=\"{'background-image': 'url(\\'' + prepareLink(item.imageUrl) + '\\')'}\">\n        </div>\n        <div class=\"gallery\" *ngIf=\"item.attachmentFiles && item.attachmentFiles.length > 0\">\n          <div class=\"title\"><span>Галерея</span></div>\n          <div class=\"carousel\">\n            <app-news-card-gallery [items]=\"item.attachmentFiles\"></app-news-card-gallery>\n          </div>\n        </div>\n        <div class=\"button\">\n          <a [routerLink]=\"[ getPathNews(), companyId]\" class=\"btn btn-to-back\">\n            <i></i> К списку новостей\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-button-up></app-button-up>\n</div>\n"

/***/ }),

/***/ "./src/app/news/components/news-card-page/news-card-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/news/components/news-card-page/news-card-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-breadcrumb:last-child {\n  max-width: 450px;\n  max-height: 16px; }\n\n.l-news-card {\n  max-width: 1065px;\n  padding-left: 25px;\n  padding-top: 0;\n  box-sizing: border-box; }\n\n.photo {\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  width: 350px;\n  height: 230px;\n  position: relative;\n  vertical-align: top; }\n\n.body {\n  display: inline-block;\n  width: calc(100% - 350px);\n  padding-right: 30px;\n  box-sizing: border-box; }\n\n.description {\n  min-height: 250px; }\n\n.description .text {\n    margin-bottom: 35px;\n    color: #050505;\n    font-size: 14px;\n    line-height: 26px;\n    line-height: 34px; }\n\n@media (min-width: 1440px) {\n      .description .text {\n        font-size: calc( 0.00833333 * 100vw + 2px);\n        line-height: calc( 0.00833333 * 100vw + 14px); } }\n\n@media (min-width: 1920px) {\n      .description .text {\n        font-size: 18px;\n        line-height: 30px; } }\n\n.description .date {\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin-bottom: 15px;\n    display: inline-block;\n    text-transform: uppercase;\n    color: #050505; }\n\n.description .controls {\n    display: inline-block; }\n\n.description .controls .views,\n    .description .controls .comments,\n    .description .controls .likes,\n    .description .controls .likes-on {\n      display: inline-block;\n      background-size: 25px 16px;\n      background-repeat: no-repeat;\n      background-position: left;\n      padding-left: 35px;\n      font-size: 16px;\n      color: #000000;\n      margin-left: 25px; }\n\n.description .controls .views {\n      background-image: url(\"/assets/icons/icon-news-eye.svg\"); }\n\n.description .controls .likes {\n      background-image: url(\"/assets/icons/icon-news-like-thin.svg\");\n      cursor: pointer; }\n\n.description .controls .likes-on {\n      background-image: url(\"/assets/icons/icon-news-like-on.svg\");\n      cursor: pointer; }\n\n.gallery .title {\n  position: relative;\n  box-sizing: border-box;\n  margin-bottom: 20px; }\n\n.gallery .title:before {\n    position: absolute;\n    content: '';\n    display: block;\n    left: 130px;\n    right: 0;\n    bottom: 0;\n    height: 1px;\n    background-color: #b7bab7; }\n\n.gallery .title span {\n    font-size: 24px;\n    line-height: 18px;\n    color: #050505;\n    font-weight: 600; }\n\n.button {\n  margin: 30px 0; }\n"

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
/* harmony import */ var src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news/news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news-comments/news-comments.service */ "./src/app/services/news-comments/news-comments.service.ts");
/* harmony import */ var src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/news-views/news-views.service */ "./src/app/services/news-views/news-views.service.ts");
/* harmony import */ var src_app_constants_groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/groups */ "./src/app/constants/groups.ts");
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
    function NewsCardPageComponent(route, newsService, newsCommentsService, newsViewsService) {
        this.route = route;
        this.newsService = newsService;
        this.newsCommentsService = newsCommentsService;
        this.newsViewsService = newsViewsService;
        this.isAdmin = false;
        this.companyId = null;
    }
    NewsCardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyId = this.route.snapshot.params.id;
        this.item = this.route.snapshot.data.newsCard;
        this.userId = this.route.snapshot.data.userId;
        var currentGroups = this.route.snapshot.data.groups;
        if (currentGroups.indexOf(src_app_constants_groups__WEBPACK_IMPORTED_MODULE_5__["groups"].administrator) >= 0) {
            this.isAdmin = true;
        }
        this.getComments(this.item.id);
        this.newsViewsService.getItems({ filter: "slLookupNews/Id eq " + this.item.id })
            .subscribe(function (views) {
            if (views && views.length > 0) {
                _this.item.viewsCount = views[0].count;
                if (views[0].userIds.every(function (id) { return id !== _this.userId; })) {
                    _this.newsViewsService.addLike({ id: views[0].id }).subscribe();
                }
            }
            else {
                _this.newsViewsService.createItem({
                    id: undefined,
                    title: _this.item.title,
                    newsLookupId: _this.item.id
                })
                    .subscribe(function (view) { return _this.newsViewsService.addLike({ id: view.id }).subscribe(); });
            }
        });
    };
    NewsCardPageComponent.prototype.getPathNews = function () {
        return this.companyId === 'root' ? '/news' : '/enterprise/news';
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
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)').replace(/'/gi, '\\\'') || null;
    };
    NewsCardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-card-page',
            template: __webpack_require__(/*! ./news-card-page.component.html */ "./src/app/news/components/news-card-page/news-card-page.component.html"),
            styles: [__webpack_require__(/*! ./news-card-page.component.scss */ "./src/app/news/components/news-card-page/news-card-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
            src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_3__["NewsCommentsService"],
            src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_4__["NewsViewsService"]])
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

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">Новости</div>\n  </div>\n  <div class=\"title\">Новости</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-news\">\n        <div class=\"l-new-categories\">\n          <app-filters>\n            <app-filters-item (click)=\"filterByRubricId()\" [active]=\"this.rubricId == null\">\n              Все\n            </app-filters-item>\n            <app-filters-item *ngFor=\"let rubric of rubrics\"\n              (click)=\"filterByRubricId(rubric.id)\" [active]=\"this.rubricId == rubric.id\">\n              {{ rubric.title === 'Событие' ? 'События' : rubric.title }}\n            </app-filters-item>\n          </app-filters>\n        </div>\n        <div class=\"l-news__item\" *ngFor=\"let item of news\">\n          <div class=\"m-news-card\">\n            <div class=\"admin-controls\">\n              <app-admin-controls [item]=\"item\" (create)=\"create()\" (edit)=\"edit($event)\" (remove)=\"remove($event)\"></app-admin-controls>\n            </div>\n            <div class=\"thumb\" [routerLink]=\"[pathToNewsCard(item.id)]\"\n              [ngStyle]=\"{'background-image': 'url(\\'' + prepareLink(item.imageUrl) + '?RenditionID=10\\')'}\">\n            </div>\n            <div class=\"content\">\n              <a class=\"title\" [routerLink]=\"[pathToNewsCard(item.id)]\" appNgslDotdotdot>{{ item.title }}</a>\n              <div class=\"date\">{{ item.newsPublicationDateTitle }}</div>\n              <div class=\"controls\">\n                <div class=\"views\">{{ item.viewsCount }}</div>\n                <div [ngClass]=\"{'likes': !hasLike(item), 'likes-on': hasLike(item)}\"\n                     (click)=\"toggleLike(item)\">{{ item.likesCount }}</div>\n              </div>\n              <div class=\"text-news\" appNgslDotdotdot [innerHTML]=\"item.newsAnnouncement\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"l-news__navigation\">\n          <input type=\"button\" value=\"В начало\" class=\"go-to-start\" (click)=\"hasPrev && filterNews()\" [class.disabled]=\"!hasPrev\" />\n          <input type=\"button\" class=\"go-to-left\" (click)=\"getPrevNews()\" [class.disabled]=\"!hasPrev\" />\n          <input type=\"button\" class=\"go-to-right\" (click)=\"getNextNews()\" [class.disabled]=\"!hasNext\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news/components/news-page/news-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/news/components/news-page/news-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-news {\n  max-width: 1065px;\n  padding: 50px 25px;\n  box-sizing: border-box;\n  position: relative; }\n\n.l-news .l-new-categories {\n    height: 30px;\n    position: absolute;\n    top: -30px; }\n\n.l-news .l-news__navigation {\n    margin-top: 80px;\n    text-align: center; }\n\n.l-news .l-news__navigation .go-to-start,\n    .l-news .l-news__navigation .go-to-left,\n    .l-news .l-news__navigation .go-to-right {\n      margin: 0;\n      padding: 0;\n      border: none;\n      min-width: 0;\n      vertical-align: middle;\n      cursor: pointer; }\n\n.l-news .l-news__navigation .go-to-start {\n      color: #768692;\n      font-size: 18px;\n      background: none;\n      margin-right: 35px; }\n\n.l-news .l-news__navigation .go-to-left,\n    .l-news .l-news__navigation .go-to-right {\n      width: 50px;\n      height: 50px;\n      background-color: #768692;\n      background-size: 27px 27px;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-image: url(/assets/icons/icon-arrow-right-white-thin.svg); }\n\n.l-news .l-news__navigation .go-to-left {\n      -webkit-transform: rotate(180deg);\n          -ms-transform: rotate(180deg);\n              transform: rotate(180deg);\n      margin-right: 25px; }\n\n.l-news .l-news__navigation .disabled {\n      opacity: 0.4; }\n\n.l-news__item {\n  margin-bottom: 50px; }\n\n.l-news__item:hover .admin-controls {\n    display: block; }\n\n.l-news__item .admin-controls {\n    display: none; }\n\n.m-news-card {\n  padding-left: 340px;\n  box-sizing: border-box;\n  position: relative;\n  min-height: 200px; }\n\n.m-news-card .thumb {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 300px;\n    height: 200px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    cursor: pointer; }\n\n.m-news-card .thumb:hover {\n      opacity: 0.9; }\n\n.m-news-card .content .date {\n    display: inline-block;\n    font-size: 16px;\n    color: #050505;\n    margin-bottom: 10px;\n    text-transform: uppercase; }\n\n.m-news-card .content .controls {\n    display: inline-block;\n    font-size: 16px;\n    color: #050505;\n    margin-left: 25px; }\n\n.m-news-card .content .controls .views,\n    .m-news-card .content .controls .likes,\n    .m-news-card .content .controls .likes-on {\n      display: inline-block;\n      background-repeat: no-repeat;\n      background-position: left;\n      padding-left: 35px; }\n\n.m-news-card .content .controls .views {\n      background-image: url(/assets/icons/icon-news-eye-black.svg);\n      background-size: 27px 15px;\n      margin-right: 25px; }\n\n.m-news-card .content .controls .likes {\n      background-image: url(/assets/icons/icon-news-like-thin.svg);\n      background-size: 18px 18px;\n      padding-left: 25px;\n      cursor: pointer; }\n\n.m-news-card .content .controls .likes-on {\n      background-image: url(\"/assets/icons/icon-like-red-on.svg\");\n      background-size: 18px 18px;\n      cursor: pointer; }\n\n.m-news-card .content .title {\n    display: block;\n    text-decoration: none;\n    color: #050505;\n    font-weight: bold;\n    margin-bottom: 15px;\n    font-size: 22px;\n    line-height: 32px;\n    max-height: 64px;\n    overflow: hidden; }\n\n@media screen and (max-width: 1440px) {\n      .m-news-card .content .title {\n        font-size: 18px;\n        line-height: 28px;\n        max-height: 56px; } }\n\n.m-news-card .content .title:hover {\n      color: #dd1e25; }\n\n.m-news-card .content .text-news {\n    color: #050505;\n    font-size: 16px;\n    line-height: 30px;\n    max-height: 120px;\n    overflow: hidden; }\n\n@media screen and (max-width: 1440px) {\n      .m-news-card .content .text-news {\n        font-size: 14px;\n        line-height: 28px;\n        max-height: 112px; } }\n\n:host ::ng-deep .text-news p {\n  margin: 0; }\n"

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
/* harmony import */ var src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news-views/news-views.service */ "./src/app/services/news-views/news-views.service.ts");
/* harmony import */ var src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/news-comments/news-comments.service */ "./src/app/services/news-comments/news-comments.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function NewsPageComponent(newsService, route, newsViewsService, newsCommentsService, sharepointService, router, zone) {
        var _this = this;
        this.newsService = newsService;
        this.route = route;
        this.newsViewsService = newsViewsService;
        this.newsCommentsService = newsCommentsService;
        this.sharepointService = sharepointService;
        this.router = router;
        this.zone = zone;
        this.rubrics = [];
        this.top = 10;
        this.pages = [];
        this.index = 0;
        this.news = [];
        this.hasPrev = false;
        this.hasNext = false;
        this.rubricId = null;
        this.userId = null;
        this.webId = null;
        this.company = null;
        this.subscriptionWebId = null;
        this.subscriptionCompany = null;
        this.companyId = null;
        this.subscriptionWebId = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return data.webId; }))
            .subscribe(function (webId) {
            _this.webId = webId;
        });
    }
    NewsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyId = this.route.snapshot.params.id;
        this.userId = this.route.snapshot.data.userId;
        this.rubricId = this.route.snapshot.params.rubricId;
        this.rubrics = this.route.snapshot.data.newsRubrics;
        this.pages.push(this.route.snapshot.data.news);
        this.news = this.route.snapshot.data.news.items;
        this.loadViewsAndComments(this.news);
        this.hasNext = this.route.snapshot.data.news.hasNext;
        this.subscriptionCompany = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return data.company; }))
            .subscribe(function (company) {
            _this.company = company;
        });
    };
    NewsPageComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptionWebId != null) {
            this.subscriptionWebId.unsubscribe();
        }
        if (this.subscriptionCompany != null) {
            this.subscriptionCompany.unsubscribe();
        }
    };
    NewsPageComponent.prototype.pathToNewsCard = function (newsId) {
        return this.companyId === 'root' ? "/news/root/item/" + newsId :
            "/enterprise/news/" + this.companyId + "/item/" + newsId;
    };
    NewsPageComponent.prototype.getNextNews = function () {
        var _this = this;
        if (this.hasNext) {
            if (this.index === this.pages.length - 1) {
                this.pages[this.index]
                    .getNext()
                    .subscribe(function (page) {
                    _this.index++;
                    _this.news = page.items;
                    _this.hasNext = page.hasNext;
                    _this.hasPrev = true;
                    _this.pages.push(page);
                    _this.loadViewsAndComments(_this.news);
                    _this.scrollUp();
                });
            }
            else {
                this.index++;
                this.news = this.pages[this.index].items;
                this.hasNext = this.pages[this.index].hasNext;
                this.hasPrev = true;
                this.scrollUp();
            }
        }
    };
    NewsPageComponent.prototype.scrollUp = function () {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigated = false;
            document.getElementById('s4-workspace').scrollTop = 0;
        });
    };
    NewsPageComponent.prototype.getPrevNews = function () {
        if (this.hasPrev) {
            this.index--;
            this.news = this.pages[this.index].items;
            this.hasNext = true;
            this.hasPrev = this.index > 0;
            this.scrollUp();
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
            webId: this.webId,
            filter: filter + "slNewsPublicationDate le datetime'" + new Date().toISOString() + "'",
            top: this.top
        })
            .subscribe(function (page) {
            _this.pages.push(page);
            _this.news = page.items;
            _this.hasNext = page.hasNext;
            _this.loadViewsAndComments(_this.news);
            _this.scrollUp();
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
            this.newsCommentsService
                .getItems({ filter: filter, top: 5000 })
                .subscribe(function (comments) {
                var _loop_1 = function (n) {
                    n.commentsCount = comments.filter(function (c) { return c.newsLookupId === n.id; }).length;
                };
                for (var _i = 0, _a = _this.news; _i < _a.length; _i++) {
                    var n = _a[_i];
                    _loop_1(n);
                }
            });
            this.newsViewsService
                .getItems({ filter: filter, top: 5000 })
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
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)').replace(/'/gi, '\\\'') || null;
    };
    NewsPageComponent.prototype.create = function () {
        window.location.href =
            this.sharepointService.getCurrentUserContext().webServerRelativeUrl +
                ((this.company && this.company.url != null ? this.company.url : '') + "/Lists/slNews/NewForm.aspx?Source=") +
                encodeURIComponent(window.location.href);
    };
    NewsPageComponent.prototype.edit = function (item) {
        window.location.href =
            this.sharepointService.getCurrentUserContext().webServerRelativeUrl +
                ((this.company && this.company.url != null ? this.company.url : '') + "/Lists/slNews/EditForm.aspx?ID=" + item.id + "&Source=") +
                encodeURIComponent(window.location.href);
    };
    NewsPageComponent.prototype.remove = function (item) {
        var _this = this;
        this.newsService.recycleItem(item, this.webId).subscribe(function () { return _this.filterByRubricId(); });
    };
    NewsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-page',
            template: __webpack_require__(/*! ./news-page.component.html */ "./src/app/news/components/news-page/news-page.component.html"),
            styles: [__webpack_require__(/*! ./news-page.component.scss */ "./src/app/news/components/news-page/news-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_3__["NewsViewsService"],
            src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_4__["NewsCommentsService"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__["SharepointService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
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
/* harmony import */ var src_app_services_news_news_of_rubric_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/news/news-of-rubric.resolver */ "./src/app/services/news/news-of-rubric.resolver.ts");
/* harmony import */ var src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/security/current-user-id.resolver */ "./src/app/services/security/current-user-id.resolver.ts");
/* harmony import */ var src_app_services_news_news_card_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/news/news-card.resolver */ "./src/app/services/news/news-card.resolver.ts");
/* harmony import */ var src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/security/groups.resolver */ "./src/app/services/security/groups.resolver.ts");
/* harmony import */ var src_app_services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/companies/company-web.resolver */ "./src/app/services/companies/company-web.resolver.ts");
/* harmony import */ var src_app_services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/companies/company.resolver */ "./src/app/services/companies/company.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: ':id',
        component: _components_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_2__["NewsPageComponent"],
        resolve: {
            webId: src_app_services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_10__["CompanyWebResolver"],
            news: src_app_services_news_news_resolver__WEBPACK_IMPORTED_MODULE_5__["NewsResolver"],
            newsRubrics: src_app_services_news_rubrics_news_rubrics_resolver__WEBPACK_IMPORTED_MODULE_4__["NewsRubricsResolver"],
            userId: src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_7__["CurrentUserIdResolver"],
            company: src_app_services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_11__["CompanyResolver"]
        },
        data: { animation: 'fadeAnimation', title: 'Новости' }
    },
    {
        path: ':id/item/:itemId',
        component: _components_news_card_page_news_card_page_component__WEBPACK_IMPORTED_MODULE_3__["NewsCardPageComponent"],
        resolve: {
            newsCard: src_app_services_news_news_card_resolver__WEBPACK_IMPORTED_MODULE_8__["NewsCardResolver"],
            userId: src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_7__["CurrentUserIdResolver"],
            groups: src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_9__["GroupsResolver"]
        },
        data: { animation: 'fadeAnimation', title: 'Новости' }
    },
    {
        path: ':id/rubric/:rubricId',
        component: _components_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_2__["NewsPageComponent"],
        resolve: {
            webId: src_app_services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_10__["CompanyWebResolver"],
            news: src_app_services_news_news_of_rubric_resolver__WEBPACK_IMPORTED_MODULE_6__["NewsOfRubricResolver"],
            newsRubrics: src_app_services_news_rubrics_news_rubrics_resolver__WEBPACK_IMPORTED_MODULE_4__["NewsRubricsResolver"],
            userId: src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_7__["CurrentUserIdResolver"],
            company: src_app_services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_11__["CompanyResolver"]
        },
        data: { animation: 'fadeAnimation', title: 'События' }
    }
];
var NewsRoutingModule = /** @class */ (function () {
    function NewsRoutingModule() {
    }
    NewsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [
                src_app_services_news_news_resolver__WEBPACK_IMPORTED_MODULE_5__["NewsResolver"],
                src_app_services_news_news_of_rubric_resolver__WEBPACK_IMPORTED_MODULE_6__["NewsOfRubricResolver"],
                src_app_services_news_rubrics_news_rubrics_resolver__WEBPACK_IMPORTED_MODULE_4__["NewsRubricsResolver"],
                src_app_services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_7__["CurrentUserIdResolver"],
                src_app_services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_9__["GroupsResolver"],
                src_app_services_news_news_card_resolver__WEBPACK_IMPORTED_MODULE_8__["NewsCardResolver"],
                src_app_services_companies_company_web_resolver__WEBPACK_IMPORTED_MODULE_10__["CompanyWebResolver"],
                src_app_services_companies_company_resolver__WEBPACK_IMPORTED_MODULE_11__["CompanyResolver"]
            ],
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
            ],
            exports: [
                _components_news_card_gallery_news_card_gallery_component__WEBPACK_IMPORTED_MODULE_6__["NewsCardGalleryComponent"]
            ]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/services/companies/company-web.resolver.ts":
/*!************************************************************!*\
  !*** ./src/app/services/companies/company-web.resolver.ts ***!
  \************************************************************/
/*! exports provided: CompanyWebResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyWebResolver", function() { return CompanyWebResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyWebResolver = /** @class */ (function () {
    function CompanyWebResolver(companiesService, sharepointService) {
        this.companiesService = companiesService;
        this.sharepointService = sharepointService;
    }
    CompanyWebResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params.id;
        if (id === 'root') {
            return undefined;
        }
        else {
            return this.companiesService.getItems({ filter: "Id eq '" + id + "'" })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (c) { return c.length > 0 ? c[0] : null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (c) { return _this.sharepointService.getWebIdByRelativeUrl(c && c.url); }));
        }
    };
    CompanyWebResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"], _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__["SharepointService"]])
    ], CompanyWebResolver);
    return CompanyWebResolver;
}());



/***/ }),

/***/ "./src/app/services/companies/company.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/services/companies/company.resolver.ts ***!
  \********************************************************/
/*! exports provided: CompanyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyResolver", function() { return CompanyResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyResolver = /** @class */ (function () {
    function CompanyResolver(companiesService) {
        this.companiesService = companiesService;
    }
    CompanyResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        return this.companiesService.getItems({ filter: "Id eq '" + id + "'" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (c) { return c.length > 0 ? c[0] : null; }));
    };
    CompanyResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_1__["CompaniesService"]])
    ], CompanyResolver);
    return CompanyResolver;
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
/* harmony import */ var _companies_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies/companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function NewsRubricsResolver(newsRubricsService, companiesService) {
        this.newsRubricsService = newsRubricsService;
        this.companiesService = companiesService;
    }
    NewsRubricsResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.companiesService.getWebIdByCompanyId(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (id) {
            return _this.newsRubricsService.getItems({ webId: id });
        }));
    };
    NewsRubricsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_news_rubrics_service__WEBPACK_IMPORTED_MODULE_1__["NewsRubricsService"],
            _companies_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"]])
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
/* harmony import */ var _companies_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies/companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function NewsCardResolver(newsService, companiesService) {
        this.newsService = newsService;
        this.companiesService = companiesService;
    }
    NewsCardResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params.itemId;
        return this.companiesService.getWebIdByCompanyId(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (_webId) {
            return _this.newsService.getItem({ id: id, webId: _webId });
        }));
    };
    NewsCardResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"],
            _companies_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"]])
    ], NewsCardResolver);
    return NewsCardResolver;
}());



/***/ }),

/***/ "./src/app/services/news/news-of-rubric.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/news/news-of-rubric.resolver.ts ***!
  \**********************************************************/
/*! exports provided: NewsOfRubricResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsOfRubricResolver", function() { return NewsOfRubricResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var _companies_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies/companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsOfRubricResolver = /** @class */ (function () {
    function NewsOfRubricResolver(newsService, companiesService) {
        this.newsService = newsService;
        this.companiesService = companiesService;
    }
    NewsOfRubricResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var rubricId = route.params.rubricId;
        return this.companiesService.getWebIdByCompanyId(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (id) {
            return _this.newsService.getItemsPaged({
                webId: id,
                filter: "slNewsPublicationDate le datetime'" + new Date().toISOString() + "' and slNewsRubricLookup/Id eq " + rubricId
            });
        }));
    };
    NewsOfRubricResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"],
            _companies_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"]])
    ], NewsOfRubricResolver);
    return NewsOfRubricResolver;
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
/* harmony import */ var _companies_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies/companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function NewsResolver(newsService, companiesService) {
        this.newsService = newsService;
        this.companiesService = companiesService;
    }
    NewsResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.companiesService.getWebIdByCompanyId(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (id) {
            return _this.newsService.getItemsPaged({
                webId: id,
                filter: "slNewsPublicationDate le datetime'" + new Date().toISOString() + "'"
            });
        }));
    };
    NewsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"],
            _companies_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"]])
    ], NewsResolver);
    return NewsResolver;
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



/***/ })

}]);
//# sourceMappingURL=default~enterprise-enterprise-module~incidents-incidents-module~news-news-module.js.map