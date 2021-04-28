function drawBubbles() {
    // for (let i = 0; i < 8; i++){
    //     ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)]
    // } 
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 12; j++) {
        ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillStyle = ctx.strokeStyle
        ctx.beginPath();
        ctx.arc(20 + j * 42, 20 + i * 42, 20, 0, Math.PI * 2, true);
        //ctx.arc(15 + j * 37, 15 + i * 37, 20, 0, Math.PI * 2, true)
        ctx.stroke();
        ctx.fill();
      }
    }
  }


  var raf;

var userBubble = {
  x: 250,
  y: 425,
  vx: 5,
  vy: -2,
  radius: 20,
  color: colors[Math.floor(Math.random() * colors.length)],
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};
