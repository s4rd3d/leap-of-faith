class DeathMenu extends Menu {
  constructor(controllerCallback) {
    const buttons = [
      {
        properties: {
          innerText: "Try Again",
          className: "menu-btn",
          id: "try-again",
        },
        handle: () => this.controllerCallback("tryAgain"),
      },
      {
        properties: {
          innerText: "Main Menu",
          className: "menu-btn",
          id: "back-to-main",
        },
        handle: () => this.controllerCallback("backToMain"),
      },
    ];

    super(buttons, "death");

    // Game controller callback function
    this.controllerCallback = controllerCallback;
  }
}

export default DeathMenu;
