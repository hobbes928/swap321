"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_Layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Header */ \"./src/components/Layout/Header.tsx\");\n/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Footer */ \"./src/components/Layout/Footer.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaDollarSign_FaEthereum_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaDollarSign,FaEthereum!=!react-icons/fa */ \"__barrel_optimize__?names=FaDollarSign,FaEthereum!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box);\n_c = MotionBox;\nconst generateRandomTime = (seed)=>{\n    const hours = (seed % 24).toString().padStart(2, \"0\");\n    const minutes = (seed * 60 % 60).toString().padStart(2, \"0\");\n    const seconds = (seed * 3600 % 60).toString().padStart(2, \"0\");\n    return \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n};\nconst LiveOrder = (param)=>{\n    let { index } = param;\n    _s();\n    const time = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>generateRandomTime(index), [\n        index\n    ]);\n    const isCryptoToFiat = index % 2 === 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {\n        initial: {\n            opacity: 0,\n            y: 50\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5,\n            delay: index * 0.1\n        },\n        whileHover: {\n            scale: 1.05,\n            boxShadow: \"0px 0px 8px rgba(255,255,255,0.2)\"\n        },\n        bg: \"rgba(60, 60, 60, 0.6)\",\n        p: 4,\n        borderRadius: \"md\",\n        w: \"100%\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                    children: \"0x1234...5678\"\n                }, void 0, false, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    children: isCryptoToFiat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaDollarSign_FaEthereum_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaEthereum, {\n                                color: \"#00FFFF\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                ml: 2,\n                                children: \"ETH ⇒ USD\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaDollarSign_FaEthereum_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaDollarSign, {\n                                color: \"#00FF00\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                ml: 2,\n                                children: \"USD ⇒ ETH\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                    children: time\n                }, void 0, false, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LiveOrder, \"dVRAFXrk0M/i/kjLfGHINI/UYXU=\");\n_c1 = LiveOrder;\nconst HomePage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Swap321 - P2P Crypto Exchange\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                position: \"relative\",\n                minHeight: \"100vh\",\n                overflow: \"hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        position: \"absolute\",\n                        top: 0,\n                        left: 0,\n                        right: 0,\n                        bottom: 0,\n                        bgGradient: \"radial(circle at top left, #800080 0%, #4B0082 25%, #191970 50%, #000000 75%)\",\n                        opacity: 0.7,\n                        zIndex: -2\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        position: \"absolute\",\n                        top: 0,\n                        left: 0,\n                        right: 0,\n                        bottom: 0,\n                        bgImage: \"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxMTEiPjwvcmVjdD4KPC9zdmc+')\",\n                        opacity: 0.05,\n                        zIndex: -1\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        maxW: \"container.xl\",\n                        centerContent: true,\n                        py: 8,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                            spacing: 12,\n                            align: \"center\",\n                            w: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                    src: \"/logo.png\",\n                                    alt: \"Swap321 Logo\",\n                                    width: 200,\n                                    height: 200\n                                }, void 0, false, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                                    spacing: 6,\n                                    textAlign: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                            as: \"h1\",\n                                            size: \"2xl\",\n                                            color: \"white\",\n                                            children: \"SWAP321\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            fontSize: \"xl\",\n                                            color: \"gray.300\",\n                                            children: \"P2P Crypto to Fiat and Fiat to Crypto Exchange\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                    w: \"100%\",\n                                    maxW: \"3xl\",\n                                    textAlign: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            fontSize: \"5xl\",\n                                            fontWeight: \"bold\",\n                                            color: \"white\",\n                                            mb: 4,\n                                            children: \"$ 8,611,414,816.33\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            fontSize: \"md\",\n                                            color: \"gray.400\",\n                                            children: \"Total trading volume across all markets\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                                    spacing: 4,\n                                    w: \"100%\",\n                                    maxW: \"2xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            fontSize: \"xl\",\n                                            fontWeight: \"bold\",\n                                            color: \"gray.300\",\n                                            children: \"Live Orders\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        [\n                                            ...Array(5)\n                                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LiveOrder, {\n                                                index: index\n                                            }, index, false, {\n                                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 17\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c2 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MotionBox\");\n$RefreshReg$(_c1, \"LiveOrder\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxtREFBS0E7b0NBQUMyRCxLQUFJO29DQUFZQyxLQUFJO29DQUFlQyxPQUFPO29DQUFLQyxRQUFROzs7Ozs7OENBQzlELDhEQUFDbEUsb0RBQU1BO29DQUFDNkQsU0FBUztvQ0FBR00sV0FBVTs7c0RBQzVCLDhEQUFDaEUscURBQU9BOzRDQUFDaUUsSUFBRzs0Q0FBS0MsTUFBSzs0Q0FBTTVCLE9BQU07c0RBQVE7Ozs7OztzREFHMUMsOERBQUN2QyxrREFBSUE7NENBQUNvRSxVQUFTOzRDQUFLN0IsT0FBTTtzREFBVzs7Ozs7Ozs7Ozs7OzhDQUl2Qyw4REFBQzFDLGlEQUFHQTtvQ0FBQ3NDLEdBQUU7b0NBQU9xQixNQUFLO29DQUFNUyxXQUFVOztzREFDakMsOERBQUNqRSxrREFBSUE7NENBQUNvRSxVQUFTOzRDQUFNQyxZQUFXOzRDQUFPOUIsT0FBTTs0Q0FBUStCLElBQUk7c0RBQUc7Ozs7OztzREFHNUQsOERBQUN0RSxrREFBSUE7NENBQUNvRSxVQUFTOzRDQUFLN0IsT0FBTTtzREFBVzs7Ozs7Ozs7Ozs7OzhDQUl2Qyw4REFBQ3pDLG9EQUFNQTtvQ0FBQzZELFNBQVM7b0NBQUd4QixHQUFFO29DQUFPcUIsTUFBSzs7c0RBQ2hDLDhEQUFDeEQsa0RBQUlBOzRDQUFDb0UsVUFBUzs0Q0FBS0MsWUFBVzs0Q0FBTzlCLE9BQU07c0RBQVc7Ozs7Ozt3Q0FDdEQ7K0NBQUlnQyxNQUFNO3lDQUFHLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHdkQsc0JBQ3JCLDhEQUFDRDtnREFBc0JDLE9BQU9BOytDQUFkQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLeEIsOERBQUNkLGlFQUFNQTs7Ozs7Ozs7Ozs7OztBQUlmO01BNURNcUM7QUE4RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFZTdGFjaywgQ29udGFpbmVyLCBUZXh0LCBIZWFkaW5nLCBJbWFnZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBGYUV0aGVyZXVtLCBGYURvbGxhclNpZ24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb24oQm94KTtcblxuY29uc3QgZ2VuZXJhdGVSYW5kb21UaW1lID0gKHNlZWQ6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGhvdXJzID0gKHNlZWQgJSAyNCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtaW51dGVzID0gKChzZWVkICogNjApICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3Qgc2Vjb25kcyA9ICgoc2VlZCAqIDM2MDApICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufTtcblxuY29uc3QgTGl2ZU9yZGVyOiBSZWFjdC5GQzx7IGluZGV4OiBudW1iZXIgfT4gPSAoeyBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IHRpbWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IGdlbmVyYXRlUmFuZG9tVGltZShpbmRleCksIFtpbmRleF0pO1xuICBjb25zdCBpc0NyeXB0b1RvRmlhdCA9IGluZGV4ICUgMiA9PT0gMDtcblxuICByZXR1cm4gKFxuICAgIDxNb3Rpb25Cb3hcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNTAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogaW5kZXggKiAwLjEgfX1cbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUsIGJveFNoYWRvdzogXCIwcHggMHB4IDhweCByZ2JhKDI1NSwyNTUsMjU1LDAuMilcIiB9fVxuICAgICAgYmc9XCJyZ2JhKDYwLCA2MCwgNjAsIDAuNilcIlxuICAgICAgcD17NH1cbiAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCJcbiAgICAgIHc9XCIxMDAlXCJcbiAgICA+XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8VGV4dD4weDEyMzQuLi41Njc4PC9UZXh0PlxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIHtpc0NyeXB0b1RvRmlhdCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGYUV0aGVyZXVtIGNvbG9yPVwiIzAwRkZGRlwiIC8+XG4gICAgICAgICAgICAgIDxUZXh0IG1sPXsyfT5FVEgg4oeSIFVTRDwvVGV4dD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8RmFEb2xsYXJTaWduIGNvbG9yPVwiIzAwRkYwMFwiIC8+XG4gICAgICAgICAgICAgIDxUZXh0IG1sPXsyfT5VU0Qg4oeSIEVUSDwvVGV4dD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dD57dGltZX08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L01vdGlvbkJveD5cbiAgKTtcbn07XG5cbmNvbnN0IEhvbWVQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Td2FwMzIxIC0gUDJQIENyeXB0byBFeGNoYW5nZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIG1pbkhlaWdodD1cIjEwMHZoXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgIHJpZ2h0PXswfVxuICAgICAgICAgIGJvdHRvbT17MH1cbiAgICAgICAgICBiZ0dyYWRpZW50PVwicmFkaWFsKGNpcmNsZSBhdCB0b3AgbGVmdCwgIzgwMDA4MCAwJSwgIzRCMDA4MiAyNSUsICMxOTE5NzAgNTAlLCAjMDAwMDAwIDc1JSlcIlxuICAgICAgICAgIG9wYWNpdHk9ezAuN31cbiAgICAgICAgICB6SW5kZXg9ey0yfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgdG9wPXswfVxuICAgICAgICAgIGxlZnQ9ezB9XG4gICAgICAgICAgcmlnaHQ9ezB9XG4gICAgICAgICAgYm90dG9tPXswfVxuICAgICAgICAgIGJnSW1hZ2U9XCJ1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJMUlpQm9aV2xuYUhROUlqVWlQZ284Y21WamRDQjNhV1IwYUQwaU5TSWdhR1ZwWjJoMFBTSTFJaUJtYVd4c1BTSWpNREF3SWo0OEwzSmxZM1ErQ2p4eVpXTjBJSGRwWkhSb1BTSXhJaUJvWldsbmFIUTlJakVpSUdacGJHdzlJaU14TVRFaVBqd3ZjbVZqZEQ0S1BDOXpkbWMrJylcIlxuICAgICAgICAgIG9wYWNpdHk9ezAuMDV9XG4gICAgICAgICAgekluZGV4PXstMX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLnhsXCIgY2VudGVyQ29udGVudCBweT17OH0+XG4gICAgICAgICAgPFZTdGFjayBzcGFjaW5nPXsxMn0gYWxpZ249XCJjZW50ZXJcIiB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIlN3YXAzMjEgTG9nb1wiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSAvPlxuICAgICAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs2fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCIyeGxcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgU1dBUDMyMVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwieGxcIiBjb2xvcj1cImdyYXkuMzAwXCI+XG4gICAgICAgICAgICAgICAgUDJQIENyeXB0byB0byBGaWF0IGFuZCBGaWF0IHRvIENyeXB0byBFeGNoYW5nZVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgIDxCb3ggdz1cIjEwMCVcIiBtYXhXPVwiM3hsXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiNXhsXCIgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cIndoaXRlXCIgbWI9ezR9PlxuICAgICAgICAgICAgICAgICQgOCw2MTEsNDE0LDgxNi4zM1xuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibWRcIiBjb2xvcj1cImdyYXkuNDAwXCI+XG4gICAgICAgICAgICAgICAgVG90YWwgdHJhZGluZyB2b2x1bWUgYWNyb3NzIGFsbCBtYXJrZXRzXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSB3PVwiMTAwJVwiIG1heFc9XCIyeGxcIj5cbiAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9XCJncmF5LjMwMFwiPkxpdmUgT3JkZXJzPC9UZXh0PlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KDUpXS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpdmVPcmRlciBrZXk9e2luZGV4fSBpbmRleD17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlZTdGFjayIsIkNvbnRhaW5lciIsIlRleHQiLCJIZWFkaW5nIiwiSW1hZ2UiLCJIZWFkZXIiLCJGb290ZXIiLCJtb3Rpb24iLCJGYUV0aGVyZXVtIiwiRmFEb2xsYXJTaWduIiwiSGVhZCIsIk1vdGlvbkJveCIsImdlbmVyYXRlUmFuZG9tVGltZSIsInNlZWQiLCJob3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwic2Vjb25kcyIsIkxpdmVPcmRlciIsImluZGV4IiwidGltZSIsInVzZU1lbW8iLCJpc0NyeXB0b1RvRmlhdCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImJveFNoYWRvdyIsImJnIiwicCIsImJvcmRlclJhZGl1cyIsInciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtbCIsIkhvbWVQYWdlIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInBvc2l0aW9uIiwibWluSGVpZ2h0Iiwib3ZlcmZsb3ciLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJiZ0dyYWRpZW50IiwiekluZGV4IiwiYmdJbWFnZSIsIm1heFciLCJjZW50ZXJDb250ZW50IiwicHkiLCJzcGFjaW5nIiwiYWxpZ24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsImFzIiwic2l6ZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1iIiwiQXJyYXkiLCJtYXAiLCJfIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});