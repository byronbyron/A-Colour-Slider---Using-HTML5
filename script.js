(function($) {

	var heading,
		red,green,blue,
		str,
		doc = $(document),
		r,g,b;	

	function supportsRange() {
		var i = $('input');
		i.setAttribute('type', 'range');

		return i.type === 'range';
	}

	if ( supportsRange ) {
		heading = $('h1');
		red 	= $('#r');
		green 	= $('#g');
		blue 	= $('#b');

		r = Math.floor(Math.random() * 255 + 1);
		g = Math.floor(Math.random() * 255 + 1);
		b = Math.floor(Math.random() * 255 + 1);

		red.attr('value', r);
		green.attr('value', g);
		blue.attr('value', b);

		heading.css('color', 'rgb(' + [r,g,b].join(',') + ')');

		doc.on('change', 'input', function() {
			heading.css('color',
				'rgb(' + [red.val(), green.val(), blue.val()].join(',') + ')');
		});

		$('<p></p>', {
			text: 'color: rgb(' + [r,g,b].join(',') + ');',
			class: 'color'
		}).insertAfter('h1');

		doc.on('mouseup', function() {
			str = 'color: rgb(' + [red.val(), green.val(), blue.val()].join(',') + ');';
			$('.color').html(str);
		});

	}

})(jQuery);