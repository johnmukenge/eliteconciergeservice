'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <div>
            <p className="font-bold text-lg text-navy-900">Elite Concierge</p>
            <p className="text-xs text-gold-600">Service</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-gray-700 hover:text-gold-600 transition">
            Services
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-gold-600 transition">
            Tarifs
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-gold-600 transition">
            Témoignages
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-gold-600 transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="https://wa.me/243829431311?text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20vos%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-navy-900"></div>
          <div className="w-6 h-0.5 bg-navy-900"></div>
          <div className="w-6 h-0.5 bg-navy-900"></div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="#services" className="text-gray-700 hover:text-gold-600">
                Services
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-gold-600">
                Tarifs
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-gold-600">
                Témoignages
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-gold-600">
                Contact
              </Link>
              <a
                href="https://wa.me/243829431311?text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20vos%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white rounded-lg text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
