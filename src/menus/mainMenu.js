import Menu from './menu';

class MainMenu extends Menu {
  constructor(controllerCallback) {
    // Menu buttons
    const buttons = [
      {
        id: 'new-game',
        text: 'New Game',
        handle: () => this.controllerCallback('startGame'),
      },
      {
        id: 'settings',
        text: 'Settings',
        // eslint-disable-next-line no-console
        handle: () => { console.log('settings clicked'); },
      },
      {
        id: 'high-scores',
        text: 'High Score',
        // eslint-disable-next-line no-console
        handle: () => { console.log('high scores clicked'); },
      },
      {
        id: 'about',
        text: 'About',
        // eslint-disable-next-line no-console
        handle: () => { console.log('about clicked'); },
      },
    ];

    super('main', buttons);

    // Game controller callback function
    this.controllerCallback = controllerCallback;
  }
}

export default MainMenu;
