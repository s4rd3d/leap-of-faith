// Axis aligned collision detection
export default function collide(object1, object2) {
  const x1 = object1.position.x;
  const y1 = object1.position.y;
  const h1 = object1.height;
  const w1 = object1.width;

  const x2 = object2.position.x;
  const y2 = object2.position.y;
  const h2 = object2.height;
  const w2 = object2.width;

  return x1 <= x2 + w2
    && x1 + w1 >= x2
    && y1 <= y2 + h2
    && h1 + y1 >= y2;
}
