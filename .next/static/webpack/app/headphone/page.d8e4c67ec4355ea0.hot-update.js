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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Components/Navbar */ \"(app-pages-browser)/./app/_Components/Navbar.tsx\");\n/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_Components/Footer */ \"(app-pages-browser)/./app/_Components/Footer.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: #cc7101;\\n    color: white;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HeadphoneItems = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = HeadphoneItems;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = Detail;\nconst page = ()=>{\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const headphone = data.filter((item)=>item.category === \"headphones\");\n    console.log(headphone, \"headphones\");\n    const handleClick = (e)=>{\n        const target = e.currentTarget.id;\n        dispatch(updateSelectedId(target));\n    };\n    console.log(idd, \"click\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            headphone.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeadphoneItems, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: item.image.mobile,\n                            alt: \"test\",\n                            width: 350,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    children: \"see product\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\nvar _c, _c1;\n$RefreshReg$(_c, \"HeadphoneItems\");\n$RefreshReg$(_c1, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWFkcGhvbmUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUlSO0FBQ2M7QUFFWjtBQUNBO0FBQ0o7QUFFdkMsTUFBTVEsaUJBQWlCRCx5REFBTUEsQ0FBQ0UsR0FBRztLQUEzQkQ7QUFJTixNQUFNRSxTQUFTSCx5REFBTUEsQ0FBQ0UsR0FBRztNQUFuQkM7QUFnQk4sTUFBTUMsT0FBTzs7SUFDWCxNQUFNQyxPQUFPUix3REFBV0EsQ0FBQyxDQUFDUyxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDQSxHQUFHO0lBQzVELE1BQU1DLFdBQVdaLHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDUmEsU0FBU2YsOERBQWVBO0lBQzFCLEdBQUc7UUFBQ2U7S0FBUztJQUNiLE1BQU1DLFlBQVlKLEtBQUtLLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxRQUFRLEtBQUs7SUFDMURDLFFBQVFDLEdBQUcsQ0FBQ0wsV0FBVztJQUV2QixNQUFNTSxjQUFjLENBQUNDO1FBQ25CLE1BQU1DLFNBQVNELEVBQUVFLGFBQWEsQ0FBQ0MsRUFBRTtRQUNqQ1gsU0FBU1ksaUJBQWlCSDtJQUM1QjtJQUNBSixRQUFRQyxHQUFHLENBQUNPLEtBQUs7SUFDakIscUJBQ0U7OzBCQUNFLDhEQUFDdkIsMERBQU1BOzs7OztZQUNOVyxVQUFVYSxHQUFHLENBQUMsQ0FBQ1gscUJBQ2QsOERBQUNWOztzQ0FDQyw4REFBQ3NCOzRCQUFJQyxLQUFLYixLQUFLYyxLQUFLLENBQUNDLE1BQU07NEJBQUVDLEtBQUk7NEJBQU9DLE9BQU87NEJBQUtDLFFBQVE7Ozs7OztzQ0FDNUQsOERBQUMxQjs7OENBQ0MsOERBQUMyQjs4Q0FBSW5CLEtBQUtvQixJQUFJOzs7Ozs7OENBQ2QsOERBQUNDOzhDQUFHckIsS0FBS3NCLFdBQVc7Ozs7Ozs4Q0FDcEIsOERBQUNDOzhDQUFPOzs7Ozs7Ozs7Ozs7O21CQUxTdkIsS0FBS1EsRUFBRTs7Ozs7MEJBUzlCLDhEQUFDcEIsMERBQU1BOzs7Ozs7O0FBR2I7R0EvQk1LOztRQUNTUCxvREFBV0E7UUFDUEQsb0RBQVdBOzs7QUErQjlCLCtEQUFlUSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9oZWFkcGhvbmUvcGFnZS50c3g/MmNmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IGZldGNoZ2V0QWxsSm9icyB9IGZyb20gXCJAL3JlZHV4L2FjdGlvblwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIkAvVHlwZS90eXBlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHBpIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL3Byb2R1Y3QteHg5OS1tYXJrLW9uZS1oZWFkcGhvbmVzL21vYmlsZS9pbWFnZS1wcm9kdWN0LmpwZ1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vX0NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9fQ29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEhlYWRwaG9uZUl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbmA7XG5jb25zdCBEZXRhaWwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjNzEwMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbmA7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuam9iLmpvYik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaGdldEFsbEpvYnMoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICBjb25zdCBoZWFkcGhvbmUgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gXCJoZWFkcGhvbmVzXCIpO1xuICBjb25zb2xlLmxvZyhoZWFkcGhvbmUsIFwiaGVhZHBob25lc1wiKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldC5pZDsgXG4gICAgZGlzcGF0Y2godXBkYXRlU2VsZWN0ZWRJZCh0YXJnZXQpKTtcbiAgfTtcbiAgY29uc29sZS5sb2coaWRkLCBcImNsaWNrXCIpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICB7aGVhZHBob25lLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8SGVhZHBob25lSXRlbXMga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZS5tb2JpbGV9IGFsdD1cInRlc3RcIiB3aWR0aD17MzUwfSBoZWlnaHQ9ezM1MH0gLz5cbiAgICAgICAgICA8RGV0YWlsPlxuICAgICAgICAgICAgPGgxPntpdGVtLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxidXR0b24+c2VlIHByb2R1Y3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L0RldGFpbD5cbiAgICAgICAgPC9IZWFkcGhvbmVJdGVtcz5cbiAgICAgICkpfVxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcbiJdLCJuYW1lcyI6WyJmZXRjaGdldEFsbEpvYnMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJOYXZiYXIiLCJGb290ZXIiLCJzdHlsZWQiLCJIZWFkcGhvbmVJdGVtcyIsImRpdiIsIkRldGFpbCIsInBhZ2UiLCJkYXRhIiwic3RhdGUiLCJqb2IiLCJkaXNwYXRjaCIsImhlYWRwaG9uZSIsImZpbHRlciIsIml0ZW0iLCJjYXRlZ29yeSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsImUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ1cGRhdGVTZWxlY3RlZElkIiwiaWRkIiwibWFwIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJtb2JpbGUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/headphone/page.tsx\n"));

/***/ })

});