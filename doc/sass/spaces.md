# Spaces

Sugar provide a space feature that let you apply some margins, paddings, etc... using your [sizes](sizes.md) names.

## Features

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

## Bypass the sizes interpolation

Yu can easily hard code one or more spaces to avoid the interpolation from the [sizes](sizes.md). Just do it like so:

```scss
@include s-setup((
	spaces : (
		small : 0.8rem,
		big : 3rem
	)
));
```

## Use your spaces

To use your spaces inside your codebase, simply use the [s-space](../src/sass/core/function/_s-space.md) function like so:

```scss
.my-cool-element {
	margin-bottom : s-space(big);
}
```

## Helper classes

Sugar have some [helper classes](helper-classes.md) that you can easily grab to use into your html. These classes are stored inside. A bunch of these classes are spaces related like:

- ```.m-t-{space}``` : Margin top
- ```.m-r-{space}``` : Margin right
- ```.m-b-{space}``` : Margin bottom
- ```.m-l-{space}``` : Margin left
- ```.m-s-{space}``` : Margin side
- ```.p-t-{space}``` : Padding top
- ```.p-r-{space}``` : Padding right
- ```.p-b-{space}``` : Padding bottom
- ```.p-l-{space}``` : Padding left
- ```.p-s-{space}``` : Padding side

> These classes are stored inside the ```sugar.padding``` and ```sugar.margin``` namespaces. Check out the [helper classes](helper-classes.md) documentation for more info...
