# SButtonComponent

Provide ability to generate buttons that follow your settings like colors, look and feel, etc...

- ```.btn```
- ```.btn--block```
- ```.btn--{color}```
- ```.btn--outline```
- ```.btn--link```
- ```.btn:disabled```
- ```.btn--hover-{$color}```

See:
- [Element level mixins API](./sass/_main.md)
- [Classes level mixins API](./sass/_classes.md)


### Example
```scss
	// apply the button bare and style to my custom element
.my-cool-element {
	@include s-button();
}
// apply only the bare styling to my custom element
.my-cool-element {
	@include s-button-bare();
}
// apply only the style styling to my custom element
.my-cool-element {
	@include s-button-style();
}

// will print out classes for the button including bare and style part
@include s-button-classes(
	$colors : default primary secondary
);
// will print out classes for the button including only bare part
@include s-button-classes-bare();
// will print out classes for the button including only style part
@include s-button-classes-style(
	$colors : default primary secondary
);
```
Author : Olivier Bossel <olivier.bossel@gmail.com>