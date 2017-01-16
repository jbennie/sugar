# Transitions

- Allow you to register some transitions inside the settings using names
- Apply your transitions with the ```@include s-transition($transitionName)``` mixin
- Base transitions available:
	- slow : all .3s ease-in-out 0s
	- default : all .2s ease-in-out 0s
	- fast : all .1s ease-in-out 0s
- Compose transitions
	- ```@include s-transition(fast opacity);```
