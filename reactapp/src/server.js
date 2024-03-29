const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const registerClient = require('./registerClient')
const loginClient = require('./loginClient')
const modifierClient = require('./modifierClient')
const logoutClient = require('./logoutClient')
const deleteClient = require('./deleteClient')

const registerSalon = require('./registerSalon')
const loginSalon = require('./loginSalon')
const modifierSalon = require('./modifierSalon')
const logoutSalon = require('./logoutSalon')

const registerCoiffeur = require('./registerCoiffeur')
const loginCoiffeur = require('./loginCoiffeur')
const modifierCoiffeur = require('./modifierCoiffeur')
const voirCoiffeurParIDSalon = require('./voirCoiffeurParIDSalon')
const logoutCoiffeur = require('./logoutCoiffeur')
const deleteCoiffeur = require('./deleteCoiffeur')

const enregistrerService = require('./enregistrerService')
const modifierService = require('./modifierService')
const deleteService = require('./deleteService')
const voirServicesParidSalon = require('./voirServicesParidSalon') // Ne marche pas


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

app.listen(port, () => {
    console.log(`Serveur s'exécutant sur le port ${port}`)
  })
  