// Dohvata element na koji se kliknulo (this), uzima njegov parent element i stavlja mu display svojstvo na "none"
function sakrijiElement(){
    let otac = this.parentElement;
    otac.style.display = "none";
}

// Kreira novi clan liste kada se pritisne na dugme Dodaj
function napraviNoviElement(){
    let noviLi = document.createElement("li");
    // Dohvatam vrednost iz input boxa i pretvaram ga u textNode koji pridruzujem na li
    let vrednostTextBoxa = document.getElementById("inputSadrzaj").value;
    let tekstCvor = document.createTextNode(vrednostTextBoxa);
    noviLi.appendChild(tekstCvor);

    // Proveravamo da li je tekstbox prazan
    if(vrednostTextBoxa == ""){
        alert("Morate da unesete neki tekst!");
    }
    else{
        document.getElementById("todo-lista").appendChild(noviLi);
    }
    // Brisemo sadrzaj input-a kada ga dodamo na listu
    document.getElementById("inputSadrzaj").value = "";
    
    // Pravimo x za skidanje sa liste i dodajemo ga na li
    let dugmeZaSkidanjeSaListe = document.createElement("span");
    dugmeZaSkidanjeSaListe.className = "zatvori";
    dugmeZaSkidanjeSaListe.appendChild(document.createTextNode("\u2716"));
    noviLi.appendChild(dugmeZaSkidanjeSaListe);
    
    // Za svaki clan liste pravimo EventListener na x koji ce ga skloniti sa liste
    let iksici = document.getElementsByClassName("zatvori");
    let brojIksica = iksici.length;
    for(i = 0; i < brojIksica; i++){
        iksici[i].addEventListener("click", sakrijiElement);
    }
    
}

// Dodaje novi element na listu
document.getElementById("dgm-dodaj").addEventListener("click", napraviNoviElement);
// "Zavrsava" pritisnuti element
document.getElementById("todo-lista").addEventListener("click", function(klik){
    if(klik.target.tagName === "LI"){
        klik.target.classList.toggle("gotovo");
    }
});