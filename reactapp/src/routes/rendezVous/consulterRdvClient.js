const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/RDVclient', async (req,res) =>{
    try{
        const {iDClient} = req.body

        const verifierClient = await db.select().from('Client').where({IDclient: iDClient})

        if(verifierClient.length === 0){
            return res.status(400).json({ message: 'Le client n existe pas' });
        }

        const resultats = await db('RendezVous').select().where({idClient: iDClient})

        res.status(200).json({ resultats });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de l consultation du rdv' });
    }
})

module.exports = router