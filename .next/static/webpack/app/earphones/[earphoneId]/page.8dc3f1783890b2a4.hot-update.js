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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: #cc7101;\\n    color: white;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EarphoneItems = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = EarphoneItems;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = Detail;\nfunction ProductDetails(param) {\n    let { params } = param;\n    _s();\n    const { earphoneId } = params;\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const product = data.find((item)=>String(item.id) === earphoneId);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Product not found\"\n        }, void 0, false, {\n            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(EarphoneItems, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: \"/\".concat(product.image.mobile),\n                alt: \"test\",\n                width: 350,\n                height: 350\n            }, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                children: [\n                    product.new && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"NEW PRODUCT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, product.id, true, {\n        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductDetails, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c2 = ProductDetails;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"EarphoneItems\");\n$RefreshReg$(_c1, \"Detail\");\n$RefreshReg$(_c2, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lYXJwaG9uZXMvW2VhcnBob25lSWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2tDO0FBRXFCO0FBQ047QUFHVjtBQUd2QyxNQUFNSyxnQkFBZ0JELHlEQUFNQSxDQUFDRSxHQUFHO0tBQTFCRDtBQUlOLE1BQU1FLFNBQVNILHlEQUFNQSxDQUFDRSxHQUFHO01BQW5CQztBQWdCUyxTQUFTQyxlQUFlLEtBQThCO1FBQTlCLEVBQUVDLE1BQU0sRUFBc0IsR0FBOUI7O0lBQ3JDLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdEO0lBQ3ZCLE1BQU1FLE9BQU9ULHdEQUFXQSxDQUFDLENBQUNVLFFBQXFCQSxNQUFNQyxHQUFHLENBQUNBLEdBQUc7SUFDNUQsTUFBTUMsV0FBV2Isd0RBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSYyxTQUFTWCw4REFBZUE7SUFDMUIsR0FBRztRQUFDVztLQUFTO0lBRWIsTUFBTUMsVUFBVUosS0FBS0ssSUFBSSxDQUFDLENBQUNDLE9BQVNDLE9BQU9ELEtBQUtFLEVBQUUsTUFBTVQ7SUFFeEQsSUFBSSxDQUFDSyxTQUFTO1FBQ1oscUJBQU8sOERBQUNLO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDZjs7MEJBQ0MsOERBQUNnQjtnQkFBSUMsS0FBSyxJQUF5QixPQUFyQlAsUUFBUVEsS0FBSyxDQUFDQyxNQUFNO2dCQUFJQyxLQUFJO2dCQUFPQyxPQUFPO2dCQUFLQyxRQUFROzs7Ozs7MEJBQ3JFLDhEQUFDcEI7O29CQUNFUSxRQUFRYSxHQUFHLGtCQUFJLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNwQiw4REFBQ0M7a0NBQUlmLFFBQVFnQixJQUFJOzs7Ozs7a0NBQ2pCLDhEQUFDWDtrQ0FBR0wsUUFBUWlCLFdBQVc7Ozs7OztrQ0FDdkIsOERBQUNaOzs7Ozs7Ozs7Ozs7T0FOZUwsUUFBUUksRUFBRTs7Ozs7QUFVbEM7R0ExQndCWDs7UUFFVE4sb0RBQVdBO1FBQ1BELG9EQUFXQTs7O01BSE5PIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9lYXJwaG9uZXMvW2VhcnBob25lSWRdL3BhZ2UudHN4PzM2ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaGdldEFsbEpvYnMgfSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25cIjtcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxQcm9wcywgUm9vdFN0YXRlIH0gZnJvbSBcIkAvVHlwZS90eXBlXCI7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gXCJAL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBFYXJwaG9uZUl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbmA7XG5jb25zdCBEZXRhaWwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjNzEwMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzKHsgcGFyYW1zIH06IFByb2R1Y3REZXRhaWxQcm9wcykge1xuICBjb25zdCB7IGVhcnBob25lSWQgfSA9IHBhcmFtcztcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5qb2Iuam9iKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoZ2V0QWxsSm9icygpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3QgcHJvZHVjdCA9IGRhdGEuZmluZCgoaXRlbSkgPT4gU3RyaW5nKGl0ZW0uaWQpID09PSBlYXJwaG9uZUlkKTtcblxuICBpZiAoIXByb2R1Y3QpIHtcbiAgICByZXR1cm4gPHA+UHJvZHVjdCBub3QgZm91bmQ8L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RWFycGhvbmVJdGVtcyBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgPGltZyBzcmM9e2AvJHtwcm9kdWN0LmltYWdlLm1vYmlsZX1gfSBhbHQ9XCJ0ZXN0XCIgd2lkdGg9ezM1MH0gaGVpZ2h0PXszNTB9IC8+XG4gICAgICA8RGV0YWlsPlxuICAgICAgICB7cHJvZHVjdC5uZXcgJiYgPGgzPk5FVyBQUk9EVUNUPC9oMz59XG4gICAgICAgIDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XG4gICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgPC9EZXRhaWw+XG4gICAgPC9FYXJwaG9uZUl0ZW1zPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaGdldEFsbEpvYnMiLCJzdHlsZWQiLCJFYXJwaG9uZUl0ZW1zIiwiZGl2IiwiRGV0YWlsIiwiUHJvZHVjdERldGFpbHMiLCJwYXJhbXMiLCJlYXJwaG9uZUlkIiwiZGF0YSIsInN0YXRlIiwiam9iIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJTdHJpbmciLCJpZCIsInAiLCJpbWciLCJzcmMiLCJpbWFnZSIsIm1vYmlsZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibmV3IiwiaDMiLCJoMSIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/earphones/[earphoneId]/page.tsx\n"));

/***/ })

});