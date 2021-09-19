function signIn() {
    var email2 = document.getElementById("l-email").value;
    var password2 = document.getElementById("l-password").value;

    var email1 = localStorage.getItem("email1");
    var password1 = localStorage.getItem("password1");

    if (email2.toString() === email1.toString() && password2.toString() === password1.toString()) {
        location.href = "/hmtl files/teams.html"
    }

    else {
        alert("Please enter correct email or password:");
    }
}

