"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/headphone/page",{

/***/ "(app-pages-browser)/./app/headphone/page.tsx":
/*!********************************!*\
  !*** ./app/headphone/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _public_assets_product_xx99_mark_one_headphones_mobile_image_product_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg */ \"(app-pages-browser)/./public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_1__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const headphone = data.filter((item)=>item.category === \"headphones\");\n    console.log(headphone, \"headphones\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: headphone.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _public_assets_product_xx99_mark_one_headphones_mobile_image_product_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"test\",\n                        width: 350,\n                        height: 350\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"see product\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_s(page, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWFkcGhvbmUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpRDtBQUdsQjtBQUNVO0FBQ2M7QUFDd0M7QUFFL0YsTUFBTU8sT0FBTzs7SUFDWCxNQUFNQyxPQUFPSCx3REFBV0EsQ0FBQyxDQUFDSSxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDQSxHQUFHO0lBQzVELE1BQU1DLFdBQVdQLHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDUlEsU0FBU1gsOERBQWVBO0lBQzFCLEdBQUc7UUFBQ1c7S0FBUztJQUNiLE1BQU1DLFlBQVlKLEtBQUtLLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxRQUFRLEtBQUs7SUFDMURDLFFBQVFDLEdBQUcsQ0FBQ0wsV0FBVztJQUN2QixxQkFDRTtrQkFDR0EsVUFBVU0sR0FBRyxDQUFDLENBQUNKLHFCQUNkLDhEQUFDSzs7a0NBQ0MsOERBQUNsQixrREFBS0E7d0JBQUNtQixLQUFLZCxnSEFBRUE7d0JBQUVlLEtBQUk7d0JBQU9DLE9BQU87d0JBQUtDLFFBQVE7Ozs7OztrQ0FDL0MsOERBQUNDO2tDQUFHVixLQUFLVyxXQUFXOzs7Ozs7a0NBQ3BCLDhEQUFDQztrQ0FBTzs7Ozs7Ozs7Ozs7OztBQUtsQjtHQXBCTW5COztRQUNTRixvREFBV0E7UUFDUEQsb0RBQVdBOzs7QUFvQjlCLCtEQUFlRyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9oZWFkcGhvbmUvcGFnZS50c3g/MmNmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IGZldGNoZ2V0QWxsSm9icyB9IGZyb20gXCJAL3JlZHV4L2FjdGlvblwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIkAvVHlwZS90eXBlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHBpIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL3Byb2R1Y3QteHg5OS1tYXJrLW9uZS1oZWFkcGhvbmVzL21vYmlsZS9pbWFnZS1wcm9kdWN0LmpwZ1wiO1xuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmpvYi5qb2IpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hnZXRBbGxKb2JzKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgY29uc3QgaGVhZHBob25lID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09IFwiaGVhZHBob25lc1wiKTtcbiAgY29uc29sZS5sb2coaGVhZHBob25lLCBcImhlYWRwaG9uZXNcIik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtoZWFkcGhvbmUubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlIHNyYz17cGl9IGFsdD1cInRlc3RcIiB3aWR0aD17MzUwfSBoZWlnaHQ9ezM1MH0+PC9JbWFnZT5cbiAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPGJ1dHRvbj5zZWUgcHJvZHVjdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcbiJdLCJuYW1lcyI6WyJmZXRjaGdldEFsbEpvYnMiLCJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInBpIiwicGFnZSIsImRhdGEiLCJzdGF0ZSIsImpvYiIsImRpc3BhdGNoIiwiaGVhZHBob25lIiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsIm1hcCIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/headphone/page.tsx\n"));

/***/ })

});