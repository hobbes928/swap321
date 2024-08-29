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

/***/ "./src/components/Layout/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Header = ()=>{\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setIsScrolled(window.scrollY > 50);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        top: 0,\n        left: 0,\n        right: 0,\n        zIndex: 1000,\n        transition: \"background-color 0.3s, backdrop-filter 0.3s\",\n        bg: isScrolled ? \"rgba(0, 0, 0, 0.5)\" : \"transparent\",\n        backdropFilter: isScrolled ? \"blur(10px)\" : \"none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            w: \"100%\",\n            maxW: \"container.xl\",\n            mx: \"auto\",\n            py: 4,\n            px: 4,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                        src: \"/logo.png\",\n                        alt: \"Logo\",\n                        boxSize: \"50px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gm/Desktop/swap321/src/components/Layout/Header.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/components/Layout/Header.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                    spacing: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            variant: \"outline\",\n                            children: \"Open Order\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/components/Layout/Header.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            variant: \"outline\",\n                            children: \"Contacts\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/components/Layout/Header.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            variant: \"solid\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gm/Desktop/swap321/src/components/Layout/Header.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gm/Desktop/swap321/src/components/Layout/Header.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gm/Desktop/swap321/src/components/Layout/Header.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gm/Desktop/swap321/src/components/Layout/Header.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"UCaI8lpZVGvPrsRoIFYRt2wv0+o=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ2lCO0FBQ3ZDO0FBRTdCLE1BQU1TLFNBQW1COztJQUN2QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsZUFBZTtZQUNuQkQsY0FBY0UsT0FBT0MsT0FBTyxHQUFHO1FBQ2pDO1FBRUFELE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDcEQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNMLGlEQUFHQTtRQUNGVSxVQUFTO1FBQ1RDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsWUFBVztRQUNYQyxJQUFJYixhQUFhLHVCQUF1QjtRQUN4Q2MsZ0JBQWdCZCxhQUFhLGVBQWU7a0JBRTVDLDRFQUFDUCxrREFBSUE7WUFBQ3NCLGdCQUFlO1lBQWdCQyxZQUFXO1lBQVNDLEdBQUU7WUFBT0MsTUFBSztZQUFlQyxJQUFHO1lBQU9DLElBQUk7WUFBR0MsSUFBSTs7OEJBQ3pHLDhEQUFDdkIsa0RBQUlBO29CQUFDd0IsTUFBSzs4QkFDVCw0RUFBQzNCLG1EQUFLQTt3QkFBQzRCLEtBQUk7d0JBQVlDLEtBQUk7d0JBQU9DLFNBQVE7Ozs7Ozs7Ozs7OzhCQUU1Qyw4REFBQzdCLG9EQUFNQTtvQkFBQzhCLFNBQVM7O3NDQUNmLDhEQUFDaEMsb0RBQU1BOzRCQUFDaUMsU0FBUTtzQ0FBVTs7Ozs7O3NDQUMxQiw4REFBQ2pDLG9EQUFNQTs0QkFBQ2lDLFNBQVE7c0NBQVU7Ozs7OztzQ0FDMUIsOERBQUNqQyxvREFBTUE7NEJBQUNpQyxTQUFRO3NDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztHQW5DTTVCO0tBQUFBO0FBcUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9IZWFkZXIudHN4PzM5YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBCdXR0b24sIEltYWdlLCBIU3RhY2ssIEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0SXNTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDUwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIHRvcD17MH1cbiAgICAgIGxlZnQ9ezB9XG4gICAgICByaWdodD17MH1cbiAgICAgIHpJbmRleD17MTAwMH1cbiAgICAgIHRyYW5zaXRpb249XCJiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJhY2tkcm9wLWZpbHRlciAwLjNzXCJcbiAgICAgIGJnPXtpc1Njcm9sbGVkID8gJ3JnYmEoMCwgMCwgMCwgMC41KScgOiAndHJhbnNwYXJlbnQnfVxuICAgICAgYmFja2Ryb3BGaWx0ZXI9e2lzU2Nyb2xsZWQgPyAnYmx1cigxMHB4KScgOiAnbm9uZSd9XG4gICAgPlxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHc9XCIxMDAlXCIgbWF4Vz1cImNvbnRhaW5lci54bFwiIG14PVwiYXV0b1wiIHB5PXs0fSBweD17NH0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiBib3hTaXplPVwiNTBweFwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCI+T3BlbiBPcmRlcjwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIj5Db250YWN0czwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNvbGlkXCI+U2lnbiBJbjwvQnV0dG9uPlxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgIDwvRmxleD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZsZXgiLCJCdXR0b24iLCJJbWFnZSIsIkhTdGFjayIsIkJveCIsIkxpbmsiLCJIZWFkZXIiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiekluZGV4IiwidHJhbnNpdGlvbiIsImJnIiwiYmFja2Ryb3BGaWx0ZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ3IiwibWF4VyIsIm14IiwicHkiLCJweCIsImhyZWYiLCJzcmMiLCJhbHQiLCJib3hTaXplIiwic3BhY2luZyIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/Header.tsx\n"));

/***/ })

});