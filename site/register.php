<?php
require "includes/database.php";

if (isset($_COOKIE['user'])) {
    $login = $dbh->prepare('SELECT ip FROM user WHERE id = :id');
    $login->execute(['id' => $_COOKIE['user_id']]);
    $login = $login->fetch();
    if(isset($login['ip']) && $login['ip'] == getIp()){
        header("Location: game");
    }else{
        setcookie('user', 'none', time() - 1);
    }
}

if (isset($_GET['verif']) && isset($_GET['email'])){
    $verif = $dbh->prepare('SELECT * FROM mail_verif WHERE chaine = :chaine');
    $verif->execute(['chaine' => $_GET['verif']]);
    $verif = $verif->fetch();
    $chaine = htmlspecialchars($verif['chaine']);
    $user_id = htmlspecialchars($verif['user_id']);
    $verif_email = $dbh->prepare('SELECT id FROM user WHERE email = :email');
    $verif_email->execute(['email' => $_GET['email']]);
    $verif_email = $verif_email->fetch();
    if (isset($verif_email['id']) && !empty($verif_email['id'])) {
        $email_validate = $dbh->prepare('UPDATE user SET mail_verif = "Yes" WHERE user.id = :id;');
        $email_validate->execute(['id' => $verif_email['id']]);
    }
}


if (isset($_POST["email"]) && isset($_POST["pseudo"]) && isset($_POST["password"]) && isset($_POST["password_repeat"])) {
    $email = htmlspecialchars($_POST["email"]);
    $password = $_POST["password"];
    $password_repeat = $_POST["password_repeat"];
    $pseudo = htmlspecialchars($_POST["pseudo"]);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if (strlen($pseudo) >= 4) {
            if($_POST["password"] == $_POST["password_repeat"]){
                $pattern = '/^(?=.*[!@#$%^&*-])(?=.*[0-9])(?=.*[A-Z]).{8,20}$/ ';
                if (preg_match($pattern, $password)) {
                $test = $dbh->prepare('SELECT * FROM user WHERE email = :email');
                $test->execute(['email' => $email]);
                $test = $test->fetch();
                
                if (empty($test)){
                    $options = [
                        'cost' => 12,
                    ];
                    $passwordhash = password_hash($password, PASSWORD_BCRYPT, $options);
                    $insert = $dbh->prepare('INSERT INTO user(email, pseudo, mdp) VALUES (:email, :pseudo, :mdp)');
                    $insert->execute(["email" => $email, "pseudo" => $pseudo, "mdp" => $passwordhash]);
                    function genererChaineAleatoire($longueur = 10){
                        $caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        $longueurMax = strlen($caracteres);
                        $chaineAleatoire = '';
                        for ($i = 0; $i < $longueur; $i++)
                        {
                        $chaineAleatoire .= $caracteres[rand(0, $longueurMax - 1)];
                        }
                        return $chaineAleatoire;
                    }
                    $chaine = genererChaineAleatoire(45);
                    $recup_id = $dbh->prepare('SELECT id FROM user WHERE email = :email');
                    $recup_id->execute(['email' => $email]);
                    $recup_id = $recup_id->fetch();
                    $recup_id = $recup_id['id'];
                    $inset_verif = $dbh->prepare('INSERT INTO mail_verif(id_user, chaine) VALUES (:id_user, :chaine)');
                    $inset_verif->execute(['id_user' => $recup_id, 'chaine' => $chaine]);
                    mail(
                        $email,
                        'test',
                        urlencode('http://192.168.64.2/puissance4/site/register.php' . $email . '&verif=' . $chaine)
                    );
                }else{
                    echo "votre compte existe";
                }
                }else{
                    echo "Votre mot de passe doit contenir au moins 8 caractès dont au moins1 lettre minuscule, 1 lettre majuscule, 1 chiffre et 1 caractère spécial (!@#$%^&*-)";
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

        <form>

            <h1>Créer un compte</h1>

            <p class="texte_espace">ㅤ </p>

            <div class="inputs">


                <input type="email" placeholder="exemple@mail.com" required />
                <input type="text" placeholder="Pseudo" required />
                <input type="password" placeholder="Mot de passe" required />
                <input type="password" placeholder="Confirmer le mot de passe" required />
            </div>
            <p class="loginpass">Vous avez déjà un compte ?</p><a href="login.php"><p>Cliquer ici</p></a>
            <div>
                <button class="button_connexion" type="submit" formaction="login.php">
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