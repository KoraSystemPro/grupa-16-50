<?php
    echo "1";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="main.css"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <div class="omotac">
        <div class="forme">
            <div class="login-forma">
                <h2>Login</h2>
                <form class="forma">
                    <input type="email" placeholder="E-mail" id="l-email">
                    <input type="password" placeholder="Password" id="l-pwd">
                    <button type="button" onclick="login()" class="submit-dugme" id="l-button">Login</button>
                </form>
            </div>
            <div class="razdeljak"></div>
            <div class="register-forma">
                <h2>Register</h2>
                <form class="forma">
                    <input type="email" placeholder="E-mail" id="r-email">
                    <input type="password" placeholder="Password" id="r-pwd">
                    <input type="text" placeholder="Name" id="r-name"> 
                    <button type="button" onclick="register()" class="submit-dugme" id="r-button">Register</button>
                </form>
            </div>
            <div id="response-div">

            </div>
        </div>
    </div>
    <script>
        function login(){
            let request = new XMLHttpRequest();
            let podaci = new FormData();
            podaci.append("email", document.getElementById("l-email").value);
            podaci.append("password", document.getElementById("l-pwd").value);
            
            if(request.readyState == 4 && request.status == 200){
                if(request.responseText == 1){

                } else {
                    document.getElementById("response-div").innerText    = request.responseText;
                }
            }

            request.open("POST", "./login.php");
            request.send(podaci);
        }
    </script>
</body>
</html>