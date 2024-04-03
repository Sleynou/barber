create or alter trigger VerificationEmailClient
on Client
after INSERT
AS
BEGIN
    declare @email varchar(50);

    select @email = Email
    from inserted;

    if(@email like '%@%.%' and (select COUNT(@email) from Client) < 2 )
        BEGIN
 			print('[+] Utilisateur ajoute avec succes')
        END
	ELSE if ( (select COUNT(@email) from Client) > 1 )
        begin
            RAISERROR('[-] L utilisateur existe deja', 16, 1)
			rollback
        end
    ELSE
        begin
            RAISERROR('[-] L email n est pas valide', 16, 1)
			rollback
        end

END

insert into Client values(
	'Jorge',
	'Espinal',
	'122@gmailcom',
	'1234567'
)

declare @email varchar(50);
set @email = '122@gmail.com'
if((select COUNT(@email) from Client) > 1)
begin
	print 'SI'
end