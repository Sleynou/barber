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

router.put('/modifierSalon', checkBlacklist, async (req, res) => {
    try {
        const { UsernameSalon, nomSalon, telephoneSalon, adresse, bio} = req.body;
        
        // Vérifier si le UsernameCoiffeur fourni existe dans la base de données.
        const existingSalon = await db('SalonCoiffure').where({ UsernameSalon }).first();
        if (!existingSalon) {
            return res.status(404).json({ error: "Le salon coiffure n'existe pas" });
        }

        // Modifier les données du(e la) coiffeur-euse
        await db('SalonCoiffure').where({ UsernameSalon}).update({ nomSalon, telephoneSalon, adresse, bio });

        res.status(200).json({ message: ' Salon modifié avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la modification du Salon' });
    }
});

module.exports = router