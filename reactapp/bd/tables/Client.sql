--Travail fait par Jorge/Alejandro
create table Client(
    IDclient int PRIMARY KEY IDENTITY(1,1), 
    UsernameClient varchar(50) unique,
    PrenomClient varchar(50) not null, 
    NomClient varchar(50) not null, 
    Email varchar(50) not null,
    MotDePasse varchar(128) not null
    )
