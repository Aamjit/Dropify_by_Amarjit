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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UploadForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/UploadForm */ \"(app-pages-browser)/./app/(dashboard)/(routes)/uploads/_components/UploadForm.js\");\n/* harmony import */ var _FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/FirebaseConfig */ \"(app-pages-browser)/./FirebaseConfig.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_UploadSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/UploadSuccess */ \"(app-pages-browser)/./app/(dashboard)/(routes)/uploads/_components/UploadSuccess.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* harmony import */ var _app_utils_ShortUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/_utils/ShortUrl */ \"(app-pages-browser)/./app/_utils/ShortUrl.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var turl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! turl */ \"(app-pages-browser)/./node_modules/turl/index.js\");\n/* harmony import */ var turl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(turl__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Uploads() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useUser)();\n    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__.app);\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)(_FirebaseConfig__WEBPACK_IMPORTED_MODULE_3__.app);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showSuccess, setShowSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [uploadCompleted, setUploadCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileId, setFileId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [shortUrl, setShortUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const uploadFile = (file)=>{\n        console.log(file);\n        const metadata = {\n            contentType: file.type\n        };\n        const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, \"User_Files/\" + (file === null || file === void 0 ? void 0 : file.name));\n        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(fileRef, file, metadata);\n        // Listen for state changes, errors, and completion of the upload.\n        uploadTask.on(\"state_changed\", (snapshot)=>{\n            // console.log(snapshot);\n            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded\n            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;\n            // console.log(\"Upload is \" + progress + \"% done\");\n            setProgress(progress);\n        }, (error)=>{\n            // A full list of error codes is available at\n            // https://firebase.google.com/docs/storage/web/handle-errors\n            console.log(error);\n        }, ()=>{\n            setShowSuccess(true);\n            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(uploadTask.snapshot.ref).then((downloadURL)=>{\n                saveToStore(file, downloadURL);\n            });\n        });\n    };\n    const saveToStore = async (file, fileUrl)=>{\n        const docId = Date.now().toString();\n        const turlRef = (turl__WEBPACK_IMPORTED_MODULE_9___default());\n        turlRef === null || turlRef === void 0 ? void 0 : turlRef.shorten(fileUrl).then((res)=>{\n            // console.log(res, typeof(res));\n            setShortUrl(res);\n        }).catch((err)=>{\n            console.log(err);\n        });\n        shortUrl.length() > 0 && await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(db, \"Uploaded_Files\", docId), {\n            FileId: docId,\n            FileName: file.name,\n            FileType: file.type,\n            FileSize: file.size,\n            UserEmail: user.primaryEmailAddress.emailAddress,\n            UserName: user.username,\n            UserFullName: user.fullName,\n            FileUrl: fileUrl,\n            UserId: user.id,\n            UserImageUrl: user.imageUrl,\n            UserPhone: user.primaryPhoneNumber.phoneNumber,\n            Password: \"\",\n            IsPasswordProtected: false,\n            ShortUrl: shortUrl\n        }).then(()=>{\n            setUploadCompleted(true);\n            setFileId(docId);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        uploadCompleted && fileId && setTimeout(()=>{\n            setUploadCompleted(false);\n            setShowSuccess(false);\n        // router.push(\"/file-preview/\" + fileId);\n        }, 2000);\n    }, [\n        uploadCompleted == true\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed\",\n                style: {\n                    display: \"\".concat(showSuccess == true ? \"\" : \"none\")\n                },\n                children: [\n                    showSuccess == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadSuccess__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        msg: \"Uploaded succcessfully!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                        lineNumber: 109,\n                        columnNumber: 32\n                    }, this) : null,\n                    setTimeout(()=>{\n                        setShowSuccess(false);\n                    }, 3000)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                uploadSelectedFile: (data)=>uploadFile(data),\n                progress: progress\n            }, void 0, false, {\n                fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Git\\\\Dropify_by_Amarjit\\\\app\\\\(dashboard)\\\\(routes)\\\\uploads\\\\page.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n_s(Uploads, \"H78Dm8HISugyD5dfvyZyh8M1lCY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useUser\n    ];\n});\n_c = Uploads;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uploads);\nvar _c;\n$RefreshReg$(_c, \"Uploads\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS91cGxvYWRzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNEO0FBQ1g7QUFNYjtBQUNxQztBQUNQO0FBQ2hCO0FBQ0s7QUFDRDtBQUNwQjtBQUV4QixTQUFTaUI7O0lBQ1AsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRUksSUFBSSxFQUFFLEdBQUdOLHVEQUFPQTtJQUN4QixNQUFNTyxVQUFVZiw0REFBVUEsQ0FBQ0QsZ0RBQUdBO0lBQzlCLE1BQU1pQixLQUFLWixnRUFBWUEsQ0FBQ0wsZ0RBQUdBO0lBQzNCLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3NCLGFBQWFDLGVBQWUsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3dCLGlCQUFpQkMsbUJBQW1CLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUMwQixRQUFRQyxVQUFVLEdBQUczQiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDNEIsVUFBVUMsWUFBWSxHQUFHN0IsK0NBQVFBLENBQUM7SUFFekMsTUFBTThCLGFBQWEsQ0FBQ0M7UUFDbEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixNQUFNRyxXQUFXO1lBQ2ZDLGFBQWFKLEtBQUtLLElBQUk7UUFDeEI7UUFFQSxNQUFNQyxVQUFVakMscURBQUdBLENBQUNjLFNBQVMsaUJBQWdCYSxpQkFBQUEsMkJBQUFBLEtBQU1PLElBQUk7UUFDdkQsTUFBTUMsYUFBYWxDLHNFQUFvQkEsQ0FBQ2dDLFNBQVNOLE1BQU1HO1FBRXZELGtFQUFrRTtRQUNsRUssV0FBV0MsRUFBRSxDQUNYLGlCQUNBLENBQUNDO1lBQ0MseUJBQXlCO1lBQ3pCLHlHQUF5RztZQUN6RyxNQUFNckIsV0FDSixTQUFVc0IsZ0JBQWdCLEdBQUdELFNBQVNFLFVBQVUsR0FBSTtZQUN0RCxtREFBbUQ7WUFDbkR0QixZQUFZRDtRQUNkLEdBQ0EsQ0FBQ3dCO1lBQ0MsNkNBQTZDO1lBQzdDLDZEQUE2RDtZQUM3RFosUUFBUUMsR0FBRyxDQUFDVztRQUNkLEdBQ0E7WUFDRXJCLGVBQWU7WUFDZmpCLGdFQUFjQSxDQUFDaUMsV0FBV0UsUUFBUSxDQUFDckMsR0FBRyxFQUFFeUMsSUFBSSxDQUFDLENBQUNDO2dCQUM1Q0MsWUFBWWhCLE1BQU1lO1lBQ3BCO1FBQ0Y7SUFFSjtJQUVBLE1BQU1DLGNBQWMsT0FBT2hCLE1BQU1pQjtRQUMvQixNQUFNQyxRQUFRQyxLQUFLQyxHQUFHLEdBQUdDLFFBQVE7UUFDakMsTUFBTUMsVUFBVXZDLDZDQUFJQTtRQUVwQnVDLG9CQUFBQSw4QkFBQUEsUUFBU0MsT0FBTyxDQUFDTixTQUFTSCxJQUFJLENBQUMsQ0FBQ1U7WUFDOUIsaUNBQWlDO1lBQ2pDMUIsWUFBWTBCO1FBQ2QsR0FBR0MsS0FBSyxDQUFDLENBQUNDO1lBQ1J6QixRQUFRQyxHQUFHLENBQUN3QjtRQUNkO1FBRUE3QixTQUFTOEIsTUFBTSxLQUFLLEtBQUssTUFBTWpELDBEQUFNQSxDQUFDRCx1REFBR0EsQ0FBQ1csSUFBSSxrQkFBa0I4QixRQUFRO1lBRXRFVSxRQUFRVjtZQUNSVyxVQUFVN0IsS0FBS08sSUFBSTtZQUNuQnVCLFVBQVU5QixLQUFLSyxJQUFJO1lBQ25CMEIsVUFBVS9CLEtBQUtnQyxJQUFJO1lBQ25CQyxXQUFXL0MsS0FBS2dELG1CQUFtQixDQUFDQyxZQUFZO1lBQ2hEQyxVQUFVbEQsS0FBS21ELFFBQVE7WUFDdkJDLGNBQWNwRCxLQUFLcUQsUUFBUTtZQUMzQkMsU0FBU3ZCO1lBQ1R3QixRQUFRdkQsS0FBS3dELEVBQUU7WUFDZkMsY0FBY3pELEtBQUswRCxRQUFRO1lBQzNCQyxXQUFXM0QsS0FBSzRELGtCQUFrQixDQUFDQyxXQUFXO1lBQzlDQyxVQUFVO1lBQ1ZDLHFCQUFxQjtZQUNyQnBFLFVBQVVnQjtRQUNaLEdBQUdpQixJQUFJLENBQUM7WUFDTnBCLG1CQUFtQjtZQUNuQkUsVUFBVXNCO1FBQ1o7SUFDRjtJQUVBbEQsZ0RBQVNBLENBQUM7UUFDUnlCLG1CQUNFRSxVQUNBdUQsV0FBVztZQUNUeEQsbUJBQW1CO1lBQ25CRixlQUFlO1FBQ2YsMENBQTBDO1FBQzVDLEdBQUc7SUFDUCxHQUFHO1FBQUNDLG1CQUFtQjtLQUFLO0lBRTVCLHFCQUNFLDhEQUFDMEQ7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTtnQkFBUUMsT0FBTztvQkFBQ0MsU0FBUyxHQUFtQyxPQUFoQy9ELGVBQWUsT0FBTSxLQUFJO2dCQUFROztvQkFDekVBLGVBQWUscUJBQU8sOERBQUNaLGlFQUFhQTt3QkFBQzRFLEtBQUs7Ozs7OytCQUFnQztvQkFFMUVMLFdBQVc7d0JBQ1YxRCxlQUFlO29CQUNqQixHQUFHOzs7Ozs7OzBCQUVMLDhEQUFDdEIsOERBQVVBO2dCQUNUc0Ysb0JBQW9CLENBQUNDLE9BQVMxRCxXQUFXMEQ7Z0JBQ3pDcEUsVUFBVUE7Ozs7Ozs7Ozs7OztBQUlsQjtHQXZHU0w7O1FBQ1FGLHNEQUFTQTtRQUNQRixtREFBT0E7OztLQUZqQkk7QUF5R1QsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhkYXNoYm9hcmQpLyhyb3V0ZXMpL3VwbG9hZHMvcGFnZS5qcz9mZjdlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXBsb2FkRm9ybSBmcm9tIFwiLi9fY29tcG9uZW50cy9VcGxvYWRGb3JtXCI7XHJcbmltcG9ydCB7IGFwcCB9IGZyb20gXCJAL0ZpcmViYXNlQ29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0U3RvcmFnZSxcclxuICByZWYsXHJcbiAgdXBsb2FkQnl0ZXNSZXN1bWFibGUsXHJcbiAgZ2V0RG93bmxvYWRVUkwsXHJcbn0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBkb2MsIHNldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFVwbG9hZFN1Y2Nlc3MgZnJvbSBcIi4vX2NvbXBvbmVudHMvVXBsb2FkU3VjY2Vzc1wiO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcclxuaW1wb3J0IFNob3J0VXJsIGZyb20gXCJAL2FwcC9fdXRpbHMvU2hvcnRVcmxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgdHVybCBmcm9tIFwidHVybFwiO1xyXG5cclxuZnVuY3Rpb24gVXBsb2FkcygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKTtcclxuICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApO1xyXG4gIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvd1N1Y2Nlc3MsIHNldFNob3dTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkQ29tcGxldGVkLCBzZXRVcGxvYWRDb21wbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWxlSWQsIHNldEZpbGVJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG9ydFVybCwgc2V0U2hvcnRVcmxdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB1cGxvYWRGaWxlID0gKGZpbGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgY29uc3QgbWV0YWRhdGEgPSB7XHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbGVSZWYgPSByZWYoc3RvcmFnZSwgXCJVc2VyX0ZpbGVzL1wiICsgZmlsZT8ubmFtZSk7XHJcbiAgICBjb25zdCB1cGxvYWRUYXNrID0gdXBsb2FkQnl0ZXNSZXN1bWFibGUoZmlsZVJlZiwgZmlsZSwgbWV0YWRhdGEpO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3Igc3RhdGUgY2hhbmdlcywgZXJyb3JzLCBhbmQgY29tcGxldGlvbiBvZiB0aGUgdXBsb2FkLlxyXG4gICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgXCJzdGF0ZV9jaGFuZ2VkXCIsXHJcbiAgICAgIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYXBzaG90KTtcclxuICAgICAgICAvLyBHZXQgdGFzayBwcm9ncmVzcywgaW5jbHVkaW5nIHRoZSBudW1iZXIgb2YgYnl0ZXMgdXBsb2FkZWQgYW5kIHRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgdG8gYmUgdXBsb2FkZWRcclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9XHJcbiAgICAgICAgICAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVXBsb2FkIGlzIFwiICsgcHJvZ3Jlc3MgKyBcIiUgZG9uZVwiKTtcclxuICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIEEgZnVsbCBsaXN0IG9mIGVycm9yIGNvZGVzIGlzIGF2YWlsYWJsZSBhdFxyXG4gICAgICAgIC8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3N0b3JhZ2Uvd2ViL2hhbmRsZS1lcnJvcnNcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBzZXRTaG93U3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICBnZXREb3dubG9hZFVSTCh1cGxvYWRUYXNrLnNuYXBzaG90LnJlZikudGhlbigoZG93bmxvYWRVUkwpID0+IHtcclxuICAgICAgICAgIHNhdmVUb1N0b3JlKGZpbGUsIGRvd25sb2FkVVJMKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlVG9TdG9yZSA9IGFzeW5jIChmaWxlLCBmaWxlVXJsKSA9PiB7XHJcbiAgICBjb25zdCBkb2NJZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IHR1cmxSZWYgPSB0dXJsO1xyXG5cclxuICAgIHR1cmxSZWY/LnNob3J0ZW4oZmlsZVVybCkudGhlbigocmVzKT0+e1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMsIHR5cGVvZihyZXMpKTtcclxuICAgICAgc2V0U2hvcnRVcmwocmVzKTtcclxuICAgIH0pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBzaG9ydFVybC5sZW5ndGgoKSA+IDAgJiYgYXdhaXQgc2V0RG9jKGRvYyhkYiwgXCJVcGxvYWRlZF9GaWxlc1wiLCBkb2NJZCksIHtcclxuXHJcbiAgICAgIEZpbGVJZDogZG9jSWQsXHJcbiAgICAgIEZpbGVOYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgIEZpbGVUeXBlOiBmaWxlLnR5cGUsXHJcbiAgICAgIEZpbGVTaXplOiBmaWxlLnNpemUsXHJcbiAgICAgIFVzZXJFbWFpbDogdXNlci5wcmltYXJ5RW1haWxBZGRyZXNzLmVtYWlsQWRkcmVzcyxcclxuICAgICAgVXNlck5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgIFVzZXJGdWxsTmFtZTogdXNlci5mdWxsTmFtZSxcclxuICAgICAgRmlsZVVybDogZmlsZVVybCxcclxuICAgICAgVXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICBVc2VySW1hZ2VVcmw6IHVzZXIuaW1hZ2VVcmwsXHJcbiAgICAgIFVzZXJQaG9uZTogdXNlci5wcmltYXJ5UGhvbmVOdW1iZXIucGhvbmVOdW1iZXIsXHJcbiAgICAgIFBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBJc1Bhc3N3b3JkUHJvdGVjdGVkOiBmYWxzZSxcclxuICAgICAgU2hvcnRVcmw6IHNob3J0VXJsLFxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFVwbG9hZENvbXBsZXRlZCh0cnVlKTtcclxuICAgICAgc2V0RmlsZUlkKGRvY0lkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGxvYWRDb21wbGV0ZWQgJiZcclxuICAgICAgZmlsZUlkICYmXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFVwbG9hZENvbXBsZXRlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd1N1Y2Nlc3MoZmFsc2UpO1xyXG4gICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL2ZpbGUtcHJldmlldy9cIiArIGZpbGVJZCk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gIH0sIFt1cGxvYWRDb21wbGV0ZWQgPT0gdHJ1ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkJyBzdHlsZT17e2Rpc3BsYXk6IGAke3Nob3dTdWNjZXNzID09IHRydWU/ICcnOiBcIm5vbmVcIn1gfX0+XHJcbiAgICAgICAge3Nob3dTdWNjZXNzID09IHRydWUgPyA8VXBsb2FkU3VjY2VzcyBtc2c9e1wiVXBsb2FkZWQgc3VjY2Nlc3NmdWxseSFcIn0gLz4gOiBudWxsfVxyXG4gICAgICAgIHsvKiA8VXBsb2FkU3VjY2VzcyBtc2c9e1wiVXBsb2FkZWQgc3VjY2Nlc3NmdWxseSFcIn0gLz4gKi99XHJcbiAgICAgICAge3NldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2hvd1N1Y2Nlc3MoZmFsc2UpO1xyXG4gICAgICAgIH0sIDMwMDApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFVwbG9hZEZvcm1cclxuICAgICAgICB1cGxvYWRTZWxlY3RlZEZpbGU9eyhkYXRhKSA9PiB1cGxvYWRGaWxlKGRhdGEpfVxyXG4gICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXBsb2FkRm9ybSIsImFwcCIsImdldFN0b3JhZ2UiLCJyZWYiLCJ1cGxvYWRCeXRlc1Jlc3VtYWJsZSIsImdldERvd25sb2FkVVJMIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwic2V0RG9jIiwiVXBsb2FkU3VjY2VzcyIsInVzZVVzZXIiLCJTaG9ydFVybCIsInVzZVJvdXRlciIsInR1cmwiLCJVcGxvYWRzIiwicm91dGVyIiwidXNlciIsInN0b3JhZ2UiLCJkYiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwidXBsb2FkQ29tcGxldGVkIiwic2V0VXBsb2FkQ29tcGxldGVkIiwiZmlsZUlkIiwic2V0RmlsZUlkIiwic2hvcnRVcmwiLCJzZXRTaG9ydFVybCIsInVwbG9hZEZpbGUiLCJmaWxlIiwiY29uc29sZSIsImxvZyIsIm1ldGFkYXRhIiwiY29udGVudFR5cGUiLCJ0eXBlIiwiZmlsZVJlZiIsIm5hbWUiLCJ1cGxvYWRUYXNrIiwib24iLCJzbmFwc2hvdCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiZXJyb3IiLCJ0aGVuIiwiZG93bmxvYWRVUkwiLCJzYXZlVG9TdG9yZSIsImZpbGVVcmwiLCJkb2NJZCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInR1cmxSZWYiLCJzaG9ydGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJsZW5ndGgiLCJGaWxlSWQiLCJGaWxlTmFtZSIsIkZpbGVUeXBlIiwiRmlsZVNpemUiLCJzaXplIiwiVXNlckVtYWlsIiwicHJpbWFyeUVtYWlsQWRkcmVzcyIsImVtYWlsQWRkcmVzcyIsIlVzZXJOYW1lIiwidXNlcm5hbWUiLCJVc2VyRnVsbE5hbWUiLCJmdWxsTmFtZSIsIkZpbGVVcmwiLCJVc2VySWQiLCJpZCIsIlVzZXJJbWFnZVVybCIsImltYWdlVXJsIiwiVXNlclBob25lIiwicHJpbWFyeVBob25lTnVtYmVyIiwicGhvbmVOdW1iZXIiLCJQYXNzd29yZCIsIklzUGFzc3dvcmRQcm90ZWN0ZWQiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwibXNnIiwidXBsb2FkU2VsZWN0ZWRGaWxlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/uploads/page.js\n"));

/***/ })

});