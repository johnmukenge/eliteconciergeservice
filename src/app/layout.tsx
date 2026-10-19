import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elite Concierge Service | Votre Temps est Précieux',
  description: 'Services de conciergerie premium pour la diaspora congolaise. Gestion d\'événements, voyages, sécurité 24/7 et bien plus.',
  keywords: 'concierge, diaspora congolaise, services VIP, Kinshasa, Belgique, France',
  openGraph: {
    title: 'Elite Concierge Service',
    description: 'Votre temps est précieux - Services de conciergerie haut de gamme',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-navy-900">{children}</body>
    </html>
  );
}
