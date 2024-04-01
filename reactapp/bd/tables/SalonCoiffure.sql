--Travail fait par Jorge/Alejandro
	create table SalonCoiffure(
    idSalon int not null identity(1,1),
	UsernameSalon varchar(50) unique,
    nomSalon varchar(50) not null,
    telephoneSalon varchar(50) not null,
    adresse varchar(50) not null,
    bio text,
	MotDePasse varchar(128) not null
    CONSTRAINT PK_SALON PRIMARY Key (idSalon)
)