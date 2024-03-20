/** @format */

// Parameters (인자)

// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     a += i;
//   }
//   console.log(sum);
// }

// 여기서 a와 b는 default 값으로 함수에 인자가 없이 호출되면 이 디폴트 값이 실행되지만
// 인자가 있이 호출되면 인자가 사용된다.
function sum(a = 10, b = 0, ...num) {
  console.log('a - ', a);
  console.log('b - ', b);
  console.log('num - ', num);
  console.log('num - ', num[0]);
  console.log('num - ', num[1]);
  console.log(arguments);
}
sum();
sum(5, 8, 2, 1, 5, 8, 10);

let test = function () {
  return;
};
let test3 = () => {};

console.log(test);

//소괄호로 감싸고 다시 한번 소괄호를 쓰면 즉시 실행되는 함수가 된다. 즉, 즉시실행함수
(function run() {
  console.log('실행됐다.');
})();
