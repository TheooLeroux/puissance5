<?php
require "includes/database.php";
require "view/header.inc.php";
?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Espace</title>
    <link rel="stylesheet" href="assets/Css/myaccount.css">
</head>

<body>




    <!-- BANNIERE -->

    <div class="flexBody01">
        <h1 class="connexion">MON ESPACE</h1>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

        <form>

            <p class="texte_espace">ㅤ</p>
            <h1>Modifier votre email</h1>
            <p class="texte_espace">ㅤ </p>

            <div class="inputs">
                <input type="email" placeholder="Ancien Mail" required />
                <input type="email" placeholder="Nouveau Mail" required />
                <input type="password" placeholder="Mot de passe" required />
            </div>

            <p class="texte_espace">ㅤ</p>

            <div>
                <button type="submit" formaction="index.php">
                    Valider le changement de l'Email</button>
            </div>

            <p class="texte_espace">ㅤ</p>

        </form>

        <p class="texte_espace">ㅤ</p>

        <form>

            <p class="texte_espace">ㅤ</p>
            <h1>Modifier votre mot de passe</h1>
            <p class="texte_espace">ㅤ </p>

            <div class="inputs">
                <input type="password" placeholder="Ancien mot de passe" required />
                <input type="password" placeholder="Nouveau mot de passe" required />
                <input type="password" placeholder="Confirmer le mot de passe" required />
            </div>

            <p class="texte_espace">ㅤ</p>

            <div>
                <button type="submit" formaction="index.php">
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