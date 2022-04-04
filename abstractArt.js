var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 

document.querySelector("#draw").addEventListener("click", draw);
//document.querySelector("#download").addEventListener("click", downloadImage(el))
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

function draw(){  
  let grd = ctx.createLinearGradient(100, 100, 150, 100);
  grd.addColorStop(0, "green");
  grd.addColorStop(0.5, "blue");
  grd.addColorStop(1, "red");

  if (document.querySelector("#shapes").value == "circle"){

      ctx.beginPath();
      ctx.arc(document.querySelector("#x").value, document.querySelector("#y").value, document.querySelector("#slider").value, 0, 2 * Math.PI); 
      //ctx.strokeStyle = "black";
      ctx.strokeStyle = document.querySelector("#outlineColourPalette").value;
      ctx.stroke();
      ctx.fillStyle = document.querySelector("#fillColourPalette").value; 
      ctx.fill();
  }
  else if (document.querySelector("#shapes").value == "square"){
      //ctx.strokeRect(document.querySelector("#x").value, document.querySelector("#y").value, 50, 50); 
      ctx.strokeRect(document.querySelector("#x").value, document.querySelector("#y").value, document.querySelector("#width").value, document.querySelector("#height").value); 
      if(document.querySelector("#linearFill").checked == true){
        ctx.fillStyle = grd;
      }
      else  ctx.fillStyle = document.querySelector("#fillColourPalette").value; 
      ctx.strokeStyle = document.querySelector("#outlineColourPalette").value;
      ctx.stroke();
      //ctx.fillRect(document.querySelector("#x").value, document.querySelector("#y").value, 50, 50);  
      ctx.fillRect(document.querySelector("#x").value, document.querySelector("#y").value, document.querySelector("#width").value, document.querySelector("#height").value);   
  }
  else if (document.querySelector("#shapes").value == "line"){
    //ctx.moveTo(0, 0);
    ctx.moveTo(document.querySelector("#x").value, document.querySelector("#y").value);
    //ctx.lineTo(200, 100);
    ctx.lineTo(document.querySelector("#lineX").value, document.querySelector("#lineY").value);
    ctx.fillStyle = document.querySelector("#outlineColourpalette").value;
    ctx.stroke();
  }
}

function clearCanvas(){
  ctx.clearRect(0, 0, 400, 400);
}

 download_img = function(el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};

/*function downloadImage(el){
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
}*/

function fillColourPalette(){
  console.log(document.querySelector("#fillColourPalette").value)
}

function outlineColourPalette(){
  console.log(document.querySelector("#outlineColourPalette").value)
}

function mySlider(){
  console.log(document.querySelector("#slider").value)
}

function getXValue(){
  console.log(document.querySelector("#x").value)
}

function getYValue(){
    console.log(document.querySelector("#y").value)
  }

function getlineXValue(){
    console.log(document.querySelector("#lineX").value)
  }

function getlineYValue(){
    console.log(document.querySelector("#lineY").value)
  }

function getWidthValue(){
    console.log(document.querySelector("#width").value)
  }

function getHeightValue(){
    console.log(document.querySelector("#height").value)
  }
function myShapes(){
  console.log(document.querySelector("#shapes").value)
}

function myFill(){
  console.log(document.querySelector("#linearFill").checked)
}

