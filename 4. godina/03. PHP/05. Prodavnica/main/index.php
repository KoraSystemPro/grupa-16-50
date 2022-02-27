<?php
include "./funkcije/pravljenje_itema.php";
include "./funkcije/server.php";
?>

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
        <div class="dodavanje">
            <form action="./index.php" method="$_GET">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Ime proizvoda..." aria-label="Ime proizvoda..." aria-describedby="button-addon2">
                    <select class="form-select">
                        <!-- <option selected>Kategorija</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option> -->
                        <?php
                            $konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");
                            $rez = $konekcija->query("SELECT * FROM `Category`;");
                            while($row = $rez->fetch_assoc()){
                                echo '<option value="' . $row['ID'] . '">' . $row['Name'] . '</option>';
                            }
                            
                            zatvori_konekciju($konekcija);
                        ?>
                    </select>
                    <select class="form-select">
                        <?php
                            $konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");
                            $rez = $konekcija->query("SELECT * FROM `Provider`;");
                            while($row = $rez->fetch_assoc()){
                                echo '<option value="' . $row['ID'] . '">' . $row['Name'] . '</option>';
                            }
                            
                            zatvori_konekciju($konekcija);
                        ?>

                    </select>

                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Dodaj</button>

                </div>

            </form>
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
            <?php 
                napravi_item("#", "Hleb", "Sava beli hleb", 64.99);
                napravi_item("#", "Orbit mint", "Hladne osvezavajuce zvake", 59.99);
                napravi_item("#", "Banana", "Banane iz Konga", 120.00);
            ?>
        </div>
    </div>
</body>
</html>

