/** @format */
const videoCon = document.querySelectorAll('.contents>article');
// const video = videoCon.querySelectorAll('video');
console.log(videoCon);

videoCon.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    let video = e.target.querySelector('video');
    //promise() 오류
    // video.play();
    // 오류처리방법
    video.muted = true;
    video.play().catch((err) => console.log(err));
    video.loop = true;
  });
  item.addEventListener('mouseleave', (e) => {
    let video = e.target.querySelector('video');
    video.pause();
    video.currentTime = 0; //비디오의 현재 재생시간
    // video.duration = 1; // 비디오의 총 재생시간
    // video.muted = true // 비디오의 음소거 여부
  });
});
