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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Components/Navbar */ \"(app-pages-browser)/./app/_Components/Navbar.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_Components/Footer */ \"(app-pages-browser)/./app/_Components/Footer.tsx\");\n/* harmony import */ var _redux_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slice */ \"(app-pages-browser)/./redux/slice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: #cc7101;\\n    color: white;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n// import { RootState } from '@reduxjs/toolkit/query';\n\n\n\n\n\n\nconst SpeakerItems = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = SpeakerItems;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1());\n_c1 = Detail;\nconst page = ()=>{\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const speaker = data.filter((item)=>item.category === \"speakers\");\n    console.log(speaker, \"speaker\");\n    const handleClick = (e)=>{\n        const target = e.currentTarget.id;\n        dispatch((0,_redux_slice__WEBPACK_IMPORTED_MODULE_6__.updateSelectedId)(target));\n    };\n    const idd = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.job.id);\n    console.log(idd, \"idss\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/speaker/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            speaker.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerItems, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: item.image.mobile,\n                            alt: \"test\",\n                            width: 350,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/speaker/page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/speaker/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/speaker/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    id: String(item.id),\n                                    onClick: handleClick,\n                                    children: \"see product\"\n                                }, item.id, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/speaker/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/speaker/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/speaker/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/speaker/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"Xaki/kk+sLICkjys5613nLe7sUA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\nvar _c, _c1;\n$RefreshReg$(_c, \"SpeakerItems\");\n$RefreshReg$(_c1, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zcGVha2VyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBR2pELHNEQUFzRDtBQUNiO0FBQ2M7QUFDWjtBQUNKO0FBQ0k7QUFDTTtBQUVqRCxNQUFNUyxlQUFlSCx5REFBTUEsQ0FBQ0ksR0FBRztLQUF6QkQ7QUFJTixNQUFNRSxTQUFTTCx5REFBTUEsQ0FBQ0ksR0FBRztNQUFuQkM7QUFnQk4sTUFBTUMsT0FBTzs7SUFFVCxNQUFNQyxPQUFPVCx3REFBV0EsQ0FBQyxDQUFDVSxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDQSxHQUFHO0lBQzVELE1BQU1DLFdBQVdiLHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDUmMsU0FBU2hCLDhEQUFlQTtJQUMxQixHQUFHO1FBQUNnQjtLQUFTO0lBQ2IsTUFBTUMsVUFBVUosS0FBS0ssTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLFFBQVEsS0FBSztJQUN4REMsUUFBUUMsR0FBRyxDQUFDTCxTQUFTO0lBRXJCLE1BQU1NLGNBQWMsQ0FBQ0M7UUFDbkIsTUFBTUMsU0FBU0QsRUFBRUUsYUFBYSxDQUFDQyxFQUFFO1FBQ2pDWCxTQUFTUiw4REFBZ0JBLENBQUNpQjtJQUM1QjtJQUNBLE1BQU1HLE1BQU14Qix3REFBV0EsQ0FBQyxDQUFDVSxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDWSxFQUFFO0lBQzVETixRQUFRQyxHQUFHLENBQUNNLEtBQUk7SUFDZCxxQkFDSTs7MEJBQ0YsOERBQUN2QiwwREFBTUE7Ozs7O1lBQ05ZLFFBQVFZLEdBQUcsQ0FBQyxDQUFDVixxQkFDWiw4REFBQ1Y7O3NDQUNDLDhEQUFDcUI7NEJBQUlDLEtBQUtaLEtBQUthLEtBQUssQ0FBQ0MsTUFBTTs0QkFBRUMsS0FBSTs0QkFBT0MsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7O3NDQUM1RCw4REFBQ3pCOzs4Q0FDQyw4REFBQzBCOzhDQUFJbEIsS0FBS21CLElBQUk7Ozs7Ozs4Q0FDZCw4REFBQ0M7OENBQUdwQixLQUFLcUIsV0FBVzs7Ozs7OzhDQUNwQiw4REFBQ0M7b0NBQU9kLElBQUllLE9BQU92QixLQUFLUSxFQUFFO29DQUFpQmdCLFNBQVNwQjs4Q0FBYTttQ0FBL0JKLEtBQUtRLEVBQUU7Ozs7Ozs7Ozs7OzttQkFMMUJSLEtBQUtRLEVBQUU7Ozs7OzBCQVM1Qiw4REFBQ3BCLDBEQUFNQTs7Ozs7OztBQUdiO0dBakNNSzs7UUFFV1Isb0RBQVdBO1FBQ1BELG9EQUFXQTtRQVloQkMsb0RBQVdBOzs7QUFvQjNCLCtEQUFlUSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zcGVha2VyL3BhZ2UudHN4PzA4ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IGZldGNoZ2V0QWxsSm9icyB9IGZyb20gJ0AvcmVkdXgvYWN0aW9uJztcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnQC9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAL1R5cGUvdHlwZSc7XG4vLyBpbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL19Db21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vX0NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IHVwZGF0ZVNlbGVjdGVkSWQgfSBmcm9tICdAL3JlZHV4L3NsaWNlJztcblxuY29uc3QgU3BlYWtlckl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbmA7XG5jb25zdCBEZXRhaWwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjNzEwMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbmA7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmpvYi5qb2IpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaGdldEFsbEpvYnMoKSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgY29uc3Qgc3BlYWtlciA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSBcInNwZWFrZXJzXCIpO1xuICAgIGNvbnNvbGUubG9nKHNwZWFrZXIsIFwic3BlYWtlclwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7IFxuICAgICAgZGlzcGF0Y2godXBkYXRlU2VsZWN0ZWRJZCh0YXJnZXQpKTtcbiAgICB9O1xuICAgIGNvbnN0IGlkZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5qb2IuaWQpO1xuICBjb25zb2xlLmxvZyhpZGQsXCJpZHNzXCIpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIHtzcGVha2VyLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8U3BlYWtlckl0ZW1zIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2UubW9iaWxlfSBhbHQ9XCJ0ZXN0XCIgd2lkdGg9ezM1MH0gaGVpZ2h0PXszNTB9IC8+XG4gICAgICAgICAgPERldGFpbD5cbiAgICAgICAgICAgIDxoMT57aXRlbS5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtTdHJpbmcoaXRlbS5pZCl9IGtleT17aXRlbS5pZH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PnNlZSBwcm9kdWN0PC9idXR0b24+XG4gICAgICAgICAgPC9EZXRhaWw+XG4gICAgICAgIDwvU3BlYWtlckl0ZW1zPlxuICAgICAgKSl9XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7Il0sIm5hbWVzIjpbImZldGNoZ2V0QWxsSm9icyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIk5hdmJhciIsInN0eWxlZCIsIkZvb3RlciIsInVwZGF0ZVNlbGVjdGVkSWQiLCJTcGVha2VySXRlbXMiLCJkaXYiLCJEZXRhaWwiLCJwYWdlIiwiZGF0YSIsInN0YXRlIiwiam9iIiwiZGlzcGF0Y2giLCJzcGVha2VyIiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImlkZCIsIm1hcCIsImltZyIsInNyYyIsImltYWdlIiwibW9iaWxlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsIm5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJTdHJpbmciLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/speaker/page.tsx\n"));

/***/ })

});