# Look and feel

- Let you setting up some look and feel properties like padding-vertical, padding-horizontal, border-radius, etc... that will be used across your components
- **em** unit based that let you **scale your component has you need**
- Widely used across shipped components and web components to **keep a consistent look across your website**
- Use the ```@include s-setup()``` mixin to specify your look and feel
- Use the ```s-look-and-feel($property)``` or ```s-lnf($property)``` function to set a look and feel:

## Usage example

```scss
.my-cool-item {
	padding: s-lnf(padding-vertical) s-lnf(padding-horizontal);
	border-radius: s-lnf(border-radius);

	&:disabled {
		opacity : s-lnf(disabled-opacity);
	}
}
```
