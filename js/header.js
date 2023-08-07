  // Loading the header for all pages, then triggering the dropdown menu to be ready for click or touch
 //////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", loadHeaderContainer);

function loadHeaderContainer() {
  var headerContainer = document.getElementById("header-container");
  const inSubfolder = isPageInSubfolder();

  // Construct the correct path by adding "PedRef/" to the URL
  const basePath = inSubfolder ? '../' : 'PedRef/';
  
  fetch(basePath + 'header.html')
    .then(response => response.text())
    .then(html => {
      headerContainer.innerHTML = html;
      initializeDropdown();
    })
    .catch(err => {
      console.warn("Something went wrong with loading the header:", err);
    });
}
  
  function isPageInSubfolder() {
    const currentPath = window.location.pathname.split('/');
    currentPath.pop(); // Remove the current HTML file from the path
    return currentPath.length > 1; // Check if there are any remaining path segments
  }





// handles the home button toggles in windows screens and mobile devices
////////////////////////////////////////////////////////////////////////
function initializeDropdown() {
    function toggleDropdown(event) {
      event.stopPropagation();
      event.preventDefault();
      var dropdown = document.querySelector(".dropdown-content");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }
    }
  
    function closeDropdown() {
      var dropdown = document.querySelector(".dropdown-content");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  
    var homeBtn = document.getElementById("home-btn-title");
    if ('ontouchstart' in window) {
      homeBtn.addEventListener("touchstart", toggleDropdown);
    } else {
      homeBtn.addEventListener("click", toggleDropdown);
    }
  
    document.addEventListener("click", closeDropdown);
  }
  
 

  
