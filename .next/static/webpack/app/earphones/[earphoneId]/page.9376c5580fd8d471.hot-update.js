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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: #cc7101;\\n    color: white;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst EarphoneItems = styled.div(_templateObject());\n_c = EarphoneItems;\nconst Detail = styled.div(_templateObject1());\n_c1 = Detail;\nfunction ProductDetails(param) {\n    let { params } = param;\n    _s();\n    const { earphoneId } = params;\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const product = data.find((item1)=>String(item1.id) === earphoneId);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Product not found\"\n        }, void 0, false, {\n            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(EarphoneItems, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: item.image.mobile,\n                alt: \"test\",\n                width: 350,\n                height: 350\n            }, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Link, {\n                        href: \"/earphones/\".concat(item.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            id: String(item.id),\n                            onClick: handleClick,\n                            children: \"see product\"\n                        }, item.id, false, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, item.id, true, {\n        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductDetails, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c2 = ProductDetails;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"EarphoneItems\");\n$RefreshReg$(_c1, \"Detail\");\n$RefreshReg$(_c2, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lYXJwaG9uZXMvW2VhcnBob25lSWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDa0M7QUFFcUI7QUFDTjtBQUlqRCxNQUFNSSxnQkFBZ0JDLE9BQU9DLEdBQUc7S0FBMUJGO0FBSU4sTUFBTUcsU0FBU0YsT0FBT0MsR0FBRztNQUFuQkM7QUFnQlMsU0FBU0MsZUFBZSxLQUE4QjtRQUE5QixFQUFFQyxNQUFNLEVBQXNCLEdBQTlCOztJQUNyQyxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHRDtJQUN2QixNQUFNRSxPQUFPVCx3REFBV0EsQ0FBQyxDQUFDVSxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDQSxHQUFHO0lBQzVELE1BQU1DLFdBQVdiLHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDUmMsU0FBU1gsOERBQWVBO0lBQzFCLEdBQUc7UUFBQ1c7S0FBUztJQUViLE1BQU1DLFVBQVVKLEtBQUtLLElBQUksQ0FBQyxDQUFDQyxRQUFTQyxPQUFPRCxNQUFLRSxFQUFFLE1BQU1UO0lBRXhELElBQUksQ0FBQ0ssU0FBUztRQUNaLHFCQUFPLDhEQUFDSztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxxQkFDRSw4REFBQ2hCOzswQkFDQyw4REFBQ2lCO2dCQUFJQyxLQUFLTCxLQUFLTSxLQUFLLENBQUNDLE1BQU07Z0JBQUVDLEtBQUk7Z0JBQU9DLE9BQU87Z0JBQUtDLFFBQVE7Ozs7OzswQkFDNUQsOERBQUNwQjs7a0NBQ0MsOERBQUNxQjtrQ0FBSVgsS0FBS1ksSUFBSTs7Ozs7O2tDQUNkLDhEQUFDVDtrQ0FBR0gsS0FBS2EsV0FBVzs7Ozs7O2tDQUNwQiw4REFBQ0M7d0JBQUtDLE1BQU0sY0FBc0IsT0FBUmYsS0FBS0UsRUFBRTtrQ0FDL0IsNEVBQUNjOzRCQUFPZCxJQUFJRCxPQUFPRCxLQUFLRSxFQUFFOzRCQUFpQmUsU0FBU0M7c0NBQWE7MkJBQS9CbEIsS0FBS0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FOM0JGLEtBQUtFLEVBQUU7Ozs7O0FBYS9CO0dBN0J3Qlg7O1FBRVROLG9EQUFXQTtRQUNQRCxvREFBV0E7OztNQUhOTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZWFycGhvbmVzL1tlYXJwaG9uZUlkXS9wYWdlLnRzeD8zNmUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoZ2V0QWxsSm9icyB9IGZyb20gXCJAL3JlZHV4L2FjdGlvblwiO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbFByb3BzLCBSb290U3RhdGUgfSBmcm9tIFwiQC9UeXBlL3R5cGVcIjtcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSBcIkAvcmVkdXgvc3RvcmVcIjtcblxuY29uc3QgRWFycGhvbmVJdGVtcyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG5gO1xuY29uc3QgRGV0YWlsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgJiBidXR0b24ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzcxMDE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlscyh7IHBhcmFtcyB9OiBQcm9kdWN0RGV0YWlsUHJvcHMpIHtcbiAgY29uc3QgeyBlYXJwaG9uZUlkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuam9iLmpvYik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaGdldEFsbEpvYnMoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSBkYXRhLmZpbmQoKGl0ZW0pID0+IFN0cmluZyhpdGVtLmlkKSA9PT0gZWFycGhvbmVJZCk7XG5cbiAgaWYgKCFwcm9kdWN0KSB7XG4gICAgcmV0dXJuIDxwPlByb2R1Y3Qgbm90IGZvdW5kPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVhcnBob25lSXRlbXMga2V5PXtpdGVtLmlkfT5cbiAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlLm1vYmlsZX0gYWx0PVwidGVzdFwiIHdpZHRoPXszNTB9IGhlaWdodD17MzUwfSAvPlxuICAgICAgPERldGFpbD5cbiAgICAgICAgPGgxPntpdGVtLm5hbWV9PC9oMT5cbiAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8TGluayBocmVmPXtgL2VhcnBob25lcy8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgPGJ1dHRvbiBpZD17U3RyaW5nKGl0ZW0uaWQpfSBrZXk9e2l0ZW0uaWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIHNlZSBwcm9kdWN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvRGV0YWlsPlxuICAgIDwvRWFycGhvbmVJdGVtcz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hnZXRBbGxKb2JzIiwiRWFycGhvbmVJdGVtcyIsInN0eWxlZCIsImRpdiIsIkRldGFpbCIsIlByb2R1Y3REZXRhaWxzIiwicGFyYW1zIiwiZWFycGhvbmVJZCIsImRhdGEiLCJzdGF0ZSIsImpvYiIsImRpc3BhdGNoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiU3RyaW5nIiwiaWQiLCJwIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJtb2JpbGUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiTGluayIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/earphones/[earphoneId]/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/esm/_tagged_template_literal.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _: function() { return /* binding */ _tagged_template_literal; },\n/* harmony export */   _tagged_template_literal: function() { return /* binding */ _tagged_template_literal; }\n/* harmony export */ });\nfunction _tagged_template_literal(strings, raw) {\n    if (!raw) raw = strings.slice(0);\n\n    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvZXNtL190YWdnZWRfdGVtcGxhdGVfbGl0ZXJhbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7O0FBRUEsNERBQTRELE9BQU8sNkJBQTZCO0FBQ2hHO0FBQ3lDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvZXNtL190YWdnZWRfdGVtcGxhdGVfbGl0ZXJhbC5qcz9jNTI2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBfdGFnZ2VkX3RlbXBsYXRlX2xpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gICAgaWYgKCFyYXcpIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7IHJhdzogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpIH0gfSkpO1xufVxuZXhwb3J0IHsgX3RhZ2dlZF90ZW1wbGF0ZV9saXRlcmFsIGFzIF8gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\n"));

/***/ })

});