
  //var whiteboard = window.whiteboard;
  //var socket = window.io(window.location.origin);

  //Common JS
// const whiteboard = require('./whiteboard.js')
// const io = require('socket.io-client');
// const socket = io(window.location.origin)

//ES6
import whiteboard from './whiteboard.js'; // no hace falta importar event-emitter.js whiteboard es una instancia de la clase EventEmitter y continene todos los metodos de la misma que usa en este archivo
import io from 'socket.io-client'; // este archivo esta instalado en node_modules



const socket = io(window.location.origin)


  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });


