<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="main.css"> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
            <button onclick="logout()">Logout</button>
        </div>
    </header>
    <div class="omotac">
        <div class="novi-post">
            <form action="./novi_post.php" method="POST">
                <textarea id="novi-post-text" name="sadrzaj" rows="12" cols="50"></textarea>
                <input type="submit" value="Postavi">
            </form>
        </div>
        <div class="blog" id="blog">
            <div class="post">
                <div class="post-info">
                    <div class="post-info-ime">Milan</div>
                    <div class="post-info-vreme">2022-03-27 18:15</div>
                    <div class="post-info-br-postova">Br Postova: 5</div>
                </div>
                <div class="post-sadrzaj">
                
                </div>
                
            </div>
        </div>
    </div>
</body>
</html>