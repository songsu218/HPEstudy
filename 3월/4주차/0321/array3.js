/** @format */

const fruits = ['바나나', '키위', '딸기', '사과'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

fruits[6] = '포도';
delete fruits[6];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열과 함께 사용하는 함수들

// 변수가 배열인지 확인하는 함수 - .isArray() boolean 반환
console.log(Array.isArray(fruits));
// 배열 아이템의 위치를 찾을 때 .includes('찾는아이템') boolean 반환
console.log(fruits.includes('복숭아'));

// 배열 아이템 추가 - 제일 뒤 [].push('');
let pushResult = fruits.push('복숭아');
console.log(pushResult); //반환값 length
console.log(fruits); // 배열 자체가 수정됨

// 배열 아이템 추가 - 제일 앞 [].unshift();
let unshiftResult = fruits.unshift('수박');
console.log(unshiftResult); //반환값 length
console.log(fruits); // 배열 자체가 수정됨

// 배열 아이템 제거 - 제일 뒤 [].pop()
console.log(fruits.pop()); //제거된 아이템 반환
console.log(fruits); // 배열 자체가 수정됨

// 배열 아이템 제거 - 제일 앞 .shift()
console.log(fruits.shift()); //제거된 아이템 반환
console.log(fruits); // 배열 자체가 수정됨

// 중간 아이템 삭제 || 추가
let spliceResult = fruits.splice(2, 1);
console.log(spliceResult); // 제거된 아이템 반환
console.log(fruits); // 배열 자체가 수정됨

let spliceResult2 = fruits.splice(2, 1, '아보카도', '딸기');
console.log(spliceResult2); // 제거된 아이템 반환
console.log(fruits); // 배열 자체가 수정됨

//  기존 배열을 잘라서 새로운 배열을 만듬 - [].slice()
let newArray = fruits.slice(-5);
console.log(newArray);
console.log(fruits);

// 여러 개의 배열을 붙일 때 .cancat()
let num1 = [0, 1, 2];
let num2 = [3, 4, 5];
let numSum1 = num1.concat(num2);
let numSum2 = num2.concat(num1);
console.log(numSum1);
console.log(numSum2);

let test = [...num1, ...num2];
console.log(test);

console.clear();
// 중첩된 배열을 평평하게 펼치기. flat();
let array7 = [1, 2, [33, 44, 55], 3, [66, 77, [888, 999]]];
console.log(array7);
console.log(array7.flat());
array7 = array7.flat(2);
console.log(array7);

// 특정한 값으로 배열을 채우기 .fill()
array7.fill('s', 2, 5); //2부터 5이전까지 3개 변경
array7.fill('s', 2); //2부터 모두 변경
console.log(array7);

// 배열을 문자열로 합치기
let newText1 = ['안', '녕', 1, 2, 3];
let newText2 = ['안', '녕', 1, 2, 3, [22, 33]];
let text1 = newText1.join('_');
let text2 = newText2.join('_');
console.log(text1);
console.log(text2);
