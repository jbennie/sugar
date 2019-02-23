# s-ratio

Apply a ratio css styling. This will apply a before or after content that will make the element keep the specified ratio.
The content need to be displayed as absolute top left and fit in size.



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$ratio  |  **{ Number }**  |  The ratio to keep like 16/9, etc...  |  required  |

### Example
```scss
	.my-cool-element {
	@include s-ratio(16/9);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)