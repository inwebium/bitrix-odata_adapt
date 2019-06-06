(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videogallery-videogallery-module"],{

/***/ "./src/app/services/videos-views/videos-views.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/videos-views/videos-views.service.ts ***!
  \***************************************************************/
/*! exports provided: VideosViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosViewsService", function() { return VideosViewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
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




var VideosViewsService = /** @class */ (function (_super) {
    __extends(VideosViewsService, _super);
    function VideosViewsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideosViewsService.prototype.getListTitle = function () {
        return 'Просмотры видео';
    };
    VideosViewsService.prototype.getListRelativePath = function () {
        return '/Lists/slVideosViews';
    };
    VideosViewsService.prototype.getSelect = function () {
        return 'Id,Title,slVideoLookup/Id,slVideoLookup/Title,LikedBy/Id,LikesCount';
    };
    VideosViewsService.prototype.getExpand = function () {
        return 'slVideoLookup,LikedBy';
    };
    VideosViewsService.prototype.getOrderBy = function () {
        return null;
    };
    VideosViewsService.prototype.getTop = function () {
        return 5000;
    };
    VideosViewsService.prototype.getCachingOptions = function () {
        return {
            expiration: moment__WEBPACK_IMPORTED_MODULE_2__().add(30, 'minutes').toDate(),
            key: this.getListTitle(),
            storeName: 'session'
        };
    };
    VideosViewsService.prototype.convertListItemToEntity = function (item) {
        var view = {
            id: item.Id,
            title: item.Title,
            videoLookupId: null,
            count: item.LikesCount,
            userIds: item.LikedBy && item.LikedBy.map(function (l) { return l.Id; }) || []
        };
        if (item.slVideoLookup) {
            view.videoLookupId = item.slVideoLookup.Id;
        }
        return view;
    };
    VideosViewsService.prototype.convertEntityToListItem = function (entity) {
        return {
            Id: entity.id,
            Title: entity.title,
            slVideoLookupId: entity.videoLookupId
        };
    };
    VideosViewsService.prototype.getMockItems = function () {
        return [];
    };
    VideosViewsService.prototype.isMock = function () {
        return false;
    };
    VideosViewsService.prototype.getItemsByNewsId = function (ids) {
        if (ids && ids.length > 0) {
            var filter = '';
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                filter += "slVideoLookup/Id eq " + id + " or";
            }
            filter = filter.slice(0, -3);
            return this.getItems({ filter: filter, top: ids.length });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
    };
    VideosViewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], VideosViewsService);
    return VideosViewsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_3__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/videos/next-video.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/services/videos/next-video.resolver.ts ***!
  \********************************************************/
/*! exports provided: NextVideoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextVideoResolver", function() { return NextVideoResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videos.service */ "./src/app/services/videos/videos.service.ts");
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




var NextVideoResolver = /** @class */ (function () {
    function NextVideoResolver(videosService) {
        this.videosService = videosService;
    }
    NextVideoResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        var webId = route.params.webId;
        return this.videosService.getItems({ filter: "Id gt " + id, orderBy: [['Id', true]], top: 1, webId: webId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (videos) {
            return videos && videos.length > 0 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(videos[0]) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    };
    NextVideoResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_videos_service__WEBPACK_IMPORTED_MODULE_2__["VideosService"]])
    ], NextVideoResolver);
    return NextVideoResolver;
}());



/***/ }),

/***/ "./src/app/services/videos/video.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/services/videos/video.resolver.ts ***!
  \***************************************************/
/*! exports provided: VideoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoResolver", function() { return VideoResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _videos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos.service */ "./src/app/services/videos/videos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoResolver = /** @class */ (function () {
    function VideoResolver(videosService) {
        this.videosService = videosService;
    }
    VideoResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        var webId = route.params.webId;
        return this.videosService.getItem({ id: id, webId: webId });
    };
    VideoResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_videos_service__WEBPACK_IMPORTED_MODULE_1__["VideosService"]])
    ], VideoResolver);
    return VideoResolver;
}());



/***/ }),

/***/ "./src/app/services/videos/videos.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/services/videos/videos.resolver.ts ***!
  \****************************************************/
/*! exports provided: VideosResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosResolver", function() { return VideosResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _videos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos.service */ "./src/app/services/videos/videos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideosResolver = /** @class */ (function () {
    function VideosResolver(videosService) {
        this.videosService = videosService;
    }
    VideosResolver.prototype.resolve = function (route, state) {
        var search = route.params.search;
        var webId = route.params.webId;
        var filter = search == null || search === '' ? undefined : "substringof('" + search + "',Title)";
        return this.videosService.getItems({ filter: filter, webId: webId });
    };
    VideosResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_videos_service__WEBPACK_IMPORTED_MODULE_1__["VideosService"]])
    ], VideosResolver);
    return VideosResolver;
}());



/***/ }),

/***/ "./src/app/services/videos/videos.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/videos/videos.service.ts ***!
  \***************************************************/
/*! exports provided: VideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosService", function() { return VideosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
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



var VideosService = /** @class */ (function (_super) {
    __extends(VideosService, _super);
    function VideosService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideosService.prototype.getListTitle = function () {
        return 'Ссылки на видео';
    };
    VideosService.prototype.getListRelativePath = function () {
        return 'lists/slVideo';
    };
    VideosService.prototype.getSelect = function () {
        return 'Id,Title,slVideoUrl,slIsIFrame,Created';
    };
    VideosService.prototype.getExpand = function () {
        return null;
    };
    VideosService.prototype.getOrderBy = function () {
        return [['Created', false]];
    };
    VideosService.prototype.getTop = function () {
        return 5000;
    };
    VideosService.prototype.getCachingOptions = function () {
        return {
            expiration: moment__WEBPACK_IMPORTED_MODULE_1__().add(30, 'minutes').toDate(),
            key: this.getListTitle(),
            storeName: 'session'
        };
    };
    VideosService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            isIFrame: item.slIsIFrame,
            videoUrl: item.slVideoUrl,
            created: new Date(item.Created),
            createdTitle: moment__WEBPACK_IMPORTED_MODULE_1__(item.Created).fromNow()
        };
        return entity;
    };
    VideosService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    VideosService.prototype.getMockItems = function () {
        return [];
    };
    VideosService.prototype.isMock = function () {
        return false;
    };
    VideosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], VideosService);
    return VideosService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_2__["ListItemsService"]));



/***/ }),

/***/ "./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"companyId ? ['/enterprise/' + companyId] : ['/']\">Главная</a></div>\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['../../../']\">Медиагалерея</a></div>\n    <div class=\"l-breadcrumb\">\n      <a [routerLink]=\"['../../search']\">Видеогалерея</a>\n    </div>\n    <div class=\"l-breadcrumb\">\n      {{item && item.title}}\n    </div>\n  </div>\n  <div class=\"title\">Видеогалерея</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-videoalbum\">\n        <div class=\"search\">\n          <input #searchRef placeholder=\"Введите запрос\" type=\"text\" />\n        </div>\n        <div class=\"main\" *ngIf=\"item\">\n          <div class=\"leftside\">\n            <div class=\"video-card\">\n              <div class=\"video\">\n                <div class=\"content\">\n                  <ng-container *ngIf=\"item.isIFrame\">\n                    <iframe [src]=\"item.videoUrl | iframeVideo\"></iframe>\n                  </ng-container>\n                  <ng-container *ngIf=\"!item.isIFrame\">\n                    <video src=\"{{item.videoUrl}}\" controls=\"true\"></video>\n                  </ng-container>\n                </div>\n              </div>\n              <div class=\"title\">\n                {{item.title}}\n              </div>\n              <div class=\"info\">\n                {{ getEnding(item.viewsCount, ['просмотр', 'посмотра', 'просмотров']) }}  / {{ item.createdTitle }}\n              </div>\n              <div class=\"like-dislike\" percent-likes=\"50\">\n                <input type=\"button\" class=\"like\" value=\"1\" />\n                <input type=\"button\" class=\"dislike\" value=\"1\" />\n              </div>\n              <div class=\"description\">\n                Михайловский металлургический комбинат отмечает юбилей.\n                Индустриальный гигант превратил маленький город.\n              </div>\n            </div>\n            <div class=\"comments\">\n              <div class=\"title\">17 комментариев</div>\n              <div class=\"add-comment\">\n                <div class=\"user-card\">\n                  <div class=\"avatar\">\n                    <app-user-thumb></app-user-thumb>\n                  </div>\n                  <div class=\"info\">\n                    <a href=\"#\" class=\"fullname\">Аватаркина Аватарка Аватоаровна</a>\n                    <div class=\"post\">Графический дизайнер</div>\n                  </div>\n                </div>\n                <div class=\"button\">\n                  <input type=\"button\" value=\"Добавить комментарий\" />\n                </div>\n              </div>\n              <div class=\"comment-list\">\n                <div class=\"comment\">\n                  <div class=\"user-card\">\n                    <div class=\"avatar\">\n                      <app-user-thumb></app-user-thumb>\n                    </div>\n                    <div class=\"info\">\n                      <a href=\"#\" class=\"fullname\">Аватаркина Аватарка Аватоаровна</a>\n                      <div class=\"post\">Графический дизайнер</div>\n                    </div>\n                  </div>\n                  <div class=\"details\">\n                    <div class=\"date\">7 дней назад</div>\n                    <div class=\"text\">\n                      Это просто фантастика! Я был там, поражает масштаб. За\n                      десяток лет комбинат маленький город превратился в\n                      цветущий сад региона\n                    </div>\n                  </div>\n                  <div class=\"controls\">\n                    <a href=\"#\" class=\"reply\">Ответить</a>\n                    <div class=\"reply-count\">0</div>\n                    <div class=\"like-dislike\">\n                      <input type=\"button\" class=\"like\" value=\"1\" />\n                      <input type=\"button\" class=\"dislike\" value=\"1\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"rightside\">\n            <div class=\"next-video\" *ngIf=\"next\">\n              <div class=\"title\">Следующее видео</div>\n              <div class=\"item\">\n                <div [routerLink]=\"['../', next.id]\" class=\"cover\">\n                  <div class=\"content\">\n                    <ng-container *ngIf=\"next.isIFrame\">\n                      <div id=\"block\" style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%\"></div>\n                      <iframe [src]=\"next.videoUrl | iframeVideo\"></iframe>\n                    </ng-container>\n                    <ng-container *ngIf=\"!next.isIFrame\">\n                      <video src=\"{{next.videoUrl}}\"></video>\n                    </ng-container>\n                  </div>\n                </div>\n                <div class=\"info\">\n                  <a [routerLink]=\"['../', next.id]\" class=\"title\">{{next.title}}</a>\n                  <div class=\"views\">{{ getEnding(next.viewsCount, ['просмотр', 'просмотра', 'просмотров']) }}</div>\n                  <div class=\"date\">{{next.createdTitle}}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"similar-video\">\n              <div class=\"title\">Похожие видео</div>\n              <div class=\"list\">\n                <div class=\"item\">\n                  <div class=\"cover\">\n                    <div class=\"content\" style=\"background-image:url(assets/banners/news-banner-7.png)\"></div>\n                    <div class=\"timestamp\">2:31</div>\n                  </div>\n                  <div class=\"info\">\n                    <a href=\"#\" class=\"title\">\n                      Музыка «Металлоинвест» Симфония партнерства текст\n                      лырвалдорыоыр лдо лоыврадлыр\n                    </a>\n                    <div class=\"views\">1517 просмотров</div>\n                    <div class=\"date\">4 месяца назад</div>\n                  </div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"cover\">\n                    <div class=\"content\" style=\"background-image:url(assets/banners/news-banner-3.png)\"></div>\n                    <div class=\"timestamp\">2:31</div>\n                  </div>\n                  <div class=\"info\">\n                    <a href=\"#\" class=\"title\">\n                      Музыка «Металлоинвест» Симфония партнерства\n                    </a>\n                    <div class=\"views\">1517 просмотров</div>\n                    <div class=\"date\">4 месяца назад</div>\n                  </div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"cover\">\n                    <div class=\"content\" style=\"background-image:url(assets/banners/news-banner-4.png)\"></div>\n                    <div class=\"timestamp\">2:31</div>\n                  </div>\n                  <div class=\"info\">\n                    <a href=\"#\" class=\"title\">\n                      Музыка «Металлоинвест» Симфония партнерства\n                    </a>\n                    <div class=\"views\">1517 просмотров</div>\n                    <div class=\"date\">4 месяца назад</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  padding-bottom: 40px; }\n\n.l-videoalbum {\n  padding-left: 25px; }\n\n.l-videoalbum .search {\n    width: 520px;\n    margin: 0 auto;\n    margin-bottom: 40px; }\n\n.l-videoalbum .search input {\n      height: 47px;\n      width: 100%;\n      background-position: right 12px center;\n      color: #898888;\n      border: 1px solid #bcbcbc;\n      font-size: 16px;\n      box-sizing: border-box;\n      background-image: url(\"/assets/icons/icon-search-red.svg\");\n      background-repeat: no-repeat;\n      background-size: 31px 31px;\n      background-position: left 12px center;\n      padding-left: 50px;\n      padding-right: 20px;\n      outline: none; }\n\n.l-videoalbum .main {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: collapse; }\n\n.l-videoalbum .main .leftside {\n      display: table-cell;\n      vertical-align: top;\n      width: 65%;\n      padding-right: 3%; }\n\n.l-videoalbum .main .leftside .video-card {\n        margin-bottom: 2%; }\n\n.l-videoalbum .main .leftside .video-card .video {\n          margin-bottom: 3%;\n          position: relative; }\n\n.l-videoalbum .main .leftside .video-card .video:before {\n            display: block;\n            content: \" \";\n            width: 100%;\n            padding-bottom: 56.49717514%; }\n\n.l-videoalbum .main .leftside .video-card .video > .content {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0; }\n\n.l-videoalbum .main .leftside .video-card .video .content video, .l-videoalbum .main .leftside .video-card .video .content iframe {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0; }\n\n.l-videoalbum .main .leftside .video-card .title {\n          font-size: 26px;\n          color: #030303;\n          margin-bottom: 4%; }\n\n.l-videoalbum .main .leftside .video-card .info {\n          font-size: 14px;\n          color: #768692;\n          font-weight: bold;\n          margin-bottom: 1%; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike {\n          display: none;\n          font-size: 0;\n          position: relative;\n          padding-bottom: 10px;\n          margin-bottom: 2%; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike:after, .l-videoalbum .main .leftside .video-card .like-dislike:before {\n            position: absolute;\n            display: block;\n            content: '';\n            height: 3px;\n            left: 0;\n            bottom: 0; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='0']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='1']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='2']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='3']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='4']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='5']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='6']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='7']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='8']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='9']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='10']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='11']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='12']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='13']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='14']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='15']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='16']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='17']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='18']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='19']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='20']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='21']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='22']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='23']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='24']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='25']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='26']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='27']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='28']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='29']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='30']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='31']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='32']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='33']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='34']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='35']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='36']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='37']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='38']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='39']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='40']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='41']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='42']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='43']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='44']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='45']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='46']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='47']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='48']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='49']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='50']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='51']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='52']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='53']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='54']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='55']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='56']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='57']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='58']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='59']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='60']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='61']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='62']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='63']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='64']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='65']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='66']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='67']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='68']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='69']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='70']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='71']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='72']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='73']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='74']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='75']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='76']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='77']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='78']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='79']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='80']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='81']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='82']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='83']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='84']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='85']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='86']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='87']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='88']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='89']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='90']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='91']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='92']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='93']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='94']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='95']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='96']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='97']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='98']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='99']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike[percent-likes='100']:after {\n            background-color: #005b9f; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike:before {\n            right: 0;\n            background-color: #88969e; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike .like,\n          .l-videoalbum .main .leftside .video-card .like-dislike .dislike {\n            padding: 0;\n            margin: 0;\n            border: none;\n            background-color: transparent;\n            min-width: 0;\n            font-size: 0.875rem;\n            font-weight: bold;\n            color: #88969e;\n            display: inline-block;\n            vertical-align: top;\n            padding-left: 1.875rem;\n            box-sizing: border-box;\n            background-repeat: no-repeat;\n            background-position: left center;\n            background-size: 1.25rem 1.25rem;\n            height: 1.25rem;\n            line-height: 1.25rem; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike .like {\n            background-image: url(\"/assets/icons/icon-thumbs-up.svg\"); }\n\n.l-videoalbum .main .leftside .video-card .like-dislike .like.liked {\n              color: #0e7bbe;\n              background-image: url(\"/assets/icons/icon-thumbs-up-blue.svg\"); }\n\n.l-videoalbum .main .leftside .video-card .like-dislike .like + .dislike {\n              margin-left: 1.563rem; }\n\n.l-videoalbum .main .leftside .video-card .like-dislike .dislike {\n            background-image: url(\"/assets/icons/icon-thumbs-down.svg\"); }\n\n.l-videoalbum .main .leftside .video-card .like-dislike .dislike.disliked {\n              color: #0e7bbe;\n              background-image: url(\"/assets/icons/icon-thumbs-down-blue.svg\"); }\n\n.l-videoalbum .main .leftside .video-card .description {\n          display: none;\n          font-size: 14px;\n          line-height: 19px;\n          color: #768692; }\n\n.l-videoalbum .main .leftside .comments {\n        display: none; }\n\n.l-videoalbum .main .leftside .comments .title {\n          font-size: 26px;\n          color: #768692;\n          margin-bottom: 25px; }\n\n.l-videoalbum .main .leftside .comments .add-comment {\n          padding-bottom: 20px;\n          box-sizing: border-box;\n          border-bottom: 1px solid #76869280;\n          margin-bottom: 15px; }\n\n.l-videoalbum .main .leftside .comments .add-comment .user-card {\n            display: inline-block; }\n\n.l-videoalbum .main .leftside .comments .add-comment .user-card .avatar {\n              display: inline-block;\n              vertical-align: middle; }\n\n.l-videoalbum .main .leftside .comments .add-comment .user-card .info {\n              display: inline-block;\n              vertical-align: middle;\n              padding-left: 15px;\n              box-sizing: border-box; }\n\n.l-videoalbum .main .leftside .comments .add-comment .user-card .info .fullname {\n                display: block;\n                text-decoration: none;\n                font-size: 16px;\n                font-weight: bold;\n                color: #768692;\n                margin-bottom: 5px; }\n\n.l-videoalbum .main .leftside .comments .add-comment .user-card .info .post {\n                font-size: 14px;\n                color: #768692; }\n\n.l-videoalbum .main .leftside .comments .add-comment .button {\n            display: inline-block;\n            float: right; }\n\n.l-videoalbum .main .leftside .comments .add-comment .button input {\n              margin: 0;\n              padding: 15px 30px;\n              box-sizing: border-box;\n              min-width: 0;\n              background: none;\n              font-size: 14px;\n              font-weight: bold;\n              color: #88969e;\n              border: 1px solid #88969e;\n              cursor: pointer; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment {\n          margin-bottom: 10px; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .user-card {\n            margin-bottom: 10px; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .user-card .avatar {\n              display: inline-block;\n              vertical-align: middle; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .user-card .info {\n              display: inline-block;\n              vertical-align: middle;\n              padding-left: 15px;\n              box-sizing: border-box; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .user-card .info .fullname {\n                display: block;\n                text-decoration: none;\n                font-size: 16px;\n                font-weight: bold;\n                color: #050505;\n                margin-bottom: 5px; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .user-card .info .post {\n                font-size: 14px;\n                color: #050505; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .details {\n            padding-left: 75px;\n            box-sizing: border-box;\n            margin-bottom: 15px; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .details .date {\n              display: inline;\n              font-size: 12px;\n              color: #88969e;\n              margin-right: 10px; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .details .text {\n              display: inline;\n              font-size: 12px;\n              color: #030303; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls {\n            padding-left: 75px;\n            box-sizing: border-box; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .reply,\n            .l-videoalbum .main .leftside .comments .comment-list .comment .controls .reply-count {\n              display: inline-block;\n              font-size: 12px;\n              font-weight: bold;\n              color: #768692;\n              text-decoration: none;\n              text-transform: uppercase; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .reply {\n              margin-right: 10px; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .reply-count {\n              margin-right: 35px; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .like-dislike {\n              display: inline-block; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .like-dislike .like,\n              .l-videoalbum .main .leftside .comments .comment-list .comment .controls .like-dislike .dislike {\n                padding: 0;\n                margin: 0;\n                border: none;\n                background-color: transparent;\n                min-width: 0;\n                font-size: 12px;\n                font-weight: bold;\n                color: #88969e;\n                display: inline-block;\n                vertical-align: top;\n                padding-left: 15px;\n                box-sizing: border-box;\n                background-repeat: no-repeat;\n                background-position: left center;\n                background-size: 12px 12px;\n                height: 12px;\n                line-height: 12px; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .like-dislike .like {\n                background-image: url(\"/assets/icons/icon-thumbs-up.svg\"); }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .like-dislike .like.liked {\n                  color: #0e7bbe;\n                  background-image: url(\"/assets/icons/icon-thumbs-up-blue.svg\"); }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .like-dislike .like + .dislike {\n                  margin-left: 15px; }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .like-dislike .dislike {\n                background-image: url(\"/assets/icons/icon-thumbs-down.svg\"); }\n\n.l-videoalbum .main .leftside .comments .comment-list .comment .controls .like-dislike .dislike.disliked {\n                  color: #0e7bbe;\n                  background-image: url(\"/assets/icons/icon-thumbs-down-blue.svg\"); }\n\n.l-videoalbum .main .rightside {\n      display: table-cell;\n      vertical-align: top;\n      width: 35%; }\n\n.l-videoalbum .main .rightside .next-video iframe,\n      .l-videoalbum .main .rightside .similar-video iframe {\n        width: 100%;\n        height: 100%; }\n\n.l-videoalbum .main .rightside .next-video video,\n      .l-videoalbum .main .rightside .similar-video video {\n        width: 100%;\n        height: 100%;\n        display: block;\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0; }\n\n.l-videoalbum .main .rightside .next-video .title,\n      .l-videoalbum .main .rightside .similar-video .title {\n        font-size: 26px;\n        color: #768692;\n        margin-bottom: 25px; }\n\n.l-videoalbum .main .rightside .next-video .item,\n      .l-videoalbum .main .rightside .similar-video .item {\n        display: table;\n        width: 100%;\n        table-layout: fixed;\n        border-collapse: collapse; }\n\n.l-videoalbum .main .rightside .next-video .item .cover,\n        .l-videoalbum .main .rightside .similar-video .item .cover {\n          display: table-cell;\n          vertical-align: top;\n          width: 40%;\n          cursor: pointer;\n          position: relative; }\n\n.l-videoalbum .main .rightside .next-video .item .cover:before,\n          .l-videoalbum .main .rightside .similar-video .item .cover:before {\n            display: block;\n            content: \" \";\n            width: 100%;\n            padding-bottom: 56.49717514%; }\n\n.l-videoalbum .main .rightside .next-video .item .cover > .content,\n          .l-videoalbum .main .rightside .similar-video .item .cover > .content {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0; }\n\n.l-videoalbum .main .rightside .next-video .item .cover .content,\n          .l-videoalbum .main .rightside .similar-video .item .cover .content {\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-position: center; }\n\n.l-videoalbum .main .rightside .next-video .item .cover .timestamp,\n          .l-videoalbum .main .rightside .similar-video .item .cover .timestamp {\n            position: absolute;\n            right: 15px;\n            bottom: 15px;\n            width: 48px;\n            height: 24px;\n            font-size: 16px;\n            line-height: 24px;\n            color: #ffffff;\n            text-align: center;\n            background-color: #030303b7; }\n\n.l-videoalbum .main .rightside .next-video .item .info,\n        .l-videoalbum .main .rightside .similar-video .item .info {\n          display: table-cell;\n          vertical-align: top;\n          width: 60%;\n          padding-left: 4%; }\n\n.l-videoalbum .main .rightside .next-video .item .info .title,\n          .l-videoalbum .main .rightside .similar-video .item .info .title {\n            display: block;\n            display: -webkit-box;\n            font-size: 22px;\n            line-height: 27px;\n            max-height: 54px;\n            font-weight: bold;\n            color: #030303;\n            margin-bottom: 17px;\n            -webkit-line-clamp: 2;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            text-decoration: none; }\n\n.l-videoalbum .main .rightside .next-video .item .info .views,\n          .l-videoalbum .main .rightside .next-video .item .info .date,\n          .l-videoalbum .main .rightside .similar-video .item .info .views,\n          .l-videoalbum .main .rightside .similar-video .item .info .date {\n            font-size: 18px;\n            line-height: 27px;\n            color: #768692; }\n\n.l-videoalbum .main .rightside .next-video {\n        padding-bottom: 5%;\n        box-sizing: border-box;\n        border-bottom: 1px solid #a9b7bfb0;\n        margin-bottom: 5%; }\n\n.l-videoalbum .main .rightside .similar-video {\n        display: none; }\n\n.l-videoalbum .main .rightside .similar-video .list .item {\n          margin-bottom: 3%; }\n"

/***/ }),

/***/ "./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VideoalbumPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoalbumPageComponent", function() { return VideoalbumPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/videos/videos.service */ "./src/app/services/videos/videos.service.ts");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_videos_views_videos_views_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/videos-views/videos-views.service */ "./src/app/services/videos-views/videos-views.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VideoalbumPageComponent = /** @class */ (function () {
    function VideoalbumPageComponent(sidebarService, route, videosService, router, videosViewsService, sharepointService) {
        this.sidebarService = sidebarService;
        this.route = route;
        this.videosService = videosService;
        this.router = router;
        this.videosViewsService = videosViewsService;
        this.sharepointService = sharepointService;
        this.item = null;
        this.next = null;
        this.companyId = null;
        this.webId = null;
        this.sidebarService.handleSetSettings({
            showSidebar: false,
            bgColor: '#fff'
        });
    }
    VideoalbumPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.video; })).subscribe(function (video) {
            _this.item = video;
            _this.view(_this.item, true);
        });
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.next; })).subscribe(function (next) {
            _this.next = next;
            if (_this.next) {
                _this.view(_this.next);
            }
        });
        this.route.parent.params.subscribe(function (params) {
            if (params.id) {
                _this.companyId = params.id;
            }
        });
    };
    VideoalbumPageComponent.prototype.view = function (video, isCreate) {
        var _this = this;
        var userId = this.sharepointService.getCurrentUserContext().userId;
        this.videosViewsService
            .getItems({ filter: "slVideoLookup/Id eq " + video.id })
            .subscribe(function (views) {
            if (views && views.length > 0) {
                video.viewsCount = views[0].count;
                if (views[0].userIds.every(function (id) { return id !== userId; }) && isCreate) {
                    _this.videosViewsService.addLike({ id: views[0].id }).subscribe();
                }
            }
            else {
                if (isCreate) {
                    _this.videosViewsService
                        .createItem({
                        id: undefined,
                        title: video.title,
                        videoLookupId: video.id
                    })
                        .subscribe(function (view) { return _this.videosViewsService.addLike({ id: view.id }).subscribe(); });
                }
            }
        });
    };
    VideoalbumPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchRef.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function (query) { return _this.router.navigate(['../../search', query], { relativeTo: _this.route }); });
    };
    VideoalbumPageComponent.prototype.searchVideos = function (filter) {
        var _this = this;
        var videoTitle = '';
        if (filter && filter !== '') {
            videoTitle += "substringof('" + filter + "',Title)";
        }
        this.videosService.getItemsPaged({ filter: videoTitle, webId: this.webId }).
            subscribe(function (page) {
            _this.router.navigate(['../../search', page.items[0].title], { relativeTo: _this.route });
        });
    };
    VideoalbumPageComponent.prototype.getEnding = function (number, endings) {
        var ending;
        if (number) {
            number = number % 100;
            if (number >= 11 && number <= 19) {
                ending = endings[2];
            }
            else {
                var i = number % 10;
                switch (i) {
                    case 1:
                        ending = endings[0];
                        break;
                    case 2:
                    case 3:
                    case 4:
                        ending = endings[1];
                        break;
                    default:
                        ending = endings[2];
                }
            }
            ending = number + " " + ending;
        }
        else {
            ending = "\u041D\u0435\u0442 " + endings[2];
        }
        return ending;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VideoalbumPageComponent.prototype, "searchRef", void 0);
    VideoalbumPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videoalbum-page',
            template: __webpack_require__(/*! ./videoalbum-page.component.html */ "./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.html"),
            styles: [__webpack_require__(/*! ./videoalbum-page.component.scss */ "./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_4__["VideosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_videos_views_videos_views_service__WEBPACK_IMPORTED_MODULE_6__["VideosViewsService"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_7__["SharepointService"]])
    ], VideoalbumPageComponent);
    return VideoalbumPageComponent;
}());



/***/ }),

/***/ "./src/app/videogallery/components/videogallery-page/videogallery-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/videogallery/components/videogallery-page/videogallery-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"companyId ? ['/enterprise/' + companyId] : ['/']\">Главная</a></div>\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['../../']\">Медиагалерея</a></div>\n    <div class=\"l-breadcrumb\">Видеогалерея</div>\n  </div>\n  <div class=\"title\">\n    Видеогалерея\n  </div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-videogallery\">\n        <div class=\"search\">\n          <input #searchRef placeholder=\"Введите запрос\" type=\"text\" [(ngModel)]=\"search\" />\n        </div>\n        <div class=\"empty-video-list\" *ngIf=\"items.length === 0\">\n            Результаты не найдены\n        </div>\n        <div class=\"video-list\">\n          <div class=\"video-item\" *ngFor=\"let item of items\">\n            <div class=\"video-item__inner\">\n              <div [routerLink]=\"searchOutside? ['../../item', item.id] : ['../item', item.id]\" class=\"cover\">\n                <ng-container *ngIf=\"item.isIFrame\">\n                  <div id=\"block\" style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%\"></div>\n                  <iframe [src]=\"item.videoUrl | iframeVideo\"></iframe>\n                </ng-container>\n                <ng-container *ngIf=\"!item.isIFrame\">\n                  <video src=\"{{item.videoUrl}}\"></video>\n                </ng-container>\n              </div>\n              <div class=\"info\">\n                <a [routerLink]=\"searchOutside? ['../../item', item.id] : ['../item', item.id]\" class=\"title\" appNgslDotdotdot>\n                  {{item.title}}\n                </a>\n                <div class=\"views\">\n                  {{ getEnding(item.viewsCount, ['просмотр', 'просмотра', 'просмотров']) }}\n                </div>\n                <div class=\"date\">\n                  {{item.createdTitle}}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/videogallery/components/videogallery-page/videogallery-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/videogallery/components/videogallery-page/videogallery-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  padding-bottom: 40px; }\n\n.l-videogallery {\n  padding-left: 25px; }\n\n.l-videogallery .search {\n    width: 520px;\n    margin: 0 auto;\n    margin-bottom: 90px; }\n\n.l-videogallery .search input {\n      height: 47px;\n      width: 100%;\n      background-position: right 12px center;\n      color: #898888;\n      border: 1px solid #BCBCBC;\n      font-size: 16px;\n      box-sizing: border-box;\n      background-image: url(\"/assets/icons/icon-search-red.svg\");\n      background-repeat: no-repeat;\n      background-size: 31px 31px;\n      background-position: left 12px center;\n      padding-left: 50px;\n      padding-right: 20px;\n      outline: none; }\n\n.l-videogallery .empty-video-list {\n    font-size: 16px;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-align: center;\n        align-items: center;\n    box-sizing: border-box; }\n\n.l-videogallery .video-list {\n    margin: -10px; }\n\n.l-videogallery .video-list .video-item {\n      padding: 10px;\n      box-sizing: border-box;\n      display: inline-block;\n      vertical-align: top; }\n\n.l-videogallery .video-list .video-item .video-item__inner {\n        width: 250px; }\n\n.l-videogallery .video-list .video-item video, .l-videogallery .video-list .video-item iframe {\n        width: 100%;\n        height: 100%; }\n\n.l-videogallery .video-list .video-item .cover {\n        position: relative;\n        margin-bottom: 20px;\n        width: 100%;\n        height: 150px;\n        background-color: #000;\n        cursor: pointer; }\n\n.l-videogallery .video-list .video-item .cover .timestamp {\n          position: absolute;\n          right: 15px;\n          bottom: 15px;\n          width: 48px;\n          height: 24px;\n          font-size: 16px;\n          line-height: 24px;\n          color: #FFFFFF;\n          text-align: center;\n          background-color: #030303b7; }\n\n.l-videogallery .video-list .video-item .info .title {\n        display: block;\n        font-weight: bold;\n        color: #030303;\n        margin-bottom: 17px;\n        text-decoration: none;\n        font-size: 22px;\n        line-height: 27px;\n        height: 54px; }\n\n.l-videogallery .video-list .video-item .info .views,\n      .l-videogallery .video-list .video-item .info .date {\n        font-size: 18px;\n        line-height: 27px;\n        color: #768692; }\n"

/***/ }),

/***/ "./src/app/videogallery/components/videogallery-page/videogallery-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/videogallery/components/videogallery-page/videogallery-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VideogalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideogalleryPageComponent", function() { return VideogalleryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/videos/videos.service */ "./src/app/services/videos/videos.service.ts");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_videos_views_videos_views_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/videos-views/videos-views.service */ "./src/app/services/videos-views/videos-views.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VideogalleryPageComponent = /** @class */ (function () {
    function VideogalleryPageComponent(sidebarService, videosService, route, videosViewsService) {
        this.sidebarService = sidebarService;
        this.videosService = videosService;
        this.route = route;
        this.videosViewsService = videosViewsService;
        this.items = [];
        this.search = null;
        this.companyId = null;
        this.webId = null;
        this.searchOutside = null;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    VideogalleryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.webId) {
                _this.webId = params.webId;
            }
            if (params.search) {
                _this.searchOutside = params.search;
                _this.searchVideos(params.search);
            }
        });
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.search; }))
            .subscribe(function (search) {
            _this.search = search;
        });
        this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.videos; }))
            .subscribe(function (items) {
            _this.items = items;
            _this.loadViews(items);
        });
        this.route.parent.params.subscribe(function (params) {
            if (params.id) {
                _this.companyId = params.id;
            }
        });
    };
    VideogalleryPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.searchRef.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function (query) { return _this.searchVideos(query); });
    };
    VideogalleryPageComponent.prototype.searchVideos = function (filter) {
        var _this = this;
        var videoTitle = '';
        if (filter && filter !== '') {
            videoTitle += "substringof('" + filter + "',Title)";
        }
        this.videosService.getItemsPaged({ filter: videoTitle, webId: this.webId }).
            subscribe(function (page) {
            _this.items = page.items;
            _this.loadViews(page.items);
        });
    };
    VideogalleryPageComponent.prototype.getEnding = function (number, endings) {
        var ending;
        if (number) {
            number = number % 100;
            if (number >= 11 && number <= 19) {
                ending = endings[2];
            }
            else {
                var i = number % 10;
                switch (i) {
                    case (1):
                        ending = endings[0];
                        break;
                    case (2):
                    case (3):
                    case (4):
                        ending = endings[1];
                        break;
                    default: ending = endings[2];
                }
            }
            ending = number + " " + ending;
        }
        else {
            ending = "\u041D\u0435\u0442 " + endings[2];
        }
        return ending;
    };
    VideogalleryPageComponent.prototype.loadViews = function (videos) {
        var _this = this;
        var filter = '';
        if (videos.length > 0) {
            for (var _i = 0, videos_1 = videos; _i < videos_1.length; _i++) {
                var n = videos_1[_i];
                filter += "slVideoLookup/Id eq " + n.id + " or ";
            }
            filter = filter.slice(0, -4);
            this.videosViewsService.getItems({ filter: filter, top: 5000 })
                .subscribe(function (views) {
                var _loop_1 = function (n) {
                    var view = views.filter(function (c) { return c.videoLookupId === n.id; });
                    if (view && view.length > 0) {
                        n.viewsCount = view[0].count;
                    }
                    else {
                        n.viewsCount = 0;
                    }
                };
                for (var _i = 0, _a = _this.items; _i < _a.length; _i++) {
                    var n = _a[_i];
                    _loop_1(n);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VideogalleryPageComponent.prototype, "searchRef", void 0);
    VideogalleryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videogallery-page',
            template: __webpack_require__(/*! ./videogallery-page.component.html */ "./src/app/videogallery/components/videogallery-page/videogallery-page.component.html"),
            styles: [__webpack_require__(/*! ./videogallery-page.component.scss */ "./src/app/videogallery/components/videogallery-page/videogallery-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"],
            src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_4__["VideosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_videos_views_videos_views_service__WEBPACK_IMPORTED_MODULE_6__["VideosViewsService"]])
    ], VideogalleryPageComponent);
    return VideogalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/videogallery/videogallery-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/videogallery/videogallery-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VideogalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideogalleryRoutingModule", function() { return VideogalleryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_videogallery_page_videogallery_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/videogallery-page/videogallery-page.component */ "./src/app/videogallery/components/videogallery-page/videogallery-page.component.ts");
/* harmony import */ var _components_videoalbum_page_videoalbum_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/videoalbum-page/videoalbum-page.component */ "./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.ts");
/* harmony import */ var src_app_services_videos_videos_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/videos/videos.resolver */ "./src/app/services/videos/videos.resolver.ts");
/* harmony import */ var src_app_services_videos_next_video_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/videos/next-video.resolver */ "./src/app/services/videos/next-video.resolver.ts");
/* harmony import */ var src_app_services_videos_video_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/videos/video.resolver */ "./src/app/services/videos/video.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'search',
        component: _components_videogallery_page_videogallery_page_component__WEBPACK_IMPORTED_MODULE_2__["VideogalleryPageComponent"],
        resolve: { videos: src_app_services_videos_videos_resolver__WEBPACK_IMPORTED_MODULE_4__["VideosResolver"] },
        data: { animation: 'fadeAnimation', title: 'Видеогалерея' }
    },
    {
        path: 'search/:search',
        component: _components_videogallery_page_videogallery_page_component__WEBPACK_IMPORTED_MODULE_2__["VideogalleryPageComponent"],
        resolve: { videos: src_app_services_videos_videos_resolver__WEBPACK_IMPORTED_MODULE_4__["VideosResolver"] },
        data: { animation: 'fadeAnimation', title: 'Видеогалерея' }
    },
    {
        path: 'item/:id',
        component: _components_videoalbum_page_videoalbum_page_component__WEBPACK_IMPORTED_MODULE_3__["VideoalbumPageComponent"],
        resolve: { video: src_app_services_videos_video_resolver__WEBPACK_IMPORTED_MODULE_6__["VideoResolver"], next: src_app_services_videos_next_video_resolver__WEBPACK_IMPORTED_MODULE_5__["NextVideoResolver"] },
        data: { animation: 'fadeAnimation', title: 'Видео' }
    }
];
var VideogalleryRoutingModule = /** @class */ (function () {
    function VideogalleryRoutingModule() {
    }
    VideogalleryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_videos_video_resolver__WEBPACK_IMPORTED_MODULE_6__["VideoResolver"], src_app_services_videos_next_video_resolver__WEBPACK_IMPORTED_MODULE_5__["NextVideoResolver"], src_app_services_videos_videos_resolver__WEBPACK_IMPORTED_MODULE_4__["VideosResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VideogalleryRoutingModule);
    return VideogalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/videogallery/videogallery.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/videogallery/videogallery.module.ts ***!
  \*****************************************************/
/*! exports provided: VideogalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideogalleryModule", function() { return VideogalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _videogallery_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videogallery-routing.module */ "./src/app/videogallery/videogallery-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_videoalbum_page_videoalbum_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/videoalbum-page/videoalbum-page.component */ "./src/app/videogallery/components/videoalbum-page/videoalbum-page.component.ts");
/* harmony import */ var _components_videogallery_page_videogallery_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/videogallery-page/videogallery-page.component */ "./src/app/videogallery/components/videogallery-page/videogallery-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var VideogalleryModule = /** @class */ (function () {
    function VideogalleryModule() {
    }
    VideogalleryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_videoalbum_page_videoalbum_page_component__WEBPACK_IMPORTED_MODULE_6__["VideoalbumPageComponent"],
                _components_videogallery_page_videogallery_page_component__WEBPACK_IMPORTED_MODULE_7__["VideogalleryPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _videogallery_routing_module__WEBPACK_IMPORTED_MODULE_4__["VideogalleryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
            ]
        })
    ], VideogalleryModule);
    return VideogalleryModule;
}());



/***/ })

}]);
//# sourceMappingURL=videogallery-videogallery-module.js.map