var privacy = document.getElementById("Privacy");
var learn = document.getElementById("learn_more");

learn.addEventListener("click",()=>
{
    learn.style.display="none";
    privacy.style.display="block";
})

var mail = document.getElementById("mail")
var pass = document.getElementById("pass")
var mail_warn = document.getElementById("mail_warning")
var pass_warn = document.getElementById("pass_warning")
var signinButton = document.getElementById("sign_in_bt");

mail.addEventListener("focusout",()=>
    
{
    var mail_val = document.getElementById("mail").value;
    if(mail_val == "")
    {
        var para = document.createElement('p')
        para.TEXT_NODE="Please enter a valid email address or phone number.";
        mail_warn.style.display="block";
        mail.style.borderBottom ="3px solid orange"
    }
    else
    {
        mail_warn.style.display="none";
        mail.style.borderBottom ="none"
    }
})

pass.addEventListener("focusout",()=>
{
    var pass_val = document.getElementById("pass").value;
    
    if(pass_val == "")
    {
        pass_warn.style.display="block";
        pass.style.borderBottom="3px solid orange";
    }
    else
    {
        pass_warn.style.display="none";
        pass.style.borderBottom="none";
    }
})

signinButton.addEventListener("click",()=>
{
    var mail_val = document.getElementById("mail").value;
    var pass_val = document.getElementById("pass").value;

    if(mail_val == "" && pass_val == "")
    {
        mail_warn.style.display="block";
        mail.style.borderBottom ="3px solid orange";
        pass_warn.style.display="block";
        pass.style.borderBottom="3px solid orange";
    }
    else if(mail_val == "")
    {
        mail_warn.style.display="block";
        mail.style.borderBottom ="3px solid orange";
    }
    else if(pass_val == "")
    {
        pass_warn.style.display="block";
        pass.style.borderBottom="3px solid orange";
    }
    else
    {
        mail_warn.style.display="none";
        mail.style.borderBottom ="none";
        pass_warn.style.display="none";
        pass.style.borderBottom="none";
        alert("Account Created Successfully")
    }
})

