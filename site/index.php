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
  <title>Page d'accueil</title>
  <link rel="stylesheet" href="assets/css/index.css">
</head>

<body>

  <!-- BANNIERE -->


  <div class="banniere">
    <div class="titre">BIENVENUE DANS <br> NOTRE STUDIO !</div>
    <div class="desc">Venez challenger les cerveaux les plus agiles !</div>
    <form>
      <button class="button_play" type="submit" formaction="memory.php">JOUER !</button>  </div>
    </form>

  <!-- BODY01 -->

  <div class="para">
    <a class="grando" href="https://store.steampowered.com/app/1213700/Spirit_of_the_North/?l=french"><img class="grand"
        src="assets/Image/image1.png" alt="1"></a>
    <a href="https://store.steampowered.com/app/413150/Stardew_Valley/"><img src="assets/Image/image2.png" alt="2"></a>
    <a href="https://store.steampowered.com/app/219150/Hotline_Miami/"><img src="assets/Image/image3.png" alt="3"></a>
  </div>  

  <div class="para02">
    <div class="simage">
      <li><span>01 </span>Graphisme</li><br>
      <p>Dans un désir de toujours plus de qualité, nos équipes améliore constament nos graphisme, si bien qu'aujour'hui
        nous nous approchons de la simulation. Nos jeux sont toujours plus immersif grâce à notre équipe de spécialiste
        et de passioné. Grâce à leur style graphique si unique, et apprécié de nos fans, nos jeux sont devenus très
        populaire et apprecié des joueurs, si bien que l'équipe graphique ne fait que se renforcer! </p>
    </div>
    <div class="simage">
      <li><span>02 </span>Jouabilité</li><br>
      <p>Pour nous, le plus important dans un jeu vidéo reste bien la jouabilité, qui à elle seule distingue les bons
        des mauvais jeux. Et c'est donc pour ça, que nous avons constitué une veritable équipe d'expert, pour nous aider
        à la conception de méchanique toujours plus innovente et amusante! Dans un réel désir d'évolution du jeux vidéo,
        nous avons donc choisit de toujours plus diversifier nos gameplay, et expérience.</p>
    </div>
    <div class="simage">
      <li><span>03 </span>Histoire</li><br>
      <p>Si l'on devait choisir les choses les plus importante pour un jeu vidéo, l'hitoire s'imposerait. En effet tous
        les bons jeux actuels, son ponctué d'une histoire poignante, et leine de rebondissement, comme tous nos jeux. Au
        seins de ces histoires, le joueur pourra faire des rencontres étonantes, et touchantes, nouer des amitié, vivre
        des mments de joie, et de veritable tragédie, pour nous jouer, c'est vivre le jeu!</p>
    </div>
  </div>

  <div class="hade">
    <div>
      <p class="imgbox"><img src="https://media.discordapp.net/attachments/301039123160891402/1031666329184391168/logoneon.png" alt="4"></p>
    </div>
    <div class="boxgene">
    <?php
    require "includes/database.php";
    $recup = $dbh->query('SELECT * FROM infodex');
    $row=$recup->fetch()
    ?>
      <div class="boxhaut"> 
        <div class="box1">
          <p><span><?= $row['id_jou']; ?></span><br>Parties Jouées</p> 
        </div>
        <div class="box2">
          <p><span><?= $row['id_jco']; ?></span><br>Joueurs Connectés</p> 
        </div>
      </div>
      <div class="boxbas">
        <div class="box3">
          <p><span><?= $row['id_tre']; ?> sec</span><br>Temps Record</p> 
        </div>
        <div class="box4">
          <p><span><?= $row['id_jin']; ?></span><br>Joueurs Inscrits</p> 
        </div>
      </div>
    </div>
  </div>

  <div class="titlediv">
    <p class="title">Notre Équipe</p><br>
  </div>
  <p class="ptite">Une équipe de vrais professionels, pour un travail professionel.</p>
  <div>
  </div>
  <div class="orn"><img src="assets/Image/ornement.png" alt="Je suis un ornement"></div>
  <div class="equipe">
    <a href="https://www.youtube.com/watch?v=pyS3vmnWTyU">
      <div><img src="assets/Image/marco.jpg" alt="Privé"><br> <br> Marko <br> <br>
        <p>Game Developer</p>
        <div class="icon_social">
        <img src="assets/Image/sout.png" alt="sout">
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=bnmAi53H520">
      <div><img src="assets/Image/theo.jpg" alt="Privé"><br> <br> Theo <br> <br>
        <p>Game Developer</p>
        <div class="icon_social">
        <img src="assets/Image/sout.png" alt="sout">
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=BBJa32lCaaY">
      <div><img src="assets/Image/mathis.jpg" alt="Privé"><br> <br> Mathis <br> <br>
        <p>Game Developer</p>
        <div class="icon_social">
        <img src="assets/Image/sout.png" alt="sout">
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=EZEfN5z8Mlg">
      <div class="hamza"><img src="assets/Image/hamza.png" alt="Privé"><br> <br> Hamza <br> <br>
      <p>Bugger</p>
      <div class="icon_social">
        <img src="assets/Image/sout.png" alt="sout">
        </div>
      </div>
    </a>
  </div>

  <?php
require "view/footer.inc.php";
  ?>

</body>

</html>