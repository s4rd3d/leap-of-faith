import Menu from './menu';

class MainMenu extends Menu {
  constructor(controllerCallback) {
    const buttons = [
      {
        properties: {
          innerText: 'New Game',
          className: 'menu-btn',
          id: 'new-game',
        },
        handle: () => this.controllerCallback('startGame'),
      },
      {
        properties: {
          innerText: 'Settings',
          className: 'menu-btn',
          id: 'settings',
        },
        handle: () => {
          console.log('settings clicked');
        },
      },
      {
        properties: {
          innerText: 'High Scores',
          className: 'menu-btn',
          id: 'high-scores',
        },
        handle: () => {
          console.log('high scores clicked');
        },
      },
      {
        properties: {
          innerText: 'About',
          className: 'menu-btn',
          id: 'about',
        },
        handle: () => {
          console.log('about clicked');
        },
      },
    ];

    super(buttons, 'main');

    // Game controller callback function
    this.controllerCallback = controllerCallback;
  }
}

export default MainMenu;
