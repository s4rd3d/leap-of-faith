class World {
  constructor() {
    this.objects = [];
  }

  addObject(object) {
    this.objects.push(object);
  }

  getObjects() {
    return this.objects;
  }
}

export default World;
