import autoBind from 'auto-bind';

import World from './world';
import Render from './render';

class Game {
  constructor(controllerCallback, canvas) {
    // Game controller callback function
    this.controllerCallback = controllerCallback;

    this.canvas = canvas;

    // Bind callbacks to instances
    autoBind(this);

    // User event handling
    this.inputController = {
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
  }

  createGame() {
    this.world = new World();
    this.render = new Render(
      this.canvas,
      this.world,
      this.inputController,
      this.controllerCallback,
    );
    this.world.generate();
    this.render.animate();
  }

  destroyGame() {
    this.render = undefined;
    this.world = undefined;
    this.removeEventListeners();
  }

  startGame() {
    this.addEventListeners();
  }

  pauseGame() {
    this.removeEventListeners();
    this.render.pause();
  }

  resumeGame() {
    this.render.resume();
    this.addEventListeners();
  }

  restartGame() {
    this.removeEventListeners();
    this.world.removeObjects();
    this.world.generate();
    this.addEventListeners();
    this.render.restart();
  }

  handleInputKeyDown(event) {
    if (event.key === 'Escape') {
      this.controllerCallback('pause');
    }
    if (this.inputController[event.key]) {
      this.inputController[event.key].pressed = true;
    }
  }

  handleInputKeyUp(event) {
    if (this.inputController[event.key]) {
      this.inputController[event.key].pressed = false;
    }
  }

  // Register user input listeners
  addEventListeners() {
    window.addEventListener('keydown', this.handleInputKeyDown);
    window.addEventListener('keyup', this.handleInputKeyUp);
  }

  // Remove user input for game
  removeEventListeners() {
    window.removeEventListener('keydown', this.handleInputKeyDown);
    window.removeEventListener('keyup', this.handleInputKeyUp);
  }
}

export default Game;
