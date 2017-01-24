# STypographyComponent

This file provide the mixins to create typography elements


## Mixins


### s-typography-title

Apply the title css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$size  |  **{ Number }**  |  The size wanted. If unitless, will use modular scale to calculate size  |  required  |
$base  |  **{ Integer }**  |  The base on which to calculate the modular scale if needed  |  optional  |  null

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-title-bare

Apply the title bare css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$size  |  **{ Number }**  |  The size wanted. If unitless, will use modular scale to calculate size  |  required  |
$base  |  **{ Integer }**  |  The base on which to calculate the modular scale if needed  |  optional  |  null

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-title-style

Apply the title style css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$size  |  **{ Number }**  |  The size wanted. If unitless, will use modular scale to calculate size  |  required  |
$base  |  **{ Integer }**  |  The base on which to calculate the modular scale if needed  |  optional  |  null

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-paragraph-bare

Apply the paragraph bare css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$size  |  **{ Number }**  |  The size wanted  |  required  |

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-paragraph-style

Apply the paragraph style css

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-link

Apply the link css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color used to style link  |  optional  |  primary

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-link-bare

Apply the link bare css

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-link-style

Apply the link style css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color used to style link  |  optional  |  primary

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-inline-text

Apply the inline-text css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$tag  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The tag to use the style for  |  required  |
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color used to style different inline text elements  |  optional  |  primary

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-inline-text-bare

Apply the inline-text bare css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$tag  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The tag to use the style for  |  required  |

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-inline-text-style

Apply the inline-text css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$tag  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The tag to use the style for  |  required  |
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color used to style different inline text elements  |  optional  |  primary

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-list

Apply the list css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$tag  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The tag to style like "ul", "ol li" or "dl dt"  |  required  |
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color used for styling bullets  |  optional  |  primary

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-list-bare

Apply the list bare css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$tag  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The tag to style like "ul", "ol li" or "dl dt"  |  required  |

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-list-style

Apply the list style css


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$tag  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The tag to style like "ul", "ol li" or "dl dt"  |  required  |
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color used for styling bullets  |  optional  |  primary

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-caption

Apply the caption css

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-caption-bare

Apply the caption bare css

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-caption-style

Apply the caption style css

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-quote

Apply the quote css

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-quote-bare

Apply the quote bare css

Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-typography-quote-style

Apply the quote style css

Author : Olivier Bossel <olivier.bossel@gmail.com>