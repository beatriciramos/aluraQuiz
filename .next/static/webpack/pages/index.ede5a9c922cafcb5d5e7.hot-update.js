webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Cards/style.js":
/*!***********************************!*\
  !*** ./components/Cards/style.js ***!
  \***********************************/
/*! exports provided: Card, CardHeader, CardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardHeader\", function() { return CardHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardContent\", function() { return CardContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 24px 32px 32px 32px;\\n  & > *:first-child {\\n    margin-top: 0;\\n  }\\n  & > *:last-child {\\n    margin-bottom: 0;\\n  }\\n  ul {\\n    list-style: none;\\n    padding: 0;\\n  }\\n  &.top {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  padding: 18px 32px;\\n  background-color: \", \";\\n\\n  * {\\n    margin: 0;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-top: 24px;\\n  margin-bottom: 24px;\\n  border: 1px solid \", \";\\n  background-color: \", \";\\n  border-radius: 4px;\\n  overflow: hidden;\\n\\n  h1,\\n  h2,\\n  h3 {\\n    font-size: 16px;\\n    font-weight: 700;\\n    line-height: 1;\\n    margin-bottom: 0;\\n  }\\n  p {\\n    font-size: 14px;\\n    font-weight: 400;\\n    line-height: 1;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Card = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.primary;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.colors.mainBg;\n});\nvar CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2(), function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.colors.primary;\n});\nvar CardContent = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9zdHlsZS5qcz9iNmQ2Il0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJtYWluQmciLCJDYXJkSGVhZGVyIiwiQ2FyZENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBR0s7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBNUI7QUFBQSxDQUhMLEVBSUs7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsTUFBNUI7QUFBQSxDQUpMLENBQVY7QUFzQkEsSUFBTUMsVUFBVSxHQUFHTix5REFBTSxDQUFDQyxHQUFWLHFCQUtEO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQTVCO0FBQUEsQ0FMQyxDQUFoQjtBQVdBLElBQU1HLFdBQVcsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVixvQkFBakIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRzL3N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkJnfTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGgxLFxuICBoMixcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQ2FyZEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMThweCAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAyNHB4IDMycHggMzJweCAzMnB4O1xuICAmID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAmID4gKjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgJi50b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cards/style.js\n");

/***/ })

})