<?php
include "./main/funkcije/server.php";

$konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");

$sql = "SELECT 1 FROM `Users` WHERE `Email`='". $_POST['email'] . "';";
if($konekcija->query($sql)->num_rows != 0){
    echo("<script>alert('Korisnik sa tim email-om već postoji!')</script>");
    zatvori_konekciju($konekcija);
    header("Location:./index.php");
    exit();
}

$sql = "INSERT INTO `Users`(`Name`, `Surname`, `Email`, `Password`) 
        VALUES ('". $_POST['ime'] ."','". $_POST['prezime'] ."','".$_POST['email']."','".$_POST['lozinka']."');";
if(!$konekcija->query($sql)){
    echo("<script>alert('Greška prilikom ubacivanja u bazu!')</script>");
}

zatvori_konekciju($konekcija);
header("Location:./index.php");
exit();
?>