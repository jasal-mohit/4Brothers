// Function to show a specific div and hide the button container
function showDiv(divId) {
  document.getElementById("button-container").style.display = "none";
  document.getElementById(divId).style.display = "block";
}

// Function to show the button container and hide all other divs
function showButtonContainer() {
  document.getElementById("button-container").style.display = "block";
  document.getElementById("updatelink").style.display = "none";
  document.getElementById("addlink").style.display = "none";
}

// Function to display one section at a time
function showSection(sectionId) {
  // Get all sections
  let sections = document.getElementsByClassName("section-content");

  // Hide all sections
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Show the selected section
  document.getElementById(sectionId).style.display = "block";
}
