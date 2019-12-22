$(window).on("load", function () {
  /*---------------------------------   swiper sliders    -------------------------------*/

  var swiper;
  $(".swiper-js").each(function () {
    var _this = $(this),
      container = _this.find(".swiper-container");
    if (_this.hasClass("articleSlider")) {
      swiper = new Swiper(container, {
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 15000,
        },
        pagination: {
          el: $(this).find(".swiper__pagination"),
          type: 'progressbar'
        },
        navigation: {
          nextEl: $(this).find(".swiper-button-prev"),
          prevEl: $(this).find(".swiper-button-next")
        },
        breakpoints: {
          1060: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      });
    }
  });
  $(".swiper-container").hover(function () {
    swiper.autoplay.stop();
  }, function () {
    swiper.autoplay.start();
  });

});

$(document).ready(function () {

  /*---------------------------------   counters slider   -------------------------------*/

  function getNextRate() {
    return Math.floor(Math.random() * (30000 - 5000 + 1)) + 5000;
  }

  function randomNumb() {
    var counterOnline = $(".count__number_online");
    counterOnline.each(function (index) {
      $(this).text(Math.floor(Math.random() * (3000 - 0 + 1)) + 0);
    });
  }
  randomNumb();
  setTimeout(function foo() {
    randomNumb();

    setTimeout(foo, getNextRate());
  }, getNextRate());

  /*---------------------------------   counters top block   -------------------------------*/

  var counterDate = new Date();
  var currentGirlOnline = (counterDate.getHours() * 60 * 60 + counterDate.getMinutes() * 60 + counterDate.getSeconds()) / 10;
  var registredToday = $(".registredToday");

  registredToday.text(Math.round(currentGirlOnline++));

  setInterval(function foo() {
    registredToday.text(Math.round(currentGirlOnline++));
  }, 10000);


  var couplesOnline = (counterDate.getHours() * 60 * 60 + counterDate.getMinutes() * 60 + counterDate.getSeconds()) / 30;
  var couplesToday = $(".couplesToday");

  couplesToday.text(Math.round(couplesOnline++));

  setTimeout(function foo() {
    setInterval(function foo() {
      couplesToday.text(Math.round(couplesOnline++));
    }, 30000);
  }, 2220);

  /*---------------------------------   maxLength    -------------------------------*/
  var article__description = $(".article__description").text().trim();
  if (article__description.length > 450) {
    article__description = article__description.substring(0, 450);
    $(".article__description").text(article__description);
  }
  /*---------------------------------   menu    -------------------------------*/

  $(".menuIcon").on("click", function () {
    $(this).toggleClass("opened");
    if ($(this).hasClass("opened")) {
      $(this)
        .next()
        .addClass("opened");
    } else {
      $(this)
        .next()
        .removeClass("opened");
      $(this).removeClass("opened");
    }
  });

  /*---------------------------------    animation on scroll    -------------------------------*/

  function animatioTrigger() {
    var $animation_elements = $(".js_st");
    var $window = $(window);
    $window.on("scroll resize", check_if_in_view);
    $window.trigger("scroll");

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;

        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          $element.addClass("in-view");
        } else {
          $element.removeClass("in-view");
        }
      });
    }
  }
  animatioTrigger();

});