import React from 'react';
import ReactDOM from 'react-dom'; // react para web desing, para moviles e llama react native
import './index.css';
import App from './App';

ReactDOM.render(
    <App />, // componente princicpal, padre, que contiene todos los otros componentes
  document.getElementById('root') // a donde lo voy a insertar en mi Html para que se muestre en la pagina
);
