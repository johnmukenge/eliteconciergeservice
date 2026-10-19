# 🆘 Troubleshooting & FAQ

## ❓ Questions Fréquentes

### Q1: Comment lancer le projet?

**A:**
```bash
npm install          # Une seule fois au début
npm run dev          # À chaque fois que vous travaillez
```

Ouvrir: http://localhost:3000

---

### Q2: Comment éditer le contenu?

**A:**
1. Ouvrir: `src/lib/constants.ts`
2. Trouver ce que vous voulez changer
3. Remplacer le texte
4. Save (Ctrl+S)
5. Page se met à jour automatiquement ✨

Voir: [CONTENT_EDITING_GUIDE.md](CONTENT_EDITING_GUIDE.md)

---

### Q3: Où ajouter mes photos?

**A:**
1. Créer dossier: `public/images/`
2. Y mettre vos photos
3. Éditer les composants pour les utiliser

Voir: [IMAGE_INTEGRATION_GUIDE.md](IMAGE_INTEGRATION_GUIDE.md)

---

### Q4: Comment déployer?

**A:**
Deux options:
1. **Vercel** (gratuit) - https://vercel.com
2. **Hostinger** ($30/an) - https://hostinger.com

Voir: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

### Q5: Peut-on changer les couleurs?

**A:** Oui!
- Fichier: `tailwind.config.js` (lignes 8-22)
- Remplacer les codes HEX (#facc15, etc)
- Save et tester

Couleurs disponibles: https://tailwindcss.com/docs/customizing-colors

---

## 🐛 Erreurs Communes & Solutions

### Erreur: "Port 3000 is already in use"

**Problème**: Un autre programme utilise le port 3000.

**Solution**:
```bash
# Option 1: Utiliser un autre port
npm run dev -- -p 3001

# Option 2: Tuer le processus (Mac/Linux)
lsof -ti:3000 | xargs kill -9
npm run dev
```

---

### Erreur: "node_modules not found"

**Problème**: Les dépendances npm ne sont pas installées.

**Solution**:
```bash
npm install
npm run dev
```

---

### Erreur: "Cannot find module 'react'"

**Problème**: Les dépendances ne sont pas installées correctement.

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

### Erreur: "Image not found"

**Problème**: La photo n'existe pas ou le chemin est mauvais.

**Solution**:
1. Vérifier que la photo existe: `ls public/images/`
2. Vérifier le chemin dans le composant
3. Chemins sont relatifs à `public/`: `/images/ceo.jpg`

---

### Erreur: "Build failed"

**Problème**: Erreurs de compilation TypeScript/ESLint.

**Solution**:
```bash
npm run lint                    # Voir les erreurs
npm run build                   # Builder et tester
```

Corriger les erreurs et retry.

---

### Site ne se met pas à jour après changements

**Problème**: Hot reload ne fonctionne pas.

**Solution**:
1. Arrêter le serveur: `Ctrl+C`
2. Relancer: `npm run dev`
3. Actualiser la page: `Ctrl+Shift+R` (force refresh)

---

## 🔧 Dépannage Général

### Le bouton WhatsApp ne fonctionne pas

**Checklist**:
1. Vérifier le numéro: `+243 829 431 311`
2. Tester le lien: https://wa.me/243829431311
3. Vérifier format: `wa.me/[NUMÉRO SANS +]`

---

### Les images ne s'affichent pas

**Checklist**:
1. Fichier existe-t-il? `ls public/images/`
2. Chemin correct? `/images/ceo.jpg`
3. Format supporté? JPG, PNG, WEBP
4. Taille raisonnable? < 500KB

---

### Le site n'est pas responsive

**Checklist**:
1. Tester sur mobile? Réduire la fenêtre
2. Classes Tailwind correctes? `md:`, `lg:`
3. Pas de width fixe? Éviter `width: 500px`

---

### Performance très lente

**Checklist**:
1. Images trop lourdes? Compresser avec [TinyPNG](https://tinypng.com)
2. Trop de composants? Lazy load
3. Tester: https://pagespeed.web.dev

---

## 📱 Tester le Site

### Sur votre ordinateur
```bash
npm run dev
# Ouvrir: http://localhost:3000
```

### Sur votre téléphone (même WiFi)
1. Trouver votre IP: `ipconfig getifaddr en0` (Mac) ou `ipconfig` (Windows)
2. Ouvrir: `http://[VOTRE_IP]:3000`

### Production
```bash
npm run build
npm start
# Ouvrir: http://localhost:3000
```

---

## 🎨 Problèmes de Design

### Les couleurs ne changent pas

**Solution**:
1. Éditer: `tailwind.config.js`
2. Chercher les colors (lignes 8-22)
3. Remplacer les codes HEX
4. Save et reload navigateur (Ctrl+Shift+R)

---

### Le layout est cassé sur mobile

**Solution**:
1. Vérifier les classes Tailwind
2. Utiliser breakpoints: `md:`, `lg:`
3. Tester avec: `npm run dev` puis redimensionner

Exemple:
```typescript
<div className="grid grid-cols-1 md:grid-cols-2">
  {/* 1 colonne sur mobile, 2 sur desktop */}
</div>
```

---

### Les animations ne fonctionnent pas

**Solution**:
1. Vérifier les classes: `animate-fadeInUp`, `animate-slideInRight`
2. Vérifier `tailwind.config.js` pour les keyframes
3. Peut besoin d'ajouter Framer Motion

---

## 📊 Vérifier la Qualité du Code

### Linter
```bash
npm run lint
```
Affiche tous les problèmes de code.

### Build
```bash
npm run build
```
Tente de compiler - erreurs s'il y a des problèmes.

### Performance
```bash
npm run build
npm start
# Puis: https://pagespeed.web.dev
```

---

## 🚀 Avant de Déployer

### Checklist
- [ ] `npm run lint` ✅ (pas d'erreurs)
- [ ] `npm run build` ✅ (compile sans erreur)
- [ ] Site responsive ✅ (testé sur mobile)
- [ ] Tous les liens fonctionnent ✅
- [ ] Photos chargées ✅
- [ ] Textes vérifiés ✅ (pas de fautes)
- [ ] Performance OK ✅ (PageSpeed > 80)

---

## 🆘 Je suis bloqué!

### Option 1: Relire la documentation
- [QUICK_START.md](QUICK_START.md) - Démarrage
- [CONTENT_EDITING_GUIDE.md](CONTENT_EDITING_GUIDE.md) - Édition
- [IMAGE_INTEGRATION_GUIDE.md](IMAGE_INTEGRATION_GUIDE.md) - Images
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Déploiement

### Option 2: Chercher avec VS Code
1. `Ctrl+Shift+F`
2. Taper le texte/erreur
3. Voir où ça apparaît

### Option 3: Reset complètement
```bash
rm -rf node_modules .next dist build
npm install
npm run dev
```

### Option 4: Contacter
- WhatsApp: +243 829 431 311
- Email: contact@eliteconcierge.cd

---

## 💻 Commandes Utiles à Connaître

```bash
# Installation
npm install                # Installer toutes les dépendances

# Développement
npm run dev               # Lancer le serveur local
npm run dev -- -p 3001   # Sur un port différent

# Production
npm run build            # Compiler pour production
npm start                # Lancer le serveur production

# Qualité
npm run lint             # Vérifier le code
npm run lint -- --fix    # Corriger auto les erreurs

# GitHub
git add .                # Ajouter tous les fichiers
git commit -m "message"  # Créer un commit
git push                 # Envoyer sur GitHub
```

---

## 📝 Logs Utiles

### Voir les erreurs du terminal
```bash
npm run dev
# Les erreurs s'affichent directement
```

### Voir les erreurs du navigateur
1. Ouvrir DevTools: `F12`
2. Aller à "Console"
3. Voir les messages d'erreur en rouge

### Voir les erreurs de build
```bash
npm run build
# Les erreurs s'affichent à la fin
```

---

## 🎯 Cas Spécifiques

### Je veux ajouter un formulaire de contact

1. Voir: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Section "Email"
2. Options: FormSubmit ou SendGrid

### Je veux changer le domaine

1. Acheter le domaine: [Namecheap](https://namecheap.com)
2. Voir: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Section "Domaine Personnalisé"

### Je veux ajouter des services supplémentaires

1. Éditer: `src/lib/constants.ts`
2. Ajouter dans le tableau `SERVICES`
3. Page se met à jour automatiquement

### Je veux traduire en anglais

1. Créer: `src/lib/constants-en.ts`
2. Créer: `src/app/en/page.tsx`
3. Ajouter un toggle langue dans Header

---

## 📚 Ressources Externes

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind**: https://tailwindcss.com/docs
- **Vercel**: https://vercel.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs/

---

## ✅ Quand Demander de l'Aide

- Code ne compile pas ❌ → `npm run lint`
- Site ne fonctionne pas ❌ → Relancer `npm run dev`
- Design cassé ❌ → Tester sur mobile, relire le CSS
- Performance mauvaise ❌ → Compresser images, optimiser

---

Dernière mise à jour: 18 October 2026
