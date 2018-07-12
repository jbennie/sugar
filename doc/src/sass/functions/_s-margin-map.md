# s-margin-map

Parse and return the Map respresentation of a margin property
The $margin argument will be parsed with the [s-parse-properties](../core/functions/_s-parse-properties.scss) function.



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$margin  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) , Number }**  |  The margin property to parse  |  required  |

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The map representation

### Example
```scss
	s-margin-map(10px); // => ( top:10px, right:10px, bottom:10px, left:10px )
s-margin-map(10px 20px); // => ( top:10px, right:20px, bottom:10px, left:20px )
s-margin-map(5px 10px 15px 20px); // => ( top:5px, right:10px, bottom:15px, left:20px )
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)