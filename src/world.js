import Player from './objects/player';
import Ground from './objects/ground';

import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  PLATFORM_DISTANCE_MIN,
  PLATFORM_DISTANCE_MAX,
} from './constants';

import WorldObject from './objects/world-object';

// Get a random x coordinate for platform generating.
function randomX() {
  // TODO: remove this magic number, use random platform length.
  return Math.random() * (CANVAS_WIDTH - 500);
}

// Return a random vertical distance for platform generating.
function getPlatformDistance() {
  return Math.floor(
    Math.random()
    * (PLATFORM_DISTANCE_MAX - PLATFORM_DISTANCE_MIN)
    + PLATFORM_DISTANCE_MIN,
  );
}

class World {
  constructor() {
    this.player = undefined;
    this.objects = [];
  }

  // Get the player registered to the world
  getPlayer() {
    return this.player;
  }

  // Add player to the world
  addPlayer(player) {
    this.player = player;
  }

  // Get all objects registered in the world
  getObjects() {
    return this.objects;
  }

  // Add an object to the world
  addObject(object) {
    this.objects.push(object);
  }

  // Generate a world by creating and adding objects
  generate() {
    // Create the player
    const player = new Player(
      { x: CANVAS_WIDTH / 2 - 50, y: 100 },
      100,
      100,
      '#FF0000',
    );

    // Create the starting ground
    const ground = new Ground();

    // Add player and objects to the world
    this.player = player;
    this.addObject(ground);
    this.generatePlatforms();
  }

  generatePlatforms() {
    // The y coordinate where the first platform can be drawn to.
    // This equals the y coordinate of the highest platform + the platform
    // distance.
    const fromY = this.objects[this.objects.length - 1].position.y
      - getPlatformDistance();

    // Generate new platforms and add them to the world.
    for (let y = fromY; y > 0; y -= getPlatformDistance()) {
      // TODO: remove magic numbers, use random width and fixed (or random)
      // height
      this.addObject(new WorldObject({ x: randomX(), y }, 500, 50, '#346955'));
    }
  }

  // Push objects down according to the player's velocity.
  moveObjects() {
    this.objects.forEach((object) => {
      // eslint-disable-next-line no-param-reassign
      object.position.y -= this.player.velocity.y;
    });
  }

  // Remove objects that are out of the viewport.
  filterObjects() {
    this.objects = this.objects
      .filter((object) => object.position.y < CANVAS_HEIGHT);
  }
}

export default World;
