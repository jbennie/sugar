# s-convert

Convert a passed value to the wanted unit
The conversion between some units that depends on a font-size will take the settings.typography.font-size value as reference.

Available conversions
- from px
	- to em
	- to rem
	- to pt
	- to %

- from em
	- to rem
	- to px
	- to pt
	- to %

- from pt
	- to em
	- to rem
	- to px
	- to pt
	- to %

- from rem
	- to em
	- to px
	- to pt
	- to %



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$value  |  **{ Number }**  |  The value to convert  |  required  |
$unit  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The unit in which to convert the value  |  required  |

Return **{ Number }** The converted value

### Example
```scss
	// if the settings.typography.font-size === 16px
s-convert(24px, rem) // 1.5rem
s-convert(3rem, pt) // 36pt
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)