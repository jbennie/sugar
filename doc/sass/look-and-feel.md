# Look and feel

Look and feel define how your elements (usually atoms) look like in terms of basic styling (border-radius, etc...).

## Features

- Let you setting up some look and feel properties like padding-vertical, padding-horizontal, border-radius, etc... that will be used across your components
- **em** unit based that let you **scale your component has you need**
- Widely used across shipped components and web components to **keep a consistent look across your website**
- Use the [s-setup](../src/sass/core/mixins/_s-setup.md) mixin to setting up your look and feel
- Use the [s-look-and-feel](../src/sass/core/mixins/_s-look-and-feel.md) or [s-lnf](../src/sass/core/mixins/_s-look-and-feel.md) function to set a look and feel:

## Available properties

Here's the list of properties that are available for configuration and styling into look and feel:

- **padding-vertical** {em} : Specify the padding vertical
- **padding-horizontal** {em} : Specify the padding horizontal
- **border-radius** {em} : Specify the border radius to use
- **disabled-opacity** {unitless} : Specify the opacity for disabled elements
- **line-height** {unitless} : Specify the line-height to use

## Setting up your look and feel

To setting up your look and feel, use the [s-setup](../src/sass/core/mixins/_s-setup.md) mixin like so:

```scss
@include s-setup((
	look-and-feel : (
		border-radius : 0em,
		padding-vertical : 1em,
		padding-horizontal : .8em,
		disabled-opacity : .5,
		line-height : 1.4
	)
));
```

## Usage example

Here's how to use and apply your look and feel across your components:

```scss
.my-cool-item {
	padding: s-lnf(padding-vertical) s-lnf(padding-horizontal);
	border-radius: s-lnf(border-radius);
	line-height: s-lnf(line-height);

	&:disabled {
		opacity : s-lnf(disabled-opacity);
	}
}
```
