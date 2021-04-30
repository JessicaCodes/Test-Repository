let gravity = 1;
let friction = 0.85;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const restart = document.querySelector("#startGame")
const gamewrap = document.querySelector("#gameWrapper")
const bubbleColumnCount = 6
const bubbleRowCount = 12
const score = 0
const colors = ["rgb(255,153,153,0.900)", "rgb(153,255,204,0.900)", "rgb(153,204,255,0.900)", "rgb(255,255,153,0.900)"]

// function drawArrow(){
// ctx.beginPath();
// ctx.strokeStyle = 'red';
// ctx.fillstyle = 'red';
// ctx.moveTo(250,600);
// ctx.lineTo(250,600);
// }

// drawArrow();


const gameState = {
  gameBubbles: [],
  colors: ["rgb(255,153,153,0.900)", "rgb(153,255,204,0.900)", "rgb(153,204,255,0.900)", "rgb(255,255,153,0.900)"],
  areBubblesDrawn: false,
  generateColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  },
  drawBubbles() {
    this.gameBubbles.forEach(bub => {
      bub.draw()
    })
  }
}

class Bubble {
  constructor(x, y, radius, color = gameState.generateColor()) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.status = 1;
  }

  draw() {
    ctx.strokeStyle = this.color
    ctx.fillStyle = ctx.strokeStyle
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.stroke();
    ctx.fill();
  }


  collide(target) {
    if (this.color == target.color) {
      popBubbles();
    } else { 
      this.dx = 0; 
      this.dy = 0;
    }
  }


  // fall(){
  //   if (this.y + this.radius + this.dy > canvas.height) {
  //     this.dy =- this.dy * friction;
  // } else {
  //     this.dy += gravity;
  //  if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0){
  //     this.dx = -this.dx;
  // }
  // this.x += this.dx;
  // this.y += this.dy;
  // }
}



class UserBubble extends Bubble {
  constructor(x, y, radius, dx, dy) {
    super(x, y, radius);
    this.dx = dx;
    this.dy = dy;
    //this.color = gameState.generateColor()
  }

  //This is where my user bubble is moving
  shootBubble() {
    this.x += this.dx;
    this.y += this.dy;
    for (let i = 0; i < gameState.gameBubbles.length; i++) {
      let bubbleTarget = {radius: gameState.gameBubbles[i].radius, x: gameState.gameBubbles[i].x, y: gameState.gameBubbles[i].y}
      let bubbleShooter = {radius: userBubble.radius, x:userBubble.x, y: userBubble.y}
      let bx = bubbleTarget.x - bubbleShooter.x;
      let by = bubbleTarget.y - bubbleShooter.y;
      let distance = Math.sqrt(bx * bx + by * by);
      //the user bubble and current bubble have collision
      if (distance < bubbleTarget.radius + bubbleShooter.radius){
        this.collide(gameState.gameBubbles[i]);
        break;
      }
    }
  }

  checkBoundaries() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.y + this.dy > canvas.height || this.y + this.dy < 0) {
      this.dy = -this.dy;
    }
    if (this.x + this.dx > canvas.width || this.x + this.dx < 0) {
      this.dx = -this.dx;
    }
  }
}

  function generateStartingBubbles() {
    for (let c = 0; c < bubbleColumnCount; c++) {
      for (let r = 0; r < bubbleRowCount; r++) {
        gameState.gameBubbles.push(new Bubble(20 + r * 42, 20 + c * 42, 20));
      }
    }
  }

  function newBubbleRow() {
    for (let c = 0; c < 1; c++) {
      for (let r = 0; r < bubbleRowCount; r++) {
        gameState.gameBubbles.push(new Bubble(20 + r * 42, 20 + c * 42, 20))
      }
    }
  }

  const userBubble = new UserBubble(250, 425, 20, 1, -3)

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (gameState.areBubblesDrawn === false) {
      generateStartingBubbles();
      gameState.areBubblesDrawn = true
    }
    gameState.drawBubbles();
    userBubble.shootBubble();
    userBubble.draw();
    userBubble.checkBoundaries();
    
  }



  //want to be able to change trajectory of userBubble based on right and left button clicks
  //also want the up arrow to release userBubble

  function chooseTrajectory() {
    canvas.addEventListener("keydown", keyDownHandler, false);
    canvas.addEventListener("keyup", keyUpHandler, false);
  }




  //Collision Detection



  // function collisionDetection(){
  //   //iterate over each game bubble and check if it has collided with user bubble
  //   for (i = 0; i < gameState.gameBubbles.length; i++){

  // && userBubble.color == gameState.gameBubbles.color
  //this is how we check collision  
  //if (x > b.x && x < b.x + radius && y > b.y && y < b.y + radius){
  //if userbubble.x > bubble.x
  // }
  // window.addEventListener("keydown", function(e){
  //   keys[e.key]=true;
  // userBubble.moving = true;
  // });



  function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      console.log("right")
      rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      console.log("left")
      leftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
    }
  }
  window.addEventListener("keydown", keyDownHandler, false);
  window.addEventListener("keyup", keyUpHandler, false);


  function runGame() {
    console.log('anything');
    setInterval(draw, 30);
  }

  restart.addEventListener("click", runGame);