const links = [
   
];

// Function to open a random link
function openRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length); // Get random index
    const randomLink = links[randomIndex]; // Get the random link
    window.open(randomLink, "_blank"); // Open link in new tab
}

// Ensure the script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.querySelector("#generateKeyBtn");

    if (generateButton) {
        generateButton.addEventListener("click", openRandomLink);
    }
});


// List of valid keys
const validKeys = [
  
];

// Link to open if the key is valid
const successLink = "";

// Function to validate input key
function validateKey() {
    let userInput = document.getElementById("match-key").value.trim(); // Get input value & remove spaces

    if (validKeys.includes(userInput)) {
        window.open(successLink, "_blank"); // Open success link in new tab
    } else {
        alert("You have entered a wrong key! Please try again."); // Show error alert
    }
}

// Ensure the script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitKeyBtn");

    if (submitButton) {
        submitButton.addEventListener("click", validateKey);
    }
});

