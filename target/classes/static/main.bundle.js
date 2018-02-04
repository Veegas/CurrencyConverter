webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app {\n    height: 100vh;\n    background-color: azure;\n}\n\n.app__container {\n    padding: 5% 0;\n}\n\n.ng-valid.ng-dirty {\n    border-color: rgb(110, 230, 110);\n}\n\n.ng-invalid {\n    border-color: brown;\n}\n\n.form-label {\n    color: grey;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"app\">\n\n  <div class=\"app__container container\">\n    <h1 class=\"app__title text-center\">\n      Currency Converter\n    </h1>\n  </div>\n  <form [formGroup]=\"currencyForm\" (ngSubmit)=\"convertCurrency(currencyForm)\">\n    <div class=\"container d-flex justify-content-center flex-column\">\n\n      <div class=\"p-2\">\n        <div class=\"form-group\">\n          <label class=\"form-label\" for=\"baseCurrency\">Base Currency </label>\n          <input type=\"text\" class=\"form-control\" name=\"baseCurrency\" formControlName=\"toBeConverted.baseCurrency\" [(ngModel)]=\"toBeConverted.baseCurrency\"\n          [ngbTypeahead]=\"searchCurrencies\" #instance=\"ngbTypeahead\" />\n        </div>\n      </div>\n      \n      <div class=\"p-2\">\n        <div class=\"form-group\">\n          <label class=\"form-label\" for=\"baseAmount\">Base Amount </label>\n          <input type=\"number\" class=\"form-control\" name=\"baseAmount\" placeholder=\"Base Amount\" autofocus=\"\" formControlName=\"toBeConverted.baseAmount\"\n          [(ngModel)]=\"toBeConverted.baseAmount\">\n        </div>\n      </div>\n      \n      <div class=\"p-2\">\n        <div class=\"form-group\">\n            <label class=\"form-label\" for=\"targetCurrency\">Target Currency </label>\n          <input type=\"text\" class=\"form-control\" name=\"targetCurrency\" placeholder=\"Target Currency\" autofocus=\"\" formControlName=\"toBeConverted.targetCurrency\"\n            [(ngModel)]=\"toBeConverted.targetCurrency\" [ngbTypeahead]=\"searchCurrencies\" #instance=\"ngbTypeahead\">\n        </div>\n      </div>\n\n      <div class=\"p-2\">\n        <div class=\"form-group\">\n          <input type=\"number\" class=\"form-control\" name=\"targetAmount\" placeholder=\"Target Amount\" autofocus=\"\" disabled [ngModelOptions]=\"{standalone: true}\"\n            [(ngModel)]=\"toBeConverted.targetAmount\">\n        </div>\n      </div>\n\n      <div class=\"p-2 align-self-center\">\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </div>\n    </div>\n  </form>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converter_service__ = __webpack_require__("../../../../../src/app/converter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__converter__ = __webpack_require__("../../../../../src/app/converter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var currencies = ["EUR", "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"];
var AppComponent = /** @class */ (function () {
    function AppComponent(ConverterService, fb) {
        this.ConverterService = ConverterService;
        this.toBeConverted = new __WEBPACK_IMPORTED_MODULE_2__converter__["a" /* Converter */]();
        this.searchCurrencies = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return currencies.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.currencyForm = fb.group({
            "toBeConverted.baseCurrency": ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, this.validCurrency],
            "toBeConverted.baseAmount": ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, this.validAmount],
            "toBeConverted.targetCurrency": ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, this.validCurrency],
            "toBeConverted.targetAmount": ['', { disabled: true }],
        });
    }
    AppComponent.prototype.convertCurrency = function (form) {
        var _this = this;
        console.log("FORM: ", form);
        // console.log("baseCurrency: ", form.control["toBeConverted.baseCurrency"]);
        if (!form.valid) {
            console.log("Invalid Form");
            return;
        }
        this.ConverterService.convertCurrency(this.toBeConverted).subscribe(function (convertedResponse) {
            _this.toBeConverted = convertedResponse;
        });
    };
    AppComponent.prototype.validCurrency = function (c) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(c).map(function (c) {
            if (currencies.indexOf(c.value) > -1) {
                return null;
            }
            return { valid: false };
        });
    };
    AppComponent.prototype.validAmount = function (c) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(c).map(function (c) {
            return c.value > 0 ? null : { valid: false };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('instance'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeahead */])
    ], AppComponent.prototype, "instance", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__converter_service__["a" /* ConverterService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__converter_service__["a" /* ConverterService */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__converter_service__ = __webpack_require__("../../../../../src/app/converter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__converter_service__["a" /* ConverterService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/converter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var API_URL = __WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].apiUrl;
var ConverterService = /** @class */ (function () {
    function ConverterService(http) {
        this.http = http;
    }
    ConverterService.prototype.convertCurrency = function (toBeConverted) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
        params.set("baseCurrency", toBeConverted.baseCurrency);
        params.set("targetCurrency", toBeConverted.targetCurrency);
        params.set("baseAmount", toBeConverted.baseAmount.toString());
        return this.http
            .get(API_URL + '/convert', { search: params })
            .map(function (response) {
            var converter = response.json();
            return converter;
        })
            .catch(this.handleError);
    };
    ConverterService.prototype.handleError = function (error) {
        console.error('ConverterService::handleError', error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    ConverterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ConverterService);
    return ConverterService;
}());



/***/ }),

/***/ "../../../../../src/app/converter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Converter; });
var Converter = /** @class */ (function () {
    function Converter(values) {
        if (values === void 0) { values = { baseCurrency: "USD", targetCurrency: "EUR", baseAmount: 1 }; }
        this.baseCurrency = '';
        this.targetCurrency = '';
        Object.assign(this, values);
    }
    return Converter;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8000'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map