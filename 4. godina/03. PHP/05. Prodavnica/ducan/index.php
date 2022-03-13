<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ducan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./css/main.css">
    <link href="./css/bootstrap.min.css" rel="stylesheet" type="text/css">
</head>
<body>
    <?php
        // Serviraj login formu
        if(isset($_GET['login']) && $_GET['login'] == true){
            echo('
            <form method="post" action="login.php" class="popupForm">
                <div class="form-group">
                    <label for="exampleInputEmail1">Имејл</label>
                    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Унесите Ваш имејл">
                </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Лозинка</label>
                    <input name="lozinka" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                    <div class="form-check">
                        <input name="remember" type="checkbox" class="form-check-input">
                        <label name="StaySignedIn" class="form-check-label" for="exampleCheck1">Запамти ме</label>
                    </div>
                </div>
                    <button type="submit" class="btn btn-primary">Пријава</button>
            </form>
            ');
        }
        // Serviraj register formu 
        else if (isset($_GET['register']) && $_GET['register'] == true){
            echo '
                <form method="post" action="register.php" class="popupForm">
                    <div class="form-group">
                        <label>Ime</label>
                        <input name="ime" type="text" class="form-control" placeholder="Ime">
                    </div>
                    <div class="form-group">
                        <label>Prezime</label>
                        <input name="prezime" type="text" class="form-control" placeholder="Prezime">
                    </div>
                    <div class="form-group">
                        <label>E-mail</label>
                        <input name="email" type="email" class="form-control" placeholder="E-mail">
                    </div>
                    <div class="form-group">
                        <label>Lozinka</label>
                        <input name="lozinka" type="password" class="form-control" placeholder="Lozinka">
                    </div>
                        <button type="submit" class="btn btn-primary">Пријава</button>
                </form>
            ';
        }
        
    ?>

    <div class="bg"></div>
    <div class="container container-body">
        <h1 class="title">
            Дућан - Онлајн
        </h1>
        <div class="container container-buttons">
            <form action="./index.php" method="GET">
                <button name="login" value="true" type="submit" class="btn btn-primary">Пријава</button>
                <button name="register" value="true" type="submit" class="btn btn-secondary">Регистрација</button>
            </form>
        </div>
    </div>
</body>
</html>