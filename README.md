# Sugar

Sugar gives you a lot of cool stuff to enhance your codebase.
It basically does nothing by default but let you grab what you want from it. It can be the colors management feature, as well as the spaces management, helper classes, etc...

We like to think about this toolkit as

> A little (but powerful) sugar in your codebase

The primary goal of this toolkit is to cover these needs:

1. Give you a way to **organize your codebase (colors, fonts, etc...)**
	- Sugar **does not tells you how your folders need to be layed out**
	- Help you to stay organized inside your code
		- Colors
		- Fonts
		- Etc...
	- **Help a lot when you need to work in team**
2. Give you access to a large number of useful mixins like:
	- ```s-font``` : Apply font property quickly
	- ```s-clearfix``` : Apply any clearfix (standard, overflow, float, etc...) type quickly
	- ```s-placeholder``` : Apply the input placeholder styling
	- ```s-list-bullet``` : Create fully customized list bullets (icons, images, decimal, etc...)
	- ```s-vertical-rhythme``` : Set your vertical rhythme rules
	- ```s-truncate-text``` : Truncate a text when to wide
	- And many many more...
3. Give you access to some cool effects that you can tweak like:
	- ```s-depth``` : Material design depth shadows
	- ```s-bubble``` : Customizable speach bubbles
	- ```s-side-lined``` : Simple side lines to apply on titles or whatever
	- ```s-long-shadow``` : Create a nice long shadow effect
	- Fully customizable one div loaders
	- And many more...
4. Provide some useful daily use javascript functions like:
	- ```closest``` : Equivalent of the jQuery **closest** functions
	- ```whenInViewport``` : Let you know when an element enter the viewport the first time
	- ```whenAttribute``` : Let you know when an element has a specifiy attribute (or that an attribute is a string, etc...)
	- ```scrollTo``` : Animate the scroll to a certain element in the page
	- ```domReady``` : Equivalent to the jQuery **ready** function
	- ```getAnimationProperties``` : Return an object with the css animations properties
	- And many, many, many more...
5. Provide some powerful javascript classes like:
	- ```SWebComponent``` : Base class to create webcomponent based on **react** methods naming (componentWillMount, componentMount, etc...)
	- ```SBinder``` : Allows you to bind object properties to another object
	- ```SWatcher``` : Allows you to monitor object properties
	- ```STimer``` : Nice little class to handle timers (start, stop, pause, onTick, etc...)
	- And many more...
6. Plenty web components based on the ```SWebComponent``` class
	- These web components are separated into outside repositories
	- Official sugar web components are published on the [Coffeekraken github organisation](https://github.com/coffeekraken)
	- Well tested components
	- Open source so don't be afraid to contribute!


## Sass features

Here's a list of features that the toolkit will offer you. **Don't worry**, it seems like a lot, but you don't need to use all of them to start. Just pick what you need and let the rest aside...

### Colors

- Default customizable colors
	- default / title / text / link / primary / secondary / success / warning / error / info
- Register more colors if needed
- Color modifiers
	- Allows you to make a variant of a color by changing his opacity, lightness, etc...
- Simple ```s-color($name, $modifier)``` function to access your colors
- Keep your colors organized
- Provide helper classes like ```.c-primary```, ```.bkg-primary```, ```.c-secondary```, etc...
	- Classes are generated depending on your registered colors

### Fonts

- Default customizable fonts
	- default / quote / code
- Register more fonts if needed
- Simple ```@include s-font($name)``` mixin to apply your fonts
- Keep your fonts organized
- Provide helper classes like ```.f-default```, ```.f-quote```, etc...
	- Classes are generated depending on your registered fonts

### Typography

- Default typography styles (only if needed)
- Nice mixins to handle typography properties
	- ```@include s-font(quote italic bold underline)``` to quickly apply text styles
	- ```@include s-vertical-rhythme()``` To handle vertical spaces
	- and more...
- Provide helper classes like ```.t-left```, ```.t-right```, ```.t-uppercase```, ```.t-lowercase```, and many more...

### Components

- Give you access to pre-build customizable components
- Each components are divided in two parts
 	1. The **bare** part that gives you only the structure of the component (sizes, paddings, etc...)
	2. The **style** part that gives you a pre-build style if you don't want to make your own
- Here's a list of components that are available with the toolkit:
	- Buttons (basic / outline / link / etc...)
	- Corner badges
	- Dropdowns (dropup / right aligned / etc...)
	- Form (inputs / textarea / select / addon / groups / etc...)
	- Navigations (inline / tabs / justify / etc...)
	- Tables (basic / striped / hover / bordered / etc...)
	- Typography (titles / paragraphs / lists / inline elements / quotes / etc...)

### Sizes (ratios)

This concept can be a little tricky to understand at first but it will be a lot clearer when using the spaces, look-and-feel, etc...

- Allows you to register some sizes that you will use across your website using names
- Default sizes names available:
	- smaller : 0.3
	- small : 0.6
	- default : 1
	- medium : 1.6
	- big : 2.4
	- bigger : 3
- Allows you to specify ratio between sizes
- Allows you to keep consistency across your entire website

### Spaces

- Let you specify the default space for your website, then the other spaces will be interpolated from the sizes ratios
	- Default space : 1rem (customizable as well)
	- Big space will be 1rem * 2.4 = 2.4rem
- Each spaces can be hard coded to bypass the sizes ratios
	- Use the ```@include s-setup()``` mixin to do so
- Provide some helper classes like:
	- ```.m-b``` : Default margin bottom
	- ```.m-t-small``` : Small margin top
	- ```.m-l-big``` : Big margin left
	- ```.p-bigger``` : Bigger padding (top, right, bottom, left)
	- ```.p-s-small``` : Small padding side (left, right)
	- Etc...
- Can be applied across your codebase with the ```s-space($size)``` function

### Look and feel

- Let you setting up some look and feel properties like padding-vertical, padding-horizontal, border-radius, etc... that will be used across your components
- **em** unit based that let you **scale your component has you need**
- Widely used across shipped components and web components to **keep a consistent look across your website**
- Use the ```@include s-setup()``` mixin to specify your look and feel
- Use the ```s-look-and-feel($property)``` or ```s-lnf($property)``` function to set a look and feel:

#### Usage example

```scss
.my-cool-item {
	padding: s-lnf(padding-vertical) s-lnf(padding-horizontal);
	border-radius: s-lnf(border-radius);

	&:disabled {
		opacity : s-lnf(disabled-opacity);
	}
}
```

### Filters

- Allow you to register some filters inside the settings using names
- Apply your filters with the ```@include s-filter($filterName)``` mixin
- Filters examples
	- blured : blur(10px)
	- coolFilter : box-shadow(black 0 0 10px) grayscale(20%)
	- Etc...
- Apply multiple filters at once
	- ```@include s-filter(blured coolFilter);```

### Transitions

- Allow you to register some transitions inside the settings using names
- Apply your transitions with the ```@include s-transition($transitionName)``` mixin
- Base transitions available:
	- slow : all .3s ease-in-out 0s
	- default : all .2s ease-in-out 0s
	- fast : all .1s ease-in-out 0s
- Compose transitions
	- ```@include s-transition(fast opacity);```

## Javascript features

Sugar provide a lot of cool functions and classes that you can use inside your project.
The main goal sugar try to achieve is to give you some cool tools that you can or not use. It's your choice and sugar will not force you in any way.

All the javascript capabilities of sugar are well structured and splited inside the repository so **you will be able to grab only what you want from it**. Here's some examples of functions and classes you might load in your project:

```js
import whenAttribute from 'coffeekraken-sugar/js/dom/whenAttribute'
import closest from 'coffeekraken-sugar/js/dom/closest'
import whenInViewport from 'coffeekraken-sugar/js/dom/whenInViewport'
import whenAttribute from 'coffeekraken-sugar/js/dom/whenAttribute'
import closestNotVisible from 'coffeekraken-sugar/js/dom/closestNotVisible'
import SColor from 'coffeekraken-sugar/js/classes/SColor'
import STimer from 'coffeekraken-sugar/js/classes/STimer'
import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
// etc...
```

### Classes ```coffeekraken-sugar/js/classes/...```

You will also find some nice classes that are highly specialized in one purpose only like:

- ```STimer``` : Handle times with nice control like start, stop, pause, etc...
- ```SColor``` : Manipulate colors and access your sass registered colors
- ```SWatcher``` : Add some watchers on native object properties and be notified on updated
- And more...

### DOM helper functions ```coffeekraken-sugar/js/dom/...```

Sugar provide some cool helper function to handle the DOM. The goal of these functions is not to add another layer on top of native DOM methods like ```document.querySelector```, but to gives you more features that does not exist like:

- ```closest``` : Equivalent of the jQuery **closest** functions
- ```whenInViewport``` : Let you know when an element enter the viewport the first time
- ```whenAttribute``` : Let you know when an element has a specifiy attribute (or that an attribute is a string, etc...)
- ```scrollTo``` : Animate the scroll to a certain element in the page
- ```domReady``` : Equivalent to the jQuery **ready** function
- ```getAnimationProperties``` : Return an object with the css animations properties
- And many many more...

### Easings ```coffeekraken-sugar/js/easings/...```

Store easing function inside separated files.
See the [folder content](doc/js/easings) to access the list of available easings.

### Filters ```coffeekraken-sugar/js/filters/...```

Sugar provide some nice filters classes to apply non css supported effects on your elements.
Here's a list of available filters:

- ```SGooeySvgFilter``` : Make a gooey effect like in [this demo](https://tympanus.net/Development/CreativeGooeyEffects/)
- ```SGradientSvgFilter``` : Apply an SVG gradient filter on top of any HTMLElement
- ```SMotionblurSvgFilter``` : Monitor an HTMLElement movement and apply a nice motion blur accordingly   

### Features ```coffeekraken-sugar/js/features/...```

The files stored here are not classes or even functions. Their goals are to add some features around certain element types like inputs, etc...

- ```input>AdditionalAttributes``` : Add and maintain to input, select, radio, etc... attributes "dirty", "empty" and "has-value"

### Utils ```coffeekraken-sugar/js/utils/...```

Sugar provide some utils functions around objects, strings, etc... It's certainly not the goal to take replace lodash or these kind of libraries but you can find some cool stuffs in there like:

- ```colors/sColor``` : small ```SColor``` class factory
- ```functions/throttle``` : Throttle a function call
- ```is/color``` : Check if passed value is a color
- ```is/email``` : Check if passed value is a valid email
- ```objects/whenProperty``` : Be notified when a property exist or match a certain check function
- Etc...

### Web components (external repositories)

Sugar provide a base class on top of which are build plenty of useful web component.
These web components are shipped through separated repositories in order to keep the codebase clean and well organized.
You are as well welcomed to contribute by creating your own web component and publish them. [See how to contribute](#contribute)
Here's a small list of web components available:

- [s-read-more](https://github.com/coffeekraken/s-read-more-component) : Simply create toggleable read more component
- [s-datepicker-component](https://github.com/coffeekraken/s-datepicker-component) : Clean and fully featured datepicker
- [s-ripple-component](https://github.com/coffeekraken/s-ripple-component) : Fully customizable ripple component
- [s-share-component](https://github.com/coffeekraken/s-share-component) : Create customizable sharing buttons with ease
- [s-slideshow-component](https://github.com/coffeekraken/s-slideshow-component) : Powerful and fully customizable slideshow component
- [s-drawer-component](https://github.com/coffeekraken/s-drawer-component) : Elegant and powefull component to create fully customizable components.
- And [many more](https://github.com/coffeekraken)...

#### Usage example

Using these web components is pretty ease. Just import the js component file in your codebase and use the tag in your html file like so:

```js
import SReadMoreComponent from 'coffeekraken-s-read-more-component';
```

```html
<s-read-more height="200">
	<!-- your content here... -->
</s-read-more>
```

## Contribute

Sugar is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. Contributing to the core:
	- Fix issues
	- Add features
2. Create a web component
3. Correct and enhance the documentation

## Browser support

* Chrome *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 10+
* Opera *(latest 2)*
* Safari *(latest 2)*

## License

The code is available under the [MIT license](LICENSE.txt).
