import Menu from './menu';

class MainMenu extends Menu {
  constructor(controllerCallback) {
    const buttons = [
      {
        properties: {
          id: 'new-game',
          className: 'menu-btn',
          innerText: 'New Game',
        },
        handle: () => this.controllerCallback('startGame'),
      },
      {
        properties: {
          id: 'settings',
          className: 'menu-btn',
          innerText: 'Settings',
        },
        handle: () => {
          // eslint-disable-next-line no-console
          console.log('settings clicked');
        },
      },
      {
        properties: {
          id: 'high-scores',
          className: 'menu-btn',
          innerText: 'High Scores',
        },
        handle: () => {
          // eslint-disable-next-line no-console
          console.log('high scores clicked');
        },
      },
      {
        properties: {
          id: 'about',
          className: 'menu-btn',
          innerText: 'About',
        },
        handle: () => {
          // eslint-disable-next-line no-console
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
