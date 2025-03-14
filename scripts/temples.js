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

   
    document.querySelector("#copyright-year").textContent = new Date().getFullYear();

    // Set the last modified date dynamically
    document.querySelector("#last-modified").textContent = document.lastModified;
});


