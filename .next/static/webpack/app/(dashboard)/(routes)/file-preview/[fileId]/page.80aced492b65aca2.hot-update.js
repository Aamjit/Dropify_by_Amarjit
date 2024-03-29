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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/FirebaseConfig */ \"(app-pages-browser)/./FirebaseConfig.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CopyIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction FileForm(param) {\n    let { file } = param;\n    _s();\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__.app);\n    const [passCheck, setPassCheck] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    // const updatePasswordCheck = (check) => {\n    //   file.IsPasswordProtected = check;\n    // };\n    const updatePassword = async ()=>{\n        const passwordValid = checkPasswordValidity(newPassword);\n        if (!passwordValid) {\n            console.log(\"Password is not valid/strong.\");\n            return;\n        }\n        if (passCheck) {\n            console.log(\"Password checked\");\n            const fileRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"Uploaded_Files\", file.FileId);\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(fileRef, {\n                IsPasswordProtected: passCheck,\n                Password: newPassword\n            }).then((res)=>console.log(res));\n        } else {\n            console.log(\"Password check is not done!\");\n        }\n    };\n    const checkPasswordValidity = (password)=>{\n        if (password.length < 8) {\n            return false;\n        } else {\n            return true;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-gray-400 md:p-4 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"#\",\n            className: \"mt-8 grid grid-cols-6 gap-6 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"ShortURL\",\n                            className: \"block text-sm font-medium text-gray-700\",\n                            children: \"Short URL\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"ShortURL\",\n                                    name: \"first_name\",\n                                    disabled: true,\n                                    value: file === null || file === void 0 ? void 0 : file.ShortUrl,\n                                    className: \"p-2 pl-10 m-1 w-full rounded-md bg-gray-100 border-gray-400 text-sm text-gray-700 shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"absolute text-gray-500 ml-2.5 cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: \"passwordCheck\",\n                                    onChange: (value)=>{\n                                        setPassCheck(value === null || value === void 0 ? void 0 : value.target.checked);\n                                        updatePasswordCheck(value === null || value === void 0 ? void 0 : value.target.checked);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"Password\",\n                                    className: \"block text-sm ml-2 font-medium text-gray-700\",\n                                    children: [\n                                        \" \",\n                                        \"Password\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"Password\",\n                                    name: \"password\",\n                                    placeholder: \"Password!\",\n                                    onChange: (event)=>{\n                                        setNewPassword(event.target.value);\n                                    },\n                                    className: \"p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2.5 bg-primary text-white px-4 py-1 rounded-md\",\n                                    onClick: ()=>updatePassword(),\n                                    children: [\n                                        \" \",\n                                        \"Save\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-12 border border-gray-200 rounded-md p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"Email\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: [\n                                    \" \",\n                                    \"Send to Email\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"Email\",\n                                name: \"Email\",\n                                placeholder: \"john.doe@mail.com\",\n                                className: \"p-2 mt-1 w-full rounded-md border-gray-400 bg-gray-50 text-sm text-gray-700 shadow-md\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-primary text-white rounded-lg py-1.5 my-2.5\",\n                            children: [\n                                \" \",\n                                \"Send Email\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\_components\\\\FileForm.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(FileForm, \"kf+WyyGLiuPWQBzCywR8/nuUM8Q=\");\n_c = FileForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileForm);\nvar _c;\n$RefreshReg$(_c, \"FileForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9maWxlLXByZXZpZXcvW2ZpbGVJZF0vX2NvbXBvbmVudHMvRmlsZUZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBQzJCO0FBQzFCO0FBQ0E7QUFFeEMsU0FBU08sU0FBUyxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7O0lBQ2hCLE1BQU1DLEtBQUtQLGdFQUFZQSxDQUFDRixnREFBR0E7SUFDM0IsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQTtJQUMxQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBO0lBRTlDLDJDQUEyQztJQUMzQyxzQ0FBc0M7SUFDdEMsS0FBSztJQUVMLE1BQU1RLGlCQUFpQjtRQUNyQixNQUFNQyxnQkFBZ0JDLHNCQUFzQko7UUFDNUMsSUFBSSxDQUFDRyxlQUFlO1lBQ2xCRSxRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNGO1FBQ0EsSUFBSVIsV0FBVztZQUNiTyxRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNQyxVQUFVbEIsdURBQUdBLENBQUNRLElBQUksa0JBQWtCRCxLQUFLWSxNQUFNO1lBQ3JELE1BQU1qQiw2REFBU0EsQ0FBQ2dCLFNBQVM7Z0JBQ3ZCRSxxQkFBc0JYO2dCQUN0QlksVUFBVVY7WUFDWixHQUFHVyxJQUFJLENBQUMsQ0FBQ0MsTUFBUVAsUUFBUUMsR0FBRyxDQUFDTTtRQUMvQixPQUFPO1lBQ0xQLFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxNQUFNRix3QkFBd0IsQ0FBQ1M7UUFDN0IsSUFBSUEsU0FBU0MsTUFBTSxHQUFHLEdBQUc7WUFDdkIsT0FBTztRQUNULE9BQU87WUFDTCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFLQyxRQUFPO1lBQUlGLFdBQVU7OzhCQUN6Qiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFDQ0MsU0FBUTs0QkFDUkosV0FBVTtzQ0FDWDs7Ozs7O3NDQUlELDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUNDQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxNQUFLO29DQUNMQyxRQUFRO29DQUNSQyxLQUFLLEVBQUU5QixpQkFBQUEsMkJBQUFBLEtBQU0rQixRQUFRO29DQUNyQlgsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDeEIsb0ZBQVFBO29DQUFDd0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUl4Qiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUNDQyxNQUFLO29DQUNMQyxJQUFHO29DQUNISyxVQUFVLENBQUNGO3dDQUNUM0IsYUFBYTJCLGtCQUFBQSw0QkFBQUEsTUFBT0csTUFBTSxDQUFDQyxPQUFPO3dDQUNsQ0Msb0JBQW9CTCxrQkFBQUEsNEJBQUFBLE1BQU9HLE1BQU0sQ0FBQ0MsT0FBTztvQ0FDM0M7Ozs7Ozs4Q0FFRiw4REFBQ1g7b0NBQ0NDLFNBQVE7b0NBQ1JKLFdBQVU7O3dDQUVUO3dDQUFJO3dDQUNJOzs7Ozs7Ozs7Ozs7O3NDQUliLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUNDQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxNQUFLO29DQUNMUSxhQUFZO29DQUNaSixVQUFVLENBQUNLO3dDQUNUaEMsZUFBZWdDLE1BQU1KLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDbkM7b0NBQ0FWLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ2tCO29DQUNDbEIsV0FBVTtvQ0FDVm1CLFNBQVMsSUFBTWpDOzt3Q0FFZDt3Q0FBSTt3Q0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLWCw4REFBQ2E7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0c7Z0NBQ0NDLFNBQVE7Z0NBQ1JKLFdBQVU7O29DQUVUO29DQUFJO29DQUNTOzs7Ozs7Ozs7Ozs7c0NBSWxCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0s7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xRLGFBQVk7Z0NBQ1poQixXQUFVOzs7Ozs7Ozs7OztzQ0FJZCw4REFBQ2tCOzRCQUFPbEIsV0FBVTs7Z0NBQ2Y7Z0NBQUk7Z0NBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtHQWhJU3JCO0tBQUFBO0FBa0lULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9maWxlLXByZXZpZXcvW2ZpbGVJZF0vX2NvbXBvbmVudHMvRmlsZUZvcm0uanM/Mzc5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAgfSBmcm9tIFwiQC9GaXJlYmFzZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBkb2MsIGdldEZpcmVzdG9yZSwgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBDb3B5SWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGaWxlRm9ybSh7IGZpbGUgfSkge1xyXG4gIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgY29uc3QgW3Bhc3NDaGVjaywgc2V0UGFzc0NoZWNrXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAvLyBjb25zdCB1cGRhdGVQYXNzd29yZENoZWNrID0gKGNoZWNrKSA9PiB7XHJcbiAgLy8gICBmaWxlLklzUGFzc3dvcmRQcm90ZWN0ZWQgPSBjaGVjaztcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVQYXNzd29yZCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSBjaGVja1Bhc3N3b3JkVmFsaWRpdHkobmV3UGFzc3dvcmQpO1xyXG4gICAgaWYgKCFwYXNzd29yZFZhbGlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUGFzc3dvcmQgaXMgbm90IHZhbGlkL3N0cm9uZy5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwYXNzQ2hlY2spIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQYXNzd29yZCBjaGVja2VkXCIpO1xyXG4gICAgICBjb25zdCBmaWxlUmVmID0gZG9jKGRiLCBcIlVwbG9hZGVkX0ZpbGVzXCIsIGZpbGUuRmlsZUlkKTtcclxuICAgICAgYXdhaXQgdXBkYXRlRG9jKGZpbGVSZWYsIHtcclxuICAgICAgICBJc1Bhc3N3b3JkUHJvdGVjdGVkIDogcGFzc0NoZWNrLFxyXG4gICAgICAgIFBhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUGFzc3dvcmQgY2hlY2sgaXMgbm90IGRvbmUhXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmRWYWxpZGl0eSA9IChwYXNzd29yZCkgPT4ge1xyXG4gICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktNDAwIG1kOnAtNCB3LWZ1bGxcIj5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cIm10LTggZ3JpZCBncmlkLWNvbHMtNiBnYXAtNiBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyXCI+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cIlNob3J0VVJMXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2hvcnQgVVJMXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cIlNob3J0VVJMXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17ZmlsZT8uU2hvcnRVcmx9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHBsLTEwIG0tMSB3LWZ1bGwgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBib3JkZXItZ3JheS00MDAgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb3B5SWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LWdyYXktNTAwIG1sLTIuNSBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZENoZWNrXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQYXNzQ2hlY2sodmFsdWU/LnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVBhc3N3b3JkQ2hlY2sodmFsdWU/LnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBodG1sRm9yPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gbWwtMiBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICBQYXNzd29yZHtcIiBcIn1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQhXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROZXdQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIG10LTEgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktNDAwIGJnLWdyYXktNTAgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yLjUgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHB4LTQgcHktMSByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVQYXNzd29yZCgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIFNhdmV7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLW1kIHAtNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICBTZW5kIHRvIEVtYWlse1wiIFwifVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImpvaG4uZG9lQG1haWwuY29tXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgbXQtMSB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItZ3JheS00MDAgYmctZ3JheS01MCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXByaW1hcnkgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHB5LTEuNSBteS0yLjVcIj5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICBTZW5kIEVtYWlse1wiIFwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVGb3JtO1xyXG4iXSwibmFtZXMiOlsiYXBwIiwiZG9jIiwiZ2V0RmlyZXN0b3JlIiwidXBkYXRlRG9jIiwiQ29weUljb24iLCJSZWFjdCIsInVzZVN0YXRlIiwiRmlsZUZvcm0iLCJmaWxlIiwiZGIiLCJwYXNzQ2hlY2siLCJzZXRQYXNzQ2hlY2siLCJuZXdQYXNzd29yZCIsInNldE5ld1Bhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkIiwiY2hlY2tQYXNzd29yZFZhbGlkaXR5IiwiY29uc29sZSIsImxvZyIsImZpbGVSZWYiLCJGaWxlSWQiLCJJc1Bhc3N3b3JkUHJvdGVjdGVkIiwiUGFzc3dvcmQiLCJ0aGVuIiwicmVzIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwiZGlzYWJsZWQiLCJ2YWx1ZSIsIlNob3J0VXJsIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjaGVja2VkIiwidXBkYXRlUGFzc3dvcmRDaGVjayIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileForm.js\n"));

/***/ })

});