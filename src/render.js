import collide from './collision';

class Render {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;
    this.context = canvas.getContext('2d');

    // User event handling
    this.controller = {
      'ArrowUp': {
        pressed: false,
        handle: () => this.world.getPlayer().jump(),
      },
      'ArrowLeft': {
        pressed: false,
        handle: () => this.world.getPlayer().moveLeft(),
      },
      'ArrowRight': {
        pressed: false,
        handle: () => this.world.getPlayer().moveRight(),
      },
    };

    window.addEventListener('keydown', (event) => {
      if (this.controller[event.key]) {
        this.controller[event.key].pressed = true;
      }
    });

    window.addEventListener('keyup', (event) => {
      if (this.controller[event.key]) {
        this.controller[event.key].pressed = false;
      }
    });
  }

  animate() {
    window.requestAnimationFrame(() => { this.doAnimate(); });
  }

  doAnimate() {
    Object.keys(this.controller).forEach((key) => {
      if (this.controller[key].pressed) {
        this.controller[key].handle();
      }
    });

    // Get the position of the player
    const player = this.world.getPlayer();
    player.step();

    // Get the position of all current elements in world
    this.world.getObjects().forEach((element) => {
      element.step();
    });

    // Set the `onGround` property to false initially. If the player collides
    // with an object, then set it to true.
    player.onGround = false;

    // Collision detection and handling for the player
    this.world.getObjects().forEach((element) => {
      // Detect collision
      if (collide(player, element)) {
        // Handle collision
        player.handleCollision(element);
        element.handleCollision(player);
      }
    });

    // Clear all previously drawn elements
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw the player
    player.render(this.context);

    // Draw all elements in world
    this.world.getObjects().forEach((element) => {
      element.render(this.context);
    });

    window.requestAnimationFrame(() => { this.doAnimate(); });
  }
}

export default Render;
