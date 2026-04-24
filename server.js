/**
 * Expense Tracker Application
 * Personnalisé par Elendie
 */

const express = require('express');
const app = express();
const path = require('path');

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Route principale : sert index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exemple d’endpoint API (gestion des dépenses)
app.get('/expenses', (req, res) => {
  res.json({ message: "Liste des dépenses – Elendie’s Expense Tracker" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Elendie’s Expense Tracker démarré sur http://localhost:${PORT}`);
});
