import __easing from '../easings/easeInOutQuint'
import querySelectorLive from './querySelectorLive'
import urlParse from 'url-parse'
import scrollTo from './scrollTo'

/**
 * Listen for links contains an hash to init them for scroll to target on click
 * @param    {Integer}    [duration=500]    The scroll duration in ms
 * @param    {Integer}    [offset=0]    A scroll offset to apply
 * @param    {Function}    [easing=__easing]    An easing function used to scroll
 * 
 * @example    js
 * import autoScrollAnchorLinks from 'coffeekraken-sugar/js/autoScrollAnchorLinks'
 * autoScrollAnchorLinks()
 * 
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function autoScrollAnchorLinks(duration = 500, offset = 0, easing = __easing) {

  querySelectorLive('a:not([is])[href*="#"]', $link => {
    
    // listen for click
    $link.addEventListener('click', e => {

      // get the hash
      const linkUrl = urlParse($link.getAttribute('href'))
      const currentUrl = urlParse()

      // chack that we have an hash
      if (!linkUrl.hash || linkUrl.hash === '#') return

      // if it's not the same pathname between the current url and the link one,
      // we do nothing and we let the link behave as he want
      if (currentUrl.pathname !== linkUrl.pathname) return

      // try to get the target from the hash
      const $target = document.querySelector(linkUrl.hash)

      // if we don't have any target, let the link behave as he wants
      if (!$target) return

      // preventing the link to behave as he wants
      e.preventDefault()

      // append the hash to the history in the url
      history.pushState({}, null, linkUrl.hash)

      // all seems to be good, we can scroll to the target
      scrollTo($target, duration, easing, offset, 'top')

    })
  })
}