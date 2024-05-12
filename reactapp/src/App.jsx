import 'semantic-ui-css/semantic.min.css';
import ClientFinal from './components/espaceClient/ClientFinal';
import CoiffeurFinal from './components/espaceCoiffeur/CoiffeurFinal'
import React, { useState } from 'react'
import { Button, Card, Icon, Grid } from 'semantic-ui-react';

function App() {
  const [userType, setUserType] = useState(null);
  
  return (
    <div className="App">
    {userType ? (
      <>
        {userType === 'client' && (
          <div>
              <ClientFinal />
              <Button
                circular
                onClick={() => setUserType(null)}
                size='massive'
                color='blue'
                style={{marginTop: '1em', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
              >
              Je suis un Coiffeur/Salon
              </Button>
          </div>
            

        )}
        {userType === 'coiffeur' && (
          <div>
               <CoiffeurFinal />
               <Button
                circular
                onClick={() => setUserType(null)}
                size='massive'
                color='blue'
                style={{ marginTop: '1em', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
              >
              Je suis un Client/Salon
              </Button>
          </div>
         
        )}
      </>
    ) : (
      <div style={{backgroundColor: '#f0f8ff',}}>
         <main style={{ 
            padding: '2em', 
            maxWidth: '800px', 
            margin: 'auto',
            height: '100vh'
          }}>
      <Grid stackable columns={1}>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Icon name='user' size='huge' />
              <Card.Header>Espace client</Card.Header>
              <Card.Description>
                <ul>
                  <li>Recherchez parmi les coiffures disponibles</li>
                  <li>Réservez votre rendez-vous en ligne</li>
                  <li>Des cheveux heureux, un sourire assuré, chez nous c'est garanti ! Alors foncez !</li>
                </ul>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button fluid color='blue' onClick={() => setUserType('client')}>Je suis un Client</Button>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Icon name='cut' size='huge' />
              <Card.Header>Espace coiffeur</Card.Header>
              <Card.Description>
                <ul>
                  <li>Offrez vos services de coiffure en salon</li>
                  <li>Consultez vos rendez-vous avec des clients</li>
                  <li>Gagnez des revenus supplémentaires tout en offrant un service personnalisé et de qualité</li>
                </ul>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button fluid color='green' onClick={() => setUserType('coiffeur')}>Je suis un Coiffeur</Button>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Icon name='building' size='huge' />
              <Card.Header>Espace salon</Card.Header>
              <Card.Description>
                <ul>
                  <li>Ajoutez votre salon de coiffure</li>
                  <li>Planifiez les horaires des employés</li>
                  <li>Gagnez du temps et de l'argent grâce aux divers services que nous apportons</li>
                </ul>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button fluid color='orange' onClick={() => setUserType('salon')}>Je suis un Salon</Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </main>
    </div>
    )}
  </div>
  );
}

export default App;
