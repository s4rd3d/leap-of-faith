import World from './world';
import Render from './render';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';

import './style/style.css';
import './style/reset.css';

// Set up canvas dimensions
const canvas = document.querySelector('canvas');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// Generate a new world
const world = new World();
world.generate();

// Create a new renderer and start the animation
const render = new Render(canvas, world);
render.animate();
