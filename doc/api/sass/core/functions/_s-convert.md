


-----------------------------
## API
-----------------------------

### s-convert({Number} $value, {String} $unit) : {Number}
Convert a passed value to the wanted unit
The conversion between some units that depends on a font-size will take the settings.typo.font-size value as reference.

Available conversions
- from px
	- to em
	- to rem
	- to pt
	- to %

- from em
	- to rem
	- to px
	- to pt
	- to %

- from pt
	- to em
	- to rem
	- to px
	- to pt
	- to %

- from rem
	- to em
	- to px
	- to pt
	- to %

- Privacy : **Public**

- Return : **{Number}** : The converted value

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$value | **{Number}** | The value to convert | required | 
$unit | **{String}** | The unit in which to convert the value | required | 


#### Sample
```scss
// if the settings.typo.font-size === 16px
s-convert(24px, rem) // 1.5rem
s-convert(3rem, pt) // 36pt

```


