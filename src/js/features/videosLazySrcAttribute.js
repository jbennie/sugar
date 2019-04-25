import whenInViewport from '../dom/whenInViewport'
import querySelectorLive from '../dom/querySelectorLive'

/**
 * @name    videoLazySrcAttribute
 * Add support for the `lazy-src` attribute on `video` elements.
 * The video `src` attribute will be populated when the `video` element enter the viewport
 * @example    html
 * <video lazy-src="my-cool-video.mp4"></video>
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
querySelectorLive('video[lazy-src]', $videoElm => {
  whenInViewport($videoElm).then(() => {
    $videoElm.setAttribute('src', $videoElm.getAttribute('lazy-src'))
  })
})
