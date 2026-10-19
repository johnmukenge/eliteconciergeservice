'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { PricingCard } from '@/components/PricingCard';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function Home() {
  const services = [
    {
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

  const pricingPlans = [
    {
      plan: 'Starter',
      price: 100,
      description: 'Pour débuter avec nos services',
      features: [
        'Accès aux services essentiels',
        'Support par WhatsApp',
        'Réservations voyage',
        'Jusqu\'à 2 événements/mois',
        'Assistance administrative basique'
      ]
    },
    {
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
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Jean Paul M.',
      location: 'Belgique',
      text: 'Franck a transformé mon quotidien. Impossible de revenir à faire les choses seul. Services d\'une qualité exceptionnelle!',
      rating: 5
    },
    {
      name: 'Amara S.',
      location: 'France',
      text: 'La meilleure décision que j\'ai prise. Gestion sans stress de mes affaires à Kinshasa et mes événements. Hautement recommandé!',
      rating: 5
    }
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Nos Services <span className="bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">Premium</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services adaptés aux besoins des expatriés et investisseurs congolais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Plans & <span className="bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">Tarification</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez le plan qui correspond à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Ce que <span className="bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">nos clients</span> disent
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Témoignages authentiques de nos clients satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre quotidien?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Rejoignez des centaines de clients satisfaits et découvrez comment Elite Concierge Service peut changer votre vie.
          </p>
          <a
            href="https://wa.me/243829431311?text=Bonjour%20Franck%2C%20je%20souhaite%20discuter%20de%20vos%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Contacter sur WhatsApp - +243 829 431 311
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Nous <span className="bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">Contacter</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy-900 mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/243829431311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-600 hover:text-gold-700 font-semibold"
                  >
                    +243 829 431 311
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Réponse instantanée garantie</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy-900 mb-2">Email</h3>
                  <a
                    href="mailto:contact@eliteconcierge.cd"
                    className="text-gold-600 hover:text-gold-700 font-semibold"
                  >
                    contact@eliteconcierge.cd
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Nous répondons en moins de 2h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy-900 mb-2">Localisation</h3>
                  <p className="text-gray-700">Kinshasa, RDC</p>
                  <p className="text-gray-600 text-sm mt-1">Service 24/7 depuis le terrain</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-bold text-lg text-navy-900 mb-6">Suivez-nous</h3>
              <div className="space-y-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-gold-400 transition"
                >
                  <span className="font-semibold text-navy-900">Facebook</span>
                  <span className="text-2xl">f</span>
                </a>
                <a
                  href="https://instagram.com/elite.concierge.kin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-gold-400 transition"
                >
                  <span className="font-semibold text-navy-900">Instagram</span>
                  <span className="text-2xl">📸</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-gold-400 transition"
                >
                  <span className="font-semibold text-navy-900">LinkedIn</span>
                  <span className="text-2xl">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
