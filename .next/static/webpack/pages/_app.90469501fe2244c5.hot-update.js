"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// src/styles/theme.ts\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        brand: {\n            neonPurple: \"#B026FF\",\n            neonBlue: \"#4D4DFF\",\n            neonPink: \"#FF6EC7\",\n            neonGreen: \"#39FF14\"\n        }\n    },\n    fonts: {\n        heading: \"var(--font-suisse-intl)\",\n        body: \"var(--font-suisse-intl)\"\n    },\n    styles: {\n        global: {\n            body: {\n                bg: \"black\",\n                color: \"white\"\n            }\n        }\n    },\n    components: {\n        Button: {\n            baseStyle: {\n                fontWeight: \"bold\"\n            },\n            variants: {\n                solid: {\n                    bg: \"brand.neonPurple\",\n                    color: \"white\",\n                    _hover: {\n                        bg: \"brand.neonPink\"\n                    }\n                }\n            }\n        },\n        Text: {\n            baseStyle: {\n                color: \"white\"\n            }\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsc0JBQXNCO0FBQ3dCO0FBRTlDLE1BQU1DLFFBQVFELDZEQUFXQSxDQUFDO0lBQ3hCRSxRQUFRO1FBQ05DLE9BQU87WUFDTEMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsV0FBVztRQUNiO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBQyxRQUFRO1FBQ05DLFFBQVE7WUFDTkYsTUFBTTtnQkFDSkcsSUFBSTtnQkFDSkMsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUNBQyxZQUFZO1FBQ1ZDLFFBQVE7WUFDTkMsV0FBVztnQkFDVEMsWUFBWTtZQUNkO1lBQ0FDLFVBQVU7Z0JBQ1JDLE9BQU87b0JBQ0xQLElBQUk7b0JBQ0pDLE9BQU87b0JBQ1BPLFFBQVE7d0JBQ05SLElBQUk7b0JBQ047Z0JBQ0Y7WUFDRjtRQUNGO1FBQ0FTLE1BQU07WUFDSkwsV0FBVztnQkFDVEgsT0FBTztZQUNUO1FBQ0Y7SUFDRjtBQUNGO0FBRUEsK0RBQWViLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy90aGVtZS50cz81MTYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zdHlsZXMvdGhlbWUudHNcbmltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbG9yczoge1xuICAgIGJyYW5kOiB7XG4gICAgICBuZW9uUHVycGxlOiAnI0IwMjZGRicsXG4gICAgICBuZW9uQmx1ZTogJyM0RDRERkYnLFxuICAgICAgbmVvblBpbms6ICcjRkY2RUM3JyxcbiAgICAgIG5lb25HcmVlbjogJyMzOUZGMTQnLFxuICAgIH0sXG4gIH0sXG4gIGZvbnRzOiB7XG4gICAgaGVhZGluZzogJ3ZhcigtLWZvbnQtc3Vpc3NlLWludGwpJyxcbiAgICBib2R5OiAndmFyKC0tZm9udC1zdWlzc2UtaW50bCknLFxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6IHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgYmc6ICdibGFjaycsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQnV0dG9uOiB7XG4gICAgICBiYXNlU3R5bGU6IHtcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgfSxcbiAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgIHNvbGlkOiB7XG4gICAgICAgICAgYmc6ICdicmFuZC5uZW9uUHVycGxlJyxcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBfaG92ZXI6IHtcbiAgICAgICAgICAgIGJnOiAnYnJhbmQubmVvblBpbmsnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgVGV4dDoge1xuICAgICAgYmFzZVN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJ0aGVtZSIsImNvbG9ycyIsImJyYW5kIiwibmVvblB1cnBsZSIsIm5lb25CbHVlIiwibmVvblBpbmsiLCJuZW9uR3JlZW4iLCJmb250cyIsImhlYWRpbmciLCJib2R5Iiwic3R5bGVzIiwiZ2xvYmFsIiwiYmciLCJjb2xvciIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJiYXNlU3R5bGUiLCJmb250V2VpZ2h0IiwidmFyaWFudHMiLCJzb2xpZCIsIl9ob3ZlciIsIlRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n"));

/***/ })

});