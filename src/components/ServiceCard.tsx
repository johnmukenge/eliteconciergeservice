'use client';

import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
      <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-gold-600 mr-2">✓</span>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
