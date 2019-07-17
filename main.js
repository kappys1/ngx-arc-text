(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-arc-text/src/lib/ngx-arc-text.component.ts":
/*!*****************************************************************!*\
  !*** ./projects/ngx-arc-text/src/lib/ngx-arc-text.component.ts ***!
  \*****************************************************************/
/*! exports provided: NgxArcTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxArcTextComponent", function() { return NgxArcTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var arc_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! arc-text */ "./projects/ngx-arc-text/node_modules/arc-text/dist/arc-text.es5.js");



var NgxArcTextComponent = /** @class */ (function () {
    function NgxArcTextComponent(letters) {
        this.letters = letters;
        this.direction = 1;
        this.arc = 150;
        this.text = '';
    }
    NgxArcTextComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    NgxArcTextComponent.prototype.update = function () {
        var _this = this;
        setTimeout(function () { return _this.arcLetters(); });
    };
    NgxArcTextComponent.prototype.arcLetters = function () {
        if (this.textCyrcle) {
            this.textCyrcle.destroy();
        }
        this.letters.nativeElement.innerHTML = this.text;
        this.textCyrcle = new arc_text__WEBPACK_IMPORTED_MODULE_2__["default"](this.letters.nativeElement);
        this.textCyrcle.arc(this.arc);
        this.textCyrcle.direction(this.direction);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxArcTextComponent.prototype, "direction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxArcTextComponent.prototype, "arc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxArcTextComponent.prototype, "text", void 0);
    NgxArcTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-arc-text',
            template: "\n      {{text}}\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NgxArcTextComponent);
    return NgxArcTextComponent;
}());



/***/ }),

/***/ "./projects/ngx-arc-text/src/lib/ngx-arc-text.module.ts":
/*!**************************************************************!*\
  !*** ./projects/ngx-arc-text/src/lib/ngx-arc-text.module.ts ***!
  \**************************************************************/
/*! exports provided: NgxArcTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxArcTextModule", function() { return NgxArcTextModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_arc_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-arc-text.component */ "./projects/ngx-arc-text/src/lib/ngx-arc-text.component.ts");



var NgxArcTextModule = /** @class */ (function () {
    function NgxArcTextModule() {
    }
    NgxArcTextModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ngx_arc_text_component__WEBPACK_IMPORTED_MODULE_2__["NgxArcTextComponent"]],
            imports: [],
            exports: [_ngx_arc_text_component__WEBPACK_IMPORTED_MODULE_2__["NgxArcTextComponent"]]
        })
    ], NgxArcTextModule);
    return NgxArcTextModule;
}());



/***/ }),

/***/ "./projects/ngx-arc-text/src/public_api.ts":
/*!*************************************************!*\
  !*** ./projects/ngx-arc-text/src/public_api.ts ***!
  \*************************************************/
/*! exports provided: NgxArcTextComponent, NgxArcTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_arc_text_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-arc-text.component */ "./projects/ngx-arc-text/src/lib/ngx-arc-text.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxArcTextComponent", function() { return _lib_ngx_arc_text_component__WEBPACK_IMPORTED_MODULE_0__["NgxArcTextComponent"]; });

/* harmony import */ var _lib_ngx_arc_text_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-arc-text.module */ "./projects/ngx-arc-text/src/lib/ngx-arc-text.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxArcTextModule", function() { return _lib_ngx_arc_text_module__WEBPACK_IMPORTED_MODULE_1__["NgxArcTextModule"]; });

/*
 * Public API Surface of ngx-arc-text
 */




/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav>\n  <h1>{{title}}</h1>\n</nav>\n\n<section>\n<div class=\"show\">\n    <ngx-arc-text [text]=\"text\" [class]=\"class\" [arc]=\"arc\" [direction]=direction #letters></ngx-arc-text>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"content-row\">\n\n      <div class=\"form-group\">\n        <label>Text</label>\n        <input [value]=\"text\" (input)=\"text = $event.target.value || ''\" type=\"text\">\n      </div>\n      <div class=\"form-group\">\n        <label>Arc</label>\n        <input [value]=\"arc\" (input)=\"arc = $event.target.value || ''\" type=\"number\">\n      </div>\n\n    </div>\n    <div class=\"content-row\">\n      <div class=\"form-group\">\n        <label>Text</label>\n        <select class=\"custom-select\" [(ngModel)]=\"class\" (change)=updateLetters()>\n          <option value=\"\" disabled>Choose your font-family</option>\n          <option *ngFor=\"let class of classes\" [value]=\"class.value\" >{{class.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Text</label>\n        <select class=\"custom-select\" [(ngModel)]=\"direction\" (change)=updateLetters()>\n          <option value=\"\" disabled>Choose the direction</option>\n          <option *ngFor=\"let direction of directions\" [value]=\"direction.value\">{{direction.name}}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-row-center-center-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: center;\n  justify-content: center;\n  -moz-align-items: center;\n  align-items: center;\n  align-content: center; }\n\n.flex-row-center-start-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: flex-start;\n  justify-content: flex-start;\n  -moz-align-items: center;\n  align-items: center;\n  align-content: center; }\n\n.flex-row-center-end-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end;\n  -moz-align-items: center;\n  align-items: center;\n  align-content: center; }\n\n.flex-row-start-start-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: flex-start;\n  justify-content: flex-start;\n  -moz-align-items: flex-start;\n  align-items: flex-start;\n  align-content: flex-start; }\n\n.flex-row-start-center-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: center;\n  justify-content: center;\n  -moz-align-items: flex-start;\n  align-items: flex-start;\n  align-content: flex-start; }\n\n.flex-row-start-end-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end;\n  -moz-align-items: flex-start;\n  align-items: flex-start;\n  align-content: flex-start; }\n\n.flex-row-end-start-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: flex-start;\n  justify-content: flex-start;\n  -moz-align-items: flex-end;\n  align-items: flex-end;\n  align-content: flex-end; }\n\n.flex-row-end-end-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end;\n  -moz-align-items: flex-end;\n  align-items: flex-end;\n  align-content: flex-end; }\n\n.flex-colum-center-center-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: column nowrap;\n  -moz-justify-content: center;\n  justify-content: center;\n  -moz-align-items: center;\n  align-items: center;\n  align-content: center; }\n\n.flex-colum-center-start-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: column nowrap;\n  -moz-justify-content: flex-start;\n  justify-content: flex-start;\n  -moz-align-items: center;\n  align-items: center;\n  align-content: center; }\n\n.flex-column-start-center-content {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: column nowrap;\n  -moz-justify-content: center;\n  justify-content: center;\n  -moz-align-items: flex-start;\n  align-items: flex-start;\n  align-content: flex-start; }\n\n:host .show {\n  width: 100%;\n  height: 25%;\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: center;\n  justify-content: center;\n  -moz-align-items: center;\n  align-items: center;\n  align-content: center; }\n\n:host nav {\n  padding: 0.1rem 1rem;\n  background-color: #AA0015;\n  color: white; }\n\n:host section {\n  max-width: 1080px;\n  height: 100%;\n  margin: 0 auto; }\n\n:host .content-row {\n  display: -moz-flex;\n  display: flex;\n  flex-flow: row nowrap;\n  -moz-justify-content: space-around;\n  justify-content: space-around;\n  -moz-align-items: center;\n  align-items: center;\n  align-content: center;\n  padding: 1rem; }\n\n:host .content .form-group {\n  width: 40%;\n  font-size: 1rem;\n  display: -moz-flex;\n  display: flex;\n  flex-flow: column nowrap;\n  -moz-justify-content: center;\n  justify-content: center;\n  -moz-align-items: flex-start;\n  align-items: flex-start;\n  align-content: flex-start; }\n\n:host .content .form-group label {\n    margin-bottom: 0.5em; }\n\n:host .content .form-group select,\n  :host .content .form-group input {\n    width: 100%;\n    height: 25px;\n    font-size: 0.8em; }\n\n:host ngx-arc-text.Roboto {\n  font-family: 'Roboto', sans-serif; }\n\n:host ngx-arc-text.Roboto-mono {\n    font-family: 'Roboto Mono', monospace; }\n\n:host ngx-arc-text.Montserrat {\n  font-family: 'Montserrat', sans-serif; }\n\n:host ngx-arc-text.Mountains {\n  font-family: 'Mountains of Christmas', cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rYXBweXMxL25neC1hcmMtdGV4dC9zcmMvYXBwL19mbGV4Ym94LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQva2FwcHlzMS9uZ3gtYXJjLXRleHQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQva2FwcHlzMS9uZ3gtYXJjLXRleHQvc3JjL2FwcC9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMFpFO0VBMVZFLG1CQUFrQjtFQUVsQixjQUFhO0VBK0ZiLHNCQStPb0M7RUE3RnBDLDZCQXdHdUM7RUF2R3ZDLHdCQXVHdUM7RUFyRXZDLHlCQXFFZ0M7RUFwRWhDLG9CQW9FZ0M7RUFuQmhDLHNCQW1CZ0MsRUFDakM7O0FBR0Q7RUEvVkUsbUJBQWtCO0VBRWxCLGNBQWE7RUErRmIsc0JBK09vQztFQTdGcEMsaUNBNkcyQztFQTVHM0MsNEJBNEcyQztFQTFFM0MseUJBMEVnQztFQXpFaEMsb0JBeUVnQztFQXhCaEMsc0JBd0JnQyxFQUNqQzs7QUFDRDtFQWxXRSxtQkFBa0I7RUFFbEIsY0FBYTtFQStGYixzQkErT29DO0VBN0ZwQywrQkFnSHlDO0VBL0d6QywwQkErR3lDO0VBN0V6Qyx5QkE2RWdDO0VBNUVoQyxvQkE0RWdDO0VBM0JoQyxzQkEyQmdDLEVBQ2pDOztBQUNEO0VBcldFLG1CQUFrQjtFQUVsQixjQUFhO0VBK0ZiLHNCQStPb0M7RUE3RnBDLGlDQW1IK0M7RUFsSC9DLDRCQWtIK0M7RUFoRi9DLDZCQWdGb0M7RUEvRXBDLHdCQStFb0M7RUE5QnBDLDBCQThCb0MsRUFDckM7O0FBQ0Q7RUF4V0UsbUJBQWtCO0VBRWxCLGNBQWE7RUErRmIsc0JBK09vQztFQTdGcEMsNkJBc0gyQztFQXJIM0Msd0JBcUgyQztFQW5GM0MsNkJBbUZvQztFQWxGcEMsd0JBa0ZvQztFQWpDcEMsMEJBaUNvQyxFQUNyQzs7QUFDRDtFQTNXRSxtQkFBa0I7RUFFbEIsY0FBYTtFQStGYixzQkErT29DO0VBN0ZwQywrQkF5SDZDO0VBeEg3QywwQkF3SDZDO0VBdEY3Qyw2QkFzRm9DO0VBckZwQyx3QkFxRm9DO0VBcENwQywwQkFvQ29DLEVBQ3JDOztBQUNEO0VBOVdFLG1CQUFrQjtFQUVsQixjQUFhO0VBK0ZiLHNCQStPb0M7RUE3RnBDLGlDQTRINkM7RUEzSDdDLDRCQTJINkM7RUF6RjdDLDJCQXlGa0M7RUF4RmxDLHNCQXdGa0M7RUF2Q2xDLHdCQXVDa0MsRUFDbkM7O0FBQ0Q7RUFqWEUsbUJBQWtCO0VBRWxCLGNBQWE7RUErRmIsc0JBK09vQztFQTdGcEMsK0JBK0gyQztFQTlIM0MsMEJBOEgyQztFQTVGM0MsMkJBNEZrQztFQTNGbEMsc0JBMkZrQztFQTFDbEMsd0JBMENrQyxFQUNuQzs7QUFDRDtFQXBYRSxtQkFBa0I7RUFFbEIsY0FBYTtFQStGYix5QkErT29DO0VBN0ZwQyw2QkFrSTBDO0VBakkxQyx3QkFpSTBDO0VBL0YxQyx5QkErRm1DO0VBOUZuQyxvQkE4Rm1DO0VBN0NuQyxzQkE2Q21DLEVBQ3BDOztBQUNEO0VBdlhFLG1CQUFrQjtFQUVsQixjQUFhO0VBK0ZiLHlCQStPb0M7RUE3RnBDLGlDQXFJOEM7RUFwSTlDLDRCQW9JOEM7RUFsRzlDLHlCQWtHbUM7RUFqR25DLG9CQWlHbUM7RUFoRG5DLHNCQWdEbUMsRUFDcEM7O0FBQ0Q7RUExWEUsbUJBQWtCO0VBRWxCLGNBQWE7RUErRmIseUJBK09vQztFQTdGcEMsNkJBd0k4QztFQXZJOUMsd0JBdUk4QztFQXJHOUMsNkJBcUd1QztFQXBHdkMsd0JBb0d1QztFQW5EdkMsMEJBbUR1QyxFQUN4Qzs7QUN4Ykg7RUFHSSxZQUFXO0VBQ1gsWUFBVztFRHdEWCxtQkFBa0I7RUFFbEIsY0FBYTtFQStGYixzQkErT29DO0VBN0ZwQyw2QkMxU3lDO0VEMlN6Qyx3QkMzU3lDO0VENlV6Qyx5QkM3VWlDO0VEOFVqQyxvQkM5VWlDO0VEK1hqQyxzQkMvWGlDLEVBQ2xDOztBQU5IO0VBU0kscUJBQW9CO0VBQ3BCLDBCQ2JlO0VEY2YsYUFBWSxFQUNiOztBQVpIO0VBZUksa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixlQUFjLEVBQ2Y7O0FBbEJIO0VENERJLG1CQUFrQjtFQUVsQixjQUFhO0VBK0ZiLHNCQStPb0M7RUE3RnBDLG1DQ3pSaUQ7RUQwUmpELDhCQzFSaUQ7RUQ0VGpELHlCQzVUbUM7RUQ2VG5DLG9CQzdUbUM7RUQ4V25DLHNCQzlXbUM7RUFDakMsY0FBYSxFQUNkOztBQXhCTDtFQTBCTSxXQUFVO0VBQ1YsZ0JBQWU7RURpQ2pCLG1CQUFrQjtFQUVsQixjQUFhO0VBK0ZiLHlCQStPb0M7RUE3RnBDLDZCQ25Sa0Q7RURvUmxELHdCQ3BSa0Q7RURzVGxELDZCQ3RUMEM7RUR1VDFDLHdCQ3ZUMEM7RUR3VzFDLDBCQ3hXMEMsRUFVekM7O0FBdENMO0lBOEJRLHFCQUFvQixFQUNyQjs7QUEvQlA7O0lBa0NRLFlBQVc7SUFDWCxhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQXJDUDtFQTBDTSxrQ0FBaUMsRUFJbEM7O0FBOUNMO0lBNENRLHNDQUFxQyxFQUN0Qzs7QUE3Q1A7RUFnRE0sc0NBQXFDLEVBQ3RDOztBQWpETDtFQW1ETSwrQ0FBOEMsRUFDL0MiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGbGV4Ym94IE1peGluc1xuLy8gaHR0cDovL3BoaWxpcHdhbHRvbi5naXRodWIuaW8vc29sdmVkLWJ5LWZsZXhib3gvXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcGhpbGlwd2FsdG9uL3NvbHZlZC1ieS1mbGV4Ym94XG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDEzIEJyaWFuIEZyYW5jb1xuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xuLy8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG4vLyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG4vLyBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWVxuLy8gQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcbi8vIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG4vLyBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vXG4vLyBUaGlzIGlzIGEgc2V0IG9mIG1peGlucyBmb3IgdGhvc2Ugd2hvIHdhbnQgdG8gbWVzcyBhcm91bmQgd2l0aCBmbGV4Ym94XG4vLyB1c2luZyB0aGUgbmF0aXZlIHN1cHBvcnQgb2YgY3VycmVudCBicm93c2Vycy4gRm9yIGZ1bGwgc3VwcG9ydCB0YWJsZVxuLy8gY2hlY2s6IGh0dHA6Ly9jYW5pdXNlLmNvbS9mbGV4Ym94XG4vLyBcbi8vIEJhc2ljYWxseSB0aGlzIHdpbGwgdXNlOlxuLy9cbi8vICogRmFsbGJhY2ssIG9sZCBzeW50YXggKElFMTAsIG1vYmlsZSB3ZWJraXQgYnJvd3NlcnMgLSBubyB3cmFwcGluZylcbi8vICogRmluYWwgc3RhbmRhcmRzIHN5bnRheCAoRkYsIFNhZmFyaSwgQ2hyb21lLCBJRTExLCBPcGVyYSlcbi8vXG4vLyBUaGlzIHdhcyBpbnNwaXJlZCBieTpcbi8vXG4vLyAqIGh0dHA6Ly9kZXYub3BlcmEuY29tL2FydGljbGVzL3ZpZXcvYWR2YW5jZWQtY3Jvc3MtYnJvd3Nlci1mbGV4Ym94L1xuLy9cbi8vIFdpdGggaGVscCBmcm9tOlxuLy9cbi8vICogaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvXG4vLyAqIGh0dHA6Ly90aGUtZWNob3BsZXgubmV0L2ZsZXh5Ym94ZXMvXG4vLyAqIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9oaDc3MjA2OSh2PXZzLjg1KS5hc3B4XG4vLyAqIGh0dHA6Ly9jc3MtdHJpY2tzLmNvbS91c2luZy1mbGV4Ym94L1xuLy8gKiBodHRwOi8vZGV2Lm9wZXJhLmNvbS9hcnRpY2xlcy92aWV3L2FkdmFuY2VkLWNyb3NzLWJyb3dzZXItZmxleGJveC9cbi8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tdXMvZG9jcy93ZWIvZ3VpZGUvY3NzL2ZsZXhpYmxlX2JveGVzXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGbGV4Ym94IENvbnRhaW5lcnNcbi8vXG4vLyBUaGUgJ2ZsZXgnIHZhbHVlIGNhdXNlcyBhbiBlbGVtZW50IHRvIGdlbmVyYXRlIGEgYmxvY2stbGV2ZWwgZmxleFxuLy8gY29udGFpbmVyIGJveC5cbi8vXG4vLyBUaGUgJ2lubGluZS1mbGV4JyB2YWx1ZSBjYXVzZXMgYW4gZWxlbWVudCB0byBnZW5lcmF0ZSBhIGlubGluZS1sZXZlbFxuLy8gZmxleCBjb250YWluZXIgYm94LlxuLy9cbi8vIGRpc3BsYXk6IGZsZXggfCBpbmxpbmUtZmxleFxuLy9cbi8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNmbGV4LWNvbnRhaW5lcnNcbi8vXG4vLyAoUGxhY2Vob2xkZXIgc2VsZWN0b3JzIGZvciBlYWNoIHR5cGUsIGZvciB0aG9zZSB3aG8gcmF0aGVyIEBleHRlbmQpXG5cbkBtaXhpbiBmbGV4Ym94IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gICVmbGV4Ym94IHsgQGluY2x1ZGUgZmxleGJveDsgfVxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICBAbWl4aW4gaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otaW5saW5lLWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG4gIFxuICAlaW5saW5lLWZsZXggeyBAaW5jbHVkZSBpbmxpbmUtZmxleDsgfVxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICAvLyBGbGV4Ym94IERpcmVjdGlvblxuICAvL1xuICAvLyBUaGUgJ2ZsZXgtZGlyZWN0aW9uJyBwcm9wZXJ0eSBzcGVjaWZpZXMgaG93IGZsZXggaXRlbXMgYXJlIHBsYWNlZCBpblxuICAvLyB0aGUgZmxleCBjb250YWluZXIsIGJ5IHNldHRpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgZmxleCBjb250YWluZXInc1xuICAvLyBtYWluIGF4aXMuIFRoaXMgZGV0ZXJtaW5lcyB0aGUgZGlyZWN0aW9uIHRoYXQgZmxleCBpdGVtcyBhcmUgbGFpZCBvdXQgaW4uXG4gIC8vXG4gIC8vIFZhbHVlczogcm93IHwgcm93LXJldmVyc2UgfCBjb2x1bW4gfCBjb2x1bW4tcmV2ZXJzZVxuICAvLyBEZWZhdWx0OiByb3dcbiAgLy9cbiAgLy8gaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvI2ZsZXgtZGlyZWN0aW9uLXByb3BlcnR5XG4gIFxuICBAbWl4aW4gZmxleC1kaXJlY3Rpb24oJHZhbHVlOiByb3cpIHtcbiAgICBAaWYgJHZhbHVlID09IHJvdy1yZXZlcnNlIHtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICB9IEBlbHNlIGlmICR2YWx1ZSA9PSBjb2x1bW4ge1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIH0gQGVsc2UgaWYgJHZhbHVlID09IGNvbHVtbi1yZXZlcnNlIHtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgfSBAZWxzZSB7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICB9XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogJHZhbHVlO1xuICAgIC1tb3otZmxleC1kaXJlY3Rpb246ICR2YWx1ZTtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246ICR2YWx1ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogJHZhbHVlO1xuICB9XG4gIC8vIFNob3J0ZXIgdmVyc2lvbjpcbiAgQG1peGluIGZsZXgtZGlyKCRhcmdzLi4uKSB7IEBpbmNsdWRlIGZsZXgtZGlyZWN0aW9uKCRhcmdzLi4uKTsgfVxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICAvLyBGbGV4Ym94IFdyYXBcbiAgLy9cbiAgLy8gVGhlICdmbGV4LXdyYXAnIHByb3BlcnR5IGNvbnRyb2xzIHdoZXRoZXIgdGhlIGZsZXggY29udGFpbmVyIGlzIHNpbmdsZS1saW5lXG4gIC8vIG9yIG11bHRpLWxpbmUsIGFuZCB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjcm9zcy1heGlzLCB3aGljaCBkZXRlcm1pbmVzXG4gIC8vIHRoZSBkaXJlY3Rpb24gbmV3IGxpbmVzIGFyZSBzdGFja2VkIGluLlxuICAvL1xuICAvLyBWYWx1ZXM6IG5vd3JhcCB8IHdyYXAgfCB3cmFwLXJldmVyc2VcbiAgLy8gRGVmYXVsdDogbm93cmFwXG4gIC8vXG4gIC8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNmbGV4LXdyYXAtcHJvcGVydHlcbiAgXG4gIEBtaXhpbiBmbGV4LXdyYXAoJHZhbHVlOiBub3dyYXApIHtcbiAgICAvLyBObyBXZWJraXQgQm94IGZhbGxiYWNrLlxuICAgIC13ZWJraXQtZmxleC13cmFwOiAkdmFsdWU7XG4gICAgLW1vei1mbGV4LXdyYXA6ICR2YWx1ZTtcbiAgICBAaWYgJHZhbHVlID09IG5vd3JhcCB7XG4gICAgICAtbXMtZmxleC13cmFwOiBub25lO1xuICAgIH0gQGVsc2Uge1xuICAgICAgLW1zLWZsZXgtd3JhcDogJHZhbHVlO1xuICAgIH1cbiAgICBmbGV4LXdyYXA6ICR2YWx1ZTtcbiAgfVxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICAvLyBGbGV4Ym94IEZsb3cgKHNob3J0aGFuZClcbiAgLy9cbiAgLy8gVGhlICdmbGV4LWZsb3cnIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIGZvciBzZXR0aW5nIHRoZSAnZmxleC1kaXJlY3Rpb24nXG4gIC8vIGFuZCAnZmxleC13cmFwJyBwcm9wZXJ0aWVzLCB3aGljaCB0b2dldGhlciBkZWZpbmUgdGhlIGZsZXggY29udGFpbmVyJ3NcbiAgLy8gbWFpbiBhbmQgY3Jvc3MgYXhlcy5cbiAgLy9cbiAgLy8gVmFsdWVzOiA8ZmxleC1kaXJlY3Rpb24+IHwgPGZsZXgtd3JhcD5cbiAgLy8gRGVmYXVsdDogcm93IG5vd3JhcFxuICAvL1xuICAvLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jZmxleC1mbG93LXByb3BlcnR5XG4gIFxuICBAbWl4aW4gZmxleC1mbG93KCR2YWx1ZXM6IChyb3cgbm93cmFwKSkge1xuICAgIC8vIE5vIFdlYmtpdCBCb3ggZmFsbGJhY2suXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6ICR2YWx1ZXM7XG4gICAgLW1vei1mbGV4LWZsb3c6ICR2YWx1ZXM7XG4gICAgLW1zLWZsZXgtZmxvdzogJHZhbHVlcztcbiAgICBmbGV4LWZsb3c6ICR2YWx1ZXM7XG4gIH1cbiAgXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBcbiAgLy8gRmxleGJveCBPcmRlclxuICAvL1xuICAvLyBUaGUgJ29yZGVyJyBwcm9wZXJ0eSBjb250cm9scyB0aGUgb3JkZXIgaW4gd2hpY2ggZmxleCBpdGVtcyBhcHBlYXIgd2l0aGluXG4gIC8vIHRoZWlyIGZsZXggY29udGFpbmVyLCBieSBhc3NpZ25pbmcgdGhlbSB0byBvcmRpbmFsIGdyb3Vwcy5cbiAgLy9cbiAgLy8gRGVmYXVsdDogMFxuICAvL1xuICAvLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jb3JkZXItcHJvcGVydHlcbiAgXG4gIEBtaXhpbiBvcmRlcigkaW50OiAwKSB7XG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogJGludCArIDE7XG4gICAgLXdlYmtpdC1vcmRlcjogJGludDtcbiAgICAtbW96LW9yZGVyOiAkaW50O1xuICAgIC1tcy1mbGV4LW9yZGVyOiAkaW50O1xuICAgIG9yZGVyOiAkaW50O1xuICB9XG4gIFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIC8vIEZsZXhib3ggR3Jvd1xuICAvL1xuICAvLyBUaGUgJ2ZsZXgtZ3JvdycgcHJvcGVydHkgc2V0cyB0aGUgZmxleCBncm93IGZhY3Rvci4gTmVnYXRpdmUgbnVtYmVyc1xuICAvLyBhcmUgaW52YWxpZC5cbiAgLy9cbiAgLy8gRGVmYXVsdDogMFxuICAvL1xuICAvLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jZmxleC1ncm93LXByb3BlcnR5XG4gIFxuICBAbWl4aW4gZmxleC1ncm93KCRpbnQ6IDApIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAkaW50O1xuICAgIC13ZWJraXQtZmxleC1ncm93OiAkaW50O1xuICAgIC1tb3otZmxleC1ncm93OiAkaW50O1xuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAkaW50O1xuICAgIGZsZXgtZ3JvdzogJGludDtcbiAgfVxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICAvLyBGbGV4Ym94IFNocmlua1xuICAvL1xuICAvLyBUaGUgJ2ZsZXgtc2hyaW5rJyBwcm9wZXJ0eSBzZXRzIHRoZSBmbGV4IHNocmluayBmYWN0b3IuIE5lZ2F0aXZlIG51bWJlcnNcbiAgLy8gYXJlIGludmFsaWQuXG4gIC8vXG4gIC8vIERlZmF1bHQ6IDFcbiAgLy9cbiAgLy8gaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvI2ZsZXgtc2hyaW5rLXByb3BlcnR5XG4gIFxuICBAbWl4aW4gZmxleC1zaHJpbmsoJGludDogMSkge1xuICAgIC13ZWJraXQtZmxleC1zaHJpbms6ICRpbnQ7XG4gICAgLW1vei1mbGV4LXNocmluazogJGludDtcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogJGludDtcbiAgICBmbGV4LXNocmluazogJGludDtcbiAgfVxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICAvLyBGbGV4Ym94IEJhc2lzXG4gIC8vXG4gIC8vIFRoZSAnZmxleC1iYXNpcycgcHJvcGVydHkgc2V0cyB0aGUgZmxleCBiYXNpcy4gTmVnYXRpdmUgbGVuZ3RocyBhcmUgaW52YWxpZC5cbiAgLy9cbiAgLy8gVmFsdWVzOiBMaWtlIFwid2lkdGhcIlxuICAvLyBEZWZhdWx0OiBhdXRvXG4gIC8vXG4gIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtZmxleGJveC8jZmxleC1iYXNpcy1wcm9wZXJ0eVxuICBcbiAgQG1peGluIGZsZXgtYmFzaXMoJHZhbHVlOiBhdXRvKSB7XG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAkdmFsdWU7XG4gICAgLW1vei1mbGV4LWJhc2lzOiAkdmFsdWU7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6ICR2YWx1ZTtcbiAgICBmbGV4LWJhc2lzOiAkdmFsdWU7XG4gIH1cbiAgXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBcbiAgLy8gRmxleGJveCBcIkZsZXhcIiAoc2hvcnRoYW5kKVxuICAvL1xuICAvLyBUaGUgJ2ZsZXgnIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgY29tcG9uZW50cyBvZiBhIGZsZXhpYmxlIGxlbmd0aDogdGhlXG4gIC8vIGZsZXggZ3JvdyBmYWN0b3IgYW5kIGZsZXggc2hyaW5rIGZhY3RvciwgYW5kIHRoZSBmbGV4IGJhc2lzLiBXaGVuIGFuXG4gIC8vIGVsZW1lbnQgaXMgYSBmbGV4IGl0ZW0sICdmbGV4JyBpcyBjb25zdWx0ZWQgaW5zdGVhZCBvZiB0aGUgbWFpbiBzaXplXG4gIC8vIHByb3BlcnR5IHRvIGRldGVybWluZSB0aGUgbWFpbiBzaXplIG9mIHRoZSBlbGVtZW50LiBJZiBhbiBlbGVtZW50IGlzXG4gIC8vIG5vdCBhIGZsZXggaXRlbSwgJ2ZsZXgnIGhhcyBubyBlZmZlY3QuXG4gIC8vXG4gIC8vIFZhbHVlczogbm9uZSB8IDxmbGV4LWdyb3c+IDxmbGV4LXNocmluaz4gfHwgPGZsZXgtYmFzaXM+XG4gIC8vIERlZmF1bHQ6IFNlZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgKDEgMSAwKS5cbiAgLy9cbiAgLy8gaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvI2ZsZXgtcHJvcGVydHlcbiAgXG4gIEBtaXhpbiBmbGV4KCRmZzogMSwgJGZzOiBudWxsLCAkZmI6IG51bGwpIHtcbiAgXG4gICAgLy8gU2V0IGEgdmFyaWFibGUgdG8gYmUgdXNlZCBieSBib3gtZmxleCBwcm9wZXJ0aWVzXG4gICAgJGZnLWJveGZsZXg6ICRmZztcbiAgXG4gICAgLy8gQm94LUZsZXggb25seSBzdXBwb3J0cyBhIGZsZXgtZ3JvdyB2YWx1ZSBzbyBsZXQncyBncmFiIHRoZVxuICAgIC8vIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QgYW5kIGp1c3QgcmV0dXJuIHRoYXQuXG4gICAgQGlmIHR5cGUtb2YoJGZnKSA9PSAnbGlzdCcge1xuICAgICAgJGZnLWJveGZsZXg6IG50aCgkZmcsIDEpO1xuICAgIH1cbiAgXG4gICAgLXdlYmtpdC1ib3gtZmxleDogJGZnLWJveGZsZXg7XG4gICAgLXdlYmtpdC1mbGV4OiAkZmcgJGZzICRmYjtcbiAgICAtbW96LWJveC1mbGV4OiAkZmctYm94ZmxleDtcbiAgICAtbW96LWZsZXg6ICRmZyAkZnMgJGZiO1xuICAgIC1tcy1mbGV4OiAkZmcgJGZzICRmYjtcbiAgICBmbGV4OiAkZmcgJGZzICRmYjtcbiAgfVxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICAvLyBGbGV4Ym94IEp1c3RpZnkgQ29udGVudFxuICAvL1xuICAvLyBUaGUgJ2p1c3RpZnktY29udGVudCcgcHJvcGVydHkgYWxpZ25zIGZsZXggaXRlbXMgYWxvbmcgdGhlIG1haW4gYXhpc1xuICAvLyBvZiB0aGUgY3VycmVudCBsaW5lIG9mIHRoZSBmbGV4IGNvbnRhaW5lci4gVGhpcyBpcyBkb25lIGFmdGVyIGFueSBmbGV4aWJsZVxuICAvLyBsZW5ndGhzIGFuZCBhbnkgYXV0byBtYXJnaW5zIGhhdmUgYmVlbiByZXNvbHZlZC4gVHlwaWNhbGx5IGl0IGhlbHBzIGRpc3RyaWJ1dGVcbiAgLy8gZXh0cmEgZnJlZSBzcGFjZSBsZWZ0b3ZlciB3aGVuIGVpdGhlciBhbGwgdGhlIGZsZXggaXRlbXMgb24gYSBsaW5lIGFyZVxuICAvLyBpbmZsZXhpYmxlLCBvciBhcmUgZmxleGlibGUgYnV0IGhhdmUgcmVhY2hlZCB0aGVpciBtYXhpbXVtIHNpemUuIEl0IGFsc29cbiAgLy8gZXhlcnRzIHNvbWUgY29udHJvbCBvdmVyIHRoZSBhbGlnbm1lbnQgb2YgaXRlbXMgd2hlbiB0aGV5IG92ZXJmbG93IHRoZSBsaW5lLlxuICAvL1xuICAvLyBOb3RlOiAnc3BhY2UtKicgdmFsdWVzIG5vdCBzdXBwb3J0ZWQgaW4gb2xkZXIgc3ludGF4ZXMuXG4gIC8vXG4gIC8vIFZhbHVlczogZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgc3BhY2UtYmV0d2VlbiB8IHNwYWNlLWFyb3VuZFxuICAvLyBEZWZhdWx0OiBmbGV4LXN0YXJ0XG4gIC8vXG4gIC8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNqdXN0aWZ5LWNvbnRlbnQtcHJvcGVydHlcbiAgXG4gIEBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJHZhbHVlOiBmbGV4LXN0YXJ0KSB7XG4gICAgQGlmICR2YWx1ZSA9PSBmbGV4LXN0YXJ0IHtcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xuICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gICAgfSBAZWxzZSBpZiAkdmFsdWUgPT0gZmxleC1lbmQge1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xuICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xuICAgIH0gQGVsc2UgaWYgJHZhbHVlID09IHNwYWNlLWJldHdlZW4ge1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgfSBAZWxzZSBpZiAkdmFsdWUgPT0gc3BhY2UtYXJvdW5kIHtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XG4gICAgfSBAZWxzZSB7XG4gICAgICAtd2Via2l0LWJveC1wYWNrOiAkdmFsdWU7XG4gICAgICAtbXMtZmxleC1wYWNrOiAkdmFsdWU7XG4gICAgfVxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiAkdmFsdWU7XG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6ICR2YWx1ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR2YWx1ZTtcbiAgfVxuICAvLyBTaG9ydGVyIHZlcnNpb246XG4gIEBtaXhpbiBmbGV4LWp1c3QoJGFyZ3MuLi4pIHsgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KCRhcmdzLi4uKTsgfVxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICAvLyBGbGV4Ym94IEFsaWduIEl0ZW1zXG4gIC8vXG4gIC8vIEZsZXggaXRlbXMgY2FuIGJlIGFsaWduZWQgaW4gdGhlIGNyb3NzIGF4aXMgb2YgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGVcbiAgLy8gZmxleCBjb250YWluZXIsIHNpbWlsYXIgdG8gJ2p1c3RpZnktY29udGVudCcgYnV0IGluIHRoZSBwZXJwZW5kaWN1bGFyXG4gIC8vIGRpcmVjdGlvbi4gJ2FsaWduLWl0ZW1zJyBzZXRzIHRoZSBkZWZhdWx0IGFsaWdubWVudCBmb3IgYWxsIG9mIHRoZSBmbGV4XG4gIC8vIGNvbnRhaW5lcidzIGl0ZW1zLCBpbmNsdWRpbmcgYW5vbnltb3VzIGZsZXggaXRlbXMuICdhbGlnbi1zZWxmJyBhbGxvd3NcbiAgLy8gdGhpcyBkZWZhdWx0IGFsaWdubWVudCB0byBiZSBvdmVycmlkZGVuIGZvciBpbmRpdmlkdWFsIGZsZXggaXRlbXMuIChGb3JcbiAgLy8gYW5vbnltb3VzIGZsZXggaXRlbXMsICdhbGlnbi1zZWxmJyBhbHdheXMgbWF0Y2hlcyB0aGUgdmFsdWUgb2YgJ2FsaWduLWl0ZW1zJ1xuICAvLyBvbiB0aGVpciBhc3NvY2lhdGVkIGZsZXggY29udGFpbmVyLilcbiAgLy9cbiAgLy8gVmFsdWVzOiBmbGV4LXN0YXJ0IHwgZmxleC1lbmQgfCBjZW50ZXIgfCBiYXNlbGluZSB8IHN0cmV0Y2hcbiAgLy8gRGVmYXVsdDogc3RyZXRjaFxuICAvL1xuICAvLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jYWxpZ24taXRlbXMtcHJvcGVydHlcbiAgXG4gIEBtaXhpbiBhbGlnbi1pdGVtcygkdmFsdWU6IHN0cmV0Y2gpIHtcbiAgICBAaWYgJHZhbHVlID09IGZsZXgtc3RhcnQge1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgIH0gQGVsc2UgaWYgJHZhbHVlID09IGZsZXgtZW5kIHtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xuICAgIH0gQGVsc2Uge1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246ICR2YWx1ZTtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiAkdmFsdWU7XG4gICAgfVxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6ICR2YWx1ZTtcbiAgICAtbW96LWFsaWduLWl0ZW1zOiAkdmFsdWU7XG4gICAgYWxpZ24taXRlbXM6ICR2YWx1ZTtcbiAgfVxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICAvLyBGbGV4Ym94IEFsaWduIFNlbGZcbiAgLy9cbiAgLy8gVmFsdWVzOiBhdXRvIHwgZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXG4gIC8vIERlZmF1bHQ6IGF1dG9cbiAgXG4gIEBtaXhpbiBhbGlnbi1zZWxmKCR2YWx1ZTogYXV0bykge1xuICAgIC8vIE5vIFdlYmtpdCBCb3ggRmFsbGJhY2suXG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiAkdmFsdWU7XG4gICAgLW1vei1hbGlnbi1zZWxmOiAkdmFsdWU7XG4gICAgQGlmICR2YWx1ZSA9PSBmbGV4LXN0YXJ0IHtcbiAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IHN0YXJ0O1xuICAgIH0gQGVsc2UgaWYgJHZhbHVlID09IGZsZXgtZW5kIHtcbiAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGVuZDtcbiAgICB9IEBlbHNlIHtcbiAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246ICR2YWx1ZTtcbiAgICB9XG4gICAgYWxpZ24tc2VsZjogJHZhbHVlO1xuICB9XG4gIFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIC8vIEZsZXhib3ggQWxpZ24gQ29udGVudFxuICAvL1xuICAvLyBUaGUgJ2FsaWduLWNvbnRlbnQnIHByb3BlcnR5IGFsaWducyBhIGZsZXggY29udGFpbmVyJ3MgbGluZXMgd2l0aGluIHRoZVxuICAvLyBmbGV4IGNvbnRhaW5lciB3aGVuIHRoZXJlIGlzIGV4dHJhIHNwYWNlIGluIHRoZSBjcm9zcy1heGlzLCBzaW1pbGFyIHRvXG4gIC8vIGhvdyAnanVzdGlmeS1jb250ZW50JyBhbGlnbnMgaW5kaXZpZHVhbCBpdGVtcyB3aXRoaW4gdGhlIG1haW4tYXhpcy4gTm90ZSxcbiAgLy8gdGhpcyBwcm9wZXJ0eSBoYXMgbm8gZWZmZWN0IHdoZW4gdGhlIGZsZXhib3ggaGFzIG9ubHkgYSBzaW5nbGUgbGluZS5cbiAgLy9cbiAgLy8gVmFsdWVzOiBmbGV4LXN0YXJ0IHwgZmxleC1lbmQgfCBjZW50ZXIgfCBzcGFjZS1iZXR3ZWVuIHwgc3BhY2UtYXJvdW5kIHwgc3RyZXRjaFxuICAvLyBEZWZhdWx0OiBzdHJldGNoXG4gIC8vXG4gIC8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNhbGlnbi1jb250ZW50LXByb3BlcnR5XG4gIFxuICBAbWl4aW4gYWxpZ24tY29udGVudCgkdmFsdWU6IHN0cmV0Y2gpIHtcbiAgICAvLyBObyBXZWJraXQgQm94IEZhbGxiYWNrLlxuICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogJHZhbHVlO1xuICAgIC1tb3otYWxpZ24tY29udGVudDogJHZhbHVlO1xuICAgIEBpZiAkdmFsdWUgPT0gZmxleC1zdGFydCB7XG4gICAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0O1xuICAgIH0gQGVsc2UgaWYgJHZhbHVlID09IGZsZXgtZW5kIHtcbiAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogZW5kO1xuICAgIH0gQGVsc2Uge1xuICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiAkdmFsdWU7XG4gICAgfVxuICAgIGFsaWduLWNvbnRlbnQ6ICR2YWx1ZTtcbiAgfVxuICBcbiAgXG4gIFxuICAvLyBoZWxwZXJzIGZ1bmN0aW9uIGZsZXguXG4gIEBtaXhpbiBmbGV4LWluaXRpYWwoJGRpcmVjdGlvbiA6IHJvdykge1xuICAgIEBpbmNsdWRlIGZsZXhib3goKTtcbiAgICBAaW5jbHVkZSBmbGV4LWZsb3coJGRpcmVjdGlvbiBub3dyYXApXG4gIH1cbiAgXG4gIEBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjpyb3csICR0b3BQb3NpdGlvbjpmbGV4LXN0YXJ0LCAkbGVmdFBvc2l0aW9uOmZsZXgtc3RhcnQpe1xuICAgIEBpbmNsdWRlIGZsZXgtaW5pdGlhbCgkZGlyZWN0aW9uKTtcbiAgICBAaW5jbHVkZSBqdXN0aWZ5LWNvbnRlbnQoJGxlZnRQb3NpdGlvbik7XG4gICAgQGluY2x1ZGUgYWxpZ24taXRlbXMoJHRvcFBvc2l0aW9uKTtcbiAgICBAaW5jbHVkZSBhbGlnbi1jb250ZW50KCR0b3BQb3NpdGlvbik7XG4gIH1cbiAgXG4gIC5mbGV4LXJvdy1jZW50ZXItY2VudGVyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csY2VudGVyLGNlbnRlcik7XG4gIH1cbiAgXG4gIFxuICAuZmxleC1yb3ctY2VudGVyLXN0YXJ0LWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csY2VudGVyLGZsZXgtc3RhcnQpO1xuICB9XG4gIC5mbGV4LXJvdy1jZW50ZXItZW5kLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csY2VudGVyLGZsZXgtZW5kKTtcbiAgfVxuICAuZmxleC1yb3ctc3RhcnQtc3RhcnQtY29udGVudCB7XG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdyxmbGV4LXN0YXJ0LGZsZXgtc3RhcnQpO1xuICB9XG4gIC5mbGV4LXJvdy1zdGFydC1jZW50ZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdyxmbGV4LXN0YXJ0LGNlbnRlcik7XG4gIH1cbiAgLmZsZXgtcm93LXN0YXJ0LWVuZC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRlbnQocm93LGZsZXgtc3RhcnQsZmxleC1lbmQpO1xuICB9XG4gIC5mbGV4LXJvdy1lbmQtc3RhcnQtY29udGVudCB7XG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdyxmbGV4LWVuZCxmbGV4LXN0YXJ0KTtcbiAgfVxuICAuZmxleC1yb3ctZW5kLWVuZC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRlbnQocm93LGZsZXgtZW5kLGZsZXgtZW5kKTtcbiAgfVxuICAuZmxleC1jb2x1bS1jZW50ZXItY2VudGVyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChjb2x1bW4sY2VudGVyLGNlbnRlcik7XG4gIH1cbiAgLmZsZXgtY29sdW0tY2VudGVyLXN0YXJ0LWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChjb2x1bW4sY2VudGVyLGZsZXgtc3RhcnQpO1xuICB9XG4gIC5mbGV4LWNvbHVtbi1zdGFydC1jZW50ZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KGNvbHVtbixmbGV4LXN0YXJ0LGNlbnRlcik7XG4gIH1cbiAgIiwiQGltcG9ydCAnZmxleGJveCc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5cbjpob3N0IHtcblxuICAuc2hvd3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRlbnQocm93LCBjZW50ZXIsIGNlbnRlcik7XG4gIH1cblxuICBuYXYge1xuICAgIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmNvbnRlbnR7XG4gICAgJi1yb3cge1xuICAgICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdywgY2VudGVyLCBzcGFjZS1hcm91bmQpO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gICAgLmZvcm0tZ3JvdXB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgQGluY2x1ZGUgZmxleC1jb250ZW50KGNvbHVtbiwgZmxleC1zdGFydCwgY2VudGVyKTtcbiAgICAgIGxhYmVse1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdCxcbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmd4LWFyYy10ZXh0IHtcbiAgICAmLlJvYm90byB7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAmLW1vbm8ge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgfVxuICAgIH1cbiAgICAmLk1vbnRzZXJyYXQge1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgJi5Nb3VudGFpbnMge1xuICAgICAgZm9udC1mYW1pbHk6ICdNb3VudGFpbnMgb2YgQ2hyaXN0bWFzJywgY3Vyc2l2ZTtcbiAgICB9XG4gIH1cbn1cbiIsIiRwcmltYXJ5OiAjN0UwMDAwO1xuJHNlY29uZGFyeTogI0FBMDAxNTtcbiRiYWNrZ3JvdW5kOiAjRkRGQ0Y3O1xuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngx-arc-text';
        this.text = 'this is a example';
        this.arc = 150;
        this.class = '';
        this.classes = [
            { name: 'Roboto', value: 'Roboto' },
            { name: 'Roboto Mono', value: 'Roboto-mono' },
            { name: 'Montserrat', value: 'Montserrat' },
            { name: 'Mountains of Christmas', value: 'Mountains' }
        ];
        this.direction = '';
        this.directions = [
            { name: 'clockwise', value: 1 },
            { name: 'counter-clockwise', value: -1 }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.letters);
    };
    AppComponent.prototype.updateLetters = function () {
        this.letters.update();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('letters'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "letters", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ngx_arc_text_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../projects/ngx-arc-text/src/public_api */ "./projects/ngx-arc-text/src/public_api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _projects_ngx_arc_text_src_public_api__WEBPACK_IMPORTED_MODULE_3__["NgxArcTextModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/kappys1/ngx-arc-text/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map