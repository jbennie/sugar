"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (t) {
  return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

; /**
   * Ease in out cubic function
   *
   * @name 		easeInOutCubic
   * @param 		{Number} 		t 		The current time
   * @return 		{Number} 				The value depending on time
   */