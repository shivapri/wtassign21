function checkEmail(str2) {
    var posat = str2.indexOf("@");
    var posdt = str2.indexOf(".");
    if (posat != -1 && posdt != -1) {
        if ((posat >= 1) && ((posdt - posat) >= 2) && ((str2.length - 1 - posdt) >= 2) && ((str2.length - 1 - posdt) <= 5)) {
            return true;
        }
        else {
            return false;
        }
    }
}
    function checkPword(str1) {
        var n1 = 0;
        var n2 = 0;
        var n3 = 0;
        for (i = 0; i < str1.length; i++) {
            if (str1[i] >= 'a' && str1[i] <= 'z') {
                n1++;
            }
            else if (str1[i] >= 'A' && str1[i] <= 'Z') {
                n2++;
            }
            else if (str1[i] >= '0' && str1[i] <= '9') {
                n3++;
            }
        }
        if (n1 > 0 && n2 > 0 && n3 > 0) {
            return true;
        }
        else {
            return false;
        }
    }


    function validateform() {
        var nam = document.myform.name.value;
        var password = document.myform.password.value;
        var cpassword = document.myform.cpassword.value;
        var email = document.myform.Email.value;
        var mobile = document.myform.mobile.value;
        var mob = document.getElementById("mob1");
        if (nam == "" || nam == null) {
            document.getElementById("nam1").innerHTML = "Name should not be blank";
            return false;
        }
        else if (nam.length < 3) {
            document.getElementById("nam1").innerHTML = "name should be 3-30";
            return false;
        }
        else if (nam.length > 30) {
            document.getElementById("nam1").innerHTML = "name should be between 3-30";
            return false;
        }
        else if (isNaN(nam) == false) {
            document.getElementById("nam1").innerHTML = "name should not be numeric";
            return false;
        }
        else if (!mob.checkValidity()) {
            document.getElementsById("contact").innerHTML = mobile.validationMessage;
            return false;
        }
        else if (password == "" || password == null) {
            document.getElementById("pword").innerHTML = "password should not be blank";
            return false;
        }
        else if (!checkPword(password)) {
            document.getElementById("pword").innerHTML = "password should have at least one capital letter one small letter and one digit";
            return false;
        }
        else if (password != cpassword) {
            document.getElementById("cpword").innerHTML = "password doesn't match";
            return false;
        }
        else if (email == "" || email == null) {
            document.getElementById("email").innerHTML = "email cannot be empty";
            return false;
        }
        else if (!checkEmail(email)) {
            document.getElementById("email").innerHTML = "Email should have a @ and .domain";
            return false;
        }
        // tn = document.getElementById("addeveent");
        createElement1 = document.createElement('td');
        createElement2 = document.createElement('td');
        createElement3 = document.createElement('td');
        createElement4 =document.createElement('tr');
        createElement1.innerHTML = nam;
        createElement2.innerHTML = email;
        createElement3.innerHTML = mobile;
        tn.appendChild(createElement4);
        tn.appendChild(createElement1);
        tn.appendChild(createElement2);
        tn.appendChild(createElement3);
        // return true;
 



        // return true;

    }
// add = document.getElementById("add");
// if(add==null){
//     add= false;
// }
// else{
//     add = true;
// }
// add.addEventListener("validateform",()=>{
//     console.log("event added");

// }
// )
// firstdiv = document.getElementById("add ");
// firstdiv.addEventListener('mouseover',function(){
//     document.querySelector('#nam1').innerHTML = "We have enco ";
// }
// )

// function clicked(){
//     if(onsubmit()==false){
//         console.log("correct");
//     }

//     console.log("Button was clicked")
// }
// window.onload=function(){
//     document.querySelector('body').innerHTML ="write the given inputs";
// }
