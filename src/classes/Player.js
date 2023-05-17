import {
  GRAVITY, FRICTION, JUMPHEIGHT, MOVESPEED, CANVAS_HEIGHT,
} from '../constants';

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
    this.isJumping = false;
    this.isInAir = true;
    window.addEventListener('keydown', (event) => { this.move(event.key); });
  }

  step() {
    if (!(this.position.y + this.height < CANVAS_HEIGHT) && !this.isJumping) {
      this.velocity.y = 0;
      this.position.y = CANVAS_HEIGHT - this.height;
      this.isInAir = false;
    } else this.isJumping = false;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.velocity.x > 0) this.velocity.x -= FRICTION;
    if (this.velocity.x < 0) this.velocity.x += FRICTION;
    this.velocity.y += GRAVITY;
  }

  render(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  move(key) {
    switch (key) {
      case 'ArrowUp':
        if (!this.isInAir) {
          this.velocity.y -= JUMPHEIGHT;
          this.isJumping = true;
          this.isInAir = true;
        }
        break;
      case 'ArrowLeft':
        this.velocity.x -= MOVESPEED;
        break;
      case 'ArrowRight':
        this.velocity.x += MOVESPEED;
        break;
    }
  }
}

export default Player;
