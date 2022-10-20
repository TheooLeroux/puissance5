UPDATE score 
INNER JOIN game on score.id_Game = game.id_Game
SET score_Game 
WHERE difficulty_Game = '1' AND game_name = 'memory'; 

/* 
1 = numero de difficulté à changer avec chaque mode, memory est le nom du jeu correspondant
*/