$(function() {
    $('.slick-top').slick({
    	prevArrow: '',
    	nextArrow: '',
    	autoplay: true,
  		autoplaySpeed: 1500,
  		dots: true,
 		infinite: true
	});
	
	$(".fa-search").on("click", function() {
		$(".search").toggle(1000);
	});

	$(".menu__beans").on("click", function() {
		$(".menu__card-breakfasts, .menu__card-drinks").css("display", "none");
		$(".menu__card-beans").fadeIn(500);
		$(".menu__breakfast, .menu__drinks").removeClass("menu__active");
		$(".menu__beans").addClass("menu__active");
		$(".menu__coffee").addClass("d-lg-block");
		$(".menu__text").removeClass("col-12");
		$(".menu__text").addClass("col-lg-8");
		$(".menu__all").css("display", "block");
	});

	$(".menu__drinks").on("click", function() {
		$(".menu__card-breakfasts, .menu__card-beans").css("display", "none");
		$(".menu__card-drinks").fadeIn(500);
		$(".menu__breakfast, .menu__beans").removeClass("menu__active");
		$(".menu__drinks").addClass("menu__active");
		$(".menu__coffee").addClass("d-lg-block");
		$(".menu__text").removeClass("col-12");
		$(".menu__text").addClass("col-lg-8");
		$(".menu__all").css("display", "block");
	});

	$(".menu__breakfast").on("click", function() {
		$(".menu__card-drinks, .menu__card-beans").css("display", "none");
		$(".menu__card-breakfasts").fadeIn(500);
		$(".menu__drinks, .menu__beans").removeClass("menu__active");
		$(".menu__breakfast").addClass("menu__active");
		$(".menu__coffee").addClass("d-lg-block");
		$(".menu__text").removeClass("col-12");
		$(".menu__text").addClass("col-lg-8");
		$(".menu__all").css("display", "block");
	});

	$(".menu__all").click (function(evt) {
		evt.preventDefault();
		$(".menu__coffee").removeClass("d-lg-block");
		$(".menu__text").addClass("col-12");
		$(".menu__text").removeClass("col-lg-8");
		$(".menu__card-breakfasts, .menu__card-drinks, .menu__card-beans").fadeIn(500);
		$(".menu__breakfast, .menu__drinks, .menu__beans").addClass("menu__active");
		$(".menu__all").css("display", "none");
	});

	$('.reviews__carousel').slick({
		dots: true,
		arrows: false
	});

	$('select').selectize();

	ymaps.ready(init);
    function init(){ 
		var center1 = [64.143943, -21.939843];  
		var center2 = [-4.581565, 55.432592]; 
        var myMap = new ymaps.Map("map", {
            center: center1,
            zoom: 16
		});
		var placemark1 = new ymaps.Placemark(center1, {
			balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
			iconContent: "Caffeinate, Iceland"}
		, {
			preset: "islands#yellowStretchyIcon",
			balloonCloseButton: false,
			hideIconOnBalloonOpen: false
		});
		myMap.geoObjects.add(placemark1);
		var placemark2 = new ymaps.Placemark(center2, {
			balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
			iconContent: "Caffeinate, Seychelles"}
		, {
			preset: "islands#yellowStretchyIcon",
			balloonCloseButton: false,
			hideIconOnBalloonOpen: false
		});
		myMap.geoObjects.add(placemark2);
    }
});