# Helper classes

Sugar provide a nice way to define and grab helper classes that you want. Here's how it works:

## Register a new class

To register a new class, simply use the [s-register-class](../src/sass/core/mixins/_s-register-class.md) mixin like so:

```scss
@include s-register-class('my-cool-class', 'utils.cool.classes') {
	color : pink;
	text-transform : uppercase;
	// etc...
}
```

This will register the class ```.my-cool-class``` inside the ```utils.cool.classes``` mixin.

> Registering a class mean not that it will be printed out in your CSS. Check the [s-classes](../src/sass/core/mixins/_s-classes.md) mixin for that.

## Generate your classes

To actually have your classes inside your final CSS, you will need to call the [s-classes](../src/sass/core/mixins/_s-classes.md) mixin like so:

```scss
// include all the registered classes
@include s-classes();

// grab only classes under a particular namespace
@include s-classes('utils.cool');
```

## Available classes out of the box

Sugar provide some cool helper classes that you can take advantage of. Here's the list of them:

- sugar.filter.{name} : ```.fi-{name}```
- sugar.transition.{name} : ```.tr-{name}```
- sugar.font.family.{name} : ```.f-{name}```
- sugar.margin.bottom.{size} : ```.m-b-{size}```
- sugar.margin.top.{size} : ```.m-t-{size}```
- sugar.margin.left.{size} : ```.m-l-{size}```
- sugar.margin.right.{size} : ```.m-r-{size}```
- sugar.margin.side.{size} : ```.m-s-{size}```
- sugar.padding.all.{size} : ```.p-{size}```
- sugar.padding.top.{size} : ```.p-t-{size}```
- sugar.padding.bottom.{size} : ```.p-b-{size}```
- sugar.padding.left.{size} : ```.p-l-{size}```
- sugar.padding.right.{size} : ```.p-r-{size}```
- sugar.padding.side.{size} : ```.p-s-{size}```
- sugar.size.{size} : ```.s-{size}```
- sugar.size.rel.{size} : ```.s-{size}-rel```
- sugar.padding.no.top : ```.no-p-t```
- sugar.padding.no.bottom : ```.no-p-b```
- sugar.padding.no.left : ```.no-p-l```
- sugar.padding.no.right : ```.no-p-r```
- sugar.padding.no.side : ```.no-p-s```
- sugar.margin.no.top : ```.no-m-t```
- sugar.margin.no.bottom : ```.no-m-b```
- sugar.margin.no.left : ```.no-m-l```
- sugar.margin.no.right : ```.no-m-r```
- sugar.margin.no.side : ```.no-m-s```
- sugar.color.{name}.color .c-{name}
- sugar.color.{name}.bkg : ```.bkg-{name}```
- sugar.color.{name}.modifier.{mod-name}.color : ```.c-{name}--{mod-name}```
- sugar.color.{name}.modifier.{mod-name}.bkg : ```.bkg-{name}--{mod-name}```
- sugar.pull.left : ```.pull-left```
- sugar.pull.right : ```.pull-right```
- sugar.position.relative : ```.relative```
- sugar.position.absolute : ```.absolute```
- sugar.clear.left : ```.clear-left```
- sugar.clear.right : ```.clear-right```
- sugar.clear.both : ```.clear```
- sugar.pointer.events.all : ```.pointer-events-all```
- sugar.pointer.events.none : ```.pointer-events-none```
- sugar.display.show : ```.show```
- sugar.display.show-inline : ```.show-inline```
- sugar.display.hidden : ```.hidden```
- sugar.display.hide : ```.hide```
- sugar.display.visible : ```.visible```
- sugar.display.invisible : ```.invisible```
- sugar.display.visually-hidden : ```.visually-hidden```
- sugar.text.hidden : ```.t-hidden```
- sugar.text.truncate : ```.t-truncate```
- sugar.text.align.left : ```.t-left```
- sugar.text.align.right : ```.t-right```
- sugar.text.align.center : ```.t-center```
- sugar.text.align.justify : ```.t-justify```
- sugar.text.transform.lowercase : ```.t-lowercase```
- sugar.text.transform.uppercase : ```.t-uppercase```
- sugar.text.transform.capitalize : ```.t-capitalize```
- sugar.font.weight.bold : ```.f-bold```
- sugar.font.weight.lighter : ```.f-lighter```
- sugar.font.weight.bolder : ```.f-bolder```
- sugar.font.weight.normal : ```.f-normal```
- sugar.font.style.italic : ```.f-italic```
- sugar.font.style.oblique : ```.f-oblique```
- sugar.font.variant.small-caps : ```.f-small-caps```
- sugar.block.align.center : ```.block-center```
- sugar.ratio.21-9 : ```.ratio-21-9```
- sugar.ratio.16-9 : ```.ratio-16-9```
- sugar.ratio.4-3 : ```.ratio-4-3```
- sugar.ratio.1-1 : ```.ratio-1-1```
- sugar.size.abs.cover : ```.abs-cover```
- sugar.size.abs.contain : ```.abs-contain```
- sugar.size.abs.fit : ```.abs-fit```
- sugar.clearfix.default : ```.clearfix```
- sugar.clearfix.float : ```.clearfix-float```
- sugar.clearfix.micro : ```.clearfix-micro```
- sugar.clearfix.overflow : ```.clearfix-overflow```
- sugar.clearfix.facebook : ```.clearfix-facebook```
- sugar.no-transitions : ```.no-transitions```
- sugar.clear-transitions : ```.clear-transitions```
- sugar.no-animations : ```.no-animations```
- sugar.clear-animations : ```.clear-animations```
- sugar.no-transmations : ```.no-transmations```
- sugar.clear-transmations : ```.clear-transmations```

> Some of these classes are based on your sugar settings
