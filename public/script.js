import sketch from './assets/js/sketch.js'

const socket = io();
let myID;

socket.on('connect', () => {
  console.log('Connected to the server with id :',socket.id);
  myID = socket.id;
});

new p5(sketch(socket));