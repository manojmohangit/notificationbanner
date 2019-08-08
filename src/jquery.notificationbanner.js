(function ( $ ) {
    $.fn.notificationBanner = function( options ) {

        var settings = $.extend({
            height: "20px",
            padding: "10px",
            background: "#7ee68b",
            width: "100%",
            position: "bottom"
        }, options );

        
        var styleContainer = {
            position: "fixed",
            bottom: settings.position == "top" ? "auto" : "0px" ,
            top: settings.position == "top" ? "0px" : "auto",
            width: settings.width,
            height: settings.height,
            padding: settings.padding,
            background: settings.background,
            left: "0px",
            textAlign: "center",
            transition: "all 0.5s ease-out"
        }

        styleContainer.transform =  settings.position == "top" ? "translateY(-"+(Number(settings.height.split("px")[0])+Number(settings.padding.split("px")[0])*2)+"px)" : "translateY("+(Number(settings.height.split("px")[0])+Number(settings.padding.split("px")[0])*2)+"px)";
        
        var notificationBannerContainer = $("<div/>");
        notificationBannerContainer.css(styleContainer);
        notificationBannerContainer.html(settings.text.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi,""));
        this.append(notificationBannerContainer);

        setTimeout(function(){notificationBannerContainer.css({transform: "translateY(0px)"});}, 0)

        return this; 
 
    };
 
}( jQuery ));