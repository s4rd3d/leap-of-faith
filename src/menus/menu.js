class Menu {
  constructor(buttons, name) {
    this.buttons = buttons;
    this.name = name;

    // Bind callbacks to instances
    this.navigateMenu = this.navigateMenu.bind(this);
    this.changefocusHover = this.changefocusHover.bind(this);
  }

  // Change which button is in focus depending on keyboard
  // or mouse selection
  changeFocus(index) {
    const btnInFocus = this.buttons[index];

    btnInFocus.focused = true;
    btnInFocus.button.focus();
    btnInFocus.button.classList.add('focused');

    for (let i = 0; i < this.buttons.length; i += 1) {
      if (i !== index) {
        this.buttons[i].focused = false;
        this.buttons[i].button.classList.remove('focused');
      }
    }
  }

  changefocusHover(event) {
    const buttons = document.querySelectorAll('button');
    const btnArray = Array.prototype.slice.call(buttons);
    const button = btnArray.indexOf(event.target);
    this.changeFocus(button);
  }

  // Keyboard navigation of main menu
  navigateMenu(event) {
    const focusedButton = this.buttons.filter((button) => button.focused)[0];
    const focusedButtonIdx = this.buttons.indexOf(focusedButton);
    let index;

    switch (event.key) {
      case 'ArrowUp':
        index = focusedButtonIdx === 0
          ? this.buttons.length - 1
          : focusedButtonIdx - 1;
        this.changeFocus(index);
        break;
      case 'ArrowDown':
        index = focusedButtonIdx === this.buttons.length - 1
          ? 0
          : focusedButtonIdx + 1;
        this.changeFocus(index);
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
    this.removeListeners();
    this.removeMenu();
  }

  // Create container for the menu buttons
  createMenu() {
    this.menu = document.createElement('div');
    this.menu.classList.add('menu');
    this.menu.id = `${this.name}-menu`;
    document.body.appendChild(this.menu);
  }

  removeMenu() {
    this.menu.remove();
  }

  // Create button elements for the menu
  createButtons() {
    for (let i = 0; i < this.buttons.length; i += 1) {
      const element = this.buttons[i];
      element.button = document.createElement('button');
      if (element.properties) Object.assign(element.button, element.properties);
      element.focused = false;
      this.menu.appendChild(element.button);
    }

    // Default focus on the first button
    this.changeFocus(0);
  }

  addListeners() {
    this.buttons.forEach((element) => {
      // Add click event listeners
      element.button.addEventListener('click', element.handle);
      // Add hover event listeners
      element.button.addEventListener(
        'mouseover',
        this.changefocusHover,
      );
    });
    // Add event listener for keyboard navigation
    window.addEventListener('keydown', this.navigateMenu);
  }

  removeListeners() {
    this.buttons.forEach((element) => {
      // Add click event listeners
      element.button.removeEventListener('click', element.handle);
      // Add hover event listeners
      element.button.removeEventListener(
        'mouseover',
        this.changefocusHover,
      );
    });

    window.removeEventListener('keydown', this.navigateMenu);
  }
}

export default Menu;
