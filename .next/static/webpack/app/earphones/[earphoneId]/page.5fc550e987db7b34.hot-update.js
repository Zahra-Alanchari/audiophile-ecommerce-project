"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/earphones/[earphoneId]/page",{

/***/ "(app-pages-browser)/./app/earphones/[earphoneId]/page.tsx":
/*!*********************************************!*\
  !*** ./app/earphones/[earphoneId]/page.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ProductDetails(param) {\n    let { params } = param;\n    _s();\n    const { earphoneId } = params;\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const product = data.find((item)=>String(item.id) === earphoneId);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Product not found\"\n        }, void 0, false, {\n            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: product.name\n    }, void 0, false, {\n        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 10\n    }, this);\n}\n_s(ProductDetails, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = ProductDetails;\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lYXJwaG9uZXMvW2VhcnBob25lSWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2tDO0FBRXFCO0FBQ047QUFJbEMsU0FBU0ksZUFBZSxLQUEyQjtRQUEzQixFQUFDQyxNQUFNLEVBQW9CLEdBQTNCOztJQUN2QyxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHRDtJQUNyQixNQUFNRSxPQUFPTCx3REFBV0EsQ0FBQyxDQUFDTSxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDQSxHQUFHO0lBQzVELE1BQU1DLFdBQVdULHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDUlUsU0FBU1AsOERBQWVBO0lBQzFCLEdBQUc7UUFBQ087S0FBUztJQUViLE1BQU1DLFVBQVVKLEtBQUtLLElBQUksQ0FBQyxDQUFDQyxPQUFTQyxPQUFPRCxLQUFLRSxFQUFFLE1BQU1UO0lBRXhELElBQUksQ0FBQ0ssU0FBUztRQUNaLHFCQUFPLDhEQUFDSztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxxQkFBTyw4REFBQ0M7a0JBQUtOLFFBQVFPLElBQUk7Ozs7OztBQUMzQjtHQWhCd0JkOztRQUVURixvREFBV0E7UUFDUEQsb0RBQVdBOzs7S0FITkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2VhcnBob25lcy9bZWFycGhvbmVJZF0vcGFnZS50c3g/MzZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaGdldEFsbEpvYnMgfSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25cIjsgXG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsUHJvcHMsIFJvb3RTdGF0ZSB9IGZyb20gXCJAL1R5cGUvdHlwZVwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9yZWR1eC9zdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlscyh7cGFyYW1zfTpQcm9kdWN0RGV0YWlsUHJvcHMpIHtcbmNvbnN0IHsgZWFycGhvbmVJZCB9ID0gcGFyYW1zO1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmpvYi5qb2IpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hnZXRBbGxKb2JzKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICBjb25zdCBwcm9kdWN0ID0gZGF0YS5maW5kKChpdGVtKSA9PiBTdHJpbmcoaXRlbS5pZCkgPT09IGVhcnBob25lSWQpO1xuXG4gIGlmICghcHJvZHVjdCkge1xuICAgIHJldHVybiA8cD5Qcm9kdWN0IG5vdCBmb3VuZDwvcD47XG4gIH1cblxuICByZXR1cm4gPGRpdj57cHJvZHVjdC5uYW1lfTwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hnZXRBbGxKb2JzIiwiUHJvZHVjdERldGFpbHMiLCJwYXJhbXMiLCJlYXJwaG9uZUlkIiwiZGF0YSIsInN0YXRlIiwiam9iIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJTdHJpbmciLCJpZCIsInAiLCJkaXYiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/earphones/[earphoneId]/page.tsx\n"));

/***/ })

});