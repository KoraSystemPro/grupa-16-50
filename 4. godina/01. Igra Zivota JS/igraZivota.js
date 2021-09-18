var sirina = 600;
var visina = 600;
var redovi = 10;
var kolona = 10;

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

function main() {
    let canv, ctx = spremiPlatno()
    let igra = napravi2DMatricu(redovi, kolona);
    igra = generisiIgru(igra);

    crtaj(ctx, igra);



}

document.addEventListener("DOMContentLoaded", main);