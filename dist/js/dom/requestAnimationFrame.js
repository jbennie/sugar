"use strict";

exports.__esModule = true;
/**
 * Proxy for the window.requestAnimationFrame function
 */
exports.default = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;