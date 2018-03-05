$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 10) {
            $('#menu').addClass('change');
        }
        else {
            $('#menu').removeClass('change');
        }
    });
});


$(document).ready(function(){

    $("a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});


function slideSwitch() {
    var $active = $('#slideshow div.active');

    if ( $active.length == 0 ) $active = $('#slideshow div:last');

    var $next = $active.next().length ? $active.next()
        : $('#slideshow div:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 7000 );
});



// This changes everything
"use strict";

// retrieve the element
var element = document.getElementById("center");

// reset the transition by...
element.addEventListener("click", function(e){
    e.preventDefault;

    // -> removing the class
    element.classList.remove("center");

    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // element.offsetWidth = element.offsetWidth;

    void element.offsetWidth;

    // -> and re-adding the class
    element.classList.add("run-animation");
}, false);


