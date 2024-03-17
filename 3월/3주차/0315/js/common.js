//.ham 클릭하면
//.gnb & .person이 나타나게 해주세욤..
//.gnb & .person 에 .on 클래스 붙여주세요,
//let
const $ham = document.querySelector(".ham");
const $gnb = document.querySelector(".gnb");
const $person = document.querySelector(".person");
$ham.addEventListener("click", (e) => {
  // console.log(e);
  $gnb.classList.toggle("on");
  $person.classList.toggle("on");
});

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

var swiper = new Swiper(".eduSlide", {
  slidesPerView: 5,
  spaceBetween: 150,
  pagination: {
    el: ".pg2",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // 가운데정렬 기능
  centeredSlides: true,
  // 무한반복기능
  loop: true,
});
