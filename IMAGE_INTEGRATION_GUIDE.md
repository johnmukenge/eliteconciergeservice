# Guide d'Intégration d'Images

## Images Requises

### 1. Photo du CEO (Franck Kambembo)
**Localisation**: `public/images/ceo.jpg`
**Dimensions recommandées**: 600x600px (carré)
**Format**: JPG ou PNG
**Utilisation**: Héro section, à gauche

```tsx
// Dans src/components/HeroSection.tsx, remplacer:
<Image src="/images/ceo.jpg" alt="Franck Kambembo" width={600} height={600} />
```

### 2. Logo Complet
**Localisation**: `public/logo.png`
**Dimensions**: 200x100px minimum
**Format**: PNG transparent
**Utilisation**: Header et footer

### 3. Logo Favicon (Petit logo)
**Localisation**: `public/favicon.ico`
**Dimensions**: 32x32px
**Utilisation**: Onglet du navigateur

### 4. Photos de Projets/Chantiers (Optionnel)
**Localisation**: `public/images/projects/`
**Exemples**: `chantier-1.jpg`, `villa-2.jpg`, etc.
**Utilisation**: Reels TikTok/Instagram et stories

---

## Étapes d'Intégration

### Étape 1: Créer les dossiers
```bash
mkdir -p public/images/projects
mkdir -p public/images/testimonials
```

### Étape 2: Placer vos images
Mettre vos images dans les dossiers appropriés.

### Étape 3: Mettre à jour le composant HeroSection
Ouvrir `src/components/HeroSection.tsx` et remplacer:

```tsx
// AVANT:
<div className="bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-2xl">
  <div className="text-center text-white">
    <div className="text-8xl mb-4">👔</div>
    <p className="text-xl font-semibold">Franck Kambembo</p>
    <p className="text-gold-100">CEO - Elite Concierge Service</p>
  </div>
</div>

// APRÈS:
import Image from 'next/image';

<div className="rounded-2xl overflow-hidden shadow-2xl">
  <Image 
    src="/images/ceo.jpg" 
    alt="Franck Kambembo - CEO" 
    width={600} 
    height={600}
    className="w-full h-full object-cover"
    priority
  />
</div>
```

### Étape 4: Ajouter des photos aux témoignages
Ouvrir `src/components/TestimonialCard.tsx`:

```tsx
<div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full overflow-hidden flex-shrink-0 mr-4">
  {image ? (
    <Image src={image} alt={name} width={48} height={48} className="w-full h-full object-cover" />
  ) : (
    <div className="flex items-center justify-center h-full text-white font-bold">
      {name.charAt(0)}
    </div>
  )}
</div>
```

---

## Optimisation des Images

### Utiliser Next.js Image Component
```tsx
import Image from 'next/image';

<Image
  src="/images/ceo.jpg"
  alt="Franck Kambembo"
  width={600}
  height={600}
  priority // Pour les images au-dessus du fold
  className="w-full h-auto"
/>
```

### Avantages:
✅ Compression automatique
✅ Formats modernes (WEBP, AVIF)
✅ Lazy loading
✅ Responsive images

### Compression avant upload:
- Utiliser [TinyPNG](https://tinypng.com) pour compresser
- Redimensionner à la taille correcte
- Format: JPG pour photos, PNG pour logos

---

## Images Placeholder (pour déboguer)

Si vous ne pouvez pas fournir les images maintenant:

```tsx
<Image
  src="https://via.placeholder.com/600x600?text=Franck+Kambembo"
  alt="CEO"
  width={600}
  height={600}
/>
```

Ou utiliser **Unsplash** pour les images temporaires:
```tsx
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
```

---

## Structure Finale Recommandée

```
public/
├── logo.png                    # Logo principal
├── favicon.ico                 # Favicon
├── images/
│   ├── ceo.jpg                # Photo Franck Kambembo
│   ├── projects/
│   │   ├── chantier-ma-campagne.jpg
│   │   ├── villa-gombe.jpg
│   │   ├── event-gala-2024.jpg
│   │   └── ...
│   └── testimonials/
│       ├── jean-paul-m.jpg
│       ├── amara-s.jpg
│       └── ...
```

---

## Checklist Finale

- [ ] Photo CEO téléchargée et intégrée
- [ ] Logo mis à jour
- [ ] Favicon ajouté
- [ ] Images compressées (< 200KB chacune)
- [ ] All Image components utilise Next.js Image
- [ ] Alt text rempli pour l'accessibilité
- [ ] Images testées sur mobile

---

**Note**: Les images sont essentielles pour la conversion. Une bonne photo professionnelle du CEO inspire la confiance!

Dernière mise à jour: 18 October 2026
