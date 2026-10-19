// Constantes et données réutilisables

export const COMPANY_INFO = {
  name: 'Elite Concierge Service',
  tagline: 'Votre temps est précieux...',
  ceo: 'Franck Kambembo',
  email: 'contact@eliteconcierge.cd',
  whatsapp: '+243 829 431 311',
  whatsappRaw: '243829431311',
  location: 'Kinshasa, RDC',
  year: 2026,
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/eliteconcierge',
  instagram: 'https://instagram.com/elite.concierge.kin',
  linkedin: 'https://linkedin.com',
  whatsapp: `https://wa.me/${COMPANY_INFO.whatsappRaw}`,
};

export const SERVICES = [
  {
    id: 'events',
    icon: '🎭',
    title: 'Gestion d\'Événements',
    description: 'Événements privés et réceptions sur mesure',
    features: [
      'Organisation d\'événements privés',
      'Galas et réceptions VIP',
      'Planification complète',
      'Gestion des prestataires'
    ]
  },
  {
    id: 'travel',
    icon: '✈️',
    title: 'Réservations & Voyages',
    description: 'Expériences de voyage haut de gamme',
    features: [
      'Réservation de vols privés',
      'Hôtels et resorts 5*',
      'Transferts privés',
      'Itinéraires personnalisés'
    ]
  },
  {
    id: 'security',
    icon: '🛡️',
    title: 'Sécurité & Protection',
    description: 'Services de sécurité 24h/24',
    features: [
      'Chauffeur privé',
      'Sécurité 24/7',
      'Accompagnement sécurisé',
      'Coordination discrète'
    ]
  },
  {
    id: 'luxury',
    icon: '💎',
    title: 'Courses & Achats Luxe',
    description: 'Shopping et acquisition d\'articles rares',
    features: [
      'Produits de luxe premium',
      'Articles rares et exclusifs',
      'Négociation de prix',
      'Livraison confidentielle'
    ]
  },
  {
    id: 'vip',
    icon: '🥂',
    title: 'Relations VIP',
    description: 'Accès à des experiences exclusives',
    features: [
      'Clubs privés',
      'Restaurants gastronomiques',
      'Événements exclusifs',
      'Réseau haut de gamme'
    ]
  },
  {
    id: 'admin',
    icon: '📋',
    title: 'Assistance Administrative',
    description: 'Support administratif et juridique',
    features: [
      'Démarches administratives',
      'Support juridique',
      'Formalités officielles',
      'Représentation à Kinshasa'
    ]
  }
];

export const PRICING_PLANS = [
  {
    id: 'starter',
    plan: 'Starter',
    price: 100,
    description: 'Pour débuter avec nos services',
    features: [
      'Accès aux services essentiels',
      'Support par WhatsApp',
      'Réservations voyage',
      'Jusqu\'à 2 événements/mois',
      'Assistance administrative basique'
    ],
    popular: false
  },
  {
    id: 'premium',
    plan: 'Premium',
    price: 150,
    description: 'Le plus populaire pour les expatriés',
    features: [
      'Tous les services Starter',
      'Support prioritaire 24/7',
      'Chauffeur privé (10 jours/mois)',
      'Événements illimités',
      'Accès aux clubs VIP',
      'Concierge personnel dédié'
    ],
    popular: true
  },
  {
    id: 'elite',
    plan: 'Elite',
    price: 300,
    description: 'Services premium complets',
    features: [
      'Tous les services Premium',
      'Chauffeur privé illimité',
      'Sécurité personnelle 24/7',
      'Accès exclusif aux expériences',
      'Assistance prioritaire instantanée',
      'Services customisés illimités',
      'Représentation légale complète'
    ],
    popular: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jean Paul M.',
    location: 'Belgique',
    text: 'Franck a transformé mon quotidien. Impossible de revenir à faire les choses seul. Services d\'une qualité exceptionnelle!',
    rating: 5
  },
  {
    id: 2,
    name: 'Amara S.',
    location: 'France',
    text: 'La meilleure décision que j\'ai prise. Gestion sans stress de mes affaires à Kinshasa et mes événements. Hautement recommandé!',
    rating: 5
  }
];

export const STATS = [
  {
    number: '500+',
    label: 'Clients satisfaits'
  },
  {
    number: '98%',
    label: 'Taux de satisfaction'
  },
  {
    number: '24/7',
    label: 'Disponibilité garantie'
  }
];

export const TARGET_MARKETS = [
  'Congolais de Belgique / Bruxelles',
  'Congolais de France / Paris',
  'Diaspora Congolaise USA / Canada',
  'Bana Kinshasa / Bana Léo',
  'Investir en RDC / Immobilier Kinshasa'
];
