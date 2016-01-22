# Sugar (v1.0.3)

The goal of Sugar is certainly not to tells you how to organize your project. It's just like a **sugar in the coffee, you choose the coffee, Sugar enhance it with a nice touch!**

## [Visit Website](http://sugarcss.io) for full documentation


## Write less, do more!

Sugar has a lots of cool mixins to help you write cleaner scss:

```scss
.my-cool-element {
    @include s-font(12px helvetica bold underline uppercase nowrap right);
}
```

This will give:

```css
.my-cool-element {
    font-size : 12px;
    font-family : helvetica;
    font-weight : bold;
    text-decoration : underline;
    text-transform : uppercase;
    white-space : nowrap;
    text-align : right;
}
```

## Quick start
	
Importing sugar

```scss
@import "sugar/sugar"
```

Configure your sugar :

```scss
@include sugar((
	typo : (
		font-size : 13px
		// etc...
	),
	colors : (
		orange : #f2bc2b
		// your colors here...
	),
	transition : (
		// your transitions settings here...
	)
	// and many more settings by packages
	// like font-awesome, modular-scale,
	// animate.css, BEM, etc...
));
```

## Helper classes (if wanted) :

```scss
@include sugar(classes);
```

```css
.pull-left, .pull-right
.m-t-{size}, .m-b-{size}, .m-l-{size}, .m-r-{size}, .m-s-{size}
.p-t-{size}, .p-b-{size}, .p-l-{size}, .p-r-{size}, .p-s-{size}
.text-left, .text-right, .text-center, .text-justify, .text-uppercase, .text-lowercase, .text-capitalize
.c-{color}, .bkg-{color}
// and many more
```

## Take advantage of all the powerful sugar mixins, functions, etc...

```scss
.h1 {
    @include s-vertical-rhythme((
        s-font : 30px helvetica uppercase,
        margin-botton : 20px
    ));
}
.my-font-element {
    @include s-font(12px s-color(orange, light) uppercase underline nowrap);
}
.popover {
    // an orange bubble with an arrow top 20px
    @include s-bubble(top s-color(orange) 20px);
}
// and many more mixins and functions...
```

## Cool packages out of the box

Sugar comes with some nice packages like font-awesome, animate.css, etc... out of the box. These packages are optimized to generate only the css you need!

- Font Awesome
- Sassdash
- CSSGram
- modular-scale
- animate.css
- ...

> You can choose or not to use the embeded packages. Nothing stop you to install them by yourself and use the versions you want...

## A not limited list of mixins

- s-font
- s-animation
- s-background
- s-bubble
- s-clearfix
- s-columns
- s-corner (s-border-radius)
- s-filter
- s-fit
- s-font
- s-font-face
- s-icon
- s-list / s-list-item
- s-long-shadow
- s-media
- s-position
- s-placeholder
- s-ratio
- s-show-rhythme
- s-selection
- s-size
- s-text-hidden
- s-text-truncate
- s-transform
- s-transition
- s-translate
- s-vertical-rhythme
- s-visually-hidden
- ...


## A not limited list of functions

- s-color
- s-is
- s-setting
- s-size
- s-px
- s-rem
- s-em
- s-percent
- s-sqrt
- s-pow
- s-sin
- s-cos
- and many more...




## That's not finished...

Sugar offer you a lot of features and advanced settings that you can discover on the full website.

## [Visit Website](http://sugarcss.io) for full documentation


## Tested with

|    | Generator |  Version  |
| ------------- | ------------- | ------------- |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" height="20" />  |  Sass  |  3.4.18  |
| <img src="http://www.codingpedia.org/wp-content/uploads/2014/04/gulp-2x.png" height="30" />  |  Gulp  | 3.9.0  |
| <img src="https://www.npmjs.com/static/images/npm-logo.svg" height="20" />  |  NPM  | 2.5.1  |
| <img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/23114/preview_image/libsass.png" height="20" />  |  Libsass  | 3.3.3  |
|  <img src="http://rhumaric.com/wp-content/uploads/2013/05/bower-logo.png" height="20" />  |  Grunt  |  0.4.4  |