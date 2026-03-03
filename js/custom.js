/**************************************
    File Name: custom.js
**************************************/

(function ($) {
    "use strict";
    /**************************************
    TOOLTIP
    **************************************/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    /**************************************
    LOADER
    **************************************/
    $(window).load(function () {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    /**************************************
    BACK TO TOP
    **************************************/
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({ bottom: "25px" });
        } else {
            jQuery('.dmtop').css({ bottom: "-100px" });
        }
    });
    jQuery('.dmtop').click(function () {
        jQuery('html, body').animate({ scrollTop: '0px' }, 800);
        return false;
    });

    /**************************************
    COUNTER
    **************************************/
    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1;

        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function () { count($this) }, 50);
        }
    }

    $(".stat-timer").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });


    // function getURL() { window.location.href; } 
    // var protocol = location.protocol;
    //  $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
    /**************************************
    CAROUSEL
    **************************************/
    $('.carousel').carousel({
        interval: 3000
    })
})(jQuery);

/**************************************
TABBED
**************************************/
function openCategory(evt, catName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
}

/**************************************
lightbox popup
**************************************/
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

/**************************************
portfolio
**************************************/
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

/**************************************
MARQUEE PAUSE/RESUME ON HOVER
**************************************/
$(document).ready(function() {
  $('.marquee-container').on('mouseenter', function() {
    $(this).find('.marquee-wrapper').css('animation-play-state', 'paused');
  });
  
  $('.marquee-container').on('mouseleave', function() {
    $(this).find('.marquee-wrapper').css('animation-play-state', 'running');
  });
});

/**************************************
TESTIMONIAL CAROUSEL
**************************************/
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (index >= slides.length) {
        currentTestimonialIndex = 0;
    } else if (index < 0) {
        currentTestimonialIndex = slides.length - 1;
    } else {
        currentTestimonialIndex = index;
    }
    
    // Hide all slides and remove active class from all dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide and activate corresponding dot
    if (slides[currentTestimonialIndex]) {
        slides[currentTestimonialIndex].classList.add('active');
    }
    if (dots[currentTestimonialIndex]) {
        dots[currentTestimonialIndex].classList.add('active');
    }
}

function moveTestimonial(direction) {
    showTestimonial(currentTestimonialIndex + direction);
}

function currentTestimonial(index) {
    showTestimonial(index);
}

// Auto-advance testimonials every 5 seconds
setInterval(function() {
    moveTestimonial(1);
}, 20000);

// Initialize first testimonial
document.addEventListener('DOMContentLoaded', function() {
    showTestimonial(0);
});
