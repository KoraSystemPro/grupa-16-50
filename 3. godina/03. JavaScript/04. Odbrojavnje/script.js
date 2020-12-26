const div_timer = document.getElementById("timer");

// Postavljamo vreme do kog brojimo
const nova_godina = new Date(2021, 0, 1, 00, 00, 00).getTime();

function izracunajRazliku(){
    // Uzimamo trenutno vreme
    let trenutno_vreme = new Date().getTime();

    let razmak_do_nove_godine = nova_godina - trenutno_vreme;
    // console.log(razmak_do_nove_godine);
    let dani = Math.floor(razmak_do_nove_godine / (1000 * 60 * 60 * 24));
    let sati = Math.floor((razmak_do_nove_godine % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let minuti = Math.floor((razmak_do_nove_godine % (1000 * 60 * 60)) / (1000 * 60));
    let sekunde = Math.floor((razmak_do_nove_godine % (1000 * 60)) / (1000));
    // console.log("dani: " + dani + "\nsati: " + sati + "\nminuti: " + minuti + "\nsekunde: " + sekunde);

    div_timer.innerHTML = dani + "d " + sati + "h " + minuti + "m " + sekunde + "s";


    if(razmak_do_nove_godine <= 0){
        div_timer.innerHTML = "SREĆNA NOVA 2021. GODINA!";
    }
}

setInterval(izracunajRazliku, 1000);
// izracunajRazliku();