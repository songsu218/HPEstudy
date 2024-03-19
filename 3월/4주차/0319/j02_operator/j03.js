/** @format */

// 단항연산자
// +
// -
// !
let a = 5;
a = -a; // -1 * 5 = -5
console.log(a);
a = +a; // +1 * -5 = -5
console.log(a);

let bool = true;
console.log(!!bool);
console.log(!bool);

console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+{});
console.log(+'text');
console.log(+undefined);

// !! boolean 변경
