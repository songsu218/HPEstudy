/** @format */

// boolean - true, false

let 참 = true;
let 거짓 = false;

console.log(참, 거짓);

// 값 앞에 !!를 붙이면 boolean 타입으로 변경할 수 있습니다.

//falshy 한 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//truthy (참인 값)
console.log(!!1);
console.log(!!-131);
console.log(!!'0');
console.log(!!{});
console.log(!!Infinity);
