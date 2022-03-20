<?php
    function otvori_konekciju($host, $username, $password, $db){
        $konekcija = new mysqli($host, $username, $password, $db);
        if($konekcija->errno){
            die("Greska pri konekciji na bazu!\n" . $konekcija->errno . " : " . $konekcija->error);
        }
        return $konekcija;
    }
    
    function zatvori_konekciju($konekcija){
        $konekcija->close();
    }
?>