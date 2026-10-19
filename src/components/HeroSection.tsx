'use client';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-900 to-gray-900 text-white flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fadeInUp">
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-600"></div>
              <span className="text-gold-400 font-semibold text-sm tracking-widest">VOTRE TEMPS EST PRÉCIEUX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Laissez-nous <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">gérer l'essentiel</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Services de conciergerie haut de gamme dédiés à la diaspora congolaise. Événements, voyages, sécurité 24/7 et bien plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/243829431311?text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20vos%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 text-center"
              >
                Contactez-nous sur WhatsApp
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-gold-400 text-white rounded-lg font-semibold hover:bg-gold-400/10 transition-all text-center"
              >
                Découvrir les services
              </a>
            </div>
          </div>

          {/* Right content - Placeholder for CEO Image */}
          <div className="animate-slideInRight">
            <div className="bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">👔</div>
                <p className="text-xl font-semibold">Franck Kambembo</p>
                <p className="text-gold-100">CEO - Elite Concierge Service</p>
                <p className="text-sm text-gold-100 mt-4">(Photo officielle à ajouter)</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-4 text-sm">
              ✓ 10+ années d'expérience en services VIP
              <br />✓ Réseau diaspora congolaise premium
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gold-400/20">
          <div className="text-center">
            <p className="text-4xl font-bold text-gold-400">500+</p>
            <p className="text-gray-400">Clients satisfaits</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gold-400">98%</p>
            <p className="text-gray-400">Taux de satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gold-400">24/7</p>
            <p className="text-gray-400">Disponibilité garantie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
