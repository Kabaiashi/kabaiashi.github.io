function clear(e){e.forEach(function(e){e.classList.remove("is-active")})}function scrollTo(e,t,l){if(!(l<0)){var n=t-e.scrollTop,o=n/l*2;setTimeout(function(){e.scrollTop=e.scrollTop+o,scrollTo(e,t,l-2)},10)}}function hide(e){e.forEach(function(e){e.style.opacity="0"})}var dropdownBtn=document.querySelector(".js-dropdown-btn"),mainMenu=document.querySelector(".js-dropdown"),close=document.querySelector(".js-close"),field=document.querySelectorAll(".js-field"),formBtn=document.querySelector(".js-form-btn"),scrollBtn=document.querySelector(".js-scroll"),slide=document.querySelectorAll(".js-slide"),slideBtn=document.querySelectorAll(".js-slider-btn"),bd=document.querySelector("body"),ht=document.querySelector("html");dropdownBtn.addEventListener("click",function(){mainMenu.style.top="0"}),close.addEventListener("click",function(){mainMenu.style.top="-1000px"}),window.onresize=function(){document.body.clientWidth>479&&mainMenu.hasAttribute("style")&&mainMenu.removeAttribute("style")},formBtn.addEventListener("click",function(){field.forEach(function(e){""!=e.value||e.classList.contains("field-error")||e.classList.add("field-error"),e.valid||e.classList.contains("field-error")||e.classList.add("field-error")})}),scrollBtn.addEventListener("click",function(e){e.preventDefault(),scrollTo(bd,0,50),scrollTo(ht,0,50)}),window.onload=function(){slideBtn.forEach(function(e,l){e.addEventListener("click",function(){clear(slideBtn),this.classList.add("is-active"),hide(slide),slide[l].style.opacity="1",clearInterval(t)})}),slide[0].style.opacity="1";var e=0,t=setInterval(function(){e++,e>=slide.length?(e=0,hide(slide),slide[e].style.opacity="1",clear(slideBtn),slideBtn[e].classList.add("is-active")):(hide(slide),slide[e].style.opacity="1",clear(slideBtn),slideBtn[e].classList.add("is-active"))},5e3)};