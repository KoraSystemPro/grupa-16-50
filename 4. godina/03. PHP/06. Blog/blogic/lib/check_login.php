<?php
    include "./server.php";

    $kon = otvori_konekciju("localhost", "root", "", "blog");

    $sql = "SELECT * FROM Users WHERE Email='". $_POST['email'] ."' AND Password='" . $_POST['password'] . "';";
    $rez = $kon->query($sql);
    if($rez->num_rows == 1){
        // Uspesan login
        echo '1';
    } else {
        // neuspeo login (losa kombinacija/nespostoji user)
        $sql = "SELECT * FROM Users WHERE Email='". $_POST['email'] . "';";
        $rez = $kon->query($sql);
        if($rez->num_rows == 1){
            // Losa sifra   
            echo 'Pogrešna kombinacija mejla i šifre. Pokušajte ponovo!';
        } else {
            // Ne postoji user sa tim mailom
            echo 'Ne postoji korisnik sa ovim mejlom!';
        }
    }


    zatvori_konekciju($kon);

?>
