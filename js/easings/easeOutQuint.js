"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (t) {
  return 1 + --t * t * t * t * t;
};

; /**
   * Ease out quint function
   *
   * @name 		easeOutQuint
   * @param 		{Number} 		t 		The current time
   * @return 		{Number} 				The value depending on time
   */