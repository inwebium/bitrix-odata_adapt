(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
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
        return 'Id,Title,slText,slUrl,slShow,slIndex,AttachmentFiles/ServerRelativeUrl';
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
    BannersService.prototype.convertListItemToEntity = function (item) {
        var banner = {
            id: item.Id,
            title: item.Title,
            imageUrl: item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : null,
            isShow: item.slShow,
            url: item.slUrl,
            text: item.slText
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
}(_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/departments/departments.resolver.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/departments/departments.resolver.ts ***!
  \**************************************************************/
/*! exports provided: DepartmentsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsResolver", function() { return DepartmentsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _departments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./departments.service */ "./src/app/services/departments/departments.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentsResolver = /** @class */ (function () {
    function DepartmentsResolver(departmentsService) {
        this.departmentsService = departmentsService;
    }
    DepartmentsResolver.prototype.resolve = function (route, state) {
        return this.departmentsService.getItems();
    };
    DepartmentsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_departments_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentsService"]])
    ], DepartmentsResolver);
    return DepartmentsResolver;
}());



/***/ }),

/***/ "./src/app/services/departments/departments.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/departments/departments.service.ts ***!
  \*************************************************************/
/*! exports provided: DepartmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return DepartmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
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


var DepartmentsService = /** @class */ (function (_super) {
    __extends(DepartmentsService, _super);
    function DepartmentsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DepartmentsService.prototype.getListRelativePath = function () {
        return '';
    };
    DepartmentsService.prototype.getListTitle = function () {
        return 'Департаменты';
    };
    DepartmentsService.prototype.getSelect = function () {
        return 'Id,Title,slIndexNumber,slParentDepartment/Id,slParentDepartment/Title,slCode,slParentCode,'
            + 'slUnitTypeName,slLookupManager/Id,slLookupManager/Title,slLookupManager/slFullName,'
            + 'slLookupManager/slLogin,slLookupManager/slPositionName,slEmployeeCount,slLookupManager/slReason';
    };
    DepartmentsService.prototype.getExpand = function () {
        return 'slLookupManager,slParentDepartment';
    };
    DepartmentsService.prototype.getOrderBy = function () {
        return [['slIndexNumber', true]];
    };
    DepartmentsService.prototype.getTop = function () {
        return 5000;
    };
    DepartmentsService.prototype.isMock = function () {
        return false;
    };
    DepartmentsService.prototype.getMockItems = function () {
        return [
            { id: 1, title: 'Транслом', parentDepartmentId: null, },
            { id: 2, title: 'Департамент маркетинга', parentDepartmentId: 1, },
            { id: 3, title: 'Отдел рекламы', parentDepartmentId: 2, },
            { id: 4, title: 'Отдел PR', parentDepartmentId: 2, },
            { id: 5, title: 'Отдел дизайна', parentDepartmentId: 2, },
            { id: 6, title: 'Отдел разработки', parentDepartmentId: 2, },
            { id: 7, title: 'Отдел', parentDepartmentId: 2, },
            { id: 8, title: 'Департамент логистики', parentDepartmentId: 1, },
            { id: 9, title: 'Департамент финансов', parentDepartmentId: 1, },
            { id: 10, title: 'Транслом', parentDepartmentId: null, },
            { id: 11, title: 'Департамент маркетинга', parentDepartmentId: 10, },
            { id: 12, title: 'Отдел рекламы', parentDepartmentId: 11, },
            { id: 13, title: 'Отдел PR', parentDepartmentId: 11, },
            { id: 14, title: 'Отдел дизайна', parentDepartmentId: 11, },
            { id: 15, title: 'Отдел разработки', parentDepartmentId: 11, },
            { id: 16, title: 'Отдел', parentDepartmentId: 11, },
            { id: 17, title: 'Департамент логистики', parentDepartmentId: 10, },
            { id: 18, title: 'Департамент финансов', parentDepartmentId: 10, }
        ];
    };
    DepartmentsService.prototype.convertListItemToEntity = function (item) {
        var department = {
            id: item.Id,
            title: item.Title,
            code: item.slCode,
            indexNumber: item.slIndexNumber,
            parentCode: item.slParentCode,
            unitTypeName: item.slUnitTypeName,
            parentId: null,
            parentDepartmentId: null,
            parentDepartmentTitle: null,
            employeeCount: item.slEmployeeCount
        };
        if (item.slParentDepartment != null) {
            department.parentId = item.slParentDepartment.Id;
            department.parentDepartmentId = item.slParentDepartment.Id;
            department.parentDepartmentTitle = item.slParentDepartment.Title;
        }
        if (item.slLookupManager != null) {
            department.lookupManagerId = item.slLookupManager.Id;
            department.lookupManagerFullName = item.slLookupManager.slFullName;
            department.lookupManagerPhoto = "/_layouts/15/userphoto.aspx?size=L&username=" + item.slLookupManager.slLogin;
            department.lookupManagerPosition = item.slLookupManager.slPositionName;
            department.lookupManagerReason = item.slLookupManager.slReason;
            department.profileManagerRoute = ['/phonebook', item.slLookupManager.Id];
        }
        return department;
    };
    DepartmentsService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    DepartmentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DepartmentsService);
    return DepartmentsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portal/portal.service */ "./src/app/services/portal/portal.service.ts");
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
    };
    PhotoLibraryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"]])
    ], PhotoLibraryService);
    return PhotoLibraryService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_4__["ListItemsService"]));



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
/* harmony import */ var _portal_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portal/portal.service */ "./src/app/services/portal/portal.service.ts");
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
        __metadata("design:paramtypes", [_portal_portal_service__WEBPACK_IMPORTED_MODULE_2__["PortalService"]])
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
//# sourceMappingURL=common.js.map