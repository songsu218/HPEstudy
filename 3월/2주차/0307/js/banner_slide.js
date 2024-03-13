var swiper = new Swiper(".slide1", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".pg1",
    clickable: true,
  },

  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 4,
    },
  },
});
