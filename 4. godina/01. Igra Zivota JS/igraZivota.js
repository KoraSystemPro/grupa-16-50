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

function crtaj(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, sirina, visina);

    ctx.fillStyle = "#FFFFFF";
    let celija = sirina / kolona;
    for (let i = 0; i < redovi; i++) {
        for (let j = 0; j < kolona; j++) {
            ctx.fillRect(j * celija + 1, i * celija + 1, celija - 2, celija - 2);
        }
    }
}

function main() {
    let canv, ctx = spremiPlatno()
    crtaj(ctx);



}

document.addEventListener("DOMContentLoaded", main);