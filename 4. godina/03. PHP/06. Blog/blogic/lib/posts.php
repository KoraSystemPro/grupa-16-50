<?php
    include "server.php";

    function print_post($ime, $vreme, $broj_postova, $post){
        // Citamo fajl
        $fajl = fopen(("../postovi/" . $post . ".txt"), "r");
        $tekst = fread($fajl, filesize(("../postovi/" . $post . ".txt")));
        fclose($fajl);

        // Kreiramo post
        echo '
        <div class="post">
            <div class="post-info">
                <div class="post-info-ime">'. $ime .'</div>
                <div class="post-info-vreme">'. $vreme .'</div>
                <div class="post-info-br-postova">Br Postova: ' . $broj_postova . '</div>
            </div>
            <div class="post-sadrzaj">
                '. $tekst  .'
            </div>
        </div>
        ';
    }
    function get_posts(){
        $kon = otvori_konekciju("localhost", "root", "", "blog");
        $sql = "SELECT Name, TimeOfPosting, NumOfPosts, PostID FROM 
            Posts INNER JOIN Users ON UserID=Users.ID ORDER BY TimeOfPosting DESC";
        $rez = $kon->query($sql);
        if(!$rez){
            die("Lose dohvatanje posta iz baze");
        }

        while($row = $rez->fetch_assoc()){
            print_post($row['Name'], $row['TimeOfPosting'], $row['NumOfPosts'], $row['PostID']);
        }


        zatvori_konekciju($kon);
    }

    if(isset($_POST['userID'], $_POST['tekst'])){
        // Cuvanje posta u fajl
        $pre_hash_ime = date("Y/m/d H:s") . $_POST['userID'] . $_POST['tekst'];
        $hash_ime_fajla = hash("sha256", $pre_hash_ime);
        $fajl = fopen("../postovi/" . ($hash_ime_fajla . ".txt"), 'x') or die("Lose otvoren fajl!");
        // if($fajl == false){
        //      die("Lose otvoren fajl!");
        // }
        fwrite($fajl, $_POST['tekst']);
        fclose($fajl);

        // Upis u bazu
        $konekcija = otvori_konekciju("localhost", "root", "", "blog");
        $sql = "INSERT INTO `Posts`(`UserID`, `PostID`) VALUES ('". $_POST['userID'] ."','". $hash_ime_fajla ."')";
        if(!$konekcija->query($sql)){
            echo "Los unos u bazu!";
        }
        // Uvecavamo broj postova toj osobi
        $sql = "UPDATE `Users` SET `NumOfPosts`=(SELECT `NumOfPosts` FROM `Users` WHERE `ID`=". $_POST['userID'] .")+1 WHERE `ID`=".  $_POST['userID'] ."";
        if(!$konekcija->query($sql)){
            echo "Lose uvecan broj postova!";
        }
        zatvori_konekciju($konekcija);
    }

?>