webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/paths */ "./config/paths.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sidebarData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebarData */ "./components/sidebar/sidebarData.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_svg_inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-svg-inline */ "./node_modules/react-svg-inline/lib/index.js");
/* harmony import */ var react_svg_inline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_svg_inline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sidebar.module.css */ "./components/sidebar/Sidebar.module.css");
/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\WingHangKhoo\\Documents\\react\\Directory_website\\components\\sidebar\\Sidebar.js",
    _s = $RefreshSig$();









function Sidebar() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      opened = _useState[0],
      setOpened = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      openedList = _useState2[0],
      setOpenedList = _useState2[1];

  var renderItemContent = function renderItemContent(item) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [item.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "sidebar-image",
        src: item.image,
        alt: item.title,
        title: item.title,
        width: 32,
        height: 32
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this), item.icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "sidebar-svg",
        children: item.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 23
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "sidebar-label",
        children: item.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  var renderItem = function renderItem(item, idx) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "sidebar-item",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: item.path,
        children: renderItemContent(item)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, idx, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this);
  };

  var renderMenuList = function renderMenuList(title, items, headerPath) {
    var HeaderTag = headerPath ? next_link__WEBPACK_IMPORTED_MODULE_5___default.a : "span";

    if (items !== undefined && items.length === 0) {
      return null;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sidebar_menu",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderTag, {
        href: headerPath,
        className: "sidebar-title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "nav-menu",
        children: items && items.map(renderItem)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this);
  };

  var renderHome = function renderHome() {
    return renderMenuList("Home", undefined, _config_paths__WEBPACK_IMPORTED_MODULE_2__["default"].index);
  };

  var renderReview = function renderReview() {
    return renderMenuList("Review", undefined, _config_paths__WEBPACK_IMPORTED_MODULE_2__["default"].reviews);
  };

  var renderNewReleases = function renderNewReleases() {
    return renderMenuList("New Releases", _sidebarData__WEBPACK_IMPORTED_MODULE_4__["newReleases"]);
  };

  var renderTop = function renderTop() {
    return renderMenuList("Top", _sidebarData__WEBPACK_IMPORTED_MODULE_4__["top"]);
  };

  var renderAllGames = function renderAllGames() {
    return renderMenuList("All Games", undefined, _config_paths__WEBPACK_IMPORTED_MODULE_2__["default"].games);
  };

  var renderPlatform = function renderPlatform() {
    return renderMenuList("Platforms", _sidebarData__WEBPACK_IMPORTED_MODULE_4__["platform"]);
  };

  var renderGenre = function renderGenre() {
    return renderMenuList("Genres", _sidebarData__WEBPACK_IMPORTED_MODULE_4__["genre"]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "container m-10",
    children: [renderHome(), renderReview(), renderNewReleases(), renderTop(), renderAllGames(), renderPlatform(), renderGenre()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

_s(Sidebar, "/3KWN3QvShG7zEnheph+bilbb7k=");

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/sidebar/Sidebar.module.css":
/*!***********************************************!*\
  !*** ./components/sidebar/Sidebar.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Sidebar.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/sidebar/Sidebar.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Sidebar.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/sidebar/Sidebar.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Sidebar.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/sidebar/Sidebar.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/sidebar/Sidebar.module.css":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/sidebar/Sidebar.module.css ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyLm1vZHVsZS5jc3M/ZGZmNiIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJTaWRlYmFyIiwidXNlU3RhdGUiLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJvcGVuZWRMaXN0Iiwic2V0T3BlbmVkTGlzdCIsInJlbmRlckl0ZW1Db250ZW50IiwiaXRlbSIsImltYWdlIiwidGl0bGUiLCJpY29uIiwicmVuZGVySXRlbSIsImlkeCIsInBhdGgiLCJyZW5kZXJNZW51TGlzdCIsIml0ZW1zIiwiaGVhZGVyUGF0aCIsIkhlYWRlclRhZyIsIkxpbmsiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJtYXAiLCJyZW5kZXJIb21lIiwicGF0aHMiLCJpbmRleCIsInJlbmRlclJldmlldyIsInJldmlld3MiLCJyZW5kZXJOZXdSZWxlYXNlcyIsIm5ld1JlbGVhc2VzIiwicmVuZGVyVG9wIiwidG9wIiwicmVuZGVyQWxsR2FtZXMiLCJnYW1lcyIsInJlbmRlclBsYXRmb3JtIiwicGxhdGZvcm0iLCJyZW5kZXJHZW5yZSIsImdlbnJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEtBQUQsQ0FEbkI7QUFBQSxNQUNWQyxNQURVO0FBQUEsTUFDRkMsU0FERTs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRVZHLFVBRlU7QUFBQSxNQUVFQyxhQUZGOztBQUlqQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9C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QUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxVQUFVLGtFQUFrRTtBQUNuSDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhYmQ4YWNhN2MyMDI4NGNhOTMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGF0aHMgZnJvbSBcIi4uLy4uL2NvbmZpZy9wYXRoc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgbmV3UmVsZWFzZXMsIHRvcCwgcGxhdGZvcm0sIGdlbnJlIH0gZnJvbSBcIi4vc2lkZWJhckRhdGFcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBTVkdJbmxpbmUgZnJvbSBcInJlYWN0LXN2Zy1pbmxpbmVcIjtcclxuXHJcbmltcG9ydCBcIi4vU2lkZWJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5lZExpc3QsIHNldE9wZW5lZExpc3RdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCByZW5kZXJJdGVtQ29udGVudCA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtpdGVtLmltYWdlICYmIChcclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlYmFyLWltYWdlXCJcclxuICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICB3aWR0aD17MzJ9XHJcbiAgICAgICAgICAgIGhlaWdodD17MzJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2l0ZW0uaWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJzaWRlYmFyLXN2Z1wiPntpdGVtLmljb259PC9zcGFuPn1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWRlYmFyLWxhYmVsXCI+e2l0ZW0udGl0bGV9PC9zcGFuPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVySXRlbSA9IChpdGVtLCBpZHgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBrZXk9e2lkeH0gY2xhc3NOYW1lPVwic2lkZWJhci1pdGVtXCI+XHJcbiAgICAgICAgPGEgaHJlZj17aXRlbS5wYXRofT57cmVuZGVySXRlbUNvbnRlbnQoaXRlbSl9PC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNZW51TGlzdCA9ICh0aXRsZSwgaXRlbXMsIGhlYWRlclBhdGgpID0+IHtcclxuICAgIGNvbnN0IEhlYWRlclRhZyA9IGhlYWRlclBhdGggPyBMaW5rIDogXCJzcGFuXCI7XHJcbiAgICBpZiAoaXRlbXMgIT09IHVuZGVmaW5lZCAmJiBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfbWVudVwiPlxyXG4gICAgICAgIDxIZWFkZXJUYWcgaHJlZj17aGVhZGVyUGF0aH0gY2xhc3NOYW1lPVwic2lkZWJhci10aXRsZVwiPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvSGVhZGVyVGFnPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbWVudVwiPntpdGVtcyAmJiBpdGVtcy5tYXAocmVuZGVySXRlbSl9PC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVuZGVyTWVudUxpc3QoXCJIb21lXCIsIHVuZGVmaW5lZCwgcGF0aHMuaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclJldmlldyA9ICgpID0+IHtcclxuICAgIHJldHVybiByZW5kZXJNZW51TGlzdChcIlJldmlld1wiLCB1bmRlZmluZWQsIHBhdGhzLnJldmlld3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck5ld1JlbGVhc2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlbmRlck1lbnVMaXN0KFwiTmV3IFJlbGVhc2VzXCIsIG5ld1JlbGVhc2VzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUb3AgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVuZGVyTWVudUxpc3QoXCJUb3BcIiwgdG9wKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJBbGxHYW1lcyA9ICgpID0+IHtcclxuICAgIHJldHVybiByZW5kZXJNZW51TGlzdChcIkFsbCBHYW1lc1wiLCB1bmRlZmluZWQsIHBhdGhzLmdhbWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQbGF0Zm9ybSA9ICgpID0+IHtcclxuICAgIHJldHVybiByZW5kZXJNZW51TGlzdChcIlBsYXRmb3Jtc1wiLCBwbGF0Zm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyR2VucmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVuZGVyTWVudUxpc3QoXCJHZW5yZXNcIiwgZ2VucmUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLTEwXCI+XHJcbiAgICAgIHtyZW5kZXJIb21lKCl9XHJcbiAgICAgIHtyZW5kZXJSZXZpZXcoKX1cclxuICAgICAge3JlbmRlck5ld1JlbGVhc2VzKCl9XHJcbiAgICAgIHtyZW5kZXJUb3AoKX1cclxuICAgICAge3JlbmRlckFsbEdhbWVzKCl9XHJcbiAgICAgIHtyZW5kZXJQbGF0Zm9ybSgpfVxyXG4gICAgICB7cmVuZGVyR2VucmUoKX1cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9TaWRlYmFyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vU2lkZWJhci5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1NpZGViYXIubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9