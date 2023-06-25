import Menu from './menu';

class DeathMenu extends Menu {
  constructor(controllerCallback) {
    const buttons = [
      {
        properties: {
          id: 'try-again',
          className: 'menu-btn',
          innerText: 'Try Again',
        },
        handle: () => this.controllerCallback('tryAgain'),
      },
      {
        properties: {
          id: 'back-to-main',
          className: 'menu-btn',
          innerText: 'Main Menu',
        },
        handle: () => this.controllerCallback('backToMain'),
      },
    ];

    super(buttons, 'death');

    // Game controller callback function
    this.controllerCallback = controllerCallback;
  }
}

export default DeathMenu;
