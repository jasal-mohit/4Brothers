const videos = [
  "css/video/WhatsApp Video 2024-11-10 at 18.48.43_0d1a90e8.mp4",
  "css/video/WhatsApp Video 2024-11-10 at 19.09.24_b1951172.mp4",
];

let videoIndex = 0;
const videoElement = document.getElementById("videoPlayer");

function changeVideo() {
  // Update the video source
  videoElement.src = videos[videoIndex];

  // Load the new video and start playing
  videoElement.load();
  videoElement.play();
}

// Initial video setup
changeVideo();

// When the video ends, switch to the next video
videoElement.onended = function () {
  videoIndex = (videoIndex + 1) % videos.length; // Loop through the videos
  changeVideo(); // Change the video and play the next one
};
