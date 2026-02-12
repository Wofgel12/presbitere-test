import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X, ChevronLeft, ChevronRight, Castle, Cat, Car, TreePine, Globe, Gift, Maximize2, Sparkles, Waves, Star, Leaf, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const bgImages = Array.from({ length: 136 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `/src/assets/bg/ezgif-frame-${num}.jpg`;
});

const galleryImages = [
  '/src/assets/img-show/1.jpeg',
  '/src/assets/img-show/2.jpg',
  '/src/assets/img-show/3.jpg',
  '/src/assets/img-show/4.jpg',
  '/src/assets/img-show/5.jpg',
  '/src/assets/img-show/6.jpg',
  '/src/assets/img-show/7.jpeg',
  '/src/assets/img-show/8.jpg',
  '/src/assets/img-show/9.jpg',
  '/src/assets/img-show/9-1.jpg',
  '/src/assets/img-show/10.jpg',
  '/src/assets/img-show/10.1.jpg',
  '/src/assets/img-show/10.2.jpg'
];

const images = [
  '/1.jpg',
  '/unnamed.jpg',
  '/548079987.jpg',
  '/af0a6272b4a381979b8bb4b8240ddaca-img-20211125-211148-1600x0.jpg'
];

const pointsOfInterest = [
  {
    id: 1,
    icon: Castle,
    title: "Château de Montbéliard",
    description: "Forteresse médiévale dominant la ville, offrant une vue panoramique exceptionnelle",
    fullDescription: "Dominant la ville, le Château de Montbéliard propose un mélange d'histoire, d'architecture et d'expositions culturelles. Une visite agréable pour découvrir le patrimoine local tout en profitant d'un beau panorama.",
    duration: "15 minutes en voiture",
    image: "/src/assets/prox/c1.webp",
    link: "https://www.chateaumontbeliardwurtemberg.fr/"
  },
  {
    id: 2,
    icon: Cat,
    title: "Lion de Belfort",
    description: "Monument emblématique de la ville, œuvre monumentale de Frédéric Auguste Bartholdi",
    fullDescription: "Monument emblématique sculpté par Bartholdi, le Lion de Belfort symbolise la résistance de la ville. Un arrêt incontournable pour les amateurs d'histoire et de belles vues.",
    duration: "25 minutes en voiture",
    image: "/src/assets/prox/l1.jpg",
    link: "https://www.attractive.bourgognefranchecomte.fr/le-lion-et-la-citadelle-de-belfort-sacres-monument-prefere-des-francais/"
  },
  {
    id: 3,
    icon: Car,
    title: "Musée de l'Aventure Peugeot",
    description: "Plongez dans l'histoire automobile française à travers 200 ans d'innovation",
    fullDescription: "À Sochaux, ce musée retrace l'épopée de Peugeot à travers véhicules mythiques et objets historiques. Une sortie ludique et immersive, accessible à tous.",
    duration: "15 minutes en voiture",
    image: "/src/assets/prox/p1.jpg",
    link: "https://laventure-association.com/laventure-peugeot/le-musee-de-laventure-peugeot/"
  },
  {
    id: 4,
    icon: TreePine,
    title: "Ballon d'Alsace",
    description: "Sommet vosgien idéal pour la randonnée, le ski et les panoramas à couper le souffle",
    fullDescription: "Site naturel emblématique des Vosges, le Ballon d'Alsace est idéal pour les randonnées, les paysages grandioses et les activités de plein air, été comme hiver.",
    duration: "55 minutes en voiture",
    image: "/src/assets/prox/b1.jpg",
    link: "https://www.ballondalsace.fr/"
  },
  {
    id: 5,
    icon: Globe,
    title: "Suisse & Allemagne à proximité",
    description: "Explorez des villes Suisses et Allemandes",
    fullDescription: "Grâce à la situation géographique, il est facile de partir à la journée en Suisse ou en Allemagne pour découvrir de nouvelles villes, cultures et paysages variés.",
    duration: "1 heure en voiture",
    image: "/src/assets/prox/pa1.jpg",
    link: "https://www.google.com/maps/dir/Saint-Julien-l%C3%A8s-Montb%C3%A9liard,+25550,+France/47.5898699,7.5890378/@47.048001,7.6154627,8.38z/data=!4m10!4m9!1m5!1m1!1s0x479214f965abe0f1:0x200013c6f2a157a6!2m2!1d6.711542!2d47.521939!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
    
  },
  {
    id: 6,
    icon: Gift,
    title: "Marchés de Noël de Colmar, Mulhouse et Strasbourg",
    description: "Les célèbres marchés de Noël alsaciens à Colmar, Mulhouse et Strasbourg",
    fullDescription: "En hiver, ces villes alsaciennes accueillent certains des plus beaux marchés de Noël d'Europe, entre chalets traditionnels, spécialités gourmandes et ambiance féerique.",
    duration: "En saison hivernale",
    image: "/src/assets/prox/n1.png",
    link: "https://noel.strasbourg.eu/"
  }
];

const reviews = [
  {
    author: "Rayhana Q",
    rating: 5,
    date: "il y a 2 mois",
    text: "Nous avons passé un superbe week-end. Logement très propre, la piscine et le jacuzzi sont incroyables. Hôtes au top, disponible et arrangeants. Merci à vous !"
  },
  {
    author: "Marine B",
    rating: 5,
    date: "il y a 3 mois",
    text: "Logement très agréable et conforme aux photos. Piscine et spa privatifs au top ! Hôtes très accueillants et disponibles. Je recommande vivement."
  },
  {
    author: "Thomas L",
    rating: 5,
    date: "il y a 4 mois",
    text: "Séjour parfait dans ce magnifique logement. Le spa est accessible à toute heure, la piscine chauffée est un vrai plus. Merci pour l'accueil chaleureux !"
  }
];

const faqs = [
  {
    question: "Quels sont les horaires d'accès au spa et à la piscine ?",
    answer: "Le spa intérieur privatif est accessible 24h/24 toute l'année sans limite d'usage. La piscine chauffée à 30°C est disponible du printemps à l'automne en journée. Ces équipements sont exclusivement réservés aux locataires."
  },
  {
    question: "Combien de personnes peuvent séjourner dans le logement ?",
    answer: "Le logement peut accueillir confortablement jusqu'à 6 personnes : 4 adultes et 2 enfants. Il dispose de 3 chambres avec literie fournie, linge de lit et serviettes inclus."
  },
  {
    question: "Les animaux de compagnie sont-ils acceptés ?",
    answer: "Oui, un petit animal de compagnie est accepté sur accord préalable du propriétaire. Merci de nous contacter avant votre réservation pour confirmer."
  },
  {
    question: "À quelle distance se trouve le logement des principales villes ?",
    answer: "Le logement est idéalement situé dans un village paisible à 7 minutes de Montbéliard et 20 minutes de Belfort. Parfait pour allier tranquillité et proximité des commodités."
  }
];

export default function Home() {
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedPoi, setSelectedPoi] = useState<number | null>(null);

  const handleVideoEnd = () => {
    setGalleryVisible(true);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="relative h-screen overflow-hidden bg-black">
        {!galleryVisible && (
          <>
            <video
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/src/assets/img-show/pres-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20" />
          </>
        )}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50" style={{ transform: 'translateY(-10%)' }}>
          <h1
            className={`font-alex-brush text-white text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] transition-all duration-700 ${
              galleryVisible ? 'drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]' : 'drop-shadow-2xl'
            }`}
            style={galleryVisible ? { textShadow: '0 0 40px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.7)' } : {}}
          >
            {['L', 'e', ' ', 'P', 'r', 'e', 's', 'b', 'y', 't', 'è', 'r', 'e'].map((letter, index) => (
              <span
                key={index}
                className="animate-letter"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
        </div>

        {galleryVisible && (
          <div className="h-full w-full pt-0 px-2 pb-2 flex items-center justify-center animate-zoom-in-from-center">
            <div className="w-full max-w-7xl h-[90vh] flex flex-col md:grid md:grid-cols-2 gap-3">
              <div
                onClick={() => openLightbox(0)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group h-[50%] md:h-full"
              >
                <img
                  src="/src/assets/img-show/1.jpeg"
                  alt="Vue principale"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 h-[50%] md:h-full md:grid-rows-2">
                {galleryImages.slice(1, 5).map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx + 1)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer group ${idx >= 2 ? 'hidden md:block' : ''} ${idx === 0 ? 'order-2 md:order-none' : ''} ${idx === 1 ? 'order-1 md:order-none' : ''}`}
                  >
                    <img
                      src={img}
                      alt={`Vue ${idx + 2}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {idx === 1 && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center md:hidden">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(0);
                          }}
                          className="px-4 py-2 bg-white text-black rounded-xl text-sm font-medium hover:bg-neutral-100 transition-colors"
                        >
                          Voir toutes les photos
                        </button>
                      </div>
                    )}
                    {idx === 3 && (
                      <div className="absolute inset-0 bg-black/40 items-center justify-center hidden md:flex">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(0);
                          }}
                          className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-neutral-100 transition-colors"
                        >
                          Voir toutes les photos
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="absolute bottom-8 left-8 flex gap-4 z-50">
          <a
            href="https://www.booking.com/hotel/fr/le-presbytere-saint-julien-les-montbeliard1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <span className="text-white font-bold text-xs">Booking</span>
          </a>
          <a
            href="https://www.airbnb.fr/rooms/40579680"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <span className="text-white font-bold text-xs">Airbnb</span>
          </a>
          <Link
            to="/en-savoir-plus"
            className="w-16 h-16 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <span className="text-white font-bold text-xs text-center leading-tight">Nous<br />contacter</span>
          </Link>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 backdrop-blur-xl px-4 py-2 rounded-full">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>

          <img
            src={galleryImages[lightboxIndex]}
            alt={`Photo ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="py-20 px-4 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <ScrollReveal animation="slide-left">
              <h2 className="text-5xl md:text-6xl font-alex-brush text-white">Pourquoi nous ?</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5">
                <div className="flex gap-3 items-start">
                  <Castle className="w-6 h-6 flex-shrink-0 text-amber-400" strokeWidth={1.5} />
                  <p className="text-neutral-200 leading-relaxed text-base">
                    Demeure historique du XVIe siècle (Ducs de Wurtemberg)
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <Maximize2 className="w-6 h-6 flex-shrink-0 text-amber-400" strokeWidth={1.5} />
                  <p className="text-neutral-200 leading-relaxed text-base">
                    135 m² d'espace généreux pour se sentir vraiment à l'aise
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <Sparkles className="w-6 h-6 flex-shrink-0 text-amber-400" strokeWidth={1.5} />
                  <p className="text-neutral-200 leading-relaxed text-base">
                    Spa intérieur privatif accessible toute l'année, sans limite d'usage
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <Waves className="w-6 h-6 flex-shrink-0 text-amber-400" strokeWidth={1.5} />
                  <p className="text-neutral-200 leading-relaxed text-base">
                    Piscine couverte chauffée à 30 °C (du printemps à l'automne)
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <Leaf className="w-6 h-6 flex-shrink-0 text-amber-400" strokeWidth={1.5} />
                  <p className="text-neutral-200 leading-relaxed text-base">
                    Calme & sérénité absolus pour une vraie parenthèse détente
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <Heart className="w-6 h-6 flex-shrink-0 text-amber-400" strokeWidth={1.5} />
                  <p className="text-neutral-200 leading-relaxed text-base">
                    Idéal pour une escapade romantique ou un séjour cocooning
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-amber-400 font-light text-lg">À partir de seulement 100€/nuit !</p>
                  <p className="text-neutral-400 text-sm">Tarif modulable selon saison et durée</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal animation="slide-right">
              <h2 className="text-5xl md:text-6xl font-alex-brush text-white">Avis de nos clients</h2>
            </ScrollReveal>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div
                    className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 ${index === 2 ? 'hidden md:block' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-medium">{review.author}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-amber-400">★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-neutral-300 text-sm mb-2">{review.text}</p>
                    <p className="text-neutral-500 text-xs">{review.date}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/place/Meubl%C3%A9+de+Tourisme+Saint+Julien+les+Montb%C3%A9liard/@47.5222938,6.7086062,17z/data=!4m15!1m2!2m1!1sle+presbyth%C3%A8re+saint-julien-l%C3%A8s-monb%C3%A9liar!3m11!1s0x479215e2f655e51b:0x7d5e8506be584f4b!5m2!4m1!1i2!8m2!3d47.5222912!4d6.7111821!9m1!1b1!15sCi1sZSBwcmVzYnl0w6hyZSBzYWludC1qdWxpZW4tbMOocy1tb250YsOpbGlhcmRaLyItbGUgcHJlc2J5dMOocmUgc2FpbnQganVsaWVuIGzDqHMgbW9udGLDqWxpYXJkkgERYmVkX2FuZF9icmVha2Zhc3SaASRDaGREU1VoTk1HOW5TMFZRWm5rNGNVeDVibmUyWTIxQlJSQULgAQD6AQQIABA7!16s%2Fg%2F11rqst9n9r?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-300 font-light"
            >
              Voir tous nos avis
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10"/>
                <path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-down">
            <h2 className="text-5xl md:text-6xl font-alex-brush text-white mb-8">À propos du logement</h2>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={200}>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
              <p>
                Bienvenue dans notre magnifique appartement loft de 135 m² situé dans une demeure historique
                du XVIe siècle, ancien relais de chasse des Ducs de Wurtemberg, puis presbytère du village.
              </p>
              <p>
                Notre propriété offre un cadre exceptionnel alliant charme historique et confort moderne.
                Profitez d'un spa intérieur privatif accessible 24h/24 toute l'année, d'une piscine couverte
                chauffée à 30°C disponible du printemps à l'automne, et d'espaces de détente généreux pour
                vous ressourcer en toute tranquillité.
              </p>
              <p>
                Situé dans un village paisible à seulement 7 minutes de Montbéliard et 20 minutes de Belfort,
                notre logement est l'endroit idéal pour une escapade relaxante en famille ou entre amis, tout
                en profitant de la proximité des commodités et des attractions régionales.
              </p>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-down">
            <h2 className="text-5xl md:text-6xl font-alex-brush text-white text-center mb-4">Points d'intérêts à proximité</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
              Découvrez les merveilles de la région, entre patrimoine historique, nature préservée et frontières européennes
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pointsOfInterest.map((poi, index) => (
              <ScrollReveal key={poi.id} animation="zoom" delay={0}>
                <div
                  onClick={() => setSelectedPoi(poi.id)}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={poi.image}
                    alt={poi.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <poi.icon className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-white mb-2">{poi.title}</h3>
                  <p className="text-neutral-300 text-sm mb-3 leading-relaxed">
                    {poi.description}
                  </p>
                  <p className="text-amber-400 text-sm font-medium">{poi.duration}</p>
                </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="scale">
            <h2 className="text-5xl md:text-6xl font-alex-brush text-white text-center mb-12">Questions fréquentes</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
                >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <span className="text-white font-light text-lg pr-4">{faq.question}</span>
                  <Plus
                    className={`w-6 h-6 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {selectedPoi !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedPoi(null)}
        >
          <div
            className="relative bg-neutral-900 border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPoi(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {pointsOfInterest.find(poi => poi.id === selectedPoi) && (
              <>
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                  <img
                    src={pointsOfInterest.find(poi => poi.id === selectedPoi)!.image}
                    alt={pointsOfInterest.find(poi => poi.id === selectedPoi)!.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    {(() => {
                      const Icon = pointsOfInterest.find(poi => poi.id === selectedPoi)!.icon;
                      return <Icon className="w-8 h-8 text-amber-400" strokeWidth={1.5} />;
                    })()}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-light text-white mb-4">
                    {pointsOfInterest.find(poi => poi.id === selectedPoi)!.title}
                  </h3>
                  <p className="text-neutral-300 text-base leading-relaxed mb-6">
                    {pointsOfInterest.find(poi => poi.id === selectedPoi)!.fullDescription}
                  </p>
                  <p className="text-amber-400 text-lg font-medium mb-8">
                    {pointsOfInterest.find(poi => poi.id === selectedPoi)!.duration}
                  </p>

                  <a
                    href={pointsOfInterest.find(poi => poi.id === selectedPoi)!.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-amber-400 hover:bg-amber-500 text-black font-medium rounded-full transition-colors duration-300"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10"/>
                      <path d="M7 17 17 7"/>
                    </svg>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
