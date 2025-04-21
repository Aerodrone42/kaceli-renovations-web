
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Zap, Droplet, Thermometer } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Seo from '@/components/Seo';

const Chaponost = () => {
  return (
    <>
      <Seo 
        title="Plombier, électricien et chauffagiste à Chaponost | Kaceli Rénovation Conseil"
        description="Kaceli Rénovation Conseil intervient à Chaponost pour tous travaux de plomberie, électricité et chauffage. Artisan local, devis gratuit, dépannage rapide."
      />
      
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            <strong>Kaceli Rénovation Conseil</strong> est votre artisan de confiance à <strong>Chaponost</strong> et dans les communes avoisinantes comme Francheville, Sainte-Foy-lès-Lyon, Brignais, Oullins, Saint-Genis-Laval et Craponne. 
            Experts en <strong>plomberie</strong>, <strong>électricité</strong> et <strong>chauffage</strong>, nous intervenons pour tous vos besoins d'installation, de dépannage et de rénovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ServiceCard 
              title="Électricité" 
              description="<strong>Installation électrique</strong>, <strong>mise aux normes</strong>, dépannage et rénovation électrique à <strong>Chaponost</strong>."
              icon={<Zap size={36} />}
              link="/nos-services#electricite"
            />
            <ServiceCard 
              title="Plomberie" 
              description="<strong>Dépannage plomberie</strong>, installation et réparation de sanitaires, robinetterie et canalisations à <strong>Chaponost</strong>."
              icon={<Droplet size={36} />}
              link="/nos-services#plomberie"
            />
            <ServiceCard 
              title="Chauffage" 
              description="<strong>Chauffagiste à Chaponost</strong> pour l'installation et l'entretien de tous types de <strong>chauffages</strong>."
              icon={<Thermometer size={36} />}
              link="/nos-services#chauffage"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2>Nos services d'électricité à Chaponost</h2>
            <p>
              <strong>Kaceli Rénovation Conseil</strong> est votre <strong>électricien à Chaponost</strong> pour tous vos travaux d'électricité. 
              De l'installation à la mise aux normes, en passant par le dépannage, nous intervenons rapidement et efficacement pour tous vos besoins.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Installation électrique</strong> complète pour constructions neuves et rénovations</li>
              <li><strong>Mise aux normes électriques</strong> (norme NF C 15-100)</li>
              <li>Installation et remplacement de tableaux électriques</li>
              <li>Pose de prises, interrupteurs et systèmes d'éclairage</li>
              <li><strong>Dépannage électrique</strong> 7j/7</li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/b8163cde-402e-4249-a7d5-f65402322a62.png" 
              alt="Services d'électricité à Chaponost" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/3c400882-bf59-4125-a54d-795bebada849.png" 
              alt="Services de plomberie à Chaponost" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2>Nos services de plomberie à Chaponost</h2>
            <p>
              Besoin d'un <strong>plombier à Chaponost</strong> ? <strong>Kaceli Rénovation Conseil</strong> propose une gamme complète 
              de services de plomberie, de l'installation à la réparation, en passant par le dépannage d'urgence.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Installation et remplacement de <strong>chauffe-eau</strong></li>
              <li>Installation de robinetterie et d'éviers</li>
              <li>Installation de douches, baignoires et sanitaires</li>
              <li><strong>Dépannage plomberie</strong> (fuites, canalisations bouchées)</li>
              <li>Rénovation complète de salles de bains</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <h2>Nos services de chauffage à Chaponost</h2>
            <p>
              <strong>Chauffagiste à Chaponost</strong>, <strong>Kaceli Rénovation Conseil</strong> vous accompagne dans le choix, 
              l'installation et l'entretien de votre système de chauffage. Nous vous proposons des solutions adaptées à vos besoins et à votre budget.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Installation de <strong>chauffages électriques</strong> (convecteurs, radiateurs à inertie)</li>
              <li>Installation de <strong>planchers chauffants</strong> hydrauliques ou électriques</li>
              <li>Installation et remplacement de chaudières</li>
              <li>Entretien et dépannage de systèmes de chauffage</li>
              <li>Conseils en économies d'énergie</li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/3657e19c-9901-4733-bf6e-8b0abf26f32a.png" 
              alt="Services de chauffage à Chaponost" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h2>Notre expertise à Chaponost</h2>
          <p>
            Installés à <strong>Chaponost</strong>, nous connaissons parfaitement la commune et ses spécificités. 
            Que vous habitiez dans le centre-ville ou dans les quartiers résidentiels, nous intervenons rapidement 
            pour tous vos besoins en <strong>électricité</strong>, <strong>plomberie</strong> et <strong>chauffage</strong>.
          </p>
          <p>
            Notre connaissance du terrain nous permet d'intervenir efficacement et de vous proposer des solutions adaptées 
            à votre logement, qu'il s'agisse d'une maison ancienne nécessitant une mise aux normes ou d'une construction récente.
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <h2>Faites confiance à un artisan local</h2>
          <p className="max-w-3xl mx-auto mb-8">
            En choisissant <strong>Kaceli Rénovation Conseil</strong>, vous optez pour un artisan local, réactif et à l'écoute de vos besoins. 
            Nous sommes fiers de servir les habitants de <strong>Chaponost</strong> et des communes avoisinantes, et nous mettons un point 
            d'honneur à offrir un service de qualité à tous nos clients.
          </p>
          
          <div className="mt-8">
            <Link to="/contact" className="btn-secondary inline-block mx-2">
              Demander un devis gratuit
            </Link>
            <a href="tel:0649092517" className="btn-primary inline-block mx-2">
              Appelez-nous au 06 49 09 25 17
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chaponost;
