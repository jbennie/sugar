# s-border-radius

Apply some border radius


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$radius  |  **{ Number }**  |  The radius to apply globally  |  optional  |  null
$top  |  **{ Number }**  |  The radius to apply on top corners  |  optional  |  null
$right  |  **{ Number }**  |  The radius to apply on right corners  |  optional  |  null
$bottom  |  **{ Number }**  |  The radius to apply on bottom corners  |  optional  |  null
$left  |  **{ Number }**  |  The radius to apply on left corners  |  optional  |  null
$top-left  |  **{ Number }**  |  The radius to apply on top-left corners  |  optional  |  null
$top-right  |  **{ Number }**  |  The radius to apply on top-right corners  |  optional  |  null
$bottom-left  |  **{ Number }**  |  The radius to apply on bottom-left corners  |  optional  |  null
$bottom-right  |  **{ Number }**  |  The radius to apply on bottom-right corners  |  optional  |  null

### Example
```scss
	.my-cool-item {
	// apply on top left and right corners
	@include s-border-radius(
		$top : 10px;
	);
	// apply on each corners
	@include s-border-radius(10px);
	// etc...
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)