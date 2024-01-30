$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /************************************ Side Menu ************************************/
  $(".menu-btn").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $(".overlay").fadeIn(300);
    $(".header-nav").addClass("active");
    $("body").addClass("overflow");
  });

  $(".menu-close,.overlay").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $(".overlay").fadeOut(300);
    $(".header-nav").removeClass("active");
    $("body").removeClass("overflow");
  });

  $(".nav-lang .lang-head").click(function (e) {
    $(this).siblings(".lang-list").slideToggle();
    $(this).toggleClass("active");
  });
  /************************************ Footer Accordion ************************************/
  if ($(window).width() <= 767) {
    $(".footer-title.acc-title").click(function () {
      $(".footer-title.acc-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-title.acc-title").not(this).siblings().slideUp(500);
    });
  }
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 5000,
    // },
    // effect: "fade",
    pagination: {
      el: ".main-slider .main-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Specialties Slider ************************************/
  var specialtiesSwiper = new Swiper(".specialties-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
      },
      767: {
        slidesPerView: 6,
        spaceBetween: 15,
        loop: true,
      },
      992: {
        slidesPerView: 8,
        spaceBetween: 15,
        loop: true,
      },
      1199: {
        slidesPerView: 10,
        spaceBetween: 15,
        loop: false,
      },
    },
    pagination: {
      el: ".specialties-slider .slider-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Doctors Slider ************************************/
  var doctorsSwiper = new Swiper(".doctors-slider .swiper", {
    a11y: {
      enabled: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grid: false,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        grid: {
          rows: 2,
          fill: "rows",
        },
      },
    },
    pagination: {
      el: ".doctors-slider .slider-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Labs Slider ************************************/
  var labsSwiper = new Swiper(".labs-slider .swiper", {
    a11y: {
      enabled: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grid: false,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        grid: {
          rows: 2,
          fill: "rows",
        },
      },
    },
    pagination: {
      el: ".labs-slider .slider-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Filters ************************************/
  $(".filter-trigger").click(function (e) {
    $(this).parents(".archive-sidebar").toggleClass("active");
  });
  $(".subspecialty-btn").click(function (e) {
    $(".subspecialty-btn").removeClass("active");
    $(this).addClass("active");
    let filter = $(this).attr("id");
    if (filter == "all") {
      $(".doctor-item").show();
    } else {
      $(".doctor-item").hide();
      $(".doctor-item[data-filter=" + filter + "]").show();
    }
  });
  $(".filter-item .filter-title").click(function (e) {
    $(this).siblings(".filter-values").slideToggle();
    $(this).toggleClass("active");
  });

  /************************************ Account Nav ************************************/
  $(".accountNav-trigger").click(function (e) {
    $(this).parents(".account-nav").toggleClass("active");
  });
  $(".main-link.has-list").click(function (e) {
    $(this).toggleClass("active").siblings(".sub-list").slideToggle();
  });
  /************************************ Form ************************************/
  if ($(window).width() >= 992) {
    $("select").select2({
      minimumResultsForSearch: Infinity,
    });
  }

  var input = $("input[type=tel]");
  for (let i = 0; i < input.length; i++) {
    intlTelInput(input[i], {
      utilsScript: "js/utils.js",
      autoPlaceholder: "aggressive",
      separateDialCode: true,
      initialCountry: "sa",
      preferredCountries: ["sa", "kw", "ae", "bh", "om", "qa"],
    });
  }

  $(".password-toggle").click(function (e) {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    let eye = $(this);
    let input = $(this).parents(".password-content").find("input.form-control");
    if ($(input).attr("type") == "password") {
      $(input).attr("type", "text");
      eye.addClass("active");
    } else {
      $(input).attr("type", "password");
      eye.removeClass("active");
    }
  });
});
