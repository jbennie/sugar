
# STimer
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
## Constructor

Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
duration  |  **{ number }**  |  The duration of the timer in ms  |  optional  |  1000
settings  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  The settings for the timer  |  required  |

Return **{ STimer }** The STimer instance

## Settings

Here's the list of available settings that you can pass to the constructor

### tickInterval

Store the interval between ticks


Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }**
Default : **1000**

### tickCount

Set the number of tick wanted


Type : **{ Integer }**
Default : **null**

### loop

Set if the timer has to loop


Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }**
Default : **false**

## Properties





## Methods


### remaining

Return the remaining time in ms

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }** The remaining time in ms

### duration

Set or get the duration


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
duration  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }**  |  Set the duration  |  optional  |  null

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }** The duration

### onTick

Register a function called on tick


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
A function to call on tick  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  undefined  |  required  |

Return **{ STimer }** The timer instance

### onComplete

Register a function called on complete


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
A function to call on complete  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  undefined  |  required  |


### reset

Reset the timer


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
start  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }**  |  If the timer has to start after reseting or not  |  required  |

Return **{ STimer }** undefined

### start

Start the timer

Return **{ STimer }** undefined

### pause

Pause the timer

Return **{ STimer }** undefined

### stop

Stop the timer

Return **{ STimer }** undefined

### destroy

Destroy the timer
