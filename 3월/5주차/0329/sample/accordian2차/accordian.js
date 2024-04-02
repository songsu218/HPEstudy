/** @format */

const $FAQcon = document.querySelector('.faq');
// 이벤트 위임
// 클릭대상이 ul = $FAQcon

$FAQcon.addEventListener('click', (e) => {
  const q = e.target.closest('.ques');
  if (!q) return;
  const $list = $FAQcon.querySelectorAll('.ques');
  $list.forEach((item) => {
    if (item != q) {
      $item.classList.remove('on');
    }
  });

  q.classList.add('on');
});

// $FAQcon.addEventListener('click', (e) => {
//   const q = e.target.closest('.ques'); // e.target과 가장 가까운 .ques
//   // e.target이 .ques를 가르키지 않으면 null
//   // .closest() - e.target과 가장 가까운 .ques;
//   if (!q) return; // .ques를 가르키지 않으면 함수 종료
//   if (q.classList.contains('on')) {
//     q.classList.remove('on');
//     return;
//   }

//   $list.forEach((item) => {
//     item.classList.remove('on');
//   });
//   q.classList.add('on');
// });
