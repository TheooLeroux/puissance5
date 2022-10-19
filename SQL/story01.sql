CREATE TABLE user(
    id INT not null PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    name VARCHAR(255) UNIQUE,
    date_time_inscription DATETIME,
    date_time_last_connexion DATETIME
);

CREATE TABLE score (
    id INT PRIMARY KEY, 
    id_Player INT REFERENCES user (id),
    id_Game INT REFERENCES game (id),
    difficulty_Game VARCHAR(255),
    score_Game INT,
    date_time_Game DATETIME
);

CREATE TABLE Message (
    id INT PRIMARY KEY,
    id_Game INT REFERENCES game (id),
    id_Sender INT REFERENCES user (id),
    message VARCHAR(255),
    date_time_Message DATETIME
);


CREATE TABLE game (
     id_Game INT PRIMARY KEY,
     game_name VARCHAR(255)
);

CREATE TABLE infodex (
    id_jco INT,
    id_jin INT,
    id_jou INT,
    id_tre INT
);
 