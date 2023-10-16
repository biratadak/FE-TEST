(function ($, Drupal, once) {
  Drupal.behaviors.carousel = {
    attach: function (context, settings) {
      once(
        "myCustomBehavior",
        "#block-sub-theme-views-block-hero-carousel-block-1",
        context
      ).forEach(function (e) {
        // Removing img-responsive class of theme
        $(e).find("img").removeClass("img-responsive");
        // Adding slideshow functionality.
        $(
          "#block-sub-theme-views-block-hero-carousel-block-1 .view-content"
        ).slick();

        // Checking if IND match is selected for first page load.
        $currentSlideCode = $(".slick-active ").find(
          ".field--name-field-team-code a"
        );
        $currentSlideCode.each(function (e) {
          if ($(this).html() == "IND") {
            $(".slick-active").find(".tags").show();
          }
        });

        // Showing Hashtag only if IND match is selected.
        $(".slick-arrow").click(function () {
          $currentSlideCode = $(".slick-active ").find(
            ".field--name-field-team-code a"
          );
          $currentSlideCode.each(function (e) {
            if ($(this).html() == "IND") {
              $(".slick-active").find(".tags").show();
            }
          });
        });
      });
    },
  };
})(jQuery, Drupal, once);
