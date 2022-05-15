<?php
    include "server.php";

    // Proveravamo da li je postavljen pogodak korektno
    if(!isset($_POST["pogodak"])){
        return;
    }

    $pogodak = $_POST["pogodak"];
    $rec_dana = "данaс";
             // "среда"
             //  p--pp
    // Otvaramo recnik i proveravamo da li je pogodak u njemu
    $file = file_get_contents("./recnik/lista_reci_duzine_5.txt");
    $odgovor = [];

    if(strpos($file, $pogodak) !== FALSE){
        // Nasli smo rec

        // SIVA   - 0
        // ZELENA - 1
        // ZUTA   - 2
        $rezultat = [];
        for($i = 0; $i < $BROJ_SLOVA_U_RECI; $i++){
            // Proveravamo da li se slovo nalazi u toj reci!
            $pozizijca = strpos($rec_dana, $pogodak[$i]);
            if($pozizijca == false){
                // Slovo ne postoji u reci - SIVA
                array_push($rezultat, 0);
            } else {
                // Slovo postoji
                if($rec_dana[$pozizijca] == $pogodak[$i]){
                    // Na istoj poziciji - ZELENA
                    array_push($rezultat, 1);
                } else {
                    // Na drugoj poziciji - ZUTA
                    array_push($rezultat, 2);
                }
            }
        }
        $odgovor["boje_kodovi"] = $rezultat;

        echo(json_encode($odgovor));
    } else {
        // Nismo nasli rec
        echo("Неприхватљива реч!");
    }
    

    function proveriPogodak($rec_dana, $pogodak){
        $BROJ_SLOVA_U_RECI = 5;
        $rec_dana_rezultat = [];
        for($i = 0; $i < $BROJ_SLOVA_U_RECI; $i++){
            for($j = 0; $j < $BROJ_SLOVA_U_RECI; $j++){
                if($rec_dana[$i] == $pogodak[$j]){
                    // Dobro slovo, na dobrom mestu

                } else {
                    //
                }
            }
        }
    }
?>