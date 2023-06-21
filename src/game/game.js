import World from "./world";
import Render from "./render";

class Game {
  constructor(controllerCallback, canvas) {
    // Game controller callback function
    this.controllerCallback = controllerCallback;

    // User event handling
    this.inputController = {
      "ArrowUp": {
        pressed: false,
        handle: () => this.world.getPlayer().jump(),
      },
      "ArrowLeft": {
        pressed: false,
        handle: () => this.world.getPlayer().moveLeft(),
      },
      "ArrowRight": {
        pressed: false,
        handle: () => this.world.getPlayer().moveRight(),
      },
    };
  }

  createGame() {
    this.world = new World();
    this.render = new Render(canvas, this.world, this.inputController);
    this.world.generate();
    this.render.animate();
  }

  startGame() {
    this.addEventListeners();
  }

  // Register user input listeners
  addEventListeners() {
    window.addEventListener("keydown", (event) => {
      if (this.inputController[event.key]) {
        this.inputController[event.key].pressed = true;
      }
    });

    window.addEventListener("keyup", (event) => {
      if (this.inputController[event.key]) {
        this.inputController[event.key].pressed = false;
      }
    });
  }

}

export default Game;
