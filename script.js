document.addEventListener("DOMContentLoaded", function() {
    // Event Listener for Button Click
    document.getElementById("changeTextButton").addEventListener("click", function() {
        document.getElementById("message").textContent = "You just changed this text!";
    });

    // Form Validation
    document.getElementById("userForm").addEventListener("submit", function(event) {
        let isValid = true;

        let nameField = document.getElementById("name");
        let emailField = document.getElementById("email");
        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");

        // Name validation
        if (nameField.value.trim() === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Email validation
        if (!emailField.value.includes("@")) {
            emailError.textContent = "Please enter a valid email.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});