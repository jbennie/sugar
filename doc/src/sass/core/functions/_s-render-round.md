# s-render-round

Return the passed values in the same unit but that has been rounded on the corresponding px value
This ensure that your passed value will be a round px value for final rander in the viewport



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$value  |  **{ Number }**  |  The value to process  |  required  |

Return **{ Number }** The rounded value in same input unit but px rounded

### Example
```scss
	// if settings.typography.font-size == 16px
s-render-round(5.2rem);
// 1. transform to px values : 5.2 * 16px = 83.2px
// 2. round even the px value : 83px
// 3. transform to passed unit value : 84px / 16px = 5.1875rem
```
Author : Olivier Bossel <olivier.bossel@gmail.com>