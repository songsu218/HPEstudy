/** @format */

// .ques을 클릭하면
// this에 .on 붙는다

// 다른 .ques를 클릭하면
// 기존의 .on이 제거되고
// this 에 .on이 붙는다.

// 클릭한 .ques에 이미 .on이 있으면
// 그냥 제거한다

const FAQcon = document.querySelector('.faq');
const $list = FAQcon.querySelectorAll('.ques');

console.log($list);

$list.forEach((q) =>
  q.addEventListener('click', (e) => {
    let classHas = e.target.classList.contains('on');
    if (classHas) {
      q.classList.remove('on');
      return;
    }
    $list.forEach((item) => {
      item.classList.remove('on');
    });
    q.classList.add('on');
  })
);
