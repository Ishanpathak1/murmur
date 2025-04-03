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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyTheme: () => (/* binding */ applyTheme),\n/* harmony export */   getSavedTheme: () => (/* binding */ getSavedTheme),\n/* harmony export */   initTheme: () => (/* binding */ initTheme)\n/* harmony export */ });\nfunction applyTheme(theme) {\n    if (true) return;\n    const root = document.documentElement;\n    if (theme === 'dark') {\n        root.classList.add('dark');\n        localStorage.setItem('theme', 'dark');\n    } else {\n        root.classList.remove('dark');\n        localStorage.setItem('theme', 'light');\n    }\n}\nfunction getSavedTheme() {\n    if (true) return null;\n    return localStorage.getItem('theme');\n}\nfunction initTheme() {\n    if (true) return;\n    const saved = getSavedTheme();\n    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n    const theme = saved || (prefersDark ? 'dark' : 'light');\n    applyTheme(theme);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi90aGVtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxTQUFTQSxXQUFXQyxLQUFLO0lBQzVCLElBQUksSUFBNkIsRUFBRTtJQUVuQyxNQUFNQyxPQUFPQyxTQUFTQyxlQUFlO0lBRXJDLElBQUlILFVBQVUsUUFBUTtRQUNwQkMsS0FBS0csU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDbkJDLGFBQWFDLE9BQU8sQ0FBQyxTQUFTO0lBQ2hDLE9BQU87UUFDTE4sS0FBS0csU0FBUyxDQUFDSSxNQUFNLENBQUM7UUFDdEJGLGFBQWFDLE9BQU8sQ0FBQyxTQUFTO0lBQ2hDO0FBQ0Y7QUFFTyxTQUFTRTtJQUNkLElBQUksSUFBNkIsRUFBRSxPQUFPO0lBQzFDLE9BQU9ILGFBQWFJLE9BQU8sQ0FBQztBQUM5QjtBQUVPLFNBQVNDO0lBQ2QsSUFBSSxJQUE2QixFQUFFO0lBRW5DLE1BQU1DLFFBQVFIO0lBQ2QsTUFBTUksY0FBY0MsT0FBT0MsVUFBVSxDQUFDLGdDQUFnQ0MsT0FBTztJQUU3RSxNQUFNaEIsUUFBUVksU0FBVUMsQ0FBQUEsY0FBYyxTQUFTLE9BQU07SUFDckRkLFdBQVdDO0FBQ2IiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2hhbnBhdGhhay9EZXNrdG9wL211cm11ci9saWIvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VGhlbWUodGhlbWUpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgXG4gICAgaWYgKHRoZW1lID09PSAnZGFyaycpIHtcbiAgICAgIHJvb3QuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTYXZlZFRoZW1lKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gaW5pdFRoZW1lKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICBcbiAgICBjb25zdCBzYXZlZCA9IGdldFNhdmVkVGhlbWUoKTtcbiAgICBjb25zdCBwcmVmZXJzRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgXG4gICAgY29uc3QgdGhlbWUgPSBzYXZlZCB8fCAocHJlZmVyc0RhcmsgPyAnZGFyaycgOiAnbGlnaHQnKTtcbiAgICBhcHBseVRoZW1lKHRoZW1lKTtcbiAgfVxuICBcbiAgIl0sIm5hbWVzIjpbImFwcGx5VGhlbWUiLCJ0aGVtZSIsInJvb3QiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmUiLCJnZXRTYXZlZFRoZW1lIiwiZ2V0SXRlbSIsImluaXRUaGVtZSIsInNhdmVkIiwicHJlZmVyc0RhcmsiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/theme.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/theme */ \"(pages-dir-node)/./lib/theme.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"App.useEffect\": ()=>{\n            (0,_lib_theme__WEBPACK_IMPORTED_MODULE_2__.initTheme)(); // 👈 this ensures correct class on <html>\n        }\n    }[\"App.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/ishanpathak/Desktop/murmur/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ007QUFDVjtBQUVmLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbERKLGdEQUFTQTt5QkFBQztZQUNSQyxxREFBU0EsSUFBSSwwQ0FBMEM7UUFDekQ7d0JBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDRTtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQyIsInNvdXJjZXMiOlsiL1VzZXJzL2lzaGFucGF0aGFrL0Rlc2t0b3AvbXVybXVyL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdFRoZW1lIH0gZnJvbSAnQC9saWIvdGhlbWUnO1xuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0VGhlbWUoKTsgLy8g8J+RiCB0aGlzIGVuc3VyZXMgY29ycmVjdCBjbGFzcyBvbiA8aHRtbD5cbiAgfSwgW10pO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiaW5pdFRoZW1lIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();