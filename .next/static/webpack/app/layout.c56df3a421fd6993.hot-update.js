"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/store */ \"(app-pages-browser)/./redux/store.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// export const metadata = {\n//   title: \"Next.js\",\n//   description: \"Generated by Next.js\",\n// };\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.job.job);\n    const dispatch = useDispatch();\n    useEffect(()=>{\n        dispatch(fetchgetAllJobs());\n    }, [\n        dispatch\n    ]);\n    console.log(data, \"data\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n            lang: \"en\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                style: {\n                    margin: 0,\n                    padding: 0\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/layout.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/layout.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/layout.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", true, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIseUNBQXlDO0FBQ3pDLEtBQUs7QUFFK0M7QUFFbEI7QUFHbkIsU0FBU0csV0FBVyxLQUlsQztRQUprQyxFQUNqQ0MsUUFBUSxFQUdULEdBSmtDOztJQUtqQyxNQUFNQyxPQUFPSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDQSxHQUFHO0lBQzVELE1BQU1DLFdBQVdDO0lBRWpCQyxVQUFVO1FBQ1JGLFNBQVNHO0lBQ1gsR0FBRztRQUFDSDtLQUFTO0lBQ2JJLFFBQVFDLEdBQUcsQ0FBQ1IsTUFBTTtJQUNsQixxQkFDRSw4REFBQ0wsaURBQVFBO1FBQUNFLE9BQU9BLG9EQUFLQTtrQkFDcEIsNEVBQUNZO1lBQUtDLE1BQUs7c0JBQ1QsNEVBQUNDO2dCQUFLQyxPQUFPO29CQUFFQyxRQUFRO29CQUFHQyxTQUFTO2dCQUFFOzBCQUFJZjs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRDtHQW5Cd0JEOztRQUtURixvREFBV0E7OztLQUxGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0LnRzeD85OTg4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuLy8gZXhwb3J0IGNvbnN0IG1ldGFkYXRhID0ge1xuLy8gICB0aXRsZTogXCJOZXh0LmpzXCIsXG4vLyAgIGRlc2NyaXB0aW9uOiBcIkdlbmVyYXRlZCBieSBOZXh0LmpzXCIsXG4vLyB9O1xuXG5pbXBvcnQgeyBQcm92aWRlciwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vX0NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIkAvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJAL1R5cGUvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59KSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuam9iLmpvYik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaGdldEFsbEpvYnMoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICBjb25zb2xlLmxvZyhkYXRhLCBcImRhdGFcIik7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPGJvZHkgc3R5bGU9e3sgbWFyZ2luOiAwLCBwYWRkaW5nOiAwIH19PntjaGlsZHJlbn08L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInVzZVNlbGVjdG9yIiwic3RvcmUiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJkYXRhIiwic3RhdGUiLCJqb2IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hnZXRBbGxKb2JzIiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJsYW5nIiwiYm9keSIsInN0eWxlIiwibWFyZ2luIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});