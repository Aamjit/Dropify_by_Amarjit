"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/(routes)/file-preview/[fileId]/page",{

/***/ "(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileInfo.js":
/*!********************************************************************************!*\
  !*** ./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileInfo.js ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FileInfo(param) {\n    let { file } = param;\n    _s();\n    const [fileType, setFileType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        file && setFileType(file === null || file === void 0 ? void 0 : file.FileType.split(\"/\")[0]);\n    }, [\n        file\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center border flex justify-center flex-col items-center   p-4 rounded-md border-blue-300 md:w-[40%]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: fileType == \"imageS\" ? file === null || file === void 0 ? void 0 : file.FileUrl_ : \"/documents.png\",\n                width: 250,\n                height: 250\n            }, void 0, false, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileInfo.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"my-4\",\n                children: file === null || file === void 0 ? void 0 : file.FileName\n            }, void 0, false, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileInfo.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-2 text-sm text-blue-400 dark:text-gray-400 min-w-fit\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"font-semibold w-fit text-wrap\",\n                    children: file === null || file === void 0 ? void 0 : file.FileType\n                }, void 0, false, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileInfo.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileInfo.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-gray-400 dark:text-gray-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"font-semibold\",\n                    children: [\n                        ((file === null || file === void 0 ? void 0 : file.FileSize) / 1024 / 1024).toFixed(2),\n                        \" MB\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileInfo.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileInfo.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileInfo.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(FileInfo, \"HEe+UCJWj6EDdTXUDqLwuGDaDUU=\");\n_c = FileInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileInfo);\nvar _c;\n$RefreshReg$(_c, \"FileInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9maWxlLXByZXZpZXcvW2ZpbGVJZF0vX2NvbXBvbmVudHMvRmlsZUluZm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNUO0FBQ29CO0FBRW5ELFNBQVNLLFNBQVMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUNoQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBO0lBRXhDRCxnREFBU0EsQ0FBQztRQUNSRyxRQUFRRSxZQUFZRixpQkFBQUEsMkJBQUFBLEtBQU1OLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ2xELEdBQUc7UUFBQ0g7S0FBSztJQUVULHFCQUNFLDhEQUFDSTtRQUNDQyxXQUFVOzswQkFHViw4REFBQ1Ysa0RBQUtBO2dCQUNKVyxLQUFLTCxZQUFZLFdBQVdELGlCQUFBQSwyQkFBQUEsS0FBTU8sUUFBUSxHQUFHO2dCQUM3Q0MsT0FBTztnQkFDUEMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDQztnQkFBR0wsV0FBVTswQkFBUUwsaUJBQUFBLDJCQUFBQSxLQUFNVyxRQUFROzs7Ozs7MEJBQ3BDLDhEQUFDQztnQkFBRVAsV0FBVTswQkFDWCw0RUFBQ1E7b0JBQUtSLFdBQVU7OEJBQWlDTCxpQkFBQUEsMkJBQUFBLEtBQU1OLFFBQVE7Ozs7Ozs7Ozs7OzBCQUVqRSw4REFBQ2tCO2dCQUFFUCxXQUFVOzBCQUNYLDRFQUFDUTtvQkFBS1IsV0FBVTs7d0JBQWtCTCxDQUFBQSxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1jLFFBQVEsSUFBRyxPQUFPLElBQUcsRUFBR0MsT0FBTyxDQUFDO3dCQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkY7R0ExQlNoQjtLQUFBQTtBQTRCVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvKHJvdXRlcykvZmlsZS1wcmV2aWV3L1tmaWxlSWRdL19jb21wb25lbnRzL0ZpbGVJbmZvLmpzPzI1NDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZVR5cGUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRmlsZUluZm8oeyBmaWxlIH0pIHtcclxuICBjb25zdCBbZmlsZVR5cGUsIHNldEZpbGVUeXBlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWxlICYmIHNldEZpbGVUeXBlKGZpbGU/LkZpbGVUeXBlLnNwbGl0KFwiL1wiKVswXSk7XHJcbiAgfSwgW2ZpbGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYm9yZGVyIGZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgcC00IHJvdW5kZWQtbWQgYm9yZGVyLWJsdWUtMzAwIG1kOnctWzQwJV1cIlxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9e2ZpbGVUeXBlID09IFwiaW1hZ2VTXCIgPyBmaWxlPy5GaWxlVXJsXyA6IFwiL2RvY3VtZW50cy5wbmdcIn1cclxuICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAvPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibXktNFwiPntmaWxlPy5GaWxlTmFtZX08L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIHRleHQtc20gdGV4dC1ibHVlLTQwMCBkYXJrOnRleHQtZ3JheS00MDAgbWluLXctZml0XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB3LWZpdCB0ZXh0LXdyYXBcIj57ZmlsZT8uRmlsZVR5cGV9PC9zcGFuPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0yMDBcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+eyhmaWxlPy5GaWxlU2l6ZSAvIDEwMjQgLyAxMDI0KS50b0ZpeGVkKDIpfSBNQjwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZUluZm87XHJcbiJdLCJuYW1lcyI6WyJGaWxlVHlwZSIsIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZpbGVJbmZvIiwiZmlsZSIsImZpbGVUeXBlIiwic2V0RmlsZVR5cGUiLCJzcGxpdCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIkZpbGVVcmxfIiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsIkZpbGVOYW1lIiwicCIsInNwYW4iLCJGaWxlU2l6ZSIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileInfo.js\n"));

/***/ })

});