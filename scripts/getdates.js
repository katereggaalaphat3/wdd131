document.addEventListener("DOMContentLoaded", function () {
    // Get the current last modified date of the document
    const lastModified = document.lastModified;
    
    // Select the span element where we want to display the date
    const lastModifiedElement = document.getElementById("last-modified");
    
    // Update the content with the formatted date
    lastModifiedElement.textContent = lastModified;
});
