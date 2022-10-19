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
    <title>Tableau des scores</title>
    <link rel="stylesheet" href="assets/Css/scores.css">
</head>

<body>


    <!-- BANNIERE -->

    <div class="flexBody01">
        <h1 class="connexion">TABLEAU DES SCORES</h1>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

        <table class="tableau">
            <thead>
                <tr>
                    <th>Nom du jeu</th>
                    <th>Nom du joueur</th>
                    <th>Niveau de difficulté</th>
                    <th>Score</th>
                    <th>Date/heure</th>
                </tr>
            </thead>


            <tbody>
                <tr>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                </tr>
                <tr>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                </tr>
                <tr>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                </tr>
                <tr>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                </tr>
                <tr>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                    <td>.......</td>
                </tr>
            </tbody>

        </table>

    </div>


</body>

<?php
require "view/footer.inc.php";
  ?>

</html>