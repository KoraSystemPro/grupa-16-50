var sirina = 600;
var visina = 600;
var redovi = 20;
var kolona = 20;

function spremiPlatno() {
    let platno = document.createElement("canvas");
    platno.width = sirina;
    platno.height = visina;
    document.body.appendChild(platno);
    let kontekstPlatno = platno.getContext("2d");
    return platno, kontekstPlatno;
}

function crtaj(ctx, matrica) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, sirina, visina);

    ctx.fillStyle = "#FFFFFF";
    let celija = sirina / kolona;
    for (let i = 0; i < redovi; i++) {
        for (let j = 0; j < kolona; j++) {
            if (matrica[i][j] == 1) {
                let x = j * celija;
                let y = i * celija;
                ctx.fillRect(x + 1, y + 1, celija - 2, celija - 2);
            }
        }
    }
}

function prebrojKomsije(matrica, x, y){
    let br_komsija = 0;
    // Ne racunamo granice
    // for(let i = -1; i < 2 && x+i < redovi && x+i > -1; i++){
    //     for(let j = -1; j < 2 && y+j < kolona && y+j > -1; j++){
    //         br_komsija += matrica[x+i][y+j];
    //     }
    // }

    // Granice spojene
    for(let i = -1; i < 2; i++){
        for(let j = -1; j < 2; j++){
            let red = (x + i + redovi) % redovi;
            let col = (y + j + kolona) % kolona;
            br_komsija += matrica[red][col];
        }
    }


    br_komsija = br_komsija - matrica[x][y];
    return br_komsija;
}

function napraviSledecuGeneraciju(prethodna_gen){
    let nova_gen = napravi2DMatricu(redovi, kolona);

    for(let i = 0; i < redovi; i++){
        for(let j = 0; j < kolona; j++){
            // Brojimo komsije
            let br_komsija = prebrojKomsije(prethodna_gen, i, j);
            // Pom promenljiva radi lakseg citanja
            let trenutna_celija = prethodna_gen[i][j];

            if(trenutna_celija == 0 && br_komsija == 3){
                nova_gen[i][j] = 1;
            } else if (trenutna_celija == 1 && (br_komsija < 2 || br_komsija > 3)){
                nova_gen[i][j] = 0;
            } else {
                nova_gen[i][j] = trenutna_celija;
            }
        }
    }
    return nova_gen;
}

function napravi2DMatricu(rows, cols) {
    let niz = new Array(rows);
    for (let i = 0; i < rows; i++) {
        niz[i] = new Array(cols);
    }
    return niz;
}

function generisiIgru(matrica) {
    for (let i = 0; i < redovi; i++) {
        for (let j = 0; j < kolona; j++) {
            matrica[i][j] = Math.floor(Math.random() * 10000) % 2;
        }
    }
    return matrica;
}

var ctx, canv, igra;
function azurirajIgru(){
    igra = napraviSledecuGeneraciju(igra);
    crtaj(ctx, igra);
}

function main() {
    canv, ctx = spremiPlatno()
    igra = napravi2DMatricu(redovi, kolona);
    igra = generisiIgru(igra);
    crtaj(ctx, igra);
    
    setInterval(azurirajIgru, 100);
}

document.addEventListener("DOMContentLoaded", main);