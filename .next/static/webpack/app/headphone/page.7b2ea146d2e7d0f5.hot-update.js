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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Components/Navbar */ \"(app-pages-browser)/./app/_Components/Navbar.tsx\");\n/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_Components/Footer */ \"(app-pages-browser)/./app/_Components/Footer.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: ;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HeadphoneItems = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = HeadphoneItems;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = Detail;\nconst page = ()=>{\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const headphone = data.filter((item)=>item.category === \"headphones\");\n    console.log(headphone, \"headphones\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            headphone.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeadphoneItems, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: item.image.mobile,\n                            alt: \"test\",\n                            width: 350,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    children: \"see product\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\nvar _c, _c1;\n$RefreshReg$(_c, \"HeadphoneItems\");\n$RefreshReg$(_c1, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWFkcGhvbmUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUlSO0FBQ2M7QUFFWjtBQUNBO0FBQ0o7QUFFdkMsTUFBTVEsaUJBQWlCRCx5REFBTUEsQ0FBQ0UsR0FBRztLQUEzQkQ7QUFJTixNQUFNRSxTQUFTSCx5REFBTUEsQ0FBQ0UsR0FBRztNQUFuQkM7QUFjTixNQUFNQyxPQUFPOztJQUNYLE1BQU1DLE9BQU9SLHdEQUFXQSxDQUFDLENBQUNTLFFBQXFCQSxNQUFNQyxHQUFHLENBQUNBLEdBQUc7SUFDNUQsTUFBTUMsV0FBV1osd0RBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSYSxTQUFTZiw4REFBZUE7SUFDMUIsR0FBRztRQUFDZTtLQUFTO0lBQ2IsTUFBTUMsWUFBWUosS0FBS0ssTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLFFBQVEsS0FBSztJQUMxREMsUUFBUUMsR0FBRyxDQUFDTCxXQUFXO0lBQ3ZCLHFCQUNFOzswQkFDRSw4REFBQ1gsMERBQU1BOzs7OztZQUNOVyxVQUFVTSxHQUFHLENBQUMsQ0FBQ0oscUJBQ2QsOERBQUNWOztzQ0FDQyw4REFBQ2U7NEJBQUlDLEtBQUtOLEtBQUtPLEtBQUssQ0FBQ0MsTUFBTTs0QkFBRUMsS0FBSTs0QkFBT0MsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7O3NDQUM1RCw4REFBQ25COzs4Q0FDQyw4REFBQ29COzhDQUFJWixLQUFLYSxJQUFJOzs7Ozs7OENBQ2QsOERBQUNDOzhDQUFHZCxLQUFLZSxXQUFXOzs7Ozs7OENBQ3BCLDhEQUFDQzs4Q0FBTzs7Ozs7Ozs7Ozs7OzttQkFMU2hCLEtBQUtpQixFQUFFOzs7OzswQkFTOUIsOERBQUM3QiwwREFBTUE7Ozs7Ozs7QUFHYjtHQXpCTUs7O1FBQ1NQLG9EQUFXQTtRQUNQRCxvREFBV0E7OztBQXlCOUIsK0RBQWVRLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hlYWRwaG9uZS9wYWdlLnRzeD8yY2Y1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgZmV0Y2hnZXRBbGxKb2JzIH0gZnJvbSBcIkAvcmVkdXgvYWN0aW9uXCI7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gXCJAL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiQC9UeXBlL3R5cGVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgcGkgZnJvbSBcIi4uLy4uL3B1YmxpYy9hc3NldHMvcHJvZHVjdC14eDk5LW1hcmstb25lLWhlYWRwaG9uZXMvbW9iaWxlL2ltYWdlLXByb2R1Y3QuanBnXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9fQ29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL19Db21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgSGVhZHBob25lSXRlbXMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuYDtcbmNvbnN0IERldGFpbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICYgYnV0dG9uIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XG4gIH1cbmA7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuam9iLmpvYik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaGdldEFsbEpvYnMoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICBjb25zdCBoZWFkcGhvbmUgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gXCJoZWFkcGhvbmVzXCIpO1xuICBjb25zb2xlLmxvZyhoZWFkcGhvbmUsIFwiaGVhZHBob25lc1wiKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAge2hlYWRwaG9uZS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPEhlYWRwaG9uZUl0ZW1zIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2UubW9iaWxlfSBhbHQ9XCJ0ZXN0XCIgd2lkdGg9ezM1MH0gaGVpZ2h0PXszNTB9IC8+XG4gICAgICAgICAgPERldGFpbD5cbiAgICAgICAgICAgIDxoMT57aXRlbS5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8YnV0dG9uPnNlZSBwcm9kdWN0PC9idXR0b24+XG4gICAgICAgICAgPC9EZXRhaWw+XG4gICAgICAgIDwvSGVhZHBob25lSXRlbXM+XG4gICAgICApKX1cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG4iXSwibmFtZXMiOlsiZmV0Y2hnZXRBbGxKb2JzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiTmF2YmFyIiwiRm9vdGVyIiwic3R5bGVkIiwiSGVhZHBob25lSXRlbXMiLCJkaXYiLCJEZXRhaWwiLCJwYWdlIiwiZGF0YSIsInN0YXRlIiwiam9iIiwiZGlzcGF0Y2giLCJoZWFkcGhvbmUiLCJmaWx0ZXIiLCJpdGVtIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJtb2JpbGUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/headphone/page.tsx\n"));

/***/ })

});