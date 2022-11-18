const canvas = document.querySelector("canvas");
toolBtns = document.querySelectorAll(".tool");
sizingBtns = document.querySelectorAll(".sizing");
fillColor = document.querySelector("#fill-color");
sizeSlider = document.querySelector("#size-slider");
colorBtns = document.querySelectorAll(".colors .option");
chooseBtns = document.querySelectorAll(".colors .choose");
//colorPicker = document.querySelector("#color-picker");
clearCanvas = document.querySelector(".clear-canvas");
savePay = document.querySelector(".save-img");
ctx = canvas.getContext("2d");
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



tShirtBlanc.style.display = "block";
tShirtNoir.style.display = "none";
let tShirtColor = "white";
goTblanc.addEventListener("click", () => {
    tShirtBlanc.style.display = "block";
    tShirtNoir.style.display = "none";
    tShirtColor = "white";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    designedDiv.style.backgroundColor = "#fff";
    designedDiv.style.color = "#000";
    designedInput.style.color = "#000";
    designedInput.stylebackgroundColor = "#fff";
});
let goTnoir = document.querySelector("#goTnoir");
goTnoir.addEventListener("click", () => {
    tShirtNoir.style.display = "block";
    tShirtBlanc.style.display = "none";
    tShirtColor = "black";
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    drawingBoard.style.borderColor = "grey";
    designedDiv.style.backgroundColor = "#000";
    designedDiv.style.color = "#fff";
    designedInput.style.color = "#fff";
    designedInput.stylebackgroundColor = "#000";

});


errorFormat.style.display = "none";
if (window.screen.availWidth < 1440){
    console.log("error format !")
    errorFormat.style.display = "block";
}






text.style.display = "block";
textShow.style.display = "none";
textErase.style.display = "none";
textInput.style.display = "none";

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
    //ctx.style.fontWeight = "800"; //fonntWeight ne fonctionne pas
    ctx.font = "18px Roboto Condensed";
    ctx.fillStyle = "black";
    ctx.fillText("We're all imperfect.".toUpperCase(), 100, 100, 300);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
}
function undoText(){
    ctx.fillStyle = "#000";
    ctx.fillRect((100)-50, (100)-25, 120, 30);
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
    canvas.addEventListener("mousedown", pasteText());
    
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

const setCanvasBackground = () => {
// setting whole canvas background to white, so the downloaded img background will be white
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = selectedColor; // setting fillstyle back to the selectedColor, it'll be the brush color
}

window.addEventListener("load", () => {
// setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
setCanvasBackground();
});

const drawRect = (e) => {
// if fillColor isn't checked draw a rect with border else draw rect with background
if(!fillColor.checked) {
// creating circle according to the mouse pointer
return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}
ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}


const drawCircle = (e) => {
ctx.beginPath(); // creating new path to draw circle
// getting radius for circle according to the mouse pointer
let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI); // creating circle according to the mouse pointer
fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillColor is checked fill circle else draw border circle
}


const drawTriangle = (e) => {
ctx.beginPath(); // creating new path to draw circle
ctx.moveTo(prevMouseX, prevMouseY); // moving triangle to the mouse pointer
ctx.lineTo(e.offsetX, e.offsetY); // creating first line according to the mouse pointer
ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY); // creating bottom line of triangle
ctx.closePath(); // closing path of a triangle so the third line draw automatically
fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillColor is checked fill triangle else draw border
}


const startDraw = (e) => {
console.log("coommence a dessiner");
isDrawing = true;
prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value
prevMouseY = e.offsetY; // passing current mouseY position as prevMouseY value
ctx.lineCap = "round";
ctx.beginPath(); // creating new path to draw
ctx.lineWidth = brushWidth; // passing brushSize as line width
ctx.strokeStyle = selectedColor; // passing selectedColor as stroke style
ctx.fillStyle = selectedColor; // passing selectedColor as fill style
// copying canvas data & passing as snapshot value.. this avoids dragging the image
snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}


const drawing = (e) => {
if(!isDrawing) return; // if isDrawing is false return from here
ctx.putImageData(snapshot, 0, 0); // adding copied canvas data on to this canvas
if(selectedTool === "brush" || selectedTool === "eraser") {
ctx.lineCap = "round";
// if selected tool is eraser then set strokeStyle to white
// to paint white color on to the existing canvas content else set the stroke color to selected color
ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
ctx.lineCap = "round";
ctx.lineTo(e.offsetX, e.offsetY); // creating line according to the mouse pointer
ctx.stroke(); // drawing/filling line with color
} else if(selectedTool === "rectangle"){
drawRect(e);
} else if(selectedTool === "circle"){
drawCircle(e);
} else {
drawTriangle(e);
}
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


clearCanvas.addEventListener("click", () => {
ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing whole canvas
setCanvasBackground();
});


savePay.addEventListener("click", () => {
const link = document.createElement("a"); // creating <a> element
//link.download = `${Date.now()}.jpg`; // passing current date as link download value
link.download = `116 CREATION .jpg`;
link.href = canvas.toDataURL(); // passing canvasData as link href value
console.log(link.href);
link.click(); // clicking link to download image

RecapCommande();
});



function SendMail(){
    var params = {
        from_name : document.querySelector("#tshirt-name").value,
        /*email_id : document.querySelector("#email").value,*/
        message : (document.querySelector("#code").value + " ;  Painted by : " + document.querySelector("#tshirt-name").value  + "; T-shirt color :" + tShirtColor + ";" + selectedSize)
    }
    /*emailjs.send("service_2xg7v2f","template_wtabctp",params).then(function(res){alert("Success!"+ res.status);})*/
    emailjs.send("service_2xg7v2f","template_wtabctp",params).then((e) => {console.log("Success !" + e.status);})
}



canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);

