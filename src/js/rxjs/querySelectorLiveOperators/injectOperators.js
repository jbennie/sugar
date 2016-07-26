import once from './once'
import visible from './visible'
import inViewport from './inViewport';

export default function(destination) {
	destination.once = once;
	destination.visible = visible;
	destination.inViewport = inViewport;
};
