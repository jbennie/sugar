"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (t) {
  return --t * t * t + 1;
};

; /**
   * Ease out cubic function
   *
   * @name 		easeOutCubic
   * @param 		{Number} 		t 		The current time
   * @return 		{Number} 				The value depending on time
   */