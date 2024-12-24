// Toggle Light and Dark Theme
const toggleTheme = () => {
  const root = document.documentElement;
  const currentTheme = root.getAttribute("data-theme");

  // Toggle between light and dark themes
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);

  // Toggle the theme icon (moon for dark, sun for light)
  const themeToggleButton = document.querySelector(".theme-toggle-btn i");
  if (newTheme === "dark") {
    themeToggleButton.classList.remove("fa-sun");
    themeToggleButton.classList.add("fa-moon");
  } else {
    themeToggleButton.classList.remove("fa-moon");
    themeToggleButton.classList.add("fa-sun");
  }
};

// Event Listener for Theme Toggle Button
document
  .querySelector(".theme-toggle-btn")
  .addEventListener("click", toggleTheme);

// Function to Show a Specific Div and Hide Others
const showDiv = (divId) => {
  document.querySelectorAll(".new-div").forEach((div) => {
    div.style.display = "none";
  });
  document.getElementById(divId).style.display = "block";
};

// Function to Reset and Show the Button Container
const showButtonContainer = () => {
  document.getElementById("button-container").style.display = "block";
  document.querySelectorAll(".new-div").forEach((div) => {
    div.style.display = "none";
  });
};

// Function to Display One Section at a Time
const showSection = (sectionId) => {
  document.querySelectorAll(".section-content").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";
};

// Hamburger Menu Toggle
const toggleMenu = () => {
  const menu = document.querySelector(".navbar ul");
  menu.classList.toggle("show");
};

// Event Listener for Hamburger Menu Icon
document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

// Close Menu When a Link is Clicked (Mobile-Friendly)
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar ul");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  });
});
