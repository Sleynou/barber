const express = require('express');
const router = express.Router();
const db = require('../db');

router.put('/ModifierDispoCoiffeur', async (req,res) =>{
    try{
        const {idDispoC, debutShift, finShift, PauseDebut, PauseFin} = req.body

        const verifierDispoC = await db.select().from('DisponibiliteCoiffeur').where({idDispoC: idDispoC})

        if(verifierDispoC.length === 0){
            return res.status(400).json({ message: 'Le dispoC n existe pas' });
        }

        await db('DisponibiliteCoiffeur').update({debutShift, finShift, PauseDebut, PauseFin}).where({idDispoC})

        res.status(200).json({ message: "Dispo mise a jour  avec succes" });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de l ajout de la dispo' });
    }
})

module.exports = router