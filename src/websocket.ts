import { io } from './http';

const positions: {[key: string]: {x: number,y: number}}  = {};

io.on('connection', socket => {
  const id = socket.id;
  console.log(`-> ${id} connected!`);

  positions[id] = {x:0,y:0};

  socket.on('keyboard',key => {
    console.log(`Key [${key}] from ${id}`);
    const {x,y} = positions[id];
    if(key === 'w') positions[id] = {x,y: y-50};
    else if(key === 's') positions[id] = {x,y: y+50};
    else if(key === 'a') positions[id] = {x:x-50,y};
    else if(key === 'd') positions[id] = {x:x+50,y};

    io.emit('positions',positions);
  })

  socket.on('disconnect',() => {
    console.log(`<- ${id} disconnected!`);
    delete positions[id];
  });

});