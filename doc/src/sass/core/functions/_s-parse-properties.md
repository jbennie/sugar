# s-parse-properties

Parse a given string/list properties and return the Map corresponding to the Map description



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$properties  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The properties to parse  |  required  |
$descriptor  |  **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }**  |  The descriptor map to use to parse the properties  |  required  |

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The properties in map format

### Example
```scss
	s-parse-properties(10px hello -delay 20s, (
 	myNumber : Number,
 	myOtherNumber : Number,
 	myString : String,
 	myCoolVar : String,
 	delay : second
));
// => (
//  	myNumber : 10px,
// 	myString : hello,
// 	delay : 20s
// )
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)