create database SalonCoiffure
go
use SalonCoiffure
go

CREATE LOGIN general WITH PASSWORD = '123';
use SalonCoiffure;
CREATE USER general FOR LOGIN general;
ALTER ROLE db_owner ADD MEMBER general;

create table Client(
   IDclient int PRIMARY KEY IDENTITY(1,1), 
   UsernameClient varchar(50) unique,
    PrenomClient varchar(50) not null, 
    NomClient varchar(50) not null, 
    Email varchar(50) not null,
    MotDePasse varchar(128) not null
    )

	select * from Client
	drop table Client

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

	select * from SalonCoiffure
	drop table SalonCoiffure

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

	select * from Coiffeur
	drop table Coiffeur


	create table Services(
    idService int not null identity(1,1),
    idSalon int not null,
    nom varchar(50) not null,
	numTranches int not null,
    prix FLOAT,
    CONSTRAINT PK_SERVICE PRIMARY Key (idService),
    CONSTRAINT FK_SERVICE_SALON FOREIGN KEY (idSalon) REFERENCES SalonCoiffure(idSalon)
)

	select * from Services
	drop table Services

	CREATE TABLE Blacklist (
    idToken int PRIMARY KEY identity(1,1),
    token varchar(512) not null
    );

    drop table Blacklist
    select * from Blacklist