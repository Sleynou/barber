import React, { useState, useEffect } from 'react';
import { Container, Grid, Header, Table,Form, Button, Message, Input, Label } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import './Calendar.css'
import axios from 'axios';

const ReservationsClient = () => {
    const [date, setDate] = useState(new Date());
    const [reservationsDate, setReservationsDate] = useState([]);
    const [reservationDetails, setReservationsDetails] = useState([]);
    const [editable, setEditable] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [dateAModifie, setDateAModifie] = useState('')
    const [heure, setHeure] = useState('')

    useEffect(() => {
      const fetchReservations = async () => {
        try {
          const response = await axios.get('http://localhost:3000/RDVclient', {
            params: {
              iDClient: 1
            }
          });
          if (response.data.resultats.length > 0) {
            const dates = response.data.resultats.map(rdv => rdv.dateRDV);
            setReservationsDate(dates);
            setReservationsDetails(response.data.resultats)
          }
          console.log(response.data);
        } catch (error) {
          console.error('Error lors de l obtention des salons:', error);
        }
      };
  
      fetchReservations();
    }, []);
  
    const toggleEditMode = () => {
      setEditable(!editable);
      setSuccessMessage('')
    };

    const handleDateChange = newDate => {
      setDate(newDate);
    };
    
    const handleModifier = async (idRDV) => {
        try {
          const response = await fetch('http://localhost:3000/modiferRDV', {
              method: 'put',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                idRDV,
                dateAModifie,
                heure
              })
          });

          if (response.ok) {
              console.log('[+] RDV modifier avec succes');
              setSuccessMessage('Votre Rendez Vous a ete Modifier avec succes !!!');
              setTimeout(() => {
                  setSuccessMessage('');
                  setEditable(!editable);
              }, 800);
          } else {
              console.error('Erreur dans la mise a jour du RDV');
          }
      } catch (error) {
          console.error('Error:', error);
      }
      };

    const handleAnnuler = async (idRDV ) => {
        try {
            const url = `http://localhost:3000/deleteRdvClient`; 

                const response = await fetch(url, {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      idRDV
                    })
                });
                if (response.ok) {
                    console.log('[+] RDV efface avec succes');
                } else {
                    console.error('Erreur lors de la supression des rdv', response);
                }
        } catch (error) {
            console.error('Error lors de la suppresion des rdv:', error);
        }
      };

    const tileContent = ({ date, view }) => {
      if (view === 'month') {
        const formattedDate = formatDate(date);
        if (reservationsDate.includes(formattedDate)) {
          return <div style={{ backgroundColor: 'green', width: '100%', height: '100%' }}></div>;
        }
      }
      return null;
    };
  
    const formatDate = date => {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    };
  
    const filteredReservations = reservationDetails.filter(r => formatDate(date) === r.dateRDV);
  
    return (
      <Container textAlign="center" style={{ marginTop: '6em', marginBottom: '6em' }}>
        <Header as="h1" textAlign="center" style={{ fontSize: '8em' }}>Reservations</Header>
        <Grid columns={2} style={{ marginTop: '2em' }}>
          <Grid.Row>
            <Grid.Column>
              <div className="calendar" style={{ display: 'inline-block' }}>
                <Calendar
                  onChange={handleDateChange}
                  value={date}
                  className="react-calendar"
                  tileContent={tileContent}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Details Reservations</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                
                <Table.Body>
                {filteredReservations.map((reservation, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Form>
                        <Form.Field>
                          <Label>Salon:</Label>
                          <Input value={reservation.nomSalon} disabled />
                        </Form.Field>
                        <Form.Field>
                          <Label>Coiffeur:</Label>
                          <Input value={`${reservation.PrenomCoiffeur} ${reservation.NomCoiffeur}`} disabled />
                        </Form.Field>
                        <Form.Field>
                          <Label>Service:</Label>
                          <Input value={reservation.nom} disabled />
                        </Form.Field>
                        <Form.Field>
                          <Label>Prix:</Label>
                          <Input value={reservation.prix} disabled />
                        </Form.Field>
                        <Form.Field>
                          <Label>Date:</Label>
                          <Input type='date' value={reservation.dateRDV} onChange={(e) => setDateAModifie(e.target.value)}  disabled={!editable} />
                        </Form.Field>
                        <Form.Field>
                          <Label>Heure:</Label>
                          <Input value={reservation.heure} onChange={(e) => setHeure(e.target.value)} disabled={!editable} />
                        </Form.Field>
                        <Form.Field>
                          <Label>Durée:</Label>
                          <Input value={reservation.duree} disabled />
                        </Form.Field>
                        {successMessage && <Message success>{successMessage}</Message>}
                        <Button circular color='blue' onClick={editable ? ()=> handleModifier : toggleEditMode(!editable)} >
                          {editable ? 'Terminé' : 'Modifier'}
                        </Button>
                        <Button circular color='red' style={{marginLeft: '1em'}} onClick={()=>{handleAnnuler(reservation.idRDV)}}> Annuler</Button>
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  };
  

export default ReservationsClient;
