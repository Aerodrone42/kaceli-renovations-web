
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/kaceli-renovations-web/lovable-uploads/0d491039-d8a7-4f7f-9cb0-ba0b80d8ccf1.png" 
              alt="Kaceli Rénovation Conseil Logo" 
              className="h-16"
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-kaceli-blue font-medium hover:text-kaceli-orange transition-colors">
              Accueil
            </Link>
            <Link to="/a-propos" className="text-kaceli-blue font-medium hover:text-kaceli-orange transition-colors">
              À propos
            </Link>
            <Link to="/nos-services" className="text-kaceli-blue font-medium hover:text-kaceli-orange transition-colors">
              Nos services
            </Link>
            <Link to="/avis-clients" className="text-kaceli-blue font-medium hover:text-kaceli-orange transition-colors">
              Avis clients
            </Link>
            <Link to="/contact" className="text-kaceli-blue font-medium hover:text-kaceli-orange transition-colors">
              Contact
            </Link>
          </nav>

          {/* Call to action */}
          <div className="hidden md:flex">
            <a 
              href="tel:0649092517" 
              className="flex items-center space-x-2 bg-kaceli-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              <Phone size={18} />
              <span>06 49 09 25 17</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-kaceli-blue hover:text-kaceli-orange focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-kaceli-blue font-medium hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/a-propos" 
              className="block px-3 py-2 text-kaceli-blue font-medium hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link 
              to="/nos-services" 
              className="block px-3 py-2 text-kaceli-blue font-medium hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Nos services
            </Link>
            <Link 
              to="/avis-clients" 
              className="block px-3 py-2 text-kaceli-blue font-medium hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Avis clients
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-kaceli-blue font-medium hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:0649092517" 
              className="flex items-center space-x-2 px-3 py-2 bg-kaceli-orange text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              <span>06 49 09 25 17</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
