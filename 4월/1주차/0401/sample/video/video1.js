/** @format */
const btnVideo = document.querySelector('.btnVideo');
const btnStop = document.querySelector('.btnStop');
const btnReStart = document.querySelector('.btnReStart');
const video = document.querySelector('.sec1>video');
const videoCurrentTime = document.querySelector('.videoCurrentTime');
const videoDuration = document.querySelector('.videoDuration');

btnVideo.addEventListener('click', () => {
  //   console.log(video.currentTime);
  //   console.log(video.duration);
  videoCurrentTime.innerHTML = video.currentTime;
  videoDuration.innerHTML = video.duration;
  if (video.paused) {
    video.play();
    btnVideo.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    btnVideo.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

btnStop.addEventListener('click', () => {
  video.pause();
});

btnReStart.addEventListener('click', () => {
  video.currentTime = 0;
  video.play();
});

console.log(video);
