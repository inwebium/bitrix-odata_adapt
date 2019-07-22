(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-company-module~enterprise-enterprise-module"],{

/***/ "./src/app/constants/content-types.ts":
/*!********************************************!*\
  !*** ./src/app/constants/content-types.ts ***!
  \********************************************/
/*! exports provided: contentTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentTypes", function() { return contentTypes; });
var contentTypes = {
    album: 'Контентный тип альбома изображений',
    photo: 'Контентный тип фото'
};


/***/ }),

/***/ "./src/app/services/banners/banners.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/banners/banners.service.ts ***!
  \*****************************************************/
/*! exports provided: BannersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersService", function() { return BannersService; });
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



var BannersService = /** @class */ (function (_super) {
    __extends(BannersService, _super);
    function BannersService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BannersService.prototype.getListRelativePath = function () {
        return '';
    };
    BannersService.prototype.getListTitle = function () {
        return 'Баннеры';
    };
    BannersService.prototype.getSelect = function () {
        return 'Id,Title,slText,slUrl,slShow,slIndex,AttachmentFiles/ServerRelativeUrl,slNewDate,slEndDate';
    };
    BannersService.prototype.getExpand = function () {
        return 'AttachmentFiles';
    };
    BannersService.prototype.getOrderBy = function () {
        return [['slIndex', true], ['Created', false]];
    };
    BannersService.prototype.getTop = function () {
        return 5;
    };
    BannersService.prototype.getCachingOptions = function () {
        return {
            expiration: moment__WEBPACK_IMPORTED_MODULE_1__().add(30, 'minutes').toDate(),
            key: this.getListTitle(),
            storeName: 'session'
        };
    };
    BannersService.prototype.convertListItemToEntity = function (item) {
        var banner = {
            id: item.Id,
            title: item.Title,
            imageUrl: item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : null,
            isShow: item.slShow,
            url: item.slUrl,
            text: item.slText,
            newDate: item.slNewDate && new Date(item.slNewDate),
            endDate: item.slEndDate && new Date(item.slEndDate)
        };
        return banner;
    };
    BannersService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    BannersService.prototype.getMockItems = function () {
        return [];
    };
    BannersService.prototype.isMock = function () {
        return false;
    };
    BannersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], BannersService);
    return BannersService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_2__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/photo-library/photo-library.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/photo-library/photo-library.service.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoLibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoLibraryService", function() { return PhotoLibraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
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






var PhotoLibraryService = /** @class */ (function (_super) {
    __extends(PhotoLibraryService, _super);
    function PhotoLibraryService(http, sharepointService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.sharepointService = sharepointService;
        return _this;
    }
    PhotoLibraryService.prototype.getCachingOptions = function () {
        return {
            expiration: moment__WEBPACK_IMPORTED_MODULE_3__().add(30, 'minutes').toDate(),
            key: this.getListTitle(),
            storeName: 'session'
        };
    };
    PhotoLibraryService.prototype.getListTitle = function () {
        return 'Библиотека фотогалереи';
    };
    PhotoLibraryService.prototype.getListRelativePath = function () {
        return 'slPhotoLibrary';
    };
    PhotoLibraryService.prototype.getSelect = function () {
        return 'Id,Title,slAlbumCover,slAlbumDescription,slAlbumIndex,slPhotoIndex,File/ServerRelativeUrl,ContentType,ContentTypeId,Created';
    };
    PhotoLibraryService.prototype.getExpand = function () {
        return 'File';
    };
    PhotoLibraryService.prototype.getOrderBy = function () {
        return [['Created', false]];
    };
    PhotoLibraryService.prototype.getTop = function () {
        return 15;
    };
    PhotoLibraryService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            albumCover: item.slAlbumCover,
            albumDescription: item.slAlbumDescription,
            albumIndex: item.slAlbumIndex,
            photoIndex: item.slPhotoIndex,
            url: item.File && item.File.ServerRelativeUrl
        };
        return entity;
    };
    PhotoLibraryService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    PhotoLibraryService.prototype.getMockItems = function () {
        return [];
    };
    PhotoLibraryService.prototype.isMock = function () {
        return false;
    };
    PhotoLibraryService.prototype.getFiles = function (id, webId) {
        var _this = this;
        console.log('------photoLibraryService getFiles------');
        var params = {
            id: id,
            expand: 'ListItemAllFields',
            urlPostfix: 'folder/files/'
        };
        return this.getItems(params); /*.pipe(
            map(items => {
                console.log('------photoLibraryService getFiles items------', items);
                return items.map((i: any) => {
                    console.log('------photoLibraryService getFiles i------', i);
                    //const entity = this.convertListItemToEntity(i.ListItemAllFields);
                    i.url = i.ServerRelativeUrl;
                    console.log('------photoLibraryService getFiles i------', i);
                    //console.log('------photoLibraryService getFiles entity------', entity);
                    return i;
                });
            })
        );*/
        /*.pipe(
            map(items => {
                console.log('------photoLibraryService getFiles items------', items);
                return items.map((i: any) => {
                    console.log('------photoLibraryService getFiles i------', i);
                    const entity = this.convertListItemToEntity(i.ListItemAllFields);
                    entity.url = i.ServerRelativeUrl;
                    console.log('------photoLibraryService getFiles entity------', entity);
                    return entity;
                });
            })
        )*/
        return this.getWebById(webId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (web) { return web.lists.getByTitle(_this.getListTitle()).items.getById(id).folder.files.toUrlAndQuery(); }), 
        // flatMap((url: string) => this.http.get(`${this.sharepointService.getRelativeUrl()}/${url}?$expand=ListItemAllFields`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (url) { return url.indexOf('://') > 0 ? _this.http.get(url + "?$expand=ListItemAllFields")
            : _this.http.get(_this.sharepointService.getRelativeUrl() + "/" + url + "?$expand=ListItemAllFields"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return item.value.map(function (i) {
            var entity = _this.convertListItemToEntity(i.ListItemAllFields);
            entity.url = i.ServerRelativeUrl;
            return entity;
        }); }));
    };
    PhotoLibraryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_4__["SharepointService"]])
    ], PhotoLibraryService);
    return PhotoLibraryService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_5__["ListItemsService"]));



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



/***/ })

}]);
//# sourceMappingURL=default~company-company-module~enterprise-enterprise-module.js.map