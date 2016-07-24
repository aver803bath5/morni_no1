$(document).ready(function(){
	$('#menu').click(function(event) {
		$('.nav').animate({width: '15rem', padding: '0rem 3rem 0rem 1rem'}, 500);
		$('.close').finish().show();
		$('.nav ul').finish().show();
		event.stopPropagation();
	});
	$('#close_menu').click(function(event) {
		$('.nav').animate({visibility: 'hidden',width: '0rem', padding: '0rem'}, 500);
		$('.nav ul').finish().hide(500);
		$('.close').finish().hide(500);
	});
	$('div').not('#menu, .nav').click(function(event) {
		$('.nav').animate({visibility: 'hidden',width: '0rem', padding: '0rem'}, 500);
		$('.nav ul').finish().hide(500);
		$('.close').finish().hide(500);
	});
})
