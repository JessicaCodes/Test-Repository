const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const background = new Image();
//background.src = "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg";
const restart = document.querySelector("#startGame")
const gamewrap = document.querySelector("#gameWrapper")
const bubbleColumnCount = 6
const bubbleRowCount = 12
const score = 0
keys = []
const rightPressed = false;
const leftPressed = false;
restart.addEventListener("click", runGame);

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
      this.status = 1;
  }

  draw(){
      ctx.strokeStyle = this.color
      ctx.fillStyle = ctx.strokeStyle
      ctx.beginPath();
      ctx.arc(this.x,this.y, this.radius, 0, Math.PI * 2, true)
      ctx.stroke();
      ctx.fill();
  }

  collide(target){
    if (this.color == target.color){
      this.fall();
      target.fall();
    }
    else {
      
    }
  }
}

class UserBubble extends Bubble {
  constructor(x,y,radius,color,vx,vy){
    super(x,y,radius,color);
    this.vx = vx;
    this.vy = vy;
  }
}


function generateStartingBubbles() {
  for (let c = 0; c < bubbleColumnCount; c++) {
    for (let r = 0; r < bubbleRowCount; r++) {
      gameState.gameBubbles.push(new Bubble(20 + r * 42, 20 + c * 42, 20));
    }
  }
}

function newBubbleRow(){
  for (let c = 0; c < 1; c++) {
    for (let r = 0; r < bubbleRowCount; r++){
      gameState.gameBubbles.push(new Bubble(20 + r * 42, 20 + c * 42, 20))
    }
  }
}

// moving userBubble

// class shooterBubble {
//   constructor(x, y, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = colors[Math.floor(Math.random() * colors.length)];

//     this.update = function () {

//       this.draw();
//     };

//     this.draw = function () {
//       b.beginPath();
//       b.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//       b.fillStyle = this.color;
//       b.fill();
//       c.closePath();
//     };
//   }
// }

// let startBubble;
// function init() {
//   startBubble = new shooterBubble(250, 425, 20);
// }
 let raf;
//Need to transform to class
//UserBubble extends bubble Class
//When a user bubble collides we need to make a new user bubble



// function chooseTrajectory(){
//   userBubble.x = 250;
//   userBubble.y = 425
// }

const userBubble = new UserBubble(250, 425, 20)

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if (gameState.areBubblesDrawn === false){
    generateStartingBubbles();
    gameState.areBubblesDrawn = true
  }
  gameState.drawBubbles();
  userBubble.draw();
  userBubble.x += userBubble.vx;
  userBubble.y += userBubble.vy;
  if (userBubble.y + userBubble.vy > canvas.height || userBubble.y + userBubble.vy < 0) {
    userBubble.vy = -userBubble.vy;
  }
  if (userBubble.x + userBubble.vx > canvas.width || userBubble.x + userBubble.vx < 0) {
    userBubble.vx = -userBubble.vx;
  }
 // raf = window.requestAnimationFrame(draw);
}


//want to be able to change trajectory of userBubble based on right and left button clicks
//also want the up arrow to release userBubble




//Collision Detection

// function collisionDetection() {
//   for (var c = 0; c < bubbleColumnCount; c++) {
//       for (var r = 0; r < bubbleRowCount; r++) {
//           var b = bubbles[c][r];
//           if (b.status == 1) {
//               if (x > b.x && x < b.x + radius && y > b.y && y < b.y + radius) {
//                   dy = -dy;
//                   b.status = 0;
//                   score++;
//                   if(score == bubbleRowCount*bubbleColumnCount) {
//                       alert("YOU WIN, CONGRATULATIONS!");
//                       document.location.reload();
//                       clearInterval(interval); // Needed for Chrome to end game
//                   }
//               }
//           }
//       }
//   }
// }

// function collisionDetection(){
//   //iterate over each game bubble and check if it has collided with user bubble
//   for (i = 0; i < gameState.gameBubbles.length; i++){
//     let bubbleTarget = {radius: gameState.gameBubbles.radius, x: gameState.gameBubbles.x, y: gameState.gameBubbles.y}
//     let bubbleShooter = {radius: userBubble.radius, x:userBubble.x, y: userBubble.y}
//     let bx = bubbleTarget.x - bubbleShooter.x;
//     let by = bubbleTarget.y - bubbleShooter.y;
//     let distance = Math.sqrt(bx * bx + by * by);
//     if (distance < bubbleTarget.radius + bubbleShooter.radius){
//call on current bubble.collide with userBubble [i] 
//     }


// && userBubble.color == gameState.gameBubbles.color
  //this is how we check collision  
  //if (x > b.x && x < b.x + radius && y > b.y && y < b.y + radius)
  //if user.x > bubble.x
// }
// window.addEventListener("keydown", function(e){
//   keys[e.key]=true;
// userBubble.moving = true;
// });


// document.addEventListener("keyup", keyUpHandler, false);

// function keyDownHandler(e) {
//   if (e.key == "Right" || e.key == "ArrowRight") {
//       rightPressed = true;
//   }
//   else if (e.key == "Left" || e.key == "ArrowLeft") {
//       leftPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.key == "Right" || e.key == "ArrowRight") {
//       rightPressed = false;
//   }
//   else if (e.key == "Left" || e.key == "ArrowLeft") {
//       leftPressed = false;
//   }
// }
// canvas.addEventListener("keydown", keyDownHandler, false);
// canvas.addEventListener("keyup", keyUpHandler, false);

// document.addEventListener('mouseover', function(e) {
//   raf = window.requestAnimationFrame(draw);
// });

// document.addEventListener('mouseout', function(e) {
//   window.cancelAnimationFrame(raf);
// });

function runGame() {
  console.log('anything');
  setInterval(draw,30);
}



// userBubble.draw();



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