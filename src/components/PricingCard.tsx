'use client';

interface PricingCardProps {
  plan: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ plan, price, description, features, popular = false }: PricingCardProps) {
  return (
    <div
      className={`rounded-xl p-8 transition-all duration-300 h-full flex flex-col ${
        popular
          ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-2xl transform scale-105'
          : 'bg-white border border-gray-200 text-navy-900'
      }`}
    >
      {popular && (
        <div className="bg-white text-gold-600 px-3 py-1 rounded-full inline-block w-fit mb-4 font-semibold text-sm">
          Populaire
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <p className={`mb-4 text-sm ${popular ? 'text-white/80' : 'text-gray-600'}`}>{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className={`ml-2 ${popular ? 'text-white/80' : 'text-gray-600'}`}>/mois</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className={`mr-3 text-lg ${popular ? 'text-white' : 'text-gold-600'}`}>✓</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/243829431311?text=Je%20suis%20intéressé%20par%20le%20plan%20%24"
        target="_blank"
        rel="noopener noreferrer"
        className={`py-3 px-6 rounded-lg font-semibold transition-all text-center ${
          popular
            ? 'bg-white text-gold-600 hover:bg-gray-100'
            : 'bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:shadow-lg'
        }`}
      >
        Choisir ce plan
      </a>
    </div>
  );
}
