# Filters ```coffeekraken-sugar/js/filters/...```

Sugar provide some nice filters classes to apply non css supported effects on your elements.
Here's a list of available filters:

- **[SGooeySvgFilter](doc/src/js/filters/SGooeySvgFilter.md)** : Make a gooey effect like in [this demo](https://tympanus.net/Development/CreativeGooeyEffects/)
- **[SGradientSvgFilter](doc/src/js/filters/SGradientSvgFilter.md)** : Apply an SVG gradient filter on top of any HTMLElement
- **[SMotionblurSvgFilter](doc/src/js/filters/SMotionblurSvgFilter.md)** : Monitor an HTMLElement movement and apply a nice motion blur accordingly   

## Usage

To use the filters, simply import them from into your codebase like this:

```js
import SGooeySvgFilter from 'coffeekraken-sugar/js/filters/SGooeySvgFilter';
// then use it
const myFilter = SGooeySvgFilter();
myFilter.applyTo(myCoolHTMLElement);
```
