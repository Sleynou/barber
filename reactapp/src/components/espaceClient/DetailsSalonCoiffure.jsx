import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Header, Segment, Grid, Image, Icon, Rating, Button, Form, Label, TextArea } from 'semantic-ui-react';
import axios from 'axios';

const DetailsSalon = () => {
  const [salonDetails, setSalonDetails] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [etoilesClient, setEtoilesClient] = useState(0)
  const [commentaireClient, setCommentaireClient] = useState('')
  const [page, setPage] = useState(1);
  const reviewsPerPage = 5;

  const idUser = sessionStorage.getItem('idUtilisateur');
  console.log(idUser);
  const { salon_id } = useParams();
  
  useEffect(() => {
    const fetchSalonDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getSalonsparID', {
          params: {
            id: salon_id
          }
        });
        setSalonDetails(response.data);
        console.log(response.data);

        const favoriteResponse = await axios.get('http://localhost:3000/voirsalonFavorisParidclient', {
          params: {
            idClient: idUser,
          }
        });
        console.log(favoriteResponse.data);
        favoriteResponse.data.forEach(element => {
          if(element.idSalon === parseInt(salon_id)){
              setIsFavorite(true)
              console.log(isFavorite);
          }
        });
      } catch (error) {
        console.error('Erreur lors de l obtention de l info du Salon', error);
      }
    };

    fetchSalonDetails();
  }, [salon_id]);
  
  const handleToggleFavorite = async () => {
    try {
      if (isFavorite) {
        await axios.delete('http://localhost:3000/deleteSalonFavorisParidClientidSalon', {
          params: {
            idClient: idUser,
            idSalon: parseInt(salon_id)
          }
        });
      } else {
        await axios.post('http://localhost:3000/enregistrerSalonFavoris', {
          idClient: idUser,
          idSalon: salon_id
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleDonnerAvis = async () => {
    try {
      console.log(etoilesClient);
        await axios.post('http://localhost:3000/enregistrerAvis', {
          // idClient, idSalonCoiffure, etoiles, commentaire
          idClient: idUser,
          idSalonCoiffure: salon_id,
          etoiles: etoilesClient,
          commentaire: commentaireClient 
        });
        window.location.reload()
      } catch (error) {
      console.error('Erreur au moment de faire un commentaire', error);
    }
  };

  const getCurrentReviews = () => {
    const startIndex = (page - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return salonDetails.reviews.slice(startIndex, endIndex);
  };

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
                <Button color='red' circular onClick={handleToggleFavorite}>
                  {isFavorite ? 'Enlever des favoris' : 'Ajouter à mes Favoris'}
                </Button>
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
                <Button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  icon='chevron left'
                  circular
                />
                <Button
                  disabled={salonDetails.reviews.length <= page * reviewsPerPage}
                  onClick={() => setPage(page + 1)}
                  icon='chevron right'
                  circular
                  style={{marginBottom: "2em"}}
                />
                {getCurrentReviews().map((review, index) => (
                  <div key={index} style={{ marginBottom: '2em' }}>
                    <Rating icon='star' rating={review.etoiles} maxRating={5} disabled />
                    <p>{review.commentaire}</p>
                  </div>
                ))}
                
                <Form style={{marginBottom: "2em"}}>
                  <Form.Field>
                    <Label>Notez le salon</Label>
                    <Rating icon='star' maxRating={5} onRate = {(e, {rating}) => {setEtoilesClient(rating)}} />
                  </Form.Field>
                  <Form.Field>
                    <Label>Commentaire</Label>
                    <TextArea onChange = {(e) => {setCommentaireClient(e.target.value)}}/>
                  </Form.Field>
                  <Button color='blue' circular onClick={handleDonnerAvis}>Donner votre avis</Button>
                </Form>
              </Grid.Column>

            </Grid>
          </Segment>
        </>
      )}
    </Container>
  );
};

export default DetailsSalon;
