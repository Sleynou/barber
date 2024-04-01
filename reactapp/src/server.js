const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//Routes Client
const registerClient = require('./routes/client/registerClient')
const loginClient = require('./routes/client/loginClient')
const modifierClient = require('./routes/client/modifierClient')
const logoutClient = require('./routes/client/logoutClient')
const deleteClient = require('./routes/client/deleteClient')

// Routes Salon
const registerSalon = require('./routes/salonCoiffure/registerSalon')
const loginSalon = require('./routes/salonCoiffure//loginSalon')
const modifierSalon = require('./routes/salonCoiffure//modifierSalon')
const logoutSalon = require('./routes/salonCoiffure//logoutSalon')

// Routes Coiffeur
const registerCoiffeur = require('./routes/coiffeur/registerCoiffeur')
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

// Routes CoiffeurFavoris
const enregistrerCoiffeurFavoris = require('./routes/coiffeurFavoris/enregistrerCoiffeurFavoris')
const voirCoiffeurFavorisParidClient = require('./routes/coiffeurFavoris/voirCoiffeurFavorisParidClient')
const deleteCoiffeurFavorisParidClientidCoiffeur = require('./routes/coiffeurFavoris/deleteCoiffeurFavorisParidClientidCoiffeur')

//Routes RendezVous
const consulterRdvClient = require('./routes/rendezVous/consulterRdvClient')
const consulterRdvCoiffeur = require('./routes/rendezVous/consulterRdvCoiffeur')
const consulterRdvCSalon = require('./routes/rendezVous/consulterRdvCSalon')
const modifierRendezVous = require('./routes/rendezVous/modifierRendezVous')
const prendreRendezVous = require('./routes/rendezVous/consulterRdvClient')

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

app.use(bodyParser.json())

app.use('/', registerClient)
app.use('/', loginClient)
app.use('/', modifierClient)
app.use('/', logoutClient)
app.use('/', deleteClient)

app.use('/', registerSalon)
app.use('/', loginSalon)
app.use('/', modifierSalon)
app.use('/', logoutSalon)

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

app.use('/', enregistrerCoiffeurFavoris)
app.use('/', voirCoiffeurFavorisParidClient)
app.use('/',deleteCoiffeurFavorisParidClientidCoiffeur)


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
  