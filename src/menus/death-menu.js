class DeathMenu extends Menu {
  constructor(controllerCallback) {
    const buttons = [
      {
        properties: {
          innerText: "Try Again",
          className: "menu-btn",
          id: "try-again",
        },
        handle: () => {
          console.log("try again clicked");
        },
      },
      {
        properties: {
          innerText: "Main Menu",
          className: "menu-btn",
          id: "back-to-main",
        },
        handle: () => {
          console.log("back to main clicked");
        },
      },
    ];

    super(buttons, "death");

    // Game controller callback function
    this.controllerCallback = controllerCallback;
  }
}

export default DeathMenu;
