let kombinacija = [0, 0, 0, 0];
let pokusaj = [0, 0, 0, 0];
let niz_crnih = [0, 0, 0, 0];
let prebrojavanje = [0, 0, 0, 0, 0, 0];
                //   1  2  3  4  5  6
let crni = 0;
let beli = 0;
let br_pokusaja = 0;
let max_br_pokusaja = 6;

function ispisi(){
    document.getElementById("kombinacija").innerHTML = "Kombinacija: ";
    for(i = 0; i < 4; i++){
        document.getElementById("kombinacija").innerHTML += kombinacija[i];
    }
    // Ispisuje prostali broj pokusaja, crne i bele pogotke
    document.getElementById("preostali_pokusaji").innerHTML = "Preostali broj pokusaja: " + (max_br_pokusaja - br_pokusaja);
    document.getElementById("crni").innerHTML = "Crni: " + crni;
    document.getElementById("beli").innerHTML = "Beli: " + beli;
}


function promena1(){ promena(1); }
function promena2(){ promena(2); }
function promena3(){ promena(3); }
function promena4(){ promena(4); }
document.getElementById("dgm_p1").addEventListener("click", promena1);
document.getElementById("dgm_p2").addEventListener("click", promena2);
document.getElementById("dgm_p3").addEventListener("click", promena3);
document.getElementById("dgm_p4").addEventListener("click", promena4);
function promena(k){
    let dgm = document.getElementById("dgm_p" + k); 
    pokusaj[k-1]++;
    if(pokusaj[k-1] > 6)
        pokusaj[k-1] = 1;
    
    // console.log("Kombinacija: " + kombinacija + "\nPokusaj:" + pokusaj);
    switch(pokusaj[k-1]){
        case 1: dgm.style.backgroundColor = "#ff7777"; break;
        case 2: dgm.style.backgroundColor = "#ffaa44"; break;
        case 3: dgm.style.backgroundColor = "#ffff77"; break;
        case 4: dgm.style.backgroundColor = "#7777ff"; break;
        case 5: dgm.style.backgroundColor = "#77ff77"; break;
        case 6: dgm.style.backgroundColor = "#ff77ff"; break;
        default: dgm.style.backgroundColor = "#777777"; break;
    }
}

function oceni(){
    br_pokusaja++;
    crni = 0;
    beli = 0;
    niz_crnih = [0, 0, 0, 0];
    prebrojavanje = [0, 0, 0, 0, 0, 0];
    // Kombinacija  3 4 4 6
    // Pokusaj      6 4 4 2
    
    // Trazimo crni i potencijalno beli pogodak
    for(i = 0; i < 4; i++){
        if(pokusaj[i] == kombinacija[i]){
            // Nasli crni broj
            crni++;
            niz_crnih[i] = 1;
        } else {
            // Nasli smo potencijalno beli broj
            prebrojavanje[kombinacija[i] - 1]++;
        }
    }

    // Trazimo beli pogodak
    for(i = 0; i < 4; i++){
        if((prebrojavanje[pokusaj[i] - 1]  > 0) && (niz_crnih[i] == 0)){
            beli++;
            prebrojavanje[pokusaj[i] - 1]--;
        }
    }

    // Dobitni pogodak, prikazuje resenu kombinaciju
    if(crni == 4){
        document.getElementById("sakriven_red").style.display = "flex";
        document.getElementById("dgm_oceni").style.display = "none";
        document.getElementById("nova-kombinacija").style.display = "block";
    }
        
    // Iskorisceni svi pokusaji
    if(br_pokusaja >= max_br_pokusaja){
        document.getElementById("dgm_oceni").style.display = "none";
        document.getElementById("nova-kombinacija").style.display = "block";
    }

    console.log("Kombinacija:\t" + kombinacija + "\nPokusaj:\t\t" + pokusaj + "\nBr pokusaja:\t" + br_pokusaja + "\nPreostali broj pokusaja:\t" + (max_br_pokusaja-br_pokusaja));
    ispisi();
}

function novaKombinacija(){
    // Otkrivamo dugme OCENJIVANJE, resetjemo broj pokusaja, sakrivamo dugme NOVA KOMBINACIJA
    document.getElementById("dgm_oceni").style.display = "block";
    br_pokusaja = 0;
    document.getElementById("nova-kombinacija").style.display = "none";
    // Sakrivamo dobitnu kombinaciju
    document.getElementById("sakriven_red").style.display = "none";
    // Resetuje pokusaj na 0 i postavlja sve sivo
    for(i = 0; i < 4; i++){
        pokusaj[i] = 0;
        document.getElementById("dgm_p" + (i + 1)).style.backgroundColor = "#777777";
    }

    // console.log(Math.round(Math.random()*10000) % 6 + 1);
    // Pravljenje nove kombinacije i farbanje dugmica za dobitnu kombinaciju
    for(i = 0; i < 4; i++){
        kombinacija[i] = Math.round(Math.random()*10000) % 6 + 1;
       
        let dgm = document.getElementById("dgm_k" + (i+1)); 

        switch(kombinacija[i]){
            case 1: 
                dgm.style.backgroundColor = "#ff7777";
                break;
            // if(kombinacija[i] == 1)
            case 2: dgm.style.backgroundColor = "#ffaa44"; break;
            case 3: dgm.style.backgroundColor = "#ffff77"; break;
            case 4: dgm.style.backgroundColor = "#7777ff"; break;
            case 5: dgm.style.backgroundColor = "#77ff77"; break;
            case 6: dgm.style.backgroundColor = "#ff77ff"; break;
            default: dgm.style.backgroundColor = "#777777"; break;
        }
    }
    console.log("Nova kombinacija: " + kombinacija + "\n-----------------")

    // 18 % 4 = 2
    // 0 1 2 3      Ostaci za deljenje sa 4
    // 0 1 2 3 4    Ostaci za deljenje sa 5
    // 0 1 2 3 4 5  Ostaci za deljenje sa 6

    // oceni();
}

document.getElementById("nova-kombinacija").addEventListener("click", novaKombinacija);
document.getElementById("dgm_oceni").addEventListener("click", oceni);