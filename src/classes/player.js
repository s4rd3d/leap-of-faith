import {
  GRAVITY,
  FRICTION,
  JUMPSPEED,
  MOVESPEED,
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
    this.onGround = false;
    window.addEventListener('keydown', (event) => { this.move(event.key); });
  }

  step() {
    // Position is the integrate of velocity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // If player's is on the ground then set the y velocity to 0. Otherwise
    // apply the gravity.
    if (this.onGround) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += GRAVITY;
    }

    // Friction slows horizontal movement
    if (this.velocity.x > 0) this.velocity.x -= FRICTION;
    if (this.velocity.x < 0) this.velocity.x += FRICTION;
  }

  render(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  move(key) {
    switch (key) {
      case 'ArrowUp':
        if (this.onGround) {
          this.onGround = false;
          this.velocity.y -= JUMPSPEED;
        }
        break;
      case 'ArrowLeft':
        this.velocity.x -= MOVESPEED;
        break;
      case 'ArrowRight':
        this.velocity.x += MOVESPEED;
        break;
      default:
        break;
    }
  }

  // Axis alligned collision detection
  collide(object) {
    const x1 = this.position.x;
    const y1 = this.position.y;
    const h1 = this.height;
    const w1 = this.width;

    const x2 = object.position.x;
    const y2 = object.position.y;
    const h2 = object.height;
    const w2 = object.width;

    return x1 <= x2 + w2
      && x1 + w1 >= x2
      && y1 <= y2 + h2
      && h1 + y1 >= y2;
  }

  // Handle collision with other object
  handleCollision(object) {
    const y1 = this.position.y;
    const h1 = this.height;

    const y2 = object.position.y;

    // The player is colliding to the object from above with a positive
    // velocity. This means that we need to put the player on top of the object
    // and set the `onGround` property to true.
    if (y1 + h1 >= y2 && this.velocity.y >= 0) {
      this.position.y = y2 - h1 + 1;
      this.onGround = true;
    }
  }
}

export default Player;
