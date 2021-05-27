/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root\n{\n    --red-text: #FE6a6a;\n    --green-text: #47C7C7;\n    --nord-white-1: #ECEFF4;\n    --nord-white-2: #E5E9F0;\n    --nord-white-3: #D8DEE9;\n    --nord-gray-1: #4C566A;\n    --nord-gray-2: #434C5E;\n    --nord-gray-3: #3B4252;\n    --javascript: #EFD81D;\n}\n\n*\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody, html\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'JetBrains Mono', monospace;\n    height: 100%;\n}\n\n/*------------------Landing Page-------------------------*/\n\n.container-landing\n{\n    height: 100vh;\n    background-color: #2E3440;\n    padding: 0 200px;\n}\n\n.container\n{\n    display: flex;\n    flex-direction: column;\n    background-color: #2E3440;\n    min-height: 100%;\n    padding: 50px 200px 0 200px;\n}\n\n.name\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 30%;\n    flex: 0.2;\n    padding: 20px 0 10px 0;\n    font-size: 1.4rem;\n}\n\n.name__title\n{\n    color: var(--green-text);\n    text-align: center;\n    margin: 10px 0 0 0;\n}\n\n.name__type\n{\n    margin: 5px 0;\n    color: var(--nord-white-3);\n}\n\n.landing\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: 0.8;\n}\n\n\n.landing-code\n{\n    height: 100%;\n}\n\n.landing-info\n{\n    display: flex;\n    padding: 0 20px 40px 20px;\n    align-items: center;\n}\n\n.landing-code__container\n{\n    margin-bottom: 20px;\n}\n\n.landing-code__letters\n{\n    text-decoration: none;\n    color: var(--red-text);\n    font-size: 2rem;\n}\n\n.landing-info__text\n{\n    color: var(--nord-white-2);\n    font-size: 20px;\n    width: 70%;\n}\n\n.landing-info__image\n{\n    border-radius: 6px;\n    width: 20%;\n    -webkit-box-shadow: 0 8px 6px -6px black;\n    -moz-box-shadow: 0 8px 6px -6px black;\n    box-shadow: 0 8px 6px -6px black;\n}\n\n/*-------------------------Skills Area*-----------------------------*/\n\n.skills\n{\n    display: flex;\n    flex-direction: column;\n    padding: 0 40px;\n}\n\n.skills__title\n{\n    font-size: 2rem;\n    color: var(--red-text);\n    font-weight: bold;\n    margin-bottom: 60px;\n}\n\n.skills__title__category\n{\n    font-size: 1.7rem;\n    color: var(--green-text);\n}\n\n.skills__container-skill\n{\n    display: flex;\n    padding: 30px;\n    border-radius: 6px;\n    align-items: center;\n    margin-bottom: 50px;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n}\n\n.skills__container-skill__generic\n{\n    width: 70px;\n    height: 70px;\n}\n\n.skills__container-skill__optional\n{\n    color: var(--nord-white-2);\n    font-size: 1.8rem;\n}\n\n.skills__container-skill__mongo\n{\n    width: 200px;\n}\n\n.skills__container-skill__node\n{\n    width: 200px;\n    height: 80px;\n}\n\n.container__skills\n{\n    padding: 0 40px;\n    flex: 1;\n}\n\n/*------------------------Projects------------------------*/\n\n.projects\n{\n    display: flex;\n    padding: 0 40px;\n    flex-wrap: wrap;\n    flex-direction: column;\n    margin-bottom: 100px;\n}\n\n.project__container\n{\n    flex: 1;\n    border-radius: 4px;\n    padding: 20px;\n    background: rgba(46, 52, 64, .6);\n    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.39);\n    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.39);\n    margin: 10px;\n}\n\n.project__name\n{\n    color: var(--green-text);\n    margin: 10px 0;\n}\n\n.project__description\n{\n    display: flex;\n}\n\n.project__description__image\n{\n    width: 50%;\n    margin-right: 10px;\n    border-radius: 4px;\n}\n\n.project__description__info\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px 20px 0 20px;\n}\n\n.project__description__info__text\n{\n    flex: 0.8;\n    color: var(--nord-white-1);\n    font-size: 0.9rem;\n}\n\n.project__description__info__technologies\n{\n    flex: 0.2;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.project__description__info__technologies__tech\n{\n    text-decoration: none;\n    list-style: none;\n    margin: 5px;\n    background-color: var(--nord-white-1);\n    height: fit-content;\n    padding: 5px;\n    border-radius: 4px;\n    color: var(--nord-gray-3);\n    font-size: 1.1rem;\n    font-weight: bold;\n}\n\n.project__buttons\n{\n    display: flex;\n    justify-content: space-evenly;\n    padding: 10px;\n    margin-top: 30px;\n}\n\n.project__buttons__item\n{\n    height: 50px;\n    width: 50px;\n}\n\n/*-------------------Contact Me-------------------------*/\n\n.footer\n{\n    display: flex;\n    background-color: var(--nord-gray-3);\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 25px;\n}\n\n.footer__title\n{\n    display: flex;\n    width: 100%;\n    padding: 0 200px;\n}\n\n.footer__title__text\n{\n    color: var(--red-text);\n    font-size: 2rem;\n}\n\n.footer__social-networks\n{\n    display: flex;\n    justify-content: space-evenly;\n    width: 40%;\n}\n.footer__social-networks__icon\n{\n    width: 48px;\n    height: 48px;\n    margin: 10px;\n}\n\n.footer__email\n{\n    text-align: center;\n    color: var(--nord-white-3);\n    margin-bottom: 10px;\n}\n\n.footer__creator\n{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    color: var(--nord-white-3);\n}\n\n\n.footer__creator__image\n{\n    width: 24px;\n    height: 24px;\n    margin: 0 5px;\n}\n\n@media (max-width: 1024px)\n{\n/*-------------landing-----------------------*/\n    .container-landing {\n        padding: 10px;\n        height: min-content;\n    }\n    .landing-info\n    {\n        flex-direction: column-reverse;\n    }\n\n    .name {\n        height: auto;\n    }\n\n    .landing-info__image\n    {\n        width: 40%;\n        margin: 40px 0;\n    }\n\n    .landing-code\n    {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .container\n    {\n        padding: 40px 10px 10px;\n        min-height: max-content;\n    }\n\n    .project__description__info__technologies\n    {\n        align-items: center;\n        margin-top: 5px;\n    }\n\n    .project__description__info__technologies__tech\n    {\n        width: max-content;\n    }\n\n    .project__name\n    {\n        text-align: center;\n    }\n\n    .footer__creator\n    {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .container__skills\n    {\n        flex: 0;\n    }\n\n    .footer__title{\n        padding: 0 15px;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root\n{\n    --red-text: #FE6a6a;\n    --green-text: #47C7C7;\n    --nord-white-1: #ECEFF4;\n    --nord-white-2: #E5E9F0;\n    --nord-white-3: #D8DEE9;\n    --nord-gray-1: #4C566A;\n    --nord-gray-2: #434C5E;\n    --nord-gray-3: #3B4252;\n    --javascript: #EFD81D;\n}\n\n*\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody, html\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'JetBrains Mono', monospace;\n    height: 100%;\n}\n\n/*------------------Landing Page-------------------------*/\n\n.container-landing\n{\n    height: 100vh;\n    background-color: #2E3440;\n    padding: 0 200px;\n}\n\n.container\n{\n    display: flex;\n    flex-direction: column;\n    background-color: #2E3440;\n    min-height: 100%;\n    padding: 50px 200px 0 200px;\n}\n\n.name\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 30%;\n    flex: 0.2;\n    padding: 20px 0 10px 0;\n    font-size: 1.4rem;\n}\n\n.name__title\n{\n    color: var(--green-text);\n    text-align: center;\n    margin: 10px 0 0 0;\n}\n\n.name__type\n{\n    margin: 5px 0;\n    color: var(--nord-white-3);\n}\n\n.landing\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: 0.8;\n}\n\n\n.landing-code\n{\n    height: 100%;\n}\n\n.landing-info\n{\n    display: flex;\n    padding: 0 20px 40px 20px;\n    align-items: center;\n}\n\n.landing-code__container\n{\n    margin-bottom: 20px;\n}\n\n.landing-code__letters\n{\n    text-decoration: none;\n    color: var(--red-text);\n    font-size: 2rem;\n}\n\n.landing-info__text\n{\n    color: var(--nord-white-2);\n    font-size: 20px;\n    width: 70%;\n}\n\n.landing-info__image\n{\n    border-radius: 6px;\n    width: 20%;\n    -webkit-box-shadow: 0 8px 6px -6px black;\n    -moz-box-shadow: 0 8px 6px -6px black;\n    box-shadow: 0 8px 6px -6px black;\n}\n\n/*-------------------------Skills Area*-----------------------------*/\n\n.skills\n{\n    display: flex;\n    flex-direction: column;\n    padding: 0 40px;\n}\n\n.skills__title\n{\n    font-size: 2rem;\n    color: var(--red-text);\n    font-weight: bold;\n    margin-bottom: 60px;\n}\n\n.skills__title__category\n{\n    font-size: 1.7rem;\n    color: var(--green-text);\n}\n\n.skills__container-skill\n{\n    display: flex;\n    padding: 30px;\n    border-radius: 6px;\n    align-items: center;\n    margin-bottom: 50px;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n}\n\n.skills__container-skill__generic\n{\n    width: 70px;\n    height: 70px;\n}\n\n.skills__container-skill__optional\n{\n    color: var(--nord-white-2);\n    font-size: 1.8rem;\n}\n\n.skills__container-skill__mongo\n{\n    width: 200px;\n}\n\n.skills__container-skill__node\n{\n    width: 200px;\n    height: 80px;\n}\n\n.container__skills\n{\n    padding: 0 40px;\n    flex: 1;\n}\n\n/*------------------------Projects------------------------*/\n\n.projects\n{\n    display: flex;\n    padding: 0 40px;\n    flex-wrap: wrap;\n    flex-direction: column;\n    margin-bottom: 100px;\n}\n\n.project__container\n{\n    flex: 1;\n    border-radius: 4px;\n    padding: 20px;\n    background: rgba(46, 52, 64, .6);\n    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.39);\n    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.39);\n    margin: 10px;\n}\n\n.project__name\n{\n    color: var(--green-text);\n    margin: 10px 0;\n}\n\n.project__description\n{\n    display: flex;\n}\n\n.project__description__image\n{\n    width: 50%;\n    margin-right: 10px;\n    border-radius: 4px;\n}\n\n.project__description__info\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px 20px 0 20px;\n}\n\n.project__description__info__text\n{\n    flex: 0.8;\n    color: var(--nord-white-1);\n    font-size: 0.9rem;\n}\n\n.project__description__info__technologies\n{\n    flex: 0.2;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.project__description__info__technologies__tech\n{\n    text-decoration: none;\n    list-style: none;\n    margin: 5px;\n    background-color: var(--nord-white-1);\n    height: fit-content;\n    padding: 5px;\n    border-radius: 4px;\n    color: var(--nord-gray-3);\n    font-size: 1.1rem;\n    font-weight: bold;\n}\n\n.project__buttons\n{\n    display: flex;\n    justify-content: space-evenly;\n    padding: 10px;\n    margin-top: 30px;\n}\n\n.project__buttons__item\n{\n    height: 50px;\n    width: 50px;\n}\n\n/*-------------------Contact Me-------------------------*/\n\n.footer\n{\n    display: flex;\n    background-color: var(--nord-gray-3);\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 25px;\n}\n\n.footer__title\n{\n    display: flex;\n    width: 100%;\n    padding: 0 200px;\n}\n\n.footer__title__text\n{\n    color: var(--red-text);\n    font-size: 2rem;\n}\n\n.footer__social-networks\n{\n    display: flex;\n    justify-content: space-evenly;\n    width: 40%;\n}\n.footer__social-networks__icon\n{\n    width: 48px;\n    height: 48px;\n    margin: 10px;\n}\n\n.footer__email\n{\n    text-align: center;\n    color: var(--nord-white-3);\n    margin-bottom: 10px;\n}\n\n.footer__creator\n{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    color: var(--nord-white-3);\n}\n\n\n.footer__creator__image\n{\n    width: 24px;\n    height: 24px;\n    margin: 0 5px;\n}\n\n@media (max-width: 1024px)\n{\n/*-------------landing-----------------------*/\n    .container-landing {\n        padding: 10px;\n        height: min-content;\n    }\n    .landing-info\n    {\n        flex-direction: column-reverse;\n    }\n\n    .name {\n        height: auto;\n    }\n\n    .landing-info__image\n    {\n        width: 40%;\n        margin: 40px 0;\n    }\n\n    .landing-code\n    {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .container\n    {\n        padding: 40px 10px 10px;\n        min-height: max-content;\n    }\n\n    .project__description__info__technologies\n    {\n        align-items: center;\n        margin-top: 5px;\n    }\n\n    .project__description__info__technologies__tech\n    {\n        width: max-content;\n    }\n\n    .project__name\n    {\n        text-align: center;\n    }\n\n    .footer__creator\n    {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .container__skills\n    {\n        flex: 0;\n    }\n\n    .footer__title{\n        padding: 0 15px;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/animation-text.js":
/*!*******************************!*\
  !*** ./src/animation-text.js ***!
  \*******************************/
/***/ (() => {

let TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = "<span class=\"wrap\">" + this.txt + "</span>";

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  let elements = document.getElementsByClassName("typewrite");
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute("data-type");
    let period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


/***/ }),

/***/ "./src/generate-project.js":
/*!*********************************!*\
  !*** ./src/generate-project.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generate_technologies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-technologies */ "./src/generate-technologies.js");


function generateProject (data, elementHTML) {
  let project = `
    <div class="project__container">
            <h2 class="project__name">${data.title}</h2>
            <div class="project__description">
                <img src="${data.image}" alt="${data.title}" class="project__description__image">
                <div class="project__description__info">
                    <p class="project__description__info__text">${data.description}</p>
                    <ul class="project__description__info__technologies">
                        ${(0,_generate_technologies__WEBPACK_IMPORTED_MODULE_0__.default)(data.technologies)}
                    </ul>
                </div>
            </div>
            <div class="project__buttons">
                <a class="project__buttons__demo" href="${data.code}">
                    <img src="./images/github.svg" alt="" class="project__buttons__item">
                </a>
                <a class="project__buttons__github" href="${data.demo}">
                    <img src="./images/web2.svg" alt="" class="project__buttons__item">
                </a>
            </div>

        </div>
  `;

  elementHTML.insertAdjacentHTML("beforeend", project);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateProject);


/***/ }),

/***/ "./src/generate-technologies.js":
/*!**************************************!*\
  !*** ./src/generate-technologies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateSkills (skills) {
  let result = "";
  if (skills?.length === 0) {
    return "<p>No tienes techs agregadas</p>"
  } else {
    skills.map((skill) => {
      let data = `<li class="project__description__info__technologies__tech">${skill}</li>`;
      result += data;
    });
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateSkills);


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _animation_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-text */ "./src/animation-text.js");
/* harmony import */ var _animation_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_animation_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generate_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-project */ "./src/generate-project.js");




const projects = document.querySelector(".projects");
let url = "https://9dhcpnsgga.execute-api.us-east-2.amazonaws.com/default/personal-projects";

fetch(url).then(response => response.json()).then(data => {
  data.map((project) => {
    (0,_generate_project__WEBPACK_IMPORTED_MODULE_2__.default)(project, projects);
  });
}).catch(console.log);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL3NyYy9hbmltYXRpb24tdGV4dC5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9zcmMvZ2VuZXJhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9zcmMvZ2VuZXJhdGUtdGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGtEQUFrRCwwQkFBMEIsNEJBQTRCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDRCQUE0QixHQUFHLFFBQVEsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsK0NBQStDLG1CQUFtQixHQUFHLHdGQUF3RixvQkFBb0IsZ0NBQWdDLHVCQUF1QixHQUFHLGlCQUFpQixvQkFBb0IsNkJBQTZCLGdDQUFnQyx1QkFBdUIsa0NBQWtDLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLDBCQUEwQixrQkFBa0IsZ0JBQWdCLDZCQUE2Qix3QkFBd0IsR0FBRyxtQkFBbUIsK0JBQStCLHlCQUF5Qix5QkFBeUIsR0FBRyxrQkFBa0Isb0JBQW9CLGlDQUFpQyxHQUFHLGVBQWUsb0JBQW9CLDZCQUE2QixvQkFBb0IsZ0JBQWdCLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLG9CQUFvQixvQkFBb0IsZ0NBQWdDLDBCQUEwQixHQUFHLCtCQUErQiwwQkFBMEIsR0FBRyw2QkFBNkIsNEJBQTRCLDZCQUE2QixzQkFBc0IsR0FBRywwQkFBMEIsaUNBQWlDLHNCQUFzQixpQkFBaUIsR0FBRywyQkFBMkIseUJBQXlCLGlCQUFpQiwrQ0FBK0MsNENBQTRDLHVDQUF1QyxHQUFHLHdGQUF3RixvQkFBb0IsNkJBQTZCLHNCQUFzQixHQUFHLHFCQUFxQixzQkFBc0IsNkJBQTZCLHdCQUF3QiwwQkFBMEIsR0FBRywrQkFBK0Isd0JBQXdCLCtCQUErQixHQUFHLCtCQUErQixvQkFBb0Isb0JBQW9CLHlCQUF5QiwwQkFBMEIsMEJBQTBCLG9DQUFvQyxzQkFBc0IsR0FBRyx3Q0FBd0Msa0JBQWtCLG1CQUFtQixHQUFHLHlDQUF5QyxpQ0FBaUMsd0JBQXdCLEdBQUcsc0NBQXNDLG1CQUFtQixHQUFHLHFDQUFxQyxtQkFBbUIsbUJBQW1CLEdBQUcseUJBQXlCLHNCQUFzQixjQUFjLEdBQUcsZ0ZBQWdGLG9CQUFvQixzQkFBc0Isc0JBQXNCLDZCQUE2QiwyQkFBMkIsR0FBRywwQkFBMEIsY0FBYyx5QkFBeUIsb0JBQW9CLHVDQUF1Qyw0REFBNEQsb0RBQW9ELG1CQUFtQixHQUFHLHFCQUFxQiwrQkFBK0IscUJBQXFCLEdBQUcsNEJBQTRCLG9CQUFvQixHQUFHLG1DQUFtQyxpQkFBaUIseUJBQXlCLHlCQUF5QixHQUFHLGtDQUFrQyxvQkFBb0IsNkJBQTZCLGdDQUFnQyxHQUFHLHdDQUF3QyxnQkFBZ0IsaUNBQWlDLHdCQUF3QixHQUFHLGdEQUFnRCxnQkFBZ0Isb0JBQW9CLHNCQUFzQixHQUFHLHNEQUFzRCw0QkFBNEIsdUJBQXVCLGtCQUFrQiw0Q0FBNEMsMEJBQTBCLG1CQUFtQix5QkFBeUIsZ0NBQWdDLHdCQUF3Qix3QkFBd0IsR0FBRyx3QkFBd0Isb0JBQW9CLG9DQUFvQyxvQkFBb0IsdUJBQXVCLEdBQUcsOEJBQThCLG1CQUFtQixrQkFBa0IsR0FBRyw0RUFBNEUsb0JBQW9CLDJDQUEyQyw4QkFBOEIsMEJBQTBCLDZCQUE2QixvQkFBb0IsR0FBRyxxQkFBcUIsb0JBQW9CLGtCQUFrQix1QkFBdUIsR0FBRywyQkFBMkIsNkJBQTZCLHNCQUFzQixHQUFHLCtCQUErQixvQkFBb0Isb0NBQW9DLGlCQUFpQixHQUFHLG1DQUFtQyxrQkFBa0IsbUJBQW1CLG1CQUFtQixHQUFHLHFCQUFxQix5QkFBeUIsaUNBQWlDLDBCQUEwQixHQUFHLHVCQUF1Qix5QkFBeUIsb0JBQW9CLDhCQUE4QixpQ0FBaUMsR0FBRyxnQ0FBZ0Msa0JBQWtCLG1CQUFtQixvQkFBb0IsR0FBRyxpQ0FBaUMsMkVBQTJFLHdCQUF3Qiw4QkFBOEIsT0FBTywwQkFBMEIseUNBQXlDLE9BQU8sZUFBZSx1QkFBdUIsT0FBTyxtQ0FBbUMscUJBQXFCLHlCQUF5QixPQUFPLDRCQUE0Qix3QkFBd0IsaUNBQWlDLDhCQUE4QixPQUFPLHlCQUF5QixrQ0FBa0Msa0NBQWtDLE9BQU8sd0RBQXdELDhCQUE4QiwwQkFBMEIsT0FBTyw4REFBOEQsNkJBQTZCLE9BQU8sNkJBQTZCLDZCQUE2QixPQUFPLCtCQUErQix3QkFBd0IsOEJBQThCLGtDQUFrQyxPQUFPLGlDQUFpQyxrQkFBa0IsT0FBTyx1QkFBdUIsMEJBQTBCLE9BQU8sR0FBRyxXQUFXLGtGQUFrRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE9BQU8sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sYUFBYSxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sYUFBYSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0saUNBQWlDLDBCQUEwQiw0QkFBNEIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNEJBQTRCLEdBQUcsUUFBUSxnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLGlCQUFpQixnQkFBZ0IsaUJBQWlCLDZCQUE2QiwrQ0FBK0MsbUJBQW1CLEdBQUcsd0ZBQXdGLG9CQUFvQixnQ0FBZ0MsdUJBQXVCLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHVCQUF1QixrQ0FBa0MsR0FBRyxZQUFZLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtCQUFrQixnQkFBZ0IsNkJBQTZCLHdCQUF3QixHQUFHLG1CQUFtQiwrQkFBK0IseUJBQXlCLHlCQUF5QixHQUFHLGtCQUFrQixvQkFBb0IsaUNBQWlDLEdBQUcsZUFBZSxvQkFBb0IsNkJBQTZCLG9CQUFvQixnQkFBZ0IsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsb0JBQW9CLG9CQUFvQixnQ0FBZ0MsMEJBQTBCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLHNCQUFzQixHQUFHLDBCQUEwQixpQ0FBaUMsc0JBQXNCLGlCQUFpQixHQUFHLDJCQUEyQix5QkFBeUIsaUJBQWlCLCtDQUErQyw0Q0FBNEMsdUNBQXVDLEdBQUcsd0ZBQXdGLG9CQUFvQiw2QkFBNkIsc0JBQXNCLEdBQUcscUJBQXFCLHNCQUFzQiw2QkFBNkIsd0JBQXdCLDBCQUEwQixHQUFHLCtCQUErQix3QkFBd0IsK0JBQStCLEdBQUcsK0JBQStCLG9CQUFvQixvQkFBb0IseUJBQXlCLDBCQUEwQiwwQkFBMEIsb0NBQW9DLHNCQUFzQixHQUFHLHdDQUF3QyxrQkFBa0IsbUJBQW1CLEdBQUcseUNBQXlDLGlDQUFpQyx3QkFBd0IsR0FBRyxzQ0FBc0MsbUJBQW1CLEdBQUcscUNBQXFDLG1CQUFtQixtQkFBbUIsR0FBRyx5QkFBeUIsc0JBQXNCLGNBQWMsR0FBRyxnRkFBZ0Ysb0JBQW9CLHNCQUFzQixzQkFBc0IsNkJBQTZCLDJCQUEyQixHQUFHLDBCQUEwQixjQUFjLHlCQUF5QixvQkFBb0IsdUNBQXVDLDREQUE0RCxvREFBb0QsbUJBQW1CLEdBQUcscUJBQXFCLCtCQUErQixxQkFBcUIsR0FBRyw0QkFBNEIsb0JBQW9CLEdBQUcsbUNBQW1DLGlCQUFpQix5QkFBeUIseUJBQXlCLEdBQUcsa0NBQWtDLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLEdBQUcsd0NBQXdDLGdCQUFnQixpQ0FBaUMsd0JBQXdCLEdBQUcsZ0RBQWdELGdCQUFnQixvQkFBb0Isc0JBQXNCLEdBQUcsc0RBQXNELDRCQUE0Qix1QkFBdUIsa0JBQWtCLDRDQUE0QywwQkFBMEIsbUJBQW1CLHlCQUF5QixnQ0FBZ0Msd0JBQXdCLHdCQUF3QixHQUFHLHdCQUF3QixvQkFBb0Isb0NBQW9DLG9CQUFvQix1QkFBdUIsR0FBRyw4QkFBOEIsbUJBQW1CLGtCQUFrQixHQUFHLDRFQUE0RSxvQkFBb0IsMkNBQTJDLDhCQUE4QiwwQkFBMEIsNkJBQTZCLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0Isa0JBQWtCLHVCQUF1QixHQUFHLDJCQUEyQiw2QkFBNkIsc0JBQXNCLEdBQUcsK0JBQStCLG9CQUFvQixvQ0FBb0MsaUJBQWlCLEdBQUcsbUNBQW1DLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcscUJBQXFCLHlCQUF5QixpQ0FBaUMsMEJBQTBCLEdBQUcsdUJBQXVCLHlCQUF5QixvQkFBb0IsOEJBQThCLGlDQUFpQyxHQUFHLGdDQUFnQyxrQkFBa0IsbUJBQW1CLG9CQUFvQixHQUFHLGlDQUFpQywyRUFBMkUsd0JBQXdCLDhCQUE4QixPQUFPLDBCQUEwQix5Q0FBeUMsT0FBTyxlQUFlLHVCQUF1QixPQUFPLG1DQUFtQyxxQkFBcUIseUJBQXlCLE9BQU8sNEJBQTRCLHdCQUF3QixpQ0FBaUMsOEJBQThCLE9BQU8seUJBQXlCLGtDQUFrQyxrQ0FBa0MsT0FBTyx3REFBd0QsOEJBQThCLDBCQUEwQixPQUFPLDhEQUE4RCw2QkFBNkIsT0FBTyw2QkFBNkIsNkJBQTZCLE9BQU8sK0JBQStCLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLE9BQU8saUNBQWlDLGtCQUFrQixPQUFPLHVCQUF1QiwwQkFBMEIsT0FBTyxHQUFHLHVCQUF1QjtBQUM1aGY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsOEZBQThGLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRW5mLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0J5RjtBQUN6RixZQUF3Rjs7QUFFeEY7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsb0ZBQU87Ozs7QUFJeEIsaUVBQWUsMkZBQWMsTUFBTSxFOzs7Ozs7Ozs7OztBQ1p0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUM1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsWUFBWTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlDQUFpQztBQUN4RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0EsNEJBQTRCLFdBQVcsU0FBUyxXQUFXO0FBQzNEO0FBQ0Esa0VBQWtFLGlCQUFpQjtBQUNuRjtBQUNBLDBCQUEwQiwrREFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFO0FBQ0E7QUFDQSw0REFBNEQsVUFBVTtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSwrRUFBK0UsTUFBTTtBQUNyRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7O1VDYjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ0k7QUFDdUI7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMERBQWU7QUFDbkIsR0FBRztBQUNILENBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290XFxue1xcbiAgICAtLXJlZC10ZXh0OiAjRkU2YTZhO1xcbiAgICAtLWdyZWVuLXRleHQ6ICM0N0M3Qzc7XFxuICAgIC0tbm9yZC13aGl0ZS0xOiAjRUNFRkY0O1xcbiAgICAtLW5vcmQtd2hpdGUtMjogI0U1RTlGMDtcXG4gICAgLS1ub3JkLXdoaXRlLTM6ICNEOERFRTk7XFxuICAgIC0tbm9yZC1ncmF5LTE6ICM0QzU2NkE7XFxuICAgIC0tbm9yZC1ncmF5LTI6ICM0MzRDNUU7XFxuICAgIC0tbm9yZC1ncmF5LTM6ICMzQjQyNTI7XFxuICAgIC0tamF2YXNjcmlwdDogI0VGRDgxRDtcXG59XFxuXFxuKlxcbntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LCBodG1sXFxue1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS1MYW5kaW5nIFBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uY29udGFpbmVyLWxhbmRpbmdcXG57XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTM0NDA7XFxuICAgIHBhZGRpbmc6IDAgMjAwcHg7XFxufVxcblxcbi5jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTM0NDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDUwcHggMjAwcHggMCAyMDBweDtcXG59XFxuXFxuLm5hbWVcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBmbGV4OiAwLjI7XFxuICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ubmFtZV9fdGl0bGVcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi10ZXh0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxufVxcblxcbi5uYW1lX190eXBlXFxue1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgICBjb2xvcjogdmFyKC0tbm9yZC13aGl0ZS0zKTtcXG59XFxuXFxuLmxhbmRpbmdcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXg6IDAuODtcXG59XFxuXFxuXFxuLmxhbmRpbmctY29kZVxcbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubGFuZGluZy1pbmZvXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwIDIwcHggNDBweCAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGFuZGluZy1jb2RlX19jb250YWluZXJcXG57XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5sYW5kaW5nLWNvZGVfX2xldHRlcnNcXG57XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubGFuZGluZy1pbmZvX190ZXh0XFxue1xcbiAgICBjb2xvcjogdmFyKC0tbm9yZC13aGl0ZS0yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4ubGFuZGluZy1pbmZvX19pbWFnZVxcbntcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2tpbGxzIEFyZWEqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5za2lsbHNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG59XFxuXFxuLnNraWxsc19fdGl0bGVcXG57XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5za2lsbHNfX3RpdGxlX19jYXRlZ29yeVxcbntcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi10ZXh0KTtcXG59XFxuXFxuLnNraWxsc19fY29udGFpbmVyLXNraWxsXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbF9fZ2VuZXJpY1xcbntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLnNraWxsc19fY29udGFpbmVyLXNraWxsX19vcHRpb25hbFxcbntcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMik7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uc2tpbGxzX19jb250YWluZXItc2tpbGxfX21vbmdvXFxue1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbF9fbm9kZVxcbntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5jb250YWluZXJfX3NraWxsc1xcbntcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVByb2plY3RzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ucHJvamVjdHNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLnByb2plY3RfX2NvbnRhaW5lclxcbntcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCA1MiwgNjQsIC42KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC4zOSk7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjM5KTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdF9fbmFtZVxcbntcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3RfX2Rlc2NyaXB0aW9uXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2ltYWdlXFxue1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9fX3RleHRcXG57XFxuICAgIGZsZXg6IDAuODtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMSk7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9fX3RlY2hub2xvZ2llc1xcbntcXG4gICAgZmxleDogMC4yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0X19kZXNjcmlwdGlvbl9faW5mb19fdGVjaG5vbG9naWVzX190ZWNoXFxue1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTEpO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtZ3JheS0zKTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdF9fYnV0dG9uc1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0X19idXR0b25zX19pdGVtXFxue1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS1Db250YWN0IE1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmZvb3RlclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9yZC1ncmF5LTMpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLmZvb3Rlcl9fdGl0bGVcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDIwMHB4O1xcbn1cXG5cXG4uZm9vdGVyX190aXRsZV9fdGV4dFxcbntcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9vdGVyX19zb2NpYWwtbmV0d29ya3NcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG4uZm9vdGVyX19zb2NpYWwtbmV0d29ya3NfX2ljb25cXG57XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmZvb3Rlcl9fZW1haWxcXG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mb290ZXJfX2NyZWF0b3JcXG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTMpO1xcbn1cXG5cXG5cXG4uZm9vdGVyX19jcmVhdG9yX19pbWFnZVxcbntcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweClcXG57XFxuLyotLS0tLS0tLS0tLS0tbGFuZGluZy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gICAgLmNvbnRhaW5lci1sYW5kaW5nIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB9XFxuICAgIC5sYW5kaW5nLWluZm9cXG4gICAge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC5uYW1lIHtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAubGFuZGluZy1pbmZvX19pbWFnZVxcbiAgICB7XFxuICAgICAgICB3aWR0aDogNDAlO1xcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7XFxuICAgIH1cXG5cXG4gICAgLmxhbmRpbmctY29kZVxcbiAgICB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lclxcbiAgICB7XFxuICAgICAgICBwYWRkaW5nOiA0MHB4IDEwcHggMTBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0X19kZXNjcmlwdGlvbl9faW5mb19fdGVjaG5vbG9naWVzXFxuICAgIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvX190ZWNobm9sb2dpZXNfX3RlY2hcXG4gICAge1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0X19uYW1lXFxuICAgIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZm9vdGVyX19jcmVhdG9yXFxuICAgIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lcl9fc2tpbGxzXFxuICAgIHtcXG4gICAgICAgIGZsZXg6IDA7XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9fdGl0bGV7XFxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgIH1cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7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ICAgLS1ncmVlbi10ZXh0OiAjNDdDN0M3O1xcbiAgICAtLW5vcmQtd2hpdGUtMTogI0VDRUZGNDtcXG4gICAgLS1ub3JkLXdoaXRlLTI6ICNFNUU5RjA7XFxuICAgIC0tbm9yZC13aGl0ZS0zOiAjRDhERUU5O1xcbiAgICAtLW5vcmQtZ3JheS0xOiAjNEM1NjZBO1xcbiAgICAtLW5vcmQtZ3JheS0yOiAjNDM0QzVFO1xcbiAgICAtLW5vcmQtZ3JheS0zOiAjM0I0MjUyO1xcbiAgICAtLWphdmFzY3JpcHQ6ICNFRkQ4MUQ7XFxufVxcblxcbipcXG57XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSwgaHRtbFxcbntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tTGFuZGluZyBQYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmNvbnRhaW5lci1sYW5kaW5nXFxue1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzNDQwO1xcbiAgICBwYWRkaW5nOiAwIDIwMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzNDQwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1MHB4IDIwMHB4IDAgMjAwcHg7XFxufVxcblxcbi5uYW1lXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgZmxleDogMC4yO1xcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLm5hbWVfX3RpdGxlXFxue1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbn1cXG5cXG4ubmFtZV9fdHlwZVxcbntcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMyk7XFxufVxcblxcbi5sYW5kaW5nXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmbGV4OiAwLjg7XFxufVxcblxcblxcbi5sYW5kaW5nLWNvZGVcXG57XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxhbmRpbmctaW5mb1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMCAyMHB4IDQwcHggMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxhbmRpbmctY29kZV9fY29udGFpbmVyXFxue1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubGFuZGluZy1jb2RlX19sZXR0ZXJzXFxue1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmxhbmRpbmctaW5mb19fdGV4dFxcbntcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMik7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmxhbmRpbmctaW5mb19faW1hZ2VcXG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNraWxscyBBcmVhKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uc2tpbGxzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxufVxcblxcbi5za2lsbHNfX3RpdGxlXFxue1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4uc2tpbGxzX190aXRsZV9fY2F0ZWdvcnlcXG57XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCk7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbFxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc2tpbGxzX19jb250YWluZXItc2tpbGxfX2dlbmVyaWNcXG57XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbF9fb3B0aW9uYWxcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTIpO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnNraWxsc19fY29udGFpbmVyLXNraWxsX19tb25nb1xcbntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uc2tpbGxzX19jb250YWluZXItc2tpbGxfX25vZGVcXG57XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uY29udGFpbmVyX19za2lsbHNcXG57XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Qcm9qZWN0cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLnByb2plY3RzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5wcm9qZWN0X19jb250YWluZXJcXG57XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg0NiwgNTIsIDY0LCAuNik7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuMzkpO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC4zOSk7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnByb2plY3RfX25hbWVcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi10ZXh0KTtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5wcm9qZWN0X19kZXNjcmlwdGlvblxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3RfX2Rlc2NyaXB0aW9uX19pbWFnZVxcbntcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0X19kZXNjcmlwdGlvbl9faW5mb1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDtcXG59XFxuXFxuLnByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvX190ZXh0XFxue1xcbiAgICBmbGV4OiAwLjg7XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTEpO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvX190ZWNobm9sb2dpZXNcXG57XFxuICAgIGZsZXg6IDAuMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9fX3RlY2hub2xvZ2llc19fdGVjaFxcbntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9yZC13aGl0ZS0xKTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLWdyYXktMyk7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3RfX2J1dHRvbnNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdF9fYnV0dG9uc19faXRlbVxcbntcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tQ29udGFjdCBNZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5mb290ZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcmQtZ3JheS0zKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5mb290ZXJfX3RpdGxlXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAyMDBweDtcXG59XFxuXFxuLmZvb3Rlcl9fdGl0bGVfX3RleHRcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvb3Rlcl9fc29jaWFsLW5ldHdvcmtzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuLmZvb3Rlcl9fc29jaWFsLW5ldHdvcmtzX19pY29uXFxue1xcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mb290ZXJfX2VtYWlsXFxue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTMpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyX19jcmVhdG9yXFxue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbm9yZC13aGl0ZS0zKTtcXG59XFxuXFxuXFxuLmZvb3Rlcl9fY3JlYXRvcl9faW1hZ2VcXG57XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpXFxue1xcbi8qLS0tLS0tLS0tLS0tLWxhbmRpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAgIC5jb250YWluZXItbGFuZGluZyB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgfVxcbiAgICAubGFuZGluZy1pbmZvXFxuICAgIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgfVxcblxcbiAgICAubmFtZSB7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmxhbmRpbmctaW5mb19faW1hZ2VcXG4gICAge1xcbiAgICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xcbiAgICB9XFxuXFxuICAgIC5sYW5kaW5nLWNvZGVcXG4gICAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXJcXG4gICAge1xcbiAgICAgICAgcGFkZGluZzogNDBweCAxMHB4IDEwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9fX3RlY2hub2xvZ2llc1xcbiAgICB7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0X19kZXNjcmlwdGlvbl9faW5mb19fdGVjaG5vbG9naWVzX190ZWNoXFxuICAgIHtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdF9fbmFtZVxcbiAgICB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9fY3JlYXRvclxcbiAgICB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXJfX3NraWxsc1xcbiAgICB7XFxuICAgICAgICBmbGV4OiAwO1xcbiAgICB9XFxuXFxuICAgIC5mb290ZXJfX3RpdGxle1xcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibGV0IFR4dFR5cGUgPSBmdW5jdGlvbiAoZWwsIHRvUm90YXRlLCBwZXJpb2QpIHtcbiAgdGhpcy50b1JvdGF0ZSA9IHRvUm90YXRlO1xuICB0aGlzLmVsID0gZWw7XG4gIHRoaXMubG9vcE51bSA9IDA7XG4gIHRoaXMucGVyaW9kID0gcGFyc2VJbnQocGVyaW9kLCAxMCkgfHwgMjAwMDtcbiAgdGhpcy50eHQgPSBcIlwiO1xuICB0aGlzLnRpY2soKTtcbiAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG59O1xuXG5UeHRUeXBlLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xuICBsZXQgZnVsbFR4dCA9IHRoaXMudG9Sb3RhdGVbaV07XG5cbiAgaWYgKHRoaXMuaXNEZWxldGluZykge1xuICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoIC0gMSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKTtcbiAgfVxuXG4gIHRoaXMuZWwuaW5uZXJIVE1MID0gXCI8c3BhbiBjbGFzcz1cXFwid3JhcFxcXCI+XCIgKyB0aGlzLnR4dCArIFwiPC9zcGFuPlwiO1xuXG4gIGxldCB0aGF0ID0gdGhpcztcbiAgbGV0IGRlbHRhID0gMjAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMDtcblxuICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7IGRlbHRhIC89IDI7IH1cblxuICBpZiAoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xuICAgIGRlbHRhID0gdGhpcy5wZXJpb2Q7XG4gICAgdGhpcy5pc0RlbGV0aW5nID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IFwiXCIpIHtcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvb3BOdW0rKztcbiAgICBkZWx0YSA9IDUwMDtcbiAgfVxuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRoYXQudGljaygpO1xuICB9LCBkZWx0YSk7XG59O1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHlwZXdyaXRlXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvUm90YXRlID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpO1xuICAgIGxldCBwZXJpb2QgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBlcmlvZFwiKTtcbiAgICBpZiAodG9Sb3RhdGUpIHtcbiAgICAgIG5ldyBUeHRUeXBlKGVsZW1lbnRzW2ldLCBKU09OLnBhcnNlKHRvUm90YXRlKSwgcGVyaW9kKTtcbiAgICB9XG4gIH1cbiAgLy8gSU5KRUNUIENTU1xuICBsZXQgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgY3NzLmlubmVySFRNTCA9IFwiLnR5cGV3cml0ZSA+IC53cmFwIHsgYm9yZGVyLXJpZ2h0OiAwLjA4ZW0gc29saWQgI2ZmZn1cIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xufTtcbiIsImltcG9ydCBnZW5lcmF0ZVNraWxscyBmcm9tIFwiLi9nZW5lcmF0ZS10ZWNobm9sb2dpZXNcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0IChkYXRhLCBlbGVtZW50SFRNTCkge1xuICBsZXQgcHJvamVjdCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJwcm9qZWN0X19uYW1lXCI+JHtkYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YS5pbWFnZX1cIiBhbHQ9XCIke2RhdGEudGl0bGV9XCIgY2xhc3M9XCJwcm9qZWN0X19kZXNjcmlwdGlvbl9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0X19kZXNjcmlwdGlvbl9faW5mb19fdGV4dFwiPiR7ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvX190ZWNobm9sb2dpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Z2VuZXJhdGVTa2lsbHMoZGF0YS50ZWNobm9sb2dpZXMpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvamVjdF9fYnV0dG9uc19fZGVtb1wiIGhyZWY9XCIke2RhdGEuY29kZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9naXRodWIuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJwcm9qZWN0X19idXR0b25zX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvamVjdF9fYnV0dG9uc19fZ2l0aHViXCIgaHJlZj1cIiR7ZGF0YS5kZW1vfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3dlYjIuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJwcm9qZWN0X19idXR0b25zX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gIGA7XG5cbiAgZWxlbWVudEhUTUwuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHByb2plY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVByb2plY3Q7XG4iLCJmdW5jdGlvbiBnZW5lcmF0ZVNraWxscyAoc2tpbGxzKSB7XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBpZiAoc2tpbGxzPy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gXCI8cD5ObyB0aWVuZXMgdGVjaHMgYWdyZWdhZGFzPC9wPlwiXG4gIH0gZWxzZSB7XG4gICAgc2tpbGxzLm1hcCgoc2tpbGwpID0+IHtcbiAgICAgIGxldCBkYXRhID0gYDxsaSBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvX190ZWNobm9sb2dpZXNfX3RlY2hcIj4ke3NraWxsfTwvbGk+YDtcbiAgICAgIHJlc3VsdCArPSBkYXRhO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlU2tpbGxzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9hbmltYXRpb24tdGV4dFwiO1xuaW1wb3J0IGdlbmVyYXRlUHJvamVjdCBmcm9tIFwiLi9nZW5lcmF0ZS1wcm9qZWN0XCI7XG5cbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmxldCB1cmwgPSBcImh0dHBzOi8vOWRoY3Buc2dnYS5leGVjdXRlLWFwaS51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L3BlcnNvbmFsLXByb2plY3RzXCI7XG5cbmZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XG4gIGRhdGEubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgZ2VuZXJhdGVQcm9qZWN0KHByb2plY3QsIHByb2plY3RzKTtcbiAgfSk7XG59KS5jYXRjaChjb25zb2xlLmxvZyk7XG4iXSwic291cmNlUm9vdCI6IiJ9