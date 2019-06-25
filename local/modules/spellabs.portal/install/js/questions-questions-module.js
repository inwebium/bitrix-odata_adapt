(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questions-questions-module"],{

/***/ "./src/app/questions/components/questions-page/questions-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/questions/components/questions-page/questions-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page-header\">\n  <div class=\"l-breadcrumbs\">\n    <div class=\"l-breadcrumb\"><a [routerLink]=\"['/company']\">Главная</a></div>\n    <div class=\"l-breadcrumb\">Вопросы и предложения</div>\n  </div>\n  <div class=\"title\">Вопросы и предложения</div>\n</div>\n<div class=\"l-page\">\n  <div class=\"l-page-inner\">\n    <div class=\"l-page__content\">\n      <div class=\"l-questions\">\n        <div class=\"header\">\n          <div class=\"text\">\n            Если на этой странице Вы не нашли ответ на свой вопрос, адресуйте его нашему\n            сотруднику, и мы постараемся ответить, как можно скорее\n          </div>\n          <div class=\"control\">\n            <input\n              type=\"button\"\n              class=\"btn btn-default\"\n              value=\"Написать\"\n              (click)=\"feedbackService.toggleModal()\"\n            />\n          </div>\n        </div>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Вопрос</th>\n              <th>Дата создания</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr\n              (click)=\"toggleQuestion(questionItem, $event)\"\n              #questionItem\n              *ngFor=\"let item of questionList\"\n            >\n              <td>\n                <div class=\"admin-controls\">\n                  <app-admin-controls (click)=\"$event.stopPropagation();\"></app-admin-controls>\n                </div>\n                <div class=\"question\" [innerHTML]=\"item.question\"></div>\n                <div class=\"answer\">\n                  <div class=\"text\">\n                    <app-html-container [innerHTML]=\"item.answer\"></app-html-container>\n                  </div>\n                  <div class=\"collapse\">\n                    <span>Свернуть</span>\n                  </div>\n                </div>\n              </td>\n              <td>{{ item.date }}</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"navigation\">\n          <div class=\"m-page-nav\" *ngIf=\"itemsLength > 15\">\n            <a class=\"to-begin\" (click)=\"start(hasPrev)\" [class.disabled]=\"!hasPrev\">\n              В начало\n            </a>\n            <input\n              type=\"button\"\n              class=\"prev-page\"\n              (click)=\"prev()\"\n              [class.disabled]=\"!hasPrev\"\n            />\n            <input\n              type=\"button\"\n              class=\"next-page\"\n              (click)=\"next()\"\n              [class.disabled]=\"!hasNext\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/questions/components/questions-page/questions-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/questions/components/questions-page/questions-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\n  text-align: center;\n  margin: 25px 0; }\n\n.collapse {\n  text-align: right; }\n\n.collapse span {\n    display: inline-block;\n    vertical-align: top;\n    color: #dd1e25;\n    text-decoration: underline; }\n\n.header {\n  padding: 10px 15px;\n  padding-right: 200px;\n  box-sizing: border-box;\n  position: relative;\n  margin-bottom: 25px; }\n\n.header .text {\n    color: #898888;\n    font-size: 18px; }\n\n.header .control {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 200px;\n    text-align: center; }\n\n.table {\n  table-layout: fixed;\n  border-collapse: collapse;\n  width: 100%; }\n\n.table tr:hover td {\n    background-color: #F7F7F7;\n    cursor: pointer; }\n\n.table tr th, .table tr td {\n    box-sizing: border-box;\n    padding: 10px 15px;\n    line-height: 30px; }\n\n.table tr.is-expanded td .answer {\n    display: block; }\n\n.table tr th {\n    border-bottom: 1px solid #707070;\n    text-align: left;\n    color: #898888;\n    font-size: 18px; }\n\n.table tr th:last-child {\n      width: 150px;\n      text-align: center; }\n\n.table tr td {\n    vertical-align: middle;\n    position: relative; }\n\n.table tr td:last-child {\n      vertical-align: top;\n      text-align: center; }\n\n.table tr td .question {\n      display: inline-block;\n      vertical-align: top;\n      color: #050505;\n      font-size: 18px;\n      line-height: 30px; }\n\n.table tr td .answer {\n      display: none;\n      font-size: 16px;\n      line-height: 25px;\n      box-sizing: border-box;\n      position: relative;\n      padding: 20px 60px;\n      margin-bottom: 10px; }\n\n.table tr td .answer .text img {\n        max-width: 100%; }\n"

/***/ }),

/***/ "./src/app/questions/components/questions-page/questions-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/questions/components/questions-page/questions-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: QuestionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageComponent", function() { return QuestionsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.service */ "./src/app/questions/components/questions-page/questions.service.ts");
/* harmony import */ var src_app_services_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feedback/feedback.service */ "./src/app/services/feedback/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsPageComponent = /** @class */ (function () {
    function QuestionsPageComponent(questionsService, feedbackService) {
        this.questionsService = questionsService;
        this.feedbackService = feedbackService;
        this.itemsLength = 0;
        this.hasNext = null;
        this.hasPrev = null;
        this.questionList = [];
    }
    QuestionsPageComponent.prototype.toggleQuestion = function (question, event) {
        event.stopPropagation();
        question.classList.toggle('is-expanded');
    };
    QuestionsPageComponent.prototype.fetchQuestionList = function () {
        var _this = this;
        this.questionsService.getQuestionList().then(function (list) {
            _this.questionList = list;
            _this.updatePagination();
        });
    };
    QuestionsPageComponent.prototype.next = function () {
        var _this = this;
        this.questionsService.next().then(function (list) {
            _this.questionList = list;
            _this.updatePagination();
        });
    };
    QuestionsPageComponent.prototype.prev = function () {
        var _this = this;
        this.questionsService.prev().then(function (list) {
            _this.questionList = list;
            _this.updatePagination();
        });
    };
    QuestionsPageComponent.prototype.start = function (canStart) {
        var _this = this;
        if (canStart) {
            this.questionsService.getQuestionList().then(function (list) {
                _this.questionList = list;
                _this.updatePagination();
            });
        }
    };
    QuestionsPageComponent.prototype.updatePagination = function () {
        this.hasNext = this.questionsService.hasNext();
        this.hasPrev = this.questionsService.hasPrev();
    };
    QuestionsPageComponent.prototype.getItemsLength = function () {
        var _this = this;
        this.questionsService.getItemsLength().then(function (length) {
            _this.itemsLength = length;
        });
    };
    QuestionsPageComponent.prototype.ngOnInit = function () {
        this.getItemsLength();
        this.fetchQuestionList();
        this.getItemsLength();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('questionItem', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], QuestionsPageComponent.prototype, "employeeCardElements", void 0);
    QuestionsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions-page',
            template: __webpack_require__(/*! ./questions-page.component.html */ "./src/app/questions/components/questions-page/questions-page.component.html"),
            styles: [__webpack_require__(/*! ./questions-page.component.scss */ "./src/app/questions/components/questions-page/questions-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"],
            src_app_services_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]])
    ], QuestionsPageComponent);
    return QuestionsPageComponent;
}());



/***/ }),

/***/ "./src/app/questions/components/questions-page/questions.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/questions/components/questions-page/questions.service.ts ***!
  \**************************************************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp */ "./node_modules/@pnp/sp/dist/sp.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.listTitle = 'Вопросы и предложения';
        this.questionList = [];
        // tslint:disable:no-inferrable-types
        this.question = 'slQuestion';
        this.answer = 'slAnswer';
        this.order = 'slIndex';
        this.pageSize = 15;
        this.pageIndex = 0;
        moment__WEBPACK_IMPORTED_MODULE_1__["locale"]('ru');
        moment__WEBPACK_IMPORTED_MODULE_1__["updateLocale"]('ru', {
            calendar: {
                sameDay: '[Сегодня]',
                nextDay: 'DD MMMM YYYY',
                nextWeek: 'DD MMMM YYYY',
                lastDay: '[Вчера]',
                lastWeek: 'DD MMMM YYYY',
                sameElse: 'DD MMMM YYYY'
            }
        });
    }
    QuestionsService.prototype.getQuestionList = function () {
        var _this = this;
        this.pageIndex = 0;
        return new Promise(function (resolve, reject) {
            _pnp_sp__WEBPACK_IMPORTED_MODULE_2__["sp"].web.lists
                .getByTitle(_this.listTitle)
                .items.select('Title', 'Id', 'Created', _this.question, _this.order, _this.answer)
                .skip(0)
                .top(_this.pageSize)
                .orderBy('Created', false)
                .getPaged()
                .then(function (list) {
                _this.getQuestionListItems(list);
                resolve(_this.questionList);
            });
        });
    };
    QuestionsService.prototype.getQuestionListItems = function (list) {
        this.questionList = [];
        this.pagedCollection = list;
        var results = list.results;
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var item = results_1[_i];
            this.questionList.push({
                id: item.Id,
                question: item.slQuestion,
                answer: item.slAnswer,
                order: item.slIndexNumber,
                date: moment__WEBPACK_IMPORTED_MODULE_1__(item.Created).calendar()
            });
        }
    };
    QuestionsService.prototype.getItemsLength = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _pnp_sp__WEBPACK_IMPORTED_MODULE_2__["sp"].web.lists
                            .getByTitle(_this.listTitle)
                            .items.getAll()
                            .then(function (items) {
                            resolve(items.length);
                        });
                    })];
            });
        });
    };
    QuestionsService.prototype.next = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.pagedCollection.hasNext) {
                _this.pagedCollection.getNext().then(function (res) {
                    _this.getQuestionListItems(res);
                    _this.pageIndex++;
                    resolve(_this.questionList);
                });
            }
        });
    };
    QuestionsService.prototype.prev = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.pageIndex > 0) {
                _pnp_sp__WEBPACK_IMPORTED_MODULE_2__["sp"].web.lists
                    .getByTitle(_this.listTitle)
                    .items.select('Title', 'Id', 'Created', _this.question, _this.order, _this.answer)
                    .skip(--_this.pageIndex * _this.pageSize)
                    .top(_this.pageSize)
                    .orderBy('Created', false)
                    .getPaged()
                    .then(function (list) {
                    _this.getQuestionListItems(list);
                    resolve(_this.questionList);
                });
            }
        });
    };
    QuestionsService.prototype.hasNext = function () {
        return this.pagedCollection ? this.pagedCollection.hasNext : false;
    };
    QuestionsService.prototype.hasPrev = function () {
        return this.pageIndex > 0 ? true : false;
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/questions/questions-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/questions/questions-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsRoutingModule", function() { return QuestionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_questions_page_questions_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/questions-page/questions-page.component */ "./src/app/questions/components/questions-page/questions-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_questions_page_questions_page_component__WEBPACK_IMPORTED_MODULE_2__["QuestionsPageComponent"],
        data: { animation: 'fadeAnimation', title: 'Вопросы и предложения' }
    }
];
var QuestionsRoutingModule = /** @class */ (function () {
    function QuestionsRoutingModule() {
    }
    QuestionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], QuestionsRoutingModule);
    return QuestionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/questions/questions.module.ts":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.module.ts ***!
  \***********************************************/
/*! exports provided: QuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsModule", function() { return QuestionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions-routing.module */ "./src/app/questions/questions-routing.module.ts");
/* harmony import */ var _components_questions_page_questions_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/questions-page/questions-page.component */ "./src/app/questions/components/questions-page/questions-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var QuestionsModule = /** @class */ (function () {
    function QuestionsModule() {
    }
    QuestionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_questions_page_questions_page_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _questions_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuestionsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ]
        })
    ], QuestionsModule);
    return QuestionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=questions-questions-module.js.map