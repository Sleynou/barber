--Travail fait par Jorge/Alejandro
create table DisponibiliteCoiffeur(
    idDispoC INT IDENTITY(1,1),
    idCoiffeur INT,
    idDispoS INT,
    PauseDebut TIME not null,
    PauseFin TIME not null,
    TrancheRDV INT not null,
    CONSTRAINT PK_idDispoC PRIMARY KEY (idDispoC),
    CONSTRAINT FK_DispCoiff_idCoiffeur FOREIGN KEY (idCoiffeur) REFERENCES Coiffeur(IDCoiffeur ),
    CONSTRAINT PK_DispCoiff_idDispoS FOREIGN KEY (idDispoS) REFERENCES DisponibiliteSalon(idDispoS )
     )