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
