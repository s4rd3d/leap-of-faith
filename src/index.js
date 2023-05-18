import Player from './classes/player';
import World from './classes/world';
import Ground from './classes/starting-ground';
import Platform from './classes/platform';
import Render from './classes/render';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';

import './style/style.css';
import './style/reset.css';

const canvas = document.querySelector('canvas');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const player = new Player({ x: CANVAS_WIDTH / 2 - 50, y: 100 }, 100, 100);
const ground = new Ground();
const platform = new Platform({ x: 300, y: 600 }, 50, 500);
const world = new World();

world.addPlayer(player);
world.addObject(ground);
world.addObject(platform);

const render = new Render(canvas, world);
render.animate();
