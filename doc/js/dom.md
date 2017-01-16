# DOM helper functions ```coffeekraken-sugar/js/dom/...```

Sugar provide some cool helper function to handle the DOM. The goal of these functions is not to add another layer on top of native DOM methods like ```document.querySelector```, but to gives you more features that does not exist like:

- **[closest](doc/src/js/dom/closest.md)** : Equivalent of the jQuery **closest** functions
- **[whenInViewport](doc/src/js/dom/whenInViewport.md)** : Let you know when an element enter the viewport the first time
- **[whenAttribute](doc/src/js/dom/whenAttribute.md)**  : Let you know when an element has a specifiy attribute (or that an attribute is a string, etc...)
- **[scrollTo](doc/src/js/dom/scrollTo.md)**  : Animate the scroll to a certain element in the page
- **[domReady](doc/src/js/dom/domReady.md)**  : Equivalent to the jQuery **ready** function
- **[getAnimationProperties](doc/src/js/dom/getAnimationProperties.md)**  : Return an object with the css animations properties
- [And many many more...](doc/src/js/dom)

## Usage

To use these functions, simply import them from into your codebase like this:

```js
import closest from 'coffeekraken-sugar/js/dom/closest';
// then use it
const closestElm = closest(myHTMLElement, '.cool-selector');
```
