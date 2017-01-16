# DOM helper functions ```coffeekraken-sugar/js/dom/...```

Sugar provide some cool helper function to handle the DOM. The goal of these functions is not to add another layer on top of native DOM methods like ```document.querySelector```, but to gives you more features that does not exist like:

- ```closest``` : Equivalent of the jQuery **closest** functions
- ```whenInViewport``` : Let you know when an element enter the viewport the first time
- ```whenAttribute``` : Let you know when an element has a specifiy attribute (or that an attribute is a string, etc...)
- ```scrollTo``` : Animate the scroll to a certain element in the page
- ```domReady``` : Equivalent to the jQuery **ready** function
- ```getAnimationProperties``` : Return an object with the css animations properties
- And many many more...
