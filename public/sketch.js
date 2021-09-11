const position = {x: 50, y: 50};

function setup() {
  createCanvas(500, 500);
  background(120,143,160);
  rect(0,0,50,50);

  socket.on('players', players => {
    background(120,143,160);
    for (const [id, player] of Object.entries(players)){
      console.log(player)
      fill(...player.color);
      rect(player.x,player.y,50,50);
    }
  })
}

function draw() {

}

function keyPressed() {
  socket.emit('keyboard',key);
}