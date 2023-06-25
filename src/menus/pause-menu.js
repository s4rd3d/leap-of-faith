import Menu from './menu';

class PauseMenu extends Menu {
  constructor(controllerCallback) {
    const buttons = [
      {
        properties: {
          id: 'resume',
          className: 'menu-btn',
          innerText: 'Resume',
        },
        handle: () => this.controllerCallback('resume'),
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
          id: 'back-to-main',
          className: 'menu-btn',
          innerText: 'Main Menu',
        },
        handle: () => this.controllerCallback('backToMain'),
      },
    ];

    super(buttons, 'pause');

    // Game controller callback function
    this.controllerCallback = controllerCallback;
  }
}

export default PauseMenu;
