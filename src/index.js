import Player from './classes/player';
import World from './classes/world';
import Ground from './classes/starting-ground';
import Render from './classes/render';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';

const canvas = document.querySelector('canvas');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const player = new Player({ x: CANVAS_WIDTH / 2 - 50, y: 100 }, 100, 100);
const ground = new Ground();
const world = new World();

world.addObject(ground);
world.addObject(player);

const render = new Render(canvas, world);
render.animate();
