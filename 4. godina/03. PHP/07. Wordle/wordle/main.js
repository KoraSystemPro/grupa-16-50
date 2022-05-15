const BROJ_POGODATA = 6;
const DUZINA_RECI = 5;
let preostaliPokusaji = BROJ_POGODATA;
let sledeceSlovo = 0;
let trenutniPokusaj = [];


function initBoard(){
    let board = document.getElementById("game-board");

    for(let i = 0; i < BROJ_POGODATA; i++) {
        let row = document.createElement("div");
        row.className = "letter-row";

        for(let j = 0; j < DUZINA_RECI; j++){
            let box = document.createElement("div");
            box.className = "letter-box";
            row.appendChild(box);
        }
        board.appendChild(row);
    }
}

initBoard();


// 1. Da li pogodak ima 5 slova
// 2. Proveri da li se rec nalazi u listi
// 3. Za svako slovo proveriti da li postoji i obojiti ga
// 4. Proveri da li je igra gotova
function proveriPogodak(){
    let row = document.getElementsByClassName("letter-row")[BROJ_POGODATA - preostaliPokusaji];
    let pogodakStr = trenutniPokusaj.join("");
    
    // 1. Da li pogodak ima 5 slova
    if(pogodakStr.length != 5){
        alert("Nema dovoljno slova");
        return;
    }
    console.log(pogodakStr);

    // 2. Proveri da li se rec nalazi u listi
    let request = new XMLHttpRequest();
    let podaci = new FormData();
    podaci.append("pogodak", pogodakStr);
    request.open("POST", "./check.php", true);
    request.send(podaci);
    request.onreadystatechange = function(){
        if (this.readyState == request.DONE && this.status == 200){
            console.log(this.response);
            ofarbajPolja(this.response);
        }
    }


}

function ofarbajPolja(rezultat){
    let row = document.getElementsByClassName("letter-row")[BROJ_POGODATA - preostaliPokusaji];
    for(let i = 0; i < DUZINA_RECI; i++){
        let box = row.children[i];
        let bojaKutije = dohvatiBoju(rezultat[i]);
        box.style.backgroundColor = bojaKutije;
        
    }
}

function dohvatiBoju(sifra){
    // SIVA   - 0
    // ZELENA - 1
    // ZUTA   - 2
    switch (sifra){
        case 0:
            return "gray";
        case 1:
            return "green";
        case 2:
            return "yellow";
        default:
            return "white";
    }
}

function ubaciSlovo(unetoSlovo){
    if(sledeceSlovo === 5){
        return;
    }
    
    unetoSlovo = unetoSlovo.toLowerCase();

    let row = document.getElementsByClassName("letter-row")[BROJ_POGODATA - preostaliPokusaji];
    let box = row.children[sledeceSlovo];
    box.textContent = unetoSlovo;
    box.classList.add("filled-box");
    sledeceSlovo += 1;

    trenutniPokusaj.push(unetoSlovo);
    console.log(trenutniPokusaj);
}

function brisiSlovo(){
    let row = document.getElementsByClassName("letter-row")[BROJ_POGODATA - preostaliPokusaji];
    let box = row.children[sledeceSlovo - 1];
    box.textContent = "";
    box.classList.remove("filled-box");
    sledeceSlovo -= 1;
    
    trenutniPokusaj.pop();
    console.log(trenutniPokusaj);
}

document.addEventListener("keyup", (e) => {
    let pritisnutoDugme = String(e.key);

    // Brisanje karaktera
    if(pritisnutoDugme === "Backspace"){
        brisiSlovo();
        return;
    }
    
    // Provera pogotka
    if(pritisnutoDugme === "Enter"){
        proveriPogodak();
        return;
    }
    
    // Upis slova sa tastature
    let pronadjeno = pritisnutoDugme.match(/[аАбБвВгГдДђЂеЕжЖзЗиИјЈкКлЛљЉмМнНњЊоОпПрРсСтТћЋуУфФхХцЦчЧџЏшШ]/gi);
    if (pronadjeno && pritisnutoDugme.length == 1){
        ubaciSlovo(pritisnutoDugme);
    } else {
        // return;
        // console.log(pritisnutoDugme);
    }
});