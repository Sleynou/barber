const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const db = require('../db')
<<<<<<< HEAD
const checkBlacklist = require('./checkBlacklist')
=======
const checkBlacklist = require('../checkBlacklist')
>>>>>>> d75c357efa16d55ef0fd38f3faf8568396aacfc4
const router = express.Router()

router.post('/logoutSalon', checkBlacklist, async (req, res) => {
    try {
      const token = req.body.token
      await db('Blacklist').insert({ token })
      res.json({ message: 'Déconnexion réussie' })
    } catch (error) {
      console.error('Erreur lors de l\'insertion du token dans la base de données :', error)
      res.status(500).json({ error: 'Une erreur est survenue' })
    }
  })
  
  module.exports = router