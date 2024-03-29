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

/***/ "(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileForm.js":
/*!********************************************************************************!*\
  !*** ./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileForm.js ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CopyIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FileForm(param) {\n    let { file } = param;\n    _s();\n    const [passCheck, setPassCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-gray-400 md:p-4 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"#\",\n            className: \"mt-8 grid grid-cols-6 gap-6 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"ShortURL\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Short URL\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"ShortURL\",\n                                    name: \"first_name\",\n                                    disabled: true,\n                                    value: file === null || file === void 0 ? void 0 : file.ShortUrl,\n                                    className: \"p-2 pl-10 m-1 w-full rounded-md bg-gray-100 border-gray-400 text-sm text-gray-700 shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: \"absolute text-gray-500 ml-2.5 cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: \"passwordCheck\",\n                                    onChange: (value)=>console.log(value === null || value === void 0 ? void 0 : value.target.checked)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"Password\",\n                                    className: \"block text-sm ml-2 font-medium text-gray-700\",\n                                    children: [\n                                        \" \",\n                                        \"Password\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"Password\",\n                                    name: \"password\",\n                                    placeholder: \"Password!\",\n                                    className: \"p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2.5 bg-primary text-white px-4 py-1 rounded-md\",\n                                    children: [\n                                        \" \",\n                                        \"Save\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12 border border-gray-200 rounded-md p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"Email\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: [\n                                    \" \",\n                                    \"Send to Email\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"Email\",\n                                name: \"Email\",\n                                placeholder: \"john.doe@mail.com\",\n                                className: \"p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-primary text-white rounded-lg py-1.5 my-2.5\",\n                            children: [\n                                \" \",\n                                \"Send Email\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(FileForm, \"BVb6HOT/Qhuuize44nsNlO8iTEk=\");\n_c = FileForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileForm);\nvar _c;\n$RefreshReg$(_c, \"FileForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9maWxlLXByZXZpZXcvW2ZpbGVJZF0vX2NvbXBvbmVudHMvRmlsZUZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNBO0FBRXhDLFNBQVNHLFNBQVMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUNoQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBO0lBRTFDLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFLQyxRQUFPO1lBQUlGLFdBQVU7OzhCQUN6Qiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFDQ0MsU0FBUTs0QkFDUkosV0FBVTtzQ0FDWDs7Ozs7O3NDQUlELDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUNDQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxNQUFLO29DQUNMQyxRQUFRO29DQUNSQyxLQUFLLEVBQUVkLGlCQUFBQSwyQkFBQUEsS0FBTWUsUUFBUTtvQ0FDckJYLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ1Isb0ZBQVFBO29DQUFDUSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXhCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0s7b0NBQU1DLE1BQUs7b0NBQVdDLElBQUc7b0NBQWdCSyxVQUFVLENBQUNGLFFBQVFHLFFBQVFDLEdBQUcsQ0FBQ0osa0JBQUFBLDRCQUFBQSxNQUFPSyxNQUFNLENBQUNDLE9BQU87Ozs7Ozs4Q0FDOUYsOERBQUNiO29DQUNDQyxTQUFRO29DQUNSSixXQUFVOzt3Q0FFVDt3Q0FBSTt3Q0FDSTs7Ozs7Ozs7Ozs7OztzQ0FJYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSztvQ0FDQ0MsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTFMsYUFBWTtvQ0FDWmpCLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ2tCO29DQUFPbEIsV0FBVTs7d0NBQ2Y7d0NBQUk7d0NBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS1gsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNHO2dDQUNDQyxTQUFRO2dDQUNSSixXQUFVOztvQ0FFVDtvQ0FBSTtvQ0FDUzs7Ozs7Ozs7Ozs7O3NDQUlsQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNLO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxNQUFLO2dDQUNMUyxhQUFZO2dDQUNaakIsV0FBVTs7Ozs7Ozs7Ozs7c0NBSWQsOERBQUNrQjs0QkFBT2xCLFdBQVU7O2dDQUNmO2dDQUFJO2dDQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkI7R0FuRlNMO0tBQUFBO0FBcUZULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9maWxlLXByZXZpZXcvW2ZpbGVJZF0vX2NvbXBvbmVudHMvRmlsZUZvcm0uanM/Mzc5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3B5SWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGaWxlRm9ybSh7IGZpbGUgfSkge1xyXG4gIGNvbnN0IFtwYXNzQ2hlY2ssIHNldFBhc3NDaGVja10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItZ3JheS00MDAgbWQ6cC00IHctZnVsbFwiPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3NOYW1lPVwibXQtOCBncmlkIGdyaWQtY29scy02IGdhcC02IFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTJcIj5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwiU2hvcnRVUkxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaG9ydCBVUkxcclxuICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiU2hvcnRVUkxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmaWxlPy5TaG9ydFVybH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcGwtMTAgbS0xIHctZnVsbCByb3VuZGVkLW1kIGJnLWdyYXktMTAwIGJvcmRlci1ncmF5LTQwMCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvcHlJY29uIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtZ3JheS01MDAgbWwtMi41IGN1cnNvci1wb2ludGVyXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGFzc3dvcmRDaGVja1wiIG9uQ2hhbmdlPXsodmFsdWUpPT5jb25zb2xlLmxvZyh2YWx1ZT8udGFyZ2V0LmNoZWNrZWQpfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBtbC0yIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIFBhc3N3b3Jke1wiIFwifVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCFcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBtdC0xIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1ncmF5LTQwMCBiZy1ncmF5LTUwIHRleHQtc20gdGV4dC1ncmF5LTcwMCBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1sLTIuNSBiZy1wcmltYXJ5IHRleHQtd2hpdGUgcHgtNCBweS0xIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgU2F2ZXtcIiBcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWQgcC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgaHRtbEZvcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIFNlbmQgdG8gRW1haWx7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9obi5kb2VAbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBtdC0xIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1ncmF5LTQwMCBiZy1ncmF5LTUwIHRleHQtc20gdGV4dC1ncmF5LTcwMCBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgcHktMS41IG15LTIuNVwiPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIFNlbmQgRW1haWx7XCIgXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZUZvcm07XHJcbiJdLCJuYW1lcyI6WyJDb3B5SWNvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJGaWxlRm9ybSIsImZpbGUiLCJwYXNzQ2hlY2siLCJzZXRQYXNzQ2hlY2siLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwiZGlzYWJsZWQiLCJ2YWx1ZSIsIlNob3J0VXJsIiwib25DaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiY2hlY2tlZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileForm.js\n"));

/***/ })

});