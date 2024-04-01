const express = require('express');
const db = require('./db');
const router = express.Router();
const checkBlacklist = require('./checkBlacklist');


router.get('/voirCoiffeurFavorisParidClient',checkBlacklist, async (req, res) => {
  try {
    const { idClient } = req.body;
    const listeCoiffeursFavoris = await db('CoiffeurFavoris').select('*').where({ idClient: idClient }); 
    res.send(listeCoiffeursFavoris);
  } catch (error) {
    console.error('Erreur lors de la récupération des données de la base de données:', error);
    res.status(500).send('Erreur lors de la récupération des données de la base de données ');
  }
});

module.exports = router;