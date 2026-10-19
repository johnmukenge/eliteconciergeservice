'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-lg">Elite Concierge</span>
            </div>
            <p className="text-gray-400 text-sm">
              Votre temps est précieux. Nous nous en chargeons.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-gold-400 transition">Services</a></li>
              <li><a href="#pricing" className="hover:text-gold-400 transition">Tarifs</a></li>
              <li><a href="#testimonials" className="hover:text-gold-400 transition">Témoignages</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-gold-400 transition">Événements</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition">Voyages</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition">Sécurité 24/7</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                <a href="https://wa.me/243829431311" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition">
                  WhatsApp: +243 829 431 311
                </a>
              </p>
              <p>
                <a href="mailto:contact@eliteconcierge.cd" className="hover:text-gold-400 transition">
                  Email: contact@eliteconcierge.cd
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Elite Concierge Service. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition">
                Facebook
              </a>
              <a href="https://instagram.com/elite.concierge.kin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
