# A Colour Slider - Using HTML5

A simple app to help you find the colour value you want.

This little app mainly exists because I wanted to create something using the HTML5 API, a handful of Javascript and a little bit of CSS.

Simply use the sliders to adjust the colour of the heading to your liking. Then, just like magic, the CSS code is updated to reflect the colour value.

It starts by using Modernizr.js to detect if the browser knows about the range input type. If the range input type doesn't exist, Yepnope.js loads an unobtrusive "Slider/HTML5 range polyfill" which provides us with the range input type. If the range input type does exist, Yepnope.js does nothing.

Finally, after making sure the range input type definitely exists, my script casually implements colour slider goodness.

It should work in all the modern browsers.

## Possible Improvement Ideas

* Support for all browsers &#x2713;
* Update value using a text field
* Support for other colour inputs (hexadecimal)

## [Demo](https://byronbyron.github.io/A-Colour-Slider---Using-HTML5/)
