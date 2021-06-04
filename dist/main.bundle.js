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
___CSS_LOADER_EXPORT___.push([module.id, ":root\n{\n    --red-text: #FE6a6a;\n    --green-text: #47C7C7;\n    --nord-white-1: #ECEFF4;\n    --nord-white-2: #E5E9F0;\n    --nord-white-3: #D8DEE9;\n    --nord-gray-1: #4C566A;\n    --nord-gray-2: #434C5E;\n    --nord-gray-3: #3B4252;\n    --nord-gray-4: #2E3440;\n    --javascript: #EFD81D;\n    --nord-frost-1: #707e99;\n    --nord-frost-2: #81A1C1;\n\n}\n\n*\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody, html\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'JetBrains Mono', monospace;\n    height: 100%;\n}\n\n/*------------------Landing Page-------------------------*/\n\n.container-landing\n{\n    height: 100vh;\n    background-color: #2E3440;\n    padding: 0 200px;\n}\n\n.container\n{\n    display: flex;\n    flex-direction: column;\n    background-color: #2E3440;\n    min-height: 100%;\n    padding: 50px 200px 0 200px;\n}\n\n.name\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 30%;\n    flex: 0.2;\n    padding: 20px 0 10px 0;\n    font-size: 1.4rem;\n}\n\n.name__title\n{\n    color: var(--nord-white-3);\n    text-align: center;\n    margin: 10px 0 0 0;\n}\n\n.name__type\n{\n    margin: 5px 0;\n    color: var(--nord-frost-1);\n}\n\n.landing\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: 0.8;\n}\n\n\n.landing-code\n{\n    height: 100%;\n}\n\n.landing-info\n{\n    display: flex;\n    padding: 0 20px 40px 20px;\n    align-items: center;\n}\n\n.landing-code__container\n{\n    margin-bottom: 20px;\n}\n\n.landing-code__letters\n{\n    text-decoration: none;\n    color: var(--red-text);\n    font-size: 2rem;\n}\n\n.landing-info__text\n{\n    color: var(--nord-white-1);\n    font-size: 20px;\n    width: 70%;\n}\n\n.landing-info__image\n{\n    border-radius: 6px;\n    width: 20%;\n    -webkit-box-shadow: 0 8px 6px -6px black;\n    -moz-box-shadow: 0 8px 6px -6px black;\n    box-shadow: 0 8px 6px -6px black;\n}\n\n/*-------------------------Skills Area*-----------------------------*/\n\n.skills\n{\n    display: flex;\n    flex-direction: column;\n    padding: 0 40px;\n}\n\n.skills__title\n{\n    font-size: 2rem;\n    color: var(--nord-frost-1);\n    font-weight: bold;\n    margin-bottom: 60px;\n}\n\n.skills__title__category\n{\n    font-size: 1.7rem;\n    color: var(--red-text);\n}\n\n.skills__container\n{\n    display: flex;\n    justify-content: space-between;\n}\n\n.skills__container-skill\n{\n    display: flex;\n    flex-direction: column;\n    padding: 30px;\n    border-radius: 6px;\n    align-items: center;\n    margin-bottom: 50px;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n}\n.skills__container__skill\n{\n    color: var(--nord-white-2);\n    list-style: none;\n    font-size: 1.3rem;\n    font-weight: bold;\n    margin: 4px 0;\n    text-align: center;\n}\n\n.skills__container__list\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n\n}\n.skills__container-skill__generic\n{\n    width: 70px;\n    height: 70px;\n}\n\n.skills__container-skill__optional\n{\n    color: var(--nord-white-2);\n    font-size: 1.8rem;\n}\n\n.skills__container-skill__mongo\n{\n    width: 200px;\n}\n\n.skills__container-skill__node\n{\n    width: 200px;\n    height: 80px;\n}\n\n.skills__container-skill__deno\n{\n    width: 90px;\n}\n\n.container__skills\n{\n    padding: 0 40px;\n    flex: 1;\n}\n\n/*------------------------Projects------------------------*/\n\n.projects\n{\n    display: flex;\n    padding: 0 40px;\n    flex-wrap: wrap;\n    flex-direction: column;\n    margin-bottom: 100px;\n}\n\n.project__container\n{\n    flex: 1;\n    border-radius: 4px;\n    padding: 20px;\n    background: rgba(46, 52, 64, .6);\n    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.39);\n    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.39);\n    margin: 20px 0;\n}\n\n.project__name\n{\n    color: var(--red-text);\n    margin: 10px 0;\n}\n\n.project__description\n{\n    display: flex;\n}\n\n.project__description__image\n{\n    width: 50%;\n    margin-right: 10px;\n    border-radius: 4px;\n}\n\n.project__description__info\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px 20px 0 20px;\n}\n\n.project__description__info__text\n{\n    flex: 0.8;\n    color: var(--nord-white-1);\n    font-size: 0.9rem;\n}\n\n.project__description__info__technologies\n{\n    flex: 0.2;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.project__description__info__technologies__tech\n{\n    text-decoration: none;\n    list-style: none;\n    margin: 5px;\n    background-color: var(--nord-white-1);\n    height: fit-content;\n    padding: 5px;\n    border-radius: 4px;\n    color: var(--nord-gray-3);\n    font-size: 1.1rem;\n    font-weight: bold;\n}\n.project__button\n{\n    text-decoration: none;\n    color: var(--nord-white-2);\n    font-size: 1.2rem;\n    font-weight: bold;\n\n    transition: 300ms ease color;\n}\n\n.project__buttons\n{\n    display: flex;\n    justify-content: space-evenly;\n    padding: 10px;\n    margin-top: 30px;\n}\n\n.project__button:hover\n{\n    color: var(--nord-frost-1);\n}\n\n.project__buttons__item\n{\n    height: 50px;\n    width: 50px;\n}\n\n/*-------------------Contact Me-------------------------*/\n\n.footer\n{\n    display: flex;\n    background-color: #2E3440;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 25px;\n}\n\n.footer__title\n{\n    display: flex;\n    width: 100%;\n    padding: 0 200px;\n}\n\n.footer__title__text\n{\n    color: var(--nord-frost-1);\n    font-size: 2rem;\n}\n\n.footer__social-networks\n{\n    display: flex;\n    justify-content: space-evenly;\n    width: 40%;\n}\n.footer__social-networks__icon\n{\n    width: 48px;\n    height: 48px;\n    margin: 10px;\n}\n\n.footer__email\n{\n    text-align: center;\n    color: var(--nord-white-3);\n    margin-bottom: 10px;\n}\n\n.footer__creator\n{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    color: var(--nord-white-3);\n}\n\n\n.footer__creator__image\n{\n    width: 24px;\n    height: 24px;\n    margin: 0 5px;\n}\n\n@media (max-width: 992px)\n{\n/*-------------landing-----------------------*/\n\n    .container-landing\n    {\n        padding: 10px;\n    }\n    .name\n    {\n        font-size: 1.2rem;\n        justify-content: center;\n        height: min-content;\n    }\n\n    .name__type\n    {\n        margin-top: 20px;\n        text-align: center;\n    }\n\n    .landing-info\n    {\n        flex-direction: column-reverse;\n    }\n\n    .landing-info__image\n    {\n        width: 40%;\n    }\n\n    .landing-code__container\n    {\n        text-align: center;\n        margin-top: 40px;\n    }\n\n    .landing-info__text\n    {\n        /*text-align: center;*/\n        width: 100%;\n    }\n\n    .container\n    {\n        padding: 10px;\n    }\n\n    .skills__container\n    {\n        flex-wrap: wrap;\n    }\n\n    .skills__title__category\n    {\n        text-align: center;\n    }\n\n    .project__name\n    {\n        font-size: 1.8rem;\n        text-align: center;\n    }\n\n    .project__description\n    {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .project__description__image\n    {\n        width: 80%;\n    }\n\n    .project__description__info__text\n    {\n        font-size: 14px;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root\n{\n    --red-text: #FE6a6a;\n    --green-text: #47C7C7;\n    --nord-white-1: #ECEFF4;\n    --nord-white-2: #E5E9F0;\n    --nord-white-3: #D8DEE9;\n    --nord-gray-1: #4C566A;\n    --nord-gray-2: #434C5E;\n    --nord-gray-3: #3B4252;\n    --nord-gray-4: #2E3440;\n    --javascript: #EFD81D;\n    --nord-frost-1: #707e99;\n    --nord-frost-2: #81A1C1;\n\n}\n\n*\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody, html\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'JetBrains Mono', monospace;\n    height: 100%;\n}\n\n/*------------------Landing Page-------------------------*/\n\n.container-landing\n{\n    height: 100vh;\n    background-color: #2E3440;\n    padding: 0 200px;\n}\n\n.container\n{\n    display: flex;\n    flex-direction: column;\n    background-color: #2E3440;\n    min-height: 100%;\n    padding: 50px 200px 0 200px;\n}\n\n.name\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 30%;\n    flex: 0.2;\n    padding: 20px 0 10px 0;\n    font-size: 1.4rem;\n}\n\n.name__title\n{\n    color: var(--nord-white-3);\n    text-align: center;\n    margin: 10px 0 0 0;\n}\n\n.name__type\n{\n    margin: 5px 0;\n    color: var(--nord-frost-1);\n}\n\n.landing\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: 0.8;\n}\n\n\n.landing-code\n{\n    height: 100%;\n}\n\n.landing-info\n{\n    display: flex;\n    padding: 0 20px 40px 20px;\n    align-items: center;\n}\n\n.landing-code__container\n{\n    margin-bottom: 20px;\n}\n\n.landing-code__letters\n{\n    text-decoration: none;\n    color: var(--red-text);\n    font-size: 2rem;\n}\n\n.landing-info__text\n{\n    color: var(--nord-white-1);\n    font-size: 20px;\n    width: 70%;\n}\n\n.landing-info__image\n{\n    border-radius: 6px;\n    width: 20%;\n    -webkit-box-shadow: 0 8px 6px -6px black;\n    -moz-box-shadow: 0 8px 6px -6px black;\n    box-shadow: 0 8px 6px -6px black;\n}\n\n/*-------------------------Skills Area*-----------------------------*/\n\n.skills\n{\n    display: flex;\n    flex-direction: column;\n    padding: 0 40px;\n}\n\n.skills__title\n{\n    font-size: 2rem;\n    color: var(--nord-frost-1);\n    font-weight: bold;\n    margin-bottom: 60px;\n}\n\n.skills__title__category\n{\n    font-size: 1.7rem;\n    color: var(--red-text);\n}\n\n.skills__container\n{\n    display: flex;\n    justify-content: space-between;\n}\n\n.skills__container-skill\n{\n    display: flex;\n    flex-direction: column;\n    padding: 30px;\n    border-radius: 6px;\n    align-items: center;\n    margin-bottom: 50px;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n}\n.skills__container__skill\n{\n    color: var(--nord-white-2);\n    list-style: none;\n    font-size: 1.3rem;\n    font-weight: bold;\n    margin: 4px 0;\n    text-align: center;\n}\n\n.skills__container__list\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n\n}\n.skills__container-skill__generic\n{\n    width: 70px;\n    height: 70px;\n}\n\n.skills__container-skill__optional\n{\n    color: var(--nord-white-2);\n    font-size: 1.8rem;\n}\n\n.skills__container-skill__mongo\n{\n    width: 200px;\n}\n\n.skills__container-skill__node\n{\n    width: 200px;\n    height: 80px;\n}\n\n.skills__container-skill__deno\n{\n    width: 90px;\n}\n\n.container__skills\n{\n    padding: 0 40px;\n    flex: 1;\n}\n\n/*------------------------Projects------------------------*/\n\n.projects\n{\n    display: flex;\n    padding: 0 40px;\n    flex-wrap: wrap;\n    flex-direction: column;\n    margin-bottom: 100px;\n}\n\n.project__container\n{\n    flex: 1;\n    border-radius: 4px;\n    padding: 20px;\n    background: rgba(46, 52, 64, .6);\n    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.39);\n    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.39);\n    margin: 20px 0;\n}\n\n.project__name\n{\n    color: var(--red-text);\n    margin: 10px 0;\n}\n\n.project__description\n{\n    display: flex;\n}\n\n.project__description__image\n{\n    width: 50%;\n    margin-right: 10px;\n    border-radius: 4px;\n}\n\n.project__description__info\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px 20px 0 20px;\n}\n\n.project__description__info__text\n{\n    flex: 0.8;\n    color: var(--nord-white-1);\n    font-size: 0.9rem;\n}\n\n.project__description__info__technologies\n{\n    flex: 0.2;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.project__description__info__technologies__tech\n{\n    text-decoration: none;\n    list-style: none;\n    margin: 5px;\n    background-color: var(--nord-white-1);\n    height: fit-content;\n    padding: 5px;\n    border-radius: 4px;\n    color: var(--nord-gray-3);\n    font-size: 1.1rem;\n    font-weight: bold;\n}\n.project__button\n{\n    text-decoration: none;\n    color: var(--nord-white-2);\n    font-size: 1.2rem;\n    font-weight: bold;\n\n    transition: 300ms ease color;\n}\n\n.project__buttons\n{\n    display: flex;\n    justify-content: space-evenly;\n    padding: 10px;\n    margin-top: 30px;\n}\n\n.project__button:hover\n{\n    color: var(--nord-frost-1);\n}\n\n.project__buttons__item\n{\n    height: 50px;\n    width: 50px;\n}\n\n/*-------------------Contact Me-------------------------*/\n\n.footer\n{\n    display: flex;\n    background-color: #2E3440;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 25px;\n}\n\n.footer__title\n{\n    display: flex;\n    width: 100%;\n    padding: 0 200px;\n}\n\n.footer__title__text\n{\n    color: var(--nord-frost-1);\n    font-size: 2rem;\n}\n\n.footer__social-networks\n{\n    display: flex;\n    justify-content: space-evenly;\n    width: 40%;\n}\n.footer__social-networks__icon\n{\n    width: 48px;\n    height: 48px;\n    margin: 10px;\n}\n\n.footer__email\n{\n    text-align: center;\n    color: var(--nord-white-3);\n    margin-bottom: 10px;\n}\n\n.footer__creator\n{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    color: var(--nord-white-3);\n}\n\n\n.footer__creator__image\n{\n    width: 24px;\n    height: 24px;\n    margin: 0 5px;\n}\n\n@media (max-width: 992px)\n{\n/*-------------landing-----------------------*/\n\n    .container-landing\n    {\n        padding: 10px;\n    }\n    .name\n    {\n        font-size: 1.2rem;\n        justify-content: center;\n        height: min-content;\n    }\n\n    .name__type\n    {\n        margin-top: 20px;\n        text-align: center;\n    }\n\n    .landing-info\n    {\n        flex-direction: column-reverse;\n    }\n\n    .landing-info__image\n    {\n        width: 40%;\n    }\n\n    .landing-code__container\n    {\n        text-align: center;\n        margin-top: 40px;\n    }\n\n    .landing-info__text\n    {\n        /*text-align: center;*/\n        width: 100%;\n    }\n\n    .container\n    {\n        padding: 10px;\n    }\n\n    .skills__container\n    {\n        flex-wrap: wrap;\n    }\n\n    .skills__title__category\n    {\n        text-align: center;\n    }\n\n    .project__name\n    {\n        font-size: 1.8rem;\n        text-align: center;\n    }\n\n    .project__description\n    {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .project__description__image\n    {\n        width: 80%;\n    }\n\n    .project__description__info__text\n    {\n        font-size: 14px;\n    }\n}\n\n"],"sourceRoot":""}]);
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
                <a class="project__button" href="${data.code}">
                    GitHub
                </a>
                <a class="project__button" href="${data.demo}">
                    Demo
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL3NyYy9hbmltYXRpb24tdGV4dC5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9zcmMvZ2VuZXJhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9zcmMvZ2VuZXJhdGUtdGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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WUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxhQUFhLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLGFBQWEs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O1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ0k7QUFDdUI7O0FBRWpEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDBEQUFlO0FBQ25CLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdFxcbntcXG4gICAgLS1yZWQtdGV4dDogI0ZFNmE2YTtcXG4gICAgLS1ncmVlbi10ZXh0OiAjNDdDN0M3O1xcbiAgICAtLW5vcmQtd2hpdGUtMTogI0VDRUZGNDtcXG4gICAgLS1ub3JkLXdoaXRlLTI6ICNFNUU5RjA7XFxuICAgIC0tbm9yZC13aGl0ZS0zOiAjRDhERUU5O1xcbiAgICAtLW5vcmQtZ3JheS0xOiAjNEM1NjZBO1xcbiAgICAtLW5vcmQtZ3JheS0yOiAjNDM0QzVFO1xcbiAgICAtLW5vcmQtZ3JheS0zOiAjM0I0MjUyO1xcbiAgICAtLW5vcmQtZ3JheS00OiAjMkUzNDQwO1xcbiAgICAtLWphdmFzY3JpcHQ6ICNFRkQ4MUQ7XFxuICAgIC0tbm9yZC1mcm9zdC0xOiAjNzA3ZTk5O1xcbiAgICAtLW5vcmQtZnJvc3QtMjogIzgxQTFDMTtcXG5cXG59XFxuXFxuKlxcbntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LCBodG1sXFxue1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS1MYW5kaW5nIFBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uY29udGFpbmVyLWxhbmRpbmdcXG57XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTM0NDA7XFxuICAgIHBhZGRpbmc6IDAgMjAwcHg7XFxufVxcblxcbi5jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTM0NDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDUwcHggMjAwcHggMCAyMDBweDtcXG59XFxuXFxuLm5hbWVcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBmbGV4OiAwLjI7XFxuICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ubmFtZV9fdGl0bGVcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTMpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG59XFxuXFxuLm5hbWVfX3R5cGVcXG57XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLWZyb3N0LTEpO1xcbn1cXG5cXG4ubGFuZGluZ1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogMC44O1xcbn1cXG5cXG5cXG4ubGFuZGluZy1jb2RlXFxue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sYW5kaW5nLWluZm9cXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAgMjBweCA0MHB4IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sYW5kaW5nLWNvZGVfX2NvbnRhaW5lclxcbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxhbmRpbmctY29kZV9fbGV0dGVyc1xcbntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5sYW5kaW5nLWluZm9fX3RleHRcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTEpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbi5sYW5kaW5nLWluZm9fX2ltYWdlXFxue1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ta2lsbHMgQXJlYSotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLnNraWxsc1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcbn1cXG5cXG4uc2tpbGxzX190aXRsZVxcbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbm9yZC1mcm9zdC0xKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5za2lsbHNfX3RpdGxlX19jYXRlZ29yeVxcbntcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2tpbGxzX19jb250YWluZXItc2tpbGxcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnNraWxsc19fY29udGFpbmVyX19za2lsbFxcbntcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMik7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiA0cHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2tpbGxzX19jb250YWluZXJfX2xpc3RcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuXFxufVxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbF9fZ2VuZXJpY1xcbntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLnNraWxsc19fY29udGFpbmVyLXNraWxsX19vcHRpb25hbFxcbntcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMik7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uc2tpbGxzX19jb250YWluZXItc2tpbGxfX21vbmdvXFxue1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbF9fbm9kZVxcbntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbF9fZGVub1xcbntcXG4gICAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5jb250YWluZXJfX3NraWxsc1xcbntcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVByb2plY3RzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ucHJvamVjdHNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLnByb2plY3RfX2NvbnRhaW5lclxcbntcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCA1MiwgNjQsIC42KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC4zOSk7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjM5KTtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5wcm9qZWN0X19uYW1lXFxue1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQpO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3RfX2Rlc2NyaXB0aW9uXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2ltYWdlXFxue1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9fX3RleHRcXG57XFxuICAgIGZsZXg6IDAuODtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMSk7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9fX3RlY2hub2xvZ2llc1xcbntcXG4gICAgZmxleDogMC4yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0X19kZXNjcmlwdGlvbl9faW5mb19fdGVjaG5vbG9naWVzX190ZWNoXFxue1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTEpO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtZ3JheS0zKTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucHJvamVjdF9fYnV0dG9uXFxue1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTIpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UgY29sb3I7XFxufVxcblxcbi5wcm9qZWN0X19idXR0b25zXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLnByb2plY3RfX2J1dHRvbjpob3ZlclxcbntcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtZnJvc3QtMSk7XFxufVxcblxcbi5wcm9qZWN0X19idXR0b25zX19pdGVtXFxue1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS1Db250YWN0IE1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmZvb3RlclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFMzQ0MDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5mb290ZXJfX3RpdGxlXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAyMDBweDtcXG59XFxuXFxuLmZvb3Rlcl9fdGl0bGVfX3RleHRcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLWZyb3N0LTEpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb290ZXJfX3NvY2lhbC1uZXR3b3Jrc1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcbi5mb290ZXJfX3NvY2lhbC1uZXR3b3Jrc19faWNvblxcbntcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyX19lbWFpbFxcbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbm9yZC13aGl0ZS0zKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmZvb3Rlcl9fY3JlYXRvclxcbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMyk7XFxufVxcblxcblxcbi5mb290ZXJfX2NyZWF0b3JfX2ltYWdlXFxue1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpXFxue1xcbi8qLS0tLS0tLS0tLS0tLWxhbmRpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuICAgIC5jb250YWluZXItbGFuZGluZ1xcbiAgICB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuICAgIC5uYW1lXFxuICAgIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC5uYW1lX190eXBlXFxuICAgIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmxhbmRpbmctaW5mb1xcbiAgICB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLmxhbmRpbmctaW5mb19faW1hZ2VcXG4gICAge1xcbiAgICAgICAgd2lkdGg6IDQwJTtcXG4gICAgfVxcblxcbiAgICAubGFuZGluZy1jb2RlX19jb250YWluZXJcXG4gICAge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgfVxcblxcbiAgICAubGFuZGluZy1pbmZvX190ZXh0XFxuICAgIHtcXG4gICAgICAgIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyXFxuICAgIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNraWxsc19fY29udGFpbmVyXFxuICAgIHtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiAgICAuc2tpbGxzX190aXRsZV9fY2F0ZWdvcnlcXG4gICAge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0X19uYW1lXFxuICAgIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0X19kZXNjcmlwdGlvblxcbiAgICB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdF9fZGVzY3JpcHRpb25fX2ltYWdlXFxuICAgIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvX190ZXh0XFxuICAgIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHVCQUF1Qjs7QUFFM0I7O0FBRUE7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7O0lB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Z0JBQWdCO0lBQ3BCOztJQUVBOztRQUVJLHNCQUFzQjtRQUN0QixXQUFXO0lBQ2Y7O0lBRUE7O1FBRUksYUFBYTtJQUNqQjs7SUFFQTs7UUFFSSxlQUFlO0lBQ25COztJQUVBOztRQUVJLGtCQUFrQjtJQUN0Qjs7SUFFQTs7UUFFSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBOztRQUVJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksVUFBVTtJQUNkOztJQUVBOztRQUVJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdFxcbntcXG4gICAgLS1yZWQtdGV4dDogI0ZFNmE2YTtcXG4gICAgLS1ncmVlbi10ZXh0OiAjNDdDN0M3O1xcbiAgICAtLW5vcmQtd2hpdGUtMTogI0VDRUZGNDtcXG4gICAgLS1ub3JkLXdoaXRlLTI6ICNFNUU5RjA7XFxuICAgIC0tbm9yZC13aGl0ZS0zOiAjRDhERUU5O1xcbiAgICAtLW5vcmQtZ3JheS0xOiAjNEM1NjZBO1xcbiAgICAtLW5vcmQtZ3JheS0yOiAjNDM0QzVFO1xcbiAgICAtLW5vcmQtZ3JheS0zOiAjM0I0MjUyO1xcbiAgICAtLW5vcmQtZ3JheS00OiAjMkUzNDQwO1xcbiAgICAtLWphdmFzY3JpcHQ6ICNFRkQ4MUQ7XFxuICAgIC0tbm9yZC1mcm9zdC0xOiAjNzA3ZTk5O1xcbiAgICAtLW5vcmQtZnJvc3QtMjogIzgxQTFDMTtcXG5cXG59XFxuXFxuKlxcbntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LCBodG1sXFxue1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS1MYW5kaW5nIFBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uY29udGFpbmVyLWxhbmRpbmdcXG57XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTM0NDA7XFxuICAgIHBhZGRpbmc6IDAgMjAwcHg7XFxufVxcblxcbi5jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTM0NDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDUwcHggMjAwcHggMCAyMDBweDtcXG59XFxuXFxuLm5hbWVcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBmbGV4OiAwLjI7XFxuICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ubmFtZV9fdGl0bGVcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTMpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG59XFxuXFxuLm5hbWVfX3R5cGVcXG57XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLWZyb3N0LTEpO1xcbn1cXG5cXG4ubGFuZGluZ1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogMC44O1xcbn1cXG5cXG5cXG4ubGFuZGluZy1jb2RlXFxue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sYW5kaW5nLWluZm9cXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAgMjBweCA0MHB4IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sYW5kaW5nLWNvZGVfX2NvbnRhaW5lclxcbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxhbmRpbmctY29kZV9fbGV0dGVyc1xcbntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5sYW5kaW5nLWluZm9fX3RleHRcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTEpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbi5sYW5kaW5nLWluZm9fX2ltYWdlXFxue1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ta2lsbHMgQXJlYSotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLnNraWxsc1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcbn1cXG5cXG4uc2tpbGxzX190aXRsZVxcbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbm9yZC1mcm9zdC0xKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5za2lsbHNfX3RpdGxlX19jYXRlZ29yeVxcbntcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2tpbGxzX19jb250YWluZXItc2tpbGxcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnNraWxsc19fY29udGFpbmVyX19za2lsbFxcbntcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMik7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiA0cHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2tpbGxzX19jb250YWluZXJfX2xpc3RcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuXFxufVxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbF9fZ2VuZXJpY1xcbntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLnNraWxsc19fY29udGFpbmVyLXNraWxsX19vcHRpb25hbFxcbntcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMik7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uc2tpbGxzX19jb250YWluZXItc2tpbGxfX21vbmdvXFxue1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbF9fbm9kZVxcbntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5za2lsbHNfX2NvbnRhaW5lci1za2lsbF9fZGVub1xcbntcXG4gICAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5jb250YWluZXJfX3NraWxsc1xcbntcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVByb2plY3RzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ucHJvamVjdHNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLnByb2plY3RfX2NvbnRhaW5lclxcbntcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCA1MiwgNjQsIC42KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC4zOSk7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjM5KTtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5wcm9qZWN0X19uYW1lXFxue1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQpO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3RfX2Rlc2NyaXB0aW9uXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2ltYWdlXFxue1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9fX3RleHRcXG57XFxuICAgIGZsZXg6IDAuODtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMSk7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9fX3RlY2hub2xvZ2llc1xcbntcXG4gICAgZmxleDogMC4yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0X19kZXNjcmlwdGlvbl9faW5mb19fdGVjaG5vbG9naWVzX190ZWNoXFxue1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTEpO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtZ3JheS0zKTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucHJvamVjdF9fYnV0dG9uXFxue1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLXdoaXRlLTIpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UgY29sb3I7XFxufVxcblxcbi5wcm9qZWN0X19idXR0b25zXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLnByb2plY3RfX2J1dHRvbjpob3ZlclxcbntcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtZnJvc3QtMSk7XFxufVxcblxcbi5wcm9qZWN0X19idXR0b25zX19pdGVtXFxue1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS1Db250YWN0IE1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmZvb3RlclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFMzQ0MDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5mb290ZXJfX3RpdGxlXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAyMDBweDtcXG59XFxuXFxuLmZvb3Rlcl9fdGl0bGVfX3RleHRcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1ub3JkLWZyb3N0LTEpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb290ZXJfX3NvY2lhbC1uZXR3b3Jrc1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcbi5mb290ZXJfX3NvY2lhbC1uZXR3b3Jrc19faWNvblxcbntcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyX19lbWFpbFxcbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbm9yZC13aGl0ZS0zKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmZvb3Rlcl9fY3JlYXRvclxcbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW5vcmQtd2hpdGUtMyk7XFxufVxcblxcblxcbi5mb290ZXJfX2NyZWF0b3JfX2ltYWdlXFxue1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpXFxue1xcbi8qLS0tLS0tLS0tLS0tLWxhbmRpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuICAgIC5jb250YWluZXItbGFuZGluZ1xcbiAgICB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuICAgIC5uYW1lXFxuICAgIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC5uYW1lX190eXBlXFxuICAgIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmxhbmRpbmctaW5mb1xcbiAgICB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLmxhbmRpbmctaW5mb19faW1hZ2VcXG4gICAge1xcbiAgICAgICAgd2lkdGg6IDQwJTtcXG4gICAgfVxcblxcbiAgICAubGFuZGluZy1jb2RlX19jb250YWluZXJcXG4gICAge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgfVxcblxcbiAgICAubGFuZGluZy1pbmZvX190ZXh0XFxuICAgIHtcXG4gICAgICAgIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyXFxuICAgIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNraWxsc19fY29udGFpbmVyXFxuICAgIHtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiAgICAuc2tpbGxzX190aXRsZV9fY2F0ZWdvcnlcXG4gICAge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0X19uYW1lXFxuICAgIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0X19kZXNjcmlwdGlvblxcbiAgICB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdF9fZGVzY3JpcHRpb25fX2ltYWdlXFxuICAgIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvX190ZXh0XFxuICAgIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImxldCBUeHRUeXBlID0gZnVuY3Rpb24gKGVsLCB0b1JvdGF0ZSwgcGVyaW9kKSB7XG4gIHRoaXMudG9Sb3RhdGUgPSB0b1JvdGF0ZTtcbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLmxvb3BOdW0gPSAwO1xuICB0aGlzLnBlcmlvZCA9IHBhcnNlSW50KHBlcmlvZCwgMTApIHx8IDIwMDA7XG4gIHRoaXMudHh0ID0gXCJcIjtcbiAgdGhpcy50aWNrKCk7XG4gIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xufTtcblxuVHh0VHlwZS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGkgPSB0aGlzLmxvb3BOdW0gJSB0aGlzLnRvUm90YXRlLmxlbmd0aDtcbiAgbGV0IGZ1bGxUeHQgPSB0aGlzLnRvUm90YXRlW2ldO1xuXG4gIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSk7XG4gIH1cblxuICB0aGlzLmVsLmlubmVySFRNTCA9IFwiPHNwYW4gY2xhc3M9XFxcIndyYXBcXFwiPlwiICsgdGhpcy50eHQgKyBcIjwvc3Bhbj5cIjtcblxuICBsZXQgdGhhdCA9IHRoaXM7XG4gIGxldCBkZWx0YSA9IDIwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XG5cbiAgaWYgKHRoaXMuaXNEZWxldGluZykgeyBkZWx0YSAvPSAyOyB9XG5cbiAgaWYgKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcbiAgICBkZWx0YSA9IHRoaXMucGVyaW9kO1xuICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBcIlwiKSB7XG4gICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb29wTnVtKys7XG4gICAgZGVsdGEgPSA1MDA7XG4gIH1cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aGF0LnRpY2soKTtcbiAgfSwgZGVsdGEpO1xufTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInR5cGV3cml0ZVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b1JvdGF0ZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKTtcbiAgICBsZXQgcGVyaW9kID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wZXJpb2RcIik7XG4gICAgaWYgKHRvUm90YXRlKSB7XG4gICAgICBuZXcgVHh0VHlwZShlbGVtZW50c1tpXSwgSlNPTi5wYXJzZSh0b1JvdGF0ZSksIHBlcmlvZCk7XG4gICAgfVxuICB9XG4gIC8vIElOSkVDVCBDU1NcbiAgbGV0IGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgY3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gIGNzcy5pbm5lckhUTUwgPSBcIi50eXBld3JpdGUgPiAud3JhcCB7IGJvcmRlci1yaWdodDogMC4wOGVtIHNvbGlkICNmZmZ9XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcbn07XG4iLCJpbXBvcnQgZ2VuZXJhdGVTa2lsbHMgZnJvbSBcIi4vZ2VuZXJhdGUtdGVjaG5vbG9naWVzXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdCAoZGF0YSwgZWxlbWVudEhUTUwpIHtcbiAgbGV0IHByb2plY3QgPSBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdF9fbmFtZVwiPiR7ZGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhdGEuaW1hZ2V9XCIgYWx0PVwiJHtkYXRhLnRpdGxlfVwiIGNsYXNzPVwicHJvamVjdF9fZGVzY3JpcHRpb25fX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdF9fZGVzY3JpcHRpb25fX2luZm9fX3RleHRcIj4ke2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0X19kZXNjcmlwdGlvbl9faW5mb19fdGVjaG5vbG9naWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2dlbmVyYXRlU2tpbGxzKGRhdGEudGVjaG5vbG9naWVzKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2J1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInByb2plY3RfX2J1dHRvblwiIGhyZWY9XCIke2RhdGEuY29kZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvamVjdF9fYnV0dG9uXCIgaHJlZj1cIiR7ZGF0YS5kZW1vfVwiPlxuICAgICAgICAgICAgICAgICAgICBEZW1vXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gIGA7XG5cbiAgZWxlbWVudEhUTUwuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHByb2plY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVByb2plY3Q7XG4iLCJmdW5jdGlvbiBnZW5lcmF0ZVNraWxscyAoc2tpbGxzKSB7XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBpZiAoc2tpbGxzPy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gXCI8cD5ObyB0aWVuZXMgdGVjaHMgYWdyZWdhZGFzPC9wPlwiXG4gIH0gZWxzZSB7XG4gICAgc2tpbGxzLm1hcCgoc2tpbGwpID0+IHtcbiAgICAgIGxldCBkYXRhID0gYDxsaSBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uX19pbmZvX190ZWNobm9sb2dpZXNfX3RlY2hcIj4ke3NraWxsfTwvbGk+YDtcbiAgICAgIHJlc3VsdCArPSBkYXRhO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlU2tpbGxzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9hbmltYXRpb24tdGV4dFwiO1xuaW1wb3J0IGdlbmVyYXRlUHJvamVjdCBmcm9tIFwiLi9nZW5lcmF0ZS1wcm9qZWN0XCI7XG5cbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcblxubGV0IHVybCA9IFwiaHR0cHM6Ly85ZGhjcG5zZ2dhLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2RlZmF1bHQvcGVyc29uYWwtcHJvamVjdHNcIjtcblxuZmV0Y2godXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcbiAgZGF0YS5tYXAoKHByb2plY3QpID0+IHtcbiAgICBnZW5lcmF0ZVByb2plY3QocHJvamVjdCwgcHJvamVjdHMpO1xuICB9KTtcbn0pLmNhdGNoKGNvbnNvbGUubG9nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=