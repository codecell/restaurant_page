/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background:\\r\\n    radial-gradient(black 15%, transparent 16%) 0 0,\\r\\n    radial-gradient(black 15%, transparent 16%) 8px 8px,\\r\\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,\\r\\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;\\r\\n  background-color: #282828;\\r\\n  background-size: 16px 16px;\\r\\n  min-height: 100vh;\\r\\n  color: #efefef;\\r\\n}\\r\\n\\r\\n.footer a {\\r\\n  color: #efefef;\\r\\n  margin: 0 auto;\\r\\n  width: 100%;\\r\\n  padding: 4%;\\r\\n  text-align: center;\\r\\n  position: absolute;\\r\\n  bottom: -20px;\\r\\n}\\r\\n\\r\\n.about-header {\\r\\n  text-align: center;\\r\\n  margin: 3%;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  height: 80px;\\r\\n  width: 100%;\\r\\n  border-bottom: 1.2px solid burlywood;\\r\\n  padding: 1.8%;\\r\\n}\\r\\n\\r\\n.nav-item {\\r\\n  cursor: pointer;\\r\\n  margin: 1.2em;\\r\\n  font-size: 1.4em;\\r\\n}\\r\\n\\r\\n.nav-item:hover {\\r\\n  border-bottom: 2px solid burlywood;\\r\\n}\\r\\n\\r\\n.home-page > h1 {\\r\\n  text-align: center;\\r\\n  padding-top: 3%;\\r\\n}\\r\\n\\r\\n.about-page {\\r\\n  padding: 4%;\\r\\n}\\r\\n\\r\\n.hero-img {\\r\\n  position: absolute;\\r\\n  left: 25%;\\r\\n  bottom: 10%;\\r\\n  object-fit: contain;\\r\\n  z-index: -1;\\r\\n  height: 80%;\\r\\n  width: 50%;\\r\\n  opacity: 0.3;\\r\\n}\\r\\n\\r\\n/* Menu page */\\r\\n.canvas {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  flex: 1;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  max-height: 300px;\\r\\n  width: 300px;\\r\\n  height: 220px;\\r\\n}\\r\\n\\r\\n.menu-img {\\r\\n  object-fit: contain;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.food-label {\\r\\n  margin-top: 2%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.price {\\r\\n  margin-top: 1em;\\r\\n  display: block;\\r\\n  color: rgb(128, 206, 128);\\r\\n}\\r\\n\\r\\n/* Contact Page */\\r\\nform {\\r\\n  width: 40%;\\r\\n  margin: 0 auto;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.field {\\r\\n  padding: 1.2em 1em;\\r\\n  height: 40px;\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  height: 200px;\\r\\n  width: 100%;\\r\\n  display: block;\\r\\n  padding: 1.2em 1em;\\r\\n}\\r\\n\\r\\n.contact-button {\\r\\n  color: orangered;\\r\\n  font-weight: bold;\\r\\n  padding: 9px 1em;\\r\\n  width: 30%;\\r\\n  margin-top: 3%;\\r\\n  cursor: pointer;\\r\\n  border-radius: 2px;\\r\\n  border: 1.2px solid #fff;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  .navbar {\\r\\n    padding-top: 7%;\\r\\n    padding-left: 10%;\\r\\n  }\\r\\n\\r\\n  .nav-item {\\r\\n    margin: 0.6em;\\r\\n    font-size: 1em;\\r\\n  }\\r\\n\\r\\n  .canvas {\\r\\n    display: block;\\r\\n    min-height: 100vh;\\r\\n  }\\r\\n\\r\\n  .card {\\r\\n    height: 300px;\\r\\n    padding-left: 12%;\\r\\n    margin-bottom: 3em;\\r\\n  }\\r\\n\\r\\n  .menu-img {\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n\\r\\n  form {\\r\\n    width: 80%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst aboutText = `\n  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, voluptatem. \n  Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa \n  dicta corporis eligendi aspernatur facere eum.\n  Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa dicta corporis eligendi \n  aspernatur facere eum Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa dicta \n  corporis eligendi aspernatur facere eum. aspernatur facere eum Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa dicta \n  corporis eligendi aspernatur facere eum.\n`;\n\nconst about = `\n  <div class=\"about-page\">\n    <h2 class='about-header'>ABOUT</h2>\n    <p>${aboutText}</p>\n  </div>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n\n//# sourceURL=webpack:///./src/components/about.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst contact = `\n  <div class=\"contact-page\">\n    <h2 class='about-header'>HAVE AN INQUIRY ?</h2>\n    <form>\n      <input class='field' type='text' placeholder='Enter Your Name' />\n      <input type='email' class='field' placeholder='Enter Your Email' />\n      <textarea placeholder='Enter message/inquiry'></textarea>\n      <button class='contact-button'>LOREM</button>\n    </form>\n  </div>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n//# sourceURL=webpack:///./src/components/contact.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst footerWrapper = document.createElement('footer');\nfooterWrapper.setAttribute('class', 'footer');\nconst url = 'https://alfredezaka.netlify.app/';\n\nconst footerLink = document.createElement('a');\nfooterLink.setAttribute('href', url);\nfooterLink.textContent = '© 2020 Alfred Ezaka';\n\nfooterWrapper.appendChild(footerLink);\nfooterWrapper.classList.add('footer');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (footerWrapper);\n\n//# sourceURL=webpack:///./src/components/footer.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_waiter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/waiter.png */ \"./src/images/waiter.png\");\n\r\n\r\n\r\nconst home = `\r\n  <div class=\"home-page\">\r\n    <h1 class='welcome'>WELCOME TO LOREM RESTAURANT</h1>\r\n    <img src=${_images_waiter_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]} class='hero-img' />\r\n  </div>\r\n`;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/components/home.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_chow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/chow.png */ \"./src/images/chow.png\");\n/* harmony import */ var _images_burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/burger.png */ \"./src/images/burger.png\");\n/* harmony import */ var _images_pear_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/pear.png */ \"./src/images/pear.png\");\n/* harmony import */ var _images_cutlery_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/cutlery.png */ \"./src/images/cutlery.png\");\n\n\n\n\n\n\nconst dayMenu = [\n  { image: _images_chow_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"], title: 'Continental', price: '£100' },\n  { image: _images_pear_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"], title: 'Health Booze', price: '£40' },\n  { image: _images_burger_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"], title: 'Best Bite', price: '£80' },\n  { image: _images_cutlery_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"], title: 'Custom Mix', price: '£180' },\n];\n\nconst menu = `\n  <div>\n    <h2 class='about-header'>MENU</h2>\n    <div class=\"canvas\">\n      ${dayMenu.map((item) => `\n          <div class=\"card\">\n            <img src=${item.image} class=\"menu-img\" />\n            <p class=\"food-label\">\n              ${item.title}\n              <span class=\"price\">${item.price}</span>\n            </p>\n          </div>\n        `)}\n    </div>\n  </div>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n\n//# sourceURL=webpack:///./src/components/menu.js?");

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction navbar() {\n  const content = document.getElementById('content');\n\n  const navBar = document.createElement('header');\n  navBar.className = 'navbar';\n\n  content.appendChild(navBar);\n\n  const homeNav = document.createElement('span');\n  homeNav.textContent = 'home';\n  homeNav.className = 'nav-item';\n\n  const menuNav = document.createElement('span');\n  menuNav.textContent = 'menu';\n  menuNav.className = 'nav-item';\n\n  const contactNav = document.createElement('span');\n  contactNav.textContent = 'contact';\n  contactNav.className = 'nav-item';\n\n  const aboutNav = document.createElement('span');\n  aboutNav.textContent = 'about';\n  aboutNav.className = 'nav-item';\n\n  navBar.appendChild(homeNav);\n  navBar.appendChild(menuNav);\n  navBar.appendChild(contactNav);\n  navBar.appendChild(aboutNav);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n\n\n//# sourceURL=webpack:///./src/components/navbar.js?");

/***/ }),

/***/ "./src/components/shared.js":
/*!**********************************!*\
  !*** ./src/components/shared.js ***!
  \**********************************/
/*! exports provided: content, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"content\", function() { return content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\nconst content = document.querySelector('#content');\r\nconst wrapper = document.createElement('section');\r\nwrapper.id = 'wrapper';\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/shared.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/images/burger.png":
/*!*******************************!*\
  !*** ./src/images/burger.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"979e232ae86096d27d3c0cfc68bdca2d.png\");\n\n//# sourceURL=webpack:///./src/images/burger.png?");

/***/ }),

/***/ "./src/images/chow.png":
/*!*****************************!*\
  !*** ./src/images/chow.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"18a8625f6b66750208214536438181f4.png\");\n\n//# sourceURL=webpack:///./src/images/chow.png?");

/***/ }),

/***/ "./src/images/cutlery.png":
/*!********************************!*\
  !*** ./src/images/cutlery.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"85cf0719267546395ba66be995bfb4e3.png\");\n\n//# sourceURL=webpack:///./src/images/cutlery.png?");

/***/ }),

/***/ "./src/images/pear.png":
/*!*****************************!*\
  !*** ./src/images/pear.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e52823020be8c8a6666a5e8f155e1ebe.png\");\n\n//# sourceURL=webpack:///./src/images/pear.png?");

/***/ }),

/***/ "./src/images/waiter.png":
/*!*******************************!*\
  !*** ./src/images/waiter.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f8c8776ebc67d10995fcfe9dc7f7bf22.png\");\n\n//# sourceURL=webpack:///./src/images/waiter.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar */ \"./src/components/navbar.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about */ \"./src/components/about.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared */ \"./src/components/shared.js\");\n\n\n\n\n\n\n\n\n\n\nObject(_components_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n_components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"].innerHTML = _components_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n_components_shared__WEBPACK_IMPORTED_MODULE_7__[\"content\"].appendChild(_components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"]);\n_components_shared__WEBPACK_IMPORTED_MODULE_7__[\"content\"].appendChild(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nconst navLinks = document.querySelectorAll('.nav-item');\n\nconst renderPage = page => {\n  switch (page.textContent) {\n    case 'home':\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"].innerHTML = _components_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"content\"].appendChild(_components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"]);\n      break;\n    case 'menu':\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"].innerHTML = _components_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"content\"].appendChild(_components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"]);\n      break;\n    case 'contact':\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"].innerHTML = _components_contact__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"content\"].appendChild(_components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"]);\n      break;\n    case 'about':\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"].innerHTML = _components_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"content\"].appendChild(_components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"]);\n      break;\n    default:\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"].innerHTML = _components_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n      _components_shared__WEBPACK_IMPORTED_MODULE_7__[\"content\"].appendChild(_components_shared__WEBPACK_IMPORTED_MODULE_7__[\"wrapper\"]);\n  }\n};\n\nnavLinks.forEach((nav) => {\n  nav.addEventListener('click', () => {\n    renderPage(nav);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });