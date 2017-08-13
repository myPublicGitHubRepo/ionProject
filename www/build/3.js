webpackJsonp([3],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangTestPageModule", function() { return LangTestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_test__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LangTestPageModule = (function () {
    function LangTestPageModule() {
    }
    return LangTestPageModule;
}());
LangTestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lang_test__["a" /* LangTestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lang_test__["a" /* LangTestPage */]),
        ],
    })
], LangTestPageModule);

//# sourceMappingURL=lang-test.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_languages_languages_provider__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LangTestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LangTestPage = (function () {
    function LangTestPage(viewCtrl, languagesProvider) {
        this.viewCtrl = viewCtrl;
        this.languagesProvider = languagesProvider;
        this.languages = [];
        console.log(languagesProvider);
        console.log(languagesProvider.languages);
        this.languages = languagesProvider.languages;
    }
    LangTestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LangTestPage');
    };
    LangTestPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return LangTestPage;
}());
LangTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lang-test',template:/*ion-inline-start:"D:\Programming\ionic\splinxs\ionProject\src\pages\lang-test\lang-test.html"*/'<!--\n\n  Generated template for the LangTestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">Close</button>\n\n        </ion-buttons>\n\n        <ion-title>langTest</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <li *ngFor="let lang of languagesProvider.languages">\n\n        {{lang.nativeName}}\n\n    </li>\n\n    <div *ngIf="languagesProvider.languages.length<1">\n\n        <h1>\n\n            No languages found\n\n        </h1>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Programming\ionic\splinxs\ionProject\src\pages\lang-test\lang-test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_languages_languages_provider__["a" /* LanguagesProvider */]])
], LangTestPage);

//# sourceMappingURL=lang-test.js.map

/***/ })

});
//# sourceMappingURL=3.js.map