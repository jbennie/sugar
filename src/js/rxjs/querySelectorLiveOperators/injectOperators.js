import once from './once'
import visible from './visible'
import inViewport from './inViewport'
import group from './group'
import notIn from './notIn'

export default function(destination) {
	destination.once = once;
	destination.visible = visible;
	destination.inViewport = inViewport;
	destination.group = group;
	destination.notIn = notIn;
};
