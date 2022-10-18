INSERT INTO score(id, id_Player, id_Game, difficulty_Game, score_Game, date_time_Game)
VALUES 
('45', '1276', '34425', 'IMPOSSIBLE', '231', '2022-10-10 01:00:20'),
('15','1286', '35425', 'IMPOSSIBLE', '21', '2024-01-10 14:00:00'),
('96', '146', '345', 'FACILE', '231', '2022-10-10 14:05:00'),
('75','184856', '6855', 'ELEVE', '2341', '2023-09-10 14:00:18'),
('845', '466', '30125', 'MOYEN', '231', '2016-10-10 01:00:20'),
('115','10456', '3525', 'MOYEN', '21', '2026-01-01 11:00:00'),
('596', '4526', '3555', 'FACILE', '231', '2022-01-10 14:05:00'),
('785','17246', '655', 'ELEVE', '2341', '2023-09-10 14:00:18');

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