const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('../db'); // Importa el módulo de conexión a la base de datos
app.use(bodyParser.json())
const router = express.Router()
app.use(bodyParser.json())
<<<<<<< HEAD
const checkBlacklist = require('./checkBlacklist')
=======
const checkBlacklist = require('../checkBlacklist')
>>>>>>> d75c357efa16d55ef0fd38f3faf8568396aacfc4

router.put('/modifierService', checkBlacklist, async (req, res) => {
    try {
        const { idService, idSalon, nom, numTranches, prix } = req.body;
        
        // Verificar si el servicio con el ID proporcionado existe en la base de datos
        const existingService = await db('Services').where({ idService }).first();
        if (!existingService) {
            return res.status(404).json({ error: "Le service n'existe pas" });
        }

        // Modificar los datos del servicio
        await db('Services').where({ idService }).update({ idSalon, nom, numTranches, prix });

        res.status(200).json({ message: 'Service modifié avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la modification du service' });
    }
});

module.exports = router