<?php
    $hostname = "localhost";
    $username = "root";
    $password = "";
    // Pravimo konekciju sa bazom
    $konekcija = new mysqli($hostname, $username, $password);
    
    // Dohvatamo vrednosti iz input boxova
    $in_email = $_POST['email'];
    $in_pwd = $_POST['password'];

    $sql = "SELECT * FROM login.Users WHERE Email='$in_email' AND Password='$in_pwd'";
    $rezultat = $konekcija->query($sql);

    // Ako je broj redova rezultata tacno 1, to znaci da postoji
    // tacno jedan korisnik sa tom e-mail i sifrom
    if($rezultat->num_rows == 1){
        header("location:dobrodoslica.php");
    } else {
        header("location:index.php");
    }


    // Zatvaramo konekciju
    $konekcija->close();
?>