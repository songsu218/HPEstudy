/** @format */

// 객체 = 복합데이터
// {key: value, key: value, ...}

let apple = {
  name: '사과',
  color: '빨강',
  display: '빨간사과',
  //   ff: spybanana,
};

let spybanana = {
  name: '스파이바나나',
  color: '노랑',
  display: '노란스파이바나나',
};

console.log(apple);
console.log(typeof apple);
console.log(apple.color);
console.log(typeof apple.color);

let age = 5;
let age2 = age;

console.log(age);
console.log(age2);
// age2 = 10;
age = 10;
console.log(age, age2);

let orange = apple;
console.log(apple);
console.log(orange);
orange.name = '오렌지';
console.log(apple);
console.log(orange);

console.log(typeof apple);
console.log(typeof orange);

let test = {};
console.log('형변환 - 1', typeof test);
test = 123;
console.log('형변환 - 2', typeof test);
test = () => {};
console.log('형변환 - 3', typeof test);
