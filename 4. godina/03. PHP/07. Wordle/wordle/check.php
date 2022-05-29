<?php
    include "server.php";
    ini_set('default_charset', 'UTF-8');
    header('Content-Type:text/html; charset=UTF-8');

    $BROJ_SLOVA_U_RECI = 5;
    
    // Proveravamo da li je postavljen pogodak korektno
    if(!isset($_POST["pogodak"])){
        return;
    }

    $pogodak = $_POST["pogodak"];
    $pogodak_encoded = $_POST["encoded"];
    
    // Otvaramo recnik i proveravamo da li je pogodak u njemu
    $file = file_get_contents("./recnik/lista_reci_duzine_5.txt");
    $file_niz = explode("\n", $file);
    $odgovor = [];

    if(!isset($_COOKIE["rec_dana"]) && $file){
        $rand_index = random_int(0, count($file_niz));
        $jedan_dan = time() + 60*60*24;
        setcookie("rec_dana", $file_niz[$rand_index], $jedan_dan);
        setcookie("nije_odigran", "true", $jedan_dan);
    }

    $rec_dana = $_COOKIE["rec_dana"];

    $rec_dana_iseckano = iseckaj($rec_dana);
    $pogodak_iseckano = iseckaj($pogodak);

    if(strpos($file, $pogodak) !== FALSE){
        // Nasli smo rec

        // SIVA   - 0
        // ZELENA - 1
        // ZUTA   - 2
        $rezultat = [];
        for($i = 0; $i < $BROJ_SLOVA_U_RECI; $i++){
            // Proveravamo da li se slovo nalazi u toj reci!
            $pozicija = proveriPogodak($rec_dana_iseckano, mb_substr($pogodak, $i, 1, 'UTF-8'));
            if($pozicija === false){
                // Slovo ne postoji u reci - SIVA
                array_push($rezultat, 0);
            } else {
                // Slovo postoji
                if(strcmp(mb_substr($rec_dana, $i, 1, 'UTF-8'), mb_substr($pogodak, $i, 1, 'UTF-8')) == 0){
                    // Na istoj poziciji - ZELENA
                    array_push($rezultat, 1);
                } else {
                    // Na drugoj poziciji - ZUTA
                    array_push($rezultat, 2);
                }

                $rec_dana_iseckano[$pozicija] = "#";
            }
            // var_dump($rec_dana_iseckano, $pogodak_iseckano[$i], $i);

        }
        $odgovor["boje_kodovi"] = $rezultat;

        echo(json_encode($odgovor));
    } else {
        // Nismo nasli rec
        echo("Неприхватљива реч!");
    }
    

    function proveriPogodak($seno, $igla){
        $BROJ_SLOVA_U_RECI = 5;
        for($i = 0; $i < $BROJ_SLOVA_U_RECI; $i++){
            if(strcmp($seno[$i], $igla) == 0){
                return $i;
            }
        }
        return false;
    }

    function iseckaj($rec){
        $len = mb_strlen($rec, 'UTF-8');
        $result = [];
        for ($i = 0; $i < $len; $i++) {
            $result[] = mb_substr($rec, $i, 1, 'UTF-8');
        }
        return $result;

    }

?>