import whenInViewport from '../dom/whenInViewport'
import querySelectorLive from '../dom/querySelectorLive'

/**
 * @name    imagesLazySrcAttribute
 * Add support for the `lazy-src` attribute on `img` elements.
 * The video `src` attribute will be populated when the `img` element enter the viewport
 * @example    html
 * <img lazy-src="my-cool-image.jpg" />
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
querySelectorLive(
  'img[lazy-src]:not([src]):not([is="s-responsive-img"])',
  $imgElm => {
    whenInViewport($imgElm).then(() => {
      $imgElm.setAttribute('src', $imgElm.getAttribute('lazy-src'))
    })
  }
)
