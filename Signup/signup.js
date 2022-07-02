document.querySelector("form").addEventListener("submit",signupFn);
document.querySelector("#link").addEventListener("click",loginfn);

function loginfn(){
    window.location.href="../Signin/signin.html";
}

var AllUserData;
if(localStorage.getItem('AllUserData') === null) {
    AllUserData = []
} else {
    AllUserData = JSON.parse(localStorage.getItem('AllUserData'));
}
function signupFn(){
    event.preventDefault();
    var userData={
        name:document.getElementById("name").value,
        mobile:document.getElementById("mobile").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    };
    AllUserData.push(userData);
    localStorage.setItem("userdata",JSON.stringify(AllUserData));
    alert("Signup Succesfully !");
}