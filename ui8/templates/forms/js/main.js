var code = document.querySelector('.js--cvv-code');
var cardCode = document.querySelectorAll('.js--card-code');
var totalPrice = document.querySelectorAll('.js--total-price');
var total = document.querySelectorAll('.js--total');
var price = document.querySelectorAll('.js--price');
var quantity = document.querySelectorAll('.js--quantity');
var plus = document.querySelectorAll('.js--plus-product');
var minus = document.querySelectorAll('.js--minus-product');
var countries = document.querySelectorAll('.js--countries');
var cities = document.querySelectorAll('.js--cities');

cardCode.forEach(function(c) {
	c.onkeypress = function (e) {
		return (/[0-9]/.test(String.fromCharCode(e.charCode)));
	}
});

code.onkeypress = function (e) {
	return (/[0-9]/.test(String.fromCharCode(e.charCode)));
}

function totalSum(list) {
	list.forEach(function(price) {
		price.innerHTML = parseInt(total[0].innerHTML) + parseInt(total[1].innerHTML) + parseInt(total[2].innerHTML);
	});
}

plus[0].addEventListener('click', function() {
	quantity[0].innerHTML = parseInt(quantity[0].innerHTML) + 1;
	total[0].innerHTML = parseInt(price[0].innerHTML) * parseInt(quantity[0].innerHTML);
	totalSum(totalPrice);
});

plus[1].addEventListener('click', function() {
	quantity[1].innerHTML = parseInt(quantity[1].innerHTML) + 1;
	total[1].innerHTML = parseInt(price[1].innerHTML) * parseInt(quantity[1].innerHTML);
	totalSum(totalPrice);
});

plus[2].addEventListener('click', function() {
	quantity[2].innerHTML = parseInt(quantity[2].innerHTML) + 1;
	total[2].innerHTML = parseInt(price[2].innerHTML) * parseInt(quantity[2].innerHTML);
	totalSum(totalPrice);
});

minus[0].addEventListener('click', function() {
	if (quantity[0].innerHTML > 1) {
		quantity[0].innerHTML = parseInt(quantity[0].innerHTML) - 1;
		total[0].innerHTML = parseInt(price[0].innerHTML) * parseInt(quantity[0].innerHTML);
		totalSum(totalPrice);
	}
});

minus[1].addEventListener('click', function() {
	if (quantity[1].innerHTML > 1) {
		quantity[1].innerHTML = parseInt(quantity[1].innerHTML) - 1;
		total[1].innerHTML = parseInt(price[1].innerHTML) * parseInt(quantity[1].innerHTML);
		totalSum(totalPrice);
	}
});

minus[2].addEventListener('click', function() {
	if (quantity[2].innerHTML > 1) {
		quantity[2].innerHTML = parseInt(quantity[2].innerHTML) - 1;
		total[2].innerHTML = parseInt(price[2].innerHTML) * parseInt(quantity[2].innerHTML);
		totalSum(totalPrice);
	}
});

countries.forEach(function(c) {
	c.addEventListener('change', function() {
		if (c.options[c.selectedIndex].text == 'USA') {
			cities.forEach(function(ct) {
				ct.options[0].text = 'California';
				ct.options[1].text = 'New York';
				ct.options[2].text = 'Florida';
			});
		}
		if (c.options[c.selectedIndex].text == 'Canada') {
			cities.forEach(function(ct) {
				ct.options[0].text = 'Monreal';
				ct.options[1].text = 'Toronto';
				ct.options[2].text = 'Ottava';
			});
		}
		if (c.options[c.selectedIndex].text == 'Great Britain') {
			cities.forEach(function(ct) {
				ct.options[0].text = 'London';
				ct.options[1].text = 'Bristol';
				ct.options[2].text = 'Glazgo';
			});
		}
	});
});
