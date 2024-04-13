import React, { useState, useEffect  } from 'react';
import { Container, Header, Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';

const HomeClient = () => {
    const [favorited, setFavorited] = useState(false);
    const [salons, setSalons] = useState([]);

    const toggleFavorite = () => {
        setFavorited(!favorited);
    };

    useEffect(() => {
        const fetchSalons = async () => {
          try {
            const response = await axios.get('http://localhost:3000/getSalons');
            setSalons(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error lors de l obtention des salons:', error);
          }
        };
    
        fetchSalons();
    }, []);

    return (
        <Container style={{ marginTop: '8em' }}>
            <Header as="h1" textAlign="center" style={{ fontSize: '8em' }}>Salon de Coiffeurs</Header>
            <Card.Group itemsPerRow={3} centered style={{ marginTop: '3em', marginBottom: '3em' }}>
                {salons.map((salon, index) => {
                     const blob = new Blob([new Uint8Array(salon.photoProfil.data)])
                     const url = URL.createObjectURL(blob)
 
                     return (
                         <Card key={index} style={{marginBottom: '5em', boxShadow: '0 4px 8px rgba(0, 0, 0, .5)'}} >
                         <Image src={url} style={{height: '230px'}} />
                         <Icon
                             name="circle"
                             color="blue"
                             size="big"
                             style={{
                                 position: 'absolute',
                                 top: '5px',
                                 right: '2px',
                                 zIndex: '1' 
                             }}
                         />
 
                         <Icon
                             name={favorited ? 'heart' : 'heart outline'}
                             color={favorited ? 'red' : 'black'}
                             style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', zIndex: '2' }}
                             onClick={toggleFavorite}
                         />
                         <Card.Content>
                             <Card.Header>{salon.nomSalon}</Card.Header>
                         </Card.Content>
                     </Card>
                     )
                })}
            </Card.Group>
        </Container>
    );
};

export default HomeClient;
