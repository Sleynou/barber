const express = require('express');
const db = require('../db');
const router = express.Router();
const checkBlacklist = require('./checkBlacklist');

// Route permettant aux utilisateurs salon coiffure de récupérer la liste des avis enregistrés avec leurs détails."
router.get('/voirAvisParidSalonCoiffure',checkBlacklist, async (req, res) => {
  try {
    const { idSalonCoiffure } = req.body; 
    const listeAvis = await db('Avis').select('*').where({ idSalonCoiffure: idSalonCoiffure }); 
    res.send(listeAvis);
  } catch (error) {
    console.error('Error al recuperar los datos de la base de datos:', error);
    res.status(500).send('Error al recuperar los datos de la base de datos');
  }
});

module.exports = router;