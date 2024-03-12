--Travail fait par Jorge/Alejandro
create table Client(
    idCLIENT int PRIMARY KEY IDENTITY(1,1), 
    PrenomClient varchar(50) not null, 
    NomClient varchar(50) not null, 
    Email varchar(50) not null,
    MotDePasse varchar(50) not null
    )
