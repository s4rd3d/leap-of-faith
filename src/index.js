import Player from './classes/player';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';

const canvas = document.querySelector('canvas');
const c2d = canvas.getContext('2d');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);
  player.update(canvas);
  c2d.fillStyle = 'white';
  c2d.fillRect(0, 0, canvas.width, canvas.height);
  c2d.fillStyle = player.color;
  c2d.fillRect(
    player.position.x,
    player.position.y,
    player.width,
    player.height,
  );
}

animate();

window.addEventListener('keydown', (event) => {
  player.move(event.key);
});
