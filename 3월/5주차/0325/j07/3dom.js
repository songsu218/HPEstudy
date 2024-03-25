/** @format */
const UL = document.querySelector('.list');
const btn = UL.querySelectorAll('li');
const box = document.querySelectorAll('.content > div');
const con = document.querySelector('.con');

let bg = document.createElement('span');
bg.classList.add('bg');
con.prepend(bg);

const bgBar = document.querySelector('.bg');
// console.log(UL);
// console.log(btn);
// console.log(box);
console.log(bgBar);

function moveBgBar(i) {
  let newLeft = i.offsetLeft;
  let newWidth = i.offsetWidth;
  bgBar.style.left = `${newLeft}px`;
  bgBar.style.width = newWidth + 'px';
}

btn.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    btn.forEach((a) => {
      a.classList.remove('on');
    });
    e.target.classList.add('on');

    box.forEach((a) => {
      a.classList.remove('on');
    });
    // box
    box[i].classList.add('on');

    moveBgBar(item);
  });
});
