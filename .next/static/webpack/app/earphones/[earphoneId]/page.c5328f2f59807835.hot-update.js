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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: #cc7101;\\n    color: white;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst EarphoneItems = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = EarphoneItems;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = Detail;\nfunction ProductDetails(param) {\n    let { params } = param;\n    _s();\n    const { earphoneId } = params;\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const product = data.find((item)=>String(item.id) === earphoneId);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Product not found\"\n        }, void 0, false, {\n            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(EarphoneItems, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: \"product.image.mobile\",\n                alt: \"test\",\n                width: 350,\n                height: 350\n            }, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"/earphones/\".concat(product.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            id: String(product.id),\n                            children: \"see product\"\n                        }, product.id, false, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, product.id, true, {\n        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/earphones/[earphoneId]/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductDetails, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch\n    ];\n});\n_c2 = ProductDetails;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"EarphoneItems\");\n$RefreshReg$(_c1, \"Detail\");\n$RefreshReg$(_c2, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lYXJwaG9uZXMvW2VhcnBob25lSWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNrQztBQUVxQjtBQUNOO0FBR1Y7QUFDVjtBQUU3QixNQUFNTSxnQkFBZ0JGLHlEQUFNQSxDQUFDRyxHQUFHO0tBQTFCRDtBQUlOLE1BQU1FLFNBQVNKLHlEQUFNQSxDQUFDRyxHQUFHO01BQW5CQztBQWdCUyxTQUFTQyxlQUFlLEtBQThCO1FBQTlCLEVBQUVDLE1BQU0sRUFBc0IsR0FBOUI7O0lBQ3JDLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdEO0lBQ3ZCLE1BQU1FLE9BQU9WLHdEQUFXQSxDQUFDLENBQUNXLFFBQXFCQSxNQUFNQyxHQUFHLENBQUNBLEdBQUc7SUFDNUQsTUFBTUMsV0FBV2Qsd0RBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSZSxTQUFTWiw4REFBZUE7SUFDMUIsR0FBRztRQUFDWTtLQUFTO0lBRWIsTUFBTUMsVUFBVUosS0FBS0ssSUFBSSxDQUFDLENBQUNDLE9BQVNDLE9BQU9ELEtBQUtFLEVBQUUsTUFBTVQ7SUFFeEQsSUFBSSxDQUFDSyxTQUFTO1FBQ1oscUJBQU8sOERBQUNLO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDZjs7MEJBQ0MsOERBQUNnQjtnQkFBSUMsS0FBTTtnQkFBdUJDLEtBQUk7Z0JBQU9DLE9BQU87Z0JBQUtDLFFBQVE7Ozs7OzswQkFDakUsOERBQUNsQjs7a0NBQ0MsOERBQUNtQjtrQ0FBSVgsUUFBUVksSUFBSTs7Ozs7O2tDQUNqQiw4REFBQ1A7a0NBQUdMLFFBQVFhLFdBQVc7Ozs7OztrQ0FDdkIsOERBQUN4QixpREFBSUE7d0JBQUN5QixNQUFNLGNBQXlCLE9BQVhkLFFBQVFJLEVBQUU7a0NBQ2xDLDRFQUFDVzs0QkFBT1gsSUFBSUQsT0FBT0gsUUFBUUksRUFBRTtzQ0FBb0I7MkJBQVpKLFFBQVFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O09BTmpDSixRQUFRSSxFQUFFOzs7OztBQWFsQztHQTdCd0JYOztRQUVUUCxvREFBV0E7UUFDUEQsb0RBQVdBOzs7TUFITlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2VhcnBob25lcy9bZWFycGhvbmVJZF0vcGFnZS50c3g/MzZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoZ2V0QWxsSm9icyB9IGZyb20gXCJAL3JlZHV4L2FjdGlvblwiO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbFByb3BzLCBSb290U3RhdGUgfSBmcm9tIFwiQC9UeXBlL3R5cGVcIjtcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSBcIkAvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEVhcnBob25lSXRlbXMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuYDtcbmNvbnN0IERldGFpbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICYgYnV0dG9uIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M3MTAxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdERldGFpbHMoeyBwYXJhbXMgfTogUHJvZHVjdERldGFpbFByb3BzKSB7XG4gIGNvbnN0IHsgZWFycGhvbmVJZCB9ID0gcGFyYW1zO1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmpvYi5qb2IpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hnZXRBbGxKb2JzKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICBjb25zdCBwcm9kdWN0ID0gZGF0YS5maW5kKChpdGVtKSA9PiBTdHJpbmcoaXRlbS5pZCkgPT09IGVhcnBob25lSWQpO1xuXG4gIGlmICghcHJvZHVjdCkge1xuICAgIHJldHVybiA8cD5Qcm9kdWN0IG5vdCBmb3VuZDwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFYXJwaG9uZUl0ZW1zIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICA8aW1nIHNyYz17YHByb2R1Y3QuaW1hZ2UubW9iaWxlYH0gYWx0PVwidGVzdFwiIHdpZHRoPXszNTB9IGhlaWdodD17MzUwfSAvPlxuICAgICAgPERldGFpbD5cbiAgICAgICAgPGgxPntwcm9kdWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8TGluayBocmVmPXtgL2VhcnBob25lcy8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgPGJ1dHRvbiBpZD17U3RyaW5nKHByb2R1Y3QuaWQpfSBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgc2VlIHByb2R1Y3RcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9EZXRhaWw+XG4gICAgPC9FYXJwaG9uZUl0ZW1zPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaGdldEFsbEpvYnMiLCJzdHlsZWQiLCJMaW5rIiwiRWFycGhvbmVJdGVtcyIsImRpdiIsIkRldGFpbCIsIlByb2R1Y3REZXRhaWxzIiwicGFyYW1zIiwiZWFycGhvbmVJZCIsImRhdGEiLCJzdGF0ZSIsImpvYiIsImRpc3BhdGNoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiU3RyaW5nIiwiaWQiLCJwIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/earphones/[earphoneId]/page.tsx\n"));

/***/ })

});