let mix = (...mixins) => new SMix(mixins);

class SMix {
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