var traverseDomAndCollectElements = function(matchFunc, startEl) { //fn(el), h1
  var resultSet = []; // [<p>, <h2>]

  if (typeof startEl === "undefined") {
    startEl = document.body; //  root
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i]; // h2
    // llamada recursiva si el elem. actual tiene hijos también
    let result = traverseDomAndCollectElements(matchFunc, child); //h1
    resultSet = [...resultSet, ...result]
  }
  
  return resultSet; //[<p>, <h2>] 
};


// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí

  if( selector[0] === "#") return "id";
  if( selector[0] === ".") return "class";
  for( let i = 1; i < selector.length; i++){
  if(selector[i] === ".") return "tag.class"; 
  }
return "tag"
}



// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.
var matchFunctionMaker = function(selector) { // '#uno' | '.red' | 'div' | 'div.red' --> <div class='red>
  var selectorType = selectorTypeMatcher(selector); // 'tag' | 'id'
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(el) { //Recibe un elemento del dom
    // <div id='uno'> {id: 'uno'}
    return '#' + el.id === selector;   // 'uno' === '#uno'
   }
  } else if (selectorType === "class") {
    matchFunction = function(el) { // <div class='container home intro'> {classList: 'container'}
      if(el.classList.length > 1 ) {
        for (let i = 0; i < el.classList.length; i++) { //[container]
          if('.' + el.classList[i] === selector) {
            return true;
          }
        }
      }
      return '.' + el.classList === selector;
    }
  } else if (selectorType === "tag.class") { //'div.red'
    matchFunction = function(el) {
      let array = selector.split('.'); // [div, red]
      if(el.tagName.toLowerCase() === array[0]) { // Div === div
        if(el.classList.length > 1) {
          for (let i = 0; i < el.classList.length; i++) {
            if(el.classList[i] === array[1]) return true; // nombre de clase === red
          }
        }
        if(el.classList === array[1]) return true;
      }
      return false;
    }
    
  } else if (selectorType === "tag") {
    matchFunction = function(el) {
      return el.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
