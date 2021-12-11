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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n    background-color: hsl(0, 0%, 90%);\n    display: relative;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\ntable > tr:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\ntable > tr:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: hsl(0, 0%, 95%);\n    box-sizing: border-box;\n}\n \n.listContainer { \n    min-height: 100vh;\n    width: 80%;\n    min-width: 400px;\n    padding: 12px;\n    position: absolute;\n    right: 0;\n    box-sizing: border-box;\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    grid-template-columns: auto 3fr 1fr 1fr auto auto;\n    height: 2em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n\n}\n\n.project {\n\n}\n\n.task {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    position: relative;\n    padding: 6px 6px 32px 6px;\n}\n\n.note .buttonContainer {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-color: hsl(0, 0%, 90%);\n    padding: 2px;\n    z-index: 2;\n}\n\n.noteTitle {\n    width: 80%;\n    height: 60px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 12px;\n}\n\n.pin {\n    float: right;\n    width: 15%;\n}\n\n.noteContent {\n    clear: both;\n}\n\n.note::after {\n    content: '';\n    width: 100%;\n    height: 20%;\n    display: inline-block;\n    background: linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 95%, 0.8) 50%, hsl(0, 0%, 95%) 100%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.unrolled .noteContent {\n    \n}\n\n.unrolled::after{\n    display: none;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned::before {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;;AAEA;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,UAAU;IACV,eAAe;IACf,MAAM;IACN,OAAO;IACP,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,oCAAoC;AACxC;;AAEA;AACA;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;;AAGA;IACI,iDAAiD;IACjD,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,iCAAiC;IACjC,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,mGAAmG;IACnG,kBAAkB;IAClB,SAAS;IACT,OAAO;AACX;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;;AAEA;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n    background-color: hsl(0, 0%, 90%);\n    display: relative;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\ntable > tr:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\ntable > tr:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: hsl(0, 0%, 95%);\n    box-sizing: border-box;\n}\n \n.listContainer { \n    min-height: 100vh;\n    width: 80%;\n    min-width: 400px;\n    padding: 12px;\n    position: absolute;\n    right: 0;\n    box-sizing: border-box;\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    grid-template-columns: auto 3fr 1fr 1fr auto auto;\n    height: 2em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n\n}\n\n.project {\n\n}\n\n.task {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    position: relative;\n    padding: 6px 6px 32px 6px;\n}\n\n.note .buttonContainer {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-color: hsl(0, 0%, 90%);\n    padding: 2px;\n    z-index: 2;\n}\n\n.noteTitle {\n    width: 80%;\n    height: 60px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 12px;\n}\n\n.pin {\n    float: right;\n    width: 15%;\n}\n\n.noteContent {\n    clear: both;\n}\n\n.note::after {\n    content: '';\n    width: 100%;\n    height: 20%;\n    display: inline-block;\n    background: linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 95%, 0.8) 50%, hsl(0, 0%, 95%) 100%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.unrolled .noteContent {\n    \n}\n\n.unrolled::after{\n    display: none;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned::before {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
                taskEl.parentElement.replaceChild(this.loadTaskForm(this.currentProject, task), taskEl);
                
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7QUFDMUIsaUJBQWlCLDJEQUFPO0FBQ3hCLGNBQWMsd0RBQUk7QUFDbEIsY0FBYyx3REFBSTtBQUNsQix5QkFBeUIsZ0VBQWU7QUFDeEMsWUFBWSxzRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9ub3RlTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RhdGVmb3JtYXQvbGliL2RhdGVmb3JtYXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXG4gICAgd2lkdGg6IDEuOGVtO1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50YWJsZSA+IHRyOm50aC1vZi10eXBlKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxufVxcblxcbnRhYmxlID4gdHI6bnRoLW9mLXR5cGUoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5saSAqIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAycHg7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLnNpZGViYXIgeyAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiBcXG4ubGlzdENvbnRhaW5lciB7IFxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XFxufVxcblxcbi50YWIgKiB7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLnRhYjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi50YWI6aG92ZXIsIC50YWIuc2VsZWN0ZWQge1xcbiAgICBoZWlnaHQ6IDk2cHg7XFxufVxcblxcbi50YWIgaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgbGkge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciBhdXRvIGF1dG87XFxufVxcblxcbi5wcm9qZWN0TGlzdDpob3ZlciB7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuXFxuLnRhc2sge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gM2ZyIDFmciAxZnIgYXV0byBhdXRvO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLnRhc2suY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6aHNsKDAsIDAlLCAzMCUpXFxufVxcblxcbi50YXNrIC5kYXRlLCAudGFzayAucHJpb3JpdHkge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhc2sgYnV0dG9uIHtcXG5cXG59XFxuXFxuLnByb2plY3Qge1xcblxcbn1cXG5cXG4udGFzayB7XFxuXFxufVxcblxcbi5ub3RlQ29udGFpbmVyIHtcXG5cXG59XFxuXFxuLm5vdGVTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgOTUlKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNnB4IDZweCAzMnB4IDZweDtcXG59XFxuXFxuLm5vdGUgLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5ub3RlVGl0bGUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ucGluIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG5cXG4ubm90ZUNvbnRlbnQge1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLm5vdGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsYSgwLCAwJSwgMCUsIDApIDAlLCBoc2xhKDAsIDAlLCA5NSUsIDAuOCkgNTAlLCBoc2woMCwgMCUsIDk1JSkgMTAwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4udW5yb2xsZWQge1xcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4udW5yb2xsZWQgLm5vdGVDb250ZW50IHtcXG4gICAgXFxufVxcblxcbi51bnJvbGxlZDo6YWZ0ZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ub3RlQ29udGFpbmVyIC5hZGRCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5waW5uZWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5mb2N1c2VkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnVuZm9jdXNlZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAyMCUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJ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QyxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXG4gICAgd2lkdGg6IDEuOGVtO1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50YWJsZSA+IHRyOm50aC1vZi10eXBlKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxufVxcblxcbnRhYmxlID4gdHI6bnRoLW9mLXR5cGUoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5saSAqIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAycHg7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLnNpZGViYXIgeyAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiBcXG4ubGlzdENvbnRhaW5lciB7IFxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XFxufVxcblxcbi50YWIgKiB7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLnRhYjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi50YWI6aG92ZXIsIC50YWIuc2VsZWN0ZWQge1xcbiAgICBoZWlnaHQ6IDk2cHg7XFxufVxcblxcbi50YWIgaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgbGkge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciBhdXRvIGF1dG87XFxufVxcblxcbi5wcm9qZWN0TGlzdDpob3ZlciB7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuXFxuLnRhc2sge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gM2ZyIDFmciAxZnIgYXV0byBhdXRvO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLnRhc2suY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6aHNsKDAsIDAlLCAzMCUpXFxufVxcblxcbi50YXNrIC5kYXRlLCAudGFzayAucHJpb3JpdHkge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhc2sgYnV0dG9uIHtcXG5cXG59XFxuXFxuLnByb2plY3Qge1xcblxcbn1cXG5cXG4udGFzayB7XFxuXFxufVxcblxcbi5ub3RlQ29udGFpbmVyIHtcXG5cXG59XFxuXFxuLm5vdGVTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgOTUlKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNnB4IDZweCAzMnB4IDZweDtcXG59XFxuXFxuLm5vdGUgLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5ub3RlVGl0bGUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ucGluIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG5cXG4ubm90ZUNvbnRlbnQge1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLm5vdGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsYSgwLCAwJSwgMCUsIDApIDAlLCBoc2xhKDAsIDAlLCA5NSUsIDAuOCkgNTAlLCBoc2woMCwgMCUsIDk1JSkgMTAwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4udW5yb2xsZWQge1xcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4udW5yb2xsZWQgLm5vdGVDb250ZW50IHtcXG4gICAgXFxufVxcblxcbi51bnJvbGxlZDo6YWZ0ZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ub3RlQ29udGFpbmVyIC5hZGRCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5waW5uZWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5mb2N1c2VkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnVuZm9jdXNlZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAyMCUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5pbXBvcnQgTm90ZUxpc3QgZnJvbSAnLi9ub3RlTGlzdC5qcyc7XG5pbXBvcnQge3BvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB0b2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcbmltcG9ydCBkYXRlRm9ybWF0LCB7IG1hc2tzIH0gZnJvbSBcImRhdGVmb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuXG4gICAgc3RhdGljIGN1cnJlbnRQcm9qZWN0ID0gdG9kb0xpc3QucHJvamVjdHNbMF07XG4gICAgc3RhdGljIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICAgIC8vIEluaXRpYWwgTG9hZG91dFxuXG4gICAgc3RhdGljIGxvYWRVSSAoKSB7XG4gICAgICAgIHRoaXMuYm9keS5hcHBlbmQodGhpcy5sb2FkU2lkZWJhcigpLCB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCBUb2RvTGlzdC5wcm9qZWN0c1swXSkpO1xuICAgIH1cblxuXG4gICAgLy8gTmF2aWdhdGlvbiBiYXIgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIHByb2plY3RzIGFuZCBub3Rlc1xuXG4gICAgc3RhdGljIGxvYWRTaWRlYmFyKCkge1xuICAgICAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcblxuICAgICAgICBpZiAoIXNpZGViYXIpIHtcbiAgICAgICAgICAgIHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaWRlYmFyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgbm90ZVRhYkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7ICAgIFxuICAgICAgICAgICAgbm90ZVRhYkhlYWRlci5pbm5lckhUTUwgPSBcIk5vdGVzXCJcblxuICAgICAgICBub3RlVGFiLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ25vdGUnLCBOb3RlTGlzdC5ub3Rlcyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIG5vdGVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgIH1cblxuICAgICAgICBub3RlVGFiLmFwcGVuZChub3RlVGFiSGVhZGVyKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUYWJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgcHJvamVjdFRhYkhlYWRlci5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICAgICAgcHJvamVjdFRhYi5hcHBlbmQocHJvamVjdFRhYkhlYWRlcik7IFxuXG4gICAgICAgIHByb2plY3RUYWIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIFRvZG9MaXN0LnByb2plY3RzWzBdKVxuICAgICAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBub3RlVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JywgJ2hpZGRlbicpO1xuXG4gICAgICAgIC8vIExpc3QgcHJvamVjdCBuYW1lcyBmb3IgdmlldyBzZWxlY3Rpb25cblxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgVG9kb0xpc3QucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdwcm9qZWN0JywgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlZGl0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBlZGl0RWwuaW5uZXJIVE1MID0gJ+Kcjic7XG4gICAgICAgICAgICAgICAgZWRpdEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RFbC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh0aGlzLmxvYWRQcm9qZWN0Rm9ybShwcm9qZWN0KSwgcHJvamVjdEVsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsRWwuIGlubmVySFRNTCA9ICd4J1xuICAgICAgICAgICAgICAgIGRlbEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFRvZG9MaXN0LnJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2plY3RFbC5hcHBlbmQocHJvamVjdFRpdGxlLCBlZGl0RWwsIGRlbEVsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3RFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9ICcrJztcbiAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b24ub25jbGljayA9ICgpID0+IHtwcm9qZWN0TGlzdC5hcHBlbmQodGhpcy5sb2FkUHJvamVjdEZvcm0oKSk7fVxuICAgICAgICAgICAgXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uKTsgICAgXG5cbiAgICAgICAgc2lkZWJhci5hcHBlbmQobm90ZVRhYiwgcHJvamVjdFRhYiwgcHJvamVjdExpc3QpO1xuXG4gICAgICAgIHJldHVybiBzaWRlYmFyXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRDb250YWluZXIodHlwZSwgbGlzdCkge1xuXG4gICAgICAgIC8vIExvYWQgZ2VuZXJpYyBjb250YWluZXIgZm9yIHByb2plY3RzIG9yIGxpc3RzLCBsb2FkIGluIGNvbnRlbnQgYmFzZWQgb24gYXJndW1lbnRzXG5cbiAgICAgICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdENvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmICghbGlzdENvbnRhaW5lcikge1xuICAgICAgICAgICAgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Q29udGFpbmVyJyk7XG4gICAgICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWRQcm9qZWN0KGxpc3QpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZFByb2plY3QobGlzdCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vdGUnOlxuICAgICAgICAgICAgICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWROb3RlTGlzdChOb3RlTGlzdC5ub3RlcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdENvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkUHJvamVjdCAocHJvamVjdCkge1xuXG4gICAgICAgIC8vIExvYWQgcHJvamVjdCBjb250YWluZXIgd2l0aCBlZGl0aW5nLCBkZWxldGluZywgc29ydGluZyBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHRoaXMuY3VycmVudFByb2plY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXByb2plY3RDb250YWluZXIpIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdENvbnRhaW5lcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpXG4gICAgICAgICAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrTGlzdCcpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlFbC5pbm5lckhUTUwgPSAnUHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlFbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuXG4gICAgICAgICAgICBwcmlvcml0eUVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QucHJpb3JpdHlTb3J0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgZGF0ZUVsLmlubmVySFRNTCA9ICdEdWUgRGF0ZSdcbiAgICAgICAgICAgIGRhdGVFbC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG5cbiAgICAgICAgICAgIGRhdGVFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LmRhdGVTb3J0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZEZpbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICBsaXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuXG4gICAgICAgIGxpc3RIZWFkZXIuYXBwZW5kKGdyaWRGaWxsZXIsIGdyaWRGaWxsZXIuY2xvbmVOb2RlKCksIGRhdGVFbCwgcHJpb3JpdHlFbCwgZ3JpZEZpbGxlci5jbG9uZU5vZGUoKSwgZ3JpZEZpbGxlci5jbG9uZU5vZGUoKSk7XG5cbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKGxpc3RIZWFkZXIpO1xuICAgICAgICBcblxuICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGhpcy5sb2FkVGFzayh0YXNrKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBuZXdUYXNrQnV0dG9uLmlubmVySFRNTCA9ICcrJ1xuICAgICAgICAgICAgbmV3VGFza0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge3Byb2plY3RDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZFRhc2tGb3JtKHByb2plY3QpKX07XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdEhlYWRlciwgdGFza0xpc3QsIG5ld1Rhc2tCdXR0b24pO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBsb2FkTm90ZUxpc3QoKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIGNvbnRhaW5lciBmb3Igbm90ZXMsIHdpdGggc2VwZXJhdGlvbiBiZXR3ZWVuIHBpbm5lZC91bnBpbm5lZCBub3RlcywgYW5kIG5ldyB0YXNrIGJ1dHRvblxuXG4gICAgICAgIGxldCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVDb250YWluZXInKTtcblxuICAgICAgICBpZighbm90ZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RlQ29udGFpbmVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vdGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwaW5uZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBpbm5lZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnLCAnbm90ZVNlY3Rpb24nKTtcblxuICAgICAgICBjb25zdCB1bnBpbm5lZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdW5waW5uZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndW5waW5uZWQnLCAnbm90ZVNlY3Rpb24nKTtcblxuICAgICAgICBmb3IgKGxldCBub3RlIG9mIE5vdGVMaXN0Lm5vdGVzKSB7XG4gICAgICAgICAgICBub3RlLnBpbm5lZCA/IHBpbm5lZENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkTm90ZShub3RlKSkgOiB1bnBpbm5lZENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkTm90ZShub3RlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBuZXdOb3RlQnV0dG9uLmlubmVySFRNTCA9ICcrJ1xuICAgICAgICAgICAgbmV3Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b24nKTtcbiAgICAgICAgICAgIG5ld05vdGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBub3RlQ29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWROb3RlRm9ybSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBub3RlQ29udGFpbmVyLmFwcGVuZChwaW5uZWRDb250YWluZXIsIHVucGlubmVkQ29udGFpbmVyLCBuZXdOb3RlQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gbm90ZUNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkTm90ZSAobm90ZSkge1xuXG4gICAgICAgIC8vIExvYWQgaW5kaXZpZHVhbCBub3RlIHdpdGggZWRpdGluZyBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgY29uc3Qgbm90ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgnbm90ZScpO1xuXG4gICAgICAgICAgICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgbm90ZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlVGl0bGVcIik7XG4gICAgICAgICAgICBub3RlVGl0bGUuaW5uZXJIVE1MID0gbm90ZS50aXRsZTtcblxuICAgICAgICAgICAgY29uc3QgcGluRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwaW5FbC5jbGFzc0xpc3QuYWRkKCdwaW4nKVxuICAgICAgICAgICAgICAgIG5vdGUucGlubmVkID8gcGluRWwuaW5uZXJIVE1MID0gJ3VucGluJyA6IHBpbkVsLmlubmVySFRNTCA9ICdwaW4nXG4gICAgICAgICAgICAgICAgcGluRWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTm90ZUxpc3QudG9nZ2xlUGluKG5vdGUpO1xuICAgICAgICAgICAgICAgICAgICBOb3RlTGlzdC5waW5Tb3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE5vdGVMaXN0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub3RlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBub3RlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdub3RlQ29udGVudCcpO1xuICAgICAgICAgICAgICAgIG5vdGVDb250ZW50LmlubmVySFRNTCA9IG5vdGUuY29udGVudDtcblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBlZGl0RWwuaW5uZXJIVE1MID0gJ+Kcjic7XG4gICAgICAgICAgICAgICAgZWRpdEVsLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgICAgICAgICBlZGl0RWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm90ZUVsLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHRoaXMubG9hZE5vdGVGb3JtKG5vdGUpLCBub3RlRWwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxFbC4gaW5uZXJIVE1MID0gJ3gnXG4gICAgICAgICAgICAgICAgZGVsRWwuY2xhc3NMaXN0LmFkZCgnZGVsJyk7XG4gICAgICAgICAgICAgICAgZGVsRWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTm90ZUxpc3QucmVtb3ZlKG5vdGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWROb3RlTGlzdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGVkaXRFbCwgZGVsRWwpO1xuXG4gICAgICAgIG5vdGVFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFub3RlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd1bnJvbGxlZCcpKSB7XG4gICAgICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlJyksIChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCd1bnJvbGxlZCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Vucm9sbGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vdGVFbC5jbGFzc0xpc3QucmVtb3ZlKCd1bnJvbGxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbm90ZUVsLmFwcGVuZChub3RlVGl0bGUsIHBpbkVsLCBub3RlQ29udGVudCwgYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gbm90ZUVsXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRUYXNrICh0YXNrKSB7XG5cbiAgICAgICAgLy8gTG9hZCBpbmRpdmlkdWFsIHRhc2ssIHdpdGggZWRpdGluZyBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGNoZWNrRWwuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja0VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgY2hlY2tFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LnRvZ2dsZUNvbXBsZXRpb24odGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0VsLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY2hlY2tDb250YWluZXIuYXBwZW5kKGNoZWNrRWwpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgdGl0bGVFbC5pbm5lckhUTUwgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgdGl0bGVFbC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5cbiAgICAgICAgY29uc3QgZGF0ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGRhdGVFbC5pbm5lckhUTUwgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgICAgICBkYXRlRWwuY2xhc3NMaXN0LmFkZCgnZGF0ZScpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgICAgICAgICAgcHJpb3JpdHlFbC5pbm5lckhUTUwgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICAgICAgcHJpb3JpdHlFbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpXG5cbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVkaXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEVsLmlubmVySFRNTCA9ICfinI4nO1xuICAgICAgICAgICAgZWRpdEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza0VsLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHRoaXMubG9hZFRhc2tGb3JtKHRoaXMuY3VycmVudFByb2plY3QsIHRhc2spLCB0YXNrRWwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGVkaXRDb250YWluZXIuYXBwZW5kKGVkaXRFbCk7XG5cbiAgICAgICAgY29uc3QgZGVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgICAgICBjb25zdCBkZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsRWwuIGlubmVySFRNTCA9ICd4J1xuICAgICAgICAgICAgZGVsRWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIHRoaXMuY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGVkaXRDb250YWluZXIuYXBwZW5kKGRlbEVsKTtcblxuICAgICAgICB0YXNrRWwuYXBwZW5kKGNoZWNrQ29udGFpbmVyLCB0aXRsZUVsLCBkYXRlRWwsIHByaW9yaXR5RWwsIGVkaXRDb250YWluZXIsIGRlbENvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tFbFxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVGFza0Zvcm0gKHByb2plY3QsIHRhc2spIHtcblxuICAgICAgICAvLyBMb2FkIGZvcm0gZm9yIG5ldyB0YXNrcy5cbiAgICAgICAgLy8gQ2FuIGJlIHVzZWQgZm9yIGVkaXRpbmcgb3IgY3JlYXRpb24gZnJvbSBzY3JhdGNoLiBDaGVja3MgZm9yIGV4aXNpdG5nIHRhc2sgYXJndW1lbnQgdG8gZGV0ZXJtaW5lIG91dHB1dC5cblxuICAgICAgICBsZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0Zvcm0nKTtcblxuICAgICAgICBpZiAodGFza0Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrRm9ybVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJyk7XG4gICAgICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgICAgICAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gJ0R1ZSBEYXRlJ1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuXG4gICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBkYXRlTGFiZWwsIGRhdGVJbnB1dCk7XG5cbiAgICAgICAgLy8gSXRlcmF0aXZlIGNyZWF0aW9uIG9mIHJhZGlvIGJ1dHRvbiBzZWxlY3RvcnMgZm9yIHByaW9yaXR5LiBEZWZhdWx0cyB0byBtZWRpdW0sIG9yIHByZWV4aXN0aW5nIHRhc2sgdmFsdWUuXG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVZhbHMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxwcmlvcml0eVZhbHMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJpb3JpdHlWYWxzW2ldKTtcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gcHJpb3JpdHlWYWxzW2ldXG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5T3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHByaW9yaXR5T3B0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgcHJpb3JpdHlPcHQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgICAgICAgICBwcmlvcml0eU9wdC52YWx1ZSA9IHByaW9yaXR5VmFsc1tpXVxuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBwcmlvcml0eVZhbHNbaV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5T3B0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKCF0YXNrICYmIGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eU9wdC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3Rvci5hcHBlbmQocHJpb3JpdHlPcHQsIHByaW9yaXR5TGFiZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ+Kckyc7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gJ3gnO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0Zvcm0ucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodGhpcy5sb2FkVGFzayh0YXNrKSwgdGFza0Zvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFbGVtZW50KHRhc2tGb3JtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kKHRpdGxlSW5wdXQsIGRhdGVMYWJlbCwgZGF0ZUlucHV0LCBwcmlvcml0eVNlbGVjdG9yLCBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgdGFza0Zvcm0ub25zdWJtaXQgPSAoKSA9PiB7ICAgXG5cbiAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrLmlkID0gdGFzay5pZDtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC5yZXBsYWNlVGFzayhuZXdUYXNrLCB0YXNrLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LmFkZFRhc2socHJvamVjdCwgbmV3VGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCBwcm9qZWN0KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGFza0Zvcm1cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFByb2plY3RGb3JtKHByb2plY3QpIHtcblxuICAgICAgICAvLyBMb2FkIGZvcm0gZm9yIG5ldyBwcm9qZWN0LlxuICAgICAgICAvLyBDYW4gYmUgdXNlZCBmb3IgZWRpdGluZyBvciBjcmVhdGlvbiBmcm9tIHNjcmF0Y2guIENoZWNrcyBmb3IgZXhpc2l0bmcgcHJvamVjdCBhcmd1bWVudCB0byBkZXRlcm1pbmUgb3V0cHV0LlxuXG4gICAgICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0Rm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RGb3JtXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdyZXR1cm4gZmFsc2UnKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAn4pyTJztcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHt0aGlzLmRlbGV0ZUVsZW1lbnQocHJvamVjdEZvcm0pfTtcblxuICAgICAgICBpZiAocHJvamVjdCl7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgcHJvamVjdEZvcm0ub25zdWJtaXQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5pZCA9IHByb2plY3QuaWQ7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QucmVwbGFjZVByb2plY3QobmV3UHJvamVjdCwgcHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIG5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9qZWN0Rm9ybVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkTm90ZUZvcm0gKG5vdGUpIHtcblxuICAgICAgICAvLyBMb2FkIGZvcm0gZm9yIG5ldyBub3RlLlxuICAgICAgICAvLyBDYW4gYmUgdXNlZCBmb3IgZWRpdGluZyBvciBjcmVhdGlvbiBmcm9tIHNjcmF0Y2guIENoZWNrcyBmb3IgZXhpc2l0bmcgbm90ZSBhcmd1bWVudCB0byBkZXRlcm1pbmUgb3V0cHV0LlxuXG4gICAgICAgIGxldCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlRm9ybScpO1xuXG4gICAgICAgIGlmIChub3RlRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vdGVGb3JtXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgbm90ZUZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdyZXR1cm4gZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgICAgICBjb25zdCBjb250ZW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgY29udGVudElucHV0LnNldEF0dHJpYnV0ZSgncm93cycsICc4Jyk7XG4gICAgICAgICAgICBjb250ZW50SW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMyJyk7ICBcblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAn4pyTJztcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSAneCc7XG5cbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbm90ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUVsZW1lbnQobm90ZUZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZiAobm90ZSkge1xuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IG5vdGUudGl0bGU7XG4gICAgICAgICAgICBjb250ZW50SW5wdXQudmFsdWUgPSBub3RlLmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG5vdGVGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBjb250ZW50SW5wdXQsIHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBub3RlRm9ybS5vbnN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdOb3RlID0gbmV3IE5vdGUgKHRpdGxlSW5wdXQudmFsdWUsIGNvbnRlbnRJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChub3RlKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm90ZS5pZCA9IG5vdGUuaWQ7XG4gICAgICAgICAgICAgICAgbmV3Tm90ZS5waW5uZWQgPSBub3RlLnBpbm5lZDtcblxuICAgICAgICAgICAgICAgIE5vdGVMaXN0LnJlcGxhY2UobmV3Tm90ZSwgbm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE5vdGVMaXN0LmFkZChuZXdOb3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdub3RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm90ZUZvcm1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWRpdE5vdGUgKG5vdGUpIHtcblxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZGVsZXRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG59IiwiZnVuY3Rpb24gd3JpdGVJZCAoY3VycmVudElkcykge1xuXG4gICAgbGV0IG5ld0lkID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMioqMzIpKTtcblxuXG4gICAgd2hpbGUgKGN1cnJlbnRJZHMuaW5jbHVkZXMobmV3SWQpKSB7XG4gICAgICAgIG5ld0lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIqKjMyKSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXdJZDtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKGtleSwgdmFsdWUpe1xuICAgIGNvbnNvbGUubG9nKFwicG9wdWxhdGluZy4uLlwiKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuZXhwb3J0IHtcbiAgICB3cml0ZUlkLFxuICAgIHBvcHVsYXRlU3RvcmFnZVxufTsiLCJpbXBvcnQgTm90ZUxpc3QgZnJvbSAnLi9ub3RlTGlzdC5qcyc7XG5pbXBvcnQge3dyaXRlSWR9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGUge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLmlkID0gd3JpdGVJZChOb3RlTGlzdC5nZXRJZHMoKSk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5kYXRlID0gRGF0ZSgpO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnO1xuaW1wb3J0IHtwb3B1bGF0ZVN0b3JhZ2V9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNsYXNzIE5vdGVMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub3RlcyA9IFtdXG4gICAgfVxuXG4gICAgYWRkKG5vdGUpIHtcbiAgICAgICAgdGhpcy5ub3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ25vdGVMaXN0JywgdGhpcy5ub3Rlcyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKG5vdGUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMubm90ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChub3RlLmlkID09PSB0aGlzLm5vdGVzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVwbGFjZSAobmV3Tm90ZSwgb2xkTm90ZSkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5ub3Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG9sZE5vdGUuaWQgPT09IHRoaXMubm90ZXNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGVzW2ldID0gbmV3Tm90ZTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ25vdGVMaXN0JywgdGhpcy5ub3Rlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMubm90ZXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBnZXRJZHMoKSB7XG4gICAgICAgIGxldCBpZHMgPSBbXVxuXG4gICAgICAgIGZvciAoY29uc3Qgbm90ZSBvZiB0aGlzLm5vdGVzKSB7XG4gICAgICAgICAgICBpZHMucHVzaChub3RlLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG5cbiAgICB0b2dnbGVQaW4obm90ZSkge1xuICAgICAgICBub3RlLnBpbm5lZCA9ICFub3RlLnBpbm5lZDtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgIH1cblxuICAgIHBpblNvcnQoKSB7XG4gICAgICAgIGxldCBzb3J0ZWROb3RlcyA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBub3RlIG9mIHRoaXMubm90ZXMpIHtcbiAgICAgICAgICAgIGlmIChub3RlLnBpbm5lZCkge1xuICAgICAgICAgICAgICAgIHNvcnRlZE5vdGVzLnVuc2hpZnQobm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHNvcnRlZE5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGVzLnNwbGljZSgwLCBzb3J0ZWROb3Rlcy5sZW5ndGgsIC4uLnNvcnRlZE5vdGVzKTtcbiAgICB9XG5cbiAgICBkYXRlU29ydCAoKSB7XG4gICAgICAgIHRoaXMubm90ZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGVMaXN0KCkiLCJpbXBvcnQge3dyaXRlSWR9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSkge1xuICAgICAgICB0aGlzLmlkID0gd3JpdGVJZChUb2RvTGlzdC5nZXRQcm9qZWN0SWRzKCkpO1xuICAgICAgICB0aGlzLiB0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxufSIsImltcG9ydCB7d3JpdGVJZH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLmlkID0gd3JpdGVJZChUb2RvTGlzdC5nZXRUYXNrSWRzKCkpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcbiAgICB9XG59IiwiaW1wb3J0IFByb2plY3QgIGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7cG9wdWxhdGVTdG9yYWdlfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jbGFzcyBUb2RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cblxuICAgICAgICAvL3RoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSG9tZScsICcwOS8xNC8yMicpKTsgICAgXG4gICAgICAgIC8vbmV3IFByb2plY3QoJ1RvZGF5JywgaGVscGVycy5kYXRlLnRvZGF5KCkpXG4gICAgICAgIC8vbmV3IFByb2plY3QoJ1RoaXMgV2VlaycsIGhlbHBlcnMuZGF0ZS5qdW1wKDcpKVxuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrKHByb2plY3QsIHRhc2spIHtcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29tcGxldGlvbih0YXNrKSB7XG4gICAgICAgIHRhc2suY29tcGxldGUgPSAhdGFzay5jb21wbGV0ZTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw9dGhpcy5wcm9qZWN0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gdGhpcy5wcm9qZWN0c1tpXS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2sodGFzaywgcHJvamVjdCkge1xuXG4gICAgICAgIGlmICghcHJvamVjdCl7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50YXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gcHJvamVjdC50YXNrc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRhc2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IHByb2plY3QudGFza3NbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVwbGFjZVRhc2sgKG5ld1Rhc2ssIG9sZFRhc2ssIHByb2plY3QpIHtcbiAgICAgICAgaWYgKCFwcm9qZWN0KXtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRhc2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRUYXNrLmlkID09PSBwcm9qZWN0LnRhc2tzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzW2ldID0gbmV3VGFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHByb2plY3QudGFza3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkVGFzay5pZCA9PT0gcHJvamVjdC50YXNrc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzW2ldID0gbmV3VGFzaztcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXBsYWNlUHJvamVjdChuZXdQcm9qZWN0LCBvbGRQcm9qZWN0KSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw9dGhpcy5wcm9qZWN0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG9sZFByb2plY3QuaWQgPT09IHRoaXMucHJvamVjdHNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzW2ldID0gbmV3UHJvamVjdDtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0SWRzKCkge1xuICAgICAgICBsZXQgaWRzID0gW11cblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlkcy5wdXNoKHByb2plY3QuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkc1xuICAgIH1cblxuICAgIGdldFRhc2tJZHMoKSB7XG4gICAgICAgIGxldCBpZHMgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0cykge1xuICAgICAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgaWRzLnB1c2godGFzay5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG5cbiAgICBwcmlvcml0eVNvcnQocHJvamVjdCkge1xuXG4gICAgICAgIGxldCBzb3J0ZWRUYXNrcyA9IFtdXG4gICAgICAgIGxldCBtZWRJbmRleCA9IDBcblxuICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdIaWdoJzpcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVGFza3MudW5zaGlmdCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgKyttZWRJbmRleDsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVGFza3Muc3BsaWNlKG1lZEluZGV4LCAwLCB0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdMb3cnOlxuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoMCwgc29ydGVkVGFza3MubGVuZ3RoLCAuLi5zb3J0ZWRUYXNrcyk7XG4gICAgfVxuXG4gICAgZGF0ZVNvcnQocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRvZG9MaXN0KCkiLCJ2YXIgdG9rZW49L2R7MSw0fXxEezMsNH18bXsxLDR9fHl5KD86eXkpP3woW0hoTXNUdF0pXFwxP3xXezEsMn18W0xsb3BTWk5dfFwiW15cIl0qXCJ8J1teJ10qJy9nO3ZhciB0aW1lem9uZT0vXFxiKD86W0EtWl17MSwzfVtBLVpdW1RDXSkoPzpbLStdXFxkezR9KT98KCg/OkF1c3RyYWxpYW4gKT8oPzpQYWNpZmljfE1vdW50YWlufENlbnRyYWx8RWFzdGVybnxBdGxhbnRpYykgKD86U3RhbmRhcmR8RGF5bGlnaHR8UHJldmFpbGluZykgVGltZSlcXGIvZzt2YXIgdGltZXpvbmVDbGlwPS9bXi0rXFxkQS1aXS9nO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZSxtYXNrLHV0YyxnbXQpe2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0xJiZ0eXBlb2YgZGF0ZT09PVwic3RyaW5nXCImJiEvXFxkLy50ZXN0KGRhdGUpKXttYXNrPWRhdGU7ZGF0ZT11bmRlZmluZWR9ZGF0ZT1kYXRlfHxkYXRlPT09MD9kYXRlOm5ldyBEYXRlO2lmKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKXtkYXRlPW5ldyBEYXRlKGRhdGUpfWlmKGlzTmFOKGRhdGUpKXt0aHJvdyBUeXBlRXJyb3IoXCJJbnZhbGlkIGRhdGVcIil9bWFzaz1TdHJpbmcobWFza3NbbWFza118fG1hc2t8fG1hc2tzW1wiZGVmYXVsdFwiXSk7dmFyIG1hc2tTbGljZT1tYXNrLnNsaWNlKDAsNCk7aWYobWFza1NsaWNlPT09XCJVVEM6XCJ8fG1hc2tTbGljZT09PVwiR01UOlwiKXttYXNrPW1hc2suc2xpY2UoNCk7dXRjPXRydWU7aWYobWFza1NsaWNlPT09XCJHTVQ6XCIpe2dtdD10cnVlfX12YXIgXz1mdW5jdGlvbiBfKCl7cmV0dXJuIHV0Yz9cImdldFVUQ1wiOlwiZ2V0XCJ9O3ZhciBfZD1mdW5jdGlvbiBkKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF0ZVwiXSgpfTt2YXIgRD1mdW5jdGlvbiBEKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF5XCJdKCl9O3ZhciBfbT1mdW5jdGlvbiBtKCl7cmV0dXJuIGRhdGVbXygpK1wiTW9udGhcIl0oKX07dmFyIHk9ZnVuY3Rpb24geSgpe3JldHVybiBkYXRlW18oKStcIkZ1bGxZZWFyXCJdKCl9O3ZhciBfSD1mdW5jdGlvbiBIKCl7cmV0dXJuIGRhdGVbXygpK1wiSG91cnNcIl0oKX07dmFyIF9NPWZ1bmN0aW9uIE0oKXtyZXR1cm4gZGF0ZVtfKCkrXCJNaW51dGVzXCJdKCl9O3ZhciBfcz1mdW5jdGlvbiBzKCl7cmV0dXJuIGRhdGVbXygpK1wiU2Vjb25kc1wiXSgpfTt2YXIgX0w9ZnVuY3Rpb24gTCgpe3JldHVybiBkYXRlW18oKStcIk1pbGxpc2Vjb25kc1wiXSgpfTt2YXIgX289ZnVuY3Rpb24gbygpe3JldHVybiB1dGM/MDpkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCl9O3ZhciBfVz1mdW5jdGlvbiBXKCl7cmV0dXJuIGdldFdlZWsoZGF0ZSl9O3ZhciBfTj1mdW5jdGlvbiBOKCl7cmV0dXJuIGdldERheU9mV2VlayhkYXRlKX07dmFyIGZsYWdzPXtkOmZ1bmN0aW9uIGQoKXtyZXR1cm4gX2QoKX0sZGQ6ZnVuY3Rpb24gZGQoKXtyZXR1cm4gcGFkKF9kKCkpfSxkZGQ6ZnVuY3Rpb24gZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpXX0sREREOmZ1bmN0aW9uIERERCgpe3JldHVybiBnZXREYXlOYW1lKHt5OnkoKSxtOl9tKCksZDpfZCgpLF86XygpLGRheU5hbWU6aTE4bi5kYXlOYW1lc1tEKCldLHNob3J0OnRydWV9KX0sZGRkZDpmdW5jdGlvbiBkZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpKzddfSxEREREOmZ1bmN0aW9uIEREREQoKXtyZXR1cm4gZ2V0RGF5TmFtZSh7eTp5KCksbTpfbSgpLGQ6X2QoKSxfOl8oKSxkYXlOYW1lOmkxOG4uZGF5TmFtZXNbRCgpKzddfSl9LG06ZnVuY3Rpb24gbSgpe3JldHVybiBfbSgpKzF9LG1tOmZ1bmN0aW9uIG1tKCl7cmV0dXJuIHBhZChfbSgpKzEpfSxtbW06ZnVuY3Rpb24gbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpXX0sbW1tbTpmdW5jdGlvbiBtbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpKzEyXX0seXk6ZnVuY3Rpb24geXkoKXtyZXR1cm4gU3RyaW5nKHkoKSkuc2xpY2UoMil9LHl5eXk6ZnVuY3Rpb24geXl5eSgpe3JldHVybiBwYWQoeSgpLDQpfSxoOmZ1bmN0aW9uIGgoKXtyZXR1cm4gX0goKSUxMnx8MTJ9LGhoOmZ1bmN0aW9uIGhoKCl7cmV0dXJuIHBhZChfSCgpJTEyfHwxMil9LEg6ZnVuY3Rpb24gSCgpe3JldHVybiBfSCgpfSxISDpmdW5jdGlvbiBISCgpe3JldHVybiBwYWQoX0goKSl9LE06ZnVuY3Rpb24gTSgpe3JldHVybiBfTSgpfSxNTTpmdW5jdGlvbiBNTSgpe3JldHVybiBwYWQoX00oKSl9LHM6ZnVuY3Rpb24gcygpe3JldHVybiBfcygpfSxzczpmdW5jdGlvbiBzcygpe3JldHVybiBwYWQoX3MoKSl9LGw6ZnVuY3Rpb24gbCgpe3JldHVybiBwYWQoX0woKSwzKX0sTDpmdW5jdGlvbiBMKCl7cmV0dXJuIHBhZChNYXRoLmZsb29yKF9MKCkvMTApKX0sdDpmdW5jdGlvbiB0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMF06aTE4bi50aW1lTmFtZXNbMV19LHR0OmZ1bmN0aW9uIHR0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMl06aTE4bi50aW1lTmFtZXNbM119LFQ6ZnVuY3Rpb24gVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzRdOmkxOG4udGltZU5hbWVzWzVdfSxUVDpmdW5jdGlvbiBUVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzZdOmkxOG4udGltZU5hbWVzWzddfSxaOmZ1bmN0aW9uIFooKXtyZXR1cm4gZ210P1wiR01UXCI6dXRjP1wiVVRDXCI6Zm9ybWF0VGltZXpvbmUoZGF0ZSl9LG86ZnVuY3Rpb24gbygpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSoxMDArTWF0aC5hYnMoX28oKSklNjAsNCl9LHA6ZnVuY3Rpb24gcCgpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSwyKStcIjpcIitwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKSU2MCksMil9LFM6ZnVuY3Rpb24gUygpe3JldHVybltcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdW19kKCklMTA+Mz8wOihfZCgpJTEwMC1fZCgpJTEwIT0xMCkqX2QoKSUxMF19LFc6ZnVuY3Rpb24gVygpe3JldHVybiBfVygpfSxXVzpmdW5jdGlvbiBXVygpe3JldHVybiBwYWQoX1coKSl9LE46ZnVuY3Rpb24gTigpe3JldHVybiBfTigpfX07cmV0dXJuIG1hc2sucmVwbGFjZSh0b2tlbixmdW5jdGlvbihtYXRjaCl7aWYobWF0Y2ggaW4gZmxhZ3Mpe3JldHVybiBmbGFnc1ttYXRjaF0oKX1yZXR1cm4gbWF0Y2guc2xpY2UoMSxtYXRjaC5sZW5ndGgtMSl9KX1leHBvcnQgdmFyIG1hc2tzPXtkZWZhdWx0OlwiZGRkIG1tbSBkZCB5eXl5IEhIOk1NOnNzXCIsc2hvcnREYXRlOlwibS9kL3l5XCIscGFkZGVkU2hvcnREYXRlOlwibW0vZGQveXl5eVwiLG1lZGl1bURhdGU6XCJtbW0gZCwgeXl5eVwiLGxvbmdEYXRlOlwibW1tbSBkLCB5eXl5XCIsZnVsbERhdGU6XCJkZGRkLCBtbW1tIGQsIHl5eXlcIixzaG9ydFRpbWU6XCJoOk1NIFRUXCIsbWVkaXVtVGltZTpcImg6TU06c3MgVFRcIixsb25nVGltZTpcImg6TU06c3MgVFQgWlwiLGlzb0RhdGU6XCJ5eXl5LW1tLWRkXCIsaXNvVGltZTpcIkhIOk1NOnNzXCIsaXNvRGF0ZVRpbWU6XCJ5eXl5LW1tLWRkJ1QnSEg6TU06c3NvXCIsaXNvVXRjRGF0ZVRpbWU6XCJVVEM6eXl5eS1tbS1kZCdUJ0hIOk1NOnNzJ1onXCIsZXhwaXJlc0hlYWRlckZvcm1hdDpcImRkZCwgZGQgbW1tIHl5eXkgSEg6TU06c3MgWlwifTtleHBvcnQgdmFyIGkxOG49e2RheU5hbWVzOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiLFwiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sbW9udGhOYW1lczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCIsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sdGltZU5hbWVzOltcImFcIixcInBcIixcImFtXCIsXCJwbVwiLFwiQVwiLFwiUFwiLFwiQU1cIixcIlBNXCJdfTt2YXIgcGFkPWZ1bmN0aW9uIHBhZCh2YWwpe3ZhciBsZW49YXJndW1lbnRzLmxlbmd0aD4xJiZhcmd1bWVudHNbMV0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzFdOjI7cmV0dXJuIFN0cmluZyh2YWwpLnBhZFN0YXJ0KGxlbixcIjBcIil9O3ZhciBnZXREYXlOYW1lPWZ1bmN0aW9uIGdldERheU5hbWUoX3JlZil7dmFyIHk9X3JlZi55LG09X3JlZi5tLGQ9X3JlZi5kLF89X3JlZi5fLGRheU5hbWU9X3JlZi5kYXlOYW1lLF9yZWYkc2hvcnQ9X3JlZltcInNob3J0XCJdLF9zaG9ydD1fcmVmJHNob3J0PT09dm9pZCAwP2ZhbHNlOl9yZWYkc2hvcnQ7dmFyIHRvZGF5PW5ldyBEYXRlO3ZhciB5ZXN0ZXJkYXk9bmV3IERhdGU7eWVzdGVyZGF5LnNldERhdGUoeWVzdGVyZGF5W18rXCJEYXRlXCJdKCktMSk7dmFyIHRvbW9ycm93PW5ldyBEYXRlO3RvbW9ycm93LnNldERhdGUodG9tb3Jyb3dbXytcIkRhdGVcIl0oKSsxKTt2YXIgdG9kYXlfZD1mdW5jdGlvbiB0b2RheV9kKCl7cmV0dXJuIHRvZGF5W18rXCJEYXRlXCJdKCl9O3ZhciB0b2RheV9tPWZ1bmN0aW9uIHRvZGF5X20oKXtyZXR1cm4gdG9kYXlbXytcIk1vbnRoXCJdKCl9O3ZhciB0b2RheV95PWZ1bmN0aW9uIHRvZGF5X3koKXtyZXR1cm4gdG9kYXlbXytcIkZ1bGxZZWFyXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfZD1mdW5jdGlvbiB5ZXN0ZXJkYXlfZCgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIkRhdGVcIl0oKX07dmFyIHllc3RlcmRheV9tPWZ1bmN0aW9uIHllc3RlcmRheV9tKCl7cmV0dXJuIHllc3RlcmRheVtfK1wiTW9udGhcIl0oKX07dmFyIHllc3RlcmRheV95PWZ1bmN0aW9uIHllc3RlcmRheV95KCl7cmV0dXJuIHllc3RlcmRheVtfK1wiRnVsbFllYXJcIl0oKX07dmFyIHRvbW9ycm93X2Q9ZnVuY3Rpb24gdG9tb3Jyb3dfZCgpe3JldHVybiB0b21vcnJvd1tfK1wiRGF0ZVwiXSgpfTt2YXIgdG9tb3Jyb3dfbT1mdW5jdGlvbiB0b21vcnJvd19tKCl7cmV0dXJuIHRvbW9ycm93W18rXCJNb250aFwiXSgpfTt2YXIgdG9tb3Jyb3dfeT1mdW5jdGlvbiB0b21vcnJvd195KCl7cmV0dXJuIHRvbW9ycm93W18rXCJGdWxsWWVhclwiXSgpfTtpZih0b2RheV95KCk9PT15JiZ0b2RheV9tKCk9PT1tJiZ0b2RheV9kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVGR5XCI6XCJUb2RheVwifWVsc2UgaWYoeWVzdGVyZGF5X3koKT09PXkmJnllc3RlcmRheV9tKCk9PT1tJiZ5ZXN0ZXJkYXlfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIllzZFwiOlwiWWVzdGVyZGF5XCJ9ZWxzZSBpZih0b21vcnJvd195KCk9PT15JiZ0b21vcnJvd19tKCk9PT1tJiZ0b21vcnJvd19kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVG13XCI6XCJUb21vcnJvd1wifXJldHVybiBkYXlOYW1lfTt2YXIgZ2V0V2Vlaz1mdW5jdGlvbiBnZXRXZWVrKGRhdGUpe3ZhciB0YXJnZXRUaHVyc2RheT1uZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksZGF0ZS5nZXRNb250aCgpLGRhdGUuZ2V0RGF0ZSgpKTt0YXJnZXRUaHVyc2RheS5zZXREYXRlKHRhcmdldFRodXJzZGF5LmdldERhdGUoKS0odGFyZ2V0VGh1cnNkYXkuZ2V0RGF5KCkrNiklNyszKTt2YXIgZmlyc3RUaHVyc2RheT1uZXcgRGF0ZSh0YXJnZXRUaHVyc2RheS5nZXRGdWxsWWVhcigpLDAsNCk7Zmlyc3RUaHVyc2RheS5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpLShmaXJzdFRodXJzZGF5LmdldERheSgpKzYpJTcrMyk7dmFyIGRzPXRhcmdldFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCktZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpO3RhcmdldFRodXJzZGF5LnNldEhvdXJzKHRhcmdldFRodXJzZGF5LmdldEhvdXJzKCktZHMpO3ZhciB3ZWVrRGlmZj0odGFyZ2V0VGh1cnNkYXktZmlyc3RUaHVyc2RheSkvKDg2NGU1KjcpO3JldHVybiAxK01hdGguZmxvb3Iod2Vla0RpZmYpfTt2YXIgZ2V0RGF5T2ZXZWVrPWZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlKXt2YXIgZG93PWRhdGUuZ2V0RGF5KCk7aWYoZG93PT09MCl7ZG93PTd9cmV0dXJuIGRvd307ZXhwb3J0IHZhciBmb3JtYXRUaW1lem9uZT1mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShkYXRlKXtyZXR1cm4oU3RyaW5nKGRhdGUpLm1hdGNoKHRpbWV6b25lKXx8W1wiXCJdKS5wb3AoKS5yZXBsYWNlKHRpbWV6b25lQ2xpcCxcIlwiKS5yZXBsYWNlKC9HTVRcXCswMDAwL2csXCJVVENcIil9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL21vZHVsZXMvdGFzay5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdC5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL21vZHVsZXMvbm90ZS5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL21vZHVsZXMvdG9kb0xpc3QuanMnO1xuaW1wb3J0IE5vdGVMaXN0IGZyb20gJy4vbW9kdWxlcy9ub3RlTGlzdC5qcyc7XG5pbXBvcnQge3dyaXRlSWQsIHBvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9tb2R1bGVzL2hlbHBlcnMuanMnO1xuaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSS5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG5cbi8vIFRFU1RJTkcgLSBGT1IgTEFURVIgUkVNT1ZBTFxuXG5jb25zb2xlLmxvZyhcInRlc3RpbmdcIik7XG5cbmxldCB0ZXN0VGFzayA9IG5ldyBUYXNrKCd3YWxrIGRvZycsICdEZWNlbWJlciA4IDIwMjEnLCAnbG93Jyk7XG5sZXQgdGVzdE5vdGUgPSBuZXcgTm90ZSgnZ3JvY2VyaWVzJywgJ2F2b2NhZG8sIG1hbmdvLCBtaWxrLCByaWNlJyk7XG5sZXQgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgnc2VsbCBob3VzZScpO1xuXG4vL1VJLnRlc3RCb2R5KClcblxuLypcblxudGVzdFByb2plY3QudGFza3MucHVzaCh0ZXN0VGFzayk7XG5Ob3RlTGlzdC5hZGQodGVzdE5vdGUpO1xuVG9kb0xpc3QuYWRkUHJvamVjdCh0ZXN0UHJvamVjdCk7XG5Ob3RlTGlzdC5hZGQobmV3IE5vdGUoJ21lIG1vdycsIFwiaGUncyB2ZXJ5IHNtYWxsIGJ1dCBiaWcgZXZpbFwiKSk7XG5Ob3RlTGlzdC5hZGQobmV3IE5vdGUoJ21vdmllcycsICdEZWF0aCBvZiBTdGFsaW4sIEludGVyc3RlbGxhciwgQWxpZW4nKSlcblxuKi9cblxuLy8gSU5JVElBVEUgTE9DQUwgU1RPUkFHRVxuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0Jykpe1xuICAgIGNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBlbXB0eVwiKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgVG9kb0xpc3QucHJvamVjdHMpO1xuICAgIHBvcHVsYXRlU3RvcmFnZSgnbm90ZUxpc3QnLCBOb3RlTGlzdC5ub3Rlcyk7XG59XG5cbmVsc2V7XG4gICAgVG9kb0xpc3QucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKTtcbiAgICBOb3RlTGlzdC5ub3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVMaXN0JykpO1xufVxuXG5VSS5sb2FkVUkoKTtcblxuLy8gTUFQUElORyBXSU5ET1cgVkFSUyBUTyBTQ1JJUFQgVkFSU1xuXG53aW5kb3cuVG9kb0xpc3QgPSBUb2RvTGlzdFxud2luZG93LnRlc3RUYXNrID0gdGVzdFRhc2tcbndpbmRvdy50ZXN0Tm90ZSA9IHRlc3ROb3RlXG53aW5kb3cud3JpdGVJZCA9IHdyaXRlSWRcbndpbmRvdy5Ob3RlTGlzdCA9IE5vdGVMaXN0XG53aW5kb3cuUHJvamVjdCA9IFByb2plY3RcbndpbmRvdy5UYXNrID0gVGFza1xud2luZG93Lk5vdGUgPSBOb3RlXG53aW5kb3cucG9wdWxhdGVTdG9yYWdlID0gcG9wdWxhdGVTdG9yYWdlXG53aW5kb3cuVUkgPSBVSSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==