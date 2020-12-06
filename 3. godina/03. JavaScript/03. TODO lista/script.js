// Kreira novi clan liste kada se pritisne na dugme Dodaj
function napraviNoviElement(){
    let li = document.createElement("li");
    // Dohvatam vrednost iz input boxa i pretvaram ga u textNode koji pridruzujem na li
    let vrednostTextBoxa = document.createTextNode(document.getElementById("inputSadrzaj").value);
    li.appendChild(vrednostTextBoxa);

    document.getElementById("todo-lista").appendChild(li);

}

document.getElementById("dgm-dodaj").addEventListener("click", napraviNoviElement);