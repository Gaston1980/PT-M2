import React from 'react';
import "./Timer.css";
import { useState, useEffect, useRef } from 'react';

const Timer = () => {

 
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  function toggle() {
    setActivo(!activo); // setea el estado  a lo contrario que este:  activo --> false   false --> activo
  }

  function reset() {  //para volver a nuestros valores iniciales
    setSegundos(0);
    setActivo(false); // lleva a que el boton se muestre como Start y se apliquen sus respectivos estilos
  }

  function cambioTipo() {   // para cambiar entre 'Contador' y 'Cuenta Regresiva'.
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
}

const myRef = useRef(null); // devuelve un obj { current: elemento html ----> que va a ser el input}

function agregaSegundos() {
  // `current` apunta al elemento de entrada de texto montado
  let ref = myRef.current.value // input.value  ----> alamacena lo que este escrito en el input
  setSegundos(ref)
  
}

  useEffect(() => {
  let intervalo = null;
  if (activo && tipo === 'Contador') {
    intervalo = setInterval(() => { // el metodo setInterval() retorna un id que necesitamos guardar en una variable, la guaerdamos en este caso en intervalo
      setSegundos(segundos => segundos + 1);
    }, 1000);
  }
  if (activo && tipo === 'Cuenta Regresiva') {
    intervalo = setInterval(() => {
      setSegundos(segundos => segundos - 1);
    }, 1000);
    
  }
  if (!activo && segundos !== 0 && tipo === 'Contador') {
    clearInterval(intervalo);
  }
  if (segundos === 0 && tipo === 'Cuenta Regresiva') {
    reset();
    clearInterval(intervalo); // usamos el id guardado en intervalo y lo seteamos a cero con el metodo clearInterval()
  }
  return () => clearInterval(intervalo); // Esto es equivalente a llamar a componentWillUnmount en un componente de Clase.
  
  }, [activo, segundos, tipo]); // cada vez que haya algun cambio de state, useEffect se ejecutara.



  return (
    <div className="app">
    <div className="time">
      {segundos} seconds
    </div>
    <div className="row">
    <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}> 
        { activo ? "Pause" : "Start" }
      </button>
      <button className="button-secondary" onClick={reset} >
        Reset
      </button>
    </div>
    <button className="button" onClick={cambioTipo} >
        {tipo}
    </button>
    {tipo === 'Cuenta Regresiva'? <input type="number" ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"   /> : null  }
  
  </div>
);
};

export default Timer;

// nota: className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`}
// aca concatena los estilos de button + button-primary + button-primary-active o inactive