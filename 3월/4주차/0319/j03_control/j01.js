/** @format */

// 코드 실행의 순서를 제어하는 것을 제어문 이라고 한다.
// 제어문의 종류에는 조건문, 반복문, 분기문 등이 있다.

// 조건문
// if (조건) {조건이 맞을 경우 실행되는 내용}
// if (조건) {조건이 맞을 경우 실행되는 내용} else {조건이 맞지 않을 경우 실행되는 문}
// if (조건1){} else if (조건2){} else if (조건3){} else {}

let fruit = '오렌지';
if (fruit == '오렌지') {
  console.log(fruit);
} else {
  console.log('오렌지 아님');
}

//삼항 조건 연산자
let result = fruit == '오렌지' ? '오렌지입니다' : '오렌지가 아닙니다';
console.log(result);

//퀴즈
// 입력된 숫자가 짝수 이면 "짝"을 출력하고
// 홀수이면 "홀"을 출력
let testNum = 2;
let out;
if (testNum % 2 == 0) {
  out = '짝';
} else {
  out = '홀';
}
console.log(out);

let out2 = testNum % 2 == 0 ? '짝' : '홀';
console.log(out2);

// 퀴즈
// test2Num
// 숫자가 1이면 '하나'
// 숫자가 2이면 '둘'
// 숫자가 3이면 '셋'
// 숫자가 4이면 '많음'
let test2Num = 4;
let out3;
if (test2Num == 1) {
  out3 = '하나';
} else if (test2Num == 2) {
  out3 = '둘';
} else if (test2Num == 3) {
  out3 = '셋';
} else if (test2Num == 4) {
  out3 = '넷';
} else {
  out3 = '많음';
}
console.log(out3);

let out4 = test2Num >= 5 ? '많음' : test2Num == 4 ? '넷' : test2Num == 3 ? '셋' : test2Num == 2 ? '둘' : test2Num == 1 ? '하나' : '다아니여~~';
console.log(out4);

//함수
//배열
//객체
//빌트인 객체
