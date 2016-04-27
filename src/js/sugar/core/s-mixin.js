let mix = (...mixins) => new Mix(mixins);

class Mix {
	constructor(mixins) {
		this.mixins = mixins;
	}
	in(superclass) {
		return this.mixins.reduce((c, mixin) => {
			return mixin(c);
		}, superclass);
	}
}

export default mix;