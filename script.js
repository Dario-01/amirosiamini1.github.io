// script.js
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("welcome-modal");
    const closeModalButton = document.getElementById("close-modal");

    // Show modal on page load
    modal.style.display = "flex";

    // Close modal when button is clicked
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
