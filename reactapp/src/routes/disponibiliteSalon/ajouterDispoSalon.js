const express = require('express');
const router = express.Router();
const db = require('../db');
<<<<<<< HEAD
const checkBlacklist = require('../checkBlacklist')

router.post('/AjouterDispoSalon', checkBlacklist ,async (req,res) =>{
=======

router.post('/AjouterDispoSalon', async (req,res) =>{
>>>>>>> d75c357efa16d55ef0fd38f3faf8568396aacfc4
    try{
        const {idSalon, dateDispo, ouverture, fermeture} = req.body

        const verifierDispoS = await db.select().from('DisponibiliteSalon').where({dateDispo, idSalon})

        if(!verifierDispoS.length){
            return res.status(400).json({ message: 'La dispo existe deja' });
        }

        await db('DisponibiliteSalon').insert({idSalon, dateDispo, ouverture, fermeture})

        res.status(200).json({ message: "Dispo ajoutee avec succes" });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de l ajout de la dispo' });
    }
})

module.exports = router