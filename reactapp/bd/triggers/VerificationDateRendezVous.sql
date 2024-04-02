create or alter trigger VerificationDateRendezVous
on RendezVous
instead of INSERT
AS
BEGIN
    declare @date date;
    declare @heure time

    declare @differenceTime int;

    select @date = dateRDV, @heure = heure
    from inserted;

    set @differenceTime = DATEDIFF(minute, getdate(), CONVERT(DATETIME, CONVERT(CHAR(8), @date, 112) + ' ' + CONVERT(CHAR(8), @heure, 108)))

    if(@differenceTime >=15 )
        BEGIN
            INSERT into RendezVous VALUES (
                (SELECT idSalonCoiffure from inserted),
                (SELECT idClient from inserted),
                (SELECT idService from inserted),
                (SELECT idCoiffeur from inserted),
                (SELECT dateRDV from inserted),
                (SELECT Heure from inserted)
            )
        END
    ELSE
        begin
            RAISERROR('[-] Il faut prendre un rdv avec plus de 15min d avance', 16, 1)
        end
END
