
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

function htmlbytt(event){
    tekst = document.getElementById("inputhtmltekst").value;
    document.getElementById("teksttilhtml").innerHTML = tekst
}

//Legge til HTML elementer i liste
document.getElementById("leggTilElement").addEventListener("click", LTL) // LTL = legg til element

function LTL(event){
var liste = document.getElementById("liste");
var element = document.getElementById("element").value;
var entry = document.createElement('li'); //Lager nytt li i HTML
entry.appendChild(document.createTextNode(element)); //Lager tekstnode med elementet brukeren skrev
liste.appendChild(entry); //Legger det ferdige li elementet inn i ul i html
}

//Fjern individ element 
