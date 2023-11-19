const canvas = document.getElementById("canvas-1");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function drawRectangle() {
  ctx.fillStyle = "white";
  ctx.fillRect(10, 20, 150, 50); //X, Y, Width, Height
}

function drawCircle(X, Y, radius, startingAngle, endingAngle) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(X, Y, radius, startingAngle, endingAngle);
  ctx.fill();
}

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawCircle(event.x, event.y, 50, 0, Math.PI * 2);
});

// Paintbrush
canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawCircle(event.x, event.y, 50, 0, Math.PI * 2);
});

function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  requestAnimationFrame(animate);
}
animate();
