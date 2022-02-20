<?php
function napravi_item($img_src, $ime_proizvoda, $opis_proizvoda, $cena_proizvoda){
    echo '
    <div class="item">
        <div class="item-slika">
            <img src="' . $img_src . '">
        </div>
        <div class="item-tekst">
            <div class="item-tekst-naziv">
                <h4>' . $ime_proizvoda . '</h4>
            </div>
            <div class="item-tekst-opis">
                <p>' . $opis_proizvoda . '</p>
            </div>
        </div>
        <div class="item-posle">
            <div class="item-posle-cena">
                <p>' . $cena_proizvoda . ' RSD </p>
            </div>
            <div class="item-posle-dugmici">
                <form action="./index.php" method="POST">
                    <button type="button" class="btn btn-primary">Dodaj u korpu</button>
                    <button type="button" class="btn btn-success">Kupi sada</button>
                </form>
            </div>
        </div>

    </div>';
}

?>