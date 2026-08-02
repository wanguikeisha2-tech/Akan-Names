// Get the form
let form = document.getElementById("akan-names-form");

// Run this code when the form is submitted
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the birthdate
    let birthdate = document.getElementById("birthdate").value;

    // Get the selected gender
    let gender = document.querySelector('input[name="gender"]:checked');

    // Check if birthdate was entered
    if (birthdate === "") {
        alert("Please enter your birthdate.");
        return;
    }

    // Check if gender was selected
    if (gender === null) {
        alert("Please select your gender.");
        return;
    }
    // Split the date
    let dateParts = birthdate.split("-");

    let year = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]);
    let day = parseInt(dateParts[2]);

    // Validate the date
    if (day < 1 || day > 31) {
        alert("Invalid day.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Invalid month.");
        return;
    }

    // First two digits of the year
    let CC = Math.floor(year / 100);

    // Last two digits of the year
    let YY = year % 100;

    // Calculate the day
    let d = Math.floor(
        ((4 * CC - 2 * CC - 1) +
        ((5 * YY) / 4) +
        ((26 * (month + 1)) / 10) +
        day) % 7
    );

    if (d < 0) {
        d += 7;
    }

    // Akan names
    let maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
    ];

    let femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama"
    ];

    let akanName;

    if (gender.value === "male") {
        akanName = maleNames[d];
    } else {
        akanName = femaleNames[d];
    }

    // Display the result
    document.getElementById("result").textContent =
        "Your Akan name is " + akanName + "!";

});