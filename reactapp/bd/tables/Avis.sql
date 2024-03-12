--Travail fait par Jorge/Alejandro

-- Create a new table called 'Avis' in schema '
-- Drop the table if it already exists
IF OBJECT_ID('Avis', 'U') IS NOT NULL
DROP TABLE Avis
GO
-- Create the table in the specified schema
CREATE TABLE Avis
(
    AvisId INT NOT NULL identity(1,1),
    idClient int not null,
    idSalonCoiffure int not null,
    etoiles int not null,
    commentaire text,
    CONSTRAINT PK_AVIS PRIMARY KEY (AvisId),
    CONSTRAINT FK_CLient_AVis FOREIGN KEY (idClient) REFERENCES Client(idCLIENT),
    CONSTRAINT FK_Salon_AVis FOREIGN KEY (idSalonCoiffure) REFERENCES SalonCoiffure(idSalon),

);
GO