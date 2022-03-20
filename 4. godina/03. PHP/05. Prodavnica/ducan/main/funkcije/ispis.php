<?php
function ispisi_korpu($id){
    $konekcija = otvori_konekciju("localhost", "root", "", "prodavnica");

    $sql = "
        SELECT Products.ID, Products.Name, Basket.Amount, Basket.Amount*Products.Price AS 'Total' 
        FROM Basket
        INNER JOIN Products ON Basket.ProductID=Products.ID
        INNER JOIN Users ON Basket.UserID=Users.ID
        WHERE Users.ID=". $id .";";
    $rez = $konekcija->query($sql);
    
    $tabela = "";
    while($row = $rez->fetch_assoc()){
        $tabela .= '
        <tr>
            <td>'. $row['Name'] .'</td>
            <td>'. $row['Amount'] .'</td>
            <td>'. $row['Total'] .'</td>
            <td> 
                <button type="submit" name="izbaci" value="'. $row['ID'] .'">Izbaci</button>
            </td>
        </tr>
        ';
    }

    zatvori_konekciju($konekcija);

    echo('
    <form method="get" action="./index.php" class="popupForm">
        <div class="table">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Ime</th>
                        <th>Količina</th>
                        <th>Cena</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ' . $tabela . '
                </tbody>
            </table>
        </div>
        <button type="submit" name="povratak" value="true" class="btn btn-primary">Izlaz</button>
        <button type="submit" name="kupi" value="true" class="btn btn-primary">Izlaz</button>
    </form>
    ');
}


?>