(function ($, Drupal, once) {
  Drupal.behaviors.carousel = {
    attach: function (context, settings) {
      once("myCustomBehavior",
      "#block-sub-theme-views-block-hero-carousel-block-1",
      context).forEach(function (e) {
        
        // Removing img-responsive class of theme
        $(e).find("img").removeClass("img-responsive");
        
        // Adding slideshow functionality.
        $("#block-sub-theme-views-block-hero-carousel-block-1 .view-content").slick({
          dots: true,
          // autoplay: true,
          // autoplaySpeed: 2000,
          cssEase: "linear"
        });

        // Checking if the match is with INDA.
        ($(e).find(".slick-slide")).each(function (e,v) {
        $isMatchWithIndia = $(v).find(".match-title").text().search("IND") >= 0 ? 1 : 0;
        // Showing Hashtag only if IND match is selected.
        if($isMatchWithIndia){
          $(v).find('.tags').show();}
        });
      });
    },
  };
})(jQuery, Drupal, once);
