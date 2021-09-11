const position = {x: 50, y: 50};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(120,143,160);
  rect(position.x,position.y,50,50);
}

function keyPressed() {
  if(key === 'w') position.y -= 50;
  else if(key === 's') position.y += 50;
  else if(key === 'a') position.x -= 50;
  else if(key === 'd') position.x += 50;
}