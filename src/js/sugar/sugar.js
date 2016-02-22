import { activateManager, ActivateElement } from './sugar-activate'

import { GooeyElement } from './sugar-gooey'
import GooeyFilter from './sugar-gooey-filter'

import { MotionblurElement } from './sugar-motionblur'
import MotionBlurFilter from './sugar-motionblur-filter'

import { LinearGradientElement } from './sugar-lineargradient'
import LinearGradientFilter from './sugar-lineargradient-filter'

import SvgFilter from './sugar-svgfilter'

import tools from './sugar-tools'
import sDom from './sugar-dom'

module.exports = {
	activateManager : activateManager,
	ActivateElement : ActivateElement,

	GooeyElement : GooeyElement,
	GooeyFilter : GooeyFilter,

	MotionblurElement : MotionblurElement,
	MotionBlurFilter : MotionBlurFilter,
	LinearGradientElement : LinearGradientElement,
	LinearGradientFilter : LinearGradientFilter,
	SvgFilter : SvgFilter,
	tools : tools,
	dom : sDom,
	drawer : require('../../coffee/sugar/sugar-drawer.coffee'),
	webfonts : require('../../coffee/sugar/sugar-webfonts.coffee'),
	transitionstart : require('../../coffee/sugar/sugar-transitionstart.coffee')
}