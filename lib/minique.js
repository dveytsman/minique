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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);
window.$m = function (arg){
  switch (typeof arg) {
    case "string":
    const nodeList = document.querySelectorAll(arg);
    const nodeArray = Array.from(nodeList);
    return new DOMNodeCollection(nodeArray);
    case "object":
      if( arg instanceof HTMLElement ){
        return new DOMNodeCollection([arg]);
      }
  }
};
var $m = window.$m;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection{
  constructor(elArray){
    this.elArray = elArray;
  }
  html(arg=false){
    if(typeof arg === "string"){
      this.forEach((node) => {
        node.innerHTML = arg;
      });
    } else if(this.elArray.length > 0) {
      return this.elArray[0].innerHTML;
    }
  }

  empty(){
    this.elArray.each((node) => {
      node.innerHTML = '';
    });
  }

  append(type) {
     if (type instanceof String) {
       return this.elArray.forEach((node) => {
          node.innerHTML += type;
          return node.innerHTML;
       });
     } else if (type instanceof HTMLElement) {
       return this.elArray.forEach((hElement) => {
          hElement.innerHTML += type.outerHTML;
         return hElement.innerHTML;
       });
     }else if (type instanceof DOMNodeCollection) {
       return this.elArray.forEach((node) => {
         return type.elArray.forEach((nodeItem) => {
            node.innerHTML += nodeItem.outerHTML;
           return node.innerHTML;
         });
       });
     }
   }

   attr(type, val){
     if(typeof val === "string"){
       this.elArray.forEach((node) => {
         node.setAttribute(type, val);
       });
     }else{
       return this.elArray[0].getAttribute(type);
     }
   }

  addClass(classtype){
    this.elArray.forEach((el) => {
      if(el.className.length === 0){
        el.className = classtype;
      } else {
        el.className += ` ${name}`;
      }
    });
  }

  removeClass(classtype){
    this.elArray.forEach((el) => {
      el.classList.remove(classtype);
    });
  }


}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);