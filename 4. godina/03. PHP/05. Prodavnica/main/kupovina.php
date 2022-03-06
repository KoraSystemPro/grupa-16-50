<?php
include "./funkcije/server.php";

if(isset($_GET['korpa'], $_GET['kolicina'])){
    $konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");
    
    $sql = "INSERT INTO `Basket`(`UserID`, `ProductID`, `Amount`) 
            VALUES ('" . 1 . "','" . $_GET['korpa'] . "','" . $_GET['kolicina'] . "')";
    
    if($konekcija->query($sql))
        echo "<script>alert('Usepšno je dodat proizvod u korpu');</script>";
    else 
        echo "<script>alert('Greška pri dodavanju u korpu');</script>";
    
    unset($_GET['korpa'], $_GET['kolicina']);
    zatvori_konekciju($konekcija);
}


//header("Location:./index.php");

?>