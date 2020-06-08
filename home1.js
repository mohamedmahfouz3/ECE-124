function pw(str) {

var constant = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_,-,#,&,*]).{8}$/;
return constant.test(str);
}




function check(form) {
 if (form.Fname.value == "" || form.lname.value == "") {
alert("Please enter your first and last name");
     form.Fname.focus();
        return false;
    }


    constant = /^\w+$/ ;

 if (!constant.test(form.Fname.value)) {
alert("First name must contain only letters ");
     form.Fname.focus();
         return false;
    }

for(var i=0;i<=8;i++){
if (form.pass.value[i]==" ")
    {
alert("space is not allowed in password");
form.pass.focus();
        
    return false;
    }
  else{continue;}
  }
  

if(form.pass.value[0]>= 'A' && form.pass.value[0] <= 'Z' )  
{ 
            i=0;
               
} 
else{         
        alert("first char must be capital letter");
              form.pass.focus(); 
              return false;
  }
  



if (form.pass.value != "" && form.pass.value == form.pass1.value) {
if (!pw(form.pass.value)) {
 alert("The password you have entered is not valid! , password must consist of only 8 characters including capital and small case and digits");
    form.pass.focus();
            return false;
        }
    }


    else {
alert("please make sure that you have enter password and confirm passsword");
form.pass.focus();
        return false;
    }
    return alert("Hello your chose your right place");



}