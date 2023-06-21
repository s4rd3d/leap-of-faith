import Game from './game/game';
import MainMenu from './menus/mainMenu';

// Possible game states
const state = {
  mainMenu: 0,
  game: 1,
  endScreen: 2,
};

class Controller {
  constructor(canvas) {
    this.canvas = canvas;
  }

  initialize() {
    this.state = state.mainMenu;
    this.mainMenu = new MainMenu(this.handleCallback);
    this.game = new Game(this.handleCallback, this.canvas);
    this.game.createGame();
  }

  hideMainMenu() {
    this.mainMenu.removeListeners();
    this.mainMenu.removeMenu();
    this.mainMenu = undefined;
  }

  handleCallback = (message) => {
    switch (message) {
      case 'startGame':
        this.state = state.game;
        this.hideMainMenu();
        this.game.startGame();
        break;
      case 'endGame':
        this.state = state.endScreen;
        break;
      default:
        break;
    }
  };
}

export default Controller;
