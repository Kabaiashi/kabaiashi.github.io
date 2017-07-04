var slider = document.querySelector('.js-slider');
var slide = document.querySelectorAll('.js-slide');
var sliderImg = document.querySelectorAll('.js-slider-img');
var box = document.querySelector('.js-slider-box');

sliderImg.forEach(function (element) {
	element.ondragstart = function() {
		return false;
	}
});

slider.style.marginLeft = '0px';

var draggable = false;
var start;
var move;

// drag functions using mouse

slider.onmousedown = function(e) {
	draggable = true;
	slider.style.width = slide[0].offsetWidth * slide.length + 'px';
	move = e.pageX - box.offsetLeft;
	start = parseInt(slider.style.marginLeft);
}

slider.onmousemove = function(e) {
	if (draggable == true) {
		slider.style.transition = '0s';
		slider.style.marginLeft = start - (move - e.pageX) - box.offsetLeft + 'px';
	} 
}

slider.onmouseup = function () {
	draggable = false;
	var round = Math.round(parseInt(this.style.marginLeft) / slide[0].offsetWidth);
	if (parseInt(this.style.marginLeft) > 0) {
		slider.style.transition = '0.5s';
		slider.style.marginLeft = '0px';
	}
	if (parseInt(this.style.marginLeft) < box.offsetWidth - this.offsetWidth) {
		slider.style.transition = '0.5s';
		slider.style.marginLeft = box.offsetWidth - this.offsetWidth + 'px';
	}
	if (parseInt(this.style.marginLeft) < 0 && parseInt(this.style.marginLeft) > box.offsetWidth - this.offsetWidth) {
		slider.style.transition = '0.5s';
		slider.style.marginLeft = slide[0].offsetWidth * round + 'px';
	}
}

// drag functions using touch

function startup() {
	slider.addEventListener("touchstart", handleStart, false);
  slider.addEventListener("touchmove", handleMove, false);
  slider.addEventListener("touchend", handleEnd, false);
}

function handleStart(e) {
	draggable = true;
	slider.style.width = slide[0].offsetWidth * slide.length + 'px';
	move = e.changedTouches[0].screenX - box.offsetLeft;
	start = parseInt(slider.style.marginLeft);
}

function handleMove(e) {
	if (draggable == true) {
		slider.style.transition = '0s';
		slider.style.marginLeft = start - (move - e.changedTouches[0].screenX) - box.offsetLeft + 'px';
	} 
}

function handleEnd() {
	draggable = false;
	var round = Math.round(parseInt(slider.style.marginLeft) / slide[0].offsetWidth);
	if (parseInt(slider.style.marginLeft) > 0) {
		slider.style.transition = '0.5s';
		slider.style.marginLeft = '0px';
	}
	if (parseInt(slider.style.marginLeft) < box.offsetWidth - slider.offsetWidth) {
		slider.style.transition = '0.5s';
		slider.style.marginLeft = box.offsetWidth - slider.offsetWidth + 'px';
	}
	if (parseInt(slider.style.marginLeft) < 0 && parseInt(slider.style.marginLeft) > box.offsetWidth - slider.offsetWidth) {
		slider.style.transition = '0.5s';
		slider.style.marginLeft = slide[0].offsetWidth * round + 'px';
	}
}

startup();
