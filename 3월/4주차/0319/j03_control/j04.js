/** @format */

// while
// while(조건) {실행문}
// 조건이 false가 되거나
// 실행문 내에서 break를 만날 때까지 반복

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

// do-while
// 일단 실행
// 조건문을 뒤에서 검사
// do {} while ()
num = 5;
do {
  console.log(num);
  num--;
} while (num >= 0);

// 논리연산자
// || - OR
// && - AND

console.log(true || false);
console.log(true && false);
