"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Proxy for the window.requestAnimationFrame function
 */
exports.default = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;