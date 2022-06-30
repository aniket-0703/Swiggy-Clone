document.querySelector("form").addEventListener("submit",loginFn);
document.querySelector("#link").addEventListener("click",signupfn);

function signupfn(){
    window.location.href="signup.html";
}

var registeredUsers = JSON.parse(localStorage.getItem("userdata"));
function loginFn() {
    event.preventDefault();
    var enteredEmail = document.querySelector("#email").value;
    var enteredPassword = document.querySelector("#password").value;
    registeredUsers.forEach(function(userData){
        if(userData.email == enteredEmail && userData.password == enteredPassword) {
            alert("LOGIN SUCCESS");
        
        } 
        else {
           alert("Incorrect Details");
        }
        
    });
}