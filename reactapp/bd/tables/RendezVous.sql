--Travail fait par Jorge/Alejandro
create table RendezVous(
    idRDV INT PRIMARY KEY identity(1,1),
    idSalonCoiffure INT FOREIGN KEY references SalonCoiffure(IDSalon),
    idClient INT FOREIGN KEY references Client(idCLIENT),
    idService INT FOREIGN KEY references Services(idService ),
    idCoiffeur INT FOREIGN KEY references Coiffeur (IDCoiffeur),
    dateRDV Date not null,
    heure TIME not null
    )