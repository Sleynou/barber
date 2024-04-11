import React, { useState, useEffect  } from 'react';
import { Container, Header, Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';
import { NavLink  } from 'react-router-dom';


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
        <Container style={{ marginTop: '8em', width: '100%' }}>
            <Header as="h1" textAlign="center" style={{ fontSize: '8em' }}>Salons de Coiffure</Header>
            <Card.Group  centered style={{ marginTop: '5em', marginBottom: '3em' }}>
                {salons.map((salon, index) => {
                     const blob = new Blob([new Uint8Array(salon.photoProfil.data)])
                     const url = URL.createObjectURL(blob)
 
                     return (
                        <NavLink  to={`/getDetailsSalon?id=${salon.idSalon}`} key={salon.idSalon}>
                            <Card key={salon.idSalon} style={{width: '550px', height:'400px', marginRight:'3em', marginBottom: '7em', boxShadow: '0 4px 8px rgba(0, 0, 0, .5)'}} >
                                
                                <Image src={url} style={{height: '350px'}} />

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
                        </NavLink >
                     )
                })}
            </Card.Group>
        </Container>
    );
};

export default HomeClient;
