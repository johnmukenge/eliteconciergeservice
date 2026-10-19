'use client';

interface TestimonialCardProps {
  name: string;
  location: string;
  image?: string;
  text: string;
  rating?: number;
}

export function TestimonialCard({ name, location, text, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-gold-500">★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-navy-900">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  );
}
