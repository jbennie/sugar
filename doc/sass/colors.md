# Colors

Sugar provide a nice way map your colors to names in order to use them inside your codebase with ease.

## Features

- Default customizable colors
	- default / title / text / link / primary / secondary / success / warning / error / info
- Register more colors if needed
- Color modifiers
	- Allows you to make a variant of a color by changing his opacity, lightness, etc...
- Simple ```s-color($name, $modifier)``` function to access your colors
- Keep your colors organized
- Provide helper classes like ```.c-primary```, ```.bkg-primary```, ```.c-secondary```, etc...
	- Classes are generated depending on your registered colors

## Default Sugar colors

Here's the default colors that are defined in Sugar out of the box. You can as well customize them when needed.

- **default** : Base color
- **title** : Color used for titles
- **text** : Color used for texts
- **link** : Color used for links (same as primary by default)
- **primary** : Primary color
- **secondary** : Secondary color
- **success** : Success color
- **warning** : Warning color
- **error** : Error color
- **info** : Info color

> Keeping these names as base will allows you to work in team with ease

## Setting up your colors

To register of modify an existing color, you have to use the [s-setup](../src/sass/core/mixins/_s-setup.md) mixin like so:

```scss
@include s-setup((
	colors : (
		// update existing color
		primary : (
			color : #ff4455
		),
		// create your own color
		cool: (
			color : #f3f5f7,
			// register named modifiers
			modifiers : (
				light : -lighten 10%,
				dark : -darken 10%
			)
		)
	)
));
```

## Accessing your colors

To access your colors inside your codebase, simple use the **[s-color](../src/sass/core/functions/_s-color.md)** function like so:

```scss
.my-cool-element {
	color : s-color(primary);
	// access registered modifiers
	color : s-color(cool, dark);
}
```

## Modifiers

Each colors can have a modifier. A modifier is a list of actions to make on the color that will result in a modifier one. Here's some examples:

```scss
s-color(primary, -darken 10%);
s-color(secondary, -lighten 5% -opacity .3);
s-color(#ff0044, -saturate 20%);
```

### Supported modifiers

Here the list of the supported modifiers:

- **hue** {deg} : Change the color hue
- **lighten** {percent} : Increase the color lightness
- **darken** {percent} : Decrease the color lightness
- **saturate** {percent} : Increase the color saturation
- **desaturate** {percent} : Decrease the color saturation
- **grayscale** {boolean} : Set if need to pass the color in grayscale model
- **complement** {boolean} : Set if we want the complement color
- **invert** {boolean} : Set if we want to invert the color
- **opacity** {0-1} : Set the opacity wanted
- **mix** {color} : Mix the color with another

## Helper classes

Sugar have some [helper classes](helper-classes.md) that you can easily grab to use into your html. A bunch of these classes are colors related like:

- ```.c-{color-name}``` : Apply a specific color
- ```.bkg-{color-name}``` : Apply a specific background color
- ```.c-{color-name}--{modifier-name} : Apply a specific modified color
- ```.bkg-{color-name}--{modifier-name} : Apply a specific modified background color

> These classes are stored inside the ```sugar.color``` namespace. Check out the [helper classes](helper-classes.md) documentation for more info...
