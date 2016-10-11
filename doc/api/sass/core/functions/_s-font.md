


-----------------------------
## API
-----------------------------

### s-font({String} $family = null, {Color} $color = null, {Number} $size = null, {String} $style = null, {String} $variant = null, {String}{Number} $weight = null, {String} $decoration = null, {String} $align = null, {String} $transform = null, {String} $stretch = null, {String} $white-space = null, {Number} $height = null, {Number} $spacing = null, {Number} $indent = null, {String} $break = null, {String} $wrap = null) : {Map}
Return the font {Map} that correspond to the passed arguments

- Privacy : **Public**

- Return : **{Map}** : The corresponding font map

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$family | **{String}** | The font family wanted (can be a registered font name) | optional | null
$color | **{Color}** | The color wanted (can be a registered color name) | optional | null
$size | **{Number}** | The font-size wanted | optional | null
$style | **{String}** | The font-style wanted | optional | null
$variant | **{String}** | The font-variant wanted | optional | null
$weight | **{String}{Number}** | The font-weight wanted | optional | null
$decoration | **{String}** | The text-decoration wanted | optional | null
$align | **{String}** | The text-align wanted | optional | null
$transform | **{String}** | The text-transform wanted | optional | null
$stretch | **{String}** | The font-stretch wanted | optional | null
$white-space | **{String}** | The white-space wanted | optional | null
$height | **{Number}** | The line-height wanted | optional | null
$spacing | **{Number}** | The letter-spacing wanted | optional | null
$indent | **{Number}** | The text-indent wanted | optional | null
$break | **{String}** | The line-break wanted | optional | null
$wrap | **{String}** | The word-wrap wanted | optional | null


#### Sample
```scss
s-font(
		$family : 'Helvetica Neue',
		$size : 12px,
		$wrap : norwap
);
// (
		font-family : 'Helvetica Neue',
		font-size : 12px,
		word-wrap : nowrap
// )

```


