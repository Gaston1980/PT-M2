import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx"
import About from "./components/About.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import {Route} from "react-router-dom";
import Ciudad from "./components/Ciudad.jsx";
const apiKey = "9dafdc355bdd412a689aa7d3b3f5ed10" // defino mi apikey para acceder al weather api

export default function App() {

  const [cities, setCities] = useState([]); // tengo que crear un estado en mi componente App llamado cities que es un array vacio


  function onSearch (ciudad) {  // tengo que definir en el componente padre la funcion que fue siendo pasada a traves de los componenetes hijos
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`) // aca uso fetch porque voy a requerir info de una api/backend
      .then(r => r.json()) // convierte la respuesta en un archivo .json
      .then((recurso) => { // le aplica a ese .json la logica siguiente
        if(recurso.main !== undefined){ // si la propiedad main tiene data, que genere un objeto con toda la info en la ciudad pasada x parametro (viene del input)
          
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]); // aca lo que digo es que mantenga lo que haya almacenado en cities y le agregue la ciudad nueva al array
        } else {                                           // oldcities se puede llamar como queramos, hace referencia a lo que ya esta guardado en el estado
          alert("Ciudad no encontrada"); // sino entra al if xq me dio un undefined , lanzo este alert
        }
      
      });

    }
  
   function onClose(id) { // funcion que borra la carta cuando le doy un click al X
    setCities(oldcities => oldcities.filter(elem => elem.id !==id)) // filtro el estado cities y todos los elementos que tengan el id disitnot al que me pasan x parametro se quedan y el que es igual queda afuera del estado, se elmina.
   }                                                                // el metodo filter retorna un nuevo array (estado cities) con el elemento filtrado

   function onFilter(ciudadId) {
    let ciudad = cities.filter(elem => elem.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }


  return (
    <Router>
    <div className="App">
    <Route
    path="/"
    render={() => <Nav onSearch={onSearch}  />}
    /> 
       
       
        <Route
        path='/about'
        component={About}
        />
       
        
         
        <Route
        exact path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
        /> 
      <Route exact path='/ciudad/:ciudadId' render={({match}) =>
        <Ciudad city={onFilter(match.params.ciudadId)}/>
      }> 
      </Route>



    </div>

    </Router>
  );
  }


