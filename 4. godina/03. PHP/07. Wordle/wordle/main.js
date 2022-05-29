const BROJ_POGODATA = 6;
const DUZINA_RECI = 5;
let preostaliPokusaji = BROJ_POGODATA;
let sledeceSlovo = 0;
let trenutniPokusaj = [];
let cookie = {}

function updateCookie() {
    let odvojeni_parovi = document.cookie.split('; ');
    for (let i = 0; i < odvojeni_parovi.length; i++) {
        let kljuc = odvojeni_parovi[i].split('=')[0];
        let vrednost = odvojeni_parovi[i].split('=')[1];
        cookie[kljuc] = vrednost;
    }
    cookie['rec_dana'] = decodeURI(cookie['rec_dana']);
    cookie['nije_odigran'] = Boolean(cookie['nije_odigran']);
}

function gameOver(){
    resetujIgru();
    
}

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
    updateCookie();
    console.log(cookie);

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
    let sifre = []
    for(let i = 0; i < DUZINA_RECI; i++){
        sifre.push(pogodakStr.charCodeAt(i));
    }
    podaci.append("encoded", sifre)

    request.open("POST", "./check.php", true);
    request.send(podaci);
    request.onreadystatechange = function(){
        if (this.readyState == request.DONE && this.status == 200){
            let rezultat = JSON.parse(this.response);
            ofarbajPolja(rezultat['boje_kodovi']);
            
            if(gotovaIgra(rezultat['boje_kodovi'])){
                // Pobeda
                alert("Браво! Број покушаја: " + (BROJ_POGODATA-preostaliPokusaji-1));
                resetujIgru();
                return;
            } else if(preostaliPokusaji == 1) {
                // Izgubio
                

                alert("Више среће сутрадан!\nРешење је: " + resenje);


                resetujIgru();
                return;
            } else {
                // Sledeci
                preostaliPokusaji -= 1;
                trenutniPokusaj = [];    
                sledeceSlovo = 0;
            }
        }
    }


}

function gotovaIgra(niz){
    for(let i = 0; i < niz.length; i++){
        if(niz[i] != 1){
            return false;
        }
    }
    return true;
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
    if(sledeceSlovo == 0)
        return;

    let row = document.getElementsByClassName("letter-row")[BROJ_POGODATA - preostaliPokusaji];
    let box = row.children[sledeceSlovo - 1];
    box.textContent = "";
    box.classList.remove("filled-box");
    sledeceSlovo -= 1;
    
    trenutniPokusaj.pop();
    console.log(trenutniPokusaj);
}

function resetujIgru(){
    preostaliPokusaji = BROJ_POGODATA;
    sledeceSlovo = 0;
    trenutniPokusaj = [];

    for(let red = 0; red < BROJ_POGODATA; red++){
        let divRed = document.getElementsByClassName("letter-row")[red];
        let divKol = divRed.children;
        
        for(let kol = 0; kol < DUZINA_RECI; kol++){
            divKol[kol].style.backgroundColor = "#FFFFFF";
            divKol[kol].classList.remove("filled-box");
            divKol[kol].innerHTML = "";
        }
    }
}

document.addEventListener("keyup", (e) => {
    let pritisnutoDugme = String(e.key);

    // Brisanje karaktera
    if(pritisnutoDugme === "Backspace"){
        brisiSlovo();
        return;
    }
    
    if(pritisnutoDugme === "`"){
        resetujIgru();
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

// 
// let onKeyboardClicked = (e) => {
//     console.log(e);
// }
// let tastaturaDugmici = document.getElementsByClassName("keyboard-button");
// tastaturaDugmici.addEventListener('click', onKeyboardClicked);