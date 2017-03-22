# Typography

Sugar provide some nice way to work with typography like helper mixins to apply properties quickly, vertical rhythme helpers, etc...

## Features

- Default typography styles (only if needed)
- Nice mixins to handle typography properties
	- [s-font(quote italic bold underline)](../src/sass/core/mixins/_s-font.md) mixin to quickly apply text styles
	- [s-vertical-rhythme()](../src/sass/core/mixins/_s-vertical-rhythme.md) mixin To handle vertical spaces
	- and more...
- Provide helper classes like ```.t-left```, ```.t-right```, ```.t-uppercase```, ```.t-lowercase```, and many more...

## Base settings

Typography in sugar is an important part. That's why this part has his own settings. Here's the default ones that can be tweaked as you need:

```scss
@include s-setup((
	typography : (
		font-family 				: default, 			// set the font to use by default
		font-size 					: 14px, 			// default font-size
		font-sizes 					: null, 			// map of font-sizes by media (size : media)
		line-letters-count			: 55,				// optimal letters count in a line
	)
));
```

## Optional base styles

You can quickly get base typography styles from the toolkit through the [STypographyComponent](../src/components/STypographyComponent/_index.md). These styles are totally optional but are a good start to cover the basics like:

- Titles
- Paragraphs
- Lists
- Captions
- Quotes
- Inline text elements (del, mark, ins, etc...)

#### Get the styles

Here's how to get these styles for free:

```scss
@include s-typography-classes();
```

## Applying font properties

Sugar provide the cool [s-font](../src/sass/core/mixins/_s-font.md) mixin that let you apply multiple font properties in one line like so:

```scss
h1 {
	@include s-font(roboto bold underline italic uppercase);
}
```

## Text format

Applying some text formatting to a tag (h1, h2, h3, p, etc...) directly can lead to some issues and conflict after some times. This is why we encourage you to use this text format concept.

The basic idea is to never target any tag for styling, but instead, do something like this:

```scss
.#{s-text-format-class()} h1,
.h1 {
	@include s-font(roboto uppercase);
	// etc...
}
```

By doing things like this, you can scope your text formatting inside some containers and not having conflicts with other semantic purpose h1.

## Vertical rhythme

Vertical rhythme is a little bit the same concept has the text-format, but for vertical spaces.

```scss
h1 {
	// set our vertical rhythme
	@include s-vertical-rhythme() {
		margin-bottom : 2rem;
	}
}
```

Applying our vertical rhythme in html :

```html
<h1>I have no vertical rhythme</h1>
<h1 class="vr">I have vertical rhythme</h1>
<div class="vr">
	<h1>I have vertical rhythme</h1>
</div>
```

## Helper classes

Sugar have some [helper classes](helper-classes.md) that you can easily grab to use into your html. A bunch of these classes are typography related like:

- ```.t-hidden``` : Hide the text
- ```.t-truncate``` : Truncate a text if too long
- ```.t-left``` : Align the text to left
- ```.t-right``` : Align the text to right
- ```.t-center``` : Align the text to center
- ```.t-justify``` : Align the text to justify
- ```.t-lowercase``` : Set the text to lowercase
- ```.t-uppercase``` : Set the text to uppercase
- ```.t-capizalize``` : Set the text to capizalize
- ```.f-bold``` : Set the font weight to bold
- ```.f-lighter``` : Set the font weight to lighter
- ```.f-bolder``` : Set the font weight to bolder
- ```.f-normal``` : Set the font weight to normal
- ```.f-italic``` : Set the font style to italic
- ```.f-oblique``` : Set the font style to oblique
- ```.f-small-caps``` : Set the font variant to small caps

> These classes are stored inside the ```sugar.text``` and ```sugar.font``` namespaces. Check out the [helper classes](helper-classes.md) documentation for more info...
