$(function() {

	$('.category__title').click(function(){
		$(this).toggleClass('open', 1000);
		$(this).next('.category__list').toggleClass('open', 1000);
	});
	
	$("#slider_price").slider({
		max: 1000,
		min: 10,
		range: true,
		values: [190,728],
		slide: function( event, ui ) {
			$('input[name="minPrice"]').val( '$' + ui.values[0] );
			$('input[name="maxPrice"]').val( '$' + ui.values[1] );
		}
	});

	$('input[name="minPrice"]').val( '$' + $("#slider_price").slider('values',0) );
	$('input[name="maxPrice"]').val( '$' + $("#slider_price").slider('values',1) );


});
