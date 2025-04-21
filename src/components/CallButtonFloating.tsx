
import { Phone } from 'lucide-react';

const phone = '0649092517';

const CallButtonFloating = () => {
  return (
    <a
      href={`tel:${phone}`}
      className="fixed z-50 bottom-6 right-6 sm:bottom-8 sm:right-8 bg-kaceli-orange text-white rounded-full shadow-xl flex items-center px-5 py-3 gap-2 text-lg font-bold hover:bg-orange-600 transition-all animate-fade-in hover-glow focus:outline-none focus:ring-2 focus:ring-kaceli-blue group"
      aria-label="Appeler Kaceli Rénovation Conseil"
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,.16)" }}
    >
      <Phone size={22} className="shrink-0 group-hover:scale-110 transition-transform duration-300" />
      <span className="hidden xs:inline group-hover:translate-x-1 transition-transform duration-300">Appeler</span>
    </a>
  );
};

export default CallButtonFloating;
