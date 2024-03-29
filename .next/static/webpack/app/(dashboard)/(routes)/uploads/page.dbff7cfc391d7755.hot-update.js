"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/(routes)/uploads/page",{

/***/ "(app-pages-browser)/./app/(dashboard)/(routes)/uploads/page.js":
/*!**************************************************!*\
  !*** ./app/(dashboard)/(routes)/uploads/page.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UploadForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/UploadForm */ \"(app-pages-browser)/./app/(dashboard)/(routes)/uploads/_components/UploadForm.js\");\n/* harmony import */ var _FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/FirebaseConfig */ \"(app-pages-browser)/./FirebaseConfig.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_UploadSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/UploadSuccess */ \"(app-pages-browser)/./app/(dashboard)/(routes)/uploads/_components/UploadSuccess.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* harmony import */ var _app_utils_ShortUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/_utils/ShortUrl */ \"(app-pages-browser)/./app/_utils/ShortUrl.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var turl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! turl */ \"(app-pages-browser)/./node_modules/turl/index.js\");\n/* harmony import */ var turl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(turl__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Uploads() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useUser)();\n    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__.app);\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__.app);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showSuccess, setShowSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [uploadCompleted, setUploadCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileId, setFileId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const uploadFile = (file)=>{\n        const metadata = {\n            contentType: file.type\n        };\n        const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, \"User_Files/\" + (file === null || file === void 0 ? void 0 : file.name));\n        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(fileRef, file, metadata);\n        // Listen for state changes, errors, and completion of the upload.\n        uploadTask.on(\"state_changed\", (snapshot)=>{\n            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded\n            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;\n            setProgress(progress);\n        }, (error)=>{\n            // A full list of error codes is available at\n            // https://firebase.google.com/docs/storage/web/handle-errors\n            console.log(error);\n        }, ()=>{\n            setShowSuccess(true);\n            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(uploadTask.snapshot.ref).then((downloadURL)=>{\n                saveToStore(file, downloadURL);\n            });\n        });\n    };\n    const saveToStore = async (file, fileUrl)=>{\n        const docId = Date.now().toString();\n        const turlRef = (turl__WEBPACK_IMPORTED_MODULE_9___default());\n        await (turlRef === null || turlRef === void 0 ? void 0 : turlRef.shorten(fileUrl).then((res)=>{\n            res != \"\" && (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(db, \"Uploaded_Files\", docId), {\n                FileId: docId,\n                FileName: file.name,\n                FileType: file.type,\n                FileSize: file.size,\n                UserEmail: user.primaryEmailAddress.emailAddress,\n                UserName: user.username,\n                UserFullName: user.fullName,\n                FileUrl: fileUrl,\n                UserId: user.id,\n                UserImageUrl: user.imageUrl,\n                UserPhone: user.primaryPhoneNumber.phoneNumber,\n                Password: \"\",\n                IsPasswordProtected: false,\n                ShortUrl: res + \"\"\n            }).then(()=>{\n                setUploadCompleted(true);\n                setFileId(docId);\n            });\n        }).catch((err)=>{\n            console.log(err);\n        }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        uploadCompleted && fileId && setTimeout(()=>{\n            setUploadCompleted(false);\n            setShowSuccess(false);\n            router.push(\"/file-preview/\" + fileId);\n        }, 2000);\n    }, [\n        uploadCompleted == true\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed\",\n                style: {\n                    display: \"\".concat(showSuccess == true ? \"\" : \"none\")\n                },\n                children: [\n                    showSuccess == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadSuccess__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        msg: \"Uploaded succcessfully!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this) : null,\n                    setTimeout(()=>{\n                        setShowSuccess(false);\n                    }, 3000)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                uploadSelectedFile: (data)=>uploadFile(data),\n                progress: progress\n            }, void 0, false, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, this);\n}\n_s(Uploads, \"cG5LNj4AUhbx+E5WyMwYCBFZfCI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useUser\n    ];\n});\n_c = Uploads;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uploads);\nvar _c;\n$RefreshReg$(_c, \"Uploads\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS91cGxvYWRzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNEO0FBQ1g7QUFNYjtBQUNxQztBQUNQO0FBQ2hCO0FBQ0s7QUFDRDtBQUNwQjtBQUV4QixTQUFTaUI7O0lBQ1AsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRUksSUFBSSxFQUFFLEdBQUdOLHVEQUFPQTtJQUN4QixNQUFNTyxVQUFVZiw0REFBVUEsQ0FBQ0QsZ0RBQUdBO0lBQzlCLE1BQU1pQixLQUFLWixnRUFBWUEsQ0FBQ0wsZ0RBQUdBO0lBQzNCLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3NCLGFBQWFDLGVBQWUsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3dCLGlCQUFpQkMsbUJBQW1CLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUMwQixRQUFRQyxVQUFVLEdBQUczQiwrQ0FBUUE7SUFFcEMsTUFBTTRCLGFBQWEsQ0FBQ0M7UUFDbEIsTUFBTUMsV0FBVztZQUNmQyxhQUFhRixLQUFLRyxJQUFJO1FBQ3hCO1FBRUEsTUFBTUMsVUFBVTdCLHFEQUFHQSxDQUFDYyxTQUFTLGlCQUFnQlcsaUJBQUFBLDJCQUFBQSxLQUFNSyxJQUFJO1FBQ3ZELE1BQU1DLGFBQWE5QixzRUFBb0JBLENBQUM0QixTQUFTSixNQUFNQztRQUV2RCxrRUFBa0U7UUFDbEVLLFdBQVdDLEVBQUUsQ0FDWCxpQkFDQSxDQUFDQztZQUNDLHlHQUF5RztZQUN6RyxNQUFNakIsV0FDSixTQUFVa0IsZ0JBQWdCLEdBQUdELFNBQVNFLFVBQVUsR0FBSTtZQUN0RGxCLFlBQVlEO1FBQ2QsR0FDQSxDQUFDb0I7WUFDQyw2Q0FBNkM7WUFDN0MsNkRBQTZEO1lBQzdEQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2QsR0FDQTtZQUNFakIsZUFBZTtZQUNmakIsZ0VBQWNBLENBQUM2QixXQUFXRSxRQUFRLENBQUNqQyxHQUFHLEVBQUV1QyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQzVDQyxZQUFZaEIsTUFBTWU7WUFDcEI7UUFDRjtJQUVKO0lBRUEsTUFBTUMsY0FBYyxPQUFPaEIsTUFBTWlCO1FBQy9CLE1BQU1DLFFBQVFDLEtBQUtDLEdBQUcsR0FBR0MsUUFBUTtRQUNqQyxNQUFNQyxVQUFVckMsNkNBQUlBO1FBRXBCLE9BQU1xQyxvQkFBQUEsOEJBQUFBLFFBQ0ZDLE9BQU8sQ0FBQ04sU0FDVEgsSUFBSSxDQUFDLENBQUNVO1lBRUxBLE9BQU8sTUFDTDVDLDBEQUFNQSxDQUFDRCx1REFBR0EsQ0FBQ1csSUFBSSxrQkFBa0I0QixRQUFRO2dCQUN2Q08sUUFBUVA7Z0JBQ1JRLFVBQVUxQixLQUFLSyxJQUFJO2dCQUNuQnNCLFVBQVUzQixLQUFLRyxJQUFJO2dCQUNuQnlCLFVBQVU1QixLQUFLNkIsSUFBSTtnQkFDbkJDLFdBQVcxQyxLQUFLMkMsbUJBQW1CLENBQUNDLFlBQVk7Z0JBQ2hEQyxVQUFVN0MsS0FBSzhDLFFBQVE7Z0JBQ3ZCQyxjQUFjL0MsS0FBS2dELFFBQVE7Z0JBQzNCQyxTQUFTcEI7Z0JBQ1RxQixRQUFRbEQsS0FBS21ELEVBQUU7Z0JBQ2ZDLGNBQWNwRCxLQUFLcUQsUUFBUTtnQkFDM0JDLFdBQVd0RCxLQUFLdUQsa0JBQWtCLENBQUNDLFdBQVc7Z0JBQzlDQyxVQUFVO2dCQUNWQyxxQkFBcUI7Z0JBQ3JCL0QsVUFBVXlDLE1BQU07WUFDbEIsR0FBR1YsSUFBSSxDQUFDO2dCQUNObEIsbUJBQW1CO2dCQUNuQkUsVUFBVW9CO1lBQ1o7UUFDSixHQUNDNkIsS0FBSyxDQUFDLENBQUNDO1lBQ05wQyxRQUFRQyxHQUFHLENBQUNtQztRQUNkO0lBQ0o7SUFFQTlFLGdEQUFTQSxDQUFDO1FBQ1J5QixtQkFDRUUsVUFDQW9ELFdBQVc7WUFDVHJELG1CQUFtQjtZQUNuQkYsZUFBZTtZQUNmUCxPQUFPK0QsSUFBSSxDQUFDLG1CQUFtQnJEO1FBQ2pDLEdBQUc7SUFDUCxHQUFHO1FBQUNGLG1CQUFtQjtLQUFLO0lBRTVCLHFCQUNFLDhEQUFDd0Q7OzBCQUNDLDhEQUFDQTtnQkFDQ0MsV0FBVTtnQkFDVkMsT0FBTztvQkFBRUMsU0FBUyxHQUFxQyxPQUFsQzdELGVBQWUsT0FBTyxLQUFLO2dCQUFTOztvQkFFeERBLGVBQWUscUJBQ2QsOERBQUNaLGlFQUFhQTt3QkFBQzBFLEtBQUs7Ozs7OytCQUNsQjtvQkFFSE4sV0FBVzt3QkFDVnZELGVBQWU7b0JBQ2pCLEdBQUc7Ozs7Ozs7MEJBRUwsOERBQUN0Qiw4REFBVUE7Z0JBQ1RvRixvQkFBb0IsQ0FBQ0MsT0FBUzFELFdBQVcwRDtnQkFDekNsRSxVQUFVQTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBekdTTDs7UUFDUUYsc0RBQVNBO1FBQ1BGLG1EQUFPQTs7O0tBRmpCSTtBQTJHVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvKHJvdXRlcykvdXBsb2Fkcy9wYWdlLmpzP2ZmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVcGxvYWRGb3JtIGZyb20gXCIuL19jb21wb25lbnRzL1VwbG9hZEZvcm1cIjtcclxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIkAvRmlyZWJhc2VDb25maWdcIjtcclxuaW1wb3J0IHtcclxuICBnZXRTdG9yYWdlLFxyXG4gIHJlZixcclxuICB1cGxvYWRCeXRlc1Jlc3VtYWJsZSxcclxuICBnZXREb3dubG9hZFVSTCxcclxufSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgc2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgVXBsb2FkU3VjY2VzcyBmcm9tIFwiLi9fY29tcG9uZW50cy9VcGxvYWRTdWNjZXNzXCI7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwiQGNsZXJrL25leHRqc1wiO1xyXG5pbXBvcnQgU2hvcnRVcmwgZnJvbSBcIkAvYXBwL191dGlscy9TaG9ydFVybFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB0dXJsIGZyb20gXCJ0dXJsXCI7XHJcblxyXG5mdW5jdGlvbiBVcGxvYWRzKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCk7XHJcbiAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaG93U3VjY2Vzcywgc2V0U2hvd1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRDb21wbGV0ZWQsIHNldFVwbG9hZENvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbGVJZCwgc2V0RmlsZUlkXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IHVwbG9hZEZpbGUgPSAoZmlsZSkgPT4ge1xyXG4gICAgY29uc3QgbWV0YWRhdGEgPSB7XHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbGVSZWYgPSByZWYoc3RvcmFnZSwgXCJVc2VyX0ZpbGVzL1wiICsgZmlsZT8ubmFtZSk7XHJcbiAgICBjb25zdCB1cGxvYWRUYXNrID0gdXBsb2FkQnl0ZXNSZXN1bWFibGUoZmlsZVJlZiwgZmlsZSwgbWV0YWRhdGEpO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3Igc3RhdGUgY2hhbmdlcywgZXJyb3JzLCBhbmQgY29tcGxldGlvbiBvZiB0aGUgdXBsb2FkLlxyXG4gICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgXCJzdGF0ZV9jaGFuZ2VkXCIsXHJcbiAgICAgIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIC8vIEdldCB0YXNrIHByb2dyZXNzLCBpbmNsdWRpbmcgdGhlIG51bWJlciBvZiBieXRlcyB1cGxvYWRlZCBhbmQgdGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyB0byBiZSB1cGxvYWRlZFxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID1cclxuICAgICAgICAgIChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBIGZ1bGwgbGlzdCBvZiBlcnJvciBjb2RlcyBpcyBhdmFpbGFibGUgYXRcclxuICAgICAgICAvLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9zdG9yYWdlL3dlYi9oYW5kbGUtZXJyb3JzXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd1N1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAgICAgZ2V0RG93bmxvYWRVUkwodXBsb2FkVGFzay5zbmFwc2hvdC5yZWYpLnRoZW4oKGRvd25sb2FkVVJMKSA9PiB7XHJcbiAgICAgICAgICBzYXZlVG9TdG9yZShmaWxlLCBkb3dubG9hZFVSTCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2F2ZVRvU3RvcmUgPSBhc3luYyAoZmlsZSwgZmlsZVVybCkgPT4ge1xyXG4gICAgY29uc3QgZG9jSWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCB0dXJsUmVmID0gdHVybDtcclxuXHJcbiAgICBhd2FpdCB0dXJsUmVmXHJcbiAgICAgID8uc2hvcnRlbihmaWxlVXJsKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcblxyXG4gICAgICAgIHJlcyAhPSBcIlwiICYmXHJcbiAgICAgICAgICBzZXREb2MoZG9jKGRiLCBcIlVwbG9hZGVkX0ZpbGVzXCIsIGRvY0lkKSwge1xyXG4gICAgICAgICAgICBGaWxlSWQ6IGRvY0lkLFxyXG4gICAgICAgICAgICBGaWxlTmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICBGaWxlVHlwZTogZmlsZS50eXBlLFxyXG4gICAgICAgICAgICBGaWxlU2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICAgICAgICBVc2VyRW1haWw6IHVzZXIucHJpbWFyeUVtYWlsQWRkcmVzcy5lbWFpbEFkZHJlc3MsXHJcbiAgICAgICAgICAgIFVzZXJOYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBVc2VyRnVsbE5hbWU6IHVzZXIuZnVsbE5hbWUsXHJcbiAgICAgICAgICAgIEZpbGVVcmw6IGZpbGVVcmwsXHJcbiAgICAgICAgICAgIFVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICAgICAgVXNlckltYWdlVXJsOiB1c2VyLmltYWdlVXJsLFxyXG4gICAgICAgICAgICBVc2VyUGhvbmU6IHVzZXIucHJpbWFyeVBob25lTnVtYmVyLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICBQYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgSXNQYXNzd29yZFByb3RlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIFNob3J0VXJsOiByZXMgKyAnJyxcclxuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRVcGxvYWRDb21wbGV0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldEZpbGVJZChkb2NJZCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBsb2FkQ29tcGxldGVkICYmXHJcbiAgICAgIGZpbGVJZCAmJlxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRVcGxvYWRDb21wbGV0ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dTdWNjZXNzKGZhbHNlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9maWxlLXByZXZpZXcvXCIgKyBmaWxlSWQpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICB9LCBbdXBsb2FkQ29tcGxldGVkID09IHRydWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZFwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogYCR7c2hvd1N1Y2Nlc3MgPT0gdHJ1ZSA/IFwiXCIgOiBcIm5vbmVcIn1gIH19XHJcbiAgICAgID5cclxuICAgICAgICB7c2hvd1N1Y2Nlc3MgPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxVcGxvYWRTdWNjZXNzIG1zZz17XCJVcGxvYWRlZCBzdWNjY2Vzc2Z1bGx5IVwifSAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHsvKiA8VXBsb2FkU3VjY2VzcyBtc2c9e1wiVXBsb2FkZWQgc3VjY2Nlc3NmdWxseSFcIn0gLz4gKi99XHJcbiAgICAgICAge3NldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2hvd1N1Y2Nlc3MoZmFsc2UpO1xyXG4gICAgICAgIH0sIDMwMDApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFVwbG9hZEZvcm1cclxuICAgICAgICB1cGxvYWRTZWxlY3RlZEZpbGU9eyhkYXRhKSA9PiB1cGxvYWRGaWxlKGRhdGEpfVxyXG4gICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXBsb2FkRm9ybSIsImFwcCIsImdldFN0b3JhZ2UiLCJyZWYiLCJ1cGxvYWRCeXRlc1Jlc3VtYWJsZSIsImdldERvd25sb2FkVVJMIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwic2V0RG9jIiwiVXBsb2FkU3VjY2VzcyIsInVzZVVzZXIiLCJTaG9ydFVybCIsInVzZVJvdXRlciIsInR1cmwiLCJVcGxvYWRzIiwicm91dGVyIiwidXNlciIsInN0b3JhZ2UiLCJkYiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwidXBsb2FkQ29tcGxldGVkIiwic2V0VXBsb2FkQ29tcGxldGVkIiwiZmlsZUlkIiwic2V0RmlsZUlkIiwidXBsb2FkRmlsZSIsImZpbGUiLCJtZXRhZGF0YSIsImNvbnRlbnRUeXBlIiwidHlwZSIsImZpbGVSZWYiLCJuYW1lIiwidXBsb2FkVGFzayIsIm9uIiwic25hcHNob3QiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJkb3dubG9hZFVSTCIsInNhdmVUb1N0b3JlIiwiZmlsZVVybCIsImRvY0lkIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwidHVybFJlZiIsInNob3J0ZW4iLCJyZXMiLCJGaWxlSWQiLCJGaWxlTmFtZSIsIkZpbGVUeXBlIiwiRmlsZVNpemUiLCJzaXplIiwiVXNlckVtYWlsIiwicHJpbWFyeUVtYWlsQWRkcmVzcyIsImVtYWlsQWRkcmVzcyIsIlVzZXJOYW1lIiwidXNlcm5hbWUiLCJVc2VyRnVsbE5hbWUiLCJmdWxsTmFtZSIsIkZpbGVVcmwiLCJVc2VySWQiLCJpZCIsIlVzZXJJbWFnZVVybCIsImltYWdlVXJsIiwiVXNlclBob25lIiwicHJpbWFyeVBob25lTnVtYmVyIiwicGhvbmVOdW1iZXIiLCJQYXNzd29yZCIsIklzUGFzc3dvcmRQcm90ZWN0ZWQiLCJjYXRjaCIsImVyciIsInNldFRpbWVvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwibXNnIiwidXBsb2FkU2VsZWN0ZWRGaWxlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/uploads/page.js\n"));

/***/ })

});