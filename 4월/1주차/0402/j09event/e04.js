/** @format */

// html 내에서 마우스가 움직이면
// .cursor가 마우스 포인터를 따라 움직인다.

const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', (e) => {
//   //   cursor.style.left = `${e.pageX - 25}px`;
//   //   cursor.style.top = `${e.pageY - 25}px`;
// });
// document.addEventListener('mousedown', (e) => {
//   cursor.style.left = `${e.pageX - 25}px`;
//   cursor.style.top = `${e.pageY - 25}px`;
// });
document.addEventListener('mousedown', (e) => {
  document.addEventListener('mousemove', onMouseMove);

  document.addEventListener('mouseup', (e) => {
    document.removeEventListener('mousemove', onMouseMove);
  });
});

function onMouseMove(e) {
  cursor.style.left = `${e.pageX - 25}px`;
  cursor.style.top = `${e.pageY - 25}px`;
  //   console.log('페이지의 좌상단을 기준한 위치', e.pageX);
  //   console.log('페이지의 좌상단을 기준한 위치', e.pageY);
  //   console.log('요소의 좌상단을 기준한 위치', e.offsetX);
  //   console.log('요소의 좌상단을 기준한 위치', e.offsetY);
  //   console.log('브라우저의 좌상단을 기준한 위치', e.clientX);
  //   console.log('브라우저의 좌상단을 기준한 위치', e.clientY);
  //   console.log('디바이스화면의 좌상단을 기준한 위치', e.screenX);
  //   console.log('디바이스화면의 좌상단을 기준한 위치', e.screenY);
}

document.addEventListener('scroll', (e) => {
  console.log('페이지의 좌상단을 기준한 위치', e.pageX);
  console.log('페이지의 좌상단을 기준한 위치', e.pageY);
});
