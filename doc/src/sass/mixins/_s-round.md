# s-round

Apply some css to have a rounded element with already an overflow on it



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$size  |  **{ Number }**  |  The size (width and height) of the element wanted  |  optional  |  null
$width  |  **{ Number }**  |  The width of the element wanted  |  optional  |  null
$height  |  **{ Number }**  |  The height of the element wanted  |  optional  |  null

### Example
```scss
	.my-cool-image {
	@include s-round(100px);

	img {
		@include s-size(cover);
	}
}
```