create table DisponibiliteSalon(
    idDispoS int not null IDENTITY(1,1),
    idSalon int not null,
    dateDispo date,
    ouverture time,
    fermeture time,
    CONSTRAINT PK_DISPO_SALON PRIMARY KEY (idDispoS),
    CONSTRAINT FK_DISPO_SALON_SALON FOREIGN KEY (idSalon) REFERENCES SalonCoiffure(idSalon)
)