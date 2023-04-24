
console.log('canvar circle script');

//
const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

// solid ractanges
function ractanges() {
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 100);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect(30, 30, 160, 160);

  // outline

  ctx.fillStyle = "rgba(0, 110, 200, 0.5)";
  ctx.strokeRect(40, 40, 160, 160);

}

// ractanges();

// paths
function paths() {
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 200);
  ctx.lineTo(200, 100)

  ctx.fillStyle = "rgba(0, 110, 200, 0.5)";
  ctx.fill();
}


// paths();

function circle() {
  ctx.beginPath();
  ctx.arc(200, 200, 160, 0, Math.PI * 2, true)
  // ctx.moveTo(240, 240);
  ctx.arc(220, 220, 140, 0, Math.PI * 2, true)
  ctx.stroke();
}

circle();
