$(function() {
    $('.slick-top').slick({
    	prevArrow: '',
    	nextArrow: '',
    	//autoplay: true,
  		autoplaySpeed: 2000,
  		dots: true,
 		infinite: true
	});
	
	$(".fa-search").on("click", function() {
		$(".search").toggle(1000);
	});
});