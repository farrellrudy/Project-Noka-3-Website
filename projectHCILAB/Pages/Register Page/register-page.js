

function showError(msg) {
    let error =  document.getElementById("error")
    error.innerHTML = msg
    return false
}

function validate() {

    let username = document.getElementById("Name").value
    let email = document.getElementById("Email").value
    let password = document.getElementById("Pass").value
    let confirm = document.getElementById("Confirm").value
    let gender = document.getElementById("gender").value

    let CheckBox = document.getElementById("agree").checked

    //Username 
    if (username == "") {
        return showError("Enter Username")
    }

    // Email
    else if (email.indexOf('@') == -1) {
        return showError("Enter email that contains '@'")
    }

    else if (!email.endsWith(".com")) {
        return showError("Email must ends with '.com'")
    }

    // Password
    else if (password.length < 5 || password.length > 10) {
        return showError("Password must be 5 - 10 characters")
    }

    // Confirm Password
    else if (password != confirm) {
        return showError("Password didn't match please try again")
    }

    // Gender
    else if (gender == "-1") {
        return showError("Must select gender")
    }

    // Check Box
    else if (CheckBox == false) {
        return showError("You must agree to terms and conditions")
    }


}