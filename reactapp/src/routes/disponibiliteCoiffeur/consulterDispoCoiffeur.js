const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/DispoCoiffeur', async (req,res) =>{
    try{
        const {idCoiffeur} = req.query

        const verifierCoiffeur = await db.select().from('Coiffeur').where({iDCoiffeur: idCoiffeur})

        if(verifierCoiffeur.length === 0){
            return res.status(400).json({ message: 'Le coiffeur n existe pas' });
        }

        const resultats = await db('DisponibiliteCoiffeur').select().where({idCoiffeur: idCoiffeur})

        res.status(200).json({ resultats });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de l consultation du dispoCoiffeur' });
    }
})

module.exports = router