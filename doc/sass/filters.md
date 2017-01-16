# Filters

- Allow you to register some filters inside the settings using names
- Apply your filters with the ```@include s-filter($filterName)``` mixin
- Filters examples
	- blured : blur(10px)
	- coolFilter : box-shadow(black 0 0 10px) grayscale(20%)
	- Etc...
- Apply multiple filters at once
	- ```@include s-filter(blured coolFilter);```
