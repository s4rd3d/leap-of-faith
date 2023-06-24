import collide from './utils';

class Render {
  constructor(canvas, world, controller, gameCallback) {
    this.canvas = canvas;
    this.world = world;
    this.context = canvas.getContext('2d');
    this.controller = controller;
    this.paused = false;
    this.gameCallback = gameCallback;
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => {
      this.doAnimate();
    });
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

    // If the player is under the canvas the game is over
    if (player.position.y > this.canvas.height) this.gameCallback();

    // If the player is higher than the middle of the canvas, push objects down.
    if (player.position.y < this.canvas.height / 2 && player.velocity.y < 0) {
      // Push down world objects.
      this.world.moveObjects();

      // Push down the player.
      player.position.y -= player.velocity.y;

      // Add new platforms to the top of the canvas.
      this.world.generatePlatforms();

      // Remove platforms from the world if they are out of the viewport.
      this.world.filterObjects();
    }

    // Clear all previously drawn elements
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw the player
    player.render(this.context);

    // Draw all elements in world
    this.world.getObjects().forEach((element) => {
      element.render(this.context);
    });

    if (!this.paused) {
      window.requestAnimationFrame(() => {
        this.doAnimate();
      });
    }
  }
}

export default Render;
