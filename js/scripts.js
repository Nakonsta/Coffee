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
		$(".search").toggle( "slow", function() {
			$(".search").css("display", "block");
		});
	});
});