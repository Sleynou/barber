const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa el módulo de conexión a la base de datos
const bcrypt = require('bcryptjs')

router.post('/registerCoiffeur', async (req, res) => {
    try {
        const { UsernameCoiffeur, IDSalon, PrenomCoiffeur, NomCoiffeur, PhotoCoiffeur, MotDePasse } = req.body;
        const user = await getUserCoiffeurByUsername(UsernameCoiffeur);
        
        if (user) {
            return res.status(400).json({ message: 'El username ya existe' });
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(MotDePasse, 10)

        await insertUserCoiffeur(UsernameCoiffeur, IDSalon, PrenomCoiffeur, NomCoiffeur, PhotoCoiffeur, hashedPassword);
        res.status(200).json({ message: 'Cliente registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error' });
    }
});

async function getUserCoiffeurByUsername(UsernameCoiffeur) {
    try {
        const user = await db('Coiffeur').where({ UsernameCoiffeur }).first()
        return user
      } catch (error) {
        console.error(error)
        throw new Error({ message: 'Erreur lors de la récupération des données de la base de données' })
      }
}

async function insertUserCoiffeur(UsernameCoiffeur, IDSalon, PrenomCoiffeur, NomCoiffeur, PhotoCoiffeur, MotDePasse) {
    try {
        await db('Coiffeur').insert({ UsernameCoiffeur, IDSalon, PrenomCoiffeur, NomCoiffeur, PhotoCoiffeur, MotDePasse })
      } catch (error) {
        console.error('Erreur lors de l\'insertion de l\'utilisateur dans la base de données:', error)
        throw new Error({ message: 'Erreur lors de l\'insertion de l\'utilisateur dans la base de données' })
      }

}

module.exports = router;