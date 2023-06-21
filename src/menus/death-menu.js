class DeathMenu extends Menu {
  constructor() {
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
  }
}

export default DeathMenu;
