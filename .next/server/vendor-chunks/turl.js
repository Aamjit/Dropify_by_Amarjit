/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/turl";
exports.ids = ["vendor-chunks/turl"];
exports.modules = {

/***/ "(ssr)/./node_modules/turl/index.js":
/*!************************************!*\
  !*** ./node_modules/turl/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const https = __webpack_require__(/*! https */ \"https\");\n\nmodule.exports = {\n  shorten: (url) => {\n    return new Promise((resolve, reject) => {\n      const options = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`;\n\n      https.get(options, (response) => {\n        if (response.statusCode >= 400) {\n          reject(new Error(`${response.statusCode} ${response.statusMessage}`));\n        }\n\n        response.on('data', (data) => {\n          // TinyUrl API support HTTPS short link generation but not their API\n          // so we need to replace the protocol.. :(\n          resolve(data.toString().replace('http://', 'https://'));\n        });\n      }).on('error', (error) => {\n        reject(error);\n      });\n    });\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHVybC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxjQUFjLG1CQUFPLENBQUMsb0JBQU87O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSx3QkFBd0I7O0FBRXhGO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCLEVBQUUsdUJBQXVCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Ryb3BpZnkvLi9ub2RlX21vZHVsZXMvdHVybC9pbmRleC5qcz9mMDFhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNob3J0ZW46ICh1cmwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IGBodHRwczovL3Rpbnl1cmwuY29tL2FwaS1jcmVhdGUucGhwP3VybD0ke2VuY29kZVVSSUNvbXBvbmVudCh1cmwpfWA7XG5cbiAgICAgIGh0dHBzLmdldChvcHRpb25zLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gNDAwKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXNDb2RlfSAke3Jlc3BvbnNlLnN0YXR1c01lc3NhZ2V9YCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzcG9uc2Uub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vIFRpbnlVcmwgQVBJIHN1cHBvcnQgSFRUUFMgc2hvcnQgbGluayBnZW5lcmF0aW9uIGJ1dCBub3QgdGhlaXIgQVBJXG4gICAgICAgICAgLy8gc28gd2UgbmVlZCB0byByZXBsYWNlIHRoZSBwcm90b2NvbC4uIDooXG4gICAgICAgICAgcmVzb2x2ZShkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgnaHR0cDovLycsICdodHRwczovLycpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/turl/index.js\n");

/***/ })

};
;