/** @format */

//
const pizza = {
  name: '피자',
  price: 1000,
  owner: { name: '소영', eMail: 'asane7@kdkddk.com' },
};

const ramem = {
  name: '라면',
  price: 2000,
};

const sushi = {
  name: '초밥',
  price: 500,
};

const store1 = [pizza, ramem];
const store2 = Array.from(store1);

store2.push(sushi);
pizza.price = 5000;
console.log('store1--', store1);
console.log('store2--', store2);
