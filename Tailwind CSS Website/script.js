function SendMail () {
    var params = {
        from_name : document.getElementById("fullname").value;
        email_id : document.getElementById("email_id").value
        message: document.getElementById("message").value
    }
    emailjs.send("idowu", "template_3y7hib2", params).then(function(res ) {
        alert("Success!" + res.status)  
    })
    
}