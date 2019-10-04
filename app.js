
$(document).ready(function() {
	var videobackground = new $.backgroundVideo($('body'), {
	 	"align": "centerXY",
		"width": 1280,
		"height": 720,
		"path": "videos/",
		"filename": "videoplayback1",
		"types": ["mp4","ogg","webm"],
		"preload": true,
		"autoplay": true,
		"loop": true
	 });
});

$('.artists').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.photos').slick({
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});