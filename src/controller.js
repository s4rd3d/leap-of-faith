import Game from "./game/game";
import DeathMenu from "./menus/death-menu";
import MainMenu from "./menus/main-menu";
import PauseMenu from "./menus/pause-menu";

// Possible game states
const state = {
  mainMenu: 0,
  game: 1,
  endScreen: 2,
  pause: 3,
};

class Controller {
  constructor(canvas) {
    this.canvas = canvas;
    this.game = new Game(this.handleCallback, this.canvas);
    this.mainMenu = new MainMenu(this.handleCallback);
    this.pauseMenu = new PauseMenu(this.handleCallback);
    this.deathMenu = new DeathMenu(this.handleCallback);
  }

  initialize() {
    this.state = state.mainMenu;
    this.showMenu(this.mainMenu);
    this.game.createGame();
  }

  starGame() {
    this.state = state.game;
    this.hideMenu(this.mainMenu);
    this.game.startGame();
  }

  endGame() {
    this.state = state.endScreen;
    this.showMenu(this.deathMenu);
  }

  tryAgain() {
    this.state = state.game;
    this.game.createGame();
    this.game.startGame();
    this.hideMenu(this.deathMenu);
  }

  pause() {
    this.state = state.pause;
    this.showMenu(this.pauseMenu);
    this.game.pause();
  }

  resume() {
    this.state = game;
    this.hideMenu(this.pauseMenu);
    this.game.resume();
  }

  showMenu(menu) {
    menu.create();
  }

  hideMenu(menu) {
    menu.remove();
  }

  handleCallback = (message) => {
    switch (message) {
      case "startGame":
        this.starGame();
        break;
      case "endGame":
        this.endGame();
        break;
      case "backToMain":
        this.initialize();
        break;
      case "pause":
        this.pause();
        break;
      case "resume":
        this.resume();
        break;
      case "tryAgain":
        this.tryAgain();
        break;
      default:
        break;
    }
  };
}

export default Controller;
