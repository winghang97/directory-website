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
/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sidebar.module.css */ "./components/sidebar/Sidebar.module.css");
/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_7__);



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
    className: "",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXIuanMiXSwibmFtZXMiOlsiU2lkZWJhciIsInVzZVN0YXRlIiwib3BlbmVkIiwic2V0T3BlbmVkIiwib3BlbmVkTGlzdCIsInNldE9wZW5lZExpc3QiLCJyZW5kZXJJdGVtQ29udGVudCIsIml0ZW0iLCJpbWFnZSIsInRpdGxlIiwiaWNvbiIsInJlbmRlckl0ZW0iLCJpZHgiLCJwYXRoIiwicmVuZGVyTWVudUxpc3QiLCJpdGVtcyIsImhlYWRlclBhdGgiLCJIZWFkZXJUYWciLCJMaW5rIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwibWFwIiwicmVuZGVySG9tZSIsInBhdGhzIiwiaW5kZXgiLCJyZW5kZXJSZXZpZXciLCJyZXZpZXdzIiwicmVuZGVyTmV3UmVsZWFzZXMiLCJuZXdSZWxlYXNlcyIsInJlbmRlclRvcCIsInRvcCIsInJlbmRlckFsbEdhbWVzIiwiZ2FtZXMiLCJyZW5kZXJQbGF0Zm9ybSIsInBsYXRmb3JtIiwicmVuZGVyR2VucmUiLCJnZW5yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxLQUFELENBRG5CO0FBQUEsTUFDVkMsTUFEVTtBQUFBLE1BQ0ZDLFNBREU7O0FBQUEsbUJBRW1CRixzREFBUSxDQUFDLEVBQUQsQ0FGM0I7QUFBQSxNQUVWRyxVQUZVO0FBQUEsTUFFRUMsYUFGRjs7QUFJakIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQVU7QUFDbEMsd0JBQ0U7QUFBQSxpQkFDR0EsSUFBSSxDQUFDQyxLQUFMLGlCQUNDLHFFQUFDLGlEQUFEO0FBQ0UsaUJBQVMsRUFBQyxlQURaO0FBRUUsV0FBRyxFQUFFRCxJQUFJLENB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QUFDLFFBQUQsRUFBV3NCLGtEQUFYLENBQXJCO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsZUFDR2QsVUFBVSxFQURiLEVBRUdHLFlBQVksRUFGZixFQUdHRSxpQkFBaUIsRUFIcEIsRUFJR0UsU0FBUyxFQUpaLEVBS0dFLGNBQWMsRUFMakIsRUFNR0UsY0FBYyxFQU5qQixFQU9HRSxXQUFXLEVBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7R0FyRlFuQyxPOztLQUFBQSxPO0FBdUZNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZWEyYTFlNjkxMDlhMzFhOGJkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHBhdGhzIGZyb20gXCIuLi8uLi9jb25maWcvcGF0aHNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IG5ld1JlbGVhc2VzLCB0b3AsIHBsYXRmb3JtLCBnZW5yZSB9IGZyb20gXCIuL3NpZGViYXJEYXRhXCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgU1ZHSW5saW5lIGZyb20gXCJyZWFjdC1zdmctaW5saW5lXCI7XHJcblxyXG5pbXBvcnQgXCIuL1NpZGViYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuZWRMaXN0LCBzZXRPcGVuZWRMaXN0XSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVySXRlbUNvbnRlbnQgPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7aXRlbS5pbWFnZSAmJiAoXHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci1pbWFnZVwiXHJcbiAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgd2lkdGg9ezMyfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezMyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtpdGVtLmljb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwic2lkZWJhci1zdmdcIj57aXRlbS5pY29ufTwvc3Bhbj59XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZWJhci1sYWJlbFwiPntpdGVtLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSAoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGkga2V5PXtpZHh9IGNsYXNzTmFtZT1cInNpZGViYXItaXRlbVwiPlxyXG4gICAgICAgIDxhIGhyZWY9e2l0ZW0ucGF0aH0+e3JlbmRlckl0ZW1Db250ZW50KGl0ZW0pfTwvYT5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTWVudUxpc3QgPSAodGl0bGUsIGl0ZW1zLCBoZWFkZXJQYXRoKSA9PiB7XHJcbiAgICBjb25zdCBIZWFkZXJUYWcgPSBoZWFkZXJQYXRoID8gTGluayA6IFwic3BhblwiO1xyXG4gICAgaWYgKGl0ZW1zICE9PSB1bmRlZmluZWQgJiYgaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX21lbnVcIj5cclxuICAgICAgICA8SGVhZGVyVGFnIGhyZWY9e2hlYWRlclBhdGh9IGNsYXNzTmFtZT1cInNpZGViYXItdGl0bGVcIj5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L0hlYWRlclRhZz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LW1lbnVcIj57aXRlbXMgJiYgaXRlbXMubWFwKHJlbmRlckl0ZW0pfTwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlbmRlck1lbnVMaXN0KFwiSG9tZVwiLCB1bmRlZmluZWQsIHBhdGhzLmluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJSZXZpZXcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVuZGVyTWVudUxpc3QoXCJSZXZpZXdcIiwgdW5kZWZpbmVkLCBwYXRocy5yZXZpZXdzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJOZXdSZWxlYXNlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiByZW5kZXJNZW51TGlzdChcIk5ldyBSZWxlYXNlc1wiLCBuZXdSZWxlYXNlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVG9wID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlbmRlck1lbnVMaXN0KFwiVG9wXCIsIHRvcCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQWxsR2FtZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVuZGVyTWVudUxpc3QoXCJBbGwgR2FtZXNcIiwgdW5kZWZpbmVkLCBwYXRocy5nYW1lcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUGxhdGZvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVuZGVyTWVudUxpc3QoXCJQbGF0Zm9ybXNcIiwgcGxhdGZvcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckdlbnJlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlbmRlck1lbnVMaXN0KFwiR2VucmVzXCIsIGdlbnJlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAge3JlbmRlckhvbWUoKX1cclxuICAgICAge3JlbmRlclJldmlldygpfVxyXG4gICAgICB7cmVuZGVyTmV3UmVsZWFzZXMoKX1cclxuICAgICAge3JlbmRlclRvcCgpfVxyXG4gICAgICB7cmVuZGVyQWxsR2FtZXMoKX1cclxuICAgICAge3JlbmRlclBsYXRmb3JtKCl9XHJcbiAgICAgIHtyZW5kZXJHZW5yZSgpfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==