create table CoiffeurFavoris (
    idFavoris INT PRIMARY KEY, 
    idClient INT FOREIGN KEY references Client(IDclient), 
    idCoiffeur INT FOREIGN KEY references Coiffeur (IDCoiffeur)
    )