let kombinacija = [0, 0, 0, 0];
let pokusaj = [6, 4, 4, 2];
let niz_crnih = [0, 0, 0, 0];
let prebrojavanje = [0, 0, 0, 0, 0, 0];
                //   1  2  3  4  5  6
let crni = 0;
let beli = 0;

function ispisi(){
    document.getElementById("kombinacija").innerHTML = "Kombinacija: ";
    for(i = 0; i < 4; i++){
        document.getElementById("kombinacija").innerHTML += kombinacija[i];
    }
    document.getElementById("crni").innerHTML = "Crni: " + crni;
    document.getElementById("beli").innerHTML = "Beli: " + beli;
}

function oceni(){
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

    ispisi();
}

function novaKombinacija(){
    // console.log(Math.round(Math.random()*10000) % 6 + 1);
    for(i = 0; i < 4; i++){
        kombinacija[i] = Math.round(Math.random()*10000) % 6 + 1;
    }
    console.log(kombinacija);
    // 18 % 4 = 2
    // 0 1 2 3      Ostaci za deljenje sa 4
    // 0 1 2 3 4    Ostaci za deljenje sa 5
    // 0 1 2 3 4 5  Ostaci za deljenje sa 6

    oceni();
}

document.getElementById("nova-kombinacija").addEventListener("click", novaKombinacija);