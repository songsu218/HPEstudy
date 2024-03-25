/** @format */

// .ham 햄버거 버튼 클릭 시 off 클래스 적용
// const btnHam = document.querySelector('.ham');
// btnHam.addEventListener('click', (e) => {
//   e.target.classList.add('off');
// });

const btnHam = document.querySelector('.ham');
const $header = document.querySelector('.hd');
const menu = document.querySelectorAll('.gnb > a');
const main = document.querySelector('main');
const section = main.querySelectorAll('.box');

// .ham 클릭 시 스스로에게 .off 적용
// .ham 클릭 시 header에 .on 적용
// .ham 클릭 시 main에 .on 적용
btnHam.addEventListener('click', (e) => {
  btnHam.classList.add('off');
  $header.classList.add('on');
  main.classList.add('on');
});

// .gnb>a 클릭하면 header에 .on제거 되고
// .ham에 .off 제거
menu.forEach((menuBtn, i) => {
  menuBtn.addEventListener('click', (e) => {
    //기존에 가지고있는 이벤트를 무력화 시킨다
    e.preventDefault();
    console.log('클릭 됨');
    btnHam.classList.remove('off');
    $header.classList.remove('on');
    main.classList.remove('on');
    section.forEach((item) => {
      item.classList.remove('on');
    });

    section[i].classList.add('on');
  });
});
