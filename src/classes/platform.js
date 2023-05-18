class Platform {
  constructor(position, width, height) {
    this.width = height;
    this.height = width;
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.color = '#346955';
  }

  // eslint-disable-next-line class-methods-use-this
  step() {
  }

  render(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export default Platform;
