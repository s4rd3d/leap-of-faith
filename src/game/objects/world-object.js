class WorldObject {
  constructor(position, width, height, color) {
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  // Calculate the position of the object in the next frame
  //
  // eslint-disable-next-line class-methods-use-this
  step() {}

  // Draw the object to the canvas
  render(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // Handle collision with an other world object
  //
  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  handleCollision(object) {}
}

export default WorldObject;
