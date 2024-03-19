/** @format */

// switch
// 정해진 범위 안의 값에 대해 특정한 일을 할 경우

let today = new Date();
let day = today.getDay(); // 0:일요일 1:월요일 ~ 6:토요일
let daynum = today.getDate();
console.log('오늘 날짜 : ', today);
console.log('오늘 날짜 : ', day);

let dayName;
if (day === 0) {
  dayName = '일';
} else if (day === 1) {
  dayName = '월';
} else if (day === 2) {
  dayName = '화';
} else if (day === 3) {
  dayName = '수';
} else if (day === 4) {
  dayName = '목';
} else if (day === 5) {
  dayName = '금';
} else {
  dayName = '토';
}

console.log('오늘 날짜 : ', `오늘은 ${daynum}일입니다. 그리고 ${dayName}요일 입니다.`);

switch (day) {
  case 0:
    dayName = '일';
    break;
  case 1:
    dayName = '월';
    break;
  case 2:
    dayName = '화';
    break;
  case 3:
    dayName = '수';
    break;
  case 4:
    dayName = '목';
    break;
  case 5:
    dayName = '금';
    break;
  case 6:
    dayName = '토';
    break;
  default:
    dayName = '해당요일없음';
    break;
}
console.log(dayName);

let condition = 'good'; //bad - 나쁨, good, okey - 좋음,
let text;
switch (condition) {
  case 'good':
  case 'okey':
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';

  default:
    text = '어떤 기분인거시여??';
    break;
}

console.log(text);
