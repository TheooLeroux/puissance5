<?php
$dsn = 'mysql:host=localhost;dbname=powerofmemory;charset=utf8';
$userofdb = 'root';
$passwordofdb = "";
try {
  $dbh = new PDO($dsn, $userofdb, $passwordofdb);
} catch (PDOException $e) {
  point_r(
    array(
      "ERROR" => $e->getMessage()
    )
    );
    die();
}
    $dbh = new PDO($dsn, $userofdb, $passwordofdb);
    ?>