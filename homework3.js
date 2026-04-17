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
function validateAddress1() {
        var x = document.getElementById("address1").value;

    if (x == "") {
            document.getElementById("address1Error").innerHTML = "Street address is required";
            return false;
    }
    else if (x.length < 2 || x.length > 30) {
        document.getElementById("address1Error").innerHTML = "Street address must be 2 to 30 characters";
            return false;
    }
    else {
        document.getElementById("address1Error").innerHTML = "";
            return true;
    }
}




function validateCity() {
    var x = document.getElementById("city").value;

    if (x == "") {
           document.getElementById("cityError").innerHTML = "City is required";
        return false;
}
     else if (x.length < 2 || x.length > 30) {
        document.getElementById("cityError").innerHTML = "City must be 2 to 30 characters";
        return false;
    }
    else {
        document.getElementById("cityError").innerHTML = "";
        return true;
    }
 }

function validateState() {
    var x = document.getElementById("state").value;

    if (x == "") {
        document.getElementById("stateError").innerHTML = "Please select a state";
        return false;
    }
    else {
        document.getElementById("stateError").innerHTML = "";
        return true;
    }
}

function validateUserId() {
            var field = document.getElementById("userid");
            field.value = field.value.toLowerCase();
            var x = field.value;

            if (x == "") {
                document.getElementById("useridError").innerHTML = "User ID is required";
                return false;
        }
    else if (!/^[a-z][a-z0-9_-]{4,19}$/.test(x)) {
        document.getElementById("useridError").innerHTML = "5-20 characters, start with a letter, no spaces";
        return false;
    }
      else {
        document.getElementById("useridError").innerHTML = "";
        return true;
    }
}

function validatePassword() {
        var x = document.getElementById("password").value;
        var userid = document.getElementById("userid").value.toLowerCase();

    if (x == "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        return false;
    }
    else if (x.length < 8) {
            document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters";
            return false;
    }
    else if (!/[A-Z]/.test(x)) {
            document.getElementById("passwordError").innerHTML = "Password needs an uppercase letter";
            return false;
    }
    else if (!/[a-z]/.test(x)) {
        document.getElementById("passwordError").innerHTML = "Password needs a lowercase letter";
        return false;
    }
    else if (!/[0-9]/.test(x))  {
        document.getElementById("passwordError").innerHTML = "Password needs a number";
        return false;
    }
    else if (x.toLowerCase() == userid && userid != "") {
        document.getElementById("passwordError").innerHTML = "Password cannot equal the user ID";
        return false;
    }
    else  {
        document.getElementById("passwordError").innerHTML = "";
        
        return true;
    }
    }

    function validateConfirmPassword() {
        
    var x = document.getElementById("confirmPassword").value;
    var y = document.getElementById("password").value;

    if (x == "") {
        document.getElementById("confirmPasswordError").innerHTML = "Please re-enter your password";
        return false;
    }
    else if (x != y) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        return false;
 }
    else {
        document.getElementById("confirmPasswordError").innerHTML = "";
        return true;
    }
}




function validateForm() {
    
function validateForm() {
    var ok = true;
    var badFields = "";

    if (!validateFirstName()) {
        ok = false;
        badFields += " First Name;";
    }
    if (!validateMI()) {
        ok = false;
        badFields += " Middle Initial;";
    }
    if (!validateLastName()) {
        ok = false;
        badFields += " Last Name;";
    }
    if (!validateDOB()) {
        ok = false;
        badFields += " Date of Birth;";
    }
    if (!validateSSN()) {
        ok = false;
        badFields += " Social Security;";
    }
    if (!validateAddress1()) {
        ok = false;
        badFields += " Street Address;";
    }
    if (!validateCity()) {
        ok = false;
        badFields += " City;";
    }
    if (!validateState()) {
        ok = false;
        badFields += " State;";
    }
    if (!validateZip()) {
        ok = false;
        badFields += " ZIP;";
    }
    if (!validatePhone()) {
        ok = false;
        badFields += " Phone;";
    }
    if (!validateEmail()) {
        ok = false;
        badFields += " Email;";
    }
    if (!validateUserId()) {
        ok = false;
        badFields += " User ID;";
    }
    if (!validatePassword()) {
        ok = false;
        badFields += " Password;";
    }
    if (!validateConfirmPassword()) {
        ok = false;
        badFields += " Confirm Password;";
    }

    if (ok == true) {
        document.getElementById("formMessage").innerHTML = "All fields look good. You may submit the form.";
        document.getElementById("formMessage").style.color = "green";
        document.getElementById("submitBtn").style.display = "inline-block";
    }
    else {
        document.getElementById("formMessage").innerHTML = "Please fix these fields:" + badFields;
        document.getElementById("formMessage").style.color = "red";
        document.getElementById("submitBtn").style.display = "none";
    }

    return ok;
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
    document.getElementById("address1").addEventListener("input", validateAddress1);
    document.getElementById("city").addEventListener("input", validateCity);
    document.getElementById("state").addEventListener("change", validateState);
    document.getElementById("userid").addEventListener("input", validateUserId);
    document.getElementById("password").addEventListener("input", validatePassword);
    document.getElementById("confirmPassword").addEventListener("input", validateConfirmPassword);
    
    const reviewBtn = document.getElementById("reviewBtn");
    const validateBtn = document.getElementById("validateBtn");
    const submitBtn = document.getElementById("submitBtn");
    const userIdField = document.getElementById("userid");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");
    const reviewContent = document.getElementById("reviewContent");

     if (validateBtn) {
        validateBtn.addEventListener("click", function () {
            validateForm();
        });
     }

    if (userIdField) {
        userIdField.addEventListener("input", function () {
            this.value = this.value.toLowerCase();
        });
        
    }

        document.getElementById("resetBtn").addEventListener("click", function () {
            document.getElementById("submitBtn").style.display = "none";
            document.getElementById("formMessage").innerHTML = "";
            document.getElementById("fnameError").innerHTML = "";
            document.getElementById("miError").innerHTML = "";
            document.getElementById("lnameError").innerHTML = "";
            document.getElementById("dobError").innerHTML = "";
            document.getElementById("ssnError").innerHTML = "";
            document.getElementById("address1Error").innerHTML = "";
            document.getElementById("cityError").innerHTML = "";
            document.getElementById("stateError").innerHTML = "";
            document.getElementById("zipError").innerHTML = "";
            document.getElementById("phoneError").innerHTML = "";
            document.getElementById("emailError").innerHTML = "";
            document.getElementById("useridError").innerHTML = "";
            document.getElementById("passwordError").innerHTML = "";
            document.getElementById("confirmPasswordError").innerHTML = "";
});

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
            let city = document.getElementById("city")?.value || "";
            let state = document.getElementById("state")?.value || "";
            let zip = document.getElementById("zip")?.value || "";
            let userid = document.getElementById("userid")?.value || "";
            let salary = document.getElementById("salary")?.value || "";
            let comments = document.getElementById("comments")?.value || "";

            let vaccinated = document.querySelector('input[name="vaccinated"]:checked')?.value || "Not selected";

            let conditions = [];
            document.querySelectorAll('input[name="history"]:checked').forEach(function (box) {
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
