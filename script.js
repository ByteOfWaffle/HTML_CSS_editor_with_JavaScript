
//Farge endring på bakrunn
document.getElementById("fargebytt").addEventListener("click", fargebytt);

function fargebytt() {
    var farge = document.getElementById("farge").value;

    if (CSS.supports("color", farge)) { 
        document.body.style.backgroundColor = farge;
    } else {
        alert("Fargen er ikke støttet");
    }
}


//Endre på HTML elementer
document.getElementById("htmlbytt").addEventListener("click", htmlbytt);

function htmlbytt(){
    var tekst = document.getElementById("inputhtmltekst").value;
        document.getElementById("teksttilhtml").innerHTML = tekst;
}

//Legge til HTML elementer i liste
document.getElementById("leggTilElement").addEventListener("click", LTL) // LTL = legg til element
document.getElementById("tomelementer").addEventListener("click", tomListe);
function LTL(event){
var liste = document.getElementById("liste");
var element = document.getElementById("element").value;
var entry = document.createElement('li'); //Lager nytt li i HTML
    entry.appendChild(document.createTextNode(element)); //Lager tekstnode med elementet brukeren skrev
    liste.appendChild(entry); //Legger li elementet som ble skrevet av bruker inn i ul i HTML

    //Fjern individ element
    entry.addEventListener("click", function(event) {//Lager en click event på alle induvidualle li elementene.
        event.currentTarget.remove(); // Fjerner elementet som blir klikket, gjennom currentTarget (Del av info som kommer gjennom event)
    });

}
// Fjerner alle listeelementer
function tomListe() {
    document.getElementById("liste").innerHTML = ""; 
}

//Endre farge på skapte liste elementer 
document.getElementById("endreLF").addEventListener("click", endreLF) //LF = listefarge
function endreLF(){
    var farge = document.getElementById("fargeLF").value;
    if (CSS.supports("color", farge)) { 
        document.getElementById("liste").style.color = farge;
    } else {
        alert("Fargen er ikke støttet");
    }
}
//nullstill endret farge
document.getElementById("nulstillLF").addEventListener("click", nulstillLF);
function nulstillLF(){ 
    document.getElementById("liste").style.color = "#000000";
}

var slider = document.getElementById("myRange");
slider.oninput = function() { // Kjører når slideren får hvilken som helt input, aka ta på den
    document.getElementById("tekststr").style.fontSize = slider.value + "px";
  }

//Endre farge på knapper
//Denne endrer bakrunn på knapp
document.getElementById("knappfargebyttbak").addEventListener("click", knappfargebyttbak)
    function knappfargebyttbak(){
        var farge = document.getElementById("fargeKF").value; //KF = KnappFarge
        if (CSS.supports("color", farge)) { 
            document.getElementById("knappfargebyttbak").style.backgroundColor = farge;
        } else {
            alert("Fargen er ikke støttet");
        }
  }
//Denne endrer tekstfarge på knapp
document.getElementById("knappfargebyttekst").addEventListener("click", knappfargebyttekst)
function knappfargebyttekst(){
    var farge = document.getElementById("fargeKFT").value; //KF = KnappFarge
    if (CSS.supports("color", farge)) { 
        document.getElementById("knappfargebyttekst").style.color = farge;
    } else {
        alert("Fargen er ikke støttet");
    }
}
