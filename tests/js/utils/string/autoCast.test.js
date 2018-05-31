import autoCast from '../../../../dist/js/utils/strings/autoCast'

describe('autoCast', () => {
	it('Should understand "true" boolean', () => {
		expect(autoCast('true')).toEqual(true)
	})
	it('Should understand "false" boolean', () => {
		expect(autoCast('false')).toEqual(false)
	})
	it('Should understand "undefined"', () => {
		expect(autoCast('undefined')).toEqual(undefined)
	})
	it('Should understand "null"', () => {
		expect(autoCast('null')).toEqual(null)
	})
	it('Should understand number', (done) => {
		const number = autoCast('12')
		if (typeof number === 'number') done()
		else done('Does not understand number')
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
	it('Should understand string', () => {
		expect(autoCast('hello')).toEqual('hello')
	})
	it('Should understand a double quoted string', () => {
		expect(autoCast('"hello"')).toEqual('hello')
	})
	it('Should understand a single quoted string', () => {
		expect(autoCast('\'hello\'')).toEqual('hello')
	})
	it('Should understand a single quoted string with a quoted string in it', () => {
		expect(autoCast('\'"hello"\'')).toEqual('"hello"')
	})
})
