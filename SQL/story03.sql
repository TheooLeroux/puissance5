UPDATE user SET password= '12345678' WHERE id = '01' ;

/* 
Requête permettant de mettre à jour la table user en changeant le password avec celui inscrit pour SEULEMENT l'user avec l'id = 01
*/

UPDATE user SET email= 'stojanovic.marko2003@gmail.com' WHERE id = '01' AND password = '12345678';

/* 
Requête permettant de mettre à jour la table user en changeant l'email avec celui inscrit pour SEULEMENT l'user avec l'id = 01 
et le password "12345678"
*/