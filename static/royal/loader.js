window.onload = function() {
	var body = document.getElementsByTagName('body')[0];
	var loader = document.getElementById('loader-wrap');

	setTimeout(function() {
		loader.style.opacity = 0;
		loader.style.visibility = 'hidden';
		body.style.overflow = 'visible';
	},1000);
}
