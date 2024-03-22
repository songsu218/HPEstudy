/** @format */

// const products = [
//   { productName: '휴대용 충전식 손전등', price: 25000, stock: 50 },
//   { productName: '보조 배터리', price: 35000, stock: 30 },
//   { productName: '무선 이어폰', price: 80000, stock: 20 },
//   { productName: '스마트폰 케이스', price: 20000, stock: 100 },
//   { productName: '블루투스 스피커', price: 45000, stock: 40 },
// ];

// for (const prd of products) {
//   console.log(prd);
// }

// 배열과 함께 사용되는 고차함수
// forEach, find, findIndex, some, every,
// filter, map, sort, reduce

// forEach
// products.forEach((v, i, arr) => {
//   console.log(v);
//   console.log(i);
//   console.log(arr);
// });

// products.forEach((v, i, arr) => {
//   console.log(`No.${i + 1} 상품명 : ${v.productName}, 가격 : ${v.price.toLocaleString('ko-KR')}원, 재고 : ${v.stock}`);
// });

const products = [
  { productName: '휴대용 충전식 손전등', price: 25000, stock: 50 },
  { productName: '보조 배터리', price: 35000, stock: 30 },
  { productName: '무선 이어폰', price: 80000, stock: 20 },
  { productName: '스마트폰 케이스', price: 25000, stock: 100 },
  { productName: '블루투스 스피커', price: 45000, stock: 40 },
];

// find 조건에 맞는 아이템을 찾아서 반환

// products.find((v, i, o) => {
//   console.log(v.price === 25000);
// });

// let result = products.find((v, i, o) => {
//   return v.price === 25000;
// });
let result;
// result = products.find((v, i, o) => v.price === 25000);

//findIndex 조건에 맞는 아이템(첫번째)을 찾아서  index 반환
// result = products.findIndex((i) => i.price === 25000);

// some : 배열 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인 & boolean 반환
// result = products.some((i) => i.stock >= 20);

// every : 배열 아이템들이 모두 조건에 맞는지 확인 & boolean 반환
// result = products.every((i) => i.price >= 20000);

// filter : 조건에 맞는 모든 아이템을 새로운 배열[]로 반환
// result = products.filter((i) => i.price === 25000);

// map : 배열 아이템을 각각 함수처리()를 하고 새로운 배열로 생성
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// result = num.map((i) => {
//   if (i % 2 === 0) return i * 2;
//   else return i;
// });
// console.log(num);

console.clear();
// sort :
const nums = [20, 5, 1, 8, 90, 40, 55, 6];
// const texts = ['hi', 'abc', 'def'];

// console.log(nums);
// // nums.sort((a, b) => b - a); //내림차순
// nums.sort((a, b) => a - b); //오름차순
// console.log(nums);

// 가나다 순으로 정렬
// texts.sort((a, b) => a.localeCompare(b));
// texts.sort((a, b) => b.localeCompare(a));
// texts.reverse(); //반대로 정렬
// console.log(texts);

// reduce 모든 배열의 합을 구할 때 유용하게 사용됨
result = nums.reduce((pv, cv, ci) => (pv += cv), 0);
console.log(result);
