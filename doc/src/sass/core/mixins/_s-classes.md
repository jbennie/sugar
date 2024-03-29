# s-classes

Print out all wanted registered classes like padding helpers, margin helpers, font helpers, etc...
Available namespaces
- sugar.filter.{name} : .fi-{name}
- sugar.transition.{name} : .tr-{name}
- sugar.font.family.{name} : .f-{name}
- sugar.margin.bottom.{size} : .m-b-{size}
- sugar.margin.top.{size} : .m-t-{size}
- sugar.margin.left.{size} : .m-l-{size}
- sugar.margin.right.{size} : .m-r-{size}
- sugar.margin.side.{size} : .m-s-{size}
- sugar.padding.all.{size} : .p-{size}
- sugar.padding.top.{size} : .p-t-{size}
- sugar.padding.bottom.{size} : .p-b-{size}
- sugar.padding.left.{size} : .p-l-{size}
- sugar.padding.right.{size} : .p-r-{size}
- sugar.padding.side.{size} : .p-s-{size}
- sugar.size.{size} : .s-{size}
- sugar.size.rel.{size} : .s-{size}-rel
- sugar.padding.no.top : .no-p-t
- sugar.padding.no.bottom : .no-p-b
- sugar.padding.no.left : .no-p-l
- sugar.padding.no.right : .no-p-r
- sugar.padding.no.side : .no-p-s
- sugar.margin.no.top : .no-m-t
- sugar.margin.no.bottom : .no-m-b
- sugar.margin.no.left : .no-m-l
- sugar.margin.no.right : .no-m-r
- sugar.margin.no.side : .no-m-s
- sugar.color.{name}.color` .c-{name}
- sugar.color.{name}.bkg : .bkg-{name}
- sugar.color.{name}.modifier.{mod-name}.color : .c-{name}--{mod-name}
- sugar.color.{name}.modifier.{mod-name}.bkg : .bkg-{name}--{mod-name}
- sugar.pull.left : .pull-left
- sugar.pull.right : .pull-right
- sugar.position.relative : .relative
- sugar.position.absolute : .absolute
- sugar.clear.left : .clear-left
- sugar.clear.right : .clear-right
- sugar.clear.both : .clear
- sugar.pointer.events.all : .pointer-events-all
- sugar.pointer.events.none : .pointer-events-none
- sugar.display.show : .show
- sugar.display.show-inline : .show-inline
- sugar.display.hidden : .hidden
- sugar.display.hide : .hide
- sugar.display.visible : .visible
- sugar.display.invisible : .invisible
- sugar.display.visually-hidden : .visually-hidden
- sugar.text.hidden : .t-hidden
- sugar.text.truncate : .t-truncate
- sugar.text.align.left : .t-left
- sugar.text.align.right : .t-right
- sugar.text.align.center : .t-center
- sugar.text.align.justify : .t-justify
- sugar.text.transform.lowercase : .t-lowercase
- sugar.text.transform.uppercase : .t-uppercase
- sugar.text.transform.capitalize : .t-capitalize
- sugar.font.weight.bold : .f-bold
- sugar.font.weight.lighter : .f-lighter
- sugar.font.weight.bolder : .f-bolder
- sugar.font.weight.normal : .f-normal
- sugar.font.style.italic : .f-italic
- sugar.font.style.oblique : .f-oblique
- sugar.font.variant.small-caps : .f-small-caps
- sugar.block.align.center : .block-center
- sugar.ratio.21-9 : ```.ratio-21-9```
- sugar.ratio.16-9 : ```.ratio-16-9```
- sugar.ratio.4-3 : ```.ratio-4-3```
- sugar.ratio.1-1 : ```.ratio-1-1```
- sugar.size.abs.cover : ```.abs-cover```
- sugar.size.abs.contain : ```.abs-contain```
- sugar.size.abs.fit : ```.abs-fit```
- sugar.clearfix.default : .clearfix
- sugar.clearfix.float : .clearfix-float
- sugar.clearfix.micro : .clearfix-micro
- sugar.clearfix.overflow : .clearfix-overflow
- sugar.clearfix.facebook : .clearfix-facebook
- sugar.no-transitions : .no-transitions
- sugar.clear-transitions : .clear-transitions
- sugar.no-animations : .no-animations
- sugar.clear-animations : .clear-animations
- sugar.no-transmations : .no-transmations
- sugar.clear-transmations : .clear-transmations



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$namespaces  |  **{ List<string> }**  |  The classes namespaces wanted  |  required  |

### Example
```scss
	@include s-classes(); // will print out all the classes
@include s-classes('sugar.font'); // will print all the font classes
@include s-classes('sugar.clearfix' 'sugar.pull'); // the clearfixes and the pull classes
// etc...
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)