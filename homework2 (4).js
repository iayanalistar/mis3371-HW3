document.addEventListener("DOMContentLoaded", function () {
    const reviewBtn = document.getElementById("reviewBtn");
    const userIdField = document.getElementById("userid");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");
    const reviewContent = document.getElementById("reviewContent");

    if (userIdField) {
        userIdField.addEventListener("input", function () {
            this.value = this.value.toLowerCase();
        });
    }

    function checkPasswordsMatch() {
        if (!passwordField || !confirmPasswordField) return;

        if (confirmPasswordField.value === "") {
            confirmPasswordField.setCustomValidity("");
        } else if (passwordField.value !== confirmPasswordField.value) {
            confirmPasswordField.setCustomValidity("Passwords do not match.");
        } else {
            confirmPasswordField.setCustomValidity("");
        }
    }

    if (passwordField && confirmPasswordField) {
        passwordField.addEventListener("input", checkPasswordsMatch);
        confirmPasswordField.addEventListener("input", checkPasswordsMatch);
    }

    if (reviewBtn) {
        reviewBtn.addEventListener("click", function () {
            checkPasswordsMatch();

            let fname = document.getElementById("fname")?.value || "";
            let mi = document.getElementById("mi")?.value || "";
            let lname = document.getElementById("lname")?.value || "";
            let dob = document.getElementById("dob")?.value || "";
            let ssn = document.getElementById("ssn")?.value || "";
            let email = document.getElementById("email")?.value || "";
            let phone = document.getElementById("phone")?.value || "";
            let address1 = document.getElementById("address1")?.value || "";
            let address2 = document.getElementById("address2")?.value || "";
            let city = document.getElementById("city")?.value || "";
            let state = document.getElementById("state")?.value || "";
            let zip = document.getElementById("zip")?.value || "";
            let userid = document.getElementById("userid")?.value || "";
            let salary = document.getElementById("salary")?.value || "";
            let comments = document.getElementById("comments")?.value || "";

            let vaccinated = document.querySelector('input[name="vaccinated"]:checked')?.value || "Not selected";

            let conditions = [];
            document.querySelectorAll('input[name="conditions"]:checked').forEach(function (box) {
                conditions.push(box.value);
            });

            if (zip.length > 5) {
                zip = zip.substring(0, 5);
            }

            let output = `
                <h3>PLEASE REVIEW THIS INFORMATION</h3>
                <p><strong>Name:</strong> ${fname} ${mi} ${lname}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>ID Number:</strong> ${ssn}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong><br>
                ${address1}<br>
                ${address2}<br>
                ${city}, ${state} ${zip}</p>
                <p><strong>Conditions:</strong> ${conditions.length ? conditions.join(", ") : "None selected"}</p>
                <p><strong>Vaccinated:</strong> ${vaccinated}</p>
                <p><strong>Desired Salary:</strong> $${salary}</p>
                <p><strong>Comments / Symptoms:</strong> ${comments}</p>
                <p><strong>User ID:</strong> ${userid}</p>
            `;

            if (reviewContent) {
                reviewContent.innerHTML = output;
            }
        });
    }
});
