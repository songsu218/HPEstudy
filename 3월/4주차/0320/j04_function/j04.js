/** @format */

// 퀴즈 0 부터 순회하면서 주어진 숫자 만큼 출력

const log = (print) => console.log(print);
const doubleLog = (print) => console.log(print * 2);

function countNum(count, func) {
  for (let i = 0; i < count; i++) {
    func(i);
  }
}

countNum(5, doubleLog);

function test() {
  console.log('test 실행');
}
setTimeout(test, 2000);
setTimeout;

setTimeout(() => {
  countNum(3, doubleLog);
}, 2000);
