class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 100;
    this.height = 100;
    this.color = 'red';
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
      !(this.position.y + this.height < canvas.height)
      && !this.isJumping
    ) {
      this.velocity.y = 0;
      this.position.y = canvas.height - this.height;
      this.isInAir = false;
    } else this.isJumping = false;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.velocity.x > 0) this.velocity.x -= this.friction;
    if (this.velocity.x < 0) this.velocity.x += this.friction;
    this.velocity.y += this.gravity;
  }

  Move(key) {
    if (key === 'ArrowUp' && !this.isInAir) {
      this.velocity.y -= this.jumpHeight;
      this.isJumping = true;
      this.isInAir = true;
    }
    if (key === 'ArrowLeft') {
      this.velocity.x -= this.moveSpeed;
    }
    if (key === 'ArrowRight') {
      this.velocity.x += this.moveSpeed;
    }
  }
}

export default Player;
