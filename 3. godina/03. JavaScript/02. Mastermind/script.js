let kombinacija = [0, 0, 0, 0];
let crni = 0;
let beli = 0;

function oceni(){

    document.getElementById("kombinacija").innerHTML = "Kombinacija: ";
    for(i = 0; i < 4; i++){
        document.getElementById("kombinacija").innerHTML += kombinacija[i];
    }
    document.getElementById("crni").innerHTML = "Crni: " + crni;
    document.getElementById("beli").innerHTML = "Beli: " + beli;
}

document.getElementById("nova-kombinacija").addEventListener("click", function novaKombinacija(){
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
   
});