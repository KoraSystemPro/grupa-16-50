<?php
include "./funkcije/server.php";

if(isset($_GET['operacija'])){
    switch($_GET['operacija']){
        case 'dodavanje':
            $konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");
            
            $sql = "INSERT INTO `Products`(`Name`, `ProviderID`, `CategoryID`, `Price`) 
                    VALUES ('" . $_GET['ime'] . "','" . $_GET['dobavljac'] . "','" . $_GET['kategorija'] . "','" . $_GET['cena'] . "')";
            if($konekcija->query($sql))
                echo "<script>alert('Usepšno je dodat proizvod');</script>";
            else 
                echo "<script>alert('Greška pri dodavanju');</script>";
            zatvori_konekciju($konekcija);
    
            unset($_GET['operacija'], $_GET['ime'], $_GET['dobavljac'], $_GET['kategorija'], $_GET['cena']);
            break;
        default:
            unset($_GET['operacija']);
            break;
    }
}
header("Location:./index.php");

?>