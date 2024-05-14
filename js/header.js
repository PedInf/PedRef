  // Loading the header for all pages, then triggering the dropdown menu to be ready for click or touch
 //////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", loadHeaderStyles);
document.addEventListener("DOMContentLoaded", loadHeaderContent);

function loadHeaderStyles() {
    // Use a relative path to the header.html file
    const headerStylesPath = '/PedRef/header.html';

    fetch(headerStylesPath)
        .then(response => response.text())
        .then(html => {
            const styleStart = html.indexOf('<style>');
            const styleEnd = html.indexOf('</style>');
            if (styleStart !== -1 && styleEnd !== -1) {
                const styleContent = html.substring(styleStart + 7, styleEnd);
                const styleElement = document.createElement('style');
                styleElement.innerHTML = styleContent;
                document.head.appendChild(styleElement);
            }
        })
        .catch(err => {
            console.warn("Something went wrong with loading the header styles:", err);
        });
}

function loadHeaderContent() {
    var headerContainer = document.getElementById("header-container");

    // Use a relative path to the header.html file
    const headerPath = '/PedRef/header.html';

    fetch(headerPath)
        .then(response => response.text())
        .then(html => {
            // Extract the content after the </style> tag
            const contentStart = html.indexOf('</style>') + 8;
            const content = html.substring(contentStart);
            headerContainer.innerHTML = content;
            initializeDropdown();
        })
        .catch(err => {
            console.warn("Something went wrong with loading the header content:", err);
        });
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
  
 

  
