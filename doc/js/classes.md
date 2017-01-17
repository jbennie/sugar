# Classes ```coffeekraken-sugar/js/classes/...```

Sugar gives you some nice classes that are highly specialized in one purpose only like:

- **[STimer](../src/js/classes/STimer.md)** : Handle times with nice control like start, stop, pause, etc...
- **[SColor](../src/js/classes/SColor.md)** : Manipulate colors and access your sass registered colors
- **[SWatcher](../src/js/classes/SWatcher.md)** : Add some watchers on native object properties and be notified on updated
- [And more...](../src/js/classes)

## Usage

To use the classes, simply import them from into your codebase like this:

```js
import STimer from 'coffeekraken-sugar/js/classes/STimer';
// then use it
const myTimer = new STimer(2000);
myTimer.start();
```
