import Controller from './controller';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';

import './style/style.css';
import './style/reset.css';

// Set up canvas dimensions
const canvas = document.querySelector('canvas');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// Create controller
const controller = new Controller(canvas);
controller.initialize();
