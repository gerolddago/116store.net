toolBtns = document.querySelectorAll(".tool");
sizingBtns = document.querySelectorAll(".sizing");
fillColor = document.querySelector("#fill-color");
sizeSlider = document.querySelector("#size-slider");
colorBtns = document.querySelectorAll(".colors .option");
chooseBtns = document.querySelectorAll(".colors .choose");
//colorPicker = document.querySelector("#color-picker");
savePay = document.querySelector(".save-img");
let text = document.querySelector("#text");
let textShow = document.querySelector("#show-text");
let textErase = document.querySelector("#erase-text");
let textInput = document.querySelector("#text-input");
//let textInputValue = document.querySelector("#text-input").value; // n'arrive pas a detecter ce qu'il ya dans l'input
//let textFollow = document.querySelector("#text-follow");
let isTextHere = false;
document.querySelector('video').playbackRate = 1.5;
let tShirtBlanc = document.querySelector(".t-shirt #Tblanc");
let tShirtNoir = document.querySelector(".t-shirt #Tnoir");
//let hoodie = document.querySelector(".hoodie img");
//let jeans = document.querySelector(".jeans img");
//let jeansPos = document.querySelector(".jeans img").getBoundingClientRect();
let sizeText = document.querySelector(".size-text");
let textSide = document.querySelector(".text-side");
let toolsBoard = document.querySelector(".tools-board");
let footer = document.querySelector("footer");
let background1 = document.querySelector("#background1");
let designedDiv =  document.querySelector(".designed");
let designedInput =  document.querySelector("#tshirt-name");
//let designed =  document.querySelector("#tshirt-name").value;
//let designedToString = designed.toString();
let errorFormat = document.querySelector("#error-format");
let goTblanc = document.querySelector("#goTblanc");
let drawingBoard = document.querySelector(".drawing-board");




errorFormat.style.display = "none";
if (window.screen.availWidth < 1440){
    console.log("error format !")
    errorFormat.style.display = "block";
}



//console.log(typeof textInputValue);

//Text
//canvas.addEventListener('mousedown', (e)=>{console.log(e.x)}); // mouse X position
//canvas.addEventListener('mousedown', (e)=>{console.log(e.y)}); // mouse Y position

/*function followText(){
    document.addEventListener('mousemove', (e)=>{
        let x = e.ClientX;
        let y = e.ClientY;
        textFollow.style.left = x + "px";
        textFollow.style.top = y + "px";
    })
}*/

//SLIDING
let allCanSlide = false;
if(allCanSlide == false){
    tShirtBlanc.style.position = "absolute";
    tShirtNoir.style.position = "absolute";
    //hoodie.style.position = "absolute";
    //jeans.style.position = "absolute";
    sizeText.style.position = "fixed";
    textSide.style.position = "fixed";
    toolsBoard.style.position = "fixed";
    background1.style.position = "fixed";
    //footer.style.position = "fixed";
}else if (allCanSlide==true){
    sizeText.style.position = "absolute";
    textSide.style.position = "absolute";
    toolsBoard.style.position = "absolute";
    background1.style.position = "absolute";
    //footer.style.position = "absolute";
}
/*function fixedOrAbsolute(){
    console.log(tShirtBeigePos.top);
    if(tShirtBeigePos.top <= 900){
        console.log("fin des tshirts");
        allCanSlide = true;
    }
}

canvas.addEventListener("mouseup", fixedOrAbsolute())*/



/*Suivi de texte
const onMouseMove = (e) =>{
textFollow.style.left = e.pageX + 'px';
textFollow.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);*/

window.addEventListener("Wheel", (e)=>{console.log(e.deltaY)});


function pasteText(){
}
function undoText(){
}

/*if (textInputValue.length > 0){
    text.style.display = "none";
    textShow.style.display = "block";
    textErase.style.display = "none";
}
if (textInputValue.value.length = 0){
    text.style.display = "block";
    textShow.style.display = "none";
    textErase.style.display = "none";
}*/

textInput.addEventListener("click", () => {
    if(textInput.style.display == "block" && text.style.display == "block"){
        text.style.display = "none";
        textShow.style.display = "block";
        textErase.style.display = "none";
        textInput.style.display == "block";
    }
});

text.addEventListener("click", () => {
    if(textInput.style.display == "none"){
        text.style.display = "none"
        textShow.style.display = "block"
        textErase.style.display = "none"
        textInput.style.display = "block"
    }
});

textShow.addEventListener("click", () => {
    
    if (textInput.style.display == "block"){
        textInput.style.display = "block";
        textShow.style.display = "none";
        textErase.style.display = "block";
        isTextHere = true;
        
        //textShow.style.cursor = "grabbing";
    }
});

textErase.addEventListener("click", () => {
    
    if (textErase.style.display == "block"){
        textInput.style.display = "none";
        textErase.style.display = "none";
        textShow.style.display = "none";
        text.style.display = "block";
        isTextHere = false;

        undoText();
    }
});


// global variables with default value
let prevMouseX, prevMouseY, snapshot,
isDrawing = false,
selectedTool = "brush",
brushWidth = 7,
selectedColor = "#000";
selectedSize = "size-l";


const drawRect = (e) => {
}


const drawCircle = (e) => {
}


const drawTriangle = (e) => {
}


const startDraw = (e) => {
}


const drawing = (e) => {
}


toolBtns.forEach(btn => {
btn.addEventListener("click", () => { // adding click event to all tool option
// removing active class from the previous option and adding on current clicked option
document.querySelector(".options .active").classList.remove("active");
btn.classList.add("active");
selectedTool = btn.id;
});
});
sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value); // passing slider value as brushSize
colorBtns.forEach(btn => {
btn.addEventListener("click", () => { // adding click event to all color button
// removing selected class from the previous option and adding on current clicked option
document.querySelector(".options .selected").classList.remove("selected");
btn.classList.add("selected");
// passing selected btn background color as selectedColor value
selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
});
});

/*colorPicker.addEventListener("change", () => {
// passing picked color value from color picker to last color btn background
colorPicker.parentElement.style.background = colorPicker.value;
colorPicker.parentElement.click();
});*/

/*sizingBtns.forEach(sizing => {
    sizing.addEventListener("click", () => { // adding click event to all tool option
    // removing active class from the previous choose and adding on current clicked option
    document.querySelector(".chooses .active").classList.remove("active");
    sizing.classList.add("active");
    selectedSize = sizing.id;
    });
});*/

function RecapCommande(){
    if (selectedSize === "size-xs"){console.log(selectedSize)};
    if (selectedSize === "size-s"){console.log(selectedSize)};
    if (selectedSize === "size-m"){console.log(selectedSize)};
    if (selectedSize === "size-l"){console.log(selectedSize)};
    if (selectedSize === "size-xl"){console.log(selectedSize)};
    console.log("painted by " + designedToString);
    console.log("T-shirt color :" + tShirtColor);
}



function SendMail(){
    var params = {
        from_name : document.querySelector("#tshirt-name").value,
        /*email_id : document.querySelector("#email").value,*/
        message : (document.querySelector("#code").value + " ;  Painted by : " + document.querySelector("#tshirt-name").value  + "; T-shirt color :" + tShirtColor + ";" + selectedSize)
    }
    /*emailjs.send("service_2xg7v2f","template_wtabctp",params).then(function(res){alert("Success!"+ res.status);})*/
    emailjs.send("service_2xg7v2f","template_wtabctp",params).then((e) => {console.log("Success !" + e.status);})
}
