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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Components/Navbar */ \"(app-pages-browser)/./app/_Components/Navbar.tsx\");\n/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_Components/Footer */ \"(app-pages-browser)/./app/_Components/Footer.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: #cc7101;\\n    color: white;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst EarphoneItems = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = EarphoneItems;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = Detail;\nconst page = ()=>{\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const earphone = data.filter((item)=>item.category === \"earphones\");\n    console.log(earphone, \"earphone\");\n    function handleClick() {\n        console.log;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            earphone.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(EarphoneItems, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: item.image.mobile,\n                            alt: \"test\",\n                            width: 350,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: handleClick,\n                                    children: \"see product\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\nvar _c, _c1;\n$RefreshReg$(_c, \"EarphoneItems\");\n$RefreshReg$(_c1, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lYXJwaG9uZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUdSO0FBQ3dCO0FBQ3RCO0FBQ0E7QUFDSjtBQUl2QyxNQUFNUSxnQkFBZ0JELHlEQUFNQSxDQUFDRSxHQUFHO0tBQTFCRDtBQUlOLE1BQU1FLFNBQVNILHlEQUFNQSxDQUFDRSxHQUFHO01BQW5CQztBQWdCTixNQUFNQyxPQUFPOztJQUVULE1BQU1DLE9BQU9SLHdEQUFXQSxDQUFDLENBQUNTLFFBQXFCQSxNQUFNQyxHQUFHLENBQUNBLEdBQUc7SUFDNUQsTUFBTUMsV0FBV1osd0RBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSYSxTQUFTZiw4REFBZUE7SUFDMUIsR0FBRztRQUFDZTtLQUFTO0lBQ2IsTUFBTUMsV0FBV0osS0FBS0ssTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLFFBQVEsS0FBSztJQUN6REMsUUFBUUMsR0FBRyxDQUFDTCxVQUFVO0lBRXRCLFNBQVNNO1FBQ1BGLFFBQVFDLEdBQUc7SUFDYjtJQUNBLHFCQUNJOzswQkFDRiw4REFBQ2hCLDBEQUFNQTs7Ozs7WUFDTlcsU0FBU08sR0FBRyxDQUFDLENBQUNMLHFCQUNiLDhEQUFDVjs7c0NBQ0MsOERBQUNnQjs0QkFBSUMsS0FBS1AsS0FBS1EsS0FBSyxDQUFDQyxNQUFNOzRCQUFFQyxLQUFJOzRCQUFPQyxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7c0NBQzVELDhEQUFDcEI7OzhDQUNDLDhEQUFDcUI7OENBQUliLEtBQUtjLElBQUk7Ozs7Ozs4Q0FDZCw4REFBQ0M7OENBQUdmLEtBQUtnQixXQUFXOzs7Ozs7OENBQ3BCLDhEQUFDQztvQ0FBT0MsU0FBU2Q7OENBQWE7Ozs7Ozs7Ozs7Ozs7bUJBTGRKLEtBQUttQixFQUFFOzs7OzswQkFTN0IsOERBQUMvQiwwREFBTUE7Ozs7Ozs7QUFHYjtHQTlCTUs7O1FBRVdQLG9EQUFXQTtRQUNQRCxvREFBV0E7OztBQTZCaEMsK0RBQWVRLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2VhcnBob25lcy9wYWdlLnRzeD8xY2IxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBmZXRjaGdldEFsbEpvYnMgfSBmcm9tICdAL3JlZHV4L2FjdGlvbic7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJ0AvcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQC9UeXBlL3R5cGUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19Db21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL19Db21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVwZGF0ZVNlbGVjdGVkSWQgfSBmcm9tICdAL3JlZHV4L3NsaWNlJztcblxuXG5jb25zdCBFYXJwaG9uZUl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbmA7XG5jb25zdCBEZXRhaWwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjNzEwMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbmA7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gICBcbiAgICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmpvYi5qb2IpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaGdldEFsbEpvYnMoKSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgY29uc3QgZWFycGhvbmUgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gXCJlYXJwaG9uZXNcIik7XG4gICAgY29uc29sZS5sb2coZWFycGhvbmUsIFwiZWFycGhvbmVcIik7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpe1xuICAgICAgY29uc29sZS5sb2dcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIHtlYXJwaG9uZS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPEVhcnBob25lSXRlbXMga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZS5tb2JpbGV9IGFsdD1cInRlc3RcIiB3aWR0aD17MzUwfSBoZWlnaHQ9ezM1MH0gLz5cbiAgICAgICAgICA8RGV0YWlsPlxuICAgICAgICAgICAgPGgxPntpdGVtLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PnNlZSBwcm9kdWN0PC9idXR0b24+XG4gICAgICAgICAgPC9EZXRhaWw+XG4gICAgICAgIDwvRWFycGhvbmVJdGVtcz5cbiAgICAgICkpfVxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlOyJdLCJuYW1lcyI6WyJmZXRjaGdldEFsbEpvYnMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJOYXZiYXIiLCJGb290ZXIiLCJzdHlsZWQiLCJFYXJwaG9uZUl0ZW1zIiwiZGl2IiwiRGV0YWlsIiwicGFnZSIsImRhdGEiLCJzdGF0ZSIsImpvYiIsImRpc3BhdGNoIiwiZWFycGhvbmUiLCJmaWx0ZXIiLCJpdGVtIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJtYXAiLCJpbWciLCJzcmMiLCJpbWFnZSIsIm1vYmlsZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/earphones/page.tsx\n"));

/***/ })

});