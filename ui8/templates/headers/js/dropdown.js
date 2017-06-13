var menu = document.querySelector('.js--menu');
var menuBtn = document.querySelector('.js--menu-btn');

menuBtn.addEventListener('click', function () {
	if (this.parentNode.classList.contains('is-active')) {
		this.parentNode.classList.remove('is-active');
	} else {
		this.parentNode.classList.add('is-active');
	}
});