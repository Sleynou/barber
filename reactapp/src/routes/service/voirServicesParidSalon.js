const express = require('express');
const db = require('../db');
const router = express.Router();
<<<<<<< HEAD
const checkBlacklist = require('./checkBlacklist');
=======
const checkBlacklist = require('../checkBlacklist')
>>>>>>> d75c357efa16d55ef0fd38f3faf8568396aacfc4

// Ruta que permite a los usuarios recuperar la lista de servicios registrados con sus detalles.
router.get('/voirServicesParidSalon',checkBlacklist, async (req, res) => {
  try {
    const { idSalon } = req.body; // Corregido para obtener idSalon de req.body
    const services = await db('Services').select('*').where({ idSalon: idSalon }); // Corregido para usar la condición adecuada
    res.send(services);
  } catch (error) {
    console.error('Error al recuperar los datos de la base de datos:', error);
    res.status(500).send('Error al recuperar los datos de la base de datos');
  }
});

module.exports = router;