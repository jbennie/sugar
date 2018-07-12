# s-is

Check if the passed value is of a certain type

Here's the available types that you can check
- mixed => mean anything
- null
- url
- px
- pt
- rem
- em
- percent | %
- vw
- vh
- ex
- ch
- cm
- mm
- in
- pc
- s | second
- boolean | bool
- function
- number
- int | integer
- string
- color
- list
- map
- deg | degree
- list-{type} => check if is a list of the specified type
- map-{type} => check if is a map of the specified type



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$value  |  **{ Mixed }**  |  The value to check  |  required  |
$type  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The type to check  |  required  |

Return **{ Boolean }** true if match the type, false if not

### Example
```scss
	s-is(hello, string) // => true
s-is('hello', string) // => true
s-is(#fff, color) // => true
s-is(hello #fff, list-color) // => false
s-is(#fff #ddd, list-color) // => true
// etc...
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)