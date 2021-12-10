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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\ntable > tr:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\ntable > tr:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    min-width: 200px;\n    background-color: hsl(0, 0%, 95%);\n}\n\n.listContainer { \n    width: 80%;\n    height: 100vh;\n    min-width: 400px;\n    background-color: hsl(0, 0%, 90%);\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    grid-template-columns: auto 3fr 1fr 1fr auto auto;\n    height: 2em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n\n}\n\n.project {\n\n}\n\n.task {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned:after {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;;AAEA;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,oCAAoC;AACxC;;AAEA;AACA;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;;AAGA;IACI,iDAAiD;IACjD,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\ntable > tr:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\ntable > tr:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    min-width: 200px;\n    background-color: hsl(0, 0%, 95%);\n}\n\n.listContainer { \n    width: 80%;\n    height: 100vh;\n    min-width: 400px;\n    background-color: hsl(0, 0%, 90%);\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    grid-template-columns: auto 3fr 1fr 1fr auto auto;\n    height: 2em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n\n}\n\n.project {\n\n}\n\n.task {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned:after {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
                note.pinned ? pinEl.innerHTML = 'unpin' : pinEl.innerHTML = 'pin'
                pinEl.onclick = () => {
                    _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].togglePin(note);
                    _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].pinSort();
                    this.loadNoteList();
                }

            const noteContent = document.createElement('p');
                noteContent.classList.add('noteContent');
                noteContent.innerHTML = note.content;

            const editEl = document.createElement('button');
                editEl.innerHTML = '✎';
                editEl.onclick = () => {
                    noteEl.parentElement.replaceChild(this.loadNoteForm(note), noteEl);
                }

            const delEl = document.createElement('button');
                delEl. innerHTML = 'x'
                delEl.onclick = () => {
                    _noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].remove(note);
                    this.loadNoteList();
            }

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

        noteEl.append(noteTitle, pinEl, noteContent, editEl, delEl);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGtCQUFrQixvQkFBb0Isd0JBQXdCLHlCQUF5QixHQUFHLFlBQVksb0JBQW9CLG1CQUFtQixrQkFBa0IsdUJBQXVCLEdBQUcsMEJBQTBCLFNBQVMsUUFBUSxpQkFBaUIsR0FBRyxpQ0FBaUMsd0NBQXdDLEdBQUcsa0NBQWtDLHdDQUF3QyxHQUFHLFFBQVEsNEJBQTRCLG9CQUFvQixHQUFHLFVBQVUsdUJBQXVCLDBCQUEwQiw4QkFBOEIsc0JBQXNCLG9CQUFvQiwwQkFBMEIscUJBQXFCLEdBQUcsV0FBVyxnQ0FBZ0MsR0FBRyxnQkFBZ0Isb0JBQW9CLGlCQUFpQix1QkFBdUIsd0NBQXdDLEdBQUcscUJBQXFCLGlCQUFpQixvQkFBb0IsdUJBQXVCLHdDQUF3QyxHQUFHLFVBQVUsbUJBQW1CLHlCQUF5QixxQkFBcUIsOEJBQThCLEdBQUcsWUFBWSxtQkFBbUIsR0FBRyxnQkFBZ0Isa0JBQWtCLGlCQUFpQix5QkFBeUIsZ0JBQWdCLG9DQUFvQyxHQUFHLCtCQUErQixtQkFBbUIsR0FBRyxhQUFhLHlCQUF5QixnQkFBZ0IseUJBQXlCLEdBQUcscUJBQXFCLGlCQUFpQiwyQ0FBMkMsR0FBRyx3QkFBd0IsR0FBRyxlQUFlLGlCQUFpQixtQkFBbUIsR0FBRyxhQUFhLHdEQUF3RCxrQkFBa0IsR0FBRyxvQkFBb0Isb0NBQW9DLDhCQUE4QixrQ0FBa0Msd0JBQXdCLEdBQUcsa0JBQWtCLEtBQUssY0FBYyxLQUFLLFdBQVcsS0FBSyxvQkFBb0IsS0FBSyxrQkFBa0Isb0JBQW9CLHNCQUFzQixrQ0FBa0MseUJBQXlCLEdBQUcsV0FBVyx1Q0FBdUMsbUJBQW1CLG9CQUFvQixtQkFBbUIsdUJBQXVCLDhCQUE4QixHQUFHLGVBQWUsd0JBQXdCLG1CQUFtQiwwQkFBMEIsR0FBRywrQkFBK0Isc0JBQXNCLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixHQUFHLG1CQUFtQixrQkFBa0Isb0NBQW9DLHlCQUF5QixnQkFBZ0IsaUJBQWlCLGdCQUFnQix1Q0FBdUMsR0FBRyxjQUFjLHNCQUFzQixlQUFlLGdCQUFnQix1Q0FBdUMsaUJBQWlCLEdBQUcsc0JBQXNCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDZDQUE2QyxzQkFBc0IsZUFBZSxnQkFBZ0IsdUNBQXVDLGlCQUFpQixHQUFHLGFBQWEseUJBQXlCLEdBQUcsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGdDQUFnQyxrQkFBa0Isb0JBQW9CLHdCQUF3Qix5QkFBeUIsR0FBRyxZQUFZLG9CQUFvQixtQkFBbUIsa0JBQWtCLHVCQUF1QixHQUFHLDBCQUEwQixTQUFTLFFBQVEsaUJBQWlCLEdBQUcsaUNBQWlDLHdDQUF3QyxHQUFHLGtDQUFrQyx3Q0FBd0MsR0FBRyxRQUFRLDRCQUE0QixvQkFBb0IsR0FBRyxVQUFVLHVCQUF1QiwwQkFBMEIsOEJBQThCLHNCQUFzQixvQkFBb0IsMEJBQTBCLHFCQUFxQixHQUFHLFdBQVcsZ0NBQWdDLEdBQUcsZ0JBQWdCLG9CQUFvQixpQkFBaUIsdUJBQXVCLHdDQUF3QyxHQUFHLHFCQUFxQixpQkFBaUIsb0JBQW9CLHVCQUF1Qix3Q0FBd0MsR0FBRyxVQUFVLG1CQUFtQix5QkFBeUIscUJBQXFCLDhCQUE4QixHQUFHLFlBQVksbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQixpQkFBaUIseUJBQXlCLGdCQUFnQixvQ0FBb0MsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsYUFBYSx5QkFBeUIsZ0JBQWdCLHlCQUF5QixHQUFHLHFCQUFxQixpQkFBaUIsMkNBQTJDLEdBQUcsd0JBQXdCLEdBQUcsZUFBZSxpQkFBaUIsbUJBQW1CLEdBQUcsYUFBYSx3REFBd0Qsa0JBQWtCLEdBQUcsb0JBQW9CLG9DQUFvQyw4QkFBOEIsa0NBQWtDLHdCQUF3QixHQUFHLGtCQUFrQixLQUFLLGNBQWMsS0FBSyxXQUFXLEtBQUssb0JBQW9CLEtBQUssa0JBQWtCLG9CQUFvQixzQkFBc0Isa0NBQWtDLHlCQUF5QixHQUFHLFdBQVcsdUNBQXVDLG1CQUFtQixvQkFBb0IsbUJBQW1CLHVCQUF1Qiw4QkFBOEIsR0FBRyxlQUFlLHdCQUF3QixtQkFBbUIsMEJBQTBCLEdBQUcsK0JBQStCLHNCQUFzQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsR0FBRyxtQkFBbUIsa0JBQWtCLG9DQUFvQyx5QkFBeUIsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsdUNBQXVDLEdBQUcsY0FBYyxzQkFBc0IsZUFBZSxnQkFBZ0IsdUNBQXVDLGlCQUFpQixHQUFHLHNCQUFzQixrQkFBa0IsbUJBQW1CLG9CQUFvQiw2Q0FBNkMsc0JBQXNCLGVBQWUsZ0JBQWdCLHVDQUF1QyxpQkFBaUIsR0FBRyxhQUFhLHlCQUF5QixHQUFHLG1CQUFtQjtBQUNyd087QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjZCO0FBQ007QUFDUDtBQUNTO0FBQ0E7QUFDUTtBQUNSO0FBQ1U7O0FBRWhDOztBQUVmLDRCQUE0QixnRUFBb0I7QUFDaEQ7O0FBRUE7O0FBRUE7QUFDQSwyRUFBMkUsZ0VBQW9CO0FBQy9GOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLDBEQUFjO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBDQUEwQyxnRUFBb0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSw4QkFBOEIsNkRBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtFQUFzQjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDBEQUFjO0FBQ3pFOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixpRUFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDZEQUFpQjtBQUNqQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUIsMERBQWM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQWtCO0FBQ3RDLG9CQUFvQiw0REFBZ0I7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQWU7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0RBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IsdUJBQXVCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw4QkFBOEIsZ0RBQUk7O0FBRWxDO0FBQ0E7QUFDQSxnQkFBZ0IsZ0VBQW9CO0FBQ3BDO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQWdCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpQ0FBaUMsbURBQU87O0FBRXhDO0FBQ0E7QUFDQSxnQkFBZ0IsbUVBQXVCO0FBQ3ZDOztBQUVBO0FBQ0EsZ0JBQWdCLCtEQUFtQjtBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixnREFBSTs7QUFFbEM7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiw0REFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNya0JBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQztBQUNIOztBQUVuQjtBQUNmO0FBQ0Esa0JBQWtCLGlEQUFPLENBQUMsMkRBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWDZCO0FBQ2dCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw0REFBZTtBQUN2Qjs7QUFFQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBLGdCQUFnQiw0REFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBLGdCQUFnQiw0REFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw0REFBZTtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQzFFc0I7QUFDQTs7QUFFdEI7QUFDZjtBQUNBLGtCQUFrQixvREFBTyxDQUFDLGtFQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RxQztBQUNBOztBQUV0QjtBQUNmO0FBQ0Esa0JBQWtCLG9EQUFPLENBQUMsK0RBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hpQztBQUNZOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNERBQWU7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNERBQWU7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNERBQWU7QUFDdkI7O0FBRUE7O0FBRUEsc0JBQXNCLHlCQUF5QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBLHdCQUF3Qiw0REFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0JBQXdCO0FBQ2xEO0FBQ0E7QUFDQSxvQkFBb0IsNERBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0JBQXdCO0FBQ3REO0FBQ0E7QUFDQSx3QkFBd0IsNERBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdCQUF3QjtBQUNsRDtBQUNBO0FBQ0Esb0JBQW9CLDREQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKZixhQUFhLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSwyQkFBMkIsSUFBSSw2QkFBNkIseUJBQXlCLElBQUksb0JBQW9CLEVBQUUsNkdBQTZHLCtCQUE4Qyx1Q0FBdUMsbUVBQW1FLFVBQVUsZUFBZSxrQ0FBa0MsNEJBQTRCLG9CQUFvQixnQkFBZ0IsZ0NBQWdDLGlEQUFpRCw4QkFBOEIsMkNBQTJDLG1CQUFtQixTQUFTLHVCQUF1QixVQUFVLG1CQUFtQiwyQkFBMkIsb0JBQW9CLDJCQUEyQixtQkFBbUIsMEJBQTBCLG9CQUFvQiw0QkFBNEIsbUJBQW1CLCtCQUErQixvQkFBb0IsNEJBQTRCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLDhCQUE4QixvQkFBb0IsbUNBQW1DLG9CQUFvQix1Q0FBdUMsb0JBQW9CLHNCQUFzQixvQkFBb0IsMkJBQTJCLFdBQVcsZUFBZSxZQUFZLGtCQUFrQixpQkFBaUIsb0JBQW9CLDBCQUEwQixvQkFBb0IsbUJBQW1CLGdFQUFnRSxFQUFFLHNCQUFzQiw0QkFBNEIsc0JBQXNCLG1CQUFtQix1REFBdUQsRUFBRSxnQkFBZ0IsY0FBYyxrQkFBa0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsc0JBQXNCLGdDQUFnQyxrQkFBa0IsNEJBQTRCLHNCQUFzQixrQkFBa0IsZ0JBQWdCLG1CQUFtQixrQkFBa0Isd0JBQXdCLGdCQUFnQixZQUFZLGtCQUFrQixpQkFBaUIsZ0JBQWdCLFlBQVksa0JBQWtCLGlCQUFpQixnQkFBZ0IsWUFBWSxrQkFBa0IsaUJBQWlCLGdCQUFnQixtQkFBbUIsZ0JBQWdCLGdDQUFnQyxnQkFBZ0IsbURBQW1ELGtCQUFrQixtREFBbUQsZ0JBQWdCLG1EQUFtRCxrQkFBa0IsbURBQW1ELGdCQUFnQixnREFBZ0QsZ0JBQWdCLGtGQUFrRixnQkFBZ0IscUdBQXFHLGdCQUFnQix3RUFBd0UsZ0JBQWdCLFlBQVksa0JBQWtCLGlCQUFpQixnQkFBZ0IsY0FBYywwQ0FBMEMsbUJBQW1CLHNCQUFzQixxQ0FBcUMsRUFBUyxXQUFXLG9aQUEyWixVQUFVLGdYQUFnWCwwQkFBMEIsb0VBQW9FLHNDQUFzQyx5Q0FBeUMsa0lBQWtJLG1CQUFtQix1QkFBdUIsMkNBQTJDLHNCQUFzQix5Q0FBeUMsK0JBQStCLDBCQUEwQiwrQkFBK0IsMkJBQTJCLCtCQUErQiw4QkFBOEIsdUNBQXVDLDhCQUE4Qix1Q0FBdUMsK0JBQStCLHVDQUF1QyxrQ0FBa0MscUNBQXFDLDZCQUE2QixxQ0FBcUMsOEJBQThCLHFDQUFxQyxpQ0FBaUMsZ0RBQWdELDRCQUE0QixpRUFBaUUsZ0NBQWdDLDhEQUE4RCwrQkFBK0IsZ0JBQWdCLG1DQUFtQywrRUFBK0UsaUZBQWlGLDZEQUE2RCw4RUFBOEUsNEVBQTRFLHNEQUFzRCxzREFBc0QsK0JBQStCLDZDQUE2QyxzQkFBc0IsWUFBWSxNQUFNLFlBQW1CLGlEQUFpRDs7Ozs7O1VDQXgyTDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNNO0FBQ1A7QUFDUztBQUNBO0FBQ2lCO0FBQzdCOztBQUVYOzs7O0FBSXRCOztBQUVBOztBQUVBLG1CQUFtQix3REFBSTtBQUN2QixtQkFBbUIsd0RBQUk7QUFDdkIsc0JBQXNCLDJEQUFPOztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9FQUFlLGFBQWEscUVBQWlCO0FBQ2pELElBQUksb0VBQWUsYUFBYSxrRUFBYztBQUM5Qzs7QUFFQTtBQUNBLElBQUkscUVBQWlCO0FBQ3JCLElBQUksa0VBQWM7QUFDbEI7O0FBRUEsNkRBQVM7O0FBRVQ7O0FBRUEsa0JBQWtCLDREQUFRO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQU87QUFDeEIsa0JBQWtCLDREQUFRO0FBQzFCLGlCQUFpQiwyREFBTztBQUN4QixjQUFjLHdEQUFJO0FBQ2xCLGNBQWMsd0RBQUk7QUFDbEIseUJBQXlCLGdFQUFlO0FBQ3hDLFlBQVksc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL25vdGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvbm90ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXRlZm9ybWF0L2xpYi9kYXRlZm9ybWF0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGhlaWdodDogMS44ZW07XFxuICAgIHdpZHRoOiAxLjhlbTtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgXFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxudGFibGUgPiB0cjpudGgtb2YtdHlwZShvZGQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbn1cXG5cXG50YWJsZSA+IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxubGkgKiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5zaWRlYmFyIHsgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxufVxcblxcbi5saXN0Q29udGFpbmVyIHsgXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XFxufVxcblxcbi50YWIgKiB7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLnRhYjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi50YWI6aG92ZXIsIC50YWIuc2VsZWN0ZWQge1xcbiAgICBoZWlnaHQ6IDk2cHg7XFxufVxcblxcbi50YWIgaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgbGkge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciBhdXRvIGF1dG87XFxufVxcblxcbi5wcm9qZWN0TGlzdDpob3ZlciB7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuXFxuLnRhc2sge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gM2ZyIDFmciAxZnIgYXV0byBhdXRvO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLnRhc2suY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6aHNsKDAsIDAlLCAzMCUpXFxufVxcblxcbi50YXNrIC5kYXRlLCAudGFzayAucHJpb3JpdHkge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhc2sgYnV0dG9uIHtcXG5cXG59XFxuXFxuLnByb2plY3Qge1xcblxcbn1cXG5cXG4udGFzayB7XFxuXFxufVxcblxcbi5ub3RlQ29udGFpbmVyIHtcXG5cXG59XFxuXFxuLm5vdGVTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgOTUlKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udW5yb2xsZWQge1xcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4ubm90ZUNvbnRhaW5lciAuYWRkQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ucGlubmVkOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmZvY3VzZWQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udW5mb2N1c2VkOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDIwJSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxpREFBaUQ7SUFDakQsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBoZWlnaHQ6IDEuOGVtO1xcbiAgICB3aWR0aDogMS44ZW07XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIFxcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbnRhYmxlID4gdHI6bnRoLW9mLXR5cGUob2RkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTUlKTtcXG59XFxuXFxudGFibGUgPiB0cjpudGgtb2YtdHlwZShldmVuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbmxpICoge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDJweDtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4uc2lkZWJhciB7ICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciB7IFxcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxufVxcblxcbi50YWIge1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xcbn1cXG5cXG4udGFiICoge1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi50YWI6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4udGFiOmhvdmVyLCAudGFiLnNlbGVjdGVkIHtcXG4gICAgaGVpZ2h0OiA5NnB4O1xcbn1cXG5cXG4udGFiIGgzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnByb2plY3RMaXN0IGxpIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgYXV0byBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdExpc3Q6aG92ZXIge1xcbn1cXG5cXG4udGFza0xpc3Qge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcblxcbi50YXNrIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDNmciAxZnIgMWZyIGF1dG8gYXV0bztcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi50YXNrLmNvbXBsZXRlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOmhzbCgwLCAwJSwgMzAlKVxcbn1cXG5cXG4udGFzayAuZGF0ZSwgLnRhc2sgLnByaW9yaXR5IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YXNrIGJ1dHRvbiB7XFxuXFxufVxcblxcbi5wcm9qZWN0IHtcXG5cXG59XFxuXFxuLnRhc2sge1xcblxcbn1cXG5cXG4ubm90ZUNvbnRhaW5lciB7XFxuXFxufVxcblxcbi5ub3RlU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ub3RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDk1JSk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnVucm9sbGVkIHtcXG4gICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcXG59XFxuXFxuLm5vdGVDb250YWluZXIgLmFkZEJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnBpbm5lZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5mb2N1c2VkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnVuZm9jdXNlZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAyMCUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5pbXBvcnQgTm90ZUxpc3QgZnJvbSAnLi9ub3RlTGlzdC5qcyc7XG5pbXBvcnQge3BvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB0b2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcbmltcG9ydCBkYXRlRm9ybWF0LCB7IG1hc2tzIH0gZnJvbSBcImRhdGVmb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuXG4gICAgc3RhdGljIGN1cnJlbnRQcm9qZWN0ID0gdG9kb0xpc3QucHJvamVjdHNbMF07XG4gICAgc3RhdGljIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICAgIC8vIEluaXRpYWwgTG9hZG91dFxuXG4gICAgc3RhdGljIGxvYWRVSSAoKSB7XG4gICAgICAgIHRoaXMuYm9keS5hcHBlbmQodGhpcy5sb2FkU2lkZWJhcigpLCB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCBUb2RvTGlzdC5wcm9qZWN0c1swXSkpO1xuICAgIH1cblxuXG4gICAgLy8gTmF2aWdhdGlvbiBiYXIgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIHByb2plY3RzIGFuZCBub3Rlc1xuXG4gICAgc3RhdGljIGxvYWRTaWRlYmFyKCkge1xuICAgICAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcblxuICAgICAgICBpZiAoIXNpZGViYXIpIHtcbiAgICAgICAgICAgIHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaWRlYmFyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgbm90ZVRhYkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7ICAgIFxuICAgICAgICAgICAgbm90ZVRhYkhlYWRlci5pbm5lckhUTUwgPSBcIk5vdGVzXCJcblxuICAgICAgICBub3RlVGFiLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ25vdGUnLCBOb3RlTGlzdC5ub3Rlcyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIG5vdGVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgIH1cblxuICAgICAgICBub3RlVGFiLmFwcGVuZChub3RlVGFiSGVhZGVyKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUYWJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgcHJvamVjdFRhYkhlYWRlci5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICAgICAgcHJvamVjdFRhYi5hcHBlbmQocHJvamVjdFRhYkhlYWRlcik7IFxuXG4gICAgICAgIHByb2plY3RUYWIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIFRvZG9MaXN0LnByb2plY3RzWzBdKVxuICAgICAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBub3RlVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JywgJ2hpZGRlbicpO1xuXG4gICAgICAgIC8vIExpc3QgcHJvamVjdCBuYW1lcyBmb3IgdmlldyBzZWxlY3Rpb25cblxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgVG9kb0xpc3QucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdwcm9qZWN0JywgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlZGl0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBlZGl0RWwuaW5uZXJIVE1MID0gJ+Kcjic7XG4gICAgICAgICAgICAgICAgZWRpdEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RFbC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh0aGlzLmxvYWRQcm9qZWN0Rm9ybShwcm9qZWN0KSwgcHJvamVjdEVsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsRWwuIGlubmVySFRNTCA9ICd4J1xuICAgICAgICAgICAgICAgIGRlbEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFRvZG9MaXN0LnJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2plY3RFbC5hcHBlbmQocHJvamVjdFRpdGxlLCBlZGl0RWwsIGRlbEVsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3RFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9ICcrJztcbiAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b24ub25jbGljayA9ICgpID0+IHtwcm9qZWN0TGlzdC5hcHBlbmQodGhpcy5sb2FkUHJvamVjdEZvcm0oKSk7fVxuICAgICAgICAgICAgXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uKTsgICAgXG5cbiAgICAgICAgc2lkZWJhci5hcHBlbmQobm90ZVRhYiwgcHJvamVjdFRhYiwgcHJvamVjdExpc3QpO1xuXG4gICAgICAgIHJldHVybiBzaWRlYmFyXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRDb250YWluZXIodHlwZSwgbGlzdCkge1xuXG4gICAgICAgIC8vIExvYWQgZ2VuZXJpYyBjb250YWluZXIgZm9yIHByb2plY3RzIG9yIGxpc3RzLCBsb2FkIGluIGNvbnRlbnQgYmFzZWQgb24gYXJndW1lbnRzXG5cbiAgICAgICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdENvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmICghbGlzdENvbnRhaW5lcikge1xuICAgICAgICAgICAgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Q29udGFpbmVyJyk7XG4gICAgICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWRQcm9qZWN0KGxpc3QpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZFByb2plY3QobGlzdCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vdGUnOlxuICAgICAgICAgICAgICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWROb3RlTGlzdChOb3RlTGlzdC5ub3RlcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdENvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkUHJvamVjdCAocHJvamVjdCkge1xuXG4gICAgICAgIC8vIExvYWQgcHJvamVjdCBjb250YWluZXIgd2l0aCBlZGl0aW5nLCBkZWxldGluZywgc29ydGluZyBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHRoaXMuY3VycmVudFByb2plY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXByb2plY3RDb250YWluZXIpIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdENvbnRhaW5lcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpXG4gICAgICAgICAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrTGlzdCcpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlFbC5pbm5lckhUTUwgPSAnUHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlFbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuXG4gICAgICAgICAgICBwcmlvcml0eUVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QucHJpb3JpdHlTb3J0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgZGF0ZUVsLmlubmVySFRNTCA9ICdEdWUgRGF0ZSdcbiAgICAgICAgICAgIGRhdGVFbC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG5cbiAgICAgICAgICAgIGRhdGVFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LmRhdGVTb3J0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZEZpbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICBsaXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuXG4gICAgICAgIGxpc3RIZWFkZXIuYXBwZW5kKGdyaWRGaWxsZXIsIGdyaWRGaWxsZXIuY2xvbmVOb2RlKCksIGRhdGVFbCwgcHJpb3JpdHlFbCwgZ3JpZEZpbGxlci5jbG9uZU5vZGUoKSwgZ3JpZEZpbGxlci5jbG9uZU5vZGUoKSk7XG5cbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKGxpc3RIZWFkZXIpO1xuICAgICAgICBcblxuICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGhpcy5sb2FkVGFzayh0YXNrKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBuZXdUYXNrQnV0dG9uLmlubmVySFRNTCA9ICcrJ1xuICAgICAgICAgICAgbmV3VGFza0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge3Byb2plY3RDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZFRhc2tGb3JtKHByb2plY3QpKX07XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdEhlYWRlciwgdGFza0xpc3QsIG5ld1Rhc2tCdXR0b24pO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBsb2FkTm90ZUxpc3QoKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIGNvbnRhaW5lciBmb3Igbm90ZXMsIHdpdGggc2VwZXJhdGlvbiBiZXR3ZWVuIHBpbm5lZC91bnBpbm5lZCBub3RlcywgYW5kIG5ldyB0YXNrIGJ1dHRvblxuXG4gICAgICAgIGxldCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVDb250YWluZXInKTtcblxuICAgICAgICBpZighbm90ZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RlQ29udGFpbmVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vdGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwaW5uZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBpbm5lZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnLCAnbm90ZVNlY3Rpb24nKTtcblxuICAgICAgICBjb25zdCB1bnBpbm5lZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdW5waW5uZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndW5waW5uZWQnLCAnbm90ZVNlY3Rpb24nKTtcblxuICAgICAgICBmb3IgKGxldCBub3RlIG9mIE5vdGVMaXN0Lm5vdGVzKSB7XG4gICAgICAgICAgICBub3RlLnBpbm5lZCA/IHBpbm5lZENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkTm90ZShub3RlKSkgOiB1bnBpbm5lZENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkTm90ZShub3RlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBuZXdOb3RlQnV0dG9uLmlubmVySFRNTCA9ICcrJ1xuICAgICAgICAgICAgbmV3Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b24nKTtcbiAgICAgICAgICAgIG5ld05vdGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBub3RlQ29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWROb3RlRm9ybSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBub3RlQ29udGFpbmVyLmFwcGVuZChwaW5uZWRDb250YWluZXIsIHVucGlubmVkQ29udGFpbmVyLCBuZXdOb3RlQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gbm90ZUNvbnRhaW5lclxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkTm90ZSAobm90ZSkge1xuXG4gICAgICAgIC8vIExvYWQgaW5kaXZpZHVhbCBub3RlIHdpdGggZWRpdGluZyBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgY29uc3Qgbm90ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgnbm90ZScpO1xuXG4gICAgICAgICAgICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgbm90ZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlVGl0bGVcIik7XG4gICAgICAgICAgICBub3RlVGl0bGUuaW5uZXJIVE1MID0gbm90ZS50aXRsZTtcblxuICAgICAgICAgICAgY29uc3QgcGluRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBub3RlLnBpbm5lZCA/IHBpbkVsLmlubmVySFRNTCA9ICd1bnBpbicgOiBwaW5FbC5pbm5lckhUTUwgPSAncGluJ1xuICAgICAgICAgICAgICAgIHBpbkVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5vdGVMaXN0LnRvZ2dsZVBpbihub3RlKTtcbiAgICAgICAgICAgICAgICAgICAgTm90ZUxpc3QucGluU29ydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWROb3RlTGlzdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgbm90ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgbm90ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbm90ZUNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBub3RlQ29udGVudC5pbm5lckhUTUwgPSBub3RlLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGVkaXRFbC5pbm5lckhUTUwgPSAn4pyOJztcbiAgICAgICAgICAgICAgICBlZGl0RWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm90ZUVsLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHRoaXMubG9hZE5vdGVGb3JtKG5vdGUpLCBub3RlRWwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxFbC4gaW5uZXJIVE1MID0gJ3gnXG4gICAgICAgICAgICAgICAgZGVsRWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTm90ZUxpc3QucmVtb3ZlKG5vdGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWROb3RlTGlzdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIG5vdGVFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFub3RlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd1bnJvbGxlZCcpKSB7XG4gICAgICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlJyksIChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCd1bnJvbGxlZCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Vucm9sbGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vdGVFbC5jbGFzc0xpc3QucmVtb3ZlKCd1bnJvbGxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbm90ZUVsLmFwcGVuZChub3RlVGl0bGUsIHBpbkVsLCBub3RlQ29udGVudCwgZWRpdEVsLCBkZWxFbCk7XG5cbiAgICAgICAgcmV0dXJuIG5vdGVFbFxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVGFzayAodGFzaykge1xuXG4gICAgICAgIC8vIExvYWQgaW5kaXZpZHVhbCB0YXNrLCB3aXRoIGVkaXRpbmcgZnVuY3Rpb25hbGl0eVxuXG4gICAgICAgIGNvbnN0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjaGVja0VsLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNoZWNrRWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC50b2dnbGVDb21wbGV0aW9uKHRhc2spO1xuICAgICAgICAgICAgICAgIHRhc2tFbC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNoZWNrQ29udGFpbmVyLmFwcGVuZChjaGVja0VsKTtcblxuICAgICAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIHRpdGxlRWwuaW5uZXJIVE1MID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgIHRpdGxlRWwuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuXG4gICAgICAgIGNvbnN0IGRhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBkYXRlRWwuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgZGF0ZUVsLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICAgICAgICAgIHByaW9yaXR5RWwuaW5uZXJIVE1MID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgICAgIHByaW9yaXR5RWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKVxuXG4gICAgICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBlZGl0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRFbC5pbm5lckhUTUwgPSAn4pyOJztcbiAgICAgICAgICAgIGVkaXRFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tFbC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh0aGlzLmxvYWRUYXNrRm9ybSh0aGlzLmN1cnJlbnRQcm9qZWN0LCB0YXNrKSwgdGFza0VsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICBlZGl0Q29udGFpbmVyLmFwcGVuZChlZGl0RWwpO1xuXG4gICAgICAgIGNvbnN0IGRlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgICAgY29uc3QgZGVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbEVsLiBpbm5lckhUTUwgPSAneCdcbiAgICAgICAgICAgIGRlbEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCB0aGlzLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBlZGl0Q29udGFpbmVyLmFwcGVuZChkZWxFbCk7XG5cbiAgICAgICAgdGFza0VsLmFwcGVuZChjaGVja0NvbnRhaW5lciwgdGl0bGVFbCwgZGF0ZUVsLCBwcmlvcml0eUVsLCBlZGl0Q29udGFpbmVyLCBkZWxDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiB0YXNrRWxcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFRhc2tGb3JtIChwcm9qZWN0LCB0YXNrKSB7XG5cbiAgICAgICAgLy8gTG9hZCBmb3JtIGZvciBuZXcgdGFza3MuXG4gICAgICAgIC8vIENhbiBiZSB1c2VkIGZvciBlZGl0aW5nIG9yIGNyZWF0aW9uIGZyb20gc2NyYXRjaC4gQ2hlY2tzIGZvciBleGlzaXRuZyB0YXNrIGFyZ3VtZW50IHRvIGRldGVybWluZSBvdXRwdXQuXG5cbiAgICAgICAgbGV0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tGb3JtJyk7XG5cbiAgICAgICAgaWYgKHRhc2tGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFza0Zvcm1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ29uc3VibWl0JywgJ3JldHVybiBmYWxzZScpO1xuICAgICAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFza0Zvcm0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICAgICAgICAgICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgRGF0ZSdcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcblxuICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrRm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgZGF0ZUxhYmVsLCBkYXRlSW5wdXQpO1xuXG4gICAgICAgIC8vIEl0ZXJhdGl2ZSBjcmVhdGlvbiBvZiByYWRpbyBidXR0b24gc2VsZWN0b3JzIGZvciBwcmlvcml0eS4gRGVmYXVsdHMgdG8gbWVkaXVtLCBvciBwcmVleGlzdGluZyB0YXNrIHZhbHVlLlxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlWYWxzID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJpb3JpdHlWYWxzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByaW9yaXR5VmFsc1tpXSk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IHByaW9yaXR5VmFsc1tpXVxuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eU9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcmlvcml0eU9wdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgIHByaW9yaXR5T3B0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlPcHQudmFsdWUgPSBwcmlvcml0eVZhbHNbaV1cbiAgICAgICAgICAgIGlmICh0YXNrICYmIHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gcHJpb3JpdHlWYWxzW2ldLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eU9wdC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmICghdGFzayAmJiBpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlPcHQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0b3IuYXBwZW5kKHByaW9yaXR5T3B0LCBwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9ICfinJMnO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9ICd4JztcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGb3JtLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHRoaXMubG9hZFRhc2sodGFzayksIHRhc2tGb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRWxlbWVudCh0YXNrRm9ybSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBkYXRlTGFiZWwsIGRhdGVJbnB1dCwgcHJpb3JpdHlTZWxlY3Rvciwgc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHRhc2tGb3JtLm9uc3VibWl0ID0gKCkgPT4geyAgIFxuXG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFzay5pZCA9IHRhc2suaWQ7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QucmVwbGFjZVRhc2sobmV3VGFzaywgdGFzaywgcHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC5hZGRUYXNrKHByb2plY3QsIG5ld1Rhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdwcm9qZWN0JywgcHJvamVjdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRhc2tGb3JtXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0Rm9ybShwcm9qZWN0KSB7XG5cbiAgICAgICAgLy8gTG9hZCBmb3JtIGZvciBuZXcgcHJvamVjdC5cbiAgICAgICAgLy8gQ2FuIGJlIHVzZWQgZm9yIGVkaXRpbmcgb3IgY3JlYXRpb24gZnJvbSBzY3JhdGNoLiBDaGVja3MgZm9yIGV4aXNpdG5nIHByb2plY3QgYXJndW1lbnQgdG8gZGV0ZXJtaW5lIG91dHB1dC5cblxuICAgICAgICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKTtcblxuICAgICAgICBpZiAocHJvamVjdEZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Rm9ybVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJyk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ+Kckyc7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gJ3gnO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7dGhpcy5kZWxldGVFbGVtZW50KHByb2plY3RGb3JtKX07XG5cbiAgICAgICAgaWYgKHByb2plY3Qpe1xuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RGb3JtLm9uc3VibWl0ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuaWQgPSBwcm9qZWN0LmlkO1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LnJlcGxhY2VQcm9qZWN0KG5ld1Byb2plY3QsIHByb2plY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxvYWRTaWRlYmFyKCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCBuZXdQcm9qZWN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvamVjdEZvcm1cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZE5vdGVGb3JtIChub3RlKSB7XG5cbiAgICAgICAgLy8gTG9hZCBmb3JtIGZvciBuZXcgbm90ZS5cbiAgICAgICAgLy8gQ2FuIGJlIHVzZWQgZm9yIGVkaXRpbmcgb3IgY3JlYXRpb24gZnJvbSBzY3JhdGNoLiBDaGVja3MgZm9yIGV4aXNpdG5nIG5vdGUgYXJndW1lbnQgdG8gZGV0ZXJtaW5lIG91dHB1dC5cblxuICAgICAgICBsZXQgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZUZvcm0nKTtcblxuICAgICAgICBpZiAobm90ZUZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBub3RlRm9ybVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIG5vdGVGb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICAgICAgY29uc3QgY29udGVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIGNvbnRlbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnOCcpO1xuICAgICAgICAgICAgY29udGVudElucHV0LnNldEF0dHJpYnV0ZSgnY29scycsICczMicpOyAgXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ+Kckyc7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gJ3gnO1xuXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFbGVtZW50KG5vdGVGb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vdGUpIHtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBub3RlLnRpdGxlO1xuICAgICAgICAgICAgY29udGVudElucHV0LnZhbHVlID0gbm90ZS5jb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBub3RlRm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgY29udGVudElucHV0LCBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgbm90ZUZvcm0ub25zdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Tm90ZSA9IG5ldyBOb3RlICh0aXRsZUlucHV0LnZhbHVlLCBjb250ZW50SW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAobm90ZSkge1xuICAgICAgICAgICAgICAgIG5ld05vdGUuaWQgPSBub3RlLmlkO1xuICAgICAgICAgICAgICAgIG5ld05vdGUucGlubmVkID0gbm90ZS5waW5uZWQ7XG5cbiAgICAgICAgICAgICAgICBOb3RlTGlzdC5yZXBsYWNlKG5ld05vdGUsIG5vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBOb3RlTGlzdC5hZGQobmV3Tm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcignbm90ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vdGVGb3JtXG4gICAgfVxuXG4gICAgc3RhdGljIGVkaXROb3RlIChub3RlKSB7XG5cbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGRlbGV0ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxufSIsImZ1bmN0aW9uIHdyaXRlSWQgKGN1cnJlbnRJZHMpIHtcblxuICAgIGxldCBuZXdJZCA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIqKjMyKSk7XG5cblxuICAgIHdoaWxlIChjdXJyZW50SWRzLmluY2x1ZGVzKG5ld0lkKSkge1xuICAgICAgICBuZXdJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyKiozMikpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3SWQ7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZShrZXksIHZhbHVlKXtcbiAgICBjb25zb2xlLmxvZyhcInBvcHVsYXRpbmcuLi5cIilcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG59XG5cbmV4cG9ydCB7XG4gICAgd3JpdGVJZCxcbiAgICBwb3B1bGF0ZVN0b3JhZ2Vcbn07IiwiaW1wb3J0IE5vdGVMaXN0IGZyb20gJy4vbm90ZUxpc3QuanMnO1xuaW1wb3J0IHt3cml0ZUlkfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5pZCA9IHdyaXRlSWQoTm90ZUxpc3QuZ2V0SWRzKCkpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuZGF0ZSA9IERhdGUoKTtcbiAgICAgICAgdGhpcy5waW5uZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IE5vdGUgZnJvbSAnLi9ub3RlLmpzJztcbmltcG9ydCB7cG9wdWxhdGVTdG9yYWdlfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jbGFzcyBOb3RlTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubm90ZXMgPSBbXVxuICAgIH1cblxuICAgIGFkZChub3RlKSB7XG4gICAgICAgIHRoaXMubm90ZXMucHVzaChub3RlKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgIH1cblxuICAgIHJlbW92ZShub3RlKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLm5vdGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAobm90ZS5pZCA9PT0gdGhpcy5ub3Rlc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgnbm90ZUxpc3QnLCB0aGlzLm5vdGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcGxhY2UgKG5ld05vdGUsIG9sZE5vdGUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMubm90ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChvbGROb3RlLmlkID09PSB0aGlzLm5vdGVzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3Rlc1tpXSA9IG5ld05vdGU7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLm5vdGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0SWRzKCkge1xuICAgICAgICBsZXQgaWRzID0gW11cblxuICAgICAgICBmb3IgKGNvbnN0IG5vdGUgb2YgdGhpcy5ub3Rlcykge1xuICAgICAgICAgICAgaWRzLnB1c2gobm90ZS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRzXG4gICAgfVxuXG4gICAgdG9nZ2xlUGluKG5vdGUpIHtcbiAgICAgICAgbm90ZS5waW5uZWQgPSAhbm90ZS5waW5uZWQ7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgnbm90ZUxpc3QnLCB0aGlzLm5vdGVzKTtcbiAgICB9XG5cbiAgICBwaW5Tb3J0KCkge1xuICAgICAgICBsZXQgc29ydGVkTm90ZXMgPSBbXVxuXG4gICAgICAgIGZvciAoY29uc3Qgbm90ZSBvZiB0aGlzLm5vdGVzKSB7XG4gICAgICAgICAgICBpZiAobm90ZS5waW5uZWQpIHtcbiAgICAgICAgICAgICAgICBzb3J0ZWROb3Rlcy51bnNoaWZ0KG5vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBzb3J0ZWROb3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3Rlcy5zcGxpY2UoMCwgc29ydGVkTm90ZXMubGVuZ3RoLCAuLi5zb3J0ZWROb3Rlcyk7XG4gICAgfVxuXG4gICAgZGF0ZVNvcnQgKCkge1xuICAgICAgICB0aGlzLm5vdGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RlTGlzdCgpIiwiaW1wb3J0IHt3cml0ZUlkfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IHdyaXRlSWQoVG9kb0xpc3QuZ2V0UHJvamVjdElkcygpKTtcbiAgICAgICAgdGhpcy4gdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQge3dyaXRlSWR9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5pZCA9IHdyaXRlSWQoVG9kb0xpc3QuZ2V0VGFza0lkcygpKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gICAgfVxufSIsImltcG9ydCBQcm9qZWN0ICBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQge3BvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXG5cbiAgICAgICAgLy90aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0hvbWUnLCAnMDkvMTQvMjInKSk7ICAgIFxuICAgICAgICAvL25ldyBQcm9qZWN0KCdUb2RheScsIGhlbHBlcnMuZGF0ZS50b2RheSgpKVxuICAgICAgICAvL25ldyBQcm9qZWN0KCdUaGlzIFdlZWsnLCBoZWxwZXJzLmRhdGUuanVtcCg3KSlcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgYWRkVGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBsZXRpb24odGFzaykge1xuICAgICAgICB0YXNrLmNvbXBsZXRlID0gIXRhc2suY29tcGxldGU7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8PXRoaXMucHJvamVjdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHRoaXMucHJvamVjdHNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2ssIHByb2plY3QpIHtcblxuICAgICAgICBpZiAoIXByb2plY3Qpe1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHByb2plY3QudGFza3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IHByb2plY3QudGFza3NbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50YXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSBwcm9qZWN0LnRhc2tzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcGxhY2VUYXNrIChuZXdUYXNrLCBvbGRUYXNrLCBwcm9qZWN0KSB7XG4gICAgICAgIGlmICghcHJvamVjdCl7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50YXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVGFzay5pZCA9PT0gcHJvamVjdC50YXNrc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrc1tpXSA9IG5ld1Rhc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRhc2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFRhc2suaWQgPT09IHByb2plY3QudGFza3NbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrc1tpXSA9IG5ld1Rhc2s7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVwbGFjZVByb2plY3QobmV3UHJvamVjdCwgb2xkUHJvamVjdCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8PXRoaXMucHJvamVjdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChvbGRQcm9qZWN0LmlkID09PSB0aGlzLnByb2plY3RzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0c1tpXSA9IG5ld1Byb2plY3Q7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdElkcygpIHtcbiAgICAgICAgbGV0IGlkcyA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RzKSB7XG4gICAgICAgICAgICBpZHMucHVzaChwcm9qZWN0LmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG5cbiAgICBnZXRUYXNrSWRzKCkge1xuICAgICAgICBsZXQgaWRzID0gW11cblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgICAgICAgICAgIGlkcy5wdXNoKHRhc2suaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRzXG4gICAgfVxuXG4gICAgcHJpb3JpdHlTb3J0KHByb2plY3QpIHtcblxuICAgICAgICBsZXQgc29ydGVkVGFza3MgPSBbXVxuICAgICAgICBsZXQgbWVkSW5kZXggPSAwXG5cbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcblxuICAgICAgICAgICAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnSGlnaCc6XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFRhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICsrbWVkSW5kZXg7IFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ01lZGl1bSc6XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFRhc2tzLnNwbGljZShtZWRJbmRleCwgMCwgdGFzayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnTG93JzpcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKDAsIHNvcnRlZFRhc2tzLmxlbmd0aCwgLi4uc29ydGVkVGFza3MpO1xuICAgIH1cblxuICAgIGRhdGVTb3J0KHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdC50YXNrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUb2RvTGlzdCgpIiwidmFyIHRva2VuPS9kezEsNH18RHszLDR9fG17MSw0fXx5eSg/Onl5KT98KFtIaE1zVHRdKVxcMT98V3sxLDJ9fFtMbG9wU1pOXXxcIlteXCJdKlwifCdbXiddKicvZzt2YXIgdGltZXpvbmU9L1xcYig/OltBLVpdezEsM31bQS1aXVtUQ10pKD86Wy0rXVxcZHs0fSk/fCgoPzpBdXN0cmFsaWFuICk/KD86UGFjaWZpY3xNb3VudGFpbnxDZW50cmFsfEVhc3Rlcm58QXRsYW50aWMpICg/OlN0YW5kYXJkfERheWxpZ2h0fFByZXZhaWxpbmcpIFRpbWUpXFxiL2c7dmFyIHRpbWV6b25lQ2xpcD0vW14tK1xcZEEtWl0vZztleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlRm9ybWF0KGRhdGUsbWFzayx1dGMsZ210KXtpZihhcmd1bWVudHMubGVuZ3RoPT09MSYmdHlwZW9mIGRhdGU9PT1cInN0cmluZ1wiJiYhL1xcZC8udGVzdChkYXRlKSl7bWFzaz1kYXRlO2RhdGU9dW5kZWZpbmVkfWRhdGU9ZGF0ZXx8ZGF0ZT09PTA/ZGF0ZTpuZXcgRGF0ZTtpZighKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSl7ZGF0ZT1uZXcgRGF0ZShkYXRlKX1pZihpc05hTihkYXRlKSl7dGhyb3cgVHlwZUVycm9yKFwiSW52YWxpZCBkYXRlXCIpfW1hc2s9U3RyaW5nKG1hc2tzW21hc2tdfHxtYXNrfHxtYXNrc1tcImRlZmF1bHRcIl0pO3ZhciBtYXNrU2xpY2U9bWFzay5zbGljZSgwLDQpO2lmKG1hc2tTbGljZT09PVwiVVRDOlwifHxtYXNrU2xpY2U9PT1cIkdNVDpcIil7bWFzaz1tYXNrLnNsaWNlKDQpO3V0Yz10cnVlO2lmKG1hc2tTbGljZT09PVwiR01UOlwiKXtnbXQ9dHJ1ZX19dmFyIF89ZnVuY3Rpb24gXygpe3JldHVybiB1dGM/XCJnZXRVVENcIjpcImdldFwifTt2YXIgX2Q9ZnVuY3Rpb24gZCgpe3JldHVybiBkYXRlW18oKStcIkRhdGVcIl0oKX07dmFyIEQ9ZnVuY3Rpb24gRCgpe3JldHVybiBkYXRlW18oKStcIkRheVwiXSgpfTt2YXIgX209ZnVuY3Rpb24gbSgpe3JldHVybiBkYXRlW18oKStcIk1vbnRoXCJdKCl9O3ZhciB5PWZ1bmN0aW9uIHkoKXtyZXR1cm4gZGF0ZVtfKCkrXCJGdWxsWWVhclwiXSgpfTt2YXIgX0g9ZnVuY3Rpb24gSCgpe3JldHVybiBkYXRlW18oKStcIkhvdXJzXCJdKCl9O3ZhciBfTT1mdW5jdGlvbiBNKCl7cmV0dXJuIGRhdGVbXygpK1wiTWludXRlc1wiXSgpfTt2YXIgX3M9ZnVuY3Rpb24gcygpe3JldHVybiBkYXRlW18oKStcIlNlY29uZHNcIl0oKX07dmFyIF9MPWZ1bmN0aW9uIEwoKXtyZXR1cm4gZGF0ZVtfKCkrXCJNaWxsaXNlY29uZHNcIl0oKX07dmFyIF9vPWZ1bmN0aW9uIG8oKXtyZXR1cm4gdXRjPzA6ZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpfTt2YXIgX1c9ZnVuY3Rpb24gVygpe3JldHVybiBnZXRXZWVrKGRhdGUpfTt2YXIgX049ZnVuY3Rpb24gTigpe3JldHVybiBnZXREYXlPZldlZWsoZGF0ZSl9O3ZhciBmbGFncz17ZDpmdW5jdGlvbiBkKCl7cmV0dXJuIF9kKCl9LGRkOmZ1bmN0aW9uIGRkKCl7cmV0dXJuIHBhZChfZCgpKX0sZGRkOmZ1bmN0aW9uIGRkZCgpe3JldHVybiBpMThuLmRheU5hbWVzW0QoKV19LERERDpmdW5jdGlvbiBEREQoKXtyZXR1cm4gZ2V0RGF5TmFtZSh7eTp5KCksbTpfbSgpLGQ6X2QoKSxfOl8oKSxkYXlOYW1lOmkxOG4uZGF5TmFtZXNbRCgpXSxzaG9ydDp0cnVlfSl9LGRkZGQ6ZnVuY3Rpb24gZGRkZCgpe3JldHVybiBpMThuLmRheU5hbWVzW0QoKSs3XX0sRERERDpmdW5jdGlvbiBEREREKCl7cmV0dXJuIGdldERheU5hbWUoe3k6eSgpLG06X20oKSxkOl9kKCksXzpfKCksZGF5TmFtZTppMThuLmRheU5hbWVzW0QoKSs3XX0pfSxtOmZ1bmN0aW9uIG0oKXtyZXR1cm4gX20oKSsxfSxtbTpmdW5jdGlvbiBtbSgpe3JldHVybiBwYWQoX20oKSsxKX0sbW1tOmZ1bmN0aW9uIG1tbSgpe3JldHVybiBpMThuLm1vbnRoTmFtZXNbX20oKV19LG1tbW06ZnVuY3Rpb24gbW1tbSgpe3JldHVybiBpMThuLm1vbnRoTmFtZXNbX20oKSsxMl19LHl5OmZ1bmN0aW9uIHl5KCl7cmV0dXJuIFN0cmluZyh5KCkpLnNsaWNlKDIpfSx5eXl5OmZ1bmN0aW9uIHl5eXkoKXtyZXR1cm4gcGFkKHkoKSw0KX0saDpmdW5jdGlvbiBoKCl7cmV0dXJuIF9IKCklMTJ8fDEyfSxoaDpmdW5jdGlvbiBoaCgpe3JldHVybiBwYWQoX0goKSUxMnx8MTIpfSxIOmZ1bmN0aW9uIEgoKXtyZXR1cm4gX0goKX0sSEg6ZnVuY3Rpb24gSEgoKXtyZXR1cm4gcGFkKF9IKCkpfSxNOmZ1bmN0aW9uIE0oKXtyZXR1cm4gX00oKX0sTU06ZnVuY3Rpb24gTU0oKXtyZXR1cm4gcGFkKF9NKCkpfSxzOmZ1bmN0aW9uIHMoKXtyZXR1cm4gX3MoKX0sc3M6ZnVuY3Rpb24gc3MoKXtyZXR1cm4gcGFkKF9zKCkpfSxsOmZ1bmN0aW9uIGwoKXtyZXR1cm4gcGFkKF9MKCksMyl9LEw6ZnVuY3Rpb24gTCgpe3JldHVybiBwYWQoTWF0aC5mbG9vcihfTCgpLzEwKSl9LHQ6ZnVuY3Rpb24gdCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzBdOmkxOG4udGltZU5hbWVzWzFdfSx0dDpmdW5jdGlvbiB0dCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzJdOmkxOG4udGltZU5hbWVzWzNdfSxUOmZ1bmN0aW9uIFQoKXtyZXR1cm4gX0goKTwxMj9pMThuLnRpbWVOYW1lc1s0XTppMThuLnRpbWVOYW1lc1s1XX0sVFQ6ZnVuY3Rpb24gVFQoKXtyZXR1cm4gX0goKTwxMj9pMThuLnRpbWVOYW1lc1s2XTppMThuLnRpbWVOYW1lc1s3XX0sWjpmdW5jdGlvbiBaKCl7cmV0dXJuIGdtdD9cIkdNVFwiOnV0Yz9cIlVUQ1wiOmZvcm1hdFRpbWV6b25lKGRhdGUpfSxvOmZ1bmN0aW9uIG8oKXtyZXR1cm4oX28oKT4wP1wiLVwiOlwiK1wiKStwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKS82MCkqMTAwK01hdGguYWJzKF9vKCkpJTYwLDQpfSxwOmZ1bmN0aW9uIHAoKXtyZXR1cm4oX28oKT4wP1wiLVwiOlwiK1wiKStwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKS82MCksMikrXCI6XCIrcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMoX28oKSklNjApLDIpfSxTOmZ1bmN0aW9uIFMoKXtyZXR1cm5bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXVtfZCgpJTEwPjM/MDooX2QoKSUxMDAtX2QoKSUxMCE9MTApKl9kKCklMTBdfSxXOmZ1bmN0aW9uIFcoKXtyZXR1cm4gX1coKX0sV1c6ZnVuY3Rpb24gV1coKXtyZXR1cm4gcGFkKF9XKCkpfSxOOmZ1bmN0aW9uIE4oKXtyZXR1cm4gX04oKX19O3JldHVybiBtYXNrLnJlcGxhY2UodG9rZW4sZnVuY3Rpb24obWF0Y2gpe2lmKG1hdGNoIGluIGZsYWdzKXtyZXR1cm4gZmxhZ3NbbWF0Y2hdKCl9cmV0dXJuIG1hdGNoLnNsaWNlKDEsbWF0Y2gubGVuZ3RoLTEpfSl9ZXhwb3J0IHZhciBtYXNrcz17ZGVmYXVsdDpcImRkZCBtbW0gZGQgeXl5eSBISDpNTTpzc1wiLHNob3J0RGF0ZTpcIm0vZC95eVwiLHBhZGRlZFNob3J0RGF0ZTpcIm1tL2RkL3l5eXlcIixtZWRpdW1EYXRlOlwibW1tIGQsIHl5eXlcIixsb25nRGF0ZTpcIm1tbW0gZCwgeXl5eVwiLGZ1bGxEYXRlOlwiZGRkZCwgbW1tbSBkLCB5eXl5XCIsc2hvcnRUaW1lOlwiaDpNTSBUVFwiLG1lZGl1bVRpbWU6XCJoOk1NOnNzIFRUXCIsbG9uZ1RpbWU6XCJoOk1NOnNzIFRUIFpcIixpc29EYXRlOlwieXl5eS1tbS1kZFwiLGlzb1RpbWU6XCJISDpNTTpzc1wiLGlzb0RhdGVUaW1lOlwieXl5eS1tbS1kZCdUJ0hIOk1NOnNzb1wiLGlzb1V0Y0RhdGVUaW1lOlwiVVRDOnl5eXktbW0tZGQnVCdISDpNTTpzcydaJ1wiLGV4cGlyZXNIZWFkZXJGb3JtYXQ6XCJkZGQsIGRkIG1tbSB5eXl5IEhIOk1NOnNzIFpcIn07ZXhwb3J0IHZhciBpMThuPXtkYXlOYW1lczpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIixcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLG1vbnRoTmFtZXM6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiLFwiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLHRpbWVOYW1lczpbXCJhXCIsXCJwXCIsXCJhbVwiLFwicG1cIixcIkFcIixcIlBcIixcIkFNXCIsXCJQTVwiXX07dmFyIHBhZD1mdW5jdGlvbiBwYWQodmFsKXt2YXIgbGVuPWFyZ3VtZW50cy5sZW5ndGg+MSYmYXJndW1lbnRzWzFdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1sxXToyO3JldHVybiBTdHJpbmcodmFsKS5wYWRTdGFydChsZW4sXCIwXCIpfTt2YXIgZ2V0RGF5TmFtZT1mdW5jdGlvbiBnZXREYXlOYW1lKF9yZWYpe3ZhciB5PV9yZWYueSxtPV9yZWYubSxkPV9yZWYuZCxfPV9yZWYuXyxkYXlOYW1lPV9yZWYuZGF5TmFtZSxfcmVmJHNob3J0PV9yZWZbXCJzaG9ydFwiXSxfc2hvcnQ9X3JlZiRzaG9ydD09PXZvaWQgMD9mYWxzZTpfcmVmJHNob3J0O3ZhciB0b2RheT1uZXcgRGF0ZTt2YXIgeWVzdGVyZGF5PW5ldyBEYXRlO3llc3RlcmRheS5zZXREYXRlKHllc3RlcmRheVtfK1wiRGF0ZVwiXSgpLTEpO3ZhciB0b21vcnJvdz1uZXcgRGF0ZTt0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93W18rXCJEYXRlXCJdKCkrMSk7dmFyIHRvZGF5X2Q9ZnVuY3Rpb24gdG9kYXlfZCgpe3JldHVybiB0b2RheVtfK1wiRGF0ZVwiXSgpfTt2YXIgdG9kYXlfbT1mdW5jdGlvbiB0b2RheV9tKCl7cmV0dXJuIHRvZGF5W18rXCJNb250aFwiXSgpfTt2YXIgdG9kYXlfeT1mdW5jdGlvbiB0b2RheV95KCl7cmV0dXJuIHRvZGF5W18rXCJGdWxsWWVhclwiXSgpfTt2YXIgeWVzdGVyZGF5X2Q9ZnVuY3Rpb24geWVzdGVyZGF5X2QoKXtyZXR1cm4geWVzdGVyZGF5W18rXCJEYXRlXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfbT1mdW5jdGlvbiB5ZXN0ZXJkYXlfbSgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIk1vbnRoXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfeT1mdW5jdGlvbiB5ZXN0ZXJkYXlfeSgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIkZ1bGxZZWFyXCJdKCl9O3ZhciB0b21vcnJvd19kPWZ1bmN0aW9uIHRvbW9ycm93X2QoKXtyZXR1cm4gdG9tb3Jyb3dbXytcIkRhdGVcIl0oKX07dmFyIHRvbW9ycm93X209ZnVuY3Rpb24gdG9tb3Jyb3dfbSgpe3JldHVybiB0b21vcnJvd1tfK1wiTW9udGhcIl0oKX07dmFyIHRvbW9ycm93X3k9ZnVuY3Rpb24gdG9tb3Jyb3dfeSgpe3JldHVybiB0b21vcnJvd1tfK1wiRnVsbFllYXJcIl0oKX07aWYodG9kYXlfeSgpPT09eSYmdG9kYXlfbSgpPT09bSYmdG9kYXlfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIlRkeVwiOlwiVG9kYXlcIn1lbHNlIGlmKHllc3RlcmRheV95KCk9PT15JiZ5ZXN0ZXJkYXlfbSgpPT09bSYmeWVzdGVyZGF5X2QoKT09PWQpe3JldHVybiBfc2hvcnQ/XCJZc2RcIjpcIlllc3RlcmRheVwifWVsc2UgaWYodG9tb3Jyb3dfeSgpPT09eSYmdG9tb3Jyb3dfbSgpPT09bSYmdG9tb3Jyb3dfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIlRtd1wiOlwiVG9tb3Jyb3dcIn1yZXR1cm4gZGF5TmFtZX07dmFyIGdldFdlZWs9ZnVuY3Rpb24gZ2V0V2VlayhkYXRlKXt2YXIgdGFyZ2V0VGh1cnNkYXk9bmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLGRhdGUuZ2V0TW9udGgoKSxkYXRlLmdldERhdGUoKSk7dGFyZ2V0VGh1cnNkYXkuc2V0RGF0ZSh0YXJnZXRUaHVyc2RheS5nZXREYXRlKCktKHRhcmdldFRodXJzZGF5LmdldERheSgpKzYpJTcrMyk7dmFyIGZpcnN0VGh1cnNkYXk9bmV3IERhdGUodGFyZ2V0VGh1cnNkYXkuZ2V0RnVsbFllYXIoKSwwLDQpO2ZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdFRodXJzZGF5LmdldERhdGUoKS0oZmlyc3RUaHVyc2RheS5nZXREYXkoKSs2KSU3KzMpO3ZhciBkcz10YXJnZXRUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpLWZpcnN0VGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKTt0YXJnZXRUaHVyc2RheS5zZXRIb3Vycyh0YXJnZXRUaHVyc2RheS5nZXRIb3VycygpLWRzKTt2YXIgd2Vla0RpZmY9KHRhcmdldFRodXJzZGF5LWZpcnN0VGh1cnNkYXkpLyg4NjRlNSo3KTtyZXR1cm4gMStNYXRoLmZsb29yKHdlZWtEaWZmKX07dmFyIGdldERheU9mV2Vlaz1mdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSl7dmFyIGRvdz1kYXRlLmdldERheSgpO2lmKGRvdz09PTApe2Rvdz03fXJldHVybiBkb3d9O2V4cG9ydCB2YXIgZm9ybWF0VGltZXpvbmU9ZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUoZGF0ZSl7cmV0dXJuKFN0cmluZyhkYXRlKS5tYXRjaCh0aW1lem9uZSl8fFtcIlwiXSkucG9wKCkucmVwbGFjZSh0aW1lem9uZUNsaXAsXCJcIikucmVwbGFjZSgvR01UXFwrMDAwMC9nLFwiVVRDXCIpfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9tb2R1bGVzL25vdGUuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9tb2R1bGVzL3RvZG9MaXN0LmpzJztcbmltcG9ydCBOb3RlTGlzdCBmcm9tICcuL21vZHVsZXMvbm90ZUxpc3QuanMnO1xuaW1wb3J0IHt3cml0ZUlkLCBwb3B1bGF0ZVN0b3JhZ2V9IGZyb20gJy4vbW9kdWxlcy9oZWxwZXJzLmpzJztcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUkuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cblxuXG4vLyBURVNUSU5HIC0gRk9SIExBVEVSIFJFTU9WQUxcblxuY29uc29sZS5sb2coXCJ0ZXN0aW5nXCIpO1xuXG5sZXQgdGVzdFRhc2sgPSBuZXcgVGFzaygnd2FsayBkb2cnLCAnRGVjZW1iZXIgOCAyMDIxJywgJ2xvdycpO1xubGV0IHRlc3ROb3RlID0gbmV3IE5vdGUoJ2dyb2NlcmllcycsICdhdm9jYWRvLCBtYW5nbywgbWlsaywgcmljZScpO1xubGV0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoJ3NlbGwgaG91c2UnKTtcblxuLy9VSS50ZXN0Qm9keSgpXG5cbi8qXG5cbnRlc3RQcm9qZWN0LnRhc2tzLnB1c2godGVzdFRhc2spO1xuTm90ZUxpc3QuYWRkKHRlc3ROb3RlKTtcblRvZG9MaXN0LmFkZFByb2plY3QodGVzdFByb2plY3QpO1xuTm90ZUxpc3QuYWRkKG5ldyBOb3RlKCdtZSBtb3cnLCBcImhlJ3MgdmVyeSBzbWFsbCBidXQgYmlnIGV2aWxcIikpO1xuTm90ZUxpc3QuYWRkKG5ldyBOb3RlKCdtb3ZpZXMnLCAnRGVhdGggb2YgU3RhbGluLCBJbnRlcnN0ZWxsYXIsIEFsaWVuJykpXG5cbiovXG5cbi8vIElOSVRJQVRFIExPQ0FMIFNUT1JBR0VcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKXtcbiAgICBjb25zb2xlLmxvZyhcImxvY2FsIHN0b3JhZ2UgZW1wdHlcIik7XG4gICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIFRvZG9MaXN0LnByb2plY3RzKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoJ25vdGVMaXN0JywgTm90ZUxpc3Qubm90ZXMpO1xufVxuXG5lbHNle1xuICAgIFRvZG9MaXN0LnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSk7XG4gICAgTm90ZUxpc3Qubm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlTGlzdCcpKTtcbn1cblxuVUkubG9hZFVJKCk7XG5cbi8vIE1BUFBJTkcgV0lORE9XIFZBUlMgVE8gU0NSSVBUIFZBUlNcblxud2luZG93LlRvZG9MaXN0ID0gVG9kb0xpc3RcbndpbmRvdy50ZXN0VGFzayA9IHRlc3RUYXNrXG53aW5kb3cudGVzdE5vdGUgPSB0ZXN0Tm90ZVxud2luZG93LndyaXRlSWQgPSB3cml0ZUlkXG53aW5kb3cuTm90ZUxpc3QgPSBOb3RlTGlzdFxud2luZG93LlByb2plY3QgPSBQcm9qZWN0XG53aW5kb3cuVGFzayA9IFRhc2tcbndpbmRvdy5Ob3RlID0gTm90ZVxud2luZG93LnBvcHVsYXRlU3RvcmFnZSA9IHBvcHVsYXRlU3RvcmFnZVxud2luZG93LlVJID0gVUkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=