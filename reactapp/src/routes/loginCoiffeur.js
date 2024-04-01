const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const app = express()
const db = require('./db'); // Importa el módulo de conexión a la base de datos
const secretKey = 'your-secret-key'
app.use(bodyParser.json())
const router = express.Router()


router.post('/loginCoiffeur', async (req, res) => {
    try {
      const { UsernameCoiffeur, MotDePasse } = req.body
      console.log(UsernameCoiffeur,MotDePasse)///////////////////////////////////////////////////////////////
  
      // Récupérer l'utilisateur depuis la base de données
      const user = await getUserCoiffeurByUsername(UsernameCoiffeur)
       console.log(user)////////////////////////////////////////////////////////////////////////////////////
      if (!user) {
        return res.status(401).json({ message: 'L\'utilisateur n\'a pas été trouvé' })
      }

      // Vérifier le mot de passe
      if (!(await bcrypt.compare(MotDePasse, user.MotDePasse))) {
        return res.status(401).json({ message: 'L\'utilisateur ou le mot de passe invalide(s)' })
      }
  
      // Générer un token JWT
      const expiresInSeconds = 12000
      const token = jwt.sign({ UsernameCoiffeur }, secretKey, { expiresIn: expiresInSeconds })
  
      // Obtenir la date actuelle
      const now = new Date()
      // Calculer la date d'expiration
      const expirationDate = new Date(now.getTime() + expiresInSeconds * 1000)
  
      // Formater la date y l'heure de expiration
      const expirationTime = expirationDate.toLocaleTimeString()
      const expirationDateTime = expirationDate.toLocaleDateString() + ' ' + expirationTime
  
      res.json({ message: 'Connexion réussie', token, expiresIn: expiresInSeconds, expirationTime: expirationDateTime })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Une erreur est survenue' })
    }
  })

async function getUserCoiffeurByUsername(UsernameCoiffeur) {
    try {
        const user = await db('Coiffeur').where({ UsernameCoiffeur }).first()
        return user
      } catch (error) {
        console.error(error)
        throw new Error({ message: 'Erreur lors de la récupération des données de la base de données' })
      }
}

module.exports = router;