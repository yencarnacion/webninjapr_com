/**
 * Section Slider 1.0 - jQuery Powered
 *
 * http://www.webninjapr.com
 *
 * Copyright (c) 2011 Yamir Encarnacion (webninjapr.com)
 * 
 * Functionaliy: Expand/collapse sections.  
 *
 */


$(document).ready(function() {

var qstringparam = $.getURLParam("expand");
if (qstringparam == '4') {
 	$('.content4').show();
	$('.section_blurb').hide();
	$('.content_intro').hide();	
} else {
	$('.content_intro').show();
};

//$('.content_intro').slideDown('slow');
//$('.content_intro').show();
//$('.content3').show();
//$('.content4').show();

	$("a.s001").click(function() {
		if (($('.content_intro').css('display')) != 'block') {$('.content_intro').slideDown('normal');}
		$('.content3').hide();
		$('.content4').hide();
	
	return false;
	});	

	$("a.s002").click(function() {
		if (($('.content3').css('display')) != 'block') {$('.content3').slideDown('normal');}
		$('.content_intro').hide();
		$('.content4').hide();
		$('.section_blurb').hide();

	return false;
	});	


	$("a.s003").click(function() {
		if (($('.content4').css('display')) != 'block') {$('.content4').slideDown('normal');}
		$('.content_intro').hide();
		$('.content3').hide();
		$('.section_blurb').hide();

		return false;
	});	

		
	// Show the <div> overlay on top of an image 
	$('a').click(function() {
		
		if($(this).attr('rel') || $(this).attr('class') == 'pToggle') {
				//  
				if (($('.img_overlay').css('display')) != 'block') {
						$('.img_overlay').show('');
				} else {
						$('.img_overlay').hide('');}			
	} else {
			//
			//$('a.pimgslink').trigger('click');}
			//$('a.pimgslink').click();
			$(this).href();
			}
		
	return false;
	});

	/*
		$("a.pToggle").click(function() {
			if (($('.img_overlay').css('display')) != 'block') {
					$('.img_overlay').show('');
			} else {
					$('.img_overlay').hide('');}
	
			return false;
		});	
	
	*/
	
	//$(".botleft").height()

	$(".sameHeightBottom").equalHeights($(".botMiddleRight").height(),$(".botMiddleRight").height()).css("color","blue");


});