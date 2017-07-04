var tabBtn = document.querySelectorAll('.js-tab-btn');
var tabContent = document.querySelectorAll('.js-tab-content');
var tabPicture = document.querySelectorAll('.js-tab-picture');

function changePicture(arr) {
	arr.forEach(function (element) {
 		if (element.classList.contains('show-picture')) {
			element.classList.add('hide-picture');
			element.classList.remove('show-picture');
		} else  {
			element.classList.remove('hide-picture');
		}
	});
}

function changeContent(arr) {
	arr.forEach(function (element) {
 		if (element.classList.contains('show-content')) {
			element.classList.add('hide-content');
			element.classList.remove('show-content');
		} else  {
			element.classList.remove('hide-content');
		}
	});
}


tabBtn.forEach(function (element, index) {
	if (element.hasAttribute('checked')) {
		tabContent[index].classList.add('show-content');
		tabPicture[index].classList.add('show-picture');
	}
	element.addEventListener('click', function () {
		if (!tabContent[index].classList.contains('show-content')) {
			changeContent(tabContent);
			tabContent[index].classList.add('show-content');
		}
		if (!tabPicture[index].classList.contains('show-picture')) {
			changePicture(tabPicture);
			tabPicture[index].classList.add('show-picture');
		}
	});
});