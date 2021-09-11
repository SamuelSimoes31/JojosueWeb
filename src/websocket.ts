import { io } from './http';

io.on('connection', socket => {
  console.log(`-> ${socket.id} connected!`);

  socket.on('disconnect',() => {
    console.log(`<- ${socket.id} disconnected!`);
  });

});