# s-render-round-even

Return the passed values in the same unit but that has been even rounded on the corresponding px value
This ensure that your passed value will be a round px value for final rander in the viewport



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$value  |  **{ Number }**  |  The value to process  |  required  |

Return **{ Number }** The rounded value in same input unit but px rounded

### Example
```scss
	// if settings.typography.font-size == 16px
s-render-round-even(5.2rem);
// 1. transform to px values : 5.2 * 16px = 83.2px
// 2. round even the px value : 84px
// 3. transform to passed unit value : 84px / 16px = 5.25rem
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)