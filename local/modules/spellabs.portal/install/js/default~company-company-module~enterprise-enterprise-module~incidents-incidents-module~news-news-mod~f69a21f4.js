(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-company-module~enterprise-enterprise-module~incidents-incidents-module~news-news-mod~f69a21f4"],{

/***/ "./src/app/services/news-comments/news-comments.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/news-comments/news-comments.service.ts ***!
  \*****************************************************************/
/*! exports provided: NewsCommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCommentsService", function() { return NewsCommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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




var NewsCommentsService = /** @class */ (function (_super) {
    __extends(NewsCommentsService, _super);
    function NewsCommentsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewsCommentsService.prototype.getListTitle = function () {
        return 'Комментарии к новостям';
    };
    NewsCommentsService.prototype.getListRelativePath = function () {
        return '/Lists/slNewsComments';
    };
    NewsCommentsService.prototype.getSelect = function () {
        return 'Id,Title,slComment,slLookupNews/Id,slLookupNews/Title,Created,Author/Title,Author/Name,Author/Id';
    };
    NewsCommentsService.prototype.getExpand = function () {
        return 'slLookupNews,Author';
    };
    NewsCommentsService.prototype.getOrderBy = function () {
        return null;
    };
    NewsCommentsService.prototype.getTop = function () {
        return 5000;
    };
    NewsCommentsService.prototype.getCachingOptions = function () {
        return null;
    };
    NewsCommentsService.prototype.convertListItemToEntity = function (item) {
        var comment = {
            id: item.Id,
            title: item.Title,
            comment: item.slComment,
            newsLookupId: null,
            name: item.Author.Title,
            photo: "/_layouts/15/userphoto.aspx?size=M&username=" + item.Author.Name,
            dateTitle: moment__WEBPACK_IMPORTED_MODULE_3__(item.Created).calendar()
        };
        if (item.slLookupNews) {
            comment.newsLookupId = item.slLookupNews.Id;
        }
        if (item.Author) {
            comment.authorId = item.Author.Id;
            comment.authorTitle = item.Author.Title;
        }
        return comment;
    };
    NewsCommentsService.prototype.convertEntityToListItem = function (entity) {
        return {
            Id: entity.id,
            Title: entity.title,
            slComment: entity.comment,
            slLookupNewsId: entity.newsLookupId
        };
    };
    NewsCommentsService.prototype.getMockItems = function () {
        return [];
    };
    NewsCommentsService.prototype.isMock = function () {
        return false;
    };
    NewsCommentsService.prototype.getItemsByNewsId = function (ids) {
        if (ids && ids.length > 0) {
            var filter = '';
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                filter += "slLookupNews/Id eq " + id + " or";
            }
            filter = filter.slice(0, -3);
            return this.getItems({ filter: filter, top: ids.length });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
    };
    NewsCommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NewsCommentsService);
    return NewsCommentsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/news-rubrics/news-rubrics.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/news-rubrics/news-rubrics.service.ts ***!
  \***************************************************************/
/*! exports provided: NewsRubricsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRubricsService", function() { return NewsRubricsService; });
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



var NewsRubricsService = /** @class */ (function (_super) {
    __extends(NewsRubricsService, _super);
    function NewsRubricsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewsRubricsService.prototype.getListRelativePath = function () {
        return '';
    };
    NewsRubricsService.prototype.getListTitle = function () {
        return 'Рубрики новостей';
    };
    NewsRubricsService.prototype.getSelect = function () {
        return 'Id,Title';
    };
    NewsRubricsService.prototype.getExpand = function () {
        return null;
    };
    NewsRubricsService.prototype.getOrderBy = function () {
        return [['Title', true]];
    };
    NewsRubricsService.prototype.getTop = function () {
        return 5000;
    };
    NewsRubricsService.prototype.getCachingOptions = function () {
        return {
            expiration: moment__WEBPACK_IMPORTED_MODULE_1__().add(20, 'minutes').toDate(),
            key: this.getListTitle(),
            storeName: 'session'
        };
    };
    NewsRubricsService.prototype.convertListItemToEntity = function (item) {
        return { id: item.Id, title: item.Title };
    };
    NewsRubricsService.prototype.convertEntityToListItem = function (entity) {
        return { Id: entity.id, Title: entity.title };
    };
    NewsRubricsService.prototype.getMockItems = function () {
        return [{ id: 1, title: 'Рубрика 1' }, { id: 2, title: 'Рубрика 2' }, { id: 3, title: 'Рубрика 3' }];
    };
    NewsRubricsService.prototype.isMock = function () {
        return false;
    };
    NewsRubricsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NewsRubricsService);
    return NewsRubricsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_2__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/news-views/news-views.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/news-views/news-views.service.ts ***!
  \***********************************************************/
/*! exports provided: NewsViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsViewsService", function() { return NewsViewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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



var NewsViewsService = /** @class */ (function (_super) {
    __extends(NewsViewsService, _super);
    function NewsViewsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewsViewsService.prototype.getListTitle = function () {
        return 'Просмотры новостей';
    };
    NewsViewsService.prototype.getListRelativePath = function () {
        return '/Lists/slNewsViews';
    };
    NewsViewsService.prototype.getSelect = function () {
        return 'Id,Title,slLookupNews/Id,slLookupNews/Title,LikedBy/Id,LikesCount';
    };
    NewsViewsService.prototype.getExpand = function () {
        return 'slLookupNews,LikedBy';
    };
    NewsViewsService.prototype.getOrderBy = function () {
        return null;
    };
    NewsViewsService.prototype.getTop = function () {
        return 5000;
    };
    NewsViewsService.prototype.getCachingOptions = function () {
        return null;
    };
    NewsViewsService.prototype.convertListItemToEntity = function (item) {
        var view = {
            id: item.Id,
            title: item.Title,
            newsLookupId: null,
            count: item.LikesCount,
            userIds: item.LikedBy && item.LikedBy.map(function (l) { return l.Id; }) || []
        };
        if (item.slLookupNews) {
            view.newsLookupId = item.slLookupNews.Id;
        }
        return view;
    };
    NewsViewsService.prototype.convertEntityToListItem = function (entity) {
        return {
            Id: entity.id,
            Title: entity.title,
            slLookupNewsId: entity.newsLookupId
        };
    };
    NewsViewsService.prototype.getMockItems = function () {
        return [];
    };
    NewsViewsService.prototype.isMock = function () {
        return false;
    };
    NewsViewsService.prototype.getItemsByNewsId = function (ids) {
        if (ids && ids.length > 0) {
            var filter = '';
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                filter += "slLookupNews/Id eq " + id + " or";
            }
            filter = filter.slice(0, -3);
            return this.getItems({ filter: filter, top: ids.length });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
    };
    NewsViewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NewsViewsService);
    return NewsViewsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_2__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/news/news.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/news/news.service.ts ***!
  \***********************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
/* harmony import */ var _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
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




var NewsService = /** @class */ (function (_super) {
    __extends(NewsService, _super);
    function NewsService(sharepointService) {
        var _this = _super.call(this) || this;
        _this.sharepointService = sharepointService;
        return _this;
    }
    NewsService.prototype.getListRelativePath = function () {
        return '/Lists/slNews';
    };
    NewsService.prototype.getListTitle = function () {
        return 'Новости';
    };
    NewsService.prototype.getSelect = function () {
        return 'Id,Title,slNewsAnnouncement,slNewsRubricLookup/Id,slNewsRubricLookup/Title,'
            + 'slNewsPublicationDate,slNewsBody,Created,AttachmentFiles/ServerRelativeUrl,slNewsCover,'
            + 'UniqueId,LikedBy/Id,LikesCount';
    };
    NewsService.prototype.getExpand = function () {
        return 'slNewsRubricLookup,slNewsRubricLookup,AttachmentFiles,LikedBy';
    };
    NewsService.prototype.getOrderBy = function () {
        return [['slNewsPublicationDate', false], ['Created', false]];
    };
    NewsService.prototype.getTop = function () {
        return 10;
    };
    NewsService.prototype.getCachingOptions = function () {
        return {
            expiration: moment__WEBPACK_IMPORTED_MODULE_1__().add(30, 'minutes').toDate(),
            key: this.getListTitle(),
            storeName: 'session'
        };
    };
    NewsService.prototype.convertListItemToEntity = function (item) {
        var news = {
            id: item.Id,
            title: item.Title,
            newsBody: item.slNewsBody,
            newsAnnouncement: item.slNewsAnnouncement,
            newsPublicationDate: item.slNewsPublicationDate && new Date(item.slNewsPublicationDate),
            attachmentFiles: [],
            uniqueId: item.UniqueId,
            likesCount: item.LikesCount || 0,
            likedByIds: [],
            imageUrl: item.slNewsCover
        };
        if (item.slNewsPublicationDate) {
            news.newsPublicationDate = new Date(item.slNewsPublicationDate);
            news.newsPublicationDateTitle = moment__WEBPACK_IMPORTED_MODULE_1__(news.newsPublicationDate).calendar(null, {
                sameDay: '[Сегодня]',
                nextDay: '[Завтра]',
                nextWeek: 'L',
                lastDay: '[Вчера]',
                lastWeek: 'L',
                sameElse: 'L'
            });
        }
        if (item.AttachmentFiles) {
            news.attachmentFiles = item.AttachmentFiles.map(function (a) { return a.ServerRelativeUrl; });
        }
        if (item.slNewsRubricLookup) {
            news.newsRubricLookupId = item.slNewsRubricLookup.Id;
            news.newsRubricLookupTitle = item.slNewsRubricLookup.Title;
        }
        if (news.imageUrl) {
            news.imageUrl = news.imageUrl;
        }
        if (item.LikedBy) {
            news.likedByIds = item.LikedBy.map(function (l) { return l.Id; });
        }
        return news;
    };
    NewsService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    NewsService.prototype.getMockItems = function () {
        return [{ id: 1, title: 'Новость 1' }, { id: 2, title: 'Новость 2' }, { id: 3, title: 'Новость 3' }];
    };
    NewsService.prototype.isMock = function () {
        return false;
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__["SharepointService"]])
    ], NewsService);
    return NewsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_2__["ListItemsService"]));



/***/ })

}]);
//# sourceMappingURL=default~company-company-module~enterprise-enterprise-module~incidents-incidents-module~news-news-mod~f69a21f4.js.map