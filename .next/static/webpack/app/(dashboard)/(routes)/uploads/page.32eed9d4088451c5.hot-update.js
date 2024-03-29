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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UploadForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/UploadForm */ \"(app-pages-browser)/./app/(dashboard)/(routes)/uploads/_components/UploadForm.js\");\n/* harmony import */ var _FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/FirebaseConfig */ \"(app-pages-browser)/./FirebaseConfig.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_UploadSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/UploadSuccess */ \"(app-pages-browser)/./app/(dashboard)/(routes)/uploads/_components/UploadSuccess.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* harmony import */ var _app_utils_ShortUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/_utils/ShortUrl */ \"(app-pages-browser)/./app/_utils/ShortUrl.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var turl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! turl */ \"(app-pages-browser)/./node_modules/turl/index.js\");\n/* harmony import */ var turl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(turl__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Uploads() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useUser)();\n    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__.app);\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__.app);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showSuccess, setShowSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [uploadCompleted, setUploadCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileId, setFileId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [shortUrl, setShortUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const uploadFile = (file)=>{\n        const metadata = {\n            contentType: file.type\n        };\n        const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, \"User_Files/\" + (file === null || file === void 0 ? void 0 : file.name));\n        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(fileRef, file, metadata);\n        // Listen for state changes, errors, and completion of the upload.\n        uploadTask.on(\"state_changed\", (snapshot)=>{\n            // console.log(snapshot);\n            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded\n            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;\n            // console.log(\"Upload is \" + progress + \"% done\");\n            setProgress(progress);\n        }, (error)=>{\n            // A full list of error codes is available at\n            // https://firebase.google.com/docs/storage/web/handle-errors\n            console.log(error);\n        }, ()=>{\n            setShowSuccess(true);\n            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(uploadTask.snapshot.ref).then((downloadURL)=>{\n                saveToStore(file, downloadURL);\n            });\n        });\n    };\n    const saveToStore = async (file, fileUrl)=>{\n        const docId = Date.now().toString();\n        const turlRef = (turl__WEBPACK_IMPORTED_MODULE_9___default());\n        turlRef === null || turlRef === void 0 ? void 0 : turlRef.shorten(fileUrl).then((res)=>{\n            shortUrl.push(res);\n            setShortUrl(shortUrl);\n        }).catch((err)=>{\n            console.log(err);\n        });\n        console.log(shortUrl, shortUrl.length);\n        shortUrl.length > 0 && await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(db, \"Uploaded_Files\", docId), {\n            FileId: docId,\n            FileName: file.name,\n            FileType: file.type,\n            FileSize: file.size,\n            UserEmail: user.primaryEmailAddress.emailAddress,\n            UserName: user.username,\n            UserFullName: user.fullName,\n            FileUrl: fileUrl,\n            UserId: user.id,\n            UserImageUrl: user.imageUrl,\n            UserPhone: user.primaryPhoneNumber.phoneNumber,\n            Password: \"\",\n            IsPasswordProtected: false,\n            ShortUrl: shortUrl[0]\n        }).then(()=>{\n            setUploadCompleted(true);\n            setFileId(docId);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        uploadCompleted && fileId && setTimeout(()=>{\n            setUploadCompleted(false);\n            setShowSuccess(false);\n        // router.push(\"/file-preview/\" + fileId);\n        }, 2000);\n    }, [\n        uploadCompleted == true\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed\",\n                style: {\n                    display: \"\".concat(showSuccess == true ? \"\" : \"none\")\n                },\n                children: [\n                    showSuccess == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadSuccess__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        msg: \"Uploaded succcessfully!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this) : null,\n                    setTimeout(()=>{\n                        setShowSuccess(false);\n                    }, 3000)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                uploadSelectedFile: (data)=>uploadFile(data),\n                progress: progress\n            }, void 0, false, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_s(Uploads, \"TPlATr2IVbpxs4rE3rOHPya99mE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useUser\n    ];\n});\n_c = Uploads;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uploads);\nvar _c;\n$RefreshReg$(_c, \"Uploads\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS91cGxvYWRzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNEO0FBQ1g7QUFNYjtBQUNxQztBQUNQO0FBQ2hCO0FBQ0s7QUFDRDtBQUNwQjtBQUV4QixTQUFTaUI7O0lBQ1AsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRUksSUFBSSxFQUFFLEdBQUdOLHVEQUFPQTtJQUN4QixNQUFNTyxVQUFVZiw0REFBVUEsQ0FBQ0QsZ0RBQUdBO0lBQzlCLE1BQU1pQixLQUFLWixnRUFBWUEsQ0FBQ0wsZ0RBQUdBO0lBQzNCLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3NCLGFBQWFDLGVBQWUsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3dCLGlCQUFpQkMsbUJBQW1CLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUMwQixRQUFRQyxVQUFVLEdBQUczQiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDNEIsVUFBVUMsWUFBWSxHQUFHN0IsK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNOEIsYUFBYSxDQUFDQztRQUNsQixNQUFNQyxXQUFXO1lBQ2ZDLGFBQWFGLEtBQUtHLElBQUk7UUFDeEI7UUFFQSxNQUFNQyxVQUFVL0IscURBQUdBLENBQUNjLFNBQVMsaUJBQWdCYSxpQkFBQUEsMkJBQUFBLEtBQU1LLElBQUk7UUFDdkQsTUFBTUMsYUFBYWhDLHNFQUFvQkEsQ0FBQzhCLFNBQVNKLE1BQU1DO1FBRXZELGtFQUFrRTtRQUNsRUssV0FBV0MsRUFBRSxDQUNYLGlCQUNBLENBQUNDO1lBQ0MseUJBQXlCO1lBQ3pCLHlHQUF5RztZQUN6RyxNQUFNbkIsV0FDSixTQUFVb0IsZ0JBQWdCLEdBQUdELFNBQVNFLFVBQVUsR0FBSTtZQUN0RCxtREFBbUQ7WUFDbkRwQixZQUFZRDtRQUNkLEdBQ0EsQ0FBQ3NCO1lBQ0MsNkNBQTZDO1lBQzdDLDZEQUE2RDtZQUM3REMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkLEdBQ0E7WUFDRW5CLGVBQWU7WUFDZmpCLGdFQUFjQSxDQUFDK0IsV0FBV0UsUUFBUSxDQUFDbkMsR0FBRyxFQUFFeUMsSUFBSSxDQUFDLENBQUNDO2dCQUM1Q0MsWUFBWWhCLE1BQU1lO1lBQ3BCO1FBQ0Y7SUFFSjtJQUVBLE1BQU1DLGNBQWMsT0FBT2hCLE1BQU1pQjtRQUMvQixNQUFNQyxRQUFRQyxLQUFLQyxHQUFHLEdBQUdDLFFBQVE7UUFDakMsTUFBTUMsVUFBVXZDLDZDQUFJQTtRQUVwQnVDLG9CQUFBQSw4QkFBQUEsUUFDSUMsT0FBTyxDQUFDTixTQUNUSCxJQUFJLENBQUMsQ0FBQ1U7WUFDTDNCLFNBQVM0QixJQUFJLENBQUNEO1lBQ2QxQixZQUFZRDtRQUNkLEdBQ0M2QixLQUFLLENBQUMsQ0FBQ0M7WUFDTmYsUUFBUUMsR0FBRyxDQUFDYztRQUNkO1FBRUZmLFFBQVFDLEdBQUcsQ0FBQ2hCLFVBQVVBLFNBQVMrQixNQUFNO1FBRXJDL0IsU0FBUytCLE1BQU0sR0FBRyxLQUNmLE1BQU1sRCwwREFBTUEsQ0FBQ0QsdURBQUdBLENBQUNXLElBQUksa0JBQWtCOEIsUUFBUTtZQUM5Q1csUUFBUVg7WUFDUlksVUFBVTlCLEtBQUtLLElBQUk7WUFDbkIwQixVQUFVL0IsS0FBS0csSUFBSTtZQUNuQjZCLFVBQVVoQyxLQUFLaUMsSUFBSTtZQUNuQkMsV0FBV2hELEtBQUtpRCxtQkFBbUIsQ0FBQ0MsWUFBWTtZQUNoREMsVUFBVW5ELEtBQUtvRCxRQUFRO1lBQ3ZCQyxjQUFjckQsS0FBS3NELFFBQVE7WUFDM0JDLFNBQVN4QjtZQUNUeUIsUUFBUXhELEtBQUt5RCxFQUFFO1lBQ2ZDLGNBQWMxRCxLQUFLMkQsUUFBUTtZQUMzQkMsV0FBVzVELEtBQUs2RCxrQkFBa0IsQ0FBQ0MsV0FBVztZQUM5Q0MsVUFBVTtZQUNWQyxxQkFBcUI7WUFDckJyRSxVQUFVZ0IsUUFBUSxDQUFDLEVBQUU7UUFDdkIsR0FBR2lCLElBQUksQ0FBQztZQUNOcEIsbUJBQW1CO1lBQ25CRSxVQUFVc0I7UUFDWjtJQUNKO0lBRUFsRCxnREFBU0EsQ0FBQztRQUNSeUIsbUJBQ0VFLFVBQ0F3RCxXQUFXO1lBQ1R6RCxtQkFBbUI7WUFDbkJGLGVBQWU7UUFDZiwwQ0FBMEM7UUFDNUMsR0FBRztJQUNQLEdBQUc7UUFBQ0MsbUJBQW1CO0tBQUs7SUFFNUIscUJBQ0UsOERBQUMyRDs7MEJBQ0MsOERBQUNBO2dCQUNDQyxXQUFVO2dCQUNWQyxPQUFPO29CQUFFQyxTQUFTLEdBQXFDLE9BQWxDaEUsZUFBZSxPQUFPLEtBQUs7Z0JBQVM7O29CQUV4REEsZUFBZSxxQkFDZCw4REFBQ1osaUVBQWFBO3dCQUFDNkUsS0FBSzs7Ozs7K0JBQ2xCO29CQUVITCxXQUFXO3dCQUNWM0QsZUFBZTtvQkFDakIsR0FBRzs7Ozs7OzswQkFFTCw4REFBQ3RCLDhEQUFVQTtnQkFDVHVGLG9CQUFvQixDQUFDQyxPQUFTM0QsV0FBVzJEO2dCQUN6Q3JFLFVBQVVBOzs7Ozs7Ozs7Ozs7QUFJbEI7R0FoSFNMOztRQUNRRixzREFBU0E7UUFDUEYsbURBQU9BOzs7S0FGakJJO0FBa0hULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS91cGxvYWRzL3BhZ2UuanM/ZmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVwbG9hZEZvcm0gZnJvbSBcIi4vX2NvbXBvbmVudHMvVXBsb2FkRm9ybVwiO1xyXG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiQC9GaXJlYmFzZUNvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFN0b3JhZ2UsXHJcbiAgcmVmLFxyXG4gIHVwbG9hZEJ5dGVzUmVzdW1hYmxlLFxyXG4gIGdldERvd25sb2FkVVJMLFxyXG59IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgZG9jLCBzZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBVcGxvYWRTdWNjZXNzIGZyb20gXCIuL19jb21wb25lbnRzL1VwbG9hZFN1Y2Nlc3NcIjtcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcbmltcG9ydCBTaG9ydFVybCBmcm9tIFwiQC9hcHAvX3V0aWxzL1Nob3J0VXJsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHR1cmwgZnJvbSBcInR1cmxcIjtcclxuXHJcbmZ1bmN0aW9uIFVwbG9hZHMoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyKCk7XHJcbiAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTtcclxuICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3dTdWNjZXNzLCBzZXRTaG93U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZENvbXBsZXRlZCwgc2V0VXBsb2FkQ29tcGxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsZUlkLCBzZXRGaWxlSWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvcnRVcmwsIHNldFNob3J0VXJsXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgdXBsb2FkRmlsZSA9IChmaWxlKSA9PiB7XHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IHtcclxuICAgICAgY29udGVudFR5cGU6IGZpbGUudHlwZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmlsZVJlZiA9IHJlZihzdG9yYWdlLCBcIlVzZXJfRmlsZXMvXCIgKyBmaWxlPy5uYW1lKTtcclxuICAgIGNvbnN0IHVwbG9hZFRhc2sgPSB1cGxvYWRCeXRlc1Jlc3VtYWJsZShmaWxlUmVmLCBmaWxlLCBtZXRhZGF0YSk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBzdGF0ZSBjaGFuZ2VzLCBlcnJvcnMsIGFuZCBjb21wbGV0aW9uIG9mIHRoZSB1cGxvYWQuXHJcbiAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICBcInN0YXRlX2NoYW5nZWRcIixcclxuICAgICAgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc25hcHNob3QpO1xyXG4gICAgICAgIC8vIEdldCB0YXNrIHByb2dyZXNzLCBpbmNsdWRpbmcgdGhlIG51bWJlciBvZiBieXRlcyB1cGxvYWRlZCBhbmQgdGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyB0byBiZSB1cGxvYWRlZFxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID1cclxuICAgICAgICAgIChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJVcGxvYWQgaXMgXCIgKyBwcm9ncmVzcyArIFwiJSBkb25lXCIpO1xyXG4gICAgICAgIHNldFByb2dyZXNzKHByb2dyZXNzKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQSBmdWxsIGxpc3Qgb2YgZXJyb3IgY29kZXMgaXMgYXZhaWxhYmxlIGF0XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvc3RvcmFnZS93ZWIvaGFuZGxlLWVycm9yc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTdWNjZXNzKHRydWUpO1xyXG4gICAgICAgIGdldERvd25sb2FkVVJMKHVwbG9hZFRhc2suc25hcHNob3QucmVmKS50aGVuKChkb3dubG9hZFVSTCkgPT4ge1xyXG4gICAgICAgICAgc2F2ZVRvU3RvcmUoZmlsZSwgZG93bmxvYWRVUkwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhdmVUb1N0b3JlID0gYXN5bmMgKGZpbGUsIGZpbGVVcmwpID0+IHtcclxuICAgIGNvbnN0IGRvY0lkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgdHVybFJlZiA9IHR1cmw7XHJcblxyXG4gICAgdHVybFJlZlxyXG4gICAgICA/LnNob3J0ZW4oZmlsZVVybClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNob3J0VXJsLnB1c2gocmVzKTtcclxuICAgICAgICBzZXRTaG9ydFVybChzaG9ydFVybCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coc2hvcnRVcmwsIHNob3J0VXJsLmxlbmd0aCk7XHJcblxyXG4gICAgc2hvcnRVcmwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAoYXdhaXQgc2V0RG9jKGRvYyhkYiwgXCJVcGxvYWRlZF9GaWxlc1wiLCBkb2NJZCksIHtcclxuICAgICAgICBGaWxlSWQ6IGRvY0lkLFxyXG4gICAgICAgIEZpbGVOYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgRmlsZVR5cGU6IGZpbGUudHlwZSxcclxuICAgICAgICBGaWxlU2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICAgIFVzZXJFbWFpbDogdXNlci5wcmltYXJ5RW1haWxBZGRyZXNzLmVtYWlsQWRkcmVzcyxcclxuICAgICAgICBVc2VyTmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICBVc2VyRnVsbE5hbWU6IHVzZXIuZnVsbE5hbWUsXHJcbiAgICAgICAgRmlsZVVybDogZmlsZVVybCxcclxuICAgICAgICBVc2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgVXNlckltYWdlVXJsOiB1c2VyLmltYWdlVXJsLFxyXG4gICAgICAgIFVzZXJQaG9uZTogdXNlci5wcmltYXJ5UGhvbmVOdW1iZXIucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgSXNQYXNzd29yZFByb3RlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgU2hvcnRVcmw6IHNob3J0VXJsWzBdLFxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBzZXRVcGxvYWRDb21wbGV0ZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0RmlsZUlkKGRvY0lkKTtcclxuICAgICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGxvYWRDb21wbGV0ZWQgJiZcclxuICAgICAgZmlsZUlkICYmXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFVwbG9hZENvbXBsZXRlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd1N1Y2Nlc3MoZmFsc2UpO1xyXG4gICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL2ZpbGUtcHJldmlldy9cIiArIGZpbGVJZCk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gIH0sIFt1cGxvYWRDb21wbGV0ZWQgPT0gdHJ1ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBgJHtzaG93U3VjY2VzcyA9PSB0cnVlID8gXCJcIiA6IFwibm9uZVwifWAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaG93U3VjY2VzcyA9PSB0cnVlID8gKFxyXG4gICAgICAgICAgPFVwbG9hZFN1Y2Nlc3MgbXNnPXtcIlVwbG9hZGVkIHN1Y2NjZXNzZnVsbHkhXCJ9IC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgey8qIDxVcGxvYWRTdWNjZXNzIG1zZz17XCJVcGxvYWRlZCBzdWNjY2Vzc2Z1bGx5IVwifSAvPiAqL31cclxuICAgICAgICB7c2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTaG93U3VjY2VzcyhmYWxzZSk7XHJcbiAgICAgICAgfSwgMzAwMCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VXBsb2FkRm9ybVxyXG4gICAgICAgIHVwbG9hZFNlbGVjdGVkRmlsZT17KGRhdGEpID0+IHVwbG9hZEZpbGUoZGF0YSl9XHJcbiAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVcGxvYWRGb3JtIiwiYXBwIiwiZ2V0U3RvcmFnZSIsInJlZiIsInVwbG9hZEJ5dGVzUmVzdW1hYmxlIiwiZ2V0RG93bmxvYWRVUkwiLCJnZXRGaXJlc3RvcmUiLCJkb2MiLCJzZXREb2MiLCJVcGxvYWRTdWNjZXNzIiwidXNlVXNlciIsIlNob3J0VXJsIiwidXNlUm91dGVyIiwidHVybCIsIlVwbG9hZHMiLCJyb3V0ZXIiLCJ1c2VyIiwic3RvcmFnZSIsImRiIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInNob3dTdWNjZXNzIiwic2V0U2hvd1N1Y2Nlc3MiLCJ1cGxvYWRDb21wbGV0ZWQiLCJzZXRVcGxvYWRDb21wbGV0ZWQiLCJmaWxlSWQiLCJzZXRGaWxlSWQiLCJzaG9ydFVybCIsInNldFNob3J0VXJsIiwidXBsb2FkRmlsZSIsImZpbGUiLCJtZXRhZGF0YSIsImNvbnRlbnRUeXBlIiwidHlwZSIsImZpbGVSZWYiLCJuYW1lIiwidXBsb2FkVGFzayIsIm9uIiwic25hcHNob3QiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJkb3dubG9hZFVSTCIsInNhdmVUb1N0b3JlIiwiZmlsZVVybCIsImRvY0lkIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwidHVybFJlZiIsInNob3J0ZW4iLCJyZXMiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJsZW5ndGgiLCJGaWxlSWQiLCJGaWxlTmFtZSIsIkZpbGVUeXBlIiwiRmlsZVNpemUiLCJzaXplIiwiVXNlckVtYWlsIiwicHJpbWFyeUVtYWlsQWRkcmVzcyIsImVtYWlsQWRkcmVzcyIsIlVzZXJOYW1lIiwidXNlcm5hbWUiLCJVc2VyRnVsbE5hbWUiLCJmdWxsTmFtZSIsIkZpbGVVcmwiLCJVc2VySWQiLCJpZCIsIlVzZXJJbWFnZVVybCIsImltYWdlVXJsIiwiVXNlclBob25lIiwicHJpbWFyeVBob25lTnVtYmVyIiwicGhvbmVOdW1iZXIiLCJQYXNzd29yZCIsIklzUGFzc3dvcmRQcm90ZWN0ZWQiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwibXNnIiwidXBsb2FkU2VsZWN0ZWRGaWxlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/uploads/page.js\n"));

/***/ })

});