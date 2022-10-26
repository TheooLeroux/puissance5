<?php
require "includes/database.php";

session_start();
?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <link rel="stylesheet" href="assets/css/login.css">
</head>

<body>

<?php
require "view/header.inc.php";
?>


    <!-- BANNIERE -->

    <div class="flexBody01">
        <h1 class="connexion">CONNEXION</h1>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

        <form method="post" name="login">

            <h1>Connectez-vous</h1>
            
            <?php
              error_reporting(0);
              if (isset($_POST['email'])){
                $email = stripslashes($_REQUEST['email']); 
                //$email = mysqli_real_escape_string($dbh, $email);
                $password = stripslashes($_REQUEST['password']);
                //$password = mysqli_real_escape_string($dbh, $password);
                $query = $dbh->prepare('SELECT * FROM user WHERE email = :email and password=:password');
                $query->execute(['email' => $email, 'password' => $password]);
                $user = $query->fetch();
                if($user[1]==$email){
                  
                    $_SESSION['email'] = $email;
                    $_SESSION['id'] = $user[0];
                
                  header("Location: memory.php");
                }else{
                  echo '<p class="echo"> ⚠️ <span>ERREUR</span> : Le mail ou le mot de passe inscrit est inccorect.</p>';
                }
              }
        
            ?>

            <div class="inputs">

                <input type="email" placeholder="exemple@mail.com" name="email" required/>
                <input type="password" placeholder="Mot de passe" name="password" required/>
                
            </div>

            <p class="loginpass">Vous n'avez pas encore de compte ?</p><a href="register.php"><p class="loginpass02" >Créer en un ici !</p></a>

            <div>
                <button class="button_connexion" type="submit" >
                    Connexion</button>
            </div>

        </form>

    </div>


</body>

<?php
require "view/footer.inc.php";
?>

</html>