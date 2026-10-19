# 📝 Guide d'Édition du Contenu

Ce guide montre comment personnaliser tous les textes et contenus de votre landing page **sans toucher au code**.

## 🎯 Où se trouvent toutes les données?

Toutes les données (services, tarifs, témoignages, etc.) sont dans:
**`src/lib/constants.ts`**

C'est le seul fichier que vous devez éditer pour la plupart des changements!

---

## 1️⃣ Éditer les Informations Principales

**Fichier**: `src/lib/constants.ts` (lignes 1-11)

```typescript
export const COMPANY_INFO = {
  name: 'Elite Concierge Service',        // Nom entreprise
  tagline: 'Votre temps est précieux...', // Slogan principal
  ceo: 'Franck Kambembo',                 // Nom du CEO
  email: 'contact@eliteconcierge.cd',     // Email
  whatsapp: '+243 829 431 311',           // Numéro WhatsApp
  whatsappRaw: '243829431311',            // Sans +
  location: 'Kinshasa, RDC',              // Localisation
  year: 2026,                              // Année
};
```

**À personnaliser**:
- ✏️ `name` → Votre nom d'entreprise
- ✏️ `tagline` → Votre slogan
- ✏️ `ceo` → Nom du CEO
- ✏️ `email` → Votre email
- ✏️ `whatsapp` → Votre numéro (+code pays)
- ✏️ `location` → Votre ville

---

## 2️⃣ Éditer les 6 Services

**Fichier**: `src/lib/constants.ts` (lignes 18-77)

```typescript
export const SERVICES = [
  {
    id: 'events',
    icon: '🎭',                     // Emoji (peut être n'importe quel emoji)
    title: 'Gestion d\'Événements', // Titre du service
    description: 'Événements privés et réceptions sur mesure',
    features: [                     // 4 features du service
      'Organisation d\'événements privés',
      'Galas et réceptions VIP',
      'Planification complète',
      'Gestion des prestataires'
    ]
  },
  // ... autres services
];
```

**Comment éditer**:
1. Ouvrir `src/lib/constants.ts`
2. Trouver `export const SERVICES = [`
3. Modifier le texte entre les guillemets
4. Save (Ctrl+S)
5. Le site se met à jour automatiquement ✨

**Exemple**: Ajouter un 7ème service
```typescript
{
  id: 'consulting',
  icon: '💼',
  title: 'Consulting & Conseil',
  description: 'Expertise en affaires',
  features: [
    'Conseil en affaires',
    'Stratégie commerciale',
    'Networking VIP',
    'Mentorat personnalisé'
  ]
}
```

---

## 3️⃣ Éditer les 3 Plans de Tarification

**Fichier**: `src/lib/constants.ts` (lignes 80-127)

```typescript
export const PRICING_PLANS = [
  {
    id: 'starter',
    plan: 'Starter',              // Nom du plan
    price: 100,                   // Prix en $
    description: 'Pour débuter avec nos services',
    features: [                   // Liste des features
      'Accès aux services essentiels',
      'Support par WhatsApp',
      // ...
    ],
    popular: false                // Marquer comme "populaire" ou pas
  },
  // ...
];
```

**Comment éditer**:
- Changer `price: 100` → `price: 200` (nouveau prix)
- Changer `popular: true` pour marquer le plan populaire
- Ajouter/supprimer des features

---

## 4️⃣ Éditer les Témoignages

**Fichier**: `src/lib/constants.ts` (lignes 130-157)

```typescript
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jean Paul M.',          // Nom du client
    location: 'Belgique',          // Localisation
    text: 'Franck a transformé...', // Le témoignage (en italique)
    rating: 5                      // Note: 1 à 5 étoiles
  },
  // ...
];
```

**Comment ajouter un témoignage**:
```typescript
{
  id: 3,
  name: 'Marie K.',
  location: 'USA',
  text: 'Service impeccable, je recommande vivement!',
  rating: 5
}
```

---

## 5️⃣ Éditer le Texte du Hero (Accueil)

**Fichier**: `src/app/page.tsx` (lignes 260-310)

Le texte "Laissez-nous gérer l'essentiel" est dans le composant HeroSection.

```typescript
// Dans src/components/HeroSection.tsx
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
  Laissez-nous <span>gérer l'essentiel</span>
</h1>
```

**Personnaliser**:
1. Ouvrir `src/components/HeroSection.tsx`
2. Chercher `Laissez-nous gérer l'essentiel`
3. Remplacer par votre titre

---

## 6️⃣ Éditer les Stats

**Fichier**: `src/lib/constants.ts` (lignes 160-171)

```typescript
export const STATS = [
  {
    number: '500+',               // Nombre
    label: 'Clients satisfaits'   // Description
  },
  // ...
];
```

**Mettre à jour**:
- `500+` → nombre de clients réels
- `98%` → votre taux de satisfaction réel
- `24/7` → votre disponibilité

---

## 7️⃣ Éditer les Réseaux Sociaux

**Fichier**: `src/lib/constants.ts` (lignes 14-19)

```typescript
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/eliteconcierge',
  instagram: 'https://instagram.com/elite.concierge.kin',
  linkedin: 'https://linkedin.com',
  whatsapp: `https://wa.me/${COMPANY_INFO.whatsappRaw}`,
};
```

**Remplacer par**:
- Votre URL Facebook complète
- Votre handle Instagram (@votre_compte)
- Votre profil LinkedIn
- Numéro WhatsApp (auto-généré)

---

## 8️⃣ Éditer la Description de la Page

**Fichier**: `src/app/layout.tsx` (lignes 1-10)

```typescript
export const metadata: Metadata = {
  title: 'Elite Concierge Service | Votre Temps est Précieux',
  description: 'Services de conciergerie premium...',
  keywords: 'concierge, diaspora congolaise, services VIP',
};
```

**Personnaliser** pour le SEO:
- `title`: Votre titre (important pour Google!)
- `description`: Description courte (160 caractères)
- `keywords`: Mots-clés séparés par virgule

---

## 🎨 Éditer les Couleurs

**Fichier**: `tailwind.config.js` (lignes 8-22)

```javascript
colors: {
  gold: {
    50: '#fefdf4',
    100: '#fefce8',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
  },
  navy: {
    900: '#0f1419',
  },
}
```

**Exemples de couleurs**:
- `#facc15` ← Jaune/Or actuel
- `#3b82f6` ← Bleu
- `#ef4444` ← Rouge
- `#10b981` ← Vert
- `#8b5cf6` ← Violet

Remplacer les codes HEX par vos couleurs.

---

## 🏞️ Éditer le Texte dans les Pages

### Titre "Nos Services Premium"
**Fichier**: `src/app/page.tsx` (ligne 120)
```typescript
<h2>Nos Services <span>Premium</span></h2>
```

### Titre "Plans & Tarification"
**Fichier**: `src/app/page.tsx` (ligne 154)
```typescript
<h2>Plans & <span>Tarification</span></h2>
```

### Autres titres & descriptions
Chercher le texte avec `Ctrl+F` dans VS Code et remplacer.

---

## 📝 Texte des Boutons

### Bouton WhatsApp
**Fichier**: Plusieurs endroits
```html
Contactez-nous sur WhatsApp
```

Chercher et remplacer partout avec votre texte (ex: "Démarrer Maintenant").

### Bouton "Choisir ce plan"
**Fichier**: `src/components/PricingCard.tsx` (ligne 34)
```typescript
Choisir ce plan
```

---

## 🔗 Tous les Liens

| Lien | Fichier | Ligne |
|------|---------|-------|
| WhatsApp | Partout | Variable |
| Email | `src/app/page.tsx` | ~210 |
| Facebook | `src/components/Footer.tsx` | ~41 |
| Instagram | `src/components/Footer.tsx` | ~44 |
| LinkedIn | `src/components/Footer.tsx` | ~47 |

**Format WhatsApp**: 
```
https://wa.me/243829431311?text=Bonjour
```

---

## ✅ Checklist d'Édition

- [ ] Changer `COMPANY_INFO` avec vos infos
- [ ] Mettre à jour les 6 services
- [ ] Ajuster les 3 plans de tarification
- [ ] Ajouter/éditer les témoignages
- [ ] Mettre à jour les réseaux sociaux
- [ ] Changer les stats réelles
- [ ] Éditer meta tags pour SEO
- [ ] Changer les couleurs (optionnel)
- [ ] Tester: `npm run dev`

---

## 🚀 Workflow Éditeur (Facile!)

1. **Ouvrir** `src/lib/constants.ts`
2. **Trouver** ce que vous voulez éditer
3. **Remplacer** le texte
4. **Save** (Ctrl+S)
5. **Voir** les changements automatiquement! ✨

**C'est tout!** Pas besoin de savoir coder, juste chercher et remplacer.

---

## 🆘 Je n'arrive pas à trouver [X]?

**Chercher dans VS Code**:
1. `Ctrl+Shift+F` (Windows/Linux) ou `Cmd+Shift+F` (Mac)
2. Taper le texte que vous cherchez
3. VS Code affiche tous les endroits

**Exemple**: Chercher "Votre temps" → trouve le tagline et titre

---

## 💾 Sauvegarder les Changements

- **Auto-save**: Vérifier que vous avez l'auto-save activé
- **Manuel**: `Ctrl+S` pour sauvegarder
- **Hot Reload**: Le navigateur se met à jour tout seul

---

## ⚠️ Avant de Déployer

1. Vérifier qu'il n'y a **pas d'erreurs** dans le terminal
2. Tester tous les **boutons WhatsApp**
3. Vérifier **mobile responsiveness** (réduire navigateur)
4. Vérifier les **liens réseaux sociaux**
5. Relire les **textes** (fautes d'orthographe?)

```bash
# Checker les erreurs:
npm run lint
```

---

Dernière mise à jour: 18 October 2026
Auteur: AI Assistant (GitHub Copilot)
