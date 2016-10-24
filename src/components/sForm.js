import querySelectorLive from '../js/dom/querySelectorLive';
import sTemplateIntegrator from '../js/core/sTemplateIntegrator'

querySelectorLive('input:not([type="submit"])').once().inViewport().subscribe((elm) => {
	// set the input value
	elm.addEventListener('blur', (e) => {
		if (elm.value) {
			elm.setAttribute('value', elm.value);
		} else {
			elm.removeAttribute('value');
		}
	});
	sTemplateIntegrator.ignore(elm, {
		value : true
	});
});
