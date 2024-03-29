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

/***/ "(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/page.js":
/*!****************************************************************!*\
  !*** ./app/(dashboard)/(routes)/file-preview/[fileId]/page.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/FirebaseConfig */ \"(app-pages-browser)/./FirebaseConfig.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FileInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/FileInfo */ \"(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileInfo.js\");\n/* harmony import */ var _components_FileForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/FileForm */ \"(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/_components/FileForm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftSquare_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftSquare!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/square-arrow-left.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction FilePreview(param) {\n    let { params } = param;\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getFIleInfo(params.fileId);\n    }, []);\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__.app);\n    const getFIleInfo = async (id)=>{\n        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"Uploaded_Files\", id);\n        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);\n        if (docSnap.exists()) {\n            // console.log(\"Document data:\", docSnap.data());\n            setFile(docSnap.data());\n        } else {\n            // docSnap.data() will be undefined in this case\n            console.log(\"No such document!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-4 px-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                href: \"/uploads\",\n                className: \"flex gap-5 my-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftSquare_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\page.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    \" Go Back\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 flex-col md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FileInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        file: file\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FileForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        file: file\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\page.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\file-preview\\\\[fileId]\\\\page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(FilePreview, \"Jhki08jVEMJI2KiupUVAwO50QXo=\");\n_c = FilePreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilePreview);\nvar _c;\n$RefreshReg$(_c, \"FilePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9maWxlLXByZXZpZXcvW2ZpbGVJZF0vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDdUM7QUFDd0I7QUFDWjtBQUNMO0FBQ0E7QUFDakI7QUFDa0I7QUFFL0MsU0FBU1csWUFBWSxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7O0lBQ25CLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUE7SUFDaENELGdEQUFTQSxDQUFDO1FBQ1JVLFlBQVlILE9BQU9JLE1BQU07SUFDM0IsR0FBRyxFQUFFO0lBRUwsTUFBTUMsS0FBS2QsZ0VBQVlBLENBQUNILGdEQUFHQTtJQUUzQixNQUFNZSxjQUFjLE9BQU9HO1FBQ3pCLE1BQU1DLFNBQVNsQix1REFBR0EsQ0FBQ2dCLElBQUksa0JBQWtCQztRQUN6QyxNQUFNRSxVQUFVLE1BQU1sQiwwREFBTUEsQ0FBQ2lCO1FBRTdCLElBQUlDLFFBQVFDLE1BQU0sSUFBSTtZQUNwQixpREFBaUQ7WUFDakRQLFFBQVFNLFFBQVFFLElBQUk7UUFDdEIsT0FBTztZQUNMLGdEQUFnRDtZQUNoREMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2pCLGlEQUFJQTtnQkFBQ2tCLE1BQUs7Z0JBQVdELFdBQVU7O2tDQUM5Qiw4REFBQ2hCLDJGQUFlQTs7Ozs7b0JBQUc7Ozs7Ozs7MEJBRW5CLDhEQUFDZTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNuQiw0REFBUUE7d0JBQUNNLE1BQU1BOzs7Ozs7a0NBQ2hCLDhEQUFDTCw0REFBUUE7d0JBQUNLLE1BQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUI7R0FoQ1NGO0tBQUFBO0FBa0NULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9maWxlLXByZXZpZXcvW2ZpbGVJZF0vcGFnZS5qcz8yMGFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiQC9GaXJlYmFzZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBkb2MsIGdldERvYywgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmlsZUluZm8gZnJvbSBcIi4vX2NvbXBvbmVudHMvRmlsZUluZm9cIjtcclxuaW1wb3J0IEZpbGVGb3JtIGZyb20gXCIuL19jb21wb25lbnRzL0ZpbGVGb3JtXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQXJyb3dMZWZ0U3F1YXJlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRmlsZVByZXZpZXcoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZJbGVJbmZvKHBhcmFtcy5maWxlSWQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuXHJcbiAgY29uc3QgZ2V0RklsZUluZm8gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJVcGxvYWRlZF9GaWxlc1wiLCBpZCk7XHJcbiAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7XHJcblxyXG4gICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJEb2N1bWVudCBkYXRhOlwiLCBkb2NTbmFwLmRhdGEoKSk7XHJcbiAgICAgIHNldEZpbGUoZG9jU25hcC5kYXRhKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZG9jU25hcC5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBweC0xMFwiPlxyXG4gICAgICA8TGluayBocmVmPScvdXBsb2FkcycgY2xhc3NOYW1lPVwiZmxleCBnYXAtNSBteS0yIFwiPlxyXG4gICAgICAgIDxBcnJvd0xlZnRTcXVhcmUgLz4gR28gQmFjayBcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiID5cclxuICAgICAgICAgIDxGaWxlSW5mbyBmaWxlPXtmaWxlfSAvPlxyXG4gICAgICAgICAgPEZpbGVGb3JtIGZpbGU9e2ZpbGV9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVQcmV2aWV3O1xyXG4iXSwibmFtZXMiOlsiYXBwIiwiZG9jIiwiZ2V0RG9jIiwiZ2V0RmlyZXN0b3JlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZpbGVJbmZvIiwiRmlsZUZvcm0iLCJMaW5rIiwiQXJyb3dMZWZ0U3F1YXJlIiwiRmlsZVByZXZpZXciLCJwYXJhbXMiLCJmaWxlIiwic2V0RmlsZSIsImdldEZJbGVJbmZvIiwiZmlsZUlkIiwiZGIiLCJpZCIsImRvY1JlZiIsImRvY1NuYXAiLCJleGlzdHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/file-preview/[fileId]/page.js\n"));

/***/ })

});