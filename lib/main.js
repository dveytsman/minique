window.$l = function (arg){
  const nodeList = document.querySelectorAll(arg);
  const nodeArray = Array.from(nodeList);
  return nodeArray;
};
var $l = window.$l;
