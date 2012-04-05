(function($) {
	// Initialise all the globals.
	var heading,
		red,green,blue,
		str,
		doc = $(document),
		r,g,b;	
	
	// Check to see if thaa browser 
	// supports the 'range' attribute.
	function supportsRange() {
		var i = $('input');
		i.setAttribute('type', 'range');

		return i.type === 'range';
		// returns true or false
	}

	if ( supportsRange ) {
		// The range attribute is available, WIN!
		
		// Grab the heading and inputs.
		heading = $('h1');
		twitter = $('p em a');
		red 	= $('#r');
		green 	= $('#g');
		blue 	= $('#b');

		// Randomly generates colour values between 1 and 255.
		r = Math.floor(Math.random() * 255 + 1);
		g = Math.floor(Math.random() * 255 + 1);
		b = Math.floor(Math.random() * 255 + 1);

		// Assigns the random number 
		// to the value attribute which
		// sets the markers on each slider.
		red.attr('value', r);
		green.attr('value', g);
		blue.attr('value', b);

		// Updates the colour of the heading to 
		// reflect the positioning of the sliders
		heading.css('color', 'rgb(' + [r,g,b].join(',') + ')');
		twitter.css('color', 'rgb(' + [r,g,b].join(',') + ')');

		// When the slider changes, the 
		// colour of the heading changes. WINNING!
		doc.on('change', 'input', function() {
			heading.css('color', 'rgb(' + [red.val(), green.val(), blue.val()].join(',') + ')');
			twitter.css('color', 'rgb(' + [red.val(), green.val(), blue.val()].join(',') + ')');
		});

		// Insert the randomly generated colour 
		// values into the dom.
		$('<p></p>', {
			text: 'color: rgb(' + [r,g,b].join(',') + ');',
			class: 'color'
		}).insertAfter('hgroup');

		// When the slider changes, the color
		// value changes at the same time!
		doc.on('change', 'input', function() {
			str = 'color: rgb(' + 
				[red.val(), green.val(), blue.val()].join(',') 
			+ ');';
			$('.color').html(str);
		});

	}

})(jQuery);