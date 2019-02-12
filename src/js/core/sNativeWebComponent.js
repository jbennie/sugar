import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import { mix } from "../vendors/mixwith";
import SWebComponentMixin from "./SWebComponentMixin";
export default function sNativeWebComponent(HTMLElementToExtend) {
	return mix(HTMLElementToExtend).with(SWebComponentMixin);
}
