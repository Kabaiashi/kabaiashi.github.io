window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //Header

    let tabBox = document.querySelector('.info-header'),
        tabItems = document.querySelectorAll('.info-header-tab'),
        tabContents = document.querySelectorAll('.info-tabcontent');

    function hideContents(a) {
        for (let i = a; i < tabContents.length; i++) {
            tabContents[i].classList.remove('show');
            tabContents[i].classList.add('hide');
        }
    }
    hideContents(1);

    function showContents(b) {
        if(tabContents[b].classList.contains('hide')) {
            tabContents[b].classList.remove('hide');
            tabContents[b].classList.add('show');
        }
    }

    tabBox.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tabItems.length; i++) {
                if (target == tabItems[i]) {
                    hideContents(0);
                    showContents(i);
                    break;
                }
            }
        }
    });
    // Header ended

    // Timer

    let deadline = '2020-04-05';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);

    
    // Popup window
    
    let more = document.querySelector('.more'),
        popup = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        popup.style.display = 'block';
        this.classList.add('.more-splash');
        document.body.style.overflow = 'hidden';
    });

    popupClose.addEventListener('click', function() {
        popup.style.display = 'none';
        more.classList.remove('.more-splash');
        document.body.style.overflow = '';
    });

    //Form submit

    // let message = {
    //     loading: "Loading...",
    //     success: "Thank you. We will contact you soon",
    //     failure: "Something went wrong"
    // };

    // let form = document.querySelector('.main-form'),
    //     input = form.getElementsByTagName('input'),
    //     statusMessage = document.createElement('div');

    // statusMessage.classList.add('status');

    // form.addEventListener('submit', function(event) {
    //     event.preventDeafault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //     let formData = new FormData(form);
    //     request.send(formData);

    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if(request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //     for (let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     }
    // });
    let message = {
        loading: 'Loading...',
        success: 'Thank you! We will contact you back soon.',
        failure: 'Ups... Something is wrong...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
    
});




