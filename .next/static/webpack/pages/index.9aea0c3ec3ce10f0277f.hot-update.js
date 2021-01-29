webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Cards/index.js":
/*!***********************************!*\
  !*** ./components/Cards/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cards; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./components/Cards/style.js\");\nvar _jsxFileName = \"/home/beatrici/imersao/aluraQuiz/components/Cards/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Cards() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var name = \"\";\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"CardHeader\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, \"Princess of Disney\")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"CardContent\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      router.push(\"/quizPage?name=\".concat(name));\n      console.log(\"Submissão ok\");\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    onChange: function onChange(e) {\n      name = e.target.value;\n    },\n    placeholder: \"Diz ai seu nome\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    disabled: name.length === 0,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"Vamos \", name, \"?\")))), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"CardHeader\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"Quiz das Galera\")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"CardContent\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"lorem ipsum dolor sit amet...\"))));\n}\n\n_s(Cards, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Cards;\n\nvar _c;\n\n$RefreshReg$(_c, \"Cards\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9pbmRleC5qcz9iNDZmIl0sIm5hbWVzIjpbIkNhcmRzIiwicm91dGVyIiwidXNlUm91dGVyIiwibmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUVBLFNBQ0UsbUVBQ0UsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLEVBSUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxZQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmQSxPQUFDLENBQUNDLGNBQUY7QUFDQUosWUFBTSxDQUFDSyxJQUFQLDBCQUE4QkgsSUFBOUI7QUFDQUksYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNELEtBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQ0UsWUFBUSxFQUFFLGtCQUFDSixDQUFELEVBQU87QUFDZkQsVUFBSSxHQUFHQyxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBaEI7QUFDRCxLQUhIO0FBSUUsZUFBVyxFQUFDLGlCQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQWFFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsWUFBUSxFQUFFUCxJQUFJLENBQUNRLE1BQUwsS0FBZ0IsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNTUixJQURULE1BYkYsQ0FERixDQUpGLENBREYsRUF5QkUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQURGLEVBSUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FERixDQUpGLENBekJGLENBREY7QUFvQ0Q7O0dBeEN1QkgsSztVQUNQRSxxRDs7O0tBRE9GLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciB9IGZyb20gXCIuL3N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IG5hbWUgPSBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICA8aDE+UHJpbmNlc3Mgb2YgRGlzbmV5PC9oMT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcXVpelBhZ2U/bmFtZT0ke25hbWV9YCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWlzc8OjbyBva1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaXogYWkgc2V1IG5vbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH0+XG4gICAgICAgICAgICAgIFZhbW9zIHtuYW1lfT9cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICA8aDE+UXVpeiBkYXMgR2FsZXJhPC9oMT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPHA+bG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuLi48L3A+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cards/index.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false

})