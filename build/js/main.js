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
          991: {
            slidesPerView: 2
          },
          700: {
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
  if ($(window).width() < 600) {
    var post__desc = $(".post__desc").text().trim();
    if (post__desc.length > 155) {
      post__desc = post__desc.substring(0, 155);
      $(".post__desc").text(post__desc + "...");
    }
    var post__title = $(".post__title").text().trim();
    if (post__title.length > 28) {
      post__title = post__title.substring(0, 28);
      $(".post__title").text(post__title);
    }
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

    /*---------------------------------   tabs    -------------------------------*/

    $(".tab__btn").on("click", function () {
      $(this).next().fadeIn();
      $('.tab__content .tab__icon').on("click", function () {
        $(this).parent().fadeOut();
      });
    });

    $(document).scroll(function () {
      var y = $(this).scrollTop();
      var body = document.body.scrollHeight;
      console.log(body);
      if (y > body/2) {
        $('.tab__item-2').fadeIn();
      } else {
        $('.tab__item-2').fadeOut();
      }
    });


});