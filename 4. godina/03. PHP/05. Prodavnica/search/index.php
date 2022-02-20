<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./stil.css">
    <title>Dućan</title>
</head>
<body>
    <div class="container">
        <div class="zaglavlje">
            <h1 class="naslov">Dućan</h1>
        </div>
        <div class="pretraga">
            <form action="./index.php" method="get">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Pretraži..." aria-label="Pretraži..." aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Pretraga</button>
                </div>
            </form>
        </div>
        <div class="rezultati">
            <div class="item">
                <div class="item-slika">
                    <img src="#">
                </div>
                <div class="item-tekst">
                    <div class="item-tekst-naziv">
                        <h4> Item </h4>
                    </div>
                    <div class="item-tekst-opis">
                        <p> Ovo je neki primer mock-up itema</p>
                    </div>
                </div>
                <div class="item-posle">
                    <div class="item-posle-cena">
                        <p> 319.99 RSD </p>
                    </div>
                    <div class="item-posle-dugmici">
                        <form action="./index.php" method="POST">
                            <button type="button" class="btn btn-primary">Dodaj u korpu</button>
                            <button type="button" class="btn btn-success">Kupi sada</button>
                        </form>
                    </div>
                </div>

            </div>
            <div class="item">
                <div class="item-slika">
                    <img src="#">
                </div>
                <div class="item-tekst">
                    <div class="item-tekst-naziv">
                        <h4> Item </h4>
                    </div>
                    <div class="item-tekst-opis">
                        <p> Ovo je neki primer mock-up itema</p>
                    </div>
                </div>
                <div class="item-posle">
                    <div class="item-posle-cena">
                        <p> 319.99 RSD </p>
                    </div>
                    <div class="item-posle-dugmici">
                        <form action="./index.php" method="POST">
                            <button type="button" class="btn btn-primary">Dodaj u korpu</button>
                            <button type="button" class="btn btn-success">Kupi sada</button>
                        </form>
                    </div>
                </div>

            </div>
            <div class="item">
                <div class="item-slika">
                    <img src="#">
                </div>
                <div class="item-tekst">
                    <div class="item-tekst-naziv">
                        <h4> Item </h4>
                    </div>
                    <div class="item-tekst-opis">
                        <p> Ovo je neki primer mock-up itema</p>
                    </div>
                </div>
                <div class="item-posle">
                    <div class="item-posle-cena">
                        <p> 319.99 RSD </p>
                    </div>
                    <div class="item-posle-dugmici">
                        <form action="./index.php" method="POST">
                            <button type="button" class="btn btn-primary">Dodaj u korpu</button>
                            <button type="button" class="btn btn-success">Kupi sada</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    </div>
</body>
</html>