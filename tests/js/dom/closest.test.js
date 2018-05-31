import closest from '../../../dist/js/dom/closest'

describe('closest', () => {
	let elm, sourceElm, targetElm, noTargetElm;
	beforeAll(() => {
		document.body.innerHTML += `
			<div id="closest">
				<div ref="noTarget"></div>
				<div ref="target">
					<div ref="source"></div>
				</div>
			</div>
		`
		elm = document.querySelector('#closest')
		sourceElm = elm.querySelector('[ref="source"]')
		targetElm = elm.querySelector('[ref="target"]')
		noTargetElm = elm.querySelector('[ref="noTarget"]')
	})
	it('Should find the target from the source element', () => {
		expect(closest(sourceElm, '[ref="target"]')).toBeTruthy()
	});
	it('Should not find any target from the noTarget element', () => {
		expect(closest(noTargetElm, '[ref="target"]')).toBeFalsy()
	});
})
