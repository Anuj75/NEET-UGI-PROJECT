$(function(){
	var $mwo = $('.marquee-with-options');
	$('.marquee').marquee();
	$('.marquee-with-options').marquee({
		//speed in milliseconds of the marquee
		speed: 5000,
		//gap in pixels between the tickers
		gap: 50,
		//gap in pixels between the tickers
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		//on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
		pauseOnHover: true
	});
	
	//Direction upward
	$('.marquee-vert').marquee({
		direction: 'up',
		speed: 5000,
		pauseOnHover: true
	});

	//pause and resume links
	$('.pause').click(function(e){
		e.preventDefault();
		$mwo.trigger('pause');
	});
	$('.resume').click(function(e){
		e.preventDefault();
		$mwo.trigger('resume');
	});
	//toggle
	$('.toggle').hover(function(e){
		$mwo.trigger('pause');
	},function(){
		$mwo.trigger('resume');
	})
	.click(function(e){
		e.preventDefault();
	})
});
