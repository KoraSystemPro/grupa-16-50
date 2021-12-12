<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        <a href="dobrodoslica.php?ime=Luka&prezime=Korica">LINK KA DRUGOJ STRANICI</a>
        <form method="get" action="dobrodoslica.php">
            <input type="text" placeholder="Ime" name="ime">
            <br>
            <input type="text" placeholder="Prezime" name="prezime">
            <br>
            <input type="submit">
        </form>
        <br>
        <br>
        <form method="post" action="login.php">
            <input type="email" placeholder="E-mail" name="email">
            <br>
            <input type="password" placeholder="Password" name="pwd">
            <br>
            <input type="submit">
        </form>

        <?php

            $hostname = "localhost";
            $username = "root";
            $password = "";

            // Pravljenje konekcije
            $konekcija = new mysqli($hostname, $username, $password);
            $rezultat = $konekcija->query("SELECT * FROM login.Users WHERE ID=2");

            while($red = mysqli_fetch_row($rezultat)){
                echo("ID: $red[0]<br>");
                echo("Email: $red[1]<br>");
                echo("Password: $red[2]<br>");
            }

            $konekcija->close();
            

            if(strcmp($_GET['poruka'], 'bad') == 0)
                echo("<script>alert('Bad login information!')</script>");

        ?>

    </body>

</html>