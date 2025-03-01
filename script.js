const links = [
    "https://shrinkme.ink/DSDzD",
    "https://shrinkme.ink/rvwOCvs",
    "https://shrinkme.ink/L9FfRb5",
    "https://shrinkme.ink/FHc6Wg3t",
    "https://shrinkme.ink/erfrQ"
];
const links2 = [
    "https://shrinkme.ink/DSDzD",
    "https://shrinkme.ink/rvwOCvs",
    "https://shrinkme.ink/L9FfRb5",
    "https://shrinkme.ink/FHc6Wg3t",
    "https://shrinkme.ink/erfrQ"
];
const links3 = [
    "https://shrinkme.ink/DSDzD",
    "https://shrinkme.ink/rvwOCvs",
    "https://shrinkme.ink/L9FfRb5",
    "https://shrinkme.ink/FHc6Wg3t",
    "https://shrinkme.ink/erfrQ"
];
const links4 = [
    "https://shrinkme.ink/DSDzD",
    "https://shrinkme.ink/rvwOCvs",
    "https://shrinkme.ink/L9FfRb5",
    "https://shrinkme.ink/FHc6Wg3t",
    "https://shrinkme.ink/erfrQ"
];
const links5 = [
    "https://shrinkme.ink/DSDzD",
    "https://shrinkme.ink/rvwOCvs",
    "https://shrinkme.ink/L9FfRb5",
    "https://shrinkme.ink/FHc6Wg3t",
    "https://shrinkme.ink/erfrQ"
];


function openRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length); 
    const randomLink = links[randomIndex]; 
    window.open(randomLink, "_blank"); 
}


document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.querySelector("#generateKeyBtn");

    if (generateButton) {
        generateButton.addEventListener("click", openRandomLink);
    }
});



const validKeys = [
    "A7X29B50M1Q84Z73Y5D6",
    "P4K81V60N3W52X79RZJQ",
    "M9Y37T50B6A41X28VZQP",
    "X5Q84N29J7K31W60PZVT",
    "Z1A60X79M5Q82K34VJTP"
];
const validKeys2 = [
    "A7X29B50M1Q84ZAEVTR73Y5D6",
    "P4K81V60NAVETR3W52X79RZJQ",
    "M9YAVWETE37T50B6A41X28VZQP",
    "X5Q84N29J7K31W60PAEVTRZVT",
    "Z1A60X79M5Q82K34VERY4AEYVAJTP"
];
const validKeys3= [
    "A7X29B50M1Q84Z73Y5EWTVAD6",
    "P4K81V60N3W52X79AWETVRZJQ",
    "M9Y37T50B6A41X28VAERGZQP",
    "X5Q84N29J7K31W60PAERGZVT",
    "Z1A60X79M5Q82K34VAEJTP"
];
const validKeys4 = [
    "A7X29B50M1Q84Z73Y5D6ZHR",
    "P4K81V6ASDX79RZJQHAERH",
    "M9Y37T50B6A41X28VZQP",
    "X5Q84NARGAERH29J7K31W60PZVT",
    "Z1A60X79M5Q82AERHK34VJTP"
];
const validKeys5 = [
    "A7X29B50M1Q84Z73ABEYRY5D6",
    "P4K81V60N3W5EBYEBYR2X79RZJQ",
    "M9Y37T50B6A4ABEYR1X28VZQP",
    "X5Q84N29AERYB4AERJ7K31W60PZVT",
    "Z1A60X79AERYBM5Q82K34VJTP"
];
const validKeys6 = [
    "A7X29B50M1QEABYR84Z73Y5D6",
    "P4K81V60N3W3BAY452X79RZJQ",
    "M9Y37T50EBYAB6A41X28VZQP",
    "3AY4AX5Q84N29J7K31W60PZVT",
    "Z1A60X79MA3BY45Q82K34VJTP"
];


const successLink2 = "https://discord.gg/kWX6e6Ae";
const successLink3 = "https://discord.gg/kWX6e6Ae";
const successLin4k = "https://discord.gg/kWX6e6Ae";
const successLin5k = "https://discord.gg/kWX6e6Ae";
const successLin6k = "https://discord.gg/kWX6e6Ae";
const successLin56k = "https://discord.gg/kWX6e6Ae";
const successLin7k = "https://discord.gg/kWX6e6Ae";
const successLink = "https://discord.gg/kWX6e6Ae";


function validateKey() {
    let userInput = document.getElementById("match-key").value.trim();

    if (validKeys.includes(userInput)) {
        window.open(successLink, "_blank"); 
    } else {
        alert("You have entered a wrong key! Please try again.");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitKeyBtn");

    if (submitButton) {
        submitButton.addEventListener("click", validateKey);
    }
});

