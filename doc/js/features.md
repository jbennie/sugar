# Features

> Stored in ```coffeekraken-sugar/js/features/...```

The goal of the features are to ad some features around certain element types like inputs, etc...
They don't expose any API, classes or functions. They're just files that add some behaviors to certain elements.

- **inputAdditionalAttributes** : Add and maintain to input, select, radio, etc... attributes "dirty", "empty" and "has-value"
- **inputAdditionalEvents** : Dispatch some additional events from input, textarea, etc...:
	- **onescape** : from ```textarea``` and ```input```
	- **onenter** : from ```textarea``` and ```input```

## Usage

Simply require the features you want into your codebase and that's it

```js
require('coffeekraken-sugar/js/features/inputAdditionalAttributes');
require('coffeekraken-sugar/js/features/inputAdditionalEvents');
```
