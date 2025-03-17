
//Farge endring på bakrunn
document.getElementById("fargebytt").addEventListener("click", fargebytt);

function fargebytt() {
    farge = document.getElementById("farge").value;

    if (CSS.supports("color", farge)) { 
        document.body.style.backgroundColor = farge;
    } else {
        alert("Fargen er ikke støttet");
    }
}


//Endre på HTML elementer
document.getElementById("htmlbytt").addEventListener("click", htmlbytt);

function htmlbytt(){
    alert("skibidi")
}