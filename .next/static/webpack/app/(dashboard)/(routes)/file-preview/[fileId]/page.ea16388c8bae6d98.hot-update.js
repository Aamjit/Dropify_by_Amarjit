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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CopyIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FileForm(param) {\n    let { file } = param;\n    _s();\n    const [passCheck, setPassCheck] = useState();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-gray-400 md:p-4 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"#\",\n            className: \"mt-8 grid grid-cols-6 gap-6 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"ShortURL\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Short URL\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"ShortURL\",\n                                    name: \"first_name\",\n                                    disabled: true,\n                                    value: file === null || file === void 0 ? void 0 : file.ShortUrl,\n                                    className: \"p-2 pl-10 m-1 w-full rounded-md bg-gray-100 border-gray-400 text-sm text-gray-700 shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: \"absolute text-gray-500 ml-2.5 cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: \"passwordCheck\",\n                                    onChange: (value)=>console.log(value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"Password\",\n                                    className: \"block text-sm ml-2 font-medium text-gray-700\",\n                                    children: [\n                                        \" \",\n                                        \"Password\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"Password\",\n                                    name: \"password\",\n                                    placeholder: \"Password!\",\n                                    className: \"p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2.5 bg-primary text-white px-4 py-1 rounded-md\",\n                                    children: [\n                                        \" \",\n                                        \"Save\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12 border border-gray-200 rounded-md p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"Email\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: [\n                                    \" \",\n                                    \"Send to Email\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"Email\",\n                                name: \"Email\",\n                                placeholder: \"john.doe@mail.com\",\n                                className: \"p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-primary text-white rounded-lg py-1.5 my-2.5\",\n                            children: [\n                                \" \",\n                                \"Send Email\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(FileForm, \"BVb6HOT/Qhuuize44nsNlO8iTEk=\");\n_c = FileForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileForm);\nvar _c;\n$RefreshReg$(_c, \"FileForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9maWxlLXByZXZpZXcvW2ZpbGVJZF0vX2NvbXBvbmVudHMvRmlsZUZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNkO0FBRTFCLFNBQVNFLFNBQVMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUNoQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0M7SUFFbEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUtDLFFBQU87WUFBSUYsV0FBVTs7OEJBQ3pCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUNDQyxTQUFROzRCQUNSSixXQUFVO3NDQUNYOzs7Ozs7c0NBSUQsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0s7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLFFBQVE7b0NBQ1JDLEtBQUssRUFBRWYsaUJBQUFBLDJCQUFBQSxLQUFNZ0IsUUFBUTtvQ0FDckJYLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ1Isb0ZBQVFBO29DQUFDUSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXhCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0s7b0NBQU1DLE1BQUs7b0NBQVdDLElBQUc7b0NBQWdCSyxVQUFVLENBQUNGLFFBQVFHLFFBQVFDLEdBQUcsQ0FBQ0o7Ozs7Ozs4Q0FDekUsOERBQUNQO29DQUNDQyxTQUFRO29DQUNSSixXQUFVOzt3Q0FFVDt3Q0FBSTt3Q0FDSTs7Ozs7Ozs7Ozs7OztzQ0FJYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSztvQ0FDQ0MsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTE8sYUFBWTtvQ0FDWmYsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDZ0I7b0NBQU9oQixXQUFVOzt3Q0FDZjt3Q0FBSTt3Q0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLWCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0c7Z0NBQ0NDLFNBQVE7Z0NBQ1JKLFdBQVU7O29DQUVUO29DQUFJO29DQUNTOzs7Ozs7Ozs7Ozs7c0NBSWxCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0s7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xPLGFBQVk7Z0NBQ1pmLFdBQVU7Ozs7Ozs7Ozs7O3NDQUlkLDhEQUFDZ0I7NEJBQU9oQixXQUFVOztnQ0FDZjtnQ0FBSTtnQ0FDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0dBbkZTTjtLQUFBQTtBQXFGVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvKHJvdXRlcykvZmlsZS1wcmV2aWV3L1tmaWxlSWRdL19jb21wb25lbnRzL0ZpbGVGb3JtLmpzPzM3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29weUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEZpbGVGb3JtKHsgZmlsZSB9KSB7XHJcbiAgY29uc3QgW3Bhc3NDaGVjaywgc2V0UGFzc0NoZWNrXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTQwMCBtZDpwLTQgdy1mdWxsXCI+XHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJtdC04IGdyaWQgZ3JpZC1jb2xzLTYgZ2FwLTYgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMlwiPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJTaG9ydFVSTFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNob3J0IFVSTFxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJTaG9ydFVSTFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ZpbGU/LlNob3J0VXJsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBwbC0xMCBtLTEgdy1mdWxsIHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktNDAwIHRleHQtc20gdGV4dC1ncmF5LTcwMCBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29weUljb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1ncmF5LTUwMCBtbC0yLjUgY3Vyc29yLXBvaW50ZXJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJwYXNzd29yZENoZWNrXCIgb25DaGFuZ2U9eyh2YWx1ZSk9PmNvbnNvbGUubG9nKHZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBodG1sRm9yPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gbWwtMiBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICBQYXNzd29yZHtcIiBcIn1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQhXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgbXQtMSB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItZ3JheS00MDAgYmctZ3JheS01MCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtbC0yLjUgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHB4LTQgcHktMSByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIFNhdmV7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLW1kIHAtNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICBTZW5kIHRvIEVtYWlse1wiIFwifVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImpvaG4uZG9lQG1haWwuY29tXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgbXQtMSB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItZ3JheS00MDAgYmctZ3JheS01MCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXByaW1hcnkgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHB5LTEuNSBteS0yLjVcIj5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICBTZW5kIEVtYWlse1wiIFwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVGb3JtO1xyXG4iXSwibmFtZXMiOlsiQ29weUljb24iLCJSZWFjdCIsIkZpbGVGb3JtIiwiZmlsZSIsInBhc3NDaGVjayIsInNldFBhc3NDaGVjayIsInVzZVN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImFjdGlvbiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsImRpc2FibGVkIiwidmFsdWUiLCJTaG9ydFVybCIsIm9uQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileForm.js\n"));

/***/ })

});