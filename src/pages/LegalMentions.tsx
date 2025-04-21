
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';

const LegalMentions = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Seo
        title="Mentions légales | Kaceli Rénovation Conseil"
        description="Mentions légales de Kaceli Rénovation Conseil, votre artisan plombier, électricien et chauffagiste à Chaponost et environs."
      />
      
      <div className="mb-6">
        <Link to="/" className="flex items-center text-kaceli-blue hover:text-kaceli-orange transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Retour à l'accueil
        </Link>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-kaceli-blue mb-8">Mentions Légales</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-kaceli-blue mb-4">Informations légales</h2>
          <p className="mb-3">
            Le site kaceli-renovation-conseil.fr est édité par l'entreprise Kaceli Rénovation Conseil.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Raison sociale : Kaceli Rénovation Conseil</li>
            <li>Forme juridique : Entreprise individuelle</li>
            <li>Adresse : 2 Chemin des Landes, 69630 Chaponost</li>
            <li>SIRET : [Numéro SIRET]</li>
            <li>Téléphone : 06 49 09 25 17</li>
            <li>Email : kacelirenovationconseil@gmail.com</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-kaceli-blue mb-4">Directeur de la publication</h2>
          <p>Le directeur de la publication est Monsieur Kaceli, gérant de l'entreprise Kaceli Rénovation Conseil.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-kaceli-blue mb-4">Hébergement</h2>
          <p>Ce site est hébergé par [Nom et coordonnées de l'hébergeur].</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-kaceli-blue mb-4">Propriété intellectuelle</h2>
          <p className="mb-3">
            L'ensemble du contenu du site (textes, images, vidéos, etc.) est la propriété exclusive de Kaceli Rénovation Conseil ou de ses partenaires.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de Kaceli Rénovation Conseil.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-kaceli-blue mb-4">Politique de confidentialité</h2>
          <p className="mb-3">
            Kaceli Rénovation Conseil s'engage à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
          </p>
          <p className="mb-3">
            Les informations recueillies via notre formulaire de contact sont destinées uniquement à répondre à vos demandes et ne font l'objet d'aucune cession à des tiers.
          </p>
          <p>
            Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Pour exercer ces droits, vous pouvez nous contacter par email à l'adresse kacelirenovationconseil@gmail.com.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-kaceli-blue mb-4">Cookies</h2>
          <p className="mb-3">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment désactiver les cookies en paramétrant votre navigateur.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalMentions;
