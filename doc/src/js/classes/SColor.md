# Properties


## toStringFormat

Default toString format

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

**Static**

Default : **rgba**


## r

Get the red value

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


## g

Get the green value

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


## b

Get the blue value

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


## a

Get the alpha value

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


## l

The luminence value

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


## s

The saturation value

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


## v

The value

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


## h

Get the hue

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


# Methods


## constructor

Constructor


## convert2

Concert color


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
format  |  **{ string }**  |  The format wanted as output like (rgba,hsl,hsv and hex)  |  required  |

Return **{ object }** The color in wanted object format


## parseRgba

Parse RGBA


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
rgbaString  |  **{ string }**  |  The rgba string (rgba(r,g,b,a)) to parse  |  required  |

Return **{ object }** The rgba object representation


## parseHsl

Parse HSL


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
hslString  |  **{ string }**  |  The hsl string (hsl(h,s,l)) to parse  |  required  |

Return **{ object }** The hsl object representation


## parseHsv

Parse HSV


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
hsvString  |  **{ string }**  |  The hsv string (hsv(h,s,v)) to parse  |  required  |

Return **{ object }** The hsv object representation


## rgba2hex

RGBA to HEX


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
r  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The red value between 0-255  |  required  |
g  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The green value between 0-255  |  required  |
b  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The blue value between 0-255  |  required  |
a  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The alpha value between 0-100|0-1  |  required  |

Return **{ string }** The hex string representation like #ff004f


## rgba2rgba

RGBA to RGBA


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
r  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The red value between 0-255  |  required  |
g  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The green value between 0-255  |  required  |
b  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The blue value between 0-255  |  required  |
a  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The alpha value between 0-100|0-1  |  required  |

Return **{ object }** The rgba object representation


## hex2rgba

Hex to RGBA


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
hex  |  **{ string }**  |  The hex string to convert  |  required  |

Return **{ object }** The rgba object representation


## hsv2rgba

HSV to RGBA


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
h  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The hue value between 0-360  |  required  |
s  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The saturation value between 0-100|0-1  |  required  |
v  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The value value between 0-100|0-1  |  required  |
a  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The alpha value between 0-100|0-1  |  required  |

Return **{ object }** The rgba object representation


## hsl2rgba

HSL to RGBA


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
h  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The hue value between 0-360  |  required  |
s  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The saturation value between 0-100|0-1  |  required  |
l  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The luminence value between 0-100|0-1  |  required  |
a  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The alpha value between 0-100|0-1  |  required  |

Return **{ object }** The rgba object representation


## rgba2hsv

RGBA to HSV


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
r  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The red value between 0-255  |  required  |
g  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The green value between 0-255  |  required  |
b  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The blue value between 0-255  |  required  |
a  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The alpha value between 0-100|0-1  |  required  |

Return **{ object }** The hsv object representation


## rgba2hsl

RGBA to HSL


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
r  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The red value between 0-255  |  required  |
g  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The green value between 0-255  |  required  |
b  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The blue value between 0-255  |  required  |
a  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The alpha value between 0-100|0-1  |  required  |

Return **{ object }** The hsl object representation


## toHex

To hex

Return **{ string }** The hex string representation


## toHsl

To hsl

Return **{ object }** The hsl object representation


## toHsv

To hsv

Return **{ object }** The hsv object representation


## toRgba

To rgba

Return **{ object }** The rgba object representation


## reset

Reset to the original color


## desaturate

Desaturate


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
amount  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The amount of desaturation wanted between 0-100  |  required  |

Return **{ object }** The color instance to maintain chainability


## saturate

Saturate


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
amount  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The amount of saturation wanted between 0-100  |  required  |

Return **{ object }** The color instance to maintain chainability


## grayscale

Grayscale

Return **{ object }** The color instance to maintain chainability


## spin

Spin


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
amount  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The amount of hue spin wanted between 0-360  |  required  |

Return **{ object }** The color instance to maintain chainability


## transparentize

Transparentize


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
amount  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The amount of transparence to apply between 0-100|0-1  |  required  |

Return **{ object }** The color instance to maintain chainability


## alpha

Set the alpha


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
alpha  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The new alpha value to apply between 0-100|0-1  |  required  |

Return **{ object }** The color instance to maintain chainability


## opacity

Set the opacity (alias for alpha)


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
opacity  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The new opacity value to apply between 0-100|0-1  |  required  |

Return **{ object }** The color instance to maintain chainability


## opacify

Opacify


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
amount  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The amount of transparence to remove between 0-100|0-1  |  required  |

Return **{ object }** The color instance to maintain chainability


## darken

Darken


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
amount  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The amount of darkness (of the nightmare of the shadow) to apply between 0-100  |  required  |

Return **{ object }** The color instance to maintain chainabiliy


## lighten

Lighten


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
amount  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The amount of lightness (of the sky of the angels) to apply between 0-100  |  required  |

Return **{ object }** The color instance to maintain chainability


## toHexString

To hex string

Return **{ string }** The hex string representation of the color


## toRgbaString

To rgba string

Return **{ string }** The rgba string representation of the color


## toHslString

To hsl string

Return **{ string }** The hsl string representation of the color


## toHsvString

To hsv string

Return **{ string }** The hsv string representation of the color


## toString

To string

Return **{ string }** The rgba string representation of the color