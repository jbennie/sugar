import {Observable} from 'rxjs/Observable'

Observable.prototype.groupByTimeout = function(properties) {
	const observable = new Observable(subscriber => {
		const source = this;
		let timeout = null;
		let stack = [];

		// subscribe to the source
		const subscription = source.subscribe(elm => {
			// add the element to stack
			stack.push(elm);
			// clear the timeout
			clearTimeout(timeout);
			// set a new timeout to wait next loop to
			// send the elements into the stream
			timeout = setTimeout(() => {
				// send the stack downward
				subscriber.next(stack);
				// clean stack
				stack = [];
			});
		},
		error => subscriber.error(error),
		() => subscriber.complete());

		// make sure we return the subscription
		return subscription;
	});

	// return the observable
	return observable;
}
