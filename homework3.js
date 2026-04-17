function validateFirstName() {
    var x = document.getElementById("fname").value;

    if (x == "") {
        document.getElementById("fnameError").innerHTML = "First name is required";
        return false;
    }
    else if (!/^[A-Za-z'-]{1,30}$/.test(x)) {
            document.getElementById("fnameError").innerHTML = "Letters, apostrophes, and dashes only";
        return false;
    }
    else {
            document.getElementById("fnameError").innerHTML = "";    
        return true;
    }
}

function validateMI() {
    var x = document.getElementById("mi").value;

        if  (x == "") {
        document.getElementById("miError").innerHTML = "";
        return true;
    }
    else if (!/^[A-Za-z]$/.test(x)) {
        document.getElementById("miError").innerHTML = "Middle initial must be one letter";
        return false;
        }
    else {
        document.getElementById("miError").innerHTML = "";
        return true;
    }
    }

function validateLastName() {
    var x = document.getElementById("lname").value;

    if (x == "") {
            document.getElementById("lnameError").innerHTML = "Last name is required";
        return false;
    }
    else if (!/^[A-Za-z'-]{1,30}$/.test(x)) {
        document.getElementById("lnameError").innerHTML = "Letters, apostrophes, and dashes only";
            return false;
    }
    else {
        document.getElementById("lnameError").innerHTML = "";
            return  true;
    }
    }

function validateDOB() {
    var x = document.getElementById("dob").value;

    if (x == "") {
        document.getElementById("dobError").innerHTML = "Date of birth is required";
            return false;
    }

    var dob =  new Date(x);
    var today = new Date();
    var oldDate = new Date();
    oldDate.setFullYear(today.getFullYear() - 120);

    if (dob > today) {
         document.getElementById("dobError").innerHTML = "DOB cannot be in the future";
        return false;
    }
    else  if (dob < oldDate) {
        document.getElementById("dobError").innerHTML = "DOB cannot be more than 120 years ago";
        return false;
          }
    else {
        document.getElementById("dobError").innerHTML = "";
        return true;
        }
}
function validateSSN() {
        var x = document.getElementById("ssn").value;

    if (x == "") {
            document.getElementById("ssnError").innerHTML = "Social Security is required";
        return false;
        }
    else if (!/^[0-9]{9}$/.test(x)) {
        document.getElementById("ssnError").innerHTML = "Enter exactly 9 digits";
        return     false;
    }
    else {
        document.getElementById("ssnError").innerHTML = "";
            return true;
    }
}

function validateZip() {
    var x = document.getElementById("zip").value;

    if (x == "") {
        document.getElementById("zipError").innerHTML = "ZIP code is required";
            return false;
    }
    else if   (!/^[0-9]{5}$/.test(x)) {
        document.getElementById("zipError").innerHTML = "ZIP code must be 5 digits";
            return false;
    }
    else {
        document.getElementById("zipError").innerHTML = "";
            return true;
    }
    }

    function validatePhone() {
    var x = document.getElementById("phone").value;

    if (x == "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required";
        return false;
        }
    else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(x)) {
           document.getElementById("phoneError").innerHTML = "Use format 123-456-7890";
        return false;
    }
    else     {
        document.getElementById("phoneError").innerHTML = "";
        return true;
    }
}

function validateEmail() {
    var field = document.getElementById("email");
        field.value = field.value.toLowerCase();
    var x = field.value;

    if (x == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        return false;
    }
    else if (!/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(x)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email address";
        return false;
    }
    else     {
        document.getElementById("emailError").innerHTML = "";
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function () {

     document.getElementById("fname").addEventListener("input", validateFirstName);
    document.getElementById("mi").addEventListener("input", validateMI);
    document.getElementById("lname").addEventListener("input", validateLastName);
    document.getElementById("dob").addEventListener("change", validateDOB);
    document.getElementById("ssn").addEventListener("input", validateSSN);
    document.getElementById("zip").addEventListener("input", validateZip);
    document.getElementById("phone").addEventListener("input", validatePhone);
    document.getElementById("email").addEventListener("input", validateEmail);
    
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
