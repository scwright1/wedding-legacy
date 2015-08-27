$(document).ready(function() {
	$('.us-container').hover(function() {
			if(document.documentElement.clientWidth >= 768) {
				statsFadeIn();
			}
		}, function() {
			if(document.documentElement.clientWidth >= 768) {
				statsFadeOut();
			}
		}
	);

	$(window).resize(function() {
		if(document.documentElement.clientWidth < 768) {
			$('.small-marriage-text').css('display','none');
		} else {
			$('.small-marriage-text').css('display', 'block');
		}
	});
});	

function statsFadeIn() {
	$('.big-marriage-text').fadeOut(300);
	$('.small-marriage-text').fadeOut(300);
	//do stats processing
	$('.marriage-stats').fadeIn(300);
	$('.marriage-stats').css('display','block');
	$('.big-marriage-text').css('display','none');
	$('.small-marriage-text').css('display','none');
}

function statsFadeOut() {
	//remove stats processing
	$('.marriage-stats').fadeOut(300);
	$('.marriage-stats').css('display','none');
	$('.big-marriage-text').fadeIn(300);
	$('.small-marriage-text').fadeIn(300);
	$('.big-marriage-text').css('display','block');
	$('.small-marriage-text').css('display','block');
}