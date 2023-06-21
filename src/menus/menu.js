class Menu {
  constructor(buttons, name) {
    this.buttons = buttons;
    this.name = name;
  }

  // Change which button is in focus depending on keyboard
  // or mouse selection
  changeFocus(index) {
    let btnInFocus = this.buttons[index];

    btnInFocus.focused = true;
    btnInFocus.button.focus();
    btnInFocus.button.classList.add("focused");

    for (let i = 0; i < this.buttons.length; i += 1) {
      if (i !== index) {
        this.buttons[i].focused = false;
        this.buttons[i].button.classList.remove("focused");
      }
    }
  }

  // Keyboard navigation of main menu
  navigateMenu(event) {
    const focusedButton = this.buttons.filter((button) => {
      button.focused;
    })[0];
    const focusedButtonIdx = this.buttons.indexOf(focusedButton);
    let index;

    switch (event.key) {
      case "ArrowUp":
        index =
          focusedButtonIdx === 0
            ? this.buttons.length - 1
            : focusedButtonIdx - 1;
        this.changeFocus(index);
        break;
      case "ArrowDown":
        index =
          focusedButtonIdx === this.buttons.length - 1
            ? 0
            : focusedButtonIdx + 1;
        changeFocus(index);
        break;
      default:
        break;
    }
  }

  create() {
    this.createMenu();
    this.createButtons();
    this.addListeners();
  }

  remove() {
    this.removeMenu();
    this.removeListeners();
  }

  // Create container for the menu buttons
  createMenu() {
    this.menu = document.createElement("div");
    this.menu.classList.add("menu");
    this.menu.id = `${this.name}-menu`;
    document.body.appendChild(this.menu);
  }

  removeMenu() {
    this.menu.remove();
  }

  // Create button elements for the menu
  createButtons() {
    this.buttons.foreach((element) => {
      element.button = document.createElement("button");
      if (element.properties) Object.assign(element.button, element.properties);
      element.button.focused = "false";
      this.menu.appendChild(element.button);
    });

    // Default focus on the first button
    this.buttons[0].focused = "true";
    this.changeFocus(0);
  }

  addListeners() {
    this.buttons.forEach((element) => {
      // Add click event listeners
      element.button.addEventListener("click", () => {
        element.handle();
      });
      // Add hover event listeners
      element.button.addEventListener("mouseover", () => {
        changeFocus(this.buttons.indexOf(element));
      });
    });

    // Add event listener for keyboard navigation
    window.addEventListener("keydown", (event) => {
      navigateMenu(event);
    });
  }

  removeListeners() {
    window.removeEventListener("keydown", this.navigateMenu);
  }
}

export default Menu;
