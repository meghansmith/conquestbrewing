$(document).ready(function(){
	
	$(".menuHide").addClass('hide');
	$('#navButton').click(function(){
		$(".menuHide").slideToggle('fast');
	});

	$(function () {
	    $(window).scroll(function () {
	        if ($(this).scrollTop() > 575) {
	        	$('body').removeClass('notFixed');
	            $('body').addClass('fixed');
	        } else if ($(this).scrollTop() <= 575) {
	            $('body').removeClass('fixed');
	            $('body').addClass('notFixed');

	        }
	    });
	});
	$('a').click(function(){
   $('html, body').animate({
       scrollTop: $( $.attr(this, 'href') ).offset().top
   }, 500);
   return false;
});
});
