<?php
require 'includes/database.php';


session_start();
  if(isset($_POST['newEmail'])){
    $email = stripslashes($_POST['email']); 
    $password = stripslashes($_REQUEST['password']);
    $newPassword = stripslashes($_POST['newPassword']); 
    $PasswordConfirmation = stripslashes($_POST['PasswordConfirmation']);
    $newEmail = stripslashes($_POST['newEmail']); 
    $query = $dbh->prepare('SELECT * FROM user WHERE email = :email and password = :password');
    $query->execute(['email' => $email, 'password' => $password]);
    $query = $query->fetch();
    $newquery=$dbh->prepare('UPDATE user SET email=:newEmail WHERE id=:id');
    $newquery->execute(['newEmail' => $newEmail, 'id' => $query[0]]);
  }
  if(isset($_POST['newPassword'])){
    $email = stripslashes($_POST['email']); 
    $password = stripslashes($_REQUEST['password']);
    $newPassword = stripslashes($_POST['newPassword']); 
    $newPasswordConfirmation = stripslashes($_POST['newPasswordConfirmation']);
    if($newPassword == $newPasswordConfirmation){
    $query = $dbh->prepare('SELECT * FROM user WHERE email = :email and password = :password');
    $query->execute(['email' => $email, 'password' => $password]);
    $query = $query->fetch();
    $newquery=$dbh->prepare('UPDATE user SET password=:newPassword WHERE id=:id');
    $newquery->execute(['newPassword' => $newPassword, 'id' => $query[0]]);
    }
    session_unset();
  }
?>





<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Espace</title>
    <link rel="stylesheet" href="assets/css/myaccount.css">
</head>

<body>

<?php
require "view/header.inc.php";
?>



    <!-- BANNIERE -->

    <div class="flexBody01">
        <h1 class="connexion">MON ESPACE</h1>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

        <form method = "post">

            <p class="texte_espace">ㅤ</p>
            <h1>Modifier votre email</h1>
            <p class="texte_espace">ㅤ </p>

            <div class="inputs">
            
                <input type="email" placeholder="Ancien Mail" name='email' required />
            
                <input type="email" placeholder="Nouveau Mail" name='newEmail' required />

                <input type="password" placeholder="Mot de passe" name='password' required />

                <input type="password" placeholder="Confirmer le mot de passe" name='PasswordConfirmation' required />
                
            </div>

            <p class="texte_espace">ㅤ</p>

            <div>
                <button type="submit" >
                    Valider le changement de l'Email</button>
            </div>

            <p class="texte_espace">ㅤ</p>

        </form>

        <p class="texte_espace">ㅤ</p>

        <form method = "post">

            <p class="texte_espace">ㅤ</p>
            <h1>Modifier votre mot de passe</h1>
            <p class="texte_espace">ㅤ </p>

            <div class="inputs">
                <input type="email" placeholder="Email" name='email' required />

                <input type="password" placeholder="Ancien mot de passe" name='password' required />
                
                <input type="password" placeholder="Nouveau mot de passe" name='newPassword' required />

                <input type="password" placeholder="Confirmer le mot de passe" name='newPasswordConfirmation' required />
            </div>

            <p class="texte_espace">ㅤ</p>

            <div>
                <button type="submit" >
                    Valider le changement du mot de passe</button>
            </div>

            <p class="texte_espace">ㅤ</p>

        </form>


    </div>


</body>

<?php
require "view/footer.inc.php";
  ?>

</html>