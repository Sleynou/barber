const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa el módulo de conexión a la base de datos
const bcrypt = require('bcryptjs')

router.post('/registerClient', async (req, res) => {
    try {
        const { Email, PrenomClient, NomClient, MotDePasse } = req.body;
        const user = await getUserClientByUsername(Email);
        
        if (user) {
            return res.status(400).json({ message: 'El username ya existe' });
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(MotDePasse, 10)

        await insertUserClient(PrenomClient, NomClient, Email, hashedPassword);
        res.status(200).json({ message: 'Client register avec succes' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'error' });
    }
});

async function getUserClientByUsername(Email) {
    try {
        const user = await db('Client').where({ Email }).first()
        return user
      } catch (error) {
        console.error(error)
        throw new Error({ message: 'Erreur lors de la récupération des données de la base de données' })
      }
}

async function insertUserClient(PrenomClient, NomClient, Email, MotDePasse) {
    try {
        await db('Client').insert({ PrenomClient, NomClient, Email, MotDePasse })
      } catch (error) {
        console.error('Erreur lors de l\'insertion de l\'utilisateur dans la base de données:', error)
        throw new Error({ message: 'Erreur lors de l\'insertion de l\'utilisateur dans la base de données' })
      }

}

module.exports = router;