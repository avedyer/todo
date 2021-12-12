/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n    background-color: hsl(0, 0%, 90%);\n    display: relative;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\ntable > tr:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\ntable > tr:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: hsl(0, 0%, 95%);\n    box-sizing: border-box;\n}\n \n.listContainer { \n    min-height: 100vh;\n    width: 80%;\n    min-width: 400px;\n    padding: 12px;\n    position: absolute;\n    right: 0;\n    box-sizing: border-box;\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    grid-template-columns: auto 3fr 1fr 1fr auto auto;\n    height: 2em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n    float: right;\n}\n\n.project {\n\n}\n\n.task {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    position: relative;\n    padding: 6px 6px 32px 6px;\n}\n\n.note .buttonContainer {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-color: hsl(0, 0%, 90%);\n    padding: 2px;\n    z-index: 2;\n}\n\n.noteTitle {\n    width: 80%;\n    height: 60px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 12px;\n}\n\n.pin {\n    float: right;\n    width: 15%;\n}\n\n.noteContent {\n    clear: both;\n}\n\n.note::after {\n    content: '';\n    width: 100%;\n    height: 20%;\n    display: inline-block;\n    background: linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 95%, 0.8) 50%, hsl(0, 0%, 95%) 100%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.unrolled .noteContent {\n    \n}\n\n.unrolled::after{\n    display: none;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned::before {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;;AAEA;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,UAAU;IACV,eAAe;IACf,MAAM;IACN,OAAO;IACP,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,oCAAoC;AACxC;;AAEA;AACA;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;;AAGA;IACI,iDAAiD;IACjD,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,iCAAiC;IACjC,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,mGAAmG;IACnG,kBAAkB;IAClB,SAAS;IACT,OAAO;AACX;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;;AAEA;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n    background-color: hsl(0, 0%, 90%);\n    display: relative;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\ntable > tr:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\ntable > tr:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: hsl(0, 0%, 95%);\n    box-sizing: border-box;\n}\n \n.listContainer { \n    min-height: 100vh;\n    width: 80%;\n    min-width: 400px;\n    padding: 12px;\n    position: absolute;\n    right: 0;\n    box-sizing: border-box;\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    grid-template-columns: auto 3fr 1fr 1fr auto auto;\n    height: 2em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n    float: right;\n}\n\n.project {\n\n}\n\n.task {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    position: relative;\n    padding: 6px 6px 32px 6px;\n}\n\n.note .buttonContainer {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-color: hsl(0, 0%, 90%);\n    padding: 2px;\n    z-index: 2;\n}\n\n.noteTitle {\n    width: 80%;\n    height: 60px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 12px;\n}\n\n.pin {\n    float: right;\n    width: 15%;\n}\n\n.noteContent {\n    clear: both;\n}\n\n.note::after {\n    content: '';\n    width: 100%;\n    height: 20%;\n    display: inline-block;\n    background: linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 95%, 0.8) 50%, hsl(0, 0%, 95%) 100%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.unrolled .noteContent {\n    \n}\n\n.unrolled::after{\n    display: none;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned::before {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.js */ "./src/modules/note.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList.js */ "./src/modules/todoList.js");
/* harmony import */ var _noteList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noteList.js */ "./src/modules/noteList.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");









class UI {

    static currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects[0];
    static body = document.querySelector('body')

    // Initial Loadout

    static loadUI () {
        this.body.append(this.loadSidebar(), this.loadContainer('project', _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects[0]));
    }


    // Navigation bar for switching between projects and notes

    static loadSidebar() {
        let sidebar = document.querySelector('.sidebar')

        if (!sidebar) {
            sidebar = document.createElement('div');
            sidebar.classList.add('sidebar');
        }

        else {
            sidebar.innerHTML = ''
        }

        const noteTab = document.createElement('div');
            noteTab.classList.add('tab');
        
        const noteTabHeader = document.createElement('h3');    
            noteTabHeader.innerHTML = "Notes"

        noteTab.onclick = () => {
            this.loadContainer('note', _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].notes);
            projectList.classList.add('hidden');
            noteTab.classList.add('selected')
            projectTab.classList.remove('selected')
        }

        noteTab.append(noteTabHeader);

        const projectTab = document.createElement('div');
            projectTab.classList.add('tab');

        const projectTabHeader = document.createElement('h3');
            projectTabHeader.innerHTML = "Projects";

        projectTab.append(projectTabHeader); 

        projectTab.onclick = () => {
            this.loadContainer('project', _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects[0])
            projectList.classList.remove('hidden');
            projectTab.classList.add('selected');
            noteTab.classList.remove('selected')
        }

        const projectList = document.createElement('ul');
            projectList.classList.add('projectList', 'hidden');

        // List project names for view selection

        for (const project of _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects) {
            const projectEl = document.createElement('li');
            
            const projectTitle = document.createElement('span');
                projectTitle.innerHTML = project.title;
                projectTitle.onclick = () => {
                    this.loadContainer('project', project);
                }

            const editEl = document.createElement('button');
                editEl.innerHTML = '✎';
                editEl.onclick = () => {
                    projectEl.parentElement.replaceChild(this.loadProjectForm(project), projectEl);
                }

            const delEl = document.createElement('button');
                delEl. innerHTML = 'x'
                delEl.onclick = () => {
                    _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeProject(project);
                    this.loadSidebar();
                }

            projectEl.append(projectTitle, editEl, delEl);
            
            projectList.append(projectEl);
        }

        const addProjectButton = document.createElement('button');
            addProjectButton.innerHTML = '+';
            addProjectButton.onclick = () => {projectList.append(this.loadProjectForm());}
            
        projectList.append(addProjectButton);    

        sidebar.append(noteTab, projectTab, projectList);

        return sidebar
    }

    static loadContainer(type, list) {

        // Load generic container for projects or lists, load in content based on arguments

        let listContainer = document.querySelector('.listContainer');

        if (!listContainer) {
            listContainer = document.createElement('div');
            listContainer.classList.add('listContainer');
            listContainer.append(this.loadProject(list));
        }

        else {
            listContainer.innerHTML = '';

            switch (type) {
                case 'project':
                    listContainer.append(this.loadProject(list));
                    break
                case 'note':
                    listContainer.append(this.loadNoteList(_noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].notes));
            }

        }

        return listContainer
    }

    static loadProject (project) {

        // Load project container with editing, deleting, sorting functionality

        if (!project) {
            let project = this.currentProject;
        }

        let projectContainer = document.querySelector('.projectContainer');
        
        if (!projectContainer) {
            projectContainer = document.createElement('div');
            projectContainer.classList.add('projectContainer');
        }

        else {
            projectContainer.innerHTML = '';
        }

        const projectHeader = document.createElement('h2');
            projectHeader.innerHTML = project.title;

        const taskList = document.createElement('table')
            taskList.classList.add('taskList');

        const priorityEl = document.createElement('td');
            priorityEl.innerHTML = 'Priority';
            priorityEl.classList.add('priority');

            priorityEl.onclick = () => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].prioritySort(project);
                this.loadProject(project);
            }
        
        const dateEl = document.createElement('td');
            dateEl.innerHTML = 'Due Date'
            dateEl.classList.add('date');

            dateEl.onclick = () => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].dateSort(project);
                this.loadProject(project);
            }

        const gridFiller = document.createElement('td');

        const listHeader = document.createElement('tr');
            listHeader.classList.add('task')

        listHeader.append(gridFiller, gridFiller.cloneNode(), dateEl, priorityEl, gridFiller.cloneNode(), gridFiller.cloneNode());

        taskList.append(listHeader);
        

        for (const task of project.tasks) {
            
            taskList.append(this.loadTask(task));
        }

        const newTaskButton = document.createElement('button');
            newTaskButton.innerHTML = '+'
            newTaskButton.onclick = () => {projectContainer.append(this.loadTaskForm(project))};

        projectContainer.append(projectHeader, taskList, newTaskButton);

        this.currentProject = project;

        return projectContainer
    }
    
    static loadNoteList() {
        
        // Load container for notes, with seperation between pinned/unpinned notes, and new task button

        let noteContainer = document.querySelector('.noteContainer');

        if(!noteContainer) {
            noteContainer = document.createElement('div');
            noteContainer.classList.add('noteContainer');
        }

        else {
            noteContainer.innerHTML = '';
        }

        const pinnedContainer = document.createElement('div');
            pinnedContainer.classList.add('pinned', 'noteSection');

        const unpinnedContainer = document.createElement('div');
            unpinnedContainer.classList.add('unpinned', 'noteSection');

        for (let note of _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].notes) {
            note.pinned ? pinnedContainer.append(this.loadNote(note)) : unpinnedContainer.append(this.loadNote(note));
        }

        const newNoteButton = document.createElement('button');
            newNoteButton.innerHTML = '+'
            newNoteButton.classList.add('addButton');
            newNoteButton.onclick = () => {
                noteContainer.append(this.loadNoteForm());
            }

        noteContainer.append(pinnedContainer, unpinnedContainer, newNoteButton);

        return noteContainer
    }

    static loadNote (note) {

        // Load individual note with editing functionality

        const noteEl = document.createElement('div');
            noteEl.classList.add('note');

            const noteTitle = document.createElement('h3');
            noteTitle.classList.add("noteTitle");
            noteTitle.innerHTML = note.title;

            const pinEl = document.createElement('div');
                pinEl.classList.add('pin')
                note.pinned ? pinEl.innerHTML = 'unpin' : pinEl.innerHTML = 'pin'
                pinEl.onclick = () => {
                    _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].togglePin(note);
                    _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].pinSort();
                    this.loadNoteList();
                }

            const noteContent = document.createElement('p');
                noteContent.classList.add('noteContent');
                noteContent.innerHTML = note.content;

            const buttonContainer = document.createElement('div');
                buttonContainer.classList.add('buttonContainer');

            const editEl = document.createElement('button');
                editEl.innerHTML = '✎';
                editEl.classList.add('edit');
                editEl.onclick = () => {
                    noteEl.parentElement.replaceChild(this.loadNoteForm(note), noteEl);
                }

            const delEl = document.createElement('button');
                delEl. innerHTML = 'x'
                delEl.classList.add('del');
                delEl.onclick = () => {
                    _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].remove(note);
                    this.loadNoteList();
            }

            buttonContainer.append(editEl, delEl);

        noteEl.onclick = () => {
            if (!noteEl.classList.contains('unrolled')) {
                [].forEach.call(document.querySelectorAll('.note'), (el) => {
                    el.classList.remove('unrolled')
                });
                noteEl.classList.add('unrolled');
            }

            else {
                noteEl.classList.remove('unrolled');
            }
        }

        noteEl.append(noteTitle, pinEl, noteContent, buttonContainer);

        return noteEl
    }

    static loadTask (task) {

        // Load individual task, with editing functionality

        const taskEl = document.createElement('tr');
            taskEl.classList.add('task');

        if (task.complete) {
            taskEl.classList.add('complete')
        }

        const checkContainer = document.createElement('td');

        const checkEl = document.createElement('input');
            if (task.complete) {
                checkEl.setAttribute('checked', true);
            }
            checkEl.setAttribute('type', 'checkbox');
            checkEl.onclick = () => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].toggleCompletion(task);
                taskEl.classList.toggle('complete');
            };
        
        checkContainer.append(checkEl);

        const titleEl = document.createElement('td');
            titleEl.innerHTML = task.title;
            titleEl.classList.add('title')

        const dateEl = document.createElement('td');
            dateEl.innerHTML = task.dueDate;
            dateEl.classList.add('date')
        
        const priorityEl = document.createElement('td')
            priorityEl.innerHTML = task.priority;
            priorityEl.classList.add('priority')

        const editContainer = document.createElement('td')
        
        const editEl = document.createElement('button');
            editEl.innerHTML = '✎';
            editEl.onclick = () => {
                //taskEl.parentNode.replaceChild(this.loadTaskForm(this.currentProject, task), taskEl);
                const testEl = document.createElement('h3');
                testEl.innerHTML = 'test appendix';
                taskEl.innerHTML = this.loadTaskForm(this.currentProject, task).innerHTML;
            }

        editContainer.append(editEl);

        const delContainer = document.createElement('td');

        const delEl = document.createElement('button');
            delEl. innerHTML = 'x'
            delEl.onclick = () => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeTask(task);
                this.loadContainer('project', this.currentProject);
            }

        editContainer.append(delEl);

        taskEl.append(checkContainer, titleEl, dateEl, priorityEl, editContainer, delContainer);

        return taskEl
    }

    static loadTaskForm (project, task) {

        // Load form for new tasks.
        // Can be used for editing or creation from scratch. Checks for exisitng task argument to determine output.

        let taskForm = document.querySelector('.taskForm');

        if (taskForm) {
            return taskForm
        }

        else {
            taskForm = document.createElement('form');
            taskForm.setAttribute('onsubmit', 'return false');
            taskForm.classList.add('taskForm');
        }

        const titleInput = document.createElement('input')
            titleInput.setAttribute('type', 'text');
            titleInput.setAttribute('placeholder', 'Title');
            titleInput.setAttribute('required', true);

        const dateLabel = document.createElement('label');
            dateLabel.setAttribute('for', 'dueDate');
            dateLabel.innerHTML = 'Due Date'

        const dateInput = document.createElement('input');
            dateInput.setAttribute('type', 'date');
            dateInput.setAttribute('name', 'dueDate');

        if (task) {
            titleInput.value = task.title;
            dateInput.value = task.dueDate;
        }

        taskForm.append(titleInput, dateLabel, dateInput);

        // Iterative creation of radio button selectors for priority. Defaults to medium, or preexisting task value.

        const prioritySelector = document.createElement('div');
        const priorityVals = ['Low', 'Medium', 'High'];

        for (let i=0; i<priorityVals.length; ++i) {

            const priorityLabel = document.createElement('label');
            priorityLabel.setAttribute('for', priorityVals[i]);
            priorityLabel.innerHTML = priorityVals[i]

            const priorityOpt = document.createElement('input');
            priorityOpt.setAttribute('type', 'radio');
            priorityOpt.name = 'priority';
            priorityOpt.value = priorityVals[i]
            if (task && task.priority.toLowerCase() === priorityVals[i].toLowerCase()) {
                priorityOpt.setAttribute('checked', true)
            }

            else if (!task && i === 1) {
                priorityOpt.setAttribute('checked', true);
            }

            prioritySelector.append(priorityOpt, priorityLabel);
        }

        const submitButton = document.createElement('button');
            submitButton.innerHTML = '✓';

        const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'x';
            cancelButton.onclick = () => {
                if (task) {
                    taskForm.parentElement.replaceChild(this.loadTask(task), taskForm);
                }
                else {
                    this.deleteElement(taskForm)
                }
            };

        taskForm.append(titleInput, dateLabel, dateInput, prioritySelector, submitButton, cancelButton);

        taskForm.onsubmit = () => {
            
            let newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](titleInput.value, dateInput.value, document.querySelector('input[name="priority"]:checked').value);

            if (task) {
                newTask.id = task.id;
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].replaceTask(newTask, task, project);
            }
            else {
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTask(project, newTask);
            }
            this.loadContainer('project', project);
        };

        return taskForm
    }

    static loadProjectForm(project) {

        // Load form for new project.
        // Can be used for editing or creation from scratch. Checks for exisitng project argument to determine output.

        let projectForm = document.querySelector('.projectForm');

        if (projectForm) {
            return projectForm
        }

        else {
            projectForm = document.createElement('form');
            projectForm.setAttribute('onsubmit', 'return false');
            projectForm.classList.add('projectForm');
        }

        const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');

        const submitButton = document.createElement('button');
            submitButton.innerHTML = '✓';

        const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'x';
            cancelButton.onclick = () => {this.deleteElement(projectForm)};

        if (project){
            titleInput.value = project.title;
        }

        projectForm.append(titleInput, submitButton, cancelButton);

        projectForm.onsubmit = () => {

            let newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](titleInput.value);

            if (project) {
                newProject.id = project.id;
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].replaceProject(newProject, project);
            }

            else {
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(newProject);
            }

            this.loadSidebar();
            this.loadContainer('project', newProject);

            return false
        }

        return projectForm
    }

    static loadNoteForm (note) {

        // Load form for new note.
        // Can be used for editing or creation from scratch. Checks for exisitng note argument to determine output.

        let noteForm = document.querySelector('.noteForm');

        if (noteForm) {
            return noteForm
        }

        else {
            noteForm = document.createElement('form');
            noteForm.setAttribute('onsubmit', 'return false');
        }
        

        const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');

        const contentInput = document.createElement('textarea');
            contentInput.setAttribute('rows', '8');
            contentInput.setAttribute('cols', '32');  

        const submitButton = document.createElement('button');
            submitButton.innerHTML = '✓';

        const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'x';

            cancelButton.onclick = () => {
                if (!note) {
                    this.deleteElement(noteForm);
                }
            }

        if (note) {
            titleInput.value = note.title;
            contentInput.value = note.content;
        }
        
        noteForm.append(titleInput, contentInput, submitButton, cancelButton);

        noteForm.onsubmit = () => {
            let newNote = new _note_js__WEBPACK_IMPORTED_MODULE_2__["default"] (titleInput.value, contentInput.value);

            if (note) {
                newNote.id = note.id;
                newNote.pinned = note.pinned;

                _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].replace(newNote, note);
            }
            
            else {
                _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].add(newNote);
            }
            
            this.loadContainer('note');
        }

        return noteForm
    }

    static editNote (note) {

    }
    
    static deleteElement(element) {
        element.parentElement.removeChild(element);
    }
}

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writeId": () => (/* binding */ writeId),
/* harmony export */   "populateStorage": () => (/* binding */ populateStorage)
/* harmony export */ });
function writeId (currentIds) {

    let newId =Math.floor(Math.random() * (2**32));


    while (currentIds.includes(newId)) {
        newId = Math.floor(Math.random() * (2**32));
    }
    
    return newId;
}

function populateStorage(key, value){
    console.log("populating...")
    localStorage.setItem(key, JSON.stringify(value));
}



/***/ }),

/***/ "./src/modules/note.js":
/*!*****************************!*\
  !*** ./src/modules/note.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var _noteList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noteList.js */ "./src/modules/noteList.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");



class Note {
    constructor (title, content) {
        this.id = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.writeId)(_noteList_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIds());
        this.title = title;
        this.content = content;
        this.date = Date();
        this.pinned = false;
    }
}

/***/ }),

/***/ "./src/modules/noteList.js":
/*!*********************************!*\
  !*** ./src/modules/noteList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.js */ "./src/modules/note.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");



class NoteList {
    constructor() {
        this.notes = []
    }

    add(note) {
        this.notes.push(note);
        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('noteList', this.notes);
    }

    remove(note) {
        for (let i=0; i<this.notes.length; ++i) {
            if (note.id === this.notes[i].id) {
                this.notes.splice(i, 1);
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('noteList', this.notes);
                return
            }
        }
    }

    replace (newNote, oldNote) {
        for (let i=0; i<this.notes.length; ++i) {
            if (oldNote.id === this.notes[i].id) {
                this.notes[i] = newNote;
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('noteList', this.notes);
                return
            }
        }
    }

    removeAll() {
        this.notes.length = 0;
    }

    getIds() {
        let ids = []

        for (const note of this.notes) {
            ids.push(note.id);
        }

        return ids
    }

    togglePin(note) {
        note.pinned = !note.pinned;
        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('noteList', this.notes);
    }

    pinSort() {
        let sortedNotes = []

        for (const note of this.notes) {
            if (note.pinned) {
                sortedNotes.unshift(note);
            }
            else{
                sortedNotes.push(note);
            }
        }

        this.notes.splice(0, sortedNotes.length, ...sortedNotes);
    }

    dateSort () {
        this.notes.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new NoteList());

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/modules/todoList.js");



class Project {
    constructor (title) {
        this.id = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.writeId)(_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectIds());
        this. title = title;
        this.tasks = [];
    }
}

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/modules/todoList.js");



class Task {
    constructor (title, dueDate, priority) {
        this.id = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.writeId)(_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskIds());
        this.title = title;
        this.dueDate = dueDate
        this.priority = priority;
        this.complete = false
    }
}

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");



class TodoList {
    constructor () {
        this.projects = []

        //this.projects.push(new Project('Home', '09/14/22'));    
        //new Project('Today', helpers.date.today())
        //new Project('This Week', helpers.date.jump(7))
    }

    addProject(project) {
        this.projects.push(project);
        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('todoList', this.projects);
    }

    addTask(project, task) {
        project.tasks.push(task);
        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('todoList', this.projects);
    }

    toggleCompletion(task) {
        task.complete = !task.complete;
        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('todoList', this.projects);
    }

    removeProject(project) {

        for (let i=0; i<=this.projects.length; ++i) {
            
            if (project.id === this.projects[i].id) {
                this.projects.splice(i, 1);
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('todoList', this.projects);
                return
            }
        }
    }

    removeTask(task, project) {

        if (!project){
            for (let project of this.projects) {
                for (let i=0; i<project.tasks.length; ++i) {
                    if (task.id === project.tasks[i].id) {
                        project.tasks.splice(i, 1);
                        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('todoList', this.projects);
                        return
                    }
                }
            }
        }
        else {
            for (let i=0; i<project.tasks.length; ++i) {
                if (task.id === project.tasks[i].id) {
                    project.tasks.splice(i, 1);
                    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('todoList', this.projects);
                    return
                }
            }
        }
    }

    replaceTask (newTask, oldTask, project) {
        if (!project){
            for (let project of this.projects) {
                for (let i=0; i<project.tasks.length; ++i) {
                    if (oldTask.id === project.tasks[i].id) {
                        project.tasks[i] = newTask;
                        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('todoList', this.projects);
                        return
                    }
                }
            }
        }
        else {
            for (let i=0; i<project.tasks.length; ++i) {
                if (oldTask.id === project.tasks[i].id) {
                    project.tasks[i] = newTask;
                    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('todoList', this.projects);
                    return
                }
            }
        }
    }

    replaceProject(newProject, oldProject) {
        for (let i=0; i<=this.projects.length; ++i) {
            if (oldProject.id === this.projects[i].id) {
                this.projects[i] = newProject;
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)('todoList', this.projects);
                return
            }
        }
    }

    removeAll() {
        this.projects.length = 0;
    }

    getProjectIds() {
        let ids = []

        for (let project of this.projects) {
            ids.push(project.id);
        }

        return ids
    }

    getTaskIds() {
        let ids = []

        for (let project of this.projects) {
            for (let task of project.tasks) {
                ids.push(task.id)
            }
        }

        return ids
    }

    prioritySort(project) {

        let sortedTasks = []
        let medIndex = 0

        for (const task of project.tasks) {

            switch (task.priority) {
                case 'High':
                    sortedTasks.unshift(task);
                    ++medIndex; 
                    break
                case 'Medium':
                    sortedTasks.splice(medIndex, 0, task);
                    break
                case 'Low':
                    sortedTasks.push(task);
                    break
            }
        }

        project.tasks.splice(0, sortedTasks.length, ...sortedTasks);
    }

    dateSort(project) {
        project.tasks.sort(function(a, b) {
            return new Date(a.dueDate) - new Date(b.dueDate)
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TodoList());

/***/ }),

/***/ "./node_modules/dateformat/lib/dateformat.js":
/*!***************************************************!*\
  !*** ./node_modules/dateformat/lib/dateformat.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dateFormat),
/* harmony export */   "masks": () => (/* binding */ masks),
/* harmony export */   "i18n": () => (/* binding */ i18n),
/* harmony export */   "formatTimezone": () => (/* binding */ formatTimezone)
/* harmony export */ });
var token=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g;var timezone=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g;var timezoneClip=/[^-+\dA-Z]/g;function dateFormat(date,mask,utc,gmt){if(arguments.length===1&&typeof date==="string"&&!/\d/.test(date)){mask=date;date=undefined}date=date||date===0?date:new Date;if(!(date instanceof Date)){date=new Date(date)}if(isNaN(date)){throw TypeError("Invalid date")}mask=String(masks[mask]||mask||masks["default"]);var maskSlice=mask.slice(0,4);if(maskSlice==="UTC:"||maskSlice==="GMT:"){mask=mask.slice(4);utc=true;if(maskSlice==="GMT:"){gmt=true}}var _=function _(){return utc?"getUTC":"get"};var _d=function d(){return date[_()+"Date"]()};var D=function D(){return date[_()+"Day"]()};var _m=function m(){return date[_()+"Month"]()};var y=function y(){return date[_()+"FullYear"]()};var _H=function H(){return date[_()+"Hours"]()};var _M=function M(){return date[_()+"Minutes"]()};var _s=function s(){return date[_()+"Seconds"]()};var _L=function L(){return date[_()+"Milliseconds"]()};var _o=function o(){return utc?0:date.getTimezoneOffset()};var _W=function W(){return getWeek(date)};var _N=function N(){return getDayOfWeek(date)};var flags={d:function d(){return _d()},dd:function dd(){return pad(_d())},ddd:function ddd(){return i18n.dayNames[D()]},DDD:function DDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()],short:true})},dddd:function dddd(){return i18n.dayNames[D()+7]},DDDD:function DDDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()+7]})},m:function m(){return _m()+1},mm:function mm(){return pad(_m()+1)},mmm:function mmm(){return i18n.monthNames[_m()]},mmmm:function mmmm(){return i18n.monthNames[_m()+12]},yy:function yy(){return String(y()).slice(2)},yyyy:function yyyy(){return pad(y(),4)},h:function h(){return _H()%12||12},hh:function hh(){return pad(_H()%12||12)},H:function H(){return _H()},HH:function HH(){return pad(_H())},M:function M(){return _M()},MM:function MM(){return pad(_M())},s:function s(){return _s()},ss:function ss(){return pad(_s())},l:function l(){return pad(_L(),3)},L:function L(){return pad(Math.floor(_L()/10))},t:function t(){return _H()<12?i18n.timeNames[0]:i18n.timeNames[1]},tt:function tt(){return _H()<12?i18n.timeNames[2]:i18n.timeNames[3]},T:function T(){return _H()<12?i18n.timeNames[4]:i18n.timeNames[5]},TT:function TT(){return _H()<12?i18n.timeNames[6]:i18n.timeNames[7]},Z:function Z(){return gmt?"GMT":utc?"UTC":formatTimezone(date)},o:function o(){return(_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60)*100+Math.abs(_o())%60,4)},p:function p(){return(_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60),2)+":"+pad(Math.floor(Math.abs(_o())%60),2)},S:function S(){return["th","st","nd","rd"][_d()%10>3?0:(_d()%100-_d()%10!=10)*_d()%10]},W:function W(){return _W()},WW:function WW(){return pad(_W())},N:function N(){return _N()}};return mask.replace(token,function(match){if(match in flags){return flags[match]()}return match.slice(1,match.length-1)})}var masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"};var i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var pad=function pad(val){var len=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;return String(val).padStart(len,"0")};var getDayName=function getDayName(_ref){var y=_ref.y,m=_ref.m,d=_ref.d,_=_ref._,dayName=_ref.dayName,_ref$short=_ref["short"],_short=_ref$short===void 0?false:_ref$short;var today=new Date;var yesterday=new Date;yesterday.setDate(yesterday[_+"Date"]()-1);var tomorrow=new Date;tomorrow.setDate(tomorrow[_+"Date"]()+1);var today_d=function today_d(){return today[_+"Date"]()};var today_m=function today_m(){return today[_+"Month"]()};var today_y=function today_y(){return today[_+"FullYear"]()};var yesterday_d=function yesterday_d(){return yesterday[_+"Date"]()};var yesterday_m=function yesterday_m(){return yesterday[_+"Month"]()};var yesterday_y=function yesterday_y(){return yesterday[_+"FullYear"]()};var tomorrow_d=function tomorrow_d(){return tomorrow[_+"Date"]()};var tomorrow_m=function tomorrow_m(){return tomorrow[_+"Month"]()};var tomorrow_y=function tomorrow_y(){return tomorrow[_+"FullYear"]()};if(today_y()===y&&today_m()===m&&today_d()===d){return _short?"Tdy":"Today"}else if(yesterday_y()===y&&yesterday_m()===m&&yesterday_d()===d){return _short?"Ysd":"Yesterday"}else if(tomorrow_y()===y&&tomorrow_m()===m&&tomorrow_d()===d){return _short?"Tmw":"Tomorrow"}return dayName};var getWeek=function getWeek(date){var targetThursday=new Date(date.getFullYear(),date.getMonth(),date.getDate());targetThursday.setDate(targetThursday.getDate()-(targetThursday.getDay()+6)%7+3);var firstThursday=new Date(targetThursday.getFullYear(),0,4);firstThursday.setDate(firstThursday.getDate()-(firstThursday.getDay()+6)%7+3);var ds=targetThursday.getTimezoneOffset()-firstThursday.getTimezoneOffset();targetThursday.setHours(targetThursday.getHours()-ds);var weekDiff=(targetThursday-firstThursday)/(864e5*7);return 1+Math.floor(weekDiff)};var getDayOfWeek=function getDayOfWeek(date){var dow=date.getDay();if(dow===0){dow=7}return dow};var formatTimezone=function formatTimezone(date){return(String(date).match(timezone)||[""]).pop().replace(timezoneClip,"").replace(/GMT\+0000/g,"UTC")};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/note.js */ "./src/modules/note.js");
/* harmony import */ var _modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todoList.js */ "./src/modules/todoList.js");
/* harmony import */ var _modules_noteList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/noteList.js */ "./src/modules/noteList.js");
/* harmony import */ var _modules_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/helpers.js */ "./src/modules/helpers.js");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");












// TESTING - FOR LATER REMOVAL

console.log("testing");

let testTask = new _modules_task_js__WEBPACK_IMPORTED_MODULE_0__["default"]('walk dog', 'December 8 2021', 'low');
let testNote = new _modules_note_js__WEBPACK_IMPORTED_MODULE_2__["default"]('groceries', 'avocado, mango, milk, rice');
let testProject = new _modules_project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('sell house');

//UI.testBody()

/*

testProject.tasks.push(testTask);
NoteList.add(testNote);
TodoList.addProject(testProject);
NoteList.add(new Note('me mow', "he's very small but big evil"));
NoteList.add(new Note('movies', 'Death of Stalin, Interstellar, Alien'))

*/

// INITIATE LOCAL STORAGE

if(!localStorage.getItem('todoList')){
    console.log("local storage empty");
    (0,_modules_helpers_js__WEBPACK_IMPORTED_MODULE_5__.populateStorage)('todoList', _modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects);
    (0,_modules_helpers_js__WEBPACK_IMPORTED_MODULE_5__.populateStorage)('noteList', _modules_noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].notes);
}

else{
    _modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects = JSON.parse(localStorage.getItem('todoList'));
    _modules_noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].notes = JSON.parse(localStorage.getItem('noteList'));
}

_modules_UI_js__WEBPACK_IMPORTED_MODULE_6__["default"].loadUI();

// MAPPING WINDOW VARS TO SCRIPT VARS

window.TodoList = _modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"]
window.testTask = testTask
window.testNote = testNote
window.writeId = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_5__.writeId
window.NoteList = _modules_noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"]
window.Project = _modules_project_js__WEBPACK_IMPORTED_MODULE_1__["default"]
window.Task = _modules_task_js__WEBPACK_IMPORTED_MODULE_0__["default"]
window.Note = _modules_note_js__WEBPACK_IMPORTED_MODULE_2__["default"]
window.populateStorage = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_5__.populateStorage
window.UI = _modules_UI_js__WEBPACK_IMPORTED_MODULE_6__["default"]
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGlCQUFpQix3REFBTztBQUN4QixrQkFBa0IsNERBQVE7QUFDMUIsaUJBQWlCLDJEQUFPO0FBQ3hCLGNBQWMsd0RBQUk7QUFDbEIsY0FBYyx3REFBSTtBQUNsQix5QkFBeUIsZ0VBQWU7QUFDeEMsWUFBWSxzRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9ub3RlTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RhdGVmb3JtYXQvbGliL2RhdGVmb3JtYXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXG4gICAgd2lkdGg6IDEuOGVtO1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50YWJsZSA+IHRyOm50aC1vZi10eXBlKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxufVxcblxcbnRhYmxlID4gdHI6bnRoLW9mLXR5cGUoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5saSAqIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAycHg7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLnNpZGViYXIgeyAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiBcXG4ubGlzdENvbnRhaW5lciB7IFxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XFxufVxcblxcbi50YWIgKiB7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLnRhYjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi50YWI6aG92ZXIsIC50YWIuc2VsZWN0ZWQge1xcbiAgICBoZWlnaHQ6IDk2cHg7XFxufVxcblxcbi50YWIgaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgbGkge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciBhdXRvIGF1dG87XFxufVxcblxcbi5wcm9qZWN0TGlzdDpob3ZlciB7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuXFxuLnRhc2sge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gM2ZyIDFmciAxZnIgYXV0byBhdXRvO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLnRhc2suY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6aHNsKDAsIDAlLCAzMCUpXFxufVxcblxcbi50YXNrIC5kYXRlLCAudGFzayAucHJpb3JpdHkge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhc2sgYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuXFxufVxcblxcbi50YXNrIHtcXG5cXG59XFxuXFxuLm5vdGVDb250YWluZXIge1xcblxcbn1cXG5cXG4ubm90ZVNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubm90ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCA5NSUpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA2cHggNnB4IDMycHggNnB4O1xcbn1cXG5cXG4ubm90ZSAuYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLm5vdGVUaXRsZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5waW4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAxNSU7XFxufVxcblxcbi5ub3RlQ29udGVudCB7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4ubm90ZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2xhKDAsIDAlLCAwJSwgMCkgMCUsIGhzbGEoMCwgMCUsIDk1JSwgMC44KSA1MCUsIGhzbCgwLCAwJSwgOTUlKSAxMDAlKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi51bnJvbGxlZCB7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbi51bnJvbGxlZCAubm90ZUNvbnRlbnQge1xcbiAgICBcXG59XFxuXFxuLnVucm9sbGVkOjphZnRlcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5vdGVDb250YWluZXIgLmFkZEJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnBpbm5lZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmZvY3VzZWQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udW5mb2N1c2VkOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDIwJSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9z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QVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXG4gICAgd2lkdGg6IDEuOGVtO1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50YWJsZSA+IHRyOm50aC1vZi10eXBlKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxufVxcblxcbnRhYmxlID4gdHI6bnRoLW9mLXR5cGUoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5saSAqIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAycHg7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLnNpZGViYXIgeyAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiBcXG4ubGlzdENvbnRhaW5lciB7IFxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XFxufVxcblxcbi50YWIgKiB7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLnRhYjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi50YWI6aG92ZXIsIC50YWIuc2VsZWN0ZWQge1xcbiAgICBoZWlnaHQ6IDk2cHg7XFxufVxcblxcbi50YWIgaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgbGkge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciBhdXRvIGF1dG87XFxufVxcblxcbi5wcm9qZWN0TGlzdDpob3ZlciB7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuXFxuLnRhc2sge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gM2ZyIDFmciAxZnIgYXV0byBhdXRvO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLnRhc2suY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6aHNsKDAsIDAlLCAzMCUpXFxufVxcblxcbi50YXNrIC5kYXRlLCAudGFzayAucHJpb3JpdHkge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhc2sgYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuXFxufVxcblxcbi50YXNrIHtcXG5cXG59XFxuXFxuLm5vdGVDb250YWluZXIge1xcblxcbn1cXG5cXG4ubm90ZVNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubm90ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCA5NSUpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA2cHggNnB4IDMycHggNnB4O1xcbn1cXG5cXG4ubm90ZSAuYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLm5vdGVUaXRsZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5waW4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAxNSU7XFxufVxcblxcbi5ub3RlQ29udGVudCB7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4ubm90ZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2xhKDAsIDAlLCAwJSwgMCkgMCUsIGhzbGEoMCwgMCUsIDk1JSwgMC44KSA1MCUsIGhzbCgwLCAwJSwgOTUlKSAxMDAlKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi51bnJvbGxlZCB7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbi51bnJvbGxlZCAubm90ZUNvbnRlbnQge1xcbiAgICBcXG59XFxuXFxuLnVucm9sbGVkOjphZnRlcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5vdGVDb250YWluZXIgLmFkZEJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnBpbm5lZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmZvY3VzZWQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udW5mb2N1c2VkOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDIwJSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBOb3RlIGZyb20gJy4vbm90ZS5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcbmltcG9ydCBOb3RlTGlzdCBmcm9tICcuL25vdGVMaXN0LmpzJztcbmltcG9ydCB7cG9wdWxhdGVTdG9yYWdlfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IHRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnO1xuaW1wb3J0IGRhdGVGb3JtYXQsIHsgbWFza3MgfSBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG5cbiAgICBzdGF0aWMgY3VycmVudFByb2plY3QgPSB0b2RvTGlzdC5wcm9qZWN0c1swXTtcbiAgICBzdGF0aWMgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG4gICAgLy8gSW5pdGlhbCBMb2Fkb3V0XG5cbiAgICBzdGF0aWMgbG9hZFVJICgpIHtcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZCh0aGlzLmxvYWRTaWRlYmFyKCksIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIFRvZG9MaXN0LnByb2plY3RzWzBdKSk7XG4gICAgfVxuXG5cbiAgICAvLyBOYXZpZ2F0aW9uIGJhciBmb3Igc3dpdGNoaW5nIGJldHdlZW4gcHJvamVjdHMgYW5kIG5vdGVzXG5cbiAgICBzdGF0aWMgbG9hZFNpZGViYXIoKSB7XG4gICAgICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuXG4gICAgICAgIGlmICghc2lkZWJhcikge1xuICAgICAgICAgICAgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNpZGViYXIuaW5uZXJIVE1MID0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdGVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBub3RlVGFiSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTsgICAgXG4gICAgICAgICAgICBub3RlVGFiSGVhZGVyLmlubmVySFRNTCA9IFwiTm90ZXNcIlxuXG4gICAgICAgIG5vdGVUYWIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcignbm90ZScsIE5vdGVMaXN0Lm5vdGVzKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgbm90ZVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIG5vdGVUYWIuYXBwZW5kKG5vdGVUYWJIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRhYkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGFiSGVhZGVyLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcblxuICAgICAgICBwcm9qZWN0VGFiLmFwcGVuZChwcm9qZWN0VGFiSGVhZGVyKTsgXG5cbiAgICAgICAgcHJvamVjdFRhYi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdwcm9qZWN0JywgVG9kb0xpc3QucHJvamVjdHNbMF0pXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIG5vdGVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnLCAnaGlkZGVuJyk7XG5cbiAgICAgICAgLy8gTGlzdCBwcm9qZWN0IG5hbWVzIGZvciB2aWV3IHNlbGVjdGlvblxuXG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBUb2RvTGlzdC5wcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGVkaXRFbC5pbm5lckhUTUwgPSAn4pyOJztcbiAgICAgICAgICAgICAgICBlZGl0RWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEVsLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHRoaXMubG9hZFByb2plY3RGb3JtKHByb2plY3QpLCBwcm9qZWN0RWwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxFbC4gaW5uZXJIVE1MID0gJ3gnXG4gICAgICAgICAgICAgICAgZGVsRWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVG9kb0xpc3QucmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU2lkZWJhcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvamVjdEVsLmFwcGVuZChwcm9qZWN0VGl0bGUsIGVkaXRFbCwgZGVsRWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdEVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gJysnO1xuICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge3Byb2plY3RMaXN0LmFwcGVuZCh0aGlzLmxvYWRQcm9qZWN0Rm9ybSgpKTt9XG4gICAgICAgICAgICBcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKGFkZFByb2plY3RCdXR0b24pOyAgICBcblxuICAgICAgICBzaWRlYmFyLmFwcGVuZChub3RlVGFiLCBwcm9qZWN0VGFiLCBwcm9qZWN0TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIHNpZGViYXJcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZENvbnRhaW5lcih0eXBlLCBsaXN0KSB7XG5cbiAgICAgICAgLy8gTG9hZCBnZW5lcmljIGNvbnRhaW5lciBmb3IgcHJvamVjdHMgb3IgbGlzdHMsIGxvYWQgaW4gY29udGVudCBiYXNlZCBvbiBhcmd1bWVudHNcblxuICAgICAgICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Q29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYgKCFsaXN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RDb250YWluZXInKTtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZFByb2plY3QobGlzdCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkUHJvamVjdChsaXN0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnbm90ZSc6XG4gICAgICAgICAgICAgICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZE5vdGVMaXN0KE5vdGVMaXN0Lm5vdGVzKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0Q29udGFpbmVyXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0IChwcm9qZWN0KSB7XG5cbiAgICAgICAgLy8gTG9hZCBwcm9qZWN0IGNvbnRhaW5lciB3aXRoIGVkaXRpbmcsIGRlbGV0aW5nLCBzb3J0aW5nIGZ1bmN0aW9uYWxpdHlcblxuICAgICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gdGhpcy5jdXJyZW50UHJvamVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghcHJvamVjdENvbnRhaW5lcikge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJylcbiAgICAgICAgICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tMaXN0Jyk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBwcmlvcml0eUVsLmlubmVySFRNTCA9ICdQcmlvcml0eSc7XG4gICAgICAgICAgICBwcmlvcml0eUVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIHByaW9yaXR5RWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC5wcmlvcml0eVNvcnQocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBkYXRlRWwuaW5uZXJIVE1MID0gJ0R1ZSBEYXRlJ1xuICAgICAgICAgICAgZGF0ZUVsLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcblxuICAgICAgICAgICAgZGF0ZUVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QuZGF0ZVNvcnQocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkRmlsbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgICAgICBjb25zdCBsaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgIGxpc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpXG5cbiAgICAgICAgbGlzdEhlYWRlci5hcHBlbmQoZ3JpZEZpbGxlciwgZ3JpZEZpbGxlci5jbG9uZU5vZGUoKSwgZGF0ZUVsLCBwcmlvcml0eUVsLCBncmlkRmlsbGVyLmNsb25lTm9kZSgpLCBncmlkRmlsbGVyLmNsb25lTm9kZSgpKTtcblxuICAgICAgICB0YXNrTGlzdC5hcHBlbmQobGlzdEhlYWRlcik7XG4gICAgICAgIFxuXG4gICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0aGlzLmxvYWRUYXNrKHRhc2spKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5ld1Rhc2tCdXR0b24uaW5uZXJIVE1MID0gJysnXG4gICAgICAgICAgICBuZXdUYXNrQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7cHJvamVjdENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkVGFza0Zvcm0ocHJvamVjdCkpfTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0SGVhZGVyLCB0YXNrTGlzdCwgbmV3VGFza0J1dHRvbik7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RDb250YWluZXJcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGxvYWROb3RlTGlzdCgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWQgY29udGFpbmVyIGZvciBub3Rlcywgd2l0aCBzZXBlcmF0aW9uIGJldHdlZW4gcGlubmVkL3VucGlubmVkIG5vdGVzLCBhbmQgbmV3IHRhc2sgYnV0dG9uXG5cbiAgICAgICAgbGV0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZUNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmKCFub3RlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGVDb250YWluZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm90ZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBpbm5lZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGlubmVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcsICdub3RlU2VjdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IHVucGlubmVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1bnBpbm5lZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd1bnBpbm5lZCcsICdub3RlU2VjdGlvbicpO1xuXG4gICAgICAgIGZvciAobGV0IG5vdGUgb2YgTm90ZUxpc3Qubm90ZXMpIHtcbiAgICAgICAgICAgIG5vdGUucGlubmVkID8gcGlubmVkQ29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWROb3RlKG5vdGUpKSA6IHVucGlubmVkQ29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWROb3RlKG5vdGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5ld05vdGVCdXR0b24uaW5uZXJIVE1MID0gJysnXG4gICAgICAgICAgICBuZXdOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ1dHRvbicpO1xuICAgICAgICAgICAgbmV3Tm90ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZE5vdGVGb3JtKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kKHBpbm5lZENvbnRhaW5lciwgdW5waW5uZWRDb250YWluZXIsIG5ld05vdGVCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBub3RlQ29udGFpbmVyXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWROb3RlIChub3RlKSB7XG5cbiAgICAgICAgLy8gTG9hZCBpbmRpdmlkdWFsIG5vdGUgd2l0aCBlZGl0aW5nIGZ1bmN0aW9uYWxpdHlcblxuICAgICAgICBjb25zdCBub3RlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBub3RlVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVUaXRsZVwiKTtcbiAgICAgICAgICAgIG5vdGVUaXRsZS5pbm5lckhUTUwgPSBub3RlLnRpdGxlO1xuXG4gICAgICAgICAgICBjb25zdCBwaW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBpbkVsLmNsYXNzTGlzdC5hZGQoJ3BpbicpXG4gICAgICAgICAgICAgICAgbm90ZS5waW5uZWQgPyBwaW5FbC5pbm5lckhUTUwgPSAndW5waW4nIDogcGluRWwuaW5uZXJIVE1MID0gJ3BpbidcbiAgICAgICAgICAgICAgICBwaW5FbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOb3RlTGlzdC50b2dnbGVQaW4obm90ZSk7XG4gICAgICAgICAgICAgICAgICAgIE5vdGVMaXN0LnBpblNvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTm90ZUxpc3QoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIG5vdGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ25vdGVDb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgbm90ZUNvbnRlbnQuaW5uZXJIVE1MID0gbm90ZS5jb250ZW50O1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGVkaXRFbC5pbm5lckhUTUwgPSAn4pyOJztcbiAgICAgICAgICAgICAgICBlZGl0RWwuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICAgICAgICAgIGVkaXRFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub3RlRWwucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodGhpcy5sb2FkTm90ZUZvcm0obm90ZSksIG5vdGVFbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbEVsLiBpbm5lckhUTUwgPSAneCdcbiAgICAgICAgICAgICAgICBkZWxFbC5jbGFzc0xpc3QuYWRkKCdkZWwnKTtcbiAgICAgICAgICAgICAgICBkZWxFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOb3RlTGlzdC5yZW1vdmUobm90ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE5vdGVMaXN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZWRpdEVsLCBkZWxFbCk7XG5cbiAgICAgICAgbm90ZUVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5vdGVFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Vucm9sbGVkJykpIHtcbiAgICAgICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGUnKSwgKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Vucm9sbGVkJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgndW5yb2xsZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Vucm9sbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBub3RlRWwuYXBwZW5kKG5vdGVUaXRsZSwgcGluRWwsIG5vdGVDb250ZW50LCBidXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBub3RlRWxcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFRhc2sgKHRhc2spIHtcblxuICAgICAgICAvLyBMb2FkIGluZGl2aWR1YWwgdGFzaywgd2l0aCBlZGl0aW5nIGZ1bmN0aW9uYWxpdHlcblxuICAgICAgICBjb25zdCB0YXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgICAgICBjb25zdCBjaGVja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tFbC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBjaGVja0VsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QudG9nZ2xlQ29tcGxldGlvbih0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjaGVja0NvbnRhaW5lci5hcHBlbmQoY2hlY2tFbCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICB0aXRsZUVsLmlubmVySFRNTCA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICB0aXRsZUVsLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcblxuICAgICAgICBjb25zdCBkYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgZGF0ZUVsLmlubmVySFRNTCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIGRhdGVFbC5jbGFzc0xpc3QuYWRkKCdkYXRlJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgICAgICAgICBwcmlvcml0eUVsLmlubmVySFRNTCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgICAgICBwcmlvcml0eUVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JylcblxuICAgICAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZWRpdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0RWwuaW5uZXJIVE1MID0gJ+Kcjic7XG4gICAgICAgICAgICBlZGl0RWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvL3Rhc2tFbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0aGlzLmxvYWRUYXNrRm9ybSh0aGlzLmN1cnJlbnRQcm9qZWN0LCB0YXNrKSwgdGFza0VsKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgICAgIHRlc3RFbC5pbm5lckhUTUwgPSAndGVzdCBhcHBlbmRpeCc7XG4gICAgICAgICAgICAgICAgdGFza0VsLmlubmVySFRNTCA9IHRoaXMubG9hZFRhc2tGb3JtKHRoaXMuY3VycmVudFByb2plY3QsIHRhc2spLmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBlZGl0Q29udGFpbmVyLmFwcGVuZChlZGl0RWwpO1xuXG4gICAgICAgIGNvbnN0IGRlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgICAgY29uc3QgZGVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbEVsLiBpbm5lckhUTUwgPSAneCdcbiAgICAgICAgICAgIGRlbEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCB0aGlzLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBlZGl0Q29udGFpbmVyLmFwcGVuZChkZWxFbCk7XG5cbiAgICAgICAgdGFza0VsLmFwcGVuZChjaGVja0NvbnRhaW5lciwgdGl0bGVFbCwgZGF0ZUVsLCBwcmlvcml0eUVsLCBlZGl0Q29udGFpbmVyLCBkZWxDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiB0YXNrRWxcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFRhc2tGb3JtIChwcm9qZWN0LCB0YXNrKSB7XG5cbiAgICAgICAgLy8gTG9hZCBmb3JtIGZvciBuZXcgdGFza3MuXG4gICAgICAgIC8vIENhbiBiZSB1c2VkIGZvciBlZGl0aW5nIG9yIGNyZWF0aW9uIGZyb20gc2NyYXRjaC4gQ2hlY2tzIGZvciBleGlzaXRuZyB0YXNrIGFyZ3VtZW50IHRvIGRldGVybWluZSBvdXRwdXQuXG5cbiAgICAgICAgbGV0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tGb3JtJyk7XG5cbiAgICAgICAgaWYgKHRhc2tGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFza0Zvcm1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ29uc3VibWl0JywgJ3JldHVybiBmYWxzZScpO1xuICAgICAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFza0Zvcm0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICAgICAgICAgICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgRGF0ZSdcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcblxuICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrRm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgZGF0ZUxhYmVsLCBkYXRlSW5wdXQpO1xuXG4gICAgICAgIC8vIEl0ZXJhdGl2ZSBjcmVhdGlvbiBvZiByYWRpbyBidXR0b24gc2VsZWN0b3JzIGZvciBwcmlvcml0eS4gRGVmYXVsdHMgdG8gbWVkaXVtLCBvciBwcmVleGlzdGluZyB0YXNrIHZhbHVlLlxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlWYWxzID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJpb3JpdHlWYWxzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByaW9yaXR5VmFsc1tpXSk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IHByaW9yaXR5VmFsc1tpXVxuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eU9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcmlvcml0eU9wdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgIHByaW9yaXR5T3B0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlPcHQudmFsdWUgPSBwcmlvcml0eVZhbHNbaV1cbiAgICAgICAgICAgIGlmICh0YXNrICYmIHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gcHJpb3JpdHlWYWxzW2ldLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eU9wdC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmICghdGFzayAmJiBpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlPcHQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0b3IuYXBwZW5kKHByaW9yaXR5T3B0LCBwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9ICfinJMnO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9ICd4JztcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGb3JtLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHRoaXMubG9hZFRhc2sodGFzayksIHRhc2tGb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRWxlbWVudCh0YXNrRm9ybSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBkYXRlTGFiZWwsIGRhdGVJbnB1dCwgcHJpb3JpdHlTZWxlY3Rvciwgc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHRhc2tGb3JtLm9uc3VibWl0ID0gKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFzay5pZCA9IHRhc2suaWQ7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QucmVwbGFjZVRhc2sobmV3VGFzaywgdGFzaywgcHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC5hZGRUYXNrKHByb2plY3QsIG5ld1Rhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdwcm9qZWN0JywgcHJvamVjdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRhc2tGb3JtXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0Rm9ybShwcm9qZWN0KSB7XG5cbiAgICAgICAgLy8gTG9hZCBmb3JtIGZvciBuZXcgcHJvamVjdC5cbiAgICAgICAgLy8gQ2FuIGJlIHVzZWQgZm9yIGVkaXRpbmcgb3IgY3JlYXRpb24gZnJvbSBzY3JhdGNoLiBDaGVja3MgZm9yIGV4aXNpdG5nIHByb2plY3QgYXJndW1lbnQgdG8gZGV0ZXJtaW5lIG91dHB1dC5cblxuICAgICAgICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKTtcblxuICAgICAgICBpZiAocHJvamVjdEZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Rm9ybVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJyk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ+Kckyc7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gJ3gnO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7dGhpcy5kZWxldGVFbGVtZW50KHByb2plY3RGb3JtKX07XG5cbiAgICAgICAgaWYgKHByb2plY3Qpe1xuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RGb3JtLm9uc3VibWl0ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuaWQgPSBwcm9qZWN0LmlkO1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LnJlcGxhY2VQcm9qZWN0KG5ld1Byb2plY3QsIHByb2plY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxvYWRTaWRlYmFyKCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCBuZXdQcm9qZWN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvamVjdEZvcm1cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZE5vdGVGb3JtIChub3RlKSB7XG5cbiAgICAgICAgLy8gTG9hZCBmb3JtIGZvciBuZXcgbm90ZS5cbiAgICAgICAgLy8gQ2FuIGJlIHVzZWQgZm9yIGVkaXRpbmcgb3IgY3JlYXRpb24gZnJvbSBzY3JhdGNoLiBDaGVja3MgZm9yIGV4aXNpdG5nIG5vdGUgYXJndW1lbnQgdG8gZGV0ZXJtaW5lIG91dHB1dC5cblxuICAgICAgICBsZXQgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZUZvcm0nKTtcblxuICAgICAgICBpZiAobm90ZUZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBub3RlRm9ybVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIG5vdGVGb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICAgICAgY29uc3QgY29udGVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIGNvbnRlbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnOCcpO1xuICAgICAgICAgICAgY29udGVudElucHV0LnNldEF0dHJpYnV0ZSgnY29scycsICczMicpOyAgXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ+Kckyc7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gJ3gnO1xuXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFbGVtZW50KG5vdGVGb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vdGUpIHtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBub3RlLnRpdGxlO1xuICAgICAgICAgICAgY29udGVudElucHV0LnZhbHVlID0gbm90ZS5jb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBub3RlRm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgY29udGVudElucHV0LCBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgbm90ZUZvcm0ub25zdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Tm90ZSA9IG5ldyBOb3RlICh0aXRsZUlucHV0LnZhbHVlLCBjb250ZW50SW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAobm90ZSkge1xuICAgICAgICAgICAgICAgIG5ld05vdGUuaWQgPSBub3RlLmlkO1xuICAgICAgICAgICAgICAgIG5ld05vdGUucGlubmVkID0gbm90ZS5waW5uZWQ7XG5cbiAgICAgICAgICAgICAgICBOb3RlTGlzdC5yZXBsYWNlKG5ld05vdGUsIG5vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBOb3RlTGlzdC5hZGQobmV3Tm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcignbm90ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vdGVGb3JtXG4gICAgfVxuXG4gICAgc3RhdGljIGVkaXROb3RlIChub3RlKSB7XG5cbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGRlbGV0ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxufSIsImZ1bmN0aW9uIHdyaXRlSWQgKGN1cnJlbnRJZHMpIHtcblxuICAgIGxldCBuZXdJZCA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIqKjMyKSk7XG5cblxuICAgIHdoaWxlIChjdXJyZW50SWRzLmluY2x1ZGVzKG5ld0lkKSkge1xuICAgICAgICBuZXdJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyKiozMikpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3SWQ7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZShrZXksIHZhbHVlKXtcbiAgICBjb25zb2xlLmxvZyhcInBvcHVsYXRpbmcuLi5cIilcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG59XG5cbmV4cG9ydCB7XG4gICAgd3JpdGVJZCxcbiAgICBwb3B1bGF0ZVN0b3JhZ2Vcbn07IiwiaW1wb3J0IE5vdGVMaXN0IGZyb20gJy4vbm90ZUxpc3QuanMnO1xuaW1wb3J0IHt3cml0ZUlkfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5pZCA9IHdyaXRlSWQoTm90ZUxpc3QuZ2V0SWRzKCkpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuZGF0ZSA9IERhdGUoKTtcbiAgICAgICAgdGhpcy5waW5uZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IE5vdGUgZnJvbSAnLi9ub3RlLmpzJztcbmltcG9ydCB7cG9wdWxhdGVTdG9yYWdlfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jbGFzcyBOb3RlTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubm90ZXMgPSBbXVxuICAgIH1cblxuICAgIGFkZChub3RlKSB7XG4gICAgICAgIHRoaXMubm90ZXMucHVzaChub3RlKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgIH1cblxuICAgIHJlbW92ZShub3RlKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLm5vdGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAobm90ZS5pZCA9PT0gdGhpcy5ub3Rlc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgnbm90ZUxpc3QnLCB0aGlzLm5vdGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcGxhY2UgKG5ld05vdGUsIG9sZE5vdGUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMubm90ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChvbGROb3RlLmlkID09PSB0aGlzLm5vdGVzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3Rlc1tpXSA9IG5ld05vdGU7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLm5vdGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0SWRzKCkge1xuICAgICAgICBsZXQgaWRzID0gW11cblxuICAgICAgICBmb3IgKGNvbnN0IG5vdGUgb2YgdGhpcy5ub3Rlcykge1xuICAgICAgICAgICAgaWRzLnB1c2gobm90ZS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRzXG4gICAgfVxuXG4gICAgdG9nZ2xlUGluKG5vdGUpIHtcbiAgICAgICAgbm90ZS5waW5uZWQgPSAhbm90ZS5waW5uZWQ7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgnbm90ZUxpc3QnLCB0aGlzLm5vdGVzKTtcbiAgICB9XG5cbiAgICBwaW5Tb3J0KCkge1xuICAgICAgICBsZXQgc29ydGVkTm90ZXMgPSBbXVxuXG4gICAgICAgIGZvciAoY29uc3Qgbm90ZSBvZiB0aGlzLm5vdGVzKSB7XG4gICAgICAgICAgICBpZiAobm90ZS5waW5uZWQpIHtcbiAgICAgICAgICAgICAgICBzb3J0ZWROb3Rlcy51bnNoaWZ0KG5vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBzb3J0ZWROb3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3Rlcy5zcGxpY2UoMCwgc29ydGVkTm90ZXMubGVuZ3RoLCAuLi5zb3J0ZWROb3Rlcyk7XG4gICAgfVxuXG4gICAgZGF0ZVNvcnQgKCkge1xuICAgICAgICB0aGlzLm5vdGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RlTGlzdCgpIiwiaW1wb3J0IHt3cml0ZUlkfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IHdyaXRlSWQoVG9kb0xpc3QuZ2V0UHJvamVjdElkcygpKTtcbiAgICAgICAgdGhpcy4gdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQge3dyaXRlSWR9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5pZCA9IHdyaXRlSWQoVG9kb0xpc3QuZ2V0VGFza0lkcygpKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gICAgfVxufSIsImltcG9ydCBQcm9qZWN0ICBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQge3BvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXG5cbiAgICAgICAgLy90aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0hvbWUnLCAnMDkvMTQvMjInKSk7ICAgIFxuICAgICAgICAvL25ldyBQcm9qZWN0KCdUb2RheScsIGhlbHBlcnMuZGF0ZS50b2RheSgpKVxuICAgICAgICAvL25ldyBQcm9qZWN0KCdUaGlzIFdlZWsnLCBoZWxwZXJzLmRhdGUuanVtcCg3KSlcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgYWRkVGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBsZXRpb24odGFzaykge1xuICAgICAgICB0YXNrLmNvbXBsZXRlID0gIXRhc2suY29tcGxldGU7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8PXRoaXMucHJvamVjdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHRoaXMucHJvamVjdHNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2ssIHByb2plY3QpIHtcblxuICAgICAgICBpZiAoIXByb2plY3Qpe1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHByb2plY3QudGFza3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IHByb2plY3QudGFza3NbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50YXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSBwcm9qZWN0LnRhc2tzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcGxhY2VUYXNrIChuZXdUYXNrLCBvbGRUYXNrLCBwcm9qZWN0KSB7XG4gICAgICAgIGlmICghcHJvamVjdCl7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50YXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVGFzay5pZCA9PT0gcHJvamVjdC50YXNrc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrc1tpXSA9IG5ld1Rhc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRhc2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFRhc2suaWQgPT09IHByb2plY3QudGFza3NbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrc1tpXSA9IG5ld1Rhc2s7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVwbGFjZVByb2plY3QobmV3UHJvamVjdCwgb2xkUHJvamVjdCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8PXRoaXMucHJvamVjdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChvbGRQcm9qZWN0LmlkID09PSB0aGlzLnByb2plY3RzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0c1tpXSA9IG5ld1Byb2plY3Q7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdElkcygpIHtcbiAgICAgICAgbGV0IGlkcyA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RzKSB7XG4gICAgICAgICAgICBpZHMucHVzaChwcm9qZWN0LmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG5cbiAgICBnZXRUYXNrSWRzKCkge1xuICAgICAgICBsZXQgaWRzID0gW11cblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgICAgICAgICAgIGlkcy5wdXNoKHRhc2suaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRzXG4gICAgfVxuXG4gICAgcHJpb3JpdHlTb3J0KHByb2plY3QpIHtcblxuICAgICAgICBsZXQgc29ydGVkVGFza3MgPSBbXVxuICAgICAgICBsZXQgbWVkSW5kZXggPSAwXG5cbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcblxuICAgICAgICAgICAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnSGlnaCc6XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFRhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICsrbWVkSW5kZXg7IFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ01lZGl1bSc6XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFRhc2tzLnNwbGljZShtZWRJbmRleCwgMCwgdGFzayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnTG93JzpcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKDAsIHNvcnRlZFRhc2tzLmxlbmd0aCwgLi4uc29ydGVkVGFza3MpO1xuICAgIH1cblxuICAgIGRhdGVTb3J0KHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdC50YXNrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUb2RvTGlzdCgpIiwidmFyIHRva2VuPS9kezEsNH18RHszLDR9fG17MSw0fXx5eSg/Onl5KT98KFtIaE1zVHRdKVxcMT98V3sxLDJ9fFtMbG9wU1pOXXxcIlteXCJdKlwifCdbXiddKicvZzt2YXIgdGltZXpvbmU9L1xcYig/OltBLVpdezEsM31bQS1aXVtUQ10pKD86Wy0rXVxcZHs0fSk/fCgoPzpBdXN0cmFsaWFuICk/KD86UGFjaWZpY3xNb3VudGFpbnxDZW50cmFsfEVhc3Rlcm58QXRsYW50aWMpICg/OlN0YW5kYXJkfERheWxpZ2h0fFByZXZhaWxpbmcpIFRpbWUpXFxiL2c7dmFyIHRpbWV6b25lQ2xpcD0vW14tK1xcZEEtWl0vZztleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlRm9ybWF0KGRhdGUsbWFzayx1dGMsZ210KXtpZihhcmd1bWVudHMubGVuZ3RoPT09MSYmdHlwZW9mIGRhdGU9PT1cInN0cmluZ1wiJiYhL1xcZC8udGVzdChkYXRlKSl7bWFzaz1kYXRlO2RhdGU9dW5kZWZpbmVkfWRhdGU9ZGF0ZXx8ZGF0ZT09PTA/ZGF0ZTpuZXcgRGF0ZTtpZighKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSl7ZGF0ZT1uZXcgRGF0ZShkYXRlKX1pZihpc05hTihkYXRlKSl7dGhyb3cgVHlwZUVycm9yKFwiSW52YWxpZCBkYXRlXCIpfW1hc2s9U3RyaW5nKG1hc2tzW21hc2tdfHxtYXNrfHxtYXNrc1tcImRlZmF1bHRcIl0pO3ZhciBtYXNrU2xpY2U9bWFzay5zbGljZSgwLDQpO2lmKG1hc2tTbGljZT09PVwiVVRDOlwifHxtYXNrU2xpY2U9PT1cIkdNVDpcIil7bWFzaz1tYXNrLnNsaWNlKDQpO3V0Yz10cnVlO2lmKG1hc2tTbGljZT09PVwiR01UOlwiKXtnbXQ9dHJ1ZX19dmFyIF89ZnVuY3Rpb24gXygpe3JldHVybiB1dGM/XCJnZXRVVENcIjpcImdldFwifTt2YXIgX2Q9ZnVuY3Rpb24gZCgpe3JldHVybiBkYXRlW18oKStcIkRhdGVcIl0oKX07dmFyIEQ9ZnVuY3Rpb24gRCgpe3JldHVybiBkYXRlW18oKStcIkRheVwiXSgpfTt2YXIgX209ZnVuY3Rpb24gbSgpe3JldHVybiBkYXRlW18oKStcIk1vbnRoXCJdKCl9O3ZhciB5PWZ1bmN0aW9uIHkoKXtyZXR1cm4gZGF0ZVtfKCkrXCJGdWxsWWVhclwiXSgpfTt2YXIgX0g9ZnVuY3Rpb24gSCgpe3JldHVybiBkYXRlW18oKStcIkhvdXJzXCJdKCl9O3ZhciBfTT1mdW5jdGlvbiBNKCl7cmV0dXJuIGRhdGVbXygpK1wiTWludXRlc1wiXSgpfTt2YXIgX3M9ZnVuY3Rpb24gcygpe3JldHVybiBkYXRlW18oKStcIlNlY29uZHNcIl0oKX07dmFyIF9MPWZ1bmN0aW9uIEwoKXtyZXR1cm4gZGF0ZVtfKCkrXCJNaWxsaXNlY29uZHNcIl0oKX07dmFyIF9vPWZ1bmN0aW9uIG8oKXtyZXR1cm4gdXRjPzA6ZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpfTt2YXIgX1c9ZnVuY3Rpb24gVygpe3JldHVybiBnZXRXZWVrKGRhdGUpfTt2YXIgX049ZnVuY3Rpb24gTigpe3JldHVybiBnZXREYXlPZldlZWsoZGF0ZSl9O3ZhciBmbGFncz17ZDpmdW5jdGlvbiBkKCl7cmV0dXJuIF9kKCl9LGRkOmZ1bmN0aW9uIGRkKCl7cmV0dXJuIHBhZChfZCgpKX0sZGRkOmZ1bmN0aW9uIGRkZCgpe3JldHVybiBpMThuLmRheU5hbWVzW0QoKV19LERERDpmdW5jdGlvbiBEREQoKXtyZXR1cm4gZ2V0RGF5TmFtZSh7eTp5KCksbTpfbSgpLGQ6X2QoKSxfOl8oKSxkYXlOYW1lOmkxOG4uZGF5TmFtZXNbRCgpXSxzaG9ydDp0cnVlfSl9LGRkZGQ6ZnVuY3Rpb24gZGRkZCgpe3JldHVybiBpMThuLmRheU5hbWVzW0QoKSs3XX0sRERERDpmdW5jdGlvbiBEREREKCl7cmV0dXJuIGdldERheU5hbWUoe3k6eSgpLG06X20oKSxkOl9kKCksXzpfKCksZGF5TmFtZTppMThuLmRheU5hbWVzW0QoKSs3XX0pfSxtOmZ1bmN0aW9uIG0oKXtyZXR1cm4gX20oKSsxfSxtbTpmdW5jdGlvbiBtbSgpe3JldHVybiBwYWQoX20oKSsxKX0sbW1tOmZ1bmN0aW9uIG1tbSgpe3JldHVybiBpMThuLm1vbnRoTmFtZXNbX20oKV19LG1tbW06ZnVuY3Rpb24gbW1tbSgpe3JldHVybiBpMThuLm1vbnRoTmFtZXNbX20oKSsxMl19LHl5OmZ1bmN0aW9uIHl5KCl7cmV0dXJuIFN0cmluZyh5KCkpLnNsaWNlKDIpfSx5eXl5OmZ1bmN0aW9uIHl5eXkoKXtyZXR1cm4gcGFkKHkoKSw0KX0saDpmdW5jdGlvbiBoKCl7cmV0dXJuIF9IKCklMTJ8fDEyfSxoaDpmdW5jdGlvbiBoaCgpe3JldHVybiBwYWQoX0goKSUxMnx8MTIpfSxIOmZ1bmN0aW9uIEgoKXtyZXR1cm4gX0goKX0sSEg6ZnVuY3Rpb24gSEgoKXtyZXR1cm4gcGFkKF9IKCkpfSxNOmZ1bmN0aW9uIE0oKXtyZXR1cm4gX00oKX0sTU06ZnVuY3Rpb24gTU0oKXtyZXR1cm4gcGFkKF9NKCkpfSxzOmZ1bmN0aW9uIHMoKXtyZXR1cm4gX3MoKX0sc3M6ZnVuY3Rpb24gc3MoKXtyZXR1cm4gcGFkKF9zKCkpfSxsOmZ1bmN0aW9uIGwoKXtyZXR1cm4gcGFkKF9MKCksMyl9LEw6ZnVuY3Rpb24gTCgpe3JldHVybiBwYWQoTWF0aC5mbG9vcihfTCgpLzEwKSl9LHQ6ZnVuY3Rpb24gdCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzBdOmkxOG4udGltZU5hbWVzWzFdfSx0dDpmdW5jdGlvbiB0dCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzJdOmkxOG4udGltZU5hbWVzWzNdfSxUOmZ1bmN0aW9uIFQoKXtyZXR1cm4gX0goKTwxMj9pMThuLnRpbWVOYW1lc1s0XTppMThuLnRpbWVOYW1lc1s1XX0sVFQ6ZnVuY3Rpb24gVFQoKXtyZXR1cm4gX0goKTwxMj9pMThuLnRpbWVOYW1lc1s2XTppMThuLnRpbWVOYW1lc1s3XX0sWjpmdW5jdGlvbiBaKCl7cmV0dXJuIGdtdD9cIkdNVFwiOnV0Yz9cIlVUQ1wiOmZvcm1hdFRpbWV6b25lKGRhdGUpfSxvOmZ1bmN0aW9uIG8oKXtyZXR1cm4oX28oKT4wP1wiLVwiOlwiK1wiKStwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKS82MCkqMTAwK01hdGguYWJzKF9vKCkpJTYwLDQpfSxwOmZ1bmN0aW9uIHAoKXtyZXR1cm4oX28oKT4wP1wiLVwiOlwiK1wiKStwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKS82MCksMikrXCI6XCIrcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMoX28oKSklNjApLDIpfSxTOmZ1bmN0aW9uIFMoKXtyZXR1cm5bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXVtfZCgpJTEwPjM/MDooX2QoKSUxMDAtX2QoKSUxMCE9MTApKl9kKCklMTBdfSxXOmZ1bmN0aW9uIFcoKXtyZXR1cm4gX1coKX0sV1c6ZnVuY3Rpb24gV1coKXtyZXR1cm4gcGFkKF9XKCkpfSxOOmZ1bmN0aW9uIE4oKXtyZXR1cm4gX04oKX19O3JldHVybiBtYXNrLnJlcGxhY2UodG9rZW4sZnVuY3Rpb24obWF0Y2gpe2lmKG1hdGNoIGluIGZsYWdzKXtyZXR1cm4gZmxhZ3NbbWF0Y2hdKCl9cmV0dXJuIG1hdGNoLnNsaWNlKDEsbWF0Y2gubGVuZ3RoLTEpfSl9ZXhwb3J0IHZhciBtYXNrcz17ZGVmYXVsdDpcImRkZCBtbW0gZGQgeXl5eSBISDpNTTpzc1wiLHNob3J0RGF0ZTpcIm0vZC95eVwiLHBhZGRlZFNob3J0RGF0ZTpcIm1tL2RkL3l5eXlcIixtZWRpdW1EYXRlOlwibW1tIGQsIHl5eXlcIixsb25nRGF0ZTpcIm1tbW0gZCwgeXl5eVwiLGZ1bGxEYXRlOlwiZGRkZCwgbW1tbSBkLCB5eXl5XCIsc2hvcnRUaW1lOlwiaDpNTSBUVFwiLG1lZGl1bVRpbWU6XCJoOk1NOnNzIFRUXCIsbG9uZ1RpbWU6XCJoOk1NOnNzIFRUIFpcIixpc29EYXRlOlwieXl5eS1tbS1kZFwiLGlzb1RpbWU6XCJISDpNTTpzc1wiLGlzb0RhdGVUaW1lOlwieXl5eS1tbS1kZCdUJ0hIOk1NOnNzb1wiLGlzb1V0Y0RhdGVUaW1lOlwiVVRDOnl5eXktbW0tZGQnVCdISDpNTTpzcydaJ1wiLGV4cGlyZXNIZWFkZXJGb3JtYXQ6XCJkZGQsIGRkIG1tbSB5eXl5IEhIOk1NOnNzIFpcIn07ZXhwb3J0IHZhciBpMThuPXtkYXlOYW1lczpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIixcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLG1vbnRoTmFtZXM6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiLFwiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLHRpbWVOYW1lczpbXCJhXCIsXCJwXCIsXCJhbVwiLFwicG1cIixcIkFcIixcIlBcIixcIkFNXCIsXCJQTVwiXX07dmFyIHBhZD1mdW5jdGlvbiBwYWQodmFsKXt2YXIgbGVuPWFyZ3VtZW50cy5sZW5ndGg+MSYmYXJndW1lbnRzWzFdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1sxXToyO3JldHVybiBTdHJpbmcodmFsKS5wYWRTdGFydChsZW4sXCIwXCIpfTt2YXIgZ2V0RGF5TmFtZT1mdW5jdGlvbiBnZXREYXlOYW1lKF9yZWYpe3ZhciB5PV9yZWYueSxtPV9yZWYubSxkPV9yZWYuZCxfPV9yZWYuXyxkYXlOYW1lPV9yZWYuZGF5TmFtZSxfcmVmJHNob3J0PV9yZWZbXCJzaG9ydFwiXSxfc2hvcnQ9X3JlZiRzaG9ydD09PXZvaWQgMD9mYWxzZTpfcmVmJHNob3J0O3ZhciB0b2RheT1uZXcgRGF0ZTt2YXIgeWVzdGVyZGF5PW5ldyBEYXRlO3llc3RlcmRheS5zZXREYXRlKHllc3RlcmRheVtfK1wiRGF0ZVwiXSgpLTEpO3ZhciB0b21vcnJvdz1uZXcgRGF0ZTt0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93W18rXCJEYXRlXCJdKCkrMSk7dmFyIHRvZGF5X2Q9ZnVuY3Rpb24gdG9kYXlfZCgpe3JldHVybiB0b2RheVtfK1wiRGF0ZVwiXSgpfTt2YXIgdG9kYXlfbT1mdW5jdGlvbiB0b2RheV9tKCl7cmV0dXJuIHRvZGF5W18rXCJNb250aFwiXSgpfTt2YXIgdG9kYXlfeT1mdW5jdGlvbiB0b2RheV95KCl7cmV0dXJuIHRvZGF5W18rXCJGdWxsWWVhclwiXSgpfTt2YXIgeWVzdGVyZGF5X2Q9ZnVuY3Rpb24geWVzdGVyZGF5X2QoKXtyZXR1cm4geWVzdGVyZGF5W18rXCJEYXRlXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfbT1mdW5jdGlvbiB5ZXN0ZXJkYXlfbSgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIk1vbnRoXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfeT1mdW5jdGlvbiB5ZXN0ZXJkYXlfeSgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIkZ1bGxZZWFyXCJdKCl9O3ZhciB0b21vcnJvd19kPWZ1bmN0aW9uIHRvbW9ycm93X2QoKXtyZXR1cm4gdG9tb3Jyb3dbXytcIkRhdGVcIl0oKX07dmFyIHRvbW9ycm93X209ZnVuY3Rpb24gdG9tb3Jyb3dfbSgpe3JldHVybiB0b21vcnJvd1tfK1wiTW9udGhcIl0oKX07dmFyIHRvbW9ycm93X3k9ZnVuY3Rpb24gdG9tb3Jyb3dfeSgpe3JldHVybiB0b21vcnJvd1tfK1wiRnVsbFllYXJcIl0oKX07aWYodG9kYXlfeSgpPT09eSYmdG9kYXlfbSgpPT09bSYmdG9kYXlfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIlRkeVwiOlwiVG9kYXlcIn1lbHNlIGlmKHllc3RlcmRheV95KCk9PT15JiZ5ZXN0ZXJkYXlfbSgpPT09bSYmeWVzdGVyZGF5X2QoKT09PWQpe3JldHVybiBfc2hvcnQ/XCJZc2RcIjpcIlllc3RlcmRheVwifWVsc2UgaWYodG9tb3Jyb3dfeSgpPT09eSYmdG9tb3Jyb3dfbSgpPT09bSYmdG9tb3Jyb3dfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIlRtd1wiOlwiVG9tb3Jyb3dcIn1yZXR1cm4gZGF5TmFtZX07dmFyIGdldFdlZWs9ZnVuY3Rpb24gZ2V0V2VlayhkYXRlKXt2YXIgdGFyZ2V0VGh1cnNkYXk9bmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLGRhdGUuZ2V0TW9udGgoKSxkYXRlLmdldERhdGUoKSk7dGFyZ2V0VGh1cnNkYXkuc2V0RGF0ZSh0YXJnZXRUaHVyc2RheS5nZXREYXRlKCktKHRhcmdldFRodXJzZGF5LmdldERheSgpKzYpJTcrMyk7dmFyIGZpcnN0VGh1cnNkYXk9bmV3IERhdGUodGFyZ2V0VGh1cnNkYXkuZ2V0RnVsbFllYXIoKSwwLDQpO2ZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdFRodXJzZGF5LmdldERhdGUoKS0oZmlyc3RUaHVyc2RheS5nZXREYXkoKSs2KSU3KzMpO3ZhciBkcz10YXJnZXRUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpLWZpcnN0VGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKTt0YXJnZXRUaHVyc2RheS5zZXRIb3Vycyh0YXJnZXRUaHVyc2RheS5nZXRIb3VycygpLWRzKTt2YXIgd2Vla0RpZmY9KHRhcmdldFRodXJzZGF5LWZpcnN0VGh1cnNkYXkpLyg4NjRlNSo3KTtyZXR1cm4gMStNYXRoLmZsb29yKHdlZWtEaWZmKX07dmFyIGdldERheU9mV2Vlaz1mdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSl7dmFyIGRvdz1kYXRlLmdldERheSgpO2lmKGRvdz09PTApe2Rvdz03fXJldHVybiBkb3d9O2V4cG9ydCB2YXIgZm9ybWF0VGltZXpvbmU9ZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUoZGF0ZSl7cmV0dXJuKFN0cmluZyhkYXRlKS5tYXRjaCh0aW1lem9uZSl8fFtcIlwiXSkucG9wKCkucmVwbGFjZSh0aW1lem9uZUNsaXAsXCJcIikucmVwbGFjZSgvR01UXFwrMDAwMC9nLFwiVVRDXCIpfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9tb2R1bGVzL25vdGUuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9tb2R1bGVzL3RvZG9MaXN0LmpzJztcbmltcG9ydCBOb3RlTGlzdCBmcm9tICcuL21vZHVsZXMvbm90ZUxpc3QuanMnO1xuaW1wb3J0IHt3cml0ZUlkLCBwb3B1bGF0ZVN0b3JhZ2V9IGZyb20gJy4vbW9kdWxlcy9oZWxwZXJzLmpzJztcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUkuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cblxuXG4vLyBURVNUSU5HIC0gRk9SIExBVEVSIFJFTU9WQUxcblxuY29uc29sZS5sb2coXCJ0ZXN0aW5nXCIpO1xuXG5sZXQgdGVzdFRhc2sgPSBuZXcgVGFzaygnd2FsayBkb2cnLCAnRGVjZW1iZXIgOCAyMDIxJywgJ2xvdycpO1xubGV0IHRlc3ROb3RlID0gbmV3IE5vdGUoJ2dyb2NlcmllcycsICdhdm9jYWRvLCBtYW5nbywgbWlsaywgcmljZScpO1xubGV0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoJ3NlbGwgaG91c2UnKTtcblxuLy9VSS50ZXN0Qm9keSgpXG5cbi8qXG5cbnRlc3RQcm9qZWN0LnRhc2tzLnB1c2godGVzdFRhc2spO1xuTm90ZUxpc3QuYWRkKHRlc3ROb3RlKTtcblRvZG9MaXN0LmFkZFByb2plY3QodGVzdFByb2plY3QpO1xuTm90ZUxpc3QuYWRkKG5ldyBOb3RlKCdtZSBtb3cnLCBcImhlJ3MgdmVyeSBzbWFsbCBidXQgYmlnIGV2aWxcIikpO1xuTm90ZUxpc3QuYWRkKG5ldyBOb3RlKCdtb3ZpZXMnLCAnRGVhdGggb2YgU3RhbGluLCBJbnRlcnN0ZWxsYXIsIEFsaWVuJykpXG5cbiovXG5cbi8vIElOSVRJQVRFIExPQ0FMIFNUT1JBR0VcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKXtcbiAgICBjb25zb2xlLmxvZyhcImxvY2FsIHN0b3JhZ2UgZW1wdHlcIik7XG4gICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIFRvZG9MaXN0LnByb2plY3RzKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoJ25vdGVMaXN0JywgTm90ZUxpc3Qubm90ZXMpO1xufVxuXG5lbHNle1xuICAgIFRvZG9MaXN0LnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSk7XG4gICAgTm90ZUxpc3Qubm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlTGlzdCcpKTtcbn1cblxuVUkubG9hZFVJKCk7XG5cbi8vIE1BUFBJTkcgV0lORE9XIFZBUlMgVE8gU0NSSVBUIFZBUlNcblxud2luZG93LlRvZG9MaXN0ID0gVG9kb0xpc3RcbndpbmRvdy50ZXN0VGFzayA9IHRlc3RUYXNrXG53aW5kb3cudGVzdE5vdGUgPSB0ZXN0Tm90ZVxud2luZG93LndyaXRlSWQgPSB3cml0ZUlkXG53aW5kb3cuTm90ZUxpc3QgPSBOb3RlTGlzdFxud2luZG93LlByb2plY3QgPSBQcm9qZWN0XG53aW5kb3cuVGFzayA9IFRhc2tcbndpbmRvdy5Ob3RlID0gTm90ZVxud2luZG93LnBvcHVsYXRlU3RvcmFnZSA9IHBvcHVsYXRlU3RvcmFnZVxud2luZG93LlVJID0gVUkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=