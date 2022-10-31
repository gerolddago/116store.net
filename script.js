window.addEventListener("load",()=> {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    let start_background_color = "white";

    /*let leftPosition;
    let topPosition;
    let minusDrawX;
    let minusDrawY;
    
    canvas.style.position = "absolute";
    canvas.style.left = "27%";
    canvas.style.top = "23%";*/

    //Resizing
    canvas.height = 500;
    canvas.width = 300; 
      
    ctx.lineWidth = 7;
    let draw_color = "black";
    let draw_width = 7;


    
    function change_color(e){
        draw_color = e.style.background;
    }

    
 
    let painting = false;
    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting)return;
        ctx.Width = 7;
        ctx.lineCap = "round";

        ctx.lineTo((e.clientX)-390,(e.clientY)-180);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo((e.clientX)-390,(e.clientY)-180);
    }

function onSave(){
    canvas.toBlob((blob)=>{
        const timestamp = Date.now().toString();
        const a = document.createElement('a');
        document.body.append(a);
        a.download = `CREATION.png`;
        a.href = URL.createObjectURL(blob);
        console.log(URL.createObjectURL(blob));
        a.click();
        a.remove();
    })
}
document.querySelector('#save').addEventListener('click',onSave);



//EventListeners
canvas.addEventListener("mousedown",startPosition);
canvas.addEventListener("mouseup",finishedPosition);
canvas.addEventListener("mousemove",draw);

function clear_canvas(){
    ctx.fillStyle = start_background_color;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(0,0,canvas.width,canvas.height);
}
function undo_last(){

}
});





/*FORM1
var btn = document.querySelector("#btn");
btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var subject = "ORDER :"+ name + "." + URL.createObjectURL(blob);
    var drawingCode = URL.createObjectURL(blob);
    var body = "Name :"+ name + "</br>Email :"+ email + "</br>Subject :"+ subject + "</br>Code :"+ drawingCode;


    Email.send({
        Host:"",
        Username:"",
        Password:"",
        To:"",
        From: name,
        Subject:subject,
        Body: body
    }).then(message => alert(message));
})*/

/*FORM2
let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    document.querySelector("#btn").value="Submiting..";
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbyxrL-YrWyh28Mhl0U5mBKvsliIXCuDw0KurtkmNUHe-CO2GePdKr5TbV3smzWnt44rQQ/exec', {method:"POST",body:data}).then(res=> res.json()).then(data=>{document.querySelector("#msg").innerHTML=data; document.querySelector("#btn").value="Submit"});
})*/

/*FORM3
let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fetch(form.action,{
        method : "POST",
        body: new FormData(document.querySelector("form")),
    }).then((html)=>{window.open('d.html','_blank');});
});*/

//PAYMENTREQUEST
function goPay(){
    if (window.PaymentRequest){
        //si le navigateur de l'utilisateur est supporté
    
        //Payment request object
        const supportedPaymentMethods = [
            {
                supportedMethods: ['https://tez.google.com/pay'],
                data:{
                    pa: 'xxxxxxxx',
                    pn: 'xxxxxxxx',
                    tr: 'xxxxxxxx',
                    url: 'tehbgdhte',
                    mc: 'ht',
                    tn: 'xtcfygv',
                },
            }
        ];
    
        //Payment details
        const paymentDetails = {
            total:{
                label: 'Total Cost',
                amount:{
                    currency: 'EUR',
                    value:30
                }
            }
        }
    
        //Custom options
        const options = {}
    
        //Create request
        const paymentRequest = new PaymentRequest(
            supportedPaymentMethods, paymentDetails, options
        );
    
        paymentRequest.show()
        .then(payment => console.log(payment))
        .catch(error =>console.error(error));
    }
    else {
        alert("Transaction failed !")
    }
}



function SendMail(){
    var params = {
        from_name : document.querySelector("#name").value,
        email_id : document.querySelector("#email").value,
        painted_by : document.querySelector("#paintedby").value,
        message : (document.querySelector("#code").value + " ;  Painted by : " + document.querySelector("#paintedby").value)
    }
    /*emailjs.send("service_2xg7v2f","template_wtabctp",params).then(function(res){alert("Success!"+ res.status);})*/
    emailjs.send("service_2xg7v2f","template_wtabctp",params).then(() => {
        
    })
}