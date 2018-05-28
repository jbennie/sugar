import autoCast from 'coffeekraken-sugar/js/utils/string/autoCast'
import chai from 'chai'
const expect = chai.expect

describe('autoCast', () => {
	it('Should understand "true" boolean', () => {
		expect(autoCast('true')).to.be.equal(true)
	})
	it('Should understand "false" boolean', () => {
		expect(autoCast('false')).to.be.equal(false)
	})
	it('Should understand "undefined"', () => {
		expect(autoCast('undefined')).to.be.equal(undefined)
	})
	it('Should understand "null"', () => {
		expect(autoCast('null')).to.be.equal(null)
	})
	it('Should understand object', (done) => {
		const obj = autoCast('{hello:"world"}')
		if (typeof obj === 'object' && obj.hello === 'world') done()
		else done('Does not understand object')
	})
	it('Should understand array', (done) => {
		const ar = autoCast('["hello","world"]')
		if (ar instanceof Array && ar[0] === 'hello' && ar[1] === 'world') done()
		else done('Does not understand array')
	})
	it('Should understand an explicit string', () => {
		expect(autoCast('hello')).to.be.equal('hello')
	})
	it('Should understand an explicit string', () => {
		expect(autoCast('"hello"')).to.be.equal('"hello"')
	})
})
