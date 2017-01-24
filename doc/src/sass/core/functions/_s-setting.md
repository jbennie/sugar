# $_sugar-settings-cache

Get a settings from the global settings stack



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$path  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The setting path wanted separated by dots  |  required  |
$context  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The context name to get the setting  |  optional  |  s-context()

Return **{ Mixed }** The setting value¨

### Example
```scss
	$font-size : s-setting('typography.font-size');
// etc...
```
Author : Olivier Bossel <olivier.bossel@gmail.com>