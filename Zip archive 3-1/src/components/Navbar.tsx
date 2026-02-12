import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-6 left-6 md:left-1/2 md:-translate-x-1/2 z-[9999]">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3 shadow-2xl">
        <div className="hidden md:block">
          <ul className="flex items-center justify-center">
            <li className="px-6">
              <Link
                to="/"
                className={`text-white font-light text-base transition-all duration-300 hover:text-amber-400 whitespace-nowrap ${
                  isActive('/') ? 'text-amber-400' : ''
                }`}
              >
                Accueil
              </Link>
            </li>
            <li className="px-6">
              <Link
                to="/reserver"
                className={`text-white font-light text-base transition-all duration-300 hover:text-amber-400 whitespace-nowrap ${
                  isActive('/reserver') ? 'text-amber-400' : ''
                }`}
              >
                Réserver
              </Link>
            </li>
            <li className="px-6">
              <Link
                to="/en-savoir-plus"
                className={`text-white font-light text-base transition-all duration-300 hover:text-amber-400 whitespace-nowrap ${
                  isActive('/en-savoir-plus') ? 'text-amber-400' : ''
                }`}
              >
                En savoir plus
              </Link>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-amber-400 transition-colors duration-300"
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full mt-2 left-0 w-48 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <ul className="py-2">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className={`block px-6 py-3 text-white font-light text-base transition-all duration-300 hover:bg-white/10 ${
                  isActive('/') ? 'text-amber-400 bg-white/5' : ''
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/reserver"
                onClick={closeMenu}
                className={`block px-6 py-3 text-white font-light text-base transition-all duration-300 hover:bg-white/10 ${
                  isActive('/reserver') ? 'text-amber-400 bg-white/5' : ''
                }`}
              >
                Réserver
              </Link>
            </li>
            <li>
              <Link
                to="/en-savoir-plus"
                onClick={closeMenu}
                className={`block px-6 py-3 text-white font-light text-base transition-all duration-300 hover:bg-white/10 ${
                  isActive('/en-savoir-plus') ? 'text-amber-400 bg-white/5' : ''
                }`}
              >
                En savoir plus
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
