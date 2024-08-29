function validation(){

     if(document.Formfill.number.value==""){
        document.getElementById("result").innerHTML="enter the number";
        return false;
    }
   
    else if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter the username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="atleast six letter";
       return false

    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="enter the email*";
       return false

    }
    
    else if(document.Formfill.password.value==""){
        document.getElementById("result").innerHTML="enther the password*";
       return false

    } 
    else if(document.Formfill.cpassword.value==""){
        document.getElementById("result").innerHTML="enther the confirm password*";
       return false

    }
    else if(document.Formfill.password.value !== document.Formfill.cpassword.value){
        document.getElementById("result").innerHTML="password does'nt matched";
       return false

    }
    
   

    alert("regirter succes");
   

}
