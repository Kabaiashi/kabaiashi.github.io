window.addEventListener('DOMContentLoaded', function() {

    'use strict';

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



});
