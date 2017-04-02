$(document).foundation()


$(document).ready(function(){
	function mediaQuery(){
		var match = window.matchMedia("(max-width: 640px)");
		if (match.matches) {
			// $('.banner-content').addClass('small-centered');
			$('.banner').removeClass('fullHight');
		} else{
			$('.banner').addClass('fullHight');
			// $('.banner-content').removeClass('small-centered');
		}
	}

	mediaQuery();

	$(window).resize(function(){
		mediaQuery();
	});
})

