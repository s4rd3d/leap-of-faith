import {
  GRAVITY, FRICTION, JUMPHEIGHT, MOVESPEED, CANVAS_HEIGHT,
} from '../constants';

class Player {
  constructor(position, width, height) {
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.width = width;
    this.height = height;
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
    // Check if player's bottom is touching the canvas' bottom
    // and make player stop if so
    // TODO: Remove canvas dependent code when collision detection is in use
    if (!(this.position.y + this.height < CANVAS_HEIGHT) && !this.isJumping) {
      this.velocity.y = 0;
      this.position.y = CANVAS_HEIGHT - this.height;
      this.isInAir = false;
    } else this.isJumping = false;

    // Position is the integrate of velocity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Friction slows horizontal movement and gravity pulls down player vertically
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
