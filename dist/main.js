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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n    background-color: hsl(0, 0%, 90%);\n    display: relative;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\nul > li:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\nul > li:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: hsl(0, 0%, 95%);\n    box-sizing: border-box;\n}\n \n.listContainer { \n    min-height: 100vh;\n    width: 80%;\n    min-width: 400px;\n    padding: 12px;\n    position: absolute;\n    right: 0;\n    box-sizing: border-box;\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    display: grid;\n    grid-template-columns: 50px 3fr 1fr 1fr 100px;\n    height: 2em;\n}\n\n.taskForm {\n    overflow-y:visible;\n}\n\n.taskForm input {\n    margin: 4px 8px;\n}\n.task input[type=text] {\n    height: 1.6em;\n}\n\n.task input[type=date] {\n    height: 1.6em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n    float: right;\n}\n\n.prioritySelector {\n    display: grid;\n    grid-template-columns: auto auto;\n}\n\n.project {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    position: relative;\n    padding: 6px 6px 32px 6px;\n}\n\n.note .buttonContainer {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-color: hsl(0, 0%, 90%);\n    padding: 2px;\n    z-index: 2;\n}\n\n.noteTitle {\n    width: 80%;\n    height: 60px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 12px;\n}\n\n.pin {\n    float: right;\n    width: 15%;\n}\n\n.noteContent {\n    clear: both;\n}\n\n.note::after {\n    content: '';\n    width: 100%;\n    height: 20%;\n    display: inline-block;\n    background: linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 95%, 0.8) 50%, hsl(0, 0%, 95%) 100%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.unrolled .noteContent {\n    \n}\n\n.unrolled::after{\n    display: none;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned::before {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n    background-color: hsl(0, 0%, 90%);\n    display: relative;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\nul > li:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\nul > li:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: hsl(0, 0%, 95%);\n    box-sizing: border-box;\n}\n \n.listContainer { \n    min-height: 100vh;\n    width: 80%;\n    min-width: 400px;\n    padding: 12px;\n    position: absolute;\n    right: 0;\n    box-sizing: border-box;\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    display: grid;\n    grid-template-columns: 50px 3fr 1fr 1fr 100px;\n    height: 2em;\n}\n\n.taskForm {\n    overflow-y:visible;\n}\n\n.taskForm input {\n    margin: 4px 8px;\n}\n.task input[type=text] {\n    height: 1.6em;\n}\n\n.task input[type=date] {\n    height: 1.6em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n    float: right;\n}\n\n.prioritySelector {\n    display: grid;\n    grid-template-columns: auto auto;\n}\n\n.project {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    position: relative;\n    padding: 6px 6px 32px 6px;\n}\n\n.note .buttonContainer {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-color: hsl(0, 0%, 90%);\n    padding: 2px;\n    z-index: 2;\n}\n\n.noteTitle {\n    width: 80%;\n    height: 60px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 12px;\n}\n\n.pin {\n    float: right;\n    width: 15%;\n}\n\n.noteContent {\n    clear: both;\n}\n\n.note::after {\n    content: '';\n    width: 100%;\n    height: 20%;\n    display: inline-block;\n    background: linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 95%, 0.8) 50%, hsl(0, 0%, 95%) 100%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.unrolled .noteContent {\n    \n}\n\n.unrolled::after{\n    display: none;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned::before {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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

        const taskList = document.createElement('ul')
            taskList.classList.add('taskList');

        const priorityEl = document.createElement('div');
            priorityEl.innerHTML = 'Priority';
            priorityEl.classList.add('priority');

            priorityEl.onclick = () => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].prioritySort(project);
                this.loadProject(project);
            }
        
        const dateEl = document.createElement('div');
            dateEl.innerHTML = 'Due Date'
            dateEl.classList.add('date');

            dateEl.onclick = () => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].dateSort(project);
                this.loadProject(project);
            }

        const gridFiller = document.createElement('div');

        const listHeader = document.createElement('li');
            listHeader.classList.add('task')

        listHeader.append(gridFiller, gridFiller.cloneNode(), dateEl, priorityEl, gridFiller.cloneNode(), gridFiller.cloneNode());

        taskList.append(listHeader);
        

        for (const task of project.tasks) {
            
            taskList.append(this.loadTask(task));
        }

        const newTaskButton = document.createElement('button');
            newTaskButton.innerHTML = '+'
            newTaskButton.onclick = () => {taskList.append(this.loadTaskForm(project))};

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

        const taskEl = document.createElement('li');
            taskEl.classList.add('task');

        if (task.complete) {
            taskEl.classList.add('complete')
        }

        const checkContainer = document.createElement('div');

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

        const titleEl = document.createElement('div');
            titleEl.innerHTML = task.title;
            titleEl.classList.add('title')

        const dateEl = document.createElement('div');
            dateEl.innerHTML = task.dueDate;
            dateEl.classList.add('date')
        
        const priorityEl = document.createElement('div')
            priorityEl.innerHTML = task.priority;
            priorityEl.classList.add('priority')

        const editContainer = document.createElement('div')
        
        const editEl = document.createElement('button');
            editEl.innerHTML = '✎';
            editEl.onclick = () => {

                const liContainer = document.createElement('li');
                liContainer.append(this.loadTaskForm(this.currentProject, task))
                taskEl.parentNode.replaceChild(liContainer, taskEl);
                
            }

        editContainer.append(editEl);

        const delContainer = document.createElement('div');

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
            taskForm.classList.add('taskForm', 'task');
        }

        const checkEl = document.createElement('img')

        const titleInput = document.createElement('input')
            titleInput.setAttribute('type', 'text');
            titleInput.setAttribute('placeholder', 'Title');
            titleInput.setAttribute('required', true);

        const dateInput = document.createElement('input');
            dateInput.setAttribute('type', 'date');
            dateInput.setAttribute('name', 'dueDate');

            if (task) {
                titleInput.value = task.title;
                dateInput.value = task.dueDate;
            }
    
        // Iterative creation of radio button selectors for priority. Defaults to medium, or preexisting task value.

        const prioritySelector = document.createElement('div');
            prioritySelector.classList.add('prioritySelector')
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

        const buttonContainer = document.createElement('div');
            buttonContainer.append(submitButton, cancelButton);

        taskForm.append(
            checkEl,
            titleInput, 
            dateInput,
            prioritySelector, 
            buttonContainer
            );

        submitButton.onclick = () => {
            
            let newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](titleInput.value, dateInput.value, document.querySelector('input[name="priority"]:checked').value);


            if (!titleInput.value) {
                return
            }

            if(!dateInput.value) {
                return
            }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksZ0NBQWdDLGtCQUFrQixvQkFBb0Is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OztBQ05xQztBQUNNO0FBQ1A7QUFDUztBQUNBO0FBQ2lCO0FBQzdCOztBQUVYOzs7O0FBSXRCOztBQUVBOztBQUVBLG1CQUFtQix3REFBSTtBQUN2QixtQkFBbUIsd0RBQUk7QUFDdkIsc0JBQXNCLDJEQUFPOztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9FQUFlLGFBQWEscUVBQWlCO0FBQ2pELElBQUksb0VBQWUsYUFBYSxrRUFBYztBQUM5Qzs7QUFFQTtBQUNBLElBQUkscUVBQWlCO0FBQ3JCLElBQUksa0VBQWM7QUFDbEI7O0FBRUEsNkRBQVM7O0FBRVQ7O0FBRUEsa0JBQWtCLDREQUFRO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQU87QUFDeEIsa0JBQWtCLDREQUFRO0FBQzFCLGlCQUFpQiwyREFBTztBQUN4QixjQUFjLHdEQUFJO0FBQ2xCLGNBQWMsd0RBQUk7QUFDbEIseUJBQXlCLGdFQUFlO0FBQ3hDLFlBQVksc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL25vdGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvbm90ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXRlZm9ybWF0L2xpYi9kYXRlZm9ybWF0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG4gICAgZGlzcGxheTogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGhlaWdodDogMS44ZW07XFxuICAgIHdpZHRoOiAxLjhlbTtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgXFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxudWwgPiBsaTpudGgtb2YtdHlwZShvZGQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbn1cXG5cXG51bCA+IGxpOm50aC1vZi10eXBlKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxubGkgKiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5zaWRlYmFyIHsgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4gXFxuLmxpc3RDb250YWluZXIgeyBcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50YWIge1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xcbn1cXG5cXG4udGFiICoge1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi50YWI6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4udGFiOmhvdmVyLCAudGFiLnNlbGVjdGVkIHtcXG4gICAgaGVpZ2h0OiA5NnB4O1xcbn1cXG5cXG4udGFiIGgzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnByb2plY3RMaXN0IGxpIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgYXV0byBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdExpc3Q6aG92ZXIge1xcbn1cXG5cXG4udGFza0xpc3Qge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDNmciAxZnIgMWZyIDEwMHB4O1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLnRhc2tGb3JtIHtcXG4gICAgb3ZlcmZsb3cteTp2aXNpYmxlO1xcbn1cXG5cXG4udGFza0Zvcm0gaW5wdXQge1xcbiAgICBtYXJnaW46IDRweCA4cHg7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBoZWlnaHQ6IDEuNmVtO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgaGVpZ2h0OiAxLjZlbTtcXG59XFxuXFxuLnRhc2suY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6aHNsKDAsIDAlLCAzMCUpXFxufVxcblxcbi50YXNrIC5kYXRlLCAudGFzayAucHJpb3JpdHkge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhc2sgYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4ucHJpb3JpdHlTZWxlY3RvciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuXFxufVxcblxcbi5ub3RlQ29udGFpbmVyIHtcXG5cXG59XFxuXFxuLm5vdGVTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgOTUlKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNnB4IDZweCAzMnB4IDZweDtcXG59XFxuXFxuLm5vdGUgLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5ub3RlVGl0bGUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ucGluIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG5cXG4ubm90ZUNvbnRlbnQge1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLm5vdGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsYSgwLCAwJSwgMCUsIDApIDAlLCBoc2xhKDAsIDAlLCA5NSUsIDAuOCkgNTAlLCBoc2woMCwgMCUsIDk1JSkgMTAwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4udW5yb2xsZWQge1xcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4udW5yb2xsZWQgLm5vdGVDb250ZW50IHtcXG4gICAgXFxufVxcblxcbi51bnJvbGxlZDo6YWZ0ZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ub3RlQ29udGFpbmVyIC5hZGRCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5waW5uZWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5mb2N1c2VkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnVuZm9jdXNlZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAyMCUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUJBQXFCO0lB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XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBoZWlnaHQ6IDEuOGVtO1xcbiAgICB3aWR0aDogMS44ZW07XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIFxcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsID4gbGk6bnRoLW9mLXR5cGUob2RkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTUlKTtcXG59XFxuXFxudWwgPiBsaTpudGgtb2YtdHlwZShldmVuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbmxpICoge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDJweDtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4uc2lkZWJhciB7ICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTUlKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuIFxcbi5saXN0Q29udGFpbmVyIHsgXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4udGFiIHtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcXG59XFxuXFxuLnRhYiAqIHtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4udGFiOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnRhYjpob3ZlciwgLnRhYi5zZWxlY3RlZCB7XFxuICAgIGhlaWdodDogOTZweDtcXG59XFxuXFxuLnRhYiBoMyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCBsaSB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIGF1dG8gYXV0bztcXG59XFxuXFxuLnByb2plY3RMaXN0OmhvdmVyIHtcXG59XFxuXFxuLnRhc2tMaXN0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAzZnIgMWZyIDFmciAxMDBweDtcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi50YXNrRm9ybSB7XFxuICAgIG92ZXJmbG93LXk6dmlzaWJsZTtcXG59XFxuXFxuLnRhc2tGb3JtIGlucHV0IHtcXG4gICAgbWFyZ2luOiA0cHggOHB4O1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgaGVpZ2h0OiAxLjZlbTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIGhlaWdodDogMS42ZW07XFxufVxcblxcbi50YXNrLmNvbXBsZXRlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOmhzbCgwLCAwJSwgMzAlKVxcbn1cXG5cXG4udGFzayAuZGF0ZSwgLnRhc2sgLnByaW9yaXR5IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YXNrIGJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLnByaW9yaXR5U2VsZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuXFxuLnByb2plY3Qge1xcblxcbn1cXG5cXG4ubm90ZUNvbnRhaW5lciB7XFxuXFxufVxcblxcbi5ub3RlU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ub3RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDk1JSk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDZweCA2cHggMzJweCA2cHg7XFxufVxcblxcbi5ub3RlIC5idXR0b25Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubm90ZVRpdGxlIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLnBpbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDE1JTtcXG59XFxuXFxuLm5vdGVDb250ZW50IHtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5ub3RlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbGEoMCwgMCUsIDAlLCAwKSAwJSwgaHNsYSgwLCAwJSwgOTUlLCAwLjgpIDUwJSwgaHNsKDAsIDAlLCA5NSUpIDEwMCUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnVucm9sbGVkIHtcXG4gICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcXG59XFxuXFxuLnVucm9sbGVkIC5ub3RlQ29udGVudCB7XFxuICAgIFxcbn1cXG5cXG4udW5yb2xsZWQ6OmFmdGVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubm90ZUNvbnRhaW5lciAuYWRkQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ucGlubmVkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uZm9jdXNlZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi51bmZvY3VzZWQ6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMjAlKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9ub3RlLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnO1xuaW1wb3J0IE5vdGVMaXN0IGZyb20gJy4vbm90ZUxpc3QuanMnO1xuaW1wb3J0IHtwb3B1bGF0ZVN0b3JhZ2V9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgdG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5pbXBvcnQgZGF0ZUZvcm1hdCwgeyBtYXNrcyB9IGZyb20gXCJkYXRlZm9ybWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcblxuICAgIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9IHRvZG9MaXN0LnByb2plY3RzWzBdO1xuICAgIHN0YXRpYyBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgICAvLyBJbml0aWFsIExvYWRvdXRcblxuICAgIHN0YXRpYyBsb2FkVUkgKCkge1xuICAgICAgICB0aGlzLmJvZHkuYXBwZW5kKHRoaXMubG9hZFNpZGViYXIoKSwgdGhpcy5sb2FkQ29udGFpbmVyKCdwcm9qZWN0JywgVG9kb0xpc3QucHJvamVjdHNbMF0pKTtcbiAgICB9XG5cblxuICAgIC8vIE5hdmlnYXRpb24gYmFyIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBwcm9qZWN0cyBhbmQgbm90ZXNcblxuICAgIHN0YXRpYyBsb2FkU2lkZWJhcigpIHtcbiAgICAgICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG5cbiAgICAgICAgaWYgKCFzaWRlYmFyKSB7XG4gICAgICAgICAgICBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2lkZWJhci5pbm5lckhUTUwgPSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90ZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5vdGVUYWJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpOyAgICBcbiAgICAgICAgICAgIG5vdGVUYWJIZWFkZXIuaW5uZXJIVE1MID0gXCJOb3Rlc1wiXG5cbiAgICAgICAgbm90ZVRhYi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdub3RlJywgTm90ZUxpc3Qubm90ZXMpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBub3RlVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgbm90ZVRhYi5hcHBlbmQobm90ZVRhYkhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGFiSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWJIZWFkZXIuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgICAgIHByb2plY3RUYWIuYXBwZW5kKHByb2plY3RUYWJIZWFkZXIpOyBcblxuICAgICAgICBwcm9qZWN0VGFiLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCBUb2RvTGlzdC5wcm9qZWN0c1swXSlcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgbm90ZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcsICdoaWRkZW4nKTtcblxuICAgICAgICAvLyBMaXN0IHByb2plY3QgbmFtZXMgZm9yIHZpZXcgc2VsZWN0aW9uXG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIFRvZG9MaXN0LnByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZWRpdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZWRpdEVsLmlubmVySFRNTCA9ICfinI4nO1xuICAgICAgICAgICAgICAgIGVkaXRFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RWwucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodGhpcy5sb2FkUHJvamVjdEZvcm0ocHJvamVjdCksIHByb2plY3RFbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbEVsLiBpbm5lckhUTUwgPSAneCdcbiAgICAgICAgICAgICAgICBkZWxFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUb2RvTGlzdC5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTaWRlYmFyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9qZWN0RWwuYXBwZW5kKHByb2plY3RUaXRsZSwgZWRpdEVsLCBkZWxFbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0RWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7cHJvamVjdExpc3QuYXBwZW5kKHRoaXMubG9hZFByb2plY3RGb3JtKCkpO31cbiAgICAgICAgICAgIFxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbik7ICAgIFxuXG4gICAgICAgIHNpZGViYXIuYXBwZW5kKG5vdGVUYWIsIHByb2plY3RUYWIsIHByb2plY3RMaXN0KTtcblxuICAgICAgICByZXR1cm4gc2lkZWJhclxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkQ29udGFpbmVyKHR5cGUsIGxpc3QpIHtcblxuICAgICAgICAvLyBMb2FkIGdlbmVyaWMgY29udGFpbmVyIGZvciBwcm9qZWN0cyBvciBsaXN0cywgbG9hZCBpbiBjb250ZW50IGJhc2VkIG9uIGFyZ3VtZW50c1xuXG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKTtcblxuICAgICAgICBpZiAoIWxpc3RDb250YWluZXIpIHtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkUHJvamVjdChsaXN0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWRQcm9qZWN0KGxpc3QpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgICAgICAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkTm90ZUxpc3QoTm90ZUxpc3Qubm90ZXMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RDb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFByb2plY3QgKHByb2plY3QpIHtcblxuICAgICAgICAvLyBMb2FkIHByb2plY3QgY29udGFpbmVyIHdpdGggZWRpdGluZywgZGVsZXRpbmcsIHNvcnRpbmcgZnVuY3Rpb25hbGl0eVxuXG4gICAgICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSB0aGlzLmN1cnJlbnRQcm9qZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250YWluZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICAgICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFza0xpc3QnKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eUVsLmlubmVySFRNTCA9ICdQcmlvcml0eSc7XG4gICAgICAgICAgICBwcmlvcml0eUVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIHByaW9yaXR5RWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC5wcmlvcml0eVNvcnQocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGF0ZUVsLmlubmVySFRNTCA9ICdEdWUgRGF0ZSdcbiAgICAgICAgICAgIGRhdGVFbC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG5cbiAgICAgICAgICAgIGRhdGVFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LmRhdGVTb3J0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZEZpbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGlzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrJylcblxuICAgICAgICBsaXN0SGVhZGVyLmFwcGVuZChncmlkRmlsbGVyLCBncmlkRmlsbGVyLmNsb25lTm9kZSgpLCBkYXRlRWwsIHByaW9yaXR5RWwsIGdyaWRGaWxsZXIuY2xvbmVOb2RlKCksIGdyaWRGaWxsZXIuY2xvbmVOb2RlKCkpO1xuXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZChsaXN0SGVhZGVyKTtcbiAgICAgICAgXG5cbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRoaXMubG9hZFRhc2sodGFzaykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmV3VGFza0J1dHRvbi5pbm5lckhUTUwgPSAnKydcbiAgICAgICAgICAgIG5ld1Rhc2tCdXR0b24ub25jbGljayA9ICgpID0+IHt0YXNrTGlzdC5hcHBlbmQodGhpcy5sb2FkVGFza0Zvcm0ocHJvamVjdCkpfTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0SGVhZGVyLCB0YXNrTGlzdCwgbmV3VGFza0J1dHRvbik7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RDb250YWluZXJcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGxvYWROb3RlTGlzdCgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWQgY29udGFpbmVyIGZvciBub3Rlcywgd2l0aCBzZXBlcmF0aW9uIGJldHdlZW4gcGlubmVkL3VucGlubmVkIG5vdGVzLCBhbmQgbmV3IHRhc2sgYnV0dG9uXG5cbiAgICAgICAgbGV0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZUNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmKCFub3RlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGVDb250YWluZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm90ZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBpbm5lZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGlubmVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcsICdub3RlU2VjdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IHVucGlubmVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1bnBpbm5lZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd1bnBpbm5lZCcsICdub3RlU2VjdGlvbicpO1xuXG4gICAgICAgIGZvciAobGV0IG5vdGUgb2YgTm90ZUxpc3Qubm90ZXMpIHtcbiAgICAgICAgICAgIG5vdGUucGlubmVkID8gcGlubmVkQ29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWROb3RlKG5vdGUpKSA6IHVucGlubmVkQ29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWROb3RlKG5vdGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5ld05vdGVCdXR0b24uaW5uZXJIVE1MID0gJysnXG4gICAgICAgICAgICBuZXdOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ1dHRvbicpO1xuICAgICAgICAgICAgbmV3Tm90ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZE5vdGVGb3JtKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kKHBpbm5lZENvbnRhaW5lciwgdW5waW5uZWRDb250YWluZXIsIG5ld05vdGVCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBub3RlQ29udGFpbmVyXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWROb3RlIChub3RlKSB7XG5cbiAgICAgICAgLy8gTG9hZCBpbmRpdmlkdWFsIG5vdGUgd2l0aCBlZGl0aW5nIGZ1bmN0aW9uYWxpdHlcblxuICAgICAgICBjb25zdCBub3RlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBub3RlVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVUaXRsZVwiKTtcbiAgICAgICAgICAgIG5vdGVUaXRsZS5pbm5lckhUTUwgPSBub3RlLnRpdGxlO1xuXG4gICAgICAgICAgICBjb25zdCBwaW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBpbkVsLmNsYXNzTGlzdC5hZGQoJ3BpbicpXG4gICAgICAgICAgICAgICAgbm90ZS5waW5uZWQgPyBwaW5FbC5pbm5lckhUTUwgPSAndW5waW4nIDogcGluRWwuaW5uZXJIVE1MID0gJ3BpbidcbiAgICAgICAgICAgICAgICBwaW5FbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOb3RlTGlzdC50b2dnbGVQaW4obm90ZSk7XG4gICAgICAgICAgICAgICAgICAgIE5vdGVMaXN0LnBpblNvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTm90ZUxpc3QoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIG5vdGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ25vdGVDb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgbm90ZUNvbnRlbnQuaW5uZXJIVE1MID0gbm90ZS5jb250ZW50O1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGVkaXRFbC5pbm5lckhUTUwgPSAn4pyOJztcbiAgICAgICAgICAgICAgICBlZGl0RWwuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICAgICAgICAgIGVkaXRFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub3RlRWwucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodGhpcy5sb2FkTm90ZUZvcm0obm90ZSksIG5vdGVFbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbEVsLiBpbm5lckhUTUwgPSAneCdcbiAgICAgICAgICAgICAgICBkZWxFbC5jbGFzc0xpc3QuYWRkKCdkZWwnKTtcbiAgICAgICAgICAgICAgICBkZWxFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOb3RlTGlzdC5yZW1vdmUobm90ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE5vdGVMaXN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZWRpdEVsLCBkZWxFbCk7XG5cbiAgICAgICAgbm90ZUVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5vdGVFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Vucm9sbGVkJykpIHtcbiAgICAgICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGUnKSwgKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Vucm9sbGVkJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgndW5yb2xsZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Vucm9sbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBub3RlRWwuYXBwZW5kKG5vdGVUaXRsZSwgcGluRWwsIG5vdGVDb250ZW50LCBidXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBub3RlRWxcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFRhc2sgKHRhc2spIHtcblxuICAgICAgICAvLyBMb2FkIGluZGl2aWR1YWwgdGFzaywgd2l0aCBlZGl0aW5nIGZ1bmN0aW9uYWxpdHlcblxuICAgICAgICBjb25zdCB0YXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGNoZWNrRWwuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja0VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgY2hlY2tFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LnRvZ2dsZUNvbXBsZXRpb24odGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0VsLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY2hlY2tDb250YWluZXIuYXBwZW5kKGNoZWNrRWwpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlRWwuaW5uZXJIVE1MID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgIHRpdGxlRWwuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuXG4gICAgICAgIGNvbnN0IGRhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGF0ZUVsLmlubmVySFRNTCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIGRhdGVFbC5jbGFzc0xpc3QuYWRkKCdkYXRlJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgcHJpb3JpdHlFbC5pbm5lckhUTUwgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICAgICAgcHJpb3JpdHlFbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpXG5cbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBlZGl0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRFbC5pbm5lckhUTUwgPSAn4pyOJztcbiAgICAgICAgICAgIGVkaXRFbC5vbmNsaWNrID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGxpQ29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWRUYXNrRm9ybSh0aGlzLmN1cnJlbnRQcm9qZWN0LCB0YXNrKSlcbiAgICAgICAgICAgICAgICB0YXNrRWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobGlDb250YWluZXIsIHRhc2tFbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZWRpdENvbnRhaW5lci5hcHBlbmQoZWRpdEVsKTtcblxuICAgICAgICBjb25zdCBkZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBkZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsRWwuIGlubmVySFRNTCA9ICd4J1xuICAgICAgICAgICAgZGVsRWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIHRoaXMuY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGVkaXRDb250YWluZXIuYXBwZW5kKGRlbEVsKTtcblxuICAgICAgICB0YXNrRWwuYXBwZW5kKGNoZWNrQ29udGFpbmVyLCB0aXRsZUVsLCBkYXRlRWwsIHByaW9yaXR5RWwsIGVkaXRDb250YWluZXIsIGRlbENvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tFbFxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVGFza0Zvcm0gKHByb2plY3QsIHRhc2spIHtcblxuICAgICAgICAvLyBMb2FkIGZvcm0gZm9yIG5ldyB0YXNrcy5cbiAgICAgICAgLy8gQ2FuIGJlIHVzZWQgZm9yIGVkaXRpbmcgb3IgY3JlYXRpb24gZnJvbSBzY3JhdGNoLiBDaGVja3MgZm9yIGV4aXNpdG5nIHRhc2sgYXJndW1lbnQgdG8gZGV0ZXJtaW5lIG91dHB1dC5cblxuICAgICAgICBsZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0Zvcm0nKTtcblxuICAgICAgICBpZiAodGFza0Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrRm9ybVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJyk7XG4gICAgICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybScsICd0YXNrJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcblxuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIEl0ZXJhdGl2ZSBjcmVhdGlvbiBvZiByYWRpbyBidXR0b24gc2VsZWN0b3JzIGZvciBwcmlvcml0eS4gRGVmYXVsdHMgdG8gbWVkaXVtLCBvciBwcmVleGlzdGluZyB0YXNrIHZhbHVlLlxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlTZWxlY3RvcicpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5VmFscyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHByaW9yaXR5VmFscy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcmlvcml0eVZhbHNbaV0pO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBwcmlvcml0eVZhbHNbaV1cblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlPcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlPcHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICBwcmlvcml0eU9wdC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICAgICAgICAgIHByaW9yaXR5T3B0LnZhbHVlID0gcHJpb3JpdHlWYWxzW2ldXG4gICAgICAgICAgICBpZiAodGFzayAmJiB0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IHByaW9yaXR5VmFsc1tpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlPcHQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAoIXRhc2sgJiYgaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5T3B0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmlvcml0eVNlbGVjdG9yLmFwcGVuZChwcmlvcml0eU9wdCwgcHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAn4pyTJztcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrRm9ybS5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh0aGlzLmxvYWRUYXNrKHRhc2spLCB0YXNrRm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUVsZW1lbnQodGFza0Zvcm0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZChcbiAgICAgICAgICAgIGNoZWNrRWwsXG4gICAgICAgICAgICB0aXRsZUlucHV0LCBcbiAgICAgICAgICAgIGRhdGVJbnB1dCxcbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0b3IsIFxuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZSk7XG5cblxuICAgICAgICAgICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFkYXRlSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrLmlkID0gdGFzay5pZDtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC5yZXBsYWNlVGFzayhuZXdUYXNrLCB0YXNrLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LmFkZFRhc2socHJvamVjdCwgbmV3VGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCBwcm9qZWN0KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGFza0Zvcm1cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFByb2plY3RGb3JtKHByb2plY3QpIHtcblxuICAgICAgICAvLyBMb2FkIGZvcm0gZm9yIG5ldyBwcm9qZWN0LlxuICAgICAgICAvLyBDYW4gYmUgdXNlZCBmb3IgZWRpdGluZyBvciBjcmVhdGlvbiBmcm9tIHNjcmF0Y2guIENoZWNrcyBmb3IgZXhpc2l0bmcgcHJvamVjdCBhcmd1bWVudCB0byBkZXRlcm1pbmUgb3V0cHV0LlxuXG4gICAgICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0Rm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RGb3JtXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdyZXR1cm4gZmFsc2UnKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAn4pyTJztcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHt0aGlzLmRlbGV0ZUVsZW1lbnQocHJvamVjdEZvcm0pfTtcblxuICAgICAgICBpZiAocHJvamVjdCl7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgcHJvamVjdEZvcm0ub25zdWJtaXQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5pZCA9IHByb2plY3QuaWQ7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QucmVwbGFjZVByb2plY3QobmV3UHJvamVjdCwgcHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIG5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9qZWN0Rm9ybVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkTm90ZUZvcm0gKG5vdGUpIHtcblxuICAgICAgICAvLyBMb2FkIGZvcm0gZm9yIG5ldyBub3RlLlxuICAgICAgICAvLyBDYW4gYmUgdXNlZCBmb3IgZWRpdGluZyBvciBjcmVhdGlvbiBmcm9tIHNjcmF0Y2guIENoZWNrcyBmb3IgZXhpc2l0bmcgbm90ZSBhcmd1bWVudCB0byBkZXRlcm1pbmUgb3V0cHV0LlxuXG4gICAgICAgIGxldCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlRm9ybScpO1xuXG4gICAgICAgIGlmIChub3RlRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vdGVGb3JtXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgbm90ZUZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdyZXR1cm4gZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgICAgICBjb25zdCBjb250ZW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgY29udGVudElucHV0LnNldEF0dHJpYnV0ZSgncm93cycsICc4Jyk7XG4gICAgICAgICAgICBjb250ZW50SW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMyJyk7ICBcblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAn4pyTJztcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSAneCc7XG5cbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbm90ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUVsZW1lbnQobm90ZUZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZiAobm90ZSkge1xuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IG5vdGUudGl0bGU7XG4gICAgICAgICAgICBjb250ZW50SW5wdXQudmFsdWUgPSBub3RlLmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG5vdGVGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBjb250ZW50SW5wdXQsIHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBub3RlRm9ybS5vbnN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdOb3RlID0gbmV3IE5vdGUgKHRpdGxlSW5wdXQudmFsdWUsIGNvbnRlbnRJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChub3RlKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm90ZS5pZCA9IG5vdGUuaWQ7XG4gICAgICAgICAgICAgICAgbmV3Tm90ZS5waW5uZWQgPSBub3RlLnBpbm5lZDtcblxuICAgICAgICAgICAgICAgIE5vdGVMaXN0LnJlcGxhY2UobmV3Tm90ZSwgbm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE5vdGVMaXN0LmFkZChuZXdOb3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdub3RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm90ZUZvcm1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWRpdE5vdGUgKG5vdGUpIHtcblxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZGVsZXRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG59IiwiZnVuY3Rpb24gd3JpdGVJZCAoY3VycmVudElkcykge1xuXG4gICAgbGV0IG5ld0lkID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMioqMzIpKTtcblxuXG4gICAgd2hpbGUgKGN1cnJlbnRJZHMuaW5jbHVkZXMobmV3SWQpKSB7XG4gICAgICAgIG5ld0lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIqKjMyKSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXdJZDtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKGtleSwgdmFsdWUpe1xuICAgIGNvbnNvbGUubG9nKFwicG9wdWxhdGluZy4uLlwiKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuZXhwb3J0IHtcbiAgICB3cml0ZUlkLFxuICAgIHBvcHVsYXRlU3RvcmFnZVxufTsiLCJpbXBvcnQgTm90ZUxpc3QgZnJvbSAnLi9ub3RlTGlzdC5qcyc7XG5pbXBvcnQge3dyaXRlSWR9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGUge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLmlkID0gd3JpdGVJZChOb3RlTGlzdC5nZXRJZHMoKSk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5kYXRlID0gRGF0ZSgpO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnO1xuaW1wb3J0IHtwb3B1bGF0ZVN0b3JhZ2V9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNsYXNzIE5vdGVMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub3RlcyA9IFtdXG4gICAgfVxuXG4gICAgYWRkKG5vdGUpIHtcbiAgICAgICAgdGhpcy5ub3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ25vdGVMaXN0JywgdGhpcy5ub3Rlcyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKG5vdGUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMubm90ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChub3RlLmlkID09PSB0aGlzLm5vdGVzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVwbGFjZSAobmV3Tm90ZSwgb2xkTm90ZSkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5ub3Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG9sZE5vdGUuaWQgPT09IHRoaXMubm90ZXNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGVzW2ldID0gbmV3Tm90ZTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ25vdGVMaXN0JywgdGhpcy5ub3Rlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMubm90ZXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBnZXRJZHMoKSB7XG4gICAgICAgIGxldCBpZHMgPSBbXVxuXG4gICAgICAgIGZvciAoY29uc3Qgbm90ZSBvZiB0aGlzLm5vdGVzKSB7XG4gICAgICAgICAgICBpZHMucHVzaChub3RlLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG5cbiAgICB0b2dnbGVQaW4obm90ZSkge1xuICAgICAgICBub3RlLnBpbm5lZCA9ICFub3RlLnBpbm5lZDtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgIH1cblxuICAgIHBpblNvcnQoKSB7XG4gICAgICAgIGxldCBzb3J0ZWROb3RlcyA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBub3RlIG9mIHRoaXMubm90ZXMpIHtcbiAgICAgICAgICAgIGlmIChub3RlLnBpbm5lZCkge1xuICAgICAgICAgICAgICAgIHNvcnRlZE5vdGVzLnVuc2hpZnQobm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHNvcnRlZE5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGVzLnNwbGljZSgwLCBzb3J0ZWROb3Rlcy5sZW5ndGgsIC4uLnNvcnRlZE5vdGVzKTtcbiAgICB9XG5cbiAgICBkYXRlU29ydCAoKSB7XG4gICAgICAgIHRoaXMubm90ZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGVMaXN0KCkiLCJpbXBvcnQge3dyaXRlSWR9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSkge1xuICAgICAgICB0aGlzLmlkID0gd3JpdGVJZChUb2RvTGlzdC5nZXRQcm9qZWN0SWRzKCkpO1xuICAgICAgICB0aGlzLiB0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxufSIsImltcG9ydCB7d3JpdGVJZH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLmlkID0gd3JpdGVJZChUb2RvTGlzdC5nZXRUYXNrSWRzKCkpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcbiAgICB9XG59IiwiaW1wb3J0IFByb2plY3QgIGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7cG9wdWxhdGVTdG9yYWdlfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jbGFzcyBUb2RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cblxuICAgICAgICAvL3RoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSG9tZScsICcwOS8xNC8yMicpKTsgICAgXG4gICAgICAgIC8vbmV3IFByb2plY3QoJ1RvZGF5JywgaGVscGVycy5kYXRlLnRvZGF5KCkpXG4gICAgICAgIC8vbmV3IFByb2plY3QoJ1RoaXMgV2VlaycsIGhlbHBlcnMuZGF0ZS5qdW1wKDcpKVxuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrKHByb2plY3QsIHRhc2spIHtcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29tcGxldGlvbih0YXNrKSB7XG4gICAgICAgIHRhc2suY29tcGxldGUgPSAhdGFzay5jb21wbGV0ZTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw9dGhpcy5wcm9qZWN0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gdGhpcy5wcm9qZWN0c1tpXS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2sodGFzaywgcHJvamVjdCkge1xuXG4gICAgICAgIGlmICghcHJvamVjdCl7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50YXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gcHJvamVjdC50YXNrc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRhc2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IHByb2plY3QudGFza3NbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVwbGFjZVRhc2sgKG5ld1Rhc2ssIG9sZFRhc2ssIHByb2plY3QpIHtcbiAgICAgICAgaWYgKCFwcm9qZWN0KXtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRhc2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRUYXNrLmlkID09PSBwcm9qZWN0LnRhc2tzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzW2ldID0gbmV3VGFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHByb2plY3QudGFza3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkVGFzay5pZCA9PT0gcHJvamVjdC50YXNrc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzW2ldID0gbmV3VGFzaztcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXBsYWNlUHJvamVjdChuZXdQcm9qZWN0LCBvbGRQcm9qZWN0KSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw9dGhpcy5wcm9qZWN0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG9sZFByb2plY3QuaWQgPT09IHRoaXMucHJvamVjdHNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzW2ldID0gbmV3UHJvamVjdDtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0SWRzKCkge1xuICAgICAgICBsZXQgaWRzID0gW11cblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlkcy5wdXNoKHByb2plY3QuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkc1xuICAgIH1cblxuICAgIGdldFRhc2tJZHMoKSB7XG4gICAgICAgIGxldCBpZHMgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0cykge1xuICAgICAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgaWRzLnB1c2godGFzay5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG5cbiAgICBwcmlvcml0eVNvcnQocHJvamVjdCkge1xuXG4gICAgICAgIGxldCBzb3J0ZWRUYXNrcyA9IFtdXG4gICAgICAgIGxldCBtZWRJbmRleCA9IDBcblxuICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdIaWdoJzpcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVGFza3MudW5zaGlmdCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgKyttZWRJbmRleDsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVGFza3Muc3BsaWNlKG1lZEluZGV4LCAwLCB0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdMb3cnOlxuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoMCwgc29ydGVkVGFza3MubGVuZ3RoLCAuLi5zb3J0ZWRUYXNrcyk7XG4gICAgfVxuXG4gICAgZGF0ZVNvcnQocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRvZG9MaXN0KCkiLCJ2YXIgdG9rZW49L2R7MSw0fXxEezMsNH18bXsxLDR9fHl5KD86eXkpP3woW0hoTXNUdF0pXFwxP3xXezEsMn18W0xsb3BTWk5dfFwiW15cIl0qXCJ8J1teJ10qJy9nO3ZhciB0aW1lem9uZT0vXFxiKD86W0EtWl17MSwzfVtBLVpdW1RDXSkoPzpbLStdXFxkezR9KT98KCg/OkF1c3RyYWxpYW4gKT8oPzpQYWNpZmljfE1vdW50YWlufENlbnRyYWx8RWFzdGVybnxBdGxhbnRpYykgKD86U3RhbmRhcmR8RGF5bGlnaHR8UHJldmFpbGluZykgVGltZSlcXGIvZzt2YXIgdGltZXpvbmVDbGlwPS9bXi0rXFxkQS1aXS9nO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZSxtYXNrLHV0YyxnbXQpe2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0xJiZ0eXBlb2YgZGF0ZT09PVwic3RyaW5nXCImJiEvXFxkLy50ZXN0KGRhdGUpKXttYXNrPWRhdGU7ZGF0ZT11bmRlZmluZWR9ZGF0ZT1kYXRlfHxkYXRlPT09MD9kYXRlOm5ldyBEYXRlO2lmKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKXtkYXRlPW5ldyBEYXRlKGRhdGUpfWlmKGlzTmFOKGRhdGUpKXt0aHJvdyBUeXBlRXJyb3IoXCJJbnZhbGlkIGRhdGVcIil9bWFzaz1TdHJpbmcobWFza3NbbWFza118fG1hc2t8fG1hc2tzW1wiZGVmYXVsdFwiXSk7dmFyIG1hc2tTbGljZT1tYXNrLnNsaWNlKDAsNCk7aWYobWFza1NsaWNlPT09XCJVVEM6XCJ8fG1hc2tTbGljZT09PVwiR01UOlwiKXttYXNrPW1hc2suc2xpY2UoNCk7dXRjPXRydWU7aWYobWFza1NsaWNlPT09XCJHTVQ6XCIpe2dtdD10cnVlfX12YXIgXz1mdW5jdGlvbiBfKCl7cmV0dXJuIHV0Yz9cImdldFVUQ1wiOlwiZ2V0XCJ9O3ZhciBfZD1mdW5jdGlvbiBkKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF0ZVwiXSgpfTt2YXIgRD1mdW5jdGlvbiBEKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF5XCJdKCl9O3ZhciBfbT1mdW5jdGlvbiBtKCl7cmV0dXJuIGRhdGVbXygpK1wiTW9udGhcIl0oKX07dmFyIHk9ZnVuY3Rpb24geSgpe3JldHVybiBkYXRlW18oKStcIkZ1bGxZZWFyXCJdKCl9O3ZhciBfSD1mdW5jdGlvbiBIKCl7cmV0dXJuIGRhdGVbXygpK1wiSG91cnNcIl0oKX07dmFyIF9NPWZ1bmN0aW9uIE0oKXtyZXR1cm4gZGF0ZVtfKCkrXCJNaW51dGVzXCJdKCl9O3ZhciBfcz1mdW5jdGlvbiBzKCl7cmV0dXJuIGRhdGVbXygpK1wiU2Vjb25kc1wiXSgpfTt2YXIgX0w9ZnVuY3Rpb24gTCgpe3JldHVybiBkYXRlW18oKStcIk1pbGxpc2Vjb25kc1wiXSgpfTt2YXIgX289ZnVuY3Rpb24gbygpe3JldHVybiB1dGM/MDpkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCl9O3ZhciBfVz1mdW5jdGlvbiBXKCl7cmV0dXJuIGdldFdlZWsoZGF0ZSl9O3ZhciBfTj1mdW5jdGlvbiBOKCl7cmV0dXJuIGdldERheU9mV2VlayhkYXRlKX07dmFyIGZsYWdzPXtkOmZ1bmN0aW9uIGQoKXtyZXR1cm4gX2QoKX0sZGQ6ZnVuY3Rpb24gZGQoKXtyZXR1cm4gcGFkKF9kKCkpfSxkZGQ6ZnVuY3Rpb24gZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpXX0sREREOmZ1bmN0aW9uIERERCgpe3JldHVybiBnZXREYXlOYW1lKHt5OnkoKSxtOl9tKCksZDpfZCgpLF86XygpLGRheU5hbWU6aTE4bi5kYXlOYW1lc1tEKCldLHNob3J0OnRydWV9KX0sZGRkZDpmdW5jdGlvbiBkZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpKzddfSxEREREOmZ1bmN0aW9uIEREREQoKXtyZXR1cm4gZ2V0RGF5TmFtZSh7eTp5KCksbTpfbSgpLGQ6X2QoKSxfOl8oKSxkYXlOYW1lOmkxOG4uZGF5TmFtZXNbRCgpKzddfSl9LG06ZnVuY3Rpb24gbSgpe3JldHVybiBfbSgpKzF9LG1tOmZ1bmN0aW9uIG1tKCl7cmV0dXJuIHBhZChfbSgpKzEpfSxtbW06ZnVuY3Rpb24gbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpXX0sbW1tbTpmdW5jdGlvbiBtbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpKzEyXX0seXk6ZnVuY3Rpb24geXkoKXtyZXR1cm4gU3RyaW5nKHkoKSkuc2xpY2UoMil9LHl5eXk6ZnVuY3Rpb24geXl5eSgpe3JldHVybiBwYWQoeSgpLDQpfSxoOmZ1bmN0aW9uIGgoKXtyZXR1cm4gX0goKSUxMnx8MTJ9LGhoOmZ1bmN0aW9uIGhoKCl7cmV0dXJuIHBhZChfSCgpJTEyfHwxMil9LEg6ZnVuY3Rpb24gSCgpe3JldHVybiBfSCgpfSxISDpmdW5jdGlvbiBISCgpe3JldHVybiBwYWQoX0goKSl9LE06ZnVuY3Rpb24gTSgpe3JldHVybiBfTSgpfSxNTTpmdW5jdGlvbiBNTSgpe3JldHVybiBwYWQoX00oKSl9LHM6ZnVuY3Rpb24gcygpe3JldHVybiBfcygpfSxzczpmdW5jdGlvbiBzcygpe3JldHVybiBwYWQoX3MoKSl9LGw6ZnVuY3Rpb24gbCgpe3JldHVybiBwYWQoX0woKSwzKX0sTDpmdW5jdGlvbiBMKCl7cmV0dXJuIHBhZChNYXRoLmZsb29yKF9MKCkvMTApKX0sdDpmdW5jdGlvbiB0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMF06aTE4bi50aW1lTmFtZXNbMV19LHR0OmZ1bmN0aW9uIHR0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMl06aTE4bi50aW1lTmFtZXNbM119LFQ6ZnVuY3Rpb24gVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzRdOmkxOG4udGltZU5hbWVzWzVdfSxUVDpmdW5jdGlvbiBUVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzZdOmkxOG4udGltZU5hbWVzWzddfSxaOmZ1bmN0aW9uIFooKXtyZXR1cm4gZ210P1wiR01UXCI6dXRjP1wiVVRDXCI6Zm9ybWF0VGltZXpvbmUoZGF0ZSl9LG86ZnVuY3Rpb24gbygpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSoxMDArTWF0aC5hYnMoX28oKSklNjAsNCl9LHA6ZnVuY3Rpb24gcCgpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSwyKStcIjpcIitwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKSU2MCksMil9LFM6ZnVuY3Rpb24gUygpe3JldHVybltcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdW19kKCklMTA+Mz8wOihfZCgpJTEwMC1fZCgpJTEwIT0xMCkqX2QoKSUxMF19LFc6ZnVuY3Rpb24gVygpe3JldHVybiBfVygpfSxXVzpmdW5jdGlvbiBXVygpe3JldHVybiBwYWQoX1coKSl9LE46ZnVuY3Rpb24gTigpe3JldHVybiBfTigpfX07cmV0dXJuIG1hc2sucmVwbGFjZSh0b2tlbixmdW5jdGlvbihtYXRjaCl7aWYobWF0Y2ggaW4gZmxhZ3Mpe3JldHVybiBmbGFnc1ttYXRjaF0oKX1yZXR1cm4gbWF0Y2guc2xpY2UoMSxtYXRjaC5sZW5ndGgtMSl9KX1leHBvcnQgdmFyIG1hc2tzPXtkZWZhdWx0OlwiZGRkIG1tbSBkZCB5eXl5IEhIOk1NOnNzXCIsc2hvcnREYXRlOlwibS9kL3l5XCIscGFkZGVkU2hvcnREYXRlOlwibW0vZGQveXl5eVwiLG1lZGl1bURhdGU6XCJtbW0gZCwgeXl5eVwiLGxvbmdEYXRlOlwibW1tbSBkLCB5eXl5XCIsZnVsbERhdGU6XCJkZGRkLCBtbW1tIGQsIHl5eXlcIixzaG9ydFRpbWU6XCJoOk1NIFRUXCIsbWVkaXVtVGltZTpcImg6TU06c3MgVFRcIixsb25nVGltZTpcImg6TU06c3MgVFQgWlwiLGlzb0RhdGU6XCJ5eXl5LW1tLWRkXCIsaXNvVGltZTpcIkhIOk1NOnNzXCIsaXNvRGF0ZVRpbWU6XCJ5eXl5LW1tLWRkJ1QnSEg6TU06c3NvXCIsaXNvVXRjRGF0ZVRpbWU6XCJVVEM6eXl5eS1tbS1kZCdUJ0hIOk1NOnNzJ1onXCIsZXhwaXJlc0hlYWRlckZvcm1hdDpcImRkZCwgZGQgbW1tIHl5eXkgSEg6TU06c3MgWlwifTtleHBvcnQgdmFyIGkxOG49e2RheU5hbWVzOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiLFwiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sbW9udGhOYW1lczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCIsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sdGltZU5hbWVzOltcImFcIixcInBcIixcImFtXCIsXCJwbVwiLFwiQVwiLFwiUFwiLFwiQU1cIixcIlBNXCJdfTt2YXIgcGFkPWZ1bmN0aW9uIHBhZCh2YWwpe3ZhciBsZW49YXJndW1lbnRzLmxlbmd0aD4xJiZhcmd1bWVudHNbMV0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzFdOjI7cmV0dXJuIFN0cmluZyh2YWwpLnBhZFN0YXJ0KGxlbixcIjBcIil9O3ZhciBnZXREYXlOYW1lPWZ1bmN0aW9uIGdldERheU5hbWUoX3JlZil7dmFyIHk9X3JlZi55LG09X3JlZi5tLGQ9X3JlZi5kLF89X3JlZi5fLGRheU5hbWU9X3JlZi5kYXlOYW1lLF9yZWYkc2hvcnQ9X3JlZltcInNob3J0XCJdLF9zaG9ydD1fcmVmJHNob3J0PT09dm9pZCAwP2ZhbHNlOl9yZWYkc2hvcnQ7dmFyIHRvZGF5PW5ldyBEYXRlO3ZhciB5ZXN0ZXJkYXk9bmV3IERhdGU7eWVzdGVyZGF5LnNldERhdGUoeWVzdGVyZGF5W18rXCJEYXRlXCJdKCktMSk7dmFyIHRvbW9ycm93PW5ldyBEYXRlO3RvbW9ycm93LnNldERhdGUodG9tb3Jyb3dbXytcIkRhdGVcIl0oKSsxKTt2YXIgdG9kYXlfZD1mdW5jdGlvbiB0b2RheV9kKCl7cmV0dXJuIHRvZGF5W18rXCJEYXRlXCJdKCl9O3ZhciB0b2RheV9tPWZ1bmN0aW9uIHRvZGF5X20oKXtyZXR1cm4gdG9kYXlbXytcIk1vbnRoXCJdKCl9O3ZhciB0b2RheV95PWZ1bmN0aW9uIHRvZGF5X3koKXtyZXR1cm4gdG9kYXlbXytcIkZ1bGxZZWFyXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfZD1mdW5jdGlvbiB5ZXN0ZXJkYXlfZCgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIkRhdGVcIl0oKX07dmFyIHllc3RlcmRheV9tPWZ1bmN0aW9uIHllc3RlcmRheV9tKCl7cmV0dXJuIHllc3RlcmRheVtfK1wiTW9udGhcIl0oKX07dmFyIHllc3RlcmRheV95PWZ1bmN0aW9uIHllc3RlcmRheV95KCl7cmV0dXJuIHllc3RlcmRheVtfK1wiRnVsbFllYXJcIl0oKX07dmFyIHRvbW9ycm93X2Q9ZnVuY3Rpb24gdG9tb3Jyb3dfZCgpe3JldHVybiB0b21vcnJvd1tfK1wiRGF0ZVwiXSgpfTt2YXIgdG9tb3Jyb3dfbT1mdW5jdGlvbiB0b21vcnJvd19tKCl7cmV0dXJuIHRvbW9ycm93W18rXCJNb250aFwiXSgpfTt2YXIgdG9tb3Jyb3dfeT1mdW5jdGlvbiB0b21vcnJvd195KCl7cmV0dXJuIHRvbW9ycm93W18rXCJGdWxsWWVhclwiXSgpfTtpZih0b2RheV95KCk9PT15JiZ0b2RheV9tKCk9PT1tJiZ0b2RheV9kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVGR5XCI6XCJUb2RheVwifWVsc2UgaWYoeWVzdGVyZGF5X3koKT09PXkmJnllc3RlcmRheV9tKCk9PT1tJiZ5ZXN0ZXJkYXlfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIllzZFwiOlwiWWVzdGVyZGF5XCJ9ZWxzZSBpZih0b21vcnJvd195KCk9PT15JiZ0b21vcnJvd19tKCk9PT1tJiZ0b21vcnJvd19kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVG13XCI6XCJUb21vcnJvd1wifXJldHVybiBkYXlOYW1lfTt2YXIgZ2V0V2Vlaz1mdW5jdGlvbiBnZXRXZWVrKGRhdGUpe3ZhciB0YXJnZXRUaHVyc2RheT1uZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksZGF0ZS5nZXRNb250aCgpLGRhdGUuZ2V0RGF0ZSgpKTt0YXJnZXRUaHVyc2RheS5zZXREYXRlKHRhcmdldFRodXJzZGF5LmdldERhdGUoKS0odGFyZ2V0VGh1cnNkYXkuZ2V0RGF5KCkrNiklNyszKTt2YXIgZmlyc3RUaHVyc2RheT1uZXcgRGF0ZSh0YXJnZXRUaHVyc2RheS5nZXRGdWxsWWVhcigpLDAsNCk7Zmlyc3RUaHVyc2RheS5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpLShmaXJzdFRodXJzZGF5LmdldERheSgpKzYpJTcrMyk7dmFyIGRzPXRhcmdldFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCktZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpO3RhcmdldFRodXJzZGF5LnNldEhvdXJzKHRhcmdldFRodXJzZGF5LmdldEhvdXJzKCktZHMpO3ZhciB3ZWVrRGlmZj0odGFyZ2V0VGh1cnNkYXktZmlyc3RUaHVyc2RheSkvKDg2NGU1KjcpO3JldHVybiAxK01hdGguZmxvb3Iod2Vla0RpZmYpfTt2YXIgZ2V0RGF5T2ZXZWVrPWZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlKXt2YXIgZG93PWRhdGUuZ2V0RGF5KCk7aWYoZG93PT09MCl7ZG93PTd9cmV0dXJuIGRvd307ZXhwb3J0IHZhciBmb3JtYXRUaW1lem9uZT1mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShkYXRlKXtyZXR1cm4oU3RyaW5nKGRhdGUpLm1hdGNoKHRpbWV6b25lKXx8W1wiXCJdKS5wb3AoKS5yZXBsYWNlKHRpbWV6b25lQ2xpcCxcIlwiKS5yZXBsYWNlKC9HTVRcXCswMDAwL2csXCJVVENcIil9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL21vZHVsZXMvdGFzay5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdC5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL21vZHVsZXMvbm90ZS5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL21vZHVsZXMvdG9kb0xpc3QuanMnO1xuaW1wb3J0IE5vdGVMaXN0IGZyb20gJy4vbW9kdWxlcy9ub3RlTGlzdC5qcyc7XG5pbXBvcnQge3dyaXRlSWQsIHBvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9tb2R1bGVzL2hlbHBlcnMuanMnO1xuaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSS5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG5cbi8vIFRFU1RJTkcgLSBGT1IgTEFURVIgUkVNT1ZBTFxuXG5jb25zb2xlLmxvZyhcInRlc3RpbmdcIik7XG5cbmxldCB0ZXN0VGFzayA9IG5ldyBUYXNrKCd3YWxrIGRvZycsICdEZWNlbWJlciA4IDIwMjEnLCAnbG93Jyk7XG5sZXQgdGVzdE5vdGUgPSBuZXcgTm90ZSgnZ3JvY2VyaWVzJywgJ2F2b2NhZG8sIG1hbmdvLCBtaWxrLCByaWNlJyk7XG5sZXQgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgnc2VsbCBob3VzZScpO1xuXG4vL1VJLnRlc3RCb2R5KClcblxuLypcblxudGVzdFByb2plY3QudGFza3MucHVzaCh0ZXN0VGFzayk7XG5Ob3RlTGlzdC5hZGQodGVzdE5vdGUpO1xuVG9kb0xpc3QuYWRkUHJvamVjdCh0ZXN0UHJvamVjdCk7XG5Ob3RlTGlzdC5hZGQobmV3IE5vdGUoJ21lIG1vdycsIFwiaGUncyB2ZXJ5IHNtYWxsIGJ1dCBiaWcgZXZpbFwiKSk7XG5Ob3RlTGlzdC5hZGQobmV3IE5vdGUoJ21vdmllcycsICdEZWF0aCBvZiBTdGFsaW4sIEludGVyc3RlbGxhciwgQWxpZW4nKSlcblxuKi9cblxuLy8gSU5JVElBVEUgTE9DQUwgU1RPUkFHRVxuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0Jykpe1xuICAgIGNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBlbXB0eVwiKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgVG9kb0xpc3QucHJvamVjdHMpO1xuICAgIHBvcHVsYXRlU3RvcmFnZSgnbm90ZUxpc3QnLCBOb3RlTGlzdC5ub3Rlcyk7XG59XG5cbmVsc2V7XG4gICAgVG9kb0xpc3QucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKTtcbiAgICBOb3RlTGlzdC5ub3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVMaXN0JykpO1xufVxuXG5VSS5sb2FkVUkoKTtcblxuLy8gTUFQUElORyBXSU5ET1cgVkFSUyBUTyBTQ1JJUFQgVkFSU1xuXG53aW5kb3cuVG9kb0xpc3QgPSBUb2RvTGlzdFxud2luZG93LnRlc3RUYXNrID0gdGVzdFRhc2tcbndpbmRvdy50ZXN0Tm90ZSA9IHRlc3ROb3RlXG53aW5kb3cud3JpdGVJZCA9IHdyaXRlSWRcbndpbmRvdy5Ob3RlTGlzdCA9IE5vdGVMaXN0XG53aW5kb3cuUHJvamVjdCA9IFByb2plY3RcbndpbmRvdy5UYXNrID0gVGFza1xud2luZG93Lk5vdGUgPSBOb3RlXG53aW5kb3cucG9wdWxhdGVTdG9yYWdlID0gcG9wdWxhdGVTdG9yYWdlXG53aW5kb3cuVUkgPSBVSSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==