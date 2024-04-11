const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const db = require('./routes/db.js')

const pathFichier = '../reactapp/public/img/coiffeur1.png';


fs.readFile(pathFichier, (err, data) => {
  if (err) {
    console.error('Erreur', err);
    return;
  }

  db('Client')
  .insert({
    PrenomClient: 'Luc',
    NomClient: 'Lefevre',
    Email: 'luc@example.com',
    MotDePasse: 'mdp456',
    photoProfil: data,
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
