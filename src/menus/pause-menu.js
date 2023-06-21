class PauseMenu extends Menu {
  constructor() {
    const buttons = [
      {
        properties: {
          innerText: "Resume",
          className: "menu-btn",
          id: "resume",
        },
        handle: () => {
          console.log("resume clicked");
        },
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
        handle: () => {
          console.log("back to main clicked");
        },
      },
    ];

    super(buttons, "main");
  }
}

export default PauseMenu;
