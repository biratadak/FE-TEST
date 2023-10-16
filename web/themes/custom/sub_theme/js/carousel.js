(function ($, Drupal, once) {
  Drupal.behaviors.carousel = {
    attach: function (context, settings) {

      once("myCustomBehavior", "#block-sub-theme-views-block-hero-carousel-block-1", context).forEach(function (e) {
        // Removing img-responsive class of theme
        $(e).find("img").removeClass("img-responsive");
        // Adding slideshow functionality.
        $('#block-sub-theme-views-block-hero-carousel-block-1 .view-content').slick();
      });

    },
  };
})(jQuery, Drupal, once);
