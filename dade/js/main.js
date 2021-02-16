
$('.slick-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: $('.slick-arrow--next'),
    prevArrow: $('.slick-arrow--prev'),
    // useTransform: false,
    // infinite: true,
    // autoplay: true,

    responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        // fade: true
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//MOB-NAVIGATION CLOSE

$( '.mob-navigation__link' ).on("touchstart click", function(){
  $('.mob-navigation__checkbox').prop("checked", false);
});

// //SMOOTH SCROLLING
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".js-smooth-nav").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "#portfolio-grid") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//HOME BUTTON Functionality
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('#js-homeBtn').fadeIn();
  } else {
    $('#js-homeBtn').fadeOut();
  }
});

//Accordion functionality
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//Fade in animation
$(window).on("load", function() {
  function fade() {
    var animation_height = $(window).innerHeight() * 0.25;
    var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

    $('.fade').each(function() {
      var objectTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      if ( objectTop < windowBottom ) {
        if ( objectTop < windowBottom - animation_height ) {
          // $(this).html( 'fully visible' );
          $(this).css( {
            transition: 'opacity 0.1s linear',
            opacity: 1
          } );
        } else {
          // $(this).html( 'fading in/out' );
          $(this).css( {
            transition: 'opacity 0.25s linear',
            opacity: (windowBottom - objectTop) * ratio
          } );
        }
        } else {
          // $(this).html( 'not visible' );
          $(this).css ( 'opacity', 0 );
        }
      });
    }
    $('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {
      fade();
    });
});

//Sliding menu functionality
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  let headerHeight = document.querySelector('.site-header');
  if (document.body.scrollTop > headerHeight.offsetHeight ||
    document.documentElement.scrollTop > headerHeight.offsetHeight) {
    let scrollNav = document.getElementById('scrollNav')
    scrollNav.style.top = "0";
    scrollNav.style.boxShadow = "0 .5rem 1.5rem rgba($color - black, .2)";
    scrollNav.style.padding = "1rem 2.5rem 1rem 10rem";
  } else {
    scrollNav.style.top = "-8.5rem";
  }
}

//Hide external links from indexation
$('a.js-link').click(function() {
  window.open($(this).attr("rel"));
  return false;
});
