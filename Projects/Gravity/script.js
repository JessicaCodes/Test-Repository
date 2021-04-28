let gravity = 1;
let friction = 0.85;
const colors = ["rgb(255,153,153,0.900)", "rgb(153,255,204,0.900)", "rgb(153,204,255,0.900)", "rgb(255,255,153,0.900)"]

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener("resize", function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

function randomIntFromRange(min,max) {
    return Math.floor(Math.random()* (max - min
        + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random()* colors.length)];
}

class Ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.radius = radius;
        this.color = color;

        this.update = function () {
            if (this.y + this.radius + this.dy > canvas.height) {
                this.dy =- this.dy * friction;
            } else {
                this.dy += gravity;
            } if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0){
                this.dx = -this.dx;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        };

        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0,
                Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.stroke();
            c.closePath();

        };
    }
}

//Implementation
var ball;
var ballArray;
function init() {
    ballArray = [];
    for (var i = 0; i < 100; i++){
        var radius = randomIntFromRange(8, 20);
        var x = randomIntFromRange(radius, canvas.width - radius);
        var y = randomIntFromRange(0, canvas.height - radius);
        var dx = randomIntFromRange(-2,2);
        var dy = randomIntFromRange(-2,2);
        var color = randomColor(colors);
        ballArray.push(new Ball(x, y, dx, dy , radius, color))

    }
    // ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 20, 'yellow');
};

//Animate Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < ballArray.length; i++){
        ballArray[i].update();
    }
}

init();
animate();