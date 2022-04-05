var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 

document.querySelector("#draw").addEventListener("click", draw);
document.querySelector("#clear").addEventListener("click", clearCanvas);
document.querySelector("#fillColourPalette").addEventListener("click", fillColourPalette);
document.querySelector("#outlineColourPalette").addEventListener("click", outlineColourPalette);
document.querySelector("#slider").addEventListener("click", mySlider);
document.querySelector("#x").addEventListener("click", getXValue);
document.querySelector("#y").addEventListener("click", getYValue);
document.querySelector("#lineX").addEventListener("click", getlineXValue);
document.querySelector("#lineY").addEventListener("click", getlineYValue);
document.querySelector("#width").addEventListener("click", getWidthValue);
document.querySelector("#height").addEventListener("click", getHeightValue);
document.querySelector("#shapes").addEventListener("click", myShapes);
document.querySelector("#linearFill").addEventListener("click", myFill);
//document.querySelector("#download").addEventListener("click", downloadImage(el))
document.querySelector("#btnSpanish").addEventListener("click", translateToSpanish)
document.querySelector("#btnEnglish").addEventListener("click", translateToEnglish);
document.querySelector("#cnfpwd").addEventListener("change", validatePassword);

// function to draw shapes
function draw(){  
  //creating linearGradient
  let grd = ctx.createLinearGradient(100, 100, 150, 100);
  grd.addColorStop(0, "green");
  grd.addColorStop(0.5, "blue");
  grd.addColorStop(1, "red");
 
  //drawing a circle
  if (document.querySelector("#shapes").value == "circle"){

      ctx.beginPath();
      ctx.arc(document.querySelector("#x").value, document.querySelector("#y").value, document.querySelector("#slider").value, 0, 2 * Math.PI); 
      //ctx.strokeStyle = "black";
      ctx.strokeStyle = document.querySelector("#outlineColourPalette").value;
      ctx.stroke();
      ctx.fillStyle = document.querySelector("#fillColourPalette").value; 
      ctx.fill();
  }
  //drawing a rectangle
  else if (document.querySelector("#shapes").value == "square"){
      ctx.strokeRect(document.querySelector("#x").value, document.querySelector("#y").value, document.querySelector("#width").value, document.querySelector("#height").value); 
      if(document.querySelector("#linearFill").checked == true){
        ctx.fillStyle = grd;
      }
      else  ctx.fillStyle = document.querySelector("#fillColourPalette").value; 
      ctx.strokeStyle = document.querySelector("#outlineColourPalette").value;
      ctx.stroke();
      ctx.fillRect(document.querySelector("#x").value, document.querySelector("#y").value, document.querySelector("#width").value, document.querySelector("#height").value);   
  }
  //drawing a line
  else if (document.querySelector("#shapes").value == "line"){
    ctx.moveTo(document.querySelector("#x").value, document.querySelector("#y").value);
    ctx.lineTo(document.querySelector("#lineX").value, document.querySelector("#lineY").value);
    ctx.fillStyle = document.querySelector("#outlineColourpalette").value;
    ctx.stroke();
  }
}
// function to translate content to Spanish
function translateToSpanish(){
    document.getElementById("heading").innerHTML = "concurso de arte abstracto";
    document.getElementById("heading").style.color = "Purple";
    document.getElementById("heading2").innerHTML = "Instrucciones";
    document.getElementById("instructions").innerHTML = "Dibuja tu arte eligiendo formas, colores y medidas.Guarde el arte en su computadora.Envía tu Arte.";
}

// function to translate conent to English
function translateToEnglish(){
    document.getElementById("heading").innerHTML = "Abstract Art Competition";
    document.getElementById("heading").style.color = "Blue";
    document.getElementById("heading2").innerHTML = "Instructions";
    document.getElementById("instructions").innerHTML = "Draw your art by choosing shapes, colours and measurements.Save the Art to your computer. Submit your Art.";
}

// function to clear canvas
function clearCanvas(){
  ctx.clearRect(0, 0, 400, 400);
}

// function to download canvas image
 download_img = function(el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};

/*function downloadImage(el){
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
} */

// function to get selected color from the fill color palette
function fillColourPalette(){
  console.log(document.querySelector("#fillColourPalette").value)
}

// function to get selected colors from outline color pallette
function outlineColourPalette(){
  console.log(document.querySelector("#outlineColourPalette").value)
}

//function to get value from slider- radius of the circle
function mySlider(){
  console.log(document.querySelector("#slider").value)
}

// function to get value of X
function getXValue(){
  console.log(document.querySelector("#x").value)
}

//function to get value of Y
function getYValue(){
    console.log(document.querySelector("#y").value)
  }

//function to get line X value
function getlineXValue(){
    console.log(document.querySelector("#lineX").value)
  }

  //function to get line Y value
function getlineYValue(){
    console.log(document.querySelector("#lineY").value)
  }

// function to get rectangle width
function getWidthValue(){
    console.log(document.querySelector("#width").value)
  }

//function to get rectangle height
function getHeightValue(){
    console.log(document.querySelector("#height").value)
  }

//function to select shapes
function myShapes(){
  console.log(document.querySelector("#shapes").value)
}

//function to fill linear colors
function myFill(){
  console.log(document.querySelector("#linearFill").checked)
}

//function to validate passwords
function validatePassword(){
    if(document.querySelector("#pwd").value != document.querySelector("#cnfpwd").value) {
        document.querySelector("#cnfpwd").setCustomValidity("Passwords Don't Match");
        document.querySelector("#cnfpwd").reportValidity();
        document.querySelector("#pwd").value ='';
        document.querySelector("#cnfpwd").value ='';
}
else {
    document.querySelector("#cnfpwd").setCustomValidity('');
    document.querySelector("#cnfpwd").reportValidity();
}}

//function to display message after form submission
function submitAlert(){
    alert("The form was submitted");
}