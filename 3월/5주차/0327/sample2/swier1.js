/** @format */

var swipercon = new Swiper('.projectName', {
  pagination: {
    el: '.pg1',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  effect: 'fade',
});

var swipercon2 = new Swiper('.projectImg');

swipercon.controller.control = swipercon2;
swipercon2.controller.control = swipercon;
