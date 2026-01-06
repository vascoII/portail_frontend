#!/bin/bash

# Arrêter le script si une commande échoue
set -e

echo "📦 Installation des dépendances frontend..."
npm install

echo "🧹 Suppression du cache Next.js (.next)..."
rm -rf .next

echo "🌐 Démarrage du serveur frontend sur le port 3000 en mode développement..."

npm run dev