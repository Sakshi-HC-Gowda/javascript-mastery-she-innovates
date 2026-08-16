// ============================================
// script.js
// DOM Manipulation and Events
// ============================================


// Selecting HTML elements

const form = document.getElementById("profileForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const branchInput = document.getElementById("branch");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const branchError = document.getElementById("branchError");

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileBranch = document.getElementById("profileBranch");

const message = document.getElementById("message");

const darkModeBtn = document.getElementById("darkModeBtn");
const clearBtn = document.getElementById("clearBtn");


// ============================================
// Form Submit Event
// ============================================

form.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    let isValid = true;


    // Clear previous errors

    nameError.textContent = "";
    emailError.textContent = "";
    branchError.textContent = "";


    // Name Validation

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required.";

        isValid = false;
    }


    // Email Validation

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required.";

        isValid = false;

    } else if (!emailInput.value.includes("@")) {

        emailError.textContent = "Enter a valid email.";

        isValid = false;
    }


    // Branch Validation

    if (branchInput.value === "") {

        branchError.textContent = "Please select your branch.";

        isValid = false;
    }


    // Update Profile if Valid

    if (isValid) {

        profileName.textContent =
            "Name: " + nameInput.value.trim();

        profileEmail.textContent =
            "Email: " + emailInput.value.trim();

        profileBranch.textContent =
            "Branch: " + branchInput.value;

        message.textContent =
            "Profile updated successfully!";
    }

});


// ============================================
// Input Event
// ============================================

nameInput.addEventListener("input", function() {

    message.textContent =
        "Typing your name...";

});


// ============================================
// Dark Mode
// ============================================

darkModeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});


// ============================================
// Clear Profile
// ============================================

clearBtn.addEventListener("click", function() {

    // Clear form

    nameInput.value = "";
    emailInput.value = "";
    branchInput.value = "";


    // Clear errors

    nameError.textContent = "";
    emailError.textContent = "";
    branchError.textContent = "";


    // Reset profile

    profileName.textContent =
        "Name: Not added";

    profileEmail.textContent =
        "Email: Not added";

    profileBranch.textContent =
        "Branch: Not added";


    // Reset message

    message.textContent =
        "Enter your details to create your profile.";

});