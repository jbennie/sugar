


-----------------------------
## API
-----------------------------

### s-interpolate({Map} $stack, {String} $size) : {Number}
Return the specified or calculated value of the given stack and size
depending on the settings.sizes ratios stack

- Privacy : **Public**

- Return : **{Number}** : The $stack.$size value or the interpolated one depending on the settings.sizes ratios

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$stack | **{Map}** | The stack from which to interpolate the value | required | 
$size | **{String}** | The size wanted (has to exist in the settings.sizes stack) | required | 


#### Sample
```scss

// settings.sizes
\@include s-setup((
		sizes : (
			small : 0.5,
			default : 1, // default is ALWAYS 1
			big : 1.5
		)
));

$myStack : (
		default : 3rem,
		big : 6rem
)

s-interpolate($myStack, big) // 6rem cause specified in the $myStack value
s-interpolate($myStack, small) // 1.5rem => calculated like : 3rem * 0.5 = 1.5rem

```


