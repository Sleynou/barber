const express = require('express');
const router = express.Router();
const db = require('../db');
<<<<<<< HEAD
const checkBlacklist = require('../checkBlacklist')

router.post('/AjouterDispoCoiffeur',checkBlacklist ,async (req,res) =>{
=======

router.post('/AjouterDispoCoiffeur', async (req,res) =>{
>>>>>>> d75c357efa16d55ef0fd38f3faf8568396aacfc4
    try{
        const {idCoiffeur, idDispoS, debutShift, finShift, PauseDebut, PauseFin} = req.body

        const verifierDispoC = await db.select().from('DisponibiliteCoiffeur').where({debutShift: debutShift, finShift: finShift})

        if(!verifierDispoC.length){
            return res.status(400).json({ message: 'La dispo existe deja' });
        }

        await db('DisponibiliteCoiffeur').insert({idCoiffeur, idDispoS, debutShift, finShift, PauseDebut, PauseFin})

        res.status(200).json({ message: "Dispo ajoutee avec succes" });
    } catch(error){
        console.error("Erreur", error);
        res.status(500).json({ error: 'Erreur lors de l ajout de la dispo' });
    }
})

module.exports = router