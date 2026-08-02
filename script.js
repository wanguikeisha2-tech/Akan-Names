
let form = document.getElementById("akan-names-form");

form.addEventListener("submit", function(event) {

    event.preventDefault(); 

    let birthdate = document.getElementById("birthdate").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    if (birthdate === "") {
        alert("Please enter your birthdate.");
        return;
    }

    if (gender === null) {
        alert("Please select your gender.");
        return;

    let dateParts = birthdate.split("-");

    let year = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]);
    let day = parseInt(dateParts[2]);

    if (day < 1 || day > 31) {
        alert("Invalid day.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Invalid month.");
        return;
    }

    let CC = Math.floor(year / 100);

    let YY = year % 100;

    let d = Math.floor(
        ((4 * CC - 2 * CC - 1) +
        ((5 * YY) / 4) +
        ((26 * (month + 1)) / 10) +
        day) % 7
    );

    if (d < 0) {
        d += 7;
    }

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

    document.getElementById("result").textContent =
        "Your Akan name is " + akanName + "!";

});
