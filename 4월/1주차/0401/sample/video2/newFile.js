/** @format */

videoCon.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    let video = e.target.querySelector('video');

    video.play();
  });
  item.addEventListener('mouseleave', () => {
    let video = e.target.querySelector('video');
    video.pause();
    video.currentTime = 0; //비디오의 현재 재생시간

    // video.duration = 1; // 비디오의 총 재생시간
    // video.muted = true // 비디오의 음소거 여부
  });
});
