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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_1__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const headphone = data.filter((item)=>item.category === \"headphones\");\n    console.log(headphone, \"headphones\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            src: headphone.image,\n            alt: \"test\",\n            width: 100,\n            height: 100\n        }, void 0, false, {\n            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(page, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWFkcGhvbmUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2lEO0FBR2xCO0FBQ1U7QUFDYztBQUV2RCxNQUFNTSxPQUFPOztJQUNULE1BQU1DLE9BQU9GLHdEQUFXQSxDQUFDLENBQUNHLFFBQW9CQSxNQUFNQyxHQUFHLENBQUNBLEdBQUc7SUFDM0QsTUFBTUMsV0FBV04sd0RBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSTyxTQUFTViw4REFBZUE7SUFDMUIsR0FBRztRQUFDVTtLQUFTO0lBQ2IsTUFBTUMsWUFBV0osS0FBS0ssTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxRQUFRLEtBQUs7SUFDdkRDLFFBQVFDLEdBQUcsQ0FBQ0wsV0FBVTtJQUN0QixxQkFDSSw4REFBQ007a0JBQ0csNEVBQUNoQixrREFBS0E7WUFBQ2lCLEtBQUtQLFVBQVVRLEtBQUs7WUFBRUMsS0FBSTtZQUFPQyxPQUFPO1lBQUtDLFFBQVE7Ozs7Ozs7Ozs7O0FBR3hFO0dBZE1oQjs7UUFDV0Qsb0RBQVdBO1FBQ1BELG9EQUFXQTs7O0FBY2hDLCtEQUFlRSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9oZWFkcGhvbmUvcGFnZS50c3g/MmNmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgZmV0Y2hnZXRBbGxKb2JzIH0gZnJvbSAnQC9yZWR1eC9hY3Rpb24nO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0AvVHlwZS90eXBlJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTpSb290U3RhdGUpID0+IHN0YXRlLmpvYi5qb2IpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaGdldEFsbEpvYnMoKSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgY29uc3QgaGVhZHBob25lID1kYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT09IFwiaGVhZHBob25lc1wiKSBcbiAgICBjb25zb2xlLmxvZyhoZWFkcGhvbmUsXCJoZWFkcGhvbmVzXCIpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2hlYWRwaG9uZS5pbWFnZX0gYWx0PSd0ZXN0JyB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0+PC9JbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7Il0sIm5hbWVzIjpbImZldGNoZ2V0QWxsSm9icyIsIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwicGFnZSIsImRhdGEiLCJzdGF0ZSIsImpvYiIsImRpc3BhdGNoIiwiaGVhZHBob25lIiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsImRpdiIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/headphone/page.tsx\n"));

/***/ })

});