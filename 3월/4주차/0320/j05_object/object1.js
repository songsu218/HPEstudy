/** @format */

// 객체 Object {key: value, key: value,}
// 객체 복합데이터
// key, value <- 프로퍼티
// key - 숫자(0), 문자(name), 문자열(['name-last'])
// value - 원시타입 데이터, 객체 ([], {}, function() {})

let a = 'test';
console.log(a.endsWith('t'));

let apple = {
  name: '사과',
  0: '빨간사과',
  hiBye: '안녕',
  'ho-ho': 'hello',
  ['hi-bye2']: '안녕2',
};

console.log(apple[3]);
console.log(apple['ho-ho']);
console.log(apple['hi-bye2']);

const obj = {
  name: '개냥이',
  age: 5,
  // feel: 'happy'
};

function addKey(o, k, v) {
  o[k] = v;
}

function deleteKey(o, k) {
  delete o[k];
}
addKey(obj, 'feel', 'happy');
deleteKey(obj, 'age');
console.log(obj);

// key와 value 값이 같은 name일 경우 생략 가능 (짧게 줄여 쓸 수 있다)
const x = 0;
const y = 0;
const cord1 = { x: x, y: y };
const cord2 = { x, y };
console.log(cord1);
console.log(cord2);

function makeObj(name, age) {
  return {
    name, // name:name
    age, // age:age
  };
}
console.log(makeObj(1, 2));

// 객체 내부의 함수 = method
let numTest = 10;
console.log(numTest.toString());
let textTest = 'sample';
console.log(textTest.length);

// const orange = {
//   name: '오렌지',
//   color: '노랑',
//   display: function () {
//     // console.log('노랑 오렌지');
//     console.log(this);
//     console.log(`${this.color} ${this.name}`);
//   },
// };

//() => {} 에서 this는 글로벌이다.
const orange = {
  name: '오렌지',
  color: '노랑',
  display: () => {
    // console.log('노랑 오렌지');
    console.log(this);
    console.log(`${this.color} ${this.name}`);
  },
};

// () => {}
// function () {}
console.clear();
console.log(orange.name);
console.log(orange.color);
orange.display();
