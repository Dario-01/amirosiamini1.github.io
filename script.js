// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");

    // Check for saved preference in localStorage
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
        document.body.className = savedMode;
    }

    // Toggle dark and light mode
    toggleButton.addEventListener("click", () => {
        const currentMode = document.body.classList.contains("dark-mode")
            ? "dark-mode"
            : "light-mode";

        const newMode = currentMode === "dark-mode" ? "light-mode" : "dark-mode";
        document.body.className = newMode;

        // Save the preference
        localStorage.setItem("theme", newMode);
    });
});
