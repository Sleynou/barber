const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/prendreRDV', async (req,res) =>{
    try{
        const {idRDV, idSalonCoiffure, idClient, idService, idCoiffeur, dateRDV, heure} = req.body

        const verifierRDV = await db.select().from('RendezVous').where({dateRDV: dateRDV, heure: heure})

        if(!verifierRDV.length){
            return res.status(400).json({ message: 'Le rdv existe deja' });
        }

        await db('RendezVous').insert({idRDV, idSalonCoiffure, idClient, idService, idCoiffeur, dateRDV, heure})

        res.status(200).json({ message: ' Rdv pris avec succès' });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de l insertion du rdv' });
    }
})

module.exports = router