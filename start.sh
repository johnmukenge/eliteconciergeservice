#!/bin/bash

echo "🚀 Elite Concierge Service - Démarrage du Projet"
echo "================================================="
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    echo ""
fi

echo "✅ Tout est prêt!"
echo ""
echo "Commandes disponibles:"
echo "  npm run dev     - Lancer le serveur de développement"
echo "  npm run build   - Builder pour la production"
echo "  npm start       - Lancer le serveur de production"
echo "  npm run lint    - Vérifier le code"
echo ""
echo "Le serveur démarre sur http://localhost:3000"
echo ""
echo "📱 Site: elite-concierge.cd"
echo "📞 WhatsApp: +243 829 431 311"
echo "📧 Email: contact@eliteconcierge.cd"
echo ""

npm run dev
