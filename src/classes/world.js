class World {
  constructor() {
    this.player = undefined;
    this.objects = [];
  }

  addPlayer(player) {
    this.player = player;
  }

  getPlayer() {
    return this.player;
  }

  addObject(object) {
    this.objects.push(object);
  }

  getObjects() {
    return this.objects;
  }
}

export default World;
