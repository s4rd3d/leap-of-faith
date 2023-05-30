// Constants for player movement and physics
export const GRAVITY = 1;
export const FRICTION = 5;
export const JUMPSPEED = 30;

// Player guaranteedly won't move in opposite direction because
// of friction when decreasing movement.
export const MOVESPEED = FRICTION * 3;
export const MAXSPEED = FRICTION * 4;

// Constants for rendering
export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight;
export const GROUND_HEIGHT = 30;
