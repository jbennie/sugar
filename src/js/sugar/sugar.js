import { activateManager, ActivateElement } from './components/sugar-activate'
import { GooeyElement, GooeyFilter } from './filters/sugar-gooey'
import { MotionblurElement, MotionBlurFilter } from './filters/sugar-motionblur'
import { GradientElement, GradientFilter } from './filters/sugar-gradient'
import SvgFilter from './filters/sugar-svgfilter'
import tools from './core/sugar-tools'
import sDom from './core/sugar-dom'

module.exports = {
	activateManager : activateManager,
	ActivateElement : ActivateElement,
	GooeyElement : GooeyElement,
	GooeyFilter : GooeyFilter,
	MotionblurElement : MotionblurElement,
	MotionBlurFilter : MotionBlurFilter,
	GradientElement : GradientElement,
	GradientFilter : GradientFilter,
	SvgFilter : SvgFilter,
	tools : tools,
	dom : sDom,
	drawer : require('../../coffee/sugar/sugar-drawer.coffee'),
	webfonts : require('../../coffee/sugar/sugar-webfonts.coffee'),
	transitionstart : require('../../coffee/sugar/sugar-transitionstart.coffee')
}