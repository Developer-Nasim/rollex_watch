(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".deloonip-body").niceScroll(".wrepper",{cursorcolor:"#FFA625"});

         $('select').niceSelect();


    });


    jQuery(window).load(function(){


    });


}(jQuery));	