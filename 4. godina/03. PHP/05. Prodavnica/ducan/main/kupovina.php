<?php
include "./funkcije/server.php";
$konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");

session_start();
$userID = $_SESSION['id'];

if(isset($_GET['korpa'], $_GET['kolicina'])){
    $sql = "INSERT INTO `Basket`(`UserID`, `ProductID`, `Amount`) 
            VALUES ('" . $userID . "','" . $_GET['korpa'] . "','" . $_GET['kolicina'] . "')";
    
    if($konekcija->query($sql))
        echo "<script>alert('Usepšno je dodat proizvod u korpu');</script>";
    else 
        echo "<script>alert('Greška pri dodavanju u korpu');</script>";
    unset($_GET['korpa'], $_GET['kolicina']);

} else if(isset($_GET['kupovina'], $_GET['kolicina'])){
    $sql = "SELECT Price FROM Products WHERE ID=" . $_GET['kupovina'] . ";";
    if($cena = $konekcija->query($sql))
        $cena = $cena->fetch_assoc()['Price'];
    else 
        $cena = 0;

    $sql = "INSERT INTO `Orders`(`UserID`, `ProductID`, `Amount`, `Price`) 
            VALUES ('" . $userID . "','" . $_GET['kupovina'] . "','" . $_GET['kolicina'] . "','" . (float)$cena*$_GET['kolicina'] . "')";
    if($konekcija->query($sql))
        echo "<script>alert('Usepšno je dodat proizvod u korpu');</script>";
    else 
        echo "<script>alert('Greška pri dodavanju u korpu');</script>";
    unset($_GET['kupovina'], $_GET['kolicina']);
}

zatvori_konekciju($konekcija);
header("Location:./index.php");

?>