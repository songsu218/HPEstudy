/** @format */

//문자 (string)
// '' ""

let string = '안녕';
console.log(string);
string = '안녕하세요~';
console.log(string);

let name = '길동이';
//구버전
let greeting = '안녕 나는 ' + name + '야';
// `${변수명}` 탬플릿 리터럴
let newgreeting = `안녕 나는 ${name}야`;
console.log(greeting);
console.log(newgreeting);
console.log(`안녕하세요 \n 반갑습니다. \t 호호홓`);

//이스케이프 표현
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
