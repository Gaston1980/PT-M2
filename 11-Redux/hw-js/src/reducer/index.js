const { INCREMENTO, DECREMENTO, INCREMENTOASYNC, INCREMENTOIMPAR } = require('../action-types');

// DEFINO MI ESTADO GLOBAL INICIAL
const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

// ESTE ES EL REDUCER
function contador(state = initialState, action) {
  switch (action.type) {
      case INCREMENTO:
        return {
          ...state,  // SIEMPRE HAGO UNA COPIA DE MI STATE ACTUAL
          contador: state.contador +1   // LUEGO AGREGO LA MODIFICACION
        }
      case DECREMENTO:
        return {
          ...state,
          contador: state.contador -1
        }
        case INCREMENTOIMPAR:
          if(state.contador % 2 !== 0) {
          return {
            ...state,
            contador: state.contador +2
          } 
          } else {
            return {
              contador: state.contador
            }
          }
          case INCREMENTOASYNC:
            return {
            ...state,
            contador: state.contador + 1
            }
          default:    // SIEMPRE SE DEJA UN CASO DEFAULT
          return state
  }
}

module.exports = contador;

