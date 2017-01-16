# Spaces

- Let you specify the default space for your website, then the other spaces will be interpolated from the sizes ratios
	- Default space : 1rem (customizable as well)
	- Big space will be 1rem * 2.4 = 2.4rem
- Each spaces can be hard coded to bypass the sizes ratios
	- Use the ```@include s-setup()``` mixin to do so
- Provide some helper classes like:
	- ```.m-b``` : Default margin bottom
	- ```.m-t-small``` : Small margin top
	- ```.m-l-big``` : Big margin left
	- ```.p-bigger``` : Bigger padding (top, right, bottom, left)
	- ```.p-s-small``` : Small padding side (left, right)
	- Etc...
- Can be applied across your codebase with the ```s-space($size)``` function
