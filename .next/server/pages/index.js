"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/categories.jsx":
/*!***********************************!*\
  !*** ./components/categories.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Categories)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _pages_api_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/fetcher */ \"./pages/api/fetcher.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Categories() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://fakestoreapi.com/products/categories\", _pages_api_fetcher__WEBPACK_IMPORTED_MODULE_2__.fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/components/categories.jsx\",\n        lineNumber: 10,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/components/categories.jsx\",\n        lineNumber: 11,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"w-2/12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: data.map((category, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: category\n                }, `cat-${idx}`, false, {\n                    fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/components/categories.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            )\n        }, void 0, false, {\n            fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/components/categories.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/components/categories.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhdGVnb3JpZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDc0I7QUFFaEMsU0FBU0UsVUFBVSxHQUFHO0lBQ25DLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUUsR0FBR0osK0NBQU0sQ0FDNUIsOENBQThDLEVBQzlDQyx1REFBTyxDQUNSO0lBRUQsSUFBSUcsS0FBSyxFQUFFLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLGdCQUFjOzs7OztZQUFNLENBQUM7SUFDNUMsSUFBSSxDQUFDRixJQUFJLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsWUFBVTs7Ozs7WUFBTSxDQUFDO0lBRXhDLHFCQUNFLDhEQUFDQyxPQUFLO1FBQUNDLFNBQVMsRUFBQyxRQUFRO2tCQUN2Qiw0RUFBQ0MsSUFBRTtzQkFDQUwsSUFBSSxDQUFDTSxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxFQUFFQyxHQUFHLGlCQUN0Qiw4REFBQ0MsSUFBRTs4QkFBcUJGLFFBQVE7bUJBQXZCLENBQUMsSUFBSSxFQUFFQyxHQUFHLENBQUMsQ0FBQzs7Ozt3QkFBaUI7WUFDdkMsQ0FBQzs7Ozs7Z0JBQ0M7Ozs7O1lBQ0MsQ0FDUjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXRlZ29yaWVzLmpzeD9iYzY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuLi9wYWdlcy9hcGkvZmV0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvY2F0ZWdvcmllc1wiLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwidy0yLzEyXCI+XG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhLm1hcCgoY2F0ZWdvcnksIGlkeCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2BjYXQtJHtpZHh9YH0+e2NhdGVnb3J5fTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2FzaWRlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsImZldGNoZXIiLCJDYXRlZ29yaWVzIiwiZGF0YSIsImVycm9yIiwiZGl2IiwiYXNpZGUiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwiaWR4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/categories.jsx\n");

/***/ }),

/***/ "./components/productGallery.jsx":
/*!***************************************!*\
  !*** ./components/productGallery.jsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductGallery)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _pages_api_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/fetcher */ \"./pages/api/fetcher.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction ProductGallery({ category  }) {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://fakestoreapi.com/products\", _pages_api_fetcher__WEBPACK_IMPORTED_MODULE_2__.fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/components/productGallery.jsx\",\n        lineNumber: 7,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/components/productGallery.jsx\",\n        lineNumber: 8,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-8/12 border-white border-2\",\n        children: data.length\n    }, void 0, false, {\n        fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/components/productGallery.jsx\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RHYWxsZXJ5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ3NCO0FBRWhDLFNBQVNFLGNBQWMsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUNuRCxNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdMLCtDQUFNLENBQUMsbUNBQW1DLEVBQUVDLHVEQUFPLENBQUM7SUFFNUUsSUFBSUksS0FBSyxFQUFFLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLGdCQUFjOzs7OztZQUFNLENBQUM7SUFDNUMsSUFBSSxDQUFDRixJQUFJLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsWUFBVTs7Ozs7WUFBTSxDQUFDO0lBRXhDLHFCQUFPLDhEQUFDQSxLQUFHO1FBQUNDLFNBQVMsRUFBQyw4QkFBOEI7a0JBQUVILElBQUksQ0FBQ0ksTUFBTTs7Ozs7WUFBTyxDQUFDO0NBQzFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9kdWN0R2FsbGVyeS5qc3g/OGEwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi4vcGFnZXMvYXBpL2ZldGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEdhbGxlcnkoeyBjYXRlZ29yeSB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiLCBmZXRjaGVyKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidy04LzEyIGJvcmRlci13aGl0ZSBib3JkZXItMlwiPntkYXRhLmxlbmd0aH08L2Rpdj47XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiZmV0Y2hlciIsIlByb2R1Y3RHYWxsZXJ5IiwiY2F0ZWdvcnkiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/productGallery.jsx\n");

/***/ }),

/***/ "./pages/api/fetcher.js":
/*!******************************!*\
  !*** ./pages/api/fetcher.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetcher\": () => (/* binding */ fetcher)\n/* harmony export */ });\nconst fetcher = (...args)=>fetch(...args).then((res)=>res.json()\n    )\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmV0Y2hlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsT0FBTyxHQUFHLENBQUlDLEdBQUFBLElBQUksR0FBS0MsS0FBSyxJQUFJRCxJQUFJLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxDQUFDO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9mZXRjaGVyLmpzP2IwZjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/fetcher.js\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/categories */ \"./components/categories.jsx\");\n/* harmony import */ var _components_productGallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/productGallery */ \"./components/productGallery.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_categories__WEBPACK_IMPORTED_MODULE_1__, _components_productGallery__WEBPACK_IMPORTED_MODULE_2__]);\n([_components_categories__WEBPACK_IMPORTED_MODULE_1__, _components_productGallery__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-row items-center justify-center py-2 border-white border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_categories__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/pages/index.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_productGallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/pages/index.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/idanjoshuagaray/Documents/GitHub/fake-store/pages/index.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNRO0FBRTFELE1BQU1FLElBQUksR0FBRyxJQUFNO0lBQ2pCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtRkFBbUY7OzBCQUNoRyw4REFBQ0osOERBQVU7Ozs7eUJBQUc7MEJBQ2QsOERBQUNDLGtFQUFjOzs7O3lCQUFHOzs7Ozs7aUJBQ2QsQ0FDTjtDQUNIO0FBRUQsaUVBQWVDLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL2NhdGVnb3JpZXNcIjtcbmltcG9ydCBQcm9kdWN0R2FsbGVyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0R2FsbGVyeVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTIgYm9yZGVyLXdoaXRlIGJvcmRlci0yXCI+XG4gICAgICA8Q2F0ZWdvcmllcyAvPlxuICAgICAgPFByb2R1Y3RHYWxsZXJ5IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkNhdGVnb3JpZXMiLCJQcm9kdWN0R2FsbGVyeSIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();