import collide from './collision';

class Render {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;
    this.context = canvas.getContext('2d');

    // User event handling
    this.controller = {
      'ArrowUp': {
        pressed: false,
        handle: () => this.world.getPlayer().jump(),
      },
      'ArrowLeft': {
        pressed: false,
        handle: () => this.world.getPlayer().moveLeft(),
      },
      'ArrowRight': {
        pressed: false,
        handle: () => this.world.getPlayer().moveRight(),
      },
    };

    // Action for each menu button
    this.menuButtons = {
      'new-game': {
        handle: () => this.startGame(),
      },
      'settings': {
        // eslint-disable-next-line no-console
        handle: () => { console.log('settings clicked'); },
      },
      'high-scores': {
        // eslint-disable-next-line no-console
        handle: () => { console.log('high scores clicked'); },
      },
      'about': {
        // eslint-disable-next-line no-console
        handle: () => { console.log('about clicked'); },
      },
    };

    // Add click event listeners
    document.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        this.menuButtons[button.id].handle();
      });
      button.addEventListener('mouseover', () => {
        this.changeFocus(button);
      });
    });

    // Default focus on the first button
    this.changeFocus(document.querySelector('#new-game'));

    // Add event listener for keyboard navigation
    window.addEventListener('keydown', (event) => {
      this.navigateMenu(event);
    });
  }

  animate() {
    window.requestAnimationFrame(() => { this.doAnimate(); });
  }

  doAnimate() {
    Object.keys(this.controller).forEach((key) => {
      if (this.controller[key].pressed) {
        this.controller[key].handle();
      }
    });

    // Get the position of the player
    const player = this.world.getPlayer();
    player.step();

    // Get the position of all current elements in world
    this.world.getObjects().forEach((element) => {
      element.step();
    });

    // Set the `onGround` property to false initially. If the player collides
    // with an object, then set it to true.
    player.onGround = false;

    // Collision detection and handling for the player
    this.world.getObjects().forEach((element) => {
      // Detect collision
      if (collide(player, element)) {
        // Handle collision
        player.handleCollision(element);
        element.handleCollision(player);
      }
    });

    // If the player is higher than the middle of the canvas, push objects down.
    if (player.position.y < this.canvas.height / 2 && player.velocity.y < 0) {
      // Push down world objects.
      this.world.moveObjects();

      // Push down the player.
      player.position.y -= player.velocity.y;

      // Add new platforms to the top of the canvas.
      this.world.generatePlatforms();

      // Remove platforms from the world if they are out of the viewport.
      this.world.filterObjects();
    }

    // Clear all previously drawn elements
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw the player
    player.render(this.context);

    // Draw all elements in world
    this.world.getObjects().forEach((element) => {
      element.render(this.context);
    });

    window.requestAnimationFrame(() => { this.doAnimate(); });
  }

  startGame() {
    // Hide the menu when game starts
    document.querySelector('#main-menu').classList.add('hidden');

    // Only register user input if game has started
    window.addEventListener('keydown', (event) => {
      if (this.controller[event.key]) {
        this.controller[event.key].pressed = true;
      }
    });

    window.addEventListener('keyup', (event) => {
      if (this.controller[event.key]) {
        this.controller[event.key].pressed = false;
      }
    });
  }

  // Keyboard navigation of main menu
  navigateMenu(event) {
    const buttons = document.querySelectorAll('button');
    const buttonsNum = buttons.length;
    let focusIndex = 0;

    // Find which button is in focus
    for (let i = 0; i < buttonsNum; i += 1) {
      if (document.activeElement === buttons[i]) focusIndex = i;
    }

    switch (event.key) {
      case 'ArrowUp':
        if (focusIndex === 0) focusIndex = buttonsNum - 1;
        else focusIndex -= 1;
        this.changeFocus(buttons[focusIndex]);
        break;
      case 'ArrowDown':
        if (focusIndex === buttonsNum - 1) focusIndex = 0;
        else focusIndex += 1;
        this.changeFocus(buttons[focusIndex]);
        break;
      case 'Enter':
        this.changeFocus(buttons[focusIndex]);
        this.menuButtons[buttons[focusIndex].id].handle();
        break;
      default:
        break;
    }
  }

  // Change which button is in focus depending on keyboard
  // or mouse selection
  // eslint-disable-next-line class-methods-use-this
  changeFocus(button) {
    const buttons = document.querySelectorAll('button');

    button.focus();
    button.classList.add('focused');

    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i] === button) buttons[i].classList.add('focused');
      else buttons[i].classList.remove('focused');
    }
  }
}

export default Render;
