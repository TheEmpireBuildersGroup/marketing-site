/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'empires\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-light-bulb': '&#xe600;',
		'icon-earth': '&#xe601;',
		'icon-clipboard': '&#xe602;',
		'icon-hourglass': '&#xe603;',
		'icon-tools': '&#xe604;',
		'icon-diefive': '&#xe605;',
		'icon-uniF4E7': '&#xe606;',
		'icon-dollar': '&#xe607;',
		'icon-uniF6EC': '&#xe608;',
		'icon-rook': '&#xe609;',
		'icon-clubs': '&#xe60a;',
		'icon-axe': '&#xe60b;',
		'icon-die': '&#xe60c;',
		'icon-mug': '&#xe60d;',
		'icon-lock': '&#xe60e;',
		'icon-key': '&#xe60f;',
		'icon-domain': '&#xe610;',
		'icon-domain3': '&#xe611;',
		'icon-cannon': '&#xe612;',
		'icon-fort': '&#xe613;',
		'icon-uniF485': '&#xe614;',
		'icon-uniF4F5': '&#xe615;',
		'icon-moneybag': '&#xe616;',
		'icon-uniF4E6': '&#xe617;',
		'icon-uniF749': '&#xe618;',
		'icon-piggybank': '&#xe619;',
		'icon-dollar2': '&#xe61a;',
		'icon-bank': '&#xe61b;',
		'icon-law': '&#xe61c;',
		'icon-bow': '&#xe61d;',
		'icon-sword': '&#xe61e;',
		'icon-expand': '&#xe61f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
