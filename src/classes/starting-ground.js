import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_HEIGHT } from '../constants';

class StartingGround {
  constructor() {
    this.width = CANVAS_WIDTH;
    this.height = GROUND_HEIGHT;
    this.position = {
      x: 0,
      y: CANVAS_HEIGHT - GROUND_HEIGHT,
    };
    this.color = 'brown';
  }

  // eslint-disable-next-line class-methods-use-this
  step() {
    // Ground ain't gon move cuh
  }

  render(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export default StartingGround;
