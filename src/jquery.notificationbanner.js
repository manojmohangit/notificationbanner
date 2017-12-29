(function($){
jQuery.fn.notificationBanner = buildNotificatioinBanner;
function buildNotificatioinBanner(options) {
	var settings = $.extend({
					'position':'bottom',
					'closeButton' : 'enabled'
					},options); 
	var outerContainer = jQuery('<div/>',{
									text : "Notification Banner"
								}); 		
	outerContainer.addClass("outer-container");
	jQuery(outerContainer).appendTo('body');
	return this;
}
}(jQuery));