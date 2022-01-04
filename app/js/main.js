const slides = document.querySelectorAll(".top__slider-item");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    slide.classList.add("top__slider--active");
  });
}

$(function () {
  $(".slider").slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="Левая стрелка"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="Праввая стрелка"></button>',
  });

  $(".navigation__link--cart, .cart-list__close").on("click", function () {
    $(".cart-list ").toggleClass("cart-list--active");
  });

  $(".top__input").inputSpinner({
    buttonsOnly: true,
    autoInterval: undefined,
    buttonsWidth: "1.5rem",
  });

  var mixer = mixitup(".top__product-list");
});
