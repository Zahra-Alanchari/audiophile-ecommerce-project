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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/action */ \"(app-pages-browser)/./redux/action.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Components/Navbar */ \"(app-pages-browser)/./app/_Components/Navbar.tsx\");\n/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_Components/Footer */ \"(app-pages-browser)/./app/_Components/Footer.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _redux_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slice */ \"(app-pages-browser)/./redux/slice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 350px;\\n  margin: 50px auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  text-align: center;\\n  line-height: 30px;\\n  & button {\\n    width: 150px;\\n    height: 40px;\\n    border: 0;\\n    background-color: #cc7101;\\n    color: white;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst HeadphoneItems = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = HeadphoneItems;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1());\n_c1 = Detail;\nconst page = ()=>{\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.job.job);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.fetchgetAllJobs)());\n    }, [\n        dispatch\n    ]);\n    const headphone = data.filter((item)=>item.category === \"headphones\");\n    console.log(headphone, \"headphones\");\n    const handleClick = (e)=>{\n        const target = e.currentTarget.id;\n        dispatch((0,_redux_slice__WEBPACK_IMPORTED_MODULE_6__.updateSelectedId)(target));\n    };\n    const idd = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.job.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            headphone.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeadphoneItems, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: item.image.mobile,\n                            alt: \"test\",\n                            width: 350,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    id: String(item.id),\n                                    onClick: handleClick,\n                                    children: \"see product\"\n                                }, item.id, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/headphone/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"Xaki/kk+sLICkjys5613nLe7sUA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\nvar _c, _c1;\n$RefreshReg$(_c, \"HeadphoneItems\");\n$RefreshReg$(_c1, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWFkcGhvbmUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUQ7QUFJUjtBQUNjO0FBRVo7QUFDQTtBQUNKO0FBQ1U7QUFFakQsTUFBTVMsaUJBQWlCRix5REFBTUEsQ0FBQ0csR0FBRztLQUEzQkQ7QUFJTixNQUFNRSxTQUFTSix5REFBTUEsQ0FBQ0csR0FBRztNQUFuQkM7QUFnQk4sTUFBTUMsT0FBTzs7SUFDWCxNQUFNQyxPQUFPVCx3REFBV0EsQ0FBQyxDQUFDVSxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDQSxHQUFHO0lBQzVELE1BQU1DLFdBQVdiLHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDUmMsU0FBU2hCLDhEQUFlQTtJQUMxQixHQUFHO1FBQUNnQjtLQUFTO0lBQ2IsTUFBTUMsWUFBWUosS0FBS0ssTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLFFBQVEsS0FBSztJQUMxREMsUUFBUUMsR0FBRyxDQUFDTCxXQUFXO0lBRXZCLE1BQU1NLGNBQWMsQ0FBQ0M7UUFDbkIsTUFBTUMsU0FBU0QsRUFBRUUsYUFBYSxDQUFDQyxFQUFFO1FBQ2pDWCxTQUFTUiw4REFBZ0JBLENBQUNpQjtJQUM1QjtJQUNBLE1BQU1HLE1BQU14Qix3REFBV0EsQ0FBQyxDQUFDVSxRQUFxQkEsTUFBTUMsR0FBRyxDQUFDWSxFQUFFO0lBQzFELHFCQUNFOzswQkFDRSw4REFBQ3RCLDBEQUFNQTs7Ozs7WUFDTlksVUFBVVksR0FBRyxDQUFDLENBQUNWLHFCQUNkLDhEQUFDVjs7c0NBQ0MsOERBQUNxQjs0QkFBSUMsS0FBS1osS0FBS2EsS0FBSyxDQUFDQyxNQUFNOzRCQUFFQyxLQUFJOzRCQUFPQyxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7c0NBQzVELDhEQUFDekI7OzhDQUNDLDhEQUFDMEI7OENBQUlsQixLQUFLbUIsSUFBSTs7Ozs7OzhDQUNkLDhEQUFDQzs4Q0FBR3BCLEtBQUtxQixXQUFXOzs7Ozs7OENBQ3BCLDhEQUFDQztvQ0FBT2QsSUFBSWUsT0FBT3ZCLEtBQUtRLEVBQUU7b0NBQWlCZ0IsU0FBU3BCOzhDQUFhO21DQUEvQkosS0FBS1EsRUFBRTs7Ozs7Ozs7Ozs7O21CQUx4QlIsS0FBS1EsRUFBRTs7Ozs7MEJBUzlCLDhEQUFDckIsMERBQU1BOzs7Ozs7O0FBR2I7R0EvQk1NOztRQUNTUixvREFBV0E7UUFDUEQsb0RBQVdBO1FBWWhCQyxvREFBV0E7OztBQW1CekIsK0RBQWVRLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hlYWRwaG9uZS9wYWdlLnRzeD8yY2Y1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgZmV0Y2hnZXRBbGxKb2JzIH0gZnJvbSBcIkAvcmVkdXgvYWN0aW9uXCI7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gXCJAL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiQC9UeXBlL3R5cGVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgcGkgZnJvbSBcIi4uLy4uL3B1YmxpYy9hc3NldHMvcHJvZHVjdC14eDk5LW1hcmstb25lLWhlYWRwaG9uZXMvbW9iaWxlL2ltYWdlLXByb2R1Y3QuanBnXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9fQ29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL19Db21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVwZGF0ZVNlbGVjdGVkSWQgfSBmcm9tIFwiQC9yZWR1eC9zbGljZVwiO1xuXG5jb25zdCBIZWFkcGhvbmVJdGVtcyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG5gO1xuY29uc3QgRGV0YWlsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgJiBidXR0b24ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzcxMDE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmpvYi5qb2IpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hnZXRBbGxKb2JzKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgY29uc3QgaGVhZHBob25lID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09IFwiaGVhZHBob25lc1wiKTtcbiAgY29uc29sZS5sb2coaGVhZHBob25lLCBcImhlYWRwaG9uZXNcIik7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7IFxuICAgIGRpc3BhdGNoKHVwZGF0ZVNlbGVjdGVkSWQodGFyZ2V0KSk7XG4gIH07XG4gIGNvbnN0IGlkZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5qb2IuaWQpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICB7aGVhZHBob25lLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8SGVhZHBob25lSXRlbXMga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZS5tb2JpbGV9IGFsdD1cInRlc3RcIiB3aWR0aD17MzUwfSBoZWlnaHQ9ezM1MH0gLz5cbiAgICAgICAgICA8RGV0YWlsPlxuICAgICAgICAgICAgPGgxPntpdGVtLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e1N0cmluZyhpdGVtLmlkKX0ga2V5PXtpdGVtLmlkfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+c2VlIHByb2R1Y3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L0RldGFpbD5cbiAgICAgICAgPC9IZWFkcGhvbmVJdGVtcz5cbiAgICAgICkpfVxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcbiJdLCJuYW1lcyI6WyJmZXRjaGdldEFsbEpvYnMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJOYXZiYXIiLCJGb290ZXIiLCJzdHlsZWQiLCJ1cGRhdGVTZWxlY3RlZElkIiwiSGVhZHBob25lSXRlbXMiLCJkaXYiLCJEZXRhaWwiLCJwYWdlIiwiZGF0YSIsInN0YXRlIiwiam9iIiwiZGlzcGF0Y2giLCJoZWFkcGhvbmUiLCJmaWx0ZXIiLCJpdGVtIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJlIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlkIiwiaWRkIiwibWFwIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJtb2JpbGUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIlN0cmluZyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/headphone/page.tsx\n"));

/***/ })

});