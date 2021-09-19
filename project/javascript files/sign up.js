function signUp() {

    var personInfo = {

         firstName: document.getElementById("first-name").value,
         lastName: document.getElementById("last-name").value,
         email: document.getElementById("s-email").value,
         password: document.getElementById("s-password").value,
         confirmPassword: document.getElementById("confirm-password").value

        }

    localStorage.setItem("person-Info",personInfo);

    location.href = "/html files/sign in.html";

}



