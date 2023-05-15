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
  }

  Update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.velocity.x > 0) this.velocity.x -= this.friction;
    if (this.velocity.x < 0) this.velocity.x += this.friction;
    this.velocity.y += this.gravity;
  }
}
