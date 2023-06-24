import World from './world';
import Render from './render';

class Game {
  constructor(controllerCallback, canvas) {
    // Game controller callback function
    this.controllerCallback = controllerCallback;

    this.canvas = canvas;

    // Bind callbacks to instances
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);

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
      'Escape': {
        pressed: false,
        handle: () => this.controllerCallback('pause'),
      },
    };
  }

  createGame() {
    this.world = new World();
    this.render = new Render(
      this.canvas,
      this.world,
      this.inputController,
      this.handleCallback,
    );
    this.world.generate();
    this.render.animate();
  }

  startGame() {
    this.addEventListeners();
  }

  pauseGame() {
    this.render.pause();
    this.removeEventListeners();
  }

  resumeGame() {
    this.render.resume();
    // This is needed, because without setting this property
    // the pause() function keeps triggering after one animation cycle
    this.inputController.Escape.pressed = false;
    this.addEventListeners();
  }

  restartGame() {
    this.removeEventListeners();
    this.createGame();
  }

  handleInputKeyDown(event) {
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

  handleCallback = () => {
    this.render = undefined;
    this.controllerCallback('endGame');
  };
}

export default Game;
