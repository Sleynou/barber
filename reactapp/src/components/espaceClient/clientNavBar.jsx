import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

const ClientNavbar = ({ token }) => {
  let isLoggedIn = token ? true : false;

  const handleLogin = () => {
     
  };

  const handleLogout = () => {
   
  };

  return (
    <Menu fixed="top" borderless size="massive">
      <Container style={{width: "100%", paddingLeft: "2%", paddingRight: '3%'}}>
        <Menu.Item as="a"  href="/profilCleint" header>
          <img src="../img/logo.png" alt="logo" />
          ElBarber
        </Menu.Item>
        <Menu.Menu position="right" >
          <Menu.Item href="accueilClient.html" style={{ marginRight: '15px'}}>Accueil</Menu.Item>
          <Menu.Item href="profilClient.html" style={{ marginRight: '15px'}}>Profil</Menu.Item>
          <Menu.Item href="historiqueRdvClient.html" style={{ marginRight: '15px'}}>Historique</Menu.Item>
          <Menu.Item href="prochainRdvClient.html" style={{ marginRight: '15px'}}>A venir</Menu.Item>
          <Menu.Item href="coiffeurFavoris.html">Favoris</Menu.Item>
          {!isLoggedIn && <Menu.Item> <Button color='blue' circular onClick={handleLogin}> Connexion </Button></Menu.Item>}
          {isLoggedIn && <Menu.Item> <Button color='red' circular onClick={handleLogout}> Deconnexion</Button></Menu.Item>}
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default ClientNavbar;
