# Guide de Déploiement Elite Concierge Service

## 🚀 Option 1: Vercel (Recommandé - Gratuit & Simple)

### Étapes:
1. Créer un compte sur [vercel.com](https://vercel.com)
2. Connecter votre repository GitHub
3. Cliquer sur "Import" et sélectionner ce projet
4. Vercel va automatiquement détecter que c'est un projet Next.js
5. Cliquer sur "Deploy"

### Résultat:
- URL automatique: `elite-concierge.vercel.app`
- Déploiement automatique à chaque push sur main
- HTTPS gratuit
- Performance optimale

---

## 🌐 Option 2: Domaine Personnalisé

### Pour domaine `elite-concierge.cd` ou `eliteconciergerdc.com`:

#### Étape 1: Acheter le domaine
- Rendez-vous sur [Namecheap](https://namecheap.com) ou [GoDaddy](https://godaddy.com)
- Chercher: `elite-concierge.cd` ou `eliteconciergerdc.com`
- Prix: ~$10-15/an pour .cd
- Acheter et valider l'email

#### Étape 2: Connecter à Vercel
1. Dans Vercel, aller à Settings > Domains
2. Ajouter: `elite-concierge.cd`
3. Vercel vous donne des nameservers (NS records)
4. Aller dans Namecheap/GoDaddy
5. Remplacer les nameservers par ceux de Vercel
6. Attendre 24-48h pour la propagation DNS

#### Étape 3: HTTPS automatique
- Vercel active automatiquement un certificat SSL gratuit
- Votre site est maintenant `https://elite-concierge.cd`

---

## 📊 Option 3: Hostinger (30$/an)

### Avantages:
- Nom de domaine INCLUS pour 30$/an
- Support en français
- Interface facile

### Étapes:
1. Aller sur [hostinger.com](https://hostinger.com)
2. Chercher: `elite-concierge.cd`
3. Commander le plan Business ($30/an)
4. Une fois activé, vous avez accès au hosting
5. Connecter votre repository GitHub via les paramètres
6. Sélectionner "Node.js" et version 18+
7. Hostinger va automatiquement builder et déployer

### Résultat:
- Domaine + Hosting: 30$/an
- Site: `elite-concierge.cd`
- Support Français

---

## 🔧 Option 4: Netlify (Alternative Vercel)

### Étapes:
1. Créer compte sur [netlify.com](https://netlify.com)
2. Connecter GitHub
3. "New site from Git"
4. Sélectionner ce repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy

---

## 📝 Avant de Déployer - Checklist

- [ ] Vérifier que le site fonctionne localement: `npm run dev`
- [ ] Remplacer les photos de placeholder par des vraies photos
- [ ] Vérifier les liens WhatsApp/Email/Réseaux sociaux
- [ ] Tester sur mobile (responsive)
- [ ] Vérifier les métadonnées SEO
- [ ] Créer un `.env.local` si nécessaire

```bash
# Tester avant de déployer
npm run build
npm start
# Ouvrir http://localhost:3000
```

---

## 🔐 Variables d'Environnement

Créer un fichier `.env.local` à la racine du projet:

```env
NEXT_PUBLIC_APP_NAME=Elite Concierge Service
NEXT_PUBLIC_WHATSAPP_NUMBER=243829431311
NEXT_PUBLIC_EMAIL=contact@eliteconcierge.cd
```

**NE PAS** committer ce fichier dans Git (il est dans `.gitignore`).

---

## 📧 Configuration Email (Optionnel)

Si vous voulez un formulaire de contact qui envoie des emails:

### Option A: Vercel + SendGrid
1. S'inscrire sur [sendgrid.com](https://sendgrid.com) (gratuit)
2. Créer une clé API
3. Ajouter à Vercel Environment Variables:
   ```
   SENDGRID_API_KEY=your_key_here
   ```
4. Créer un endpoint API pour traiter les emails

### Option B: Simpler - FormSubmit
1. Utiliser [formsubmit.co](https://formsubmit.co) (gratuit)
2. Aucune configuration nécessaire
3. Redirection simple après soumission

---

## 🚀 Déployer une Mise à Jour

Après avoir modifié du code:

```bash
# 1. Faire les changements
git add .
git commit -m "Update: description of changes"
git push origin main

# 2. Vercel/Netlify va automatiquement redéployer
# Votre site sera à jour en 2-3 minutes
```

---

## 🔍 Monitoring Post-Déploiement

### Vérifier que tout fonctionne:
1. Ouvrir votre domaine dans un navigateur
2. Tester tous les liens:
   - Boutons WhatsApp
   - Liens Email
   - Navigation interne
   - Réseaux sociaux
3. Vérifier sur téléphone
4. Vérifier la vitesse: [pagespeed.web.dev](https://pagespeed.web.dev)

### Ajouter Google Analytics (Optionnel):
```bash
npm install next-google-analytics
```

Ajouter à `src/app/layout.tsx`:
```typescript
import { GoogleAnalytics } from 'next-google-analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 💰 Coûts Estimés

| Service | Coût Annuel | Notes |
|---------|------------|-------|
| Vercel | GRATUIT | Déploiement + domaine .vercel.app |
| Domaine .cd | $10-15 | elite-concierge.cd |
| Hostinger | $30 | Domaine + hosting inclus |
| Total minimum | $10-15 | Si Vercel + domaine personnalisé |

---

## ✅ Après le Déploiement

1. **Partager le lien** sur vos réseaux sociaux
2. **Tester les conversions**: Cliquer sur WhatsApp pour vérifier
3. **Ajouter à Google Search Console** pour le SEO
4. **Faire un post** sur Facebook/LinkedIn pour annoncer le lancement
5. **Mettre à jour** votre bio partout: "Visitez elite-concierge.cd"

---

## 🆘 Troubleshooting

### Le site ne charge pas
- Vérifier la connexion internet
- Attendre la propagation DNS (jusqu'à 48h)
- Vider le cache du navigateur (Ctrl+Shift+Del)

### Les images ne s'affichent pas
- Vérifier que le fichier existe
- Vérifier les chemins d'accès (case-sensitive sur Linux)
- Reconstruire: `npm run build`

### Les boutons WhatsApp ne fonctionnent pas
- Vérifier le numéro: +243 829 431 311
- Tester le lien: https://wa.me/243829431311

---

**Questions?** Contact: contact@eliteconcierge.cd

Dernière mise à jour: 18 October 2026
