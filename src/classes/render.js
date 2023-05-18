class Render {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;
    this.context = canvas.getContext('2d');
  }

  animate() {
    window.requestAnimationFrame(() => { this.doAnimate(); });
  }

  doAnimate() {
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
      if (player.collide(element)) {
        // Handle collision
        player.handleCollision(element);
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
