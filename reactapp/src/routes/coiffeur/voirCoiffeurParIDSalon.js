const express = require('express');
const db = require('../db');
const router = express.Router();
const checkBlacklist = require('./checkBlacklist');

// Ruta que permite a los usuarios recuperar la lista de servicios registrados con sus detalles.
router.get('/voirCoiffeurParIDSalon',checkBlacklist, async (req, res) => {
  try {
    const { IDSalon } = req.body; // Corregido para obtener idSalon de req.body
    const listecoiffeurs = await db('Coiffeur').select('*').where({ IDSalon: IDSalon }); // Corregido para usar la condición adecuada
    res.send(listecoiffeurs);
  } catch (error) {
    console.error('Error al recuperar los datos de la base de datos:', error);
    res.status(500).send('Error al recuperar los datos de la base de datos');
  }
});

module.exports = router;