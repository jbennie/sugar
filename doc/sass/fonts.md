# Fonts

Sugar allows you to easily manage and organize your fonts by giving them a name.

## Features

- Default customizable fonts
	- default / quote / code
- Register more fonts if needed
- Simple ```@include s-font($name)``` mixin to apply your fonts
- Keep your fonts organized
- Provide helper classes like ```.f-default```, ```.f-quote```, etc...
	- Classes are generated depending on your registered fonts

## Default fonts available

By default, Sugar comes with three fonts set out of the box. It's a good idea to use these names first before register new ones. That will help you work in team. You can obviously override these fonts properties if you want.

Here's the three names available by default:

1. **default** : Default font used across the website
2. **quote** : Serif base font used for quotes, etc...
3. **code** : Monospace font for code etc...

## Setting up your fonts

To register a new filter, or override an existing one, use the [s-setup](../src/sass/core/mixins/_s-setup.md) mixin like so:

```scss
// import google fonts if needed (need to be at start of css file)
@import url('https://fonts.googleapis.com/css?family=Roboto');
@include s-setup((
	fonts : (
		// font face
		default : (
			src : '../fonts/my-cool-font.eot',
			extensions : woff woff2 eot,
			font-weight : bold,
			font-style : normal
		),
		// bind linked font (google fonts, etc...)
		roboto : (
			font-family : Roboto
		)
	)
));
```

> If a "src" property if specified, the [s-font-face](../src/sass/core/mixins/_s-font-face.md) mixin will be used under the hood to register your font.

## Use your fonts

To use your fonts, simply use the [s-font](../src/sass/core/functions/_s-font.md) function like so:

```scss
h1 {
	@include s-font(roboto);
}
```

## Helper classes

Sugar have some [helper classes](helper-classes.md) that you can easily grab to use into your html. A bunch of these classes are fonts related like:

- ```.f-{font-name}``` : Apply a specific font

> These classes are stored inside the ```sugar.font.family``` namespace. Check out the [helper classes](helper-classes.md) documentation for more info...
