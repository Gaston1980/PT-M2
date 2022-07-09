const { INCREMENTO, DECREMENTO, INCREMENTOIMPAR, INCREMENTOASYNC } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

// ACTION CREATOR ( CREAO ACCIONES QUE SON OBJETOS SIN LOGICA)
const incremento = function() {
  return {
    type: INCREMENTO,
    

  }
};

const decremento = function () {
  return {
    type: DECREMENTO,
  
  }
};

const incrementoImpar = function () {
  return {
    type: INCREMENTOIMPAR,
  
  }
};

const incrementoAsync = function () {
  return {
    type: INCREMENTOASYNC,
  
  }
};

module.exports = {
  incremento,
  decremento,
  incrementoAsync,
  incrementoImpar
}