"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/speaker/page",{

/***/ "(app-pages-browser)/./app/speaker/page.tsx":
/*!******************************!*\
  !*** ./app/speaker/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import { RootState } from '@reduxjs/toolkit/query';\n\n\nconst page = ()=>{\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_1__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const speaker = data.filter((item)=>item.category === \"headphones\");\n    console.log(speaker, \"headphones\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"speakers\"\n    }, void 0, false, {\n        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/speaker/page.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(page, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zcGVha2VyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2lEO0FBR2pELHNEQUFzRDtBQUNiO0FBQ2M7QUFFdkQsTUFBTUssT0FBTzs7SUFFVCxNQUFNQyxPQUFPRix3REFBV0EsQ0FBQyxDQUFDRyxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDQSxHQUFHO0lBQzVELE1BQU1DLFdBQVdOLHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDUk8sU0FBU1QsOERBQWVBO0lBQzFCLEdBQUc7UUFBQ1M7S0FBUztJQUNiLE1BQU1DLFVBQVVKLEtBQUtLLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxRQUFRLEtBQUs7SUFDeERDLFFBQVFDLEdBQUcsQ0FBQ0wsU0FBUztJQUNyQixxQkFDSSw4REFBQ007a0JBQUk7Ozs7OztBQUliO0dBZk1YOztRQUVXRCxvREFBV0E7UUFDUEQsb0RBQVdBOzs7QUFjaEMsK0RBQWVFLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NwZWFrZXIvcGFnZS50c3g/MDhkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgZmV0Y2hnZXRBbGxKb2JzIH0gZnJvbSAnQC9yZWR1eC9hY3Rpb24nO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0AvVHlwZS90eXBlJztcbi8vIGltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgcGFnZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuam9iLmpvYik7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGZldGNoZ2V0QWxsSm9icygpKTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICBjb25zdCBzcGVha2VyID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09IFwiaGVhZHBob25lc1wiKTtcbiAgICBjb25zb2xlLmxvZyhzcGVha2VyLCBcImhlYWRwaG9uZXNcIik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHNwZWFrZXJzXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlOyJdLCJuYW1lcyI6WyJmZXRjaGdldEFsbEpvYnMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJwYWdlIiwiZGF0YSIsInN0YXRlIiwiam9iIiwiZGlzcGF0Y2giLCJzcGVha2VyIiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/speaker/page.tsx\n"));

/***/ })

});