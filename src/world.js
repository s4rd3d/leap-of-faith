import Player from './objects/player';
import Ground from './objects/ground';

import { CANVAS_WIDTH } from './constants';
import WorldObject from './objects/world-object';

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

    // Create a single platform
    // TODO: Create a more complex world
    const platform = new WorldObject({ x: 300, y: 600 }, 500, 50, '#346955');

    // Add player and objects to the world
    this.player = player;
    this.addObject(ground);
    this.addObject(platform);
  }
}

export default World;
