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

/***/ "(app-pages-browser)/./app/earphones/page.tsx":
/*!********************************!*\
  !*** ./app/earphones/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Components/Navbar */ \"(app-pages-browser)/./app/_Components/Navbar.tsx\");\n/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_Components/Footer */ \"(app-pages-browser)/./app/_Components/Footer.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _redux_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slice */ \"(app-pages-browser)/./redux/slice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: #cc7101;\\n    color: white;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst EarphoneItems = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = EarphoneItems;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1());\n_c1 = Detail;\nconst page = ()=>{\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const earphone = data.filter((item)=>item.category === \"earphones\");\n    console.log(earphone, \"earphone\");\n    const handleClick = (e)=>{\n        const target = e.currentTarget.id;\n        dispatch((0,_redux_slice__WEBPACK_IMPORTED_MODULE_6__.updateSelectedId)(target));\n        console.log(target, \"click\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            earphone.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(EarphoneItems, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: item.image.mobile,\n                            alt: \"test\",\n                            width: 350,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: handleClick,\n                                    children: \"see product\"\n                                }, item.id, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\nvar _c, _c1;\n$RefreshReg$(_c, \"EarphoneItems\");\n$RefreshReg$(_c1, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lYXJwaG9uZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUQ7QUFHUjtBQUN3QjtBQUN0QjtBQUNBO0FBQ0o7QUFDVTtBQUVqRCxNQUFNUyxnQkFBZ0JGLHlEQUFNQSxDQUFDRyxHQUFHO0tBQTFCRDtBQUlOLE1BQU1FLFNBQVNKLHlEQUFNQSxDQUFDRyxHQUFHO01BQW5CQztBQWdCTixNQUFNQyxPQUFPOztJQUNYLE1BQU1DLE9BQU9ULHdEQUFXQSxDQUFDLENBQUNVLFFBQXFCQSxNQUFNQyxHQUFHLENBQUNBLEdBQUc7SUFDNUQsTUFBTUMsV0FBV2Isd0RBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSYyxTQUFTaEIsOERBQWVBO0lBQzFCLEdBQUc7UUFBQ2dCO0tBQVM7SUFDYixNQUFNQyxXQUFXSixLQUFLSyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsUUFBUSxLQUFLO0lBQ3pEQyxRQUFRQyxHQUFHLENBQUNMLFVBQVU7SUFFdEIsTUFBTU0sY0FBYyxDQUFDQztRQUNuQixNQUFNQyxTQUFTRCxFQUFFRSxhQUFhLENBQUNDLEVBQUU7UUFDakNYLFNBQVNSLDhEQUFnQkEsQ0FBQ2lCO1FBQzFCSixRQUFRQyxHQUFHLENBQUNHLFFBQVE7SUFDdEI7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNwQiwwREFBTUE7Ozs7O1lBQ05ZLFNBQVNXLEdBQUcsQ0FBQyxDQUFDVCxxQkFDYiw4REFBQ1Y7O3NDQUNDLDhEQUFDb0I7NEJBQUlDLEtBQUtYLEtBQUtZLEtBQUssQ0FBQ0MsTUFBTTs0QkFBRUMsS0FBSTs0QkFBT0MsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7O3NDQUM1RCw4REFBQ3hCOzs4Q0FDQyw4REFBQ3lCOzhDQUFJakIsS0FBS2tCLElBQUk7Ozs7Ozs4Q0FDZCw4REFBQ0M7OENBQUduQixLQUFLb0IsV0FBVzs7Ozs7OzhDQUNwQiw4REFBQ0M7b0NBQXFCQyxTQUFTbEI7OENBQWE7bUNBQS9CSixLQUFLUSxFQUFFOzs7Ozs7Ozs7Ozs7bUJBTEpSLEtBQUtRLEVBQUU7Ozs7OzBCQVM3Qiw4REFBQ3JCLDBEQUFNQTs7Ozs7OztBQUdiO0dBL0JNTTs7UUFDU1Isb0RBQVdBO1FBQ1BELG9EQUFXQTs7O0FBK0I5QiwrREFBZVMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZWFycGhvbmVzL3BhZ2UudHN4PzFjYjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBmZXRjaGdldEFsbEpvYnMgfSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25cIjtcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSBcIkAvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJAL1R5cGUvdHlwZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vX0NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9fQ29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1cGRhdGVTZWxlY3RlZElkIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VcIjtcblxuY29uc3QgRWFycGhvbmVJdGVtcyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG5gO1xuY29uc3QgRGV0YWlsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgJiBidXR0b24ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzcxMDE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmpvYi5qb2IpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hnZXRBbGxKb2JzKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgY29uc3QgZWFycGhvbmUgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gXCJlYXJwaG9uZXNcIik7XG4gIGNvbnNvbGUubG9nKGVhcnBob25lLCBcImVhcnBob25lXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LmlkOyBcbiAgICBkaXNwYXRjaCh1cGRhdGVTZWxlY3RlZElkKHRhcmdldCkpO1xuICAgIGNvbnNvbGUubG9nKHRhcmdldCwgXCJjbGlja1wiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAge2VhcnBob25lLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8RWFycGhvbmVJdGVtcyBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlLm1vYmlsZX0gYWx0PVwidGVzdFwiIHdpZHRoPXszNTB9IGhlaWdodD17MzUwfSAvPlxuICAgICAgICAgIDxEZXRhaWw+XG4gICAgICAgICAgICA8aDE+e2l0ZW0ubmFtZX08L2gxPlxuICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2l0ZW0uaWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5zZWUgcHJvZHVjdDwvYnV0dG9uPlxuICAgICAgICAgIDwvRGV0YWlsPlxuICAgICAgICA8L0VhcnBob25lSXRlbXM+XG4gICAgICApKX1cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG4iXSwibmFtZXMiOlsiZmV0Y2hnZXRBbGxKb2JzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiTmF2YmFyIiwiRm9vdGVyIiwic3R5bGVkIiwidXBkYXRlU2VsZWN0ZWRJZCIsIkVhcnBob25lSXRlbXMiLCJkaXYiLCJEZXRhaWwiLCJwYWdlIiwiZGF0YSIsInN0YXRlIiwiam9iIiwiZGlzcGF0Y2giLCJlYXJwaG9uZSIsImZpbHRlciIsIml0ZW0iLCJjYXRlZ29yeSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsImUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJtYXAiLCJpbWciLCJzcmMiLCJpbWFnZSIsIm1vYmlsZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/earphones/page.tsx\n"));

/***/ })

});