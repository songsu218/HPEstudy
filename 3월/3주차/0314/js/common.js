let mainSlide = new Swiper(".mainSlide", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  pagination: {
    el: ".pg1",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var eduSlide = new Swiper(".eduSlide", {
  slidesPerView: 3,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
