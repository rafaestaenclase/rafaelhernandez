
$(".background").height($("body").height());
$( window ).resize(function() {
  $(".background").height($("body").height());
});



$('.game').hover(function() {
	$('.social').css('opacity', '0.9');
	$('.music').css('opacity', '0.9');
	$('.backgroundGame').css("background-image", "url(img/gameBackground.jpg)"); 
	$('.backgroundGame').fadeIn(1000);
}, function(){
	$('.social').css('opacity', '1');
	$('.music').css('opacity', '1');
	$('.backgroundGame').stop(true);
    $('.backgroundGame').fadeOut(1000); 
});

$('.social').hover(function() {
	$('.game').css('opacity', '0.9');
	$('.music').css('opacity', '0.9');
	$('.backgroundSocial').css("background-image", "url(img/socialBackground.jpg)"); 
	$('.backgroundSocial').fadeIn(1000);
}, function(){
	$('.game').css('opacity', '1');
	$('.music').css('opacity', '1');
	$('.backgroundSocial').stop(true);
    $('.backgroundSocial').fadeOut(1000); 
});

$('.music').hover(function() {
	$('.game').css('opacity', '0.9');
	$('.social').css('opacity', '0.9');
	$('.backgroundMusic').css("background-image", "url(img/musicBackground.jpg)"); 
	$('.backgroundMusic').fadeIn(1000);
}, function(){
	$('.game').css('opacity', '1');
	$('.social').css('opacity', '1');
	$('.backgroundMusic').stop(true);
    $('.backgroundMusic').fadeOut(1000); 
});