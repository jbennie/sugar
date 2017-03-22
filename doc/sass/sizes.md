# Sizes (ratios)

This concept can be a little tricky to understand at first but it will be a lot clearer when using the spaces, etc...

## Features

- Allows you to register some sizes that you will use across your website using names
- Default sizes names available:
	- **smaller** : 0.3
	- **small** : 0.6
	- **default** : 1
	- **medium** : 1.4
	- **big** : 2
	- **bigger** : 3
- Allows you to specify ratio between sizes
- Allows you to keep consistency across your entire website

## Setting up your sizes

To register a new size, or to override an existing one, use the [s-setup](../src/sass/core/mixins/_s-setup.md) mixin like so:

```scss
@include s-setup((
	sizes : (
		small : .5,
		bigger : 4
	)
));
```

> Sizes are unitless numbers. They are ratios.
>
> The **default** size is required and cannot be changed. His value is **1** and will stay like this forever...

## Helper classes

Sugar have some [helper classes](helper-classes.md) that you can easily grab to use into your html. A bunch of these classes are sizes related like:

- ```.s-{size}``` : Apply a font-size of {size}rem
- ```.s-{size}-rel``` : Apply a font-size of {size}em

> These classes are stored inside the ```sugar.size``` namespace. Check out the [helper classes](helper-classes.md) documentation for more info...
