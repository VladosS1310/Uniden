define([
	"jquery"
], function ($) {
	'use strict';

	var timer = null;
	$(window).bind('resize.resizeEnd', function () {
		if (timer) {
			clearInterval(timer);
		}
		timer = setInterval(function () {
			clearInterval(timer);
			$(window).trigger('resizeEnd');
		}, 250);
	});

	$(function () { // to ensure that code evaluates on page load
		var $menuTrigger = $('.navigation-trigger');

		if ($menuTrigger.length) {
			$menuTrigger.on('click', function (ev) {
				ev.preventDefault();
				$(this).toggleClass('active');
				$(this).next('.menu').slideToggle({
					duration: 200
				});
			});

			$(window).on('resizeEnd', function () {
				$menuTrigger.removeClass('active');
				$menuTrigger.next('.menu').removeAttr('style');
			});
		}
	});
});
