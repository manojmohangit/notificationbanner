(function ( $ ) {
    $.fn.notificationBanner = function( options ) {

        var settings = $.extend({
            height: "20px",
            padding: "10px",
            background: "#7ee68b",
            width: "100%"
        }, options );

        var styleContainer = {
            position: "fixed",
            bottom: "0px",
            transform: "translateY("+(Number(settings.height.split("px")[0])+Number(settings.padding.split("px")[0])*2)+"px)",
            width: settings.width,
            height: settings.height,
            padding: settings.padding,
            background: settings.background,
            left: "0px",
            textAlign: "center",
            transition: "all 0.5s ease-out"
        }

        var notificationBannerContainer = $("<div/>");
        notificationBannerContainer.css(styleContainer);
        notificationBannerContainer.text(settings.text);
        this.append(notificationBannerContainer);

        setTimeout(function(){notificationBannerContainer.css({transform: "translateY(0px)"});}, 0)

        return this; 
 
    };
 
}( jQuery ));