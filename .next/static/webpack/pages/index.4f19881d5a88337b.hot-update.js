/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Layout/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Footer.tsx ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_Layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Header */ \"./src/components/Layout/Header.tsx\");\n/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Footer */ \"./src/components/Layout/Footer.tsx\");\n/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaEthereum_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaEthereum!=!react-icons/fa */ \"__barrel_optimize__?names=FaEthereum!=!./node_modules/react-icons/fa/index.mjs\");\n\n\n\n\n\n\n\nconst MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box);\n_c = MotionBox;\nconst LiveOrder = (param)=>{\n    let { index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {\n        initial: {\n            opacity: 0,\n            y: 50\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5,\n            delay: index * 0.1\n        },\n        whileHover: {\n            scale: 1.05,\n            boxShadow: \"0px 0px 8px rgb(255,255,255)\"\n        },\n        bg: \"rgba(60, 60, 60, 0.6)\",\n        p: 4,\n        borderRadius: \"md\",\n        w: \"100%\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    children: \"0x1234...5678\"\n                }, void 0, false, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaEthereum_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaEthereum, {}, void 0, false, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            ml: 2,\n                            children: \"ETH ⇒ USD\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    children: \"\".concat(Math.floor(Math.random() * 24), \":\").concat(Math.floor(Math.random() * 60), \":\").concat(Math.floor(Math.random() * 60))\n                }, void 0, false, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = LiveOrder;\nconst HomePage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        position: \"relative\",\n        minHeight: \"100vh\",\n        overflow: \"hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                position: \"absolute\",\n                top: 0,\n                left: 0,\n                right: 0,\n                bottom: 0,\n                bgGradient: \"radial(circle, brand.neonPurple, brand.neonBlue, brand.neonPink)\",\n                opacity: 0.1,\n                animation: \"neonPulse 2s infinite\"\n            }, void 0, false, {\n                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxW: \"container.xl\",\n                centerContent: true,\n                py: 8,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                    spacing: 8,\n                    align: \"center\",\n                    w: \"100%\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            fontSize: \"2xl\",\n                            fontWeight: \"bold\",\n                            color: \"brand.neonGreen\",\n                            children: \"Live Orders\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                            spacing: 4,\n                            w: \"100%\",\n                            children: [\n                                ...Array(5)\n                            ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LiveOrder, {\n                                    index: index\n                                }, index, false, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MotionBox\");\n$RefreshReg$(_c1, \"LiveOrder\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUN3QjtBQUNmO0FBQ0E7QUFDVjtBQUNLO0FBRTVDLE1BQU1TLFlBQVlGLHFEQUFNQSxDQUFDTixpREFBR0E7S0FBdEJRO0FBRU4sTUFBTUMsWUFBeUM7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDdkQscUJBQ0UsOERBQUNGO1FBQ0NHLFNBQVM7WUFBRUMsU0FBUztZQUFHQyxHQUFHO1FBQUc7UUFDN0JDLFNBQVM7WUFBRUYsU0FBUztZQUFHQyxHQUFHO1FBQUU7UUFDNUJFLFlBQVk7WUFBRUMsVUFBVTtZQUFLQyxPQUFPUCxRQUFRO1FBQUk7UUFDaERRLFlBQVk7WUFBRUMsT0FBTztZQUFNQyxXQUFXO1FBQStCO1FBQ3JFQyxJQUFHO1FBQ0hDLEdBQUc7UUFDSEMsY0FBYTtRQUNiQyxHQUFFO2tCQUVGLDRFQUFDeEIsaURBQUdBO1lBQUN5QixTQUFRO1lBQU9DLGdCQUFlO1lBQWdCQyxZQUFXOzs4QkFDNUQsOERBQUN4QixrREFBSUE7OEJBQUM7Ozs7Ozs4QkFDTiw4REFBQ0gsaURBQUdBO29CQUFDeUIsU0FBUTtvQkFBT0UsWUFBVzs7c0NBQzdCLDhEQUFDcEIsd0ZBQVVBOzs7OztzQ0FDWCw4REFBQ0osa0RBQUlBOzRCQUFDeUIsSUFBSTtzQ0FBRzs7Ozs7Ozs7Ozs7OzhCQUVmLDhEQUFDekIsa0RBQUlBOzhCQUFFLEdBQXFDMEIsT0FBbENBLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLEtBQUksS0FBcUNGLE9BQWxDQSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxLQUFJLEtBQWtDLE9BQS9CRixLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakg7TUF0Qk10QjtBQXdCTixNQUFNdUIsV0FBcUI7SUFDekIscUJBQ0UsOERBQUNoQyxpREFBR0E7UUFBQ2lDLFVBQVM7UUFBV0MsV0FBVTtRQUFRQyxVQUFTOzswQkFDbEQsOERBQUNuQyxpREFBR0E7Z0JBQ0ZpQyxVQUFTO2dCQUNURyxLQUFLO2dCQUNMQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxZQUFXO2dCQUNYNUIsU0FBUztnQkFDVDZCLFdBQVU7Ozs7OzswQkFFWiw4REFBQ3ZDLHVEQUFTQTtnQkFBQ3dDLE1BQUs7Z0JBQWVDLGFBQWE7Z0JBQUNDLElBQUk7MEJBQy9DLDRFQUFDM0Msb0RBQU1BO29CQUFDNEMsU0FBUztvQkFBR0MsT0FBTTtvQkFBU3RCLEdBQUU7O3NDQUNuQyw4REFBQ3BCLGlFQUFNQTs7Ozs7c0NBQ1AsOERBQUNELGtEQUFJQTs0QkFBQzRDLFVBQVM7NEJBQU1DLFlBQVc7NEJBQU9DLE9BQU07c0NBQWtCOzs7Ozs7c0NBQy9ELDhEQUFDaEQsb0RBQU1BOzRCQUFDNEMsU0FBUzs0QkFBR3JCLEdBQUU7c0NBQ25CO21DQUFJMEIsTUFBTTs2QkFBRyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRzFDLHNCQUNyQiw4REFBQ0Q7b0NBQXNCQyxPQUFPQTttQ0FBZEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLeEIsOERBQUNMLGtFQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtNQTNCTTJCO0FBNkJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFZTdGFjaywgQ29udGFpbmVyLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEZhRXRoZXJldW0gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmNvbnN0IE1vdGlvbkJveCA9IG1vdGlvbihCb3gpO1xuXG5jb25zdCBMaXZlT3JkZXI6IFJlYWN0LkZDPHsgaW5kZXg6IG51bWJlciB9PiA9ICh7IGluZGV4IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TW90aW9uQm94XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDUwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IGluZGV4ICogMC4xIH19XG4gICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1LCBib3hTaGFkb3c6IFwiMHB4IDBweCA4cHggcmdiKDI1NSwyNTUsMjU1KVwiIH19XG4gICAgICBiZz1cInJnYmEoNjAsIDYwLCA2MCwgMC42KVwiXG4gICAgICBwPXs0fVxuICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgdz1cIjEwMCVcIlxuICAgID5cbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIDxUZXh0PjB4MTIzNC4uLjU2Nzg8L1RleHQ+XG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEZhRXRoZXJldW0gLz5cbiAgICAgICAgICA8VGV4dCBtbD17Mn0+RVRIIOKHkiBVU0Q8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dD57YCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjQpfToke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwKX06JHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2MCl9YH08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L01vdGlvbkJveD5cbiAgKTtcbn07XG5cbmNvbnN0IEhvbWVQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBtaW5IZWlnaHQ9XCIxMDB2aFwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XG4gICAgICA8Qm94XG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICB0b3A9ezB9XG4gICAgICAgIGxlZnQ9ezB9XG4gICAgICAgIHJpZ2h0PXswfVxuICAgICAgICBib3R0b209ezB9XG4gICAgICAgIGJnR3JhZGllbnQ9XCJyYWRpYWwoY2lyY2xlLCBicmFuZC5uZW9uUHVycGxlLCBicmFuZC5uZW9uQmx1ZSwgYnJhbmQubmVvblBpbmspXCJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxuICAgICAgICBhbmltYXRpb249XCJuZW9uUHVsc2UgMnMgaW5maW5pdGVcIlxuICAgICAgLz5cbiAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiIGNlbnRlckNvbnRlbnQgcHk9ezh9PlxuICAgICAgICA8VlN0YWNrIHNwYWNpbmc9ezh9IGFsaWduPVwiY2VudGVyXCIgdz1cIjEwMCVcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwiYnJhbmQubmVvbkdyZWVuXCI+TGl2ZSBPcmRlcnM8L1RleHQ+XG4gICAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSB3PVwiMTAwJVwiPlxuICAgICAgICAgICAge1suLi5BcnJheSg1KV0ubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8TGl2ZU9yZGVyIGtleT17aW5kZXh9IGluZGV4PXtpbmRleH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJWU3RhY2siLCJDb250YWluZXIiLCJUZXh0IiwiSGVhZGVyIiwiRm9vdGVyIiwibW90aW9uIiwiRmFFdGhlcmV1bSIsIk1vdGlvbkJveCIsIkxpdmVPcmRlciIsImluZGV4IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwiYm94U2hhZG93IiwiYmciLCJwIiwiYm9yZGVyUmFkaXVzIiwidyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkhvbWVQYWdlIiwicG9zaXRpb24iLCJtaW5IZWlnaHQiLCJvdmVyZmxvdyIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImJnR3JhZGllbnQiLCJhbmltYXRpb24iLCJtYXhXIiwiY2VudGVyQ29udGVudCIsInB5Iiwic3BhY2luZyIsImFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJBcnJheSIsIm1hcCIsIl8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});