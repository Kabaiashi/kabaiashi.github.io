	var dropdownBtn = document.querySelector('.js-dropdown-btn');
	var mainMenu = document.querySelector('.js-dropdown');
	var close = document.querySelector('.js-close');
	var field = document.querySelectorAll('.js-field');
	var formBtn = document.querySelector('.js-form-btn');
	var scrollBtn = document.querySelector('.js-scroll');
	var slide = document.querySelectorAll('.js-slide');
	var slideBtn = document.querySelectorAll('.js-slider-btn');
	var bd = document.querySelector('body');
	var ht = document.querySelector('html');

	function clear(arr) {
		arr.forEach(function (e) {
			e.classList.remove('is-active');
		});
	}

	dropdownBtn.addEventListener('click', function () {
		mainMenu.style.top = '0';
	});

	close.addEventListener('click', function () {
		mainMenu.style.top = '-1000px';
	});

	window.onresize = function() {
		var w = document.body.clientWidth;
		if (w > 479 && mainMenu.hasAttribute('style')) {
			mainMenu.removeAttribute('style');	
		}
	}

	formBtn.addEventListener('click', function () {
		field.forEach(function (e) {
			if (e.value == '' && !e.classList.contains('field-error')) {
				e.classList.add('field-error');
			} 
			if (!e.valid && !e.classList.contains('field-error')) {
				e.classList.add('field-error');
			}
		});
	});

	function scrollTo(element, to, duration) {
		if (duration < 0) return;
		var difference = to - element.scrollTop;
		var perTick = difference / duration * 2;

		setTimeout(function() {
			element.scrollTop = element.scrollTop + perTick;
			scrollTo(element, to, duration - 2);
		}, 10);
	}

	scrollBtn.addEventListener('click', function (e) {
		e.preventDefault();
		scrollTo(bd, 0, 50);
		scrollTo(ht, 0, 50);
	});

	function hide(arr) {
		arr.forEach(function (e) {
			e.style.opacity = '0';
		});
	}

	window.onload = function() {

		slideBtn.forEach(function (element, i) {
			element.addEventListener('click', function () {
				var index = i;
				clear(slideBtn);
				this.classList.add('is-active');
				hide(slide);
				slide[i].style.opacity = '1';
				clearInterval(start);
			});
		});

		slide[0].style.opacity = '1';
		var index = 0;
		var start = setInterval(function () {
			index++;
			if (index >= slide.length) {
				index = 0;
				hide(slide);
				slide[index].style.opacity = '1';
				clear(slideBtn);
				slideBtn[index].classList.add('is-active');
			} else {
				hide(slide);
				slide[index].style.opacity = '1';
				clear(slideBtn);
				slideBtn[index].classList.add('is-active');
			}
		}, 5000);
	}
