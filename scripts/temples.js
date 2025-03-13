document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("#menu-button");
    const navMenu = document.querySelector("nav");

    // Toggle menu visibility when button is clicked
    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("open");

        // Change button text/icon based on menu state
        if (navMenu.classList.contains("open")) {
            menuButton.innerHTML = "&#10006;"; // "X" icon
        } else {
            menuButton.innerHTML = "&#9776;"; // Hamburger icon
        }
    });

   
        // Get the current last modified date of the document
        const lastModified = document.lastModified;
        
        // Select the span element where we want to display the date
        const lastModifiedElement = document.getElementById("last-modified");
        
        // Update the content with the formatted date
        lastModifiedElement.textContent = lastModified;
    });

