<?php
require "includes/database.php";
require "view/header.inc.php";



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
                    echo "ERREUR : Votre compte existe.";
                }
                }else{
                    echo "ERREUR : Votre mot de passe doit contenir au moins 8 caractères dont au moins 1 lettre minuscule, 1 lettre majuscule, 1 chiffre et 1 caractère spécial (!@#$%^&*-).";
                }
            }else{
                echo "ERREUR : Les mots de passes ne correspondent pas.";
            }
        }else {
            echo "ERREUR : Le pseudo doit contenir minimum 4 caractères.";
        }
    }else {
        echo "ERREUR : L'adresse mail n'est pas au format valide.";
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
    <link rel="stylesheet" href="assets/css/register.css">
</head>

<body>


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

</body>

<?php
require "view/footer.inc.php";
  ?>

</html>