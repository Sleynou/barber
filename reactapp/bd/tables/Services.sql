create table Services(
    idService int not null identity(1,1),
    idSalon int not null,
    nom varchar(50) not null,
    prix FLOAT,
    CONSTRAINT PK_SERVICE PRIMARY Key (idService),
    CONSTRAINT FK_SERVICE_SALON FOREIGN KEY (idSalon) REFERENCES SalonCoiffure(idSalon)
)