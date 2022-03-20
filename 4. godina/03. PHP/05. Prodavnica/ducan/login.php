<?php
include "./main/funkcije/server.php";

$konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");

$sql = "SELECT * FROM `Users` WHERE
        Email='". $_POST['email'] ."' AND Password='". $_POST['lozinka'] ."';";
$rez = $konekcija->query($sql);
if(!$rez){
    echo("<script>alert('Greška prilikom izvršavanja querry-a!')</script>");
    zatvori_konekciju($konekcija);
    header("location:./index.php");
    exit();
}
if($rez->num_rows == 0){
    echo("<script>alert('Neuspešno ulogovan!')</script>");
    zatvori_konekciju($konekcija);
    header("location:./index.php");
    exit();
}

session_start();
$row = $rez->fetch_assoc();
$_SESSION['id'] = $row['ID'];
$_SESSION['name'] = $row['Name'];
$_SESSION['sname'] = $row['Surname'];
$_SESSION['email'] = $row['Email'];
$_SESSION['remember'] = $_POST['remember'];
header("Location:./main/index.php");


zatvori_konekciju($konekcija);
exit();

?>