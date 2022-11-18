function SendMail(){
    var params = {
        from_name : document.querySelector("#tshirt-name").value,
        /*email_id : document.querySelector("#email").value,
        document.querySelector("#code").value + */
        message : (" ;  Painted by : " + document.querySelector("#tshirt-name").value  + "; T-shirt color :" + tShirtColor + ";" + selectedSize)
    }
    /*emailjs.send("service_2xg7v2f","template_wtabctp",params).then(function(res){alert("Success!"+ res.status);})*/
    emailjs.send("service_2xg7v2f","template_wtabctp",params).then((e) => {console.log("Success !" + e.status);})
    console.log("Mail sent");
}