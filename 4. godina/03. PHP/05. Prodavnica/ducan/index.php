<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ducan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./css/main.css">
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
                    <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                    <div class="form-check"
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label name="StaySignedIn" class="form-check-label" for="exampleCheck1">Запамти ме</label>
                </div>
                    <button type="submit" class="btn btn-primary">Пријава</button>
            </form>
            ');
        }
        // Serviraj register formu 
        else if (isset($_GET['register']) && $_GET['register'] == true){
            
        }
        
    ?>

            

    <div class="bg"></div>
    <div class="container container-body">
        <h1 class="title">
            Дућан - Онлајн
        </h1>
        <div class="container container-buttons">
            <a href="index.php?login=true">
                <button type="button" class="btn btn-primary">Пријава</button>
            </a>
            <a href="index.php?register=true">
                <button type="button" class="btn btn-secondary">Регистрација</button>
            </a>
        </div>
    </div>
</body>
</html>