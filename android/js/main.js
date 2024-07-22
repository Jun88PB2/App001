/** Banner */

$('.slider-list').slick({
  slidesToShow:3,
  slidesToScroll: 1,
  infinite: false,
  autoplay: false,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  prevArrow: "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
  // centerMode: true,
  vertical: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
  ]
});

/** End Banner */

$('.list-info').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  speed: 1000,
  dots: false,
  focusOnSelect: true,
  vertical: false,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
  ],
});

$('.list-review').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        dots: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        dots: false,
        slidesToShow: 1,
      }
    },
  ],
});
