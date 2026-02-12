import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-light text-xl mb-4">Le Presbytère</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Demeure historique du XVIe siècle offrant un hébergement de standing
              avec spa privatif et piscine chauffée.
            </p>
          </div>

          <div>
            <h3 className="text-white font-light text-xl mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <p className="text-neutral-400 text-sm">
                  12 Grande Rue<br />
                  25550 Saint-Julien-lès-Montbéliard
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+33782233260" className="text-neutral-400 text-sm hover:text-amber-400 transition-colors">
                  +33 7 82 23 32 60
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:contact@presbytere-saintjulien.fr" className="text-neutral-400 text-sm hover:text-amber-400 transition-colors">
                  contact@presbytere-saintjulien.fr
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-light text-xl mb-4">Réservation</h3>
            <div className="space-y-3">
              <a
                href="https://www.booking.com/hotel/fr/le-presbytere-saint-julien-les-montbeliard1.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-400 text-sm hover:text-amber-400 transition-colors"
              >
                Booking.com
              </a>
              <a
                href="https://www.airbnb.fr/rooms/40579680"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-400 text-sm hover:text-amber-400 transition-colors"
              >
                Airbnb
              </a>
              <Link
                to="/en-savoir-plus"
                className="block text-neutral-400 text-sm hover:text-amber-400 transition-colors"
              >
                Nous contacter
              </Link>

              <p className="text-neutral-400 text-sm mt-4">
                À partir de <span className="text-amber-400">100€/nuit</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Le Presbytère. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
