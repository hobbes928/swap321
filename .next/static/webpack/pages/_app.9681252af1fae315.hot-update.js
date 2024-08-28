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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// src/styles/theme.ts\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% { opacity: 1; }\\n  50% { opacity: 0.5; }\\n  100% { opacity: 1; }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst neonPulse = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject());\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    colors: {\n        brand: {\n            purple: \"#800080\",\n            indigo: \"#4B0082\",\n            darkBlue: \"#191970\",\n            cyan: \"#00FFFF\"\n        }\n    },\n    fonts: {\n        heading: \"Inter, sans-serif\",\n        body: \"Inter, sans-serif\"\n    },\n    styles: {\n        global: {\n            body: {\n                bg: \"black\",\n                color: \"white\"\n            }\n        }\n    },\n    components: {\n        Button: {\n            baseStyle: {\n                fontWeight: \"bold\"\n            },\n            variants: {\n                solid: {\n                    bg: \"brand.purple\",\n                    color: \"white\",\n                    _hover: {\n                        bg: \"brand.indigo\"\n                    }\n                },\n                outline: {\n                    borderColor: \"brand.cyan\",\n                    color: \"brand.cyan\",\n                    _hover: {\n                        bg: \"brand.cyan\",\n                        color: \"black\"\n                    }\n                }\n            }\n        },\n        Text: {\n            baseStyle: {\n                color: \"white\"\n            }\n        }\n    },\n    animations: {\n        neonPulse: \"\".concat(neonPulse, \" 2s infinite\")\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHNCQUFzQjs7Ozs7Ozs7Ozs7QUFDeUI7QUFDRjtBQUU3QyxNQUFNRSxZQUFZRCwyREFBU0E7QUFNM0IsTUFBTUUsUUFBUUgsNkRBQVdBLENBQUM7SUFDeEJJLFFBQVE7UUFDTkMsT0FBTztZQUNMQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxNQUFNO1FBQ1I7SUFDRjtJQUNBQyxPQUFPO1FBQ0xDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0FDLFFBQVE7UUFDTkMsUUFBUTtZQUNORixNQUFNO2dCQUNKRyxJQUFJO2dCQUNKQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBQ0FDLFlBQVk7UUFDVkMsUUFBUTtZQUNOQyxXQUFXO2dCQUNUQyxZQUFZO1lBQ2Q7WUFDQUMsVUFBVTtnQkFDUkMsT0FBTztvQkFDTFAsSUFBSTtvQkFDSkMsT0FBTztvQkFDUE8sUUFBUTt3QkFDTlIsSUFBSTtvQkFDTjtnQkFDRjtnQkFDQVMsU0FBUztvQkFDUEMsYUFBYTtvQkFDYlQsT0FBTztvQkFDUE8sUUFBUTt3QkFDTlIsSUFBSTt3QkFDSkMsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7UUFDQVUsTUFBTTtZQUNKUCxXQUFXO2dCQUNUSCxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBQ0FXLFlBQVk7UUFDVnpCLFdBQVcsR0FBYSxPQUFWQSxXQUFVO0lBQzFCO0FBQ0Y7QUFFQSwrREFBZUMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3N0eWxlcy90aGVtZS50c1xuaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5jb25zdCBuZW9uUHVsc2UgPSBrZXlmcmFtZXNgXG4gIDAlIHsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjU7IH1cbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICBicmFuZDoge1xuICAgICAgcHVycGxlOiAnIzgwMDA4MCcsXG4gICAgICBpbmRpZ286ICcjNEIwMDgyJyxcbiAgICAgIGRhcmtCbHVlOiAnIzE5MTk3MCcsXG4gICAgICBjeWFuOiAnIzAwRkZGRicsXG4gICAgfSxcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiAnSW50ZXIsIHNhbnMtc2VyaWYnLFxuICAgIGJvZHk6ICdJbnRlciwgc2Fucy1zZXJpZicsXG4gIH0sXG4gIHN0eWxlczoge1xuICAgIGdsb2JhbDoge1xuICAgICAgYm9keToge1xuICAgICAgICBiZzogJ2JsYWNrJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBCdXR0b246IHtcbiAgICAgIGJhc2VTdHlsZToge1xuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICB9LFxuICAgICAgdmFyaWFudHM6IHtcbiAgICAgICAgc29saWQ6IHtcbiAgICAgICAgICBiZzogJ2JyYW5kLnB1cnBsZScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgX2hvdmVyOiB7XG4gICAgICAgICAgICBiZzogJ2JyYW5kLmluZGlnbycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiAnYnJhbmQuY3lhbicsXG4gICAgICAgICAgY29sb3I6ICdicmFuZC5jeWFuJyxcbiAgICAgICAgICBfaG92ZXI6IHtcbiAgICAgICAgICAgIGJnOiAnYnJhbmQuY3lhbicsXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFRleHQ6IHtcbiAgICAgIGJhc2VTdHlsZToge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYW5pbWF0aW9uczoge1xuICAgIG5lb25QdWxzZTogYCR7bmVvblB1bHNlfSAycyBpbmZpbml0ZWAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwia2V5ZnJhbWVzIiwibmVvblB1bHNlIiwidGhlbWUiLCJjb2xvcnMiLCJicmFuZCIsInB1cnBsZSIsImluZGlnbyIsImRhcmtCbHVlIiwiY3lhbiIsImZvbnRzIiwiaGVhZGluZyIsImJvZHkiLCJzdHlsZXMiLCJnbG9iYWwiLCJiZyIsImNvbG9yIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsImJhc2VTdHlsZSIsImZvbnRXZWlnaHQiLCJ2YXJpYW50cyIsInNvbGlkIiwiX2hvdmVyIiwib3V0bGluZSIsImJvcmRlckNvbG9yIiwiVGV4dCIsImFuaW1hdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n"));

/***/ })

});