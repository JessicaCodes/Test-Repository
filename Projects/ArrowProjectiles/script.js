const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

var background = new Image();
background.src = "https://bit.ly/3nrHReU";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
ctx.drawImage(background,0,0);   
}
