import React, { useState, useEffect } from 'react';
import { Container, Grid, Header, Table,Form, Button, Message, Input, Label } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import './Calendar.css'
import axios from 'axios';

const DisponibiliteCoiffeur = () => {
  /*const [date, setDate] = useState(new Date());
  const [reservationsDate, setReservationsDate] = useState([]);
  const [reservationDetails, setReservationsDetails] = useState([]);
  const [editable, setEditable] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [dateAModifie, setDateAModifie] = useState('')
  const [heure, setHeure] = useState('')
  const [editedReservations, setEditedReservations] = useState([]);*/

  const [editable, setEditable] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [shiftdebut, setShiftDebut] = useState('');
  const [shiftfin, setShiftFin] = useState('');
  const [debutpause, setDebutPause] = useState('');
  const [finpause, setFinDebut] = useState('');
  const [date, setDate] = useState(new Date());
  // const [heure, setHeure] = useState('');
  // const [editedReservations, setEditedReservations] = useState([]);
  // const [dateAModifie, setDateAModifie] = useState('');
  // const [dispoDate, setdispoDate] = useState([]);
  const [disponibiliteDetails, setDisponibiliteDetails] = useState([]);

  useEffect(() => {
    const fetchDisponibilite = async () => {
      try {
        const response = await axios.get('http://localhost:3000/DispoCoiffeur', {
          params: {
            idCoiffeur: 1
          }
        });
        console.log(response.data);
        const datesDispo = response.data.resultats.map(res => res.DateDispo);
        setDisponibiliteDetails(datesDispo);
      } catch (error) {
        console.error('Erreur lors de l\'obtention des disponibilités:', error);
      }
    };

    fetchDisponibilite();
  }, []);

  // const toggleEditMode = () => {
  //   setEditable(!editable);
  //   setSuccessMessage('')
  // };

  const handleDateChange = newDate => {
    setDate(newDate);
  };
  
  // const handleModifier = async () => {
  //   /*const heureActuelle = heure.trim().length === 0 ? heureRDV : heure
  //   const dateActuelle = dateAModifie.trim().length === 0 ? dateRDV : dateAModifie*/

  //     try {
  //       const response = await fetch('http://localhost:3000/ModifierDispoCoiffeur', {
  //           method: 'put',
  //           headers: {
  //               'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({
  //             //idDispoC,
  //             debutShift: shiftdebut,
  //             finShift: shiftfin,
  //             PauseDebut: debutpause,
  //             PauseFin: finpause,
  //             //dateRDV: dateActuelle,
  //             //heure: heureActuelle
  //           })
  //       });

  //       if (response.ok) {
  //           console.log('[+] Votre disponibilité a été modifié avec succès!');
  //           setSuccessMessage('Votre disponibilité a été modifié avec succès!');
  //           setTimeout(() => {
  //               setSuccessMessage('');
  //               setEditable(false);
  //           }, 800);
  //           window.location.reload()
  //       } else {
  //           console.error('Erreur dans la mise a jour de la disponibilité');
  //       }
  //   } catch (error) {
  //       console.error('Error:', error);
  //   }
  //   };

  // const handleAnnuler = async (idDispoC) => {
  //     try {
  //         const url = `http://localhost:3000/DeleteDispoCoiffeur`; 
  //         const response = await fetch(url, {
  //             method: 'delete',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({
  //               idDispoC
  //             })
  //         });
  //         if (response.ok) {
  //             console.log('[+] Disponibilité supprimé avec succès!');
  //             window.location.reload()
  //         } else {
  //             console.error('Erreur lors de la supression de la disponibilité', response);
  //         }
  //     } catch (error) {
  //         console.error('Error lors de la suppresion de la disponibilité:', error);
  //     }
  // };
  
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      if (filteredDispo.some(dispo => dispo.DateDispo === formattedDate)) {
        // Si la date est parmi les dates de disponibilité, affichez un indicateur visuel dans le calendrier
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

  // const handleHeureChange = (index, value) => {
  //   const newEditedReservations = [...editedReservations];
  //   newEditedReservations[index] = { ...newEditedReservations[index],  heure: value === '' ? undefined : value };
  //   setEditedReservations(newEditedReservations);
  //   setHeure(value)
  // };

  // const handleDateChangeInput = (index, value) => {
  //   const newEditedReservations = [...editedReservations];
  //   newEditedReservations[index] = { ...newEditedReservations[index],  dateRDV: value === '' ? undefined : value };
  //   setEditedReservations(newEditedReservations);
  //   //console.log(filteredReservations[index].dateRDV);
  //   setDateAModifie(value)
  // };

  //const filteredReservations = reservationDetails.filter(r => formatDate(date) === r.dateRDV);
  const filteredDispo = disponibiliteDetails.filter(r => formatDate(date) === r.DateDispo);

  return (
    <Container textAlign="center" style={{ marginTop: '6em', marginBottom: '6em' }}>
      <Header as="h1" textAlign="center" style={{ fontSize: '8em' }}>Disponibilité</Header>
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
                  <Table.HeaderCell>Details Dispo</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              
              <Table.Body>
              {filteredDispo.map((disponibilite, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Form>

                      <Form.Field>
                        <Label>Début du Shift:</Label>
                        <Input value={disponibilite.debutShift} disabled />
                      </Form.Field>
                      <Form.Field>
                        <Label>Fin du Shift:</Label>
                        <Input value={disponibilite.finShift} disabled />
                      </Form.Field>
                      <Form.Field>
                        <Label>Début de la Pause:</Label>
                        <Input value={disponibilite.PauseDebut} disabled />
                      </Form.Field>
                      <Form.Field>
                        <Label>Fin de la Pause:</Label>
                        <Input value={disponibilite.PauseFin} disabled />
                      </Form.Field>
                      
                      {/*<Button circular color='blue' onClick={editable ? ()=>{handleModifier(reservation.idRDV, reservation.heure, reservation.dateRDV)} : toggleEditMode} >
                        {editable ? 'Terminé' : 'Modifier'}
                      </Button>
              <Button circular color='red' style={{marginLeft: '1em'}} onClick={()=>{handleAnnuler(reservation.idRDV)}}> Annuler</Button>*/}
                    </Form>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            </Table>
            {successMessage && <Message success>{successMessage}</Message>}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};


export default DisponibiliteCoiffeur;
