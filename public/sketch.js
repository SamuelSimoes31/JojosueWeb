const position = {x: 50, y: 50};

let josue;
function preload() {
  josue = loadImage('/assets/characters/Josue.png');
}

function setup() {
  createCanvas(32*20, 32*20);
  noSmooth();
  background(120,143,160);
  // rect(0,0,50,50);

  imageMode(CENTER);
  translate(width/2,height/2);
  scale(5);
  image(josue,0,0,32,32,0,0,32,32);


  // socket.on('players', players => {
  //   background(120,143,160);
  //   for (const [id, player] of Object.entries(players)){
  //     console.log(player)
  //     fill(...player.color);
  //     rect(player.x,player.y,50,50);
  //   }
  // })
}

function draw() {

}

// function keyPressed() {
//   socket.emit('keyboard',key);
// }