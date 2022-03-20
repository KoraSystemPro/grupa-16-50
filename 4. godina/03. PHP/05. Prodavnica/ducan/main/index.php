<?php
include "./funkcije/pravljenje_itema.php";
include "./funkcije/server.php";
include "./funkcije/ispis.php";
session_start();

if(!isset($_SESSION['id'])){
    header("location:../index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> -->
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../css/stil.css">
    <title>Dućan</title>
</head>
<body>
    <?php
        echo($_SESSION['id'] . $_SESSION['name']);
        $where = "WHERE Products.Name LIKE '%";
        if(isset($_GET['pretraga'])){
            // Ako je prazna pretraga nemam uslov za prikazivanje proizvoda
            if($_GET['pretraga'] == ''){
                $where = "";
            } else {
                // Prikazi sve proizvode koji imaju pretrazenu rec u nazivu
                $where = $where . $_GET['pretraga'] . "%'";
            }   
        } else {
            $where = "";
            $_GET['pretraga'] = "";
        }
        
        if($_GET['basket']){
            ispisi_korpu($_SESSION['id']);
        }
        if($_GET['izbaci']){
            $konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");
            $sql = "DELETE FROM Basket WHERE Basket.ProductID=" . $_GET['izbaci'] . " AND Basket.UserID=" . $_SESSION_['id'].";";
            $konekcija->query($sql);
            zatvori_konekciju($konekcija);
            unset($_GET['izbaci']);
        }
    ?>


    <div class="container">
        <div class="zaglavlje">
            <h1 class="naslov">Dućan</h1>
            <div class="zaglavlje-desno">
                <div>
                    <form action="./logout.php">
                        <button type="submit" name="id" value=<?php echo("'" . $_SESSION['id'] . "'");?>>Logout</button>
                    </form>
                </div>
                <div>
                    <form action="./index.php" method="get">
                        <button type="submit" name="basket" value="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                    </form>
                </div>
            </div>
        </div>
        <div class="dodavanje">
            <form action="./dodaj.php" method="$_GET">
                <div class="input-group mb-3">
                    <input name="ime" type="text" class="form-control" placeholder="Ime proizvoda...">
                    <input name="cena" type="number" class="form-control" placeholder="Cena proizvoda...">
                    <select name="kategorija" class="form-select">
                        <?php
                            $konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");
                            $rez = $konekcija->query("SELECT * FROM `Category`;");
                            while($row = $rez->fetch_assoc()){
                                echo '<option value="' . $row['ID'] . '">' . $row['Name'] . '</option>';
                            }
                            zatvori_konekciju($konekcija);
                        ?>
                    </select>
                    <select name="dobavljac" class="form-select">
                        <?php
                            $konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");
                            $rez = $konekcija->query("SELECT * FROM `Provider`;");
                            while($row = $rez->fetch_assoc()){
                                echo '<option value="' . $row['ID'] . '">' . $row['Name'] . '</option>';
                            }
                            zatvori_konekciju($konekcija);
                        ?>

                    </select>

                    <button name="operacija" value="dodavanje" class="btn btn-outline-secondary" type="submit" id="button-addon2">Dodaj</button>

                </div>

            </form>
        </div>

        <div class="pretraga">
            <form action="./index.php" method="get">
                <div class="input-group mb-3">
                    <input type="text" name="pretraga" value=<?php echo "'" . $_GET['pretraga'] . "'"?> class="form-control" placeholder="Pretraži...">
                    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Pretraga</button>
                </div>
            </form>
        </div>
        <div class="rezultati">
            <?php 
                $konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");
                $sql = "SELECT Products.ID, Products.Name, Products.Price, Category.Name AS 'Kategorija', Provider.Name AS 'Dobavljac'
                        FROM Products
                        INNER JOIN Category ON Products.CategoryID=Category.ID
                        INNER JOIN Provider ON Products.ProviderID=Provider.ID
                        " . $where . ";";
                        
                $rez = $konekcija->query($sql);
                while($row = $rez->fetch_assoc()){
                    napravi_item("#", $row['ID'], $row['Name'], $row['Kategorija'] . " - " . $row['Dobavljac'], $row['Price']);
                }
 

                zatvori_konekciju($konekcija);
            ?>
        </div>

    </div>
</body>
</html>

