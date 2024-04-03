const express = require('express');
const router = express.Router();
const db = require('../db');
<<<<<<< HEAD
const checkBlacklist = require('../checkBlacklist')

router.put('/ModifierDispoSalon',checkBlacklist, async (req,res) =>{
=======

router.put('/ModifierDispoSalon', async (req,res) =>{
>>>>>>> d75c357efa16d55ef0fd38f3faf8568396aacfc4
    try{
        const {idDispoS, dateDispo, ouverture, fermeture} = req.body

        const verifierDispoS = await db.select().from('DisponibiliteSalon').where({idDispoS})

        if(verifierDispoS.length === 0){
            return res.status(400).json({ message: 'Le dispoS n existe pas' });
        }

        await db('DisponibiliteSalon').update({dateDispo, ouverture, fermeture}).where({idDispoS})

        res.status(200).json({ message: "Dispo mise a jour  avec succes" });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de l ajout de la dispo' });
    }
})

module.exports = router