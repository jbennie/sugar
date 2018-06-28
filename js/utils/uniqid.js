"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = uniqid;
var uniqidIdx = 0;
if (!window.sugar) window.sugar = {};
if (!window.sugar._uniqid) window.sugar._uniqid = 0;

/**
 * Get a uniq id
 */
function uniqid() {
	// update uniqid idx
	window.sugar._uniqid++;
	return "s" + window.sugar._uniqid.toString();
}