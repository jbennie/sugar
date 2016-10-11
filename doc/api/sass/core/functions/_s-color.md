


-----------------------------
## API
-----------------------------

### s-color({String}{Color} $color, {String}{List} $modifier = null) : {Color}
Get a registered color by name or wrap a new color into a s-color call
to manipulate it with ease.
Supported actions :
- hue {Deg}
- lighten {Percent}
- darken {Percent}
- saturate {Percent}
- desaturate {Percent}
- grayscale {Boolean}
- complement {Boolean}
- invert {Boolean}
- opacity {Percent}
- mix {Color}

- Privacy : **Public**

- Return : **{Color}** : The actual color value

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$color | **{String}{Color}** | The color name or the color value to manipulate | required | 
$modifier | **{String}{List}** | The color modifier to apply. Can be a registered modifier name or a modifier list | optional | null


#### Sample
```scss
// default color (settings.colors.default)
$myColor : s-color(default);
// primary color (settings.colors.primary)
$primary : s-color(primary);
// manipulate
$primary-dark : s-color(primary, -darken 10%);
// registered modifier
$primary-light : s-color(primary, light);

```


