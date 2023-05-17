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
    // Get the position of all current elements in world
    this.world.getObjects().forEach((element) => {
      element.step();
    });

    // Clear all previously drawn elements
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw all elements in world
    this.world.getObjects().forEach((element) => {
      element.render(this.context);
    });

    window.requestAnimationFrame(() => { this.doAnimate(); });
  }
}

export default Render;
