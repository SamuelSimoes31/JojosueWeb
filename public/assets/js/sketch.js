const sketch = (socket) => {
  return (p) => {
    let josue;

    p.preload = () => {
      josue = p.loadImage('/assets/characters/Josue.png');
    }

    p.setup = () => {
      p.createCanvas(32*20, 32*20);
      p.noSmooth();
      p.background(120,143,160);
      p.image(josue,0,0,32,32,0,0,32,32);

      socket.on('players', players => {
        p.background(120,143,160);
        for (const [id, player] of Object.entries(players)){
          console.log(player)
          p.image(josue,player.x,player.y,32,32,0,0,32,32);
        }
      })
    }

    p.draw = () => {

    }

    p.keyPressed = () => {
      socket.emit('keyboard',p.key);
    }

  }
}

export default sketch;
