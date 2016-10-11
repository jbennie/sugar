# SGooeySvgFilter <span class="s-smaller-rel">extends { [SSvgFilter](/data/web/sugar/repo/src/js/filters/SSvgFilter.js) }</span>
This class represent a gooey SVG filter that can be applied on any HTMLElement.

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
amount | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }** | The amount of effect to apply | required | 

- Extends **{ [SSvgFilter](/data/web/sugar/repo/src/js/filters/SSvgFilter.js) }**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```js
const filter = new SGooeySvgFilter();
filter.applyTo(myCoolHTMLElement);

```


-----------------------------
## Properties
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } blur
The blur amount to produce the effect

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } contrast
The contrast amount to produce the effect

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } shrink
The shrink amount to produce the effect

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } amount
The overall amount of effect to produce


