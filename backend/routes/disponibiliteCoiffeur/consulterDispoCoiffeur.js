const express = require('express');
const router = express.Router();
const db = require('../db');
const  moment = require('moment');
const checkBlacklist = require('../checkBlacklist')

router.get('/DispoCoiffeur' ,async (req,res) =>{
    try{
        const {idCoiffeur} = req.query

        const verifierCoiffeur = await db.select().from('Coiffeur').where({iDCoiffeur: idCoiffeur})

        if(verifierCoiffeur.length === 0){
            return res.status(400).json({ message: 'Le coiffeur n existe pas' });
        }

        const resultats = await db('DisponibiliteCoiffeur').select().where({idCoiffeur: idCoiffeur})

        const today = moment().startOf('day')

        const resultatsFinaux = [];
        for (const row of resultats) {
            const idDispoS = row.idDispoS;
        
            const disponibiliteSalon = await db('DisponibiliteSalon')
                .select('DateDispo')
                .where({ idDispoS: idDispoS });
        
            const disponibiliteDate = moment(disponibiliteSalon[0].DateDispo)

            if (disponibiliteDate.isSameOrAfter(today, 'day')) {
                const resultatFinal = {
                  ...row, 
                  DateDispo: disponibiliteSalon[0].DateDispo
                };
                
                resultatsFinaux.push(resultatFinal);
              }
        }

        res.status(200).json({ resultatsFinaux });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de l consultation du dispoCoiffeur' });
    }
})

module.exports = router