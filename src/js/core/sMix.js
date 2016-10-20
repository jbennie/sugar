let mix = (...mixins) => new SMix(mixins);

class SMix {
	constructor(mixins) {
		this.mixins = mixins;
	}
	in(superclass) {
		return this.mixins.reduce((c, mixin) => {
			// console.log('c', c);
			// console.log('mixin', mixin);
			// if ((typeof(mixin) === 'object')) {
			// 	c.prototype = Object.create(mixin);
			// 	// Object.assign(c.prototype, mixin.prototype);
			// 	return c;
			// }

			c.prototype = Object.create(mixin.prototype);

			return c;

			// return mixin(c);
		}, superclass);
	}
}

export default mix;
