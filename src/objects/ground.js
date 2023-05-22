import WorldObject from './world-object';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_HEIGHT } from '../constants';

class Ground extends WorldObject {
  constructor() {
    super(
      { x: 0, y: CANVAS_HEIGHT - GROUND_HEIGHT },
      CANVAS_WIDTH,
      GROUND_HEIGHT,
      '#684132',
    );
  }
}

export default Ground;
