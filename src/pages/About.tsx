import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ScrollReveal animation="fade-down">
              <h1 className="text-6xl md:text-7xl font-alex-brush text-white mb-4">En savoir plus</h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Découvrez notre magnifique demeure historique et contactez-nous pour toute question
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ScrollReveal animation="slide-left">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-4xl md:text-5xl font-alex-brush text-white mb-6">Coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-alex-brush text-white mb-1">Téléphone</h3>
                      <a href="tel:+33782233260" className="text-neutral-300 hover:text-amber-400 transition-colors">
                        +33 7 82 23 32 60
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-alex-brush text-white mb-1">Email</h3>
                      <a href="mailto:contact@presbytere-saintjulien.fr" className="text-neutral-300 hover:text-amber-400 transition-colors">
                        contact@presbytere-saintjulien.fr
                      </a>
                    </div>
                  </div>
                </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-left" delay={200}>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-4xl md:text-5xl font-alex-brush text-white mb-6">À propos du logement</h2>
                <div className="space-y-4 text-neutral-300">
                  <p className="leading-relaxed">
                    Bienvenue dans notre appartement loft de 135 m² situé dans une demeure historique
                    du XVIe siècle, ancien relais de chasse des Ducs de Wurtemberg, puis presbytère.
                  </p>
                  <p className="leading-relaxed">
                    Notre propriété offre un cadre exceptionnel alliant charme historique et confort
                    moderne. Profitez d'un spa privatif accessible toute l'année, d'une piscine chauffée,
                    et d'espaces de détente généreux.
                  </p>
                  <p className="leading-relaxed">
                    Situé dans un village paisible à 7 minutes de Montbéliard et 20 minutes de Belfort,
                    notre logement est idéal pour une escapade relaxante en famille ou entre amis.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-2xl md:text-3xl font-alex-brush text-white mb-3">Équipements principaux</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Spa intérieur privatif accessible 24h/24</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Piscine couverte chauffée à 30°C</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>3 chambres spacieuses</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Espace détente de 65 m²</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Véranda et terrasse privative</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Wi-Fi, cuisine équipée, linge fourni</span>
                      </li>
                    </ul>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-8">
              <ScrollReveal animation="slide-right">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 overflow-hidden h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.3375889684503!2d6.708606226482622!3d47.52229022118227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479215e2f655e51b%3A0x7d5e8506be584f4b!2sMeubl%C3%A9%20de%20Tourisme%20Saint%20Julien%20les%20Montb%C3%A9liard!5e0!3m2!1sfr!2sch!4v1770829855882!5m2!1sfr!2sch"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Le Presbytère"
                />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" delay={200}>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-4xl md:text-5xl font-alex-brush text-white mb-6">Règlement intérieur</h2>
                <div className="space-y-4 text-neutral-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <p>Respect strict de la tranquillité du voisinage : pas de fête, pas de nuisances sonores</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <p>Logement non-fumeur à l'intérieur</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <p>Spa et piscine accessibles aux enfants sous la responsabilité des parents</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <p>Arrivée autonome avec code d'accès fourni avant votre séjour</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <p>Discrétion et tranquillité garanties pour votre confort</p>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
