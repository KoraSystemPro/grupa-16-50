<?php
include './posts.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="main.css"> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./main.css">
    <title>Blok</title>
</head>
<body>
    <header class="zaglavlje">
        <div class="zaglavlje-naslov">
            <h1 class="naslov-tekst">Blok</h1>
        </div>
        <div class="zaglavlje-user">
            <div id="zaglavlje-user-name">
                Pera
            </div>
            <button class="submit-dugme" onclick="logout()">Logout</button>
        </div>
    </header>
    <div class="omotac">
        <div class="novi-post">
            <form class="novi-post" action="./novi_post.php" method="POST">
                <textarea id="novi-post-text" name="sadrzaj" rows="12" cols="50"></textarea>
                <div>
                    <input class="submit-dugme" type="button" value="Postavi" onclick="novi_post()">
                    <input class="submit-dugme" type="button" value="Obriši" onclick="obrisi()">
                </div>
            </form>
        </div>
        <div class="horizontalna-podela"></div>
        <div class="blog" id="blog">
            <?php get_posts() ?>
        </div>
    </div>

    <script>
        function novi_post(){
            let tekst = document.getElementById("novi-post-text").value;
            request = new XMLHttpRequest();
            
            request.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    // napravi novi post
                    // alert("Uspesno postovan");
                    request = new XMLHttpRequest();
                    if(this.readyState == 4 && this.status == 200){
                        document.getElementById("blog").innerText = request.responseText;
                    }
                    request.open("POST", "./dohvati.php", true);
                    request.send();
                    

                }
            }
            

            let data = new FormData();
            data.append("userID", "1");
            data.append("tekst", tekst);

            request.open("POST", "./posts.php", true);
            request.send(data);
            
            document.getElementById("novi-post-text").value = "";
        }
    </script>
</body>
</html>