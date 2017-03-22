# Transitions

Sugar allows you to easily manage and organize your transitions by giving them a name.

## Features

- Allow you to register some transitions inside the settings using names
- Apply your transitions with the [@include s-transition($transitionName)](../src/sass/core/mixins/_s-transition.md) mixin
- Base transitions available:
	- slow : all .3s ease-in-out 0s
	- default : all .2s ease-in-out 0s
	- fast : all .1s ease-in-out 0s
- Compose transitions
	- ```@include s-transition(fast opacity);```

## Setting up your transitions

To register a new filter, use the [s-setup](../src/sass/core/mixins/_s-setup.md) mixin like so:

```scss
@include s-setup((
	transitions : (
		fast : all .1s ease-in-out 0s
	)
));
```

## Use your transitions

To use your transitions inside your codebase, simply use the [s-transition](../src/sass/core/mixins/_s-transition.md) mixin like so:

```scss
.my-cool-element {
	// apply a registered transition
	@include s-transition(fast);
	// compose a transition
	@include s-transition(fast border-left);
}
```

## Helper classes

Sugar have some [helper classes](helper-classes.md) that you can easily grab to use into your html. A bunch of these classes are transitions related like:

- ```.tr-{filter-name}``` : Apply a specific transition

> These classes are stored inside the ```sugar.transition``` namespace. Check out the [helper classes](helper-classes.md) documentation for more info...
