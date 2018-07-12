"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (t) {
  return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};

; /**
   * Ease in out quart function
   *
   * @name 		easeInOutQuart
   * @param 		{Number} 		t 		The current time
   * @return 		{Number} 				The value depending on time
   */