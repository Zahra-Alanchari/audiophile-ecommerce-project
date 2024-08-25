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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: #cc7101;\\n    color: white;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EarphoneItems = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = EarphoneItems;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = Detail;\nfunction ProductDetails(param) {\n    let { params } = param;\n    _s();\n    const { earphoneId } = params;\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const product = data.find((item)=>String(item.id) === earphoneId);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Product not found\"\n        }, void 0, false, {\n            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(EarphoneItems, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: \"/\".concat(product.image.mobile),\n                alt: \"test\",\n                width: 350,\n                height: 350\n            }, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                children: [\n                    product.new && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"NEW PRODUCT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    \"P\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, product.id, true, {\n        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductDetails, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c2 = ProductDetails;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"EarphoneItems\");\n$RefreshReg$(_c1, \"Detail\");\n$RefreshReg$(_c2, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lYXJwaG9uZXMvW2VhcnBob25lSWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2tDO0FBRXFCO0FBQ047QUFHVjtBQUd2QyxNQUFNSyxnQkFBZ0JELHlEQUFNQSxDQUFDRSxHQUFHO0tBQTFCRDtBQUlOLE1BQU1FLFNBQVNILHlEQUFNQSxDQUFDRSxHQUFHO01BQW5CQztBQWdCUyxTQUFTQyxlQUFlLEtBQThCO1FBQTlCLEVBQUVDLE1BQU0sRUFBc0IsR0FBOUI7O0lBQ3JDLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdEO0lBQ3ZCLE1BQU1FLE9BQU9ULHdEQUFXQSxDQUFDLENBQUNVLFFBQXFCQSxNQUFNQyxHQUFHLENBQUNBLEdBQUc7SUFDNUQsTUFBTUMsV0FBV2Isd0RBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSYyxTQUFTWCw4REFBZUE7SUFDMUIsR0FBRztRQUFDVztLQUFTO0lBRWIsTUFBTUMsVUFBVUosS0FBS0ssSUFBSSxDQUFDLENBQUNDLE9BQVNDLE9BQU9ELEtBQUtFLEVBQUUsTUFBTVQ7SUFFeEQsSUFBSSxDQUFDSyxTQUFTO1FBQ1oscUJBQU8sOERBQUNLO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDZjs7MEJBQ0MsOERBQUNnQjtnQkFBSUMsS0FBSyxJQUF5QixPQUFyQlAsUUFBUVEsS0FBSyxDQUFDQyxNQUFNO2dCQUFJQyxLQUFJO2dCQUFPQyxPQUFPO2dCQUFLQyxRQUFROzs7Ozs7MEJBQ3JFLDhEQUFDcEI7O29CQUNFUSxRQUFRYSxHQUFHLGtCQUFJLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNwQiw4REFBQ0M7a0NBQUlmLFFBQVFnQixJQUFJOzs7Ozs7a0NBQ2pCLDhEQUFDWDtrQ0FBR0wsUUFBUWlCLFdBQVc7Ozs7OztvQkFBSzs7Ozs7Ozs7T0FMWmpCLFFBQVFJLEVBQUU7Ozs7O0FBVWxDO0dBMUJ3Qlg7O1FBRVROLG9EQUFXQTtRQUNQRCxvREFBV0E7OztNQUhOTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZWFycGhvbmVzL1tlYXJwaG9uZUlkXS9wYWdlLnRzeD8zNmUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hnZXRBbGxKb2JzIH0gZnJvbSBcIkAvcmVkdXgvYWN0aW9uXCI7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsUHJvcHMsIFJvb3RTdGF0ZSB9IGZyb20gXCJAL1R5cGUvdHlwZVwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRWFycGhvbmVJdGVtcyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG5gO1xuY29uc3QgRGV0YWlsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgJiBidXR0b24ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzcxMDE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlscyh7IHBhcmFtcyB9OiBQcm9kdWN0RGV0YWlsUHJvcHMpIHtcbiAgY29uc3QgeyBlYXJwaG9uZUlkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuam9iLmpvYik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaGdldEFsbEpvYnMoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSBkYXRhLmZpbmQoKGl0ZW0pID0+IFN0cmluZyhpdGVtLmlkKSA9PT0gZWFycGhvbmVJZCk7XG5cbiAgaWYgKCFwcm9kdWN0KSB7XG4gICAgcmV0dXJuIDxwPlByb2R1Y3Qgbm90IGZvdW5kPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVhcnBob25lSXRlbXMga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgIDxpbWcgc3JjPXtgLyR7cHJvZHVjdC5pbWFnZS5tb2JpbGV9YH0gYWx0PVwidGVzdFwiIHdpZHRoPXszNTB9IGhlaWdodD17MzUwfSAvPlxuICAgICAgPERldGFpbD5cbiAgICAgICAge3Byb2R1Y3QubmV3ICYmIDxoMz5ORVcgUFJPRFVDVDwvaDM+fVxuICAgICAgICA8aDE+e3Byb2R1Y3QubmFtZX08L2gxPlxuICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIFBcbiAgICAgIDwvRGV0YWlsPlxuICAgIDwvRWFycGhvbmVJdGVtcz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hnZXRBbGxKb2JzIiwic3R5bGVkIiwiRWFycGhvbmVJdGVtcyIsImRpdiIsIkRldGFpbCIsIlByb2R1Y3REZXRhaWxzIiwicGFyYW1zIiwiZWFycGhvbmVJZCIsImRhdGEiLCJzdGF0ZSIsImpvYiIsImRpc3BhdGNoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiU3RyaW5nIiwiaWQiLCJwIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJtb2JpbGUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5ldyIsImgzIiwiaDEiLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/earphones/[earphoneId]/page.tsx\n"));

/***/ })

});