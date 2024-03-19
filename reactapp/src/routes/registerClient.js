
const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const db = require('./db')
const secretKey = 'your-secret-key'
const app = express()


router.post('/register', async (req, res) =>{

    try{
        const {IDclient, PrenomClient, NomClient, Email, MotDePasse } =req.body
        const user = await getUserClientByUsername(IDclient)
        if (user){
            return res.status(400).json({ message: 'Le client existe deja' })    
        }

        const hashedPassword = await bcrypt.hash(MotDePasse, 10)
        await insertUserClient(IDclient, PrenomClient, NomClient, Email, hashedPassword )

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'An error occurred' })

    }



})

async function getUserClientByUsername(IDclient) {
    try{
        const user = await db('Client').where({IDclient}).first()
        return user

    } catch(error) {
        console.error(error)

    }
}

async function insertUserClient (IDclient, PrenomClient, NomClient, Email, MotDePasse) {
    try {
      await db('Client').insert({ IDclient, PrenomClient, NomClient, Email, MotDePasse })
    } catch (error) {
      console.error('Erreur au moment de l`insertion:', error)
    }
}