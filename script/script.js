$(function () {
  $(".photos__slider").slick({
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });
});
