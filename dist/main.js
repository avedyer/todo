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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n    background-color: hsl(0, 0%, 90%);\n    display: relative;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\nul > li:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\nul > li:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: hsl(0, 0%, 95%);\n    box-sizing: border-box;\n}\n \n.listContainer { \n    min-height: 100vh;\n    width: 80%;\n    min-width: 400px;\n    padding: 12px;\n    position: absolute;\n    right: 0;\n    box-sizing: border-box;\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    display: grid;\n    grid-template-columns: 50px 3fr 1fr 1fr 100px;\n    min-height: 2em;\n    height: auto;\n}\n\n.taskForm {\n    overflow-y:visible;\n}\n\n.task input {\n    margin: 4px 8px;\n}\n.task input[type=text] {\n    height: 1.6em;\n}\n\n.task input[type=date] {\n    height: 1.6em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n    float: right;\n}\n\n.prioritySelector {\n    display: grid;\n    grid-template-columns: auto auto;\n}\n\n.project {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n    min-height: 500px;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    position: relative;\n    padding: 6px 6px 32px 6px;\n}\n\n.note .buttonContainer {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-color: hsl(0, 0%, 90%);\n    padding: 2px;\n    z-index: 2;\n}\n\n.noteTitle {\n    width: 80%;\n    height: 60px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 12px;\n}\n\n.pin {\n    float: right;\n    width: 15%;\n}\n\n.noteContent {\n    clear: both;\n}\n\n.note::after {\n    content: '';\n    width: 100%;\n    height: 20%;\n    display: inline-block;\n    background: linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 95%, 0.8) 50%, hsl(0, 0%, 95%) 100%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.unrolled .noteContent {\n    \n}\n\n.unrolled::after{\n    display: none;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned::before {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n    background-color: hsl(0, 0%, 90%);\n    display: relative;\n}\n\nbutton {\n    height: 1.8em;\n    width: 1.8em;\n    margin: 1px;\n    overflow: hidden;\n}\n\ninput[type=checkbox] {\n    \n}\n\nul {\n    padding: 0;\n}\n\nul > li:nth-of-type(odd) {\n    background-color: hsl(0, 0%, 95%);\n}\n\nul > li:nth-of-type(even) {\n    background-color: hsl(0, 0%, 90%);\n}\n\nli {\n    list-style-type: none;\n    display: grid;\n}\n\nli * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.sidebar {  \n    height: 100vh;\n    width: 20%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: hsl(0, 0%, 95%);\n    box-sizing: border-box;\n}\n \n.listContainer { \n    min-height: 100vh;\n    width: 80%;\n    min-width: 400px;\n    padding: 12px;\n    position: absolute;\n    right: 0;\n    box-sizing: border-box;\n}\n\n.tab {\n    height: 64px;\n    position: relative;\n    margin: 0 auto;\n    transition: height 0.5s;\n}\n\n.tab * {\n    padding: 2px;\n}\n\n.tab:after {\n    content: '';\n    width: 85%;\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid grey;\n}\n\n.tab:hover, .tab.selected {\n    height: 96px;\n}\n\n.tab h3 {\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 8px;\n}\n\n.projectList li {\n    width: 85%;\n    grid-template-columns: 3fr auto auto;\n}\n\n.projectList:hover {\n}\n\n.taskList {\n    width: 70%;\n    padding: 8px;\n}\n\n\n.task {\n    display: grid;\n    grid-template-columns: 50px 3fr 1fr 1fr 100px;\n    min-height: 2em;\n    height: auto;\n}\n\n.taskForm {\n    overflow-y:visible;\n}\n\n.task input {\n    margin: 4px 8px;\n}\n.task input[type=text] {\n    height: 1.6em;\n}\n\n.task input[type=date] {\n    height: 1.6em;\n}\n\n.task.complete {\n    text-decoration: line-through;\n    color:hsl(0, 0%, 30%)\n}\n\n.task .date, .task .priority {\n    text-align: right;\n}\n\n.task button {\n    float: right;\n}\n\n.prioritySelector {\n    display: grid;\n    grid-template-columns: auto auto;\n}\n\n.project {\n\n}\n\n.noteContainer {\n\n}\n\n.noteSection {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    position: relative;\n    min-height: 500px;\n}\n\n.note {\n    background-color:hsl(0, 0%, 95%);\n    width: 300px;\n    height: 400px;\n    margin: 30px;\n    overflow: hidden;\n    position: relative;\n    padding: 6px 6px 32px 6px;\n}\n\n.note .buttonContainer {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-color: hsl(0, 0%, 90%);\n    padding: 2px;\n    z-index: 2;\n}\n\n.noteTitle {\n    width: 80%;\n    height: 60px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 12px;\n}\n\n.pin {\n    float: right;\n    width: 15%;\n}\n\n.noteContent {\n    clear: both;\n}\n\n.note::after {\n    content: '';\n    width: 100%;\n    height: 20%;\n    display: inline-block;\n    background: linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 95%, 0.8) 50%, hsl(0, 0%, 95%) 100%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n\n.unrolled {\n    min-height: 400px;\n    height: auto;\n    text-overflow: clip;\n}\n\n.unrolled .noteContent {\n    \n}\n\n.unrolled::after{\n    display: none;\n}\n\n.noteContainer .addButton {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 60px;\n    height: 60px;\n}\n\n.pinned::before {\n    content: '';\n    border-bottom: 1px solid grey;\n    position: absolute;\n    bottom: 0;\n    width: 85%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.focused {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n}\n\n.unfocused:after {\n    content: '';\n    width: 100vw;\n    height: 100vh;\n    background-color: hsla(0, 0%, 0%, 20%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _noteList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noteList.js */ "./src/modules/noteList.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoList.js */ "./src/modules/todoList.js");






class UI {

    static currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].projects[0];
    static body = document.querySelector('body');

    // Initial Loadout

    static loadUI () {
        console.log(this.currentProject)
        console.log(_todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].projects[0]);
        this.body.append(this.loadSidebar(), this.loadContainer('project', _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].projects[0]));
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
            this.loadContainer('note', _noteList_js__WEBPACK_IMPORTED_MODULE_3__["default"].notes);
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
            this.loadContainer('project', _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].projects[0])
            projectList.classList.remove('hidden');
            projectTab.classList.add('selected');
            noteTab.classList.remove('selected')
        }

        const projectList = document.createElement('ul');
            projectList.classList.add('projectList', 'hidden');

        // List project names for view selection

        if (_todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].projects) {
            
        }

        if (_todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].projects) {
            for (const project of _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].projects) {
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
                        _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].removeProject(project);
                        this.loadSidebar();
                        this.loadContainer('project', _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].projects[0]);
                    }
    
                projectEl.append(projectTitle, editEl, delEl);
                
                projectList.append(projectEl);
            }
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
                    listContainer.append(this.loadNoteList(_noteList_js__WEBPACK_IMPORTED_MODULE_3__["default"].notes));
            }

        }

        return listContainer
    }

    static loadProject (project) {

        // Load project container with editing, deleting, sorting functionality

        let projectContainer = document.querySelector('.projectContainer');
        
        if (!projectContainer) {
            projectContainer = document.createElement('div');
            projectContainer.classList.add('projectContainer');
        }

        else {
            projectContainer.innerHTML = '';
        }

        if (!project) {
            let project = this.currentProject;
        }

        const projectHeader = document.createElement('h2');
            projectHeader.innerHTML = project.title;

        const taskList = document.createElement('ul')
            taskList.classList.add('taskList');

        const priorityEl = document.createElement('div');
            priorityEl.innerHTML = 'Priority';
            priorityEl.classList.add('priority');

            priorityEl.onclick = () => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].prioritySort(project);
                this.loadProject(project);
            }
        
        const dateEl = document.createElement('div');
            dateEl.innerHTML = 'Due Date'
            dateEl.classList.add('date');

            dateEl.onclick = () => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].dateSort(project);
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
            newTaskButton.onclick = () => {
                const liContainer = document.createElement('li');
                liContainer.append(this.loadTaskForm(project))
                taskList.append(liContainer);
            };

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

        if (_noteList_js__WEBPACK_IMPORTED_MODULE_3__["default"].notes) {
            for (let note of _noteList_js__WEBPACK_IMPORTED_MODULE_3__["default"].notes) {
                note.pinned ? pinnedContainer.append(this.loadNote(note)) : unpinnedContainer.append(this.loadNote(note));
            }
        }

        const newNoteButton = document.createElement('button');
            newNoteButton.innerHTML = '+'
            newNoteButton.classList.add('addButton');
            newNoteButton.onclick = () => {
                noteContainer.childNodes[0].prepend(this.loadNoteForm());
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
                    _noteList_js__WEBPACK_IMPORTED_MODULE_3__["default"].togglePin(note);
                    _noteList_js__WEBPACK_IMPORTED_MODULE_3__["default"].pinSort();
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
                    _noteList_js__WEBPACK_IMPORTED_MODULE_3__["default"].remove(note);
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
                _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].toggleCompletion(task);
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
                console.log(this.currentProject);
                taskEl.parentNode.replaceChild(liContainer, taskEl);
                
            }

        editContainer.append(editEl);

        const delContainer = document.createElement('div');

        const delEl = document.createElement('button');
            delEl. innerHTML = 'x'
            delEl.onclick = () => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].removeTask(task);
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
                _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].replaceTask(newTask, task, project);
            }
            else {
                _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].addTask(project, newTask);
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
            titleInput.setAttribute('required', true)

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
                _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].replaceProject(newProject, project);
            }

            else {
                _todoList_js__WEBPACK_IMPORTED_MODULE_4__["default"].addProject(newProject);
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
            noteForm.classList.add('note');
            noteForm.classList.add('noteForm');
            noteForm.classList.add('unrolled');
        }
        

        const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');

        const contentInput = document.createElement('textarea');
            contentInput.setAttribute('rows', '32');
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

            let newNote = new _note_js__WEBPACK_IMPORTED_MODULE_2__["default"](titleInput.value, contentInput.value);

            if (note) {
                newNote.id = note.id;
                newNote.pinned = note.pinned;

                _noteList_js__WEBPACK_IMPORTED_MODULE_3__["default"].replace(newNote, note);
            }
            
            else {
                _noteList_js__WEBPACK_IMPORTED_MODULE_3__["default"].add(newNote);
            }
            
            this.loadContainer('note');

            return false
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
        this.notes = [];
    };

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

        if (!this.notes) {
            return ids
        }

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
        this.projects = [];

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
    _modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects = JSON.parse(localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [];
    _modules_noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].notes = JSON.parse(localStorage.getItem('noteList')) ? JSON.parse(localStorage.getItem('noteList')) : [];
}

if (!_modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects[0]) {
    console.log(_modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects[0])
    console.log('initializing default project')
    const defaultProject = new _modules_project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Home')
    _modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(defaultProject);
    console.log(_modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects[0])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlB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QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxvRUFBZSxhQUFhLHFFQUFpQjtBQUNqRCxJQUFJLG9FQUFlLGFBQWEsa0VBQWM7QUFDOUM7O0FBRUE7QUFDQSxJQUFJLHFFQUFpQjtBQUNyQixJQUFJLGtFQUFjO0FBQ2xCOztBQUVBLEtBQUssd0VBQW9CO0FBQ3pCLGdCQUFnQix3RUFBb0I7QUFDcEM7QUFDQSwrQkFBK0IsMkRBQU87QUFDdEMsSUFBSSx1RUFBbUI7QUFDdkIsZ0JBQWdCLHdFQUFvQjtBQUNwQzs7QUFFQSw2REFBUzs7QUFFVDs7QUFFQSxrQkFBa0IsNERBQVE7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQix3REFBTztBQUN4QixrQkFBa0IsNERBQVE7QUFDMUIsaUJBQWlCLDJEQUFPO0FBQ3hCLGNBQWMsd0RBQUk7QUFDbEIsY0FBYyx3REFBSTtBQUNsQix5QkFBeUIsZ0VBQWU7QUFDeEMsWUFBWSxzRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9ub3RlTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXG4gICAgd2lkdGg6IDEuOGVtO1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCA+IGxpOm50aC1vZi10eXBlKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxufVxcblxcbnVsID4gbGk6bnRoLW9mLXR5cGUoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5saSAqIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAycHg7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLnNpZGViYXIgeyAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiBcXG4ubGlzdENvbnRhaW5lciB7IFxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XFxufVxcblxcbi50YWIgKiB7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLnRhYjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi50YWI6aG92ZXIsIC50YWIuc2VsZWN0ZWQge1xcbiAgICBoZWlnaHQ6IDk2cHg7XFxufVxcblxcbi50YWIgaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgbGkge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciBhdXRvIGF1dG87XFxufVxcblxcbi5wcm9qZWN0TGlzdDpob3ZlciB7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggM2ZyIDFmciAxZnIgMTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGFza0Zvcm0ge1xcbiAgICBvdmVyZmxvdy15OnZpc2libGU7XFxufVxcblxcbi50YXNrIGlucHV0IHtcXG4gICAgbWFyZ2luOiA0cHggOHB4O1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgaGVpZ2h0OiAxLjZlbTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIGhlaWdodDogMS42ZW07XFxufVxcblxcbi50YXNrLmNvbXBsZXRlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOmhzbCgwLCAwJSwgMzAlKVxcbn1cXG5cXG4udGFzayAuZGF0ZSwgLnRhc2sgLnByaW9yaXR5IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YXNrIGJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLnByaW9yaXR5U2VsZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuXFxuLnByb2plY3Qge1xcblxcbn1cXG5cXG4ubm90ZUNvbnRhaW5lciB7XFxuXFxufVxcblxcbi5ub3RlU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4ubm90ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCA5NSUpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA2cHggNnB4IDMycHggNnB4O1xcbn1cXG5cXG4ubm90ZSAuYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLm5vdGVUaXRsZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5waW4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAxNSU7XFxufVxcblxcbi5ub3RlQ29udGVudCB7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4ubm90ZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2xhKDAsIDAlLCAwJSwgMCkgMCUsIGhzbGEoMCwgMCUsIDk1JSwgMC44KSA1MCUsIGhzbCgwLCAwJSwgOTUlKSAxMDAlKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi51bnJvbGxlZCB7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbi51bnJvbGxlZCAubm90ZUNvbnRlbnQge1xcbiAgICBcXG59XFxuXFxuLnVucm9sbGVkOjphZnRlcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5vdGVDb250YWluZXIgLmFkZEJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnBpbm5lZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmZvY3VzZWQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udW5mb2N1c2VkOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDIwJSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGlDQUFpQztJQUNqQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtR0FBbUc7SUFDbkcsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG4gICAgZGlzcGxheTogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGhlaWdodDogMS44ZW07XFxuICAgIHdpZHRoOiAxLjhlbTtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgXFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxudWwgPiBsaTpudGgtb2YtdHlwZShvZGQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbn1cXG5cXG51bCA+IGxpOm50aC1vZi10eXBlKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxubGkgKiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5zaWRlYmFyIHsgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4gXFxuLmxpc3RDb250YWluZXIgeyBcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50YWIge1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xcbn1cXG5cXG4udGFiICoge1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi50YWI6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4udGFiOmhvdmVyLCAudGFiLnNlbGVjdGVkIHtcXG4gICAgaGVpZ2h0OiA5NnB4O1xcbn1cXG5cXG4udGFiIGgzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnByb2plY3RMaXN0IGxpIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgYXV0byBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdExpc3Q6aG92ZXIge1xcbn1cXG5cXG4udGFza0xpc3Qge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDNmciAxZnIgMWZyIDEwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnRhc2tGb3JtIHtcXG4gICAgb3ZlcmZsb3cteTp2aXNpYmxlO1xcbn1cXG5cXG4udGFzayBpbnB1dCB7XFxuICAgIG1hcmdpbjogNHB4IDhweDtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGhlaWdodDogMS42ZW07XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBoZWlnaHQ6IDEuNmVtO1xcbn1cXG5cXG4udGFzay5jb21wbGV0ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjpoc2woMCwgMCUsIDMwJSlcXG59XFxuXFxuLnRhc2sgLmRhdGUsIC50YXNrIC5wcmlvcml0eSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udGFzayBidXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5wcmlvcml0eVNlbGVjdG9yIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcblxcbi5wcm9qZWN0IHtcXG5cXG59XFxuXFxuLm5vdGVDb250YWluZXIge1xcblxcbn1cXG5cXG4ubm90ZVNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLm5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgOTUlKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNnB4IDZweCAzMnB4IDZweDtcXG59XFxuXFxuLm5vdGUgLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5ub3RlVGl0bGUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ucGluIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG5cXG4ubm90ZUNvbnRlbnQge1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLm5vdGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsYSgwLCAwJSwgMCUsIDApIDAlLCBoc2xhKDAsIDAlLCA5NSUsIDAuOCkgNTAlLCBoc2woMCwgMCUsIDk1JSkgMTAwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4udW5yb2xsZWQge1xcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4udW5yb2xsZWQgLm5vdGVDb250ZW50IHtcXG4gICAgXFxufVxcblxcbi51bnJvbGxlZDo6YWZ0ZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ub3RlQ29udGFpbmVyIC5hZGRCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5waW5uZWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5mb2N1c2VkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnVuZm9jdXNlZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAyMCUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnXG5pbXBvcnQgTm90ZUxpc3QgZnJvbSAnLi9ub3RlTGlzdC5qcyc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcblxuICAgIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9IFRvZG9MaXN0LnByb2plY3RzWzBdO1xuICAgIHN0YXRpYyBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgLy8gSW5pdGlhbCBMb2Fkb3V0XG5cbiAgICBzdGF0aWMgbG9hZFVJICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50UHJvamVjdClcbiAgICAgICAgY29uc29sZS5sb2coVG9kb0xpc3QucHJvamVjdHNbMF0pO1xuICAgICAgICB0aGlzLmJvZHkuYXBwZW5kKHRoaXMubG9hZFNpZGViYXIoKSwgdGhpcy5sb2FkQ29udGFpbmVyKCdwcm9qZWN0JywgVG9kb0xpc3QucHJvamVjdHNbMF0pKTtcbiAgICB9XG5cblxuICAgIC8vIE5hdmlnYXRpb24gYmFyIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBwcm9qZWN0cyBhbmQgbm90ZXNcblxuICAgIHN0YXRpYyBsb2FkU2lkZWJhcigpIHtcbiAgICAgICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG5cbiAgICAgICAgaWYgKCFzaWRlYmFyKSB7XG4gICAgICAgICAgICBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2lkZWJhci5pbm5lckhUTUwgPSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90ZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5vdGVUYWJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpOyAgICBcbiAgICAgICAgICAgIG5vdGVUYWJIZWFkZXIuaW5uZXJIVE1MID0gXCJOb3Rlc1wiXG5cbiAgICAgICAgbm90ZVRhYi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdub3RlJywgTm90ZUxpc3Qubm90ZXMpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBub3RlVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgbm90ZVRhYi5hcHBlbmQobm90ZVRhYkhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGFiSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWJIZWFkZXIuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgICAgIHByb2plY3RUYWIuYXBwZW5kKHByb2plY3RUYWJIZWFkZXIpOyBcblxuICAgICAgICBwcm9qZWN0VGFiLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDb250YWluZXIoJ3Byb2plY3QnLCBUb2RvTGlzdC5wcm9qZWN0c1swXSlcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgbm90ZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcsICdoaWRkZW4nKTtcblxuICAgICAgICAvLyBMaXN0IHByb2plY3QgbmFtZXMgZm9yIHZpZXcgc2VsZWN0aW9uXG5cbiAgICAgICAgaWYgKFRvZG9MaXN0LnByb2plY3RzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChUb2RvTGlzdC5wcm9qZWN0cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIFRvZG9MaXN0LnByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRFbC5pbm5lckhUTUwgPSAn4pyOJztcbiAgICAgICAgICAgICAgICAgICAgZWRpdEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RWwucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodGhpcy5sb2FkUHJvamVjdEZvcm0ocHJvamVjdCksIHByb2plY3RFbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZWxFbC4gaW5uZXJIVE1MID0gJ3gnXG4gICAgICAgICAgICAgICAgICAgIGRlbEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RvTGlzdC5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU2lkZWJhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdwcm9qZWN0JywgVG9kb0xpc3QucHJvamVjdHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgcHJvamVjdEVsLmFwcGVuZChwcm9qZWN0VGl0bGUsIGVkaXRFbCwgZGVsRWwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0RWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7cHJvamVjdExpc3QuYXBwZW5kKHRoaXMubG9hZFByb2plY3RGb3JtKCkpO31cbiAgICAgICAgICAgIFxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbik7ICAgIFxuXG4gICAgICAgIHNpZGViYXIuYXBwZW5kKG5vdGVUYWIsIHByb2plY3RUYWIsIHByb2plY3RMaXN0KTtcblxuICAgICAgICByZXR1cm4gc2lkZWJhclxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkQ29udGFpbmVyKHR5cGUsIGxpc3QpIHtcblxuICAgICAgICAvLyBMb2FkIGdlbmVyaWMgY29udGFpbmVyIGZvciBwcm9qZWN0cyBvciBsaXN0cywgbG9hZCBpbiBjb250ZW50IGJhc2VkIG9uIGFyZ3VtZW50c1xuXG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKTtcblxuICAgICAgICBpZiAoIWxpc3RDb250YWluZXIpIHtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkUHJvamVjdChsaXN0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmxvYWRQcm9qZWN0KGxpc3QpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgICAgICAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmQodGhpcy5sb2FkTm90ZUxpc3QoTm90ZUxpc3Qubm90ZXMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RDb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFByb2plY3QgKHByb2plY3QpIHtcblxuICAgICAgICAvLyBMb2FkIHByb2plY3QgY29udGFpbmVyIHdpdGggZWRpdGluZywgZGVsZXRpbmcsIHNvcnRpbmcgZnVuY3Rpb25hbGl0eVxuXG4gICAgICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghcHJvamVjdENvbnRhaW5lcikge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gdGhpcy5jdXJyZW50UHJvamVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICAgICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFza0xpc3QnKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eUVsLmlubmVySFRNTCA9ICdQcmlvcml0eSc7XG4gICAgICAgICAgICBwcmlvcml0eUVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIHByaW9yaXR5RWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBUb2RvTGlzdC5wcmlvcml0eVNvcnQocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGF0ZUVsLmlubmVySFRNTCA9ICdEdWUgRGF0ZSdcbiAgICAgICAgICAgIGRhdGVFbC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG5cbiAgICAgICAgICAgIGRhdGVFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LmRhdGVTb3J0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZEZpbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGlzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrJylcblxuICAgICAgICBsaXN0SGVhZGVyLmFwcGVuZChncmlkRmlsbGVyLCBncmlkRmlsbGVyLmNsb25lTm9kZSgpLCBkYXRlRWwsIHByaW9yaXR5RWwsIGdyaWRGaWxsZXIuY2xvbmVOb2RlKCksIGdyaWRGaWxsZXIuY2xvbmVOb2RlKCkpO1xuXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZChsaXN0SGVhZGVyKTtcbiAgICAgICAgXG5cbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRoaXMubG9hZFRhc2sodGFzaykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmV3VGFza0J1dHRvbi5pbm5lckhUTUwgPSAnKydcbiAgICAgICAgICAgIG5ld1Rhc2tCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgbGlDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZFRhc2tGb3JtKHByb2plY3QpKVxuICAgICAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZChsaUNvbnRhaW5lcik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RIZWFkZXIsIHRhc2tMaXN0LCBuZXdUYXNrQnV0dG9uKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcblxuICAgICAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lclxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgbG9hZE5vdGVMaXN0KCkge1xuICAgICAgICBcbiAgICAgICAgLy8gTG9hZCBjb250YWluZXIgZm9yIG5vdGVzLCB3aXRoIHNlcGVyYXRpb24gYmV0d2VlbiBwaW5uZWQvdW5waW5uZWQgbm90ZXMsIGFuZCBuZXcgdGFzayBidXR0b25cblxuICAgICAgICBsZXQgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlQ29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYoIW5vdGVDb250YWluZXIpIHtcbiAgICAgICAgICAgIG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZUNvbnRhaW5lcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub3RlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGlubmVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwaW5uZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGlubmVkJywgJ25vdGVTZWN0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgdW5waW5uZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVucGlubmVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3VucGlubmVkJywgJ25vdGVTZWN0aW9uJyk7XG5cbiAgICAgICAgaWYgKE5vdGVMaXN0Lm5vdGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBub3RlIG9mIE5vdGVMaXN0Lm5vdGVzKSB7XG4gICAgICAgICAgICAgICAgbm90ZS5waW5uZWQgPyBwaW5uZWRDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZE5vdGUobm90ZSkpIDogdW5waW5uZWRDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZE5vdGUobm90ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmV3Tm90ZUJ1dHRvbi5pbm5lckhUTUwgPSAnKydcbiAgICAgICAgICAgIG5ld05vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkQnV0dG9uJyk7XG4gICAgICAgICAgICBuZXdOb3RlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm90ZUNvbnRhaW5lci5jaGlsZE5vZGVzWzBdLnByZXBlbmQodGhpcy5sb2FkTm90ZUZvcm0oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgbm90ZUNvbnRhaW5lci5hcHBlbmQocGlubmVkQ29udGFpbmVyLCB1bnBpbm5lZENvbnRhaW5lciwgbmV3Tm90ZUJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIG5vdGVDb250YWluZXJcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZE5vdGUgKG5vdGUpIHtcblxuICAgICAgICAvLyBMb2FkIGluZGl2aWR1YWwgbm90ZSB3aXRoIGVkaXRpbmcgZnVuY3Rpb25hbGl0eVxuXG4gICAgICAgIGNvbnN0IG5vdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcblxuICAgICAgICAgICAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIG5vdGVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZVRpdGxlXCIpO1xuICAgICAgICAgICAgbm90ZVRpdGxlLmlubmVySFRNTCA9IG5vdGUudGl0bGU7XG5cbiAgICAgICAgICAgIGNvbnN0IHBpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcGluRWwuY2xhc3NMaXN0LmFkZCgncGluJylcbiAgICAgICAgICAgICAgICBub3RlLnBpbm5lZCA/IHBpbkVsLmlubmVySFRNTCA9ICd1bnBpbicgOiBwaW5FbC5pbm5lckhUTUwgPSAncGluJ1xuICAgICAgICAgICAgICAgIHBpbkVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5vdGVMaXN0LnRvZ2dsZVBpbihub3RlKTtcbiAgICAgICAgICAgICAgICAgICAgTm90ZUxpc3QucGluU29ydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWROb3RlTGlzdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgbm90ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgbm90ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbm90ZUNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBub3RlQ29udGVudC5pbm5lckhUTUwgPSBub3RlLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZWRpdEVsLmlubmVySFRNTCA9ICfinI4nO1xuICAgICAgICAgICAgICAgIGVkaXRFbC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vdGVFbC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh0aGlzLmxvYWROb3RlRm9ybShub3RlKSwgbm90ZUVsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsRWwuIGlubmVySFRNTCA9ICd4J1xuICAgICAgICAgICAgICAgIGRlbEVsLmNsYXNzTGlzdC5hZGQoJ2RlbCcpO1xuICAgICAgICAgICAgICAgIGRlbEVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5vdGVMaXN0LnJlbW92ZShub3RlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTm90ZUxpc3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChlZGl0RWwsIGRlbEVsKTtcblxuICAgICAgICBub3RlRWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghbm90ZUVsLmNsYXNzTGlzdC5jb250YWlucygndW5yb2xsZWQnKSkge1xuICAgICAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90ZScpLCAoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgndW5yb2xsZWQnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCd1bnJvbGxlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub3RlRWwuY2xhc3NMaXN0LnJlbW92ZSgndW5yb2xsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5vdGVFbC5hcHBlbmQobm90ZVRpdGxlLCBwaW5FbCwgbm90ZUNvbnRlbnQsIGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIG5vdGVFbFxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVGFzayAodGFzaykge1xuXG4gICAgICAgIC8vIExvYWQgaW5kaXZpZHVhbCB0YXNrLCB3aXRoIGVkaXRpbmcgZnVuY3Rpb25hbGl0eVxuXG4gICAgICAgIGNvbnN0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBjaGVja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tFbC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBjaGVja0VsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QudG9nZ2xlQ29tcGxldGlvbih0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjaGVja0NvbnRhaW5lci5hcHBlbmQoY2hlY2tFbCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGVFbC5pbm5lckhUTUwgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgdGl0bGVFbC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5cbiAgICAgICAgY29uc3QgZGF0ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXRlRWwuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgZGF0ZUVsLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBwcmlvcml0eUVsLmlubmVySFRNTCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgICAgICBwcmlvcml0eUVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JylcblxuICAgICAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVkaXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEVsLmlubmVySFRNTCA9ICfinI4nO1xuICAgICAgICAgICAgZWRpdEVsLm9uY2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsaUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgbGlDb250YWluZXIuYXBwZW5kKHRoaXMubG9hZFRhc2tGb3JtKHRoaXMuY3VycmVudFByb2plY3QsIHRhc2spKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRhc2tFbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChsaUNvbnRhaW5lciwgdGFza0VsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICBlZGl0Q29udGFpbmVyLmFwcGVuZChlZGl0RWwpO1xuXG4gICAgICAgIGNvbnN0IGRlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGRlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxFbC4gaW5uZXJIVE1MID0gJ3gnXG4gICAgICAgICAgICBkZWxFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFpbmVyKCdwcm9qZWN0JywgdGhpcy5jdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZWRpdENvbnRhaW5lci5hcHBlbmQoZGVsRWwpO1xuXG4gICAgICAgIHRhc2tFbC5hcHBlbmQoY2hlY2tDb250YWluZXIsIHRpdGxlRWwsIGRhdGVFbCwgcHJpb3JpdHlFbCwgZWRpdENvbnRhaW5lciwgZGVsQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gdGFza0VsXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRUYXNrRm9ybSAocHJvamVjdCwgdGFzaykge1xuXG4gICAgICAgIC8vIExvYWQgZm9ybSBmb3IgbmV3IHRhc2tzLlxuICAgICAgICAvLyBDYW4gYmUgdXNlZCBmb3IgZWRpdGluZyBvciBjcmVhdGlvbiBmcm9tIHNjcmF0Y2guIENoZWNrcyBmb3IgZXhpc2l0bmcgdGFzayBhcmd1bWVudCB0byBkZXRlcm1pbmUgb3V0cHV0LlxuXG4gICAgICAgIGxldCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRm9ybScpO1xuXG4gICAgICAgIGlmICh0YXNrRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tGb3JtXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdyZXR1cm4gZmFsc2UnKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tGb3JtJywgJ3Rhc2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuXG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gSXRlcmF0aXZlIGNyZWF0aW9uIG9mIHJhZGlvIGJ1dHRvbiBzZWxlY3RvcnMgZm9yIHByaW9yaXR5LiBEZWZhdWx0cyB0byBtZWRpdW0sIG9yIHByZWV4aXN0aW5nIHRhc2sgdmFsdWUuXG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eVNlbGVjdG9yJylcbiAgICAgICAgY29uc3QgcHJpb3JpdHlWYWxzID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJpb3JpdHlWYWxzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByaW9yaXR5VmFsc1tpXSk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IHByaW9yaXR5VmFsc1tpXVxuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eU9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcmlvcml0eU9wdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgIHByaW9yaXR5T3B0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICAgICAgcHJpb3JpdHlPcHQudmFsdWUgPSBwcmlvcml0eVZhbHNbaV1cbiAgICAgICAgICAgIGlmICh0YXNrICYmIHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gcHJpb3JpdHlWYWxzW2ldLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eU9wdC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmICghdGFzayAmJiBpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlPcHQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0b3IuYXBwZW5kKHByaW9yaXR5T3B0LCBwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9ICfinJMnO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9ICd4JztcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGb3JtLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHRoaXMubG9hZFRhc2sodGFzayksIHRhc2tGb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRWxlbWVudCh0YXNrRm9ybSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kKFxuICAgICAgICAgICAgY2hlY2tFbCxcbiAgICAgICAgICAgIHRpdGxlSW5wdXQsIFxuICAgICAgICAgICAgZGF0ZUlucHV0LFxuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3RvciwgXG4gICAgICAgICAgICBidXR0b25Db250YWluZXJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgc3VibWl0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlKTtcblxuXG4gICAgICAgICAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIWRhdGVJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIG5ld1Rhc2suaWQgPSB0YXNrLmlkO1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LnJlcGxhY2VUYXNrKG5ld1Rhc2ssIHRhc2ssIHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QuYWRkVGFzayhwcm9qZWN0LCBuZXdUYXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIHByb2plY3QpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0YXNrRm9ybVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkUHJvamVjdEZvcm0ocHJvamVjdCkge1xuXG4gICAgICAgIC8vIExvYWQgZm9ybSBmb3IgbmV3IHByb2plY3QuXG4gICAgICAgIC8vIENhbiBiZSB1c2VkIGZvciBlZGl0aW5nIG9yIGNyZWF0aW9uIGZyb20gc2NyYXRjaC4gQ2hlY2tzIGZvciBleGlzaXRuZyBwcm9qZWN0IGFyZ3VtZW50IHRvIGRldGVybWluZSBvdXRwdXQuXG5cbiAgICAgICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG5cbiAgICAgICAgaWYgKHByb2plY3RGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdEZvcm1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ29uc3VibWl0JywgJ3JldHVybiBmYWxzZScpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSlcblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAn4pyTJztcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHt0aGlzLmRlbGV0ZUVsZW1lbnQocHJvamVjdEZvcm0pfTtcblxuICAgICAgICBpZiAocHJvamVjdCl7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgcHJvamVjdEZvcm0ub25zdWJtaXQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5pZCA9IHByb2plY3QuaWQ7XG4gICAgICAgICAgICAgICAgVG9kb0xpc3QucmVwbGFjZVByb2plY3QobmV3UHJvamVjdCwgcHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvZG9MaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcigncHJvamVjdCcsIG5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9qZWN0Rm9ybVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkTm90ZUZvcm0gKG5vdGUpIHtcblxuICAgICAgICAvLyBMb2FkIGZvcm0gZm9yIG5ldyBub3RlLlxuICAgICAgICAvLyBDYW4gYmUgdXNlZCBmb3IgZWRpdGluZyBvciBjcmVhdGlvbiBmcm9tIHNjcmF0Y2guIENoZWNrcyBmb3IgZXhpc2l0bmcgbm90ZSBhcmd1bWVudCB0byBkZXRlcm1pbmUgb3V0cHV0LlxuXG4gICAgICAgIGxldCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlRm9ybScpO1xuXG4gICAgICAgIGlmIChub3RlRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vdGVGb3JtXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgbm90ZUZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdyZXR1cm4gZmFsc2UnKTtcbiAgICAgICAgICAgIG5vdGVGb3JtLmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcbiAgICAgICAgICAgIG5vdGVGb3JtLmNsYXNzTGlzdC5hZGQoJ25vdGVGb3JtJyk7XG4gICAgICAgICAgICBub3RlRm9ybS5jbGFzc0xpc3QuYWRkKCd1bnJvbGxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBjb250ZW50SW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzMyJyk7XG4gICAgICAgICAgICBjb250ZW50SW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMyJyk7ICBcblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAn4pyTJztcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSAneCc7XG5cbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbm90ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUVsZW1lbnQobm90ZUZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZiAobm90ZSkge1xuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IG5vdGUudGl0bGU7XG4gICAgICAgICAgICBjb250ZW50SW5wdXQudmFsdWUgPSBub3RlLmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG5vdGVGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBjb250ZW50SW5wdXQsIHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBub3RlRm9ybS5vbnN1Ym1pdCA9ICgpID0+IHtcblxuICAgICAgICAgICAgbGV0IG5ld05vdGUgPSBuZXcgTm90ZSh0aXRsZUlucHV0LnZhbHVlLCBjb250ZW50SW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAobm90ZSkge1xuICAgICAgICAgICAgICAgIG5ld05vdGUuaWQgPSBub3RlLmlkO1xuICAgICAgICAgICAgICAgIG5ld05vdGUucGlubmVkID0gbm90ZS5waW5uZWQ7XG5cbiAgICAgICAgICAgICAgICBOb3RlTGlzdC5yZXBsYWNlKG5ld05vdGUsIG5vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBOb3RlTGlzdC5hZGQobmV3Tm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRhaW5lcignbm90ZScpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3RlRm9ybVxuICAgIH1cblxuICAgIHN0YXRpYyBlZGl0Tm90ZSAobm90ZSkge1xuXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBkZWxldGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH1cbn0iLCJmdW5jdGlvbiB3cml0ZUlkIChjdXJyZW50SWRzKSB7XG5cbiAgICBsZXQgbmV3SWQgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyKiozMikpO1xuXG5cbiAgICB3aGlsZSAoY3VycmVudElkcy5pbmNsdWRlcyhuZXdJZCkpIHtcbiAgICAgICAgbmV3SWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMioqMzIpKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5ld0lkO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2Uoa2V5LCB2YWx1ZSl7XG4gICAgY29uc29sZS5sb2coXCJwb3B1bGF0aW5nLi4uXCIpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufVxuXG5leHBvcnQge1xuICAgIHdyaXRlSWQsXG4gICAgcG9wdWxhdGVTdG9yYWdlXG59OyIsImltcG9ydCBOb3RlTGlzdCBmcm9tICcuL25vdGVMaXN0LmpzJztcbmltcG9ydCB7d3JpdGVJZH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZSB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMuaWQgPSB3cml0ZUlkKE5vdGVMaXN0LmdldElkcygpKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLmRhdGUgPSBEYXRlKCk7XG4gICAgICAgIHRoaXMucGlubmVkID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCBOb3RlIGZyb20gJy4vbm90ZS5qcyc7XG5pbXBvcnQge3BvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY2xhc3MgTm90ZUxpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5vdGVzID0gW107XG4gICAgfTtcblxuICAgIGFkZChub3RlKSB7XG4gICAgICAgIHRoaXMubm90ZXMucHVzaChub3RlKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgIH1cblxuICAgIHJlbW92ZShub3RlKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLm5vdGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAobm90ZS5pZCA9PT0gdGhpcy5ub3Rlc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgnbm90ZUxpc3QnLCB0aGlzLm5vdGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcGxhY2UgKG5ld05vdGUsIG9sZE5vdGUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMubm90ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChvbGROb3RlLmlkID09PSB0aGlzLm5vdGVzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3Rlc1tpXSA9IG5ld05vdGU7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLm5vdGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0SWRzKCkge1xuICAgICAgICBsZXQgaWRzID0gW11cblxuICAgICAgICBpZiAoIXRoaXMubm90ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBpZHNcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgbm90ZSBvZiB0aGlzLm5vdGVzKSB7XG4gICAgICAgICAgICBpZHMucHVzaChub3RlLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG5cbiAgICB0b2dnbGVQaW4obm90ZSkge1xuICAgICAgICBub3RlLnBpbm5lZCA9ICFub3RlLnBpbm5lZDtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCdub3RlTGlzdCcsIHRoaXMubm90ZXMpO1xuICAgIH1cblxuICAgIHBpblNvcnQoKSB7XG4gICAgICAgIGxldCBzb3J0ZWROb3RlcyA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBub3RlIG9mIHRoaXMubm90ZXMpIHtcbiAgICAgICAgICAgIGlmIChub3RlLnBpbm5lZCkge1xuICAgICAgICAgICAgICAgIHNvcnRlZE5vdGVzLnVuc2hpZnQobm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHNvcnRlZE5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGVzLnNwbGljZSgwLCBzb3J0ZWROb3Rlcy5sZW5ndGgsIC4uLnNvcnRlZE5vdGVzKTtcbiAgICB9XG5cbiAgICBkYXRlU29ydCAoKSB7XG4gICAgICAgIHRoaXMubm90ZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGVMaXN0KCkiLCJpbXBvcnQge3dyaXRlSWR9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSkge1xuICAgICAgICB0aGlzLmlkID0gd3JpdGVJZChUb2RvTGlzdC5nZXRQcm9qZWN0SWRzKCkpO1xuICAgICAgICB0aGlzLiB0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxufSIsImltcG9ydCB7d3JpdGVJZH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLmlkID0gd3JpdGVJZChUb2RvTGlzdC5nZXRUYXNrSWRzKCkpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcbiAgICB9XG59IiwiaW1wb3J0IFByb2plY3QgIGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7cG9wdWxhdGVTdG9yYWdlfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jbGFzcyBUb2RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG5cbiAgICAgICAgLy90aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0hvbWUnLCAnMDkvMTQvMjInKSk7ICAgIFxuICAgICAgICAvL25ldyBQcm9qZWN0KCdUb2RheScsIGhlbHBlcnMuZGF0ZS50b2RheSgpKVxuICAgICAgICAvL25ldyBQcm9qZWN0KCdUaGlzIFdlZWsnLCBoZWxwZXJzLmRhdGUuanVtcCg3KSlcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgYWRkVGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBsZXRpb24odGFzaykge1xuICAgICAgICB0YXNrLmNvbXBsZXRlID0gIXRhc2suY29tcGxldGU7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8PXRoaXMucHJvamVjdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHRoaXMucHJvamVjdHNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2ssIHByb2plY3QpIHtcblxuICAgICAgICBpZiAoIXByb2plY3Qpe1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHByb2plY3QudGFza3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IHByb2plY3QudGFza3NbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50YXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSBwcm9qZWN0LnRhc2tzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcGxhY2VUYXNrIChuZXdUYXNrLCBvbGRUYXNrLCBwcm9qZWN0KSB7XG4gICAgICAgIGlmICghcHJvamVjdCl7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50YXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVGFzay5pZCA9PT0gcHJvamVjdC50YXNrc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrc1tpXSA9IG5ld1Rhc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoJ3RvZG9MaXN0JywgdGhpcy5wcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRhc2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFRhc2suaWQgPT09IHByb2plY3QudGFza3NbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrc1tpXSA9IG5ld1Rhc2s7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgndG9kb0xpc3QnLCB0aGlzLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVwbGFjZVByb2plY3QobmV3UHJvamVjdCwgb2xkUHJvamVjdCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8PXRoaXMucHJvamVjdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChvbGRQcm9qZWN0LmlkID09PSB0aGlzLnByb2plY3RzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0c1tpXSA9IG5ld1Byb2plY3Q7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIHRoaXMucHJvamVjdHMpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdElkcygpIHtcbiAgICAgICAgbGV0IGlkcyA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RzKSB7XG4gICAgICAgICAgICBpZHMucHVzaChwcm9qZWN0LmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG5cbiAgICBnZXRUYXNrSWRzKCkge1xuICAgICAgICBsZXQgaWRzID0gW11cblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgICAgICAgICAgIGlkcy5wdXNoKHRhc2suaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRzXG4gICAgfVxuXG4gICAgcHJpb3JpdHlTb3J0KHByb2plY3QpIHtcblxuICAgICAgICBsZXQgc29ydGVkVGFza3MgPSBbXVxuICAgICAgICBsZXQgbWVkSW5kZXggPSAwXG5cbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcblxuICAgICAgICAgICAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnSGlnaCc6XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFRhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICsrbWVkSW5kZXg7IFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ01lZGl1bSc6XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFRhc2tzLnNwbGljZShtZWRJbmRleCwgMCwgdGFzayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnTG93JzpcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKDAsIHNvcnRlZFRhc2tzLmxlbmd0aCwgLi4uc29ydGVkVGFza3MpO1xuICAgIH1cblxuICAgIGRhdGVTb3J0KHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdC50YXNrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUb2RvTGlzdCgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYXNrIGZyb20gJy4vbW9kdWxlcy90YXNrLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0LmpzJztcbmltcG9ydCBOb3RlIGZyb20gJy4vbW9kdWxlcy9ub3RlLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vbW9kdWxlcy90b2RvTGlzdC5qcyc7XG5pbXBvcnQgTm90ZUxpc3QgZnJvbSAnLi9tb2R1bGVzL25vdGVMaXN0LmpzJztcbmltcG9ydCB7d3JpdGVJZCwgcG9wdWxhdGVTdG9yYWdlfSBmcm9tICcuL21vZHVsZXMvaGVscGVycy5qcyc7XG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJLmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5cblxuLy8gVEVTVElORyAtIEZPUiBMQVRFUiBSRU1PVkFMXG5cbmNvbnNvbGUubG9nKFwidGVzdGluZ1wiKTtcblxubGV0IHRlc3RUYXNrID0gbmV3IFRhc2soJ3dhbGsgZG9nJywgJ0RlY2VtYmVyIDggMjAyMScsICdsb3cnKTtcbmxldCB0ZXN0Tm90ZSA9IG5ldyBOb3RlKCdncm9jZXJpZXMnLCAnYXZvY2FkbywgbWFuZ28sIG1pbGssIHJpY2UnKTtcbmxldCB0ZXN0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdzZWxsIGhvdXNlJyk7XG5cbi8vVUkudGVzdEJvZHkoKVxuXG4vKlxuXG50ZXN0UHJvamVjdC50YXNrcy5wdXNoKHRlc3RUYXNrKTtcbk5vdGVMaXN0LmFkZCh0ZXN0Tm90ZSk7XG5Ub2RvTGlzdC5hZGRQcm9qZWN0KHRlc3RQcm9qZWN0KTtcbk5vdGVMaXN0LmFkZChuZXcgTm90ZSgnbWUgbW93JywgXCJoZSdzIHZlcnkgc21hbGwgYnV0IGJpZyBldmlsXCIpKTtcbk5vdGVMaXN0LmFkZChuZXcgTm90ZSgnbW92aWVzJywgJ0RlYXRoIG9mIFN0YWxpbiwgSW50ZXJzdGVsbGFyLCBBbGllbicpKVxuXG4qL1xuXG4vLyBJTklUSUFURSBMT0NBTCBTVE9SQUdFXG5cbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSl7XG4gICAgY29uc29sZS5sb2coXCJsb2NhbCBzdG9yYWdlIGVtcHR5XCIpO1xuXG4gICAgcG9wdWxhdGVTdG9yYWdlKCd0b2RvTGlzdCcsIFRvZG9MaXN0LnByb2plY3RzKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoJ25vdGVMaXN0JywgTm90ZUxpc3Qubm90ZXMpO1xufVxuXG5lbHNle1xuICAgIFRvZG9MaXN0LnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSkgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKSA6IFtdO1xuICAgIE5vdGVMaXN0Lm5vdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZUxpc3QnKSkgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlTGlzdCcpKSA6IFtdO1xufVxuXG5pZiAoIVRvZG9MaXN0LnByb2plY3RzWzBdKSB7XG4gICAgY29uc29sZS5sb2coVG9kb0xpc3QucHJvamVjdHNbMF0pXG4gICAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZyBkZWZhdWx0IHByb2plY3QnKVxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0hvbWUnKVxuICAgIFRvZG9MaXN0LmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKFRvZG9MaXN0LnByb2plY3RzWzBdKVxufVxuXG5VSS5sb2FkVUkoKTtcblxuLy8gTUFQUElORyBXSU5ET1cgVkFSUyBUTyBTQ1JJUFQgVkFSU1xuXG53aW5kb3cuVG9kb0xpc3QgPSBUb2RvTGlzdFxud2luZG93LnRlc3RUYXNrID0gdGVzdFRhc2tcbndpbmRvdy50ZXN0Tm90ZSA9IHRlc3ROb3RlXG53aW5kb3cud3JpdGVJZCA9IHdyaXRlSWRcbndpbmRvdy5Ob3RlTGlzdCA9IE5vdGVMaXN0XG53aW5kb3cuUHJvamVjdCA9IFByb2plY3RcbndpbmRvdy5UYXNrID0gVGFza1xud2luZG93Lk5vdGUgPSBOb3RlXG53aW5kb3cucG9wdWxhdGVTdG9yYWdlID0gcG9wdWxhdGVTdG9yYWdlXG53aW5kb3cuVUkgPSBVSSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==