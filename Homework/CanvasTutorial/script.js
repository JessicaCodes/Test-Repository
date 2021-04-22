
 
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

    // function draw() {
      
    //   if (canvas.getContext) {
        

    //     ctx.fillStyle = 'rgb(200, 0, 0)';
    //     ctx.fillRect(100, 100, 50, 50);

    //     ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    //     ctx.fillRect(120, 120, 50, 50);
    //   }
    // }

    
    // draw()

   const ctx = document.getElementById('canvas').getContext('2d');
   const ctx2 = document.getElementById('canvas2').getContext('2d');
    function drawGrid(ctx) {
       
        for (let i = 0; i < 6; i++) {
          for (let j = 0; j < 6; j++) {
            ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
                             Math.floor(255 - 42.5 * j) + ')';
            ctx.beginPath();
            ctx.arc(20 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            ctx.stroke();
          }
        }
      }

      drawGrid(ctx)
      drawGrid(ctx2)


// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');
//   var img = new Image();
//   img.onload = function() {
//     ctx.drawImage(img, 0, 0);
//     ctx.beginPath();
//     ctx.moveTo(30, 96);
//     ctx.lineTo(70, 66);
//     ctx.lineTo(103, 76);
//     ctx.lineTo(170, 15);
//     ctx.stroke();
//   };
//   img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
// }

// draw()