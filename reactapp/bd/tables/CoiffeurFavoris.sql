--Travail fait par Jorge/Alejandro
create table CoiffeurFavoris (
    idFavoris INT PRIMARY KEY IDENTITY(1,1), 
    idClient INT FOREIGN KEY references Client(idCLIENT), 
    idCoiffeur INT FOREIGN KEY references Coiffeur(IDCoiffeur)
    )