// Set up the yepnope (Modernizr.load) directives... 
Modernizr.load([
{
    // Test if Input Range is supported using Modernizr
    test: Modernizr.inputtypes.range,
    // If ranges are not supported, load the slider script and CSS file
    nope: [     
        // The slider CSS file
        'http://www.frequency-decoder.com/demo/fd-slider/css/fd-slider.mhtml.min.css',
        // The slider JS file
        'js/fd-slider.min.js'
    ],
    callback: function(id, testResult) {
        // If the slider file has loaded then fire the onDomReady event        
        if("fdSlider" in window && typeof (fdSlider.onDomReady) != "undefined") {
            try { fdSlider.onDomReady(); } catch(err) {};
        };
    }
}
]);