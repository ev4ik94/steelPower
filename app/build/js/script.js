$(document).ready(() => {
  /*--------Slick Banner Home page-------*/
  $('#banner-home').slick({
    infinite: false,
    autoPlay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="banner__block_left"><img src="./img/slick-left.svg" alt=""></button>',
    nextArrow: '<button class="banner__block_right"><img src="./img/slick-right.svg" alt=""></button>'
  });
  /* -------Slick Carousel product left---------------- */

  $('#product-slick').slick({
    infinite: false,
    autoPlay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="banner__item_left slick-controls position-absolute"><img src="./img/slick-left.svg" alt=""></button>',
    nextArrow: '<button class="banner__item_right slick-controls position-absolute"><img src="./img/slick-right.svg" alt=""></button>'
  });
  /* ---------LIDER SLICK-------------- */

  $('#lider-slick').slick({
    infinite: false,
    autoPlay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="lider__left lider__btn_sl position-absolute"><img src="./img/slick-left.svg" alt=""></button>',
    nextArrow: '<button class="lider__right lider__btn_sl position-absolute"><img src="./img/slick-right.svg" alt=""></button>',
    responsive: [{
      breakpoint: 992,
      settings: "unslick"
    }]
  });
  $('#categories-home').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 9999,
      settings: "unslick"
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false
      }
    }]
  });
  const windowWidth = 992;

  if (windowWidth <= 992) {}
});