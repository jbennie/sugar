# Web components (external repositories)

Sugar provide a base **[SWebComponent](../src/js/core/SWebComponent)** class on top of which are build plenty of useful web component.

These web components are shipped through separated repositories in order to keep the codebase clean and well organized.

You are as well welcomed to contribute by creating your own web component and publish them. **[See how to contribute](#contribute)**.

Here's a small list of web components available:

- **[s-read-more](https://github.com/coffeekraken/s-read-more-component)** : Simply create toggleable read more component
- **[s-datepicker-component](https://github.com/coffeekraken/s-datepicker-component)** : Clean and fully featured datepicker
- **[s-ripple-component](https://github.com/coffeekraken/s-ripple-component)** : Fully customizable ripple component
- **[s-share-component](https://github.com/coffeekraken/s-share-component)** : Create customizable sharing buttons with ease
- **[s-slideshow-component](https://github.com/coffeekraken/s-slideshow-component)** : Powerful and fully customizable slideshow component
- **[s-drawer-component](https://github.com/coffeekraken/s-drawer-component)** : Elegant and powefull component to create fully customizable components.
- And [many more](https://github.com/coffeekraken)...

## Usage

Using these web components is pretty ease. Just import the js component file in your codebase and use the tag in your html file like so:

```js
import SReadMoreComponent from 'coffeekraken-s-read-more-component';
```

```html
<s-read-more height="200">
	<!-- your content here... -->
</s-read-more>
```
