import { io } from './http';
import { Player } from './gameTypes';
import { randColorArray } from './utils/helperFunctions';

const players: Player = {};

io.on('connection', socket => {
  const id = socket.id;
  console.log(`-> ${id} connected!`);

  players[id] = {x:0,y:0,color: randColorArray()};
  io.emit('players',players);

  socket.on('keyboard',key => {
    console.log(`Key [${key}] from ${id}`);
    const {x,y} = players[id];
    if(key === 'w') players[id] = {...players[id], y: y-50};
    else if(key === 's') players[id] = {...players[id],y: y+50};
    else if(key === 'a') players[id] = {...players[id],x: x-50};
    else if(key === 'd') players[id] = {...players[id],x: x+50};

    io.emit('players',players);
  })

  socket.on('disconnect',() => {
    console.log(`<- ${id} disconnected!`);
    delete players[id];
  });

});