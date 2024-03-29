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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UploadForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/UploadForm */ \"(app-pages-browser)/./app/(dashboard)/(routes)/uploads/_components/UploadForm.js\");\n/* harmony import */ var _FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/FirebaseConfig */ \"(app-pages-browser)/./FirebaseConfig.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_UploadSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/UploadSuccess */ \"(app-pages-browser)/./app/(dashboard)/(routes)/uploads/_components/UploadSuccess.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* harmony import */ var _app_utils_ShortUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/_utils/ShortUrl */ \"(app-pages-browser)/./app/_utils/ShortUrl.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var turl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! turl */ \"(app-pages-browser)/./node_modules/turl/index.js\");\n/* harmony import */ var turl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(turl__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Uploads() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useUser)();\n    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__.app);\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__.app);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showSuccess, setShowSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [uploadCompleted, setUploadCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileId, setFileId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [shortUrl, setShortUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const uploadFile = (file)=>{\n        console.log(file);\n        const metadata = {\n            contentType: file.type\n        };\n        const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, \"User_Files/\" + (file === null || file === void 0 ? void 0 : file.name));\n        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(fileRef, file, metadata);\n        // Listen for state changes, errors, and completion of the upload.\n        uploadTask.on(\"state_changed\", (snapshot)=>{\n            // console.log(snapshot);\n            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded\n            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;\n            // console.log(\"Upload is \" + progress + \"% done\");\n            setProgress(progress);\n        }, (error)=>{\n            // A full list of error codes is available at\n            // https://firebase.google.com/docs/storage/web/handle-errors\n            console.log(error);\n        }, ()=>{\n            setShowSuccess(true);\n            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(uploadTask.snapshot.ref).then((downloadURL)=>{\n                saveToStore(file, downloadURL);\n            });\n        });\n    };\n    const saveToStore = async (file, fileUrl)=>{\n        const docId = Date.now().toString();\n        const turlRef = (turl__WEBPACK_IMPORTED_MODULE_9___default());\n        turlRef === null || turlRef === void 0 ? void 0 : turlRef.shorten(fileUrl).then((res)=>{\n            console.log(res);\n            setShortUrl(res.toString());\n        }).catch((err)=>{\n            console.log(err);\n        });\n        console.log(shortUrl);\n        shortUrl && await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(db, \"Uploaded_Files\", docId), {\n            FileId: docId,\n            FileName: file.name,\n            FileType: file.type,\n            FileSize: file.size,\n            UserEmail: user.primaryEmailAddress.emailAddress,\n            UserName: user.username,\n            UserFullName: user.fullName,\n            FileUrl: fileUrl,\n            UserId: user.id,\n            UserImageUrl: user.imageUrl,\n            UserPhone: user.primaryPhoneNumber.phoneNumber,\n            Password: \"\",\n            IsPasswordProtected: false,\n            ShortUrl: shortUrl + \"\"\n        }).then(()=>{\n            setUploadCompleted(true);\n            setFileId(docId);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        uploadCompleted && fileId && setTimeout(()=>{\n            setUploadCompleted(false);\n            setShowSuccess(false);\n        // router.push(\"/file-preview/\" + fileId);\n        }, 2000);\n    }, [\n        uploadCompleted == true\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed\",\n                style: {\n                    display: \"\".concat(showSuccess == true ? \"\" : \"none\")\n                },\n                children: [\n                    showSuccess == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadSuccess__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        msg: \"Uploaded succcessfully!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                        lineNumber: 110,\n                        columnNumber: 32\n                    }, this) : null,\n                    setTimeout(()=>{\n                        setShowSuccess(false);\n                    }, 3000)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                uploadSelectedFile: (data)=>uploadFile(data),\n                progress: progress\n            }, void 0, false, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(Uploads, \"JP68GKa9x9OIL5BcJg3+HPBc+/g=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useUser\n    ];\n});\n_c = Uploads;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uploads);\nvar _c;\n$RefreshReg$(_c, \"Uploads\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS91cGxvYWRzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNEO0FBQ1g7QUFNYjtBQUNxQztBQUNQO0FBQ2hCO0FBQ0s7QUFDRDtBQUNwQjtBQUV4QixTQUFTaUI7O0lBQ1AsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRUksSUFBSSxFQUFFLEdBQUdOLHVEQUFPQTtJQUN4QixNQUFNTyxVQUFVZiw0REFBVUEsQ0FBQ0QsZ0RBQUdBO0lBQzlCLE1BQU1pQixLQUFLWixnRUFBWUEsQ0FBQ0wsZ0RBQUdBO0lBQzNCLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3NCLGFBQWFDLGVBQWUsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3dCLGlCQUFpQkMsbUJBQW1CLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUMwQixRQUFRQyxVQUFVLEdBQUczQiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDNEIsVUFBVUMsWUFBWSxHQUFHN0IsK0NBQVFBO0lBRXhDLE1BQU04QixhQUFhLENBQUNDO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osTUFBTUcsV0FBVztZQUNmQyxhQUFhSixLQUFLSyxJQUFJO1FBQ3hCO1FBRUEsTUFBTUMsVUFBVWpDLHFEQUFHQSxDQUFDYyxTQUFTLGlCQUFnQmEsaUJBQUFBLDJCQUFBQSxLQUFNTyxJQUFJO1FBQ3ZELE1BQU1DLGFBQWFsQyxzRUFBb0JBLENBQUNnQyxTQUFTTixNQUFNRztRQUV2RCxrRUFBa0U7UUFDbEVLLFdBQVdDLEVBQUUsQ0FDWCxpQkFDQSxDQUFDQztZQUNDLHlCQUF5QjtZQUN6Qix5R0FBeUc7WUFDekcsTUFBTXJCLFdBQ0osU0FBVXNCLGdCQUFnQixHQUFHRCxTQUFTRSxVQUFVLEdBQUk7WUFDdEQsbURBQW1EO1lBQ25EdEIsWUFBWUQ7UUFDZCxHQUNBLENBQUN3QjtZQUNDLDZDQUE2QztZQUM3Qyw2REFBNkQ7WUFDN0RaLFFBQVFDLEdBQUcsQ0FBQ1c7UUFDZCxHQUNBO1lBQ0VyQixlQUFlO1lBQ2ZqQixnRUFBY0EsQ0FBQ2lDLFdBQVdFLFFBQVEsQ0FBQ3JDLEdBQUcsRUFBRXlDLElBQUksQ0FBQyxDQUFDQztnQkFDNUNDLFlBQVloQixNQUFNZTtZQUNwQjtRQUNGO0lBRUo7SUFFQSxNQUFNQyxjQUFjLE9BQU9oQixNQUFNaUI7UUFDL0IsTUFBTUMsUUFBUUMsS0FBS0MsR0FBRyxHQUFHQyxRQUFRO1FBQ2pDLE1BQU1DLFVBQVV2Qyw2Q0FBSUE7UUFFcEJ1QyxvQkFBQUEsOEJBQUFBLFFBQVNDLE9BQU8sQ0FBQ04sU0FBU0gsSUFBSSxDQUFDLENBQUNVO1lBQzlCdkIsUUFBUUMsR0FBRyxDQUFDc0I7WUFDWjFCLFlBQVkwQixJQUFJSCxRQUFRO1FBQzFCLEdBQUdJLEtBQUssQ0FBQyxDQUFDQztZQUNSekIsUUFBUUMsR0FBRyxDQUFDd0I7UUFDZDtRQUVBekIsUUFBUUMsR0FBRyxDQUFDTDtRQUVaQSxZQUFZLE1BQU1uQiwwREFBTUEsQ0FBQ0QsdURBQUdBLENBQUNXLElBQUksa0JBQWtCOEIsUUFBUTtZQUN6RFMsUUFBUVQ7WUFDUlUsVUFBVTVCLEtBQUtPLElBQUk7WUFDbkJzQixVQUFVN0IsS0FBS0ssSUFBSTtZQUNuQnlCLFVBQVU5QixLQUFLK0IsSUFBSTtZQUNuQkMsV0FBVzlDLEtBQUsrQyxtQkFBbUIsQ0FBQ0MsWUFBWTtZQUNoREMsVUFBVWpELEtBQUtrRCxRQUFRO1lBQ3ZCQyxjQUFjbkQsS0FBS29ELFFBQVE7WUFDM0JDLFNBQVN0QjtZQUNUdUIsUUFBUXRELEtBQUt1RCxFQUFFO1lBQ2ZDLGNBQWN4RCxLQUFLeUQsUUFBUTtZQUMzQkMsV0FBVzFELEtBQUsyRCxrQkFBa0IsQ0FBQ0MsV0FBVztZQUM5Q0MsVUFBVTtZQUNWQyxxQkFBcUI7WUFDckJuRSxVQUFVZ0IsV0FBVztRQUN2QixHQUFHaUIsSUFBSSxDQUFDO1lBQ05wQixtQkFBbUI7WUFDbkJFLFVBQVVzQjtRQUNaO0lBQ0Y7SUFFQWxELGdEQUFTQSxDQUFDO1FBQ1J5QixtQkFDRUUsVUFDQXNELFdBQVc7WUFDVHZELG1CQUFtQjtZQUNuQkYsZUFBZTtRQUNmLDBDQUEwQztRQUM1QyxHQUFHO0lBQ1AsR0FBRztRQUFDQyxtQkFBbUI7S0FBSztJQUU1QixxQkFDRSw4REFBQ3lEOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7Z0JBQVFDLE9BQU87b0JBQUNDLFNBQVMsR0FBbUMsT0FBaEM5RCxlQUFlLE9BQU0sS0FBSTtnQkFBUTs7b0JBQ3pFQSxlQUFlLHFCQUFPLDhEQUFDWixpRUFBYUE7d0JBQUMyRSxLQUFLOzs7OzsrQkFBZ0M7b0JBRTFFTCxXQUFXO3dCQUNWekQsZUFBZTtvQkFDakIsR0FBRzs7Ozs7OzswQkFFTCw4REFBQ3RCLDhEQUFVQTtnQkFDVHFGLG9CQUFvQixDQUFDQyxPQUFTekQsV0FBV3lEO2dCQUN6Q25FLFVBQVVBOzs7Ozs7Ozs7Ozs7QUFJbEI7R0F4R1NMOztRQUNRRixzREFBU0E7UUFDUEYsbURBQU9BOzs7S0FGakJJO0FBMEdULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS91cGxvYWRzL3BhZ2UuanM/ZmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVwbG9hZEZvcm0gZnJvbSBcIi4vX2NvbXBvbmVudHMvVXBsb2FkRm9ybVwiO1xyXG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiQC9GaXJlYmFzZUNvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFN0b3JhZ2UsXHJcbiAgcmVmLFxyXG4gIHVwbG9hZEJ5dGVzUmVzdW1hYmxlLFxyXG4gIGdldERvd25sb2FkVVJMLFxyXG59IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgZG9jLCBzZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBVcGxvYWRTdWNjZXNzIGZyb20gXCIuL19jb21wb25lbnRzL1VwbG9hZFN1Y2Nlc3NcIjtcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcbmltcG9ydCBTaG9ydFVybCBmcm9tIFwiQC9hcHAvX3V0aWxzL1Nob3J0VXJsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHR1cmwgZnJvbSBcInR1cmxcIjtcclxuXHJcbmZ1bmN0aW9uIFVwbG9hZHMoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyKCk7XHJcbiAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTtcclxuICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3dTdWNjZXNzLCBzZXRTaG93U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZENvbXBsZXRlZCwgc2V0VXBsb2FkQ29tcGxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsZUlkLCBzZXRGaWxlSWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvcnRVcmwsIHNldFNob3J0VXJsXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IHVwbG9hZEZpbGUgPSAoZmlsZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IHtcclxuICAgICAgY29udGVudFR5cGU6IGZpbGUudHlwZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmlsZVJlZiA9IHJlZihzdG9yYWdlLCBcIlVzZXJfRmlsZXMvXCIgKyBmaWxlPy5uYW1lKTtcclxuICAgIGNvbnN0IHVwbG9hZFRhc2sgPSB1cGxvYWRCeXRlc1Jlc3VtYWJsZShmaWxlUmVmLCBmaWxlLCBtZXRhZGF0YSk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBzdGF0ZSBjaGFuZ2VzLCBlcnJvcnMsIGFuZCBjb21wbGV0aW9uIG9mIHRoZSB1cGxvYWQuXHJcbiAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICBcInN0YXRlX2NoYW5nZWRcIixcclxuICAgICAgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc25hcHNob3QpO1xyXG4gICAgICAgIC8vIEdldCB0YXNrIHByb2dyZXNzLCBpbmNsdWRpbmcgdGhlIG51bWJlciBvZiBieXRlcyB1cGxvYWRlZCBhbmQgdGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyB0byBiZSB1cGxvYWRlZFxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID1cclxuICAgICAgICAgIChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJVcGxvYWQgaXMgXCIgKyBwcm9ncmVzcyArIFwiJSBkb25lXCIpO1xyXG4gICAgICAgIHNldFByb2dyZXNzKHByb2dyZXNzKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQSBmdWxsIGxpc3Qgb2YgZXJyb3IgY29kZXMgaXMgYXZhaWxhYmxlIGF0XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvc3RvcmFnZS93ZWIvaGFuZGxlLWVycm9yc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTdWNjZXNzKHRydWUpO1xyXG4gICAgICAgIGdldERvd25sb2FkVVJMKHVwbG9hZFRhc2suc25hcHNob3QucmVmKS50aGVuKChkb3dubG9hZFVSTCkgPT4ge1xyXG4gICAgICAgICAgc2F2ZVRvU3RvcmUoZmlsZSwgZG93bmxvYWRVUkwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhdmVUb1N0b3JlID0gYXN5bmMgKGZpbGUsIGZpbGVVcmwpID0+IHtcclxuICAgIGNvbnN0IGRvY0lkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgdHVybFJlZiA9IHR1cmw7XHJcblxyXG4gICAgdHVybFJlZj8uc2hvcnRlbihmaWxlVXJsKS50aGVuKChyZXMpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIHNldFNob3J0VXJsKHJlcy50b1N0cmluZygpKTtcclxuICAgIH0pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNob3J0VXJsKTtcclxuXHJcbiAgICBzaG9ydFVybCAmJiBhd2FpdCBzZXREb2MoZG9jKGRiLCBcIlVwbG9hZGVkX0ZpbGVzXCIsIGRvY0lkKSwge1xyXG4gICAgICBGaWxlSWQ6IGRvY0lkLFxyXG4gICAgICBGaWxlTmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICBGaWxlVHlwZTogZmlsZS50eXBlLFxyXG4gICAgICBGaWxlU2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICBVc2VyRW1haWw6IHVzZXIucHJpbWFyeUVtYWlsQWRkcmVzcy5lbWFpbEFkZHJlc3MsXHJcbiAgICAgIFVzZXJOYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICBVc2VyRnVsbE5hbWU6IHVzZXIuZnVsbE5hbWUsXHJcbiAgICAgIEZpbGVVcmw6IGZpbGVVcmwsXHJcbiAgICAgIFVzZXJJZDogdXNlci5pZCxcclxuICAgICAgVXNlckltYWdlVXJsOiB1c2VyLmltYWdlVXJsLFxyXG4gICAgICBVc2VyUGhvbmU6IHVzZXIucHJpbWFyeVBob25lTnVtYmVyLnBob25lTnVtYmVyLFxyXG4gICAgICBQYXNzd29yZDogXCJcIixcclxuICAgICAgSXNQYXNzd29yZFByb3RlY3RlZDogZmFsc2UsXHJcbiAgICAgIFNob3J0VXJsOiBzaG9ydFVybCArICcnLFxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFVwbG9hZENvbXBsZXRlZCh0cnVlKTtcclxuICAgICAgc2V0RmlsZUlkKGRvY0lkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGxvYWRDb21wbGV0ZWQgJiZcclxuICAgICAgZmlsZUlkICYmXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFVwbG9hZENvbXBsZXRlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd1N1Y2Nlc3MoZmFsc2UpO1xyXG4gICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL2ZpbGUtcHJldmlldy9cIiArIGZpbGVJZCk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gIH0sIFt1cGxvYWRDb21wbGV0ZWQgPT0gdHJ1ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkJyBzdHlsZT17e2Rpc3BsYXk6IGAke3Nob3dTdWNjZXNzID09IHRydWU/ICcnOiBcIm5vbmVcIn1gfX0+XHJcbiAgICAgICAge3Nob3dTdWNjZXNzID09IHRydWUgPyA8VXBsb2FkU3VjY2VzcyBtc2c9e1wiVXBsb2FkZWQgc3VjY2Nlc3NmdWxseSFcIn0gLz4gOiBudWxsfVxyXG4gICAgICAgIHsvKiA8VXBsb2FkU3VjY2VzcyBtc2c9e1wiVXBsb2FkZWQgc3VjY2Nlc3NmdWxseSFcIn0gLz4gKi99XHJcbiAgICAgICAge3NldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2hvd1N1Y2Nlc3MoZmFsc2UpO1xyXG4gICAgICAgIH0sIDMwMDApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFVwbG9hZEZvcm1cclxuICAgICAgICB1cGxvYWRTZWxlY3RlZEZpbGU9eyhkYXRhKSA9PiB1cGxvYWRGaWxlKGRhdGEpfVxyXG4gICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXBsb2FkRm9ybSIsImFwcCIsImdldFN0b3JhZ2UiLCJyZWYiLCJ1cGxvYWRCeXRlc1Jlc3VtYWJsZSIsImdldERvd25sb2FkVVJMIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwic2V0RG9jIiwiVXBsb2FkU3VjY2VzcyIsInVzZVVzZXIiLCJTaG9ydFVybCIsInVzZVJvdXRlciIsInR1cmwiLCJVcGxvYWRzIiwicm91dGVyIiwidXNlciIsInN0b3JhZ2UiLCJkYiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwidXBsb2FkQ29tcGxldGVkIiwic2V0VXBsb2FkQ29tcGxldGVkIiwiZmlsZUlkIiwic2V0RmlsZUlkIiwic2hvcnRVcmwiLCJzZXRTaG9ydFVybCIsInVwbG9hZEZpbGUiLCJmaWxlIiwiY29uc29sZSIsImxvZyIsIm1ldGFkYXRhIiwiY29udGVudFR5cGUiLCJ0eXBlIiwiZmlsZVJlZiIsIm5hbWUiLCJ1cGxvYWRUYXNrIiwib24iLCJzbmFwc2hvdCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiZXJyb3IiLCJ0aGVuIiwiZG93bmxvYWRVUkwiLCJzYXZlVG9TdG9yZSIsImZpbGVVcmwiLCJkb2NJZCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInR1cmxSZWYiLCJzaG9ydGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJGaWxlSWQiLCJGaWxlTmFtZSIsIkZpbGVUeXBlIiwiRmlsZVNpemUiLCJzaXplIiwiVXNlckVtYWlsIiwicHJpbWFyeUVtYWlsQWRkcmVzcyIsImVtYWlsQWRkcmVzcyIsIlVzZXJOYW1lIiwidXNlcm5hbWUiLCJVc2VyRnVsbE5hbWUiLCJmdWxsTmFtZSIsIkZpbGVVcmwiLCJVc2VySWQiLCJpZCIsIlVzZXJJbWFnZVVybCIsImltYWdlVXJsIiwiVXNlclBob25lIiwicHJpbWFyeVBob25lTnVtYmVyIiwicGhvbmVOdW1iZXIiLCJQYXNzd29yZCIsIklzUGFzc3dvcmRQcm90ZWN0ZWQiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwibXNnIiwidXBsb2FkU2VsZWN0ZWRGaWxlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/uploads/page.js\n"));

/***/ })

});