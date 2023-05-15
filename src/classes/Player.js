class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 100;
    this.height = 100;
    this.color = "red";
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.gravity = 1;
    this.friction = 1;
    this.isJumping = false;
    this.isInAir = true;
    this.jumpHeight = 30;
    this.moveSpeed = 10;
  }

  Update(canvas) {
    if (
      !(player.position.y + player.height < canvas.height) &&
      !player.isJumping
    ) {
      player.velocity.y = 0;
      player.position.y = canvas.height - player.height;
      player.isInAir = false;
    } else player.isJumping = false;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.velocity.x > 0) this.velocity.x -= this.friction;
    if (this.velocity.x < 0) this.velocity.x += this.friction;
    this.velocity.y += this.gravity;
  }

  Move(key) {
    if (key == "ArrowUp" && !player.isInAir) {
      player.velocity.y -= this.jumpHeight;
      player.isJumping = true;
      player.isInAir = true;
    }
    if (key == "ArrowLeft") {
      player.velocity.x -= this.moveSpeed;
    }
    if (key == "ArrowRight") {
      player.velocity.x += this.moveSpeed;
    }
  }

}
