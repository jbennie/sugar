# STimer
Class that let you create and handle timer with ease.
With this class you can set some callback function that will be
called each x ms or tell that you want your callbacks to be called
a certain number of time during the timer time.

#### Sample
```language-js
const myTimer &#x3D; new STimer(2000, {
tickCount : 5
});
myTimer.onTick((myTimer) &#x3D;&gt; {
// do something here...
});
myTimer.start();
```

### Constructor
Init the timer
#### Parameters

Name | Type | Description | Optional | Default
------------ | ------------ | ------------ | ------------ | ------------
duration | **number** | The | optional | 1000
settings | **Object** | The | required | 

## Settings
Here&#x27;s the available settings

Name | Type | Description | Default
------------ | ------------ | ------------ | ------------
tickInterval | **tickInterval** | Store the interval between ticks | 1000
tickCount | **tickCount** | Set the number of tick wanted | null
loop | **loop** | Set if the timer has to loop | false
## API

### remaining
Return the remaining time in ms

Return **Number** The

### duration
Set or get the duration

Name | Type | Description | Optional | Default
------------ | ------------ | ------------ | ------------ | ------------
duration | **Number** | Set | optional | null

Return **Number** The

### onTick
Register a function called on tick

Name | Type | Description | Optional | Default
------------ | ------------ | ------------ | ------------ | ------------
A | **Function** | function | required | 



#### Sample
```language-
const tick &#x3D; this.tick();
```

### onComplete
Register a function called on complete

Name | Type | Description | Optional | Default
------------ | ------------ | ------------ | ------------ | ------------
A | **Function** | function | required | 



### reset
Reset the timer

Name | Type | Description | Optional | Default
------------ | ------------ | ------------ | ------------ | ------------
start | **Boolean** | If | required | 

Return **STimer** null

### start
Start the timer

Return **STimer** null

### pause
Pause the timer

Return **STimer** null

### stop
Stop the timer

Return **STimer** null


