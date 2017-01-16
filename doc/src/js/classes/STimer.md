## Constructor


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
duration  |  **{ number }**  |  The duration of the timer in ms  |  optional  |  1000
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The settings for the timer  |  required  |

Return **{ STimer }** The STimer instance



## Settings

Here's the list of available settings.

### tickInterval

Store the interval between ticks


Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **1000**


### tickCount

Set the number of tick wanted


Type : **{ Integer }**

Default : **null**


### loop

Set if the timer has to loop


Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**



## Methods


### STimer

Class that let you create and handle timer with ease.
With this class you can set some callback function that will be
called each x ms or tell that you want your callbacks to be called
a certain number of time during the timer time.


#### Example
```js
	const myTimer = new STimer(2000, {
		tickCount : 5
});
myTimer.onTick((myTimer) => {
		// do something here...
});
myTimer.start();
```
Author : Olivier Bossel<olivier.bossel@gmail.com>


### remaining

Return the remaining time in ms

Return **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }** The remaining time in ms


### duration

Set or get the duration


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
duration  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  Set the duration  |  optional  |  null

Return **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }** The duration


### onTick

Register a function called on tick

Return **{ STimer }** The timer instance


### onComplete

Register a function called on complete


### reset

Reset the timer


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
start  |  **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**  |  If the timer has to start after reseting or not  |  required  |


### start

Start the timer


### pause

Pause the timer


### stop

Stop the timer


### destroy

Destroy the timer