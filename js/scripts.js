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
		var center = [64.154267, -22.029623];
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты. Порядок по умолчанию: «широта, долгота». Чтобы не определять координаты центра карты вручную, воспользуйтесь инструментом Определение координат.
            center: center,
            // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
            zoom: 14
		});
		var placemark = new ymaps.Placemark(center, {
			balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
			iconContent: "Caffeinate"}
		, {
			preset: "islands#yellowStretchyIcon",
			// Отключаем кнопку закрытия балуна.
			balloonCloseButton: false,
			 // Балун будем открывать и закрывать кликом по иконке метки.
			hideIconOnBalloonOpen: false
		});
		myMap.geoObjects.add(placemark);
    }
});