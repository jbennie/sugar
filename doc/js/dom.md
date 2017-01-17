# DOM helper functions

> Stored in ```coffeekraken-sugar/js/dom/...```

Sugar provide some cool helper function to handle the DOM. The goal of these functions is not to add another layer on top of native DOM methods like ```document.querySelector```, but to gives you more features that does not exist like:

- **[closest](../src/js/dom/closest.md)** : Equivalent of the jQuery **closest** functions
- **[whenInViewport](../src/js/dom/whenInViewport.md)** : Let you know when an element enter the viewport the first time
- **[whenAttribute](../src/js/dom/whenAttribute.md)**  : Let you know when an element has a specifiy attribute (or that an attribute is a string, etc...)
- **[scrollTo](../src/js/dom/scrollTo.md)**  : Animate the scroll to a certain element in the page
- **[domReady](../src/js/dom/domReady.md)**  : Equivalent to the jQuery **ready** function
- **[getAnimationProperties](../src/js/dom/getAnimationProperties.md)**  : Return an object with the css animations properties
- [And many many more...](../src/js/dom)

## Usage

To use these functions, simply import them from into your codebase like this:

```js
import closest from 'coffeekraken-sugar/js/dom/closest';
// then use it
const closestElm = closest(myHTMLElement, '.cool-selector');
```
