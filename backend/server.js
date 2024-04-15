const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require("cors");
const port = 3000

//Routes Client
const registerClient = require('./routes/client/registrerClient')
const loginClient = require('./routes/client/loginClient')
const modifierClient = require('./routes/client/modifierClient')
const logoutClient = require('./routes/client/logoutClient')
const deleteClient = require('./routes/client/deleteClient')
const getClientparID = require('./routes/client/getClientparId')

// Routes Salon
const registerSalon = require('./routes/salonCoiffure/registrerSalon')
const loginSalon = require('./routes/salonCoiffure/loginSalon')
const modifierSalon = require('./routes/salonCoiffure/modifierSalon')
const logoutSalon = require('./routes/salonCoiffure/logoutSalon')
const getSalons = require('./routes/salonCoiffure/getSalonCoiffure')
const getDetailSalon = require('./routes/salonCoiffure/getSalonparId')

// Routes Coiffeur
const registerCoiffeur = require('./routes/coiffeur/registrerCoiffeur')
const loginCoiffeur = require('./routes/coiffeur/loginCoiffeur')
const modifierCoiffeur = require('./routes/coiffeur/modifierCoiffeur')
const voirCoiffeurParIDSalon = require('./routes/coiffeur/voirCoiffeurParIDSalon')
const logoutCoiffeur = require('./routes/coiffeur/logoutCoiffeur')
const deleteCoiffeur = require('./routes/coiffeur/deleteCoiffeur')

// Routes Services
const enregistrerService = require('./routes/service/enregistrerService')
const modifierService = require('./routes/service/modifierService')
const deleteService = require('./routes/service/deleteService')
const voirServicesParidSalon = require('./routes/service/voirServicesParidSalon') 

// Routes Avis
const enregistrerAvis = require('./routes/avis/enregistrerAvis')
const voirAvisParidSalonCoiffure = require('./routes/avis/voirAvisParidSalonCoiffure')

// Routes SalonFavoris
const enregistrerSalonFavoris = require('./routes/SalonFavoris/enregistrerSalonFavoris')
const voirSalonFavorisParidClient = require('./routes/SalonFavoris/voirSalonFavorisParidClient')
const deleteSalonFavorisParidClientidSalon = require('./routes/SalonFavoris/deleteSalonFavorisParidClientidSalon')

//Routes RendezVous
const consulterRdvClient = require('./routes/rendezVous/consulterRdvClient')
const consulterRdvCoiffeur = require('./routes/rendezVous/consulterRdvCoiffeur')
const consulterRdvCSalon = require('./routes/rendezVous/consulterRdvSalon')
const modifierRendezVous = require('./routes/rendezVous/modiferRendezVous')
const prendreRendezVous = require('./routes/rendezVous/prendreRendezVous')

// Routes DispoCoiffeur
const ajouterDispoCoiffeur = require('./routes/disponibiliteCoiffeur/ajouterDispoCoiffeur')
const consulterDispoCoiffeur = require('./routes/disponibiliteCoiffeur/consulterDispoCoiffeur')
const deleteDispoCoiffeur = require('./routes/disponibiliteCoiffeur/deleteDispoCoiffeur')
const modifierDispoCoiffeur = require('./routes/disponibiliteCoiffeur/modifierDispoCoiffeur')

// Routes Dispo Salon
const ajouterDispoSalon = require('./routes/disponibiliteSalon/ajouterDispoSalon')
const consulterDipoSalon = require('./routes/disponibiliteSalon/consulterDipoSalon')
const deleteDispoSalon = require('./routes/disponibiliteSalon/deleteDispoSalon')
const modifierDiposSalon = require('./routes/disponibiliteSalon/modifierDiposSalon')

const imageUpload = require('./imageUpload')
const getImageClient = require('./getImageClient')

const corsOrigin = 'http://localhost:3001';
app.use(cors({
  origin:[corsOrigin],
  methods:['GET','POST', 'PUT', 'DELETE'],
  credentials: true 
})); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', imageUpload)
app.use('/', getImageClient)

app.use('/', registerClient)
app.use('/', loginClient)
app.use('/', modifierClient)
app.use('/', logoutClient)
app.use('/', deleteClient)
app.use('/', getClientparID)


app.use('/', registerSalon)
app.use('/', loginSalon)
app.use('/', modifierSalon)
app.use('/', logoutSalon)
app.use('/', getSalons)
app.use('/', getDetailSalon)

app.use('/', registerCoiffeur)
app.use('/', loginCoiffeur)
app.use('/', modifierCoiffeur)
app.use('/', voirCoiffeurParIDSalon)
app.use('/', logoutCoiffeur)
app.use('/', deleteCoiffeur)

app.use('/', enregistrerService)
app.use('/', voirServicesParidSalon)
app.use('/', modifierService)
app.use('/', deleteService)

app.use('/', enregistrerAvis)
app.use('/', voirAvisParidSalonCoiffure)

app.use('/', enregistrerSalonFavoris)
app.use('/', voirSalonFavorisParidClient)
app.use('/',deleteSalonFavorisParidClientidSalon)


app.use('/', consulterRdvClient)
app.use('/', consulterRdvCoiffeur)
app.use('/', consulterRdvCSalon)
app.use('/', modifierRendezVous)
app.use('/', prendreRendezVous)

app.use('/', ajouterDispoCoiffeur)
app.use('/', consulterDispoCoiffeur)
app.use('/', deleteDispoCoiffeur)
app.use('/', modifierDispoCoiffeur)

app.use('/', ajouterDispoSalon)
app.use('/', consulterDipoSalon)
app.use('/', deleteDispoSalon)
app.use('/', modifierDiposSalon)

app.listen(port, () => {
    console.log(`Serveur s'exécutant sur le port ${port}`)
  })
  