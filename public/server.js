const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'db', // ou localhost si tu testes sans Docker
  database: 'expenses',
  password: 'password',
  port: 5432,
});

// Sert automatiquement les fichiers HTML/CSS/JS du dossier public
app.use(express.static('public'));

// Route POST pour insérer une dépense
app.post('/expenses', async (req, res) => {
  const { description, amount, category, date } = req.body;
  await pool.query(
    'INSERT INTO expenses (description, amount, category, date) VALUES ($1, $2, $3, $4)',
    [description, amount, category, date]
  );
  res.redirect('/'); // recharge index.html après insertion
});

// Lancer le serveur
app.listen(3000, () => {
  console.log("Expense Tracker d'Elendie démarré sur http://localhost:3000");
});
