(function($){
	"use strict";
    $(document).ready(function(){
        $('.slides').slick({
			dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
			//centerMode: true,
            //variableWidth: true,
            adaptiveHeight: true,
			focusOnSelect: true,
			autoplaySpeed:6000,
			//asNavFor: '.slider-nav'
        });  
    });
})(jQuery);