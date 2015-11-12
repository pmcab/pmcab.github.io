$(function() {
	window.scrollReveal = new scrollReveal();
	"use strict";
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});

	// Backstretchs
	$("#header").backstretch("images/3.jpg");
	$("#services").backstretch("images/3.jpg");
	
	// Countdown
	//Comment Pat: set the count down date here - american style !!
	$('.countdown').downCount({
		date: '12/31/2015 22:00:00',
		offset: +10
	});			
    
});