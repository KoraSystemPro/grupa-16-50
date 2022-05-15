<?php
    include "server.php";

    // Proveravamo da li je postavljen pogodak korektno
    if(!isset($_POST["pogodak"])){
        return;
    }

    $pogodak = $_POST["pogodak"];

    // Otvaramo recnik i proveravamo da li je pogodak u njemu
    $file = file_get_contents("./recnik/lista_reci_duzine_5.txt");
    if(strpos($file, $pogodak) !== FALSE){
        // Nasli smo rec
        
    } else {
        // Nismo nasli rec
        echo("Неприхватљива реч!");
    }
    
?>