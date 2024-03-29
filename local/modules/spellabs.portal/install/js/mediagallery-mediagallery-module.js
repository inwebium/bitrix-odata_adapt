(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mediagallery-mediagallery-module"],{

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

/***/ "./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"companyId ? ['/enterprise/' + companyId] : ['/']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">Медиагалерея</div>\n  </div>\n  <div class=\"title\">\n    Медиагалерея\n  </div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-mediagallery\">\n        <a [routerLink]=\"['photo']\" class=\"photogallery-card\" [ngStyle]=\"{ 'background-image': 'url(' + prepareLink(photoUrl) + ')' }\">\n          <div class=\"gradient\"></div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Фотогалерея\n            </div>\n            <div class=\"items-counter\">\n              <ng-container *ngIf=\"albumsTotal > 0\">\n                {{albumsTotal}} {{getEnding(albumsTotal, ['альбом', 'альбома', 'альбомов'])}}\n              </ng-container>\n              <ng-container *ngIf=\"albumsTotal === 0\">\n                Нет альбомов\n              </ng-container>\n            </div>\n          </div>\n        </a>\n        <a [routerLink]=\"['video', 'search']\" class=\"videogallery-card\">\n          <ng-container *ngIf=\"video && video.isIFrame\">\n            <iframe [src]=\"video.videoUrl | iframeVideo\"></iframe>\n          </ng-container>\n          <ng-container *ngIf=\"video && !video.isIFrame\">\n            <video src=\"{{video.videoUrl}}\"></video>\n          </ng-container>\n          <div class=\"gradient\"></div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Видеогалерея\n            </div>\n            <div class=\"items-counter\">\n              <ng-container *ngIf=\"albumsTotal > 0\">\n                {{videosTotal}} видео\n              </ng-container>\n              <ng-container *ngIf=\"albumsTotal === 0\">\n                Нет видео\n              </ng-container>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page-header {\n  padding-bottom: 40px; }\n\n.l-mediagallery {\n  width: 90%;\n  padding-left: 25px; }\n\n.l-mediagallery .photogallery-card,\n  .l-mediagallery .videogallery-card {\n    position: relative;\n    display: inline-block;\n    width: 49%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center; }\n\n.l-mediagallery .photogallery-card video, .l-mediagallery .photogallery-card iframe,\n    .l-mediagallery .videogallery-card video,\n    .l-mediagallery .videogallery-card iframe {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%; }\n\n.l-mediagallery .photogallery-card:before,\n    .l-mediagallery .videogallery-card:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 60.60606061%; }\n\n.l-mediagallery .photogallery-card > .content,\n    .l-mediagallery .videogallery-card > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-mediagallery .photogallery-card .content,\n    .l-mediagallery .videogallery-card .content {\n      padding: 30px 40px;\n      box-sizing: border-box;\n      background-repeat: no-repeat;\n      background-size: 30% 30%;\n      background-position: center; }\n\n.l-mediagallery .photogallery-card .gradient,\n    .l-mediagallery .videogallery-card .gradient {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(to bottom, rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0)); }\n\n.l-mediagallery .photogallery-card .title,\n    .l-mediagallery .videogallery-card .title {\n      color: #FFFFFF;\n      font-size: 34px;\n      font-weight: bold;\n      margin-bottom: 7px; }\n\n.l-mediagallery .photogallery-card .items-counter,\n    .l-mediagallery .videogallery-card .items-counter {\n      color: #FFFFFF;\n      font-size: 22px; }\n\n.l-mediagallery .photogallery-card {\n    margin-right: 2%; }\n\n.l-mediagallery .photogallery-card .content {\n      background-image: url(/assets/icons/icon-photo.svg); }\n\n.l-mediagallery .videogallery-card .content {\n    background-image: url(/assets/icons/icon-play.svg); }\n"

/***/ }),

/***/ "./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MediagalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediagalleryPageComponent", function() { return MediagalleryPageComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_photo_library_photo_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photo-library/photo-library.service */ "./src/app/services/photo-library/photo-library.service.ts");
/* harmony import */ var src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/images/images.service */ "./src/app/services/images/images.service.ts");
/* harmony import */ var src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/videos/videos.service */ "./src/app/services/videos/videos.service.ts");
/* harmony import */ var src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/content-types */ "./src/app/constants/content-types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MediagalleryPageComponent = /** @class */ (function () {
    function MediagalleryPageComponent(photoLibraryService, imagesService, videosService, route) {
        this.photoLibraryService = photoLibraryService;
        this.imagesService = imagesService;
        this.videosService = videosService;
        this.route = route;
        this.albumsTotal = null;
        this.videosTotal = null;
        this.photoUrl = null;
        this.video = null;
        this.webId = null;
        this.subscription = null;
        this.companyId = null;
    }
    MediagalleryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.webId) {
                _this.webId = params.webId;
            }
            if (params.id) {
                _this.companyId = params.id;
            }
        });
        this.photoLibraryService.getItems({ filter: "ContentType eq '" + encodeURI(src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_5__["contentTypes"].album) + "'", top: 5000, webId: this.webId })
            .subscribe(function (items) { return _this.albumsTotal = items.length; });
        this.photoLibraryService.getRandomItems({ top: 1, filter: "ContentType eq '" + encodeURI(src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_5__["contentTypes"].photo) + "'", webId: this.webId })
            .subscribe(function (photos) {
            if (photos.length > 0) {
                _this.photoUrl = photos[0].url;
            }
        });
        this.videosService.getItems({ webId: this.webId }).subscribe(function (items) {
            _this.videosTotal = items.length;
            if (items.length > 0) {
                var i = Math.floor(Math.random() * items.length);
                _this.video = items[i];
            }
        });
    };
    MediagalleryPageComponent.prototype.getEnding = function (number, endings) {
        var ending;
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
        return ending;
    };
    MediagalleryPageComponent.prototype.prepareLink = function (link) {
        return this.imagesService.prepareBackgroundUrl(link);
    };
    MediagalleryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mediagallery-page',
            template: __webpack_require__(/*! ./mediagallery-page.component.html */ "./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.html"),
            styles: [__webpack_require__(/*! ./mediagallery-page.component.scss */ "./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_photo_library_photo_library_service__WEBPACK_IMPORTED_MODULE_2__["PhotoLibraryService"],
            src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"],
            src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_4__["VideosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], MediagalleryPageComponent);
    return MediagalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/mediagallery/mediagallery-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/mediagallery/mediagallery-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MediagalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediagalleryRoutingModule", function() { return MediagalleryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_mediagallery_page_mediagallery_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mediagallery-page/mediagallery-page.component */ "./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_mediagallery_page_mediagallery_page_component__WEBPACK_IMPORTED_MODULE_2__["MediagalleryPageComponent"],
        data: { animation: 'fadeAnimation', title: 'Медиагалерея' }
    },
    {
        path: 'photo',
        loadChildren: '../photogallery/photogallery.module#PhotogalleryModule'
    },
    {
        path: 'video',
        loadChildren: '../videogallery/videogallery.module#VideogalleryModule'
    }
];
var MediagalleryRoutingModule = /** @class */ (function () {
    function MediagalleryRoutingModule() {
    }
    MediagalleryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MediagalleryRoutingModule);
    return MediagalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/mediagallery/mediagallery.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/mediagallery/mediagallery.module.ts ***!
  \*****************************************************/
/*! exports provided: MediagalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediagalleryModule", function() { return MediagalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_mediagallery_page_mediagallery_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mediagallery-page/mediagallery-page.component */ "./src/app/mediagallery/components/mediagallery-page/mediagallery-page.component.ts");
/* harmony import */ var _mediagallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mediagallery-routing.module */ "./src/app/mediagallery/mediagallery-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MediagalleryModule = /** @class */ (function () {
    function MediagalleryModule() {
    }
    MediagalleryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_mediagallery_page_mediagallery_page_component__WEBPACK_IMPORTED_MODULE_4__["MediagalleryPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mediagallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["MediagalleryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], MediagalleryModule);
    return MediagalleryModule;
}());



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
//# sourceMappingURL=mediagallery-mediagallery-module.js.map