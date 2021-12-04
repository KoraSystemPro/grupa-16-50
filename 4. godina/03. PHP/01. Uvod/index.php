<!DOCTYPE html>
<html>
    <head>
        <title>Test</title>
    </head>

    <body>
        <?php 
            // Uvod
            echo("Hello world!");

            $promenljiva = 5;               // Celobrojna vrednost
            echo("Vrednost promenljive je: $promenljiva <br>");

            $promenljiva = 32.12;           // Decimalna proemnljiva
            echo("Vrednost promenljive je: $promenljiva <br>");
            
            $promenljiva = 'A';             // Znak/char
            echo("Vrednost promenljive je: $promenljiva <br>");
            
            $promenljiva = "Ovo je string"; // Niska/string
            
            echo("Vrednost promenljive je: $promenljiva <br>");
            
            $promenljiva = true;            // Bool
            echo("Vrednost promenljive je: $promenljiva <br>");

            //////////////////////////

            $x = "Ovo je neki tekst";
            echo($x . "<br>");      // Tacka se koristi za sabiranje stringova
                                    // Nadovezivanje

            /* -------------------- */

            // IF
            $x = 0;
            if ($x > 0){
                echo("X je pozitivna vrednost" . "<br>");
            } else {
                if($x < 0){
                    echo("X je negativan broj" . "<br>");
                } else {
                    echo("X je nula" . "<br>");
                }
            }


            /* -------------------- */
            // Petlje

            // While
            $i = 1;
            while($i <= 10){
                echo($i . ". ");
                $i++;
            }

            echo("<br>");
            
            // Do - while
            $i = 1;
            do {
                echo($i . ". ");
                $i++;    
            }
            while($i <= 10);

            echo("<br>");

            // For
            for($i = 1; $i <= 10; $i++){
                echo($i . ". ");
            }
            echo("<br>");

            /* -------------------- */
            // Funkcije
            $a = 5;
            $b = 10;
            function rect_pov($x, $y){
                return $x * $y;
            }
            $rez_funkcije = rect_pov($a, $b);
            echo("Povrsina pravougaonika sa stranicama $a, $b je: $rez_funkcije <br>");
            
            // Ugradjene funcije

            // STRLEN
            $str = "Ovo je neki primer stringa!";
            $rez = strlen($str);
            echo("Duzina stringa: '$str' je: $rez" . "<br>");

            // STR_REPLACE
            $s = 'ri';
            $rez = str_replace($s, "@@", $str);
            echo("Modifikovan string je: $rez" . "<br>");
            
            // ABS
            $a = -10;
            $rez = abs($a);
            echo("Abs vrendost broja $a je: $rez" . "<br>");

            // RAND
            $rez = rand(1, 10);
            echo("Nasumican broj izmedju 1-10: $rez" . "<br>");

            // SQRT
            $a = 64;
            $rez = sqrt($a);
            echo("Kvadratni koren broja $a je: $rez" . "<br>");

        ?>

    </body>
</html>