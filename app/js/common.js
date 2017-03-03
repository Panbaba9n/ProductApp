'use strict';
$(function() {

	$(".carousel-reviews").owlCarousel({

		loop:true,
		nav: true,
		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		responsive:{
			 0:{
			
					items:1,
			}
		}
	});

	function heightses() {
		$(".adv-item").height('auto').equalHeights();
		$(".serv-item").height('auto').equalHeights();		
		$(".price-item-head").height('auto').equalHeights();		
		$(".price-item-txt").height('auto').equalHeights();		
	}
	heightses();
	$(window).resize(function() {
		heightses();
	});

});


