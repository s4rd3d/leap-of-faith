const canvas = document.querySelector("canvas");
const c2d = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);
  if (player.position.y + player.height < canvas.height) {
    player.Update();
  };
  c2d.fillStyle = "white";
  c2d.fillRect(0, 0, canvas.width, canvas.height);
  c2d.fillStyle = player.color;
  c2d.fillRect(player.position.x, player.position.y, player.width, player.height);
}

animate();

window.addEventListener("keydown", move);

function move(event) {
  if (event.keyCode == 38) {
    player.velocity.y -= 30;
    player.position.y -= 250;
  }
  if (event.keyCode == 37) {
    player.position.x -= 3;
  }
  if (event.keyCode == 39) {
    player.position.x += 3;
  }
}