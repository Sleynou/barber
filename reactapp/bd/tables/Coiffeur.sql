--Travail fait par Jorge/Alejandro
	create table Coiffeur (
    iDCoiffeur INT IDENTITY(1,1),
	UsernameCoiffeur varchar(50) unique,
    IDSalon  INT,
    PrenomCoiffeur varchar(50) not null,
    NomCoiffeur  varchar(50) not null,
    PhotoCoiffeur  varchar(50),
	MotDePasse varchar(128) not null
    CONSTRAINT PK_Coiffeur_IDCoiffeur PRIMARY KEY (iDCoiffeur),
    CONSTRAINT FK_Coiffeur_IDSalon FOREIGN KEY (idSalon) REFERENCES SalonCoiffure(idSalon)
)
