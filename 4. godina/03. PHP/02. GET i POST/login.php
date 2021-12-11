<?php
    // $_POST
    $email = $_POST['email'];
    $password = $_POST['pwd'];

    $iemail = "a@g.com";
    $ipwd = "das";

    if(strcmp($email, $iemail) == 0 && strcmp($password, $ipwd) == 0)
        header("location:dobrodoslica.php");
    else
        header("location:index.php?poruka=bad");
?>