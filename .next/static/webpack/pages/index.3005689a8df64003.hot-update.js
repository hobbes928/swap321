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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_Layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Header */ \"./src/components/Layout/Header.tsx\");\n/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Footer */ \"./src/components/Layout/Footer.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaDollarSign_FaEthereum_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaDollarSign,FaEthereum!=!react-icons/fa */ \"__barrel_optimize__?names=FaDollarSign,FaEthereum!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box);\n_c = MotionBox;\nconst generateRandomTime = (seed)=>{\n    const hours = (seed % 24).toString().padStart(2, \"0\");\n    const minutes = (seed * 60 % 60).toString().padStart(2, \"0\");\n    const seconds = (seed * 3600 % 60).toString().padStart(2, \"0\");\n    return \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n};\nconst LiveOrder = (param)=>{\n    let { index, opacity } = param;\n    _s();\n    const time = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>generateRandomTime(index), [\n        index\n    ]);\n    const isCryptoToFiat = index % 2 === 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {\n        animate: {\n            opacity\n        },\n        transition: {\n            duration: 0.5\n        },\n        bg: \"rgba(60, 60, 60, 0.6)\",\n        p: 4,\n        borderRadius: \"md\",\n        w: \"100%\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                    children: \"0x1234...5678\"\n                }, void 0, false, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    alignItems: \"center\",\n                    children: isCryptoToFiat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaDollarSign_FaEthereum_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaEthereum, {\n                                color: \"#00FFFF\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                ml: 2,\n                                children: \"ETH ⇔ USD\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaDollarSign_FaEthereum_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaDollarSign, {\n                                color: \"#00FF00\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                ml: 2,\n                                children: \"USD ⇔ ETH\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                    children: time\n                }, void 0, false, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LiveOrder, \"dVRAFXrk0M/i/kjLfGHINI/UYXU=\");\n_c1 = LiveOrder;\nconst HomePage = ()=>{\n    _s1();\n    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(20).fill(1));\n    const ordersRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (ordersRef.current) {\n                const { top, bottom } = ordersRef.current.getBoundingClientRect();\n                const viewportHeight = window.innerHeight;\n                setOrders((prevOrders)=>prevOrders.map((_, index)=>{\n                        const elementTop = top + index * 76; // Approximate height of each order\n                        const elementBottom = elementTop + 76;\n                        if (elementTop > viewportHeight || elementBottom < 0) {\n                            return 0; // Fully faded out\n                        } else {\n                            return 1; // Fully visible\n                        }\n                    }));\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Swap321 - P2P Crypto Exchange\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                position: \"relative\",\n                minHeight: \"100vh\",\n                overflow: \"hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        position: \"fixed\",\n                        top: 0,\n                        left: 0,\n                        right: 0,\n                        bottom: 0,\n                        bgGradient: \"radial(circle at top left, #800080 0%, #4B0082 25%, #191970 50%, #000000 75%)\",\n                        opacity: 0.7,\n                        zIndex: -2\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        position: \"fixed\",\n                        top: 0,\n                        left: 0,\n                        right: 0,\n                        bottom: 0,\n                        bgImage: \"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxMTEiPjwvcmVjdD4KPC9zdmc+')\",\n                        opacity: 0.05,\n                        zIndex: -1\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        maxW: \"container.xl\",\n                        centerContent: true,\n                        py: 8,\n                        minH: \"100vh\",\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        justifyContent: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                            spacing: 12,\n                            align: \"center\",\n                            w: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                    src: \"/logo.png\",\n                                    alt: \"Swap321 Logo\",\n                                    width: 200,\n                                    height: 200\n                                }, void 0, false, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                                    spacing: 6,\n                                    textAlign: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                            as: \"h1\",\n                                            size: \"2xl\",\n                                            color: \"white\",\n                                            children: \"SWAP321\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            fontSize: \"xl\",\n                                            color: \"gray.300\",\n                                            children: \"P2P Crypto to Fiat and Fiat to Crypto Exchange\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                    w: \"100%\",\n                                    maxW: \"3xl\",\n                                    textAlign: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            fontSize: \"5xl\",\n                                            fontWeight: \"bold\",\n                                            color: \"white\",\n                                            mb: 4,\n                                            children: \"$ 8,611,414,816.33\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            fontSize: \"md\",\n                                            color: \"gray.400\",\n                                            children: \"Total trading volume across all markets\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        h: \"20vh\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                        ref: ordersRef,\n                        spacing: 4,\n                        w: \"100%\",\n                        maxW: \"2xl\",\n                        mx: \"auto\",\n                        pb: \"100px\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                fontSize: \"xl\",\n                                fontWeight: \"bold\",\n                                color: \"gray.300\",\n                                children: \"Live Orders\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, undefined),\n                            orders.map((opacity, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LiveOrder, {\n                                    index: index,\n                                    opacity: opacity\n                                }, index, false, {\n                                    fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gm/Desktop/swap321/src/pages/index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s1(HomePage, \"/EtNVoRA6MrXSrx59l/rNw0USCQ=\");\n_c2 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MotionBox\");\n$RefreshReg$(_c1, \"LiveOrder\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxPQUFNOzRDQUFRb0QsSUFBSTtzREFBRzs7Ozs7O3NEQUc1RCw4REFBQ3JGLGtEQUFJQTs0Q0FBQ21GLFVBQVM7NENBQUtsRCxPQUFNO3NEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNM0MsOERBQUNwQyxpREFBR0E7d0JBQUN5RixHQUFFOzs7Ozs7b0JBQVM7a0NBQ2hCLDhEQUFDeEYsb0RBQU1BO3dCQUFDeUYsS0FBSy9DO3dCQUFXa0MsU0FBUzt3QkFBRzVDLEdBQUU7d0JBQU9zQyxNQUFLO3dCQUFNb0IsSUFBRzt3QkFBT0MsSUFBRzs7MENBQ25FLDhEQUFDekYsa0RBQUlBO2dDQUFDbUYsVUFBUztnQ0FBS0MsWUFBVztnQ0FBT25ELE9BQU07MENBQVc7Ozs7Ozs0QkFDdERHLE9BQU9jLEdBQUcsQ0FBQyxDQUFDOUIsU0FBU0Qsc0JBQ3BCLDhEQUFDRDtvQ0FBc0JDLE9BQU9BO29DQUFPQyxTQUFTQTttQ0FBOUJEOzs7Ozs7Ozs7OztrQ0FHcEIsOERBQUNkLGlFQUFNQTs7Ozs7Ozs7Ozs7OztBQUlmO0lBekZNOEI7TUFBQUE7QUEyRk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFZTdGFjaywgQ29udGFpbmVyLCBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBGYUV0aGVyZXVtLCBGYURvbGxhclNpZ24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb24oQm94KTtcblxuY29uc3QgZ2VuZXJhdGVSYW5kb21UaW1lID0gKHNlZWQ6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGhvdXJzID0gKHNlZWQgJSAyNCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtaW51dGVzID0gKChzZWVkICogNjApICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3Qgc2Vjb25kcyA9ICgoc2VlZCAqIDM2MDApICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufTtcblxuY29uc3QgTGl2ZU9yZGVyOiBSZWFjdC5GQzx7IGluZGV4OiBudW1iZXI7IG9wYWNpdHk6IG51bWJlciB9PiA9ICh7IGluZGV4LCBvcGFjaXR5IH0pID0+IHtcbiAgY29uc3QgdGltZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gZ2VuZXJhdGVSYW5kb21UaW1lKGluZGV4KSwgW2luZGV4XSk7XG4gIGNvbnN0IGlzQ3J5cHRvVG9GaWF0ID0gaW5kZXggJSAyID09PSAwO1xuXG4gIHJldHVybiAoXG4gICAgPE1vdGlvbkJveFxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5IH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgIGJnPVwicmdiYSg2MCwgNjAsIDYwLCAwLjYpXCJcbiAgICAgIHA9ezR9XG4gICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICB3PVwiMTAwJVwiXG4gICAgPlxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8VGV4dD4weDEyMzQuLi41Njc4PC9UZXh0PlxuICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAge2lzQ3J5cHRvVG9GaWF0ID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZhRXRoZXJldW0gY29sb3I9XCIjMDBGRkZGXCIgLz5cbiAgICAgICAgICAgICAgPFRleHQgbWw9ezJ9PkVUSCDih5QgVVNEPC9UZXh0PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGYURvbGxhclNpZ24gY29sb3I9XCIjMDBGRjAwXCIgLz5cbiAgICAgICAgICAgICAgPFRleHQgbWw9ezJ9PlVTRCDih5QgRVRIPC9UZXh0PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8VGV4dD57dGltZX08L1RleHQ+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Nb3Rpb25Cb3g+XG4gICk7XG59O1xuXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShBcnJheSgyMCkuZmlsbCgxKSk7XG4gIGNvbnN0IG9yZGVyc1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAob3JkZXJzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0b3AsIGJvdHRvbSB9ID0gb3JkZXJzUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIHNldE9yZGVycyhwcmV2T3JkZXJzID0+IFxuICAgICAgICAgIHByZXZPcmRlcnMubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvcCA9IHRvcCArIGluZGV4ICogNzY7IC8vIEFwcHJveGltYXRlIGhlaWdodCBvZiBlYWNoIG9yZGVyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIDc2O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvcCA+IHZpZXdwb3J0SGVpZ2h0IHx8IGVsZW1lbnRCb3R0b20gPCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAwOyAvLyBGdWxseSBmYWRlZCBvdXRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAxOyAvLyBGdWxseSB2aXNpYmxlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Td2FwMzIxIC0gUDJQIENyeXB0byBFeGNoYW5nZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIG1pbkhlaWdodD1cIjEwMHZoXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgIHJpZ2h0PXswfVxuICAgICAgICAgIGJvdHRvbT17MH1cbiAgICAgICAgICBiZ0dyYWRpZW50PVwicmFkaWFsKGNpcmNsZSBhdCB0b3AgbGVmdCwgIzgwMDA4MCAwJSwgIzRCMDA4MiAyNSUsICMxOTE5NzAgNTAlLCAjMDAwMDAwIDc1JSlcIlxuICAgICAgICAgIG9wYWNpdHk9ezAuN31cbiAgICAgICAgICB6SW5kZXg9ey0yfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgdG9wPXswfVxuICAgICAgICAgIGxlZnQ9ezB9XG4gICAgICAgICAgcmlnaHQ9ezB9XG4gICAgICAgICAgYm90dG9tPXswfVxuICAgICAgICAgIGJnSW1hZ2U9XCJ1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJMUlpQm9aV2xuYUhROUlqVWlQZ284Y21WamRDQjNhV1IwYUQwaU5TSWdhR1ZwWjJoMFBTSTFJaUJtYVd4c1BTSWpNREF3SWo0OEwzSmxZM1ErQ2p4eVpXTjBJSGRwWkhSb1BTSXhJaUJvWldsbmFIUTlJakVpSUdacGJHdzlJaU14TVRFaVBqd3ZjbVZqZEQ0S1BDOXpkbWMrJylcIlxuICAgICAgICAgIG9wYWNpdHk9ezAuMDV9XG4gICAgICAgICAgekluZGV4PXstMX1cbiAgICAgICAgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIueGxcIiBjZW50ZXJDb250ZW50IHB5PXs4fSBtaW5IPVwiMTAwdmhcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgIDxWU3RhY2sgc3BhY2luZz17MTJ9IGFsaWduPVwiY2VudGVyXCIgdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJTd2FwMzIxIExvZ29cIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gLz5cbiAgICAgICAgICAgIDxWU3RhY2sgc3BhY2luZz17Nn0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwiMnhsXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgIFNXQVAzMjFcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCIgY29sb3I9XCJncmF5LjMwMFwiPlxuICAgICAgICAgICAgICAgIFAyUCBDcnlwdG8gdG8gRmlhdCBhbmQgRmlhdCB0byBDcnlwdG8gRXhjaGFuZ2VcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgICA8Qm94IHc9XCIxMDAlXCIgbWF4Vz1cIjN4bFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjV4bFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9XCJ3aGl0ZVwiIG1iPXs0fT5cbiAgICAgICAgICAgICAgICAkIDgsNjExLDQxNCw4MTYuMzNcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIm1kXCIgY29sb3I9XCJncmF5LjQwMFwiPlxuICAgICAgICAgICAgICAgIFRvdGFsIHRyYWRpbmcgdm9sdW1lIGFjcm9zcyBhbGwgbWFya2V0c1xuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxCb3ggaD1cIjIwdmhcIiAvPiB7LyogU3BhY2VyIHRvIGNyZWF0ZSBnYXAgYmV0d2VlbiBkZXNjcmlwdGlvbiBhbmQgb3JkZXJzICovfVxuICAgICAgICA8VlN0YWNrIHJlZj17b3JkZXJzUmVmfSBzcGFjaW5nPXs0fSB3PVwiMTAwJVwiIG1heFc9XCIyeGxcIiBteD1cImF1dG9cIiBwYj1cIjEwMHB4XCI+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9XCJncmF5LjMwMFwiPkxpdmUgT3JkZXJzPC9UZXh0PlxuICAgICAgICAgIHtvcmRlcnMubWFwKChvcGFjaXR5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpdmVPcmRlciBrZXk9e2luZGV4fSBpbmRleD17aW5kZXh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQm94IiwiVlN0YWNrIiwiQ29udGFpbmVyIiwiVGV4dCIsIkhlYWRpbmciLCJJbWFnZSIsIkZsZXgiLCJIZWFkZXIiLCJGb290ZXIiLCJtb3Rpb24iLCJGYUV0aGVyZXVtIiwiRmFEb2xsYXJTaWduIiwiSGVhZCIsIk1vdGlvbkJveCIsImdlbmVyYXRlUmFuZG9tVGltZSIsInNlZWQiLCJob3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwic2Vjb25kcyIsIkxpdmVPcmRlciIsImluZGV4Iiwib3BhY2l0eSIsInRpbWUiLCJ1c2VNZW1vIiwiaXNDcnlwdG9Ub0ZpYXQiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYmciLCJwIiwiYm9yZGVyUmFkaXVzIiwidyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWwiLCJIb21lUGFnZSIsIm9yZGVycyIsInNldE9yZGVycyIsIkFycmF5IiwiZmlsbCIsIm9yZGVyc1JlZiIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJ0b3AiLCJib3R0b20iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3cG9ydEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwicHJldk9yZGVycyIsIm1hcCIsIl8iLCJlbGVtZW50VG9wIiwiZWxlbWVudEJvdHRvbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInBvc2l0aW9uIiwibWluSGVpZ2h0Iiwib3ZlcmZsb3ciLCJsZWZ0IiwicmlnaHQiLCJiZ0dyYWRpZW50IiwiekluZGV4IiwiYmdJbWFnZSIsIm1heFciLCJjZW50ZXJDb250ZW50IiwicHkiLCJtaW5IIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJzcGFjaW5nIiwiYWxpZ24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsImFzIiwic2l6ZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1iIiwiaCIsInJlZiIsIm14IiwicGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});