const bgVideo = document.getElementById("bg-video");

function resizeVideo() {
  const aspectRatio = bgVideo.videoWidth / bgVideo.videoHeight;
  const screenRatio = window.innerWidth / window.innerHeight;

  if (screenRatio < aspectRatio) {
    bgVideo.style.width = "auto";
    bgVideo.style.height = "100%";
  } else {
    bgVideo.style.width = "100%";
    bgVideo.style.height = "auto";
  }
}

window.addEventListener("resize", resizeVideo);
bgVideo.addEventListener("loadedmetadata", resizeVideo);
bgVideo.addEventListener("ended", () => {
  bgVideo.currentTime = 0;
  bgVideo.play();
});
