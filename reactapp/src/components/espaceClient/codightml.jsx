const ClientNavbar = ()=>{

    return(
        <div>
            <meta charSet="utf-8" />
            <title>ElBarber</title>
            <link rel="stylesheet" href="../styles.css" />
            <div>
                <div>
                <header>
                    <div className="navbar">
                    <img id="logo" src="../img/logo.png" alt="logo" />
                    <div className="container">
                        <div>
                        <a href="accueilClient.html">Accueil</a>
                        <a href="profilClient.html">Profil</a>
                        <a href="historiqueRdvClient.html">Historique</a>
                        <a href="prochainRdvClient.html">A venir</a>
                        <a href="coiffeurFavoris.html">Favoris</a>
                        </div>
                        <div id="connexionDeconnexion">
                        <a id="connexion" href="connexionClient.html">Connexion</a>
                        <a id="deconnexion" href="../Accueil.html">Deconnexion</a>
                        </div>
                    </div>
                    </div>
                    <div className="menu-header">
                    <div>
                        <h1 id="titre">EL BARBER</h1>
                    </div>
                    </div>
                </header>
                </div>
            </div>
            <main>
                <div className="card-container">
                    <div className="card">
                        <img src="../img/salon1.avif" alt="imgSalon"/>
                        <div className="card-content">
                        <h2>BeautyShop</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates!</p>
                        <a href="salonChoisi.html" className="card-boutton">Afficher plus</a>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="container">
                <div className="flex-contact">
                    <div className="flex">
                    <h2>Pour nous joindre</h2>
                    <address>
                        <a href="mailto:ElBarber@gmail.com">ElBarber@gmail.com</a>
                    </address>
                    <address>
                        <a href="tel:438-123-456">438-123-456</a>
                    </address>
                    <div className="flex-logo">
                        <img className="logo2" src="../img/facebook.png" alt="facebook" />
                        <img id="logo2-insta" src="../img/instagram.png" alt="facebook" />
                        <img className="logo2" src="../img/linkedin.png" alt="facebook" />
                    </div>
                    </div>
                    <div className="flex-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22350.70532600428!2d-73.54720552183143!3d45.55358099250924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bf5bacbeffd%3A0x68ff300997eff5c!2sColl%C3%A8ge%20de%20Maisonneuve!5e0!3m2!1sfr!2sca!4v1702967268796!5m2!1sfr!2sca" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default ClientNavbar