function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./insurance/insurance.component */
    "./src/app/insurance/insurance.component.ts");
    /* harmony import */


    var _future_page_future_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./future-page/future-page.component */
    "./src/app/future-page/future-page.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _elements_elements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./elements/elements.component */
    "./src/app/elements/elements.component.ts");
    /* harmony import */


    var _money_management_money_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./money-management/money-management.component */
    "./src/app/money-management/money-management.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }, {
      path: 'projects/insurance',
      component: _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_3__["InsuranceComponent"]
    }, {
      path: 'projects/money-management',
      component: _money_management_money_management_component__WEBPACK_IMPORTED_MODULE_7__["MoneyManagementComponent"]
    }, {
      path: 'selenium/elements',
      component: _elements_elements_component__WEBPACK_IMPORTED_MODULE_6__["ElementsComponent"]
    }, {
      path: 'under-construction/:type',
      component: _future_page_future_page_component__WEBPACK_IMPORTED_MODULE_4__["FuturePageComponent"]
    }, {
      path: 'error',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
    }, {
      path: '**',
      redirectTo: 'error'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var _c1 = function _c1() {
      return ["/selenium/elements"];
    };

    var _c2 = function _c2() {
      return ["/under-construction/testNG"];
    };

    var _c3 = function _c3() {
      return ["/under-construction/cucumber"];
    };

    var _c4 = function _c4() {
      return ["/projects/insurance"];
    };

    var _c5 = function _c5() {
      return ["/projects/money-management"];
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'practice-site';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 48,
      vars: 16,
      consts: [["color", "primary", 1, "tool-bar"], [1, "logo"], ["id", "home-btn", "mat-button", "", 3, "routerLink"], ["id", "selenium-menu-btn", "mat-button", "", 3, "matMenuTriggerFor"], ["sTrigger", "matMenuTrigger"], ["seleniumMenu", "matMenu"], ["id", "elements-menu", "mat-menu-item", "", 3, "routerLink"], ["id", "test-ng", "mat-menu-item", "", 3, "routerLink"], ["id", "cucumber", "mat-menu-item", "", 3, "routerLink"], ["id", "projects-menu-btn", "mat-button", "", 3, "matMenuTriggerFor"], ["pTrigger", "matMenuTrigger"], ["projectsMenu", "matMenu"], ["id", "insurance", "mat-menu-item", "", 3, "routerLink"], ["id", "money-management", "mat-menu-item", "", 3, "routerLink"], [1, "app-border"], [1, "app-body"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "local_fire_department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " HOME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " SELENIUM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-menu", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Elements ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "TestNG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "miscellaneous_services ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Cucumber");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " PROJECTS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-menu", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "local_police");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Insurance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "account_balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Money Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

          var _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

          var _r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](26);

          var _r439 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r437);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_r436.menuOpen ? "expand_less" : "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r439);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_r438.menuOpen ? "expand_less" : "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](14, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](15, _c5));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".tool-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 100;\n}\n\n.app-border[_ngcontent-%COMP%] {\n  background-color: #c1bdbd;\n  height: 100%;\n  overflow-y: hidden;\n}\n\n.app-body[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 840px;\n  padding: 40px;\n  margin: auto;\n  background: white;\n  overflow-y: auto;\n}\n\n.logo[_ngcontent-%COMP%] {\n  transform: scale(2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uYXBwLWJvcmRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWJkYmQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uYXBwLWJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4NDBweDtcbiAgcGFkZGluZzogNDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmxvZ28ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./insurance/insurance.component */
    "./src/app/insurance/insurance.component.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _future_page_future_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./future-page/future-page.component */
    "./src/app/future-page/future-page.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _elements_elements_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./elements/elements.component */
    "./src/app/elements/elements.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular-slider/ngx-slider */
    "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");
    /* harmony import */


    var _elements_safe_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./elements/safe.pipe */
    "./src/app/elements/safe.pipe.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _money_management_money_management_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./money-management/money-management.component */
    "./src/app/money-management/money-management.component.ts");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_26__["NgxSliderModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__["DragDropModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_11__["InsuranceComponent"], _future_page_future_page_component__WEBPACK_IMPORTED_MODULE_21__["FuturePageComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_22__["ErrorComponent"], _elements_elements_component__WEBPACK_IMPORTED_MODULE_23__["ElementsComponent"], _elements_safe_pipe__WEBPACK_IMPORTED_MODULE_27__["SafePipe"], _elements_elements_component__WEBPACK_IMPORTED_MODULE_23__["DialogExampleDialogComponent"], _money_management_money_management_component__WEBPACK_IMPORTED_MODULE_31__["MoneyManagementComponent"], _money_management_money_management_component__WEBPACK_IMPORTED_MODULE_31__["AddFinanceDialogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_26__["NgxSliderModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__["DragDropModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_11__["InsuranceComponent"], _future_page_future_page_component__WEBPACK_IMPORTED_MODULE_21__["FuturePageComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_22__["ErrorComponent"], _elements_elements_component__WEBPACK_IMPORTED_MODULE_23__["ElementsComponent"], _elements_safe_pipe__WEBPACK_IMPORTED_MODULE_27__["SafePipe"], _elements_elements_component__WEBPACK_IMPORTED_MODULE_23__["DialogExampleDialogComponent"], _money_management_money_management_component__WEBPACK_IMPORTED_MODULE_31__["MoneyManagementComponent"], _money_management_money_management_component__WEBPACK_IMPORTED_MODULE_31__["AddFinanceDialogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_26__["NgxSliderModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__["DragDropModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          entryComponents: [_elements_elements_component__WEBPACK_IMPORTED_MODULE_23__["DialogExampleDialogComponent"], _money_management_money_management_component__WEBPACK_IMPORTED_MODULE_31__["AddFinanceDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/elements/elements.component.ts":
  /*!************************************************!*\
    !*** ./src/app/elements/elements.component.ts ***!
    \************************************************/

  /*! exports provided: ElementsComponent, DialogExampleDialogComponent */

  /***/
  function srcAppElementsElementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElementsComponent", function () {
      return ElementsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogExampleDialogComponent", function () {
      return DialogExampleDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./variables */
    "./src/app/elements/variables.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular-slider/ngx-slider */
    "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");

    var _c0 = ["dialogTable"];

    function ElementsComponent_div_2_div_1_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_2_div_1_mat_card_4_Template_mat_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r55);

          var section_r53 = ctx.$implicit;

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r54.selected = section_r53;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var section_r53 = ctx.$implicit;

        var numeral_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", section_r53 + numeral_r51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](section_r53);
      }
    }

    function ElementsComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ElementsComponent_div_2_div_1_mat_card_4_Template, 3, 2, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var numeral_r51 = ctx.$implicit;

        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Elements part ", numeral_r51, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r50.sections[numeral_r51]);
      }
    }

    var _c1 = function _c1() {
      return ["I", "II", "III", "IV"];
    };

    function ElementsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ElementsComponent_div_2_div_1_Template, 5, 2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c1));
      }
    }

    function ElementsComponent_div_3_span_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_span_7_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r85);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r84.selected = ctx_r84.previous;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "arrow_left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", ctx_r57.previous);
      }
    }

    function ElementsComponent_div_3_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "arrow_left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_span_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_span_10_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r87);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r86.selected = ctx_r86.next;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "next ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", ctx_r59.next);
      }
    }

    function ElementsComponent_div_3_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "next ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Sample Tabs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-tab-group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-tab", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-tab", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-tab", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-tab", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r61.loremIpsumArray[0], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r61.loremIpsumArray[1], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r61.loremIpsumArray[2], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r61.loremIpsumArray[3], " ");
      }
    }

    function ElementsComponent_div_3_mat_card_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Simple Slider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "ngx-slider", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "ngx-slider", 23, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "ngx-slider", 23, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "mat-card", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);

        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r62.colorSliderOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r62.colorSliderOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r62.colorSliderOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Color: ", ctx_r62.getColor(_r88.value, _r89.value, _r90.value), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](ctx_r62.getColorBlockStyle(ctx_r62.getColor(_r88.value, _r89.value, _r90.value)));
      }
    }

    function ElementsComponent_div_3_mat_card_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Range");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "ngx-slider", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("Price: $", _r91.value, ".00 - $", _r91.highValue, ".00");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r63.rangeSliderOptions);
      }
    }

    function ElementsComponent_div_3_mat_card_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Increments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "ngx-slider", 23, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Increment: $", _r92.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r64.tickSliderOptions);
      }
    }

    function ElementsComponent_div_3_mat_card_16_mat_card_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Please provide your first name. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_16_mat_card_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Please provide your last name. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_16_mat_card_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Your home or work address. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Text Boxes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "First Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ElementsComponent_div_3_mat_card_16_mat_card_11_Template, 3, 0, "mat-card", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Last Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ElementsComponent_div_3_mat_card_16_mat_card_19_Template, 3, 0, "mat-card", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h4", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Address:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-form-field", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ElementsComponent_div_3_mat_card_16_mat_card_27_Template, 3, 0, "mat-card", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_mat_card_16_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r97);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r96.showTextBoxHint = !ctx_r96.showTextBoxHint;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Show Help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r65.showTextBoxHint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r65.showTextBoxHint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r65.showTextBoxHint);
      }
    }

    function ElementsComponent_div_3_mat_card_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Alerts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Click button to see alert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_mat_card_17_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r98.alertDemo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Click me");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "On button click, alert will appear after 5 seconds");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_mat_card_17_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r99);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r100.alertTimedDemo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Click me");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "On button click, confirm box will appear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_mat_card_17_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r99);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r101.confirmDemo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Click me");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h4", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "On button click, prompt box will appear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_mat_card_17_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r99);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r102.promptDemo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Click me");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_18_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "No users created, click the button below to create a new user");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r116 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r116.name, " ");
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r117 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r117.email, " ");
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r118 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r118.pass, " ");
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 57);
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_mat_card_18_table_7_td_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r122);

          var i_r120 = ctx.index;

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          return ctx_r121.deleteDialogUser(i_r120);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r120 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "delete" + i_r120);
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 60);
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 61);
      }
    }

    function ElementsComponent_div_3_mat_card_18_table_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 47, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ElementsComponent_div_3_mat_card_18_table_7_th_3_Template, 2, 0, "th", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ElementsComponent_div_3_mat_card_18_table_7_td_4_Template, 2, 1, "td", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ElementsComponent_div_3_mat_card_18_table_7_th_6_Template, 2, 0, "th", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ElementsComponent_div_3_mat_card_18_table_7_td_7_Template, 2, 1, "td", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ElementsComponent_div_3_mat_card_18_table_7_th_9_Template, 2, 0, "th", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ElementsComponent_div_3_mat_card_18_table_7_td_10_Template, 2, 1, "td", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ElementsComponent_div_3_mat_card_18_table_7_th_12_Template, 1, 0, "th", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ElementsComponent_div_3_mat_card_18_table_7_td_13_Template, 4, 1, "td", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ElementsComponent_div_3_mat_card_18_table_7_tr_14_Template, 1, 0, "tr", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ElementsComponent_div_3_mat_card_18_table_7_tr_15_Template, 1, 0, "tr", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r104.dialogTableData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r104.dialogTableColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r104.dialogTableColumns);
      }
    }

    function ElementsComponent_div_3_mat_card_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Dialog Boxes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Existing Users:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ElementsComponent_div_3_mat_card_18_div_6_Template, 5, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ElementsComponent_div_3_mat_card_18_table_7_Template, 16, 3, "table", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_mat_card_18_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r125);

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r124.openDialogExample();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Create a New User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Use a modal dialog to require that the user enter data during a multi-step process. Embed form markup in the context area, set the model option to true and specify primary and secondary user actions with the buttons option ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r67.dialogTableData.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r67.dialogTableData.length);
      }
    }

    function ElementsComponent_div_3_mat_card_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r68.selected, " element to come");
      }
    }

    function ElementsComponent_div_3_mat_card_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "IFrame");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Below is an iframe, if you want to perform any operation in this window you will need to enter in this iframe.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "iframe", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Open New Window");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Click below button to open a new window now.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_mat_card_21_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r127);

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r126.openWindow();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Click Me");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Open New Tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Click below button to open a new tab now.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_mat_card_22_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r129);

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r128.openTab();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Click Me");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ElementsComponent_div_3_mat_card_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Simple Accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-accordion", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-expansion-panel", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Aliquam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Aliquam non eros non nisl ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "support_agent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-expansion-panel", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Donec");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Donec arcu tortor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "hot_tub");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-expansion-panel", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Vivamus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Vivamus faucibus tincidunt magna id ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "electric_bike");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-expansion-panel", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Vestibulum");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Vestibulum a pretium ex ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "golf_course");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r72.loremIpsumArray[4], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r72.loremIpsumArray[5], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r72.loremIpsumArray[6], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r72.loremIpsumArray[7], " ");
      }
    }

    function ElementsComponent_div_3_mat_card_24_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var option_r131 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](option_r131);
      }
    }

    function ElementsComponent_div_3_mat_card_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Dropdown Example");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Select country from below dropdown list.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Choose a country");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ElementsComponent_div_3_mat_card_24_mat_option_10_Template, 2, 2, "mat-option", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r73.dropdownOptions);
      }
    }

    function ElementsComponent_div_3_mat_card_25_mat_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var option_r134 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", option_r134, " ");
      }
    }

    function ElementsComponent_div_3_mat_card_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Autocomplete Example I");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Search: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Names");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-autocomplete", 70, 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ElementsComponent_div_3_mat_card_25_mat_option_14_Template, 2, 2, "mat-option", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "A categorized search result. Try typing \"a\" or \"n\".");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r74.autoCompleteControlOne)("matAutocomplete", _r132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 3, ctx_r74.autoCompleteOneFilteredOptions));
      }
    }

    function ElementsComponent_div_3_mat_card_26_mat_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var option_r137 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", option_r137, " ");
      }
    }

    function ElementsComponent_div_3_mat_card_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Autocomplete Example II");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Your preferred programming language:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Programing Languages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-autocomplete", 70, 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ElementsComponent_div_3_mat_card_26_mat_option_12_Template, 2, 2, "mat-option", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);

        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r75.autoCompleteControlTwo)("matAutocomplete", _r135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 3, ctx_r75.autoCompleteTwoFilteredOptions));
      }
    }

    function ElementsComponent_div_3_mat_card_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r76.selected, " element to come");
      }
    }

    function ElementsComponent_div_3_mat_card_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r77.selected, " element to come");
      }
    }

    function ElementsComponent_div_3_mat_card_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r78.selected, " element to come");
      }
    }

    function ElementsComponent_div_3_mat_card_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r79.selected, " element to come");
      }
    }

    function ElementsComponent_div_3_mat_card_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r80.selected, " element to come");
      }
    }

    function ElementsComponent_div_3_mat_card_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r81.selected, " element to come");
      }
    }

    function ElementsComponent_div_3_mat_card_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Resizable Element");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r82.loremIpsumArray[8]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r82.loremIpsumArray[9]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r82.loremIpsumArray[10]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r82.loremIpsumArray[11]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r82.loremIpsumArray[12]);
      }
    }

    function ElementsComponent_div_3_mat_card_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r83.selected, " element to come");
      }
    }

    function ElementsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ElementsComponent_div_3_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r139);

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r138.selected = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Elements Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ElementsComponent_div_3_span_7_Template, 4, 1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ElementsComponent_div_3_span_8_Template, 4, 0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ElementsComponent_div_3_span_10_Template, 4, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ElementsComponent_div_3_span_11_Template, 4, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ElementsComponent_div_3_mat_card_12_Template, 17, 4, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ElementsComponent_div_3_mat_card_13_Template, 16, 6, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ElementsComponent_div_3_mat_card_14_Template, 9, 3, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ElementsComponent_div_3_mat_card_15_Template, 9, 2, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ElementsComponent_div_3_mat_card_16_Template, 30, 3, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ElementsComponent_div_3_mat_card_17_Template, 24, 0, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ElementsComponent_div_3_mat_card_18_Template, 13, 2, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ElementsComponent_div_3_mat_card_19_Template, 3, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ElementsComponent_div_3_mat_card_20_Template, 24, 0, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ElementsComponent_div_3_mat_card_21_Template, 9, 0, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ElementsComponent_div_3_mat_card_22_Template, 9, 0, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ElementsComponent_div_3_mat_card_23_Template, 49, 4, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ElementsComponent_div_3_mat_card_24_Template, 11, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ElementsComponent_div_3_mat_card_25_Template, 18, 5, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ElementsComponent_div_3_mat_card_26_Template, 14, 5, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ElementsComponent_div_3_mat_card_27_Template, 3, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ElementsComponent_div_3_mat_card_28_Template, 3, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ElementsComponent_div_3_mat_card_29_Template, 3, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, ElementsComponent_div_3_mat_card_30_Template, 3, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ElementsComponent_div_3_mat_card_31_Template, 3, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ElementsComponent_div_3_mat_card_32_Template, 3, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, ElementsComponent_div_3_mat_card_33_Template, 15, 5, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, ElementsComponent_div_3_mat_card_34_Template, 3, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" > ", ctx_r49.selected, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.previous);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r49.previous);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.next);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r49.next);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Tabs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Slider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Slider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Slider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Text Box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Alert Box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Dialog Box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Progress Bar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Frames");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Windows");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Windows");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Dropdown");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Autocomplete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Autocomplete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Select Element");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Sorting");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Date Picker");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Drag and Drop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "Draggable Box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.selected === "AngularJS Sites");
      }
    }

    var pad = function pad(num) {
      if (num < 10) {
        return '0' + num;
      }

      return num;
    };

    var ElementsComponent =
    /*#__PURE__*/
    function () {
      function ElementsComponent(dialog) {
        var _this = this;

        _classCallCheck(this, ElementsComponent);

        this.dialog = dialog;
        this.loremIpsumArray = _variables__WEBPACK_IMPORTED_MODULE_3__["LoremIpsumArray"];
        this.sections = {
          I: ['Tabs', 'Slider', 'Text Box', 'Alert Box', 'Dialog Box', 'Progress Bar'],
          II: ['Frames', 'Windows', 'Accordion', 'Dropdown', 'Autocomplete', 'Select Element'],
          III: ['Sorting', 'Spinner', 'Toolbar', 'Date Picker', 'Drag and Drop', 'Draggable Box'],
          IV: ['AngularJS Sites']
        };
        this.colorSliderOptions = {
          floor: 0,
          ceil: 255,
          hideLimitLabels: true
        };
        this.rangeSliderOptions = {
          floor: 0,
          ceil: 100,
          hideLimitLabels: true
        };
        this.tickSliderOptions = {
          floor: 0,
          ceil: 50,
          step: 5,
          showTicks: true,
          hideLimitLabels: true
        };
        this.showTextBoxHint = false;
        this.doingTimeAlert = false;
        this.dialogTableData = [];
        this.dialogTableColumns = ['trash', 'name', 'email', 'pass'];
        this.autoCompleteControlOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.autoCompleteOneOptions = _variables__WEBPACK_IMPORTED_MODULE_3__["AutocompleteNames"];
        this.autoCompleteControlTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.autoCompleteTwoOptions = _variables__WEBPACK_IMPORTED_MODULE_3__["AutocompleteLanguages"];
        this.dropdownOptions = _variables__WEBPACK_IMPORTED_MODULE_3__["DropdownCountries"];

        this.getColorBlockStyle = function (colorStyle) {
          return "background-color: ".concat(colorStyle);
        };

        this.alertDemo = function () {
          return alert('You have been alerted');
        };

        this.confirmDemo = function () {
          return confirm('Click "OK" to continue.');
        };

        this.promptDemo = function () {
          return prompt('What is your name?');
        };

        this.autoCompleteOneFilteredOptions = this.autoCompleteControlOne.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
          return _this._filter(value, _this.autoCompleteOneOptions);
        }));
        this.autoCompleteTwoFilteredOptions = this.autoCompleteControlTwo.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
          return _this._filter(value, _this.autoCompleteTwoOptions);
        }));
      }

      _createClass(ElementsComponent, [{
        key: "allElements",
        get: function get() {
          return [].concat(_toConsumableArray(this.sections.I), _toConsumableArray(this.sections.II), _toConsumableArray(this.sections.III), _toConsumableArray(this.sections.IV));
        }
      }, {
        key: "next",
        get: function get() {
          var nextIndex = this.allElements.indexOf(this.selected) + 1;

          if (nextIndex < this.allElements.length) {
            return this.allElements[nextIndex];
          }

          return null;
        }
      }, {
        key: "previous",
        get: function get() {
          var previousIndex = this.allElements.indexOf(this.selected) - 1;

          if (previousIndex > -1) {
            return this.allElements[previousIndex];
          }

          return null;
        }
      }, {
        key: "_filter",
        value: function _filter(value, original) {
          var filterValue = value.toLowerCase();
          return original.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "getColor",
        value: function getColor(r, g, b) {
          var rHex = parseInt(r, 10).toString(16);
          var gHex = parseInt(g, 10).toString(16);
          var bHex = parseInt(b, 10).toString(16);
          var color = '#' + pad(rHex) + pad(gHex) + pad(bHex);
          return color.toLocaleUpperCase();
        }
      }, {
        key: "alertTimedDemo",
        value: function alertTimedDemo() {
          var _this2 = this;

          if (!this.doingTimeAlert) {
            this.doingTimeAlert = true;
            setTimeout(function () {
              _this2.doingTimeAlert = false;
              alert('You have been alerted after 5 seconds');
            }, 5000);
          }
        }
      }, {
        key: "openDialogExample",
        value: function openDialogExample() {
          var _this3 = this;

          this.dialog.open(DialogExampleDialogComponent, {
            width: '500px'
          }).afterClosed().subscribe(function (result) {
            if (result) {
              _this3.dialogTableData.push(result);

              if (_this3.dialogTable) {
                _this3.dialogTable.renderRows();
              }
            }
          });
        }
      }, {
        key: "deleteDialogUser",
        value: function deleteDialogUser(index) {
          this.dialogTableData.splice(index, 1);
          this.dialogTable.renderRows();
        }
      }, {
        key: "openWindow",
        value: function openWindow() {
          window.open('https://www.renastech.com', 'MsgWindow', 'width=1200,height=800');
        }
      }, {
        key: "openTab",
        value: function openTab() {
          window.open('https://www.renastech.com');
        }
      }]);

      return ElementsComponent;
    }();

    ElementsComponent.??fac = function ElementsComponent_Factory(t) {
      return new (t || ElementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    ElementsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ElementsComponent,
      selectors: [["app-elements"]],
      viewQuery: function ElementsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dialogTable = _t.first);
        }
      },
      decls: 4,
      vars: 2,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "list"], ["matRipple", "", "class", "tile mat-elevation-z12", 3, "id", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "tile", "mat-elevation-z12", 3, "id", "click"], [1, "header"], [1, "link", 3, "click"], [1, "paginator"], ["class", "link", "id", "prev-element", 3, "matTooltip", "click", 4, "ngIf"], ["class", "gray", "id", "prev-element-dis", 4, "ngIf"], ["class", "link", "id", "next-element", 3, "matTooltip", "click", 4, "ngIf"], ["class", "gray", "id", "next-element-dis", 4, "ngIf"], ["class", "section mat-elevation-z4", 4, "ngIf"], ["id", "prev-element", 1, "link", 3, "matTooltip", "click"], [1, "pag"], ["id", "prev-element-dis", 1, "gray"], ["id", "next-element", 1, "link", 3, "matTooltip", "click"], ["id", "next-element-dis", 1, "gray"], [1, "section", "mat-elevation-z4"], ["label", "Phasellus"], ["label", "Nulla"], ["label", "Sed"], ["label", "Cras"], ["value", "0", 3, "options"], ["r", ""], ["g", ""], ["b", ""], [1, "color-box", "mat-elevation-z12"], ["value", "0", "highValue", "100", 3, "options"], ["rangeSlider", ""], ["incrementSlider", ""], [2, "display", "flex"], [1, "label"], ["appearance", "outline"], ["matNativeControl", ""], ["class", "hint mat-elevation-z4", 4, "ngIf"], ["id", "help-btn", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "hint", "mat-elevation-z4"], [1, "alert-label"], ["id", "alert-demo", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "timed-alert-demo", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "confirm-demo", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "prompt-demo", "mat-raised-button", "", "color", "primary", 3, "click"], ["style", "text-align: center", "class", "mat-elevation-z4", 4, "ngIf"], ["mat-table", "", "class", "mat-elevation-z4 full", 3, "dataSource", 4, "ngIf"], ["id", "create-user", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-elevation-z4", 2, "text-align", "center"], ["mat-table", "", 1, "mat-elevation-z4", "full", 3, "dataSource"], ["dialogTable", ""], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "pass"], ["matColumnDef", "trash"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "warn", 3, "id", "click"], ["mat-header-row", ""], ["mat-row", ""], ["width", "1000", "height", "400", "src", "projects/insurance", "frameborder", "5", 1, "mat-elevation-z4"], ["id", "open-window", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "open-tab", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "example-headers-align"], ["hideToggle", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [1, "resizeable", "mat-elevation-z6"]],
      template: function ElementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ElementsComponent_div_2_Template, 2, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ElementsComponent_div_3_Template, 35, 28, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selected);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_11__["??a"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelDescription"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.tile[_ngcontent-%COMP%] {\n  width: 132px;\n  height: 35px;\n  margin: 20px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 20px;\n  padding-top: 30px;\n  -webkit-user-select: none; \n  -moz-user-select: none;  \n  user-select: none; \n}\n\n.tile[_ngcontent-%COMP%]:hover {\n  background: #e9e9e9;\n}\n\n.logo[_ngcontent-%COMP%] {\n  transform: scale(3);\n}\n\n.trial[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  text-align: center;\n  padding: 20px;\n  color: white;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n\n.link[_ngcontent-%COMP%] {\n  cursor:pointer;\n  color:blue;\n  \n}\n\n.link[_ngcontent-%COMP%]:hover {\n  color:lightblue;\n}\n\n.gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.section[_ngcontent-%COMP%] {\n  \n  margin-bottom: 30px;\n}\n\n.paginator[_ngcontent-%COMP%] {\n  -webkit-user-select: none; \n  -moz-user-select: none;  \n  user-select: none; \n}\n\n.pag[_ngcontent-%COMP%] {\n  transform: translateY(7px);\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  text-align: center;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.color-box[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  height: 75px;\n  width: 450px;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  color: gray;\n  margin-left: 20px;\n  height: 20px;\n  transform: translateY(6px);\n}\n\n.alert-label[_ngcontent-%COMP%] {\n  width: 400px;\n  display: inline-block;\n}\n\niframe[_ngcontent-%COMP%] {\n  transform: scale(.80);\n  position: absolute;\n  right: -83px;\n  top: 73px;\n  border: grey solid 3px;\n  border-radius: 6px;\n}\n\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.resizeable[_ngcontent-%COMP%] {\n  resize: both;\n  border: #4051b5 solid 2px;\n  display: block;\n  overflow: auto;\n  border-radius: 5px;\n  height: 300px;\n}\n\n.resizeable[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvZWxlbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFFLFdBQVc7RUFDdEMsc0JBQXNCLEVBQUUsWUFBWSxFQUNiLGVBQWU7RUFDdEMsaUJBQWlCLEVBQUUsYUFBYTtBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxXQUFXO0VBQ3RDLHNCQUFzQixFQUFFLFlBQVksRUFDYixlQUFlO0VBQ3RDLGlCQUFpQixFQUFFLGFBQWE7QUFDbEM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvZWxlbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udGlsZSB7XG4gIHdpZHRoOiAxMzJweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKy9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCAqL1xufVxuXG4udGlsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG59XG5cbi5sb2dvIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcbn1cblxuLnRyaWFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5saW5rIHtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGNvbG9yOmJsdWU7XG4gIC8qdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTsqL1xufVxuXG4ubGluazpob3ZlciB7XG4gIGNvbG9yOmxpZ2h0Ymx1ZTtcbn1cblxuLmdyYXkge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnNlY3Rpb24ge1xuICAvKm1pbi1oZWlnaHQ6IDMwMHB4OyovXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5wYWdpbmF0b3Ige1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXG59XG5cbi5wYWcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KTtcbn1cblxuaDIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbG9yLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuXG4ubGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5oaW50IHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xufVxuXG4uYWxlcnQtbGFiZWwge1xuICB3aWR0aDogNDAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaWZyYW1lIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSguODApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtODNweDtcbiAgdG9wOiA3M3B4O1xuICBib3JkZXI6IGdyZXkgc29saWQgM3B4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlc2l6ZWFibGUge1xuICByZXNpemU6IGJvdGg7XG4gIGJvcmRlcjogIzQwNTFiNSBzb2xpZCAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ucmVzaXplYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ElementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-elements',
          templateUrl: './elements.component.html',
          styleUrls: ['./elements.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        dialogTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dialogTable']
        }]
      });
    })();

    var DialogExampleDialogComponent = function DialogExampleDialogComponent(dialogRef) {
      _classCallCheck(this, DialogExampleDialogComponent);

      this.dialogRef = dialogRef;
    };

    DialogExampleDialogComponent.??fac = function DialogExampleDialogComponent_Factory(t) {
      return new (t || DialogExampleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]));
    };

    DialogExampleDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DialogExampleDialogComponent,
      selectors: [["app-dialog-example-dialog"]],
      decls: 26,
      vars: 1,
      consts: [["appearance", "outline"], ["matNativeControl", ""], ["name", ""], ["email", ""], ["type", "password", "matNativeControl", ""], ["pass", ""], [2, "display", "flex", "flex-direction", "row-reverse"], ["id", "cancel-popup", "mat-raised-button", "", 3, "click"], ["id", "create", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
      template: function DialogExampleDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create a New User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 1, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogExampleDialogComponent_Template_button_click_21_listener() {
            return ctx.dialogRef.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogExampleDialogComponent_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r143);

            var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

            var _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](19);

            return ctx.dialogRef.close({
              name: _r140.value,
              email: _r141.value,
              pass: _r142.value
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

          var _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

          var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r142.value || !_r140.value || !_r141.value);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]],
      styles: ["h1[_ngcontent-%COMP%] {\n      margin-top: 0;\n    }\n\n    mat-form-field[_ngcontent-%COMP%] {\n      width: 100%;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DialogExampleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-example-dialog',
          template: "\n    <h1>Create a New User</h1>\n    <hr>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Name</mat-label>\n      <input #name matNativeControl>\n    </mat-form-field>\n    <br>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input #email matNativeControl>\n    </mat-form-field>\n    <br>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input #pass type=\"password\" matNativeControl>\n    </mat-form-field>\n\n    <div style=\"display: flex; flex-direction: row-reverse\">\n      <button id=\"cancel-popup\" mat-raised-button (click)=\"dialogRef.close()\">Cancel</button>\n      &nbsp;\n      <button\n        id=\"create\"\n        mat-raised-button\n        color=\"primary\"\n        [disabled]=\"!pass.value || !name.value || !email.value\"\n        (click)=\"dialogRef.close({ name: name.value, email: email.value, pass: pass.value })\">\n        Create\n      </button>\n    </div>\n  ",
          styles: ["\n    h1 {\n      margin-top: 0;\n    }\n\n    mat-form-field {\n      width: 100%;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/elements/safe.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/elements/safe.pipe.ts ***!
    \***************************************/

  /*! exports provided: SafePipe */

  /***/
  function srcAppElementsSafePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
      return SafePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafePipe =
    /*#__PURE__*/
    function () {
      function SafePipe(sanitizer) {
        _classCallCheck(this, SafePipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafePipe, [{
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return SafePipe;
    }();

    SafePipe.??fac = function SafePipe_Factory(t) {
      return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafePipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
      name: "safe",
      type: SafePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safe'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/elements/variables.ts":
  /*!***************************************!*\
    !*** ./src/app/elements/variables.ts ***!
    \***************************************/

  /*! exports provided: AutocompleteNames, AutocompleteLanguages, DropdownCountries, LoremIpsumArray */

  /***/
  function srcAppElementsVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteNames", function () {
      return AutocompleteNames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteLanguages", function () {
      return AutocompleteLanguages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownCountries", function () {
      return DropdownCountries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoremIpsumArray", function () {
      return LoremIpsumArray;
    });

    var AutocompleteNames = ['Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Charlotte', 'Mia', 'Amelia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Elizabeth', 'Mila', 'Ella', 'Avery', 'Sofia', 'Camila', 'Aria', 'Scarlett', 'Victoria', 'Madison', 'Luna', 'Grace', 'Chloe', 'Penelope', 'Layla', 'Riley', 'Zoey', 'Nora', 'Lily', 'Eleanor', 'Hannah', 'Lillian', 'Addison', 'Aubrey', 'Ellie', 'Stella', 'Natalie', 'Zoe', 'Leah', 'Hazel', 'Violet', 'Aurora', 'Savannah', 'Audrey', 'Brooklyn', 'Bella', 'Claire', 'Skylar', 'Liam', 'Noah', 'William', 'James', 'Oliver', 'Benjamin', 'Elijah', 'Lucas', 'Mason', 'Logan', 'Alexander', 'Ethan', 'Jacob', 'Michael', 'Daniel', 'Henry', 'Jackson', 'Sebastian', 'Aiden', 'Matthew', 'Samuel', 'David', 'Joseph', 'Carter', 'Owen', 'Wyatt', 'John', 'Jack', 'Luke', 'Jayden', 'Dylan', 'Grayson', 'Levi', 'Isaac', 'Gabriel', 'Julian', 'Mateo', 'Anthony', 'Jaxon', 'Lincoln', 'Joshua', 'Christopher', 'Andrew', 'Theodore', 'Caleb', 'Ryan', 'Asher', 'Nathan', 'Thomas', 'Leo'];
    var AutocompleteLanguages = ['Python', 'Java', 'JavaScript', 'C#', 'C', 'C++', 'PHP', 'R', 'Objective-C', 'Swift', 'TypeScript', 'MATLAB', 'Kotlin', 'Go', 'VBA', 'Ruby', 'Scala', 'Visual', 'Basic', 'Rust', 'Dart', 'Ada', 'Lua', 'Abap', 'Groovy', 'Perl', 'Cobol', 'Julia', 'Haskell', 'Delphi', 'Elm', 'PowerShell', 'SQL', 'Clojure', 'Elixir', 'Pascal', 'LISP', 'Ballerina', 'FORTRAN', 'BASIC', 'Alice', 'COBOL', 'Speakeasy', 'Simula', 'Smalltalk', 'Prolog', 'Erlang', 'Ada', 'Eiffel', 'Rebol', 'Scratch'];
    var DropdownCountries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'The Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Costa Rica', 'C??te d???Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Federated States of Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'South Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];
    var LoremIpsumArray = ['Phasellus placerat ipsum eget pulvinar posuere. Nullam nec viverra dui. Mauris sem nisl, lobortis nec augue in,\n' + 'vehicula tincidunt sem. Donec feugiat iaculis massa, non sollicitudin mauris commodo in. Aenean eu scelerisque\n' + 'ipsum. Fusce vulputate rutrum molestie. Etiam fringilla elit eu quam tempor, nec porta libero congue.\n' + 'Pellentesque eu feugiat ipsum. Donec non ullamcorper nisl, a facilisis eros. Sed iaculis ante et eros ultricies\n' + 'ullamcorper. Donec sagittis luctus placerat. Pellentesque accumsan massa tortor, vel iaculis nibh congue ut.\n' + 'Pellentesque convallis, mauris quis viverra gravida, mi est tempus tellus, et fermentum ex est ut eros.\n' + 'Donec dictum sodales fermentum.', 'Nulla id sollicitudin sem. Sed faucibus ligula quis nibh iaculis aliquam. Sed ut placerat ante. Praesent\n' + 'ullamcorper a justo id ultricies. Nulla auctor, elit sit amet vulputate hendrerit, felis tortor semper nisi,\n' + 'vitae porta nisl ex vel enim. In ultrices gravida eros, ac imperdiet orci elementum a. Integer eget quam nisl.', 'Sed faucibus ante nibh, at maximus dui facilisis nec. Curabitur mollis, metus in ultrices finibus, odio ligula\n' + 'ornare massa, non sodales urna nisl sit amet massa. Nam ac lectus sed dui pellentesque aliquet a in tellus.\n' + 'Phasellus vel nisl eget enim ullamcorper suscipit. Vestibulum id tincidunt tortor. In nec nisl laoreet purus\n' + 'hendrerit aliquam. Cras id placerat orci. In leo sem, porttitor vel sem at, tincidunt porttitor purus. Nullam\n' + 'leo felis, sollicitudin at libero vel, sollicitudin elementum libero. Aenean odio est, tristique tempus leo vel,\n' + 'pretium venenatis nibh. Nulla laoreet lobortis erat, sed sagittis ligula feugiat et. Vestibulum a dolor vitae\n' + 'erat pulvinar volutpat. Maecenas lacinia tincidunt tortor.', 'Cras tincidunt ac augue ac consectetur. Mauris at tellus in nunc elementum dictum nec eget diam. Orci varius\n' + 'natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum fringilla hendrerit nisi,\n' + 'ut molestie ligula pellentesque ac. Integer pulvinar arcu vitae convallis sodales. Vestibulum vel est eu justo\n' + 'tristique placerat eget aliquet lorem. Nunc fringilla magna et arcu luctus aliquet. Proin laoreet sapien sed\n' + 'vestibulum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus nunc a libero\n' + 'sagittis, quis efficitur orci elementum. Nulla vestibulum augue ac justo pellentesque condimentum. Suspendisse\n' + 'elementum quam a nunc tristique convallis. Mauris faucibus varius semper. Suspendisse porttitor tristique enim\n' + 'ut aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec\n' + 'non congue velit.', 'Aliquam non eros non nisl aliquam congue quis eu nisl. Morbi dignissim urna dolor, nec porta felis congue ut.\n' + 'Donec laoreet, neque vel accumsan dignissim, velit leo varius diam, suscipit sollicitudin lorem est quis diam.\n' + 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vulputate lorem ut\n' + 'arcu dictum pretium in at justo. Nunc a malesuada risus. Etiam suscipit hendrerit urna sit amet convallis. Vivamus\n' + 'eget elit quis magna blandit imperdiet sodales ut ante. Duis ornare vestibulum est, a vestibulum risus convallis\n' + 'nec. Fusce a tortor mi.\n', 'Donec arcu tortor, rhoncus id interdum in, rhoncus in lectus. Fusce a lobortis sapien. Vestibulum tortor elit,\n' + 'dignissim vitae convallis vitae, scelerisque sed diam. Duis id ultrices odio, nec elementum lectus. In sit amet \n' + 'lorem vehicula, sodales lectus eget, volutpat nunc. In hac habitasse platea dictumst. Ut convallis sodales velit,\n' + 'molestie mattis massa ultricies varius. Quisque id rhoncus turpis. Aliquam nunc enim, ornare eu ultricies at, \n' + 'placerat ut eros. Maecenas blandit velit ac dictum fringilla. Duis ac erat lorem. Integer eros elit, scelerisque \n' + 'nec suscipit ut, semper ut est. Suspendisse hendrerit justo et consectetur blandit. Duis scelerisque vehicula odio \n' + 'a consequat. Pellentesque sed nulla et mauris imperdiet porttitor nec eget quam.\n', 'Vivamus faucibus tincidunt magna id tincidunt. Donec blandit nibh ac lacus pharetra sagittis eu vitae eros. Donec \n' + 'viverra sodales est, non ornare velit. Aliquam erat volutpat. Praesent vitae nibh eget orci dignissim scelerisque a \n' + 'ac nisl. Pellentesque auctor ex massa. Nam ligula metus, ornare sit amet egestas eu, accumsan in mi. Praesent hendrerit \n' + 'dolor erat, vitae imperdiet massa congue non. Donec leo libero, rhoncus nec tortor id, blandit porta lacus. Cras eget \n' + 'euismod nisl. Quisque eget risus mauris. Praesent fringilla hendrerit est porttitor ultricies.\n', 'Vestibulum a pretium ex, mollis molestie lorem. Nam gravida scelerisque lectus vel sodales. Phasellus odio eros, auctor \n' + 'eu feugiat at, egestas quis lectus. Donec nec purus ante. Mauris molestie lacus eu diam dapibus suscipit. Nam eu odio \n' + 'dictum, sollicitudin nisl et, congue mauris. Aliquam erat volutpat. Duis efficitur est sit amet libero porta, sit amet \n' + 'laoreet dui consequat. Aliquam varius nulla viverra maximus convallis.\n', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus turpis. Lorem ipsum dolor sit amet,\n' + 'consectetur adipiscing elit. Maecenas nisl neque, placerat eu ullamcorper et, laoreet vel velit. Praesent at\n' + 'posuere sapien. Proin aliquet ligula vel cursus suscipit. Pellentesque vehicula ullamcorper erat sed ultricies.\n' + 'Phasellus egestas, massa sed varius condimentum, urna eros venenatis justo, ac laoreet magna elit et nisl.\n' + 'Praesent erat nisl, viverra ut pellentesque at, bibendum vestibulum leo. Pellentesque consectetur pulvinar\n' + 'urna, sit amet scelerisque diam iaculis nec.', 'In ornare eros eu enim consequat, at malesuada felis volutpat. Nunc in risus velit. Etiam aliquam viverra ex,\n' + 'ut ullamcorper metus faucibus vel. Aenean in nulla pellentesque, pretium magna eu, sodales elit. Nunc vitae\n' + 'posuere enim. Nulla vel cursus turpis. Donec ac tempor ex. Donec mattis bibendum nisi, eget dictum nisi euismod\n' + 'vitae. Suspendisse cursus non tellus vitae interdum. Aliquam pellentesque pharetra facilisis. Suspendisse\n' + 'faucibus consectetur mollis. Curabitur lacus erat, consectetur a est ac, cursus dignissim arcu.', 'Mauris mollis sollicitudin dignissim. Nam lobortis massa vel volutpat pretium. Maecenas lacinia rhoncus purus.\n' + 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pellentesque\n' + 'imperdiet nunc, id elementum velit laoreet eu. Quisque porttitor libero nec leo varius porttitor. Nam ut\n' + 'condimentum mi, eu commodo odio. Nullam interdum iaculis magna, id varius nisl. Nulla euismod, metus nec\n' + 'sodales tincidunt, mi dui sollicitudin enim, non ultrices leo tellus ac justo. Nunc posuere urna vel sapien\n' + 'dignissim tempor sed a erat. Mauris aliquet, magna sit amet vestibulum placerat, risus felis blandit turpis,\n' + 'vel interdum massa nulla id urna. Aenean ornare felis ut dolor fermentum cursus. Mauris et leo non libero\n' + 'egestas pretium. Sed quis lectus vel mi lacinia efficitur id vitae mauris. In tempus faucibus odio ac convallis.', 'Phasellus ut est ex. Donec eget nulla eget neque congue facilisis sit amet vitae orci. Donec velit est,\n' + 'bibendum quis cursus nec, ornare sit amet nibh. Praesent vestibulum accumsan nisl. Vestibulum ante ipsum primis\n' + 'in faucibus orci luctus et ultrices posuere cubilia curae; Etiam varius purus vel blandit posuere. Integer\n' + 'maximus, ligula in faucibus tempus, nibh nisl elementum purus, sit amet ornare dolor justo et mi. Praesent\n' + 'venenatis semper dolor eu varius. Morbi nec nisi eu velit sagittis condimentum. Aenean vitae nisi ornare,\n' + 'porttitor metus laoreet, ornare ante. Fusce id suscipit justo. Duis bibendum, purus et rutrum varius, lorem\n' + 'neque hendrerit nisl, ut commodo magna mi ut arcu. Sed placerat convallis urna eu laoreet. Suspendisse\n' + 'pellentesque nibh vel tortor vestibulum, a euismod risus dapibus. Sed gravida a dolor accumsan finibus.\n' + 'Aenean vestibulum aliquam lacus, sed dignissim enim imperdiet nec.', 'Duis lorem justo, eleifend vel mattis vitae, ornare ut libero. Quisque eget nulla a risus viverra tempus.\n' + 'Morbi eu efficitur enim, sed suscipit lorem. Aenean non orci consectetur, eleifend tellus non, pellentesque\n' + 'justo. Mauris a vulputate dolor. Fusce purus dui, auctor at congue ut, tempus et magna. Aenean sagittis\n' + 'fermentum purus non aliquam. Aliquam et magna commodo, rhoncus nisi at, pharetra arcu. Vestibulum tristique,\n' + 'purus quis fermentum mollis, felis quam posuere diam, at accumsan tortor quam id odio. Ut lobortis purus nec\n' + 'orci molestie gravida quis eu ipsum. Fusce blandit sapien mi, sit amet vulputate metus auctor nec. In non\n' + 'viverra elit, quis egestas odio. Proin fringilla velit id est fringilla, ac vestibulum mauris finibus.\n' + 'Nulla ultricies dolor dui, id ullamcorper felis interdum nec. Fusce finibus augue et risus dictum semper.'];
    /***/
  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.??fac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 13,
      vars: 2,
      consts: [["id", "error-btn", "mat-raised-button", "", "color", "primary", 3, "routerLink"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 404 error: page not found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " to return ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  transform: translateY(-5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/future-page/future-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/future-page/future-page.component.ts ***!
    \******************************************************/

  /*! exports provided: FuturePageComponent */

  /***/
  function srcAppFuturePageFuturePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuturePageComponent", function () {
      return FuturePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var FuturePageComponent =
    /*#__PURE__*/
    function () {
      function FuturePageComponent(router) {
        _classCallCheck(this, FuturePageComponent);

        this.router = router;
      }

      _createClass(FuturePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.type = this.router.url.split('/').pop();
        }
      }]);

      return FuturePageComponent;
    }();

    FuturePageComponent.??fac = function FuturePageComponent_Factory(t) {
      return new (t || FuturePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    FuturePageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FuturePageComponent,
      selectors: [["app-future-page"]],
      decls: 13,
      vars: 3,
      consts: [["id", "return-home", "mat-raised-button", "", "color", "primary", 3, "routerLink"]],
      template: function FuturePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " to return ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" The ", ctx.type, " page is currently under construction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  transform: translateY(-5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnV0dXJlLXBhZ2UvZnV0dXJlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Z1dHVyZS1wYWdlL2Z1dHVyZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FuturePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-future-page',
          templateUrl: './future-page.component.html',
          styleUrls: ['./future-page.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function HomeComponent_mat_card_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_mat_card_5_Template_mat_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

          var item_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r4["goto"]([item_r3.path]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "selenium-" + item_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3.name);
      }
    }

    function HomeComponent_mat_card_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_mat_card_9_Template_mat_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

          var item_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r7["goto"]([item_r6.path]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "project-" + item_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r6.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r6.name);
      }
    }

    var _c0 = function _c0() {
      return ["/under-construction/application"];
    };

    function HomeComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Free Trial Classes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Not sure if we are a good match for you or which class you want to learn?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Free trial classes are available and may be taken once per class.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " For more information get in touch. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " APPLY NOW ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.showTrial = true;
        this.seleniumItems = [{
          name: 'Elements',
          icon: 'dashboard',
          path: 'selenium/elements'
        }, {
          name: 'TestNG',
          icon: 'task_alt',
          path: 'under-construction/testing'
        }, {
          name: 'Cucumber',
          icon: 'miscellaneous_services',
          path: 'under-construction/cucumber'
        }];
        this.projectItems = [{
          name: 'Insurance',
          icon: 'local_police',
          path: 'projects/insurance'
        }, {
          name: 'Money Management',
          icon: 'account_balance',
          path: 'projects/money-management'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goto",
        value: function goto(route) {
          this.router.navigate(route);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 11,
      vars: 3,
      consts: [[1, "list"], ["matRipple", "", "class", "mat-elevation-z12", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "trial", 4, "ngIf"], ["matRipple", "", 1, "mat-elevation-z12", 3, "id", "click"], [1, "logo"], [1, "trial"], ["id", "apply-now", "mat-raised-button", "", "color", "primary", 3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Selenium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, HomeComponent_mat_card_5_Template, 9, 3, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, HomeComponent_mat_card_9_Template, 9, 3, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, HomeComponent_div_10_Template, 11, 2, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.seleniumItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.projectItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showTrial);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin: 20px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 20px;\n  -webkit-user-select: none; \n  -moz-user-select: none;  \n  user-select: none; \n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  background: #e9e9e9;\n}\n\n.logo[_ngcontent-%COMP%] {\n  transform: scale(3);\n}\n\n.trial[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  text-align: center;\n  padding: 20px 20px 40px;\n  margin: 40px -40px -40px;\n  color: white;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFFLFdBQVc7RUFDdEMsc0JBQXNCLEVBQUUsWUFBWSxFQUNiLGVBQWU7RUFDdEMsaUJBQWlCLEVBQUUsYUFBYTtBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXG59XG5cbm1hdC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbn1cblxuLmxvZ28ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xufVxuXG4udHJpYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyMHB4IDQwcHg7XG4gIG1hcmdpbjogNDBweCAtNDBweCAtNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/insurance/insurance.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/insurance/insurance.component.ts ***!
    \**************************************************/

  /*! exports provided: InsuranceComponent */

  /***/
  function srcAppInsuranceInsuranceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsuranceComponent", function () {
      return InsuranceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    function InsuranceComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h2", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, " You could save 30% on Car Insurance when you're claims free. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h4", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function InsuranceComponent_div_2_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r12.started = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Get a Quote");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " Get a quote online and save 5% on eligible coverage* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Vehicle Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_mat_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var y_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", y_r25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](y_r25);
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_p_13_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var m_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", m_r27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](m_r27);
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_p_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Vehicle Make");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-select", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("valueChange", function InsuranceComponent_mat_vertical_stepper_3_p_13_Template_mat_select_valueChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          return ctx_r28.make = $event;
        })("valueChange", function InsuranceComponent_mat_vertical_stepper_3_p_13_Template_mat_select_valueChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r29);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          return ctx_r30.model = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, InsuranceComponent_mat_vertical_stepper_3_p_13_mat_option_7_Template, 2, 2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r16.make);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r16.makes);
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_p_14_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var m_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", m_r32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](m_r32);
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_p_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Vehicle Model");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-select", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("valueChange", function InsuranceComponent_mat_vertical_stepper_3_p_14_Template_mat_select_valueChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          return ctx_r33.model = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, InsuranceComponent_mat_vertical_stepper_3_p_14_mat_option_7_Template, 2, 2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r17.model);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r17.models);
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Finance Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Driving Distance");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_ng_template_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Coverage Start Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_ng_template_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Savings and Discounts");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_ng_template_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "The Driver");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_ng_template_112_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Driver's License History");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function InsuranceComponent_mat_vertical_stepper_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-vertical-stepper");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, InsuranceComponent_mat_vertical_stepper_3_ng_template_2_Template, 2, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Fill in your vehicle details beginning with year, below.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Vehicle Year");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-select", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("valueChange", function InsuranceComponent_mat_vertical_stepper_3_Template_mat_select_valueChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r35.year = $event;
        })("valueChange", function InsuranceComponent_mat_vertical_stepper_3_Template_mat_select_valueChange_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          ctx_r37.model = null;
          return ctx_r37.make = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, InsuranceComponent_mat_vertical_stepper_3_mat_option_12_Template, 2, 2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, InsuranceComponent_mat_vertical_stepper_3_p_13_Template, 8, 2, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, InsuranceComponent_mat_vertical_stepper_3_p_14_Template, 8, 2, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, InsuranceComponent_mat_vertical_stepper_3_ng_template_19_Template, 2, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-button-toggle-group", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("valueChange", function InsuranceComponent_mat_vertical_stepper_3_Template_mat_button_toggle_group_valueChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r38.finance = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-button-toggle", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Owned");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "mat-button-toggle", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Financed");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Leased");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, InsuranceComponent_mat_vertical_stepper_3_ng_template_35_Template, 2, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " For this vehicle, what is the estimated total annual driving distance (km)? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Select driving distance");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function InsuranceComponent_mat_vertical_stepper_3_Template_input_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r39.distance = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, " If applicable, select the options that contribute to your annual driving distance: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-checkbox", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function InsuranceComponent_mat_vertical_stepper_3_Template_mat_checkbox_ngModelChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r40.workSchool = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, " I commute to work or school");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "mat-checkbox", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function InsuranceComponent_mat_vertical_stepper_3_Template_mat_checkbox_ngModelChange_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r41.business = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, " I use my car to conduct business");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](57, InsuranceComponent_mat_vertical_stepper_3_ng_template_57_Template, 2, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, " When do you want your coverage to start? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Choose a date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function InsuranceComponent_mat_vertical_stepper_3_Template_input_ngModelChange_63_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r42.date = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](64, "mat-datepicker-toggle", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](65, "mat-datepicker", null, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](74, InsuranceComponent_mat_vertical_stepper_3_ng_template_74_Template, 2, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, " Do you equip this vehicle with 4 winter tires from December 1st to Marth 31st every year? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "mat-button-toggle-group", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("valueChange", function InsuranceComponent_mat_vertical_stepper_3_Template_mat_button_toggle_group_valueChange_77_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r43.winterTires = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "mat-button-toggle", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "mat-button-toggle", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, " Would you like to enroll in the TD MyAdvantage savings program? You could sav up to 25% for driving safely. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "mat-button-toggle-group", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("valueChange", function InsuranceComponent_mat_vertical_stepper_3_Template_mat_button_toggle_group_valueChange_84_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r44.savingsProgram = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "mat-button-toggle", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "mat-button-toggle", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](96, InsuranceComponent_mat_vertical_stepper_3_ng_template_96_Template, 2, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, " Enter your license number and we'll fill in some off the required information. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "mat-form-field", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "Drivers License Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function InsuranceComponent_mat_vertical_stepper_3_Template_input_ngModelChange_102_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r45.licNumber = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, " Entering your license number lets us deliver you a faster more accurate quote. Rest assured your personal information is secure with us. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](112, InsuranceComponent_mat_vertical_stepper_3_ng_template_112_Template, 2, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, " Have you ever had a driver's license from another Canadian province, or the USA? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "mat-button-toggle-group", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("valueChange", function InsuranceComponent_mat_vertical_stepper_3_Template_mat_button_toggle_group_valueChange_115_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r46.otherLic = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "mat-button-toggle", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "mat-button-toggle", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function InsuranceComponent_mat_vertical_stepper_3_Template_button_click_124_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r36);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r47.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](66);

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r10.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r10.years);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r10.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r10.make);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx_r10.model);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r10.finance);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx_r10.finance);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r10.distance);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r10.workSchool);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r10.business);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx_r10.distance && ctx_r10.distance !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r21)("ngModel", ctx_r10.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx_r10.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r10.winterTires);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r10.savingsProgram);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !(!!ctx_r10.savingsProgram && !!ctx_r10.winterTires));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r10.licNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx_r10.licNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r10.otherLic);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx_r10.otherLic);
      }
    }

    function InsuranceComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Reviewer, here's a detailed summary of your quote:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " per month");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "You saved money on your premium.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Let us call you");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, " Or call us at 1-877-");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "123-123");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("$", ctx_r11.insuranceCost, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("$", ctx_r11.insuranceCostX12, " per year | Taxes not included | Quote #D000034953075");
      }
    }

    var InsuranceComponent =
    /*#__PURE__*/
    function () {
      function InsuranceComponent() {
        _classCallCheck(this, InsuranceComponent);

        this.carData = {};
      }

      _createClass(InsuranceComponent, [{
        key: "years",
        get: function get() {
          return Object.keys(this.carData);
        }
      }, {
        key: "makes",
        get: function get() {
          return Object.keys(this.carData[this.year]);
        }
      }, {
        key: "models",
        get: function get() {
          return this.carData[this.year][this.make];
        }
      }, {
        key: "insuranceCost",
        get: function get() {
          var temp = this.randomCost + '';
          temp = temp.substring(0, temp.indexOf('.') + 3);
          return temp;
        }
      }, {
        key: "insuranceCostX12",
        get: function get() {
          var temp = this.randomCost + '';
          temp = temp.substring(0, temp.indexOf('.') + 3) * 1 * 12 + '';
          temp = temp.substring(0, temp.indexOf('.') + 3);

          if (temp.length > 6) {
            temp = temp.split('');
            temp.splice(1, 0, ',');
            temp = temp.join('');
          }

          return temp;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "submit",
        value: function submit() {
          this.submitted = true;
          this.randomCost = Math.random() * 500;
        }
      }, {
        key: "getData",
        value: function getData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var response, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch('https://parseapi.back4app.com/classes/Car_Model_List?limit=90000&excludeKeys=Category', {
                      headers: {
                        'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z',
                        'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW'
                      }
                    });

                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.json();

                  case 5:
                    data = _context.sent;

                    if (data.results) {
                      data.results.forEach(function (item) {
                        if (!_this4.carData[item.Year + '']) {
                          _this4.carData[item.Year + ''] = {};
                          _this4.carData[item.Year + ''][item.Make] = [item.Model];
                        } else {
                          if (!_this4.carData[item.Year + ''][item.Make]) {
                            _this4.carData[item.Year + ''][item.Make] = [item.Model];
                          } else {
                            _this4.carData[item.Year + ''][item.Make].push(item.Model);
                          }
                        }
                      });
                    } else {
                      alert('error fetching car data');
                    }

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return InsuranceComponent;
    }();

    InsuranceComponent.??fac = function InsuranceComponent_Factory(t) {
      return new (t || InsuranceComponent)();
    };

    InsuranceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: InsuranceComponent,
      selectors: [["app-insurance"]],
      decls: 5,
      vars: 3,
      consts: [[4, "ngIf"], [1, "blue"], [1, "right"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matStepLabel", ""], ["appearance", "outline"], [3, "value", "valueChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "next-step", "mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled"], ["value", "owned"], ["value", "financed"], ["value", "leased"], ["id", "last-step", "mat-stroked-button", "", "matStepperPrevious", ""], ["id", "next-step2", "mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled"], ["matNativeControl", "", "type", "number", 3, "ngModel", "ngModelChange"], ["color", "primary", 3, "ngModel", "ngModelChange"], ["id", "last-step2", "mat-stroked-button", "", "matStepperPrevious", ""], ["id", "next-step3", "mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["id", "last-step3", "mat-stroked-button", "", "matStepperPrevious", ""], ["id", "next-step4", "mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled"], ["value", "yes"], ["value", "no"], ["id", "last-step4", "mat-stroked-button", "", "matStepperPrevious", ""], ["id", "next-step5", "mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled"], ["appearance", "outline", 2, "width", "100%"], ["matNativeControl", "", "placeholder", "ANNNN-NNNNNN-NNNNN", 3, "ngModel", "ngModelChange"], ["id", "last-step5", "mat-stroked-button", "", "matStepperPrevious", ""], ["id", "next-step6", "mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled"], ["id", "last-step6", "mat-stroked-button", "", "matStepperPrevious", ""], ["id", "next-step7", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "biggest"], ["id", "let-us-call-you", "mat-raised-button", "", "color", "warn"]],
      template: function InsuranceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, InsuranceComponent_div_2_Template, 12, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, InsuranceComponent_mat_vertical_stepper_3_Template, 126, 22, "mat-vertical-stepper", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, InsuranceComponent_div_4_Template, 21, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.started);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.started && !ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.submitted);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperNext"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperPrevious"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"]],
      styles: [".right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.blue[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n .mat-button-toggle-checked {\n  background: #4051b5;\n}\n\n.biggest[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdXJhbmNlL2luc3VyYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2luc3VyYW5jZS9pbnN1cmFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG46Om5nLWRlZXAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM0MDUxYjU7XG59XG5cbi5iaWdnZXN0IHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](InsuranceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-insurance',
          templateUrl: './insurance.component.html',
          styleUrls: ['./insurance.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/money-management/money-management.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/money-management/money-management.component.ts ***!
    \****************************************************************/

  /*! exports provided: Liability, Finance, MoneyManagementComponent, DialogData, AddFinanceDialogComponent */

  /***/
  function srcAppMoneyManagementMoneyManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Liability", function () {
      return Liability;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Finance", function () {
      return Finance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoneyManagementComponent", function () {
      return MoneyManagementComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogData", function () {
      return DialogData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFinanceDialogComponent", function () {
      return AddFinanceDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    var _c0 = ["homeTable"];
    var _c1 = ["savingsTable"];
    var _c2 = ["emergencyTable"];
    var _c3 = ["retirementTable"];
    var _c4 = ["investmentsTable"];
    var _c5 = ["mortgageTable"];
    var _c6 = ["creditCardTable"];
    var _c7 = ["lineOfCreditTable"];
    var _c8 = ["homeEquityLineOfCreditTable"];
    var _c9 = ["studentLoansTable"];
    var _c10 = ["otherTable"];

    function MoneyManagementComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Goals we recommend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Interested in some help prioritizing your goals?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Would you like some guidance on what goals to prioritize based on your own personal situation? We can help recommend some goals for you. Just click 'Start' to begin. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_2_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r149);

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r148.step = "description";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Your recommended goals");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Think of it as a smart financial plan - tailored just for you, from now to retirement.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "quiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " We'll start by getting some info from you to understand where you are in you financial journey. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "format_list_numbered");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Next we'll offer some recommendations to help you get where you want to be.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "done_all");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "With your plan in place, we'll help you track how you're progressing along the way.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "schedule");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "This should take around 10 minutes to complete. You can always revisit it later.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Please note:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Our recommendations are based on the information you've provided in your Financial Profile. This information is intended as guidance only and should not be considered financial advice or as a formal financial plan. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_3_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r151);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r150.step = "activity";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Set up now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Getting started");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_h4_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " How many children ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_mat_form_field_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Children");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_mat_form_field_32_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r179);

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r178.numberOfChildren = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r155.numberOfChildren);
      }
    }

    function MoneyManagementComponent_div_4_mat_card_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_mat_card_42_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r183);

          var i_r181 = ctx.index;

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r182.move(i_r181, 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "arrow_downward");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_mat_card_42_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r183);

          var i_r181 = ctx.index;

          var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r184.move(i_r181, 0 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "arrow_upward");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_mat_card_42_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r183);

          var i_r181 = ctx.index;

          var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r185.remove(i_r181);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r180 = ctx.$implicit;
        var i_r181 = ctx.index;

        var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r180.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r180.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r180.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "move-up-" + item_r180.icon)("disabled", i_r181 === ctx_r157.goals.length - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "move-down-" + item_r180.icon)("disabled", i_r181 === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "trash-" + item_r180.icon);
      }
    }

    function MoneyManagementComponent_div_4_mat_card_48_Template(rf, ctx) {
      if (rf & 1) {
        var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_mat_card_48_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r189);

          var i_r187 = ctx.index;

          var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r188.restore(i_r187);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "restore_from_trash");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r186 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r186.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r186.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r186.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "restore-" + item_r186.icon);
      }
    }

    function MoneyManagementComponent_div_4_ng_template_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Assets and liabilities");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_67_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r191.tableHeaders("home"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_67_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r199 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r199.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_67_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_67_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r200 = ctx.$implicit;

        var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r194.moneyFormat(element_r200.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_67_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_67_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_67_td_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r204);

          var i_r202 = ctx.index;

          var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r203.edit("home", i_r202);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r202 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-home" + i_r202);
      }
    }

    function MoneyManagementComponent_div_4_table_67_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_67_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 85, 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_67_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_67_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_67_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_67_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_67_th_9_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_67_td_10_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, MoneyManagementComponent_div_4_table_67_tr_11_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_67_tr_12_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r161.finances["home"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r161.financeTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r161.financeTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_74_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r207.tableHeaders("retirement"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_74_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r215 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r215.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_74_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_74_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r216 = ctx.$implicit;

        var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r210.moneyFormat(element_r216.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_74_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_74_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_74_td_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r220);

          var i_r218 = ctx.index;

          var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r219.edit("retirement", i_r218);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r218 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-retirement" + i_r218);
      }
    }

    function MoneyManagementComponent_div_4_table_74_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_74_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 85, 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_74_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_74_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_74_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_74_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_74_th_9_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_74_td_10_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, MoneyManagementComponent_div_4_table_74_tr_11_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_74_tr_12_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r162.finances["retirement"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r162.financeTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r162.financeTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_81_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r223.tableHeaders("savings"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_81_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r231 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r231.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_81_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_81_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r232 = ctx.$implicit;

        var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r226.moneyFormat(element_r232.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_81_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_81_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_81_td_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r236);

          var i_r234 = ctx.index;

          var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r235.edit("savings", i_r234);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r234 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-savings" + i_r234);
      }
    }

    function MoneyManagementComponent_div_4_table_81_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_81_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 85, 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_81_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_81_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_81_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_81_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_81_th_9_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_81_td_10_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, MoneyManagementComponent_div_4_table_81_tr_11_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_81_tr_12_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r163.finances["savings"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r163.financeTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r163.financeTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_88_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r239.tableHeaders("emergency"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_88_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r247 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r247.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_88_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_88_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r248 = ctx.$implicit;

        var ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r242.moneyFormat(element_r248.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_88_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_88_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_88_td_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r252);

          var i_r250 = ctx.index;

          var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r251.edit("emergency", i_r250);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r250 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-emergency" + i_r250);
      }
    }

    function MoneyManagementComponent_div_4_table_88_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_88_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 85, 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_88_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_88_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_88_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_88_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_88_th_9_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_88_td_10_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, MoneyManagementComponent_div_4_table_88_tr_11_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_88_tr_12_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r164.finances["emergency"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r164.financeTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r164.financeTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_95_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r255.tableHeaders("investments"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_95_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r263 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r263.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_95_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_95_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r264 = ctx.$implicit;

        var ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r258.moneyFormat(element_r264.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_95_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_95_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_95_td_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r268);

          var i_r266 = ctx.index;

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r267.edit("investments", i_r266);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r266 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-investment" + i_r266);
      }
    }

    function MoneyManagementComponent_div_4_table_95_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_95_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 85, 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_95_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_95_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_95_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_95_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_95_th_9_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_95_td_10_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, MoneyManagementComponent_div_4_table_95_tr_11_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_95_tr_12_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r165.finances["investments"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r165.financeTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r165.financeTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_108_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r271.tableHeaders("mortgage"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_108_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r281 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r281.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_108_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_108_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r282 = ctx.$implicit;

        var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r274.moneyFormat(element_r282.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_108_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Interest ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_108_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r283 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r283.interest, " % ");
      }
    }

    function MoneyManagementComponent_div_4_table_108_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_108_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_108_td_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r287);

          var i_r285 = ctx.index;

          var ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r286.edit("mortgage", i_r285);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r285 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-mortgage" + i_r285);
      }
    }

    function MoneyManagementComponent_div_4_table_108_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_108_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_108_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 103, 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_108_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_108_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_108_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_108_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_108_th_9_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_108_td_10_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_108_th_12_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MoneyManagementComponent_div_4_table_108_td_13_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MoneyManagementComponent_div_4_table_108_tr_14_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, MoneyManagementComponent_div_4_table_108_tr_15_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r166.liabilities["mortgage"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r166.liabilityTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r166.liabilityTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_115_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r290.tableHeaders("creditCard"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_115_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r300 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r300.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_115_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_115_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r301 = ctx.$implicit;

        var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r293.moneyFormat(element_r301.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_115_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Interest ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_115_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r302 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r302.interest, " % ");
      }
    }

    function MoneyManagementComponent_div_4_table_115_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_115_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_115_td_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r306);

          var i_r304 = ctx.index;

          var ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r305.edit("creditCard", i_r304);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r304 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-credit" + i_r304);
      }
    }

    function MoneyManagementComponent_div_4_table_115_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_115_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_115_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 103, 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_115_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_115_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_115_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_115_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_115_th_9_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_115_td_10_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_115_th_12_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MoneyManagementComponent_div_4_table_115_td_13_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MoneyManagementComponent_div_4_table_115_tr_14_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, MoneyManagementComponent_div_4_table_115_tr_15_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r167.liabilities["creditCard"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r167.liabilityTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r167.liabilityTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_122_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r309.tableHeaders("lineOfCredit"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_122_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r319 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r319.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_122_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_122_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r320 = ctx.$implicit;

        var ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r312.moneyFormat(element_r320.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_122_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Interest ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_122_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r321 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r321.interest, " % ");
      }
    }

    function MoneyManagementComponent_div_4_table_122_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_122_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_122_td_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r325);

          var i_r323 = ctx.index;

          var ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r324.edit("lineOfCredit", i_r323);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r323 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-line-credit" + i_r323);
      }
    }

    function MoneyManagementComponent_div_4_table_122_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_122_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_122_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 103, 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_122_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_122_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_122_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_122_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_122_th_9_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_122_td_10_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_122_th_12_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MoneyManagementComponent_div_4_table_122_td_13_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MoneyManagementComponent_div_4_table_122_tr_14_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, MoneyManagementComponent_div_4_table_122_tr_15_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r168.liabilities["lineOfCredit"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r168.liabilityTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r168.liabilityTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_129_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r328.tableHeaders("homeEquityLineOfCredit"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_129_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r338 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r338.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_129_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_129_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r339 = ctx.$implicit;

        var ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r331.moneyFormat(element_r339.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_129_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Interest ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_129_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r340 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r340.interest, " % ");
      }
    }

    function MoneyManagementComponent_div_4_table_129_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_129_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_129_td_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r344);

          var i_r342 = ctx.index;

          var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r343.edit("homeEquityLineOfCredit", i_r342);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r342 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-homeE" + i_r342);
      }
    }

    function MoneyManagementComponent_div_4_table_129_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_129_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 103, 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_129_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_129_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_129_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_129_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_129_th_9_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_129_td_10_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_129_th_12_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MoneyManagementComponent_div_4_table_129_td_13_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MoneyManagementComponent_div_4_table_129_tr_14_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, MoneyManagementComponent_div_4_table_129_tr_15_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r169.liabilities["homeEquityLineOfCredit"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r169.liabilityTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r169.liabilityTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_136_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r347.tableHeaders("studentLoans"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_136_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r357 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r357.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_136_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_136_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r358 = ctx.$implicit;

        var ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r350.moneyFormat(element_r358.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_136_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Interest ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_136_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r359 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r359.interest, " % ");
      }
    }

    function MoneyManagementComponent_div_4_table_136_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_136_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_136_td_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r363);

          var i_r361 = ctx.index;

          var ctx_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r362.edit("studentLoans", i_r361);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r361 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-student" + i_r361);
      }
    }

    function MoneyManagementComponent_div_4_table_136_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_136_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_136_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 103, 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_136_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_136_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_136_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_136_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_136_th_9_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_136_td_10_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_136_th_12_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MoneyManagementComponent_div_4_table_136_td_13_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MoneyManagementComponent_div_4_table_136_tr_14_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, MoneyManagementComponent_div_4_table_136_tr_15_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r170.liabilities["studentLoans"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r170.liabilityTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r170.liabilityTableCols);
      }
    }

    function MoneyManagementComponent_div_4_table_143_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r366.tableHeaders("other"), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_143_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r376 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r376.description, " ");
      }
    }

    function MoneyManagementComponent_div_4_table_143_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_143_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r377 = ctx.$implicit;

        var ctx_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r369.moneyFormat(element_r377.amount), " ");
      }
    }

    function MoneyManagementComponent_div_4_table_143_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Interest ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_table_143_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r378 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r378.interest, " % ");
      }
    }

    function MoneyManagementComponent_div_4_table_143_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "th", 94);
      }
    }

    function MoneyManagementComponent_div_4_table_143_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_table_143_td_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r382);

          var i_r380 = ctx.index;

          var ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r381.edit("other", i_r380);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r380 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "edit-other" + i_r380);
      }
    }

    function MoneyManagementComponent_div_4_table_143_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 97);
      }
    }

    function MoneyManagementComponent_div_4_table_143_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 98);
      }
    }

    function MoneyManagementComponent_div_4_table_143_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 103, 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_4_table_143_th_3_Template, 2, 1, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_table_143_td_4_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_4_table_143_th_6_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_4_table_143_td_7_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MoneyManagementComponent_div_4_table_143_th_9_Template, 2, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MoneyManagementComponent_div_4_table_143_td_10_Template, 2, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MoneyManagementComponent_div_4_table_143_th_12_Template, 1, 0, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MoneyManagementComponent_div_4_table_143_td_13_Template, 3, 1, "td", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MoneyManagementComponent_div_4_table_143_tr_14_Template, 1, 0, "tr", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, MoneyManagementComponent_div_4_table_143_tr_15_Template, 1, 0, "tr", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r171.liabilities["other"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r171.liabilityTableCols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r171.liabilityTableCols);
      }
    }

    function MoneyManagementComponent_div_4_ng_template_153_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Budget");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_ng_template_211_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Retirement info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_div_224_Template(rf, ctx) {
      if (rf & 1) {
        var _r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Planned retirement age");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "retirement age");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_div_224_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r386);

          var ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r385.retirementAge = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Number of years you'd like this money to last during retirement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "years");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_div_224_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r386);

          var ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r387.retirementDuration = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Rate of return ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "rate of return");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_div_224_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r386);

          var ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r388.retirementRateOfReturn = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Please note: The rate of return is hypothetical and does not reflect actual results or the future returns or future value of any mutual funds, investments of savings. Assumes reinvestment of all income and no transaction costs of taxes. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h4", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Other Retirement Income (e.g. Old Age Security, Canada Pension Plan)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 112, 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_div_224_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r386);

          var ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r389.otherRetirementIncome = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](32);

        var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r174.retirementAge);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r174.retirementDuration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r174.retirementRateOfReturn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r174.otherRetirementIncome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Note: ", ctx_r174.moneyFormat(_r384.value), " is approximately the average sum and maximum CVA5 for 2021. ");
      }
    }

    function MoneyManagementComponent_div_4_ng_template_232_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Review and confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_4_mat_card_255_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " \xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-icon", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " \xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r390 = ctx.$implicit;
        var i_r391 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA0", i_r391 + 1, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r390.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r390.title);
      }
    }

    function MoneyManagementComponent_div_4_div_360_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Planned retirement age");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Years for retirement to last");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-card", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Rate of return");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Other retirement income");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r177.retirementAge);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r177.retirementDuration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r177.retirementDuration, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r177.moneyFormat(ctx_r177.otherRetirementIncome));
      }
    }

    var _c11 = function _c11(a0) {
      return [a0];
    };

    var _c12 = function _c12(a0, a1) {
      return {
        money: a0,
        negMoney: a1
      };
    };

    function MoneyManagementComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-horizontal-stepper", null, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_ng_template_4_Template, 2, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Let's get started");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " To recommend goals for you, we'll start by asking you for some information so we can understand where you are in your financial journey. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "What's your marital status?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Marital Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("valueChange", function MoneyManagementComponent_div_4_Template_mat_select_valueChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r392.maritalStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Married");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Divorced");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Single");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Widow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Are you saving or planning to save for a child's post-secondary education? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-radio-group", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_Template_mat_radio_group_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r394.childEducation = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-radio-button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-radio-button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, MoneyManagementComponent_div_4_h4_31_Template, 2, 0, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, MoneyManagementComponent_div_4_mat_form_field_32_Template, 4, 1, "mat-form-field", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Assign and prioritize your goals");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h4", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " To help us better understand your needs, please identify your financial goals below. Rank them from the most important at the top to the least important at the bottom. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Most important:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function MoneyManagementComponent_div_4_Template_div_cdkDropListDropped_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r395.drop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, MoneyManagementComponent_div_4_mat_card_42_Template, 20, 8, "mat-card", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Removed:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 27, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function MoneyManagementComponent_div_4_Template_div_cdkDropListDropped_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r396.drop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, MoneyManagementComponent_div_4_mat_card_48_Template, 12, 4, "mat-card", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r397.step = "description";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, MoneyManagementComponent_div_4_ng_template_56_Template, 2, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "What do you have in assets?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Please provide the total dollar value of your assets in each category. This information will help us put together your personal financial plan. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "If you own your home, what's it's approximate market value?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, MoneyManagementComponent_div_4_table_67_Template, 13, 3, "table", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_68_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r398.add("home");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Add home value");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Retirement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "How much do you currently have in retirement savings?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, MoneyManagementComponent_div_4_table_74_Template, 13, 3, "table", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_75_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r399.add("retirement");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Add retirement savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "How much do you currently have in general savings accounts?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](81, MoneyManagementComponent_div_4_table_81_Template, 13, 3, "table", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_82_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r400.add("savings");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Add savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Emergency savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "How much do you currently have in emergency funds?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](88, MoneyManagementComponent_div_4_table_88_Template, 13, 3, "table", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_89_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r401.add("emergency");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Add emergency savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Investments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "How much do you currently have invested in stocks, mutual funds of other investments?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](95, MoneyManagementComponent_div_4_table_95_Template, 13, 3, "table", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_96_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r402.add("investments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Add investments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "What do you have in liabilities?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " Please provide the total dollar value of your liabilities in each category. This information will help us recommend goals for you. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Mortgage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "If you have a mortgage or more than one mortgage, how much do you currently owe?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](108, MoneyManagementComponent_div_4_table_108_Template, 16, 3, "table", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_109_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r403.add("mortgage");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Add mortgage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Credit Card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " If you have credit card debt, how much do you currently owe? Please exclude anything you plan to pay within the next month. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](115, MoneyManagementComponent_div_4_table_115_Template, 16, 3, "table", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_116_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r404.add("creditCard");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Add Credit Card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Line of Credit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "If you have any unsecured line of credit, or more than one, how much do you currently owe?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](122, MoneyManagementComponent_div_4_table_122_Template, 16, 3, "table", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_123_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r405.add("lineOfCredit");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Add Line of Credit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Home equity line of credit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "If you have a home equity line of credit, or more than one, how much do you currently owe?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](129, MoneyManagementComponent_div_4_table_129_Template, 16, 3, "table", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_130_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r406.add("homeEquityLineOfCredit");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Add Home Equity Line of Credit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Student loans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "If you have a student loan, or more than one, how much do you currently owe?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](136, MoneyManagementComponent_div_4_table_136_Template, 16, 3, "table", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_137_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r407.add("studentLoans");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Add Student Loan");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Other Loans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "How much do you currently have in other forms of debt?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](143, MoneyManagementComponent_div_4_table_143_Template, 16, 3, "table", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_144_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r408.add("other");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Add Other Debt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](153, MoneyManagementComponent_div_4_ng_template_153_Template, 2, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Let's put together your budget");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, " Please provide your average monthly income, expenses and savings below. This information will help us calculate your monthly cash flow, which will help us identify which goals to recommend for you. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "What's your average monthly net income?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "h4", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " Average monthly income (i.e. salary/wages/earnings), after taxes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Monthly Income");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_Template_input_ngModelChange_167_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r409.monthlyIncome = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "h4", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " Additional average monthly income (e.g. rental income, benefits, child support) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Additional Income");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_Template_input_ngModelChange_177_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r410.additionalIncome = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Average monthly expenses");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "h4", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " Roughly how much do you spend in an average monthly expenses? (i.e. household expenses, utilities, bills, rent, mortgage payment) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Monthly Expenses");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_Template_input_ngModelChange_187_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r411.monthlyExpenses = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Monthly savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "h4", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " Roughly how much do you save each month? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Monthly Savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_Template_input_ngModelChange_199_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r412.monthlySavings = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](211, MoneyManagementComponent_div_4_ng_template_211_Template, 2, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Let's figure out how much you need to save for retirement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "Using the information you provide below, we'll calculate how much money you need for retirement.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Are you currently retired?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "mat-radio-group", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MoneyManagementComponent_div_4_Template_mat_radio_group_ngModelChange_218_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r413.retired = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "mat-radio-button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "mat-radio-button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](224, MoneyManagementComponent_div_4_div_224_Template, 37, 5, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](232, MoneyManagementComponent_div_4_ng_template_232_Template, 2, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "Review and confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "Please review and confirm the information below.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Personal information");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "mat-card", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Marital status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "mat-card", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "Children whose education you're saving for.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_250_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

          return _r152.selectedIndex = 0;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "Goals");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](255, MoneyManagementComponent_div_4_mat_card_255_Template, 9, 3, "mat-card", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "button", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_256_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

          return _r152.selectedIndex = 0;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "Assets");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "mat-card", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "Total assets");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Home value");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "Retirement savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "Savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "Emergency savings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "Investments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_291_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

          return _r152.selectedIndex = 1;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Liabilities");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "mat-card", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Total liabilities");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Mortgage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "Credit card debt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "Line of credit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Home equity line of credit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Student loans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "mat-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "Other debt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "h4", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_331_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

          return _r152.selectedIndex = 1;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "Budget");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "mat-card", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "Average monthly income");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "mat-card", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "Average monthly expenses");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "mat-card", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "Average monthly cash on hand");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_351_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

          return _r152.selectedIndex = 2;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "Retirement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "mat-card", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "h4", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "Are you currently retired?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "h2", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](360, MoneyManagementComponent_div_4_div_360_Template, 21, 4, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "button", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_361_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

          return _r152.selectedIndex = 3;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "Please note:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, " Our recommendations are based on the information you've provided in your Financial Profile. This information is intended as guidance only and should not be considered financial advice or as a formal financial plan. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MoneyManagementComponent_div_4_Template_button_click_371_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r393);

          var ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r420.step = "finished";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](41);

        var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](47);

        var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r146.maritalStatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r146.childEducation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.childEducation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.childEducation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cdkDropListData", ctx_r146.goals)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](59, _c11, _r158));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r146.goals);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cdkDropListData", ctx_r146.trashedGoals)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](61, _c11, _r156));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r146.trashedGoals);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r146.moneyFormat(ctx_r146.totalFinances), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.finances["home"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.finances["retirement"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.finances["savings"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.finances["emergency"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.finances["investments"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r146.moneyFormat(ctx_r146.totalLiability), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.liabilities["mortgage"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.liabilities["creditCard"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.liabilities["lineOfCredit"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.liabilities["homeEquityLineOfCredit"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.liabilities["studentLoans"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r146.liabilities["other"].length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](63, _c12, ctx_r146.totalMonthlyCash >= 0, ctx_r146.totalMonthlyCash < 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r146.moneyFormat(ctx_r146.totalMonthlyCash), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r146.monthlyIncome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Based on the information you gave us when you setup Left to Spend, your average monthly net income is ", ctx_r146.moneyFormat(ctx_r146.monthlyIncome), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r146.additionalIncome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r146.monthlyExpenses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Based on the information you gave us when you setup Left to Spend, your average monthly expenses are ", ctx_r146.moneyFormat(ctx_r146.monthlyExpenses), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r146.monthlySavings);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Based on the information you gave us when you setup Left to Spend, your average monthly savings are ", ctx_r146.moneyFormat(ctx_r146.monthlySavings), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r146.retired);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r146.retired);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.maritalStatus || "No answer given");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.childEducation ? ctx_r146.numberOfChildren : "None");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r146.goals);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.totalFinances));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.finances.home)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.finances.retirement)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.finances.savings)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.finances.emergency)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.finances.investments)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.totalLiability));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.liabilities.mortgage)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.liabilities.creditCard)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.liabilities.lineOfCredit)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.liabilities.homeEquityLineOfCredit)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.liabilities.studentLoans)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.reduceAmounts(ctx_r146.liabilities.other)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.monthlyIncome));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.monthlyExpenses));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.moneyFormat(ctx_r146.monthlyIncome - ctx_r146.monthlyExpenses));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r146.retired ? "Yes" : "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r146.retired);
      }
    }

    function MoneyManagementComponent_div_5_mat_card_3_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var goal_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](goal_r422.icon);
      }
    }

    function MoneyManagementComponent_div_5_mat_card_3_mat_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "check_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_5_mat_card_3_h2_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Achieved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MoneyManagementComponent_div_5_mat_card_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MoneyManagementComponent_div_5_mat_card_3_mat_icon_6_Template, 2, 1, "mat-icon", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MoneyManagementComponent_div_5_mat_card_3_mat_icon_7_Template, 2, 0, "mat-icon", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MoneyManagementComponent_div_5_mat_card_3_h2_14_Template, 2, 0, "h2", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Start Goal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var goal_r422 = ctx.$implicit;
        var i_r423 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA0", i_r423 + 1, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !goal_r422.finished());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", goal_r422.finished());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\xA0", goal_r422.title, " goal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](goal_r422.finishedHeader);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](goal_r422.finishedText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", goal_r422.finished());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "start-goal-" + goal_r422.icon)("disabled", goal_r422.finished());
      }
    }

    function MoneyManagementComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Goals we recommend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_5_mat_card_3_Template, 18, 9, "mat-card", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Please note:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Our recommendations are based on the information you've provided in your Financial Profile. This information is intended as guidance only and should not be considered financial advice or as a formal financial plan. The amounts indicated above are for illustrative purposes only and may change as a result of information provided when setting up a Goal. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r147.goals);
      }
    }

    function AddFinanceDialogComponent_h4_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please provide the dollar amount you owe.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AddFinanceDialogComponent_h4_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Interest");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AddFinanceDialogComponent_mat_form_field_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Interest");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddFinanceDialogComponent_mat_form_field_28_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r434);

          var ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r433.interest = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r432.interest);
      }
    }

    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    var Liability = function Liability() {
      _classCallCheck(this, Liability);
    };

    var Finance = function Finance() {
      _classCallCheck(this, Finance);
    };

    var MoneyManagementComponent =
    /*#__PURE__*/
    function () {
      function MoneyManagementComponent(dialog) {
        var _this5 = this;

        _classCallCheck(this, MoneyManagementComponent);

        this.dialog = dialog;
        this.financeTableCols = ['description', 'amount', 'edit'];
        this.liabilityTableCols = ['description', 'amount', 'interest', 'edit'];
        this.step = 'pre';
        this.goals = [{
          icon: 'credit_card',
          title: 'Debt repayment',
          text: 'This could be paying off student debt, other loans, or credit cards.',
          finishedHeader: 'Pay off your debt',
          finishedText: 'By paying off high interest rate debt first, you\'ll save money' + ' on interest payments. And carrying less debt will free up money you can put towards other Goals.',
          finished: function finished() {
            return false;
          }
        }, {
          icon: 'savings',
          title: 'Emergency fund',
          text: 'Setting money aside for the unexpected.',
          finishedHeader: 'Start your emergency fund',
          finishedText: 'Having a rainy day fund will help you deal with an unplanned expense or event.',
          finished: function finished() {
            return false;
          }
        }, {
          icon: 'school',
          title: 'Children\'s education',
          text: 'Setting money aside for post-secondary educational costs.',
          finishedHeader: 'Save for a child\'s education',
          finishedText: 'Starting early is key to building enough savings to cover their education costs.',
          finished: function finished() {
            return false;
          }
        }, {
          icon: 'cottage',
          title: 'Home purchase',
          text: 'Setting money aside towards your dream home.',
          finishedHeader: 'Save for your home purchase',
          finishedText: 'Set aside the money you need for a down payment.',
          finished: function finished() {
            return false;
          }
        }, {
          icon: 'local_atm',
          title: 'General savings',
          text: 'Setting money aside for a new car, a vacation or anything else.',
          finishedHeader: 'Save for something else',
          finishedText: 'Whether you\'re spending on something big or small, saving up for it in advance means you can avoid taking on debt.',
          finished: function finished() {
            return false;
          }
        }, {
          icon: 'kitesurfing',
          title: 'Retirement',
          text: 'Growing the funds you\'ll need when you\'re ready to retire.',
          finishedHeader: 'Save for your retirement',
          finishedText: 'Starting early is the secret to growing and safeguarding your future retirement income.',
          finished: function finished() {
            return _this5.retired;
          }
        }];
        this.trashedGoals = [];
        this.finances = {
          savings: [],
          emergency: [],
          investments: [],
          retirement: [],
          home: []
        };
        this.liabilities = {
          mortgage: [],
          creditCard: [],
          lineOfCredit: [],
          homeEquityLineOfCredit: [],
          studentLoans: [],
          other: []
        };
        this.monthlyIncome = 0;
        this.additionalIncome = 0;
        this.numberOfChildren = 0;
        this.monthlyExpenses = 0;
        this.monthlySavings = 0;
        this.retirementAge = 0;
        this.retired = false;
        this.retirementDuration = 0;
        this.retirementRateOfReturn = 0;
        this.otherRetirementIncome = 0;

        this.moneyFormat = function (value) {
          return formatter.format(value);
        };
      }

      _createClass(MoneyManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "totalFinances",
        get: function get() {
          var _this6 = this;

          var total = 0;
          Object.keys(this.finances).forEach(function (key) {
            _this6.finances[key].forEach(function (data) {
              total += data.amount;
            });
          });
          return total;
        }
      }, {
        key: "totalLiability",
        get: function get() {
          var _this7 = this;

          var total = 0;
          Object.keys(this.liabilities).forEach(function (key) {
            _this7.liabilities[key].forEach(function (data) {
              total += data.amount;
            });
          });
          return total;
        }
      }, {
        key: "totalMonthlyCash",
        get: function get() {
          return this.monthlyIncome + this.additionalIncome - this.monthlyExpenses - this.monthlySavings;
        }
      }, {
        key: "reduceAmounts",
        value: function reduceAmounts(array) {
          var result = 0;
          array.forEach(function (item) {
            return result += item.amount;
          });
          return result;
        }
      }, {
        key: "restore",
        value: function restore(index) {
          var temp = this.trashedGoals.splice(index, 1)[0];
          this.goals.push(temp);
        }
      }, {
        key: "remove",
        value: function remove(index) {
          var temp = this.goals.splice(index, 1)[0];
          this.trashedGoals.push(temp);
        }
      }, {
        key: "move",
        value: function move(index, direction) {
          var temp = this.goals.splice(index, 1)[0];
          this.goals.splice(index + direction, 0, temp);
        }
      }, {
        key: "drop",
        value: function drop(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          }
        }
      }, {
        key: "tableHeaders",
        value: function tableHeaders(type) {
          switch (type) {
            case 'savings':
            case 'studentLoans':
            case 'lineOfCredit':
            case 'homeEquityLineOfCredit':
            case 'retirement':
              return 'Financial Institution';

            case 'emergency':
              return 'Fund Source';

            case 'investments':
              return 'Investment';

            case 'home':
              return 'Address';

            case 'creditCard':
              return 'credit card number';

            case 'mortgage':
              return 'equity';

            case 'other':
              return 'description';
          }
        }
      }, {
        key: "tableTitle",
        value: function tableTitle(type) {
          switch (type) {
            case 'savings':
              return 'Add Savings Account';

            case 'retirement':
              return 'Add Retirement Account';

            case 'emergency':
              return 'Add Emergency Funds';

            case 'investments':
              return 'Add Investments';

            case 'home':
              return 'Add Home';

            case 'creditCard':
              return 'Add Credit Card';

            case 'lineOfCredit':
              return 'Add Line of Credit';

            case 'homeEquityLineOfCredit':
              return 'Add Home Line of Credit';

            case 'mortgage':
              return 'Add Mortgage';

            case 'studentLoans':
              return 'Add Student Loan';

            case 'other':
              return 'Add Other Liabilities';
          }
        }
      }, {
        key: "getMoneyType",
        value: function getMoneyType(type) {
          switch (type) {
            case 'savings':
            case 'retirement':
            case 'emergency':
            case 'investments':
            case 'home':
              return 'finances';

            case 'creditCard':
            case 'lineOfCredit':
            case 'homeEquityLineOfCredit':
            case 'mortgage':
            case 'studentLoans':
            case 'other':
              return 'liabilities';
          }
        }
      }, {
        key: "add",
        value: function add(type) {
          var _this8 = this;

          this.dialog.open(AddFinanceDialogComponent, {
            width: '550px',
            data: {
              description: this.tableHeaders(type),
              title: this.tableTitle(type),
              type: type,
              liability: this.getMoneyType(type) === 'liabilities'
            }
          }).afterClosed().subscribe(function (result) {
            if (result) {
              _this8[_this8.getMoneyType(type)][type].push({
                amount: result.amount * 1,
                description: result.custom,
                interest: result.interest * 1
              });

              setTimeout(function () {
                return _this8[type + 'Table'].renderRows();
              });
            }
          });
        }
      }, {
        key: "edit",
        value: function edit(type, index) {
          var _this9 = this;

          this.dialog.open(AddFinanceDialogComponent, {
            width: '550px',
            data: {
              description: this.tableHeaders(type),
              title: this.tableTitle(type),
              type: type,
              liability: this.getMoneyType(type) === 'liabilities',
              oldData: this[this.getMoneyType(type)][type][index]
            }
          }).afterClosed().subscribe(function (result) {
            if (result) {
              _this9[_this9.getMoneyType(type)][type][index].amount = result.amount * 1;
              _this9[_this9.getMoneyType(type)][type][index].description = result.custom;

              if (_this9.getMoneyType(type) === 'liabilities') {
                _this9[_this9.getMoneyType(type)][type][index].interest = result.interest * 1;
              }

              setTimeout(function () {
                return _this9[type + 'Table'].renderRows();
              });
            }
          });
        }
      }]);

      return MoneyManagementComponent;
    }();

    MoneyManagementComponent.??fac = function MoneyManagementComponent_Factory(t) {
      return new (t || MoneyManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    MoneyManagementComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MoneyManagementComponent,
      selectors: [["app-money-management"]],
      viewQuery: function MoneyManagementComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c7, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c8, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c9, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c10, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.homeTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.savingsTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.emergencyTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.retirementTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.investmentsTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.mortgageTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.creditCardTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.lineOfCreditTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.homeEquityLineOfCreditTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.studentLoansTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.otherTable = _t.first);
        }
      },
      decls: 6,
      vars: 4,
      consts: [[4, "ngIf"], [1, "mat-elevation-z4"], [1, "short"], [1, "right"], ["id", "start-btn", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "flex"], [1, "tile", "description-tile", "mat-elevation-z4"], [1, "description-icon"], [1, "trim"], [1, "tile", "info-tile", "mat-elevation-z4"], [1, "time-icon"], [1, "medium"], ["id", "setup-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["stepper", ""], ["matStepLabel", ""], [1, "l"], ["appearance", "outline"], [3, "value", "valueChange"], ["value", "married"], ["value", "divorced"], ["value", "single"], ["value", "widow"], [3, "ngModel", "ngModelChange"], [3, "value"], ["class", "l", 4, "ngIf"], ["appearance", "outline", 4, "ngIf"], [1, "drop-container", "medium"], ["cdkDropList", "", 1, "drop-list", "mat-elevation-z4", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["goalsList", "cdkDropList"], ["class", "drop-box mat-elevation-z4", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["trashList", "cdkDropList"], ["class", "drop-box gray mat-elevation-z4", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["id", "back-to-description", "mat-raised-button", "", 3, "click"], ["id", "next", "mat-raised-button", "", "color", "primary", "matStepperNext", ""], [1, "money"], ["mat-table", "", "class", "finance-table mat-elevation-z4", 3, "dataSource", 4, "ngIf"], ["id", "add-home-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "add-retirement-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "add-savings-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "add-emergency-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "add-investment-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", "class", "liability-table mat-elevation-z4", 3, "dataSource", 4, "ngIf"], ["id", "add-mortgage-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "add-credit-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["id", "add-homeE", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "add-student-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "add-other-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "back1", "mat-raised-button", "", "matStepperPrevious", ""], ["id", "next1", "mat-raised-button", "", "color", "primary", "matStepperNext", ""], [1, "money", 3, "ngClass"], [1, "half", "l"], ["appearance", "outline", 1, "half"], ["matNativeControl", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matPrefix", ""], ["id", "back2", "mat-raised-button", "", "matStepperPrevious", ""], ["id", "next2", "mat-raised-button", "", "color", "primary", "matStepperNext", ""], ["id", "back3", "mat-raised-button", "", "matStepperPrevious", ""], ["id", "next3", "mat-raised-button", "", "color", "primary", "matStepperNext", ""], [1, "flex-area"], [1, "confirm-card-one", "mat-elevation-z4"], [1, "no-margin"], [1, "colored", "no-margin"], ["id", "edit-childs", "mat-raised-button", "", "color", "primary", 3, "click"], ["class", "confirm-card-two mat-elevation-z4", 4, "ngFor", "ngForOf"], ["id", "edit-goals", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "confirm-card-three", "mat-elevation-z4"], [1, "confirm-card-two", "mat-elevation-z4"], [1, "short", "no-margin"], ["id", "edit-assets", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "edit-lia", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "confirm-card-four", "mat-elevation-z4"], ["id", "edit-budget", "mat-raised-button", "", "color", "primary", 3, "click"], ["class", "flex-area", 4, "ngIf"], ["id", "edit-retirement", "mat-raised-button", "", "color", "primary", 3, "click"], ["id", "back4", "mat-raised-button", "", "matStepperPrevious", ""], ["id", "next4", "mat-raised-button", "", "color", "primary", 3, "click"], ["cdkDrag", "", 1, "drop-box", "mat-elevation-z4"], [1, "middle"], [1, "end"], ["mat-mini-fab", "", "color", "primary", 3, "id", "disabled", "click"], ["mat-mini-fab", "", "color", "warn", 3, "id", "click"], ["cdkDrag", "", 1, "drop-box", "gray", "mat-elevation-z4"], [1, "description-icon", "gray-icon"], ["mat-mini-fab", "", "color", "primary", 3, "id", "click"], ["mat-table", "", 1, "finance-table", "mat-elevation-z4", 3, "dataSource"], ["homeTable", ""], ["matColumnDef", "description"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "amount"], ["matColumnDef", "edit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-raised-button", "", 3, "id", "click"], ["mat-header-row", ""], ["mat-row", ""], ["retirementTable", ""], ["savingsTable", ""], ["emergencyTable", ""], ["investmentsTable", ""], ["mat-table", "", 1, "liability-table", "mat-elevation-z4", 3, "dataSource"], ["mortgageTable", ""], ["matColumnDef", "interest"], ["creditCardTable", ""], ["lineOfCreditTable", ""], ["homeEquityLineOfCreditTable", ""], ["studentLoansTable", ""], ["otherTable", ""], ["matSuffix", ""], ["type", "number", "matNativeControl", "", 3, "ngModel", "ngModelChange"], ["qwerty", ""], [1, "circle", "no-margin"], [1, "colored"], ["class", "goal-card mat-elevation-z4", 4, "ngFor", "ngForOf"], [1, "goal-card", "mat-elevation-z4"], [1, "goal-number"], [1, "goal-body"], [1, "no-margin", 2, "display", "flex", "align-items", "center"], ["class", "colored", 4, "ngIf"], ["class", "green ", 4, "ngIf"], ["class", "green", 4, "ngIf"], [1, "goal-button"], ["mat-raised-button", "", "color", "primary", 3, "id", "disabled"], [1, "green"]],
      template: function MoneyManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MoneyManagementComponent_div_2_Template, 11, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MoneyManagementComponent_div_3_Template, 36, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MoneyManagementComponent_div_4_Template, 373, 66, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, MoneyManagementComponent_div_5_Template, 8, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.step === "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.step === "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.step === "activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.step === "finished");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperPrevious"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"]],
      styles: [".right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.short[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.half[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.medium[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.tile[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-right: 10px;\n}\n\n.description-tile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 230px;\n}\n\n.info-tile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.description-icon[_ngcontent-%COMP%] {\n  color: #4051b5;\n  padding-right: 20px;\n  padding-left: 10px;\n  transform: scale(1.75);\n}\n\n.time-icon[_ngcontent-%COMP%] {\n  color: gray;\n  padding-right: 20px;\n  padding-left: 10px;\n  transform: scale(1.75);\n}\n\n.trim[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.no-margin[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.drop-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.middle[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.end[_ngcontent-%COMP%] {\n  width: 150px;\n  text-align: right;\n}\n\n.gray[_ngcontent-%COMP%] {\n  color: lightslategray;\n  \n  background: #efefef;\n}\n\n.gray-icon[_ngcontent-%COMP%] {\n  color: lightslategray;\n}\n\n.drop-list[_ngcontent-%COMP%] {\n  min-height: 92px;\n  border-radius: 5px;\n  overflow: hidden;\n  display: block;\n}\n\n.drop-box[_ngcontent-%COMP%]{\n  margin: 10px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.drop-box[_ngcontent-%COMP%]:hover {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  \n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%]:hover {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n\n\n\n\n\n\n.drop-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .drop-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.money[_ngcontent-%COMP%] {\n  color: #4051b5;\n  font-size: 90px;\n}\n\n.colored[_ngcontent-%COMP%] {\n  color: #4051b5;\n}\n\n.negMoney[_ngcontent-%COMP%] {\n  color: #d23333;\n  font-size: 90px;\n}\n\n.finance-table[_ngcontent-%COMP%] {\n  width: 400px;\n  margin-bottom: 20px;\n}\n\n.liability-table[_ngcontent-%COMP%] {\n  width: 450px;\n  margin-bottom: 20px;\n}\n\n.mat-column-edit[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.l[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.no-margin[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.flex-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.confirm-card-one[_ngcontent-%COMP%], .confirm-card-two[_ngcontent-%COMP%] {\n  width: 350px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  border-radius: 10px;\n}\n\n.confirm-card-four[_ngcontent-%COMP%] {\n  width: 221px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  border-radius: 10px;\n}\n\n.confirm-card-three[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-bottom: 5px;\n  border-radius: 10px;\n}\n\n.confirm-card-two[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.circle[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  color: whitesmoke;\n  background: gray;\n  width: 30px;\n  height: 30px;\n  padding-left: 2px;\n}\n\n.goal-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.goal-number[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.goal-body[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9uZXktbWFuYWdlbWVudC9tb25leS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQkFBWTtFQUFaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCOztvQ0FFa0M7QUFDcEM7O0FBRUE7RUFDRSxvQkFBWTtFQUFaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQSx5QkFBeUI7O0FBQ3pCLGtCQUFrQjs7QUFDbEIsSUFBSTs7QUFFSjtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9uZXktbWFuYWdlbWVudC9tb25leS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNob3J0IHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmhhbGYge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubWVkaXVtIHtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRlc2NyaXB0aW9uLXRpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjMwcHg7XG59XG5cbi5pbmZvLXRpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5kZXNjcmlwdGlvbi1pY29uIHtcbiAgY29sb3I6ICM0MDUxYjU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjc1KTtcbn1cblxuLnRpbWUtaWNvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS43NSk7XG59XG5cbi50cmltIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5vLW1hcmdpbiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmRyb3AtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1pZGRsZSB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmVuZCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5ncmF5IHtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICAvKmZvbnQtc3R5bGU6IGl0YWxpYzsqL1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uZ3JheS1pY29uIHtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xufVxuXG4uZHJvcC1saXN0IHtcbiAgbWluLWhlaWdodDogOTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3AtYm94e1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRyb3AtYm94OmhvdmVyIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIC8qYm9yZGVyLXJhZGl1czogMTBweDsqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKmJvcmRlci1yYWRpdXM6IDRweDsqL1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3OmhvdmVyIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4vKi5kcm9wLWJveDpsYXN0LWNoaWxkIHsqL1xuLyogIGJvcmRlcjogbm9uZTsqL1xuLyp9Ki9cblxuLmRyb3AtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kcm9wLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm1vbmV5IHtcbiAgY29sb3I6ICM0MDUxYjU7XG4gIGZvbnQtc2l6ZTogOTBweDtcbn1cblxuLmNvbG9yZWQge1xuICBjb2xvcjogIzQwNTFiNTtcbn1cblxuLm5lZ01vbmV5IHtcbiAgY29sb3I6ICNkMjMzMzM7XG4gIGZvbnQtc2l6ZTogOTBweDtcbn1cblxuLmZpbmFuY2UtdGFibGUge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5saWFiaWxpdHktdGFibGUge1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tYXQtY29sdW1uLWVkaXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubm8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZmxleC1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29uZmlybS1jYXJkLW9uZSwgLmNvbmZpcm0tY2FyZC10d28ge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb25maXJtLWNhcmQtZm91ciB7XG4gIHdpZHRoOiAyMjFweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbmZpcm0tY2FyZC10aHJlZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb25maXJtLWNhcmQtdHdvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuLmdvYWwtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmdvYWwtbnVtYmVyIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5nb2FsLWJvZHkge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MoneyManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-money-management',
          templateUrl: './money-management.component.html',
          styleUrls: ['./money-management.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        homeTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['homeTable']
        }],
        savingsTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['savingsTable']
        }],
        emergencyTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['emergencyTable']
        }],
        retirementTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['retirementTable']
        }],
        investmentsTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['investmentsTable']
        }],
        mortgageTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mortgageTable']
        }],
        creditCardTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['creditCardTable']
        }],
        lineOfCreditTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['lineOfCreditTable']
        }],
        homeEquityLineOfCreditTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['homeEquityLineOfCreditTable']
        }],
        studentLoansTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['studentLoansTable']
        }],
        otherTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['otherTable']
        }]
      });
    })();

    var DialogData = function DialogData() {
      _classCallCheck(this, DialogData);
    };

    var AddFinanceDialogComponent = function AddFinanceDialogComponent(dialogRef, data) {
      _classCallCheck(this, AddFinanceDialogComponent);

      this.dialogRef = dialogRef;
      this.data = data;
      this.interest = data.oldData ? data.oldData.interest : 0;
    };

    AddFinanceDialogComponent.??fac = function AddFinanceDialogComponent_Factory(t) {
      return new (t || AddFinanceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    AddFinanceDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AddFinanceDialogComponent,
      selectors: [["app-add-finance-dialog"]],
      decls: 36,
      vars: 8,
      consts: [[2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [1, "title"], ["id", "xit", "mat-icon-button", "", 3, "click"], [4, "ngIf"], ["appearance", "outline"], ["matNativeControl", "", 3, "value"], ["custom", ""], ["type", "number", "matNativeControl", "", 3, "value"], ["amount", ""], ["matPrefix", ""], ["class", "title", 4, "ngIf"], ["appearance", "outline", 4, "ngIf"], [1, "actions"], ["id", "cancel-popup", "mat-raised-button", "", "color", "warn", 3, "click"], ["id", "add-btn", "mat-raised-button", "", "color", "primary", 3, "click"], ["type", "number", "matNativeControl", "", 3, "ngModel", "ngModelChange"], ["matSuffix", ""]],
      template: function AddFinanceDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddFinanceDialogComponent_Template_button_click_3_listener() {
            return ctx.dialogRef.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, AddFinanceDialogComponent_h4_7_Template, 2, 0, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "attach_money");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, AddFinanceDialogComponent_h4_27_Template, 2, 0, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, AddFinanceDialogComponent_mat_form_field_28_Template, 6, 1, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddFinanceDialogComponent_Template_button_click_31_listener() {
            return ctx.dialogRef.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddFinanceDialogComponent_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r435);

            var _r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);

            var _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);

            return ctx.dialogRef.close({
              amount: _r430.value,
              custom: _r429.value,
              interest: ctx.interest
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data.liability);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.data.oldData ? ctx.data.oldData.description : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.data.oldData ? ctx.data.oldData.amount : 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data.liability);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data.liability);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"]],
      styles: [".actions[_ngcontent-%COMP%] {\n      text-align: right;\n    }\n    .title[_ngcontent-%COMP%] {\n      margin: 0;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddFinanceDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-finance-dialog',
          template: "\n    <div style=\"display: flex; justify-content: space-between; align-items: center\">\n      <h1 class=\"title\">{{ data.title }}</h1>\n      <button id=\"xit\" mat-icon-button (click)=\"dialogRef.close()\"><mat-icon>close</mat-icon></button>\n    </div>\n    <hr>\n    <h4 *ngIf=\"data.liability\">Please provide the dollar amount you owe.</h4>\n<br>\n    <h4 class=\"title\">{{ data.description }}</h4>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>{{ data.type }}</mat-label>\n      <input #custom [value]=\"data.oldData ? data.oldData.description : ''\" matNativeControl>\n    </mat-form-field>\n<br>\n    <h4 class=\"title\">Amount</h4>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Amount</mat-label>\n      <input type=\"number\" #amount [value]=\"data.oldData ? data.oldData.amount : 0\" matNativeControl>\n      <mat-icon matPrefix>attach_money</mat-icon>\n    </mat-form-field>\n<br>\n    <h4 *ngIf=\"data.liability\" class=\"title\">Interest</h4>\n    <mat-form-field *ngIf=\"data.liability\" appearance=\"outline\">\n      <mat-label>Interest</mat-label>\n      <input type=\"number\" [(ngModel)]=\"interest\" matNativeControl>\n      <h3 matSuffix>%</h3>\n    </mat-form-field>\n<br>\n    <div class=\"actions\">\n      <button id=\"cancel-popup\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button> &nbsp;\n      <button id=\"add-btn\" mat-raised-button color=\"primary\" (click)=\"dialogRef.close({\n        amount: amount.value,\n        custom: custom.value,\n        interest: interest\n      })\">Add</button>\n    </div>\n  ",
          styles: ["\n    .actions {\n      text-align: right;\n    }\n    .title {\n      margin: 0;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: DialogData,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/orion/Desktop/test/practice-site/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map