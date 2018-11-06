$(function() {

	$('.category__title').click(function(){
		$(this).toggleClass('open', 1000);
		$(this).next('.category__list').toggleClass('open', 300);
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

	$('#cart, .title_cart').click(function(){
		$('#cart_box').toggleClass('open');
	});

	$('#sign').click(function(){
		$('#black_fill').toggleClass('open');
		$('#modal').toggleClass('open');
	});

	$('#close_modal, #black_fill').click(function(){
		$('#black_fill').toggleClass('open');
		$('#modal').toggleClass('open');
	});

	$('#search').click(function(){
		$('#search_panel').toggleClass('open');
	});


	// $('#load_more').click(function(event){
	// 	event.preventDefault();
	// 	$('.list_product').append('<a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><span class="tag">new</span><span class="product__img"><img src="img/products/01.png"></span><h2>Our Legacy Splash Jacquard Knit</h2><p class="color">Black Grey Plants</p><p class="price">$290</p></a><a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><span class="tag">new</span><span class="product__img"><img src="img/products/01.png"></span><h2>Our Legacy Splash Jacquard Knit</h2><p class="color">Black Grey Plants</p><p class="price">$290</p></a><a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><span class="tag">new</span><span class="product__img"><img src="img/products/01.png"></span><h2>Our Legacy Splash Jacquard Knit</h2><p class="color">Black Grey Plants</p><p class="price">$290</p></a>');
	// });


});
