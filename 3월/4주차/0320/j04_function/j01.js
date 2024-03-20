/** @format */

// 함수 - 특정한 일을 수행하는 코드의 집합
// 재사용이 높게
// 가독성이 좋게
// 유지보수성이 좋게 작성되어야 함

// 함수표현방법
// 선언함수, 익명함수, 화살표함수(this)

// 선언함수
// function sum(num1, num2) {
//   return num1 + num2;
// }

// 익명함수
// let sum = function (num1, num2) {
//   return num1 + num2;
// };

// 화살표함수
// let sum = (num1, num2) => {
//     return num1 + num2;
// };
// 함수 안의 코드가 한 줄일 때는 생략이 가능하다
let sum = (num1, num2) => num1 + num2;

console.log(sum(4, 5));

let lastName = '박';
let firstName = '소영';

//fullName 함수이므로 Heap 영역에 저장
// test는 stack 영역에 저장되어 fullName의 주소값을 저장
let fullName = (a1, b1) => console.log(`${a1} ${b1}`);
let test = fullName;
fullName(lastName, firstName);
fullName('박', '소영');
fullName('홍', '길동');
test('홍', '길동');

function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}

print(11);
print(-11);
