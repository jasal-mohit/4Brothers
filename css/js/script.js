// nav bar video
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

// nav bar video end

// latest added products slider start

document.addEventListener("DOMContentLoaded", function () {
  const restaurantContainer = document.querySelector(".card-slider");
  const leftRButton = document.querySelector(".restaurant-arrow-left");
  const rightRButton = document.querySelector(".restaurant-arrow-right");

  function updateButtonState() {
    leftRButton.disabled = restaurantContainer.scrollLeft <= 0;
    rightRButton.disabled =
      restaurantContainer.scrollLeft + restaurantContainer.offsetWidth >=
      restaurantContainer.scrollWidth;
  }

  leftRButton.onclick = function () {
    restaurantContainer.scrollBy({
      left: -restaurantContainer.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  rightRButton.onclick = function () {
    restaurantContainer.scrollBy({
      left: restaurantContainer.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  restaurantContainer.addEventListener("scroll", updateButtonState);
  updateButtonState();
});

// latest added products slider end

// top selling products slider start

document.addEventListener("DOMContentLoaded", function () {
  const restaurantContainer1 = document.querySelector(".card-slider1");
  const leftRButton1 = document.querySelector(".restaurant-arrow-left1");
  const rightRButton1 = document.querySelector(".restaurant-arrow-right1");

  function updateButtonState() {
    leftRButton1.disabled = restaurantContainer1.scrollLeft <= 0;
    rightRButton1.disabled =
      restaurantContainer1.scrollLeft + restaurantContainer1.offsetWidth >=
      restaurantContainer1.scrollWidth;
  }

  leftRButton1.onclick = function () {
    restaurantContainer1.scrollBy({
      left: -restaurantContainer1.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  // ends here
  rightRButton1.onclick = function () {
    restaurantContainer1.scrollBy({
      left: restaurantContainer1.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  restaurantContainer1.addEventListener("scroll", updateButtonState);
  updateButtonState();
});

// top selling products slider end

//  customer review slider start
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    // loop: true, // Enables looping
    slidesPerView: 3, // Show one slide at a time
    spaceBetween: 10, // Optional: space between slides
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// customer review slider end

// navbar responsive start
// Toggle Dropdown Menu
const menuIcon = document.querySelector(".menu-icon");
const menuLinks = document.querySelector(".menu-links");

menuIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});
