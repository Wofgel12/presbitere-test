import whatsappIcon from '../assets/download.svg';

export default function WhatsAppFAB() {
  const phoneNumber = '33782233260';
  const message = encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations sur votre hébergement.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
        <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
          <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
        </div>
      </div>
    </a>
  );
}
