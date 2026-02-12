import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import airbnbLogo from '../assets/pngkey.com-airbnb-logo-png-605967.png';
import bookingLogo from '../assets/png-transparent-booking-com-app-logo-tech-companies-thumbnail.png';

export default function Booking() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.airbnb.fr/embeddable/airbnb_jssdk';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-alex-brush text-white mb-4">Réservez votre séjour</h1>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Choisissez votre plateforme préférée pour réserver votre escapade dans notre demeure d'exception
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="group relative">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="flex items-center gap-4">
                    <img src={airbnbLogo} alt="Airbnb" className="w-12 h-12 object-contain" />
                    <h2 className="text-4xl md:text-5xl font-alex-brush text-white">Airbnb</h2>
                  </div>
                  <div
                    className="airbnb-embed-frame"
                    data-id="40579680"
                    data-view="home"
                    data-hide-price="true"
                    style={{ width: '100%', maxWidth: '450px', height: '300px', margin: 'auto' }}
                  >
                    <a href="https://www.airbnb.fr/rooms/40579680?guests=1&adults=1&s=66&source=embed_widget">
                      Voir sur Airbnb
                    </a>
                    <a
                      href="https://www.airbnb.fr/rooms/40579680?guests=1&adults=1&s=66&source=embed_widget"
                      rel="nofollow"
                    >
                      Maison d'hôtes · Saint-Julien-lès-Montbéliard · ★4,92 · 3 chambres · 5 lits · 2&nbsp;salles de bain et 1&nbsp;toilette
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.booking.com/hotel/fr/le-presbytere-saint-julien-les-montbeliard1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="flex items-center gap-4">
                    <img src={bookingLogo} alt="Booking.com" className="w-12 h-12 object-contain" />
                    <h2 className="text-4xl md:text-5xl font-alex-brush text-white">Booking.com</h2>
                  </div>
                  <p className="text-neutral-300">
                    Réservez en toute confiance avec la plateforme mondiale de réservation d'hébergements
                  </p>
                  <div className="flex items-center gap-2 text-amber-400 group-hover:gap-4 transition-all duration-300">
                    <span className="font-light">Réserver maintenant</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-alex-brush text-white mb-6 text-center">Informations de réservation</h3>
            <div className="space-y-4 text-neutral-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <p><span className="text-amber-400 font-medium">Tarif :</span> À partir de 100€/nuit, modulable selon saison et durée</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <p><span className="text-amber-400 font-medium">Capacité :</span> Jusqu'à 6 personnes (4 adultes + 2 enfants)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <p><span className="text-amber-400 font-medium">Arrivée :</span> Autonome avec code d'accès transmis avant votre séjour</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <p><span className="text-amber-400 font-medium">Équipements :</span> Spa privatif 24h/24, piscine chauffée (printemps-automne)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <p><span className="text-amber-400 font-medium">Animaux :</span> Petit animal accepté sur accord préalable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
