/** @format */

// /** @format */

// // 퀴즈 1. 주어진 배여 안에서 특정 아이템을 다른 아이템으로 교체하는 함수 만들기
// let inputItem = ['바나나', '키위', '딸기', '사과', '딸기', '포도'];

// // output ['바나나', '키위', '딸기', '사과', '딸기', '포도']

// const replace = (input, from, to) => {
//   let newArray = [...input];
//   for (const cnt in newArray) {
//     if (newArray[cnt] === to) newArray[cnt] = to;
//   }
//   return newArray;
// };

// let result = replace(inputItem, '딸기', '수박');
// console.log(result);
// replace(inputItem, '딸기', '수박');

// // 퀴즈2. 배열 안에 원하는 아이템이 몇 개 있는지 확인하는 함수
// // ['바나나', '키위', '딸기', '사과', '딸기', '포도'];
// // 결과값 : 2

// const fCnt = (input, from) => {
//   let cnt = 0;
//   for (const item of input) {
//     if (item === from) cnt++;
//   }
//   return cnt;
// };

// result = fCnt(inputItem, '딸기');
// console.log(result);

console.clear();
////////////////////////////////////////////////////////////////////////
// 퀴즈3
// 두개의 배열이  있습니다.
let inputItem1 = ['바나나', '키위', '딸기', '사과', '포도', '복숭아', '딸기'];
let inputItem2 = ['바나나', '아보카도', '사과', '딸기', '포도'];
// 바나나, 딸기, 사과, 포도

// let Match = (input1, input2) => {
//   let newArray = [];
//   for (const in1 of input1) {
//     if (input2.includes(in1)) newArray.push(in1);
//   }
//   return newArray;
// };

// result = Match(inputItem1, inputItem2);
// console.log(result);

// SET 중복되는 아이템 제외

let Match2 = (input1, input2) => {
  let newArray = [];
  let setArray = new Set(...input2);
  for (const cnt of setArray) {
    if (input2.includes(cnt)) newArray.push(cnt);
  }
  return newArray;
};
let result = Match2(inputItem1, inputItem2);
console.log(result);
