function validate(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
 
if(email == "" && password == ""){
    alert("email and password cannot be blank ")
}
else{
alert("registered successfully")
}
}