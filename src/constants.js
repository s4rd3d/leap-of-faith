// Constants for player movement and physics
export const GRAVITY = 1;
export const FRICTION = 5;
export const JUMPSPEED = 25;

// Player guaranteedly won't move in opposite direction because
// of friction when decreasing movement.
export const MOVESPEED = FRICTION * 3;
export const MAXSPEED = FRICTION * 4;

// Constants for rendering
export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight;
export const GROUND_HEIGHT = 30;

// Distance between platforms
export const PLATFORM_DISTANCE_MIN = 250;
export const PLATFORM_DISTANCE_MAX = 350;

// Platform width
export const PLATFORM_WIDTH_MIN = 200;
export const PLATFORM_WIDTH_MAX = 500;

// Platform height
export const PLATFORM_HEIGHT = 50;
