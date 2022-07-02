document.querySelector("form").addEventListener("submit",loginFn);
document.querySelector("#link").addEventListener("click",signupfn);

// var tu=JSON.parse(localStorage.getItem("AllUserData"))||[];
// var e=document.querySelector("email").value;
//     var d=document.querySelector("password").value;
// tu.forEach(el => {
//     if(el.email==e&&el.password==d){
//         var q=document.querySelector("#getIn");
//         q.style.visibility="visible";
//     }

// });

function signupfn(){
    window.location.href="../Signup/signup.html";
}

var registeredUsers = JSON.parse(localStorage.getItem("userdata"));
function loginFn() {
    event.preventDefault();
    var enteredEmail = document.querySelector("#email").value;
    var enteredPassword = document.querySelector("#password").value;
    registeredUsers.forEach(function(userData){
        if(userData.email == enteredEmail && userData.password == enteredPassword) {
            alert("LOGIN SUCCESS");
            window.location.href="homePage.html";
        } 
        else {
           alert("Incorrect Email & Password");
        }
        
    });
}