SELECT message,name,date_time_Message,id_Sender
FROM Message 
INNER JOIN user on message.id_Sender = user.id
WHERE date_time_Message > (NOW()-interval -1 DAY);

/* 
Requête permettant de SELECTionner les message compris entre maintenant et maintenant - 24h
*/
	