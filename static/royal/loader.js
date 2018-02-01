window.onload = function() {
	var body = document.getElementsByTagName('body')[0];
	var loader = document.getElementById('loader-wrap');
	var navshow = document.getElementById('navshow');



	setTimeout(function() {
		loader.style.opacity = 0;
		loader.style.visibility = 'hidden';
		body.style.overflow = 'visible';
		navshow.style.visibility= 'visible';
		
	},1000);
}
