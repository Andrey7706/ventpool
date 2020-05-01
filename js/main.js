"use strict";

$(document).ready(function(){

    /* Слайдер */

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        touchMove: false,
        swipe: false,

        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="reviews_pagination-item">'+(i+1)+'</a>';
        }
    });


    /* Модальное окно политики */

    $('body').on('click','.modal-polit, .footer-link-polit, .consultant-modal-polit, .futures-modal-polit', function(){

        $.fancybox.open({
            src  : '#modal-polit-fancybox',
            type : 'inline',
            smallBtn: false,
            buttons: ""
        });

        return false;
    });

    // $('.main').on('click','.contact_link', function(){

    //     $.fancybox.open({
    //         src  : '#modal-form-fancybox',
    //         type : 'inline',
    //         smallBtn: false,
    //         buttons: ""
    //     });

    //     return false;
    // });


    // $('[data-fancybox]').fancybox({
    //     youtube : {
    //         showinfo : 0,
    //         animationEffect: "zoom-in-out",
    //         animationDuration: 600
    //     }
    // });

    /*  Анимация AOS  */
    aos_onload();

    function aos_onload(){
        setTimeout(function() {
            AOS.init();

            AOS.init({
                duration: 800,
                once: true
            });
        }, 10);
    }

    /* Правая точечная навигация */

    redrawDotNav();

    $(window).bind('scroll',function(e){
        redrawDotNav();
    });
    $('.n_1').click(function(){
        $('html, body').animate({scrollTop:$('#b_1').offset().top - 50}, 1000);return false;
    });
    $('.n_2').click(function(){
        $('html, body').animate({scrollTop:$('#b_2').offset().top - 50}, 1000);return false;
    });
    $('.n_3').click(function(){
        $('html, body').animate({scrollTop:$('#b_3').offset().top + 50}, 1000);return false;
    });
    $('.n_4').click(function(){
        $('html, body').animate({scrollTop:$('#b_4').offset().top - 50}, 1000);return false;
    });
    $('.n_5').click(function(){
        $('html, body').animate({scrollTop:$('#b_5').offset().top - 400}, 1000);return false;
    });

});


function redrawDotNav(){
    var section1Top =  $('#b_1').offset().top - 60;
    var section2Top =  $('#b_2').offset().top - 60;
    var section3Top =  $('#b_3').offset().top + 40;
    var section4Top =  $('#b_4').offset().top - 60;
    var section5Top =  $('#b_5').offset().top - 410;

    $('#fix_nv a').removeClass('actv_b').prev('span').hide();

    if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
        $('#fix_nv .n_1').addClass('actv_b').prev('span').show();
    } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
        $('#fix_nv .n_2').addClass('actv_b').prev('span').show();
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
        $('#fix_nv .n_3').addClass('actv_b').prev('span').show();
    } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
        $('#fix_nv .n_4').addClass('actv_b').prev('span').show();
    } else if ($(document).scrollTop() >= section5Top){
        $('#fix_nv .n_5').addClass('actv_b').prev('span').show();
    }
};

$('#fix_nv a').hover(
    function(){
        console.log("hover");
        $(this).prev('span').show();
    },
    function(){
        if (!$(this).hasClass("actv_b")) {
            $(this).prev('span').hide();
        }
    }
);


/* Библиотека alertify */

alertify.set('notifier', 'position', 'bottom-right');
alertify.set('notifier', 'delay', 10);

document.addEventListener('wpcf7mailsent', function( event ) {
    alertify.success(event.detail.apiResponse.message);
}, false);

document.addEventListener('wpcf7invalid', function( event ) {
    alertify.warning(event.detail.apiResponse.message);
}, false);

document.addEventListener('wpcf7mailfailed', function( event ) {
    alertify.error(event.detail.apiResponse.message);
}, false);


$(document).on('click', '.wpcf7-submit', function(e){
    if( $('.ajax-loader').hasClass('is-active') ) {
        e.preventDefault();
        return false;
    }
});


/* Маска телефона */

$('input[type="tel"]').mask("+7 (999) 999-99-99");


