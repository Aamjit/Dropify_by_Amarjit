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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CopyIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FileForm(param) {\n    let { file } = param;\n    _s();\n    const [passCheck, setPassCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const updatePasswordCheck = (check)=>{\n        file.IsPasswordProtected = check;\n        console.log(file);\n    };\n    const savePassword = ()=>{\n        if (passCheck) {\n            console.log(\"Password checked\");\n        } else {\n            console.log(\"Password check is not done!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-gray-400 md:p-4 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"#\",\n            className: \"mt-8 grid grid-cols-6 gap-6 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"ShortURL\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Short URL\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"ShortURL\",\n                                    name: \"first_name\",\n                                    disabled: true,\n                                    value: file === null || file === void 0 ? void 0 : file.ShortUrl,\n                                    className: \"p-2 pl-10 m-1 w-full rounded-md bg-gray-100 border-gray-400 text-sm text-gray-700 shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: \"absolute text-gray-500 ml-2.5 cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: \"passwordCheck\",\n                                    onChange: (value)=>{\n                                        setPassCheck(value === null || value === void 0 ? void 0 : value.target.checked);\n                                        updatePasswordCheck(value === null || value === void 0 ? void 0 : value.target.checked);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"Password\",\n                                    className: \"block text-sm ml-2 font-medium text-gray-700\",\n                                    children: [\n                                        \" \",\n                                        \"Password\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"Password\",\n                                    name: \"password\",\n                                    placeholder: \"Password!\",\n                                    className: \"p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2.5 bg-primary text-white px-4 py-1 rounded-md\",\n                                    onClick: ()=>savePassword(),\n                                    children: [\n                                        \" \",\n                                        \"Save\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12 border border-gray-200 rounded-md p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"Email\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: [\n                                    \" \",\n                                    \"Send to Email\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"Email\",\n                                name: \"Email\",\n                                placeholder: \"john.doe@mail.com\",\n                                className: \"p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-primary text-white rounded-lg py-1.5 my-2.5\",\n                            children: [\n                                \" \",\n                                \"Send Email\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(FileForm, \"BVb6HOT/Qhuuize44nsNlO8iTEk=\");\n_c = FileForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileForm);\nvar _c;\n$RefreshReg$(_c, \"FileForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9maWxlLXByZXZpZXcvW2ZpbGVJZF0vX2NvbXBvbmVudHMvRmlsZUZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNBO0FBRXhDLFNBQVNHLFNBQVMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUNoQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBO0lBRTFDLE1BQU1LLHNCQUFzQixDQUFDQztRQUMzQkosS0FBS0ssbUJBQW1CLEdBQUdEO1FBQzNCRSxRQUFRQyxHQUFHLENBQUNQO0lBQ2Q7SUFFQSxNQUFNUSxlQUFlO1FBQ25CLElBQUlQLFdBQVc7WUFDYkssUUFBUUMsR0FBRyxDQUFDO1FBQ2QsT0FBTztZQUNMRCxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUtDLFFBQU87WUFBSUYsV0FBVTs7OEJBQ3pCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUNDQyxTQUFROzRCQUNSSixXQUFVO3NDQUNYOzs7Ozs7c0NBSUQsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0s7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLFFBQVE7b0NBQ1JDLEtBQUssRUFBRXBCLGlCQUFBQSwyQkFBQUEsS0FBTXFCLFFBQVE7b0NBQ3JCWCxXQUFVOzs7Ozs7OENBRVosOERBQUNkLG9GQUFRQTtvQ0FBQ2MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUl4Qiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUNDQyxNQUFLO29DQUNMQyxJQUFHO29DQUNISyxVQUFVLENBQUNGO3dDQUNUbEIsYUFBYWtCLGtCQUFBQSw0QkFBQUEsTUFBT0csTUFBTSxDQUFDQyxPQUFPO3dDQUNsQ3JCLG9CQUFvQmlCLGtCQUFBQSw0QkFBQUEsTUFBT0csTUFBTSxDQUFDQyxPQUFPO29DQUMzQzs7Ozs7OzhDQUVGLDhEQUFDWDtvQ0FDQ0MsU0FBUTtvQ0FDUkosV0FBVTs7d0NBRVQ7d0NBQUk7d0NBQ0k7Ozs7Ozs7Ozs7Ozs7c0NBSWIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0s7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xPLGFBQVk7b0NBQ1pmLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ2dCO29DQUNDaEIsV0FBVTtvQ0FDVmlCLFNBQVMsSUFBTW5COzt3Q0FFZDt3Q0FBSTt3Q0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLWCw4REFBQ0M7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0c7Z0NBQ0NDLFNBQVE7Z0NBQ1JKLFdBQVU7O29DQUVUO29DQUFJO29DQUNTOzs7Ozs7Ozs7Ozs7c0NBSWxCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0s7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xPLGFBQVk7Z0NBQ1pmLFdBQVU7Ozs7Ozs7Ozs7O3NDQUlkLDhEQUFDZ0I7NEJBQU9oQixXQUFVOztnQ0FDZjtnQ0FBSTtnQ0FDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0dBMUdTWDtLQUFBQTtBQTRHVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvKHJvdXRlcykvZmlsZS1wcmV2aWV3L1tmaWxlSWRdL19jb21wb25lbnRzL0ZpbGVGb3JtLmpzPzM3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29weUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRmlsZUZvcm0oeyBmaWxlIH0pIHtcclxuICBjb25zdCBbcGFzc0NoZWNrLCBzZXRQYXNzQ2hlY2tdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUGFzc3dvcmRDaGVjayA9IChjaGVjaykgPT4ge1xyXG4gICAgZmlsZS5Jc1Bhc3N3b3JkUHJvdGVjdGVkID0gY2hlY2s7XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICBpZiAocGFzc0NoZWNrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUGFzc3dvcmQgY2hlY2tlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUGFzc3dvcmQgY2hlY2sgaXMgbm90IGRvbmUhXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTQwMCBtZDpwLTQgdy1mdWxsXCI+XHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJtdC04IGdyaWQgZ3JpZC1jb2xzLTYgZ2FwLTYgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMlwiPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJTaG9ydFVSTFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNob3J0IFVSTFxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJTaG9ydFVSTFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ZpbGU/LlNob3J0VXJsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBwbC0xMCBtLTEgdy1mdWxsIHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktNDAwIHRleHQtc20gdGV4dC1ncmF5LTcwMCBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29weUljb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1ncmF5LTUwMCBtbC0yLjUgY3Vyc29yLXBvaW50ZXJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRDaGVja1wiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UGFzc0NoZWNrKHZhbHVlPy50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVQYXNzd29yZENoZWNrKHZhbHVlPy50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgaHRtbEZvcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIG1sLTIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgUGFzc3dvcmR7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkIVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIG10LTEgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktNDAwIGJnLWdyYXktNTAgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yLjUgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHB4LTQgcHktMSByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzYXZlUGFzc3dvcmQoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICBTYXZle1wiIFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1tZCBwLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBodG1sRm9yPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgU2VuZCB0byBFbWFpbHtcIiBcIn1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huLmRvZUBtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIG10LTEgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktNDAwIGJnLWdyYXktNTAgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgcm91bmRlZC1sZyBweS0xLjUgbXktMi41XCI+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgU2VuZCBFbWFpbHtcIiBcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlRm9ybTtcclxuIl0sIm5hbWVzIjpbIkNvcHlJY29uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZpbGVGb3JtIiwiZmlsZSIsInBhc3NDaGVjayIsInNldFBhc3NDaGVjayIsInVwZGF0ZVBhc3N3b3JkQ2hlY2siLCJjaGVjayIsIklzUGFzc3dvcmRQcm90ZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwic2F2ZVBhc3N3b3JkIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImFjdGlvbiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsImRpc2FibGVkIiwidmFsdWUiLCJTaG9ydFVybCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiY2hlY2tlZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileForm.js\n"));

/***/ })

});