class MainMenu extends Menu {
  constructor() {
    const buttons = [
      {
        properties: {
          innerText: "New Game",
          className: "menu-btn",
          id: "new-game",
        },
        handle: () => {
          console.log("new game clicked");
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
          innerText: "High Scores",
          className: "menu-btn",
          id: "high-scores",
        },
        handle: () => {
          console.log("high scores clicked");
        },
      },
      {
        properties: {
          innerText: "About",
          className: "menu-btn",
          id: "about",
        },
        handle: () => {
          console.log("about clicked");
        },
      },
    ];

    super(buttons, "main");
  }
}

export default MainMenu;
