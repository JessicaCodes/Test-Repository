const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const background = new Image();
background.src = "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg";
const restart = document.querySelector("#startGame")
const gamewrap = document.querySelector("#gameWrapper")
const rightPressed = false;
const leftPressed = false;
restart.addEventListener("click", draw)

const colors = ["rgb(255,153,153,0.900)", "rgb(153,255,204,0.900)", "rgb(153,204,255,0.900)", "rgb(255,255,153,0.900)"]


const gameState = {
  gameBubbles: [],
  colors: ["rgb(255,153,153,0.900)", "rgb(153,255,204,0.900)", "rgb(153,204,255,0.900)", "rgb(255,255,153,0.900)"],
  areBubblesDrawn: false,
  generateColor(){
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  },
  drawBubbles(){
    this.gameBubbles.forEach(bub =>{
      bub.draw()
    })
  }
}

class Bubble {
  constructor(x, y, radius, color = gameState.generateColor()){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
  }

  draw(){
      ctx.strokeStyle = this.color
      ctx.fillStyle = ctx.strokeStyle
      ctx.beginPath();
      ctx.arc(this.x,this.y, this.radius, 0, Math.PI * 2, true)
      ctx.stroke();
      ctx.fill();
  }
}

function generateStartingBubbles() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 12; j++) {
      gameState.gameBubbles.push(new Bubble(20 + j * 42, 20 + i * 42, 20));
    }
  }
}

function newBubbleRow(){
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 12; j++){
      gameState.gameBubbles.push(new Bubble(20 + j * 42, 20 + i * 42, 20))
    }
  }
}

// moving ball
var raf;

var ball = {
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

function chooseTrajectory(){
  ball.x = 250;
  ball.y = 425
}



function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if (gameState.areBubblesDrawn === false){
    generateStartingBubbles();
    gameState.areBubblesDrawn = true
  }
  gameState.drawBubbles();
  ball.draw();
  // ball.x += ball.vx;
  // ball.y += ball.vy;
  // if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  //   ball.vy = -ball.vy;
  // }
  // if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  //   ball.vx = -ball.vx;
  // }
  // raf = window.requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
  }
}
// canvas.addEventListener("keydown", keyDownHandler, false);
// canvas.addEventListener("keyup", keyUpHandler, false);

// document.addEventListener('mouseover', function(e) {
//   raf = window.requestAnimationFrame(draw);
// });

// document.addEventListener('mouseout', function(e) {
//   window.cancelAnimationFrame(raf);
// });

// ball.draw();



// function draw() {
   
//     if (canvas.getContext) {
//       const ctx = canvas.getContext('2d');
  
//       for (var i = 0; i < 4; i++) {
//         for (var j = 0; j < 3; j++) {
//           ctx.beginPath();
//           var x = 25 + j * 50; // x coordinate
//           var y = 25 + i * 50; // y coordinate
//           var radius = 20; // Arc radius
//           var startAngle = 0; // Starting point on circle
//           var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
//           var counterclockwise = i % 2 !== 0; // clockwise or counterclockwise
  
//           ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
//           if (i > 1) {
//             ctx.fill();
//           } else {
//             ctx.stroke();
//           }
//         }
//       }
//     }
//   }