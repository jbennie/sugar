"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (t) {
  return 1 - --t * t * t * t;
};

; /**
   * Ease out quart function
   *
   * @name 		easeOutQuart
   * @param 		{Number} 		t 		The current time
   * @return 		{Number} 				The value depending on time
   */