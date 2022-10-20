UPDATE user SET password = sha2('passwor','256');

/* 
Ici, on met à jour le mot de passe en sha2, ce qui permet de le hasher
*/

INSERT INTO user(id,email,password,name,date_time_inscription,date_time_last_connexion)VALUES(
'01','stojanovic.matko2004@gmail.com','123456','marko','2022-10-10 14:00:00','2022-10-10 14:00:00'
);

/* 
Requête peremttant d'ajouter un nouvel user dans la table user en insérant toutes les valeurs correspondantes 
date_time_last_connexion est NULL car c'est l'user créer son compte
*/