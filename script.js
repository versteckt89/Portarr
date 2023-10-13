document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".navButton");
    const iframe = document.getElementById("contentFrame");
    const titleElement = document.querySelector("title");

    // Function to update the active button and title
    function setActiveButton(button) {
        // Remove 'active' class from all buttons and reset background color
        buttons.forEach((btn) => {
            btn.classList.remove("active");
            btn.style.backgroundColor = "";
        });

        // Add 'active' class to the clicked button
        button.classList.add("active");

        // Get the source URL and title based on the data attributes of the clicked button
        const sourceUrl = button.getAttribute("data-url");
        const pageTitle = button.getAttribute("data-title");
        const bgColor = button.getAttribute("data-bg-color");

        // Set the iframe source to the selected URL
        iframe.src = sourceUrl;

        // Set the title and background color
        titleElement.textContent = pageTitle;

        // Set the background color for the active button
        button.style.backgroundColor = bgColor;
    }

    // Set the default source to Jellyfin
    setActiveButton(buttons[0]);

    // Add click event listeners to each button
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            setActiveButton(button);
        });
    });
});

