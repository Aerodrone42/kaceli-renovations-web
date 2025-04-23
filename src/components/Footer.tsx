
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kaceli-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coordonnées */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kaceli Rénovation Conseil</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-kaceli-orange mt-1 flex-shrink-0" size={18} />
                <span>2 Chemin des Landes, 69630 Chaponost</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-kaceli-orange flex-shrink-0" size={18} />
                <a href="tel:0649092517" className="hover:underline">06 49 09 25 17</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-kaceli-orange flex-shrink-0" size={18} />
                <a href="mailto:kacelirenovationconseil@gmail.com" className="hover:underline">kacelirenovationconseil@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">Accueil</Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:underline">À propos</Link>
              </li>
              <li>
                <Link to="/nos-services" className="hover:underline">Nos services</Link>
              </li>
              <li>
                <Link to="/avis-clients" className="hover:underline">Avis clients</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Zones d'intervention</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link to="/chaponost" className="hover:underline">Chaponost</Link>
              </li>
              <li>
                <Link to="/brignais" className="hover:underline">Brignais</Link>
              </li>
              <li>
                <Link to="/francheville" className="hover:underline">Francheville</Link>
              </li>
              <li>
                <Link to="/givors" className="hover:underline">Givors</Link>
              </li>
              <li>
                <Link to="/venissieux" className="hover:underline">Vénissieux</Link>
              </li>
              <li>
                <Link to="/tassin-la-demi-lune" className="hover:underline">Tassin-la-Demi-Lune</Link>
              </li>
              <li>
                <Link to="/oullins" className="hover:underline">Oullins</Link>
              </li>
              <li>
                <Link to="/lyon-5" className="hover:underline">Lyon 5e</Link>
              </li>
              <li>
                <Link to="/saint-genis-laval" className="hover:underline">Saint-Genis-Laval</Link>
              </li>
              <li>
                <Link to="/pierre-benite" className="hover:underline">Pierre-Bénite</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center space-y-3">
          <p>
            &copy; {new Date().getFullYear()} Kaceli Rénovation Conseil. Tous droits réservés.{" "}
            <a
              href="https://www.site-internet-sans-abonnement.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kaceli-orange hover:underline"
            >
              créé par Aerodrone Multiservices
            </a>
          </p>
          
          {/* New Guarantee Section */}
          <div className="mt-4 text-sm space-y-2">
            <div className="flex justify-center items-center space-x-4">
              <img 
                src="/lovable-uploads/e733ee17-ebea-4670-aaba-36379c8469d8.png" 
                alt="Garantie Décennale" 
                className="h-16 w-16"
              />
              <div>
                <p>Garantie décennale - April - 68 Rue Victor Hugo, 69200 Vénissieux, France</p>
                <p>Contrat : 25045996791 | Référence client : W4609213</p>
                <p>SIRET : 51413734800033</p>
              </div>
            </div>
          </div>

          <p className="text-sm">
            <Link to="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
