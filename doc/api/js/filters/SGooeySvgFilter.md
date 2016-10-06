# SGooeySvgFilter
This class represent a gooey SVG filter that can be applied on any HTMLElement.

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
amount | **Number** | The amount of effect to apply | required | 

- Extends **{SSvgFilter}**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```js
const filter = new SGooeySvgFilter();
filter.applyTo(myCoolHTMLElement);

```


-----------------------------
## Properties
-----------------------------

### Number blur
The blur amount to produce the effect

### Number contrast
The contrast amount to produce the effect

### Number shrink
The shrink amount to produce the effect

### Number amount
The overall amount of effect to produce


