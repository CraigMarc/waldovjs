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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/waldo2.jpg */ "./src/images/waldo2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {}


.svgContainer {}

#container {

    height: 1926px;
    width: 2500px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: 100% 100%;
}

.menuContainer {
    border: solid;
    width: 150px;
    height: 250px;
    background-color: white;
}

.button:hover {
    background-color: gray;
}

.message {
    width: 200px;
    height: 70px;
    border: solid;
    background-color: white;
}

form {
    background-color: white;
}

.menuImg {
    width: 50px;
    height: 60px;
}

.headerImg {
    width: 50px;
    height: 60px;
}

.picContainer {
    display: flex;

}

header {
    width: 100%;
    height: 60px;
   
   
}

.headerContainer {
    display: flex;
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: white;
    top: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,MAAM;;;AAGN,eAAe;;AAEf;;IAEI,cAAc;IACd,aAAa;IACb,yDAA0C;IAC1C,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,WAAW;IACX,YAAY;;;AAGhB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,MAAM;AACV","sourcesContent":["body {}\n\n\n.svgContainer {}\n\n#container {\n\n    height: 1926px;\n    width: 2500px;\n    background-image: url(./images/waldo2.jpg);\n    background-size: 100% 100%;\n}\n\n.menuContainer {\n    border: solid;\n    width: 150px;\n    height: 250px;\n    background-color: white;\n}\n\n.button:hover {\n    background-color: gray;\n}\n\n.message {\n    width: 200px;\n    height: 70px;\n    border: solid;\n    background-color: white;\n}\n\nform {\n    background-color: white;\n}\n\n.menuImg {\n    width: 50px;\n    height: 60px;\n}\n\n.headerImg {\n    width: 50px;\n    height: 60px;\n}\n\n.picContainer {\n    display: flex;\n\n}\n\nheader {\n    width: 100%;\n    height: 60px;\n   \n   \n}\n\n.headerContainer {\n    display: flex;\n    position: fixed;\n    height: 60px;\n    width: 100%;\n    background-color: white;\n    top: 0;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/addCircle.js":
/*!**************************!*\
  !*** ./src/addCircle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addCircle = (coord) => {
    // get click coordinates
    let [x, y] = coord
   
  
  const element = document.getElementById('container');
  
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.id = 'circle';
  circle.setAttribute('cx', x)
  circle.setAttribute('cy', y)
  circle.setAttribute('r', "30")
  circle.setAttribute('stroke', "black")
  circle.setAttribute('stroke-width', "3")
  circle.setAttribute('fill', "none")
  
  element.appendChild(circle)
  
    
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCircle);  

/***/ }),

/***/ "./src/addMenu.js":
/*!************************!*\
  !*** ./src/addMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _images_waldoCropped_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/waldoCropped.jpg */ "./src/images/waldoCropped.jpg");
/* harmony import */ var _images_wendaCropped_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/wendaCropped.jpg */ "./src/images/wendaCropped.jpg");
/* harmony import */ var _images_wizardCropped_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/wizardCropped.jpg */ "./src/images/wizardCropped.jpg");
//import checkCoord from './index';






const addMenu = (coord, menuArray) => {
  let [x, y] = coord


  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');
  menuContainer.style.position = 'absolute';
  if (x < 1500) {
    menuContainer.style.left = x + 50 + "px";
    menuContainer.style.top = y + 20 + "px";
  }
  else {
    menuContainer.style.left = x - 240 + "px";
    menuContainer.style.top = y + 20 + "px";
  }


  const addMenuItems = () => {
    for (let i = 0; i < menuArray.length; i++) {

      const name = document.createElement('div');
      name.classList.add('button');
      name.id = menuArray[i];
      //capitalize first letter
      let firstLetterCap = menuArray[i][0].toUpperCase()
      const remainingLetters = menuArray[i].slice(1)
      const capitalizedWord = firstLetterCap + remainingLetters
      name.textContent = capitalizedWord
      
      const imgContainer = document.createElement('div');
      
      const image = new Image();
      if (menuArray[i] == 'waldo') {
        image.src = _images_waldoCropped_jpg__WEBPACK_IMPORTED_MODULE_1__
        
      }
      if (menuArray[i] == 'wenda') {
        image.src = _images_wendaCropped_jpg__WEBPACK_IMPORTED_MODULE_2__
        
      }
      if (menuArray[i] == 'wizard') {
        image.src = _images_wizardCropped_jpg__WEBPACK_IMPORTED_MODULE_3__
        
      }
      image.classList.add('menuImg');
      image.id = menuArray[i];
      imgContainer.appendChild(image)
      name.appendChild(imgContainer)

      menuContainer.appendChild(name)
     
    }
  }

  addMenuItems()

  document.body.appendChild(menuContainer)

  // event listener for drop down

  const select = document.querySelectorAll('.button');

  select.forEach((button) => {

    button.addEventListener('click', check)
  })

  function check(e) {
    
    if (e.target.id) {
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkCoord)(e.target.id, coord)
    }
    if (e.target.parentElement.id) {
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkCoord)(e.target.parentElement.id, coord)
    }
    
    menuContainer.remove()
    const circle = document.getElementById("circle")
    circle.remove()
    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.picListener)()

  }

}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMenu);


/***/ }),

/***/ "./src/addMessage.js":
/*!***************************!*\
  !*** ./src/addMessage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// add message

const addMessage = (coord, message, name) => {
  
    let [x, y] = coord
 
    const element = document.createElement('div');
    element.id = 'message';
    if (message == false) {
      element.textContent = "Try Again"
    }
    if (message == true) {
      element.textContent = `You Found ${name}`
    }
    element.classList.add('message');
    element.style.position = 'absolute';
    element.style.left = x + "px";
    element.style.top = y + "px";
  
    document.body.appendChild(element)
    
    setTimeout(removeMessage, 1000);
    
    function removeMessage() {
      element.remove()
    }


  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMessage);

/***/ }),

/***/ "./src/addPic.js":
/*!***********************!*\
  !*** ./src/addPic.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addPic = () => {

    const picContainer = document.createElement('div');
    picContainer.id = 'picContainer'
    picContainer.classList.add('svgContainer');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
   
    svg.id = 'container';
    picContainer.appendChild(svg)

    document.body.appendChild(picContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPic);

/***/ }),

/***/ "./src/gameStorage.js":
/*!****************************!*\
  !*** ./src/gameStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GameData {
    constructor(character, x, y) {
      this.character = character
      this.x = x
      this.y = y
    }
    
  }
  
  class GameStorage {
    constructor(){
      this.charArray = []
    }
    // create a new player and save it in the collection
    newData(character, x, y){
      let gd = new GameData(character, x, y)
      this.charArray.push(gd)
      return this.charArray
    }
    
    get allData(){
      return this.charArray
    }

   get deleteData() {
    
      return this.charArray.length = 0
    }
  
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameStorage);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_waldoCropped_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/waldoCropped.jpg */ "./src/images/waldoCropped.jpg");
/* harmony import */ var _images_wendaCropped_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/wendaCropped.jpg */ "./src/images/wendaCropped.jpg");
/* harmony import */ var _images_wizardCropped_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/wizardCropped.jpg */ "./src/images/wizardCropped.jpg");




let charArray = [_images_waldoCropped_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_wendaCropped_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_wizardCropped_jpg__WEBPACK_IMPORTED_MODULE_2__]

const getHighScore = async () => {


  try {

    const response = await fetch('http://localhost:3000/game/highscore')

    const gameData = await response.json();
    
    return gameData
  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }


}




const addHeader = async () => {
  //******************************** if message: no high score 
  let highScoreData = await getHighScore()

  // convert to minutes and seconds

  let seconds = highScoreData[0].score / 1000;
   
    seconds = seconds % 3600;
    const minutes = parseInt( seconds / 60 );
    seconds = Math.round(seconds % 60);

  const header = document.createElement('header');
  header.id = 'header'
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('headerContainer');
  const titleDiv = document.createElement('div');
  titleDiv.textContent = "Where's Waldo"
  const highScoreDiv = document.createElement('div');
  highScoreDiv.classList.add('highScoreContainer');
  highScoreDiv.textContent = highScoreData[0].userName + " has the current best time of " + minutes + " minutes " + seconds + " seconds"
  const picContainer = document.createElement('div');
  picContainer.classList.add('picContainer');
  for (let i = 0; i < charArray.length; i++) {

    const picDiv = document.createElement('div');
    picDiv.classList.add('picDiv');
    const image = new Image();
    image.classList.add('headerImg');
    image.src = charArray[i]
    picDiv.appendChild(image)
    picContainer.appendChild(picDiv)
  }
  const timerContainer = document.createElement('div');
  timerContainer.id = "timer"
  headerContainer.appendChild(titleDiv)
  headerContainer.appendChild(picContainer)
  headerContainer.appendChild(timerContainer)
  headerContainer.appendChild(highScoreDiv)
  header.appendChild(headerContainer)

  document.body.appendChild(header)

  // add timer to header

  const startTime = Math.floor(Date.now() / 1000);
  
  function startTimeCounter() {
      let now = Math.floor(Date.now() / 1000); 
      let diff = now - startTime;
      let m = Math.floor(diff / 60); 
      let s = Math.floor(diff % 60);
      m = checkTime(m);
      s = checkTime(s);
       
      document.getElementById("timer").textContent = m + ":" + s; 
      setTimeout(startTimeCounter, 500); 
  }
  
  function checkTime(i) {
      if (i < 10) {i = "0" + i};  
      return i;
  }
  
  startTimeCounter();


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHeader); 

/***/ }),

/***/ "./src/highScoreForm.js":
/*!******************************!*\
  !*** ./src/highScoreForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const highScoreForm = (coord) => {
    // get click coordinates
   let [x, y] = coord
   
  //create form
    const form = document.createElement('form');
    form.action = ''
    form.id = 'form'
    form.style.position = 'absolute';
    form.style.left = x  + "px";
    form.style.top = y + "px";
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    const title = document.createElement('p');
    title.textContent = "You have the new best time enter your name."
    const label1 = document.createElement('label');
    label1.textContent = "Name"
    const input1 = document.createElement('input');
    input1.name = "name"
    input1.type = "text"
    input1.id = "name"
    input1.required = true
    const submitContainer = document.createElement('div');
    submitContainer.classList.add('submitContainer');
    const button = document.createElement('button');
    button.type = 'submit'
    button.textContent = 'Submit'

    //append elements

    form.appendChild(formContainer);
    formContainer.appendChild(title);
    formContainer.appendChild(label1);
    formContainer.appendChild(input1);
    formContainer.appendChild(submitContainer)
    submitContainer.appendChild(button)
    
    document.body.appendChild(form)

  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (highScoreForm); 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCoord: () => (/* binding */ checkCoord),
/* harmony export */   currentGame: () => (/* binding */ currentGame),
/* harmony export */   picListener: () => (/* binding */ picListener)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _myName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myName */ "./src/myName.js");
/* harmony import */ var _images_waldo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/waldo.jpg */ "./src/images/waldo.jpg");
/* harmony import */ var _addMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addMenu */ "./src/addMenu.js");
/* harmony import */ var _addCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addCircle */ "./src/addCircle.js");
/* harmony import */ var _addMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addMessage */ "./src/addMessage.js");
/* harmony import */ var _gameStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameStorage */ "./src/gameStorage.js");
/* harmony import */ var _addPic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addPic */ "./src/addPic.js");
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./startGame */ "./src/startGame.js");
/* harmony import */ var _playerData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./playerData */ "./src/playerData.js");
/* harmony import */ var _highScoreForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./highScoreForm */ "./src/highScoreForm.js");
/* harmony import */ var _youWon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./youWon */ "./src/youWon.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header */ "./src/header.js");














let currentPlayer = new _playerData__WEBPACK_IMPORTED_MODULE_9__["default"]
let currentGame = new _gameStorage__WEBPACK_IMPORTED_MODULE_6__["default"]


//start game and add event listener
;(0,_startGame__WEBPACK_IMPORTED_MODULE_8__["default"])()


const startEvent = () => {
  const start = document.getElementById('button');
  start.addEventListener('click', startNewGame)
}

startEvent()

function startNewGame(e) {

  const startRemove = document.getElementById('buttonContainer');
  startRemove.remove()
  ;(0,_header__WEBPACK_IMPORTED_MODULE_12__["default"])()
  ;(0,_addPic__WEBPACK_IMPORTED_MODULE_7__["default"])()
  picListener()
  startTimer()
}

function startTimer() {
  let uuid = self.crypto.randomUUID();
  currentPlayer.newData(uuid)
 
  startApi(uuid)
}

async function startApi(uuid) {

  try {

    const response = await fetch(`http://localhost:3000/game/start?id=${uuid}`)

    const startData = await response.json();


  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }
}


/*add event listener*/
function picListener() {
  const pic = document.getElementById('container');
  pic.addEventListener('click', imageCoor)
}

// remove pic listener

function removePicListener() {
  
  const pic = document.getElementById('container');
  pic.removeEventListener('click', imageCoor)
}

//get coordinate of click

function imageCoor(e) {

  let coord = [e.offsetX, e.offsetY]

  let charArray = ['waldo', 'wenda', 'wizard']
  const charFoundArray = currentGame.allData.map((x) => x.character);

  // get array with remaining characters to add to the menu

  const menuArray = charArray.filter(function (x) {
    return charFoundArray.indexOf(x) < 0;
  });


  (0,_addCircle__WEBPACK_IMPORTED_MODULE_4__["default"])(coord)
  ;(0,_addMenu__WEBPACK_IMPORTED_MODULE_3__["default"])(coord, menuArray)
  removePicListener()
}

//make api call to check coord

const checkCoord = async (name, coord) => {

  let [x, y] = coord

  try {

    const response = await fetch(`http://localhost:3000/game?char_name=${name}&x=${x}&y=${y}`)

    const gameData = await response.json();

    let message = gameData.message
    if (message == true) {
      currentGame.newData(name, x, y)

      if (currentGame.allData.length == 3) {
        gameWon(coord)

      }
    }

    (0,_addMessage__WEBPACK_IMPORTED_MODULE_5__["default"])(coord, message, name)

  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }
}

const gameWon = async (coord) => {

  //console.log(currentPlayer.allData.uuid)


  try {

    const response = await fetch(`http://localhost:3000/game/end?id=${currentPlayer.allData.uuid}`)

    const stopData = await response.json();

    if (stopData.message == false) {
      console.log("you win")
      ;(0,_youWon__WEBPACK_IMPORTED_MODULE_11__["default"])(coord)

      setTimeout(removeMessage, 4000);



    }
    else {
      (0,_highScoreForm__WEBPACK_IMPORTED_MODULE_10__["default"])(coord)
      formEvent()



    }


  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }


}

function removeMessage() {
  const win = document.getElementById('youWon')
  const pic = document.getElementById('picContainer')
  const header = document.getElementById('header')
  win.remove()
  pic.remove()
  header.remove()
  currentGame.deleteData
  ;(0,_startGame__WEBPACK_IMPORTED_MODULE_8__["default"])()
  startEvent()
}

// form event listener
function formEvent() {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());

    sendData(data.name, currentPlayer.allData.uuid)

    const form = document.getElementById('form')
    const pic = document.getElementById('picContainer')
    const header = document.getElementById('header')
    form.remove()
    pic.remove()
    header.remove()
    currentGame.deleteData
    ;(0,_startGame__WEBPACK_IMPORTED_MODULE_8__["default"])()
    startEvent()

    

  })
}


async function sendData(name, uuid) {

  await fetch('http://localhost:3000/game/score', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      id: uuid,

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {

      console.log(data)
      //maybe set state for a rerender
    })
    .catch((err) => {
      console.log(err.message);
    });

}







/***/ }),

/***/ "./src/myName.js":
/*!***********************!*\
  !*** ./src/myName.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const myName = (name) => 'Hi! My name is ' + name;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myName);

/***/ }),

/***/ "./src/playerData.js":
/*!***************************!*\
  !*** ./src/playerData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class PlayerData {
    constructor(uuid) {
      
      this.uuid = uuid
      
    }
    
  }

  class PlayerStorage {
    constructor(){
      this.player = ""
    }
    // create a new player and save it in the collection
    newData(uuid){
      let pd = new PlayerData(uuid)
      this.player = pd
      return this.player
    }
    
    get allData(){
      return this.player
    }
  
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerStorage);

/***/ }),

/***/ "./src/startGame.js":
/*!**************************!*\
  !*** ./src/startGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_waldo2resize_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/waldo2resize.jpg */ "./src/images/waldo2resize.jpg");


const startGame = () => {


    const startContainer = document.createElement('div');
    startContainer.id = "buttonContainer"
    const heading = document.createElement('h1');
    heading.textContent = "Where's Waldo";
    const image1 = new Image();
    image1.src = _images_waldo2resize_jpg__WEBPACK_IMPORTED_MODULE_0__;
    image1.classList.add('waldo1Pic');
    const button = document.createElement('button');
    button.textContent = 'Start Game';
    button.id = 'button'
    startContainer.appendChild(heading)
    startContainer.appendChild(image1)
    startContainer.appendChild(button)
    document.body.appendChild(startContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);

/***/ }),

/***/ "./src/youWon.js":
/*!***********************!*\
  !*** ./src/youWon.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const youWon = (coord) => {
  
    let [x, y] = coord
 
    const element = document.createElement('div');
    element.id = 'youWon';
    element.style.position = 'absolute';
    element.style.left = x + "px";
    element.style.top = y - 80 + "px";
    const text = document.createElement('h2');
    text.textContent = "You Won!"

    element.appendChild(text)
  
    document.body.appendChild(element)
    
   
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (youWon);

/***/ }),

/***/ "./src/images/waldo.jpg":
/*!******************************!*\
  !*** ./src/images/waldo.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfb1cce8a93ef392e9ff.jpg";

/***/ }),

/***/ "./src/images/waldo2.jpg":
/*!*******************************!*\
  !*** ./src/images/waldo2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0e0289ef358bd1a3745.jpg";

/***/ }),

/***/ "./src/images/waldo2resize.jpg":
/*!*************************************!*\
  !*** ./src/images/waldo2resize.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7586d0849a542a575a1.jpg";

/***/ }),

/***/ "./src/images/waldoCropped.jpg":
/*!*************************************!*\
  !*** ./src/images/waldoCropped.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c7f01de60b41e84113b.jpg";

/***/ }),

/***/ "./src/images/wendaCropped.jpg":
/*!*************************************!*\
  !*** ./src/images/wendaCropped.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da73457264ed9ee9fe49.jpg";

/***/ }),

/***/ "./src/images/wizardCropped.jpg":
/*!**************************************!*\
  !*** ./src/images/wizardCropped.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74fbbeb4333e821f32f5.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2FkZENpcmNsZS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9hZGRNZW51LmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2FkZE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9zcmMvYWRkUGljLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2dhbWVTdG9yYWdlLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9oaWdoU2NvcmVGb3JtLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL215TmFtZS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9wbGF5ZXJEYXRhLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL3N0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy95b3VXb24uanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3dhbGRvMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge31cblxuXG4uc3ZnQ29udGFpbmVyIHt9XG5cbiNjb250YWluZXIge1xuXG4gICAgaGVpZ2h0OiAxOTI2cHg7XG4gICAgd2lkdGg6IDI1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5tZW51Q29udGFpbmVyIHtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4ubWVzc2FnZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lbnVJbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLmhlYWRlckltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ucGljQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgXG4gICBcbn1cblxuLmhlYWRlckNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRvcDogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLE1BQU07OztBQUdOLGVBQWU7O0FBRWY7O0lBRUksY0FBYztJQUNkLGFBQWE7SUFDYix5REFBMEM7SUFDMUMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7OztBQUdoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsTUFBTTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge31cXG5cXG5cXG4uc3ZnQ29udGFpbmVyIHt9XFxuXFxuI2NvbnRhaW5lciB7XFxuXFxuICAgIGhlaWdodDogMTkyNnB4O1xcbiAgICB3aWR0aDogMjUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvd2FsZG8yLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogc29saWQ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudUltZyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5oZWFkZXJJbWcge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ucGljQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICBcXG4gICBcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRvcDogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFkZENpcmNsZSA9IChjb29yZCkgPT4ge1xuICAgIC8vIGdldCBjbGljayBjb29yZGluYXRlc1xuICAgIGxldCBbeCwgeV0gPSBjb29yZFxuICAgXG4gIFxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICBcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdjaXJjbGUnKTtcbiAgY2lyY2xlLmlkID0gJ2NpcmNsZSc7XG4gIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2N4JywgeClcbiAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnY3knLCB5KVxuICBjaXJjbGUuc2V0QXR0cmlidXRlKCdyJywgXCIzMFwiKVxuICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBcImJsYWNrXCIpXG4gIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIFwiM1wiKVxuICBjaXJjbGUuc2V0QXR0cmlidXRlKCdmaWxsJywgXCJub25lXCIpXG4gIFxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNpcmNsZSlcbiAgXG4gICAgXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGFkZENpcmNsZTsgICIsIi8vaW1wb3J0IGNoZWNrQ29vcmQgZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQge1xuICBjaGVja0Nvb3JkLFxuICBwaWNMaXN0ZW5lcixcbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuaW1wb3J0IHdhbGRvIGZyb20gJy4vaW1hZ2VzL3dhbGRvQ3JvcHBlZC5qcGcnXG5pbXBvcnQgd2VuZGEgZnJvbSAnLi9pbWFnZXMvd2VuZGFDcm9wcGVkLmpwZydcbmltcG9ydCB3aXphcmQgZnJvbSAnLi9pbWFnZXMvd2l6YXJkQ3JvcHBlZC5qcGcnXG5cbmNvbnN0IGFkZE1lbnUgPSAoY29vcmQsIG1lbnVBcnJheSkgPT4ge1xuICBsZXQgW3gsIHldID0gY29vcmRcblxuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Q29udGFpbmVyJyk7XG4gIG1lbnVDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBpZiAoeCA8IDE1MDApIHtcbiAgICBtZW51Q29udGFpbmVyLnN0eWxlLmxlZnQgPSB4ICsgNTAgKyBcInB4XCI7XG4gICAgbWVudUNvbnRhaW5lci5zdHlsZS50b3AgPSB5ICsgMjAgKyBcInB4XCI7XG4gIH1cbiAgZWxzZSB7XG4gICAgbWVudUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0geCAtIDI0MCArIFwicHhcIjtcbiAgICBtZW51Q29udGFpbmVyLnN0eWxlLnRvcCA9IHkgKyAyMCArIFwicHhcIjtcbiAgfVxuXG5cbiAgY29uc3QgYWRkTWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgICBuYW1lLmlkID0gbWVudUFycmF5W2ldO1xuICAgICAgLy9jYXBpdGFsaXplIGZpcnN0IGxldHRlclxuICAgICAgbGV0IGZpcnN0TGV0dGVyQ2FwID0gbWVudUFycmF5W2ldWzBdLnRvVXBwZXJDYXNlKClcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0xldHRlcnMgPSBtZW51QXJyYXlbaV0uc2xpY2UoMSlcbiAgICAgIGNvbnN0IGNhcGl0YWxpemVkV29yZCA9IGZpcnN0TGV0dGVyQ2FwICsgcmVtYWluaW5nTGV0dGVyc1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVkV29yZFxuICAgICAgXG4gICAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIFxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGlmIChtZW51QXJyYXlbaV0gPT0gJ3dhbGRvJykge1xuICAgICAgICBpbWFnZS5zcmMgPSB3YWxkb1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGlmIChtZW51QXJyYXlbaV0gPT0gJ3dlbmRhJykge1xuICAgICAgICBpbWFnZS5zcmMgPSB3ZW5kYVxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGlmIChtZW51QXJyYXlbaV0gPT0gJ3dpemFyZCcpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gd2l6YXJkXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudUltZycpO1xuICAgICAgaW1hZ2UuaWQgPSBtZW51QXJyYXlbaV07XG4gICAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICBuYW1lLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcilcblxuICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKVxuICAgICBcbiAgICB9XG4gIH1cblxuICBhZGRNZW51SXRlbXMoKVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcilcblxuICAvLyBldmVudCBsaXN0ZW5lciBmb3IgZHJvcCBkb3duXG5cbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpO1xuXG4gIHNlbGVjdC5mb3JFYWNoKChidXR0b24pID0+IHtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGNoZWNrKGUpIHtcbiAgICBcbiAgICBpZiAoZS50YXJnZXQuaWQpIHtcbiAgICAgIGNoZWNrQ29vcmQoZS50YXJnZXQuaWQsIGNvb3JkKVxuICAgIH1cbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCkge1xuICAgICAgY2hlY2tDb29yZChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLCBjb29yZClcbiAgICB9XG4gICAgXG4gICAgbWVudUNvbnRhaW5lci5yZW1vdmUoKVxuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2lyY2xlXCIpXG4gICAgY2lyY2xlLnJlbW92ZSgpXG4gICAgcGljTGlzdGVuZXIoKVxuXG4gIH1cblxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51O1xuIiwiLy8gYWRkIG1lc3NhZ2VcblxuY29uc3QgYWRkTWVzc2FnZSA9IChjb29yZCwgbWVzc2FnZSwgbmFtZSkgPT4ge1xuICBcbiAgICBsZXQgW3gsIHldID0gY29vcmRcbiBcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5pZCA9ICdtZXNzYWdlJztcbiAgICBpZiAobWVzc2FnZSA9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiVHJ5IEFnYWluXCJcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UgPT0gdHJ1ZSkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGBZb3UgRm91bmQgJHtuYW1lfWBcbiAgICB9XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4gIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICBcbiAgICBzZXRUaW1lb3V0KHJlbW92ZU1lc3NhZ2UsIDEwMDApO1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZU1lc3NhZ2UoKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuXG5cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IGFkZE1lc3NhZ2U7IiwiY29uc3QgYWRkUGljID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcGljQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGljQ29udGFpbmVyLmlkID0gJ3BpY0NvbnRhaW5lcidcbiAgICBwaWNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ZnQ29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgIFxuICAgIHN2Zy5pZCA9ICdjb250YWluZXInO1xuICAgIHBpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBpY0NvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFBpYzsiLCJjbGFzcyBHYW1lRGF0YSB7XG4gICAgY29uc3RydWN0b3IoY2hhcmFjdGVyLCB4LCB5KSB7XG4gICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlclxuICAgICAgdGhpcy54ID0geFxuICAgICAgdGhpcy55ID0geVxuICAgIH1cbiAgICBcbiAgfVxuICBcbiAgY2xhc3MgR2FtZVN0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICB0aGlzLmNoYXJBcnJheSA9IFtdXG4gICAgfVxuICAgIC8vIGNyZWF0ZSBhIG5ldyBwbGF5ZXIgYW5kIHNhdmUgaXQgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICBuZXdEYXRhKGNoYXJhY3RlciwgeCwgeSl7XG4gICAgICBsZXQgZ2QgPSBuZXcgR2FtZURhdGEoY2hhcmFjdGVyLCB4LCB5KVxuICAgICAgdGhpcy5jaGFyQXJyYXkucHVzaChnZClcbiAgICAgIHJldHVybiB0aGlzLmNoYXJBcnJheVxuICAgIH1cbiAgICBcbiAgICBnZXQgYWxsRGF0YSgpe1xuICAgICAgcmV0dXJuIHRoaXMuY2hhckFycmF5XG4gICAgfVxuXG4gICBnZXQgZGVsZXRlRGF0YSgpIHtcbiAgICBcbiAgICAgIHJldHVybiB0aGlzLmNoYXJBcnJheS5sZW5ndGggPSAwXG4gICAgfVxuICBcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IEdhbWVTdG9yYWdlOyIsImltcG9ydCB3YWxkbyBmcm9tICcuL2ltYWdlcy93YWxkb0Nyb3BwZWQuanBnJ1xuaW1wb3J0IHdlbmRhIGZyb20gJy4vaW1hZ2VzL3dlbmRhQ3JvcHBlZC5qcGcnXG5pbXBvcnQgd2l6YXJkIGZyb20gJy4vaW1hZ2VzL3dpemFyZENyb3BwZWQuanBnJ1xuXG5sZXQgY2hhckFycmF5ID0gW3dhbGRvLCB3ZW5kYSwgd2l6YXJkXVxuXG5jb25zdCBnZXRIaWdoU2NvcmUgPSBhc3luYyAoKSA9PiB7XG5cblxuICB0cnkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhbWUvaGlnaHNjb3JlJylcblxuICAgIGNvbnN0IGdhbWVEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIHJldHVybiBnYW1lRGF0YVxuICB9XG5cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOlwiLCBlcnJvcik7XG4gICAgLy9hZGQgZXJyb3IgbWVzc2FnZSB0byBkb21cbiAgICAvL2Vycm9yRGlzcGxheSgpXG4gIH1cblxuXG59XG5cblxuXG5cbmNvbnN0IGFkZEhlYWRlciA9IGFzeW5jICgpID0+IHtcbiAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBpZiBtZXNzYWdlOiBubyBoaWdoIHNjb3JlIFxuICBsZXQgaGlnaFNjb3JlRGF0YSA9IGF3YWl0IGdldEhpZ2hTY29yZSgpXG5cbiAgLy8gY29udmVydCB0byBtaW51dGVzIGFuZCBzZWNvbmRzXG5cbiAgbGV0IHNlY29uZHMgPSBoaWdoU2NvcmVEYXRhWzBdLnNjb3JlIC8gMTAwMDtcbiAgIFxuICAgIHNlY29uZHMgPSBzZWNvbmRzICUgMzYwMDtcbiAgICBjb25zdCBtaW51dGVzID0gcGFyc2VJbnQoIHNlY29uZHMgLyA2MCApO1xuICAgIHNlY29uZHMgPSBNYXRoLnJvdW5kKHNlY29uZHMgJSA2MCk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5pZCA9ICdoZWFkZXInXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQ29udGFpbmVyJyk7XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJXaGVyZSdzIFdhbGRvXCJcbiAgY29uc3QgaGlnaFNjb3JlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhpZ2hTY29yZURpdi5jbGFzc0xpc3QuYWRkKCdoaWdoU2NvcmVDb250YWluZXInKTtcbiAgaGlnaFNjb3JlRGl2LnRleHRDb250ZW50ID0gaGlnaFNjb3JlRGF0YVswXS51c2VyTmFtZSArIFwiIGhhcyB0aGUgY3VycmVudCBiZXN0IHRpbWUgb2YgXCIgKyBtaW51dGVzICsgXCIgbWludXRlcyBcIiArIHNlY29uZHMgKyBcIiBzZWNvbmRzXCJcbiAgY29uc3QgcGljQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBpY0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaWNDb250YWluZXInKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFyQXJyYXkubGVuZ3RoOyBpKyspIHtcblxuICAgIGNvbnN0IHBpY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpY0Rpdi5jbGFzc0xpc3QuYWRkKCdwaWNEaXYnKTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckltZycpO1xuICAgIGltYWdlLnNyYyA9IGNoYXJBcnJheVtpXVxuICAgIHBpY0Rpdi5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICBwaWNDb250YWluZXIuYXBwZW5kQ2hpbGQocGljRGl2KVxuICB9XG4gIGNvbnN0IHRpbWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpbWVyQ29udGFpbmVyLmlkID0gXCJ0aW1lclwiXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdilcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpY0NvbnRhaW5lcilcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVyQ29udGFpbmVyKVxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaFNjb3JlRGl2KVxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gIC8vIGFkZCB0aW1lciB0byBoZWFkZXJcblxuICBjb25zdCBzdGFydFRpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgXG4gIGZ1bmN0aW9uIHN0YXJ0VGltZUNvdW50ZXIoKSB7XG4gICAgICBsZXQgbm93ID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7IFxuICAgICAgbGV0IGRpZmYgPSBub3cgLSBzdGFydFRpbWU7XG4gICAgICBsZXQgbSA9IE1hdGguZmxvb3IoZGlmZiAvIDYwKTsgXG4gICAgICBsZXQgcyA9IE1hdGguZmxvb3IoZGlmZiAlIDYwKTtcbiAgICAgIG0gPSBjaGVja1RpbWUobSk7XG4gICAgICBzID0gY2hlY2tUaW1lKHMpO1xuICAgICAgIFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lclwiKS50ZXh0Q29udGVudCA9IG0gKyBcIjpcIiArIHM7IFxuICAgICAgc2V0VGltZW91dChzdGFydFRpbWVDb3VudGVyLCA1MDApOyBcbiAgfVxuICBcbiAgZnVuY3Rpb24gY2hlY2tUaW1lKGkpIHtcbiAgICAgIGlmIChpIDwgMTApIHtpID0gXCIwXCIgKyBpfTsgIFxuICAgICAgcmV0dXJuIGk7XG4gIH1cbiAgXG4gIHN0YXJ0VGltZUNvdW50ZXIoKTtcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEhlYWRlcjsgIiwiY29uc3QgaGlnaFNjb3JlRm9ybSA9IChjb29yZCkgPT4ge1xuICAgIC8vIGdldCBjbGljayBjb29yZGluYXRlc1xuICAgbGV0IFt4LCB5XSA9IGNvb3JkXG4gICBcbiAgLy9jcmVhdGUgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5hY3Rpb24gPSAnJ1xuICAgIGZvcm0uaWQgPSAnZm9ybSdcbiAgICBmb3JtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBmb3JtLnN0eWxlLmxlZnQgPSB4ICArIFwicHhcIjtcbiAgICBmb3JtLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJZb3UgaGF2ZSB0aGUgbmV3IGJlc3QgdGltZSBlbnRlciB5b3VyIG5hbWUuXCJcbiAgICBjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsMS50ZXh0Q29udGVudCA9IFwiTmFtZVwiXG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDEubmFtZSA9IFwibmFtZVwiXG4gICAgaW5wdXQxLnR5cGUgPSBcInRleHRcIlxuICAgIGlucHV0MS5pZCA9IFwibmFtZVwiXG4gICAgaW5wdXQxLnJlcXVpcmVkID0gdHJ1ZVxuICAgIGNvbnN0IHN1Ym1pdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1Ym1pdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJtaXRDb250YWluZXInKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcblxuICAgIC8vYXBwZW5kIGVsZW1lbnRzXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwxKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0MSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRDb250YWluZXIpXG4gICAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgaGlnaFNjb3JlRm9ybTsgIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IG15TmFtZSBmcm9tICcuL215TmFtZSc7XG5pbXBvcnQgSW1hZ2UxIGZyb20gJy4vaW1hZ2VzL3dhbGRvLmpwZydcbmltcG9ydCBhZGRNZW51IGZyb20gJy4vYWRkTWVudSc7XG5pbXBvcnQgYWRkQ2lyY2xlIGZyb20gJy4vYWRkQ2lyY2xlJztcbmltcG9ydCBhZGRNZXNzYWdlIGZyb20gJy4vYWRkTWVzc2FnZSdcbmltcG9ydCBHYW1lU3RvcmFnZSBmcm9tICcuL2dhbWVTdG9yYWdlJ1xuaW1wb3J0IGFkZFBpYyBmcm9tICcuL2FkZFBpYydcbmltcG9ydCBzdGFydEdhbWUgZnJvbSAnLi9zdGFydEdhbWUnO1xuaW1wb3J0IFBsYXllclN0b3JhZ2UgZnJvbSAnLi9wbGF5ZXJEYXRhJztcbmltcG9ydCBoaWdoU2NvcmVGb3JtIGZyb20gJy4vaGlnaFNjb3JlRm9ybSc7XG5pbXBvcnQgeW91V29uIGZyb20gJy4veW91V29uJztcbmltcG9ydCBhZGRIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuXG5sZXQgY3VycmVudFBsYXllciA9IG5ldyBQbGF5ZXJTdG9yYWdlXG5sZXQgY3VycmVudEdhbWUgPSBuZXcgR2FtZVN0b3JhZ2VcblxuXG4vL3N0YXJ0IGdhbWUgYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuc3RhcnRHYW1lKClcblxuXG5jb25zdCBzdGFydEV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKTtcbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydE5ld0dhbWUpXG59XG5cbnN0YXJ0RXZlbnQoKVxuXG5mdW5jdGlvbiBzdGFydE5ld0dhbWUoZSkge1xuXG4gIGNvbnN0IHN0YXJ0UmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkNvbnRhaW5lcicpO1xuICBzdGFydFJlbW92ZS5yZW1vdmUoKVxuICBhZGRIZWFkZXIoKVxuICBhZGRQaWMoKVxuICBwaWNMaXN0ZW5lcigpXG4gIHN0YXJ0VGltZXIoKVxufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICBsZXQgdXVpZCA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY3VycmVudFBsYXllci5uZXdEYXRhKHV1aWQpXG4gXG4gIHN0YXJ0QXBpKHV1aWQpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0QXBpKHV1aWQpIHtcblxuICB0cnkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhbWUvc3RhcnQ/aWQ9JHt1dWlkfWApXG5cbiAgICBjb25zdCBzdGFydERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblxuICB9XG5cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOlwiLCBlcnJvcik7XG4gICAgLy9hZGQgZXJyb3IgbWVzc2FnZSB0byBkb21cbiAgICAvL2Vycm9yRGlzcGxheSgpXG4gIH1cbn1cblxuXG4vKmFkZCBldmVudCBsaXN0ZW5lciovXG5mdW5jdGlvbiBwaWNMaXN0ZW5lcigpIHtcbiAgY29uc3QgcGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICBwaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbWFnZUNvb3IpXG59XG5cbi8vIHJlbW92ZSBwaWMgbGlzdGVuZXJcblxuZnVuY3Rpb24gcmVtb3ZlUGljTGlzdGVuZXIoKSB7XG4gIFxuICBjb25zdCBwaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gIHBpYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGltYWdlQ29vcilcbn1cblxuLy9nZXQgY29vcmRpbmF0ZSBvZiBjbGlja1xuXG5mdW5jdGlvbiBpbWFnZUNvb3IoZSkge1xuXG4gIGxldCBjb29yZCA9IFtlLm9mZnNldFgsIGUub2Zmc2V0WV1cblxuICBsZXQgY2hhckFycmF5ID0gWyd3YWxkbycsICd3ZW5kYScsICd3aXphcmQnXVxuICBjb25zdCBjaGFyRm91bmRBcnJheSA9IGN1cnJlbnRHYW1lLmFsbERhdGEubWFwKCh4KSA9PiB4LmNoYXJhY3Rlcik7XG5cbiAgLy8gZ2V0IGFycmF5IHdpdGggcmVtYWluaW5nIGNoYXJhY3RlcnMgdG8gYWRkIHRvIHRoZSBtZW51XG5cbiAgY29uc3QgbWVudUFycmF5ID0gY2hhckFycmF5LmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBjaGFyRm91bmRBcnJheS5pbmRleE9mKHgpIDwgMDtcbiAgfSk7XG5cblxuICBhZGRDaXJjbGUoY29vcmQpXG4gIGFkZE1lbnUoY29vcmQsIG1lbnVBcnJheSlcbiAgcmVtb3ZlUGljTGlzdGVuZXIoKVxufVxuXG4vL21ha2UgYXBpIGNhbGwgdG8gY2hlY2sgY29vcmRcblxuY29uc3QgY2hlY2tDb29yZCA9IGFzeW5jIChuYW1lLCBjb29yZCkgPT4ge1xuXG4gIGxldCBbeCwgeV0gPSBjb29yZFxuXG4gIHRyeSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FtZT9jaGFyX25hbWU9JHtuYW1lfSZ4PSR7eH0meT0ke3l9YClcblxuICAgIGNvbnN0IGdhbWVEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBnYW1lRGF0YS5tZXNzYWdlXG4gICAgaWYgKG1lc3NhZ2UgPT0gdHJ1ZSkge1xuICAgICAgY3VycmVudEdhbWUubmV3RGF0YShuYW1lLCB4LCB5KVxuXG4gICAgICBpZiAoY3VycmVudEdhbWUuYWxsRGF0YS5sZW5ndGggPT0gMykge1xuICAgICAgICBnYW1lV29uKGNvb3JkKVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkTWVzc2FnZShjb29yZCwgbWVzc2FnZSwgbmFtZSlcblxuICB9XG5cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOlwiLCBlcnJvcik7XG4gICAgLy9hZGQgZXJyb3IgbWVzc2FnZSB0byBkb21cbiAgICAvL2Vycm9yRGlzcGxheSgpXG4gIH1cbn1cblxuY29uc3QgZ2FtZVdvbiA9IGFzeW5jIChjb29yZCkgPT4ge1xuXG4gIC8vY29uc29sZS5sb2coY3VycmVudFBsYXllci5hbGxEYXRhLnV1aWQpXG5cblxuICB0cnkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhbWUvZW5kP2lkPSR7Y3VycmVudFBsYXllci5hbGxEYXRhLnV1aWR9YClcblxuICAgIGNvbnN0IHN0b3BEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHN0b3BEYXRhLm1lc3NhZ2UgPT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieW91IHdpblwiKVxuICAgICAgeW91V29uKGNvb3JkKVxuXG4gICAgICBzZXRUaW1lb3V0KHJlbW92ZU1lc3NhZ2UsIDQwMDApO1xuXG5cblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhpZ2hTY29yZUZvcm0oY29vcmQpXG4gICAgICBmb3JtRXZlbnQoKVxuXG5cblxuICAgIH1cblxuXG4gIH1cblxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246XCIsIGVycm9yKTtcbiAgICAvL2FkZCBlcnJvciBtZXNzYWdlIHRvIGRvbVxuICAgIC8vZXJyb3JEaXNwbGF5KClcbiAgfVxuXG5cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWVzc2FnZSgpIHtcbiAgY29uc3Qgd2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lvdVdvbicpXG4gIGNvbnN0IHBpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNDb250YWluZXInKVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJylcbiAgd2luLnJlbW92ZSgpXG4gIHBpYy5yZW1vdmUoKVxuICBoZWFkZXIucmVtb3ZlKClcbiAgY3VycmVudEdhbWUuZGVsZXRlRGF0YVxuICBzdGFydEdhbWUoKVxuICBzdGFydEV2ZW50KClcbn1cblxuLy8gZm9ybSBldmVudCBsaXN0ZW5lclxuZnVuY3Rpb24gZm9ybUV2ZW50KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpLmVudHJpZXMoKSk7XG5cbiAgICBzZW5kRGF0YShkYXRhLm5hbWUsIGN1cnJlbnRQbGF5ZXIuYWxsRGF0YS51dWlkKVxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcbiAgICBjb25zdCBwaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGljQ29udGFpbmVyJylcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJylcbiAgICBmb3JtLnJlbW92ZSgpXG4gICAgcGljLnJlbW92ZSgpXG4gICAgaGVhZGVyLnJlbW92ZSgpXG4gICAgY3VycmVudEdhbWUuZGVsZXRlRGF0YVxuICAgIHN0YXJ0R2FtZSgpXG4gICAgc3RhcnRFdmVudCgpXG5cbiAgICBcblxuICB9KVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmREYXRhKG5hbWUsIHV1aWQpIHtcblxuICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhbWUvc2NvcmUnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGlkOiB1dWlkLFxuXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAvL21heWJlIHNldCBzdGF0ZSBmb3IgYSByZXJlbmRlclxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICB9KTtcblxufVxuXG5cblxuZXhwb3J0IHtcbiAgY2hlY2tDb29yZCxcbiAgY3VycmVudEdhbWUsXG4gIHBpY0xpc3RlbmVyLFxufTtcblxuIiwiY29uc3QgbXlOYW1lID0gKG5hbWUpID0+ICdIaSEgTXkgbmFtZSBpcyAnICsgbmFtZTtcblxuZXhwb3J0IGRlZmF1bHQgbXlOYW1lOyIsImNsYXNzIFBsYXllckRhdGEge1xuICAgIGNvbnN0cnVjdG9yKHV1aWQpIHtcbiAgICAgIFxuICAgICAgdGhpcy51dWlkID0gdXVpZFxuICAgICAgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgY2xhc3MgUGxheWVyU3RvcmFnZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIHRoaXMucGxheWVyID0gXCJcIlxuICAgIH1cbiAgICAvLyBjcmVhdGUgYSBuZXcgcGxheWVyIGFuZCBzYXZlIGl0IGluIHRoZSBjb2xsZWN0aW9uXG4gICAgbmV3RGF0YSh1dWlkKXtcbiAgICAgIGxldCBwZCA9IG5ldyBQbGF5ZXJEYXRhKHV1aWQpXG4gICAgICB0aGlzLnBsYXllciA9IHBkXG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXJcbiAgICB9XG4gICAgXG4gICAgZ2V0IGFsbERhdGEoKXtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllclxuICAgIH1cbiAgXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBQbGF5ZXJTdG9yYWdlOyIsImltcG9ydCB3YWxkbzIgZnJvbSAnLi9pbWFnZXMvd2FsZG8ycmVzaXplLmpwZydcblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuXG5cbiAgICBjb25zdCBzdGFydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXJ0Q29udGFpbmVyLmlkID0gXCJidXR0b25Db250YWluZXJcIlxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldoZXJlJ3MgV2FsZG9cIjtcbiAgICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZTEuc3JjID0gd2FsZG8yO1xuICAgIGltYWdlMS5jbGFzc0xpc3QuYWRkKCd3YWxkbzFQaWMnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gICAgYnV0dG9uLmlkID0gJ2J1dHRvbidcbiAgICBzdGFydENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICAgIHN0YXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlMSlcbiAgICBzdGFydENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGFydENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0R2FtZTsiLCJjb25zdCB5b3VXb24gPSAoY29vcmQpID0+IHtcbiAgXG4gICAgbGV0IFt4LCB5XSA9IGNvb3JkXG4gXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuaWQgPSAneW91V29uJztcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0geSAtIDgwICsgXCJweFwiO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIllvdSBXb24hXCJcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dClcbiAgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgIFxuICAgXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB5b3VXb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==