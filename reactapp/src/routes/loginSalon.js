const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const db = require('./db')
const secretKey = 'your-secret-key'
const app = express()

// Route de connexion
app.post('/loginSalon', async (req, res) => {
    try {
      const { IDSalon, MotDePass } = req.body
  
      // Récupérer l'utilisateur depuis la base de données
      const user = await getUserSalonByUsername(IDSalon)
      if (!user) {
        return res.status(401).json({ message: 'User not found' })
      }
  
      // Vérifier le mot de passe
      if (!(await bcrypt.compare(MotDePass, user.MotDePass))) {
        return res.status(401).json({ message: 'Invalid password' })
      }
  
      // Générer un token JWT
      const expiresInSeconds = 12000
      const token = jwt.sign({ IDSalon }, secretKey, { expiresIn: expiresInSeconds })
  
      // Obtenir la date actuelle
      const now = new Date()
      // Calculer la date d'expiration
      const expirationDate = new Date(now.getTime() + expiresInSeconds * 1000)
  
      // Formatear la fecha y la hora de expiración
      const expirationTime = expirationDate.toLocaleTimeString()
      const expirationDateTime = expirationDate.toLocaleDateString() + ' ' + expirationTime
  
      res.json({ message: 'Login successful', token, expiresIn: expiresInSeconds, expirationTime: expirationDateTime })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'An error occurred' })
    }
  })


  async function getUserSalonByUsername(IDSalon) {
    try{
        const user = await db('SalonCoiffure').where({IDSalon}).first()
        return user

    } catch(error) {
        console.error(error)

    }
}