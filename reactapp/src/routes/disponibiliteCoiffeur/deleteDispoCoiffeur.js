const express = require('express');
const router = express.Router();
const db = require('../db');
<<<<<<< HEAD
const checkBlacklist = require('../checkBlacklist')

router.delete('/DeleteDispoCoiffeur', checkBlacklist ,async (req,res) =>{
=======

router.delete('/DeleteDispoCoiffeur', async (req,res) =>{
>>>>>>> d75c357efa16d55ef0fd38f3faf8568396aacfc4
    try{
        const {idDispoC} = req.body

        const verifierDispoC = await db.select().from('DisponibiliteCoiffeur').where({ idDispoC})

        if(verifierDispoC.length === 0){
            return res.status(400).json({ message: 'Le dispoC n existe pas' });
        }

        await db('DisponibiliteCoiffeur').delete().where({idDispoC})

        res.status(200).json({ message: "Dispo effacee  avec succes" });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de la supression de la dispo' });
    }
})

module.exports = router