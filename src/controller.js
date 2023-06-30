import autoBind from 'auto-bind';

import Game from './game/game';
import DeathMenu from './menus/death-menu';
import MainMenu from './menus/main-menu';
import PauseMenu from './menus/pause-menu';

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

  backToMain() {
    if (this.state === state.pause) {
      this.hideMenu(this.pauseMenu);
    } else if (this.state === state.endScreen) {
      this.hideMenu(this.deathMenu);
    }
    this.game.destroyGame();
    this.game.createGame();
    this.showMenu(this.mainMenu);
  }

  startGame() {
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
    this.hideMenu(this.deathMenu);
    this.game.restartGame();
  }

  pause() {
    this.state = state.pause;
    this.showMenu(this.pauseMenu);
    this.game.pauseGame();
  }

  resume() {
    this.state = state.game;
    this.hideMenu(this.pauseMenu);
    this.game.resumeGame();
  }

  // eslint-disable-next-line class-methods-use-this
  showMenu(menu) {
    menu.create();
  }

  // eslint-disable-next-line class-methods-use-this
  hideMenu(menu) {
    menu.remove();
  }

  handleCallback = (message) => {
    switch (message) {
      case 'startGame':
        this.startGame();
        break;
      case 'endGame':
        this.endGame();
        break;
      case 'backToMain':
        this.backToMain();
        break;
      case 'pause':
        this.pause();
        break;
      case 'resume':
        this.resume();
        break;
      case 'tryAgain':
        this.tryAgain();
        break;
      default:
        break;
    }
  };
}

export default Controller;
