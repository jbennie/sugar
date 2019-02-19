# s-color

Get a registered color by name or wrap a new color into a s-color call
to manipulate it with ease.
Supported actions :
- hue {Deg}
- lighten {Percent}
- darken {Percent}
- saturate {Percent}
- desaturate {Percent}
- grayscale {Boolean}
- complement {Boolean}
- invert {Boolean}
- opacity {Percent}
- mix {Color}
- lightness {Percent}
- saturation {Percent}



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color name or the color value to manipulate  |  required  |
$modifier  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The color modifier to apply. Can be a registered modifier name or a modifier list  |  optional  |  null

Return **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }** The actual color value

### Example
```scss
	// default color (settings.colors.default)
$myColor : s-color(default);
// primary color (settings.colors.primary)
$primary : s-color(primary);
// manipulate
$primary-dark : s-color(primary, -darken 10%);
// registered modifier
$primary-light : s-color(primary, light);
// $name as list
$modified primary : s-color((primary, -darken 10%));
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)