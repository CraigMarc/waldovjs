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
___CSS_LOADER_EXPORT___.push([module.id, `body {
   
}


.svgContainer {
   
}

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

.button:hover{
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;AAEA;;;AAGA;;AAEA;;AAEA;;IAEI,cAAc;IACd,aAAa;IACb,yDAA0C;IAC1C,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["body {\n   \n}\n\n\n.svgContainer {\n   \n}\n\n#container {\n   \n    height: 1926px;\n    width: 2500px;\n    background-image: url(./images/waldo2.jpg);\n    background-size: 100% 100%;\n}\n\n.menuContainer {\n    border: solid;\n    width: 150px;\n    height: 250px;\n    background-color: white;\n}\n\n.button:hover{\n    background-color: gray;\n} \n\n.message {\n    width: 200px;\n    height: 70px;\n    border: solid;\n    background-color: white;\n}\n\nform {\n    background-color: white;\n}\n\n.menuImg {\n    width: 60px;\n    height: 80px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2FkZENpcmNsZS5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy8uL3NyYy9hZGRNZW51LmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2FkZE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9zcmMvYWRkUGljLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2dhbWVTdG9yYWdlLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL2hpZ2hTY29yZUZvcm0uanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9zcmMvbXlOYW1lLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL3BsYXllckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvLi9zcmMvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL3dhbGRvdmpzLy4vc3JjL3lvdVdvbi5qcyIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93YWxkb3Zqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2FsZG92anMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dhbGRvdmpzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvd2FsZG8yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICBcbn1cblxuXG4uc3ZnQ29udGFpbmVyIHtcbiAgIFxufVxuXG4jY29udGFpbmVyIHtcbiAgIFxuICAgIGhlaWdodDogMTkyNnB4O1xuICAgIHdpZHRoOiAyNTAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4ubWVudUNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufSBcblxuLm1lc3NhZ2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tZW51SW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0lBRUksY0FBYztJQUNkLGFBQWE7SUFDYix5REFBMEM7SUFDMUMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgXFxufVxcblxcblxcbi5zdmdDb250YWluZXIge1xcbiAgIFxcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICBcXG4gICAgaGVpZ2h0OiAxOTI2cHg7XFxuICAgIHdpZHRoOiAyNTAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy93YWxkbzIuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59IFxcblxcbi5tZXNzYWdlIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGJvcmRlcjogc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51SW1nIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFkZENpcmNsZSA9IChjb29yZCkgPT4ge1xuICAgIC8vIGdldCBjbGljayBjb29yZGluYXRlc1xuICAgIGxldCBbeCwgeV0gPSBjb29yZFxuICAgXG4gIFxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICBcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdjaXJjbGUnKTtcbiAgY2lyY2xlLmlkID0gJ2NpcmNsZSc7XG4gIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2N4JywgeClcbiAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnY3knLCB5KVxuICBjaXJjbGUuc2V0QXR0cmlidXRlKCdyJywgXCIzMFwiKVxuICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBcImJsYWNrXCIpXG4gIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIFwiM1wiKVxuICBjaXJjbGUuc2V0QXR0cmlidXRlKCdmaWxsJywgXCJub25lXCIpXG4gIFxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNpcmNsZSlcbiAgXG4gICAgXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGFkZENpcmNsZTsgICIsIi8vaW1wb3J0IGNoZWNrQ29vcmQgZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQge1xuICBjaGVja0Nvb3JkLFxuICBwaWNMaXN0ZW5lcixcbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuaW1wb3J0IHdhbGRvIGZyb20gJy4vaW1hZ2VzL3dhbGRvQ3JvcHBlZC5qcGcnXG5pbXBvcnQgd2VuZGEgZnJvbSAnLi9pbWFnZXMvd2VuZGFDcm9wcGVkLmpwZydcbmltcG9ydCB3aXphcmQgZnJvbSAnLi9pbWFnZXMvd2l6YXJkQ3JvcHBlZC5qcGcnXG5cbmNvbnN0IGFkZE1lbnUgPSAoY29vcmQsIG1lbnVBcnJheSkgPT4ge1xuICBsZXQgW3gsIHldID0gY29vcmRcblxuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Q29udGFpbmVyJyk7XG4gIG1lbnVDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBpZiAoeCA8IDE1MDApIHtcbiAgICBtZW51Q29udGFpbmVyLnN0eWxlLmxlZnQgPSB4ICsgNTAgKyBcInB4XCI7XG4gICAgbWVudUNvbnRhaW5lci5zdHlsZS50b3AgPSB5ICsgMjAgKyBcInB4XCI7XG4gIH1cbiAgZWxzZSB7XG4gICAgbWVudUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0geCAtIDI0MCArIFwicHhcIjtcbiAgICBtZW51Q29udGFpbmVyLnN0eWxlLnRvcCA9IHkgKyAyMCArIFwicHhcIjtcbiAgfVxuXG5cbiAgY29uc3QgYWRkTWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgIFxuICAgICAgLy9jYXBpdGFsaXplIGZpcnN0IGxldHRlclxuICAgICAgbGV0IGZpcnN0TGV0dGVyQ2FwID0gbWVudUFycmF5W2ldWzBdLnRvVXBwZXJDYXNlKClcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0xldHRlcnMgPSBtZW51QXJyYXlbaV0uc2xpY2UoMSlcbiAgICAgIGNvbnN0IGNhcGl0YWxpemVkV29yZCA9IGZpcnN0TGV0dGVyQ2FwICsgcmVtYWluaW5nTGV0dGVyc1xuICAgICBcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplZFdvcmRcbiAgICAgIG5hbWUuaWQgPSBtZW51QXJyYXlbaV07XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaWYgKG1lbnVBcnJheVtpXSA9PSAnd2FsZG8nKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IHdhbGRvXG4gICAgICB9XG4gICAgICBpZiAobWVudUFycmF5W2ldID09ICd3ZW5kYScpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gd2VuZGFcbiAgICAgIH1cbiAgICAgIGlmIChtZW51QXJyYXlbaV0gPT0gJ3dpemFyZCcpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gd2l6YXJkXG4gICAgICB9XG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51SW1nJyk7XG4gICAgICBuYW1lLmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKVxuICAgIH1cbiAgfVxuXG4gIGFkZE1lbnVJdGVtcygpXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKVxuXG4gIC8vIGV2ZW50IGxpc3RlbmVyIGZvciBkcm9wIGRvd25cblxuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJyk7XG5cbiAgc2VsZWN0LmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2spXG4gIH0pXG5cbiAgZnVuY3Rpb24gY2hlY2soZSkge1xuXG4gICAgY2hlY2tDb29yZChlLnRhcmdldC5pZCwgY29vcmQpXG4gICAgbWVudUNvbnRhaW5lci5yZW1vdmUoKVxuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2lyY2xlXCIpXG4gICAgY2lyY2xlLnJlbW92ZSgpXG4gICAgcGljTGlzdGVuZXIoKVxuXG4gIH1cblxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51O1xuIiwiLy8gYWRkIG1lc3NhZ2VcblxuY29uc3QgYWRkTWVzc2FnZSA9IChjb29yZCwgbWVzc2FnZSwgbmFtZSkgPT4ge1xuICBcbiAgICBsZXQgW3gsIHldID0gY29vcmRcbiBcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5pZCA9ICdtZXNzYWdlJztcbiAgICBpZiAobWVzc2FnZSA9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiVHJ5IEFnYWluXCJcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UgPT0gdHJ1ZSkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGBZb3UgRm91bmQgJHtuYW1lfWBcbiAgICB9XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geCAtIDEwMCArIFwicHhcIjtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHkgLSAxMDAgKyBcInB4XCI7XG4gIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICBcbiAgICBzZXRUaW1lb3V0KHJlbW92ZU1lc3NhZ2UsIDEwMDApO1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZU1lc3NhZ2UoKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuXG5cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IGFkZE1lc3NhZ2U7IiwiY29uc3QgYWRkUGljID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcGljQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGljQ29udGFpbmVyLmlkID0gJ3BpY0NvbnRhaW5lcidcbiAgICBwaWNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ZnQ29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgIFxuICAgIHN2Zy5pZCA9ICdjb250YWluZXInO1xuICAgIHBpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBpY0NvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFBpYzsiLCJjbGFzcyBHYW1lRGF0YSB7XG4gICAgY29uc3RydWN0b3IoY2hhcmFjdGVyLCB4LCB5KSB7XG4gICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlclxuICAgICAgdGhpcy54ID0geFxuICAgICAgdGhpcy55ID0geVxuICAgIH1cbiAgICBcbiAgfVxuICBcbiAgY2xhc3MgR2FtZVN0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICB0aGlzLmNoYXJBcnJheSA9IFtdXG4gICAgfVxuICAgIC8vIGNyZWF0ZSBhIG5ldyBwbGF5ZXIgYW5kIHNhdmUgaXQgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICBuZXdEYXRhKGNoYXJhY3RlciwgeCwgeSl7XG4gICAgICBsZXQgZ2QgPSBuZXcgR2FtZURhdGEoY2hhcmFjdGVyLCB4LCB5KVxuICAgICAgdGhpcy5jaGFyQXJyYXkucHVzaChnZClcbiAgICAgIHJldHVybiB0aGlzLmNoYXJBcnJheVxuICAgIH1cbiAgICBcbiAgICBnZXQgYWxsRGF0YSgpe1xuICAgICAgcmV0dXJuIHRoaXMuY2hhckFycmF5XG4gICAgfVxuXG4gICBnZXQgZGVsZXRlRGF0YSgpIHtcbiAgICBcbiAgICAgIHJldHVybiB0aGlzLmNoYXJBcnJheS5sZW5ndGggPSAwXG4gICAgfVxuICBcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IEdhbWVTdG9yYWdlOyIsImNvbnN0IGhpZ2hTY29yZUZvcm0gPSAoY29vcmQpID0+IHtcbiAgICAvLyBnZXQgY2xpY2sgY29vcmRpbmF0ZXNcbiAgIGxldCBbeCwgeV0gPSBjb29yZFxuICAgXG4gIC8vY3JlYXRlIGZvcm1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uYWN0aW9uID0gJydcbiAgICBmb3JtLmlkID0gJ2Zvcm0nXG4gICAgZm9ybS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZm9ybS5zdHlsZS5sZWZ0ID0geCAgKyBcInB4XCI7XG4gICAgZm9ybS5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiWW91IGhhdmUgdGhlIG5ldyBiZXN0IHRpbWUgZW50ZXIgeW91ciBuYW1lLlwiXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbDEudGV4dENvbnRlbnQgPSBcIk5hbWVcIlxuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQxLm5hbWUgPSBcIm5hbWVcIlxuICAgIGlucHV0MS50eXBlID0gXCJ0ZXh0XCJcbiAgICBpbnB1dDEuaWQgPSBcIm5hbWVcIlxuICAgIGlucHV0MS5yZXF1aXJlZCA9IHRydWVcbiAgICBjb25zdCBzdWJtaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3VibWl0Q29udGFpbmVyJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0J1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXG5cbiAgICAvL2FwcGVuZCBlbGVtZW50c1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsMSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0Q29udGFpbmVyKVxuICAgIHN1Ym1pdENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKVxuXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGhpZ2hTY29yZUZvcm07ICIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBteU5hbWUgZnJvbSAnLi9teU5hbWUnO1xuaW1wb3J0IEltYWdlMSBmcm9tICcuL2ltYWdlcy93YWxkby5qcGcnXG5pbXBvcnQgYWRkTWVudSBmcm9tICcuL2FkZE1lbnUnO1xuaW1wb3J0IGFkZENpcmNsZSBmcm9tICcuL2FkZENpcmNsZSc7XG5pbXBvcnQgYWRkTWVzc2FnZSBmcm9tICcuL2FkZE1lc3NhZ2UnXG5pbXBvcnQgR2FtZVN0b3JhZ2UgZnJvbSAnLi9nYW1lU3RvcmFnZSdcbmltcG9ydCBhZGRQaWMgZnJvbSAnLi9hZGRQaWMnXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4vc3RhcnRHYW1lJztcbmltcG9ydCBQbGF5ZXJTdG9yYWdlIGZyb20gJy4vcGxheWVyRGF0YSc7XG5pbXBvcnQgaGlnaFNjb3JlRm9ybSBmcm9tICcuL2hpZ2hTY29yZUZvcm0nO1xuaW1wb3J0IHlvdVdvbiBmcm9tICcuL3lvdVdvbic7XG5cbmxldCBjdXJyZW50UGxheWVyID0gbmV3IFBsYXllclN0b3JhZ2VcbmxldCBjdXJyZW50R2FtZSA9IG5ldyBHYW1lU3RvcmFnZVxuXG5cbi8vc3RhcnQgZ2FtZSBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyXG5zdGFydEdhbWUoKVxuXG5cbmNvbnN0IHN0YXJ0RXZlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbicpO1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcbn1cblxuc3RhcnRFdmVudCgpXG5cbmZ1bmN0aW9uIHN0YXJ0TmV3R2FtZShlKSB7XG5cbiAgY29uc3Qgc3RhcnRSZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uQ29udGFpbmVyJyk7XG4gIHN0YXJ0UmVtb3ZlLnJlbW92ZSgpXG4gIGFkZFBpYygpXG4gIHBpY0xpc3RlbmVyKClcbiAgc3RhcnRUaW1lcigpXG59XG5cbmZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gIGxldCB1dWlkID0gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuICBjdXJyZW50UGxheWVyLm5ld0RhdGEodXVpZClcbiAgY29uc29sZS5sb2coY3VycmVudFBsYXllcilcbiAgc3RhcnRBcGkodXVpZClcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRBcGkodXVpZCkge1xuXG4gIHRyeSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FtZS9zdGFydD9pZD0ke3V1aWR9YClcblxuICAgIGNvbnN0IHN0YXJ0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXG4gIH1cblxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246XCIsIGVycm9yKTtcbiAgICAvL2FkZCBlcnJvciBtZXNzYWdlIHRvIGRvbVxuICAgIC8vZXJyb3JEaXNwbGF5KClcbiAgfVxufVxuXG5cbi8qYWRkIGV2ZW50IGxpc3RlbmVyKi9cbmZ1bmN0aW9uIHBpY0xpc3RlbmVyKCkge1xuICBjb25zdCBwaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gIHBpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGltYWdlQ29vcilcbn1cblxuLy8gcmVtb3ZlIHBpYyBsaXN0ZW5lclxuXG5mdW5jdGlvbiByZW1vdmVQaWNMaXN0ZW5lcigpIHtcbiAgXG4gIGNvbnN0IHBpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgcGljLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1hZ2VDb29yKVxufVxuXG4vL2dldCBjb29yZGluYXRlIG9mIGNsaWNrXG5cbmZ1bmN0aW9uIGltYWdlQ29vcihlKSB7XG5cbiAgbGV0IGNvb3JkID0gW2Uub2Zmc2V0WCwgZS5vZmZzZXRZXVxuXG4gIGxldCBjaGFyQXJyYXkgPSBbJ3dhbGRvJywgJ3dlbmRhJywgJ3dpemFyZCddXG4gIGNvbnN0IGNoYXJGb3VuZEFycmF5ID0gY3VycmVudEdhbWUuYWxsRGF0YS5tYXAoKHgpID0+IHguY2hhcmFjdGVyKTtcblxuICAvLyBnZXQgYXJyYXkgd2l0aCByZW1haW5pbmcgY2hhcmFjdGVycyB0byBhZGQgdG8gdGhlIG1lbnVcblxuICBjb25zdCBtZW51QXJyYXkgPSBjaGFyQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGNoYXJGb3VuZEFycmF5LmluZGV4T2YoeCkgPCAwO1xuICB9KTtcblxuXG4gIGFkZENpcmNsZShjb29yZClcbiAgYWRkTWVudShjb29yZCwgbWVudUFycmF5KVxuICByZW1vdmVQaWNMaXN0ZW5lcigpXG59XG5cbi8vbWFrZSBhcGkgY2FsbCB0byBjaGVjayBjb29yZFxuXG5jb25zdCBjaGVja0Nvb3JkID0gYXN5bmMgKG5hbWUsIGNvb3JkKSA9PiB7XG5cbiAgbGV0IFt4LCB5XSA9IGNvb3JkXG5cbiAgdHJ5IHtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nYW1lP2NoYXJfbmFtZT0ke25hbWV9Jng9JHt4fSZ5PSR7eX1gKVxuXG4gICAgY29uc3QgZ2FtZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBsZXQgbWVzc2FnZSA9IGdhbWVEYXRhLm1lc3NhZ2VcbiAgICBpZiAobWVzc2FnZSA9PSB0cnVlKSB7XG4gICAgICBjdXJyZW50R2FtZS5uZXdEYXRhKG5hbWUsIHgsIHkpXG5cbiAgICAgIGlmIChjdXJyZW50R2FtZS5hbGxEYXRhLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgIGdhbWVXb24oY29vcmQpXG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRNZXNzYWdlKGNvb3JkLCBtZXNzYWdlLCBuYW1lKVxuXG4gIH1cblxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246XCIsIGVycm9yKTtcbiAgICAvL2FkZCBlcnJvciBtZXNzYWdlIHRvIGRvbVxuICAgIC8vZXJyb3JEaXNwbGF5KClcbiAgfVxufVxuXG5jb25zdCBnYW1lV29uID0gYXN5bmMgKGNvb3JkKSA9PiB7XG5cbiAgLy9jb25zb2xlLmxvZyhjdXJyZW50UGxheWVyLmFsbERhdGEudXVpZClcblxuXG4gIHRyeSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FtZS9lbmQ/aWQ9JHtjdXJyZW50UGxheWVyLmFsbERhdGEudXVpZH1gKVxuXG4gICAgY29uc3Qgc3RvcERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoc3RvcERhdGEubWVzc2FnZSA9PSBmYWxzZSkge1xuICAgICAgY29uc29sZS5sb2coXCJ5b3Ugd2luXCIpXG4gICAgICB5b3VXb24oY29vcmQpXG5cbiAgICAgIHNldFRpbWVvdXQocmVtb3ZlTWVzc2FnZSwgNDAwMCk7XG5cblxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGlnaFNjb3JlRm9ybShjb29yZClcbiAgICAgIGZvcm1FdmVudCgpXG5cblxuXG4gICAgfVxuXG5cbiAgfVxuXG4gIGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW0gd2l0aCB5b3VyIGZldGNoIG9wZXJhdGlvbjpcIiwgZXJyb3IpO1xuICAgIC8vYWRkIGVycm9yIG1lc3NhZ2UgdG8gZG9tXG4gICAgLy9lcnJvckRpc3BsYXkoKVxuICB9XG5cblxufVxuXG5mdW5jdGlvbiByZW1vdmVNZXNzYWdlKCkge1xuICBjb25zdCB3aW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91V29uJylcbiAgY29uc3QgcGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY0NvbnRhaW5lcicpXG4gIHdpbi5yZW1vdmUoKVxuICBwaWMucmVtb3ZlKClcbiAgY3VycmVudEdhbWUuZGVsZXRlRGF0YVxuICBzdGFydEdhbWUoKVxuICBzdGFydEV2ZW50KClcbn1cblxuLy8gZm9ybSBldmVudCBsaXN0ZW5lclxuZnVuY3Rpb24gZm9ybUV2ZW50KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpLmVudHJpZXMoKSk7XG5cbiAgICBzZW5kRGF0YShkYXRhLm5hbWUsIGN1cnJlbnRQbGF5ZXIuYWxsRGF0YS51dWlkKVxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcbiAgICBjb25zdCBwaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGljQ29udGFpbmVyJylcbiAgICBmb3JtLnJlbW92ZSgpXG4gICAgcGljLnJlbW92ZSgpXG4gICAgY3VycmVudEdhbWUuZGVsZXRlRGF0YVxuICAgIHN0YXJ0R2FtZSgpXG4gICAgc3RhcnRFdmVudCgpXG5cbiAgICAvL2NvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtb3ZlXCIpO1xuICAgIC8vcmVtb3ZlLnJlbW92ZSgpXG5cblxuICB9KVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmREYXRhKG5hbWUsIHV1aWQpIHtcblxuICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhbWUvc2NvcmUnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGlkOiB1dWlkLFxuXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAvL21heWJlIHNldCBzdGF0ZSBmb3IgYSByZXJlbmRlclxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICB9KTtcblxufVxuXG5cblxuZXhwb3J0IHtcbiAgY2hlY2tDb29yZCxcbiAgY3VycmVudEdhbWUsXG4gIHBpY0xpc3RlbmVyLFxufTtcblxuIiwiY29uc3QgbXlOYW1lID0gKG5hbWUpID0+ICdIaSEgTXkgbmFtZSBpcyAnICsgbmFtZTtcblxuZXhwb3J0IGRlZmF1bHQgbXlOYW1lOyIsImNsYXNzIFBsYXllckRhdGEge1xuICAgIGNvbnN0cnVjdG9yKHV1aWQpIHtcbiAgICAgIFxuICAgICAgdGhpcy51dWlkID0gdXVpZFxuICAgICAgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgY2xhc3MgUGxheWVyU3RvcmFnZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIHRoaXMucGxheWVyID0gXCJcIlxuICAgIH1cbiAgICAvLyBjcmVhdGUgYSBuZXcgcGxheWVyIGFuZCBzYXZlIGl0IGluIHRoZSBjb2xsZWN0aW9uXG4gICAgbmV3RGF0YSh1dWlkKXtcbiAgICAgIGxldCBwZCA9IG5ldyBQbGF5ZXJEYXRhKHV1aWQpXG4gICAgICB0aGlzLnBsYXllciA9IHBkXG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXJcbiAgICB9XG4gICAgXG4gICAgZ2V0IGFsbERhdGEoKXtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllclxuICAgIH1cbiAgXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBQbGF5ZXJTdG9yYWdlOyIsImltcG9ydCB3YWxkbzIgZnJvbSAnLi9pbWFnZXMvd2FsZG8ycmVzaXplLmpwZydcblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuXG5cbiAgICBjb25zdCBzdGFydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXJ0Q29udGFpbmVyLmlkID0gXCJidXR0b25Db250YWluZXJcIlxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldoZXJlJ3MgV2FsZG9cIjtcbiAgICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZTEuc3JjID0gd2FsZG8yO1xuICAgIGltYWdlMS5jbGFzc0xpc3QuYWRkKCd3YWxkbzFQaWMnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gICAgYnV0dG9uLmlkID0gJ2J1dHRvbidcbiAgICBzdGFydENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICAgIHN0YXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlMSlcbiAgICBzdGFydENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGFydENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0R2FtZTsiLCJjb25zdCB5b3VXb24gPSAoY29vcmQpID0+IHtcbiAgXG4gICAgbGV0IFt4LCB5XSA9IGNvb3JkXG4gXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuaWQgPSAneW91V29uJztcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0geSArIFwicHhcIjtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJZb3UgV29uIVwiXG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHQpXG4gIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICBcbiAgIFxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgeW91V29uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=