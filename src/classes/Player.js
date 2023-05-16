import { GRAVITY, FRICTION, JUMPHEIGHT, MOVESPEED } from "../constants";

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
    this.isJumping = false;
    this.isInAir = true;
  }

  update(canvas) {
    if (!(this.position.y + this.height < canvas.height) && !this.isJumping) {
      this.velocity.y = 0;
      this.position.y = canvas.height - this.height;
      this.isInAir = false;
    } else this.isJumping = false;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.velocity.x > 0) this.velocity.x -= FRICTION;
    if (this.velocity.x < 0) this.velocity.x += FRICTION;
    this.velocity.y += GRAVITY;
  }

  move(key) {
    switch (key) {
      case "ArrowUp":
        if (!this.isInAir) {
          this.velocity.y -= JUMPHEIGHT;
          this.isJumping = true;
          this.isInAir = true;
        }
        break;
      case "ArrowLeft":
        this.velocity.x -= MOVESPEED;
        break;
      case "ArrowRight":
        this.velocity.x += MOVESPEED;
        break;
    }
  }
}

export default Player;
