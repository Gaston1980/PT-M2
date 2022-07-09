const { createStore, configureStore, legacy_createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, incrementoImpar, incrementoAsync } = require('./actions');
const { INCREMENTO } = require('./action-types');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = legacy_createStore(contador)

// Obtenemos el elemento con el id `valor`.
var spanvalor = document.getElementById("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  var contador = store.getState().contador;

  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
spanvalor.innerText = contador;
}

// Ejecutamos la funcion 'renderContador':

renderContador();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(() => {   // tambien se puede escribir store.subscribe(renderContador)
  renderContador()        // el metodo subscribe lo que hace es ejecutar una funcion que nosotros le pasamos
});

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
var btnincremento = document.getElementById("incremento");
btnincremento.addEventListener("click", function (e) {
store.dispatch(incremento())
})

var btndecremento = document.getElementById("decremento");
btndecremento.addEventListener("click", function (e) {
store.dispatch(decremento())
})

var btnincrementoimpar = document.getElementById("incrementoImpar");
btnincrementoimpar.addEventListener("click", function (e) {
store.dispatch(incrementoImpar())
})

var btnincrementoasync = document.getElementById("incrementoAsync");
btnincrementoasync.addEventListener("click", function (e) {
  setTimeout( () =>  {store.dispatch(incrementoAsync())} ,2000) // se coloca aca el setTimeOut,  
})                                                           // no en el reducer 

// NOTA: OTRA FORMA DE HACERLO USANDO .ONCLICK EN VEZ DE UN .ADDEVENTLISTENER

// var btnAsync= document.getElementById("incrementoAsync");
// btnAsync.onclick = () => setTimeout(() => store.dispatch(asincrono()), 1000); 