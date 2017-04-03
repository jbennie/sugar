# <span class="c-#{$color}">#{_start-case($color)}</span> centered #{s-component()}

Display a #{$color} centered #{s-component()}

### Example
```html
	<div class="active bkg-primary" style="display: block; width: 10px; height: 10px; position: relative; margin: 50px auto;">
	<div class="#{s-component()} #{s-component()}--#{$color} #{s-component()}--c">
		I'm a cool tooltip
	</div>
</div>
```