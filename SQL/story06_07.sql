INSERT INTO score(id, id_Player, id_Game, id_difficulty,id_date,difficulty_Game, Player,Game,score_Game,date_time_Game)
VALUES 
('1','1','1','7','1','IMPOSSIBLE','Hamza','Memory Game','2030','2022-10-20 01:00:20'),
('2','1','1','8','8','IMPOSSIBLE','Theo','Memory Game','1850','2022-08-17 09:10:53'),
('3','1','1','1','4','FACILE','Marco','Memory Game','1630','2022-10-01 22:00:10'),
('4','2','1','4','10','NORMAL','Marco','Memory Game','1301','2022-01-20 07:40:25'),
('5','2','1','6','2','DIFFICILE','Hamza','Memory Game','1100','2022-10-12 06:01:20'),
('6','1','1','9','9','IMPOSSIBLE','Mathis','Memory Game','951','2022-03-19 12:08:30'),
('7','3','1','2','3','FACILE','Hamza','Memory Game','803','2022-10-09 17:00:00'),
('8','3','1','3','7','FACILE','Marco','Memory Game','501','2022-09-04 11:09:34'),
('9','2','1','10','6','IMPOSSIBLE','Mathis','Memory Game','409','2022-09-15 09:35:15'),
('10','2','1','5','5','NORMAL','Theo','Memory Game','386','2022-09-24 15:00:00'),
('11','4','1','11','11','NORMAL','Hamza','Memory Game','150','2021-09-24 14:00:00');

/* 
Requête permettant d'ajouter plusieurs scores affilié à différents users avec des données différentes, cela permet de faire des test
*/

SELECT game.game_name, user.name, score.difficulty_Game,score.score_Game 
FROM score
INNER JOIN game ON game.id_Game = score.id_Game
INNER JOIN user ON score.id_Player = user.id
order by game_name , difficulty_Game, score_Game;

/* 
Requête séléctionnant le nom du jeu, le nom de l'user associé au jeu de la table user, la difficulté du jeu ainsi de la table score que le score du jeu dans l'ordre définis
*/

SELECT game.game_name, user.name, score.difficulty_Game,score.score_Game 
FROM score
INNER JOIN game ON game.id_Game = score.id_Game
INNER JOIN user ON score.id_Player = user.id
order by game_name , difficulty_Game, score_Game,game_name,id_Player;