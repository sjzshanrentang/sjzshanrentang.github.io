function randomColor() {
	var r,g,b;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);

	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

$(function() {
	// <span class="colorful">hueidou</span>
	var cc = $('.colorful');
	var text = cc.text();
	for (var i in text) {
		cc.before($('<em>').text(text[i]).css('color', randomColor()));
	}

	cc.remove();
});
