define([
    "jquery"
], function ($) {
    'use strict';

    /** checkout/#shipping page. Shipping Address -> build attribute placeholder **/
    function changeForm(input){
        $.each(input, function(index,value){
            let _input = $(value);
            let parent = _input.parents('.field');
            let el = parent.find('.label > span');
            parent.find('.label').addClass('label-hide');
            _input.attr('placeholder', el.text());
        });
    }
    let checkoutPage = $('#checkout');
    let counter = 0;
    function deferredCall() {
        let form = $('#shipping-new-address-form input');

        if(form.length > 0){
            counter = 0;
            changeForm(form);

        } else if(counter < 200){
            counter +=1;
            setTimeout(deferredCall, 500);
        } else {
            counter = 0;
        }
    }
    checkoutPage.length >0 ? deferredCall() : null;
    /** End checkout/#shipping page. Shipping Address -> build attribute placeholder **/


    $('.js-hook__openModal').on('click', function () {
        let nameModal = $(this).attr('data-name-modal');
        $('.' + nameModal).css('display', 'block');
        $('body').css({'position': 'fixed','left': 0,'right': 0});
    });

    $('.js-hook__closeModal').on('click', function () {
        let nameModal = $(this).attr('data-name-modal');
        $('.' + nameModal).css('display', 'none');
        $('body').css({'position': 'initial','left': 0,'right': 0});
    });

    $(document).find(".modal-backdrop").removeClass("modal-backdrop");

        function windowSize(){
            if ($(window).width() <= '768') {
                $('.main').addClass('white-boxes');
            } else {
                $('.main').removeClass('white-boxes');
            }
        }
    windowSize();
        $(window).on('resize',windowSize);
    jQuery('.container-mobile-lang').appendTo(jQuery('.menu-under-mob'));
    jQuery('.back-top-link').on('click', function (e) {
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    function swipe_animate_true(){
        jQuery('.mob-menu-tuggle').addClass('active');
        jQuery('.mob-menu').stop(true).animate({'left':'0'},300);
    }
    function swipe_animate_false(){
        jQuery('.mob-menu-tuggle').removeClass('active');
        jQuery('.mob-menu').stop(true).animate({'left': "-"+outerwidth+"px"},400);
    }
    jQuery('.mob-menu-tuggle').click(function(){
        swipe_animate_true();
        //mini_form_hide();
        if(jQuery(this).parents('body').hasClass('ind')){
            jQuery(this).parents('body').removeClass('ind');
            swipe_animate_false();
            return false
        }
        else{
            swipe_animate_makeeasy_false();
            jQuery(this).parents('body').addClass('ind');
            swipe_animate_true()
            return false
        }
    })
    var outerheight = jQuery(".header-top-mob").outerHeight();
    var outerwidth = jQuery(".mob-menu").outerWidth();

    jQuery('.mob-menu').height(jQuery(window).height()-(1*outerheight));
    jQuery("body").css("margin-top",outerheight+"px");
    jQuery(".mob-menu").css("padding-bottom", "55px");
    jQuery(".mob-menu").css("left", "-"+outerwidth+"px");
    jQuery(window).resize(function() {
        outerheight = jQuery(".header-top-mob").outerHeight();
        outerwidth = jQuery(".mob-menu").outerWidth();
        jQuery('.mob-menu').height(jQuery(window).height()-(1*outerheight)-55);
        jQuery("body").css("margin-top", outerheight+"px");
        jQuery(".mob-menu").css("padding-bottom", "55px");

        if(jQuery('body').hasClass('ind')){ } else {
            jQuery(".mob-menu").css("left", "-"+outerwidth+"px");
        }
    });



    function swipe_animate_makeeasy_true(){
        jQuery('.mobile-contact-botm').addClass('open');
        jQuery('.mobile-contact-botm').stop(true).animate({'margin-top':'0'},300);
    }
    function swipe_animate_makeeasy_false(){
        jQuery('.mobile-contact-botm').removeClass('open');
        jQuery('.mobile-contact-botm').stop(true).animate({'margin-top': "-120px"},400);
    }

    jQuery('.header-right-mob1').click(function(){
        if(jQuery('.mobile-contact-botm').hasClass('open')){
            swipe_animate_makeeasy_false();
        }else {
            if(jQuery('body').hasClass('ind')){
                jQuery('body').removeClass('ind');
                swipe_animate_false(); }
            swipe_animate_makeeasy_true();
        }
    });
    jQuery('.product.media').append('<div class="footorama-zoom"></div>');
});
