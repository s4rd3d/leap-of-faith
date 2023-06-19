import {
  GRAVITY,
  FRICTION,
  JUMPSPEED,
  MOVESPEED,
  MAXSPEED,
  CANVAS_WIDTH,
} from '../constants';
import WorldObject from './world-object';

class Player extends WorldObject {
  constructor(position, width, height, color) {
    super(position, width, height, color);
    this.onGround = false;
  }

  // Calculate the position of the player in the next frame
  step() {
    // Position is the integrate of velocity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Wrap the player on the side of the canvas.
    if (this.position.x + this.width < 0) {
      this.position.x = CANVAS_WIDTH;
    } else if (this.position.x > CANVAS_WIDTH) {
      this.position.x = -this.width;
    }

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

  jump() {
    if (this.onGround) {
      this.onGround = false;
      this.velocity.y -= JUMPSPEED;
    }
  }

  moveLeft() {
    this.velocity.x -= MOVESPEED;
    if (this.velocity.x < -MAXSPEED) this.velocity.x = -MAXSPEED;
  }

  moveRight() {
    this.velocity.x += MOVESPEED;
    if (this.velocity.x > MAXSPEED) this.velocity.x = MAXSPEED;
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
      this.position.y = y2 - h1;
      this.onGround = true;
    }
  }
}

export default Player;
