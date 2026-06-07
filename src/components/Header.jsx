import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useUIStore } from '../store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useUIStore();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-navy to-gold rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl">P</span>
          </div>
          <span className="hidden md:inline font-serif text-2xl font-bold text-navy">Palace</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-navy hover:text-gold transition-colors font-medium">
            Home
          </Link>
          <Link to="/rooms" className="text-navy hover:text-gold transition-colors font-medium">
            Rooms
          </Link>
          <a href="#amenities" className="text-navy hover:text-gold transition-colors font-medium">
            Amenities
          </a>
          <a href="#contact" className="text-navy hover:text-gold transition-colors font-medium">
            Contact
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-gold" />
            ) : (
              <Moon className="w-5 h-5 text-navy" />
            )}
          </button>

          <Link to="/admin" className="hidden md:block btn-primary-gold text-sm">
            Admin
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className="w-6 h-6 text-navy" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 animate-slide-up">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-navy hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="block text-navy hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Rooms
            </Link>
            <a
              href="#amenities"
              className="block text-navy hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Amenities
            </a>
            <a
              href="#contact"
              className="block text-navy hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Link
              to="/admin"
              className="block btn-primary-gold text-sm text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
