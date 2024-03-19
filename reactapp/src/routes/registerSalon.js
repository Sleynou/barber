const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const db = require('./db')
const secretKey = 'your-secret-key'
const app = express()


router.post('/registerSalon', async (req, res) =>{

    try{
        const {IDSalon, NomSalon,TelephoneSalon, Adresse, Bio, Email, MotDePasse } =req.body
        const user = await getUserSalonByUsername(IDSalon)
        if (user){
            return res.status(400).json({ message: 'Le client existe deja' })    
        }

        const hashedPassword = await bcrypt.hash(MotDePasse, 10)
        await insertUserSalon(IDSalon, NomSalon,TelephoneSalon, Adresse, Bio, Email, hashedPassword )

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

async function insertUserSalon(IDSalon, NomSalon,TelephoneSalon, Adresse, Bio, Email, MotDePasse ) {
    try {
      await db('SalonCoiffure').insert({ IDSalon, NomSalon,TelephoneSalon, Adresse, Bio, Email, MotDePasse })
    } catch (error) {
      console.error('Erreur au moment de l`insertion:', error)
    }
}