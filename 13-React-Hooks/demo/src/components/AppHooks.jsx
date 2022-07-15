import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveName } from '../actions';

export default function AppHooks() {
  const [name, setName] = useState('Hooks');
  const [width, setWidth] = useState(window.innerWidth)

  // permite ejecutar action creator. Se invoca pasandole como arg una action creator
  // No olvidar import {   } las actions creator
  const dispatch = useDispatch() // es el equivalente al mapDispactchToProps o { actioncreatorname }
      
  // permite consumir data del estado global. 
  //Recibe por arg una funcion que toma al estado global y devuelve algo especifico del estado global
  // Voy a ir guardando en diferentes constantes lo que me vaya trayendo del estado global
  const nameRedux = useSelector(state => state.name) // es el equivalente al mapStatetoprops
  // ejem:  const ciudades = useSelector(state => state.ciudades)  etc...


  // si lo uso asi (no importa la logica de adentro) realiza un comportamiento por default,
  // que seria un equivalente al Component Did Mount y al Component Did Update
  // se termina ejecutando siempre
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
  })


  // Pasandole como segundo argumento un array vacio, su comprtamiento va a ser de 
  // Component Did Mount unicamente
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
  }, [])

  // Si le pasamos variables al array, podemos controlar el Component Did Update,
  // para que solo se renderice si hay un cambio en ese estado
  // Aca el comportmiento seria de Did Mount y Did Update(controlado)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
  }, [name])


  // para que su comportamiento sea de Did Mount y Component Will Unmount, se le agrega un return
  // con una funcion
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      console.log('Entra...');
      window.removeEventListener('resize', handleResize)
    }
  }, [])

// Si solo queremos actue como Will Unmount, solo le pasamos el return con una funcion
  useEffect(() => {
    return () => {
      console.log('Entra...');
      window.removeEventListener('resize', handleResize)
    }
  })

  
  
  function handleChange(e) {
    setName(e.target.value)
  }

  useEffect(() => {
    document.title = name
  },[name])

  return (
    <div className="App">
      <input 
        value={name}
        onChange={handleChange}
      />
      <div>
        {width}
      </div>
      <button onClick={() => dispatch(saveName(name))}>
        Save Name
      </button>
      <div>
        {nameRedux}
      </div>
    </div>
  );
}

// Custom Hooks

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   })
//   return width;
// }

// function useDocumentTitle(title) {
//   useEffect(() => {
//     document.title = title
//   },[title])
// }
