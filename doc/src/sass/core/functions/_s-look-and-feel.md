## Functions


### s-look-and-feel

Return a settings.look-and-feel stack value



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The look and feel value name  |  required  |
$size  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The size wanted.  |  optional  |  default

Return **{ Number }** The look and feel value in em

#### Example
```scss
	.my-cool-element {
		padding : s-look-and-feel(padding-horizontal) s-look-and-feel(padding-vertical);
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>