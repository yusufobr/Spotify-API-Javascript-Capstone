/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n.pop,\\r\\n.reserv-pop {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  z-index: 1000;\\r\\n  backdrop-filter: blur(7px);\\r\\n  padding: 1.5%;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  background-color: black;\\r\\n  padding: 0 1.25em 1.25em 1.25em;\\r\\n  width: 90%;\\r\\n  max-width: 550px;\\r\\n  max-height: 100%;\\r\\n  overflow-y: auto;\\r\\n  border-radius: 20px;\\r\\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.popup::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.img-container {\\r\\n  overflow: hidden;\\r\\n  max-height: 30vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.img-container img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popup-content {\\r\\n  background: linear-gradient(-45deg, #35f80415, #001aff15, #fc049520, #cd04ff20);\\r\\n  padding: 20px;\\r\\n  display: flex !important;\\r\\n  flex-direction: column !important;\\r\\n  justify-content: center !important;\\r\\n  border-style: solid;\\r\\n  border-width: 2px;\\r\\n  border-radius: 20px;\\r\\n  border-color: white;\\r\\n  text-align: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.h3class {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.addh3comment {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comment-input,\\r\\n.name-input {\\r\\n  color: black;\\r\\n  border-radius: 4px;\\r\\n  padding-left: 8px;\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n.start-date-input,\\r\\n.end-Input {\\r\\n  color: black;\\r\\n  width: 50%;\\r\\n  height: 5vh;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 13px;\\r\\n  margin-left: 2%;\\r\\n}\\r\\n\\r\\nform > button {\\r\\n  width: 30%;\\r\\n  border: 1px solid white;\\r\\n  height: 5vh;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n@keyframes gradient {\\r\\n  0% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    background-position: 100% 50%;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.card-color:hover {\\r\\n  background: linear-gradient(-45deg, #35f80410, #001aff10, #fc049515, #cd04ff15);\\r\\n  background-size: 200% 200%;\\r\\n  animation: gradient 8s ease infinite;\\r\\n}\\r\\n\\r\\n.custom-h {\\r\\n  height: 5vh;\\r\\n}\\r\\n\\r\\n.image-container img {\\r\\n  transition: transform 3s ease;\\r\\n}\\r\\n\\r\\n.image-container:hover img {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Modules/addLike.js":
/*!********************************!*\
  !*** ./src/Modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"fetchLikes\": () => (/* binding */ fetchLikes),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst updateLikes = async (key, likes) => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/likes/';\r\n  const res = await fetch(url);\r\n  const data = await res.json();\r\n\r\n  data.filter((item) => {\r\n    if (item.item_id === `${key}`) {\r\n      likes.innerHTML = `${item.likes} likes`;\r\n    }\r\n    return '';\r\n  });\r\n};\r\n\r\nconst addLike = async (key, likes) => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/likes/';\r\n  await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: `${key}`,\r\n    }),\r\n    headers: {\r\n      'Content-Type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n\r\n  updateLikes(key, likes);\r\n};\r\n\r\nconst fetchLikes = async () => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/likes/';\r\n  const res = await fetch(url);\r\n  const data = await res.json();\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/addLike.js?");

/***/ }),

/***/ "./src/Modules/apiConsts.js":
/*!**********************************!*\
  !*** ./src/Modules/apiConsts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"options\": () => (/* binding */ options),\n/* harmony export */   \"url\": () => (/* binding */ url)\n/* harmony export */ });\nconst url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0';\r\nconst options = {\r\n  method: 'GET',\r\n  headers: {\r\n    'X-RapidAPI-Key': 'd0af0bcdb1msh4547e68b9e65aa2p16dec0jsnbc6afde93c67',\r\n    'x-rapidapi-host': 'shazam.p.rapidapi.com',\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/apiConsts.js?");

/***/ }),

/***/ "./src/Modules/commentsPopUp.js":
/*!**************************************!*\
  !*** ./src/Modules/commentsPopUp.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (itemId) => {\r\n  try {\r\n    const response = await fetch(\r\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kOjkqwEwPrgtqCjTWn0f/comments?item_id=${itemId}`,\r\n    );\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    throw new Error(error);\r\n  }\r\n};\r\n\r\nconst addComment = async (itemId, name, comment) => {\r\n  await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kOjkqwEwPrgtqCjTWn0f/comments',\r\n    {\r\n      method: 'POST',\r\n      headers: { 'Content-Type': 'application/json' },\r\n      body: JSON.stringify({\r\n        item_id: itemId,\r\n        username: name,\r\n        comment,\r\n      }),\r\n    },\r\n  );\r\n};\r\n\r\nconst commentsPopUp = () => {\r\n  const likeBtns = Array.from(document.getElementsByClassName('btn'));\r\n  const pop = document.querySelector('.pop');\r\n  pop.setAttribute('style', 'display: none;');\r\n\r\n  const createPopup = async (data) => {\r\n    const popup = document.createElement('div');\r\n    popup.classList.add('popup');\r\n\r\n    const closeBtn = document.createElement('div');\r\n    closeBtn.classList.add(\r\n      'close-btn',\r\n      'text-4xl',\r\n      'pb-2',\r\n      'cursor-pointer',\r\n      'text-right',\r\n    );\r\n    closeBtn.innerHTML = '&times;';\r\n    closeBtn.addEventListener('click', () => {\r\n      popup.remove();\r\n      pop.setAttribute('style', 'display: none;');\r\n    });\r\n\r\n    const popupImgContainer = document.createElement('div');\r\n    popupImgContainer.classList.add('img-container', 'rounded-lg');\r\n\r\n    const popupImg = document.createElement('img');\r\n    // popupImg.classList.add('')\r\n    popupImg.src = data.images?.coverart\r\n      || data.images?.background\r\n      || `https://dummyimage.com/400x400/000/1aff00&text=${data.title}`;\r\n\r\n    const popupTitle = document.createElement('a');\r\n    popupTitle.classList.add(\r\n      'text-2xl',\r\n      'font-bold',\r\n      'hover:text-[#1ED760]',\r\n      'cursor-pointer',\r\n      'pt-4',\r\n    );\r\n    popupTitle.innerHTML = data.title;\r\n    popupTitle.setAttribute('href', data.url);\r\n    popupTitle.setAttribute('target', '_blank');\r\n\r\n    const artist = document.createElement('h4');\r\n    artist.classList.add('text-[#777]', 'text-lg', 'uppercase', '-mt-2');\r\n    artist.innerHTML = data.artists[0].alias;\r\n\r\n    const commentsTitle = document.createElement('h3');\r\n    const comments = await getComments(data.key);\r\n\r\n    commentsTitle.classList.add('text-[#1ED760]', 'mt-4');\r\n    commentsTitle.textContent = `Comments (${\r\n      comments.length ? comments.length : '0'\r\n    })`;\r\n\r\n    const commentList = document.createElement('ul');\r\n    commentList.classList.add('comment-list');\r\n    if (comments.length > 0) {\r\n      comments.forEach((comment) => {\r\n        const commentItem = document.createElement('li');\r\n        commentItem.innerHTML = `<div class=\"grid grid-cols-3\">\r\n        <div>\r\n          ${comment.creation_date} \r\n        </div>\r\n        <div class=\"text-left col-span-2\">\r\n        <strong>${comment.comment} : </strong> ${comment.username}\r\n        </div>\r\n      </div>`;\r\n        commentList.appendChild(commentItem);\r\n      });\r\n    } else {\r\n      const noCommentItem = document.createElement('li');\r\n      noCommentItem.innerHTML = 'No comments yet';\r\n      commentList.appendChild(noCommentItem);\r\n    }\r\n\r\n    const formTitle = document.createElement('h3');\r\n    formTitle.innerHTML = 'Add a comment';\r\n\r\n    const commentInput = document.createElement('input');\r\n    commentInput.type = 'text';\r\n    commentInput.classList.add('comment-input');\r\n    commentInput.placeholder = 'Enter your name...';\r\n\r\n    const nameInput = document.createElement('input');\r\n    nameInput.type = 'text';\r\n    nameInput.classList.add('name-input');\r\n    nameInput.placeholder = 'Enter a comment...';\r\n\r\n    const submitBtn = document.createElement('button');\r\n    submitBtn.type = 'submit';\r\n    submitBtn.innerHTML = 'Comment';\r\n\r\n    const form = document.createElement('form');\r\n    form.addEventListener('submit', async (event) => {\r\n      event.preventDefault();\r\n      const commentInput = event.target.querySelector('.comment-input');\r\n      const comment = commentInput.value.trim();\r\n      const nameInput = event.target.querySelector('.name-input');\r\n      const name = nameInput.value.trim();\r\n      if (comment) {\r\n        addComment(data.key, name, comment);\r\n        const comments = await getComments(data.key);\r\n\r\n        const commentItem = document.createElement('li');\r\n        commentItem.innerHTML = `<strong>${comment}:</strong> ${name}`;\r\n        commentList.appendChild(commentItem);\r\n\r\n        commentsTitle.textContent = `Comments (${comments.length})`;\r\n        commentInput.value = '';\r\n        nameInput.value = '';\r\n      }\r\n    });\r\n\r\n    form.appendChild(commentInput);\r\n    form.appendChild(nameInput);\r\n    form.appendChild(submitBtn);\r\n\r\n    const popupHeader = document.createElement('div');\r\n    popupHeader.classList.add('popup-header');\r\n    popupHeader.appendChild(closeBtn);\r\n\r\n    const popupContent = document.createElement('div');\r\n    popupContent.classList.add('popup-content');\r\n    popupImgContainer.appendChild(popupImg);\r\n    popupContent.appendChild(popupImgContainer);\r\n    popupContent.appendChild(popupTitle);\r\n    popupContent.appendChild(artist);\r\n    popupContent.appendChild(commentsTitle);\r\n    popupContent.appendChild(commentList);\r\n    popupContent.appendChild(formTitle);\r\n    popupContent.appendChild(form);\r\n\r\n    popup.appendChild(popupHeader);\r\n    popup.appendChild(popupContent);\r\n    pop.appendChild(popup);\r\n  };\r\n\r\n  likeBtns.forEach((likeBtn) => {\r\n    likeBtn.addEventListener('click', async () => {\r\n      pop.setAttribute('style', 'display: block;');\r\n      const cardKey = likeBtn.parentNode.parentNode.parentNode.id;\r\n      const data = JSON.parse(localStorage.getItem('songs')).find(\r\n        (song) => song.key === cardKey,\r\n      );\r\n      createPopup(data);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopUp);\r\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/commentsPopUp.js?");

/***/ }),

/***/ "./src/Modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/Modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = () => {\r\n  const itemsContainer = document.getElementById('cards');\r\n  const childCount = itemsContainer.childElementCount;\r\n\r\n  const charts = document.getElementById('charts');\r\n  charts.innerHTML = `Top Charts (${childCount})`;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\r\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/itemCounter.js?");

/***/ }),

/***/ "./src/Modules/renderCards.js":
/*!************************************!*\
  !*** ./src/Modules/renderCards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addLike.js */ \"./src/Modules/addLike.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/Modules/itemCounter.js\");\n\r\n\r\n\r\nconst cards = document.getElementById('cards');\r\n\r\nconst renderCards = (array) => {\r\n  let htmlToAppend = '';\r\n  array.forEach((data) => {\r\n\r\n    const artistsAlias = data?.artists[0]?.alias || 'Unknown Artist'\r\n\r\n    const card = `\r\n          <div id=\"${data.key}\" class=\"flex flex-col gap-2 p-4 h-full rounded-2xl bg-[#1C1F26] drop-shadow-md border-2 border-[#a8b3cf33;] hover:border-[#1ED760;] card-color\">\r\n            <div class=\"w-full h-[250px] rounded-lg overflow-hidden image-container\">\r\n              <img class=\"h-[250px] w-auto rounded-lg mx-auto\" src=\"${data.images?.coverart || data.images?.background || `https://dummyimage.com/400x400/000/1aff00&text=${data.title}`}\" />\r\n            </div>\r\n            <div class=\"flex flex-col gap-2 justify-between\">\r\n              <a href=\"${data.url}\" class=\"font-semibold text-lg capitalize custom-title cursor-pointer hover:text-[#1ED760]\">${data.title.length < 28 ? data.title : `${data.title.substring(0, 25)}...`}</a>\r\n              <h5 class=\"text-[#777] -mt-2 uppercase\">${artistsAlias}</h5>\r\n              <div class=\"flex flex-col gap-1 justify-between\">\r\n                <div class=\"flex justify-between p-1 items-center\">\r\n                  <span id=\"like-${data.key}\" class=\"text-sm\">no likes</span>\r\n                  <img class=\"h-[20px] color-white\" src=\"./assets/adore.svg\" alt=\"\" />\r\n                </div>\r\n                <button class=\"btn flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]\">\r\n                  <span class=\"text-sm\">Comments</span>\r\n                  <img class=\"h-[20px] color-white\" src=\"./assets/comment.svg\" alt=\"comment\" />\r\n                </button>\r\n                <button class=\"btn-2 flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]\">\r\n                  <span class=\"text-sm\">Reservations</span>  \r\n                  <img class=\"h-[20px] color-white\" src=\"./assets/reservation.svg\" alt=\"comment\" />\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        `;\r\n    htmlToAppend += card;\r\n  });\r\n\r\n  cards.innerHTML = htmlToAppend;\r\n\r\n  (0,_addLike_js__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)().then((showLikes) => {\r\n    array.forEach((data) => {\r\n      const likeNbr = document.getElementById(`like-${data.key}`);\r\n\r\n      const item = showLikes.find((item) => item.item_id === data.key);\r\n      likeNbr.innerHTML = item ? `${item.likes} likes` : 'No like yet';\r\n    });\r\n  });\r\n\r\n  array.forEach((data) => {\r\n    const { key } = data;\r\n    const likeNbr = document.getElementById(`like-${key}`);\r\n    const likeBtn = likeNbr.parentElement.querySelector('img');\r\n\r\n    likeBtn.addEventListener('click', () => {\r\n      (0,_addLike_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(key, likeNbr);\r\n      likeBtn.setAttribute('src', './assets/adoreRed.svg');\r\n    });\r\n  });\r\n  (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCards);\r\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/renderCards.js?");

/***/ }),

/***/ "./src/Modules/reservationPopUp.js":
/*!*****************************************!*\
  !*** ./src/Modules/reservationPopUp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getReservation = async (itemId) => {\r\n  try {\r\n    const response = await fetch(\r\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/reservations?item_id=${itemId}`,\r\n    );\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    throw new Error(error);\r\n  }\r\n};\r\n\r\nconst addReservation = async (itemId, name, dateStart, dateEnd) => {\r\n  const response = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/reservations',\r\n    {\r\n      method: 'POST',\r\n      headers: { 'Content-Type': 'application/json' },\r\n      body: JSON.stringify({\r\n        item_id: itemId,\r\n        username: name,\r\n        date_start: dateStart,\r\n        date_end: dateEnd,\r\n      }),\r\n    },\r\n  );\r\n\r\n  if (!response.ok) {\r\n    const errorMessage = await response.text();\r\n    throw new Error(errorMessage);\r\n  }\r\n};\r\n\r\nconst domReservations = () => {\r\n  const itemsContainer = document.getElementById('comment-list');\r\n  const childCount = itemsContainer.childElementCount;\r\n\r\n  const reservationCounter = document.getElementById('reservation-counter');\r\n  reservationCounter.innerHTML = `Reservations (${childCount})`;\r\n};\r\n\r\nconst reservationPopUp = () => {\r\n  const reservBtn = Array.from(document.getElementsByClassName('btn-2'));\r\n  const pop = document.querySelector('.reserv-pop');\r\n  pop.setAttribute('style', 'display: none;');\r\n\r\n  const createPopup = async (data) => {\r\n    const popup = document.createElement('div');\r\n    popup.classList.add('popup');\r\n\r\n    const closeBtn = document.createElement('div');\r\n    closeBtn.classList.add(\r\n      'close-btn',\r\n      'text-4xl',\r\n      'py-2',\r\n      'cursor-pointer',\r\n      'text-right',\r\n    );\r\n    closeBtn.innerHTML = '&times;';\r\n    closeBtn.addEventListener('click', () => {\r\n      popup.remove();\r\n      pop.setAttribute('style', 'display: none;');\r\n    });\r\n\r\n    const popupImgContainer = document.createElement('div');\r\n    popupImgContainer.classList.add('img-container');\r\n\r\n    const popupImg = document.createElement('img');\r\n    popupImg.src = data.images?.coverart\r\n      || data.images?.background\r\n      || `https://dummyimage.com/400x400/000/1aff00&text=${data.title}`;\r\n\r\n    const popupTitle = document.createElement('h3');\r\n    popupTitle.classList.add('text-3xl', 'font-bold');\r\n    popupTitle.innerHTML = data.title;\r\n\r\n    const commentsTitle = document.createElement('h3');\r\n    commentsTitle.id = 'reservation-counter';\r\n\r\n    const reservations = getReservation(data.key)\r\n      .then((res) => {\r\n        if (res.error) {\r\n          commentsTitle.textContent = 'Reservations (0)';\r\n        } else {\r\n          commentsTitle.textContent = `Reservations (${res.length})`;\r\n          // console.log('---++++', res)\r\n          let htmlToAppend = '';\r\n          res.forEach((item) => {\r\n            const html = `<li>${item.date_start} - ${item.date_end} || by <strong> ${item.username}</strong></li>`;\r\n            htmlToAppend += html;\r\n          });\r\n          const reserveList = document.querySelector('.comment-list');\r\n          reserveList.innerHTML = htmlToAppend;\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        commentsTitle.textContent = 'Reservations (0)';\r\n        throw new Error(err);\r\n      });\r\n    commentsTitle.textContent = `Reservations (${\r\n      reservations === undefined ? '0' : reservations?.length\r\n    })`;\r\n\r\n    const commentList = document.createElement('ul');\r\n    commentList.id = 'comment-list';\r\n    commentList.classList.add('comment-list');\r\n\r\n    if (reservations.length > 0) {\r\n      reservations.forEach((reservation) => {\r\n        const commentItem = document.createElement('li');\r\n        commentItem.innerHTML = `${reservation.date_start} - ${reservation.date_end} || by <strong> ${reservation.username}</strong>`;\r\n        commentList.appendChild(commentItem);\r\n      });\r\n    } else {\r\n      const noCommentItem = document.createElement('li');\r\n      noCommentItem.innerHTML = 'No reservations yet';\r\n      noCommentItem.id = 'no-reserv-yet';\r\n      commentList.appendChild(noCommentItem);\r\n    }\r\n\r\n    const formTitle = document.createElement('h3');\r\n    formTitle.innerHTML = 'Add a reservation';\r\n\r\n    const commentInput = document.createElement('input');\r\n    commentInput.type = 'text';\r\n    commentInput.classList.add('comment-input');\r\n    commentInput.placeholder = 'Your name';\r\n\r\n    const nameInput = document.createElement('input');\r\n    nameInput.type = 'date';\r\n    nameInput.classList.add('name-input', 'custom-h');\r\n    nameInput.placeholder = 'Start Date';\r\n\r\n    const endInput = document.createElement('input');\r\n    endInput.type = 'date';\r\n    endInput.classList.add('end-Input');\r\n    endInput.placeholder = 'End Date';\r\n\r\n    const submitBtn = document.createElement('button');\r\n    submitBtn.type = 'submit';\r\n    submitBtn.innerHTML = 'Reserve';\r\n\r\n    const form = document.createElement('form');\r\n    form.addEventListener('submit', async (event) => {\r\n      event.preventDefault();\r\n      const nameInput = event.target\r\n        .querySelector('.comment-input')\r\n        .value.trim();\r\n\r\n      const startDate = event.target.querySelector('.name-input').value.trim();\r\n      // const startDateFormat = new Date(startDate);\r\n\r\n      const endDate = document.querySelector('.end-Input').value.trim();\r\n      // const endDateFormat = new Date(endDate);\r\n\r\n      if (startDate) {\r\n        addReservation(data.key, nameInput, startDate, endDate);\r\n\r\n        setTimeout(() => {\r\n          const reservations = getReservation(data.key);\r\n\r\n          const commentItem = document.createElement('li');\r\n          commentItem.innerHTML = `${startDate} - ${endDate} by </strong> ${nameInput} <strong>`;\r\n          commentList.appendChild(commentItem);\r\n\r\n          commentsTitle.textContent = `Reservations (${\r\n            reservations?.length === 0 ? '0' : reservations.length\r\n          })`;\r\n\r\n          if (reservations.length === 0) {\r\n            const theNoReservToRemove = document.getElementById('no-reserv-yet');\r\n            theNoReservToRemove.remove();\r\n          }\r\n\r\n          domReservations();\r\n        }, 1000);\r\n\r\n        form.reset();\r\n      }\r\n    });\r\n\r\n    form.appendChild(commentInput);\r\n    form.appendChild(nameInput);\r\n    form.appendChild(endInput);\r\n    form.appendChild(submitBtn);\r\n\r\n    const popupHeader = document.createElement('div');\r\n    popupHeader.classList.add('popup-header');\r\n    popupHeader.appendChild(closeBtn);\r\n\r\n    const popupContent = document.createElement('div');\r\n    popupContent.classList.add('popup-content');\r\n    popupImgContainer.appendChild(popupImg);\r\n    popupContent.appendChild(popupImgContainer);\r\n    popupContent.appendChild(popupTitle);\r\n    popupContent.appendChild(commentsTitle);\r\n    popupContent.appendChild(commentList);\r\n    popupContent.appendChild(formTitle);\r\n    popupContent.appendChild(form);\r\n\r\n    popup.appendChild(popupHeader);\r\n    popup.appendChild(popupContent);\r\n    pop.appendChild(popup);\r\n  };\r\n\r\n  reservBtn.forEach((reserveBtn) => {\r\n    reserveBtn.addEventListener('click', async () => {\r\n      pop.setAttribute('style', 'display: block;');\r\n      const cardKey = reserveBtn.parentNode.parentNode.parentNode.id;\r\n      const data = JSON.parse(localStorage.getItem('songs')).find(\r\n        (song) => song.key === cardKey,\r\n      );\r\n      createPopup(data);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationPopUp);\r\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/reservationPopUp.js?");

/***/ }),

/***/ "./src/helpers/checkExpierSongs.js":
/*!*****************************************!*\
  !*** ./src/helpers/checkExpierSongs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction checkTimestemp(arg) {\r\n  const timestamp1 = Date.now();\r\n  const timestamp2 = JSON.parse(arg);\r\n\r\n  const timeDifference = timestamp1 - timestamp2;\r\n\r\n  if (timeDifference > 24 * 60 * 60 * 1000) {\r\n    return false;\r\n} else {\r\n    return true;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTimestemp);\n\n//# sourceURL=webpack://js-capstone-project/./src/helpers/checkExpierSongs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _rapidApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rapidApi.js */ \"./src/rapidApi.js\");\n\r\n\r\n\r\n\r\n(0,_rapidApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://js-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/rapidApi.js":
/*!*************************!*\
  !*** ./src/rapidApi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Modules_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/commentsPopUp.js */ \"./src/Modules/commentsPopUp.js\");\n/* harmony import */ var _Modules_reservationPopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/reservationPopUp.js */ \"./src/Modules/reservationPopUp.js\");\n/* harmony import */ var _Modules_renderCards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/renderCards.js */ \"./src/Modules/renderCards.js\");\n/* harmony import */ var _Modules_apiConsts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/apiConsts.js */ \"./src/Modules/apiConsts.js\");\n/* harmony import */ var _helpers_checkExpierSongs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/checkExpierSongs.js */ \"./src/helpers/checkExpierSongs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst getShazamTracks = async () => {\r\n  if (localStorage.getItem('songs') && (0,_helpers_checkExpierSongs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(localStorage.getItem('songDate'))) {\r\n    const localStorageItem = localStorage.getItem('songs');\r\n    const songs = JSON.parse(localStorageItem);\r\n\r\n    (0,_Modules_renderCards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(songs);\r\n    (0,_Modules_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_Modules_reservationPopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  } else {\r\n    try {\r\n      const response = await fetch(_Modules_apiConsts_js__WEBPACK_IMPORTED_MODULE_3__.url, _Modules_apiConsts_js__WEBPACK_IMPORTED_MODULE_3__.options);\r\n      const result = await response.json();\r\n      if (result && result.tracks) {\r\n        const songs = result.tracks;\r\n        const newDate = Date.now()\r\n        localStorage.setItem('songs', JSON.stringify(songs));\r\n        localStorage.setItem('songDate', JSON.stringify(newDate))\r\n\r\n        ;(0,_Modules_renderCards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(songs);\r\n        (0,_Modules_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        (0,_Modules_reservationPopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n      } else {\r\n        throw new Error('Failed to get Shazam tracks');\r\n      }\r\n    } catch (error) {\r\n      throw new Error(error);\r\n    }\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShazamTracks);\r\n\n\n//# sourceURL=webpack://js-capstone-project/./src/rapidApi.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;