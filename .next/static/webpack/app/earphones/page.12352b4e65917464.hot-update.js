"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/earphones/page",{

/***/ "(app-pages-browser)/./redux/slice.ts":
/*!************************!*\
  !*** ./redux/slice.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateSelectedId: function() { return /* binding */ updateSelectedId; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"(app-pages-browser)/./redux/action.ts\");\n\n\nconst initialState = {\n    job: [],\n    id: null,\n    headphoneCount\n};\nconst jobSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"jobs\",\n    initialState,\n    reducers: {\n        updateSelectedId (state, action) {\n            state.id = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_action__WEBPACK_IMPORTED_MODULE_0__.fetchgetAllJobs.fulfilled, (state, action)=>{\n            state.job = action.payload;\n        });\n    }\n});\nconst { updateSelectedId } = jobSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (jobSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUVKO0FBRTNDLE1BQU1FLGVBQWU7SUFDbkJDLEtBQUssRUFBRTtJQUNQQyxJQUFJO0lBQ0pDO0FBQ0Y7QUFFQSxNQUFNQyxXQUFXTiw2REFBV0EsQ0FBQztJQUMzQk8sTUFBTTtJQUNOTDtJQUNBTSxVQUFVO1FBQ1JDLGtCQUFpQkMsS0FBSyxFQUFFQyxNQUFNO1lBQzVCRCxNQUFNTixFQUFFLEdBQUdPLE9BQU9DLE9BQU87UUFDM0I7SUFDRjtJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ2Qsb0RBQWVBLENBQUNlLFNBQVMsRUFBRSxDQUFDTixPQUFPQztZQUNqREQsTUFBTVAsR0FBRyxHQUFHUSxPQUFPQyxPQUFPO1FBQzVCO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUgsZ0JBQWdCLEVBQUUsR0FBR0gsU0FBU1csT0FBTyxDQUFDO0FBQ3JELCtEQUFlWCxTQUFTWSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2UudHM/NzFiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmltcG9ydCB7IGZldGNoZ2V0QWxsSm9icyB9IGZyb20gXCIuL2FjdGlvblwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGpvYjogW10sXG4gIGlkOiBudWxsLFxuICBoZWFkcGhvbmVDb3VudFxufTtcblxuY29uc3Qgam9iU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiam9ic1wiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgdXBkYXRlU2VsZWN0ZWRJZChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5pZCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoZ2V0QWxsSm9icy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5qb2IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyB1cGRhdGVTZWxlY3RlZElkIH0gPSBqb2JTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgam9iU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoZ2V0QWxsSm9icyIsImluaXRpYWxTdGF0ZSIsImpvYiIsImlkIiwiaGVhZHBob25lQ291bnQiLCJqb2JTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInVwZGF0ZVNlbGVjdGVkSWQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJmdWxmaWxsZWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slice.ts\n"));

/***/ })

});