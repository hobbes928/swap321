"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

const express = require('express');
const stripe = require('stripe')('your-secret-key');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Create an account link
app.post('/create-account-link', async (req, res) => {
  const account = await stripe.accounts.create({ type: 'express' });
  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: 'https://example.com/reauth',
    return_url: 'https://example.com/return',
    type: 'account_onboarding',
  });
  res.send({ url: accountLink.url });
});

// Create a payment intent
app.post('/create-payment-intent', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd',
    payment_method_types: ['card'],
    transfer_group: '{ORDER_ID}', // Use a unique identifier for the order
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

// Capture the payment and transfer funds
app.post('/capture-payment', async (req, res) => {
  const { paymentIntentId, connectedAccountId } = req.body;

  // Capture the payment
  const paymentIntent = await stripe.paymentIntents.capture(paymentIntentId);

  // Transfer funds to the connected account
  const transfer = await stripe.transfers.create({
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
    destination: connectedAccountId,
    transfer_group: paymentIntent.transfer_group,
  });

  res.send({ success: true, transfer });
});

// Webhook endpoint
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, 'your-webhook-secret');
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful!');
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});





(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// src/components/Layout/Layout.tsx\n\n\nconst Layout = ({ children, className })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        minHeight: \"100vh\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        className: className,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            flex: 1,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\swap321\\\\src\\\\components\\\\Layout\\\\Layout.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\swap321\\\\src\\\\components\\\\Layout\\\\Layout.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUNBQW1DOztBQUNHO0FBU3RDLE1BQU1DLFNBQWdDLENBQUMsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUU7SUFDNUQscUJBQ0UsOERBQUNILGlEQUFHQTtRQUFDSSxXQUFVO1FBQVFDLFNBQVE7UUFBT0MsZUFBYztRQUFTSCxXQUFXQTtrQkFDdEUsNEVBQUNILGlEQUFHQTtZQUFDTyxNQUFNO3NCQUFJTDs7Ozs7Ozs7Ozs7QUFHckI7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N3YXAzMjEvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LnRzeD8zOThjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudHN4XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXHJcbi8vIGltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcblxyXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBtaW5IZWlnaHQ9XCIxMDB2aFwiIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPEJveCBmbGV4PXsxfT57Y2hpbGRyZW59PC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCJdLCJuYW1lcyI6WyJCb3giLCJMYXlvdXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/Layout.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_SuisseIntl_Regular_woff2_weight_400_style_normal_path_public_fonts_SuisseIntl_Bold_woff2_weight_700_style_normal_variable_font_suisse_intl_variableName_suisseIntl___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"src\\\\pages\\\\_app.tsx\",\"import\":\"\",\"arguments\":[{\"src\":[{\"path\":\"../../public/fonts/SuisseIntl-Regular.woff2\",\"weight\":\"400\",\"style\":\"normal\"},{\"path\":\"../../public/fonts/SuisseIntl-Bold.woff2\",\"weight\":\"700\",\"style\":\"normal\"}],\"variable\":\"--font-suisse-intl\"}],\"variableName\":\"suisseIntl\"} */ \"./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"src\\\\\\\\pages\\\\\\\\_app.tsx\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":[{\\\"path\\\":\\\"../../public/fonts/SuisseIntl-Regular.woff2\\\",\\\"weight\\\":\\\"400\\\",\\\"style\\\":\\\"normal\\\"},{\\\"path\\\":\\\"../../public/fonts/SuisseIntl-Bold.woff2\\\",\\\"weight\\\":\\\"700\\\",\\\"style\\\":\\\"normal\\\"}],\\\"variable\\\":\\\"--font-suisse-intl\\\"}],\\\"variableName\\\":\\\"suisseIntl\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_SuisseIntl_Regular_woff2_weight_400_style_normal_path_public_fonts_SuisseIntl_Bold_woff2_weight_700_style_normal_variable_font_suisse_intl_variableName_suisseIntl___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_SuisseIntl_Regular_woff2_weight_400_style_normal_path_public_fonts_SuisseIntl_Bold_woff2_weight_700_style_normal_variable_font_suisse_intl_variableName_suisseIntl___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./src/components/Layout/Layout.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _styles_theme__WEBPACK_IMPORTED_MODULE_2__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _styles_theme__WEBPACK_IMPORTED_MODULE_2__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// src/pages/_app.tsx\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: (next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_SuisseIntl_Regular_woff2_weight_400_style_normal_path_public_fonts_SuisseIntl_Bold_woff2_weight_700_style_normal_variable_font_suisse_intl_variableName_suisseIntl___WEBPACK_IMPORTED_MODULE_4___default().variable),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\swap321\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\swap321\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\swap321\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUI7O0FBUWZBO0FBUDJDO0FBR2Q7QUFDYTtBQW1CaEQsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxxQkFDRSw4REFBQ0wsNERBQWNBO1FBQUNDLE9BQU9BLHFEQUFLQTtrQkFDMUIsNEVBQUNDLGlFQUFNQTtZQUFDSSxXQUFXUCw4U0FBbUI7c0JBQ3BDLDRFQUFDSztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2FwMzIxLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3BhZ2VzL19hcHAudHN4XHJcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgbG9jYWxGb250IGZyb20gJ25leHQvZm9udC9sb2NhbCdcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnXHJcblxyXG4vLyBMb2FkIHRoZSBTdWlzc2UgSW50J2wgZm9udFxyXG5jb25zdCBzdWlzc2VJbnRsID0gbG9jYWxGb250KHtcclxuICBzcmM6IFtcclxuICAgIHtcclxuICAgICAgcGF0aDogJy4uLy4uL3B1YmxpYy9mb250cy9TdWlzc2VJbnRsLVJlZ3VsYXIud29mZjInLFxyXG4gICAgICB3ZWlnaHQ6ICc0MDAnLFxyXG4gICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnLi4vLi4vcHVibGljL2ZvbnRzL1N1aXNzZUludGwtQm9sZC53b2ZmMicsXHJcbiAgICAgIHdlaWdodDogJzcwMCcsXHJcbiAgICAgIHN0eWxlOiAnbm9ybWFsJyxcclxuICAgIH0sXHJcbiAgXSxcclxuICB2YXJpYWJsZTogJy0tZm9udC1zdWlzc2UtaW50bCcsXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3Vpc3NlSW50bC52YXJpYWJsZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJzdWlzc2VJbnRsIiwiQ2hha3JhUHJvdmlkZXIiLCJ0aGVtZSIsIkxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xhc3NOYW1lIiwidmFyaWFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// src/styles/theme.ts\n\n\nconst neonPulse = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.keyframes)`\r\n  0% { opacity: 1; }\r\n  50% { opacity: 0.5; }\r\n  100% { opacity: 1; }\r\n`;\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        brand: {\n            purple: \"#800080\",\n            indigo: \"#4B0082\",\n            darkBlue: \"#191970\",\n            cyan: \"#00FFFF\"\n        }\n    },\n    fonts: {\n        heading: \"Inter, sans-serif\",\n        body: \"Inter, sans-serif\"\n    },\n    styles: {\n        global: {\n            body: {\n                bg: \"black\",\n                color: \"white\"\n            }\n        }\n    },\n    components: {\n        Button: {\n            baseStyle: {\n                fontWeight: \"bold\"\n            },\n            variants: {\n                solid: {\n                    bg: \"brand.purple\",\n                    color: \"white\",\n                    _hover: {\n                        bg: \"brand.indigo\"\n                    }\n                },\n                outline: {\n                    borderColor: \"brand.cyan\",\n                    color: \"brand.cyan\",\n                    _hover: {\n                        bg: \"brand.cyan\",\n                        color: \"black\"\n                    }\n                }\n            }\n        },\n        Text: {\n            baseStyle: {\n                color: \"white\"\n            }\n        }\n    },\n    animations: {\n        neonPulse: `${neonPulse} 2s infinite`\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ3lCO0FBQ0Y7QUFFN0MsTUFBTUUsWUFBWUQsMkRBQVMsQ0FBQzs7OztBQUk1QixDQUFDO0FBRUQsTUFBTUUsUUFBUUgsNkRBQVdBLENBQUM7SUFDeEJJLFFBQVE7UUFDTkMsT0FBTztZQUNMQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxNQUFNO1FBQ1I7SUFDRjtJQUNBQyxPQUFPO1FBQ0xDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0FDLFFBQVE7UUFDTkMsUUFBUTtZQUNORixNQUFNO2dCQUNKRyxJQUFJO2dCQUNKQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBQ0FDLFlBQVk7UUFDVkMsUUFBUTtZQUNOQyxXQUFXO2dCQUNUQyxZQUFZO1lBQ2Q7WUFDQUMsVUFBVTtnQkFDUkMsT0FBTztvQkFDTFAsSUFBSTtvQkFDSkMsT0FBTztvQkFDUE8sUUFBUTt3QkFDTlIsSUFBSTtvQkFDTjtnQkFDRjtnQkFDQVMsU0FBUztvQkFDUEMsYUFBYTtvQkFDYlQsT0FBTztvQkFDUE8sUUFBUTt3QkFDTlIsSUFBSTt3QkFDSkMsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7UUFDQVUsTUFBTTtZQUNKUCxXQUFXO2dCQUNUSCxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBQ0FXLFlBQVk7UUFDVnpCLFdBQVcsQ0FBQyxFQUFFQSxVQUFVLFlBQVksQ0FBQztJQUN2QztBQUNGO0FBRUEsaUVBQWVDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2FwMzIxLy4vc3JjL3N0eWxlcy90aGVtZS50cz81MTYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zdHlsZXMvdGhlbWUudHNcclxuaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5jb25zdCBuZW9uUHVsc2UgPSBrZXlmcmFtZXNgXHJcbiAgMCUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMC41OyB9XHJcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cclxuYDtcclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gIGNvbG9yczoge1xyXG4gICAgYnJhbmQ6IHtcclxuICAgICAgcHVycGxlOiAnIzgwMDA4MCcsXHJcbiAgICAgIGluZGlnbzogJyM0QjAwODInLFxyXG4gICAgICBkYXJrQmx1ZTogJyMxOTE5NzAnLFxyXG4gICAgICBjeWFuOiAnIzAwRkZGRicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9udHM6IHtcclxuICAgIGhlYWRpbmc6ICdJbnRlciwgc2Fucy1zZXJpZicsXHJcbiAgICBib2R5OiAnSW50ZXIsIHNhbnMtc2VyaWYnLFxyXG4gIH0sXHJcbiAgc3R5bGVzOiB7XHJcbiAgICBnbG9iYWw6IHtcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIGJnOiAnYmxhY2snLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEJ1dHRvbjoge1xyXG4gICAgICBiYXNlU3R5bGU6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgc29saWQ6IHtcclxuICAgICAgICAgIGJnOiAnYnJhbmQucHVycGxlJyxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgX2hvdmVyOiB7XHJcbiAgICAgICAgICAgIGJnOiAnYnJhbmQuaW5kaWdvJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ2JyYW5kLmN5YW4nLFxyXG4gICAgICAgICAgY29sb3I6ICdicmFuZC5jeWFuJyxcclxuICAgICAgICAgIF9ob3Zlcjoge1xyXG4gICAgICAgICAgICBiZzogJ2JyYW5kLmN5YW4nLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBUZXh0OiB7XHJcbiAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFuaW1hdGlvbnM6IHtcclxuICAgIG5lb25QdWxzZTogYCR7bmVvblB1bHNlfSAycyBpbmZpbml0ZWAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJrZXlmcmFtZXMiLCJuZW9uUHVsc2UiLCJ0aGVtZSIsImNvbG9ycyIsImJyYW5kIiwicHVycGxlIiwiaW5kaWdvIiwiZGFya0JsdWUiLCJjeWFuIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsInN0eWxlcyIsImdsb2JhbCIsImJnIiwiY29sb3IiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwiYmFzZVN0eWxlIiwiZm9udFdlaWdodCIsInZhcmlhbnRzIiwic29saWQiLCJfaG92ZXIiLCJvdXRsaW5lIiwiYm9yZGVyQ29sb3IiLCJUZXh0IiwiYW5pbWF0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();