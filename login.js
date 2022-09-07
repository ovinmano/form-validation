function validate() {
    //------------------first name error msg
    const fName = document.querySelector('.fName');
    if (fName.value == "") {
        document.querySelector('.p1').innerHTML = '*FIRST NAME MUST BE ATLEAST 4 CHARACTERS*';
        fName.focus();
        fName.style.border = '2px solid red';
        return false;
    }
    // length <=4 style display green
    else if (fName.value.length <= '4') {
        document.querySelector('.p1').innerHTML = '';
        fName.focus();
        fName.style.border = '2px solid green';
        return false;
    }
    // length >=14 letters to large
    else if (fName.value.length >= '14') {
        document.querySelector('.p1').innerHTML = '*FIRST NAME LENGTH TO LARGE*';
        fName.focus();
        fName.style.border = '2px solid red';
        return false;
    }
    //--------------last name error msg

    const lName = document.querySelector('.lName');
    if (lName.value == "") {
        document.querySelector('.p2').innerHTML = '*LAST NAME MUST BE ATLEAST 4 CHARACTERS*';
        lName.focus();
        lName.style.border = '2px solid red';
        return false;
    }
    // length <=4 style display green
    if (lName.value.length <= '4') {
        document.querySelector('.p2').innerHTML = '';
        lName.focus();
        lName.style.border = '2px solid green';
        return false;
    }
    // length >=14 letters to large
    if (lName.value.length >= '14') {
        document.querySelector('.p2').innerHTML = '*LAST NAME LENGTH TO LARGE*';
        lName.focus();
        lName.style.border = '2px solid red';
        return false;
    }
    // ----------------radio button
    const publicEl = document.getElementById('public');
    const private = document.getElementById('private');
    const personal = document.getElementById('personal');
    if (publicEl.checked == true) {
        document.querySelector('.p5').innerHTML = '';
    }
    else if (private.checked == true) {
        document.querySelector('.p5').innerHTML = '';
    }
    else if (personal.checked == true) {
        document.querySelector('.p5').innerHTML = '';
    }
    else {
        document.querySelector('.p5').innerHTML = '*SELECT ANY ONE*';
        return false
    }
    const pass = document.querySelector('.pass');
    if (pass.value == "") {
        document.querySelector('.p4').innerHTML = '*FILL THE PASSWORD 9 CHARACTERS*';
        pass.focus();
        pass.style.border = '2px solid red';
        return false;
    } else if (pass.value.length <= 7) {
        document.querySelector('.p4').innerHTML ='';
        pass.focus();
        pass.style.border = '2px solid green';
        return false;
    }

    //-----------check box

    const check1=document.querySelector('.terms');
    if(check1.checked==true){
        document.querySelector('.p7').innerHTML = '';
    }else{
        document.querySelector('.p7').innerHTML = '*CHECK THE BOX*';
        return false
    }


    // ------------------email validation
    const mailEl = document.querySelector('.mail').value;
    const x = /^([A-Za-z0-9_.])+\@([a-z])+\.([a-z]+)$/
    if (x.test(mailEl)) {
        return true;
    }
    else {
        document.querySelector('.p3').innerHTML = '*FILL THE EMAIL USING @gamil.com*';
        return false;
    }
     
    
}

    
// const gender=document.querySelectorAll('.gen');
    
// if (gender==''){
//   document.querySelector('.p6').innerHTML = '*select gender*';
//   gender.focus();
//   gender.style.border = '2px solid red';
//   return false;
// }
