<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>

        <a href="dobrodoslica.php?ime=Luka
prezime=Korica">LINK KA DRUGOJ STRANICI</a>
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
            
            if(strcmp($_GET['poruka'], 'bad') == 0)
                echo("<script>alert('Bad Login information')</script>");

        ?>

    </body>

</html>