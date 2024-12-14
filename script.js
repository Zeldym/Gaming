let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let square = {
  x: canvas.width / 2 - 25,
  y: canvas.height / 2 - 25,
  width: 50,
  height: 50,
  color: "red",
  speed: 5
};

let keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

function update() {
  if (keys["ArrowUp"]) {
    square.y -= square.speed;
  }
  if (keys["ArrowDown"]) {
    square.y += square.speed;
  }
  if (keys["ArrowLeft"]) {
    square.x -= square.speed;
  }
  if (keys["ArrowRight"]) {
    square.x += square.speed;
  }

  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = square.color;
  ctx.fillRect(square.x, square.y, square.width, square.height);
}

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

document.getElementById("startBtn").addEventListener("click", function () {
  gameLoop();  // Start the game loop
  this.style.display = "none";  // Hide the start button after the game starts
});
