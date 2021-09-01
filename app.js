function viewPassword() {
    var passwordInput=document.getElementById('password-field');

    var passStatus=document.getElementById('pass-status');

    if (passwordInput.type=='password') {
        passwordInput.type='text';
        passStatus.className='fa fa-eye-slash';

    }
    else {
        passwordInput.type='password';
        passStatus.className='fa fa-eye';
    }


}
function viewConfirmPassword() {
    var passwordInput=document.getElementById('confirm');
    var passStatus=document.getElementById('pass-status1');

    if (passwordInput.type=='password') {
        passwordInput.type='text';
        passStatus.className='fa fa-eye-slash';

    }
    else {
        passwordInput.type='password';
        passStatus.className='fa fa-eye';
    }


}

function preview_image(event) {
    var reader=new FileReader();
    reader.onload=function () {
        var output=document.getElementById('output_image');
        output.src=reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}







const password1=document.getElementById("password-field");
const password2=document.getElementById("confirm");


function change(elem) {

    if (elem.value.length>0&&password1) {
        if (elem.value!=password1.value&&password1.value!="") {
            document.querySelector(".show").innerHTML="mismatch";

        }


        else {
            document.querySelector(".show").innerHTML=" ";
        }




    }
    else if (!elem.value&&!password1.value) {
        document.querySelector(".show").innerHTML=" ";
    }
}




function chang(elem) {

    if (elem.value.length>0&&password2) {
        if (elem.value!=password2.value&&password2.value!="") {
            document.querySelector(".show").innerHTML="mismatch";
            console.log(password2.value);

        }

        else {
            document.querySelector(".show").innerHTML=" ";
        }


    }
    else if (!elem.value&&!password2.value) {
        document.querySelector(".show").innerHTML=" ";
    }
}


const input=document.querySelector("input");
const button=document.querySelector("button");


function func() {
    if (!input.value) {
        input.style.border="2px solid red";
    }

}












