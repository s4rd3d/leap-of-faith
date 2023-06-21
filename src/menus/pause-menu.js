class PauseMenu extends Menu {
  constructor(controllerCallback) {
    const buttons = [
      {
        properties: {
          innerText: "Resume",
          className: "menu-btn",
          id: "resume",
        },
        handle: () => this.controllerCallback("resume"),
      },
      {
        properties: {
          innerText: "Settings",
          className: "menu-btn",
          id: "settings",
        },
        handle: () => {
          console.log("settings clicked");
        },
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

    super(buttons, "main");

    // Game controller callback function
    this.controllerCallback = controllerCallback;
  }
}

export default PauseMenu;
