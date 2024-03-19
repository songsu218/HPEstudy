/** @format */

let today = new Date();
console.log(today);
let day = today.getDay();
console.log(day);

let test = 'texttexttexttext';
console.log(test.length);
let test2 = 5555;
console.log(test2.toString().length);

// 반복문
// for(변수선언 초깃값; 조건식; 증감식) {
//반복될 실행문
//}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

for (let a = 2; a < 10; a++) {
  for (let b = 1; b < 10; b++) {
    console.log(`${a} * ${b} = ${a * b}`);
  }
  console.log(`-------${a}단의 시작`);
}

// 반복문의 제어 - break(코드종료), continue(건너뛰기) {

for (let b = 0; b < 20; b++) {
  if (b == 10) {
    continue;
  }
  console.log(b);
}

let furits = ['apple', 'banana', 'cherry'];
console.log(typeof furits);
console.log(furits[0]);
console.log(furits[1]);
console.log(furits[2]);
console.log(furits.length);

for (let c = 0; c < furits.length; c++) {
  console.log(furits[c]);
}

for (let name of furits) {
  console.log('for of 문 --', name);
}

// forEach
furits.forEach((data, i, arry) => {
  console.log(data);
  console.log(i);
  console.log(arry);
});

let member = {
  m1: '한식이',
  m2: '두식이',
  m3: '세식이',
};
console.clear();
console.log(typeof member);
console.log(member.m3);

for (let m in member) {
  console.log('key --', m);
  console.log('value --', member[m]);
}
