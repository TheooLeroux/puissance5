<?php
require "includes/database.php";


if (isset($_POST["email"]) && isset($_POST["pseudo"]) && isset($_POST["password"]) && isset($_POST["confirm_password"])) {
    $email = htmlspecialchars($_POST["email"]);
    $password = $_POST["password"];
    $password_repeat = $_POST["confirm_password"];
    $pseudo = htmlspecialchars($_POST["pseudo"]);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if (strlen($pseudo) >= 4) {
            if($_POST["password"] == $_POST["confirm_password"]){
                $pattern = '/^(?=.*[!@#$%^&*-])(?=.*[0-9])(?=.*[A-Z]).{8,20}$/ ';
                if (preg_match($pattern, $password)) {
                $pom_test = $dbh->prepare('SELECT * FROM user WHERE email = :email');
                $pom_test->execute(['email' => $email]);
                $pom_test = $pom_test->fetch();
                
                if (empty($pom_test)){
                    $options = [
                        'cost' => 12,
                    ];
                    $passwordhash = password_hash($password, PASSWORD_BCRYPT, $options);
                    $insert = $dbh->prepare('INSERT INTO user (email, name, password) VALUES ("?", "?", "?")');
                    $insert->execute();
                  
                    
                }else{
                    echo "votre compte existe";
                }
                }else{
                    echo "Votre mot de passe doit contenir au moins 8 caractès dont au moins 1 lettre minuscule, 1 lettre majuscule, 1 chiffre et 1 caractère spécial (!@#$%^&*-)";
                }
            }else{
                echo "les mots de passe ne correspondent pas";
            }
        }else {
            echo "Le pseudo doit contenir minimum 4 caractères";
        }
    }else {
        echo "L'adresse mail n'est pas au format valide";
    }
}

?>






<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" href="assets/Css/register.css">
</head>

<body>

    <!-- DEBUT CODE HEADER -->

    <header>

        <div class="flexNav">
            <div>
                <p><img class="logo02"
                        src="https://media.discordapp.net/attachments/301039123160891402/1028264022467956766/LOGO.png"
                        alt=""></p>
            </div>
            <div>
                <nav>
                    <a href="index.php">ACCUEIL</a>
                    <a href="register.php">JEU</a>
                    <a href="scores.php">SCORES</a>
                    <a href="contact.php">NOUS CONTACTER</a>
                    <a href="myaccount.php"><img src="https://www.pngfind.com/pngs/b/110-1102927_profile-icon-png.png"
                            alt=""></a>
                </nav>
            </div>
        </div>

    </header>

    <!-- FIN CODE HEADER -->


    <!-- BANNIERE -->

    <div class="flexBody01">
        <h1 class="connexion">INSCRIPTION</h1>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

    <form method="post">

            <h1>Créer un compte</h1>

            <p class="texte_espace">ㅤ </p>

            <div class="inputs">
               
                    
                      
                <input type="email" placeholder="exemple@mail.com" name="email" required />
              
                <input type="text" placeholder="Pseudo" name="pseudo" required />
               
                <input type="password" placeholder="Mot de passe" name="password" required />
               
                <input type="password" placeholder="Confirmer le mot de passe" name="confirm_password" required />


            </div>
            
            <p class="loginpass">Vous avez déjà un compte ?</p><a href="login.php"><p>Cliquer ici</p></a>
            <div>
                <button class="button_connexion" type="submit">
                    Valider</button>
                    
                    
            </div>
            
            </form>

    </div>


    <!-- DEBUT CODE FOOTER -->

    <footer>

        <div class="information_footer">
            <h1>Information</h1>
            <h2>En cas de problèmes ou de questions, n'hésitez pas à nous contacter ! ♥</h2>
            <h2>ㅤ</h2>
            <h2><span>Tel :</span> 06 09 78 34 57 </h>
                <h2>ㅤ</h2>
                <h2><span>Email :</span> mathisbogoss@gmail.com </h>
                    <h2>ㅤ</h2>
                    <h2><span>Location :</span> Cergy - Coding Factory </h>
                        <h2>ㅤ</h2>

                        <p>
                            <a href="https://www.facebook.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325507244666951/facebook.png"
                                    alt=""></a>
                            <a href="https://www.twitter.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325509304078406/twitter.png"
                                    alt=""></a>
                            <a href="https://www.tiktok.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325508670730281/tiktok.png"
                                    alt=""></a>
                            <a href="https://www.pinterest.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325508272259152/pinterest.png"
                                    alt=""></a>
                            <a href="https://www.instagram.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325507617968230/insta.png"
                                    alt=""></a>
                        </p>

                        <p class="copyright_footer">Copyright © 2022 Tout droits réservés</p>
        </div>
        <div class="power_footer">
            <h1>Power Of Memory</h1>
            <h2><a href="memory.php"><span>♦</span> Jouer !</a></h>
                <h2>ㅤ</h2>
                <h2><a href="scores.php"><span>♦</span> Les scores</a></h>
                    <h2>ㅤ</h2>
                    <h2><a href="contact.php"><span>♦</span> Nous contacter</a></h>

        </div>
    </footer>


    <!-- FIN CODE FOOTER -->

</body>

</html>