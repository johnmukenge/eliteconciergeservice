#!/bin/bash
# Script pour initialiser le projet et lancer le développement

set -e

echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║    Elite Concierge Service - Initialisation du Projet   ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check if node_modules exists
echo -e "${BLUE}📦 Vérification des dépendances...${NC}"
if [ ! -d "node_modules" ]; then
    echo "📥 Installation des packages npm..."
    npm install
    echo -e "${GREEN}✅ Dépendances installées${NC}"
else
    echo -e "${GREEN}✅ Dépendances déjà installées${NC}"
fi

echo ""

# Step 2: Display project info
echo -e "${BLUE}ℹ️  Informations du Projet:${NC}"
echo "   📱 Site: Elite Concierge Service"
echo "   👤 CEO: Franck Kambembo"
echo "   📞 WhatsApp: +243 829 431 311"
echo "   📧 Email: contact@eliteconcierge.cd"
echo ""

# Step 3: Display useful commands
echo -e "${YELLOW}📚 Commandes Disponibles:${NC}"
echo ""
echo "   🚀 Développement:"
echo "      npm run dev          → Lancer le serveur de développement"
echo ""
echo "   🏗️  Production:"
echo "      npm run build        → Builder pour production"
echo "      npm start            → Lancer serveur production"
echo ""
echo "   📝 Autres:"
echo "      npm run lint         → Vérifier le code"
echo ""

# Step 4: Display customization tips
echo -e "${BLUE}🎨 Personnalisation Rapide:${NC}"
echo ""
echo "   1️⃣  Éditer le contenu:"
echo "      ➜ Fichier: src/lib/constants.ts"
echo "      ➜ Guide: CONTENT_EDITING_GUIDE.md"
echo ""
echo "   2️⃣  Ajouter vos photos:"
echo "      ➜ Dossier: public/images/"
echo "      ➜ Guide: IMAGE_INTEGRATION_GUIDE.md"
echo ""
echo "   3️⃣  Changer les couleurs:"
echo "      ➜ Fichier: tailwind.config.js"
echo ""

# Step 5: Ask if user wants to start dev server
echo ""
echo -e "${GREEN}═══════════════════════════════════════════════════════${NC}"
echo ""
read -p "Démarrer le serveur de développement maintenant? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo -e "${GREEN}🚀 Démarrage du serveur...${NC}"
    echo "   URL: http://localhost:3000"
    echo "   Appuyez sur Ctrl+C pour arrêter"
    echo ""
    npm run dev
else
    echo ""
    echo -e "${GREEN}✅ Projet prêt!${NC}"
    echo ""
    echo "Pour démarrer le serveur:"
    echo -e "${BLUE}  npm run dev${NC}"
    echo ""
fi
