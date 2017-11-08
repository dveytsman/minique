const DOMNodeCollection = require('./dom_node_collection');
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
