const express = require('express');
const router = express.Router();
const db = require('../db'); 
const bcrypt = require('bcryptjs')

router.post('/registerSalon', async (req, res) => {
    try {
        const { UsernameSalon, nomSalon, telephoneSalon, adresse, bio, MotDePasse } = req.body;
        const user = await getUserSalonByUsername(UsernameSalon);
        
        if (user) {
            return res.status(400).json({ message: 'El username ya existe' });
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(MotDePasse, 10)

        await insertUserSalon(UsernameSalon, nomSalon, telephoneSalon, adresse, bio, hashedPassword);
        res.status(200).json({ message: 'Salon registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error' });
    }
});

async function getUserSalonByUsername(UsernameSalon) {
    try {
        const user = await db('SalonCoiffure').where({ UsernameSalon }).first()
        return user
      } catch (error) {
        console.error(error)
        throw new Error({ message: 'Erreur lors de la récupération des données de la base de données' })
      }
}

async function insertUserSalon(UsernameSalon, nomSalon, telephoneSalon, adresse, bio, MotDePasse) {
    try {
        await db('SalonCoiffure').insert({ UsernameSalon, nomSalon, telephoneSalon, adresse, bio, MotDePasse })
      } catch (error) {
        console.error('Erreur lors de l\'insertion de l\'utilisateur dans la base de données:', error)
        throw new Error({ message: 'Erreur lors de l\'insertion de l\'utilisateur dans la base de données' })
      }

}

module.exports = router;