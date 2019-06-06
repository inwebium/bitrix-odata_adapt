(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photogallery-photogallery-module"],{

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

/***/ "./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"companyId ? ['/enterprise/' + companyId] : ['/']\">Главная</a></div>\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"currentSlide ? ['../../../'] : ['../../']\">Медиагалерея</a></div>\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"currentSlide ? ['../../'] : ['../']\">Фотогалерея</a></div>\n    <div class=\"l-breadcrumb\">{{ album.title }}</div>\n  </div>\n  <div class=\"title\">{{ album.title }}</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-photo-album\" *ngIf=\"photos\">\n        <ngsl-gallery #ngslGallery=\"ngsl-gallery\" [currentSlide]=\"currentSlide\" [isVisibleGallery]=\"currentSlide != null\" class=\"l-photo-album__list\">\n          <a *ngFor=\"let item of photos; let i = index\" id=\"i\" class=\"l-photo-album__item\" title=\"{{ getFileNameAndExtension(item.url).full }}\"\n            (click)=\"ngslGallery.handleToggleGallery(i, $event)\">\n            <div class=\"m-photo-album-card\">\n              <div class=\"photo\" [ngStyle]=\"{ 'background-image': 'url(' + prepareLink(item.url) + ')' }\">\n                <div class=\"controls\">\n                  <div class=\"control\">\n                    <a href=\"{{item.url}}\" download class=\"btn btn-download\" (click)=\"$event.stopPropagation()\">\n                      Скачать\n                      <span>{{ getFileNameAndExtension(item.url).ext }}</span>\n                      <i></i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"m-albom-popup\" *ngslGalleryItem>\n              <div class=\"m-albom-popup-card\">\n                <div class=\"content\">\n                  <div class=\"photo\" [ngStyle]=\"{ 'background-image': 'url(' + prepareLink(item.url) + ')' }\">\n                    <div class=\"controls\">\n                      <div class=\"control\">\n                        <a href=\"{{item.url}}\" download class=\"btn btn-download\" (click)=\"$event.stopPropagation()\">\n                          Скачать\n                          <span>{{ getFileNameAndExtension(item.url).ext }}</span>\n                          <i></i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"title\">{{ getFileNameAndExtension(item.url).name }}</div>\n              </div>\n            </div>\n          </a>\n        </ngsl-gallery>\n        <div class=\"l-photo-album__return\">\n          <a [routerLink]=\"['../']\" class=\"btn btn-to-back\">\n            К списку альбомов\n            <i></i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-photo-album {\n  max-width: 90%;\n  margin: 0 auto; }\n\n.l-photo-album__list {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: start;\n      justify-content: start;\n  margin: 0 -15px; }\n\n.l-photo-album__item {\n  -ms-flex-preferred-size: 340px;\n      flex-basis: 340px;\n  padding: 0 15px;\n  box-sizing: content-box;\n  margin-bottom: 20px;\n  cursor: pointer; }\n\n.l-photo-album__item.image-view .m-albom-popup {\n    display: block; }\n\n.m-albom-popup {\n  height: 100%; }\n\n.m-photo-album-card {\n  position: relative; }\n\n.m-photo-album-card .photo {\n    height: 225px;\n    position: relative;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    overflow: hidden; }\n\n.m-photo-album-card .photo:hover .controls {\n      bottom: 0; }\n\n.m-photo-album-card .photo .controls {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: -135px;\n      transition: bottom 0.3s;\n      padding: 15px 20px;\n      box-sizing: border-box;\n      height: 135px;\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(88, 88, 88, 0.8) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03000000', endColorstr='#cc585858', GradientType=0); }\n\n.m-photo-album-card .photo .controls .control {\n        position: absolute;\n        right: 20px;\n        bottom: 15px; }\n\n.m-photo-album-card .photo .controls .control .btn-download {\n          z-index: 100; }\n\n.m-photo-album-card .photo .controls .control .btn-download span {\n            text-transform: uppercase;\n            font-weight: 400; }\n\n.m-albom-popup-card {\n  position: relative; }\n\n.m-albom-popup-card:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-bottom: 71.42857143%; }\n\n.m-albom-popup-card > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.m-albom-popup-card .content {\n    padding: 15px;\n    box-sizing: border-box;\n    background-color: #fff; }\n\n.m-albom-popup-card .title {\n    font-size: 14px;\n    color: #fff;\n    font-weight: 600;\n    position: absolute;\n    z-index: 10;\n    bottom: -50px;\n    height: 35px;\n    line-height: 35px;\n    display: inline-block;\n    background-color: #000;\n    padding: 0 15px;\n    border-radius: 15px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.m-albom-popup-card .photo {\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    position: relative; }\n\n.m-albom-popup-card .photo .controls {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      transition: bottom 0.3s;\n      padding: 15px 20px;\n      box-sizing: border-box;\n      height: 135px;\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(46, 46, 46, 0.8) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03000000', endColorstr='#cc585858', GradientType=0); }\n\n.m-albom-popup-card .photo .controls .control {\n        position: absolute;\n        right: 20px;\n        bottom: 15px; }\n\n.m-albom-popup-card .photo .controls .control .btn-download {\n          z-index: 100; }\n\n.m-albom-popup-card .photo .controls .control .btn-download span {\n            text-transform: uppercase;\n            font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PhotoalbumPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoalbumPageComponent", function() { return PhotoalbumPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/images/images.service */ "./src/app/services/images/images.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoalbumPageComponent = /** @class */ (function () {
    function PhotoalbumPageComponent(route, sidebarService, imagesService) {
        this.route = route;
        this.sidebarService = sidebarService;
        this.imagesService = imagesService;
        this.photos = null;
        this.album = null;
        this.showSidebar = false;
        this.currentSlide = null;
        this.companyId = null;
        this.sub = null;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    PhotoalbumPageComponent.prototype.getFileNameAndExtension = function (path) {
        var str = path
            .split('\\')
            .pop()
            .split('/')
            .pop();
        var ext = str.substr((Math.max(0, str.lastIndexOf('.')) || Infinity) + 1);
        var name = str.replace('.' + ext, '');
        return {
            ext: ext,
            name: name,
            full: name + "." + ext
        };
    };
    PhotoalbumPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photos = this.route.snapshot.data.photos.sort(function (n1, n2) {
            if (n1.photoIndex > n2.photoIndex) {
                return 1;
            }
            if (n1.photoIndex < n2.photoIndex) {
                return -1;
            }
            return 0;
        });
        this.album = this.route.snapshot.data.album;
        this.sub = this.route.params.subscribe(function (params) {
            if (params.pic) {
                _this.photos.forEach(function (value) {
                    if (value.id === +params.pic) {
                        _this.currentSlide = _this.photos.indexOf(value);
                    }
                });
            }
        });
        this.sub = this.route.parent.params.subscribe(function (params) {
            if (params.id) {
                _this.companyId = params.id;
            }
        });
    };
    PhotoalbumPageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PhotoalbumPageComponent.prototype.prepareLink = function (link) {
        return this.imagesService.prepareBackgroundUrl(link);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ngslGallery'),
        __metadata("design:type", Object)
    ], PhotoalbumPageComponent.prototype, "ngslGallery", void 0);
    PhotoalbumPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photoalbum-page',
            template: __webpack_require__(/*! ./photoalbum-page.component.html */ "./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.html"),
            styles: [__webpack_require__(/*! ./photoalbum-page.component.scss */ "./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"],
            src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"]])
    ], PhotoalbumPageComponent);
    return PhotoalbumPageComponent;
}());



/***/ }),

/***/ "./src/app/photogallery/components/photogallery-page/photogallery-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/photogallery/components/photogallery-page/photogallery-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"companyId ? ['/enterprise/' + companyId] : ['/']\">Главная</a></div>\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"webId ? ['../../../../../'] : ['../../']\">Медиагалерея</a></div>\n    <div class=\"l-breadcrumb\">Фотогалерея</div>\n  </div>\n  <div class=\"title\">Фотогалерея</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-photo-gallery\">\n        <div class=\"l-photo-gallery__list\">\n          <div class=\"l-photo-gallery__item\" *ngFor=\"let item of albums\">\n            <div class=\"m-photo-gallery-card\">\n              <div class=\"admin-controls\">\n                  <app-admin-controls [item]=\"item\" (create)=\"create()\" (edit)=\"edit($event)\" (remove)=\"remove($event)\">\n                  </app-admin-controls>\n              </div>\n              <div\n                class=\"photo\"\n                [routerLink]=\"[item.id]\"\n                [ngStyle]=\"{ 'background-image': 'url(' + item.albumCover + ')' }\"\n              ></div>\n              <a class=\"title\">{{ item.title }}</a>\n              <div class=\"description\" *ngIf=\"item.albumDescription\">{{ item.albumDescription }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/photogallery/components/photogallery-page/photogallery-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/photogallery/components/photogallery-page/photogallery-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-photo-gallery {\n  max-width: 90%;\n  margin: 0 auto; }\n\n.l-photo-gallery__list {\n  margin: 0 -15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  text-align: left;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n\n.l-photo-gallery__item {\n  padding: 0 15px;\n  -ms-flex-preferred-size: 340px;\n      flex-basis: 340px;\n  margin-bottom: 40px; }\n\n.m-photo-gallery-card {\n  position: relative; }\n\n.m-photo-gallery-card:hover .admin-controls {\n    display: block; }\n\n.m-photo-gallery-card .photo {\n    height: 225px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin-bottom: 15px;\n    position: relative;\n    background-color: #e4e4e4;\n    cursor: pointer; }\n\n.m-photo-gallery-card .title {\n    display: block;\n    display: -webkit-box;\n    display: block;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n    max-height: 50px;\n    text-decoration: none;\n    font-size: 22px;\n    line-height: 25px;\n    color: #000;\n    margin-bottom: 15px; }\n\n.m-photo-gallery-card .description {\n    display: block;\n    display: -webkit-box;\n    display: block;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 3;\n    overflow: hidden;\n    max-height: 60px;\n    font-size: 14px;\n    color: #636363;\n    line-height: 20px; }\n\n.admin-controls {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/photogallery/components/photogallery-page/photogallery-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/photogallery/components/photogallery-page/photogallery-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PhotogalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotogalleryPageComponent", function() { return PhotogalleryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var src_app_services_photo_library_photo_library_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/photo-library/photo-library.service */ "./src/app/services/photo-library/photo-library.service.ts");
/* harmony import */ var src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constants/content-types */ "./src/app/constants/content-types.ts");
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








var PhotogalleryPageComponent = /** @class */ (function () {
    function PhotogalleryPageComponent(document, route, sidebarService, sharepointService, photoLibraryService, cookieService) {
        this.document = document;
        this.route = route;
        this.sidebarService = sidebarService;
        this.sharepointService = sharepointService;
        this.photoLibraryService = photoLibraryService;
        this.cookieService = cookieService;
        this.page = null;
        this.albums = [];
        this.showSidebar = false;
        this.webId = null;
        this.subscription = null;
        this.companyId = null;
        this.s4 = null;
        this.isLoadingItems = false;
        this.sidebarService.handleSetSettings({ showSidebar: false, bgColor: '#fff' });
    }
    PhotogalleryPageComponent.prototype.loadMore = function () {
        var _this = this;
        this.isLoadingItems = true;
        this.page.getNext().subscribe(function (page) {
            _this.page = page;
            _this.albums = _this.albums.concat(_this.page.items);
            _this.isLoadingItems = false;
        });
    };
    PhotogalleryPageComponent.prototype.load = function () {
        var _this = this;
        this.photoLibraryService.getItemsPaged({ filter: "ContentType eq '" + src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_7__["contentTypes"].album + "'",
            top: 8, orderBy: [['slAlbumIndex', true]] })
            .subscribe(function (page) {
            _this.page = page;
            _this.albums = page.items;
            _this.isLoadingItems = false;
            document.getElementById('s4-workspace').scrollTop = 0;
        });
    };
    PhotogalleryPageComponent.prototype.onWorkSpaceScroll = function () {
        if (this.s4.scrollTop >=
            this.s4.scrollHeight - (this.s4.clientHeight + 100)) {
            if (this.page.hasNext && !this.isLoadingItems) {
                this.loadMore();
            }
        }
    };
    PhotogalleryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.webId) {
                _this.webId = params.webId;
            }
        });
        this.s4 = this.document.getElementById('s4-workspace');
        this.s4.addEventListener('scroll', this.onWorkSpaceScroll.bind(this), true);
        this.page = this.route.snapshot.data.albums;
        this.albums = this.page.items;
        this.subscription = this.route.parent.params.subscribe(function (params) {
            if (params.id) {
                _this.companyId = params.id;
            }
        });
    };
    PhotogalleryPageComponent.prototype.ngOnDestroy = function () {
        this.s4.removeEventListener('scroll', this.onWorkSpaceScroll.bind(this), true);
    };
    PhotogalleryPageComponent.prototype.create = function () {
        this.cookieService.set('splnu', '0', 1, '/');
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + "/slPhotoLibrary/Forms/Upload.aspx?ContentTypeId=0x012000BFB863A2672645ABBEA198EF8334172D&Source="
            + encodeURIComponent(window.location.href);
    };
    PhotogalleryPageComponent.prototype.edit = function (item) {
        this.cookieService.set('splnu', '0', 1, '/');
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + ("/slPhotoLibrary/Forms/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    PhotogalleryPageComponent.prototype.remove = function (item) {
        var _this = this;
        this.photoLibraryService.recycleItem(item)
            .subscribe(function () { return _this.load(); });
    };
    PhotogalleryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photogallery-page',
            template: __webpack_require__(/*! ./photogallery-page.component.html */ "./src/app/photogallery/components/photogallery-page/photogallery-page.component.html"),
            styles: [__webpack_require__(/*! ./photogallery-page.component.scss */ "./src/app/photogallery/components/photogallery-page/photogallery-page.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__["SharepointService"],
            src_app_services_photo_library_photo_library_service__WEBPACK_IMPORTED_MODULE_6__["PhotoLibraryService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], PhotogalleryPageComponent);
    return PhotogalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/photogallery/photogallery-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/photogallery/photogallery-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PhotogalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotogalleryRoutingModule", function() { return PhotogalleryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_photogallery_page_photogallery_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/photogallery-page/photogallery-page.component */ "./src/app/photogallery/components/photogallery-page/photogallery-page.component.ts");
/* harmony import */ var _components_photoalbum_page_photoalbum_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/photoalbum-page/photoalbum-page.component */ "./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.ts");
/* harmony import */ var src_app_services_photo_library_photo_albums_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photo-library/photo-albums.resolver */ "./src/app/services/photo-library/photo-albums.resolver.ts");
/* harmony import */ var src_app_services_photo_library_photos_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/photo-library/photos.resolver */ "./src/app/services/photo-library/photos.resolver.ts");
/* harmony import */ var src_app_services_photo_library_photo_album_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/photo-library/photo-album.resolver */ "./src/app/services/photo-library/photo-album.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _components_photogallery_page_photogallery_page_component__WEBPACK_IMPORTED_MODULE_2__["PhotogalleryPageComponent"],
        resolve: { albums: src_app_services_photo_library_photo_albums_resolver__WEBPACK_IMPORTED_MODULE_4__["PhotoAlbumsResolver"] },
        data: { animation: 'fadeAnimation', title: 'Альбомы' }
    },
    {
        path: ':id',
        component: _components_photoalbum_page_photoalbum_page_component__WEBPACK_IMPORTED_MODULE_3__["PhotoalbumPageComponent"],
        resolve: { photos: src_app_services_photo_library_photos_resolver__WEBPACK_IMPORTED_MODULE_5__["PhotosResolver"], album: src_app_services_photo_library_photo_album_resolver__WEBPACK_IMPORTED_MODULE_6__["PhotoAlbumResolver"] },
        data: { animation: 'fadeAnimation', title: 'Альбом' }
    },
    {
        path: ':id/:pic',
        component: _components_photoalbum_page_photoalbum_page_component__WEBPACK_IMPORTED_MODULE_3__["PhotoalbumPageComponent"],
        resolve: { photos: src_app_services_photo_library_photos_resolver__WEBPACK_IMPORTED_MODULE_5__["PhotosResolver"], album: src_app_services_photo_library_photo_album_resolver__WEBPACK_IMPORTED_MODULE_6__["PhotoAlbumResolver"] },
        data: { animation: 'fadeAnimation', title: 'Альбом' }
    }
];
var PhotogalleryRoutingModule = /** @class */ (function () {
    function PhotogalleryRoutingModule() {
    }
    PhotogalleryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [src_app_services_photo_library_photos_resolver__WEBPACK_IMPORTED_MODULE_5__["PhotosResolver"], src_app_services_photo_library_photo_album_resolver__WEBPACK_IMPORTED_MODULE_6__["PhotoAlbumResolver"], src_app_services_photo_library_photo_albums_resolver__WEBPACK_IMPORTED_MODULE_4__["PhotoAlbumsResolver"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PhotogalleryRoutingModule);
    return PhotogalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/photogallery/photogallery.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/photogallery/photogallery.module.ts ***!
  \*****************************************************/
/*! exports provided: PhotogalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotogalleryModule", function() { return PhotogalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _photogallery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photogallery-routing.module */ "./src/app/photogallery/photogallery-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_photoalbum_page_photoalbum_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/photoalbum-page/photoalbum-page.component */ "./src/app/photogallery/components/photoalbum-page/photoalbum-page.component.ts");
/* harmony import */ var _components_photogallery_page_photogallery_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/photogallery-page/photogallery-page.component */ "./src/app/photogallery/components/photogallery-page/photogallery-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PhotogalleryModule = /** @class */ (function () {
    function PhotogalleryModule() {
    }
    PhotogalleryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_photoalbum_page_photoalbum_page_component__WEBPACK_IMPORTED_MODULE_4__["PhotoalbumPageComponent"],
                _components_photogallery_page_photogallery_page_component__WEBPACK_IMPORTED_MODULE_5__["PhotogalleryPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _photogallery_routing_module__WEBPACK_IMPORTED_MODULE_2__["PhotogalleryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], PhotogalleryModule);
    return PhotogalleryModule;
}());



/***/ }),

/***/ "./src/app/services/photo-library/photo-album.resolver.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/photo-library/photo-album.resolver.ts ***!
  \****************************************************************/
/*! exports provided: PhotoAlbumResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoAlbumResolver", function() { return PhotoAlbumResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo_library_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-library.service */ "./src/app/services/photo-library/photo-library.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoAlbumResolver = /** @class */ (function () {
    function PhotoAlbumResolver(photoLibraryService) {
        this.photoLibraryService = photoLibraryService;
    }
    PhotoAlbumResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        var webId = route.params.webId;
        return this.photoLibraryService.getItem({ id: id, webId: webId });
    };
    PhotoAlbumResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_photo_library_service__WEBPACK_IMPORTED_MODULE_1__["PhotoLibraryService"]])
    ], PhotoAlbumResolver);
    return PhotoAlbumResolver;
}());



/***/ }),

/***/ "./src/app/services/photo-library/photo-albums.resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/photo-library/photo-albums.resolver.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoAlbumsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoAlbumsResolver", function() { return PhotoAlbumsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo_library_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-library.service */ "./src/app/services/photo-library/photo-library.service.ts");
/* harmony import */ var src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/content-types */ "./src/app/constants/content-types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoAlbumsResolver = /** @class */ (function () {
    function PhotoAlbumsResolver(photoLibraryService) {
        this.photoLibraryService = photoLibraryService;
    }
    PhotoAlbumsResolver.prototype.resolve = function (route, state) {
        var webId = route.params.webId;
        return this.photoLibraryService.getItemsPaged({ filter: "ContentType eq '" + encodeURI(src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_2__["contentTypes"].album) + "'",
            top: 8, orderBy: [['slAlbumIndex', true]], webId: webId });
    };
    PhotoAlbumsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_photo_library_service__WEBPACK_IMPORTED_MODULE_1__["PhotoLibraryService"]])
    ], PhotoAlbumsResolver);
    return PhotoAlbumsResolver;
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

/***/ "./src/app/services/photo-library/photos.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/photo-library/photos.resolver.ts ***!
  \***********************************************************/
/*! exports provided: PhotosResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosResolver", function() { return PhotosResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo_library_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-library.service */ "./src/app/services/photo-library/photo-library.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotosResolver = /** @class */ (function () {
    function PhotosResolver(photoLibraryService) {
        this.photoLibraryService = photoLibraryService;
    }
    PhotosResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        var webId = route.params.webId;
        return this.photoLibraryService.getFiles(id, webId);
    };
    PhotosResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_photo_library_service__WEBPACK_IMPORTED_MODULE_1__["PhotoLibraryService"]])
    ], PhotosResolver);
    return PhotosResolver;
}());



/***/ })

}]);
//# sourceMappingURL=photogallery-photogallery-module.js.map