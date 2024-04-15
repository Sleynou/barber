import React, { useState, useEffect } from 'react';
import { Container, Header, Segment, Grid, Image, Icon, Rating, Button } from 'semantic-ui-react';
import axios from 'axios';

const DetailsSalon = (props) => {
  const [salonDetails, setSalonDetails] = useState([]);

  useEffect(() => {
    const fetchSalonDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getSalonsparID', {
          params: {
            // id: props.match.params.id 
            id: 1
          }
        });
        setSalonDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erreur lors de l obtention de l info du Salon', error);
      }
    };

    fetchSalonDetails();
  }, []); 
 

  return (
    <Container style={{ marginTop: '9em', marginBottom: '8em' }}>
      {salonDetails.hasOwnProperty('salon') && (
        <>
          <Segment style={{ borderRadius: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)'}}>
            <Grid>
            <Grid.Column width={16}>
                <Header as="h1" textAlign="center" style={{ fontSize: '5em', marginBottom:'0.5em', marginTop:'0.5em'}}>{salonDetails.salon[0].nomSalon}</Header>
            </Grid.Column>

              <Grid.Column width={11}>
                <Image style={{borderRadius: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}} src={URL.createObjectURL(new Blob([new Uint8Array(salonDetails.salon[0].photoProfil.data)]))}/>
                <Header as="h1" textAlign='left'>Description</Header>
                <p style={{textAlign: 'left', fontSize:'1.3em'}}> {salonDetails.salon[0].bio} </p>
              </Grid.Column>

              <Grid.Column width={5} textAlign='left'>
                <Header as="h1" style={{marginBottom: '1em'}}>Information du Salon</Header>
                <p style={{marginBottom: '2em'}}><Icon name='clock'/> <b>Horaire Aujourd'hui:</b> { salonDetails.horaire.length > 0 ? salonDetails.horaire[0].Ouverture + '-' +  salonDetails.horaire[0].Fermeture : "Fermé aujourd'hui"}</p>
                <p style={{marginBottom: '2em'}}><Icon name='mail' /> <b>Email:</b> {salonDetails.salon[0].Email}</p>
                <p style={{marginBottom: '2em'}}><Icon name='phone' /> <b>Telephone:</b> {salonDetails.salon[0].telephoneSalon}</p>
                <p style={{marginBottom: '2em'}}><Icon name='map marker alternate' /> <b>Adresse:</b> {salonDetails.salon[0].adresse}</p>
                <Button color='blue' circular > Prendre RDV </Button>
                <Button color='red' circular > Ajouter à mes Favoris </Button>
              </Grid.Column>

              <Grid.Column width={16} textAlign='left'>
                <Header as="h1">Images</Header>
                <Grid stackable columns={5}>
                    {salonDetails.photos.map((photo, index) => {
                        const blob = new Blob([new Uint8Array(photo.picture.data)])
                        const url = URL.createObjectURL(blob)

                        return(
                            <Grid.Column key={index}>
                                <Image style={{height:'200px', borderRadius: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}} src={url} fluid />
                            </Grid.Column>
                        )
                })}
                </Grid>
                
              </Grid.Column>

              <Grid.Column width={16} textAlign='left'>
                <Header as="h1">Reviews</Header>
                {salonDetails.reviews.map((review, index) => (
                    <div key={index} style={{ marginBottom: '2em' }}>
                        <Rating icon='star' rating={review.etoiles} maxRating={5} disabled />
                        <p>{review.commentaire}</p>
                    </div>
                ))}
              </Grid.Column>

            </Grid>
          </Segment>
        </>
      )}
    </Container>
  );
};

export default DetailsSalon;
