<?php
    function get_posts(){
        echo '
        <div class="post">
            <div class="post-info">
                <div class="post-info-ime">Milan</div>
                <div class="post-info-vreme">2022-03-27 18:15</div>
                <div class="post-info-br-postova">Br Postova: 5</div>
            </div>
            <div class="post-sadrzaj">
            </div>
        </div>
        ';
    }
    if(isset($_POST['userID'], $_POST['tekst'])){
        $pre_hash_ime = $_POST['userID'] . $_POST['tekst'];
        $hash_ime_fajla = hash("sha256", $pre_hash_ime);
        $fajl = fopen(($hash_ime_fajla . ".txt"), 'x') or die("Lose otvoren fajl!");
        echo $hash_ime_fajla . $_POST['tekst'];
        fwrite($fajl, $_POST['tekst']); 
        fclose($fajl);
    }
?>