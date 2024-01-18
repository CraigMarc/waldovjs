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
    width: 60px;
    height: 80px;
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
    height: 70px;
   
   
}

.headerContainer {
    display: flex;
    position: fixed;
    height: 70px;
    width: 100%;
    background-color: white;
    top: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,MAAM;;;AAGN,eAAe;;AAEf;;IAEI,cAAc;IACd,aAAa;IACb,yDAA0C;IAC1C,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,WAAW;IACX,YAAY;;;AAGhB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,MAAM;AACV","sourcesContent":["body {}\n\n\n.svgContainer {}\n\n#container {\n\n    height: 1926px;\n    width: 2500px;\n    background-image: url(./images/waldo2.jpg);\n    background-size: 100% 100%;\n}\n\n.menuContainer {\n    border: solid;\n    width: 150px;\n    height: 250px;\n    background-color: white;\n}\n\n.button:hover {\n    background-color: gray;\n}\n\n.message {\n    width: 200px;\n    height: 70px;\n    border: solid;\n    background-color: white;\n}\n\nform {\n    background-color: white;\n}\n\n.menuImg {\n    width: 60px;\n    height: 80px;\n}\n\n.headerImg {\n    width: 50px;\n    height: 60px;\n}\n\n.picContainer {\n    display: flex;\n\n}\n\nheader {\n    width: 100%;\n    height: 70px;\n   \n   \n}\n\n.headerContainer {\n    display: flex;\n    position: fixed;\n    height: 70px;\n    width: 100%;\n    background-color: white;\n    top: 0;\n}"],"sourceRoot":""}]);
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
     
      //capitalize first letter
      let firstLetterCap = menuArray[i][0].toUpperCase()
      const remainingLetters = menuArray[i].slice(1)
      const capitalizedWord = firstLetterCap + remainingLetters
     
      name.textContent = capitalizedWord
      name.id = menuArray[i];
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
      name.appendChild(image)
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

    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.checkCoord)(e.target.id, coord)
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
    element.style.left = x - 100 + "px";
    element.style.top = y - 100 + "px";
  
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

const addHeader = () => {
   
    const header = document.createElement('header');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    const titleDiv = document.createElement('div');
    titleDiv.textContent = "Where's Waldo"
    const picContainer = document.createElement('div');
    picContainer.classList.add('picContainer');
    for (let i=0; i < charArray.length; i++) {
        
        const picDiv = document.createElement('div');
        picDiv.classList.add('picDiv');
        const image = new Image();
        image.classList.add('headerImg');
        image.src = charArray[i]
        picDiv.appendChild(image)
        picContainer.appendChild(picDiv)
    }

    headerContainer.appendChild(titleDiv)
    headerContainer.appendChild(picContainer)
    header.appendChild(headerContainer)
    
    document.body.appendChild(header)
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
  console.log(currentPlayer)
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
  win.remove()
  pic.remove()
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
    form.remove()
    pic.remove()
    currentGame.deleteData
    ;(0,_startGame__WEBPACK_IMPORTED_MODULE_8__["default"])()
    startEvent()

    //const remove = document.getElementById("remove");
    //remove.remove()


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
    element.style.top = y + "px";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dhbGRvdmpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9hZGRDaXJjbGUuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9zcmMvYWRkTWVudS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9hZGRNZXNzYWdlLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2FkZFBpYy5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9nYW1lU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9zcmMvaGlnaFNjb3JlRm9ybS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9teU5hbWUuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9zcmMvcGxheWVyRGF0YS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9zcmMveW91V29uLmpzIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy93YWxkbzIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHt9XG5cblxuLnN2Z0NvbnRhaW5lciB7fVxuXG4jY29udGFpbmVyIHtcblxuICAgIGhlaWdodDogMTkyNnB4O1xuICAgIHdpZHRoOiAyNTAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4ubWVudUNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tZW51SW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5oZWFkZXJJbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLnBpY0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcblxufVxuXG5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgIFxuICAgXG59XG5cbi5oZWFkZXJDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0b3A6IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxNQUFNOzs7QUFHTixlQUFlOztBQUVmOztJQUVJLGNBQWM7SUFDZCxhQUFhO0lBQ2IseURBQTBDO0lBQzFDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOzs7QUFHaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLE1BQU07QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHt9XFxuXFxuXFxuLnN2Z0NvbnRhaW5lciB7fVxcblxcbiNjb250YWluZXIge1xcblxcbiAgICBoZWlnaHQ6IDE5MjZweDtcXG4gICAgd2lkdGg6IDI1MDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3dhbGRvMi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lbnVJbWcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uaGVhZGVySW1nIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnBpY0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgXFxuICAgXFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhZGRDaXJjbGUgPSAoY29vcmQpID0+IHtcbiAgICAvLyBnZXQgY2xpY2sgY29vcmRpbmF0ZXNcbiAgICBsZXQgW3gsIHldID0gY29vcmRcbiAgIFxuICBcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgXG4gIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XG4gIGNpcmNsZS5pZCA9ICdjaXJjbGUnO1xuICBjaXJjbGUuc2V0QXR0cmlidXRlKCdjeCcsIHgpXG4gIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2N5JywgeSlcbiAgY2lyY2xlLnNldEF0dHJpYnV0ZSgncicsIFwiMzBcIilcbiAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgXCJibGFja1wiKVxuICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCBcIjNcIilcbiAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnZmlsbCcsIFwibm9uZVwiKVxuICBcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjaXJjbGUpXG4gIFxuICAgIFxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBhZGRDaXJjbGU7ICAiLCIvL2ltcG9ydCBjaGVja0Nvb3JkIGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgY2hlY2tDb29yZCxcbiAgcGljTGlzdGVuZXIsXG59IGZyb20gXCIuL2luZGV4XCI7XG5cbmltcG9ydCB3YWxkbyBmcm9tICcuL2ltYWdlcy93YWxkb0Nyb3BwZWQuanBnJ1xuaW1wb3J0IHdlbmRhIGZyb20gJy4vaW1hZ2VzL3dlbmRhQ3JvcHBlZC5qcGcnXG5pbXBvcnQgd2l6YXJkIGZyb20gJy4vaW1hZ2VzL3dpemFyZENyb3BwZWQuanBnJ1xuXG5jb25zdCBhZGRNZW51ID0gKGNvb3JkLCBtZW51QXJyYXkpID0+IHtcbiAgbGV0IFt4LCB5XSA9IGNvb3JkXG5cblxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpO1xuICBtZW51Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgaWYgKHggPCAxNTAwKSB7XG4gICAgbWVudUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0geCArIDUwICsgXCJweFwiO1xuICAgIG1lbnVDb250YWluZXIuc3R5bGUudG9wID0geSArIDIwICsgXCJweFwiO1xuICB9XG4gIGVsc2Uge1xuICAgIG1lbnVDb250YWluZXIuc3R5bGUubGVmdCA9IHggLSAyNDAgKyBcInB4XCI7XG4gICAgbWVudUNvbnRhaW5lci5zdHlsZS50b3AgPSB5ICsgMjAgKyBcInB4XCI7XG4gIH1cblxuXG4gIGNvbnN0IGFkZE1lbnVJdGVtcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVBcnJheS5sZW5ndGg7IGkrKykge1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgICBcbiAgICAgIC8vY2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXJcbiAgICAgIGxldCBmaXJzdExldHRlckNhcCA9IG1lbnVBcnJheVtpXVswXS50b1VwcGVyQ2FzZSgpXG4gICAgICBjb25zdCByZW1haW5pbmdMZXR0ZXJzID0gbWVudUFycmF5W2ldLnNsaWNlKDEpXG4gICAgICBjb25zdCBjYXBpdGFsaXplZFdvcmQgPSBmaXJzdExldHRlckNhcCArIHJlbWFpbmluZ0xldHRlcnNcbiAgICAgXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZWRXb3JkXG4gICAgICBuYW1lLmlkID0gbWVudUFycmF5W2ldO1xuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGlmIChtZW51QXJyYXlbaV0gPT0gJ3dhbGRvJykge1xuICAgICAgICBpbWFnZS5zcmMgPSB3YWxkb1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVBcnJheVtpXSA9PSAnd2VuZGEnKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IHdlbmRhXG4gICAgICB9XG4gICAgICBpZiAobWVudUFycmF5W2ldID09ICd3aXphcmQnKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IHdpemFyZFxuICAgICAgfVxuICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudUltZycpO1xuICAgICAgbmFtZS5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSlcbiAgICB9XG4gIH1cblxuICBhZGRNZW51SXRlbXMoKVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcilcblxuICAvLyBldmVudCBsaXN0ZW5lciBmb3IgZHJvcCBkb3duXG5cbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpO1xuXG4gIHNlbGVjdC5mb3JFYWNoKChidXR0b24pID0+IHtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGNoZWNrKGUpIHtcblxuICAgIGNoZWNrQ29vcmQoZS50YXJnZXQuaWQsIGNvb3JkKVxuICAgIG1lbnVDb250YWluZXIucmVtb3ZlKClcbiAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpcmNsZVwiKVxuICAgIGNpcmNsZS5yZW1vdmUoKVxuICAgIHBpY0xpc3RlbmVyKClcblxuICB9XG5cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgYWRkTWVudTtcbiIsIi8vIGFkZCBtZXNzYWdlXG5cbmNvbnN0IGFkZE1lc3NhZ2UgPSAoY29vcmQsIG1lc3NhZ2UsIG5hbWUpID0+IHtcbiAgXG4gICAgbGV0IFt4LCB5XSA9IGNvb3JkXG4gXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuaWQgPSAnbWVzc2FnZSc7XG4gICAgaWYgKG1lc3NhZ2UgPT0gZmFsc2UpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlRyeSBBZ2FpblwiXG4gICAgfVxuICAgIGlmIChtZXNzYWdlID09IHRydWUpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgWW91IEZvdW5kICR7bmFtZX1gXG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHggLSAxMDAgKyBcInB4XCI7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSB5IC0gMTAwICsgXCJweFwiO1xuICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgXG4gICAgc2V0VGltZW91dChyZW1vdmVNZXNzYWdlLCAxMDAwKTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVNZXNzYWdlKCkge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgIH1cblxuXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBhZGRNZXNzYWdlOyIsImNvbnN0IGFkZFBpYyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHBpY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpY0NvbnRhaW5lci5pZCA9ICdwaWNDb250YWluZXInXG4gICAgcGljQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N2Z0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICBcbiAgICBzdmcuaWQgPSAnY29udGFpbmVyJztcbiAgICBwaWNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwaWNDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRQaWM7IiwiY2xhc3MgR2FtZURhdGEge1xuICAgIGNvbnN0cnVjdG9yKGNoYXJhY3RlciwgeCwgeSkge1xuICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXJcbiAgICAgIHRoaXMueCA9IHhcbiAgICAgIHRoaXMueSA9IHlcbiAgICB9XG4gICAgXG4gIH1cbiAgXG4gIGNsYXNzIEdhbWVTdG9yYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgdGhpcy5jaGFyQXJyYXkgPSBbXVxuICAgIH1cbiAgICAvLyBjcmVhdGUgYSBuZXcgcGxheWVyIGFuZCBzYXZlIGl0IGluIHRoZSBjb2xsZWN0aW9uXG4gICAgbmV3RGF0YShjaGFyYWN0ZXIsIHgsIHkpe1xuICAgICAgbGV0IGdkID0gbmV3IEdhbWVEYXRhKGNoYXJhY3RlciwgeCwgeSlcbiAgICAgIHRoaXMuY2hhckFycmF5LnB1c2goZ2QpXG4gICAgICByZXR1cm4gdGhpcy5jaGFyQXJyYXlcbiAgICB9XG4gICAgXG4gICAgZ2V0IGFsbERhdGEoKXtcbiAgICAgIHJldHVybiB0aGlzLmNoYXJBcnJheVxuICAgIH1cblxuICAgZ2V0IGRlbGV0ZURhdGEoKSB7XG4gICAgXG4gICAgICByZXR1cm4gdGhpcy5jaGFyQXJyYXkubGVuZ3RoID0gMFxuICAgIH1cbiAgXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBHYW1lU3RvcmFnZTsiLCJpbXBvcnQgd2FsZG8gZnJvbSAnLi9pbWFnZXMvd2FsZG9Dcm9wcGVkLmpwZydcbmltcG9ydCB3ZW5kYSBmcm9tICcuL2ltYWdlcy93ZW5kYUNyb3BwZWQuanBnJ1xuaW1wb3J0IHdpemFyZCBmcm9tICcuL2ltYWdlcy93aXphcmRDcm9wcGVkLmpwZydcblxubGV0IGNoYXJBcnJheSA9IFt3YWxkbywgd2VuZGEsIHdpemFyZF1cblxuY29uc3QgYWRkSGVhZGVyID0gKCkgPT4ge1xuICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBcIldoZXJlJ3MgV2FsZG9cIlxuICAgIGNvbnN0IHBpY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpY0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaWNDb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBjaGFyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBpY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwaWNEaXYuY2xhc3NMaXN0LmFkZCgncGljRGl2Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckltZycpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjaGFyQXJyYXlbaV1cbiAgICAgICAgcGljRGl2LmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICBwaWNDb250YWluZXIuYXBwZW5kQ2hpbGQocGljRGl2KVxuICAgIH1cblxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdilcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGljQ29udGFpbmVyKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpXG4gICAgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEhlYWRlcjsgIiwiY29uc3QgaGlnaFNjb3JlRm9ybSA9IChjb29yZCkgPT4ge1xuICAgIC8vIGdldCBjbGljayBjb29yZGluYXRlc1xuICAgbGV0IFt4LCB5XSA9IGNvb3JkXG4gICBcbiAgLy9jcmVhdGUgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5hY3Rpb24gPSAnJ1xuICAgIGZvcm0uaWQgPSAnZm9ybSdcbiAgICBmb3JtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBmb3JtLnN0eWxlLmxlZnQgPSB4ICArIFwicHhcIjtcbiAgICBmb3JtLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJZb3UgaGF2ZSB0aGUgbmV3IGJlc3QgdGltZSBlbnRlciB5b3VyIG5hbWUuXCJcbiAgICBjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsMS50ZXh0Q29udGVudCA9IFwiTmFtZVwiXG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDEubmFtZSA9IFwibmFtZVwiXG4gICAgaW5wdXQxLnR5cGUgPSBcInRleHRcIlxuICAgIGlucHV0MS5pZCA9IFwibmFtZVwiXG4gICAgaW5wdXQxLnJlcXVpcmVkID0gdHJ1ZVxuICAgIGNvbnN0IHN1Ym1pdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1Ym1pdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJtaXRDb250YWluZXInKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcblxuICAgIC8vYXBwZW5kIGVsZW1lbnRzXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwxKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0MSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRDb250YWluZXIpXG4gICAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgaGlnaFNjb3JlRm9ybTsgIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IG15TmFtZSBmcm9tICcuL215TmFtZSc7XG5pbXBvcnQgSW1hZ2UxIGZyb20gJy4vaW1hZ2VzL3dhbGRvLmpwZydcbmltcG9ydCBhZGRNZW51IGZyb20gJy4vYWRkTWVudSc7XG5pbXBvcnQgYWRkQ2lyY2xlIGZyb20gJy4vYWRkQ2lyY2xlJztcbmltcG9ydCBhZGRNZXNzYWdlIGZyb20gJy4vYWRkTWVzc2FnZSdcbmltcG9ydCBHYW1lU3RvcmFnZSBmcm9tICcuL2dhbWVTdG9yYWdlJ1xuaW1wb3J0IGFkZFBpYyBmcm9tICcuL2FkZFBpYydcbmltcG9ydCBzdGFydEdhbWUgZnJvbSAnLi9zdGFydEdhbWUnO1xuaW1wb3J0IFBsYXllclN0b3JhZ2UgZnJvbSAnLi9wbGF5ZXJEYXRhJztcbmltcG9ydCBoaWdoU2NvcmVGb3JtIGZyb20gJy4vaGlnaFNjb3JlRm9ybSc7XG5pbXBvcnQgeW91V29uIGZyb20gJy4veW91V29uJztcbmltcG9ydCBhZGRIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuXG5sZXQgY3VycmVudFBsYXllciA9IG5ldyBQbGF5ZXJTdG9yYWdlXG5sZXQgY3VycmVudEdhbWUgPSBuZXcgR2FtZVN0b3JhZ2VcblxuXG4vL3N0YXJ0IGdhbWUgYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuc3RhcnRHYW1lKClcblxuXG5jb25zdCBzdGFydEV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKTtcbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydE5ld0dhbWUpXG59XG5cbnN0YXJ0RXZlbnQoKVxuXG5mdW5jdGlvbiBzdGFydE5ld0dhbWUoZSkge1xuXG4gIGNvbnN0IHN0YXJ0UmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkNvbnRhaW5lcicpO1xuICBzdGFydFJlbW92ZS5yZW1vdmUoKVxuICBhZGRIZWFkZXIoKVxuICBhZGRQaWMoKVxuICBwaWNMaXN0ZW5lcigpXG4gIHN0YXJ0VGltZXIoKVxufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICBsZXQgdXVpZCA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY3VycmVudFBsYXllci5uZXdEYXRhKHV1aWQpXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIpXG4gIHN0YXJ0QXBpKHV1aWQpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0QXBpKHV1aWQpIHtcblxuICB0cnkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhbWUvc3RhcnQ/aWQ9JHt1dWlkfWApXG5cbiAgICBjb25zdCBzdGFydERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblxuICB9XG5cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOlwiLCBlcnJvcik7XG4gICAgLy9hZGQgZXJyb3IgbWVzc2FnZSB0byBkb21cbiAgICAvL2Vycm9yRGlzcGxheSgpXG4gIH1cbn1cblxuXG4vKmFkZCBldmVudCBsaXN0ZW5lciovXG5mdW5jdGlvbiBwaWNMaXN0ZW5lcigpIHtcbiAgY29uc3QgcGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICBwaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbWFnZUNvb3IpXG59XG5cbi8vIHJlbW92ZSBwaWMgbGlzdGVuZXJcblxuZnVuY3Rpb24gcmVtb3ZlUGljTGlzdGVuZXIoKSB7XG4gIFxuICBjb25zdCBwaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gIHBpYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGltYWdlQ29vcilcbn1cblxuLy9nZXQgY29vcmRpbmF0ZSBvZiBjbGlja1xuXG5mdW5jdGlvbiBpbWFnZUNvb3IoZSkge1xuXG4gIGxldCBjb29yZCA9IFtlLm9mZnNldFgsIGUub2Zmc2V0WV1cblxuICBsZXQgY2hhckFycmF5ID0gWyd3YWxkbycsICd3ZW5kYScsICd3aXphcmQnXVxuICBjb25zdCBjaGFyRm91bmRBcnJheSA9IGN1cnJlbnRHYW1lLmFsbERhdGEubWFwKCh4KSA9PiB4LmNoYXJhY3Rlcik7XG5cbiAgLy8gZ2V0IGFycmF5IHdpdGggcmVtYWluaW5nIGNoYXJhY3RlcnMgdG8gYWRkIHRvIHRoZSBtZW51XG5cbiAgY29uc3QgbWVudUFycmF5ID0gY2hhckFycmF5LmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBjaGFyRm91bmRBcnJheS5pbmRleE9mKHgpIDwgMDtcbiAgfSk7XG5cblxuICBhZGRDaXJjbGUoY29vcmQpXG4gIGFkZE1lbnUoY29vcmQsIG1lbnVBcnJheSlcbiAgcmVtb3ZlUGljTGlzdGVuZXIoKVxufVxuXG4vL21ha2UgYXBpIGNhbGwgdG8gY2hlY2sgY29vcmRcblxuY29uc3QgY2hlY2tDb29yZCA9IGFzeW5jIChuYW1lLCBjb29yZCkgPT4ge1xuXG4gIGxldCBbeCwgeV0gPSBjb29yZFxuXG4gIHRyeSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FtZT9jaGFyX25hbWU9JHtuYW1lfSZ4PSR7eH0meT0ke3l9YClcblxuICAgIGNvbnN0IGdhbWVEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBnYW1lRGF0YS5tZXNzYWdlXG4gICAgaWYgKG1lc3NhZ2UgPT0gdHJ1ZSkge1xuICAgICAgY3VycmVudEdhbWUubmV3RGF0YShuYW1lLCB4LCB5KVxuXG4gICAgICBpZiAoY3VycmVudEdhbWUuYWxsRGF0YS5sZW5ndGggPT0gMykge1xuICAgICAgICBnYW1lV29uKGNvb3JkKVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkTWVzc2FnZShjb29yZCwgbWVzc2FnZSwgbmFtZSlcblxuICB9XG5cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOlwiLCBlcnJvcik7XG4gICAgLy9hZGQgZXJyb3IgbWVzc2FnZSB0byBkb21cbiAgICAvL2Vycm9yRGlzcGxheSgpXG4gIH1cbn1cblxuY29uc3QgZ2FtZVdvbiA9IGFzeW5jIChjb29yZCkgPT4ge1xuXG4gIC8vY29uc29sZS5sb2coY3VycmVudFBsYXllci5hbGxEYXRhLnV1aWQpXG5cblxuICB0cnkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhbWUvZW5kP2lkPSR7Y3VycmVudFBsYXllci5hbGxEYXRhLnV1aWR9YClcblxuICAgIGNvbnN0IHN0b3BEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHN0b3BEYXRhLm1lc3NhZ2UgPT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieW91IHdpblwiKVxuICAgICAgeW91V29uKGNvb3JkKVxuXG4gICAgICBzZXRUaW1lb3V0KHJlbW92ZU1lc3NhZ2UsIDQwMDApO1xuXG5cblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhpZ2hTY29yZUZvcm0oY29vcmQpXG4gICAgICBmb3JtRXZlbnQoKVxuXG5cblxuICAgIH1cblxuXG4gIH1cblxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246XCIsIGVycm9yKTtcbiAgICAvL2FkZCBlcnJvciBtZXNzYWdlIHRvIGRvbVxuICAgIC8vZXJyb3JEaXNwbGF5KClcbiAgfVxuXG5cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWVzc2FnZSgpIHtcbiAgY29uc3Qgd2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lvdVdvbicpXG4gIGNvbnN0IHBpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNDb250YWluZXInKVxuICB3aW4ucmVtb3ZlKClcbiAgcGljLnJlbW92ZSgpXG4gIGN1cnJlbnRHYW1lLmRlbGV0ZURhdGFcbiAgc3RhcnRHYW1lKClcbiAgc3RhcnRFdmVudCgpXG59XG5cbi8vIGZvcm0gZXZlbnQgbGlzdGVuZXJcbmZ1bmN0aW9uIGZvcm1FdmVudCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGUudGFyZ2V0KS5lbnRyaWVzKCkpO1xuXG4gICAgc2VuZERhdGEoZGF0YS5uYW1lLCBjdXJyZW50UGxheWVyLmFsbERhdGEudXVpZClcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpXG4gICAgY29uc3QgcGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY0NvbnRhaW5lcicpXG4gICAgZm9ybS5yZW1vdmUoKVxuICAgIHBpYy5yZW1vdmUoKVxuICAgIGN1cnJlbnRHYW1lLmRlbGV0ZURhdGFcbiAgICBzdGFydEdhbWUoKVxuICAgIHN0YXJ0RXZlbnQoKVxuXG4gICAgLy9jb25zdCByZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbW92ZVwiKTtcbiAgICAvL3JlbW92ZS5yZW1vdmUoKVxuXG5cbiAgfSlcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBzZW5kRGF0YShuYW1lLCB1dWlkKSB7XG5cbiAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nYW1lL3Njb3JlJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBpZDogdXVpZCxcblxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgLy9tYXliZSBzZXQgc3RhdGUgZm9yIGEgcmVyZW5kZXJcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgfSk7XG5cbn1cblxuXG5cbmV4cG9ydCB7XG4gIGNoZWNrQ29vcmQsXG4gIGN1cnJlbnRHYW1lLFxuICBwaWNMaXN0ZW5lcixcbn07XG5cbiIsImNvbnN0IG15TmFtZSA9IChuYW1lKSA9PiAnSGkhIE15IG5hbWUgaXMgJyArIG5hbWU7XG5cbmV4cG9ydCBkZWZhdWx0IG15TmFtZTsiLCJjbGFzcyBQbGF5ZXJEYXRhIHtcbiAgICBjb25zdHJ1Y3Rvcih1dWlkKSB7XG4gICAgICBcbiAgICAgIHRoaXMudXVpZCA9IHV1aWRcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGNsYXNzIFBsYXllclN0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICB0aGlzLnBsYXllciA9IFwiXCJcbiAgICB9XG4gICAgLy8gY3JlYXRlIGEgbmV3IHBsYXllciBhbmQgc2F2ZSBpdCBpbiB0aGUgY29sbGVjdGlvblxuICAgIG5ld0RhdGEodXVpZCl7XG4gICAgICBsZXQgcGQgPSBuZXcgUGxheWVyRGF0YSh1dWlkKVxuICAgICAgdGhpcy5wbGF5ZXIgPSBwZFxuICAgICAgcmV0dXJuIHRoaXMucGxheWVyXG4gICAgfVxuICAgIFxuICAgIGdldCBhbGxEYXRhKCl7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXJcbiAgICB9XG4gIFxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgUGxheWVyU3RvcmFnZTsiLCJpbXBvcnQgd2FsZG8yIGZyb20gJy4vaW1hZ2VzL3dhbGRvMnJlc2l6ZS5qcGcnXG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcblxuXG4gICAgY29uc3Qgc3RhcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGFydENvbnRhaW5lci5pZCA9IFwiYnV0dG9uQ29udGFpbmVyXCJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJXaGVyZSdzIFdhbGRvXCI7XG4gICAgY29uc3QgaW1hZ2UxID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2UxLnNyYyA9IHdhbGRvMjtcbiAgICBpbWFnZTEuY2xhc3NMaXN0LmFkZCgnd2FsZG8xUGljJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUnO1xuICAgIGJ1dHRvbi5pZCA9ICdidXR0b24nXG4gICAgc3RhcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgICBzdGFydENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZTEpXG4gICAgc3RhcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhcnRDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFydEdhbWU7IiwiY29uc3QgeW91V29uID0gKGNvb3JkKSA9PiB7XG4gIFxuICAgIGxldCBbeCwgeV0gPSBjb29yZFxuIFxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlkID0gJ3lvdVdvbic7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiWW91IFdvbiFcIlxuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0KVxuICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgXG4gICBcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHlvdVdvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9