'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domReady = require('../dom/domReady');

var _domReady2 = _interopRequireDefault(_domReady);

var _sSettings = require('../core/sSettings');

var _sSettings2 = _interopRequireDefault(_sSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name 		SColor
 * Class that provide complete and simple to use color manupilation capabilities like:
 * - Modifiers
 * 	- opacity
 * 	- darken
 * 	- lighten
 * 	- desaturate
 * 	- saturate
 * 	- spin (change hue)
 * 	- transparentize
 * 	- alpha
 * 	- grayscale
 * - Conversions
 * 	- rgba
 * 	- hsl
 * 	- hsv
 * 	- hex
 * - Print out formats
 * 	- toRgbaString
 * 	- toHslString
 * 	- toHsvString
 * 	- toHexString
 * 	- toString(format = null)
 * - Support registered sugar colors names like:
 * 	- ```new SColor('primary')```
 *
 * @example 	js
 * import SColor from 'coffeekraken-sugar/js/classes/SColor'
 * let myColor = new SColor(#ff0000);
 * // get a lighter color
 * let ligtherColor = myColor.lighten(20);
 * // print the color to rgba
 * console.log(lighterColor.toRgbaString());
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */

var SColor = function () {

    /**
     * Constructor
     * @param {object} color The color description like (#ff0000 | rgba(...) | hsl(...) | hsv(...) | {r:255,r:140,b:23,a:40})
     * @return {object} The color instance
     */


    /**
     * Internal alpha value
     * @type {Number}
     */


    /**
     * Internal green value
     * @type {Number}
     */


    /**
     * Original color value
     * @type {object}
     */


    /**
     * Static color names map
     * @protected
     */
    function SColor(color) {
        _classCallCheck(this, SColor);

        this._originalSColor = null;
        this._r = null;
        this._g = null;
        this._b = null;
        this._a = 1;
        this._format = null;


        // save the original color
        this._originalSColor = color;

        // try to get the color from the map
        if (typeof color == 'string' && SColor.colors[color.toLowerCase()]) {
            color = SColor.colors[color.toLowerCase()];
        }

        // parse the input color to
        // split into rgba values
        this._parse(color);
    }

    /**
     * Parse
     * @param {object} color The color to parse like (#ff0000 | rgba(...) | hsl(...) | hsv(...) | {r:255,r:140,b:23,a:40})
     * @return {object} The rgba representation of the passed color
     */


    /**
     * Current format
     * This is used to know what format to print in toString for exemple
     * @type {string}
     */


    /**
     * Internal blue value
     * @type {Number}
     */


    /**
     * Internal red value
     * @type {Number}
     */


    /**
     * Default toString format
     * @type 		{String}
     * @values 		hex | hsl | hsv | rgba
     */


    _createClass(SColor, [{
        key: '_parse',
        value: function _parse(color) {
            // detecting input format
            if (typeof color == 'string') {
                color = color.replace(/\s/g, '');
                if (color.indexOf('rgb') != -1) {
                    color = this.parseRgba(color);
                } else if (color.indexOf('hsv') != -1) {
                    color = this.parseHsv(color);
                    color = this.hsv2rgba(color.h, color.s, color.v);
                } else if (color.indexOf('hsl') != -1) {
                    color = this.parseHsl(color);
                    color = this.hsl2rgba(color.h, color.s, color.l);
                } else if (color.substring(0, 1) == '#') {
                    color = this.hex2rgba(color);
                }
            } else if ((typeof color === 'undefined' ? 'undefined' : _typeof(color)) == 'object') {
                if (!(color.r && color.g && color.b) || !(color.h && color.s && color.l) || !(color.h && color.s && color.v)) {
                    throw 'The passed color object ' + color.toString() + ' is not valid';
                }
            } else {
                throw 'The passed color ' + color.toString() + ' is not valid';
            }
            // assign new color values
            this.r = color.r;
            this.g = color.g;
            this.b = color.b;
            this.a = color.a;
            // return the parsed color
            return color;
        }

        /**
         * Concert color
         * @param 	{string}	format 		The format wanted as output like (rgba,hsl,hsv and hex)
         * @return 	{object} 				The color in wanted object format
         */

    }, {
        key: 'convert2',
        value: function convert2(format) {
            switch (format) {
                case 'rgba':
                    return this.rgba2rgba(this.r, this.g, this.b, this.a);
                    break;
                case 'hsl':
                    return this.rgba2hsl(this.r, this.g, this.b, this.a);
                    break;
                case 'hsv':
                    return this.rgba2hsv(this.r, this.g, this.b, this.a);
                    break;
                case 'hex':
                    return this.rgba2hex(this.r, this.g, this.b, this.a);
                    break;
            }
        }

        /**
         * Parse RGBA
         * @param 	{string}	rgbaString		The rgba string (rgba(r,g,b,a)) to parse
         * @return 	{object} 					The rgba object representation
         */

    }, {
        key: 'parseRgba',
        value: function parseRgba(rgbaString) {
            rgbaString = rgbaString.toLowerCase();
            var string = rgbaString.replace('rgba(', '').replace(')', '').replace(/\s/g, '');
            var array = string.split(',');
            return {
                r: parseInt(array[0]),
                g: parseInt(array[1]),
                b: parseInt(array[2]),
                a: parseInt(array[3])
            };
        }

        /**
         * Parse HSL
         * @param 	{string}	hslString			The hsl string (hsl(h,s,l)) to parse
         * @return 	{object} 						The hsl object representation
         */

    }, {
        key: 'parseHsl',
        value: function parseHsl(hslString) {
            hslString = hslString.toLowerCase();
            var string = hslString.replace('hsl(', '').replace(')', '').replace(/\s/g, '');
            var array = string.split(',');
            return {
                h: parseFloat(array[0]),
                s: parseFloat(array[1]),
                l: parseFloat(array[2])
            };
        }

        /**
         * Parse HSV
         * @param 	{string}		hsvString			The hsv string (hsv(h,s,v)) to parse
         * @return 	{object}							The hsv object representation
         */

    }, {
        key: 'parseHsv',
        value: function parseHsv(hsvString) {
            hsvString = hsvString.toLowerCase();
            var string = hsvString.replace('hsv(', '').replace(')', '').replace(/\s/g, '');
            var array = string.split(',');
            return {
                h: parseFloat(array[0]),
                s: parseFloat(array[1]),
                v: parseFloat(array[2])
            };
        }

        /**
         * RGBA to HEX
         * @param	{Number}	r		The red value between 0-255
         * @param	{Number}	g		The green value between 0-255
         * @param	{Number}	b		The blue value between 0-255
         * @param	{Number}	a		The alpha value between 0-100|0-1
         * @return 	{string}			The hex string representation like #ff004f
         */

    }, {
        key: 'rgba2hex',
        value: function rgba2hex(r, g, b) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            var alpha = '';
            if (a != 1 && a != 100) {
                if (a < 1) {
                    a = 255 * a;
                } else if (a > 1) {
                    a = 255 / 100 * a;
                }
                a = Math.round(a);
                alpha = parseInt(a, 10).toString(16);
            }
            return '#' + ("0" + parseInt(r, 10).toString(16)).slice(-2) + ("0" + parseInt(g, 10).toString(16)).slice(-2) + ("0" + parseInt(b, 10).toString(16)).slice(-2) + alpha;
        }

        /**
         * RGBA to RGBA
         * @param	{Number}	r 		The red value between 0-255
         * @param	{Number} 	g 		The green value between 0-255
         * @param	{Number} 	b 		The blue value between 0-255
         * @param	{Number} 	a 		The alpha value between 0-100|0-1
         * @return 	{object} 			The rgba object representation
         */

    }, {
        key: 'rgba2rgba',
        value: function rgba2rgba(r, g, b, a) {
            a = parseFloat(a);
            if (a > 1) a = 1 / 100 * a;
            return {
                r: r,
                g: g,
                b: b,
                a: a
            };
        }

        /**
         * Hex to RGBA
         * @param	{string} 	hex 		The hex string to convert
         * @return 	{object} 				The rgba object representation
         */

    }, {
        key: 'hex2rgba',
        value: function hex2rgba(hex) {
            hex = hex.replace('#', '');
            var r = parseInt(hex.substring(0, 2), 16);
            var g = parseInt(hex.substring(2, 4), 16);
            var b = parseInt(hex.substring(4, 6), 16);
            var a = 1;
            if (hex.length == 8) {
                a = 1 / 255 * parseInt(hex.substring(6, 8), 16);
            }
            return {
                r: r,
                g: g,
                b: b,
                a: a
            };
        }

        /**
         * HSV to RGBA
         * @param	{Number} 	h 		The hue value between 0-360
         * @param	{Number} 	s 		The saturation value between 0-100|0-1
         * @param	{Number} 	v 		The value value between 0-100|0-1
         * @param	{Number} 	a 		The alpha value between 0-100|0-1
         * @return 	{object} 			The rgba object representation
         */

    }, {
        key: 'hsv2rgba',
        value: function hsv2rgba(h, s, v) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            // manage arguments
            h = parseFloat(h);
            s = parseFloat(s);
            v = parseFloat(v);
            a = parseFloat(a);
            if (h > 1) h = 1 / 360 * h;
            if (s > 1) s = 1 / 100 * s;
            if (v > 1) v = 1 / 100 * v;
            if (a > 1) a = 1 / 100 * a;

            var r, g, b, i, f, p, q, t;
            i = Math.floor(h * 6);
            f = h * 6 - i;
            p = v * (1 - s);
            q = v * (1 - f * s);
            t = v * (1 - (1 - f) * s);
            switch (i % 6) {
                case 0:
                    r = v, g = t, b = p;
                    break;
                case 1:
                    r = q, g = v, b = p;
                    break;
                case 2:
                    r = p, g = v, b = t;
                    break;
                case 3:
                    r = p, g = q, b = v;
                    break;
                case 4:
                    r = t, g = p, b = v;
                    break;
                case 5:
                    r = v, g = p, b = q;
                    break;
            }
            return {
                r: Math.round(r * 255),
                g: Math.round(g * 255),
                b: Math.round(b * 255),
                a: a
            };
        }

        /**
         * HSL to RGBA
         * @param	{Number} 	h		The hue value between 0-360
         * @param	{Number} 	s 		The saturation value between 0-100|0-1
         * @param	{Number} 	l 		The luminence value between 0-100|0-1
         * @param	{Number} 	a 		The alpha value between 0-100|0-1
         * @return 	{object} 			The rgba object representation
         */

    }, {
        key: 'hsl2rgba',
        value: function hsl2rgba(h, s, l) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            // manage arguments
            h = parseFloat(h);
            s = parseFloat(s);
            l = parseFloat(l);
            a = parseFloat(a);
            if (h > 1) h = 1 / 360 * h;
            if (s > 1) s = 1 / 100 * s;
            if (l > 1) l = 1 / 100 * l;
            if (a > 1) a = 1 / 100 * a;

            var r = void 0,
                g = void 0,
                b = void 0;
            if (s == 0) {
                r = g = b = l; // achromatic
            } else {
                var hue2rgb = function hue2rgb(p, q, t) {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            return {
                r: Math.round(r * 255),
                g: Math.round(g * 255),
                b: Math.round(b * 255),
                a: a
            };
        }

        /**
         * RGBA to HSV
         * @param	{Number} 	r 		The red value between 0-255
         * @param	{Number} 	g 		The green value between 0-255
         * @param	{Number} 	b 		The blue value between 0-255
         * @param	{Number} 	a 		The alpha value between 0-100|0-1
         * @return 	{object} 			The hsv object representation
         */

    }, {
        key: 'rgba2hsv',
        value: function rgba2hsv(r, g, b) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            var min = Math.min(r, g, b),
                max = Math.max(r, g, b),
                delta = max - min,
                h = void 0,
                s = void 0,
                v = max;

            v = Math.floor(max / 255 * 100);
            if (max != 0) s = Math.floor(delta / max * 100);else {
                // black
                return [0, 0, 0];
            }

            if (r == max) h = (g - b) / delta; // between yellow & magenta
            else if (g == max) h = 2 + (b - r) / delta; // between cyan & yellow
                else h = 4 + (r - g) / delta; // between magenta & cyan

            h = Math.floor(h * 60); // degrees
            if (h < 0) h += 360;

            return {
                h: h,
                s: s,
                v: v
            };
        }

        /**
         * RGBA to HSL
         * @param	{Number} 	r 		The red value between 0-255
         * @param	{Number} 	g 		The green value between 0-255
         * @param	{Number} 	b 		The blue value between 0-255
         * @param	{Number} 	a 		The alpha value between 0-100|0-1
         * @return 	{object} 			The hsl object representation
         */

    }, {
        key: 'rgba2hsl',
        value: function rgba2hsl(r, g, b) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            r /= 255, g /= 255, b /= 255;
            var max = Math.max(r, g, b),
                min = Math.min(r, g, b);
            var h = void 0,
                s = void 0,
                l = (max + min) / 2;

            if (max == min) {
                h = s = 0; // achromatic
            } else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }
            return {
                h: Math.floor(h * 360),
                s: Math.floor(s * 100),
                l: Math.floor(l * 100)
            };
        }

        /**
         * To hex
         * @return 	{string} 		The hex string representation
         */

    }, {
        key: 'toHex',
        value: function toHex() {
            return this.convert2('hex');
        }

        /**
         * To hsl
         * @return 	{object} 		The hsl object representation
         */

    }, {
        key: 'toHsl',
        value: function toHsl() {
            return this.convert2('hsl');
        }

        /**
         * To hsv
         * @return 	{object} 		The hsv object representation
         */

    }, {
        key: 'toHsv',
        value: function toHsv() {
            return this.convert2('hsv');
        }

        /**
         * To rgba
         * @return 	{object} 		The rgba object representation
         */

    }, {
        key: 'toRgba',
        value: function toRgba() {
            return this.convert2('rgba');
        }

        /**
         * Get the red value
         * @type 	{Number}
         */

    }, {
        key: 'reset',


        /**
         * Reset to the original color
         */
        value: function reset() {
            // parse again the color
            this._parse(this._originalSColor);
        }

        /**
         * Desaturate
         * @param 	{Number} 	amount 		The amount of desaturation wanted between 0-100
         * @return 	{SColor} 				A new SColor instance of the updated color
         */

    }, {
        key: 'desaturate',
        value: function desaturate(amount) {
            amount = parseInt(amount);
            var n = new SColor(this.toHex());
            n.s -= amount;
            return n;
        }

        /**
         * Saturate
         * @param 	{Number} 	amount 		The amount of saturation wanted between 0-100
         * @return 	{SColor} 				A new SColor instance of the updated color
         */

    }, {
        key: 'saturate',
        value: function saturate(amount) {
            amount = parseInt(amount);
            var n = new SColor(this.toHex());
            n.s += amount;
            return n;
        }

        /**
         * Grayscale
         * @return 	{SColor} 			A new SColor instance of the updated color
         */

    }, {
        key: 'grayscale',
        value: function grayscale() {
            var n = new SColor(this.toHex());
            n.s = 0;
            return n;
        }

        /**
         * Spin
         * @param 	{Number} 	amount 			The amount of hue spin wanted between 0-360
         * @return 	{SColor} 					A new SColor instance of the updated color
         */

    }, {
        key: 'spin',
        value: function spin(amount) {
            amount = parseInt(amount);
            var hue = this.h;
            var newHue = hue + amount;
            if (newHue > 360) {
                newHue -= 360;
            }
            var n = new SColor(this.toHex());
            n.h = newHue;
            return n;
        }

        /**
         * Transparentize
         * @param 	{Number} 		amount 			The amount of transparence to apply between 0-100|0-1
         * @return 	{SColor} 						A new SColor instance of the updated color
         */

    }, {
        key: 'transparentize',
        value: function transparentize(amount) {
            amount = parseFloat(amount);
            var n = new SColor(this.toHex());
            n.a -= amount;
            return n;
        }

        /**
         * Set the alpha
         * @param 	{Number} 	alpha 			The new alpha value to apply between 0-100|0-1
         * @return 	{SColor} 					A new SColor instance of the updated color
         */

    }, {
        key: 'alpha',
        value: function alpha(_alpha) {
            _alpha = parseFloat(_alpha);
            var n = new SColor(this.toHex());
            n.a = _alpha;
            return n;
        }

        /**
         * Set the opacity (alias for alpha)
         * @param 	{Number} 	opacity 		The new opacity value to apply between 0-100|0-1
         * @return 	{SColor} 					A new SColor instance of the updated color
         */

    }, {
        key: 'opacity',
        value: function opacity(_opacity) {
            return this.alpha(_opacity);
        }

        /**
         * Opacify
         * @param 	{Number} 	amount 		The amount of transparence to remove between 0-100|0-1
         * @return 	{SColor} 				A new SColor instance of the updated color
         */

    }, {
        key: 'opacify',
        value: function opacify(amount) {
            amount = parseFloat(amount);
            var n = new SColor(this.toHex());
            n.a += amount;
            return n;
        }

        /**
         * Darken
         * @param 	{Number} 	amount 		The amount of darkness (of the nightmare of the shadow) to apply between 0-100
         * @return 	{SColor} 				A new SColor instance of the updated color
         */

    }, {
        key: 'darken',
        value: function darken(amount) {
            amount = parseInt(amount);
            var n = new SColor(this.toHex());
            n.l -= amount;
            return n;
        }

        /**
         * Lighten
         * @param 	{Number} 	amount 		The amount of lightness (of the sky of the angels) to apply between 0-100
         * @return 	{SColor} 				A new SColor instance of the updated color
         */

    }, {
        key: 'lighten',
        value: function lighten(amount) {
            amount = parseInt(amount);
            var n = new SColor(this.toHex());
            n.l += amount;
            return n;
        }

        /**
         * To hex string
         * @return 	{string} 		The hex string representation of the color
         */

    }, {
        key: 'toHexString',
        value: function toHexString() {
            return this.convert2('hex');
        }

        /**
         * To rgba string
         * @return 	{string} 		The rgba string representation of the color
         */

    }, {
        key: 'toRgbaString',
        value: function toRgbaString() {
            return 'rgba(' + this._r + ',' + this._g + ',' + this._b + ',' + this._a + ')';
        }

        /**
         * To hsl string
         * @return 	{string} 		The hsl string representation of the color
         */

    }, {
        key: 'toHslString',
        value: function toHslString() {
            var hsl = this.convert2('hsl');
            return 'hsl(' + hsl.h + ',' + hsl.s + ',' + hsl.l + ')';
        }

        /**
         * To hsv string
         * @return 	{string} 		The hsv string representation of the color
         */

    }, {
        key: 'toHsvString',
        value: function toHsvString() {
            var hsv = this.convert2('hsv');
            return 'hsv(' + hsv.h + ',' + hsv.s + ',' + hsv.v + ')';
        }

        /**
         * To string
         * @return 	{string} 		The rgba string representation of the color
         */

    }, {
        key: 'toString',
        value: function toString() {
            var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (!format) {
                format = SColor.toStringFormat;
            }
            switch (format) {
                case 'hex':
                    return this.toHexString();
                    break;
                case 'hsl':
                    return this.toHslString();
                    break;
                case 'hsv':
                    return this.toHsvString();
                    break;
                case 'rgba':
                default:
                    return this.toRgbaString();
                    break;
            }
        }
    }, {
        key: 'r',
        get: function get() {
            return this._r;
        },
        set: function set(value) {
            value = parseInt(value);
            value = value > 255 ? 255 : value;
            this._r = value;
        }

        /**
         * Get the green value
         * @type 	{Number}
         */

    }, {
        key: 'g',
        get: function get() {
            return this._g;
        },
        set: function set(value) {
            value = parseInt(value);
            value = value > 255 ? 255 : value;
            this._g = value;
        }

        /**
         * Get the blue value
         * @type 	{Number}
         */

    }, {
        key: 'b',
        get: function get() {
            return this._b;
        },
        set: function set(value) {
            value = parseInt(value);
            value = value > 255 ? 255 : value;
            this._b = value;
        }

        /**
         * Get the alpha value
         * @type 	{Number}
         */

    }, {
        key: 'a',
        get: function get() {
            return this._a;
        },
        set: function set(value) {
            value = parseFloat(value);
            value = value > 1 ? 1 / 100 * value : value;
            value = value > 1 ? 1 : value;
            this._a = value;
        }

        /**
         * The luminence value
         * @type 	{Number}
         */

    }, {
        key: 'l',
        get: function get() {
            return this.convert2('hsl').l;
        },
        set: function set(value) {
            var hsl = this.convert2('hsl');
            value = parseInt(value);
            value = value > 100 ? 100 : value;
            hsl.l = value;
            var rgba = this.hsl2rgba(hsl.h, hsl.s, hsl.l);
            this.r = rgba.r;
            this.g = rgba.g;
            this.b = rgba.b;
        }

        /**
         * The saturation value
         * @type 	{Number}
         */

    }, {
        key: 's',
        get: function get() {
            return this.convert2('hsl').s;
        },
        set: function set(value) {
            var hsl = this.convert2('hsl');
            value = parseInt(value);
            value = value > 100 ? 100 : value;
            hsl.s = value;
            var rgba = this.hsl2rgba(hsl.h, hsl.s, hsl.l);
            this.r = rgba.r;
            this.g = rgba.g;
            this.b = rgba.b;
        }

        /**
         * The value
         * @type 	{Number}
         */

    }, {
        key: 'v',
        get: function get() {
            return this.convert2('hsv').v;
        },
        set: function set(value) {
            var hsv = this.convert2('hsv');
            value = parseInt(value);
            value = value > 100 ? 100 : value;
            hsv.v = value;
            var rgba = this.hsv2rgba(hsv.h, hsv.s, hsv.v);
            this.r = rgba.r;
            this.g = rgba.g;
            this.b = rgba.b;
        }

        /**
         * Get the hue
         * @type 	{Number}
         */

    }, {
        key: 'h',
        get: function get() {
            return this.convert2('hsl').h;
        },
        set: function set(value) {
            var hsl = this.convert2('hsl');
            value = parseInt(value);
            value = value > 360 ? 360 : value;
            hsl.h = value;
            var rgba = this.hsl2rgba(hsl.h, hsl.s, hsl.l);
            this.r = rgba.r;
            this.g = rgba.g;
            this.b = rgba.b;
        }
    }]);

    return SColor;
}();

// inject sugar css colors into class


SColor.colors = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred ": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgrey": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370d8",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#d87093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
};
SColor.toStringFormat = 'rgba';
(0, _domReady2.default)(function () {
    // get settings
    if (!_sSettings2.default || !_sSettings2.default.colors) return;

    // loop on each colors
    for (var colorName in _sSettings2.default.colors) {
        var color = _sSettings2.default.colors[colorName];
        if (!color) return;

        if (color.color) {
            SColor.colors[colorName] = color.color;
        }
        // modifiers
        if (color.modifiers) {
            // loop on modifiers
            for (var modifierName in color.modifiers) {
                var modifierColor = color.modifiers[modifierName];
                SColor.colors[colorName + '--' + modifierName] = modifierColor;
            }
        }
    }
});

// export class
exports.default = SColor;