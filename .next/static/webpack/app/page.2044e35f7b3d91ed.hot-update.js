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

/***/ "(app-pages-browser)/./app/_Components/InfoHomePage/infoHomePage.style.ts":
/*!************************************************************!*\
  !*** ./app/_Components/InfoHomePage/infoHomePage.style.ts ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InfoImg: function() { return /* binding */ InfoImg; },\n/* harmony export */   Infos: function() { return /* binding */ Infos; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: transparent;\\n  border-radius: 10px;\\n  width: 330px;\\n  margin: 0;\\n  @media screen and (min-width: 760px) {\\n    width: 850px;\\n    height: 350px;\\n  }\\n  @media screen and (min-width: 1440px) {\\n    width: 550px;\\n    height: 650px;\\n    position: relative;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 330px;\\n  top: 250px;\\n  left: 2px;\\n  display: flex;\\n  flex-direction: row-reverse;\\n  flex-wrap: wrap;\\n  position: relative;\\n  justify-content: center;\\n  text-align: center;\\n  line-height: 30px;\\n  @media screen and (min-width: 760px) {\\n    width: 700px;\\n    margin-top: -210px;\\n    left: 15px;\\n  }\\n  @media screen and (min-width: 1440px) {\\n    margin-top: 100px;\\n    /* left: 50px; */\\n    left: 21%;\\n    flex-wrap: nowrap;\\n    align-items: center;\\n    text-align: start;\\n  }\\n  & p {\\n    color: grey;\\n    @media screen and (min-width: 760px) {\\n      width: 500px;\\n    }\\n  }\\n  & h1 {\\n    @media screen and (min-width: 760px) {\\n      width: 500px;\\n    }\\n    @media screen and (min-width: 1440px) {\\n      width: 550px;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst InfoImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_templateObject());\nconst Infos = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fQ29tcG9uZW50cy9JbmZvSG9tZVBhZ2UvaW5mb0hvbWVQYWdlLnN0eWxlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBRWhDLE1BQU1FLFVBQVVELDZEQUFNQSxDQUFDRCxrREFBS0EscUJBY2pDO0FBQ0ssTUFBTUcsUUFBUUYseURBQU1BLENBQUNHLEdBQUcscUJBc0M3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX0NvbXBvbmVudHMvSW5mb0hvbWVQYWdlL2luZm9Ib21lUGFnZS5zdHlsZS50cz9mYjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEluZm9JbWcgPSBzdHlsZWQoSW1hZ2UpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBtYXJnaW46IDA7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2MHB4KSB7XG4gICAgd2lkdGg6IDg1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgd2lkdGg6IDU1MHB4O1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IEluZm9zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMzMHB4O1xuICB0b3A6IDI1MHB4O1xuICBsZWZ0OiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW4tdG9wOiAtMjEwcHg7XG4gICAgbGVmdDogMTVweDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAvKiBsZWZ0OiA1MHB4OyAqL1xuICAgIGxlZnQ6IDIxJTtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG4gICYgcCB7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzYwcHgpIHtcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICB9XG4gIH1cbiAgJiBoMSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzYwcHgpIHtcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgICB3aWR0aDogNTUwcHg7XG4gICAgfVxuICB9XG5gOyJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlZCIsIkluZm9JbWciLCJJbmZvcyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_Components/InfoHomePage/infoHomePage.style.ts\n"));

/***/ })

});