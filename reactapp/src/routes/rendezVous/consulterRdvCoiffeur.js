const express = require('express');
const router = express.Router();
const db = require('../db');
const checkBlacklist = require('../checkBlacklist')

router.get('/RDVCoiffeur',checkBlacklist, async (req,res) =>{
    try{
        const {idCoiffeur} = req.body

        const verifierCoiffeur = await db.select().from('Coiffeur').where({iDCoiffeur: idCoiffeur})

        if(verifierCoiffeur.length === 0){
            return res.status(400).json({ message: 'Le coiffeur n existe pas' });
        }

        const resultats = await db('RendezVous').select().where({idCoiffeur: idCoiffeur})

        res.status(200).json({ resultats });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de l consultation du rdv' });
    }
})

module.exports = router