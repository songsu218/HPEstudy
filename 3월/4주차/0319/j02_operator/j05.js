/** @format */

// 대소 관계 비교 연산자
// a > b 크다
// a < b 작다
// a >= b 크거나 같다
// a <= b 작거나 같다

// a == b type과 값이 같은지 확인
// a === b 값이 같은지 확인

console.log(2 > 3);
console.log(2 < 3);

// 동등 비교 관계 연산자
console.log('===', 1 === '1');
console.log('==', 1 == '1');
console.log('!=', 1 != '1');
console.log('!==', 1 !== '1');

console.log('true', true == '1');
console.log('true', true == 1);
console.log('true', true === '1');
console.log('true', true === 1);

console.log('false', false == '0');
console.log('false', false == 0);
console.log('false', false === '0');
console.log('false', false === 0);

let t1 = 2;
let t2 = 3;
let result = t1 + (t2 * 4) / 5;

// object 동등비교
let obj1 = {
  name: 'js',
};

let obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // 참조 주소가 다르기 때문에 false
console.log(obj1.name == obj2.name); //
