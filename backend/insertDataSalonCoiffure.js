const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const db = require('./routes/db.js')

const rutaArchivo = '../reactapp/public/img/Default_A_modern_banner_for_a_barbershop_web_site_in_hd_withou_0 (2).jpg';


fs.readFile(rutaArchivo, (err, data) => {
  if (err) {
    console.error('Erreur', err);
    return;
  }

  db('SalonCoiffure')
  .insert({
    nomSalon: 'Style et Élégance',
    telephoneSalon: '0543219876',
    adresse: '321 Avenue de l Élégance',
    bio: 'Salon de coiffure élégant offrant des services de coupe et de stylisme pour une allure sophistiquée et raffinée.',
    photoProfil: data,
    Email: 'contact@styleetelegance.com',
    MotDePasse: 'mdp282930'
  })
  .then(() => {
    console.log('[+]');
  })
  .catch((err) => {
    console.error('Error', err);
  })
  .finally(() => {
    db.destroy();
  });
});
