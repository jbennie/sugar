# Filters

Sugar allows you to easily manage and organize your filters by giving them a name.

## Features

- Allow you to register some filters inside the settings using names
- Apply your filters with the ```@include s-filter($filterName)``` mixin
- Filters examples
	- blured : blur(10px)
	- coolFilter : box-shadow(black 0 0 10px) grayscale(20%)
	- Etc...
- Apply multiple filters at once
	- ```@include s-filter(blured coolFilter);```

## Setting up your filters

To register a new filter, use the [s-setup](../src/sass/core/mixins/_s-setup.md) mixin like so:

```scss
@include s-setup((
	filters : (
		my-cool-filter : blur(10px) box-shadow(black 0 0 5px),
		another-cool-filder : text-shadow(black 0 0 4px)
	)
));
```

## Use your filters

To use your filters inside your codebase, simply use the [s-filter](../src/sass/core/mixins/_s-filter.md) mixin like so:

```scss
.my-cool-element {
	// apply a registered filter
	@include s-filter(my-cool-filter);
	// compose a filter
	@include s-filter(another-cool-filter blur(5px));
}
```

## Helper classes

Sugar have some [helper classes](helper-classes.md) that you can easily grab to use into your html. A bunch of these classes are filters related like:

- ```.fi-{filter-name}``` : Apply a specific filter

> These classes are stored inside the ```sugar.filter``` namespace. Check out the [helper classes](helper-classes.md) documentation for more info...
