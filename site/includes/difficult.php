<?php
    require "database.php";
    $dbh->query("SELECT id_Player,id_Game,difficulty_Game,score_Game,date_time_Game FROM score order by difficulty_Game")
?>
<a href="../scores.php"> </a>