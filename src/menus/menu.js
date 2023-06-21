class Menu {
  constructor(name, buttons) {
    // Create menu div
    this.createMenu();

    // Name of the menu
    this.name = name;

    // Menu buttons
    this.buttons = buttons;
    buttons.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.button = this.createButton(element.id, element.text);
      // eslint-disable-next-line no-param-reassign
      element.focused = false;
    });

    this.eventListeners = [];
    this.addListeners();

    // Default focus on the first button
    this.buttons[0].focused = true;
    this.changeFocus(0);
  }

  createMenu() {
    // Container div for the buttons
    this.menu = document.createElement('div');
    this.menu.id = `${this.name}-menu`;
    this.menu.classList.add('menu');

    document.body.appendChild(this.menu);
  }

  createButton(id, text) {
    // Create new button
    const button = document.createElement('button');
    button.id = id;
    button.classList.add('menu-btn');
    button.innerText = text;

    // Append button to the menu
    this.menu.appendChild(button);

    return button;
  }

  // Keyboard navigation of main menu
  navigateMenu(event) {
    const focusedBtn = this.buttons.filter((button) => button.focused)[0];
    const focusedBtnIdx = this.buttons.indexOf(focusedBtn);

    let idx;
    switch (event.key) {
      case 'ArrowUp':
        idx = focusedBtnIdx === 0
          ? this.buttons.length - 1
          : focusedBtnIdx - 1;
        this.changeFocus(idx);
        break;
      case 'ArrowDown':
        idx = focusedBtnIdx === this.buttons.length - 1
          ? 0
          : focusedBtnIdx + 1;
        this.changeFocus(idx);
        break;
      default:
        break;
    }
  }

  // Change which button is in focus depending on keyboard
  // or mouse selection
  changeFocus(idx) {
    this.buttons[idx].focused = true;
    this.buttons[idx].button.focus();
    this.buttons[idx].button.classList.add('focused');

    for (let i = 0; i < this.buttons.length; i += 1) {
      if (i !== idx) {
        this.buttons[i].focused = false;
        this.buttons[i].button.classList.remove('focused');
      }
    }
  }

  // Add event listeners to the menu buttons
  addListeners() {
    // Add click event listeners
    for (let i = 0; i < this.buttons.length; i += 1) {
      this.buttons[i].button.addEventListener('click', () => {
        this.buttons[i].handle();
      });
      this.buttons[i].button.addEventListener('mouseover', () => {
        this.changeFocus(i);
      });
    }

    // Add event listener for keyboard navigation
    window.addEventListener('keydown', (event) => {
      this.navigateMenu(event);
    });
  }

  // Remove event listeners
  removeListeners() {
    window.removeEventListener('keydown', this.navigateMenu);
  }

  // Remove the menu from the document
  removeMenu() {
    this.removeListeners();
    this.menu.remove();
  }
}

export default Menu;
