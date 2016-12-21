"use strict";

exports.__esModule = true;

exports.default = function (t) {
  return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

; /**
   * Ease in out quad function
   *
   * @name 		easeInOutQuad
   * @param 		{Number} 		t 		The current time
   * @return 		{Number} 				The value depending on time
   */