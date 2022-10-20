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
    <link rel="stylesheet" href="assets/css/scores.css">
</head>

<body>


    <!-- BANNIERE -->

    <div class="flexBody01">
        <h1 class="connexion">TABLEAU DES SCORES</h1>
    </div>

    <!-- FORMULAIRE -->
    <div class="button_score">
        <div class="dropdown">
            <button class="dropbtn">Filtrer ⬇ </button>
            <div class="dropdown-content">
            <div><a href="scoresperso.php">Afficher uniquement mes scores</a></div>
            <div><a href="scoresdifficulté.php">Trier par difficulté</a></div>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropbtn">Trier ⬇ </button>
            <div class="dropdown-content">
            <div><a href="scores.php">Trier par scores</a></div>
            <div><a href="scoresdate.php">Trier par date</a></div>
            </div>
        </div>
    </div>

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
            <?php
            require "includes/database.php";
            ?>
            <?php 
                error_reporting(0);
                for($x=1;$x<11;$x++){
                    $recup = $dbh->query("SELECT * FROM score WHERE id_date = ".$x."" );
                    $row=$recup->fetch()
            ?>
                    <tr>  
                    <td><?= $row['Game']; ?></td>
                    <td><?= $row['Player']; ?></td>
                    <td><?= $row['difficulty_Game']; ?></td>
                    <td><?= $row['score_Game']; ?></td>
                    <td><?= $row['date_time_Game']; ?></td>
                    </tr>
                    <?php
                    
                
                }
            ?>
            </tbody>

        </table>

    </div>


</body>

<?php
require "view/footer.inc.php";
  ?>

</html>