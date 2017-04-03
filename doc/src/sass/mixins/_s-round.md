# s-round




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