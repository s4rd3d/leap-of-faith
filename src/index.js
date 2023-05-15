const canvas = document.querySelector("canvas");
const c2d = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);
  if (
    !(player.position.y + player.height < canvas.height) &&
    !player.isJumping
  ) {
    player.velocity.y = 0;
    player.position.y = canvas.height - player.height;
    player.isInAir = false;
  } else player.isJumping = false;
  player.Update();
  c2d.fillStyle = "white";
  c2d.fillRect(0, 0, canvas.width, canvas.height);
  c2d.fillStyle = player.color;
  c2d.fillRect(
    player.position.x,
    player.position.y,
    player.width,
    player.height
  );
}

animate();

window.addEventListener("keydown", move);

function move(event) {
  if (event.keyCode == 38 && !player.isInAir) {
    player.velocity.y -= 30;
    player.isJumping = true;
    player.isInAir = true;
  }
  if (event.keyCode == 37) {
    player.velocity.x -= 10;
  }
  if (event.keyCode == 39) {
    player.velocity.x += 10;
  }
}
