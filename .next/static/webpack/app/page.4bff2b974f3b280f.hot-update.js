"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/_Components/Speakers.tsx":
/*!**************************************!*\
  !*** ./app/_Components/Speakers.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_assets_home_desktop_pattern_circles_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/home/desktop/pattern-circles.svg */ \"(app-pages-browser)/./public/assets/home/desktop/pattern-circles.svg\");\n/* harmony import */ var _public_assets_home_mobile_image_speaker_zx9_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/home/mobile/image-speaker-zx9.png */ \"(app-pages-browser)/./public/assets/home/mobile/image-speaker-zx9.png\");\n/* harmony import */ var _public_assets_home_tablet_image_speaker_zx7_removebg_preview_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/home/tablet/image-speaker-zx7-removebg-preview.png */ \"(app-pages-browser)/./public/assets/home/tablet/image-speaker-zx7-removebg-preview.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  width: 200px;\\n  height: 210px;\\n  top: 100px;\\n  left: 50%;\\n  transform: translatex(-50%);\\n  background-color: transparent;\\n  @media screen and (min-width: 1440px) {\\n    top: 100px;\\n    left: 30%;\\n    width: 300px;\\n    height: 410px;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  right: -115px;\\n  background-color: transparent;\\n  @media screen and (min-width: 760px) {\\n    right: 0px;\\n    top: 0;\\n  }\\n  @media screen and (min-width: 1440px) {\\n    width: 900px;\\n    height: 300px;\\n    top: -30px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: #cc7101;\\n  border-radius: 10px;\\n  width: 250px;\\n  height: 500px;\\n  margin-top: 50px;\\n  position: relative;\\n  padding: 50px;\\n  overflow: hidden;\\n  @media screen and (min-width: 760px) {\\n    width: 615px;\\n  }\\n  @media screen and (min-width: 1440px) {\\n    width: 1020px;\\n    height: 400px;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: #dfdfdf;\\n  border-radius: 10px;\\n  width: 250px;\\n  height: 200px;\\n  margin-top: 100px;\\n  position: relative;\\n  padding: 50px;\\n  overflow: hidden;\\n  @media screen and (min-width: 760px) {\\n    width: 620px;\\n    margin-top: 50px;\\n    height: 150px;\\n  }\\n  @media screen and (min-width: 1440px) {\\n    width: 1020px;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 330px;\\n  left: 50%;\\n  transform: translatex(-50%);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  & h2 {\\n    width: 100px;\\n    color: white;\\n    text-align: center;\\n  }\\n  & p {\\n    color: #f8cf83;\\n    width: 250px;\\n    text-align: center;\\n    line-height: 20px;\\n  }\\n  & button {\\n    width: 150px;\\n    background-color: black;\\n    color: white;\\n    height: 50px;\\n    border: 0;\\n    cursor: pointer;\\n  }\\n  @media screen and (min-width: 1440px) {\\n    top: 100px;\\n    left: 70%;\\n    align-items: flex-start;\\n    font-size: 1.5rem;\\n    width: 200px;\\n    & p {\\n      text-align: start;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 100px;\\n  left: 15%;\\n  & button {\\n    width: 150px;\\n    border: 1px solid black;\\n    color: black;\\n    height: 50px;\\n    background-color: transparent;\\n    font-weight: bold;\\n    cursor: pointer;\\n  }\\n  @media screen and (min-width: 1440px) {\\n    top: 50px;\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  left: -125px;\\n  top: -120px;\\n  @media screen and (min-width: 760px) {\\n    left: 60px;\\n    top: -115px;\\n  }\\n  @media screen and (min-width: 1440px) {\\n    left: 30px;\\n    top: 120px;\\n  }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\n\nconst SpeakerZX9Img = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject());\n_c = SpeakerZX9Img;\nconst SpeakerZX7Img = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject1());\n_c1 = SpeakerZX7Img;\nconst ProductZX9 = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject2());\n_c2 = ProductZX9;\nconst ProductZX7 = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject3());\n_c3 = ProductZX7;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject4());\n_c4 = Detail;\nconst DetailZX7 = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject5());\n_c5 = DetailZX7;\nconst PatternLogo = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject6());\n_c6 = PatternLogo;\nconst Speakers = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductZX9, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerZX9Img, {\n                        src: _public_assets_home_mobile_image_speaker_zx9_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"test\",\n                        width: 300,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PatternLogo, {\n                        src: _public_assets_home_desktop_pattern_circles_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        width: 600,\n                        height: 650,\n                        alt: \"test2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: \"ZX9 SPEAKER\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                                lineNumber: 161,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: \"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                href: \"/speaker/zx9-speaker\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    children: \" SEE PRODUCT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                                    lineNumber: 167,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                                lineNumber: 166,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductZX7, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerZX7Img, {\n                        src: _public_assets_home_tablet_image_speaker_zx7_removebg_preview_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        alt: \"test\",\n                        width: 450,\n                        height: 250\n                    }, void 0, false, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                        lineNumber: 172,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DetailZX7, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: \"ZX7 SPEAKER\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                                lineNumber: 179,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                href: \"/speaker/zx7-speaker\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    children: \" SEE PRODUCT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                                    lineNumber: 181,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                                lineNumber: 180,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahraalanchari/Desktop/audiophile-ecommerce-project/app/_Components/Speakers.tsx\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c7 = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"SpeakerZX9Img\");\n$RefreshReg$(_c1, \"SpeakerZX7Img\");\n$RefreshReg$(_c2, \"ProductZX9\");\n$RefreshReg$(_c3, \"ProductZX7\");\n$RefreshReg$(_c4, \"Detail\");\n$RefreshReg$(_c5, \"DetailZX7\");\n$RefreshReg$(_c6, \"PatternLogo\");\n$RefreshReg$(_c7, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fQ29tcG9uZW50cy9TcGVha2Vycy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNMO0FBQ2E7QUFDb0M7QUFDSTtBQUNpQjtBQUNuRTtBQUU3QixNQUFNTyxnQkFBZ0JMLDZEQUFNQSxDQUFDRixrREFBS0E7S0FBNUJPO0FBZU4sTUFBTUMsZ0JBQWdCTiw2REFBTUEsQ0FBQ0Ysa0RBQUtBO01BQTVCUTtBQWVOLE1BQU1DLGFBQWFQLHlEQUFNQSxDQUFDUSxHQUFHO01BQXZCRDtBQWlCTixNQUFNRSxhQUFhVCx5REFBTUEsQ0FBQ1EsR0FBRztNQUF2QkM7QUFtQk4sTUFBTUMsU0FBU1YseURBQU1BLENBQUNRLEdBQUc7TUFBbkJFO0FBc0NOLE1BQU1DLFlBQVlYLHlEQUFNQSxDQUFDUSxHQUFHO01BQXRCRztBQWlCTixNQUFNQyxjQUFjWiw2REFBTUEsQ0FBQ0Ysa0RBQUtBO01BQTFCYztBQWNOLE1BQU1DLFdBQVc7SUFDZixxQkFDRTs7MEJBQ0UsOERBQUNOOztrQ0FDQyw4REFBQ0Y7d0JBQ0NTLEtBQUtaLHdGQUFVQTt3QkFDZmEsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7O2tDQUVWLDhEQUFDTDt3QkFDQ0UsS0FBS2IsdUZBQU9BO3dCQUNaZSxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSRixLQUFJOzs7Ozs7a0NBRU4sOERBQUNMOzswQ0FDQyw4REFBQ1E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQUU7Ozs7OzswQ0FJSCw4REFBQ2YsaURBQUlBO2dDQUFDZ0IsTUFBTTswQ0FDViw0RUFBQ0M7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlkLDhEQUFDWjs7a0NBQ0MsOERBQUNIO3dCQUNDUSxLQUFLWCx5R0FBVUE7d0JBQ2ZZLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7Ozs7OztrQ0FFViw4REFBQ047OzBDQUNDLDhEQUFDTzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDZCxpREFBSUE7Z0NBQUNnQixNQUFNOzBDQUNWLDRFQUFDQzs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtNQTNDTVI7QUE2Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19Db21wb25lbnRzL1NwZWFrZXJzLnRzeD83ODUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBwYXR0ZXJuIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2hvbWUvZGVza3RvcC9wYXR0ZXJuLWNpcmNsZXMuc3ZnXCI7XG5pbXBvcnQgc3BlYWtlclpYOSBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9ob21lL21vYmlsZS9pbWFnZS1zcGVha2VyLXp4OS5wbmdcIjtcbmltcG9ydCBzcGVha2VyWlg3IGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2hvbWUvdGFibGV0L2ltYWdlLXNwZWFrZXIteng3LXJlbW92ZWJnLXByZXZpZXcucG5nXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFNwZWFrZXJaWDlJbWcgPSBzdHlsZWQoSW1hZ2UpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDMwJTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0MTBweDtcbiAgfVxuYDtcbmNvbnN0IFNwZWFrZXJaWDdJbWcgPSBzdHlsZWQoSW1hZ2UpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiAwO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIHdpZHRoOiA5MDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHRvcDogLTMwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFByb2R1Y3RaWDkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M3MTAxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzYwcHgpIHtcbiAgICB3aWR0aDogNjE1cHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgd2lkdGg6IDEwMjBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG5gO1xuY29uc3QgUHJvZHVjdFpYNyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzYwcHgpIHtcbiAgICB3aWR0aDogNjIwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIHdpZHRoOiAxMDIwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IERldGFpbCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMzBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgaDIge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICYgcCB7XG4gICAgY29sb3I6ICNmOGNmODM7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAmIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDcwJTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgJiBwIHtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IERldGFpbFpYNyA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogMTUlO1xuICAmIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIHRvcDogNTBweDtcbiAgfVxuYDtcbmNvbnN0IFBhdHRlcm5Mb2dvID0gc3R5bGVkKEltYWdlKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTI1cHg7XG4gIHRvcDogLTEyMHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgdG9wOiAtMTE1cHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgbGVmdDogMzBweDtcbiAgICB0b3A6IDEyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFByb2R1Y3RaWDk+XG4gICAgICAgIDxTcGVha2VyWlg5SW1nXG4gICAgICAgICAgc3JjPXtzcGVha2VyWlg5fVxuICAgICAgICAgIGFsdD1cInRlc3RcIlxuICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgID48L1NwZWFrZXJaWDlJbWc+XG4gICAgICAgIDxQYXR0ZXJuTG9nb1xuICAgICAgICAgIHNyYz17cGF0dGVybn1cbiAgICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICAgIGhlaWdodD17NjUwfVxuICAgICAgICAgIGFsdD1cInRlc3QyXCJcbiAgICAgICAgPjwvUGF0dGVybkxvZ28+XG4gICAgICAgIDxEZXRhaWw+XG4gICAgICAgICAgPGgyPlpYOSBTUEVBS0VSPC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFVwZ3JhZGUgdG8gcHJlbWl1bSBzcGVha2VycyB0aGF0IGFyZSBwaGVub21lbmFsbHkgYnVpbHQgdG8gZGVsaXZlclxuICAgICAgICAgICAgdHJ1bHkgcmVtYXJrYWJsZSBzb3VuZC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvc3BlYWtlci96eDktc3BlYWtlclwifT5cbiAgICAgICAgICAgIDxidXR0b24+IFNFRSBQUk9EVUNUPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0RldGFpbD5cbiAgICAgIDwvUHJvZHVjdFpYOT5cbiAgICAgIDxQcm9kdWN0Wlg3PlxuICAgICAgICA8U3BlYWtlclpYN0ltZ1xuICAgICAgICAgIHNyYz17c3BlYWtlclpYN31cbiAgICAgICAgICBhbHQ9XCJ0ZXN0XCJcbiAgICAgICAgICB3aWR0aD17NDUwfVxuICAgICAgICAgIGhlaWdodD17MjUwfVxuICAgICAgICA+PC9TcGVha2VyWlg3SW1nPlxuICAgICAgICA8RGV0YWlsWlg3PlxuICAgICAgICAgIDxoMj5aWDcgU1BFQUtFUjwvaDI+XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvc3BlYWtlci96eDctc3BlYWtlclwifT5cbiAgICAgICAgICAgIDxidXR0b24+IFNFRSBQUk9EVUNUPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0RldGFpbFpYNz5cbiAgICAgIDwvUHJvZHVjdFpYNz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJzdHlsZWQiLCJwYXR0ZXJuIiwic3BlYWtlclpYOSIsInNwZWFrZXJaWDciLCJMaW5rIiwiU3BlYWtlclpYOUltZyIsIlNwZWFrZXJaWDdJbWciLCJQcm9kdWN0Wlg5IiwiZGl2IiwiUHJvZHVjdFpYNyIsIkRldGFpbCIsIkRldGFpbFpYNyIsIlBhdHRlcm5Mb2dvIiwiU3BlYWtlcnMiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwicCIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_Components/Speakers.tsx\n"));

/***/ })

});