/** @format */

// 셀렉터
const Etext = document.querySelector('.text');
// NodeList : 고차함수 사용가능 forEach, fill
const Etext3 = document.querySelectorAll('.text');
console.log(Etext);
console.log(Etext3);

// HTMLCollection : 고차함수 사용 불가능
const Etext2 = document.getElementsByClassName('text');
console.log(Etext2);

const $list = document.querySelectorAll('.list>li');
console.log($list);
const $list2 = document.querySelector('.list::before');
console.log($list2);

$list.forEach((item) => {
  item.classList.add('on');
});

const $html = document.documentElement;
const $body = document.body;
// console.log($html);
// console.log($body);

const $colorMode = document.querySelector('.colorMode');
console.log($colorMode);

let changeColor = () => {
  $html.style.setProperty('--main', 'white');
  $html.style.setProperty('--dark', 'black');
  $body.classList.add('on');
};

// 버튼을 클릭하면
// html의 :root 정보를 변경한다.
// $colorMode.addEventListener('click', changeColor);

// function changeColor(params) {
//   $html.style.setProperty('--main', 'white');
//   $html.style.setProperty('--dark', 'black');
// }

let changeColor2 = () => {
  //배경이 랜덤하게 변경된다
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  $body.style.setProperty('--main', randomColor);
};

// 버튼을 클릭하면 배경 컬러가 랜덤하게 변경되는 함수
$colorMode.addEventListener('click', changeColor2);
