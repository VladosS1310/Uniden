define([
    "jquery"
], function ($) {
    'use strict';

    $(function () {

        $('.modal').prepend("<div class='modal-backdrop fade'></div>");

        $('.casestuides').on('click', '.modal-link', function (event) {
           let element = $(this).data('target');
            $(element).addClass('in').show();
            $('body').addClass('modal-open');
            $('.modal-backdrop').addClass('in');
        });

        $('.modal').on('click', '.close', function (event) {
           let element = $(this).closest('.modal');
            $(element).removeClass('in').hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').removeClass('in');
        });

        $('.modal-backdrop').click(function (event) {
            $('.modal').removeClass('in').hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').removeClass('in');
        });
    });
});
