
function colorChange(color) {
    if (color == "colorless"){
        document.querySelector("#color-display").style.backgroundColor = "white";
        document.querySelector("#color-display").innerHTML = "colorless";
    }
    else {
        document.querySelector("#color-display").style.backgroundColor = color;
        document.querySelector("#color-display").innerHTML = color
    }
};


function visibility(){
    if (document.querySelector("#visible").innerHTML == "hide"){
        document.querySelector("#color-display").style.visibility = "hidden";
        document.querySelector("#visible").innerHTML = "show";
    }
    else {
        document.querySelector("#color-display").style.visibility = "visible";
        document.querySelector("#visible").innerHTML = "hide";
    }
}
document.getElementById("aqua").addEventListener("click", function() {colorChange("aqua")});
document.getElementById("teal").addEventListener("click", function() {colorChange("teal")});
document.getElementById("pink").addEventListener("click", function() {colorChange("pink")});
document.getElementById("purple").addEventListener("click", function() {colorChange("purple")});
document.getElementById("colorless").addEventListener("click", function() {colorChange("colorless")});
document.getElementById("visible").addEventListener("click", visibility)
