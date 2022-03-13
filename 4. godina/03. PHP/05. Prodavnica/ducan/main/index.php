<?php
include "./funkcije/pravljenje_itema.php";
include "./funkcije/server.php";
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
        

    ?>
    <div class="container">
        <div class="zaglavlje">
            <h1 class="naslov">Dućan</h1>
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

